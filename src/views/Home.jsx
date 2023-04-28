import { useState } from "react";
import AllReviews from "../components/AllReviews";
import CategoryMenu from "../components/CategoryMenu";
import SortReviews from "../components/SortReviews";

const Home = ({ reviews, setReviews, sortBy, setSortBy }) => {
  const [orderBy, setOrderBy] = useState("DESC");

  return (
    <div>
      <CategoryMenu setReviews={setReviews} />
      <SortReviews
        setReviews={setReviews}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
      />
      <AllReviews
        reviews={reviews}
        setReviews={setReviews}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
      />
    </div>
  );
};
export default Home;
