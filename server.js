const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const usersRouter = require('./routes/users-router');
const apiRouter = require('./routes/api-router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', usersRouter);
server.use('/api/users', apiRouter);

module.exports = server;