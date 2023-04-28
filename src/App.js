import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import { useState } from "react";
import SingleReview from "./views/SingleReviewPage";
import CategoryPage from "./components/Categories/CategoryPage";

function App() {
  const [reviews, setReviews] = useState("");
  const [sortBy, setSortBy] = useState("created_at");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              reviews={reviews}
              setReviews={setReviews}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
        <Route
          path="/reviews?sort_by=:sort"
          element={
            <Home
              reviews={reviews}
              setReviews={setReviews}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview reviews={reviews} />}
        />
        <Route
          path="/games/:category"
          element={
            <CategoryPage
              reviews={reviews}
              setReviews={setReviews}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
