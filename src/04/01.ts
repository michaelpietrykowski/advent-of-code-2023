import { Card } from "./Card";

export const getResult = (input: string[]) => {
  return input
    .map(Card.parse)
    .map((card) => card.getScore())
    .reduce((sum, cur) => sum + cur, 0);
};
