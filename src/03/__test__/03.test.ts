import * as part1 from "../01";
import * as part2 from "../02";
import { loadInputFromFile } from "../../util";
import path from "path";

describe("Day 3", () => {
  describe("Part 1", () => {
    test("should return correct result for example input", () => {
      expect(
        part1.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(4361);
    });

    test("should return correct result for input", () => {
      expect(
        part1.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(539590);
    });
  });
});

describe("Part 2", () => {
  test("should return correct result for example input", () => {
    expect(
      part2.getResult(
        loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
      )
    ).toBe(467835);
  });

  test("should return correct result for input", () => {
    expect(
      part2.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
    ).toBe(80703636);
  });
});
