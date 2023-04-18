const SortReviews = () => {
  return (
    <>
      <section id="filtersSortBy">
        <label htmlFor="sort by filter">Sort Reviews By: </label>
        <select id="sortByDropDown">
          <option disabled defaultValue={""} hidden>
            Choose One...
          </option>
          <option value=""></option>
          <option>to</option>
          <option>be</option>
          <option>updated</option>
        </select>
      </section>
    </>
  );
};

export default SortReviews;
