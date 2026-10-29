import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="app-wrapper">
      <Header onReset={handleReset} />

      <main className="main-content">
        <SearchBar
          currentQuery={query}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        {query && (
          <section className="results-section" aria-label="Search results section">
            <div className="gallery-header">
              <div className="gallery-title-wrapper">
                <h2 className="gallery-title">
                  Results for <span className="gallery-query-badge">"{query}"</span>
                </h2>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} PixelHunt. High-quality visual discovery engine.</p>
          <p className="footer-attribution">
            Photos provided by{' '}
            <a
              href="https://unsplash.com/?utm_source=pixelhunt&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
