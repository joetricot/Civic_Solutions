const nycController = {};

nycController.index = (req, res)=>{
  res.render('nyc/nyc-index', {
    nyc: res.locals.nyc,
  });
}

module.exports = nycController;
