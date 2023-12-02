import * as fs from "fs";

export const loadInputFromFile = (filename: string): string[] => {
  const buffer = fs.readFileSync(filename);
  return buffer
    .toString()
    .split("\n")
    .map((line) => line.trim());
};
