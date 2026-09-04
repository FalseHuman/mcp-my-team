import { z, type ZodTypeAny } from "zod";
import type { OpenApiParameter, OpenApiSchema, ParsedOperation } from "./types.js";

const MAX_DEPTH = 6;

function resolveRef(
  schema: OpenApiSchema | undefined,
  components: Record<string, OpenApiSchema>,
  seen: Set<string>,
): OpenApiSchema | undefined {
  if (!schema?.$ref) return schema;
  const ref = schema.$ref;
  const match = ref.match(/^#\/components\/schemas\/(.+)$/);
  if (!match) return { type: "object" };
  const name = match[1];
  if (seen.has(name)) return { type: "object" };
  seen.add(name);
  const resolved = components[name];
  if (!resolved) return { type: "object" };
  return resolveRef(resolved, components, seen) ?? resolved;
}

function openApiTypeToZod(
  schema: OpenApiSchema | undefined,
  components: Record<string, OpenApiSchema>,
  depth: number,
): ZodTypeAny {
  if (!schema || depth > MAX_DEPTH) return z.unknown();

  const resolved = resolveRef(schema, components, new Set()) ?? schema;

  if (resolved.oneOf?.length) {
    return openApiTypeToZod(resolved.oneOf[0], components, depth + 1);
  }
  if (resolved.anyOf?.length) {
    return openApiTypeToZod(resolved.anyOf[0], components, depth + 1);
  }
  if (resolved.allOf?.length) {
    // упрощённо: берём первое или object merge
    return openApiTypeToZod(resolved.allOf[0], components, depth + 1);
  }

  const rawType = resolved.type;
  const type = Array.isArray(rawType) ? rawType.find((t) => t !== "null") : rawType;

  let zod: ZodTypeAny;

  switch (type) {
    case "string":
      if (resolved.format === "binary") {
        // для multipart binary обрабатываем отдельно
        zod = z.string();
      } else if (resolved.enum?.length) {
        const values = resolved.enum.map(String);
        zod =
          values.length === 1
            ? z.literal(values[0])
            : z.enum(values as [string, ...string[]]);
      } else {
        zod = z.string();
      }
      break;
    case "integer":
    case "number":
      zod = z.number();
      break;
    case "boolean":
      zod = z.boolean();
      break;
    case "array":
      zod = z.array(openApiTypeToZod(resolved.items, components, depth + 1));
      break;
    case "object":
    default: {
      if (resolved.properties) {
        const shape: Record<string, ZodTypeAny> = {};
        const required = new Set(resolved.required ?? []);
        for (const [key, prop] of Object.entries(resolved.properties)) {
          let field = openApiTypeToZod(prop, components, depth + 1);
          if (prop.description) field = field.describe(prop.description);
          if (!required.has(key)) field = field.optional();
          shape[key] = field;
        }
        zod = z.object(shape).passthrough();
      } else if (resolved.additionalProperties) {
        const valueSchema =
          typeof resolved.additionalProperties === "object"
            ? openApiTypeToZod(resolved.additionalProperties, components, depth + 1)
            : z.unknown();
        zod = z.record(valueSchema);
      } else if (!type) {
        zod = z.unknown();
      } else {
        zod = z.record(z.unknown());
      }
      break;
    }
  }

  if (resolved.nullable) {
    zod = zod.nullable();
  }
  if (resolved.description) {
    zod = zod.describe(resolved.description);
  }
  return zod;
}

function parameterToZod(param: OpenApiParameter, components: Record<string, OpenApiSchema>): ZodTypeAny {
  const schema =
    param.schema ??
    (param.type ? ({ type: param.type } as OpenApiSchema) : undefined);
  let zod = schema ? openApiTypeToZod(schema, components, 0) : z.string();
  if (param.description) zod = zod.describe(param.description);
  if (!param.required) zod = zod.optional();
  return zod;
}

function isBinarySchema(schema: OpenApiSchema | undefined, components: Record<string, OpenApiSchema>): boolean {
  if (!schema) return false;
  const resolved = resolveRef(schema, components, new Set()) ?? schema;
  if (resolved.format === "binary") return true;
  if (resolved.type === "array" && resolved.items) {
    return isBinarySchema(resolved.items, components);
  }
  return false;
}

export interface ToolInputMeta {
  zodShape: Record<string, ZodTypeAny>;
  pathParamNames: string[];
  queryParamNames: string[];
  headerParamNames: string[];
  /** ключи аргументов tool → имена полей в API body */
  bodyFieldMap: Record<string, string>;
  /** имена API-полей body, которые являются файлами */
  fileFieldNames: string[];
  isMultipart: boolean;
  /** body целиком как один объект (если нет properties) */
  bodyAsObject: boolean;
}

/**
 * Строит Zod-shape для input schema MCP tool из OpenAPI operation.
 */
export function buildToolInputMeta(op: ParsedOperation): ToolInputMeta {
  const components = op.schemas;
  const shape: Record<string, ZodTypeAny> = {};
  const pathParamNames: string[] = [];
  const queryParamNames: string[] = [];
  const headerParamNames: string[] = [];
  const bodyFieldMap: Record<string, string> = {};
  const fileFieldNames: string[] = [];
  let bodyAsObject = false;

  for (const param of op.parameters) {
    if (param.in === "cookie") continue;
    const zod = parameterToZod(param, components);
    const key = param.name in shape ? `${param.in}_${param.name}` : param.name;
    shape[key] = zod;
    if (param.in === "path") pathParamNames.push(key);
    else if (param.in === "query") queryParamNames.push(key);
    else if (param.in === "header") headerParamNames.push(key);
  }

  const content = op.requestBody?.content;
  const media =
    content?.["multipart/form-data"] ??
    content?.["application/json"] ??
    (content ? content[Object.keys(content)[0]] : undefined);

  const bodyRequired = Boolean(op.requestBody?.required);
  const bodySchema = media?.schema
    ? resolveRef(media.schema, components, new Set()) ?? media.schema
    : undefined;

  if (op.isMultipart && bodySchema?.properties) {
    for (const [name, prop] of Object.entries(bodySchema.properties)) {
      const required = (bodySchema.required ?? []).includes(name);
      if (isBinarySchema(prop, components)) {
        fileFieldNames.push(name);
        const filePath = z
          .string()
          .optional()
          .describe(`Локальный путь к файлу для поля «${name}»`);
        const fileBase64 = z
          .string()
          .optional()
          .describe(`Содержимое файла (base64) для поля «${name}»`);
        const fileName = z
          .string()
          .optional()
          .describe(`Имя файла для поля «${name}»`);
        shape[`${name}FilePath`] = filePath;
        shape[`${name}Base64`] = fileBase64;
        shape[`${name}FileName`] = fileName;
        bodyFieldMap[name] = name;
      } else {
        let field = openApiTypeToZod(prop, components, 0);
        if (prop.description) field = field.describe(prop.description);
        if (!required) field = field.optional();
        const key = name in shape ? `body_${name}` : name;
        shape[key] = field;
        bodyFieldMap[key] = name;
      }
    }
  } else if (bodySchema?.properties) {
    for (const [name, prop] of Object.entries(bodySchema.properties)) {
      const required = (bodySchema.required ?? []).includes(name);
      let field = openApiTypeToZod(prop, components, 0);
      if (prop.description) field = field.describe(prop.description);
      if (!required) field = field.optional();
      const key = name in shape ? `body_${name}` : name;
      shape[key] = field;
      bodyFieldMap[key] = name;
    }
  } else if (bodySchema || content) {
    bodyAsObject = true;
    const bodyBase = z
      .record(z.unknown())
      .describe(op.requestBody?.description ?? "Тело запроса JSON");
    shape["body"] = bodyRequired ? bodyBase : bodyBase.optional();
    bodyFieldMap["body"] = "body";
  }

  return {
    zodShape: shape,
    pathParamNames,
    queryParamNames,
    headerParamNames,
    bodyFieldMap,
    fileFieldNames,
    isMultipart: op.isMultipart,
    bodyAsObject,
  };
}

export function buildZodObject(meta: ToolInputMeta) {
  return z.object(meta.zodShape).passthrough();
}
