fs = require('fs');

const data = fs.readFileSync(
  './02_Node/chapter03/Subject07/simple/example.txt',
  'utf8'
);

if (fs.existsSync('text-1.txt')) {
  console.log('file already exist');
} else {
  fs.writeFileSync('./02_Node/chapter03/Subject07/simple/text-1.txt', data);
}
