import { parseHands } from "./parse";

export const getResult = (input: string[]) => {
  const hands = parseHands(input);

  hands.sort((a, b) => a.compareTo(b, true));

  return hands.reduce((sum, cur, index) => sum + cur.bid * (index + 1), 0);
};
