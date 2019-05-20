const router = require('express').Router();
const Users = require('./users-model');

router.post('/', (req, res) => {
    const { name, description } = req.body;
    const message400 = { error: "Please provide a name and password for the user" }
    const message500 = { error: "There was an error while saving the user to the database" };

    if (name && description) {
        Users.addUser({ username, passowrd })
            .then(user => { res.status(201).json(user) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});

module.exports = router;