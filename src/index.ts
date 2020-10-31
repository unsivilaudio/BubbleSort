import Sorter from './Sorter';
import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';

const nums = new NumbersCollection([10, 3, -5, 0, 8, 2, 5]);
const sorter = new Sorter(nums);
sorter.sort();

console.log(nums.data);

const letters = new CharactersCollection('rgecaPrQbc');
const wordSorter = new Sorter(letters);
wordSorter.sort();

console.log(letters.data);
