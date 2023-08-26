const express = require('express');
const app = express();
const people = require('./routes/people.js');
app.use(people);

app.get('*', (req, res) => {
    res.status(400).send({msg: 'Path not found!!!'});
})

app.listen(5000, () => {
    console.log("server is running at 5000")
});
