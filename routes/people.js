const express = require('express');
const router = express.Router();
let {people} = require('../data');

const bodyParser = require('body-parser')
let jsonParser = bodyParser.json();
router.use('/people', jsonParser);

router.get('/people', (req, res) => {
    res.json(people);
});

router.get('/people/:userId', (req, res) => {
    console.log("something received from frontend")
    const {userId} = req.params;
    console.log('user id ', userId)
    const foundUser = people.find((user) => user.id == userId)
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.send({msg: 'User not found'});
    }
})

router.put('/people/:userId', (req, res) => {
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

router.post('/people/', (req, res) => {
    console.log("something received from frontend ", req.body)
    const user = req.body;
    if (user) {
        people.push(user);
        res.json(user);
    } else {
        res.send({msg: 'User not found'});
    }
});

router.delete('/people/:userId', (req, res) => {
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

module.exports = router;