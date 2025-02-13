import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search..."
      className="border p-2 rounded w-full"
    />
  );
};

export default SearchBar;
