import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryMenu";

const Header = () => {
  const { categoryChosen, setCategoryChosen } = useContext(CategoryContext);

  const handleHeaderClick = () => {
    setCategoryChosen("");
  };

  return (
    <>
      <Link to="/" id="Header" onClick={handleHeaderClick}>
        <h1> Game Reviews</h1>
      </Link>
    </>
  );
};

export default Header;
