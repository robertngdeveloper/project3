const router              = require('express').Router();
const { getVisionData }  = require('../services/vision');


router.get('/:url', (req, res) => {
  console.log(`!!!!!!!!!!{req.params.url}`)
  res.json(res.vision || []);
})

module.exports = router;
