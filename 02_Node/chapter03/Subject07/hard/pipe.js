const fs = require('fs');

const rs = fs.createReadStream(
  './02_Node/chapter03/Subject07/hard/readMe.txt',
  'utf8'
);
const ws = fs.createWriteStream(
  './02_Node/chapter03/Subject07/hard/writeMe.txt'
);

rs.pipe(ws);
