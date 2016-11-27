const express = require('express');
const router = express.Router();
const { createUser } = require('../../models/user');

// handle all the routes

router.post('/', createUser, (req, res) => {
  console.log('user add route working');
  res.status(200).end();
});

module.exports = router;