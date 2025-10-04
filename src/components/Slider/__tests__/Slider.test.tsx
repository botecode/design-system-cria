import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Slider } from '../Slider';

describe('Slider', () => {
  it('renders with correct initial values', () => {
    render(<Slider min={0} max={100} value={50} onChange={jest.fn()} />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });

  it('value changes on keyboard input', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Slider min={0} max={100} value={50} onChange={onChange} />);
    
    const slider = screen.getByRole('slider');
    slider.focus();
    
    await user.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenCalledWith(51);
    
    await user.keyboard('{ArrowLeft}');
    expect(onChange).toHaveBeenCalledWith(50);
    
    await user.keyboard('{Home}');
    expect(onChange).toHaveBeenCalledWith(0);
    
    await user.keyboard('{End}');
    expect(onChange).toHaveBeenCalledWith(100);
  });

  it('range mode works with two handles', () => {
    const onChange = jest.fn();
    render(
      <Slider 
        min={0} 
        max={100} 
        value={[20, 80]} 
        onChange={onChange}
        range 
      />
    );
    
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(2);
    
    expect(sliders[0]).toHaveAttribute('aria-valuenow', '20');
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '80');
  });

  it('a11y: roles/labels present; keyboard focus works', () => {
    render(
      <Slider 
        min={0} 
        max={100} 
        value={50} 
        onChange={jest.fn()}
        aria-label="Volume control"
      />
    );
    
    const slider = screen.getByRole('slider', { name: 'Volume control' });
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('tabindex', '0');
    
    // Test focus
    slider.focus();
    expect(slider).toHaveFocus();
  });

  it('step control works correctly', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(<Slider min={0} max={100} value={50} step={10} onChange={onChange} />);
    
    const slider = screen.getByRole('slider');
    slider.focus();
    
    await user.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenCalledWith(60);
    
    await user.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenCalledWith(70);
  });

  it('disabled state works correctly', () => {
    render(<Slider min={0} max={100} value={50} onChange={jest.fn()} disabled />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-disabled', 'true');
    expect(slider).toHaveAttribute('tabindex', '-1');
  });

  it('marks and labels are displayed when provided', () => {
    const marks = [
      { value: 0, label: 'Min' },
      { value: 50, label: 'Mid' },
      { value: 100, label: 'Max' }
    ];
    
    render(
      <Slider 
        min={0} 
        max={100} 
        value={50} 
        onChange={jest.fn()}
        marks={marks}
      />
    );
    
    expect(screen.getByText('Min')).toBeInTheDocument();
    expect(screen.getByText('Mid')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
  });

  it('range mode prevents handles from crossing', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Slider 
        min={0} 
        max={100} 
        value={[20, 80]} 
        onChange={onChange}
        range 
      />
    );
    
    const sliders = screen.getAllByRole('slider');
    
    // Try to move first handle past second handle
    sliders[0].focus();
    for (let i = 0; i < 70; i++) {
      await user.keyboard('{ArrowRight}');
    }
    
    // Should not exceed the second handle's value
    expect(onChange).toHaveBeenLastCalledWith([80, 80]);
  });
});
