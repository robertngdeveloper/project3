const fetch = require('node-fetch');
const VISION_KEY = process.env.VISION_KEY;

function getVisionData(req, res, next) {
  console.log('*********************',{req})
  const image = 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG';
  const URL = 'https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Description,Tags';
  const paramsObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': VISION_KEY,
    },
    body: JSON.stringify({ 'url': image }),
  };
  fetch(URL, paramsObj)
   .then(r => r.json())
   .then((data) => {
     res.vision = data;
     next();
   })
.catch(e => console.log('error ***', e));
}


module.exports = { getVisionData };
