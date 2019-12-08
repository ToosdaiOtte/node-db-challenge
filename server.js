const express = require('express');
const server = express();

const helmet = require('helmet');

const ProjectRouter = require('./schemes/scheme-router.js');

server.use(express.json());
server.use('/projects', ProjectRouter);

module.exports = server;