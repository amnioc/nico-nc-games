import { Link } from "react-router-dom";
import SingleReviewPage from "../views/SingleReviewPage";

const ReviewCards = ({ review }) => {
  const datePosted = new Date(review.created_at).toDateString();

  const handleReviewClick = (event) => {
    return <SingleReviewPage />;
  };

  return (
    <li className="review-card" key={review.review_id}>
      <h5 className="review-card-date">
        {datePosted} • {review.category.replaceAll("-", " ")} •{" "}
        {review.comment_count} comments
      </h5>
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
            <span aria-label="rainbow symbol">🌈</span>
            {review.votes} votes
            <span aria-label="rainbow symbol">🌈</span>
          </span>
        </h5>
      </section>
    </li>
  );
};

export default ReviewCards;
