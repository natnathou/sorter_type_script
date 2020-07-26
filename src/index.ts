import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { Sorter } from './Sorter';

let num = new NumberCollection([4, 7, 3, 9, 1]);
let chart = new StringCollection('Oiklers');
let sorterNum = new Sorter(num);
let sorterString = new Sorter(chart);

console.log(num.data);
console.log(chart.data);

sorterNum.sort();
sorterString.sort();

console.log(num.data);
console.log(chart.data);
