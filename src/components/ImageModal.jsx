import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Download, Heart, Maximize, User } from 'lucide-react';

export default function ImageModal({ photo, onClose }) {
  const modalContentRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!photo) return;

    // Focus close button on open
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const handleBackdropClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-image-title"
    >
      <div className="modal-content" ref={modalContentRef}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-photographer-info">
            {photo.photographer.avatar ? (
              <img
                src={photo.photographer.avatar}
                alt={photo.photographer.name}
                className="modal-avatar"
              />
            ) : (
              <div className="photographer-avatar-placeholder" style={{ width: 40, height: 40 }}>
                <User size={20} />
              </div>
            )}
            <div className="modal-photographer-text">
              <h4>{photo.photographer.name}</h4>
              <a
                href={photo.photographer.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${photo.photographer.name} on Unsplash`}
              >
                @{photo.photographer.username}
              </a>
            </div>
          </div>

          <div className="modal-header-actions">
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close image preview (Escape)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Image Area */}
        <div className="modal-image-container">
          <img
            src={photo.urls.regular}
            alt={photo.altDescription || photo.title}
            className="modal-image"
          />
        </div>

        {/* Modal Footer with details & actions */}
        <div className="modal-footer">
          <div className="modal-details">
            <h3 id="modal-image-title" className="modal-caption" title={photo.description}>
              {photo.title}
            </h3>
            <div className="modal-metadata">
              <span className="modal-meta-item">
                <Heart size={14} fill="#f43f5e" color="#f43f5e" />
                <span>{photo.likes.toLocaleString()} likes</span>
              </span>
              <span className="modal-meta-item">
                <Maximize size={14} />
                <span>{photo.width} × {photo.height}</span>
              </span>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={photo.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link-btn secondary"
              title="View original on Unsplash (opens in new tab)"
            >
              <span>View on Unsplash</span>
              <ExternalLink size={15} />
            </a>

            <a
              href={photo.links.download}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link-btn primary"
              download
              title="Download high-resolution image"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
