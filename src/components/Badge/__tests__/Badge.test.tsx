import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../Badge';

describe('Badge Component', () => {
  // Helper function to get the badge element
  const getBadgeElement = (text: string) => {
    return screen.getByText(text).closest('.cria-badge');
  };

  // Basic Rendering Tests
  it('should render with default props', () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText('Test Badge').closest('.cria-badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('cria-badge');
    expect(badge).toHaveClass('cria-badge--default');
    expect(badge).toHaveClass('cria-badge--md');
    expect(badge).toHaveClass('cria-badge--solid');
  });

  it('should render with custom variant', () => {
    render(<Badge variant="primary">Primary Badge</Badge>);
    const badge = getBadgeElement('Primary Badge');
    expect(badge).toHaveClass('cria-badge--primary');
  });

  it('should render with custom size', () => {
    render(<Badge size="lg">Large Badge</Badge>);
    const badge = getBadgeElement('Large Badge');
    expect(badge).toHaveClass('cria-badge--lg');
  });

  it('should render with custom style', () => {
    render(<Badge badgeStyle="outline">Outline Badge</Badge>);
    const badge = getBadgeElement('Outline Badge');
    expect(badge).toHaveClass('cria-badge--outline');
  });

  // Variant Tests
  it('should render all variants correctly', () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'];
    
    variants.forEach(variant => {
      const { unmount } = render(<Badge variant={variant as any}>{variant} Badge</Badge>);
      const badge = getBadgeElement(`${variant} Badge`);
      expect(badge).toHaveClass(`cria-badge--${variant}`);
      unmount();
    });
  });

  // Size Tests
  it('should render all sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { unmount } = render(<Badge size={size as any}>{size} Badge</Badge>);
      const badge = getBadgeElement(`${size} Badge`);
      expect(badge).toHaveClass(`cria-badge--${size}`);
      unmount();
    });
  });

  // Style Tests
  it('should render all styles correctly', () => {
    const styles = ['solid', 'outline', 'soft'];
    
    styles.forEach(style => {
      const { unmount } = render(<Badge badgeStyle={style as any}>{style} Badge</Badge>);
      const badge = getBadgeElement(`${style} Badge`);
      expect(badge).toHaveClass(`cria-badge--${style}`);
      unmount();
    });
  });

  // Dot Badge Tests
  it('should render dot badge correctly', () => {
    const { container } = render(<Badge dot>Content</Badge>);
    const badge = container.querySelector('.cria-badge');
    expect(badge).toHaveClass('cria-badge--dot');
    expect(badge).not.toHaveTextContent('Content');
  });

  it('should render dot badge with different sizes', () => {
    const { container, rerender } = render(<Badge dot size="sm">Dot</Badge>);
    let badge = container.querySelector('.cria-badge');
    expect(badge).toHaveClass('cria-badge--dot');
    expect(badge).toHaveClass('cria-badge--sm');

    rerender(<Badge dot size="lg">Dot</Badge>);
    badge = container.querySelector('.cria-badge');
    expect(badge).toHaveClass('cria-badge--lg');
  });

  // Count Badge Tests
  it('should render count badge correctly', () => {
    render(<Badge>42</Badge>);
    const badge = screen.getByText('42');
    expect(badge).toBeInTheDocument();
  });

  it('should truncate count when maxCount is exceeded', () => {
    render(<Badge maxCount={99}>{150}</Badge>);
    const badge = screen.getByText('99+');
    expect(badge).toBeInTheDocument();
  });

  it('should not truncate count when maxCount is not exceeded', () => {
    render(<Badge maxCount={99}>50</Badge>);
    const badge = screen.getByText('50');
    expect(badge).toBeInTheDocument();
  });

  // Interactive Badge Tests
  it('should render interactive badge correctly', () => {
    render(<Badge interactive>Interactive Badge</Badge>);
    const badge = getBadgeElement('Interactive Badge');
    expect(badge).toHaveClass('cria-badge--interactive');
    expect(badge).toHaveAttribute('role', 'button');
    expect(badge).toHaveAttribute('tabIndex', '0');
  });

  it('should handle click events when interactive', () => {
    const handleClick = jest.fn();
    render(<Badge interactive onClick={handleClick}>Clickable Badge</Badge>);
    
    const badge = getBadgeElement('Clickable Badge');
    fireEvent.click(badge!);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not handle click events when not interactive', () => {
    const handleClick = jest.fn();
    render(<Badge onClick={handleClick}>Non-interactive Badge</Badge>);
    
    const badge = getBadgeElement('Non-interactive Badge');
    fireEvent.click(badge!);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should handle keyboard events when interactive', () => {
    const handleClick = jest.fn();
    render(<Badge interactive onClick={handleClick}>Keyboard Badge</Badge>);
    
    const badge = getBadgeElement('Keyboard Badge');
    fireEvent.keyDown(badge!, { key: 'Enter' });
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle space key when interactive', () => {
    const handleClick = jest.fn();
    render(<Badge interactive onClick={handleClick}>Space Badge</Badge>);
    
    const badge = getBadgeElement('Space Badge');
    fireEvent.keyDown(badge!, { key: ' ' });
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Disabled Badge Tests
  it('should render disabled badge correctly', () => {
    render(<Badge disabled>Disabled Badge</Badge>);
    const badge = getBadgeElement('Disabled Badge');
    expect(badge).toHaveClass('cria-badge--disabled');
    expect(badge).toHaveAttribute('aria-disabled', 'true');
  });

  it('should not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(<Badge interactive disabled onClick={handleClick}>Disabled Interactive Badge</Badge>);
    
    const badge = getBadgeElement('Disabled Interactive Badge');
    fireEvent.click(badge!);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should not have tabIndex when disabled and interactive', () => {
    render(<Badge interactive disabled>Disabled Interactive Badge</Badge>);
    const badge = getBadgeElement('Disabled Interactive Badge');
    expect(badge).not.toHaveAttribute('tabIndex');
  });

  // Icon Tests
  it('should render with left icon', () => {
    render(
      <Badge leftIcon={<span data-testid="left-icon">✓</span>}>
        With Left Icon
      </Badge>
    );
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByText('With Left Icon')).toBeInTheDocument();
  });

  it('should render with right icon', () => {
    render(
      <Badge rightIcon={<span data-testid="right-icon">×</span>}>
        With Right Icon
      </Badge>
    );
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('With Right Icon')).toBeInTheDocument();
  });

  it('should render with both icons', () => {
    render(
      <Badge 
        leftIcon={<span data-testid="left-icon">✓</span>}
        rightIcon={<span data-testid="right-icon">×</span>}
      >
        With Both Icons
      </Badge>
    );
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('With Both Icons')).toBeInTheDocument();
  });

  it('should not render icons when dot is true', () => {
    render(
      <Badge 
        dot
        leftIcon={<span data-testid="left-icon">✓</span>}
        rightIcon={<span data-testid="right-icon">×</span>}
      >
        Dot Badge
      </Badge>
    );
    
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  // Custom Props Tests
  it('should accept custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = getBadgeElement('Custom Badge');
    expect(badge).toHaveClass('custom-class');
  });

  it('should accept custom style', () => {
    render(<Badge style={{ backgroundColor: 'red' }}>Styled Badge</Badge>);
    const badge = getBadgeElement('Styled Badge');
    expect(badge).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('should accept custom data attributes', () => {
    render(<Badge data-testid="custom-badge">Custom Badge</Badge>);
    const badge = screen.getByTestId('custom-badge');
    expect(badge).toBeInTheDocument();
  });

  // Accessibility Tests
  it('should have proper ARIA attributes when interactive', () => {
    render(<Badge interactive aria-label="Custom label">Interactive Badge</Badge>);
    const badge = getBadgeElement('Interactive Badge');
    expect(badge).toHaveAttribute('role', 'button');
    expect(badge).toHaveAttribute('aria-label', 'Custom label');
  });

  it('should not have role when not interactive', () => {
    render(<Badge>Regular Badge</Badge>);
    const badge = getBadgeElement('Regular Badge');
    expect(badge).not.toHaveAttribute('role');
  });
});
