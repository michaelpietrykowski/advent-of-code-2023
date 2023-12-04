import { parseCards } from "./parse";

export const getResult = (input: string[]) => {
  return parseCards(input)
    .map((card) => card.getScore())
    .reduce((sum, cur) => sum + cur, 0);
};
