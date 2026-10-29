import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import { searchPhotos, getCuratedMockPhotos } from './services/unsplash';
import './App.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDemoFallback, setIsDemoFallback] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const abortControllerRef = useRef(null);

  // Perform image search
  const executeSearch = async (searchQuery, pageNum = 1) => {
    if (!searchQuery.trim()) {
      setPhotos([]);
      setTotalPages(0);
      setTotalResults(0);
      return;
    }

    // Abort previous in-flight request to prevent race conditions
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchPhotos({
        query: searchQuery,
        page: pageNum,
        perPage: 12,
        signal: abortControllerRef.current.signal
      });

      setPhotos(data.results);
      setTotalPages(data.totalPages);
      setTotalResults(data.total);
      setIsDemoFallback(false);
    } catch (err) {
      if (err.name === 'AbortError') return;

      // If missing API key, provide fallback mock data with helpful notice
      if (err.type === 'MISSING_KEY') {
        const mockData = getCuratedMockPhotos(searchQuery, pageNum, 12);
        setPhotos(mockData.results);
        setTotalPages(mockData.totalPages);
        setTotalResults(mockData.total);
        setIsDemoFallback(true);
        setError(err);
      } else {
        setError(err);
        setPhotos([]);
        setTotalPages(0);
        setTotalResults(0);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
    executeSearch(newQuery, 1);
  };

  const handleReset = () => {
    setQuery('');
    setPhotos([]);
    setCurrentPage(1);
    setTotalPages(0);
    setTotalResults(0);
    setError(null);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
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
                {totalResults > 0 && (
                  <span className="gallery-count">({totalResults.toLocaleString()} photos found)</span>
                )}
              </div>
            </div>

            <ImageGrid photos={photos} onSelectPhoto={(photo) => setSelectedPhoto(photo)} />
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
