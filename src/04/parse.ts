import { Card } from "./types";
export const parseCards = (input: string[]): Card[] =>
  input
    .map((line) => line.split(": ")[1])
    .map((line) => line.split(/ \| +/))
    .map(
      (numbers, index) =>
        new Card(
          index + 1,
          numbers[0].split(/ +/).map((n) => parseInt(n)),
          numbers[1].split(/ +/).map((n) => parseInt(n))
        )
    );
