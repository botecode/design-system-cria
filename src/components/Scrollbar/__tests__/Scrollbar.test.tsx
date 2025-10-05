import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Scrollbar } from '../Scrollbar';

// Mock scroll properties for testing
Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
  writable: true,
  value: 0,
});

Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
  writable: true,
  value: 1000,
});

Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  writable: true,
  value: 500,
});

describe('Scrollbar', () => {
  const mockContent = (
    <div>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} style={{ height: '50px', padding: '10px' }}>
          Content item {i + 1}
        </div>
      ))}
    </div>
  );

  it('renders with default props', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toBeInTheDocument();
    expect(scrollbar).toHaveClass('cria-scrollbar');
  });

  it('renders with custom className', () => {
    render(
      <Scrollbar className="custom-scrollbar" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar');
    expect(scrollbar).toHaveClass('custom-scrollbar');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red', height: '300px' };
    render(
      <Scrollbar style={customStyle} data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(scrollbar).toHaveStyle('height: 300px');
  });

  it('supports data attributes', () => {
    render(
      <Scrollbar data-testid="scrollbar" data-theme="dark" data-smooth="true">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveAttribute('data-theme', 'dark');
    expect(scrollbar).toHaveAttribute('data-smooth', 'true');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Scrollbar size="sm" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    let scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--size-sm');

    rerender(
      <Scrollbar size="md" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--size-md');

    rerender(
      <Scrollbar size="lg" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--size-lg');
  });

  it('renders with different themes', () => {
    const { rerender } = render(
      <Scrollbar theme="light" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    let scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--theme-light');

    rerender(
      <Scrollbar theme="dark" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--theme-dark');

    rerender(
      <Scrollbar theme="auto" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--theme-auto');
  });

  it('renders with smooth scrolling enabled', () => {
    render(
      <Scrollbar smooth data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--smooth');
  });

  it('renders without smooth scrolling by default', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).not.toHaveClass('cria-scrollbar--smooth');
  });

  it('renders with custom height', () => {
    render(
      <Scrollbar height="400px" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('height: 400px');
  });

  it('renders with custom width', () => {
    render(
      <Scrollbar width="300px" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('width: 300px');
  });

  it('renders with auto height', () => {
    render(
      <Scrollbar autoHeight data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--auto-height');
  });

  it('renders without auto height by default', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).not.toHaveClass('cria-scrollbar--auto-height');
  });

  it('renders children correctly', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Scrollbar>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Scrollbar
        size="lg"
        theme="dark"
        smooth
        autoHeight
        height="500px"
        className="custom-class"
        data-testid="scrollbar"
      >
        {mockContent}
      </Scrollbar>
    );
    
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--size-lg');
    expect(scrollbar).toHaveClass('cria-scrollbar--theme-dark');
    expect(scrollbar).toHaveClass('cria-scrollbar--smooth');
    expect(scrollbar).toHaveClass('cria-scrollbar--auto-height');
    expect(scrollbar).toHaveClass('custom-class');
    expect(scrollbar).toHaveStyle('height: 500px');
  });

  it('handles empty children gracefully', () => {
    render(<Scrollbar data-testid="scrollbar" />);
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toBeInTheDocument();
    expect(scrollbar).toBeEmptyDOMElement();
  });

  it('applies accessibility attributes', () => {
    render(
      <Scrollbar role="scrollbar" aria-label="Content scrollbar" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveAttribute('role', 'scrollbar');
    expect(scrollbar).toHaveAttribute('aria-label', 'Content scrollbar');
  });

  it('renders with horizontal scrollbar when enabled', () => {
    render(
      <Scrollbar horizontal data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--horizontal');
  });

  it('renders without horizontal scrollbar by default', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).not.toHaveClass('cria-scrollbar--horizontal');
  });

  it('renders with both vertical and horizontal scrollbars', () => {
    render(
      <Scrollbar horizontal vertical data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--horizontal');
    expect(scrollbar).toHaveClass('cria-scrollbar--vertical');
  });

  it('renders with vertical scrollbar by default', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--vertical');
  });

  it('handles scroll events correctly', async () => {
    const mockOnScroll = jest.fn();
    render(
      <Scrollbar onScroll={mockOnScroll} data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    
    const scrollbar = screen.getByTestId('scrollbar');
    
    // Simulate scroll event
    fireEvent.scroll(scrollbar, { target: { scrollTop: 100 } });
    
    await waitFor(() => {
      expect(mockOnScroll).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({ scrollTop: 100 })
      }));
    });
  });

  it('renders with custom scrollbar track color', () => {
    render(
      <Scrollbar trackColor="#f0f0f0" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('--scrollbar-track-color: #f0f0f0');
  });

  it('renders with custom scrollbar thumb color', () => {
    render(
      <Scrollbar thumbColor="#666666" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('--scrollbar-thumb-color: #666666');
  });

  it('renders with custom scrollbar hover color', () => {
    render(
      <Scrollbar hoverColor="#333333" data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('--scrollbar-hover-color: #333333');
  });

  it('combines custom colors correctly', () => {
    render(
      <Scrollbar
        trackColor="#f5f5f5"
        thumbColor="#cccccc"
        hoverColor="#999999"
        data-testid="scrollbar"
      >
        {mockContent}
      </Scrollbar>
    );
    
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveStyle('--scrollbar-track-color: #f5f5f5');
    expect(scrollbar).toHaveStyle('--scrollbar-thumb-color: #cccccc');
    expect(scrollbar).toHaveStyle('--scrollbar-hover-color: #999999');
  });

  it('renders with fade effect', () => {
    render(
      <Scrollbar fade data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).toHaveClass('cria-scrollbar--fade');
  });

  it('renders without fade effect by default', () => {
    render(
      <Scrollbar data-testid="scrollbar">
        {mockContent}
      </Scrollbar>
    );
    const scrollbar = screen.getByTestId('scrollbar');
    expect(scrollbar).not.toHaveClass('cria-scrollbar--fade');
  });
});
