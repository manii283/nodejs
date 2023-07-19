// console.log("welcom to node js") 
const fs = require("fs");

//create a new file 
// fs.writeFileSync("read.txt", "welcom");

// added text in existing file
// fs.writeFileSync("read.txt", "welcom to node js 👍");


// fs.appendFileSync("read.txt", "hiiiiiiii");


// read data
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

org_data = buf_data.toString();
console.log(org_data);

//rename file 
fs.renameSync("read.txt", "readwrite.txt");