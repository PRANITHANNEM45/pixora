import React from 'react';

export default function Loader({ count = 12 }) {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className="skeleton-grid"
      role="status"
      aria-live="polite"
      aria-label="Loading photos..."
    >
      {skeletons.map((idx) => (
        <div key={idx} className="skeleton-card" aria-hidden="true" />
      ))}
      <span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>
        Loading high-resolution photographs...
      </span>
    </div>
  );
}
