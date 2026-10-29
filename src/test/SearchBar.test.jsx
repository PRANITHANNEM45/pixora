import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  it('renders search input and submit button', () => {
    render(<SearchBar currentQuery="" onSearch={vi.fn()} isLoading={false} />);
    
    expect(screen.getByPlaceholderText(/search photos/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^search$/i })).toBeInTheDocument();
  });

  it('submits search when valid query is entered', async () => {
    const handleSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar currentQuery="" onSearch={handleSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText(/search photos/i);
    await user.type(input, 'architecture');

    const submitBtn = screen.getByRole('button', { name: /^search$/i });
    await user.click(submitBtn);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('architecture');
  });

  it('ignores empty or whitespace-only search queries', async () => {
    const handleSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar currentQuery="" onSearch={handleSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText(/search photos/i);
    await user.type(input, '    ');

    const submitBtn = screen.getByRole('button', { name: /^search$/i });
    expect(submitBtn).toBeDisabled();

    fireEvent.submit(input.closest('form'));
    expect(handleSearch).not.toHaveBeenCalled();
  });

  it('triggers search when suggested topic chip is clicked', async () => {
    const handleSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar currentQuery="" onSearch={handleSearch} isLoading={false} />);

    const natureChip = screen.getByRole('button', { name: /^nature$/i });
    await user.click(natureChip);

    expect(handleSearch).toHaveBeenCalledWith('Nature');
  });

  it('clears input when clear button is clicked', async () => {
    const user = userEvent.setup();
    render(<SearchBar currentQuery="cars" onSearch={vi.fn()} isLoading={false} />);

    const input = screen.getByPlaceholderText(/search photos/i);
    expect(input.value).toBe('cars');

    const clearBtn = screen.getByLabelText(/clear input/i);
    await user.click(clearBtn);

    expect(input.value).toBe('');
  });
});
