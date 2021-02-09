const GalleryModel = require('../models/GalleryModel.js');

const getListing = (request, response) => {
  const { listingId } = request.params;
  GalleryModel.getListing(listingId, (err, listing) => {
    if (err) {
      response.status(400).send(err)
    } else {
      response.status(200).send(listing)
    }
  })
}

const getImages = (request, response) => {
  const { listingId } = request.params;
  GalleryModel.getImages(listingId, (err, images) => {
    if (err) {
      response.status(400).send(err)
    } else {
      response.status(200).send(images)
    }
  })
}

const incrementViews = (request, response) => {
  const { listingId } = request.params;
  GalleryModel.incrementViews(listingId, (err, data) => {
    if (err) {
      response.status(400).send(err)
    } else {
      response.status(200).send(data)
    }
  })
}

const addFavorite = (request, response) => {
  GalleryModel.addFavorite(request.params, (err, data) => {
    if (err) {
      response.status(400).send(err)
    } else {
      response.status(200).send(data)
    }
  })
}

const removeFavorite = (request, response) => {
  GalleryModel.removeFavorite(request.params, (err, data) => {
    if (err) {
      response.status(400).send(err)
    } else {
      response.status(200).send(data)
    }
  })
}

module.exports = {
  getListing,
  getImages,
  incrementViews,
  addFavorite,
  removeFavorite
}