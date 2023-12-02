import * as fs from "fs";

export const loadInputFromFile = (): string[] => {
  const args = process.argv.slice(2);

  if (!args.length) {
    console.log("Usage: ts-node <file> <inputfile>");
    process.exit(1);
  }

  const buffer = fs.readFileSync(args[0]);
  return buffer
    .toString()
    .split("\n")
    .map((line) => line.trim());
};
