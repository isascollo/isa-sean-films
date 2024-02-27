const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define a Mongoose schema and model for movie reviews
const reviewSchema = new mongoose.Schema({
  title: String,
  year: Number,
  image: String,
  isaRating: Number,
  seanRating: Number,
  reviewText: String,
});

const Review = mongoose.model("Review", reviewSchema);

app.get("/api/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/reviews", (req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/api/reviews/:title", (req, res) => {
  const reviewTitle = req.params.title;

  Review.findOne({ title: reviewTitle })
    .then((review) => {
      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ message: "Review not found" });
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// POST route to submit a new review
app.post("/api/reviews", (req, res) => {
  const newReview = new Review({
    title: req.body.title,
    year: req.body.year,
    image: req.body.image,
    isaRating: req.body.isaRating,
    seanRating: req.body.seanRating,
    reviewText: req.body.reviewText,
  });

  newReview
    .save()
    .then(() => res.json("Review added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
