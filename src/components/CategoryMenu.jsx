const CategoryMenu = () => {
  //future ticket, will pull from api
  return (
    <nav>
      <label htmlFor="games category filter">Pick A Category:</label>
      <ol className="category-nav">
        <li className="category-option">Strategy</li>
        <li className="category-option">Hidden-roles</li>
        <li className="category-option">Dexterity</li>
        <li className="category-option">Push-your-luck</li>
        <li className="category-option">Roll-and-write</li>
        <li className="category-option">Deck-building</li>
        <li className="category-option">Engine-building</li>
      </ol>
    </nav>
  );
};
export default CategoryMenu;
