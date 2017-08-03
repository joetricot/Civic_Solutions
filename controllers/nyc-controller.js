const nycController = {};

nycController.index = (req, res)=>{
  res.render('nyc/nyc-index', {
    data: res.locals.nyc,
  });
}

module.exports = nycController;
