import React, { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import { Link } from "react-router-dom";
import Tile from "../Tile/Tile";
import { MovieReview } from "../../types/types";

function Grid() {
  const [reviews, setReviews] = useState<MovieReview[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div className={styles.Content}>
      {reviews.map((review) => {
        const ReviewImage = review.image
          ? review.image
          : require("../../data/images/sleepysean.jpg");
        return (
          <Link
            to={`/review/${encodeURIComponent(review.title)}`}
            key={review.title}
          >
            <Tile
              title={review.title}
              image={ReviewImage}
              isaRating={review.isaRating}
              seanRating={review.seanRating}
              year={review.year}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Grid;
