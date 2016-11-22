const router              = require('express').Router();
const { getVisionData }  = require('../services/vision');


router.get('/', getVisionData, (req, res) => {
  res.json(res.vision || []);
})

module.exports = router;
