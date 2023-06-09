import { useState } from "react";
import CommentVotingButton from "./CommentVotingButton";

const CommentCard = ({ comment }) => {
  const commentPosted = new Date(comment.created_at).toString();
  const [commentVotes, setCommentVotes] = useState(`${comment.votes}`);

  return (
    <li className="comment-card" key={comment.comment_id}>
      <article className="comment-details">
        <img
          alt={comment.author}
          src="https://images.unsplash.com/photo-1568376158760-3594b4d380c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          className="profile-pic"
        />

        <h5>{comment.author}</h5>
        <h5 className="comment-date">{commentPosted}</h5>
        <section className="comment-body">
          {" "}
          <h5 className="comment-text">{comment.body}</h5>
        </section>
        <section className="form-comment-voting">
          <h5>
            {comment.votes} Community <span aria-label="glowing star">🌟</span>{" "}
            UpVotes
          </h5>
          <CommentVotingButton
            comment={comment}
            setCommentVotes={setCommentVotes}
            commentVotes={commentVotes}
          />
        </section>
      </article>
    </li>
  );
};

export default CommentCard;
