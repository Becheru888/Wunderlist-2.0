const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const app_routes = require('../app-routes/routes')


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', app_routes)



module.exports = server

