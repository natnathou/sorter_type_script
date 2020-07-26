export class StringCollection {
	dataArray: string[];

	constructor(public data: string) {
		this.dataArray = this.data.split('');
	}

	get length(): number {
		return this.dataArray.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.dataArray[leftIndex].toLowerCase() >
			this.dataArray[rightIndex].toLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number): void {
		let lefItem = this.dataArray[leftIndex];
		this.dataArray[leftIndex] = this.dataArray[rightIndex];
		this.dataArray[rightIndex] = lefItem;
		this.data = this.dataArray.join('');
	}
}
