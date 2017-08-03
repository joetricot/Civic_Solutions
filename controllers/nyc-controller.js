const nycController = {};

nycController.index = (req, res)=>{
  nycController('nyc/nyc-index', {
    nyc: res.locals.nyc,
  });
};

module.exports = nycController;
