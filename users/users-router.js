const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./users-model');

router.get('/', (req, res) => {
    const message500 = { message: 'Unable to get users' };
    Users.getUsers()
        .then(users => { res.status(200).json(users); })
        .catch(error => { res.status(500).json(message500); });
});

router.get('/:id', (req, res) => {
    const message404 = { error: "The user with the specified ID does not exist." }
    const message500 = { error: "The user information could not be retrieved." }

    Users
        .getById(req.params.id)
        .then(user => {
            user
                ? res.status(200).json(user)
                : res.status(404).json(message404);
        })
        .catch(err => { res.status(500).json(message500) })
});

router.post('/', (req, res) => {
    const { username, password, twitter_handle } = req.body;
    const message400 = { error: "Please provide a name and password for the user" }
    const message500 = { error: "There was an error while saving the user to the database" };

    if (username && password) {
        Users.addUser({ username, password, twitter_handle })
            .then(user => { res.status(201).json(user) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});

router.post('/register', (req, res) => {
    let user = req.body;
    let { username, password, twitter_handle } = user;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    if (username && password) {
        Users.addUser({ username, password, twitter_handle })
            .then(user => {
                const token = generateToken(user);
                res.status(201).json({ user, token });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json(error);
            });
    } else {
        res.status(500).json({ message: "User requires a username and password" });
    }
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        twitter_handle: user.twitter_handle
    };

    const options = {
        expiresIn: '12h'
    }

    const secret = process.env.JWT_SECRET;

    return jwt.sign(payload, secret, options)
}

module.exports = router;