const {readFile, writeFile} = require('fs');

readFile('./content/article/first-article.txt', 'utf8', (error, result) => {
    if (error) {
        console.log("error: ", error);
    }

    readFile('./content/article/second-article.txt', 'utf8', (error, result2) => {
        if (error) {
            console.log("error: ", error);
        }
    
        writeFile('./content/result.txt', `This is final result: ${result}, ${result2}`, (error, finalResult) => {
            if (error) {
                console.log("error: ", error);
            }
            console.log("final result ", finalResult)
        });
    });
});
