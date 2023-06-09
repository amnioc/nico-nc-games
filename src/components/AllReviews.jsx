import ReviewCards from "./ReviewCards";
import { getAllReviews, getAllReviewsByCategory } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllReviews = ({ reviews, setReviews }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [err, setErr] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    (!category
      ? getAllReviews("created_at", "desc")
      : getAllReviewsByCategory(category)
    )
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  }, [category]);

  if (isLoading) {
    return <h4 id="loadingMessage">Reviews Loading...</h4>;
  }

  return (
    <ul className="reviews-list">
      {reviews.map((review) => {
        return (
          <section aria-label="reviews">
            {err ? <h4>{err}</h4> : null}
            <ReviewCards review={review} key={review.review_id} />
          </section>
        );
      })}
    </ul>
  );
};

export default AllReviews;
