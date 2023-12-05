export class RangeMap {
  destinationRange: number;
  sourceRangeStart: number;
  rangeLength: number;

  constructor(
    destinationRange: number,
    sourceRangeStart: number,
    rangeLength: number
  ) {
    this.destinationRange = destinationRange;
    this.sourceRangeStart = sourceRangeStart;
    this.rangeLength = rangeLength;
  }

  static parse(input: string) {
    const [destinationRange, sourceRangeStart, rangeLength] = input.split(/ +/);
    return new RangeMap(
      parseInt(destinationRange),
      parseInt(sourceRangeStart),
      parseInt(rangeLength)
    );
  }

  getDestination(source: number): number | null {
    if (
      source < this.sourceRangeStart ||
      source > this.sourceRangeStart + this.rangeLength
    ) {
      return null;
    }

    return this.destinationRange + (source - this.sourceRangeStart);
  }

  getSource(destination: number): number | null {
    if (
      destination < this.destinationRange ||
      destination > this.destinationRange + this.rangeLength
    ) {
      return null;
    }

    return this.sourceRangeStart + (destination - this.destinationRange);
  }
}
