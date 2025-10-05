import React, { forwardRef } from 'react';
import { colors, spacing, typography, radii, shadows } from '../../tokens';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Spinner } from 'phosphor-react';

export interface StepperStepData {
  /**
   * Unique identifier for the step
   */
  id: string;
  
  /**
   * Title of the step
   */
  title: string;
  
  /**
   * Optional description of the step
   */
  description?: string;
  
  /**
   * Optional icon for the step
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the step is completed
   * @default false
   */
  completed?: boolean;
  
  /**
   * Whether the step is currently active
   * @default false
   */
  active?: boolean;
  
  /**
   * Whether the step is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the step is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether the step is selected
   * @default false
   */
  selected?: boolean;
  
  /**
   * Additional data for the step
   */
  data?: Record<string, any>;
}

export interface StepperStepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Step data
   */
  step: StepperStepData;
  
  /**
   * Index of the step
   */
  index: number;
  
  /**
   * Size of the step
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the step
   * @default 'default'
   */
  variant?: 'default' | 'minimal';
  
  /**
   * Visual style of the step
   * @default 'filled'
   */
  style?: 'filled' | 'outlined' | 'ghost';
  
  /**
   * Click handler for the step
   */
  onClick?: (index: number, step: StepperStepData) => void;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const StepperStep = forwardRef<HTMLDivElement, StepperStepProps>(({
  step,
  index,
  size = 'md',
  variant = 'default',
  style = 'filled',
  onClick,
  className = '',
  ...props
}, ref) => {
  const {
    id,
    title,
    description,
    icon,
    completed = false,
    active = false,
    disabled = false,
    loading = false,
    selected = false,
  } = step;

  // Size configurations
  const sizeConfig = {
    sm: {
      padding: spacing[2],
      iconSize: '1rem',
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      borderRadius: radii.sm,
      iconPadding: spacing[1],
    },
    md: {
      padding: spacing[3],
      iconSize: '1.25rem',
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      borderRadius: radii.md,
      iconPadding: spacing[2],
    },
    lg: {
      padding: spacing[4],
      iconSize: '1.5rem',
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      borderRadius: radii.lg,
      iconPadding: spacing[3],
    },
  };

  const config = sizeConfig[size];

  // Get step styles based on state
  const getStepStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: spacing[3],
      padding: config.padding,
      borderRadius: config.borderRadius,
      transition: 'all 0.2s ease',
      cursor: onClick && !disabled ? 'pointer' : 'default',
      opacity: disabled ? 0.6 : 1,
      position: 'relative' as const,
      ...props.style,
    };

    let backgroundColor = 'transparent';
    let borderColor = 'transparent';
    let textColor = colors.gray[600];

    if (completed) {
      backgroundColor = colors.success[100];
      borderColor = colors.success[300];
      textColor = colors.success[800];
    } else if (active) {
      backgroundColor = colors.primary[100];
      borderColor = colors.primary[300];
      textColor = colors.primary[800];
    } else if (selected) {
      backgroundColor = colors.secondary[100];
      borderColor = colors.secondary[300];
      textColor = colors.secondary[800];
    }

    switch (style) {
      case 'filled':
        return {
          ...baseStyles,
          backgroundColor,
          border: `1px solid ${borderColor}`,
        };

      case 'outlined':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          border: `2px solid ${borderColor}`,
        };

      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: completed ? colors.success[50] : (active ? colors.primary[50] : 'transparent'),
          border: 'none',
        };

      default:
        return baseStyles;
    }
  };

  // Get icon styles
  const getIconStyles = () => {
    const baseIconStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: config.iconSize,
      height: config.iconSize,
      borderRadius: '50%',
      flexShrink: 0,
      fontSize: config.iconSize,
    };

    if (completed) {
      return {
        ...baseIconStyles,
        backgroundColor: colors.success[500],
        color: colors.white,
      };
    } else if (active) {
      return {
        ...baseIconStyles,
        backgroundColor: colors.primary[500],
        color: colors.white,
      };
    } else {
      return {
        ...baseIconStyles,
        backgroundColor: colors.gray[200],
        color: colors.gray[500],
      };
    }
  };

  const stepStyles = getStepStyles();
  const iconStyles = getIconStyles();

  // Handle click events
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick && !disabled && !loading) {
      onClick(index, step);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && !disabled && !loading && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick(index, step);
    }
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      ref={ref}
      className={`stepper-step variant-${variant} size-${size} style-${style} ${className} ${onClick ? 'clickable' : ''} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${selected ? 'selected' : ''} ${completed ? 'completed' : ''} ${active ? 'active' : ''}`}
      role={onClick ? "button" : "listitem"}
      aria-label={`${title}${description ? `: ${description}` : ''}`}
      aria-disabled={disabled || loading}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick && !disabled ? 0 : undefined}
      disabled={onClick && disabled}
      style={stepStyles}
      {...props}
    >
      {/* Icon */}
      <div className="stepper-step-icon" style={iconStyles}>
        {loading ? (
          <Spinner size={16} weight="bold" style={{ animation: 'spin 1s linear infinite' }} />
        ) : completed ? (
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>✓</div>
        ) : (
          icon || <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{index + 1}</div>
        )}
      </div>

      {/* Content */}
      <div className="stepper-step-content" style={{ flex: 1, minWidth: 0 }}>
        {/* Title */}
        <div
          className="stepper-step-title"
          style={{
            fontSize: config.titleFontSize,
            fontWeight: typography.fontWeight.semiBold,
            color: stepStyles.color || colors.gray[900],
            marginBottom: description ? spacing[1] : 0,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            className="stepper-step-description"
            style={{
              fontSize: config.fontSize,
              color: colors.gray[600],
              lineHeight: typography.lineHeight.relaxed,
            }}
          >
            {description}
          </div>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .stepper-step.clickable:focus {
          outline: 2px solid ${colors.primary[500]};
          outline-offset: 2px;
        }

        .stepper-step.clickable:focus-visible {
          outline: 2px solid ${colors.primary[500]};
          outline-offset: 2px;
        }

        .stepper-step.clickable:hover {
          ${!disabled && !loading ? `transform: translateY(-1px); box-shadow: ${shadows.sm};` : ''}
        }
      `}</style>
    </Component>
  );
});

StepperStep.displayName = 'StepperStep';

export interface StepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Array of stepper steps
   */
  steps: StepperStepData[];
  
  /**
   * Current active step index
   * @default 0
   */
  currentStep?: number;
  
  /**
   * Orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Size of the stepper
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the stepper
   * @default 'default'
   */
  variant?: 'default' | 'minimal';
  
  /**
   * Whether to show connectors between steps
   * @default true
   */
  showConnector?: boolean;
  
  /**
   * Whether to show navigation buttons
   * @default true
   */
  showNavigation?: boolean;
  
  /**
   * Custom connector component
   */
  connector?: React.ReactNode;
  
  /**
   * Style of the connector line
   * @default 'solid'
   */
  connectorStyle?: 'solid' | 'dashed' | 'dotted';
  
  /**
   * Color of the connector
   * @default 'primary'
   */
  connectorColor?: 'primary' | 'secondary' | 'gray';
  
  /**
   * Whether the stepper is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether the stepper is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Custom step renderer component
   */
  stepRenderer?: React.ComponentType<{ step: StepperStepData; index: number }>;
  
  /**
   * Click handler for stepper steps
   */
  onStepClick?: (index: number, step: StepperStepData) => void;
  
  /**
   * Next button click handler
   */
  onNext?: (currentIndex: number, currentStep: StepperStepData) => void;
  
  /**
   * Previous button click handler
   */
  onPrevious?: (currentIndex: number, currentStep: StepperStepData) => void;
  
  /**
   * Complete button click handler
   */
  onComplete?: (currentIndex: number, currentStep: StepperStepData) => void;
  
  /**
   * Custom navigation labels
   */
  nextLabel?: string;
  previousLabel?: string;
  completeLabel?: string;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  size = 'md',
  variant = 'default',
  showConnector = true,
  showNavigation = true,
  connector,
  connectorStyle = 'solid',
  connectorColor = 'primary',
  loading = false,
  disabled = false,
  stepRenderer,
  onStepClick,
  onNext,
  onPrevious,
  onComplete,
  nextLabel = 'Next',
  previousLabel = 'Previous',
  completeLabel = 'Complete',
  className = '',
  style = {},
  ...props
}, ref) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      stepSpacing: spacing[3],
      iconSize: '1rem',
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      connectorWidth: '2px',
    },
    md: {
      stepSpacing: spacing[4],
      iconSize: '1.25rem',
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      connectorWidth: '2px',
    },
    lg: {
      stepSpacing: spacing[5],
      iconSize: '1.5rem',
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      connectorWidth: '3px',
    },
  };

  const config = sizeConfig[size];

  // Color mappings
  const connectorColorMap = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    gray: colors.gray[300],
  };

  // Render loading state
  const renderLoading = () => (
    <div
      className="stepper-loading"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing[8],
        color: colors.gray[500],
      }}
      aria-label="Loading stepper"
    >
      <Spinner size={24} weight="bold" style={{ animation: 'spin 1s linear infinite' }} />
    </div>
  );

  // Render connector
  const renderConnector = (isLast: boolean) => {
    if (!showConnector || isLast) return null;

    if (connector) {
      return connector;
    }

    const connectorStyles = {
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
    };

    return (
      <div
        className="stepper-connector"
        style={{
          position: 'absolute',
          ...(orientation === 'horizontal' ? {
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: config.stepSpacing,
            height: config.connectorWidth,
          } : {
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: config.connectorWidth,
            height: config.stepSpacing,
          }),
          backgroundColor: connectorColorMap[connectorColor],
          borderStyle: connectorStyles[connectorStyle],
          borderWidth: '0 0 0 2px',
          borderColor: connectorColorMap[connectorColor],
          zIndex: 1,
        }}
      />
    );
  };

  // Render stepper step
  const renderStep = (step: StepperStepData, index: number) => {
    if (stepRenderer) {
      return stepRenderer({ step, index });
    }

          return (
      <StepperStep
              key={step.id}
        step={step}
        index={index}
        size={size}
        variant={variant}
        onClick={onStepClick}
        style={{
          marginBottom: orientation === 'vertical' && index < steps.length - 1 ? config.stepSpacing : 0,
          marginRight: orientation === 'horizontal' && index < steps.length - 1 ? config.stepSpacing : 0,
        }}
      />
    );
  };

  // Render navigation
  const renderNavigation = () => {
    if (!showNavigation) return null;

    const currentStepData = steps[currentStep];
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;

    return (
      <div
        className="stepper-navigation"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: spacing[6],
          padding: spacing[4],
          borderTop: `1px solid ${colors.gray[200]}`,
        }}
      >
        <Button
          variant="outlined"
          size={size}
          disabled={isFirstStep || disabled || loading}
          onClick={() => onPrevious?.(currentStep, currentStepData)}
        >
          {previousLabel}
        </Button>

        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
          <Typography variant="bodySmall" color="secondary">
            Step {currentStep + 1} of {steps.length}
          </Typography>
        </div>

        <Button
          variant="primary"
          size={size}
          disabled={disabled || loading}
          onClick={() => {
            if (isLastStep) {
              onComplete?.(currentStep, currentStepData);
            } else {
              onNext?.(currentStep, currentStepData);
            }
          }}
        >
          {isLastStep ? completeLabel : nextLabel}
        </Button>
      </div>
    );
  };

  if (loading) {
    return (
      <div
        ref={ref}
        className={`stepper loading ${className}`}
        style={style}
        {...props}
      >
        {renderLoading()}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`stepper orientation-${orientation} size-${size} variant-${variant} ${className}`}
      style={{
        position: 'relative',
        ...(orientation === 'horizontal' && {
          display: 'flex',
          flexDirection: 'row' as const,
          alignItems: 'center',
        }),
        ...(orientation === 'vertical' && {
          display: 'flex',
          flexDirection: 'column' as const,
        }),
        ...style,
      }}
      role="navigation"
      aria-label="Stepper navigation"
      {...props}
    >
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="stepper-step-wrapper"
          style={{
            position: 'relative',
            ...(orientation === 'horizontal' && {
              display: 'flex',
              flexDirection: 'row' as const,
              alignItems: 'center',
            }),
            ...(orientation === 'vertical' && {
              display: 'flex',
              flexDirection: 'column' as const,
            }),
          }}
        >
          {renderStep(step, index)}
          {renderConnector(index === steps.length - 1)}
        </div>
      ))}

      {renderNavigation()}

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .stepper-step-wrapper:last-child .stepper-connector {
          display: none;
        }
      `}</style>
    </div>
  );
});

Stepper.displayName = 'Stepper';

export default Stepper;