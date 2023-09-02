const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser')
let jsonParser = bodyParser.json();

const {
    allPeople,
    singleUser,
    updateUser,
    newUser,
    deleteUser
} = require('../controllers/people.js');

router.use('/people', jsonParser);

router.get('/people', allPeople);

router.get('/people/:userId', singleUser);

router.put('/people/:userId', updateUser);

router.post('/people/', newUser);

router.delete('/people/:userId', deleteUser);



module.exports = router;