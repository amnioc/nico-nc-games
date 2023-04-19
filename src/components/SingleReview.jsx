import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchReviewByID } from "../utils/api";
import CommentsSection from "./CommentsSection";

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
      <section className="fullReviewDetails">
        <div className="LHSReviewDetails">
          <img
            alt={`related to ${thisReview.title}`}
            src={thisReview.review_img_url}
          />
          <h3>Written By: {thisReview.owner}</h3>
          <h4>Review Votes: {thisReview.votes}</h4>
          <h4 id="postedDate">
            Posted on: {new Date(thisReview.created_at).toString()}
          </h4>
        </div>
        <div className="RHSReviewDetails">
          <h4 id="reviewBody">"{thisReview.review_body}"</h4>
          <details>
            <summary>Did You Know?</summary>
            <h4>{thisReview.designer} designed this game</h4>
          </details>
          <span id="voting">
            Agree with {thisReview.owner}? Add your vote:{" "}
            <button role="img" aria-label="add a vote">
              🌈
            </button>
          </span>
        </div>
      </section>
      <CommentsSection review_id={thisReview.review_id} />
    </>
  );
};

export default SingleReview;
