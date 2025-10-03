import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown, DropdownItem } from '../Dropdown';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const mockOptionsWithDisabled = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', disabled: true },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  describe('Basic Rendering', () => {
    it('renders with placeholder text', () => {
      render(<Dropdown placeholder="Select an option" options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toBeInTheDocument();
      expect(trigger).toHaveTextContent('Select an option');
    });

    it('renders with label', () => {
      render(<Dropdown label="Choose Option" options={mockOptions} />);
      
      const label = screen.getByText('Choose Option');
      expect(label).toBeInTheDocument();
    });

    it('renders with selected value', () => {
      render(<Dropdown value="option1" options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveTextContent('Option 1');
    });

    it('renders in different sizes', () => {
      const { rerender } = render(<Dropdown size="sm" options={mockOptions} />);
      let trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--sm');

      rerender(<Dropdown size="md" options={mockOptions} />);
      trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--md');

      rerender(<Dropdown size="lg" options={mockOptions} />);
      trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--lg');
    });

    it('renders in different variants', () => {
      const { rerender } = render(<Dropdown variant="default" options={mockOptions} />);
      let trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--default');

      rerender(<Dropdown variant="filled" options={mockOptions} />);
      trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--filled');

      rerender(<Dropdown variant="outlined" options={mockOptions} />);
      trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--outlined');
    });
  });

  describe('Dropdown Interaction', () => {
    it('opens dropdown on click', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Dropdown options={mockOptions} />
          <button>Outside button</button>
        </div>
      );
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      
      const outsideButton = screen.getByText('Outside button');
      await user.click(outsideButton);
      
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
    });

    it('selects option on click', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Dropdown options={mockOptions} onChange={handleChange} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const option = screen.getByText('Option 2');
      await user.click(option);
      
      expect(handleChange).toHaveBeenCalledWith('option2', { value: 'option2', label: 'Option 2' });
      expect(trigger).toHaveTextContent('Option 2');
    });

    it('closes dropdown after selection', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const option = screen.getByText('Option 2');
      await user.click(option);
      
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('opens dropdown on Enter key', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      trigger.focus();
      await user.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    it('opens dropdown on Space key', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      trigger.focus();
      await user.keyboard(' ');
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    it('navigates options with ArrowDown key', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await user.keyboard('{ArrowDown}');
      
      const options = screen.getAllByRole('option');
      const secondOption = options[1]; // Second option (index 1)
      await waitFor(() => {
        expect(secondOption).toHaveClass('cria-dropdown-option--focused');
      });
    });

    it('navigates options with ArrowUp key', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{ArrowUp}');
      
      const options = screen.getAllByRole('option');
      const secondOption = options[1]; // Second option (index 1)
      await waitFor(() => {
        expect(secondOption).toHaveClass('cria-dropdown-option--focused');
      });
    });

    it('selects focused option on Enter key', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Dropdown options={mockOptions} onChange={handleChange} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{Enter}');
      
      expect(handleChange).toHaveBeenCalledWith('option2', { value: 'option2', label: 'Option 2' });
    });

    it('closes dropdown on Escape key', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await user.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
    });

    it('cycles through options with Home and End keys', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await user.keyboard('{End}');
      const options = screen.getAllByRole('option');
      const lastOption = options[2]; // Third option (index 2)
      await waitFor(() => {
        expect(lastOption).toHaveClass('cria-dropdown-option--focused');
      });
      
      await user.keyboard('{Home}');
      const firstOption = options[0]; // First option (index 0)
      await waitFor(() => {
        expect(firstOption).toHaveClass('cria-dropdown-option--focused');
      });
    });
  });

  describe('Search Functionality', () => {
    it('filters options when searchable', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} searchable />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const searchInput = screen.getByRole('textbox');
      await user.type(searchInput, 'Option 2');
      
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
    });

    it('shows no results message when no matches', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} searchable />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const searchInput = screen.getByRole('textbox');
      await user.type(searchInput, 'Non-existent');
      
      expect(screen.getByText('No options found')).toBeInTheDocument();
    });

    it('clears search when dropdown closes', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} searchable />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const searchInput = screen.getByRole('textbox');
      await user.type(searchInput, 'Option 2');
      
      // Click outside to close dropdown
      await user.click(document.body);
      
      // Wait for dropdown to close
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
      
      // Click trigger to reopen
      await user.click(trigger);
      
      // Wait for dropdown to open and search input to appear
      await waitFor(() => {
        const newSearchInput = screen.getByRole('textbox');
        expect(newSearchInput).toHaveValue('');
      });
    });
  });

  describe('Multiple Selection', () => {
    it('supports multiple selection when enabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Dropdown options={mockOptions} multiple onChange={handleChange} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const option1 = screen.getByText('Option 1');
      const option2 = screen.getByText('Option 2');
      
      await user.click(option1);
      await user.click(option2);
      
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(trigger).toHaveTextContent('Option 1, Option 2');
    });

    it('shows selected count when multiple selection', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} multiple value={['option1', 'option2', 'option3']} />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveTextContent('3 selected');
    });

    it('allows deselecting options in multiple mode', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Dropdown options={mockOptions} multiple value={['option1']} onChange={handleChange} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const options = screen.getAllByRole('option');
      const option1 = options[0]; // First option (index 0)
      await user.click(option1);
      
      expect(handleChange).toHaveBeenCalledWith([], expect.any(Object));
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled when disabled prop is true', () => {
      render(<Dropdown options={mockOptions} disabled />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('aria-disabled', 'true');
    });

    it('does not open when disabled', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} disabled />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('renders disabled options as disabled', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptionsWithDisabled} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const options = screen.getAllByRole('option');
      const disabledOption = options[1]; // Second option (index 1) should be disabled
      expect(disabledOption).toHaveClass('cria-dropdown-option--disabled');
    });

    it('does not select disabled options', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Dropdown options={mockOptionsWithDisabled} onChange={handleChange} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const disabledOption = screen.getByText('Option 2');
      await user.click(disabledOption);
      
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('updates aria-expanded when opened', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('associates listbox with combobox', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const listbox = screen.getByRole('listbox');
      expect(listbox).toHaveAttribute('aria-labelledby', trigger.id);
    });

    it('has proper option roles and states', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(3);
      
      options.forEach((option, index) => {
        expect(option).toHaveAttribute('aria-selected', 'false');
        expect(option).toHaveTextContent(mockOptions[index].label);
      });
    });

    it('updates aria-selected for selected options', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} value="option1" />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      const options = screen.getAllByRole('option');
      const selectedOption = options[0]; // First option (index 0) should be selected
      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });

    it('supports aria-describedby for helper text', () => {
      render(<Dropdown options={mockOptions} helperText="Choose an option" />);
      
      const trigger = screen.getByRole('combobox');
      const helperText = screen.getByText('Choose an option');
      
      expect(trigger).toHaveAttribute('aria-describedby', 'dropdown-helper');
      expect(helperText.closest('div')).toHaveAttribute('id', 'dropdown-helper');
    });

    it('supports aria-invalid for error state', () => {
      render(<Dropdown options={mockOptions} errorMessage="This is an error" />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Form Integration', () => {
    it('supports name and value attributes', () => {
      render(<Dropdown options={mockOptions} name="test-field" value="option1" />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('name', 'test-field');
    });

    it('supports required attribute', () => {
      render(<Dropdown options={mockOptions} required />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('aria-required', 'true');
    });

    it('shows required indicator in label', () => {
      render(<Dropdown options={mockOptions} label="Choose Option" required />);
      
      const requiredIndicator = screen.getByText('*');
      expect(requiredIndicator).toBeInTheDocument();
    });
  });

  describe('Custom Options', () => {
    it('renders custom option components', () => {
      const customOptions = [
        { value: 'option1', label: 'Option 1', icon: '🚀' },
        { value: 'option2', label: 'Option 2', icon: '⭐' },
      ];
      
      render(<Dropdown options={customOptions} />);
      
      const trigger = screen.getByRole('combobox');
      fireEvent.click(trigger);
      
      expect(screen.getByText('🚀')).toBeInTheDocument();
      expect(screen.getByText('⭐')).toBeInTheDocument();
    });

    it('supports custom option rendering', () => {
      const customOptions = [
        { value: 'option1', label: 'Option 1', description: 'First option' },
        { value: 'option2', label: 'Option 2', description: 'Second option' },
      ];
      
      render(<Dropdown options={customOptions} />);
      
      const trigger = screen.getByRole('combobox');
      fireEvent.click(trigger);
      
      expect(screen.getByText('First option')).toBeInTheDocument();
      expect(screen.getByText('Second option')).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('shows loading indicator when loading', () => {
      render(<Dropdown options={mockOptions} loading />);
      
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveClass('cria-dropdown--loading');
    });

    it('disables interaction when loading', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} loading />);
      
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Error and Helper Text', () => {
    it('shows error message when provided', () => {
      render(<Dropdown options={mockOptions} errorMessage="This is an error" />);
      
      expect(screen.getByText('This is an error')).toBeInTheDocument();
    });

    it('shows helper text when provided', () => {
      render(<Dropdown options={mockOptions} helperText="Choose an option" />);
      
      expect(screen.getByText('Choose an option')).toBeInTheDocument();
    });

    it('prioritizes error message over helper text', () => {
      render(
        <Dropdown 
          options={mockOptions} 
          helperText="Choose an option" 
          errorMessage="This is an error" 
        />
      );
      
      expect(screen.getByText('This is an error')).toBeInTheDocument();
      expect(screen.queryByText('Choose an option')).not.toBeInTheDocument();
    });
  });
});
