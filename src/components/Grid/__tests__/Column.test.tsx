import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Column } from '../Column';

describe('Column', () => {
  it('renders with default props', () => {
    render(
      <Column data-testid="column">
        <div>Item 1</div>
        <div>Item 2</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toBeInTheDocument();
    expect(column).toHaveClass('cria-column');
  });

  it('renders with custom className', () => {
    render(
      <Column className="custom-column" data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column');
    expect(column).toHaveClass('custom-column');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'green', padding: '15px' };
    render(
      <Column style={customStyle} data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveStyle('background-color: rgb(0, 128, 0)');
    expect(column).toHaveStyle('padding: 15px');
  });

  it('supports data attributes', () => {
    render(
      <Column data-testid="column" data-span="2" data-offset="1">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveAttribute('data-span', '2');
    expect(column).toHaveAttribute('data-offset', '1');
  });

  it('renders with different span values', () => {
    const { rerender } = render(
      <Column span={1} data-testid="column">
        <div>Content</div>
      </Column>
    );
    let column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-1');

    rerender(
      <Column span={2} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-2');

    rerender(
      <Column span={3} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-3');

    rerender(
      <Column span={4} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-4');

    rerender(
      <Column span={6} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-6');

    rerender(
      <Column span={12} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-12');
  });

  it('renders with responsive span values', () => {
    render(
      <Column span={{ sm: 12, md: 6, lg: 4 }} data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--span-sm-12');
    expect(column).toHaveClass('cria-column--span-md-6');
    expect(column).toHaveClass('cria-column--span-lg-4');
  });

  it('renders with different offset values', () => {
    const { rerender } = render(
      <Column offset={1} data-testid="column">
        <div>Content</div>
      </Column>
    );
    let column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--offset-1');

    rerender(
      <Column offset={2} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--offset-2');

    rerender(
      <Column offset={3} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--offset-3');

    rerender(
      <Column offset={6} data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--offset-6');
  });

  it('renders with responsive offset values', () => {
    render(
      <Column offset={{ sm: 0, md: 2, lg: 4 }} data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--offset-sm-0');
    expect(column).toHaveClass('cria-column--offset-md-2');
    expect(column).toHaveClass('cria-column--offset-lg-4');
  });

  it('renders with different alignments', () => {
    const { rerender } = render(
      <Column align="start" data-testid="column">
        <div>Content</div>
      </Column>
    );
    let column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--align-start');

    rerender(
      <Column align="center" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--align-center');

    rerender(
      <Column align="end" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--align-end');

    rerender(
      <Column align="stretch" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--align-stretch');
  });

  it('renders with different justify configurations', () => {
    const { rerender } = render(
      <Column justify="start" data-testid="column">
        <div>Content</div>
      </Column>
    );
    let column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--justify-start');

    rerender(
      <Column justify="center" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--justify-center');

    rerender(
      <Column justify="end" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--justify-end');

    rerender(
      <Column justify="between" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--justify-between');

    rerender(
      <Column justify="around" data-testid="column">
        <div>Content</div>
      </Column>
    );
    column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--justify-around');
  });

  it('renders with auto width', () => {
    render(
      <Column auto data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--auto');
  });

  it('renders with full width', () => {
    render(
      <Column full data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column--full');
  });

  it('renders children correctly', () => {
    render(
      <Column data-testid="column">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Column>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Column
        span={6}
        offset={3}
        align="center"
        justify="between"
        className="custom-class"
        data-testid="column"
      >
        <div>Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('column');
    expect(column).toHaveClass('cria-column');
    expect(column).toHaveClass('cria-column--span-6');
    expect(column).toHaveClass('cria-column--offset-3');
    expect(column).toHaveClass('cria-column--align-center');
    expect(column).toHaveClass('cria-column--justify-between');
    expect(column).toHaveClass('custom-class');
  });

  it('handles empty children gracefully', () => {
    render(<Column data-testid="column" />);
    const column = screen.getByTestId('column');
    expect(column).toBeInTheDocument();
    expect(column).toBeEmptyDOMElement();
  });

  it('applies accessibility attributes', () => {
    render(
      <Column role="gridcell" aria-label="Content column" data-testid="column">
        <div>Content</div>
      </Column>
    );
    const column = screen.getByTestId('column');
    expect(column).toHaveAttribute('role', 'gridcell');
    expect(column).toHaveAttribute('aria-label', 'Content column');
  });
});
