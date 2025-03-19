const fs = require('fs');

const rs = fs.createReadStream('./02_Node/chapter03/Subject07/hard/readMe.txt');

rs.on('data', (chunk) => {
  console.log('new chunk receiver: ');
  console.log(chunk.length, chunk);
})
  .on('end', () => {
    console.log('finished reading data');
  })
  .on('error', (err) => {
    console.log(`Error reading the file: ${err}`);
  });
