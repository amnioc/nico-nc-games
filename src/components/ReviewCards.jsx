const ReviewCards = ({ review }) => {
  const datePosted = new Date(review.created_at).toDateString();
  //   const timePosted = new Date(review.created_at).toTimeString();

  return (
    <li className="reviewCard">
      <img
        src={review.review_img_url}
        alt={review.title}
        className="cardImage"
      />
      <section>
        <h4 className="reviewTitle">{review.title}</h4>
        <h5>By: {review.owner}</h5>
        <h5 id="votesCount">
          <span>
            votes: {review.votes}{" "}
            <span role="img" aria-label="rainbow">
              🌈
            </span>
          </span>
        </h5>

        <h5 id="reviewDate">
          {datePosted} || {review.category}
        </h5>
      </section>
    </li>
  );
};

export default ReviewCards;
