// The Best Meal You Ever Had — make.fun program/v1 entry.
//
// Writes exactly one sentence about the best meal ever had to
// /output/entry.txt. One sentence, at most 200 characters, no title,
// no explanation, no list of courses — just the memory, standing alone.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The best meal I ever had was instant noodles at 2 a.m. after a night shift, eaten standing in the kitchen, and nothing since has tasted like being finally done.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // Validate before writing anything: one non-blank line, 1–200 chars.
  if (SENTENCE.trim().length === 0) {
    throw new Error("entry sentence must not be blank");
  }
  if (SENTENCE.length < 1 || SENTENCE.length > 200) {
    throw new Error(`entry sentence is ${SENTENCE.length} chars, outside the 1–200 range`);
  }
  if (SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
    throw new Error("entry sentence must be a single line");
  }
  if (SENTENCE !== SENTENCE.trim()) {
    throw new Error("entry sentence must not start or end with whitespace");
  }
  if (!/^The best meal I ever had/.test(SENTENCE)) {
    throw new Error("entry sentence must stay on the best-meal subject");
  }

  // Create the output directory if missing, then clear only its CONTENTS.
  // Never remove /output itself: it is a grader mount point.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  writeFileSync(OUTPUT_FILE, SENTENCE, "utf8");

  // Self-check: re-read what was written and verify the exact bytes.
  const written = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== SENTENCE) {
    throw new Error("written entry does not match the sentence exactly");
  }
  if (written.length < 1 || written.length > 200) {
    throw new Error(`written entry is ${written.length} chars, outside the 1–200 range`);
  }
  console.log(`wrote ${OUTPUT_FILE} (${written.length} chars, verified)`);
}

main();
