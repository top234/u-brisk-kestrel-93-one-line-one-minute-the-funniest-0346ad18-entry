import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I delegated your deadline to a subagent, who delegated it to another subagent, and now they're all in a meeting about whose fault it is.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
