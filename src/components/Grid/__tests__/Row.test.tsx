import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Row } from '../Row';

describe('Row', () => {
  it('renders with default props', () => {
    render(
      <Row data-testid="row">
        <div>Item 1</div>
        <div>Item 2</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toBeInTheDocument();
    expect(row).toHaveClass('cria-row');
  });

  it('renders with custom className', () => {
    render(
      <Row className="custom-row" data-testid="row">
        <div>Content</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row');
    expect(row).toHaveClass('custom-row');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'blue', margin: '10px' };
    render(
      <Row style={customStyle} data-testid="row">
        <div>Content</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveStyle('background-color: rgb(0, 0, 255)');
    expect(row).toHaveStyle('margin: 10px');
  });

  it('supports data attributes', () => {
    render(
      <Row data-testid="row" data-wrap="true" data-gap="md">
        <div>Content</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveAttribute('data-wrap', 'true');
    expect(row).toHaveAttribute('data-gap', 'md');
  });

  it('renders with different gap sizes', () => {
    const { rerender } = render(
      <Row gap="sm" data-testid="row">
        <div>Content</div>
      </Row>
    );
    let row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--gap-sm');

    rerender(
      <Row gap="md" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--gap-md');

    rerender(
      <Row gap="lg" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--gap-lg');
  });

  it('renders with different alignments', () => {
    const { rerender } = render(
      <Row align="start" data-testid="row">
        <div>Content</div>
      </Row>
    );
    let row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--align-start');

    rerender(
      <Row align="center" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--align-center');

    rerender(
      <Row align="end" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--align-end');

    rerender(
      <Row align="stretch" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--align-stretch');
  });

  it('renders with different justify configurations', () => {
    const { rerender } = render(
      <Row justify="start" data-testid="row">
        <div>Content</div>
      </Row>
    );
    let row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--justify-start');

    rerender(
      <Row justify="center" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--justify-center');

    rerender(
      <Row justify="end" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--justify-end');

    rerender(
      <Row justify="between" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--justify-between');

    rerender(
      <Row justify="around" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--justify-around');

    rerender(
      <Row justify="evenly" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--justify-evenly');
  });

  it('renders with wrap enabled', () => {
    render(
      <Row wrap data-testid="row">
        <div>Content</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--wrap');
  });

  it('renders with wrap disabled', () => {
    render(
      <Row wrap={false} data-testid="row">
        <div>Content</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--no-wrap');
  });

  it('renders with different directions', () => {
    const { rerender } = render(
      <Row direction="row" data-testid="row">
        <div>Content</div>
      </Row>
    );
    let row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--direction-row');

    rerender(
      <Row direction="row-reverse" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--direction-row-reverse');

    rerender(
      <Row direction="column" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--direction-column');

    rerender(
      <Row direction="column-reverse" data-testid="row">
        <div>Content</div>
      </Row>
    );
    row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row--direction-column-reverse');
  });

  it('renders children correctly', () => {
    render(
      <Row data-testid="row">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Row>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Row
        gap="lg"
        align="center"
        justify="between"
        wrap
        direction="row"
        className="custom-class"
        data-testid="row"
      >
        <div>Content</div>
      </Row>
    );
    
    const row = screen.getByTestId('row');
    expect(row).toHaveClass('cria-row');
    expect(row).toHaveClass('cria-row--gap-lg');
    expect(row).toHaveClass('cria-row--align-center');
    expect(row).toHaveClass('cria-row--justify-between');
    expect(row).toHaveClass('cria-row--wrap');
    expect(row).toHaveClass('cria-row--direction-row');
    expect(row).toHaveClass('custom-class');
  });

  it('handles empty children gracefully', () => {
    render(<Row data-testid="row" />);
    const row = screen.getByTestId('row');
    expect(row).toBeInTheDocument();
    expect(row).toBeEmptyDOMElement();
  });

  it('applies accessibility attributes', () => {
    render(
      <Row role="row" aria-label="Content row" data-testid="row">
        <div>Content</div>
      </Row>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveAttribute('role', 'row');
    expect(row).toHaveAttribute('aria-label', 'Content row');
  });
});
