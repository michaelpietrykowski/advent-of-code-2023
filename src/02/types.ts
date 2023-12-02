export type Color = "red" | "green" | "blue";
export type Round = Map<Color, number>;
export type Game = { id: number; rounds: Round[] };
