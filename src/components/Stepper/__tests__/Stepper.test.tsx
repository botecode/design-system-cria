import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stepper, StepperStep } from '../Stepper';
import { Check, User, Gear, CreditCard } from 'phosphor-react';

describe('Stepper', () => {
  const mockSteps = [
    {
      id: 'step1',
      title: 'Personal Information',
      description: 'Enter your personal details',
      icon: <User data-testid="user-icon" />,
      completed: false,
      active: true,
    },
    {
      id: 'step2',
      title: 'Account Settings',
      description: 'Configure your account preferences',
      icon: <Gear data-testid="settings-icon" />,
      completed: false,
      active: false,
    },
    {
      id: 'step3',
      title: 'Payment',
      description: 'Set up your payment method',
      icon: <CreditCard data-testid="credit-icon" />,
      completed: false,
      active: false,
    },
  ];

  const mockOnStepClick = jest.fn();
  const mockOnNext = jest.fn();
  const mockOnPrevious = jest.fn();
  const mockOnComplete = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with basic props', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
    expect(screen.getByText('Account Settings')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('renders with different orientations', () => {
    const { rerender } = render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        orientation="horizontal"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();

    rerender(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        orientation="vertical"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        size="sm"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();

    rerender(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        size="lg"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        variant="default"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();

    rerender(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        variant="minimal"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        className="custom-stepper"
        style={{ backgroundColor: 'red' }}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    const stepper = screen.getByText('Personal Information').closest('.stepper');
    expect(stepper).toHaveClass('custom-stepper');
    expect(stepper).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('renders with loading state', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        loading
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByLabelText('Loading stepper')).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        disabled
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with showConnector true', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        showConnector
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with showConnector false', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        showConnector={false}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with showNavigation true', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        showNavigation
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with showNavigation false', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        showNavigation={false}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with custom connector', () => {
    const CustomConnector = () => <div data-testid="custom-connector">---</div>;
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        connector={<CustomConnector />}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getAllByTestId('custom-connector')).toHaveLength(2);
  });

  it('renders with custom step renderer', () => {
    const CustomStep = ({ step }: { step: any }) => (
      <div data-testid={`custom-step-${step.id}`}>
        {step.title}
      </div>
    );
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        stepRenderer={CustomStep}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByTestId('custom-step-step1')).toBeInTheDocument();
    expect(screen.getByTestId('custom-step-step2')).toBeInTheDocument();
    expect(screen.getByTestId('custom-step-step3')).toBeInTheDocument();
  });

  it('handles step click events', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    fireEvent.click(screen.getByText('Account Settings'));
    expect(mockOnStepClick).toHaveBeenCalledWith(1, mockSteps[1]);
  });

  it('handles next button click', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalledWith(0, mockSteps[0]);
  });

  it('handles previous button click', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={1}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);
    expect(mockOnPrevious).toHaveBeenCalledWith(1, mockSteps[1]);
  });

  it('handles complete button click on last step', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={2}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    const completeButton = screen.getByText('Complete');
    fireEvent.click(completeButton);
    expect(mockOnComplete).toHaveBeenCalledWith(2, mockSteps[2]);
  });

  it('has proper accessibility attributes', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    const stepper = screen.getByRole('navigation');
    expect(stepper).toHaveAttribute('aria-label', 'Stepper navigation');
  });

  it('renders with different step states', () => {
    const stepsWithStates = [
      {
        id: 'step1',
        title: 'Completed Step',
        description: 'This step is completed',
        icon: <Check data-testid="check-icon" />,
        completed: true,
        active: false,
      },
      {
        id: 'step2',
        title: 'Current Step',
        description: 'This is the current step',
        icon: <User data-testid="user-icon" />,
        completed: false,
        active: true,
      },
      {
        id: 'step3',
        title: 'Future Step',
        description: 'This step is in the future',
        icon: <Gear data-testid="settings-icon" />,
        completed: false,
        active: false,
      },
    ];

    render(
      <Stepper
        steps={stepsWithStates}
        currentStep={1}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    expect(screen.getByText('Completed Step')).toBeInTheDocument();
    expect(screen.getByText('Current Step')).toBeInTheDocument();
    expect(screen.getByText('Future Step')).toBeInTheDocument();
  });

  it('renders with long step titles and descriptions', () => {
    const stepsWithLongText = [
      {
        id: 'step1',
        title: 'This is a very long step title that should be handled gracefully',
        description: 'This is a very long step description that contains multiple sentences and should be displayed properly without breaking the layout or causing any visual issues.',
        icon: <User data-testid="user-icon" />,
        completed: false,
        active: true,
      },
    ];

    render(
      <Stepper
        steps={stepsWithLongText}
        currentStep={0}
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    expect(screen.getByText('This is a very long step title that should be handled gracefully')).toBeInTheDocument();
    expect(screen.getByText('This is a very long step description that contains multiple sentences and should be displayed properly without breaking the layout or causing any visual issues.')).toBeInTheDocument();
  });

  it('renders without optional props gracefully', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
      />
    );
    
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with custom navigation labels', () => {
    render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        nextLabel="Continue"
        previousLabel="Back"
        completeLabel="Finish"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('renders with different connector styles', () => {
    const { rerender } = render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        connectorStyle="solid"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();

    rerender(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        connectorStyle="dashed"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders with different connector colors', () => {
    const { rerender } = render(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        connectorColor="primary"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();

    rerender(
      <Stepper
        steps={mockSteps}
        currentStep={0}
        connectorColor="secondary"
        onStepClick={mockOnStepClick}
        onNext={mockOnNext}
        onPrevious={mockOnPrevious}
        onComplete={mockOnComplete}
      />
    );
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });
});

describe('StepperStep', () => {
  const mockStep = {
    id: 'step1',
    title: 'Test Step',
    description: 'Test step description',
    icon: <User data-testid="user-icon" />,
    completed: false,
    active: true,
  };

  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with basic props', () => {
    render(
      <StepperStep
        step={mockStep}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    expect(screen.getByText('Test Step')).toBeInTheDocument();
    expect(screen.getByText('Test step description')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <StepperStep
        step={mockStep}
        index={0}
        variant="default"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('Test Step')).toBeInTheDocument();

    rerender(
      <StepperStep
        step={mockStep}
        index={0}
        variant="minimal"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <StepperStep
        step={mockStep}
        index={0}
        size="sm"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('Test Step')).toBeInTheDocument();

    rerender(
      <StepperStep
        step={mockStep}
        index={0}
        size="lg"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });

  it('renders with different styles', () => {
    const { rerender } = render(
      <StepperStep
        step={mockStep}
        index={0}
        style="filled"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('Test Step')).toBeInTheDocument();

    rerender(
      <StepperStep
        step={mockStep}
        index={0}
        style="outlined"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });

  it('renders without icon', () => {
    const stepWithoutIcon = {
      ...mockStep,
      icon: undefined,
    };

    render(
      <StepperStep
        step={stepWithoutIcon}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    expect(screen.getByText('Test Step')).toBeInTheDocument();
    expect(screen.queryByTestId('user-icon')).not.toBeInTheDocument();
  });

  it('renders without description', () => {
    const stepWithoutDescription = {
      ...mockStep,
      description: undefined,
    };

    render(
      <StepperStep
        step={stepWithoutDescription}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    expect(screen.getByText('Test Step')).toBeInTheDocument();
    expect(screen.queryByText('Test step description')).not.toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    render(
      <StepperStep
        step={mockStep}
        index={0}
        className="custom-step"
        style={{ backgroundColor: 'red' }}
        onClick={mockOnClick}
      />
    );
    
    const step = screen.getByText('Test Step').closest('.stepper-step');
    expect(step).toHaveClass('custom-step');
    expect(step).toHaveStyle('background-color: buttonface');
  });

  it('handles click events', () => {
    render(
      <StepperStep
        step={mockStep}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    fireEvent.click(screen.getByText('Test Step'));
    expect(mockOnClick).toHaveBeenCalledWith(0, mockStep);
  });

  it('has proper accessibility attributes', () => {
    render(
      <StepperStep
        step={mockStep}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    const step = screen.getByRole('button');
    expect(step).toHaveAttribute('aria-label', 'Test Step: Test step description');
  });

  it('renders with loading state', () => {
    const loadingStep = {
      ...mockStep,
      loading: true,
    };

    render(
      <StepperStep
        step={loadingStep}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });

  it('renders with selected state', () => {
    const selectedStep = {
      ...mockStep,
      selected: true,
    };

    render(
      <StepperStep
        step={selectedStep}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    const disabledStep = {
      ...mockStep,
      disabled: true,
    };

    render(
      <StepperStep
        step={disabledStep}
        index={0}
        onClick={mockOnClick}
      />
    );
    
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });
});