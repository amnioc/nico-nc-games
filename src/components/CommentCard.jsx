const CommentCard = ({ comment }) => {
  const commentPosted = new Date(comment.created_at).toString();

  return (
    <li className="commentCard">
      <section className="comment-details">
        <img
          alt={comment.author}
          src="https://images.unsplash.com/photo-1568376158760-3594b4d380c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          className="profile-pic"
        />
        <h4>{comment.author}</h4>
        <h5 id="comment-date">{commentPosted}</h5>
      </section>
      <section className="comment-body">
        {" "}
        <h5 id="comment-text">{comment.body}</h5>
        <h5>{comment.votes} Community Upvotes</h5>
        <label>Agree with {comment.author}?</label>
        <button>UpVote this comment!</button>
      </section>
    </li>
  );
};

export default CommentCard;
