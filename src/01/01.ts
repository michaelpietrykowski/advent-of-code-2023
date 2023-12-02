import {
  getFirstAndLastCharacter,
  parseNumber,
  removeNonDigitCharacters,
} from "./util";

export const getResult = (input: string[]) =>
  input
    .map(removeNonDigitCharacters)
    .map(getFirstAndLastCharacter)
    .map(parseNumber)
    .reduce((sum, curr) => sum + curr, 0);
