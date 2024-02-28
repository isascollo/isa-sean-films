import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Review.module.css";

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

  useEffect(() => {
    // Fetch the review details based on `title`
    fetch(`/api/reviews/${title}`)
      .then((response) => response.json())
      .then((data) => setReview(data)) // Set the fetched review data
      .catch((error) => console.error("Error fetching review:", error));
  }, [title]); // Include `title` in the dependency array to refetch when it changes

  // Conditionally render the review content or a loading message
  return (
    <div>
      {review ? (
        <div>
          <h1>{review.title}</h1>
          <div className={styles.Content}>
            <div className={styles.Text}>{review.reviewText}</div>
            {review.image && <img src={review.image} alt={review.title} />}
          </div>
        </div>
      ) : (
        <div>Loading review...</div> // Display a loading message or spinner when data is being fetched
      )}
    </div>
  );
}

export default Review;
