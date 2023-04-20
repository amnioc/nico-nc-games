const CommentCard = ({ comment }) => {
  const commentPosted = new Date(comment.created_at).toString();

  return (
    <li className="commentCard">
      <article className="comment-details">
        <img
          alt={comment.author}
          src="https://images.unsplash.com/photo-1568376158760-3594b4d380c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          className="profile-pic"
        />
        <h5>{comment.author}</h5>
        <h5 id="comment-date">{commentPosted}</h5>
        <section className="comment-body">
          {" "}
          <h5 id="comment-text">{comment.body}</h5>
        </section>
        <h5>{comment.votes} Community UpVotes</h5>
        <button aria-label="plus one to comment votes">
          Click to add your UpVote!
        </button>
      </article>
    </li>
  );
};

export default CommentCard;
