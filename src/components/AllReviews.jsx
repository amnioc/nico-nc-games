import ReviewCards from "./ReviewCards";
import { getAllReviews } from "../utils/api";
import { useEffect, useState } from "react";

const AllReviews = ({ reviews, setReviews }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

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
