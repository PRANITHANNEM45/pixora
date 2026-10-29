import React from 'react';
import { AlertCircle, RefreshCw, KeyRound, WifiOff } from 'lucide-react';

export default function ErrorState({ error, onRetry, onUseDemo }) {
  const isMissingKey = error?.type === 'MISSING_KEY';
  const isRateLimited = error?.type === 'RATE_LIMITED';
  const isNetwork = error?.type === 'NETWORK_ERROR';
  const isUnauthorized = error?.type === 'UNAUTHORIZED';

  let title = 'Something went wrong';
  let message = error?.message || 'An unexpected error occurred while communicating with the Unsplash API.';
  let Icon = AlertCircle;

  if (isMissingKey) {
    title = 'Unsplash Access Key Required';
    Icon = KeyRound;
  } else if (isRateLimited) {
    title = 'API Rate Limit Reached';
    Icon = AlertCircle;
  } else if (isNetwork) {
    title = 'Network Connection Error';
    Icon = WifiOff;
  } else if (isUnauthorized) {
    title = 'Invalid API Credentials';
    Icon = KeyRound;
  }

  return (
    <div className="state-container" role="alert" aria-live="assertive">
      <div className="state-icon-wrapper error">
        <Icon size={32} />
      </div>

      <h3 className="state-title">{title}</h3>
      <p className="state-message">{message}</p>

      {isMissingKey && (
        <div className="api-key-helper">
          <p style={{ fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-main)' }}>
            How to configure your API key:
          </p>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.6' }}>
            <li>
              Register a free developer account at{' '}
              <a
                href="https://unsplash.com/developers"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
              >
                unsplash.com/developers
              </a>.
            </li>
            <li>Create a new application and copy your <strong>Access Key</strong>.</li>
            <li>
              Create a file named <code>.env</code> in the project root:
              <br />
              <code>VITE_UNSPLASH_ACCESS_KEY=your_actual_access_key</code>
            </li>
            <li>Restart your development server.</li>
          </ol>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {onRetry && (
          <button
            type="button"
            className="state-action-btn primary"
            onClick={onRetry}
          >
            <RefreshCw size={16} />
            <span>Retry Search</span>
          </button>
        )}

        {isMissingKey && onUseDemo && (
          <button
            type="button"
            className="state-action-btn"
            style={{ background: 'var(--color-bg-subtle)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
            onClick={onUseDemo}
          >
            View Demo Showcase Photos
          </button>
        )}
      </div>
    </div>
  );
}
