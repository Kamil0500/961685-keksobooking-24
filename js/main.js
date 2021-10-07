import { newArray } from './module/fake-data.js';

const COUNT_OBJECT = 10;

const countArray = Array.from({length: COUNT_OBJECT}, newArray);

console.log(countArray);
