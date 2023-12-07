import { regexTransformer } from "../util";
import { Hand } from "./Hand";

export const parseHands = (input: string[]): Hand[] => {
  const transformer = regexTransformer(
    /(?<cards>[123456789TJQKA]{5}) (?<bid>\d+)/dg,
    ({ cards, bid }) => new Hand(cards.split(""), parseInt(bid))
  );

  return input.map((line) => transformer.transform(line));
};
