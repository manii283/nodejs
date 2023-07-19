const path = require("path");

console.log(path.dirname('E:/manisha-program/node-js/PathModule/path.js'))
console.log(path.extname('E:/manisha-program/node-js/PathModule/path.js'))
console.log(path.basename('E:/manisha-program/node-js/PathModule/path.js'))

const myPath = path.parse('E:/manisha-program/node-js/PathModule/path.js');
console.log(myPath.name);
console.log(myPath.root);