import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  it('does not render when totalPages is 1 or 0', () => {
    const { container: container1 } = render(
      <Pagination currentPage={1} totalPages={1} onPageChange={vi.fn()} isLoading={false} />
    );
    expect(container1.firstChild).toBeNull();

    const { container: container0 } = render(
      <Pagination currentPage={1} totalPages={0} onPageChange={vi.fn()} isLoading={false} />
    );
    expect(container0.firstChild).toBeNull();
  });

  it('renders correctly and displays current and total pages', () => {
    render(
      <Pagination currentPage={3} totalPages={10} onPageChange={vi.fn()} isLoading={false} />
    );

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled();
  });

  it('disables Previous on page 1', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} isLoading={false} />
    );

    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled();
  });

  it('disables Next on final page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={vi.fn()} isLoading={false} />
    );

    expect(screen.getByRole('button', { name: /previous/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });

  it('calls onPageChange with next page when Next is clicked', async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={handlePageChange} isLoading={false} />
    );

    const nextBtn = screen.getByRole('button', { name: /next/i });
    await user.click(nextBtn);

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with previous page when Previous is clicked', async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={handlePageChange} isLoading={false} />
    );

    const prevBtn = screen.getByRole('button', { name: /previous/i });
    await user.click(prevBtn);

    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
