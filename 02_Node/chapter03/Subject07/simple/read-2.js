fs = require('fs');

const data = fs.readFileSync(
  './02_Node/chapter03/Subject07/simple/example.txt',
  'utf-8'
);
console.log(data);
