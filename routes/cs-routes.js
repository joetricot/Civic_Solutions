const express = require('express');
const csRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const csController = require('../controllers/cs-controller');

// csRouter.get('/', csController.index);
csRouter.get('/', authHelpers.loginRequired, csController.index);
csRouter.post('/', authHelpers.loginRequired, csController.create);

csRouter.get('/new', authHelpers.loginRequired, (req,res)=>{
  res.render('issues/issue-add')
});

csRouter.get('/:id', authHelpers.loginRequired, csController.show);
csRouter.get('/:id/edit', authHelpers.loginRequired, csController.edit);
csRouter.put('/:id', authHelpers.loginRequired, csController.update);

csRouter.delete('/:id', authHelpers.loginRequired, csController.delete);

module.exports = csRouter;
