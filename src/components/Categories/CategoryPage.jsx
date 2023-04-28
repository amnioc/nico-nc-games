import AllReviews from "../AllReviews";
import CategoryMenu from "../CategoryMenu";

const CategoryPage = ({ reviews, setReviews }) => {
  return (
    <div>
      <CategoryMenu setReviews={setReviews} />
      <AllReviews reviews={reviews} setReviews={setReviews} />
    </div>
  );
};
export default CategoryPage;
