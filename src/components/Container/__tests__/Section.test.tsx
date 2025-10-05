import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from '../Section';

describe('Section', () => {
  it('renders with default props', () => {
    render(
      <Section data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('cria-section');
  });

  it('renders with custom className', () => {
    render(
      <Section className="custom-section" data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section');
    expect(section).toHaveClass('custom-section');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'blue', margin: '10px' };
    render(
      <Section style={customStyle} data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveStyle('background-color: rgb(0, 0, 255)');
    expect(section).toHaveStyle('margin: 10px');
  });

  it('supports data attributes', () => {
    render(
      <Section data-testid="section" data-variant="hero" data-full-height="true">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveAttribute('data-variant', 'hero');
    expect(section).toHaveAttribute('data-full-height', 'true');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Section variant="default" data-testid="section">
        <div>Content</div>
      </Section>
    );
    let section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--default');

    rerender(
      <Section variant="hero" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--hero');

    rerender(
      <Section variant="content" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--content');

    rerender(
      <Section variant="footer" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--footer');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Section size="sm" data-testid="section">
        <div>Content</div>
      </Section>
    );
    let section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--size-sm');

    rerender(
      <Section size="md" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--size-md');

    rerender(
      <Section size="lg" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--size-lg');

    rerender(
      <Section size="xl" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--size-xl');
  });

  it('renders with different padding sizes', () => {
    const { rerender } = render(
      <Section padding="none" data-testid="section">
        <div>Content</div>
      </Section>
    );
    let section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--padding-none');

    rerender(
      <Section padding="sm" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--padding-sm');

    rerender(
      <Section padding="md" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--padding-md');

    rerender(
      <Section padding="lg" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--padding-lg');

    rerender(
      <Section padding="xl" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--padding-xl');
  });

  it('renders with different margin sizes', () => {
    const { rerender } = render(
      <Section margin="none" data-testid="section">
        <div>Content</div>
      </Section>
    );
    let section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--margin-none');

    rerender(
      <Section margin="sm" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--margin-sm');

    rerender(
      <Section margin="md" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--margin-md');

    rerender(
      <Section margin="lg" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--margin-lg');

    rerender(
      <Section margin="xl" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--margin-xl');
  });

  it('renders with full height', () => {
    render(
      <Section fullHeight data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--full-height');
  });

  it('renders without full height by default', () => {
    render(
      <Section data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).not.toHaveClass('cria-section--full-height');
  });

  it('renders with background color', () => {
    render(
      <Section backgroundColor="primary" data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--bg-primary');
  });

  it('renders with different background colors', () => {
    const { rerender } = render(
      <Section backgroundColor="primary" data-testid="section">
        <div>Content</div>
      </Section>
    );
    let section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--bg-primary');

    rerender(
      <Section backgroundColor="secondary" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--bg-secondary');

    rerender(
      <Section backgroundColor="gray" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--bg-gray');

    rerender(
      <Section backgroundColor="white" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--bg-white');

    rerender(
      <Section backgroundColor="transparent" data-testid="section">
        <div>Content</div>
      </Section>
    );
    section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--bg-transparent');
  });

  it('renders children correctly', () => {
    render(
      <Section data-testid="section">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Section>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Section
        variant="hero"
        size="xl"
        padding="lg"
        margin="md"
        fullHeight
        backgroundColor="primary"
        className="custom-class"
        data-testid="section"
      >
        <div>Content</div>
      </Section>
    );
    
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section');
    expect(section).toHaveClass('cria-section--hero');
    expect(section).toHaveClass('cria-section--size-xl');
    expect(section).toHaveClass('cria-section--padding-lg');
    expect(section).toHaveClass('cria-section--margin-md');
    expect(section).toHaveClass('cria-section--full-height');
    expect(section).toHaveClass('cria-section--bg-primary');
    expect(section).toHaveClass('custom-class');
  });

  it('handles empty children gracefully', () => {
    render(<Section data-testid="section" />);
    const section = screen.getByTestId('section');
    expect(section).toBeInTheDocument();
    expect(section).toBeEmptyDOMElement();
  });

  it('applies accessibility attributes', () => {
    render(
      <Section role="banner" aria-label="Hero section" data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveAttribute('role', 'banner');
    expect(section).toHaveAttribute('aria-label', 'Hero section');
  });

  it('renders with custom background color value', () => {
    render(
      <Section backgroundColor="#f0f0f0" data-testid="section">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveStyle('background-color: #f0f0f0');
  });

  it('renders with responsive padding', () => {
    render(
      <Section 
        padding={{ sm: 'sm', md: 'md', lg: 'lg' }} 
        data-testid="section"
      >
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--padding-sm-sm');
    expect(section).toHaveClass('cria-section--padding-md-md');
    expect(section).toHaveClass('cria-section--padding-lg-lg');
  });

  it('renders with responsive margin', () => {
    render(
      <Section 
        margin={{ sm: 'none', md: 'md', lg: 'xl' }} 
        data-testid="section"
      >
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('cria-section--margin-sm-none');
    expect(section).toHaveClass('cria-section--margin-md-md');
    expect(section).toHaveClass('cria-section--margin-lg-xl');
  });
});
