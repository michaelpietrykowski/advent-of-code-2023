import * as part1 from "../01";
import * as part2 from "../02";
import { loadInputFromFile } from "../../util";
import path from "path";
import { Hand, HandType } from "../Hand";

describe("Day 7", () => {
  describe("Part 1", () => {
    test("should return correct result for example input", () => {
      expect(
        part1.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(6440);
    });

    test("should return correct result for input", () => {
      expect(
        part1.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(251927063);
    });

    test("should identify five-of-a-kind correctly", () => {
      const hand = new Hand("AAAAA".split(""), 0);
      expect(hand.getType()).toBe(HandType.FIVE_OF_A_KIND);
    });

    test("should identify four-of-a-kind correctly", () => {
      const hand = new Hand("JAAAA".split(""), 0);
      expect(hand.getType()).toBe(HandType.FOUR_OF_A_KIND);
    });

    test("should identify full house correctly", () => {
      const hand = new Hand("QQQJJ".split(""), 0);
      expect(hand.getType()).toBe(HandType.FULL_HOUSE);
    });

    test("should identify three-of-a-kind correctly", () => {
      const hand = new Hand("T55J5".split(""), 0);
      expect(hand.getType()).toBe(HandType.THREE_OF_A_KIND);
    });

    test("should identify two pair correctly", () => {
      const hand = new Hand("KK677".split(""), 0);
      expect(hand.getType()).toBe(HandType.TWO_PAIR);
    });

    test("should identify one pair correctly", () => {
      const hand = new Hand("32T3K".split(""), 0);
      expect(hand.getType()).toBe(HandType.ONE_PAIR);
    });

    test("should identify high card correctly", () => {
      const hand = new Hand("321QK".split(""), 0);
      expect(hand.getType()).toBe(HandType.HIGH_CARD);
    });
  });

  describe("Part 2", () => {
    test("should identify five-of-a-kind correctly", () => {
      const hand = new Hand("JJJJA".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.FIVE_OF_A_KIND);
    });

    test("should identify five-of-a-kind with only jokers correctly", () => {
      const hand = new Hand("JJJJJ".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.FIVE_OF_A_KIND);
    });

    test("should identify four-of-a-kind correctly", () => {
      const hand = new Hand("KTJJT".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.FOUR_OF_A_KIND);
    });

    test("should identify full house correctly", () => {
      const hand = new Hand("2233J".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.FULL_HOUSE);
    });

    test("should identify three-of-a-kind correctly", () => {
      const hand = new Hand("AJJ94".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.THREE_OF_A_KIND);
    });

    test("should identify two pair correctly", () => {
      const hand = new Hand("KK677".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.TWO_PAIR);
    });

    test("should identify one pair correctly", () => {
      const hand = new Hand("J345A".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.ONE_PAIR);
    });

    test("should identify high card correctly", () => {
      const hand = new Hand("321QK".split(""), 0);
      expect(hand.getType(true)).toBe(HandType.HIGH_CARD);
    });

    test("should compare two pair and four-of-a-kind correctly", () => {
      const hand = new Hand("KTJJT".split(""), 0);
      const hand2 = new Hand("KK677".split(""), 0);
      expect(hand.compareTo(hand2, true)).toBe(3);
    });

    test("should compare two four-of-a-kinds correctly", () => {
      const hand = new Hand("KJJJT".split(""), 0);
      const hand2 = new Hand("KQQQQ".split(""), 0);
      expect(hand.compareTo(hand2, true)).toBe(-1);
    });

    test("should compare two single pairs correctly", () => {
      const hand = new Hand("J345A".split(""), 0);
      const hand2 = new Hand("2345J".split(""), 0);
      expect(hand.compareTo(hand2, true)).toBe(-1);
    });

    test("should return correct result for example input", () => {
      expect(
        part2.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(5905);
    });

    test("should return correct result for input", () => {
      expect(
        part2.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(255632664);
    });
  });
});
