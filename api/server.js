const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const configureRoutes = require('../App-routes/routes')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// configureRoutes(server);

module.exports = server

