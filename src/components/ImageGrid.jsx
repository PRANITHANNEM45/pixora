import React from 'react';
import ImageCard from './ImageCard';

export default function ImageGrid({ photos, onSelectPhoto, viewMode = 'grid' }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div
      className={`image-grid ${viewMode === 'masonry' ? 'view-masonry' : 'view-grid'}`}
      role="region"
      aria-label="Image results gallery"
    >
      {photos.map((photo) => (
        <ImageCard
          key={photo.id}
          photo={photo}
          onSelect={onSelectPhoto}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}
