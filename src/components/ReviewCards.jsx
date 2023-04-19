import { Link } from "react-router-dom";
import SingleReviewPage from "../views/SingleReviewPage";

const ReviewCards = ({ review }) => {
  const datePosted = new Date(review.created_at).toDateString();

  const handleReviewClick = (event) => {
    return <SingleReviewPage />;
  };

  return (
    <li className="review-card">
      <Link to={`/reviews/${review.review_id}`} onClick={handleReviewClick}>
        <img
          src={review.review_img_url}
          alt={review.title}
          className="review-card-image"
        />

        <h4 className="review-card-title">{review.title}</h4>
      </Link>
      <section className="review-card-details">
        <h5>
          By: {review.owner}
          <span className="review-card-votes">
            <span aria-label="rainbow vote symbol">🌈</span>
            {review.votes} votes
            <span aria-label="rainbow vote symbol">🌈</span>
          </span>
        </h5>
        <h5 className="review-card-date">
          {datePosted} • {review.category} • {review.comment_count} comments
        </h5>
      </section>
    </li>
  );
};

export default ReviewCards;
