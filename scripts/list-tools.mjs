import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { listToolDescriptors } from "../dist/tools/generateTools.js";
import { countBySourceFile, loadOperations } from "../dist/openapi/loadSpecs.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");

const descriptors = listToolDescriptors();
const operations = loadOperations();
const byFile = countBySourceFile(operations);

const summaryLines = [
  `# Список MCP tools`,
  ``,
  `Сгенерировано автоматически (\`npm run list-tools\`).`,
  ``,
  `Всего tools: **${descriptors.length}** (эндпоинты из \`spec/*.json\` кроме \`auth.json\`, дедуп по METHOD+path).`,
  ``,
  `## По файлам спеки`,
  ``,
  `| Файл | Tools |`,
  `| --- | ---: |`,
  ...Object.entries(byFile)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([file, n]) => `| \`${file}\` | ${n} |`),
  ``,
  `## Полный список`,
  ``,
  `| Tool | Method | Path | Spec | Summary |`,
  `| --- | --- | --- | --- | --- |`,
];

for (const t of descriptors) {
  const summary = t.description.split(" — ")[0]?.replace(/\|/g, "\\|") ?? "";
  summaryLines.push(
    `| \`${t.name}\` | ${t.method} | \`${t.path}\` | \`${t.sourceFile}\` | ${summary} |`,
  );
}

fs.mkdirSync(docsDir, { recursive: true });
const outPath = path.join(docsDir, "tools.md");
fs.writeFileSync(outPath, summaryLines.join("\n") + "\n", "utf8");
console.log(`Wrote ${descriptors.length} tools to ${outPath}`);
