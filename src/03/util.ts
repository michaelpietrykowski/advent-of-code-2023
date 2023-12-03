import { Part, Position } from "./types";

export const isAdjacent = (part: Part, position: Position) => {
  const [partRow, partColumn] = part.position;
  const [row, column] = position;

  const isRowAdjacent = row <= partRow + 1 && row >= partRow - 1;
  const isColumnAdjacent =
    column <= partColumn + part.number.toString(10).length &&
    column >= partColumn - 1;

  return isRowAdjacent && isColumnAdjacent;
};

export const getParts = (board: string[]) => {
  const parts: Part[] = [];
  board.forEach((row, rowIndex) => {
    const numberMatches = [...row.matchAll(/\d+/dg)];
    for (let match of numberMatches) {
      parts.push({
        number: parseInt(match[0]),
        position: [rowIndex, match.index!],
      });
    }
  });

  return parts;
};

export const getSymbolPositions = (board: string[], symbolRegex?: RegExp) => {
  const symbolPositions: Position[] = [];
  board.forEach((row, rowIndex) => {
    const symbolMatches = [...row.matchAll(symbolRegex ?? /[^.\d]/dg)];
    for (let match of symbolMatches) {
      symbolPositions.push([rowIndex, match.index!]);
    }
  });

  return symbolPositions;
};
