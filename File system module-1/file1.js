const fs=require('fs');

// read file content using blocking code
console.log("starting to read",{encoding:'utf8'});

const buffer=fs.readFileSync('file.txt');
// console.log(buffer.toString());
console.log(buffer);

console.log("another operation is being performed");
