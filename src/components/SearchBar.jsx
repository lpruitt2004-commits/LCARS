import React from "react";

const SearchBar = ({ value, onChange, onSearch, playClick }) => (
  <form
    className="lcars-search-bar"
    onSubmit={(e) => {
      e.preventDefault();
      if (playClick) playClick();
      onSearch();
    }}
  >
    <input
      type="text"
      placeholder="Search LCARS Encyclopedia..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="lcars-search-input"
    />
    <button type="submit" className="lcars-search-btn">
      Search
    </button>
  </form>
);

export default SearchBar;
