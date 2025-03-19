//app.js
/*
//1번 방법
const math = require('./math.js');

console.log(math.add(5, 10));
console.log(math.subtract(15, 10));

//2번 방법
const { add, subtract } = require('./math.js');

console.log(add(5, 10));
console.log(subtract(15, 5));

import { add, subtract } from './math.js';
console.log(add(5, 3));

import { add as plus } from './math.js';
console.log(plus(5, 3));*/

import add, { subtract, fruits } from './math.js';
console.log(add(5, 3));
console.log(subtract(5, 3));

console.log(fruits);
