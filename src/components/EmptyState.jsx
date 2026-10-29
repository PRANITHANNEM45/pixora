import React from 'react';
import { SearchX } from 'lucide-react';

const SUGGESTIONS = ['Nature', 'Architecture', 'Ocean', 'Forest', 'Minimalist'];

export default function EmptyState({ query, onSelectSuggestion }) {
  return (
    <div className="state-container" role="status" aria-label="No results found">
      <div className="state-icon-wrapper empty">
        <SearchX size={32} />
      </div>
      <h3 className="state-title">No photos found for "{query}"</h3>
      <p className="state-message">
        We couldn't find any photographs matching your query. Try checking for spelling errors, using broader keywords, or explore one of the trending categories below.
      </p>

      <div className="keywords-chips-list" style={{ marginTop: '0.5rem' }}>
        {SUGGESTIONS.map((tag) => (
          <button
            key={tag}
            type="button"
            className="keyword-chip"
            onClick={() => onSelectSuggestion(tag)}
          >
            Try "{tag}"
          </button>
        ))}
      </div>
    </div>
  );
}
