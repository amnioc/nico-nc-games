import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import { useState, useEffect } from "react";
import { getAllReviews } from "./api";

function App() {
  const [reviews, setReviews] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllReviews().then((response) => {
      setIsLoading(true);
      setReviews(response.data.reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h4 id="loadingMessage">Reviews Loading...</h4>;
  }

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
      </Routes>
    </div>
  );
}

export default App;
