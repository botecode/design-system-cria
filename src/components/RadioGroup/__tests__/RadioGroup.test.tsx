import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup } from '../RadioGroup';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('RadioGroup', () => {
  it('renders with options', () => {
    render(<RadioGroup options={mockOptions} />);
    
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Option 3' })).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<RadioGroup options={mockOptions} label="Choose an option" />);
    
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-labelledby');
  });

  it('renders with description', () => {
    render(<RadioGroup options={mockOptions} description="Select one option" />);
    
    expect(screen.getByText('Select one option')).toBeInTheDocument();
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-describedby');
  });

  it('handles selection change', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    
    render(<RadioGroup options={mockOptions} onChange={onChange} />);
    
    const option2 = screen.getByRole('radio', { name: 'Option 2' });
    await user.click(option2);
    
    expect(onChange).toHaveBeenCalledWith('option2');
    expect(option2).toBeChecked();
  });

  it('sets initial value', () => {
    render(<RadioGroup options={mockOptions} value="option2" />);
    
    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Option 1' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'Option 3' })).not.toBeChecked();
  });

  it('handles disabled state', () => {
    render(<RadioGroup options={mockOptions} disabled />);
    
    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toBeDisabled();
    });
  });

  it('handles individual option disabled state', () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ];
    
    render(<RadioGroup options={optionsWithDisabled} />);
    
    expect(screen.getByRole('radio', { name: 'Option 1' })).not.toBeDisabled();
    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeDisabled();
    expect(screen.getByRole('radio', { name: 'Option 3' })).not.toBeDisabled();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<RadioGroup options={mockOptions} />);
    
    const radioGroup = screen.getByRole('radiogroup');
    radioGroup.focus();
    
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('radio', { name: 'Option 2' })).toHaveFocus();
    
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('radio', { name: 'Option 3' })).toHaveFocus();
    
    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('radio', { name: 'Option 2' })).toHaveFocus();
  });

  it('handles space key selection', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    render(<RadioGroup options={mockOptions} onChange={onChange} />);
    
    const option1 = screen.getByRole('radio', { name: 'Option 1' });
    option1.focus();
    
    await user.keyboard(' ');
    
    expect(onChange).toHaveBeenCalledWith('option1');
    expect(option1).toBeChecked();
  });

  it('handles enter key selection', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    render(<RadioGroup options={mockOptions} onChange={onChange} />);
    
    const option1 = screen.getByRole('radio', { name: 'Option 1' });
    option1.focus();
    
    await user.keyboard('{Enter}');
    
    expect(onChange).toHaveBeenCalledWith('option1');
    expect(option1).toBeChecked();
  });

  it('applies custom className', () => {
    render(<RadioGroup options={mockOptions} className="custom-class" />);
    
    expect(screen.getByRole('radiogroup')).toHaveClass('custom-class');
  });

  it('applies error state', () => {
    render(<RadioGroup options={mockOptions} error="Please select an option" />);
    
    expect(screen.getByText('Please select an option')).toBeInTheDocument();
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles required state', () => {
    render(<RadioGroup options={mockOptions} required />);
    
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
  });

  it('renders with custom option renderer', () => {
    const customOptions = [
      { value: 'option1', label: 'Option 1', description: 'First option' },
      { value: 'option2', label: 'Option 2', description: 'Second option' },
    ];
    
    render(<RadioGroup options={customOptions} />);
    
    expect(screen.getByText('First option')).toBeInTheDocument();
    expect(screen.getByText('Second option')).toBeInTheDocument();
  });

  it('handles orientation prop', () => {
    render(<RadioGroup options={mockOptions} orientation="horizontal" />);
    
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('handles size prop', () => {
    render(<RadioGroup options={mockOptions} size="large" />);
    
    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toHaveClass('cria-radio--large');
    });
  });

  it('handles variant prop', () => {
    render(<RadioGroup options={mockOptions} variant="card" />);
    
    expect(screen.getByRole('radiogroup')).toHaveClass('cria-radio-group--card');
  });

  it('maintains focus management', async () => {
    const user = userEvent.setup();
    render(<RadioGroup options={mockOptions} />);
    
    const radioGroup = screen.getByRole('radiogroup');
    radioGroup.focus();
    
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    
    // Should wrap to first option
    expect(screen.getByRole('radio', { name: 'Option 1' })).toHaveFocus();
  });

  it('handles form integration', () => {
    render(
      <form>
        <RadioGroup options={mockOptions} name="test-radio" />
      </form>
    );
    
    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toHaveAttribute('name', 'test-radio');
    });
  });
});
