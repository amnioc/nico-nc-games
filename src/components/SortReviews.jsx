const SortReviews = () => {
  return (
    <>
      <nav id="sort-by">
        <label htmlFor="sort by filter">
          Sort Reviews By:
          <select id="sortByDropDown" placeholder="Choose One...">
            <option value={""}></option>
            <option>to</option>
            <option>be</option>
            <option>updated</option>
          </select>
        </label>
      </nav>
    </>
  );
};

export default SortReviews;
