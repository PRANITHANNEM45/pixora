import React, { useState, useRef } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import Loader from './components/Loader';
import EmptyState from './components/EmptyState';
import ErrorState from './components/ErrorState';
import Pagination from './components/Pagination';
import ImageModal from './components/ImageModal';
import { LayoutGrid, Rows, ArrowUp } from 'lucide-react';
import { searchPhotos, getCuratedMockPhotos } from './services/unsplash';
import './App.css';

const CURRENT_YEAR = new Date().getFullYear();

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
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'masonry'

  const abortControllerRef = useRef(null);
  const resultsRef = useRef(null);

  // Execute photo search request
  const executeSearch = async (searchQuery, pageNum = 1) => {
    if (!searchQuery.trim()) {
      setPhotos([]);
      setTotalPages(0);
      setTotalResults(0);
      return;
    }

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
      setIsDemoFallback(Boolean(data.isDemoFallback));
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') return;

      const fallbackData = getCuratedMockPhotos(searchQuery, pageNum, 12);
      if (fallbackData.results.length > 0) {
        setPhotos(fallbackData.results);
        setTotalPages(fallbackData.totalPages);
        setTotalResults(fallbackData.total);
        setIsDemoFallback(true);
        setError(null);
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
    const defaultTerm = query || 'Cars';
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

  const handleApiKeyChange = () => {
    if (query) {
      executeSearch(query, currentPage);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Header onReset={handleReset} onApiKeyChange={handleApiKeyChange} />

      <main className="main-content">
        <SearchBar
          currentQuery={query}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        {/* Error State */}
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

                  <div className="gallery-controls">
                    <div className="view-mode-toggle" role="group" aria-label="Gallery view mode">
                      <button
                        type="button"
                        className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                        title="Grid View"
                        aria-pressed={viewMode === 'grid'}
                      >
                        <LayoutGrid size={16} />
                        <span>Grid</span>
                      </button>
                      <button
                        type="button"
                        className={`view-mode-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                        onClick={() => setViewMode('masonry')}
                        title="Masonry View"
                        aria-pressed={viewMode === 'masonry'}
                      >
                        <Rows size={16} />
                        <span>Masonry</span>
                      </button>
                    </div>
                  </div>
                </div>

                <ImageGrid
                  photos={photos}
                  onSelectPhoto={(photo) => setSelectedPhoto(photo)}
                  viewMode={viewMode}
                />

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

        {selectedPhoto && (
          <ImageModal
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© {CURRENT_YEAR} Pixora. High-quality visual discovery engine.</p>
          <p className="footer-attribution">
            Photos provided by{' '}
            <a
              href="https://unsplash.com/?utm_source=pixora&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
