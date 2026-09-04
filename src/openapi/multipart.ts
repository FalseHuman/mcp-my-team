import fs from "node:fs";
import path from "node:path";
import FormData from "form-data";

export interface FileSource {
  filePath?: string;
  base64?: string;
  fileName?: string;
}

/**
 * Собирает multipart/form-data из аргументов tool.
 * Для каждого file-поля ожидаются `${field}FilePath` / `${field}Base64` / `${field}FileName`.
 */
export function buildMultipartFormData(
  args: Record<string, unknown>,
  bodyFieldNames: string[],
  fileFieldNames: string[],
): FormData {
  const form = new FormData();

  for (const field of bodyFieldNames) {
    if (fileFieldNames.includes(field)) {
      const source: FileSource = {
        filePath: args[`${field}FilePath`] as string | undefined,
        base64: args[`${field}Base64`] as string | undefined,
        fileName: args[`${field}FileName`] as string | undefined,
      };
      appendFile(form, field, source);
      continue;
    }

    const value = args[field];
    if (value === undefined || value === null) continue;
    appendValue(form, field, value);
  }

  return form;
}

function appendFile(form: FormData, field: string, source: FileSource): void {
  if (source.filePath) {
    const resolved = path.resolve(source.filePath);
    if (!fs.existsSync(resolved)) {
      throw new Error(`Файл не найден: ${resolved}`);
    }
    const filename = source.fileName || path.basename(resolved);
    form.append(field, fs.createReadStream(resolved), { filename });
    return;
  }

  if (source.base64) {
    const raw = source.base64.includes(",")
      ? source.base64.split(",").pop()!
      : source.base64;
    const buffer = Buffer.from(raw, "base64");
    const filename = source.fileName || `${field}.bin`;
    form.append(field, buffer, { filename });
    return;
  }

  throw new Error(
    `Для поля «${field}» укажите ${field}FilePath или ${field}Base64`,
  );
}

function appendValue(form: FormData, field: string, value: unknown): void {
  if (Array.isArray(value)) {
    for (const item of value) {
      form.append(`${field}[]`, stringifyPart(item));
    }
    return;
  }
  if (typeof value === "object") {
    form.append(field, JSON.stringify(value));
    return;
  }
  form.append(field, stringifyPart(value));
}

function stringifyPart(value: unknown): string | number | boolean {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  return JSON.stringify(value);
}
