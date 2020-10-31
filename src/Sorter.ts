export interface Sortable {
    length: number;
    compare(x: number, y: number): boolean;
    swap(x: number, y: number): void;
}

abstract class Sorter {
    abstract length: number;
    abstract compare(x: number, y: number): boolean;
    abstract swap(x: number, y: number): void;

    sort(): void {
        const { length } = this;
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - x - 1; y++) {
                if (this.compare(y, y + 1)) {
                    this.swap(y, y + 1);
                }
            }
        }
    }
}

export default Sorter;
