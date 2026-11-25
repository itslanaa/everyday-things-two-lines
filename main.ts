// Two-line toaster explanation: a tiny sun in a box, and why the picture holds.
import { mkdirSync, writeFileSync } from "node:fs";
const first = "A toaster is a tiny sun trapped in a box: it browns your bread the way the sun browns your skin.";
const second = "The analogy works because both use heat to change colour, but it leaves out that the sun never pops up when it is done.";
const entry = [first, second].join("\n");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (entry.length > 400 || entry.length < 1) { throw new Error("entry out of range"); }
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", entry, "utf8");
