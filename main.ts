// One Line of Earned Pride — make.fun entry
// Writes one original line (98 chars) to /output/entry.txt:
// a night baker, eleven burnt loaves behind him, and the twelfth
// finally coming right at 3 a.m. — the pride lands on the last word.
// Offline, deterministic, no network, no API calls.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: long effort (eleven burnt loaves), a concrete scene
// (night baker, oven, 3 a.m.), pride earned inside the line and
// never asserted — "it sang" is the bread crackling as it cools,
// the sound bakers listen for when a loaf is finally right.
const LINE =
  "After eleven burnt loaves, the night baker pulled the twelfth from the oven at 3 a.m. and it sang.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-240
// characters, not only whitespace, on a single line.
if (
  LINE.length < 1 ||
  LINE.length > 240 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`Line failed gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
