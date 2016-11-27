const images             = require('express').Router();
const { saveFavorites }  = require('../models/images');

images.post('/', saveFavorites, (req, res) => {
  res.json({ message: 'successfully saved image' });
})


module.exports = images;
