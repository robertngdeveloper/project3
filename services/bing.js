// Require node-fetch module
const fetch = require('node-fetch');
// Create a const variable for processing the Bing Images API
const BING_KEY = process.env.BING_KEY;

// Function call that fetches the Bing Images API call as a parameter and the
// query string from the body and returns the objects of the API
function getBingImage(req, res, next) {

  const searchWords = req.body.string;
  const URL = `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${searchWords}&count=5&license=ModifyCommercially`;

  const paramsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': BING_KEY,
    },
    body: searchWords,
  };
  fetch(URL, paramsObj)
   .then(r => r.json())
   .then((data) => {
     res.bing = data;
     next();
   })
.catch(e => console.log('error ***', e));

}


module.exports = { getBingImage };
