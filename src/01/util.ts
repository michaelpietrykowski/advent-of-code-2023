export const removeNonDigitCharacters = (line: string) =>
  line.replace(/\D/g, "");

export const getFirstAndLastCharacter = (line: string) => [
  line[0],
  line[line.length - 1],
];

export const parseNumber = (digits: string[]) => parseInt(digits.join(""));
