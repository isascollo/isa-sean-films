const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: String,
    year: Number,
    image: String,
    isaRating: Number,
    seanRating: Number,
    reviewText: String,
    dateAdded: Date,
    dateUpdated: Date,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
