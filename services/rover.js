
const fetch = require('node-fetch');

const ROVER_KEY = process.env.ROVER_KEY;


function getRoverImages(req, res, next) {

 fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${ROVER_KEY}`)
 .then(r => r.json())
 .then((result) => {
   res.rover = result;
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 });
}


module.exports = { getRoverImages };
