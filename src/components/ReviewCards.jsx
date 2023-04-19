import { Link } from "react-router-dom";
import SingleReviewPage from "../views/SingleReviewPage";

const ReviewCards = ({ review }) => {
  const datePosted = new Date(review.created_at).toDateString();

  const handleReviewClick = (event) => {
    return <SingleReviewPage />;
  };

  return (
    <li className="reviewCard">
      <Link to={`/reviews/${review.review_id}`} onClick={handleReviewClick}>
        <img
          src={review.review_img_url}
          alt={review.title}
          className="cardImage"
        />

        <h4 className="reviewTitle">{review.title}</h4>
      </Link>
      <section className="review-card-details">
        <h5>By: {review.owner}</h5>
        <h5 id="reviewDate">
          {datePosted} • {review.category} • {review.comment_count} comments
        </h5>
        <h5 id="votesCount">
          <span>
            votes: {review.votes}{" "}
            <span role="img" aria-label="rainbow">
              🌈
            </span>
          </span>
        </h5>
      </section>
    </li>
  );
};

export default ReviewCards;
