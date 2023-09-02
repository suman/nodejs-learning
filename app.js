const express = require('express');
const app = express();
const peopleRoute = require('./routes/people.js');
app.use(peopleRoute);

app.get('*', (req, res) => {
    res.status(400).send({msg: 'Path not found!!!'});
})

app.listen(5000, () => {
    console.log("server is running at 5000")
});
