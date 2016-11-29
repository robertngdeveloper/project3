// Require the callback with the sql database
const db = require('../db/db');

// Function to add the username and password to the users table
function createUser(req, res, next) {
  db.none(`INSERT INTO users (username, password) VALUES ($1, $2)`, [req.body.username, req.body.password])
    .then(next())
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

// Function call that retrieves all the entries from the users table for the
// give username
function findByUsername(username) {
  return db.one('SELECT * FROM users WHERE username = $1', [username]);
}

module.exports = {
  createUser,
  findByUsername
};
