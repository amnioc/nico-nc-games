import { useState } from "react";
import { patchReviewVotes } from "../utils/api";

const ReviewVotingButton = ({ review, setReview }) => {
  const [reviewVotes, setReviewVotes] = useState(`${review.votes}`);
  const [err, setErr] = useState(null);

  const handleVoteClick = (event) => {
    setReview((review) => {
      setErr(null);
      event.currentTarget.disabled = true;
      return { ...review, votes: review.votes + 1 };
    });

    patchReviewVotes(review.review_id)
      .then((votes) => {
        setReviewVotes(votes);
      })
      .catch((err) => {
        setErr("Oops! Something went wrong, please try again later.");
        setReview((review) => {
          return { ...review, votes: review.votes - 1 };
        });
      });
  };

  return (
    <article>
      Agree with {review.owner}? Add your vote:{" "}
      <button
        aria-label="add a vote"
        onClick={handleVoteClick}
        id="voting-button"
      >
        🌈
      </button>
      <aside>{err ? <p>{err}</p> : null}</aside>
    </article>
  );
};

export default ReviewVotingButton;
