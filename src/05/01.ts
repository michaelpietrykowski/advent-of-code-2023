import { parseSeedsAndRangeMaps } from "./parse";

export const getResult = (input: string[]) => {
  const [seeds, maps] = parseSeedsAndRangeMaps(input);

  let lowestLocation = Math.max(...seeds);

  for (let seed of seeds) {
    let result = seed;
    for (let i = 0; i < maps.length; i++) {
      const map = maps[i].find((m) => m.getDestination(result) !== null);
      if (map !== undefined) {
        result = map.getDestination(result)!;
      }
    }
    if (result < lowestLocation) {
      lowestLocation = result;
    }
  }

  return lowestLocation;
};
