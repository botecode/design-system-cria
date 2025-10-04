import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { VerticalTabs } from '../VerticalTabs';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'details', label: 'Details' },
  { id: 'settings', label: 'Settings', disabled: true },
  { id: 'logs', label: 'Logs' },
];

describe('VerticalTabs', () => {
  it('renders with proper structure and roles', () => {
    render(<VerticalTabs tabs={tabs} activeId="overview" onChange={jest.fn()} />);

    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();

    const allTabs = screen.getAllByRole('tab');
    expect(allTabs).toHaveLength(4);
    expect(allTabs[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('calls onChange when a tab is clicked', () => {
    const onChange = jest.fn();
    render(<VerticalTabs tabs={tabs} activeId="overview" onChange={onChange} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Details' }));
    expect(onChange).toHaveBeenCalledWith('details');
  });

  it('does not activate disabled tab', () => {
    const onChange = jest.fn();
    render(<VerticalTabs tabs={tabs} activeId="overview" onChange={onChange} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Settings' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation with ArrowUp/ArrowDown and Enter', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<VerticalTabs tabs={tabs} activeId="overview" onChange={onChange} />);

    const firstTab = screen.getByRole('tab', { name: 'Overview' });
    firstTab.focus();
    expect(firstTab).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    const detailsTab = screen.getByRole('tab', { name: 'Details' });
    expect(detailsTab).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('details');

    await user.keyboard('{ArrowDown}'); // Should skip disabled Settings and go to Logs
    const logsTab = screen.getByRole('tab', { name: 'Logs' });
    expect(logsTab).toHaveFocus();
  });

  it('applies aria attributes correctly', () => {
    render(<VerticalTabs tabs={tabs} activeId="logs" onChange={jest.fn()} />);

    const logsTab = screen.getByRole('tab', { name: 'Logs' });
    expect(logsTab).toHaveAttribute('aria-selected', 'true');

    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    expect(settingsTab).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders panel content associated with active tab', () => {
    render(
      <VerticalTabs
        tabs={tabs}
        activeId="details"
        onChange={jest.fn()}
        renderPanel={(id) => <div role="tabpanel">Panel: {id}</div>}
      />
    );

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Panel: details');
  });

  it('supports custom className and style', () => {
    render(
      <VerticalTabs
        tabs={tabs}
        activeId="overview"
        onChange={jest.fn()}
        className="custom-vertical-tabs"
        style={{ marginTop: 4 }}
      />
    );

    const tablist = screen.getByRole('tablist');
    expect(tablist.parentElement).toHaveClass('custom-vertical-tabs');
    expect(tablist.parentElement).toHaveStyle({ marginTop: '4px' });
  });
});