import ReviewCards from "./ReviewCards";
import { getAllReviews } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../contexts/CategoryMenu";

const AllReviews = ({ reviews, setReviews }) => {
  const { categoryChosen, setCategoryChosen } = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllReviews(categoryChosen).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [categoryChosen]);

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
