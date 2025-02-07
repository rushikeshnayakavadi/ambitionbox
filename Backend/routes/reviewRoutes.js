// Import necessary modules
const express = require('express');
const router = express.Router();
const CompanyReview = require('../models/CompanyReview'); // Import the model for reviews

// Route to get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await CompanyReview.find(); // Fetch all reviews from the database
    res.status(200).json(reviews); // Send reviews as a JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews', error: err });
  }
});

// Route to add a new review
router.post('/', async (req, res) => {
  const { companyName, reviewText, rating } = req.body; // Destructure incoming data

  const newReview = new CompanyReview({
    companyName,
    reviewText,
    rating,
  });

  try {
    const savedReview = await newReview.save(); // Save the new review to the database
    res.status(201).json(savedReview); // Respond with the saved review
  } catch (err) {
    res.status(400).json({ message: 'Error adding review', error: err });
  }
});

module.exports = router; // Export the router so it can be used in the main app