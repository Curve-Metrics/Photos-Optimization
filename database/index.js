const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photoGallery', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to photoGallery database!');
});

const addressSchema = new mongoose.Schema({
  line1: String,
  line2: String,
  neighborhood: String,
  neighborhoodUrl: String,
});

const floorplanSchema = new mongoose.Schema({
  numBeds: Number,
  numBaths: Number,
  sqft: Number,
});

const houseDetailsSchema = new mongoose.Schema({
  address: { type: addressSchema, default: {} },
  price: Number,
  floorplan: { type: floorplanSchema, default: {} },
});

const homesSchema = new mongoose.Schema({
  id: Number,
  images: Array,
  tags: Array,
  details: { type: houseDetailsSchema, default: {} },
  saved: { type: Boolean, default: false },
});

module.exports.db = db;
module.exports.Homes = mongoose.model('Homes', homesSchema);
