import ReviewCards from "./ReviewCards";
import { getAllReviews, getAllReviewsByCategory } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllReviews = ({ reviews, setReviews, sortBy, orderBy }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    (category
      ? getAllReviewsByCategory(category)
      : getAllReviews(sortBy, orderBy)
    )
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  }, [category, sortBy]);

  if (isLoading) {
    return <h4 id="loadingMessage">Reviews Loading...</h4>;
  }

  return (
    <ul id="reviewsList">
      {reviews.map((review) => {
        return (
          <>
            {err ? <h4>{err}</h4> : null}
            <ReviewCards
              key={review.review_id}
              review={review}
              className="reviewCards"
            />
          </>
        );
      })}
    </ul>
  );
};

export default AllReviews;
