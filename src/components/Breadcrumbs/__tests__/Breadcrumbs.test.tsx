import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumbs } from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  const defaultItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops', href: '/products/electronics/laptops' },
  ];

  it('renders breadcrumbs with proper structure', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const breadcrumb = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveClass('cria-breadcrumbs');
  });

  it('renders all breadcrumb items', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    // Check that all items are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Laptops')).toBeInTheDocument();
  });

  it('renders separators between items', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const separators = screen.getAllByText('/');
    expect(separators).toHaveLength(3); // 4 items = 3 separators
  });

  it('renders links for all items except the last one', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3); // Last item should not be a link
    
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/products');
    expect(links[2]).toHaveAttribute('href', '/products/electronics');
  });

  it('marks the last item as current page', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const lastItem = screen.getByText('Laptops');
    const currentSpan = lastItem.closest('span[aria-current]');
    expect(currentSpan).toHaveAttribute('aria-current', 'page');
    expect(lastItem).not.toHaveAttribute('href');
  });

  it('handles click events on breadcrumb links', () => {
    const handleClick = jest.fn();
    const itemsWithClick = [
      { label: 'Home', href: '/', onClick: handleClick },
      { label: 'Products', href: '/products' },
    ];
    
    render(<Breadcrumbs items={itemsWithClick} />);
    
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<Breadcrumbs items={defaultItems} />);
    
    const firstLink = screen.getByRole('link', { name: 'Home' });
    const secondLink = screen.getByRole('link', { name: 'Products' });
    
    // Tab to first link
    await user.tab();
    expect(firstLink).toHaveFocus();
    
    // Tab to next link
    await user.tab();
    expect(secondLink).toHaveFocus();
    
    // Press Enter to activate
    await user.keyboard('{Enter}');
    // Link should be activated (we can't easily test navigation in jsdom)
  });

  it('applies custom separator', () => {
    render(<Breadcrumbs items={defaultItems} separator=">" />);
    
    const separators = screen.getAllByText('>');
    expect(separators).toHaveLength(3);
  });

  it('applies custom className', () => {
    render(<Breadcrumbs items={defaultItems} className="custom-breadcrumbs" />);
    
    const breadcrumb = screen.getByRole('navigation');
    expect(breadcrumb).toHaveClass('custom-breadcrumbs');
  });

  it('applies custom styles', () => {
    render(<Breadcrumbs items={defaultItems} style={{ color: 'red' }} />);
    
    const breadcrumb = screen.getByRole('navigation');
    expect(breadcrumb).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('handles empty items array', () => {
    render(<Breadcrumbs items={[]} />);
    
    const breadcrumb = screen.getByRole('navigation');
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toBeEmptyDOMElement();
  });

  it('handles single item', () => {
    const singleItem = [{ label: 'Home', href: '/' }];
    render(<Breadcrumbs items={singleItem} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
    expect(screen.queryByText('/')).not.toBeInTheDocument(); // No separator for single item
  });

  it('handles items without href', () => {
    const itemsWithoutHref = [
      { label: 'Home' },
      { label: 'Products', href: '/products' },
      { label: 'Current' },
    ];
    
    render(<Breadcrumbs items={itemsWithoutHref} />);
    
    const homeItem = screen.getByText('Home');
    const currentItem = screen.getByText('Current');
    
    expect(homeItem).not.toHaveAttribute('href');
    expect(currentItem).not.toHaveAttribute('href');
    const currentSpan = currentItem.closest('span[aria-current]');
    expect(currentSpan).toHaveAttribute('aria-current', 'page');
  });

  it('supports custom separator component', () => {
    const CustomSeparator = () => <span data-testid="custom-separator">→</span>;
    
    render(<Breadcrumbs items={defaultItems} separator={<CustomSeparator />} />);
    
    const customSeparators = screen.getAllByTestId('custom-separator');
    expect(customSeparators).toHaveLength(3);
  });

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { label: 'Home', href: '/', disabled: false },
      { label: 'Products', href: '/products', disabled: true },
      { label: 'Electronics', href: '/products/electronics', disabled: false },
    ];
    
    render(<Breadcrumbs items={itemsWithDisabled} />);
    
    const productsLink = screen.getByText('Products');
    const disabledSpan = productsLink.closest('span[aria-disabled]');
    expect(disabledSpan).toHaveAttribute('aria-disabled', 'true');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLElement>();
    render(<Breadcrumbs items={defaultItems} ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current).toHaveClass('cria-breadcrumbs');
  });

  it('renders with proper accessibility attributes', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const breadcrumb = screen.getByRole('navigation');
    expect(breadcrumb).toHaveAttribute('aria-label', 'Breadcrumb');
    
    // Check that the structure follows breadcrumb pattern
    const list = breadcrumb.querySelector('ol');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('cria-breadcrumbs__list');
  });

  it('supports custom aria-label', () => {
    render(<Breadcrumbs items={defaultItems} ariaLabel="Custom breadcrumb navigation" />);
    
    const breadcrumb = screen.getByRole('navigation');
    expect(breadcrumb).toHaveAttribute('aria-label', 'Custom breadcrumb navigation');
  });

  it('handles items with icons', () => {
    const itemsWithIcons = [
      { label: 'Home', href: '/', icon: <span data-testid="home-icon">🏠</span> },
      { label: 'Products', href: '/products' },
    ];
    
    render(<Breadcrumbs items={itemsWithIcons} />);
    
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByText('🏠')).toBeInTheDocument();
  });

  it('supports truncation with ellipsis', () => {
    const manyItems = Array.from({ length: 10 }, (_, i) => ({
      label: `Level ${i + 1}`,
      href: `/level${i + 1}`,
    }));
    
    render(<Breadcrumbs items={manyItems} maxItems={5} />);
    
    // Should show first item, ellipsis, and last few items
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Level 10')).toBeInTheDocument();
  });

  it('handles custom max items configuration', () => {
    const manyItems = Array.from({ length: 6 }, (_, i) => ({
      label: `Level ${i + 1}`,
      href: `/level${i + 1}`,
    }));
    
    render(<Breadcrumbs items={manyItems} maxItems={3} />);
    
    // Should show first item, ellipsis, and last 2 items (maxItems - 2 for first item and ellipsis)
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Level 6')).toBeInTheDocument();
  });
});
