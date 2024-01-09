// models/listing.js

const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salesPerMonth: {
    type: Number,
    default: null,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
