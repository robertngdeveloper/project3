const router              = require('express').Router();
const { getRoverImages }  = require('../services/rover')

router.get('/', getRoverImages, (req, res) => {
  res.json(res.rover || []);
})

module.exports = router;
