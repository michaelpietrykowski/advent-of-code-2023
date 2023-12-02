import { loadInputFromFile } from "../util";
import {
  getFirstAndLastCharacter,
  parseNumber,
  removeNonDigitCharacters,
} from "./util";

const translateSpelledOutNumbers = (line: string) => {
  const spelledOutNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const result: string[] = [];

  const MAX_NUMBER_LENGTH = 5;

  for (let i = 0; i <= line.length; i++) {
    let window: string;
    if (i + MAX_NUMBER_LENGTH <= line.length) {
      window = line.slice(i, i + MAX_NUMBER_LENGTH);
    } else {
      window = line.slice(i, line.length);
    }

    spelledOutNumbers.forEach((number, index) => {
      window = window.replace(number, (index + 1).toString());
    });
    result.push(window);
  }

  return result.join("");
};

const result = loadInputFromFile()
  .map(translateSpelledOutNumbers)
  .map(removeNonDigitCharacters)
  .map(getFirstAndLastCharacter)
  .map(parseNumber)
  .reduce((sum, curr) => sum + curr, 0);

console.log("Result for day 1 part 2: ");
console.log(result);
