import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'movie': return '#e74c3c';
      case 'series': return '#3498db';
      case 'episode': return '#9b59b6';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img
          src={!imageError && movie.Poster !== 'N/A' 
            ? movie.Poster 
            : `https://via.placeholder.com/300x450/2c3e50/ecf0f1?text=${encodeURIComponent(movie.Title || 'No Image')}`
          }
          alt={movie.Title}
          onError={handleImageError}
          className="movie-poster"
        />

        <div className="movie-type-badge" style={{ backgroundColor: getTypeColor(movie.Type) }}>
          {movie.Type || 'Unknown'}
        </div>

        {movie.Year && (
          <div className="movie-year-badge">
            {movie.Year}
          </div>
        )}
      </div>

      <div className="movie-info">
        <h3 className="movie-title" title={movie.Title}>
          {movie.Title || 'Unknown Title'}
        </h3>
        
        <div className="movie-meta">
          <span className="meta-year">{movie.Year || 'Unknown'}</span>
          <span className="meta-separator">•</span>
          <span className="meta-type">{movie.Type || 'Unknown'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;