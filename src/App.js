import React from 'react';
import Header from './components/header/Header';
import SearchBar from './components/SearchBar';
import RecentActivity from './components/RecentActivity';
import Settings from './components/Settings';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RecentActivity />
      <Settings />
      <Footer />
    </div>
  );
}

export default App;
