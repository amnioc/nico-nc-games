import { Link } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryMenu";
import { useContext } from "react";

const CategoryNavCards = ({ category, setCategoryClicked }) => {
  const { categoryChosen, setCategoryChosen } = useContext(CategoryContext);
  const handleCategoryClick = () => {
    setCategoryChosen(category.slug);
  };

  return (
    <Link to={`/games/${category.slug}`} onClick={handleCategoryClick}>
      <li className="category-option">{category.slug}</li>
    </Link>
  );
};

export default CategoryNavCards;
