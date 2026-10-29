import React, { useState, useRef } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import Loader from './components/Loader';
import EmptyState from './components/EmptyState';
import ErrorState from './components/ErrorState';
import Pagination from './components/Pagination';
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
  const resultsRef = useRef(null);

  // Perform image search
  const executeSearch = async (searchQuery, pageNum = 1) => {
    if (!searchQuery.trim()) {
      setPhotos([]);
      setTotalPages(0);
      setTotalResults(0);
      return;
    }

    // Abort previous in-flight request to avoid race conditions
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
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') return;

      // When API key is missing, offer curated fallback data
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

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);
    executeSearch(query, newPage);

    // Smooth scroll back up to the results section
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRetry = () => {
    if (query) {
      executeSearch(query, currentPage);
    }
  };

  const handleLoadDemoShowcase = () => {
    const defaultTerm = query || 'Nature';
    setQuery(defaultTerm);
    const mockData = getCuratedMockPhotos(defaultTerm, 1, 12);
    setPhotos(mockData.results);
    setTotalPages(mockData.totalPages);
    setTotalResults(mockData.total);
    setIsDemoFallback(true);
  };

  const handleReset = () => {
    setQuery('');
    setPhotos([]);
    setCurrentPage(1);
    setTotalPages(0);
    setTotalResults(0);
    setError(null);
    setIsDemoFallback(false);
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

        {/* Demo Fallback Notice if active */}
        {isDemoFallback && (
          <div
            style={{
              padding: '0.75rem 1.25rem',
              marginBottom: '1.5rem',
              background: '#fef3c7',
              border: '1px solid #fde68a',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: '#92400e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <span>
              <strong>Demo Mode Active:</strong> Showing curated showcase photos. Add your Unsplash Access Key to <code>.env</code> for live API results.
            </span>
            <a
              href="https://unsplash.com/developers"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 700, textDecoration: 'underline', color: '#78350f' }}
            >
              Get Free API Key
            </a>
          </div>
        )}

        {/* Error State (when not in fallback demo mode) */}
        {error && !isDemoFallback && (
          <ErrorState
            error={error}
            onRetry={handleRetry}
            onUseDemo={handleLoadDemoShowcase}
          />
        )}

        {/* Loading State */}
        {isLoading && (
          <section className="results-section" aria-label="Loading search results">
            <div className="gallery-header">
              <div className="gallery-title-wrapper">
                <h2 className="gallery-title">Searching photographs...</h2>
              </div>
            </div>
            <Loader count={12} />
          </section>
        )}

        {/* Results Section */}
        {!isLoading && !error && query && (
          <section
            ref={resultsRef}
            className="results-section"
            aria-label="Search results section"
          >
            {photos.length === 0 ? (
              <EmptyState query={query} onSelectSuggestion={handleSearch} />
            ) : (
              <>
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

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  isLoading={isLoading}
                />
              </>
            )}
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
