import fs from "node:fs";
import path from "node:path";
import { SPECS_DIR } from "../config.js";
import type {
  HttpMethod,
  OpenApiDocument,
  OpenApiOperation,
  OpenApiParameter,
  OpenApiPathItem,
  ParsedOperation,
} from "./types.js";

const HTTP_METHODS: HttpMethod[] = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options",
];

const AUTH_SPEC_FILE = "auth.json";

function pathToCamelCase(apiPath: string): string {
  return apiPath
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      const cleaned = segment.replace(/[{}]/g, "");
      return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).replace(/[^a-zA-Z0-9]/g, "");
    })
    .join("");
}

export function defaultOperationId(method: HttpMethod, apiPath: string): string {
  const methodPart = method.charAt(0).toUpperCase() + method.slice(1);
  return `${methodPart}${pathToCamelCase(apiPath)}`;
}

export function pathSuffixForName(apiPath: string): string {
  return apiPath.replace(/^\//, "").replace(/[{}]/g, "").replace(/[^a-zA-Z0-9]+/g, "_");
}

function pickContentType(
  content?: Record<string, unknown>,
): { contentType?: string; isMultipart: boolean } {
  if (!content) return { isMultipart: false };
  if (content["multipart/form-data"]) {
    return { contentType: "multipart/form-data", isMultipart: true };
  }
  if (content["application/json"]) {
    return { contentType: "application/json", isMultipart: false };
  }
  const first = Object.keys(content)[0];
  return {
    contentType: first,
    isMultipart: first === "multipart/form-data",
  };
}

function mergeParameters(
  pathItem: OpenApiPathItem,
  op: OpenApiOperation,
): OpenApiParameter[] {
  const map = new Map<string, OpenApiParameter>();
  for (const p of pathItem.parameters ?? []) {
    map.set(`${p.in}:${p.name}`, p);
  }
  for (const p of op.parameters ?? []) {
    map.set(`${p.in}:${p.name}`, p);
  }
  return [...map.values()];
}

/**
 * Загружает все OpenAPI из spec/, исключает auth.json из tools,
 * дедуплицирует по METHOD + path (первая побеждает, файлы по алфавиту).
 */
export function loadOperations(specsDir: string = SPECS_DIR): ParsedOperation[] {
  if (!fs.existsSync(specsDir)) {
    throw new Error(`Каталог спек не найден: ${specsDir}`);
  }

  const files = fs
    .readdirSync(specsDir)
    .filter((f) => f.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b));

  const seenPaths = new Set<string>();
  const operations: ParsedOperation[] = [];

  for (const file of files) {
    if (file === AUTH_SPEC_FILE) continue;

    const fullPath = path.join(specsDir, file);
    const doc = JSON.parse(fs.readFileSync(fullPath, "utf8")) as OpenApiDocument;
    const schemas = doc.components?.schemas ?? {};

    for (const [apiPath, pathItem] of Object.entries(doc.paths ?? {})) {
      if (!pathItem || typeof pathItem !== "object") continue;

      for (const method of HTTP_METHODS) {
        const op = pathItem[method];
        if (!op) continue;

        const key = `${method.toUpperCase()} ${apiPath}`;
        if (seenPaths.has(key)) continue;
        seenPaths.add(key);

        const { contentType, isMultipart } = pickContentType(op.requestBody?.content);
        const operationId = op.operationId || defaultOperationId(method, apiPath);

        operations.push({
          sourceFile: file,
          method,
          path: apiPath,
          operationId,
          summary: op.summary,
          description: op.description,
          parameters: mergeParameters(pathItem, op),
          requestBody: op.requestBody,
          contentType,
          isMultipart,
          schemas,
        });
      }
    }
  }

  return operations;
}

export function assignUniqueToolNames(operations: ParsedOperation[]): Map<string, string> {
  /** operation key (method+path) → tool name */
  const names = new Map<string, string>();
  const used = new Map<string, string>(); // toolName → first key

  for (const op of operations) {
    const key = `${op.method.toUpperCase()} ${op.path}`;
    let name = sanitizeToolName(op.operationId);

    if (used.has(name) && used.get(name) !== key) {
      name = sanitizeToolName(`${op.operationId}__${pathSuffixForName(op.path)}`);
    }

    // если всё ещё коллизия — добавим method
    if (used.has(name) && used.get(name) !== key) {
      name = sanitizeToolName(`${op.method}_${pathSuffixForName(op.path)}`);
    }

    let suffix = 2;
    const base = name;
    while (used.has(name) && used.get(name) !== key) {
      name = `${base}_${suffix++}`;
    }

    used.set(name, key);
    names.set(key, name);
  }

  return names;
}

/** MCP tool names: буквы, цифры, _ - */
export function sanitizeToolName(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/_+/g, "_");
  if (!cleaned) return "unnamed_tool";
  if (/^[0-9]/.test(cleaned)) return `op_${cleaned}`;
  return cleaned.slice(0, 128);
}

export function countBySourceFile(operations: ParsedOperation[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const op of operations) {
    counts[op.sourceFile] = (counts[op.sourceFile] ?? 0) + 1;
  }
  return counts;
}
