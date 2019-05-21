const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const usersRouter = require('./users/users-router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

server.use('/users', usersRouter);

module.exports = server;