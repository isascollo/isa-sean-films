const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Review = require("./models/Review");
const Secret = require("./models/Secret");

require("dotenv").config();

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

app.use(cors());

app.use(express.json());

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

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

app.post("/api/reviews", (req, res) => {
  const newReviewData = {
    ...req.body,
    dateAdded: new Date(),
    dateUpdated: new Date(),
  };

  const newReview = new Review(newReviewData);

  newReview
    .save()
    .then(() => res.json("Review added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/login", async (req, res) => {
  const secret = await Secret.findOne(); // Assuming there's only one document in the Secret collection
  if (secret && (await bcrypt.compare(req.body.password, secret.password))) {
    const token = jwt.sign({ _id: secret._id }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(400).send("Invalid password");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
