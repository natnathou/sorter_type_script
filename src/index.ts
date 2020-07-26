import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { Sorter } from './Sorter';

let num = new NumberCollection([4, 7, 3, 9, 1]);
let chart = new StringCollection('Oiklers');

console.log(num.data);
console.log(chart.data);

num.sort();
chart.sort();

console.log(num.data);
console.log(chart.data);
