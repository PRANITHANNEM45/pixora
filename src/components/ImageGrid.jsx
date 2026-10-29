import React from 'react';
import ImageCard from './ImageCard';

export default function ImageGrid({ photos, onSelectPhoto }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div
      className="image-grid"
      role="region"
      aria-label="Image results gallery"
    >
      {photos.map((photo) => (
        <ImageCard
          key={photo.id}
          photo={photo}
          onSelect={onSelectPhoto}
        />
      ))}
    </div>
  );
}
