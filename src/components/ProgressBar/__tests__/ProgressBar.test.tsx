import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  const defaultProps = {
    value: 50,
  };

  it('renders progress bar with correct structure', () => {
    render(<ProgressBar {...defaultProps} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass('cria-progress-bar');
  });

  it('renders with correct progress value', () => {
    render(<ProgressBar value={75} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders with correct width based on value', () => {
    render(<ProgressBar value={60} />);
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 60%');
  });

  it('handles value of 0', () => {
    render(<ProgressBar value={0} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 0%');
  });

  it('handles value of 100', () => {
    render(<ProgressBar value={100} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 100%');
  });

  it('clamps value to valid range', () => {
    render(<ProgressBar value={150} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 100%');
  });

  it('clamps negative value to 0', () => {
    render(<ProgressBar value={-10} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 0%');
  });

  it('renders with label when provided', () => {
    render(<ProgressBar {...defaultProps} label="Upload Progress" />);
    
    expect(screen.getByText('Upload Progress')).toBeInTheDocument();
  });

  it('renders with percentage label when showPercentage is true', () => {
    render(<ProgressBar value={65} showPercentage />);
    
    expect(screen.getByText('65%')).toBeInTheDocument();
  });

  it('renders with both label and percentage', () => {
    render(
      <ProgressBar 
        value={30} 
        label="Download Progress" 
        showPercentage 
      />
    );
    
    expect(screen.getByText('Download Progress')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });

  it('supports determinate state', () => {
    render(<ProgressBar value={40} variant="determinate" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '40');
    expect(progressBar).not.toHaveAttribute('aria-busy', 'true');
  });

  it('supports indeterminate state', () => {
    render(<ProgressBar variant="indeterminate" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-busy', 'true');
    expect(progressBar).not.toHaveAttribute('aria-valuenow');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveClass('cria-progress-bar__fill--indeterminate');
  });

  it('supports different sizes', () => {
    const { rerender } = render(<ProgressBar {...defaultProps} size="sm" />);
    expect(screen.getByRole('progressbar')).toHaveClass('cria-progress-bar--sm');

    rerender(<ProgressBar {...defaultProps} size="md" />);
    expect(screen.getByRole('progressbar')).toHaveClass('cria-progress-bar--md');

    rerender(<ProgressBar {...defaultProps} size="lg" />);
    expect(screen.getByRole('progressbar')).toHaveClass('cria-progress-bar--lg');
  });

  it('supports different color variants', () => {
    const { rerender } = render(<ProgressBar {...defaultProps} color="primary" />);
    expect(screen.getByTestId('progress-fill')).toHaveClass('cria-progress-bar__fill--primary');

    rerender(<ProgressBar {...defaultProps} color="success" />);
    expect(screen.getByTestId('progress-fill')).toHaveClass('cria-progress-bar__fill--success');

    rerender(<ProgressBar {...defaultProps} color="warning" />);
    expect(screen.getByTestId('progress-fill')).toHaveClass('cria-progress-bar__fill--warning');

    rerender(<ProgressBar {...defaultProps} color="error" />);
    expect(screen.getByTestId('progress-fill')).toHaveClass('cria-progress-bar__fill--error');
  });

  it('applies custom className', () => {
    render(<ProgressBar {...defaultProps} className="custom-progress" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('custom-progress');
  });

  it('applies custom styles', () => {
    render(<ProgressBar {...defaultProps} style={{ margin: '10px' }} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ margin: '10px' });
  });

  it('supports custom aria-label', () => {
    render(<ProgressBar {...defaultProps} ariaLabel="Custom progress label" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'Custom progress label');
  });

  it('supports custom min and max values', () => {
    render(<ProgressBar value={30} min={0} max={50} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '50');
    expect(progressBar).toHaveAttribute('aria-valuenow', '30');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 60%'); // 30/50 * 100 = 60%
  });

  it('handles disabled state', () => {
    render(<ProgressBar {...defaultProps} disabled />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-disabled', 'true');
    expect(progressBar).toHaveClass('cria-progress-bar--disabled');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ProgressBar {...defaultProps} ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('cria-progress-bar');
  });

  it('renders with proper accessibility attributes', () => {
    render(<ProgressBar value={75} label="Task Progress" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('role', 'progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  it('announces progress to screen readers', () => {
    render(<ProgressBar value={45} label="File Upload" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'File Upload');
    expect(progressBar).toHaveAttribute('aria-valuenow', '45');
  });

  it('supports striped variant', () => {
    render(<ProgressBar {...defaultProps} striped />);
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveClass('cria-progress-bar__fill--striped');
  });

  it('supports animated variant', () => {
    render(<ProgressBar {...defaultProps} animated />);
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveClass('cria-progress-bar__fill--animated');
  });

  it('supports both striped and animated', () => {
    render(<ProgressBar {...defaultProps} striped animated />);
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveClass('cria-progress-bar__fill--striped');
    expect(progressFill).toHaveClass('cria-progress-bar__fill--animated');
  });

  it('handles edge case with min equals max', () => {
    render(<ProgressBar value={10} min={10} max={10} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '10');
    expect(progressBar).toHaveAttribute('aria-valuemin', '10');
    expect(progressBar).toHaveAttribute('aria-valuemax', '10');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 100%');
  });

  it('handles floating point values', () => {
    render(<ProgressBar value={33.33} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '33.33');
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 33.33%');
  });

  it('supports custom label component', () => {
    const CustomLabel = () => <span data-testid="custom-label">Custom Label</span>;
    
    render(<ProgressBar {...defaultProps} label={<CustomLabel />} />);
    
    expect(screen.getByTestId('custom-label')).toBeInTheDocument();
  });

  it('renders with proper indeterminate animation class', () => {
    render(<ProgressBar variant="indeterminate" />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('cria-progress-bar--indeterminate');
  });

  it('handles rapid value changes smoothly', () => {
    const { rerender } = render(<ProgressBar value={10} />);
    
    let progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 10%');
    
    rerender(<ProgressBar value={90} />);
    progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('width: 90%');
  });

  it('supports custom transition duration', () => {
    render(<ProgressBar {...defaultProps} transitionDuration="0.5s" />);
    
    const progressFill = screen.getByTestId('progress-fill');
    expect(progressFill).toHaveStyle('transition-duration: 0.5s');
  });
});
