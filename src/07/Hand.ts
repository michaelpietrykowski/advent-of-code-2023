const symbols = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
];

export enum HandType {
  HIGH_CARD,
  ONE_PAIR,
  TWO_PAIR,
  THREE_OF_A_KIND,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  FIVE_OF_A_KIND,
}

export class Hand {
  cards: string[] = [];
  bid: number;

  constructor(cards: string[], bid: number) {
    this.cards = cards;
    this.bid = bid;
  }

  getType(jokerEnabled: boolean = false) {
    const cardCount: Map<string, number> = new Map();
    this.cards.forEach((c) => cardCount.set(c, (cardCount.get(c) || 0) + 1));

    const cardCounts = [...cardCount.entries()];
    const maxCardCount = Math.max(
      ...cardCounts
        .filter((cc) => (jokerEnabled ? cc[0] !== "J" : true))
        .map((cc) => cc[1])
    );
    const jokerCount = jokerEnabled ? cardCount.get("J") || 0 : 0;

    if (jokerCount === 5) {
      return HandType.FIVE_OF_A_KIND;
    }

    if (maxCardCount === 5 - jokerCount) {
      return HandType.FIVE_OF_A_KIND;
    }

    if (maxCardCount === 4 - jokerCount) {
      return HandType.FOUR_OF_A_KIND;
    }

    if (maxCardCount === 5 - jokerCount) {
      return HandType.FIVE_OF_A_KIND;
    }

    if (maxCardCount === 3) {
      if (jokerCount > 0 || cardCounts.find((cc) => cc[1] === 2)) {
        return HandType.FULL_HOUSE;
      }
    }

    if (maxCardCount === 3 - jokerCount) {
      if (cardCounts.filter((cc) => cc[1] === 2).length === 2) {
        return HandType.FULL_HOUSE;
      }

      return HandType.THREE_OF_A_KIND;
    }

    if (cardCounts.filter((cc) => cc[1] === 2).length === 2) {
      return HandType.TWO_PAIR;
    }
    if (maxCardCount === 2 - jokerCount) {
      return HandType.ONE_PAIR;
    }
    return HandType.HIGH_CARD;
  }

  compareTo(other: Hand, jokerEnabled: boolean = false) {
    const thisType = this.getType(jokerEnabled);
    const otherType = other.getType(jokerEnabled);

    if (thisType !== otherType) {
      return thisType.valueOf() - otherType.valueOf();
    }

    for (let i = 0; i < 5; i++) {
      if (this.cards[i] !== other.cards[i]) {
        if (jokerEnabled) {
          if (this.cards[i] === "J") {
            return -1;
          } else if (other.cards[i] === "J") return 1;
        }

        return symbols.indexOf(this.cards[i]) - symbols.indexOf(other.cards[i]);
      }
    }
    return 0;
  }
}
