import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchReviewByID } from "../utils/api";
import CommentsSection from "./CommentsSection";
import ReviewVotingButton from "./ReviewVotingButton";

const SingleReview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [thisReview, setThisReview] = useState("");
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviewByID(review_id).then((review) => {
      setThisReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <h3>Review loading...</h3>;
  }

  return (
    <>
      <h2>{thisReview.title}</h2>
      <article className="fullReviewDetails">
        <section className="review-overview">
          <img
            alt={`gameplay for ${thisReview.title}`}
            src={thisReview.review_img_url}
          />
          <h3>Written By: {thisReview.owner}</h3>
          <h4>Review Votes: {thisReview.votes}</h4>
          <time id="postedDate">
            Posted: {new Date(thisReview.created_at).toString()}
          </time>
        </section>
        <section className="review-full-details">
          <h4 id="reviewBody">"{thisReview.review_body}"</h4>
          <details>
            <summary>Did You Know?</summary>
            <h4>{thisReview.designer} designed this game</h4>
          </details>
        </section>
        <section className="review-voting">
          <ReviewVotingButton review={thisReview} setReview={setThisReview} />
        </section>
      </article>

      <CommentsSection review_id={thisReview.review_id} />
    </>
  );
};

export default SingleReview;
