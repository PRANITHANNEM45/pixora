import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Integration Flow', () => {
  it('renders application header and search input on startup', () => {
    render(<App />);

    expect(screen.getByLabelText(/Pixora Home/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search photos/i)).toBeInTheDocument();
    expect(screen.getByText(/Photos provided by/i)).toBeInTheDocument();
  });

  it('performs search, displays gallery and pagination, and handles preview modal', async () => {
    const user = userEvent.setup();
    render(<App />);

    const natureChip = screen.getByRole('button', { name: /^nature$/i });
    await user.click(natureChip);

    // Results header appears
    await waitFor(() => {
      expect(screen.getByText(/Results for/i)).toBeInTheDocument();
    });

    // Image cards are displayed
    const imageCards = await screen.findAllByRole('button', { name: /view photo/i });
    expect(imageCards.length).toBeGreaterThan(0);

    // Clicking an image opens the ImageModal
    await user.click(imageCards[0]);

    // Modal is now open
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view on unsplash/i })).toBeInTheDocument();

    // Closing modal via close button
    const closeBtn = screen.getByLabelText(/close image preview/i);
    await user.click(closeBtn);

    // Modal is dismissed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
