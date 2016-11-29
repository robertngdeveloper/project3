// Require express module
const images             = require('express').Router();
const { saveFavorites, getFavorites }  = require('../models/images');

// Route where all the rows of the savedSearch table passes through and returns
// as a JSON
images.get('/', getFavorites, (req, res) => {
  res.json(res.images || []);
})

// Route where the three APIs and the username posts to the savedSearch table
// and returns the message
images.post('/', saveFavorites, (req, res) => {
  res.json({ message: 'successfully saved image' });
})


module.exports = images;
