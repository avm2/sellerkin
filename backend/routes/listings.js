// routes/listings.js

const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update likes for a listing
router.put('/:id/update-likes', async (req, res) => {
  try {
    const listingId = req.params.id;
    const { likes } = req.body;

    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      { $set: { likes } },
      { new: true }
    );

    res.json(updatedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
