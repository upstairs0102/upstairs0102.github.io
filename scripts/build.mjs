import { rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

// A clean export prevents prior route manifests from leaving newly added
// generateStaticParams pages out of out/. Only disposable build output is removed.
for (const directory of [".next", "out"])
  rmSync(directory, { recursive: true, force: true });
const build = spawnSync(
  process.execPath,
  [path.resolve("node_modules/next/dist/bin/next"), "build"],
  { stdio: "inherit" },
);
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);
const check = spawnSync(process.execPath, ["scripts/check-export.mjs"], {
  stdio: "inherit",
});
if (check.error) throw check.error;
process.exit(check.status ?? 1);
