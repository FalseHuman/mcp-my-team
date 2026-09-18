#!/usr/bin/env node
import { loadConfig } from "./config.js";
import { AuthManager } from "./auth.js";
import { HttpClient } from "./httpClient.js";
import { loadPackageMeta } from "./packageMeta.js";
import { registerToolsFromSpecs } from "./tools/generateTools.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

async function main(): Promise<void> {
  const { name, version } = loadPackageMeta();
  const config = loadConfig();
  const auth = new AuthManager(config);
  await auth.ensureReady();

  const http = new HttpClient(config, auth);
  const server = new McpServer({ name, version });

  const count = registerToolsFromSpecs(server, http);
  console.error(`[${name}] Зарегистрировано tools: ${count}`);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  const { name } = loadPackageMeta();
  console.error(
    `[${name}] Не удалось запустить сервер: ${err instanceof Error ? err.message : String(err)}`,
  );
  process.exit(1);
});
