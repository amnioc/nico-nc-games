import { useEffect, useState } from "react";
import { getAllReviews } from "../utils/api";
import { Link } from "react-router-dom";

const SortReviews = ({ setReviews }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  useEffect(() => {
    getAllReviews(sortBy, orderBy).then(
      (reviews) => {
        setReviews(reviews);
      },
      [sortBy, orderBy]
    );
  });

  return (
    <>
      <nav id="sort-by">
        <form className="sorting-form">
          <label htmlFor="sort by filter">
            Sort Reviews By:
            <Link to="/reviews">
              <button value="" onClick={() => setSortBy("created_at")}>
                None
              </button>
            </Link>
            <Link to="/reviews?sort_by=owner">
              <button value="owner" onClick={() => setSortBy("owner")}>
                Author
              </button>
            </Link>
            <Link to="/reviews?sort_by=created_at">
              <button
                value="created_at"
                onClick={() => setSortBy("created_at")}
              >
                Date
              </button>
            </Link>
            <Link to={`/reviews?sort_by=votes`}>
              <button value="votes" onClick={() => setSortBy("votes")}>
                Review Votes
              </button>
            </Link>
          </label>

          <>
            <label htmlFor="order by">
              Order:
              <button
                id="asc"
                name="order_by"
                value="ASC"
                onClick={() => setOrderBy("asc")}
              >
                <label>A - Z (ascending)</label>
              </button>
              <button
                type="radio"
                id="desc"
                name="order_by"
                defaultChecked
                value="DESC"
                onClick={() => setOrderBy("desc")}
              >
                <label>Z - A (descending)</label>
              </button>
            </label>{" "}
          </>
        </form>
      </nav>
    </>
  );
};

export default SortReviews;
