import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShimmerSkeleton } from '../ShimmerSkeleton';

describe('ShimmerSkeleton', () => {
  it('renders with correct shimmer animation', () => {
    render(<ShimmerSkeleton />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton');
    expect(skeleton).toHaveAttribute('aria-label', 'Loading content');
  });

  it('renders text skeleton shape', () => {
    render(<ShimmerSkeleton variant="text" lines={3} />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--text');
  });

  it('renders avatar skeleton shape', () => {
    render(<ShimmerSkeleton variant="avatar" size="lg" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--avatar');
  });

  it('renders card skeleton shape', () => {
    render(<ShimmerSkeleton variant="card" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--card');
  });

  it('renders button skeleton shape', () => {
    render(<ShimmerSkeleton variant="button" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--button');
  });

  it('renders circle skeleton shape', () => {
    render(<ShimmerSkeleton variant="circle" size="md" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--circle');
  });

  it('renders rectangle skeleton shape', () => {
    render(<ShimmerSkeleton variant="rectangle" width="200px" height="100px" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--rectangle');
  });

  it('applies custom width and height', () => {
    render(<ShimmerSkeleton width="300px" height="50px" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle({ width: '300px', height: '50px' });
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<ShimmerSkeleton variant="avatar" size="sm" />);
    let skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--sm');

    rerender(<ShimmerSkeleton variant="avatar" size="md" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--md');

    rerender(<ShimmerSkeleton variant="avatar" size="lg" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--lg');
  });

  it('renders multiple text lines', () => {
    render(<ShimmerSkeleton variant="text" lines={5} />);
    
    const skeleton = screen.getByRole('status');
    const lines = skeleton.querySelectorAll('.cria-shimmer-skeleton__line');
    expect(lines).toHaveLength(5);
  });

  it('a11y: loading state announced to screen readers', () => {
    render(<ShimmerSkeleton aria-label="Loading user profile" />);
    
    const skeleton = screen.getByRole('status', { name: 'Loading user profile' });
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('aria-live', 'polite');
  });

  it('applies custom className', () => {
    render(<ShimmerSkeleton className="custom-skeleton" />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('cria-shimmer-skeleton', 'custom-skeleton');
  });

  it('applies custom style', () => {
    render(<ShimmerSkeleton style={{ margin: '20px' }} />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle({ margin: '20px' });
  });

  it('renders with animation disabled', () => {
    render(<ShimmerSkeleton animated={false} />);
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('cria-shimmer-skeleton--no-animation');
  });
});
