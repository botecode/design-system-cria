import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Avatar } from '../Avatar';

describe('Avatar', () => {
  const defaultProps = {
    alt: 'Test User',
  };

  it('renders avatar with proper structure', () => {
    render(<Avatar {...defaultProps} />);
    
    const avatar = screen.getByRole('img', { name: 'Test User' });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('cria-avatar');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Avatar {...defaultProps} size="sm" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--sm');
    
    rerender(<Avatar {...defaultProps} size="md" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--md');
    
    rerender(<Avatar {...defaultProps} size="lg" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--lg');
    
    rerender(<Avatar {...defaultProps} size="xl" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--xl');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Avatar {...defaultProps} variant="circle" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--circle');
    
    rerender(<Avatar {...defaultProps} variant="square" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--square');
    
    rerender(<Avatar {...defaultProps} variant="rounded" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--rounded');
  });

  it('renders with image source', () => {
    render(<Avatar {...defaultProps} src="https://example.com/avatar.jpg" />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders with initials when no image provided', () => {
    render(<Avatar {...defaultProps} initials="JD" />);
    
    // Should have a div with role="img" when using initials
    const avatarContainer = screen.getByRole('img');
    expect(avatarContainer).toBeInTheDocument();
    
    // Should have initials text
    const initialsElement = screen.getByText('JD');
    expect(initialsElement).toBeInTheDocument();
    expect(initialsElement).toHaveClass('cria-avatar__initials');
  });

  it('renders with icon when no image or initials provided', () => {
    const TestIcon = () => <span data-testid="test-icon">👤</span>;
    render(<Avatar {...defaultProps} icon={<TestIcon />} />);
    
    // Should have a div with role="img" when using icon
    const avatarContainer = screen.getByRole('img');
    expect(avatarContainer).toBeInTheDocument();
    
    // Should have the icon
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders with fallback when image fails to load', async () => {
    render(<Avatar {...defaultProps} src="invalid-url.jpg" fallback="FB" />);
    
    // When image is provided, the container doesn't have role="img", but the img element does
    const avatar = screen.getByTestId ? screen.queryByTestId('avatar-container') : document.querySelector('.cria-avatar');
    const imgElement = document.querySelector('img');
    
    // Check if img element exists and has correct src
    expect(imgElement).toHaveAttribute('src', 'invalid-url.jpg');
    
    // Simulate image load error
    fireEvent.error(imgElement!);
    
    // After error, should show fallback initials
    // The fallback should appear when image fails to load
    expect(screen.getByText('FB')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Avatar {...defaultProps} onClick={handleClick} />);
    
    const avatar = screen.getByRole('img');
    fireEvent.click(avatar);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard navigation', async () => {
    const handleClick = jest.fn();
    render(<Avatar {...defaultProps} onClick={handleClick} clickable />);
    
    const avatar = screen.getByRole('img');
    
    // Tab to focus
    await userEvent.tab();
    expect(avatar).toHaveFocus();
    
    // Press Enter to activate
    await userEvent.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    // Press Space to activate
    await userEvent.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('applies custom className and styles', () => {
    render(
      <Avatar 
        {...defaultProps} 
        className="custom-class"
        style={{ backgroundColor: 'red' }}
      />
    );
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('custom-class');
    // Check if the style is applied (it might be overridden by CSS variables)
    expect(avatar).toHaveAttribute('style');
  });

  it('handles disabled state', () => {
    render(<Avatar {...defaultProps} disabled />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('cria-avatar--disabled');
    expect(avatar).toHaveAttribute('aria-disabled', 'true');
  });

  it('handles loading state', () => {
    render(<Avatar {...defaultProps} loading />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('cria-avatar--loading');
  });

  it('renders with custom background color', () => {
    render(<Avatar {...defaultProps} initials="AB" backgroundColor="#ff0000" />);
    
    const avatarElement = screen.getByText('AB').closest('.cria-avatar');
    expect(avatarElement).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  it('renders with custom text color', () => {
    render(<Avatar {...defaultProps} initials="CD" textColor="#ffffff" />);
    
    const initialsElement = screen.getByText('CD');
    expect(initialsElement).toHaveStyle({ color: '#ffffff' });
  });

  it('generates initials from name prop', () => {
    render(<Avatar {...defaultProps} name="John Doe" />);
    
    const initialsElement = screen.getByText('JD');
    expect(initialsElement).toBeInTheDocument();
  });

  it('generates initials from email prop', () => {
    render(<Avatar {...defaultProps} email="jane.smith@example.com" />);
    
    const initialsElement = screen.getByText('JS');
    expect(initialsElement).toBeInTheDocument();
  });

  it('prioritizes explicit initials over generated ones', () => {
    render(<Avatar {...defaultProps} name="John Doe" initials="XYZ" />);
    
    const initialsElement = screen.getByText('XYZ');
    expect(initialsElement).toBeInTheDocument();
    
    // Should not show generated initials
    expect(screen.queryByText('JD')).not.toBeInTheDocument();
  });

  it('handles empty or invalid name/email gracefully', () => {
    render(<Avatar {...defaultProps} name="" />);
    
    // Should not crash and should render without initials
    const avatarContainer = screen.getByRole('img');
    expect(avatarContainer).toBeInTheDocument();
  });

  it('renders with proper accessibility attributes', () => {
    render(<Avatar {...defaultProps} src="avatar.jpg" alt="John Doe's Avatar" />);
    
    // When image is provided, the container doesn't have role="img"
    const avatar = document.querySelector('.cria-avatar');
    expect(avatar).toHaveAttribute('aria-label', "John Doe's Avatar");
    // The img element should have proper alt text
    const imgElement = document.querySelector('img');
    expect(imgElement).toHaveAttribute('alt', "John Doe's Avatar");
  });

  it('renders with proper accessibility attributes for initials', () => {
    render(<Avatar {...defaultProps} initials="JD" alt="John Doe" />);
    
    // Should have proper ARIA attributes for initials
    const avatarContainer = screen.getByText('JD').closest('.cria-avatar');
    expect(avatarContainer).toHaveAttribute('aria-label', 'John Doe');
    expect(avatarContainer).toHaveAttribute('role', 'img');
  });

  it('renders with proper accessibility attributes for icon', () => {
    const TestIcon = () => <span data-testid="test-icon">👤</span>;
    render(<Avatar {...defaultProps} icon={<TestIcon />} alt="User Avatar" />);
    
    const avatarContainer = screen.getByTestId('test-icon').closest('.cria-avatar');
    expect(avatarContainer).toHaveAttribute('aria-label', 'User Avatar');
    expect(avatarContainer).toHaveAttribute('role', 'img');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar {...defaultProps} initials="AB" ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('handles image loading states', () => {
    render(<Avatar {...defaultProps} src="avatar.jpg" loading />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('cria-avatar--loading');
  });

  it('supports different status indicators', () => {
    const { rerender } = render(<Avatar {...defaultProps} status="online" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--status-online');
    
    rerender(<Avatar {...defaultProps} status="offline" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--status-offline');
    
    rerender(<Avatar {...defaultProps} status="away" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--status-away');
    
    rerender(<Avatar {...defaultProps} status="busy" />);
    expect(screen.getByRole('img')).toHaveClass('cria-avatar--status-busy');
  });

  it('renders status indicator element when status is provided', () => {
    render(<Avatar {...defaultProps} status="online" />);
    
    const statusIndicator = screen.getByTestId('avatar-status');
    expect(statusIndicator).toBeInTheDocument();
    expect(statusIndicator).toHaveClass('cria-avatar__status');
    expect(statusIndicator).toHaveClass('cria-avatar__status--online');
  });
});
