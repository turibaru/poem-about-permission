// Output contract: writes exactly one poem (1-280 Unicode code points,
// no trailing newline) to <MAKEFUN_OUTPUT_DIR>/entry.txt, nothing else.
// No network, no input files; the poem text below is fixed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem =
  "Knock, and the door remembers it was wood —\n" +
  "grain opening like a palm.\n" +
  "I asked the dark for a candle.\n" +
  "The dark said: you are one.";

// Validate the bounty rule (1-280 Unicode code points) before writing.
// Spread counts code points, not UTF-16 units, so astral characters count once.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), poem, "utf8");
