class NumberCollection {
  constructor(public collection: number[]) {}

  get length(): number {
    return this.collection.length;
  }

  compare(): boolean {
    return true;
  }

  swap(): void {}
}
