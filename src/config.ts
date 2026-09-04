import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PROJECT_ROOT = path.resolve(__dirname, "..");
export const SPECS_DIR = path.join(PROJECT_ROOT, "spec");

dotenv.config({ path: path.join(PROJECT_ROOT, ".env") });

export interface AppConfig {
  baseUrl: string;
  apiToken?: string;
  login?: string;
  password?: string;
}

export function loadConfig(): AppConfig {
  const baseUrl = (process.env.MYTEAM_BASE_URL || "https://mozg.ismyteam.ru").replace(
    /\/+$/,
    "",
  );
  const apiToken = process.env.MYTEAM_API_TOKEN?.trim() || undefined;
  const login = process.env.MYTEAM_LOGIN?.trim() || undefined;
  const password = process.env.MYTEAM_PASSWORD?.trim() || undefined;

  if (!apiToken && !(login && password)) {
    throw new Error(
      "Не задана авторизация: укажите MYTEAM_API_TOKEN либо пару MYTEAM_LOGIN и MYTEAM_PASSWORD (см. .env.example).",
    );
  }

  if (!apiToken && ((login && !password) || (!login && password))) {
    throw new Error(
      "Для авторизации по логину нужны оба параметра: MYTEAM_LOGIN и MYTEAM_PASSWORD.",
    );
  }

  return { baseUrl, apiToken, login, password };
}
