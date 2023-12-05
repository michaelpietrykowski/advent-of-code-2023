import * as fs from "fs";

export const loadInputFromFile = (filename: string): string[] => {
  const buffer = fs.readFileSync(filename);
  return buffer
    .toString()
    .split("\n")
    .map((line) => line.trim());
};

export function regexTransformer<ReturnType>(
  regExp: RegExp,
  mapper: (params: { [key: string]: string }) => ReturnType
): { transform: (input: string) => ReturnType } {
  return {
    transform: (input: string) => {
      let params = {};
      const matches = [...input.matchAll(regExp)];

      for (let match of matches) {
        params = { ...params, ...match.groups };
      }

      return mapper(params);
    },
  };
}
