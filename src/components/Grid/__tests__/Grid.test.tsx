import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from '../Grid';

describe('Grid', () => {
  it('renders with default props', () => {
    render(
      <Grid data-testid="grid">
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('cria-grid');
  });

  it('renders with custom className', () => {
    render(
      <Grid className="custom-grid" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid');
    expect(grid).toHaveClass('custom-grid');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red', padding: '20px' };
    render(
      <Grid style={customStyle} data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(grid).toHaveStyle('padding: 20px');
  });

  it('supports data attributes', () => {
    render(
      <Grid data-testid="grid" data-columns="3" data-responsive="true">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveAttribute('data-columns', '3');
    expect(grid).toHaveAttribute('data-responsive', 'true');
  });

  it('renders with different gap sizes', () => {
    const { rerender } = render(
      <Grid gap="sm" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    let grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--gap-sm');

    rerender(
      <Grid gap="md" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--gap-md');

    rerender(
      <Grid gap="lg" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--gap-lg');
  });

  it('renders with different column configurations', () => {
    const { rerender } = render(
      <Grid columns={2} data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    let grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--cols-2');

    rerender(
      <Grid columns={3} data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--cols-3');

    rerender(
      <Grid columns={4} data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--cols-4');
  });

  it('renders with responsive column configurations', () => {
    render(
      <Grid columns={{ sm: 1, md: 2, lg: 3 }} data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--cols-sm-1');
    expect(grid).toHaveClass('cria-grid--cols-md-2');
    expect(grid).toHaveClass('cria-grid--cols-lg-3');
  });

  it('renders with different alignments', () => {
    const { rerender } = render(
      <Grid align="start" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    let grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--align-start');

    rerender(
      <Grid align="center" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--align-center');

    rerender(
      <Grid align="end" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--align-end');
  });

  it('renders with different justify configurations', () => {
    const { rerender } = render(
      <Grid justify="start" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    let grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--justify-start');

    rerender(
      <Grid justify="center" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--justify-center');

    rerender(
      <Grid justify="end" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--justify-end');

    rerender(
      <Grid justify="between" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--justify-between');

    rerender(
      <Grid justify="around" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--justify-around');
  });

  it('renders with auto-fit columns', () => {
    render(
      <Grid autoFit data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--auto-fit');
  });

  it('renders with auto-fill columns', () => {
    render(
      <Grid autoFill data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid--auto-fill');
  });

  it('renders with minimum column width', () => {
    render(
      <Grid minColumnWidth="200px" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle('grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))');
  });

  it('renders children correctly', () => {
    render(
      <Grid data-testid="grid">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Grid>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Grid
        columns={3}
        gap="lg"
        align="center"
        justify="between"
        className="custom-class"
        data-testid="grid"
      >
        <div>Content</div>
      </Grid>
    );
    
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('cria-grid');
    expect(grid).toHaveClass('cria-grid--cols-3');
    expect(grid).toHaveClass('cria-grid--gap-lg');
    expect(grid).toHaveClass('cria-grid--align-center');
    expect(grid).toHaveClass('cria-grid--justify-between');
    expect(grid).toHaveClass('custom-class');
  });

  it('handles empty children gracefully', () => {
    render(<Grid data-testid="grid" />);
    const grid = screen.getByTestId('grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toBeEmptyDOMElement();
  });

  it('applies accessibility attributes', () => {
    render(
      <Grid role="grid" aria-label="Content grid" data-testid="grid">
        <div>Content</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveAttribute('role', 'grid');
    expect(grid).toHaveAttribute('aria-label', 'Content grid');
  });
});
