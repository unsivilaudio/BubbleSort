export interface Sortable {
    length: number;
    compare(x: number, y: number): boolean;
    swap(x: number, y: number): void;
}

class Sorter {
    constructor(public collection: Sortable) {}

    sort(): void {
        const { length } = this.collection;
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - x - 1; y++) {
                if (this.collection.compare(y, y + 1)) {
                    this.collection.swap(y, y + 1);
                }
            }
        }
    }
}

export default Sorter;
