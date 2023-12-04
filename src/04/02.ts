import { Card } from "./Card";

export const getResult = (input: string[]) => {
  const originalCards = input.map(Card.parse);
  const cards = [...originalCards];
  let cardCount = 0;

  while (cards.length !== 0) {
    const card = cards.pop()!;
    cardCount++;
    const matchingNumbers = card.getWinningNumberCount();
    for (let i = 1; i <= matchingNumbers; i++) {
      cards.push(originalCards[card.index - 1 + i]);
    }
  }
  return cardCount;
};
