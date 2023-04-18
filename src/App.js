import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import { useState } from "react";
import SingleReview from "./views/SingleReviewPage";

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
      </Routes>
    </div>
  );
}

export default App;
