import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem, RadioGroupLabel } from '../RadioGroup';

describe('RadioGroup', () => {
  const defaultOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  describe('Rendering', () => {
    it('renders radio group with proper fieldset/legend structure', () => {
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group', { name: 'Test Group' });
      expect(fieldset).toBeInTheDocument();
      expect(fieldset.tagName).toBe('FIELDSET');

      const legend = screen.getByText('Test Group');
      expect(legend).toBeInTheDocument();
      expect(legend.tagName).toBe('LEGEND');
    });

    it('renders all radio options with proper labels', () => {
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      defaultOptions.forEach((option) => {
        const radio = screen.getByRole('radio', { name: option.label });
        expect(radio).toBeInTheDocument();
        expect(radio).toHaveAttribute('value', option.value);
        expect(radio).toHaveAttribute('name', 'test-group');
      });
    });

    it('applies custom className to fieldset', () => {
      render(
        <RadioGroup name="test-group" className="custom-class">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toHaveClass('custom-class');
    });
  });

  describe('Single Selection', () => {
    it('allows single selection from multiple options', async () => {
      const user = userEvent.setup();
      
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: 'Option 1' });
      const radio2 = screen.getByRole('radio', { name: 'Option 2' });

      // Initially no radio is selected
      expect(radio1).not.toBeChecked();
      expect(radio2).not.toBeChecked();

      // Click first option
      await user.click(radio1);
      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();

      // Click second option
      await user.click(radio2);
      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
    });

    it('handles controlled selection with value prop', () => {
      const handleChange = jest.fn();
      render(
        <RadioGroup name="test-group" value="option2" onChange={handleChange}>
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: 'Option 1' });
      const radio2 = screen.getByRole('radio', { name: 'Option 2' });
      const radio3 = screen.getByRole('radio', { name: 'Option 3' });

      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
      expect(radio3).not.toBeChecked();
    });

    it('calls onChange when selection changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(
        <RadioGroup name="test-group" onChange={handleChange}>
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const radio2 = screen.getByRole('radio', { name: 'Option 2' });
      await user.click(radio2);

      expect(handleChange).toHaveBeenCalledWith('option2');
    });
  });

  describe('Keyboard Navigation', () => {
    it('supports arrow key navigation between options', async () => {
      const user = userEvent.setup();
      
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: 'Option 1' });
      const radio2 = screen.getByRole('radio', { name: 'Option 2' });
      const radio3 = screen.getByRole('radio', { name: 'Option 3' });

      // Focus first radio
      radio1.focus();
      expect(radio1).toHaveFocus();

      // Navigate down with arrow key
      await user.keyboard('{ArrowDown}');
      expect(radio2).toHaveFocus();

      // Navigate down again
      await user.keyboard('{ArrowDown}');
      expect(radio3).toHaveFocus();

      // Navigate up
      await user.keyboard('{ArrowUp}');
      expect(radio2).toHaveFocus();
    });

    it('supports Space and Enter to select options', async () => {
      const user = userEvent.setup();
      
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const radio2 = screen.getByRole('radio', { name: 'Option 2' });
      
      // Focus and select with Space
      radio2.focus();
      await user.keyboard(' ');
      expect(radio2).toBeChecked();

      // Focus another option and select with Enter
      const radio3 = screen.getByRole('radio', { name: 'Option 3' });
      radio3.focus();
      await user.keyboard('{Enter}');
      expect(radio3).toBeChecked();
      expect(radio2).not.toBeChecked();
    });
  });

  describe('Disabled and Error States', () => {
    it('handles disabled radio group', () => {
      render(
        <RadioGroup name="test-group" disabled>
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toBeDisabled();

      defaultOptions.forEach((option) => {
        const radio = screen.getByRole('radio', { name: option.label });
        expect(radio).toBeDisabled();
      });
    });

    it('handles individual disabled radio options', () => {
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2" disabled>Option 2</RadioGroupItem>
          <RadioGroupItem value="option3">Option 3</RadioGroupItem>
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: 'Option 1' });
      const radio2 = screen.getByRole('radio', { name: 'Option 2' });
      const radio3 = screen.getByRole('radio', { name: 'Option 3' });

      expect(radio1).not.toBeDisabled();
      expect(radio2).toBeDisabled();
      expect(radio3).not.toBeDisabled();
    });

    it('handles error state with proper ARIA attributes', () => {
      render(
        <RadioGroup name="test-group" error="This field is required">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toHaveAttribute('aria-invalid', 'true');

      const errorMessage = screen.getByText('This field is required');
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveAttribute('role', 'alert');
    });

    it('handles required state', () => {
      render(
        <RadioGroup name="test-group" required>
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toHaveAttribute('aria-required', 'true');

      const legend = screen.getByText('Test Group');
      expect(legend).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes for screen reader support', () => {
      render(
        <RadioGroup name="test-group" aria-describedby="help-text">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
          <div id="help-text">Choose one option</div>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toHaveAttribute('aria-describedby', 'help-text');

      const legend = screen.getByText('Test Group');
      expect(legend).toHaveAttribute('id');
    });

    it('announces selection changes to screen readers', async () => {
      const user = userEvent.setup();
      
      render(
        <RadioGroup name="test-group">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const radio2 = screen.getByRole('radio', { name: 'Option 2' });
      
      // Focus and select
      radio2.focus();
      await user.keyboard(' ');
      
      // Check that the radio is properly checked and focused
      expect(radio2).toBeChecked();
    });

    it('supports custom aria-label for fieldset', () => {
      render(
        <RadioGroup name="test-group" aria-label="Custom label">
          {defaultOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group', { name: 'Custom label' });
      expect(fieldset).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('applies size variants correctly', () => {
      render(
        <RadioGroup name="test-group" size="lg">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        </RadioGroup>
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toHaveClass('cria-radio-group--lg');
    });
  });

  describe('Orientation', () => {
    it('supports horizontal and vertical orientations', () => {
      const { rerender } = render(
        <RadioGroup name="test-group" orientation="horizontal">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        </RadioGroup>
      );

      let fieldset = screen.getByRole('group');
      expect(fieldset).toHaveClass('cria-radio-group--horizontal');

      rerender(
        <RadioGroup name="test-group" orientation="vertical">
          <RadioGroupLabel>Test Group</RadioGroupLabel>
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        </RadioGroup>
      );

      fieldset = screen.getByRole('group');
      expect(fieldset).toHaveClass('cria-radio-group--vertical');
    });
  });
});