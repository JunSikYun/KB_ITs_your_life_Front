fs = require('fs');

if (fs.existsSync('./02_Node/chapter03/Subject07/simple/test')) {
  console.log('folder already exists');
} else {
  fs.mkdir('./02_Node/chapter03/Subject07/simple/test', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('folder created');
  });
}
