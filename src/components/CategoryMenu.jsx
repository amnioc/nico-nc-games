const CategoryMenu = () => {
  return (
    <>
      <label htmlFor="games category filter">Go to:</label>
      <select>
        <option value={""} disabled selected hidden>
          Categories
        </option>
        <option></option>

        <option>to</option>
        <option>be</option>
        <option>completed</option>
      </select>
    </>
  );
};
export default CategoryMenu;
