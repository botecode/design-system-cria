import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from '../DatePicker';

describe('DatePicker', () => {
  it('renders input and opens calendar popup on click', async () => {
    render(<DatePicker />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.click(input);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('selects a single date', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    const day = screen.getAllByRole('gridcell').find(el => el.textContent === '15')!;
    fireEvent.click(day);
    expect(onChange).toHaveBeenCalled();
  });

  it('supports range selection', () => {
    const onChange = jest.fn();
    render(<DatePicker range onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    const days = screen.getAllByRole('gridcell');
    fireEvent.click(days[10]);
    fireEvent.click(days[15]);
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});


