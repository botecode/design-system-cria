import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from '../Container';

describe('Container', () => {
  it('renders with default props', () => {
    render(
      <Container data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('cria-container');
  });

  it('renders with custom className', () => {
    render(
      <Container className="custom-container" data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container');
    expect(container).toHaveClass('custom-container');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red', padding: '20px' };
    render(
      <Container style={customStyle} data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(container).toHaveStyle('padding: 20px');
  });

  it('supports data attributes', () => {
    render(
      <Container data-testid="container" data-max-width="xl" data-responsive="true">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveAttribute('data-max-width', 'xl');
    expect(container).toHaveAttribute('data-responsive', 'true');
  });

  it('renders with different max widths', () => {
    const { rerender } = render(
      <Container maxWidth="sm" data-testid="container">
        <div>Content</div>
      </Container>
    );
    let container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--max-width-sm');

    rerender(
      <Container maxWidth="md" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--max-width-md');

    rerender(
      <Container maxWidth="lg" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--max-width-lg');

    rerender(
      <Container maxWidth="xl" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--max-width-xl');

    rerender(
      <Container maxWidth="2xl" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--max-width-2xl');

    rerender(
      <Container maxWidth="full" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--max-width-full');
  });

  it('renders with different padding sizes', () => {
    const { rerender } = render(
      <Container padding="none" data-testid="container">
        <div>Content</div>
      </Container>
    );
    let container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--padding-none');

    rerender(
      <Container padding="sm" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--padding-sm');

    rerender(
      <Container padding="md" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--padding-md');

    rerender(
      <Container padding="lg" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--padding-lg');

    rerender(
      <Container padding="xl" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--padding-xl');
  });

  it('renders with different margin sizes', () => {
    const { rerender } = render(
      <Container margin="none" data-testid="container">
        <div>Content</div>
      </Container>
    );
    let container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--margin-none');

    rerender(
      <Container margin="sm" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--margin-sm');

    rerender(
      <Container margin="md" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--margin-md');

    rerender(
      <Container margin="lg" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--margin-lg');

    rerender(
      <Container margin="xl" data-testid="container">
        <div>Content</div>
      </Container>
    );
    container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--margin-xl');
  });

  it('renders with center alignment', () => {
    render(
      <Container center data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--center');
  });

  it('renders without center alignment by default', () => {
    render(
      <Container data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).not.toHaveClass('cria-container--center');
  });

  it('renders with fluid width', () => {
    render(
      <Container fluid data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--fluid');
  });

  it('renders without fluid width by default', () => {
    render(
      <Container data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).not.toHaveClass('cria-container--fluid');
  });

  it('renders children correctly', () => {
    render(
      <Container data-testid="container">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Container>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Container
        maxWidth="lg"
        padding="xl"
        margin="md"
        center
        fluid
        className="custom-class"
        data-testid="container"
      >
        <div>Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container');
    expect(container).toHaveClass('cria-container--max-width-lg');
    expect(container).toHaveClass('cria-container--padding-xl');
    expect(container).toHaveClass('cria-container--margin-md');
    expect(container).toHaveClass('cria-container--center');
    expect(container).toHaveClass('cria-container--fluid');
    expect(container).toHaveClass('custom-class');
  });

  it('handles empty children gracefully', () => {
    render(<Container data-testid="container" />);
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });

  it('applies accessibility attributes', () => {
    render(
      <Container role="main" aria-label="Main content" data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveAttribute('role', 'main');
    expect(container).toHaveAttribute('aria-label', 'Main content');
  });

  it('renders with custom max width value', () => {
    render(
      <Container maxWidth="800px" data-testid="container">
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveStyle('max-width: 800px');
  });

  it('renders with responsive padding', () => {
    render(
      <Container 
        padding={{ sm: 'sm', md: 'md', lg: 'lg' }} 
        data-testid="container"
      >
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--padding-sm-sm');
    expect(container).toHaveClass('cria-container--padding-md-md');
    expect(container).toHaveClass('cria-container--padding-lg-lg');
  });

  it('renders with responsive margin', () => {
    render(
      <Container 
        margin={{ sm: 'none', md: 'md', lg: 'xl' }} 
        data-testid="container"
      >
        <div>Content</div>
      </Container>
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('cria-container--margin-sm-none');
    expect(container).toHaveClass('cria-container--margin-md-md');
    expect(container).toHaveClass('cria-container--margin-lg-xl');
  });
});
