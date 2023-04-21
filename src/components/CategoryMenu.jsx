import { useEffect, useState } from "react";
import { getCategoryNames } from "../utils/api";
import CategoryNavCards from "./CategoryNavCards";

const CategoryMenu = () => {
  const [categories, setCategories] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCategoryNames().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h4 id="loadingMessage">Category Menu Loading...</h4>;
  }

  return (
    <nav className="category-nav">
      {categories.map((category) => {
        return (
          <ol class="categories-list">
            <CategoryNavCards
              key={category.slug}
              category={category}
              className="category-cards"
            />
          </ol>
        );
      })}
    </nav>
  );
};
export default CategoryMenu;
