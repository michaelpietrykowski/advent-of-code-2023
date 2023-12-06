import { getNumberOfPossibleWins } from "./util";

export const getResult = (input: string[]) => {
  const numberListPattern = /((?:\d+ *)+)/g;
  const time = parseInt(
    input[0].match(numberListPattern)![0].replace(/ +/g, "")
  );

  const distance = parseInt(
    input[1].match(numberListPattern)![0].replace(/ +/g, "")
  );

  return getNumberOfPossibleWins(time, distance);
};
