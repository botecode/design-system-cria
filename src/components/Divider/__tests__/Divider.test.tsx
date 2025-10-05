import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from '../Divider';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders vertical divider when orientation is vertical', () => {
    render(<Divider orientation="vertical" />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with custom className', () => {
    render(<Divider className="custom-divider" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('custom-divider');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red', height: '10px' };
    render(<Divider style={customStyle} />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(divider).toHaveStyle('height: 10px');
  });

  it('supports data attributes', () => {
    render(<Divider data-testid="custom-divider" data-orientation="horizontal" />);
    const divider = screen.getByTestId('custom-divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Divider variant="solid" />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--solid');

    rerender(<Divider variant="dashed" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--dashed');

    rerender(<Divider variant="dotted" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--dotted');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Divider size="sm" />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--sm');

    rerender(<Divider size="md" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--md');

    rerender(<Divider size="lg" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--lg');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Divider color="primary" />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--primary');

    rerender(<Divider color="secondary" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--secondary');

    rerender(<Divider color="gray" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--gray');
  });

  it('renders with text label when provided', () => {
    render(<Divider label="OR" />);
    const divider = screen.getByRole('separator');
    const label = screen.getByText('OR');
    expect(divider).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('cria-divider__label');
  });

  it('renders with custom label positioning', () => {
    const { rerender } = render(<Divider label="Center" labelPosition="center" />);
    let label = screen.getByText('Center');
    expect(label).toHaveClass('cria-divider__label--center');

    rerender(<Divider label="Start" labelPosition="start" />);
    label = screen.getByText('Start');
    expect(label).toHaveClass('cria-divider__label--start');

    rerender(<Divider label="End" labelPosition="end" />);
    label = screen.getByText('End');
    expect(label).toHaveClass('cria-divider__label--end');
  });

  it('applies proper accessibility attributes', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveAttribute('role', 'separator');
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('applies proper accessibility attributes for vertical orientation', () => {
    render(<Divider orientation="vertical" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveAttribute('role', 'separator');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with custom width for horizontal dividers', () => {
    render(<Divider width="50%" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveStyle('width: 50%');
  });

  it('renders with custom height for vertical dividers', () => {
    render(<Divider orientation="vertical" height="100px" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveStyle('height: 100px');
  });

  it('handles spacing prop correctly', () => {
    const { rerender } = render(<Divider spacing="sm" />);
    let divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--spacing-sm');

    rerender(<Divider spacing="md" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--spacing-md');

    rerender(<Divider spacing="lg" />);
    divider = screen.getByRole('separator');
    expect(divider).toHaveClass('cria-divider--spacing-lg');
  });

  it('combines multiple props correctly', () => {
    render(
      <Divider
        orientation="vertical"
        variant="dashed"
        size="lg"
        color="primary"
        className="custom-class"
        data-testid="complex-divider"
      />
    );
    
    const divider = screen.getByTestId('complex-divider');
    expect(divider).toHaveClass('cria-divider');
    expect(divider).toHaveClass('cria-divider--vertical');
    expect(divider).toHaveClass('cria-divider--dashed');
    expect(divider).toHaveClass('cria-divider--lg');
    expect(divider).toHaveClass('cria-divider--primary');
    expect(divider).toHaveClass('custom-class');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders without label when label is empty string', () => {
    render(<Divider label="" />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    // When label is empty, it should render as a simple divider without label structure
    expect(divider).not.toHaveClass('cria-divider--with-label');
  });

  it('renders with label but no labelPosition defaults to center', () => {
    render(<Divider label="Default Center" />);
    const label = screen.getByText('Default Center');
    expect(label).toHaveClass('cria-divider__label--center');
  });
});
