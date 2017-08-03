require('isomorphic-fetch');
require('dotenv').config();

function getNyc(req, res, next) {
  fetch(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?incident_zip=11223`)
    .then(fetchRes => {
      return fetchRes.json();
      next();
    }).then(jsonRes => {
      res.locals.nyc = jsonRes;
      next();
    }).catch(err => {
      console.log(err);
      next();
    })
}

module.exports = {
  getNyc,
};
