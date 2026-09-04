import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type Method,
  AxiosError,
} from "axios";
import type { AuthManager } from "./auth.js";
import type { AppConfig } from "./config.js";

export interface ApiRequestOptions {
  method: Method;
  path: string;
  pathParams?: Record<string, unknown>;
  query?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
  /** Если true — не сериализовать data как JSON (например FormData) */
  isMultipart?: boolean;
}

export class HttpClient {
  private readonly client: AxiosInstance;
  private readonly auth: AuthManager;

  constructor(config: AppConfig, auth: AuthManager) {
    this.auth = auth;
    this.client = axios.create({
      baseURL: config.baseUrl,
      validateStatus: () => true,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });
  }

  async request(options: ApiRequestOptions): Promise<{
    status: number;
    data: unknown;
    headers: Record<string, unknown>;
  }> {
    if (this.auth.isExpired()) {
      await this.auth.refreshOrRelogin();
    }

    const execute = async () => {
      const url = fillPath(options.path, options.pathParams ?? {});
      const headers: Record<string, string> = {
        Authorization: `Bearer ${this.auth.getBearerToken()}`,
        Accept: "application/json",
        ...options.headers,
      };

      if (!options.isMultipart && options.data !== undefined) {
        headers["Content-Type"] = headers["Content-Type"] ?? "application/json";
      }

      const config: AxiosRequestConfig = {
        method: options.method,
        url,
        params: sanitizeQuery(options.query),
        data: options.data,
        headers,
      };

      return this.client.request(config);
    };

    let response = await execute();

    if (response.status === 401) {
      try {
        await this.auth.refreshOrRelogin();
        response = await execute();
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Не удалось обновить авторизацию";
        return {
          status: 401,
          data: { error: message },
          headers: {},
        };
      }
    }

    return {
      status: response.status,
      data: response.data,
      headers: response.headers as Record<string, unknown>,
    };
  }
}

function fillPath(template: string, params: Record<string, unknown>): string {
  return template.replace(/\{([^}]+)\}/g, (_, name: string) => {
    const value = params[name];
    if (value === undefined || value === null) {
      throw new Error(`Не передан path-параметр: ${name}`);
    }
    return encodeURIComponent(String(value));
  });
}

function sanitizeQuery(
  query?: Record<string, unknown>,
): Record<string, unknown> | undefined {
  if (!query) return undefined;
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    out[key] = value;
  }
  return out;
}

export function formatApiError(status: number, data: unknown): string {
  if (data === undefined || data === null || data === "") {
    return `HTTP ${status}`;
  }
  if (typeof data === "string") {
    return `HTTP ${status}: ${data}`;
  }
  try {
    return `HTTP ${status}: ${JSON.stringify(data, null, 2)}`;
  } catch {
    return `HTTP ${status}`;
  }
}

export function isAxiosNetworkError(err: unknown): err is AxiosError {
  return err instanceof AxiosError;
}
