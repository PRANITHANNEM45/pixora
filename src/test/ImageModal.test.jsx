import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ImageModal from '../components/ImageModal';

const samplePhoto = {
  id: 'test-1',
  title: 'Majestic Lake View',
  description: 'Crystal calm lake in the morning',
  altDescription: 'Lake view at sunrise',
  urls: {
    thumb: 'https://example.com/thumb.jpg',
    small: 'https://example.com/small.jpg',
    regular: 'https://example.com/regular.jpg',
    full: 'https://example.com/full.jpg'
  },
  width: 3840,
  height: 2160,
  likes: 850,
  color: '#3b82f6',
  photographer: {
    name: 'Alex Hunter',
    username: 'alexhunter',
    avatar: 'https://example.com/alex.jpg',
    link: 'https://unsplash.com/@alexhunter?utm_source=pixelhunt&utm_medium=referral'
  },
  links: {
    html: 'https://unsplash.com/photos/test-1?utm_source=pixelhunt&utm_medium=referral',
    download: 'https://unsplash.com/photos/test-1/download'
  }
};

describe('ImageModal Component', () => {
  it('renders photographer information and image details', () => {
    render(<ImageModal photo={samplePhoto} onClose={vi.fn()} />);

    expect(screen.getByText('Alex Hunter')).toBeInTheDocument();
    expect(screen.getByText('@alexhunter')).toBeInTheDocument();
    expect(screen.getByText('Majestic Lake View')).toBeInTheDocument();
    expect(screen.getByText(/3840 × 2160/i)).toBeInTheDocument();
    expect(screen.getByText(/850 likes/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view on unsplash/i })).toHaveAttribute(
      'href',
      samplePhoto.links.html
    );
  });

  it('triggers onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<ImageModal photo={samplePhoto} onClose={handleClose} />);

    const closeBtn = screen.getByLabelText(/close image preview/i);
    await user.click(closeBtn);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('triggers onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();

    render(<ImageModal photo={samplePhoto} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
