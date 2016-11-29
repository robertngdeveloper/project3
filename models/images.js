// Require the callback with the sql database
const db = require('../db/db');

// Function call to retrieve all entries from the savedSearch table of the
// database
function getFavorites(req, res, next) {
 db.any(`SELECT * FROM savedSearch;`)
 .then((images) => {
   res.images = images;
   next();
 })
 .catch(error => next(error));
}

// Function call that adds the entries of the three APIs and the username to the
// savedSearch table of the database
function saveFavorites(req, res, next) {
 db.none(`INSERT INTO savedSearch (roverUrl, bingUrl, visionText, username) VALUES ($1, $2, $3, $4);`, [req.body.url, req.body.url2, req.body.text, req.body.username])
 .then(next())
 .catch(err => next(err));
}

// function deleteFavorite(req, res, next) {
//  db.none(`DELETE FROM images WHERE id = $1`, [req.params.id])
//  .then(next())
//  .catch(err => mext(err));
// }


module.exports = {
  getFavorites,
  saveFavorites
};
 // showAllFavorites,

 // deleteFavorite



