const {readFile, writeFile} = require('fs');

const getFileText = (fileUrl) => {
    return new Promise((resolve, reject) => {
        readFile(fileUrl, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

const result1 =  getFileText('./content/article/first-article.txt');
result1.then((result) => console.log("first result ", result));

const result2 =  getFileText('./content/article/second-article.txt');
result2.then((result) => console.log("second result: ", result));
