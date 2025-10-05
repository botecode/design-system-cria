import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvatarWithName } from '../AvatarWithName';

// Mock data
const mockAvatarWithName = {
  name: 'Sarah Wilson',
  avatarProps: {
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    alt: 'Sarah Wilson',
  },
};

const mockAvatarWithNameInitials = {
  name: 'David Brown',
  avatarProps: {
    initials: 'DB',
    backgroundColor: '#7566A1',
    textColor: '#ffffff',
  },
};

describe('AvatarWithName', () => {
  it('renders the component with avatar and name', () => {
    render(<AvatarWithName {...mockAvatarWithName} />);

    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with initials when no image is provided', () => {
    render(<AvatarWithName {...mockAvatarWithNameInitials} />);

    expect(screen.getByText('David Brown')).toBeInTheDocument();
    expect(screen.getByText('DB')).toBeInTheDocument();
  });

  it('handles click events when clickable', () => {
    const mockOnClick = jest.fn();
    render(<AvatarWithName {...mockAvatarWithName} clickable onClick={mockOnClick} />);

    const component = screen.getByRole('button');
    fireEvent.click(component);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not render as clickable when clickable is false', () => {
    render(<AvatarWithName {...mockAvatarWithName} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();
  });

  it('applies correct size variants', () => {
    const { rerender } = render(<AvatarWithName {...mockAvatarWithName} size="sm" />);
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();

    rerender(<AvatarWithName {...mockAvatarWithName} size="md" />);
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();

    rerender(<AvatarWithName {...mockAvatarWithName} size="lg" />);
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    const { rerender } = render(<AvatarWithName {...mockAvatarWithName} variant="default" />);
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();

    rerender(<AvatarWithName {...mockAvatarWithName} variant="outlined" />);
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();

    rerender(<AvatarWithName {...mockAvatarWithName} variant="filled" />);
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    render(
      <AvatarWithName
        {...mockAvatarWithName}
        className="custom-class"
        style={customStyle}
      />
    );

    // Find the main container by looking for the class
    const component = document.querySelector('.avatar-with-name.custom-class');
    expect(component).toHaveClass('custom-class');
    expect(component).toHaveClass('avatar-with-name');
  });

  it('has proper accessibility attributes when clickable', () => {
    const mockOnClick = jest.fn();
    render(<AvatarWithName {...mockAvatarWithName} clickable onClick={mockOnClick} />);

    const component = screen.getByRole('button');
    expect(component).toHaveAttribute('aria-label', 'Click to interact with Sarah Wilson');
    expect(component).toHaveAttribute('tabIndex', '0');
  });

  it('supports keyboard navigation when clickable', () => {
    const mockOnClick = jest.fn();
    render(<AvatarWithName {...mockAvatarWithName} clickable onClick={mockOnClick} />);

    const component = screen.getByRole('button');
    component.focus();
    expect(component).toHaveFocus();

    fireEvent.keyDown(component, { key: 'Enter' });
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(component, { key: ' ' });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  it('handles long names with text overflow', () => {
    const longName = 'Very Long Name That Should Be Truncated Because It Exceeds The Maximum Width';
    render(<AvatarWithName name={longName} avatarProps={{ initials: 'VL' }} />);

    const nameElement = screen.getByText(longName);
    expect(nameElement).toHaveStyle({
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '200px',
    });
  });

  it('passes avatar props correctly', () => {
    render(
      <AvatarWithName
        name="Test User"
        avatarProps={{
          src: 'test-image.jpg',
          alt: 'Test User Avatar',
          size: 'lg',
          status: 'online',
        }}
      />
    );

    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test User Avatar');
  });

  it('renders with data attributes', () => {
    render(
      <AvatarWithName
        {...mockAvatarWithName}
        data-testid="avatar-with-name"
        data-user-id="123"
      />
    );

    const component = screen.getByTestId('avatar-with-name');
    expect(component).toHaveAttribute('data-user-id', '123');
  });

  it('handles missing name gracefully', () => {
    render(<AvatarWithName name="" avatarProps={{ initials: 'U' }} />);

    // Should still render the avatar even with empty name
    expect(screen.getByText('U')).toBeInTheDocument();
  });

  it('applies hover styles when clickable', () => {
    const mockOnClick = jest.fn();
    render(<AvatarWithName {...mockAvatarWithName} clickable onClick={mockOnClick} />);

    const component = screen.getByRole('button');
    expect(component).toHaveClass('avatar-with-name--clickable');
  });

  it('renders with different avatar sizes based on component size', () => {
    const { rerender } = render(<AvatarWithName {...mockAvatarWithName} size="sm" />);
    let avatarContainer = screen.getByRole('img').closest('.cria-avatar');
    expect(avatarContainer).toHaveClass('cria-avatar--sm');

    rerender(<AvatarWithName {...mockAvatarWithName} size="md" />);
    avatarContainer = screen.getByRole('img').closest('.cria-avatar');
    expect(avatarContainer).toHaveClass('cria-avatar--md');

    rerender(<AvatarWithName {...mockAvatarWithName} size="lg" />);
    avatarContainer = screen.getByRole('img').closest('.cria-avatar');
    expect(avatarContainer).toHaveClass('cria-avatar--lg');
  });
});
