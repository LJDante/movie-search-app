import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner-main">
        <div className="spinner-ring">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <div className="loading-text">
          <h3>Searching for movies...</h3>
          <p>Finding the best results for you</p>
        </div>
      </div>
      
      {/* Loading Animation Elements */}
      <div className="loading-elements">
        <div className="floating-element element-1">🎬</div>
        <div className="floating-element element-2">🍿</div>
        <div className="floating-element element-3">🎭</div>
        <div className="floating-element element-4">📽️</div>
        <div className="floating-element element-5">🎪</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;