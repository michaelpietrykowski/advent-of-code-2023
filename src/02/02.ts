import { parseGamesFromInput } from "./parse";
import { Round } from "./types";

export const getResult = (input: string[]) =>
  parseGamesFromInput(input)
    .map((game) => {
      const neededCubes: Round = new Map();
      game.rounds.forEach((round) => {
        round.forEach((amount, color) => {
          if (amount > (neededCubes.get(color) || 0)) {
            neededCubes.set(color, amount);
          }
        });
      });

      return [...neededCubes.values()].reduce(
        (product, curr) => product * curr,
        1
      );
    })
    .reduce((sum, curr) => sum + curr, 0);
