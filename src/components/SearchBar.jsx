import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles } from 'lucide-react';

const SUGGESTED_KEYWORDS = [
  'Cricket',
  'BMW',
  'Cars',
  'Nature',
  'Dogs',
  'Coffee',
  'Football',
  'Technology'
];

export default function SearchBar({ currentQuery, onSearch, isLoading }) {
  const [inputValue, setInputValue] = useState(currentQuery || '');

  // Keep search input in sync with current query
  useEffect(() => {
    setInputValue(currentQuery || '');
  }, [currentQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = inputValue.trim();
    if (clean) {
      onSearch(clean);
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleChipClick = (keyword) => {
    setInputValue(keyword);
    onSearch(keyword);
  };

  return (
    <section className="search-section" aria-labelledby="search-heading">
      <div className="search-hero">
        <div className="hero-pill">
          <Sparkles size={14} className="hero-pill-icon" />
          <span>Unsplash Photo Search</span>
        </div>
        <h1 id="search-heading" className="search-title">
          Search High-Resolution Photos
        </h1>
        <p className="search-description">
          Find photos by keyword, brand, or topic — nature, cricket, cars, bmw, animals, and more.
        </p>
      </div>

      <form className="search-form" onSubmit={handleSubmit} role="search" aria-label="Image search">
        <div className="search-input-wrapper">
          <Search className="search-input-icon" size={20} aria-hidden="true" />
          <input
            type="text"
            className="search-input"
            placeholder="Search photos, e.g. 'cricket', 'bmw', 'cars', 'nature'..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Search keywords"
            autoComplete="off"
            spellCheck="false"
          />
          {inputValue && (
            <button
              type="button"
              className="clear-button"
              onClick={handleClear}
              aria-label="Clear input"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="search-submit-btn"
          disabled={!inputValue.trim() || isLoading}
          aria-label="Search"
        >
          <Search size={18} />
          <span>Search</span>
        </button>
      </form>

      <div className="suggested-keywords" aria-label="Suggested search keywords">
        <span className="suggested-label">Trending:</span>
        <div className="keywords-chips-list">
          {SUGGESTED_KEYWORDS.map((keyword) => {
            const isActive = currentQuery?.toLowerCase() === keyword.toLowerCase();
            return (
              <button
                key={keyword}
                type="button"
                className={`keyword-chip ${isActive ? 'active' : ''}`}
                onClick={() => handleChipClick(keyword)}
                aria-pressed={isActive}
              >
                {keyword}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
