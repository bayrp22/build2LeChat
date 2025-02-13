import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Pagination from './components/Pagination';

const App = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (newQuery) => {
    // Simulate API call with a timeout
    setTimeout(() => {
      if (newQuery) {
        const mockResults = Array.from({ length: 10 }, (_, i) => ({
          id: `${i + 1}`,
          title: `Result ${i + 1} for ${newQuery}`,
        }));
        setResults(mockResults);
        setTotalPages(3); // Simulate total pages
      } else {
        setResults([]);
        setTotalPages(1);
      }
    }, 500);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <ResultsList results={results} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
