import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getReviewCommentsById } from "../utils/api";
import NewComment from "./NewComment";

const CommentsSection = ({ review_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentComments, setCurrentComments] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getReviewCommentsById(review_id).then((comments) => {
      setIsLoading(false);
      setCurrentComments(comments);
    });
  }, [review_id]);

  if (isLoading) {
    return <h4 className="loading-message">Comments Loading...</h4>;
  }

  return (
    <>
      <section className="comments-section">
        <h3 id="comment-section-heading">Comments...</h3>
        <NewComment
          review_id={review_id}
          setCurrentComments={setCurrentComments}
          currentComments={currentComments}
        />
        <ul className="comments-list">
          {currentComments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default CommentsSection;
