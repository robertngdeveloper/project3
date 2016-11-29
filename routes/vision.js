// Require express module
const vision            = require('express').Router();
const { getVisionData }  = require('../services/vision');

// Route where the Microsoft Vision API posts the object as a JSON
vision.route('/')
  .post(getVisionData, (req, res) => {
  res.json(res.vision || []);
})

module.exports = vision;
