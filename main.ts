import fs from "node:fs";
const TEXT = "A toaster is a tiny sun trapped in a box: it browns your bread the way the sun browns your skin.\nThe analogy works because both use heat to change colour, but it leaves out that the sun never pops up when it is done.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 400) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
