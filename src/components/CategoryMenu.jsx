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
    <label>
      {" "}
      Pick Your Category:
      <nav className="category-nav">
        {categories.map((category) => {
          return (
            <ol className="categories-list" key={category.slug}>
              <CategoryNavCards
                category={category}
                className="category-cards"
              />
            </ol>
          );
        })}
      </nav>
    </label>
  );
};
export default CategoryMenu;
