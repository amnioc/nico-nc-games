import { useState } from "react";
import { patchReviewVotes } from "../utils/api";

const ReviewVotingButton = ({ review, setReview }) => {
  const [reviewVotes, setReviewVotes] = useState(`${review.votes}`);
  const [err, setErr] = useState(null);

  const handleVoteClick = () => {
    setReview((review) => {
      setErr(null);
      return { ...review, votes: review.votes + 1 };
    });
    patchReviewVotes(review.review_id)
      .then((votes) => {
        setReviewVotes(votes);
      })
      .catch((err) => {
        setErr("Oops! Something went wrong, please try again.");
        return { ...review, votes: review.votes - 1 };
      });
  };

  return (
    <span id="voting">
      Agree with {review.owner}? Add your vote:{" "}
      <button aria-label="add a vote" onClick={handleVoteClick}>
        🌈
      </button>
      {err ? <p>{err}</p> : null}
    </span>
  );
};

export default ReviewVotingButton;
