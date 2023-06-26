const path = require('path');

const filePath =  path.join('/content', 'article', 'article.txt');

console.log(path.basename(filePath));

console.log(path.isAbsolute(filePath));

const resolvedPath = path.resolve(__dirname, 'content', 'article', 'first-article.txt');
console.log(resolvedPath);