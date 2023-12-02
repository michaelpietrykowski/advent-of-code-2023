import * as part1 from "../01";
import * as part2 from "../02";
import { loadInputFromFile } from "../../util";
import path from "path";

describe("Day 1", () => {
  describe("Part 1", () => {
    test("should return correct result for example input", () => {
      expect(
        part1.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput01.txt"))
        )
      ).toBe(142);
    });

    test("should return correct result for input", () => {
      expect(
        part1.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(54927);
    });
  });

  describe("Part 2", () => {
    test("should return correct result for input shorter than five letters", () => {
      expect(part2.getResult(["9246"])).toBe(96);
    });

    test("should return correct result for input with overlapping spellings of numbers", () => {
      expect(part2.getResult(["eightwo"])).toBe(82);
    });

    test("should return correct result for example input", () => {
      expect(
        part2.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput02.txt"))
        )
      ).toBe(281);
    });

    test("should return correct result for input", () => {
      expect(
        part2.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(54581);
    });
  });
});
