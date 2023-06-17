import React from "react";
import './search_bar.scss';

export const SearchBar = ({ numberOfPodcasts, handleFilter }) => {
  return (
    <div className="search-bar">
      <span>{numberOfPodcasts}</span>
      <input
        type="text"
        placeholder="Filter podcasts..."
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBar;
