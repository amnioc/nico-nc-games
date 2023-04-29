import AllReviews from "../components/AllReviews";
import CategoryMenu from "../components/CategoryMenu";
import SortReviews from "../components/SortReviews";

const Home = ({ reviews, setReviews }) => {
  return (
    <div>
      <CategoryMenu setReviews={setReviews} />
      <SortReviews setReviews={setReviews} />
      <AllReviews reviews={reviews} setReviews={setReviews} />
    </div>
  );
};
export default Home;
