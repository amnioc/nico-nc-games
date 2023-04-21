import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import { useState } from "react";
import SingleReview from "./views/SingleReviewPage";
import AllReviews from "./components/AllReviews";

function App() {
  const [reviews, setReviews] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/reviews"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview reviews={reviews} />}
        />
        <Route
          path="/games/strategy"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/games/hidden-roles"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/games/dexterity"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/games/push-your-luck"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/games/roll-and-write"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/games/deck-building"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/games/engine-building"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
      </Routes>
    </div>
  );
}

export default App;
