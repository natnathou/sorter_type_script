interface Sortable {
	length: number;
	compare(item: number): boolean;
	swap(item: number): void;
}

class Sorter {
	constructor(public collection: Sortable) {}

	sort(): void {
		let { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; i < length - i - 1; j++) {
				if (this.collection.compare(j)) {
					this.collection.swap(j);
				}
			}
		}
	}
}
