import React from 'react';

const WelcomeMessage = () => {
  const popularSearches = [
    { title: 'Batman', emoji: '🦇' },
    { title: 'Avengers', emoji: '🦸' },
    { title: 'Star Wars', emoji: '⭐' },
    { title: 'Harry Potter', emoji: '⚡' },
    { title: 'Marvel', emoji: '🕷️' },
    { title: 'Disney', emoji: '🏰' }
  ];

  const features = [
    {
      icon: '🔍',
      title: 'Advanced Search',
      description: 'Search through millions of movies, TV shows, and episodes'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Perfect experience on desktop, tablet, and mobile devices'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get instant results powered by the OMDb API'
    },
    {
      icon: '🎬',
      title: 'Rich Details',
      description: 'View posters, ratings, cast, and plot summaries'
    }
  ];

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        {/* Hero Section */}
        <div className="welcome-hero">
          <div className="hero-animation">
            <div className="floating-icons">
              <span className="float-icon icon-1">🎬</span>
              <span className="float-icon icon-2">🍿</span>
              <span className="float-icon icon-3">🎭</span>
              <span className="float-icon icon-4">📽️</span>
              <span className="float-icon icon-5">🌟</span>
            </div>
          </div>
          
          <h2 className="welcome-title">
            Welcome to <span className="gradient-text">Sion Movies</span>
          </h2>
          <p className="welcome-subtitle">
            Discover your next favorite film from millions of movies and TV shows
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Searches */}
        <div className="popular-section">
          <h3 className="section-title">Popular Searches</h3>
          <p className="section-subtitle">Get started with these trending searches</p>
          
          <div className="popular-grid">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                className="popular-card"
                onClick={() => {
                  const searchInput = document.querySelector('.search-input');
                  const searchForm = document.querySelector('.search-form');
                  if (searchInput && searchForm) {
                    searchInput.value = search.title;
                    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                    searchForm.dispatchEvent(new Event('submit', { bubbles: true }));
                  }
                }}
              >
                <span className="popular-emoji">{search.emoji}</span>
                <span className="popular-title">{search.title}</span>
                <span className="popular-arrow">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <h3 className="section-title">💡 Pro Tips</h3>
          <div className="tips-grid">
            <div className="tip-item">
              <span className="tip-icon">⌨️</span>
              <span className="tip-text">Use <kbd>Ctrl+K</kbd> to quickly focus the search bar</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🚀</span>
              <span className="tip-text">Search by movie title, actor name, or director</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🔄</span>
              <span className="tip-text">Press <kbd>Esc</kbd> to clear your current search</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to explore?</h3>
            <p>Start by searching for any movie or TV show above</p>
            <button 
              className="cta-button"
              onClick={() => {
                document.querySelector('.search-input')?.focus();
              }}
            >
              Start Searching
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;