const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./users-model');
const Personality = require('./personality-model');

router.get('/', (req, res) => {
    const message500 = { message: 'Unable to get users' };
    Users.getUsers()
        .then(users => { res.status(200).json(users); })
        .catch(error => { res.status(500).json(message500); });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const message404 = { error: "The user with the specified ID does not exist." }
    const message500 = { error: "The user information could not be retrieved." }

    Users
        .getById(id)
        .then(user => {
            Personality.getPersonalityById(id)
                .then(personality => {
                    res.status(200).json({ ...user, personality })
                })
                .catch(error => { res.status(404).json(message500); });
        })
        .catch(err => { res.status(500).json(message500) })
});

router.get('/personality', (req, res) => {
    const message500 = { message: 'Unable to get personality table' };
    Personality.getPersonality()
        .then(personality => { res.status(200).json(personality); })
        .catch(error => { res.status(500).json(message500); });
});

router.post('/register', (req, res) => {
    let user = req.body;
    console.log('user', user)
    let { username, password, twitter_handle } = user;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    if (username && password) {
        Users.addUser({ username, password: hash, twitter_handle })
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

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.getByUsername({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token,
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            console.log('error', error);
            res.status(500).json(error);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const message200 = { message: `User id: ${id} was successfully deleted` }
    const message404 = { message: `User id: ${id} does not exist` }

    Users
        .removeUser(id)
        .then(count => {
            count > 0
                ? res.status(200).json(message200)
                : res.status(404).json(message404)
        })
        .catch(err => {
            res.status(500).json(err);
        });
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