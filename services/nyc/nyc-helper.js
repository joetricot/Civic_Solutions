require('isomorphic-fetch');
require('dotenv').config();

function getNyc(req, res, next) {
  fetch(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?incident_zip=11223`)
    .then(fetchRes => {
      return fetchRes.json();
      next();
    }).then(jsonRes => {
      console.log(jsonRes[0].city);
      res.locals.complaint = jsonRes[0].complaint_type;
      res.locals.description = jsonRes[0].descriptor;
      res.locals.address = jsonRes[0].address;
      res.locals.agency_name = jsonRes[0].agency_name;
      console.log(jsonRes[0].descriptor);
      next();
    }).catch(err => {
      console.log(err);
      next();
    })
}

module.exports = {
  getNyc,
};
