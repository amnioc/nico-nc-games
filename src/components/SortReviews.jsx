import { getAllReviews } from "../utils/api";
import OrderReviews from "./OrderReviews";

const SortReviews = ({
  setReviews,
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}) => {
  const handleSort = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
    console.log(sortBy);
    getAllReviews(sortBy, orderBy).then((reviews) => {
      setReviews(reviews);
    });
  };

  return (
    <>
      <nav id="sort-by">
        <form className="sorting-form">
          <label htmlFor="sort by filter">
            Sort Reviews By:
            <select
              id="sortByDropDown"
              placeholder="Choose One..."
              onChangeCapture={handleSort}
            >
              <option value={""}></option>
              <option value={"owner"}>Author</option>
              <option value={"created_at"}>Date</option>
              <option value={"votes"}>Review Votes</option>
            </select>
          </label>
          <OrderReviews
            orderBy={orderBy}
            setReviews={setReviews}
            sortBy={sortBy}
            setOrderBy={setOrderBy}
          />
        </form>
      </nav>
    </>
  );
};

export default SortReviews;
