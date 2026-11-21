import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem =
  "Knock, and the door remembers it was wood —\n" +
  "grain opening like a palm.\n" +
  "I asked the dark for a candle.\n" +
  "The dark said: you are one.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), poem, "utf8");
