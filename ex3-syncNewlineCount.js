const fs = require('fs');

const data = fs.readFileSync(process.argv[2]);
const string = data.toString();
const newLineCount = string.split('\n').length - 1;

console.log(newLineCount);
