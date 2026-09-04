import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { HttpClient } from "../httpClient.js";
import { formatApiError } from "../httpClient.js";
import {
  assignUniqueToolNames,
  loadOperations,
} from "../openapi/loadSpecs.js";
import { buildMultipartFormData } from "../openapi/multipart.js";
import { buildToolInputMeta } from "../openapi/toZod.js";
import type { ParsedOperation } from "../openapi/types.js";

export interface ToolDescriptor {
  name: string;
  description: string;
  method: string;
  path: string;
  sourceFile: string;
  operationId: string;
}

export function listToolDescriptors(specsDir?: string): ToolDescriptor[] {
  const operations = loadOperations(specsDir);
  const names = assignUniqueToolNames(operations);
  return operations.map((op) => {
    const key = `${op.method.toUpperCase()} ${op.path}`;
    return {
      name: names.get(key)!,
      description: buildDescription(op),
      method: op.method.toUpperCase(),
      path: op.path,
      sourceFile: op.sourceFile,
      operationId: op.operationId,
    };
  });
}

export function registerToolsFromSpecs(server: McpServer, http: HttpClient, specsDir?: string): number {
  const operations = loadOperations(specsDir);
  const names = assignUniqueToolNames(operations);

  for (const op of operations) {
    const key = `${op.method.toUpperCase()} ${op.path}`;
    const toolName = names.get(key)!;
    const description = buildDescription(op);
    const meta = buildToolInputMeta(op);

    const handler = async (args: Record<string, unknown> = {}) => {
      try {
        return await executeOperation(http, op, meta, args);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          content: [{ type: "text" as const, text: `Ошибка: ${message}` }],
          isError: true,
        };
      }
    };

    if (Object.keys(meta.zodShape).length === 0) {
      server.tool(toolName, description, async () => handler({}));
    } else {
      server.tool(toolName, description, meta.zodShape, handler);
    }
  }

  return operations.length;
}

function buildDescription(op: ParsedOperation): string {
  const parts = [
    op.summary,
    op.description && op.description !== op.summary ? op.description : undefined,
    `${op.method.toUpperCase()} ${op.path}`,
  ].filter(Boolean);
  return parts.join(" — ");
}

async function executeOperation(
  http: HttpClient,
  op: ParsedOperation,
  meta: ReturnType<typeof buildToolInputMeta>,
  args: Record<string, unknown>,
) {
  const pathParams: Record<string, unknown> = {};
  for (const param of op.parameters) {
    if (param.in !== "path") continue;
    const key =
      param.name in args
        ? param.name
        : `path_${param.name}` in args
          ? `path_${param.name}`
          : null;
    if (key) pathParams[param.name] = args[key];
  }

  const query: Record<string, unknown> = {};
  for (const param of op.parameters) {
    if (param.in !== "query") continue;
    const key =
      param.name in args
        ? param.name
        : `query_${param.name}` in args
          ? `query_${param.name}`
          : null;
    if (key && args[key] !== undefined) query[param.name] = args[key];
  }

  const headers: Record<string, string> = {};
  for (const param of op.parameters) {
    if (param.in !== "header") continue;
    const key =
      param.name in args
        ? param.name
        : `header_${param.name}` in args
          ? `header_${param.name}`
          : null;
    if (key && args[key] !== undefined) headers[param.name] = String(args[key]);
  }

  let data: unknown;
  let isMultipart = false;

  if (meta.isMultipart) {
    isMultipart = true;
    const bodyFieldNames = Object.values(meta.bodyFieldMap);
    // для multipart ключи в args: api-имя поля или body_*, файлы — fieldFilePath
    const formArgs: Record<string, unknown> = { ...args };
    for (const [argKey, apiName] of Object.entries(meta.bodyFieldMap)) {
      if (argKey !== apiName && args[argKey] !== undefined) {
        formArgs[apiName] = args[argKey];
      }
    }
    data = buildMultipartFormData(formArgs, bodyFieldNames, meta.fileFieldNames);
    Object.assign(headers, (data as { getHeaders: () => Record<string, string> }).getHeaders());
  } else if (meta.bodyAsObject) {
    data = args.body;
  } else if (Object.keys(meta.bodyFieldMap).length > 0) {
    const body: Record<string, unknown> = {};
    for (const [argKey, apiName] of Object.entries(meta.bodyFieldMap)) {
      if (args[argKey] !== undefined) body[apiName] = args[argKey];
    }
    data = body;
  }

  const response = await http.request({
    method: op.method,
    path: op.path,
    pathParams,
    query,
    data,
    headers,
    isMultipart,
  });

  if (response.status >= 400) {
    return {
      content: [
        {
          type: "text" as const,
          text: formatApiError(response.status, response.data),
        },
      ],
      isError: true,
    };
  }

  const text =
    typeof response.data === "string"
      ? response.data
      : JSON.stringify(response.data, null, 2);

  return {
    content: [{ type: "text" as const, text: text || `OK (${response.status})` }],
  };
}
