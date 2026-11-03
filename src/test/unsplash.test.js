import { describe, it, expect } from 'vitest';
import { formatUnsplashUrl, normalizePhoto, getCuratedMockPhotos } from '../services/unsplash';

describe('Unsplash Service', () => {
  it('appends UTM parameters for proper Unsplash API attribution', () => {
    const url = 'https://unsplash.com/photos/123';
    const formatted = formatUnsplashUrl(url);
    expect(formatted).toBe('https://unsplash.com/photos/123?utm_source=pixelhunt&utm_medium=referral');

    const urlWithParams = 'https://unsplash.com/photos/123?client=true';
    const formattedWithParams = formatUnsplashUrl(urlWithParams);
    expect(formattedWithParams).toBe('https://unsplash.com/photos/123?client=true&utm_source=pixelhunt&utm_medium=referral');
  });

  it('normalizes raw Unsplash photo response object accurately', () => {
    const mockRawPhoto = {
      id: 'abc-123',
      description: 'A serene mountain lake',
      alt_description: 'crystal clear lake surrounded by mountains',
      width: 4000,
      height: 3000,
      likes: 1250,
      color: '#1e293b',
      urls: {
        thumb: 'https://images.unsplash.com/thumb.jpg',
        small: 'https://images.unsplash.com/small.jpg',
        regular: 'https://images.unsplash.com/regular.jpg',
        full: 'https://images.unsplash.com/full.jpg'
      },
      user: {
        name: 'Jane Doe',
        username: 'janedoe',
        profile_image: { medium: 'https://images.unsplash.com/jane.jpg' },
        links: { html: 'https://unsplash.com/@janedoe' }
      },
      links: {
        html: 'https://unsplash.com/photos/abc-123',
        download: 'https://unsplash.com/photos/abc-123/download'
      }
    };

    const normalized = normalizePhoto(mockRawPhoto, 'mountains');

    expect(normalized.id).toBe('abc-123');
    expect(normalized.title).toBe('Crystal clear lake surrounded by mountains');
    expect(normalized.urls.regular).toBe('https://images.unsplash.com/regular.jpg');
    expect(normalized.photographer.name).toBe('Jane Doe');
    expect(normalized.photographer.link).toContain('utm_source=pixelhunt');
    expect(normalized.links.html).toContain('utm_source=pixelhunt');
  });

  it('provides curated fallback mock photos when API key is not configured', () => {
    const data = getCuratedMockPhotos('nature', 1, 12);
    expect(data.results.length).toBeGreaterThan(0);
    expect(data.isDemoFallback).toBe(true);
    expect(data.results[0]).toHaveProperty('urls');
    expect(data.results[0]).toHaveProperty('photographer');
  });

  it('returns relevant car photographs when query is "cars"', () => {
    const data = getCuratedMockPhotos('cars', 1, 12);
    expect(data.results.length).toBe(12);
    const carTitles = data.results.map((r) => r.title.toLowerCase());
    expect(carTitles.some((t) => t.includes('porsche'))).toBe(true);
    expect(carTitles.some((t) => t.includes('ferrari'))).toBe(true);
    expect(carTitles.some((t) => t.includes('mustang'))).toBe(true);
  });

  it('returns relevant cricket photographs when query is "cricket"', () => {
    const data = getCuratedMockPhotos('cricket', 1, 12);
    expect(data.results.length).toBeGreaterThan(0);
    const titles = data.results.map((r) => r.title.toLowerCase());
    expect(titles.some((t) => t.includes('cricket') || t.includes('pitch') || t.includes('batsman'))).toBe(true);
  });

  it('returns relevant BMW photographs when query is "bmw"', () => {
    const data = getCuratedMockPhotos('bmw', 1, 12);
    expect(data.results.length).toBeGreaterThan(0);
    const titles = data.results.map((r) => r.title.toLowerCase());
    expect(titles.some((t) => t.includes('bmw') || t.includes('m4') || t.includes('m8'))).toBe(true);
  });

  it('returns relevant dog photographs when query is "dogs" or "puppy"', () => {
    const data = getCuratedMockPhotos('dogs', 1, 12);
    expect(data.results.length).toBeGreaterThan(0);
    const titles = data.results.map((r) => r.title.toLowerCase());
    expect(titles.some((t) => t.includes('retriever') || t.includes('husky') || t.includes('puppy'))).toBe(true);
  });
});
