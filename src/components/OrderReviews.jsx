import { getAllReviews } from "../utils/api";

const OrderReviews = ({ orderBy, sortBy, setOrderBy, setReviews }) => {
  const handleOrderClick = (event) => {
    setOrderBy(event.target.value);
    getAllReviews(sortBy, orderBy).then((reviews) => {
      setReviews(reviews);
    });
  };

  return (
    <label htmlFor="order by">
      Order:
      <button
        type="radio"
        id="asc"
        name="order_by"
        value="ASC"
        onClick={handleOrderClick}
      />
      <label>A - Z (ascending)</label>
      <button
        type="radio"
        id="desc"
        name="order_by"
        defaultChecked
        value="DESC"
        onClick={handleOrderClick}
      />
      <label>Z - A (descending)</label>
    </label>
  );
};

export default OrderReviews;
