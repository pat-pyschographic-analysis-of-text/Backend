const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../data/models/users-model');
const Personality = require('../data/models/personality-model');
const Needs = require('../data/models/needs-model');
const Values = require('../data/models/values-model');
const Favorites = require('../data/models/favorites-model');

router.get('/', checkIfAdmin, (req, res) => {
// router.get('/', (req, res) => {
    const message500 = { message: 'Unable to get users' };
    Users.getUsers()
        .then(users => { res.status(200).json(users); })
        .catch(error => { res.status(500).json(message500); });
});

router.get('/:username', (req, res) => {
    const username = req.params.username;
    const personality404 = { error: `Username ${username} does not have a personality table.` };
    const needs404 = { error: `Username ${username} does not have a needs table.` };
    const values404 = { error: `Username ${username} does not have a values table.` };
    const favorites404 = { error: `Username ${username} does not have a favorites table.` };
    const message500 = { error: `Username ${username} could not be retrieved.` };

    Users.getByUsername(username)
        .then(user => {
            const id = user.id;
            const filteredUser = {
                id: user.id,
                username: user.username,
            }
            Personality.getPersonalityById(id)
                .then(personality => {
                    const filtedPersonality = {
                        personality: {
                            openness: personality.openness,
                            conscientiousness: personality.conscientiousness,
                            extraversion: personality.extraversion,
                            agreeableness: personality.agreeableness,
                            emotional: personality.emotional,
                        }
                    };
                    Needs.getNeedsById(id)
                        .then(needs => {
                            const filtedNeeds = {
                                needs: {
                                    challenge: needs.challenge,
                                    closeness: needs.closeness,
                                    curiosity: needs.curiosity,
                                    excitement: needs.excitement,
                                    harmony: needs.harmony,
                                    ideal: needs.ideal,
                                    liberty: needs.liberty,
                                    love: needs.love,
                                    practicality: needs.practicality,
                                    self_expression: needs.self_expression,
                                    stability: needs.stability,
                                    structure: needs.structure,
                                }
                            };
                            Values.getValuesById(id)
                                .then(values => {
                                    const filtedValues = {
                                        values: {
                                            conservation: values.conservation,
                                            openness: values.openness,
                                            hedonism: values.hedonism,
                                            self_enhancement: values.self_enhancement,
                                            self_transcendence: values.self_transcendence,
                                        }
                                    };
                                    Favorites.getFavorites()
                                        .then(favorites => {
                                            const userFavorites = favorites.filter(favorite => favorite.user_id === id);
                                            const filteredFavorites = { favorites: userFavorites.map(favorite => favorite.twitter_handle) };

                                            res.status(200).json({
                                                ...filteredUser,
                                                ...filtedPersonality,
                                                ...filtedNeeds,
                                                ...filtedValues,
                                                ...filteredFavorites
                                            })
                                        })
                                        .catch(error => { res.status(404).json(favorites404) });
                                })
                                .catch(error => { res.status(404).json(values404) });
                        })
                        .catch(error => { res.status(404).json(needs404) });
                })
                .catch(error => { res.status(404).json(personality404) });
        })
        .catch(err => { res.status(500).json(message500) })
});

router.post('/register', (req, res) => {
    let user = req.body;
    let { username, password, twitter_handle } = user;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    if (username && password && twitter_handle) {
        Users.addUser({ username, password: hash, twitter_handle })
            .then(user => {
                const token = generateToken(user);
                res.status(201).json({ id: user.id, username, twitter_handle, token });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json(error);
            });
    } else {
        res.status(500).json({ message: "User requires a username, password and twitter_handle" });
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.getByUsername(username)
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    userId: user.id,
                    username: user.username,
                    twitter_handle: user.twitter_handle,
                    token,
                });
            }
            else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            console.log('error', error);
            res.status(500).json(error);
        });
});

router.post('/:id/favorites/', (req, res) => {
    const twitter_handle = req.body.twitter_handle;
    const message400 = { error: "Please provide twitter_handle for the favorite" }
    const message500 = { error: "There was an error saving the favorite to the database" };


    if (twitter_handle) {
        Favorites.addFavorite({ user_id: req.params.id, twitter_handle: twitter_handle })
            .then(favorite => { res.status(201).json(favorite) })
            .catch(err => { res.status(500).json(message500) });
    }
    else {
        res.status(400).json(message400);
    }
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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const twitter_handle = req.body.twitter_handle;

    const message400 = { error: `Please provide username and twitter_handle` };
    const message404 = { error: `User id: ${id} does not exist` };
    const message500 = { error: `User id: ${id} could not be updated. Please provide username, password and twitter_handle` };

    if (username === '') {
        res.status(400).json(message400);
    }
    else {
        Users
            .update(id, { username, twitter_handle })
            .then(response => {
                console.log(response);
                if (response === 1) {
                    Users.getById(id)
                        .then(user => {
                            const { username, twitter_handle } = user;
                            res.status(200).json({ username, twitter_handle });
                        })
                        .catch(error => { res.status(404).json(values404) });
                } else {
                    res.status(404).json(message404)
                }
            })
            .catch(error => {
                res.status(500).json(message500)
            });
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

function checkJWT(req, res, next) {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ error: "Invalid token" })
        } else {
            next();
        }
    });
}

function checkIfAdmin(req, res, next) {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ error: "Invalid token" })
        } else {
            req.decodedToken = decodedToken;
            req.decodedToken.username === 'admin'
                ? next()
                : res.status(401).json({ error: "Not logged in as admin" })
        }
    });
}

module.exports = router;