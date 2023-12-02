import { Game } from "./types";
import { parseGamesFromInput } from "./parse";

const isPossibleGame = (game: Game) =>
  !game.rounds.some(
    (round) =>
      (round.get("red") ?? 0) > 12 ||
      (round.get("green") ?? 0) > 13 ||
      (round.get("blue") ?? 0) > 14
  );

export const getResult = (input: string[]) =>
  parseGamesFromInput(input)
    .filter(isPossibleGame)
    .map((game) => game.id)
    .reduce((sum, curr) => sum + curr);
