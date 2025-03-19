fs = require('fs');

fs.readFile(
  './02_Node/chapter03/Subject07/simple/example.txt',
  'utf8',
  (err, data) => {
    if (err) {
      console.log(err);
    }

    fs.writeFile(
      './02_Node/chapter03/Subject07/simple/text-2.txt',
      data,
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log('text-2.txt is saved!');
      }
    );
  }
);
