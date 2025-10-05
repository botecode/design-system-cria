import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../Footer';

describe('Footer', () => {
  const mockLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' }
  ];

  const mockSocialLinks = [
    { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
    { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' }
  ];

  it('renders with default props', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('cria-footer');
  });

  it('renders with custom className', () => {
    render(
      <Footer className="custom-footer" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer');
    expect(footer).toHaveClass('custom-footer');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red', padding: '20px' };
    render(
      <Footer style={customStyle} data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(footer).toHaveStyle('padding: 20px');
  });

  it('supports data attributes', () => {
    render(
      <Footer data-testid="footer" data-variant="dark" data-sticky="true">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveAttribute('data-variant', 'dark');
    expect(footer).toHaveAttribute('data-sticky', 'true');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Footer variant="default" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    let footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--default');

    rerender(
      <Footer variant="dark" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--dark');

    rerender(
      <Footer variant="light" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--light');

    rerender(
      <Footer variant="minimal" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--minimal');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Footer size="sm" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    let footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--size-sm');

    rerender(
      <Footer size="md" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--size-md');

    rerender(
      <Footer size="lg" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--size-lg');
  });

  it('renders with sticky positioning', () => {
    render(
      <Footer sticky data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--sticky');
  });

  it('renders without sticky positioning by default', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).not.toHaveClass('cria-footer--sticky');
  });

  it('renders with fixed positioning', () => {
    render(
      <Footer fixed data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--fixed');
  });

  it('renders without fixed positioning by default', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).not.toHaveClass('cria-footer--fixed');
  });

  it('renders with border', () => {
    render(
      <Footer border data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--border');
  });

  it('renders without border by default', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).not.toHaveClass('cria-footer--border');
  });

  it('renders with shadow', () => {
    render(
      <Footer shadow data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--shadow');
  });

  it('renders without shadow by default', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).not.toHaveClass('cria-footer--shadow');
  });

  it('renders with full width', () => {
    render(
      <Footer fullWidth data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--full-width');
  });

  it('renders without full width by default', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).not.toHaveClass('cria-footer--full-width');
  });

  it('renders children correctly', () => {
    render(
      <Footer data-testid="footer">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </Footer>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('renders with copyright text', () => {
    render(
      <Footer copyright="© 2024 Company Name" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    expect(screen.getByText('© 2024 Company Name')).toBeInTheDocument();
  });

  it('renders with links', () => {
    render(
      <Footer links={mockLinks} data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
    
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms');
  });

  it('renders with social links', () => {
    render(
      <Footer socialLinks={mockSocialLinks} data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', 'https://twitter.com');
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', 'https://facebook.com');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com');
  });

  it('handles link clicks', () => {
    const mockOnLinkClick = jest.fn();
    render(
      <Footer 
        links={mockLinks} 
        onLinkClick={mockOnLinkClick}
        data-testid="footer"
      >
        <div>Footer content</div>
      </Footer>
    );
    
    const aboutLink = screen.getByRole('link', { name: 'About' });
    fireEvent.click(aboutLink);
    
    expect(mockOnLinkClick).toHaveBeenCalledWith('/about', 'About');
  });

  it('handles social link clicks', () => {
    const mockOnSocialClick = jest.fn();
    render(
      <Footer 
        socialLinks={mockSocialLinks} 
        onSocialClick={mockOnSocialClick}
        data-testid="footer"
      >
        <div>Footer content</div>
      </Footer>
    );
    
    const twitterLink = screen.getByRole('link', { name: 'Twitter' });
    fireEvent.click(twitterLink);
    
    expect(mockOnSocialClick).toHaveBeenCalledWith('https://twitter.com', 'Twitter', 'twitter');
  });

  it('combines multiple props correctly', () => {
    render(
      <Footer
        variant="dark"
        size="lg"
        sticky
        border
        shadow
        fullWidth
        copyright="© 2024 Company Name"
        links={mockLinks}
        socialLinks={mockSocialLinks}
        className="custom-class"
        data-testid="footer"
      >
        <div>Footer content</div>
      </Footer>
    );
    
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer');
    expect(footer).toHaveClass('cria-footer--dark');
    expect(footer).toHaveClass('cria-footer--size-lg');
    expect(footer).toHaveClass('cria-footer--sticky');
    expect(footer).toHaveClass('cria-footer--border');
    expect(footer).toHaveClass('cria-footer--shadow');
    expect(footer).toHaveClass('cria-footer--full-width');
    expect(footer).toHaveClass('custom-class');
    
    expect(screen.getByText('© 2024 Company Name')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    render(<Footer data-testid="footer" />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('applies accessibility attributes', () => {
    render(
      <Footer role="contentinfo" aria-label="Site footer" data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveAttribute('role', 'contentinfo');
    expect(footer).toHaveAttribute('aria-label', 'Site footer');
  });

  it('renders with custom copyright component', () => {
    const customCopyright = <div data-testid="custom-copyright">Custom Copyright</div>;
    render(
      <Footer copyright={customCopyright} data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    expect(screen.getByTestId('custom-copyright')).toBeInTheDocument();
  });

  it('renders with custom links component', () => {
    const customLinks = <div data-testid="custom-links">Custom Links</div>;
    render(
      <Footer links={customLinks} data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    expect(screen.getByTestId('custom-links')).toBeInTheDocument();
  });

  it('renders with custom social links component', () => {
    const customSocialLinks = <div data-testid="custom-social">Custom Social</div>;
    render(
      <Footer socialLinks={customSocialLinks} data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    expect(screen.getByTestId('custom-social')).toBeInTheDocument();
  });

  it('renders with all sections when provided', () => {
    const customCopyright = <div data-testid="custom-copyright">Custom Copyright</div>;
    const customLinks = <div data-testid="custom-links">Custom Links</div>;
    const customSocialLinks = <div data-testid="custom-social">Custom Social</div>;
    
    render(
      <Footer 
        copyright={customCopyright}
        links={customLinks}
        socialLinks={customSocialLinks}
        data-testid="footer"
      >
        <div data-testid="main-content">Main content</div>
      </Footer>
    );
    
    expect(screen.getByTestId('custom-copyright')).toBeInTheDocument();
    expect(screen.getByTestId('custom-links')).toBeInTheDocument();
    expect(screen.getByTestId('custom-social')).toBeInTheDocument();
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });

  it('renders with responsive classes', () => {
    render(
      <Footer responsive data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('cria-footer--responsive');
  });

  it('renders without responsive classes by default', () => {
    render(
      <Footer data-testid="footer">
        <div>Footer content</div>
      </Footer>
    );
    const footer = screen.getByTestId('footer');
    expect(footer).not.toHaveClass('cria-footer--responsive');
  });
});
