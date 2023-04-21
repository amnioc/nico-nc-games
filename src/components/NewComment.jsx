import { useEffect, useState } from "react";
import { postNewComment } from "../utils/api";

const NewComment = ({ review_id, currentComments, setCurrentComments }) => {
  const [username, setUsername] = useState("jessjelly");
  const [commentBody, setCommentBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false);
  const [deactivateForm, setDeactivateForm] = useState(false);
  const [err, setErr] = useState(null);

  const handleNewComment = (event) => {
    setIsPosting(true);
    event.preventDefault();
    const thisComment = {
      username: username,
      body: commentBody,
    };

    postNewComment(review_id, thisComment)
      .then((comment) => {
        setCurrentComments([comment, ...currentComments]);
        setIsPosting(false);
        setDeactivateForm(true);
        setCommentPosted(true);
        setUsername(""); //clear form
        setCommentBody("");
      })
      .catch((err) => {
        setIsPosting(false);
        setErr("Oops! Something went wrong, please try again later.");
      });
  };

  if (isPosting) {
    return <h5>Posting Your Comment Now...</h5>;
  }

  return (
    <form onSubmit={handleNewComment} className="new-comment-form" id="form">
      <label id="form-username-field">
        Username:
        <input
          type="text"
          id="form-username"
          required
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          disabled={deactivateForm}
          autoComplete="username"
        />
      </label>
      <label id="form-comment-field">
        Comment:
        <textarea
          required
          type="text"
          id="form-comment"
          value={commentBody}
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
          placeholder="this review is..."
          disabled={deactivateForm}
        />
      </label>
      <button type="submit" disabled={deactivateForm} id="form-button">
        Post Comment
      </button>
      <aside>{err ? <p>{err}</p> : null}</aside>
      <aside>
        {commentPosted ? (
          <p id="thanks-comment">thanks for your comment!</p>
        ) : null}
      </aside>
    </form>
  );
};
export default NewComment;
