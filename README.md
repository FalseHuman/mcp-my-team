# MCP-сервер «МояКоманда»

MCP (Model Context Protocol) stdio-сервер для API HR/таск-платформы [МояКоманда](https://ismyteam.ru).  
Tools генерируются **динамически** из OpenAPI JSON в каталоге [`spec/`](spec/) при старте (кроме `auth.json`).

Сейчас регистрируется **2516** tools. Полный список: [`docs/tools.md`](docs/tools.md).

## Установка и запуск

Самый простой способ — через `npx` (Node.js ≥ 18):

```bash
npx -y mcp-my-team
```

Переменные окружения задайте в конфигурации MCP-клиента (см. ниже) или экспортируйте в оболочке.

Глобальная установка:

```bash
npm install -g mcp-my-team
mcp-my-team
```

## Авторизация

Нужен **один** из двух способов:

### 1. Готовый API-токен

```env
MYTEAM_BASE_URL=https://example.ismyteam.ru
MYTEAM_API_TOKEN=your_bearer_token_here
```

### 2. Логин и пароль

Если `MYTEAM_API_TOKEN` не задан, сервер при старте:

1. `POST /api/login` с `{ email, password, language: "ru", remember: true }` (сессионная cookie)
2. `GET /api/api-token` → `{ token, expiresAt, refreshToken }`
3. Дальше все API-запросы идут с `Authorization: Bearer <token>`

```env
MYTEAM_BASE_URL=https://example.ismyteam.ru
MYTEAM_LOGIN=user@example.com
MYTEAM_PASSWORD=secret
```

При `401` или истечении `expiresAt` сервер пробует `GET /api/refresh-api-token`, затем при необходимости повторяет login → api-token.

Если не задан ни токен, ни пара логин/пароль — процесс завершится с понятной ошибкой.

### Ограничения

- OTP / 2FA (`/api/login-otp`, `/api/login-mobile-otp` и т.п.) и SAML/SSO **не поддерживаются**.
- Эндпоинты из `spec/auth.json` **не** экспортируются как MCP-tools — только внутренняя авторизация.

## Подключение к MCP-клиенту

### Cursor

В настройках MCP (`mcp.json`) добавьте:

```json
{
  "mcpServers": {
    "my-team": {
      "command": "npx",
      "args": ["-y", "mcp-my-team"],
      "env": {
        "MYTEAM_BASE_URL": "https://example.ismyteam.ru",
        "MYTEAM_API_TOKEN": "your_token"
      }
    }
  }
}
```

Либо логин/пароль:

```json
{
  "mcpServers": {
    "my-team": {
      "command": "npx",
      "args": ["-y", "mcp-my-team"],
      "env": {
        "MYTEAM_BASE_URL": "https://example.ismyteam.ru",
        "MYTEAM_LOGIN": "user@example.com",
        "MYTEAM_PASSWORD": "secret"
      }
    }
  }
}
```

### Claude Desktop

Аналогичный блок в `claude_desktop_config.json` (ключ `mcpServers`).

## Разработка

Клонируйте репозиторий и установите зависимости:

```bash
npm install
cp .env.example .env
npm run build
npm start
```

Для разработки без сборки (нужен `tsx`):

```bash
npm run dev
```

Обновить список tools в документации:

```bash
npm run list-tools
```

## Как устроены tools

- Один tool = один HTTP-эндпоинт из `spec/*.json` (кроме `auth.json`).
- Имя tool = `operationId`; при коллизиях добавляется суффикс пути.
- Дубликаты одного и того же `METHOD + path` в разных файлах спеки схлопываются (побеждает первый файл по алфавиту).
- Input schema строится из path/query параметров и JSON body (Zod).
- Multipart (загрузка файлов): передайте `fieldFilePath` или `fieldBase64` (+ опционально `fieldFileName`), например для `uploadFile` — `fileFilePath` / `fileBase64`.
- Ошибки API (4xx/5xx) возвращаются текстом в ответе tool, процесс сервера не падает.

## Структура

```
spec/                 OpenAPI 3.0 JSON (исходники, не менять кодогеном)
src/
  index.ts            точка входа (stdio)
  config.ts           env
  auth.ts             login → cookie → api-token / refresh
  httpClient.ts       axios + Bearer
  openapi/            парсинг спек, Zod, multipart
  tools/generateTools.ts
docs/tools.md         полный список tools
```

## Добавление новых разделов API

Положите новый OpenAPI JSON в `spec/` и перезапустите сервер — tools подхватятся автоматически.  
Эндпоинты авторизации оставляйте в `auth.json` (он намеренно не превращается в tools).

## Публикация в npm

Релизы публикуются автоматически из GitHub Actions по git-тегу `v*` через [Trusted Publishing (OIDC)](https://docs.npmjs.com/trusted-publishers/) — долгоживущий `NPM_TOKEN` не нужен.

### Одноразовая настройка на npmjs.com

1. Убедитесь, что пакет `mcp-my-team` уже существует на npm (первый раз можно опубликовать вручную: `npm login && npm publish`).
2. Откройте [настройки пакета](https://www.npmjs.com/package/mcp-my-team) → **Trusted Publisher** → **GitHub Actions**.
3. Укажите:
   - **Organization or user:** `FalseHuman`
   - **Repository:** `mcp-my-team`
   - **Workflow filename:** `publish.yml` (только имя файла, не путь)
   - Environment — оставьте пустым
4. Разрешите действие `npm publish`.

Workflow: [`.github/workflows/publish.yml`](.github/workflows/publish.yml).

### Как выпустить версию

1. Обновите `version` в `package.json` (например `1.0.1`).
2. Закоммитьте и запушьте в репозиторий.
3. Создайте и запушьте тег с тем же номером:

```bash
git tag v1.0.1
git push origin v1.0.1
```

Версия в теге (`v1.0.1`) должна совпадать с `package.json`, иначе workflow завершится с ошибкой.

## Лицензия

MIT
