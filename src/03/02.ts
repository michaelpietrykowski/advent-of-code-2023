import { getParts, getSymbolPositions, isAdjacent } from "./util";

export const getResult = (input: string[]) => {
  const parts = getParts(input);
  const possibleGearPositions = getSymbolPositions(input, /\*/dg);

  return possibleGearPositions
    .map((pos) => parts.filter((part) => isAdjacent(part, pos)))
    .filter((parts) => parts.length >= 2)
    .map((parts) =>
      parts
        .map((part) => part.number)
        .reduce((product, cur) => product * cur, 1)
    )
    .reduce((sum, cur) => sum + cur, 0);
};
