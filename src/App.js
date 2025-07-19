import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  const API_KEY = 'fddd3908'; // Replace with your API key

  const searchMovies = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
      );
      
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
      } else {
        setError(data.Error || 'No movies found');
        setMovies([]);
        setTotalResults(0);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please check your internet connection.');
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    searchMovies(query);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setMovies([]);
    setError('');
    setTotalResults(0);
  };

  return (
    <div className="app">
      {/* Background */}
      <div className="background-container">
        <div className="background-gradient"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="main-title">
            🎬 <span className="title-text">Sion Movies</span>
          </h1>
          <p className="subtitle">Discover your next favorite film</p>
        </div>
      </header>

      {/* Search Section - FIXED PROPS */}
      <section className="search-section">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          loading={loading}
        />
      </section>

      {/* Results Stats */}
      {totalResults > 0 && !loading && (
        <div className="results-stats">
          <p>Found {totalResults.toLocaleString()} results for "{searchTerm}"</p>
          <p>Showing {movies.length} movies</p>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <div className="loading-text">
              <h3>Searching for movies...</h3>
              <p>Finding the best results for you</p>
            </div>
          </div>
        )}
        
        {/* Error State */}
        {error && !loading && (
          <div className="error-container">
            <div className="error-content">
              <div className="error-icon">⚠️</div>
              <h3 className="error-title">Oops! Something went wrong</h3>
              <p className="error-message">{error}</p>
              <button 
                className="retry-button"
                onClick={() => handleSearch(searchTerm)}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        
        {/* Welcome State */}
        {!loading && !error && movies.length === 0 && !searchTerm && (
          <div className="welcome-container">
            <div className="welcome-content">
              <h2 className="welcome-title">
                Welcome to <span className="gradient-text">Sion Movies</span>
              </h2>
              <p className="welcome-subtitle">
                Search for any movie, TV show, or episode to get started
              </p>
              
              <div className="popular-searches">
                <h3>Try searching for:</h3>
                <div className="popular-tags">
                  {['Batman', 'Avengers', 'Star Wars', 'Marvel', 'Disney', 'Horror'].map((tag) => (
                    <button
                      key={tag}
                      className="popular-tag"
                      onClick={() => handleSearch(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Movie Results */}
        {!error && movies.length > 0 && (
          <MovieList movies={movies} />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Sion Movies. Powered by OMDb API.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;