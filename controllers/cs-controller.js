const cs = require('../models/issue');

const csController = {};

csController.index = (req, res) => {
  cs.findAll()
    .then(cs => {
      res.render('issues/issue-index', {
        data: issues,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

csController.show = (req,res)=>{
  cs.findById(req.params.id)
    .then(cd=>{
      res.render('issues/issue-single', {
        cs: cs,
      })
    }).catch(err=>{
      console.log(err);
      res.status(500).json({err});
    });
};




csController.create = (req, res) =>{
  cs.create({
    description: req.body.description,
    address: req.body.address,
    user_id: req.user.id,
  }).then(cs => {
    console.log(cs);
    res.redirect('/');
  }).catch(err=>{
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = csController;
