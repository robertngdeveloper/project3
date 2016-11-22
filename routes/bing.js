const router              = require('express').Router();
const { getBingImage }  = require('../services/bing')

router.get('/', getBingImage, (req, res) => {
  res.json(res.bing || []);
})

module.exports = router;
