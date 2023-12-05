import * as part1 from "../01";
import * as part2 from "../02";
import { loadInputFromFile } from "../../util";
import path from "path";

describe("Day 5", () => {
  describe("Part 1", () => {
    test("should return correct result for example input", () => {
      expect(
        part1.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(35);
    });

    test("should return correct result for input", () => {
      expect(
        part1.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(157211394);
    });
  });

  describe("Part 2", () => {
    test("isSeed should return true for example input and 92", () => {
      expect(part2.isSeed([79, 14, 55, 13], 92)).toBe(true);
    });

    test("isSeed should return false for example input and 3", () => {
      expect(part2.isSeed([79, 14, 55, 13], 3)).toBe(false);
    });

    test("should return correct result for example input", () => {
      expect(
        part2.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(46);
    });

    test("should return correct result for input", () => {
      expect(
        part2.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(50855035);
    });
  });
});
