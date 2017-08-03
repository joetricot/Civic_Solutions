const express = require('express');
const nycRouter = express.Router();

const nycHelper = require('../services/nyc/nyc-helper');
const nycController = require('../controllers/nyc-controller');

nycRouter.get('/', nycHelper.getNyc, nycController.index);

module.exports = nycRouter;
