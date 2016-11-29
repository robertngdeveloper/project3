// Require express module
const bing              = require('express').Router();
const { getBingImage }  = require('../services/bing')

// Route where the select Bing Image API posts the object as a JSON
bing.route('/')
.post(getBingImage, (req, res) => {
  res.json(res.bing || []);
})

module.exports = bing;
