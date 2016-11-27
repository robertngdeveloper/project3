const db = require('../db/db');

// function showAllFavorites(req, res, next) {
//  db.any(`SELECT * FROM images
//    WHERE userid = XXXXXX;`)
//  .then((images) => {
//    res.images = images;
//    next();
//  })
// }

function saveFavorites(req, res, next) {
  console.log('oy oy oy', req.body.username);
 db.none(`INSERT INTO savedSearch (roverUrl, bingUrl, visionText, username) VALUES ($1, $2, $3, $4);`, [req.body.url, req.body.url2, req.body.text, req.body.username])
 .then(next())
 .catch(err => next(err));
}

// function deleteFavorite(req, res, next) {
//  db.none(`DELETE FROM images WHERE id = $1`, [req.params.id])
//  .then(next())
//  .catch(err => mext(err));
// }


module.exports = { saveFavorites };
 // showAllFavorites,
 
 // deleteFavorite



