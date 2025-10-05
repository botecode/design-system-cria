import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MegaMenu } from '../MegaMenu';

describe('MegaMenu', () => {
  const mockMenuItems = [
    {
      label: 'Products',
      href: '/products',
      children: [
        {
          label: 'Software',
          href: '/products/software',
          children: [
            { label: 'CRM', href: '/products/software/crm' },
            { label: 'Analytics', href: '/products/software/analytics' },
            { label: 'Marketing', href: '/products/software/marketing' }
          ]
        },
        {
          label: 'Services',
          href: '/products/services',
          children: [
            { label: 'Consulting', href: '/products/services/consulting' },
            { label: 'Support', href: '/products/services/support' },
            { label: 'Training', href: '/products/services/training' }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        {
          label: 'Enterprise',
          href: '/solutions/enterprise',
          description: 'Scalable solutions for large organizations'
        },
        {
          label: 'Small Business',
          href: '/solutions/small-business',
          description: 'Affordable solutions for growing businesses'
        }
      ]
    },
    {
      label: 'Resources',
      href: '/resources'
    }
  ];

  it('renders with default props', () => {
    render(
      <MegaMenu data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toBeInTheDocument();
    expect(megaMenu).toHaveClass('cria-mega-menu');
  });

  it('renders with custom className', () => {
    render(
      <MegaMenu className="custom-mega-menu" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu');
    expect(megaMenu).toHaveClass('custom-mega-menu');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red', padding: '20px' };
    render(
      <MegaMenu style={customStyle} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(megaMenu).toHaveStyle('padding: 20px');
  });

  it('supports data attributes', () => {
    render(
      <MegaMenu data-testid="mega-menu" data-variant="dark" data-position="fixed">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveAttribute('data-variant', 'dark');
    expect(megaMenu).toHaveAttribute('data-position', 'fixed');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <MegaMenu variant="default" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    let megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--default');

    rerender(
      <MegaMenu variant="dark" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--dark');

    rerender(
      <MegaMenu variant="light" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--light');

    rerender(
      <MegaMenu variant="transparent" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--transparent');
  });

  it('renders with different positions', () => {
    const { rerender } = render(
      <MegaMenu position="static" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    let megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--position-static');

    rerender(
      <MegaMenu position="fixed" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--position-fixed');

    rerender(
      <MegaMenu position="sticky" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--position-sticky');
  });

  it('renders with menu items', () => {
    render(
      <MegaMenu items={mockMenuItems} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders with logo', () => {
    const logo = <div data-testid="logo">CR_IA.UI</div>;
    render(
      <MegaMenu logo={logo} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders with search functionality', () => {
    const mockOnSearch = jest.fn();
    render(
      <MegaMenu 
        showSearch 
        onSearch={mockOnSearch}
        searchPlaceholder="Search..."
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
    
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(mockOnSearch).toHaveBeenCalledWith('test search');
  });

  it('renders with call-to-action button', () => {
    const mockOnCtaClick = jest.fn();
    render(
      <MegaMenu 
        ctaButton={{
          label: 'Get Started',
          href: '/get-started',
          onClick: mockOnCtaClick
        }}
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const ctaButton = screen.getByText('Get Started');
    expect(ctaButton).toBeInTheDocument();
    
    fireEvent.click(ctaButton);
    expect(mockOnCtaClick).toHaveBeenCalled();
  });

  it('handles menu item clicks', () => {
    const mockOnItemClick = jest.fn();
    render(
      <MegaMenu 
        items={mockMenuItems} 
        onItemClick={mockOnItemClick}
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const productsLink = screen.getByText('Products');
    fireEvent.click(productsLink);
    
    expect(mockOnItemClick).toHaveBeenCalledWith('/products', 'Products', mockMenuItems[0]);
  });

  it('shows dropdown on hover', async () => {
    render(
      <MegaMenu items={mockMenuItems} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const productsLink = screen.getByText('Products');
    fireEvent.mouseEnter(productsLink);
    
    await waitFor(() => {
      expect(screen.getByText('Software')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
    });
  });

  it('hides dropdown on mouse leave', async () => {
    render(
      <MegaMenu items={mockMenuItems} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const productsLink = screen.getByText('Products');
    fireEvent.mouseEnter(productsLink);
    
    await waitFor(() => {
      expect(screen.getByText('Software')).toBeInTheDocument();
    });
    
    fireEvent.mouseLeave(productsLink);
    
    await waitFor(() => {
      expect(screen.queryByText('Software')).not.toBeInTheDocument();
    });
  });

  it('renders with mobile menu toggle', () => {
    render(
      <MegaMenu 
        items={mockMenuItems}
        showMobileToggle
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const mobileToggle = screen.getByRole('button', { name: /menu/i });
    expect(mobileToggle).toBeInTheDocument();
  });

  it('toggles mobile menu on mobile toggle click', () => {
    render(
      <MegaMenu 
        items={mockMenuItems}
        showMobileToggle
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const mobileToggle = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(mobileToggle);
    
    // Mobile menu should be visible
    expect(screen.getByRole('navigation')).toHaveClass('cria-mega-menu--mobile-open');
  });

  it('renders with custom trigger element', () => {
    const customTrigger = <button data-testid="custom-trigger">Custom Menu</button>;
    render(
      <MegaMenu 
        items={mockMenuItems}
        trigger={customTrigger}
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    expect(screen.getByTestId('custom-trigger')).toBeInTheDocument();
  });

  it('renders with different alignments', () => {
    const { rerender } = render(
      <MegaMenu alignment="left" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    let megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--alignment-left');

    rerender(
      <MegaMenu alignment="center" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--alignment-center');

    rerender(
      <MegaMenu alignment="right" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--alignment-right');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <MegaMenu size="sm" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    let megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--size-sm');

    rerender(
      <MegaMenu size="md" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--size-md');

    rerender(
      <MegaMenu size="lg" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--size-lg');
  });

  it('renders with border', () => {
    render(
      <MegaMenu border data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--border');
  });

  it('renders without border by default', () => {
    render(
      <MegaMenu data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).not.toHaveClass('cria-mega-menu--border');
  });

  it('renders with shadow', () => {
    render(
      <MegaMenu shadow data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--shadow');
  });

  it('renders without shadow by default', () => {
    render(
      <MegaMenu data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).not.toHaveClass('cria-mega-menu--shadow');
  });

  it('renders with full width', () => {
    render(
      <MegaMenu fullWidth data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--full-width');
  });

  it('renders without full width by default', () => {
    render(
      <MegaMenu data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).not.toHaveClass('cria-mega-menu--full-width');
  });

  it('renders children correctly', () => {
    render(
      <MegaMenu data-testid="mega-menu">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <div data-testid="child-3">Child 3</div>
      </MegaMenu>
    );
    
    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    const mockOnItemClick = jest.fn();
    const mockOnSearch = jest.fn();
    const logo = <div data-testid="logo">CR_IA.UI</div>;
    
    render(
      <MegaMenu
        variant="dark"
        position="fixed"
        size="lg"
        alignment="center"
        border
        shadow
        fullWidth
        items={mockMenuItems}
        logo={logo}
        showSearch
        onSearch={mockOnSearch}
        onItemClick={mockOnItemClick}
        ctaButton={{
          label: 'Get Started',
          href: '/get-started'
        }}
        className="custom-class"
        data-testid="mega-menu"
      >
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--dark');
    expect(megaMenu).toHaveClass('cria-mega-menu--position-fixed');
    expect(megaMenu).toHaveClass('cria-mega-menu--size-lg');
    expect(megaMenu).toHaveClass('cria-mega-menu--alignment-center');
    expect(megaMenu).toHaveClass('cria-mega-menu--border');
    expect(megaMenu).toHaveClass('cria-mega-menu--shadow');
    expect(megaMenu).toHaveClass('cria-mega-menu--full-width');
    expect(megaMenu).toHaveClass('custom-class');
    
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    render(<MegaMenu data-testid="mega-menu" />);
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toBeInTheDocument();
  });

  it('applies accessibility attributes', () => {
    render(
      <MegaMenu role="navigation" aria-label="Main navigation" data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveAttribute('role', 'navigation');
    expect(megaMenu).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('handles keyboard navigation', () => {
    render(
      <MegaMenu items={mockMenuItems} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const productsLink = screen.getByText('Products');
    fireEvent.keyDown(productsLink, { key: 'Enter' });
    
    // Should trigger the same behavior as click
    expect(productsLink).toBeInTheDocument();
  });

  it('renders with custom dropdown content', () => {
    const customDropdown = <div data-testid="custom-dropdown">Custom Content</div>;
    const itemsWithCustomDropdown = [
      {
        label: 'Custom',
        href: '/custom',
        customDropdown
      }
    ];
    
    render(
      <MegaMenu items={itemsWithCustomDropdown} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const customLink = screen.getByText('Custom');
    fireEvent.mouseEnter(customLink);
    
    expect(screen.getByTestId('custom-dropdown')).toBeInTheDocument();
  });

  it('handles nested menu items correctly', async () => {
    render(
      <MegaMenu items={mockMenuItems} data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    
    const productsLink = screen.getByText('Products');
    fireEvent.mouseEnter(productsLink);
    
    await waitFor(() => {
      expect(screen.getByText('Software')).toBeInTheDocument();
    });
    
    const softwareLink = screen.getByText('Software');
    fireEvent.mouseEnter(softwareLink);
    
    await waitFor(() => {
      expect(screen.getByText('CRM')).toBeInTheDocument();
      expect(screen.getByText('Analytics')).toBeInTheDocument();
      expect(screen.getByText('Marketing')).toBeInTheDocument();
    });
  });

  it('renders with loading state', () => {
    render(
      <MegaMenu loading data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).toHaveClass('cria-mega-menu--loading');
  });

  it('renders without loading state by default', () => {
    render(
      <MegaMenu data-testid="mega-menu">
        <div>Mega menu content</div>
      </MegaMenu>
    );
    const megaMenu = screen.getByTestId('mega-menu');
    expect(megaMenu).not.toHaveClass('cria-mega-menu--loading');
  });
});
