export class Card {
  index: number;
  winningNumbers: number[];
  ownNumbers: number[];

  constructor(index: number, winningNumbers: number[], ownNumbers: number[]) {
    this.index = index;
    this.winningNumbers = winningNumbers;
    this.ownNumbers = ownNumbers;
  }

  static parse(input: string): Card {
    const splitInput = input.split(": ");
    const index = parseInt(splitInput[0].match(/(\d+)/dg)![0]);
    const numbers = splitInput[1].split(/ \| +/);
    return new Card(
      index,
      numbers[0].split(/ +/).map((n) => parseInt(n)),
      numbers[1].split(/ +/).map((n) => parseInt(n))
    );
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
