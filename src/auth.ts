import axios, { type AxiosInstance } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import type { AppConfig } from "./config.js";

export interface ApiTokenState {
  token: string;
  expiresAt?: string;
  refreshToken?: string;
}

function extractErrorMessage(data: unknown, fallback: string): string {
  if (!data || typeof data !== "object") return fallback;
  const obj = data as Record<string, unknown>;
  const error = obj.error;
  if (error && typeof error === "object") {
    const err = error as Record<string, unknown>;
    const msg = err.error_msg ?? err.message;
    if (typeof msg === "string") {
      const fields = err.fields;
      if (fields && typeof fields === "object") {
        return `${msg} ${JSON.stringify(fields)}`;
      }
      return msg;
    }
  }
  if (typeof obj.message === "string") return obj.message;
  try {
    return JSON.stringify(data);
  } catch {
    return fallback;
  }
}

export class AuthManager {
  private readonly config: AppConfig;
  private readonly jar: CookieJar;
  private readonly sessionClient: AxiosInstance;
  private state: ApiTokenState | null = null;
  private readonly staticToken: boolean;

  constructor(config: AppConfig) {
    this.config = config;
    this.jar = new CookieJar();
    // axios-cookiejar-support расширяет AxiosRequestConfig.jar через declare module
    const raw = axios.create({
      baseURL: config.baseUrl,
      withCredentials: true,
      validateStatus: () => true,
      jar: this.jar,
    } as Parameters<typeof axios.create>[0]);
    // axios / axios-cookiejar-support типы иногда конфликтуют между версиями
    this.sessionClient = wrapper(raw as never) as AxiosInstance;
    this.staticToken = Boolean(config.apiToken);
    if (config.apiToken) {
      this.state = { token: config.apiToken };
    }
  }

  async ensureReady(): Promise<void> {
    if (this.staticToken) return;
    await this.loginAndFetchToken();
  }

  getBearerToken(): string {
    if (!this.state?.token) {
      throw new Error("API-токен ещё не получен.");
    }
    return this.state.token;
  }

  isExpired(): boolean {
    if (this.staticToken || !this.state?.expiresAt) return false;
    const expires = Date.parse(this.state.expiresAt);
    if (Number.isNaN(expires)) return false;
    return Date.now() >= expires - 30_000;
  }

  async refreshOrRelogin(): Promise<void> {
    if (this.staticToken) {
      throw new Error(
        "Получен 401 при статическом MYTEAM_API_TOKEN — обновите токен вручную.",
      );
    }
    try {
      await this.refreshToken();
    } catch {
      await this.loginAndFetchToken();
    }
  }

  private async loginAndFetchToken(): Promise<void> {
    const { login, password } = this.config;
    if (!login || !password) {
      throw new Error("MYTEAM_LOGIN и MYTEAM_PASSWORD обязательны для получения токена.");
    }

    const loginRes = await this.sessionClient.post("/api/login", {
      email: login,
      password,
      language: "ru",
      remember: true,
    });

    if (loginRes.status === 401 || loginRes.status === 422) {
      throw new Error(
        `Ошибка логина (${loginRes.status}): ${extractErrorMessage(loginRes.data, "неверные данные или валидация")}`,
      );
    }
    if (loginRes.status < 200 || loginRes.status >= 300) {
      throw new Error(
        `Ошибка логина (${loginRes.status}): ${extractErrorMessage(loginRes.data, "неожиданный ответ")}`,
      );
    }

    const tokenRes = await this.sessionClient.get("/api/api-token");
    if (tokenRes.status < 200 || tokenRes.status >= 300) {
      throw new Error(
        `Не удалось получить API-токен (${tokenRes.status}): ${extractErrorMessage(tokenRes.data, "ошибка /api/api-token")}`,
      );
    }

    this.state = this.parseTokenPayload(tokenRes.data);
  }

  private async refreshToken(): Promise<void> {
    const res = await this.sessionClient.get("/api/refresh-api-token");
    if (res.status < 200 || res.status >= 300) {
      throw new Error(
        `Refresh не удался (${res.status}): ${extractErrorMessage(res.data, "ошибка refresh")}`,
      );
    }
    this.state = this.parseTokenPayload(res.data);
  }

  private parseTokenPayload(data: unknown): ApiTokenState {
    const root = data as {
      data?: { token?: string; expiresAt?: string; refreshToken?: string };
    };
    const payload = root?.data ?? (data as ApiTokenState);
    if (!payload?.token || typeof payload.token !== "string") {
      throw new Error(
        `Ответ api-token не содержит token: ${typeof data === "object" ? JSON.stringify(data) : String(data)}`,
      );
    }
    return {
      token: payload.token,
      expiresAt: payload.expiresAt,
      refreshToken: payload.refreshToken,
    };
  }
}
