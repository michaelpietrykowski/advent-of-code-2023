export class Card {
  index: number;
  winningNumbers: number[];
  ownNumbers: number[];

  constructor(index: number, winningNumbers: number[], ownNumbers: number[]) {
    this.index = index;
    this.winningNumbers = winningNumbers;
    this.ownNumbers = ownNumbers;
  }

  getWinningNumberCount() {
    return [...this.winningNumbers].filter((n) => this.ownNumbers.includes(n))
      .length;
  }

  getScore() {
    const winningNumberCount = this.getWinningNumberCount();
    return winningNumberCount > 0 ? Math.pow(2, winningNumberCount - 1) : 0;
  }
}
