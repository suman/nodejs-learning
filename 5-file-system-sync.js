// const fs = require('fs');

// const result1 =  fs.readFileSync('./content/article/first-article.txt', 'utf8');
// const result2 =  fs.readFileSync('./content/article/second-article.txt', 'utf8');


// const result = fs.writeFileSync('./content/result.txt',  `The result is: ${result1}, ${result2}`, 'utf8');

// if (!result) {
//     return;
// }

// console.log(result);


const {readFileSync, writeFileSync} = require('fs');

const result1 =  readFileSync('./content/article/first-article.txt', 'utf8');
const result2 =  readFileSync('./content/article/second-article.txt', 'utf8');


const result = writeFileSync('./content/result.txt',  `The result is: ${result1}, ${result2}`, 'utf8');

const appendedRes = writeFileSync('./content/result.txt',  `I am being appended`, {flag: 'a+'});
console.log("something happened or not");
console.log(appendedRes);
console.log("something happened or not2");