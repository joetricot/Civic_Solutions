const express = require('express');
const csRouter = express.Router();

const csController = require('../controllers/cs-controller');
const authHelpers = require('../services/auth/auth-helpers');

csRouter.get('/', authHelpers.loginRequired, csController.index);
csRouter.post('/', authHelpers.loginRequired, csController.create);

csRouter.get('/new', authHelpers.loginRequired, (req,res)=>{
  res.render('issues/issue-add')
});


module.exports = csRouter;
