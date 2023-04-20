import { useState } from "react";

const CommentVotingButton = ({ comment, setCommentVotes, commentVotes }) => {
  //   const [thisComment, setThisComment] = useState(comment);
  const [err, setErr] = useState(null);
  const handleCommentVoteClick = (event) => {
    setErr(null);
    setCommentVotes(comment.votes++);
    event.currentTarget.disabled = true;
    setCommentVotes((comment) => {
      return { ...comment, votes: comment.votes + 1 };
      // }).catch((err) => {
      //   setErr("Oops! Something went wrong, please try again later.");
      //   setThisComment((comment) => {
      //     return { ...comment, votes: comment.votes - 1 };
      //   });
    });
  };

  return (
    <>
      <button
        aria-label="add one glowing star to votes"
        onClick={handleCommentVoteClick}
        id="comment-voting-button"
      >
        🌟 Click to add your UpVote! 🌟
      </button>
      <aside>{err ? <p>{err}</p> : null}</aside>
    </>
  );
};

export default CommentVotingButton;
