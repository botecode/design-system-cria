import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { House, Folder } from 'phosphor-react';
import { Navigation, Sidebar, Topbar } from '../Navigation';

describe('Navigation - TDD Tests', () => {
  describe('Sidebar Component', () => {
    const mockItems = [
      { id: 'home', label: 'Home', href: '/home' },
      { id: 'about', label: 'About', href: '/about' },
      { id: 'contact', label: 'Contact', href: '/contact' }
    ];

    describe('Basic Rendering', () => {
      it('renders items with correct labels and links', () => {
        render(<Sidebar items={mockItems} />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).toHaveAttribute('href', '/home');
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(contactLink).toHaveAttribute('href', '/contact');
      });

      it('renders with custom className', () => {
        render(<Sidebar items={mockItems} className="custom-sidebar" />);

        const sidebar = screen.getByRole('navigation');
        expect(sidebar).toHaveClass('custom-sidebar');
      });

      it('applies custom styles', () => {
        render(<Sidebar items={mockItems} style={{ backgroundColor: 'red' }} />);

        const sidebar = screen.getByRole('navigation');
        expect(sidebar).toHaveStyle('background-color: rgb(255, 0, 0)');
      });
    });

    describe('Active Route Highlighting', () => {
      it('highlights active route', () => {
        render(<Sidebar items={mockItems} activeRoute="/about" />);

        const aboutLink = screen.getByRole('link', { name: 'About' });
        expect(aboutLink).toHaveClass('cria-sidebar__item--active');
      });

      it('does not highlight inactive routes', () => {
        render(<Sidebar items={mockItems} activeRoute="/about" />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).not.toHaveClass('cria-sidebar__item--active');
        expect(contactLink).not.toHaveClass('cria-sidebar__item--active');
      });
    });

    describe('Collapse/Expand Functionality', () => {
      it('renders in expanded state by default', () => {
        render(<Sidebar items={mockItems} />);

        const sidebar = screen.getByRole('navigation');
        expect(sidebar).toHaveClass('cria-sidebar--expanded');
        expect(sidebar).not.toHaveClass('cria-sidebar--collapsed');
      });

      it('renders in collapsed state when collapsed prop is true', () => {
        render(<Sidebar items={mockItems} collapsed />);

        const sidebar = screen.getByRole('navigation');
        expect(sidebar).toHaveClass('cria-sidebar--collapsed');
        expect(sidebar).not.toHaveClass('cria-sidebar--expanded');
      });

      it('toggles between expanded and collapsed states', async () => {
        const user = userEvent.setup();
        const onToggle = jest.fn();

        render(<Sidebar items={mockItems} onToggle={onToggle} />);

        const toggleButton = screen.getByLabelText('Toggle sidebar');
        await user.click(toggleButton);

        expect(onToggle).toHaveBeenCalledWith(true);
      });

      it('shows only icons when collapsed', () => {
        const itemsWithIcons = [
          { id: 'home', label: 'Home', href: '/home', icon: <House size={20} /> },
          { id: 'about', label: 'About', href: '/about', icon: <Folder size={20} /> }
        ];

        render(<Sidebar items={itemsWithIcons} collapsed />);

        // Icons should be visible (check for SVG elements in the links)
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(2);
        
        const homeIcon = links[0].querySelector('svg');
        const aboutIcon = links[1].querySelector('svg');
        expect(homeIcon).toBeInTheDocument();
        expect(aboutIcon).toBeInTheDocument();

        // Labels should be hidden or not visible
        expect(screen.queryByText('Home')).not.toBeInTheDocument();
        expect(screen.queryByText('About')).not.toBeInTheDocument();
      });
    });

    describe('Accessibility', () => {
      it('has correct navigation role', () => {
        render(<Sidebar items={mockItems} />);

        const sidebar = screen.getByRole('navigation');
        expect(sidebar).toBeInTheDocument();
      });

      it('has links with discernible text', () => {
        render(<Sidebar items={mockItems} />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).toHaveAccessibleName('Home');
        expect(aboutLink).toHaveAccessibleName('About');
        expect(contactLink).toHaveAccessibleName('Contact');
      });

      it('preserves keyboard focus order', async () => {
        const user = userEvent.setup();
        render(<Sidebar items={mockItems} showToggle={false} />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        await user.tab();
        expect(homeLink).toHaveFocus();

        await user.tab();
        expect(aboutLink).toHaveFocus();

        await user.tab();
        expect(contactLink).toHaveFocus();
      });

      it('supports keyboard navigation with arrow keys', async () => {
        const user = userEvent.setup();
        render(<Sidebar items={mockItems} />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        homeLink.focus();

        await user.keyboard('{ArrowDown}');
        expect(screen.getByRole('link', { name: 'About' })).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(screen.getByRole('link', { name: 'Contact' })).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(screen.getByRole('link', { name: 'About' })).toHaveFocus();
      });
    });

    describe('Responsive Behavior', () => {
      it('adapts to mobile viewport', () => {
        // Mock mobile viewport
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 768,
        });

        render(<Sidebar items={mockItems} />);

        const sidebar = screen.getByRole('navigation');
        expect(sidebar).toHaveClass('cria-sidebar--mobile');
      });
    });
  });

  describe('Topbar Component', () => {
    const mockItems = [
      { id: 'home', label: 'Home', href: '/home' },
      { id: 'about', label: 'About', href: '/about' },
      { id: 'contact', label: 'Contact', href: '/contact' }
    ];

    describe('Basic Rendering', () => {
      it('renders items with correct labels and links', () => {
        render(<Topbar items={mockItems} />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).toHaveAttribute('href', '/home');
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(contactLink).toHaveAttribute('href', '/contact');
      });

      it('renders with custom className', () => {
        render(<Topbar items={mockItems} className="custom-topbar" />);

        const topbar = screen.getByRole('navigation');
        expect(topbar).toHaveClass('custom-topbar');
      });

      it('applies custom styles', () => {
        render(<Topbar items={mockItems} style={{ backgroundColor: 'red' }} />);

        const topbar = screen.getByRole('navigation');
        expect(topbar).toHaveStyle('background-color: rgb(255, 0, 0)');
      });
    });

    describe('Active Route Highlighting', () => {
      it('highlights active route', () => {
        render(<Topbar items={mockItems} activeRoute="/about" />);

        const aboutLink = screen.getByRole('link', { name: 'About' });
        expect(aboutLink).toHaveClass('cria-topbar__item--active');
      });

      it('does not highlight inactive routes', () => {
        render(<Topbar items={mockItems} activeRoute="/about" />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).not.toHaveClass('cria-topbar__item--active');
        expect(contactLink).not.toHaveClass('cria-topbar__item--active');
      });
    });

    describe('Responsive Behavior', () => {
      it('shows hamburger menu on mobile', () => {
        // Mock mobile viewport
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 768,
        });

        render(<Topbar items={mockItems} />);

        const hamburgerButton = screen.getByLabelText('Toggle menu');
        expect(hamburgerButton).toBeInTheDocument();
      });

      it('toggles mobile menu when hamburger is clicked', async () => {
        const user = userEvent.setup();
        
        // Mock mobile viewport
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 768,
        });

        render(<Topbar items={mockItems} />);

        const hamburgerButton = screen.getByLabelText('Toggle menu');
        await user.click(hamburgerButton);

        // Mobile menu should be visible
        const mobileMenu = screen.getByRole('menu');
        expect(mobileMenu).toBeInTheDocument();
      });

      it('hides navigation items on mobile when menu is closed', () => {
        // Mock mobile viewport
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 768,
        });

        render(<Topbar items={mockItems} />);

        // Navigation items should be hidden on mobile
        const navItems = screen.getByRole('navigation').querySelector('.cria-topbar__items');
        expect(navItems).toHaveClass('cria-topbar__items--hidden');
      });
    });

    describe('Accessibility', () => {
      it('has correct navigation role', () => {
        render(<Topbar items={mockItems} />);

        const topbar = screen.getByRole('navigation');
        expect(topbar).toBeInTheDocument();
      });

      it('has links with discernible text', () => {
        render(<Topbar items={mockItems} />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        expect(homeLink).toHaveAccessibleName('Home');
        expect(aboutLink).toHaveAccessibleName('About');
        expect(contactLink).toHaveAccessibleName('Contact');
      });

      it('preserves keyboard focus order', async () => {
        const user = userEvent.setup();
        render(<Topbar items={mockItems} />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        const contactLink = screen.getByRole('link', { name: 'Contact' });

        await user.tab();
        expect(homeLink).toHaveFocus();

        await user.tab();
        expect(aboutLink).toHaveFocus();

        await user.tab();
        expect(contactLink).toHaveFocus();
      });

      it('supports keyboard navigation with arrow keys', async () => {
        const user = userEvent.setup();
        render(<Topbar items={mockItems} />);

        const homeLink = screen.getByRole('link', { name: 'Home' });
        homeLink.focus();

        await user.keyboard('{ArrowRight}');
        expect(screen.getByRole('link', { name: 'About' })).toHaveFocus();

        await user.keyboard('{ArrowRight}');
        expect(screen.getByRole('link', { name: 'Contact' })).toHaveFocus();

        await user.keyboard('{ArrowLeft}');
        expect(screen.getByRole('link', { name: 'About' })).toHaveFocus();
      });
    });

    describe('Brand/Logo Support', () => {
      it('renders brand/logo when provided', () => {
        render(<Topbar items={mockItems} brand="My App" />);

        expect(screen.getByText('My App')).toBeInTheDocument();
      });

      it('renders brand as link when href is provided', () => {
        render(<Topbar items={mockItems} brand="My App" brandHref="/" />);

        const brandLink = screen.getByRole('link', { name: 'My App' });
        expect(brandLink).toHaveAttribute('href', '/');
      });
    });
  });

  describe('Navigation Container', () => {
    it('renders both sidebar and topbar when both are provided', () => {
      const sidebarItems = [{ id: 'home', label: 'Home', href: '/home' }];
      const topbarItems = [{ id: 'profile', label: 'Profile', href: '/profile' }];

      render(
        <Navigation
          sidebar={{ items: sidebarItems }}
          topbar={{ items: topbarItems }}
        />
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
    });

    it('renders only sidebar when topbar is not provided', () => {
      const sidebarItems = [{ id: 'home', label: 'Home', href: '/home' }];

      render(<Navigation sidebar={{ items: sidebarItems }} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getAllByRole('navigation')).toHaveLength(1);
    });

    it('renders only topbar when sidebar is not provided', () => {
      const topbarItems = [{ id: 'profile', label: 'Profile', href: '/profile' }];

      render(<Navigation topbar={{ items: topbarItems }} />);

      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getAllByRole('navigation')).toHaveLength(1);
    });
  });
});
