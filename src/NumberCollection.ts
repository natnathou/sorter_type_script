class NumberCollection {
  constructor(public collection: number[]) {}

  get length(): number {
    return this.collection.length;
  }

  compare(i: number): boolean {
    if (this.collection[i] > this.collection[i + 1]) {
      return true;
    } else {
      return false;
    }
  }

  swap(): void {}
}
