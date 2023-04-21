import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/" id="Header" aria-label="back to homepage">
        <h1> Game Reviews</h1>
      </Link>
    </>
  );
};

export default Header;
