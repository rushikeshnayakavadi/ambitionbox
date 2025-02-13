const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
