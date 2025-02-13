import React from 'react';
import Header from './components/header/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
