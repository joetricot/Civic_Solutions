const cs = require('../models/issue');

const csController = {};

csController.index = (req, res) => {
  cs.findAll(req.user.id)
    .then(cs => {
      res.render('issues/issue-index', {
        data: cs,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

csController.show = (req,res)=>{
  cs.findById(req.params.id)
    .then(cs=>{
      res.render('issues/issue-single', {
        cs: cs,
      })
    }).catch(err=>{
      console.log(err);
      res.status(500).json({ err });
    });
};

csController.create = (req, res) =>{
  cs.create({
    description: req.body.description,
    address: req.body.address,
    user_id: req.user.id,
  }).then(cs => {
    console.log(cs);
    res.redirect('/issues');
  }).catch(err=>{
    console.log(err);
    res.status(500).json({err});
  });
};

csController.edit=(req,res)=>{
  cs.findById(req.params.id)
    .then(cs=>{
      res.render('issues/issue-single-edit', {
        cs: cs,
      })
    }).catch(err=>{
    console.log(err);
    res.status(500).json({ err });
  });
}

csController.update=(req,res)=>{
  cs.update({
    description: req.body.description,
    address: req.body.address,
    user_id: req.user.id,
  }, req.params.id).then(cs=>{
      res.redirect('/issues');
  }).catch(err=>{
    console.log(err);
    res.status(500).json({ err })
  });
}

csController.delete=(req,res)=>{
  cs.destroy(req.params.id)
    .then(()=>{
      res.redirect('/issues');
    }).catch(err=>{
      console.log(err);
      res.status(500).json({ err })
    });
}

module.exports = csController;
