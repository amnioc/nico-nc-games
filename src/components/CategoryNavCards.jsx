import { Link } from "react-router-dom";
import AllReviews from "./AllReviews";

const CategoryNavCards = ({ category }) => {
  return (
    <Link to={`/games/${category.slug}`}>
      <li className="category-option">{category.slug.replaceAll("-", " ")}</li>
    </Link>
  );
};

export default CategoryNavCards;
