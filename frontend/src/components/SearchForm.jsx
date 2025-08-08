import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch, loading, onClear, hasRecommendations }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  const exampleQueries = [
    "I want a phone under $500",
    "Show me premium headphones",
    "I need a laptop for work",
    "Looking for running shoes",
    "Kitchen appliances under $400"
  ];

  return (
    <div className="search-form-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe what you're looking for... (e.g., 'I want a phone under $500')"
            className="search-input"
            disabled={loading}
          />
          <div className="search-buttons">
            <button 
              type="submit" 
              disabled={loading || !query.trim()}
              className="search-button"
            >
              {loading ? (
                <span className="loading-text">
                  <span className="spinner-small"></span>
                  Searching...
                </span>
              ) : (
                '🔍 Get AI Recommendations'
              )}
            </button>
            {hasRecommendations && (
              <button 
                type="button" 
                onClick={handleClear}
                className="clear-button"
                disabled={loading}
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </form>

      {!hasRecommendations && (
        <div className="example-queries">
          <p>Try these examples:</p>
          <div className="example-buttons">
            {exampleQueries.map((example, index) => (
              <button
                key={index}
                onClick={() => setQuery(example)}
                className="example-button"
                disabled={loading}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
