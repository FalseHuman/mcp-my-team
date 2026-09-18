import fs from "node:fs";
import path from "node:path";
import { PROJECT_ROOT } from "./config.js";

export interface PackageMeta {
  name: string;
  version: string;
}

let cached: PackageMeta | undefined;

export function loadPackageMeta(): PackageMeta {
  if (cached) return cached;

  const packageJsonPath = path.join(PROJECT_ROOT, "package.json");
  const raw = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")) as {
    name?: string;
    version?: string;
  };

  cached = {
    name: raw.name || "mcp-my-team",
    version: raw.version || "0.0.0",
  };
  return cached;
}
