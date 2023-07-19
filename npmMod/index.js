// const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue.italic("Hello world!"));

const res = validator.isEmail('foo@bar.com');
console.log(res);