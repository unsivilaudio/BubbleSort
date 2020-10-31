import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';
import LinkedList from './LinkedList';

const nums = new NumbersCollection([10, 3, -5, 0, 8, 2, 5]);
// const numSorter = new Sorter(nums);
nums.sort();

console.log(nums.data);

const letters = new CharactersCollection('rgecaPrQbc');
// const wordSorter = new Sorter(letters);
letters.sort();

console.log(letters.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const linkSorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
