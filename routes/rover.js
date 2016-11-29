// Require express module
const router              = require('express').Router();
const { getRoverImages }  = require('../services/rover');

// Route where NASA Mars Rover API is called and renders the object as a JSON
router.get('/', getRoverImages, (req, res) => {
  res.json(res.rover || []);
})

module.exports = router;
