#!/usr/bin/env node
import { loadConfig } from "./config.js";
import { AuthManager } from "./auth.js";
import { HttpClient } from "./httpClient.js";
import { registerToolsFromSpecs } from "./tools/generateTools.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

async function main(): Promise<void> {
  const config = loadConfig();
  const auth = new AuthManager(config);
  await auth.ensureReady();

  const http = new HttpClient(config, auth);
  const server = new McpServer({
    name: "mcp-my-team",
    version: "1.0.0",
  });

  const count = registerToolsFromSpecs(server, http);
  console.error(`[mcp-my-team] Зарегистрировано tools: ${count}`);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(
    `[mcp-my-team] Не удалось запустить сервер: ${err instanceof Error ? err.message : String(err)}`,
  );
  process.exit(1);
});
