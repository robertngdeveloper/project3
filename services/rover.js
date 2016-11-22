
const fetch = require('node-fetch');

const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
const ROVER_KEY = process.env.ROVER_KEY;


function getRoverImages(req, res, next) {

 fetch(`${API_URL}sol=1000&api_key=${ROVER_KEY}`)
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
