import { loadInputFromFile } from "../util";
import {
  getFirstAndLastCharacter,
  parseNumber,
  removeNonDigitCharacters,
} from "./util";

const result = loadInputFromFile()
  .map(removeNonDigitCharacters)
  .map(getFirstAndLastCharacter)
  .map(parseNumber)
  .reduce((sum, curr) => sum + curr, 0);

console.log("Result for day 1 part 1: ");
console.log(result);
