import React, { useState } from 'react';
import { Heart, User } from 'lucide-react';

export default function ImageCard({ photo, onSelect }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [touchActive, setTouchActive] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(photo);
    }
  };

  const handleTouchToggle = (e) => {
    // If not already active on touch device, show overlay first on touch
    if (!touchActive) {
      setTouchActive(true);
    } else {
      onSelect(photo);
    }
  };

  return (
    <div
      className={`image-card ${touchActive ? 'touch-active' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`View photo by ${photo.photographer.name}: ${photo.title}`}
      onClick={() => onSelect(photo)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchToggle}
      style={{ backgroundColor: photo.color || '#f1f5f9' }}
    >
      <div className="image-card-img-wrapper">
        <img
          src={imageError ? 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80' : photo.urls.small}
          alt={photo.altDescription || photo.title || 'Unsplash photograph'}
          loading="lazy"
          className={`image-card-img ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </div>

      <div className="image-card-overlay" aria-hidden="true">
        <div className="overlay-top">
          <span className="overlay-likes" title={`${photo.likes.toLocaleString()} likes`}>
            <Heart size={14} fill="currentColor" />
            <span>{photo.likes > 999 ? `${(photo.likes / 1000).toFixed(1)}k` : photo.likes}</span>
          </span>
        </div>

        <div className="overlay-bottom">
          <p className="overlay-description">{photo.title}</p>
          <div className="overlay-photographer">
            {photo.photographer.avatar ? (
              <img
                src={photo.photographer.avatar}
                alt={photo.photographer.name}
                className="photographer-avatar"
                loading="lazy"
              />
            ) : (
              <div className="photographer-avatar-placeholder">
                <User size={16} />
              </div>
            )}
            <div className="photographer-meta">
              <span className="photographer-name">{photo.photographer.name}</span>
              <span className="photographer-handle">@{photo.photographer.username}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
