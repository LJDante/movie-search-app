import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return null;
  }

  return (
    <div className="movie-list-container">
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard 
            key={`${movie.imdbID}-${index}`} 
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;