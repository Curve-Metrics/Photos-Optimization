const db = require('../../database/index.js');

const getListing = (listingId, callback) => {
//   db.query(
//     "SELECT  FROM ",
//     [],
//     (error)
//   )

}

const incrementViews = (listingId, callback) => {

}


const addFavorite = ({listingId, userId}, callback) => {
  // const q = `INSERT INTO favorites (listingId, userId) VALUES (${listingId}, ${userId})`;
  // db.query(q, [listingId, userId] ,callback);
}

const removeFavorite = ({listingId, userId}, callback) => {

}

module.exports = {
  getListing,
  incrementViews,
  addFavorite,
  removeFavorite
}