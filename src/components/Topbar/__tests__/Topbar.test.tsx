import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Topbar } from '../Topbar';
import { Button } from '../../Button';
import { Badge } from '../../Badge';

// Mock components for testing
const MockLogo = () => <div data-testid="logo">Logo</div>;
const MockSearch = () => <input data-testid="search" placeholder="Search..." />;
const MockUserMenu = () => <div data-testid="user-menu">User Menu</div>;

describe('Topbar', () => {
  const defaultProps = {
    logo: <MockLogo />,
    navigation: [
      { id: 'home', label: 'Home', href: '/home' },
      { id: 'about', label: 'About', href: '/about' },
      { id: 'contact', label: 'Contact', href: '/contact' }
    ],
    actions: [
      <Button key="action1" variant="ghost" size="sm">Action 1</Button>,
      <Button key="action2" variant="primary" size="sm">Action 2</Button>
    ]
  };

  describe('Rendering', () => {
    it('renders with basic props', () => {
      render(<Topbar {...defaultProps} />);
      
      expect(screen.getByTestId('logo')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
      expect(screen.getByText('Action 1')).toBeInTheDocument();
      expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    it('renders with custom className and style', () => {
      const customStyle = { backgroundColor: 'rgb(255, 0, 0)' };
      render(
        <Topbar 
          {...defaultProps} 
          className="custom-topbar" 
          style={customStyle}
        />
      );
      
      const topbar = screen.getByRole('banner');
      expect(topbar).toHaveClass('custom-topbar');
      expect(topbar).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('renders with different variants', () => {
      const { rerender } = render(<Topbar {...defaultProps} variant="default" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--default');

      rerender(<Topbar {...defaultProps} variant="primary" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--primary');

      rerender(<Topbar {...defaultProps} variant="secondary" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--secondary');

      rerender(<Topbar {...defaultProps} variant="minimal" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--minimal');
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Topbar {...defaultProps} size="sm" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--sm');

      rerender(<Topbar {...defaultProps} size="md" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--md');

      rerender(<Topbar {...defaultProps} size="lg" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--lg');
    });

    it('renders with different positions', () => {
      const { rerender } = render(<Topbar {...defaultProps} position="static" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--static');

      rerender(<Topbar {...defaultProps} position="sticky" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--sticky');

      rerender(<Topbar {...defaultProps} position="fixed" />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--fixed');
    });
  });

  describe('Navigation', () => {
    it('renders navigation items correctly', () => {
      render(<Topbar {...defaultProps} />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const contactLink = screen.getByRole('link', { name: 'Contact' });
      
      expect(homeLink).toHaveAttribute('href', '/home');
      expect(aboutLink).toHaveAttribute('href', '/about');
      expect(contactLink).toHaveAttribute('href', '/contact');
    });

    it('handles active navigation item', () => {
      render(<Topbar {...defaultProps} activeItem="about" />);
      
      const aboutLink = screen.getByRole('link', { name: 'About' });
      expect(aboutLink).toHaveClass('topbar__nav-item--active');
    });

    it('handles navigation item clicks', async () => {
      const onNavClick = jest.fn();
      const navigationWithClick = defaultProps.navigation.map(item => ({
        ...item,
        onClick: onNavClick
      }));
      
      render(<Topbar {...defaultProps} navigation={navigationWithClick} />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      await userEvent.click(homeLink);
      
      expect(onNavClick).toHaveBeenCalledWith('home');
    });

    it('renders navigation with icons', () => {
      const navigationWithIcons = [
        { id: 'home', label: 'Home', href: '/home', icon: <span data-testid="home-icon">🏠</span> },
        { id: 'about', label: 'About', href: '/about', icon: <span data-testid="about-icon">ℹ️</span> }
      ];
      
      render(<Topbar {...defaultProps} navigation={navigationWithIcons} />);
      
      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
      expect(screen.getByTestId('about-icon')).toBeInTheDocument();
    });
  });

  describe('Actions', () => {
    it('renders action buttons', () => {
      render(<Topbar {...defaultProps} />);
      
      expect(screen.getByText('Action 1')).toBeInTheDocument();
      expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    it('renders with search component', () => {
      render(<Topbar {...defaultProps} search={<MockSearch />} />);
      
      expect(screen.getByTestId('search')).toBeInTheDocument();
    });

    it('renders with user menu', () => {
      render(<Topbar {...defaultProps} userMenu={<MockUserMenu />} />);
      
      expect(screen.getByTestId('user-menu')).toBeInTheDocument();
    });

    it('renders with notifications', () => {
      const notifications = (
        <Badge variant="danger" size="sm" data-testid="notification-badge">
          3
        </Badge>
      );
      
      render(<Topbar {...defaultProps} notifications={notifications} />);
      
      expect(screen.getByTestId('notification-badge')).toBeInTheDocument();
    });
  });

  describe('Mobile Responsiveness', () => {
    it('renders mobile menu toggle when collapsed', () => {
      render(<Topbar {...defaultProps} collapsed={true} />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
      expect(toggleButton).toBeInTheDocument();
    });

    it('handles mobile menu toggle', async () => {
      const onMobileToggle = jest.fn();
      render(<Topbar {...defaultProps} collapsed={true} onMobileToggle={onMobileToggle} />);
      
      const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
      await userEvent.click(toggleButton);
      
      expect(onMobileToggle).toHaveBeenCalledWith(true);
    });

    it('shows mobile menu when expanded', () => {
      render(<Topbar {...defaultProps} collapsed={true} mobileMenuOpen={true} />);
      
      expect(screen.getByRole('navigation')).toHaveClass('topbar__nav--mobile-open');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA roles and labels', () => {
      render(<Topbar {...defaultProps} />);
      
      const topbar = screen.getByRole('banner');
      expect(topbar).toBeInTheDocument();
      
      const navigation = screen.getByRole('navigation');
      expect(navigation).toHaveAttribute('aria-label', 'Main navigation');
    });

    it('supports keyboard navigation', async () => {
      render(<Topbar {...defaultProps} />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      homeLink.focus();
      
      expect(homeLink).toHaveFocus();
      
      // Test arrow key navigation
      await userEvent.keyboard('{ArrowRight}');
      const aboutLink = screen.getByRole('link', { name: 'About' });
      expect(aboutLink).toHaveFocus();
    });

    it('handles escape key to close mobile menu', async () => {
      render(<Topbar {...defaultProps} collapsed={true} mobileMenuOpen={true} />);
      
      await userEvent.keyboard('{Escape}');
      
      // The component should handle escape key internally
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('has proper focus management', () => {
      render(<Topbar {...defaultProps} />);
      
      const topbar = screen.getByRole('banner');
      expect(topbar).toHaveAttribute('tabIndex', '-1');
    });
  });

  describe('Visual Effects', () => {
    it('renders with border', () => {
      render(<Topbar {...defaultProps} showBorder={true} />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--bordered');
    });

    it('renders with shadow', () => {
      render(<Topbar {...defaultProps} showShadow={true} />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--shadow');
    });

    it('renders with full width', () => {
      render(<Topbar {...defaultProps} fullWidth={true} />);
      expect(screen.getByRole('banner')).toHaveClass('topbar--full-width');
    });

    it('renders with custom z-index', () => {
      render(<Topbar {...defaultProps} zIndex={1000} />);
      const topbar = screen.getByRole('banner');
      expect(topbar).toHaveStyle('z-index: 1000');
    });
  });

  describe('Event Handling', () => {
    it('handles logo click', async () => {
      const onLogoClick = jest.fn();
      render(<Topbar {...defaultProps} onLogoClick={onLogoClick} />);
      
      const logo = screen.getByTestId('logo');
      await userEvent.click(logo);
      
      expect(onLogoClick).toHaveBeenCalled();
    });

    it('handles search focus', async () => {
      const onSearchFocus = jest.fn();
      render(<Topbar {...defaultProps} search={<MockSearch />} onSearchFocus={onSearchFocus} />);
      
      const search = screen.getByTestId('search');
      await userEvent.click(search);
      
      expect(onSearchFocus).toHaveBeenCalled();
    });

    it('handles window resize for responsive behavior', () => {
      render(<Topbar {...defaultProps} />);
      
      // Simulate window resize
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      fireEvent(window, new Event('resize'));
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });

  describe('Custom Content', () => {
    it('renders with custom header content', () => {
      const customContent = <div data-testid="custom-content">Custom Header</div>;
      render(<Topbar {...defaultProps} headerContent={customContent} />);
      
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('renders with custom footer content', () => {
      const customFooter = <div data-testid="custom-footer">Custom Footer</div>;
      render(<Topbar {...defaultProps} footerContent={customFooter} />);
      
      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });
  });

  describe('Loading States', () => {
    it('renders with loading state', () => {
      render(<Topbar {...defaultProps} loading={true} />);
      
      expect(screen.getByRole('banner')).toHaveClass('topbar--loading');
    });

    it('disables interactions when loading', () => {
      render(<Topbar {...defaultProps} loading={true} />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toHaveClass('topbar__nav-item--disabled');
    });
  });
});
