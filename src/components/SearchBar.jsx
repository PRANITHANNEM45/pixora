import React, { useState } from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import pixoraLogo from '../assets/pixora-logo.png';

const CATEGORIES = [
  { name: 'Cricket', icon: '🏏' },
  { name: 'BMW', icon: '🏎️' },
  { name: 'Cars', icon: '🚗' },
  { name: 'Pizza', icon: '🍕' },
  { name: 'Wildlife', icon: '🦁' },
  { name: 'Beach', icon: '🏖️' },
  { name: 'Nature', icon: '🌿' },
  { name: 'Music', icon: '🎸' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Coffee', icon: '☕' },
  { name: 'Dogs', icon: '🐕' },
  { name: 'Technology', icon: '💻' },
  { name: 'Shoes', icon: '👟' },
  { name: 'Space', icon: '🌌' }
];

export default function SearchBar({ currentQuery, onSearch, isLoading }) {
  const [prevQuery, setPrevQuery] = useState(currentQuery);
  const [inputValue, setInputValue] = useState(currentQuery || '');

  if (currentQuery !== prevQuery) {
    setPrevQuery(currentQuery);
    setInputValue(currentQuery || '');
  }

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

  const handleChipClick = (categoryName) => {
    setInputValue(categoryName);
    onSearch(categoryName);
  };

  return (
    <section className="search-section" aria-labelledby="search-heading">
      <div className="search-hero">
        <div className="hero-logo-banner">
          <img src={pixoraLogo} alt="Pixora Logo" className="hero-logo-img" />
        </div>
        <div className="hero-pill">
          <Sparkles size={14} className="hero-pill-icon" />
          <span>Ultra-HD Curated Photography</span>
        </div>
        <h1 id="search-heading" className="search-title">
          Explore Stunning <span className="gradient-text-vibrant">High-Resolution Photos</span>
        </h1>
        <p className="search-description">
          Instant visual search — discover cars, food, wildlife, travel, nature, city, and any keyword in ultra-high resolution.
        </p>
      </div>

      <div className="search-box-card">
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
            {CATEGORIES.map(({ name, icon }) => {
              const isActive = currentQuery?.toLowerCase() === name.toLowerCase();
              return (
                <button
                  key={name}
                  type="button"
                  className={`keyword-chip ${isActive ? 'active' : ''}`}
                  onClick={() => handleChipClick(name)}
                  aria-pressed={isActive}
                  aria-label={name}
                >
                  <span className="chip-icon" aria-hidden="true">{icon}</span>
                  <span>{name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
