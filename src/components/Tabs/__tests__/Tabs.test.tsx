import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs from '../Tabs';

describe('Tabs Component', () => {
  const mockTabs = [
    {
      id: 'tab1',
      label: 'Tab 1',
      content: <div>Content 1</div>,
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: <div>Content 2</div>,
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: <div>Content 3</div>,
    },
  ];

  const mockTabsWithDisabled = [
    {
      id: 'tab1',
      label: 'Tab 1',
      content: <div>Content 1</div>,
    },
    {
      id: 'tab2',
      label: 'Disabled Tab',
      content: <div>Content 2</div>,
      disabled: true,
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: <div>Content 3</div>,
    },
  ];

  const mockTabsWithIcons = [
    {
      id: 'tab1',
      label: 'Tab 1',
      icon: '🏠',
      content: <div>Content 1</div>,
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      icon: '👤',
      badge: <span data-testid="badge">3</span>,
      content: <div>Content 2</div>,
    },
  ];

  // Basic Rendering Tests
  it('should render with default props', () => {
    render(<Tabs items={mockTabs} />);
    
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
  });

  it('should render tab content', () => {
    render(<Tabs items={mockTabs} />);
    
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('should render with custom variant', () => {
    render(<Tabs items={mockTabs} variant="pills" />);
    
    const tabList = screen.getByRole('tablist');
    expect(tabList).toHaveClass('cria-tabs__list--pills');
  });

  it('should render with custom size', () => {
    render(<Tabs items={mockTabs} size="lg" />);
    
    const tabList = screen.getByRole('tablist');
    expect(tabList).toHaveClass('cria-tabs__list--lg');
  });

  it('should render with custom orientation', () => {
    render(<Tabs items={mockTabs} orientation="vertical" />);
    
    const container = screen.getByRole('tablist').closest('.cria-tabs');
    expect(container).toHaveClass('cria-tabs--vertical');
  });

  it('should render with full width', () => {
    render(<Tabs items={mockTabs} fullWidth />);
    
    const container = screen.getByRole('tablist').closest('.cria-tabs');
    expect(container).toHaveClass('cria-tabs--full-width');
  });

  // Tab Interaction Tests
  it('should change active tab on click', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('should call onChange when tab changes', () => {
    const handleChange = jest.fn();
    render(<Tabs items={mockTabs} onChange={handleChange} />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });

  it('should work in controlled mode', () => {
    const { rerender } = render(<Tabs items={mockTabs} activeTab="tab2" />);
    
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    
    rerender(<Tabs items={mockTabs} activeTab="tab3" />);
    
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 3')).toBeInTheDocument();
  });

  // Disabled Tab Tests
  it('should render disabled tabs correctly', () => {
    render(<Tabs items={mockTabsWithDisabled} />);
    
    const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
    expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
    expect(disabledTab).toHaveAttribute('disabled');
    expect(disabledTab).toHaveClass('cria-tabs__tab--disabled');
  });

  it('should not change active tab when clicking disabled tab', () => {
    render(<Tabs items={mockTabsWithDisabled} />);
    
    const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
    fireEvent.click(disabledTab);
    
    expect(disabledTab).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  // Icon and Badge Tests
  it('should render tabs with icons', () => {
    render(<Tabs items={mockTabsWithIcons} />);
    
    expect(screen.getByText('🏠')).toBeInTheDocument();
    expect(screen.getByText('👤')).toBeInTheDocument();
  });

  it('should render tabs with badges', () => {
    render(<Tabs items={mockTabsWithIcons} />);
    
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  // Keyboard Navigation Tests
  it('should navigate with arrow keys', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    tab1.focus();
    
    fireEvent.keyDown(tab1, { key: 'ArrowRight' });
    
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should navigate with arrow keys in reverse', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    tab2.focus();
    
    fireEvent.keyDown(tab2, { key: 'ArrowLeft' });
    
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('should navigate to first tab with Home key', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab3 = screen.getByRole('tab', { name: 'Tab 3' });
    fireEvent.click(tab3);
    tab3.focus();
    
    fireEvent.keyDown(tab3, { key: 'Home' });
    
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
  });

  it('should navigate to last tab with End key', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    tab1.focus();
    
    fireEvent.keyDown(tab1, { key: 'End' });
    
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveAttribute('aria-selected', 'true');
  });

  it('should activate tab with Enter key', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    tab2.focus();
    
    fireEvent.keyDown(tab2, { key: 'Enter' });
    
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should activate tab with Space key', () => {
    render(<Tabs items={mockTabs} />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    tab2.focus();
    
    fireEvent.keyDown(tab2, { key: ' ' });
    
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should skip disabled tabs during keyboard navigation', () => {
    render(<Tabs items={mockTabsWithDisabled} />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    tab1.focus();
    
    fireEvent.keyDown(tab1, { key: 'ArrowRight' });
    
    // Should skip disabled tab and go to tab3
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveAttribute('aria-selected', 'true');
  });

  // Content Display Tests
  it('should hide content when showContent is false', () => {
    render(<Tabs items={mockTabs} showContent={false} />);
    
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  // Accessibility Tests
  it('should have proper ARIA attributes', () => {
    render(<Tabs items={mockTabs} />);
    
    const tablist = screen.getByRole('tablist');
    expect(tablist).toHaveAttribute('aria-orientation', 'horizontal');
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab1).toHaveAttribute('aria-controls', 'cria-tab-panel-tab1');
    expect(tab1).toHaveAttribute('id', 'cria-tab-tab1');
    
    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'cria-tab-tab1');
    expect(tabpanel).toHaveAttribute('id', 'cria-tab-panel-tab1');
  });

  it('should have proper ARIA attributes for vertical orientation', () => {
    render(<Tabs items={mockTabs} orientation="vertical" />);
    
    const tablist = screen.getByRole('tablist');
    expect(tablist).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('should have proper tabIndex for active tab', () => {
    render(<Tabs items={mockTabs} />);
    
    const activeTab = screen.getByRole('tab', { name: 'Tab 1' });
    const inactiveTab = screen.getByRole('tab', { name: 'Tab 2' });
    
    expect(activeTab).toHaveAttribute('tabIndex', '0');
    expect(inactiveTab).toHaveAttribute('tabIndex', '-1');
  });

  // Custom Props Tests
  it('should accept custom className', () => {
    render(<Tabs items={mockTabs} className="custom-class" />);
    
    const container = screen.getByRole('tablist').closest('.cria-tabs');
    expect(container).toHaveClass('custom-class');
  });

  it('should accept custom style', () => {
    render(<Tabs items={mockTabs} style={{ backgroundColor: 'red' }} />);
    
    const container = screen.getByRole('tablist').closest('.cria-tabs');
    expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  // Edge Cases
  it('should handle empty items array', () => {
    render(<Tabs items={[]} />);
    
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.queryByRole('tab')).not.toBeInTheDocument();
  });

  it('should handle single tab', () => {
    const singleTab = [mockTabs[0]];
    render(<Tabs items={singleTab} />);
    
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('should use defaultActiveTab when provided', () => {
    render(<Tabs items={mockTabs} defaultActiveTab="tab2" />);
    
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should handle controlled mode with onChange', () => {
    const handleChange = jest.fn();
    render(<Tabs items={mockTabs} activeTab="tab1" onChange={handleChange} />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });
});
