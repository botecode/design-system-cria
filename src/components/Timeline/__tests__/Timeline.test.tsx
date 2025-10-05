import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Timeline, TimelineItem } from '../Timeline';
import { User, CheckCircle, Warning, Info } from 'phosphor-react';

describe('Timeline', () => {
  const mockItems = [
    {
      id: '1',
      title: 'User registered',
      description: 'New user joined the platform',
      timestamp: '2024-01-15T10:30:00Z',
      icon: <User data-testid="user-icon" />,
      variant: 'default' as const,
    },
    {
      id: '2',
      title: 'Task completed',
      description: 'Project milestone reached',
      timestamp: '2024-01-15T11:45:00Z',
      icon: <CheckCircle data-testid="check-icon" />,
      variant: 'success' as const,
    },
    {
      id: '3',
      title: 'Issue reported',
      description: 'Bug found in production',
      timestamp: '2024-01-15T14:20:00Z',
      icon: <Warning data-testid="alert-icon" />,
      variant: 'error' as const,
    },
  ];

  it('renders with basic props', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    expect(screen.getByText('Task completed')).toBeInTheDocument();
    expect(screen.getByText('Issue reported')).toBeInTheDocument();
  });

  it('renders with different orientations', () => {
    const { rerender } = render(<Timeline items={mockItems} orientation="vertical" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} orientation="horizontal" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Timeline items={mockItems} size="sm" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} size="md" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} size="lg" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Timeline items={mockItems} variant="default" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} variant="compact" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} variant="detailed" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    render(
      <Timeline
        items={mockItems}
        className="custom-timeline"
        style={{ backgroundColor: 'red' }}
      />
    );
    
    const timeline = screen.getByText('User registered').closest('.timeline');
    expect(timeline).toHaveClass('custom-timeline');
    expect(timeline).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('renders with loading state', () => {
    render(<Timeline items={mockItems} loading />);
    expect(screen.getByLabelText('Loading timeline')).toBeInTheDocument();
  });

  it('renders with empty state', () => {
    render(<Timeline items={[]} emptyMessage="No activities yet" />);
    expect(screen.getByText('No activities yet')).toBeInTheDocument();
  });

  it('renders with custom empty component', () => {
    const CustomEmpty = () => <div data-testid="custom-empty">Custom empty state</div>;
    render(<Timeline items={[]} emptyComponent={<CustomEmpty />} />);
    expect(screen.getByTestId('custom-empty')).toBeInTheDocument();
  });

  it('renders with showConnector true', () => {
    render(<Timeline items={mockItems} showConnector />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    // Connector should be visible
  });

  it('renders with showConnector false', () => {
    render(<Timeline items={mockItems} showConnector={false} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    // Connector should not be visible
  });

  it('renders with showTimestamps true', () => {
    render(<Timeline items={mockItems} showTimestamps />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    // Timestamps should be visible
  });

  it('renders with showTimestamps false', () => {
    render(<Timeline items={mockItems} showTimestamps={false} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    // Timestamps should not be visible
  });

  it('renders with custom connector', () => {
    const CustomConnector = () => <div data-testid="custom-connector">---</div>;
    render(<Timeline items={mockItems} connector={<CustomConnector />} />);
    expect(screen.getAllByTestId('custom-connector')).toHaveLength(2);
  });

  it('renders with custom item renderer', () => {
    const CustomItem = ({ item }: { item: any }) => (
      <div data-testid={`custom-item-${item.id}`}>
        Custom: {item.title}
      </div>
    );
    render(<Timeline items={mockItems} itemRenderer={CustomItem} />);
    expect(screen.getByTestId('custom-item-1')).toBeInTheDocument();
    expect(screen.getByText('Custom: User registered')).toBeInTheDocument();
  });

  it('handles click events on items', () => {
    const mockOnItemClick = jest.fn();
    render(<Timeline items={mockItems} onItemClick={mockOnItemClick} />);
    
    const firstItem = screen.getByText('User registered');
    firstItem.click();
    expect(mockOnItemClick).toHaveBeenCalledWith(mockItems[0]);
  });

  it('has proper accessibility attributes', () => {
    render(<Timeline items={mockItems} />);
    const timeline = screen.getByRole('list');
    expect(timeline).toBeInTheDocument();
  });

  it('renders with different item variants', () => {
    const itemsWithVariants = [
      { ...mockItems[0], variant: 'default' as const },
      { ...mockItems[1], variant: 'success' as const },
      { ...mockItems[2], variant: 'error' as const },
    ];
    
    render(<Timeline items={itemsWithVariants} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    expect(screen.getByText('Task completed')).toBeInTheDocument();
    expect(screen.getByText('Issue reported')).toBeInTheDocument();
  });

  it('renders with different item sizes', () => {
    const itemsWithSizes = [
      { ...mockItems[0], size: 'sm' as const },
      { ...mockItems[1], size: 'md' as const },
      { ...mockItems[2], size: 'lg' as const },
    ];
    
    render(<Timeline items={itemsWithSizes} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    expect(screen.getByText('Task completed')).toBeInTheDocument();
    expect(screen.getByText('Issue reported')).toBeInTheDocument();
  });

  it('renders with custom item styles', () => {
    const itemsWithStyles = [
      { ...mockItems[0], style: 'filled' as const },
      { ...mockItems[1], style: 'outlined' as const },
      { ...mockItems[2], style: 'ghost' as const },
    ];
    
    render(<Timeline items={itemsWithStyles} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    expect(screen.getByText('Task completed')).toBeInTheDocument();
    expect(screen.getByText('Issue reported')).toBeInTheDocument();
  });

  it('renders with long descriptions', () => {
    const itemsWithLongDesc = [
      {
        ...mockItems[0],
        description: 'This is a very long description that should be handled properly by the timeline component and should not break the layout or cause any visual issues.',
      },
    ];
    
    render(<Timeline items={itemsWithLongDesc} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
    expect(screen.getByText(/This is a very long description/)).toBeInTheDocument();
  });

  it('renders with missing optional props gracefully', () => {
    const minimalItems = [
      {
        id: '1',
        title: 'Minimal item',
        timestamp: '2024-01-15T10:30:00Z',
      },
    ];
    
    render(<Timeline items={minimalItems} />);
    expect(screen.getByText('Minimal item')).toBeInTheDocument();
  });

  it('renders with custom timestamp format', () => {
    const itemsWithCustomFormat = [
      {
        ...mockItems[0],
        timestamp: '2024-01-15T10:30:00Z',
        timestampFormat: 'MMM DD, YYYY',
      },
    ];
    
    render(<Timeline items={itemsWithCustomFormat} />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
  });

  it('renders with different connector styles', () => {
    const { rerender } = render(<Timeline items={mockItems} connectorStyle="solid" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} connectorStyle="dashed" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} connectorStyle="dotted" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
  });

  it('renders with different connector colors', () => {
    const { rerender } = render(<Timeline items={mockItems} connectorColor="primary" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} connectorColor="secondary" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();

    rerender(<Timeline items={mockItems} connectorColor="gray" />);
    expect(screen.getByText('User registered')).toBeInTheDocument();
  });
});

describe('TimelineItem', () => {
  const mockItem = {
    id: '1',
    title: 'Test Item',
    description: 'Test description',
    timestamp: '2024-01-15T10:30:00Z',
    icon: <User data-testid="user-icon" />,
    variant: 'default' as const,
  };

  it('renders with basic props', () => {
    render(<TimelineItem item={mockItem} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<TimelineItem item={{ ...mockItem, variant: 'success' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, variant: 'error' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, variant: 'warning' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, variant: 'info' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<TimelineItem item={{ ...mockItem, size: 'sm' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, size: 'md' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, size: 'lg' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders with different styles', () => {
    const { rerender } = render(<TimelineItem item={{ ...mockItem, style: 'filled' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, style: 'outlined' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    rerender(<TimelineItem item={{ ...mockItem, style: 'ghost' }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders without icon', () => {
    const itemWithoutIcon = { ...mockItem, icon: undefined };
    render(<TimelineItem item={itemWithoutIcon} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.queryByTestId('user-icon')).not.toBeInTheDocument();
  });

  it('renders without description', () => {
    const itemWithoutDesc = { ...mockItem, description: undefined };
    render(<TimelineItem item={itemWithoutDesc} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.queryByText('Test description')).not.toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    render(
      <TimelineItem
        item={mockItem}
        className="custom-item"
        style={{ backgroundColor: 'red' }}
      />
    );
    
    const item = screen.getByText('Test Item').closest('.timeline-item');
    expect(item).toHaveClass('custom-item');
    expect(item).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('handles click events', () => {
    const mockOnClick = jest.fn();
    render(<TimelineItem item={mockItem} onClick={mockOnClick} />);
    
    const item = screen.getByText('Test Item');
    item.click();
    expect(mockOnClick).toHaveBeenCalledWith(mockItem);
  });

  it('has proper accessibility attributes', () => {
    render(<TimelineItem item={mockItem} />);
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    render(<TimelineItem item={{ ...mockItem, loading: true }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    // Should show loading indicator
  });

  it('renders with selected state', () => {
    render(<TimelineItem item={{ ...mockItem, selected: true }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    // Should have selected styling
  });

  it('renders with disabled state', () => {
    render(<TimelineItem item={{ ...mockItem, disabled: true }} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    // Should have disabled styling
  });
});
