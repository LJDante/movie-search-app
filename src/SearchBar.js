import React, { useState, useEffect } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, loading }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  // Sync with parent searchTerm
  useEffect(() => {
    setLocalSearchTerm(searchTerm || '');
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localSearchTerm.trim() && handleSearch) {
      handleSearch(localSearchTerm.trim());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    
    // Also update parent state if setSearchTerm exists
    if (setSearchTerm) {
      setSearchTerm(value);
    }
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    if (setSearchTerm) {
      setSearchTerm('');
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for movies, series, episodes..."
            value={localSearchTerm}
            onChange={handleInputChange}
            className="search-input"
            disabled={loading}
          />

          {localSearchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="clear-button"
            >
              ✕
            </button>
          )}
        </div>

        <button
          type="submit"
          className="search-button"
          disabled={loading || !localSearchTerm.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;