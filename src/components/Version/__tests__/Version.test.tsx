import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Version } from '../Version';

describe('Version', () => {
  it('renders default version', () => {
    render(<Version />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();
  });

  it('renders custom version', () => {
    render(<Version version="1.2.3" />);
    expect(screen.getByText('v1.2.3')).toBeInTheDocument();
  });

  it('renders as badge when badge prop is true', () => {
    render(<Version badge />);
    const versionElement = screen.getByText('v0.1.0');
    expect(versionElement.closest('.version-badge')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Version className="custom-class" />);
    expect(screen.getByText('v0.1.0').closest('.version')).toHaveClass('custom-class');
  });

  it('renders with custom style', () => {
    render(<Version style={{ color: 'red' }} />);
    expect(screen.getByText('v0.1.0')).toHaveStyle('color: red');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Version size="caption" />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();

    rerender(<Version size="h5" />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Version variant="primary" />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();

    rerender(<Version variant="success" />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();
  });

  it('renders build info when showBuildInfo is true', () => {
    render(<Version showBuildInfo />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();
    expect(screen.getByText(/Build:/)).toBeInTheDocument();
    expect(screen.getByText(/Node:/)).toBeInTheDocument();
    expect(screen.getByText(/Env:/)).toBeInTheDocument();
  });

  it('renders badge with build info', () => {
    render(<Version badge showBuildInfo />);
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();
    expect(screen.getByText(/Build:/)).toBeInTheDocument();
    const versionElement = screen.getByText('v0.1.0');
    expect(versionElement.closest('.version-badge')).toBeInTheDocument();
  });

  it('applies correct variant colors', () => {
    const { rerender } = render(<Version variant="primary" />);
    expect(screen.getByText('v0.1.0')).toHaveStyle('color: rgb(99, 102, 241)'); // primary[600]

    rerender(<Version variant="success" />);
    expect(screen.getByText('v0.1.0')).toHaveStyle('color: rgb(34, 197, 94)'); // success[600]

    rerender(<Version variant="error" />);
    expect(screen.getByText('v0.1.0')).toHaveStyle('color: rgb(239, 68, 68)'); // error[600]
  });

  it('applies badge styles correctly', () => {
    render(<Version badge />);
    const badgeElement = screen.getByText('v0.1.0').closest('.version-badge');
    expect(badgeElement).toHaveStyle('display: inline-flex');
    expect(badgeElement).toHaveStyle('align-items: center');
    expect(badgeElement).toHaveStyle('padding: 4px 8px');
  });

  it('handles empty version gracefully', () => {
    render(<Version version="" />);
    expect(screen.getByText('v')).toBeInTheDocument();
  });

  it('displays correct display name', () => {
    expect(Version.displayName).toBe('Version');
  });
});
