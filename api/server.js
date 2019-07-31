const express = require('express');


const cors = require('cors');
const helmet = require('helmet');

const server = express();

const app_routes = require('../app_routes/routes.js')


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', app_routes)



module.exports = server

