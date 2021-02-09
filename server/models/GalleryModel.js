const db = require('../../database/index.js');

const getListing = (listingId, callback) => {
  const q = `SELECT * FROM listings WHERE id = ${listingId}`;
  db.query(q, callback);
}

const incrementViews = (listingId, callback) => {
  const q = `UPDATE listings SET views = views + 1 WHERE id = ${listingId}`;
  db.query(q, callback);
}


const addFavorite = ({listingId, userId}, callback) => {
  const q = `INSERT INTO favorites (listingId, userId) VALUES (${listingId}, ${userId})`;
  db.query(q, callback);
}

const removeFavorite = ({listingId, userId}, callback) => {

}

module.exports = {
  getListing,
  incrementViews,
  addFavorite,
  removeFavorite
}