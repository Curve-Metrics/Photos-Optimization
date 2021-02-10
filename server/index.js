const NewRelic = require('newrelic');
const path = require('path');
const express = require('express');
const cors = require('cors');
const GalleryController = require('./controllers/GalleryController.js');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use('/', express.static('public'));
app.use('/:homeId', express.static('public'));

app.get('/api/listings/:listingId/details', GalleryController.getListing);
app.get('/api/listings/:listingId/images', GalleryController.getImages);
app.get('/api/listings/:userId/favorites', GalleryController.getUserFavorites);
app.patch('/api/listings/:listingId/views', GalleryController.incrementViews);
app.post('/api/listings/:listingId/favorites/:userId', GalleryController.addFavorite);
app.delete('/api/listings/:listingId/favorites/:userId', GalleryController.removeFavorite)

app.listen(port, () => {
  console.log('listening at port ', port);
});
