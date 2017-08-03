require('isomorphic-fetch');
require('dotenv').config();

function getNyc(req,res,next){
  fetch('https:data.cityofnewyork.us/resource/fhrw-4uyv.json?incident_zip=11223')
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.locals.nyc = jsonRes.main;
      return next();
    }).catch(err=>{
      console.log(err);
      return next();
    })
}

module.exports = {
  getNyc,
};
