import { getNumberOfPossibleWins } from "./util";

export const getResult = (input: string[]) => {
  const numberListPattern = /((?:\d+ *)+)/dg;
  const times = input[0]
    .match(numberListPattern)![0]
    .split(/ +/)
    .map((n) => parseInt(n));

  const distances = input[1]
    .match(numberListPattern)![0]
    .split(/ +/)
    .map((n) => parseInt(n));

  let result = 1;
  for (let i = 0; i < times.length; i++) {
    result *= getNumberOfPossibleWins(times[i], distances[i]);
  }

  return result;
};
