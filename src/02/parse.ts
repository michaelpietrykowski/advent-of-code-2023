import { Color, Game, Round } from "./types";

export const parseGamesFromInput = (input: string[]): Game[] =>
  input.map((line) => {
    const splitLine = line.split(": ");
    return {
      id: parseInt(splitLine[0].replace("Game ", "")),
      rounds: splitLine[1].split("; ").map((game) => {
        const round: Round = new Map();
        game.split(", ").forEach((handful) => {
          const amountAndColor = handful.split(" ");
          round.set(amountAndColor[1] as Color, parseInt(amountAndColor[0]));
        });
        return round;
      }),
    };
  });
