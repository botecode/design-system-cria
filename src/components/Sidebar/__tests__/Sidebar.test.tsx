import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar, type SidebarItem } from '../Sidebar';

const mockItems: SidebarItem[] = [
  {
    id: 'item1',
    label: 'Dashboard',
    content: <div>Dashboard Content</div>,
  },
  {
    id: 'item2',
    label: 'Users',
    content: <div>Users Content</div>,
  },
  {
    id: 'item3',
    label: 'Settings',
    content: <div>Settings Content</div>,
  },
];

const mockItemsWithIcons: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <span data-testid="home-icon">🏠</span>,
    content: <div>Home Content</div>,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <span data-testid="profile-icon">👤</span>,
    content: <div>Profile Content</div>,
  },
];

const mockItemsWithChildren: SidebarItem[] = [
  {
    id: 'parent1',
    label: 'Parent 1',
    children: [
      {
        id: 'child1',
        label: 'Child 1',
        content: <div>Child 1 Content</div>,
      },
      {
        id: 'child2',
        label: 'Child 2',
        content: <div>Child 2 Content</div>,
      },
    ],
  },
  {
    id: 'parent2',
    label: 'Parent 2',
    children: [
      {
        id: 'child3',
        label: 'Child 3',
        content: <div>Child 3 Content</div>,
      },
    ],
  },
];

