import AllReviews from "../AllReviews";
import CategoryMenu from "../CategoryMenu";
import SortReviews from "../SortReviews";

const CategoryPage = ({ reviews, setReviews }) => {
  return (
    <div>
      <CategoryMenu setReviews={setReviews} />
      <SortReviews setReviews={setReviews} />
      <AllReviews reviews={reviews} setReviews={setReviews} />
    </div>
  );
};
export default CategoryPage;
