import { parseSeedsAndRangeMaps } from "./parse";

export const isSeed = (seeds: number[], possibleSeed: number) => {
  for (let i = 0; i < seeds.length; i += 2) {
    if (possibleSeed >= seeds[i] && possibleSeed < seeds[i] + seeds[i + 1]) {
      return true;
    }
  }
  return false;
};

export const getResult = (input: string[]) => {
  const [seeds, maps] = parseSeedsAndRangeMaps(input);

  let lowestLocation = 0;
  let foundSeed = false;

  while (!foundSeed) {
    let result = lowestLocation;
    for (let i = maps.length - 1; i >= 0; i--) {
      const map = maps[i].find((m) => m.getSource(result) !== null);
      if (map !== undefined) {
        result = map.getSource(result)!;
      }
    }
    if (isSeed(seeds, result)) {
      foundSeed = true;
    } else {
      lowestLocation++;
    }
  }

  return lowestLocation;
};
