const db = require('../../database/index.js');

const getListing = (listingId, callback) => {
  const q = `SELECT * FROM listings WHERE id = ${listingId}`;
  db.query(q, callback);
}

const getImages = (listingId, callback) => {
  const q = `SELECT * FROM images WHERE listing_id = ${listingId}`;
  db.query(q, callback);
}

const incrementViews = (listingId, callback) => {
  const q = `UPDATE listings SET views = views + 1 WHERE id = ${listingId}`;
  db.query(q, callback);
}


const addFavorite = ({listingId, userId}, callback) => {
  const q = `INSERT INTO favorites (userId, listing_id) VALUES (${userId}, ${listingId})`;
  db.query(q, callback);
}

const removeFavorite = ({listingId, userId}, callback) => {
  const q = `DELETE FROM favorites WHERE userId = ${userId} AND ${listingId} = listing_id`;
  db.query(q, callback);
}

//  get listing and images from images table

// const getListingAndImages = (listingId, callback) => {
//   const q = `SELECT * FROM listings WHERE id = ${listingId}`;
//   db.query(q, callback);
// }

module.exports = {
  getListing,
  getImages,
  incrementViews,
  addFavorite,
  removeFavorite
}