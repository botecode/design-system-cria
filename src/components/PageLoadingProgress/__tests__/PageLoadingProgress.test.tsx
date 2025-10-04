import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PageLoadingProgress } from '../PageLoadingProgress';

describe('PageLoadingProgress', () => {
  it('renders with correct progress value', () => {
    render(<PageLoadingProgress progress={50} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders with 0% progress by default', () => {
    render(<PageLoadingProgress />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('renders with 100% progress', () => {
    render(<PageLoadingProgress progress={100} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('applies custom className', () => {
    render(<PageLoadingProgress progress={25} className="custom-progress" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress', 'custom-progress');
  });

  it('applies custom style', () => {
    render(<PageLoadingProgress progress={75} style={{ zIndex: 9999 }} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ zIndex: '9999' });
  });

  it('renders with custom color', () => {
    render(<PageLoadingProgress progress={60} color="success" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--success');
  });

  it('renders with custom size', () => {
    render(<PageLoadingProgress progress={40} size="lg" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--lg');
  });

  it('renders with custom label', () => {
    render(<PageLoadingProgress progress={30} label="Loading content..." />);
    
    expect(screen.getByText('Loading content...')).toBeInTheDocument();
  });

  it('renders with animated progress', () => {
    render(<PageLoadingProgress progress={80} animated />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--animated');
  });

  it('renders with indeterminate state', () => {
    render(<PageLoadingProgress indeterminate />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--indeterminate');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('handles progress changes', () => {
    const { rerender } = render(<PageLoadingProgress progress={20} />);
    
    let progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '20');
    
    rerender(<PageLoadingProgress progress={80} />);
    
    progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '80');
  });

  it('clamps progress values to 0-100 range', () => {
    const { rerender } = render(<PageLoadingProgress progress={-10} />);
    
    let progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    
    rerender(<PageLoadingProgress progress={150} />);
    
    progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('a11y: progress information announced to screen readers', () => {
    render(<PageLoadingProgress progress={45} label="Loading page..." />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-label', 'Loading page...');
    expect(progressBar).toHaveAttribute('aria-valuenow', '45');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('a11y: indeterminate progress has proper aria attributes', () => {
    render(<PageLoadingProgress indeterminate label="Loading..." />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'Loading...');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    expect(progressBar).toHaveClass('cria-page-loading-progress--indeterminate');
  });

  it('renders with custom position', () => {
    render(<PageLoadingProgress progress={70} position="bottom" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--bottom');
  });

  it('renders with custom thickness', () => {
    render(<PageLoadingProgress progress={55} thickness="thick" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--thick');
  });

  it('renders with smooth transitions', () => {
    render(<PageLoadingProgress progress={35} smooth />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--smooth');
  });

  it('handles onComplete callback', () => {
    const mockOnComplete = jest.fn();
    render(<PageLoadingProgress progress={100} onComplete={mockOnComplete} />);
    
    expect(mockOnComplete).toHaveBeenCalledWith(100);
  });

  it('handles onProgressChange callback', () => {
    const mockOnProgressChange = jest.fn();
    const { rerender } = render(
      <PageLoadingProgress progress={30} onProgressChange={mockOnProgressChange} />
    );
    
    expect(mockOnProgressChange).toHaveBeenCalledWith(30);
    
    rerender(<PageLoadingProgress progress={60} onProgressChange={mockOnProgressChange} />);
    
    expect(mockOnProgressChange).toHaveBeenCalledWith(60);
  });

  it('renders with custom z-index', () => {
    render(<PageLoadingProgress progress={25} zIndex={1000} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ zIndex: '1000' });
  });

  it('renders with custom duration for smooth transitions', () => {
    render(<PageLoadingProgress progress={50} smooth duration={500} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ transitionDuration: '500ms' });
  });

  it('renders with custom delay', () => {
    render(<PageLoadingProgress progress={40} delay={200} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-page-loading-progress--delayed');
  });
});
