
const express = require('express');
const ApiController = require('./controllers/ApiController');

const routes = express.Router();

routes.get('/', ApiController.index);

module.exports = routes;