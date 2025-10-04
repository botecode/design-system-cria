import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from '../Stepper';

const steps = [
  { id: 'one', title: 'Step One' },
  { id: 'two', title: 'Step Two' },
  { id: 'three', title: 'Step Three' },
];

describe('Stepper', () => {
  it('renders steps with proper roles and structure', () => {
    render(<Stepper steps={steps} activeId="one" />);

    const list = screen.getByRole('tablist');
    expect(list).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(3);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('changes active step on click in non-linear mode', () => {
    const onChange = jest.fn();
    render(<Stepper steps={steps} activeId="one" onChange={onChange} linear={false} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Step Two' }));
    expect(onChange).toHaveBeenCalledWith('two');
  });

  it('blocks click in linear mode for future steps', () => {
    const onChange = jest.fn();
    render(<Stepper steps={steps} activeId="one" onChange={onChange} linear />);

    fireEvent.click(screen.getByRole('tab', { name: 'Step Three' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation and selection', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<Stepper steps={steps} activeId="one" onChange={onChange} linear={false} />);

    const first = screen.getByRole('tab', { name: 'Step One' });
    first.focus();
    expect(first).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    const second = screen.getByRole('tab', { name: 'Step Two' });
    expect(second).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('two');
  });

  it('applies aria attributes correctly', () => {
    render(<Stepper steps={steps} activeId="two" orientation="horizontal" />);

    const list = screen.getByRole('tablist');
    expect(list).toHaveAttribute('aria-orientation', 'horizontal');

    const active = screen.getByRole('tab', { name: 'Step Two' });
    expect(active).toHaveAttribute('aria-selected', 'true');
  });

  it('renders vertical orientation', () => {
    render(<Stepper steps={steps} activeId="one" orientation="vertical" />);
    const list = screen.getByRole('tablist');
    expect(list).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders disabled and error states', () => {
    const customSteps = [
      { id: 'one', title: 'Step One', completed: true },
      { id: 'two', title: 'Step Two', error: true },
      { id: 'three', title: 'Step Three', disabled: true },
    ];
    render(<Stepper steps={customSteps} activeId="two" />);

    const two = screen.getByRole('tab', { name: 'Step Two' });
    expect(two).toHaveAttribute('aria-selected', 'true');

    const three = screen.getByRole('tab', { name: 'Step Three' });
    expect(three).toHaveAttribute('aria-disabled', 'true');
  });
});