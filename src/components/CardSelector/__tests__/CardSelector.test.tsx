import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardSelector } from '../CardSelector';

const mockCards = [
  { id: '1', title: 'Card 1', description: 'Description 1', value: 'card1' },
  { id: '2', title: 'Card 2', description: 'Description 2', value: 'card2' },
  { id: '3', title: 'Card 3', description: 'Description 3', value: 'card3' },
];

describe('CardSelector', () => {
  it('renders with correct cards', () => {
    render(<CardSelector cards={mockCards} />);
    
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Description 3')).toBeInTheDocument();
  });

  it('renders in single-select mode by default', () => {
    render(<CardSelector cards={mockCards} />);
    
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(3);
    
    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes).toHaveLength(0);
  });

  it('renders in multi-select mode when specified', () => {
    render(<CardSelector cards={mockCards} mode="multi" />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
    
    const radioButtons = screen.queryAllByRole('radio');
    expect(radioButtons).toHaveLength(0);
  });

  it('handles single selection', () => {
    const mockOnChange = jest.fn();
    render(<CardSelector cards={mockCards} onChange={mockOnChange} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    fireEvent.click(firstCard);
    
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
  });

  it('handles multiple selections in multi-select mode', () => {
    const mockOnChange = jest.fn();
    render(<CardSelector cards={mockCards} mode="multi" onChange={mockOnChange} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    const secondCard = screen.getByLabelText('Card 2');
    
    fireEvent.click(firstCard);
    fireEvent.click(secondCard);
    
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
    expect(mockOnChange).toHaveBeenCalledWith(['card1', 'card2']);
  });

  it('handles deselection in multi-select mode', () => {
    const mockOnChange = jest.fn();
    render(<CardSelector cards={mockCards} mode="multi" onChange={mockOnChange} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    
    // Select first
    fireEvent.click(firstCard);
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
    
    // Deselect first
    fireEvent.click(firstCard);
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  it('applies custom className', () => {
    render(<CardSelector cards={mockCards} className="custom-selector" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector', 'custom-selector');
  });

  it('applies custom style', () => {
    render(<CardSelector cards={mockCards} style={{ margin: '20px' }} />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveStyle({ margin: '20px' });
  });

  it('renders with custom layout', () => {
    render(<CardSelector cards={mockCards} layout="grid" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector--grid');
  });

  it('renders with custom size', () => {
    render(<CardSelector cards={mockCards} size="lg" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector--lg');
  });

  it('renders with disabled state', () => {
    render(<CardSelector cards={mockCards} disabled />);
    
    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach(radio => {
      expect(radio).toBeDisabled();
    });
  });

  it('renders with custom selected values', () => {
    render(<CardSelector cards={mockCards} selectedValues={['card1', 'card2']} mode="multi" />);
    
    const firstCheckbox = screen.getByLabelText('Card 1');
    const secondCheckbox = screen.getByLabelText('Card 2');
    const thirdCheckbox = screen.getByLabelText('Card 3');
    
    expect(firstCheckbox).toBeChecked();
    expect(secondCheckbox).toBeChecked();
    expect(thirdCheckbox).not.toBeChecked();
  });

  it('renders with custom selected value in single-select mode', () => {
    render(<CardSelector cards={mockCards} selectedValues={['card2']} />);
    
    const firstRadio = screen.getByLabelText('Card 1');
    const secondRadio = screen.getByLabelText('Card 2');
    const thirdRadio = screen.getByLabelText('Card 3');
    
    expect(firstRadio).not.toBeChecked();
    expect(secondRadio).toBeChecked();
    expect(thirdRadio).not.toBeChecked();
  });

  it('renders with custom card renderer', () => {
    const customRenderer = (card: any) => (
      <div key={card.id} data-testid={`custom-card-${card.id}`}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    );
    
    render(<CardSelector cards={mockCards} cardRenderer={customRenderer} />);
    
    expect(screen.getByTestId('custom-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('custom-card-2')).toBeInTheDocument();
    expect(screen.getByTestId('custom-card-3')).toBeInTheDocument();
  });

  it('renders with custom name for form integration', () => {
    render(<CardSelector cards={mockCards} name="plan-selection" />);
    
    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach(radio => {
      expect(radio).toHaveAttribute('name', 'plan-selection');
    });
  });

  it('renders with custom aria-label', () => {
    render(<CardSelector cards={mockCards} ariaLabel="Select your plan" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveAttribute('aria-label', 'Select your plan');
  });

  it('renders with custom aria-labelledby', () => {
    render(
      <div>
        <h2 id="selector-title">Choose Plan</h2>
        <CardSelector cards={mockCards} ariaLabelledBy="selector-title" />
      </div>
    );
    
    const container = screen.getByRole('group');
    expect(container).toHaveAttribute('aria-labelledby', 'selector-title');
  });

  it('handles keyboard navigation', () => {
    const mockOnChange = jest.fn();
    render(<CardSelector cards={mockCards} onChange={mockOnChange} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    firstCard.focus();
    
    fireEvent.keyDown(firstCard, { key: 'Enter' });
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
    
    fireEvent.keyDown(firstCard, { key: ' ' });
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
  });

  it('handles card click events', () => {
    const mockOnCardClick = jest.fn();
    render(<CardSelector cards={mockCards} onCardClick={mockOnCardClick} />);
    
    const firstCard = screen.getByText('Card 1').closest('label');
    fireEvent.click(firstCard!);
    
    expect(mockOnCardClick).toHaveBeenCalledWith(mockCards[0]);
  });

  it('renders with custom spacing', () => {
    render(<CardSelector cards={mockCards} spacing="lg" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector--spacing-lg');
  });

  it('renders with custom orientation', () => {
    render(<CardSelector cards={mockCards} orientation="vertical" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector--vertical');
  });

  it('renders with custom variant', () => {
    render(<CardSelector cards={mockCards} variant="outlined" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector--outlined');
  });

  it('renders with custom max selections in multi-select mode', () => {
    const mockOnChange = jest.fn();
    render(<CardSelector cards={mockCards} mode="multi" maxSelections={2} onChange={mockOnChange} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    const secondCard = screen.getByLabelText('Card 2');
    const thirdCard = screen.getByLabelText('Card 3');
    
    // Select first two
    fireEvent.click(firstCard);
    fireEvent.click(secondCard);
    
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
    expect(mockOnChange).toHaveBeenCalledWith(['card1', 'card2']);
    
    // Try to select third (should not work due to max limit)
    fireEvent.click(thirdCard);
    expect(mockOnChange).not.toHaveBeenCalledWith(['card1', 'card2', 'card3']);
  });

  it('renders with custom min selections in multi-select mode', () => {
    const mockOnChange = jest.fn();
    render(<CardSelector cards={mockCards} mode="multi" minSelections={1} onChange={mockOnChange} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    
    // Select first
    fireEvent.click(firstCard);
    expect(mockOnChange).toHaveBeenCalledWith(['card1']);
    
    // Try to deselect (should not work due to min limit)
    fireEvent.click(firstCard);
    expect(mockOnChange).not.toHaveBeenCalledWith([]);
  });

  it('renders with custom error state', () => {
    render(<CardSelector cards={mockCards} error="Please select at least one option" />);
    
    const errorMessage = screen.getByText('Please select at least one option');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('cria-card-selector__error');
  });

  it('renders with custom help text', () => {
    render(<CardSelector cards={mockCards} helpText="Choose the plan that best fits your needs" />);
    
    const helpText = screen.getByText('Choose the plan that best fits your needs');
    expect(helpText).toBeInTheDocument();
    expect(helpText).toHaveClass('cria-card-selector__help');
  });

  it('renders with custom loading state', () => {
    render(<CardSelector cards={mockCards} loading />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('cria-card-selector--loading');
  });

  it('renders with custom required state', () => {
    render(<CardSelector cards={mockCards} required />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveAttribute('aria-required', 'true');
  });

  it('a11y: proper roles and labels for screen readers', () => {
    render(<CardSelector cards={mockCards} ariaLabel="Select your plan" />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveAttribute('aria-label', 'Select your plan');
    
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(3);
    
    radioButtons.forEach(radio => {
      expect(radio).toHaveAttribute('name');
    });
  });

  it('a11y: proper focus management', () => {
    render(<CardSelector cards={mockCards} />);
    
    const firstCard = screen.getByLabelText('Card 1');
    firstCard.focus();
    
    expect(firstCard).toHaveFocus();
  });

  it('handles empty cards array', () => {
    render(<CardSelector cards={[]} />);
    
    const container = screen.getByRole('group');
    expect(container).toBeInTheDocument();
    
    const radioButtons = screen.queryAllByRole('radio');
    expect(radioButtons).toHaveLength(0);
  });

  it('handles undefined cards prop', () => {
    render(<CardSelector cards={undefined as any} />);
    
    const container = screen.getByRole('group');
    expect(container).toBeInTheDocument();
  });
});