describe('Sidebar', () => {
  describe('Basic Rendering', () => {
    it('renders sidebar with items', () => {
      render(<Sidebar items={mockItems} />);
      
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Users')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Sidebar items={mockItems} className="custom-sidebar" />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('custom-sidebar');
    });

    it('renders with custom style', () => {
      render(<Sidebar items={mockItems} style={{ backgroundColor: 'red' }} />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveStyle('background-color: rgb(255, 0, 0)');
    });
  });

  describe('Item Selection', () => {
    it('selects first item by default', () => {
      render(<Sidebar items={mockItems} />);
      
      const firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(firstItem).toHaveAttribute('aria-selected', 'true');
    });

    it('selects default active item', () => {
      render(<Sidebar items={mockItems} defaultActiveItem="item2" />);
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      expect(secondItem).toHaveAttribute('aria-selected', 'true');
    });

    it('handles controlled active item', () => {
      const { rerender } = render(<Sidebar items={mockItems} activeItem="item1" />);
      
      let firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(firstItem).toHaveAttribute('aria-selected', 'true');
      
      rerender(<Sidebar items={mockItems} activeItem="item2" />);
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      expect(secondItem).toHaveAttribute('aria-selected', 'true');
    });

    it('calls onChange when item is clicked', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      
      render(<Sidebar items={mockItems} onChange={onChange} />);
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      await user.click(secondItem);
      
      expect(onChange).toHaveBeenCalledWith('item2');
    });
  });

  describe('Content Display', () => {
    it('shows content by default', () => {
      render(<Sidebar items={mockItems} />);
      
      expect(screen.getByText('Dashboard Content')).toBeInTheDocument();
    });

    it('hides content when showContent is false', () => {
      render(<Sidebar items={mockItems} showContent={false} />);
      
      expect(screen.queryByText('Dashboard Content')).not.toBeInTheDocument();
    });

    it('updates content when active item changes', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={mockItems} />);
      
      expect(screen.getByText('Dashboard Content')).toBeInTheDocument();
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      await user.click(secondItem);
      
      expect(screen.getByText('Users Content')).toBeInTheDocument();
      expect(screen.queryByText('Dashboard Content')).not.toBeInTheDocument();
    });
  });

  describe('Icons and Badges', () => {
    it('renders items with icons', () => {
      render(<Sidebar items={mockItemsWithIcons} />);
      
      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
      expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
    });

    it('renders items with badges', () => {
      const itemsWithBadges: SidebarItem[] = [
        {
          id: 'item1',
          label: 'Messages',
          badge: <span data-testid="badge">3</span>,
          content: <div>Messages Content</div>,
        },
      ];
      
      render(<Sidebar items={itemsWithBadges} />);
      
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    });
  });

  describe('Disabled Items', () => {
    it('renders disabled items', () => {
      const itemsWithDisabled: SidebarItem[] = [
        {
          id: 'item1',
          label: 'Enabled Item',
          content: <div>Enabled Content</div>,
        },
        {
          id: 'item2',
          label: 'Disabled Item',
          disabled: true,
          content: <div>Disabled Content</div>,
        },
      ];
      
      render(<Sidebar items={itemsWithDisabled} />);
      
      const disabledItem = screen.getByRole('menuitem', { name: 'Disabled Item' });
      expect(disabledItem).toBeDisabled();
      expect(disabledItem).toHaveAttribute('aria-disabled', 'true');
    });

    it('does not call onChange when disabled item is clicked', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      
      const itemsWithDisabled: SidebarItem[] = [
        {
          id: 'item1',
          label: 'Enabled Item',
          content: <div>Enabled Content</div>,
        },
        {
          id: 'item2',
          label: 'Disabled Item',
          disabled: true,
          content: <div>Disabled Content</div>,
        },
      ];
      
      render(<Sidebar items={itemsWithDisabled} onChange={onChange} />);
      
      const disabledItem = screen.getByRole('menuitem', { name: 'Disabled Item' });
      await user.click(disabledItem);
      
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('Nested Items', () => {
    it('renders items with children', () => {
      render(<Sidebar items={mockItemsWithChildren} />);
      
      expect(screen.getByText('Parent 1')).toBeInTheDocument();
      expect(screen.getByText('Parent 2')).toBeInTheDocument();
    });

    it('shows children when parent is expanded', () => {
      const itemsWithExpanded: SidebarItem[] = [
        {
          id: 'parent1',
          label: 'Parent 1',
          expanded: true,
          children: [
            {
              id: 'child1',
              label: 'Child 1',
              content: <div>Child 1 Content</div>,
            },
          ],
        },
      ];
      
      render(<Sidebar items={itemsWithExpanded} />);
      
      expect(screen.getByText('Child 1')).toBeInTheDocument();
    });

    it('hides children when parent is collapsed', () => {
      const itemsWithCollapsed: SidebarItem[] = [
        {
          id: 'parent1',
          label: 'Parent 1',
          expanded: false,
          children: [
            {
              id: 'child1',
              label: 'Child 1',
              content: <div>Child 1 Content</div>,
            },
          ],
        },
      ];
      
      render(<Sidebar items={itemsWithCollapsed} />);
      
      expect(screen.queryByText('Child 1')).not.toBeInTheDocument();
    });
  });

  describe('Collapsible Sidebar', () => {
    it('renders collapse toggle when collapsible', () => {
      render(<Sidebar items={mockItems} collapsible />);
      
      const toggle = screen.getByRole('button', { name: /collapse sidebar/i });
      expect(toggle).toBeInTheDocument();
    });

    it('does not render collapse toggle when not collapsible', () => {
      render(<Sidebar items={mockItems} collapsible={false} />);
      
      const toggle = screen.queryByRole('button', { name: /collapse sidebar/i });
      expect(toggle).not.toBeInTheDocument();
    });

    it('calls onCollapseChange when toggle is clicked', async () => {
      const user = userEvent.setup();
      const onCollapseChange = jest.fn();
      
      render(<Sidebar items={mockItems} collapsible onCollapseChange={onCollapseChange} />);
      
      const toggle = screen.getByRole('button', { name: /collapse sidebar/i });
      await user.click(toggle);
      
      expect(onCollapseChange).toHaveBeenCalledWith(true);
    });

    it('handles controlled collapsed state', () => {
      const { rerender } = render(<Sidebar items={mockItems} collapsible collapsed={false} />);
      
      let toggle = screen.getByRole('button', { name: /collapse sidebar/i });
      expect(toggle).toHaveAttribute('aria-label', 'Collapse sidebar');
      
      rerender(<Sidebar items={mockItems} collapsible collapsed={true} />);
      
      toggle = screen.getByRole('button', { name: /expand sidebar/i });
      expect(toggle).toHaveAttribute('aria-label', 'Expand sidebar');
    });
  });

  describe('Keyboard Navigation', () => {
    it('navigates with arrow keys', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={mockItems} />);
      
      const firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      firstItem.focus();
      
      await user.keyboard('{ArrowDown}');
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      expect(secondItem).toHaveFocus();
    });

    it('navigates with Home key', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={mockItems} defaultActiveItem="item3" />);
      
      const thirdItem = screen.getByRole('menuitem', { name: 'Settings' });
      thirdItem.focus();
      
      await user.keyboard('{Home}');
      
      const firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(firstItem).toHaveFocus();
    });

    it('navigates with End key', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={mockItems} />);
      
      const firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      firstItem.focus();
      
      await user.keyboard('{End}');
      
      const thirdItem = screen.getByRole('menuitem', { name: 'Settings' });
      expect(thirdItem).toHaveFocus();
    });

    it('activates item with Enter key', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      
      render(<Sidebar items={mockItems} onChange={onChange} />);
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      secondItem.focus();
      
      await user.keyboard('{Enter}');
      
      expect(onChange).toHaveBeenCalledWith('item2');
    });

    it('activates item with Space key', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      
      render(<Sidebar items={mockItems} onChange={onChange} />);
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      secondItem.focus();
      
      await user.keyboard(' ');
      
      expect(onChange).toHaveBeenCalledWith('item2');
    });

    it('skips disabled items during navigation', async () => {
      const user = userEvent.setup();
      const itemsWithDisabled: SidebarItem[] = [
        {
          id: 'item1',
          label: 'Enabled Item',
          content: <div>Enabled Content</div>,
        },
        {
          id: 'item2',
          label: 'Disabled Item',
          disabled: true,
          content: <div>Disabled Content</div>,
        },
        {
          id: 'item3',
          label: 'Another Enabled Item',
          content: <div>Another Enabled Content</div>,
        },
      ];
      
      render(<Sidebar items={itemsWithDisabled} />);
      
      const firstItem = screen.getByRole('menuitem', { name: 'Enabled Item' });
      firstItem.focus();
      
      await user.keyboard('{ArrowDown}');
      
      const thirdItem = screen.getByRole('menuitem', { name: 'Another Enabled Item' });
      expect(thirdItem).toHaveFocus();
    });
  });

  describe('Variants and Sizes', () => {
    it('applies default variant', () => {
      render(<Sidebar items={mockItems} />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('cria-sidebar--default');
    });

    it('applies compact variant', () => {
      render(<Sidebar items={mockItems} variant="compact" />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('cria-sidebar--compact');
    });

    it('applies minimal variant', () => {
      render(<Sidebar items={mockItems} variant="minimal" />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('cria-sidebar--minimal');
    });

    it('applies small size', () => {
      render(<Sidebar items={mockItems} size="sm" />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('cria-sidebar--sm');
    });

    it('applies medium size by default', () => {
      render(<Sidebar items={mockItems} />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('cria-sidebar--md');
    });

    it('applies large size', () => {
      render(<Sidebar items={mockItems} size="lg" />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('cria-sidebar--lg');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Sidebar items={mockItems} />);
      
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveAttribute('aria-label', 'Sidebar navigation');
      
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
      
      const firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(firstItem).toHaveAttribute('aria-selected', 'true');
    });

    it('manages focus properly', () => {
      render(<Sidebar items={mockItems} />);
      
      const firstItem = screen.getByRole('menuitem', { name: 'Dashboard' });
      expect(firstItem).toHaveAttribute('tabIndex', '0');
      
      const secondItem = screen.getByRole('menuitem', { name: 'Users' });
      expect(secondItem).toHaveAttribute('tabIndex', '-1');
    });
  });
});
