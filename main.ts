// One Line, No Deadline Met — make.fun entry (program/v1).
// Writes a single-line excuse for a missed deadline to /output/entry.txt.
// Node-stdlib-only; the grader runs `node /bot/main.ts` on node22.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "The deadline and I are in couples therapy now — it says I never listen, and honestly, it's not wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");

// The sealed gate requires UTF-8 text of 1-200 characters, not only
// whitespace, on a single line. Fail loudly instead of writing bad output.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ENTRY, "utf8");
