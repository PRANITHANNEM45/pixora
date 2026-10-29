import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export default function Header({ onReset }) {
  return (
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
          <span className="api-badge" title="Retrieved via official Unsplash API">
            <span className="badge-dot"></span>
            Powered by Unsplash
          </span>
        </div>
      </div>
    </header>
  );
}
