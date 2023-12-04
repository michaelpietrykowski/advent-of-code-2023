import { parseCards } from "./parse";

export const getResult = (input: string[]) => {
  const originalCards = parseCards(input);
  const cards = [...originalCards];
  let cardCount = 0;

  while (cards.length !== 0) {
    const card = cards.pop()!;
    cardCount++;
    const matchingNumbers = card.getWinningNumberCount();
    if (matchingNumbers !== 0) {
      for (let i = 1; i <= matchingNumbers; i++) {
        cards.push(originalCards[card.index - 1 + i]);
      }
    }
  }
  return cardCount;
};
