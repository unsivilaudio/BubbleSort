import Sorter, { Sortable } from './Sorter';

class CharactersCollection extends Sorter implements Sortable {
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase()
        );
    }

    swap(leftIndex: number, rightIndex: number) {
        const characters = this.data.split('');

        const leftHand = this.data[leftIndex];
        characters[leftIndex] = this.data[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    }
}

export default CharactersCollection;
