const express = require('express');
const app = express();
const bodyParser = require('body-parser')

let {people} = require('./data');

app.get('/people', (req, res) => {
    res.json(people);
})

let jsonParser = bodyParser.json();
app.use('/people', jsonParser);

app.get('/people/:userId', (req, res) => {
    console.log("something received from frontend")
    const {userId} = req.params;
    console.log('user id ', userId)
    const foundUser = people.find((user) => user.id == userId)
    console.log('===> ', foundUser)
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.send({msg: 'User not found'});
    }
})

app.put('/people/:userId', (req, res) => {
    console.log("something received from frontend ", req.body)
    const {userId} = req.params;
    const name = req.body.name;
    console.log('user id ', userId)
    const foundUser = people.find((user) => user.id == userId)
    console.log('===> ', foundUser)
    if (foundUser) {
        foundUser.name = name;
        res.json(foundUser);
    } else {
        res.send({msg: 'User not found'});
    }
})

app.post('/people/', (req, res) => {
    console.log("something received from frontend ", req.body)
    const user = req.body;
    if (user) {
        people.push(user);
        res.json(user);
    } else {
        res.send({msg: 'User not found'});
    }
});


app.delete('/people/:userId', (req, res) => {
    console.log("something received from frontend")
    const {userId} = req.params;
    console.log('user id ', userId)
    const foundUsers = people.filter((user) => user.id != userId)
    console.log('===> ', foundUsers)
    if (foundUsers) {
        people = foundUsers;
        res.json(foundUsers);
    } else {
        res.send({msg: 'User not found'});
    }
})



app.get('*', (req, res) => {
    res.status(400).send({msg: 'Path not found!!!'});
})

app.listen(5000, () => {
    console.log("server is running at 5000")
});
