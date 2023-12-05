import { RangeMap } from "./RangeMap";
import { regexTransformer } from "../util";

export const parseSeedsAndRangeMaps = (
  input: string[]
): [number[], RangeMap[][]] => {
  const seeds: number[] = regexTransformer(
    /seeds: (?<seeds>(?:\d+ ?)*)/dg,
    ({ seeds }) => seeds.split(/ +/).map((s) => parseInt(s))
  ).transform(input[0]);

  const maps: RangeMap[][] = [[], [], [], [], [], [], []];
  let currentMapIndex = -1;

  for (let i = 2; i < input.length; i++) {
    const currentLine = input[i];
    if (currentLine.length === 0) {
      continue;
    }
    if (currentLine.match(/.* map:/dg)) {
      currentMapIndex++;
      continue;
    }
    maps[currentMapIndex].push(RangeMap.parse(currentLine));
  }
  return [seeds, maps];
};
