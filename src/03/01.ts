import { getParts, getSymbolPositions, isAdjacent } from "./util";

export const getResult = (input: string[]) => {
  const parts = getParts(input);
  const symbolPositions = getSymbolPositions(input);

  return parts
    .filter((part) =>
      symbolPositions.some((position) => isAdjacent(part, position))
    )
    .map((part) => part.number)
    .reduce((sum, cur) => sum + cur, 0);
};
