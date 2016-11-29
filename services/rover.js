// Require node-fetch module
const fetch = require('node-fetch');
// Function call to pull images from the NASA Mars Rover API
function getRoverImages(req, res, next) {
// Create a const variable for processing the NASA Mars Rover API
 const ROVER_KEY = process.env.ROVER_KEY;
 // Create a const variable to input into the API fetch call that randomly
 // selects the image to pull and return the object
 const month = Math.floor(Math.random() * 12) + 1;
 const day = Math.floor(Math.random() * 28) + 1;

 fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-${month}-${day}&api_key=${ROVER_KEY}`)
 .then(r => r.json())
 .then((result) => {
   res.rover = result;
   console.log('the fetch for rover is', result);
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 });
}


module.exports = { getRoverImages };
