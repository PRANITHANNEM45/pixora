import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Key, Check, X } from 'lucide-react';

export default function Header({ onReset, onApiKeyChange }) {
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [hasCustomKey, setHasCustomKey] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('unsplash_access_key');
      if (stored) {
        setApiKeyInput(stored);
        setHasCustomKey(true);
      }
    }
  }, []);

  const handleSaveKey = (e) => {
    e.preventDefault();
    const trimmed = apiKeyInput.trim();
    if (typeof window !== 'undefined') {
      if (trimmed) {
        window.localStorage.setItem('unsplash_access_key', trimmed);
        setHasCustomKey(true);
      } else {
        window.localStorage.removeItem('unsplash_access_key');
        setHasCustomKey(false);
      }
    }
    setSavedSuccess(true);
    if (onApiKeyChange) {
      onApiKeyChange(trimmed);
    }
    setTimeout(() => {
      setSavedSuccess(false);
      setShowKeyModal(false);
    }, 900);
  };

  const handleClearKey = () => {
    setApiKeyInput('');
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('unsplash_access_key');
    }
    setHasCustomKey(false);
    if (onApiKeyChange) {
      onApiKeyChange('');
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <a
            href="/"
            className="brand-logo"
            onClick={(e) => {
              if (onReset) {
                e.preventDefault();
                onReset();
              }
            }}
            aria-label="PixelHunt Home"
          >
            <div className="logo-icon-wrapper">
              <Camera className="logo-icon" size={24} />
              <Sparkles className="logo-badge" size={12} />
            </div>
            <div className="brand-text">
              <span className="brand-name">Pixel<span className="accent-text">Hunt</span></span>
              <span className="brand-subtext">Unsplash Visual Explorer</span>
            </div>
          </a>

          <div className="header-badges">
            <button
              type="button"
              className="api-badge-btn"
              onClick={() => setShowKeyModal(true)}
              title="Configure custom Unsplash API Key"
              aria-label="API Key settings"
            >
              <Key size={14} className={hasCustomKey ? 'key-active' : ''} />
              <span>{hasCustomKey ? 'API Key Active' : 'API Key'}</span>
            </button>

            <span className="api-badge" title="Retrieved via Unsplash API & Curated Engine">
              <span className="badge-dot"></span>
              Powered by Unsplash
            </span>
          </div>
        </div>
      </header>

      {/* API Key Configuration Modal */}
      {showKeyModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowKeyModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="api-modal-title"
        >
          <div
            className="modal-content"
            style={{ maxWidth: 520, padding: '1.75rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="logo-icon-wrapper" style={{ width: 34, height: 34 }}>
                  <Key size={18} />
                </div>
                <h3 id="api-modal-title" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
                  Unsplash API Key
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowKeyModal(false)}
                aria-label="Close API Key dialog"
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              PixelHunt includes a smart built-in photo engine that automatically displays relevant high-resolution photos for any search query. You can also provide an official Unsplash Access Key for live API requests.
            </p>

            <form onSubmit={handleSaveKey}>
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="unsplash-key-input"
                  style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}
                >
                  Unsplash Access Key
                </label>
                <input
                  id="unsplash-key-input"
                  type="text"
                  className="search-input"
                  style={{ height: 44, fontSize: '0.9rem', padding: '0 1rem' }}
                  placeholder="Paste your Unsplash Access Key here..."
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem' }}>
                {hasCustomKey ? (
                  <button
                    type="button"
                    className="modal-link-btn secondary"
                    style={{ fontSize: '0.85rem' }}
                    onClick={handleClearKey}
                  >
                    Clear Key
                  </button>
                ) : (
                  <a
                    href="https://unsplash.com/developers"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Get Free Unsplash Key
                  </a>
                )}

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    className="modal-link-btn secondary"
                    onClick={() => setShowKeyModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="modal-link-btn primary"
                    style={{ minWidth: 100, justifyContent: 'center' }}
                  >
                    {savedSuccess ? (
                      <>
                        <Check size={16} />
                        <span>Saved!</span>
                      </>
                    ) : (
                      <span>Save Key</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
