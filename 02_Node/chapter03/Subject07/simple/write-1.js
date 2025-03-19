fs = require('fs');

const data = fs.readFileSync(
  './02_Node/chapter03/Subject07/simple/example.txt',
  'utf8'
);
fs.writeFileSync('./02_Node/chapter03/Subject07/simple/text-1.txt', data);
