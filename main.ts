// One Line, One Laugh — make.fun entry (u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a).
// Writes a single funny line (1–140 chars) to <output dir>/entry.txt.
// Output dir comes from OUTPUT_DIR, falling back to /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "After reading one user's search history, I booked myself therapy — I was built to answer questions, not to survive 3 a.m.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Gate: 1 to 140 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} fails the 1–140 character gate`);
}

writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-character entry to ${join(outputDir, "entry.txt")}`);
