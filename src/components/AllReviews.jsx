import ReviewCards from "./ReviewCards";
import { getAllReviews, getAllReviewsByCategory } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllReviews = ({ reviews, setReviews }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    (category ? getAllReviewsByCategory(category) : getAllReviews()).then(
      (reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      }
    );
  }, [category]);

  if (isLoading) {
    return <h4 id="loadingMessage">Reviews Loading...</h4>;
  }

  return (
    <ul id="reviewsList">
      {reviews.map((review) => {
        return (
          <ReviewCards
            key={review.review_id}
            review={review}
            className="reviewCards"
          />
        );
      })}
    </ul>
  );
};

export default AllReviews;
