import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Review.module.css";
import Bees from "../Bees/Bees";

// Assuming this is the shape of your review data
interface ReviewType {
  title: string;
  year?: number;
  image?: string;
  isaRating?: number;
  seanRating?: number;
  reviewText?: string;
}

function Review() {
  // Access the title parameter from the URL
  let { title } = useParams<{ title: string }>();
  // Decode the URI component in case the title includes special characters
  title = decodeURIComponent(title!);
  // Initialize the review state with a null value, and explicitly type it as ReviewType | null
  const [review, setReview] = useState<ReviewType | null>(null);

  const navigate = useNavigate();

  // Function to handle button click
  const navigateHome = () => {
    navigate('/'); // Assuming '/' is your home route
  };


  useEffect(() => {
    // Fetch the review details based on `title`
    fetch(`/api/reviews/${title}`)
      .then((response) => response.json())
      .then((data) => setReview(data)) // Set the fetched review data
      .catch((error) => console.error("Error fetching review:", error));
  }, [title]); // Include `title` in the dependency array to refetch when it changes

  // Conditionally render the review content or a loading message
  return (
    <div className={styles.Container}>
      <button onClick={navigateHome}>Back</button>
      <div className={styles.ReviewContainer}>
        {review ? (
          <div className={styles.ContentContainer}>
            <div className={styles.Header}>
              <h1>{review.title}</h1>
              <p>{review.year}</p>
            </div>
            <div className={styles.Content}>
              <div className={styles.LeftContainer}>
                <div className={styles.Text}>{review.reviewText}</div>
                <Bees
                  isaRating={review.isaRating}
                  seanRating={review.isaRating}
                />
              </div>
                {review.image && <img src={review.image} alt={review.title} />}
            </div>
          </div>
        ) : (
          <div>Loading review...</div> // Display a loading message or spinner when data is being fetched
        )}
      </div>
    </div>
  );
}

export default Review;
