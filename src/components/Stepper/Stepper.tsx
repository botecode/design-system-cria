import React, { useCallback, useMemo, useRef } from 'react';

export type StepItem = {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  completed?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export interface StepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  steps: StepItem[];
  activeId: string;
  onChange?: (id: string) => void;
  orientation?: 'horizontal' | 'vertical';
  /** If true, user must follow order and cannot jump ahead to future steps */
  linear?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeId,
  onChange,
  orientation = 'horizontal',
  linear = true,
  className,
  style,
  ...props
}) => {
  const activeIndex = useMemo(() => steps.findIndex(s => s.id === activeId), [steps, activeId]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const canActivate = useCallback((index: number) => {
    const step = steps[index];
    if (!step || step.disabled) return false;
    if (!linear) return true;
    // Allow going backwards or current, and next immediate if desired; block future
    return index <= activeIndex; // stricter linear: cannot jump ahead
  }, [steps, linear, activeIndex]);

  const handleClick = useCallback((index: number) => {
    if (canActivate(index)) {
      onChange?.(steps[index].id);
    }
  }, [canActivate, onChange, steps]);

  const moveFocus = (current: number, dir: 1 | -1) => {
    const total = steps.length;
    let i = current;
    for (let c = 0; c < total; c++) {
      i = (i + dir + total) % total;
      if (!steps[i].disabled) {
        tabRefs.current[i]?.focus();
        break;
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (orientation === 'horizontal') {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        moveFocus(index, 1);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        moveFocus(index, -1);
        return;
      }
    } else {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveFocus(index, 1);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveFocus(index, -1);
        return;
      }
    }

    if ((e.key === 'Enter' || e.key === ' ') && canActivate(index)) {
      e.preventDefault();
      onChange?.(steps[index].id);
    }
  };

  const containerClasses = [
    'cria-stepper',
    `cria-stepper--${orientation}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={style} {...props}>
      <div role="tablist" aria-orientation={orientation} className="cria-stepper__list">
        {steps.map((step, index) => {
          const isActive = step.id === activeId;
          const isDisabled = !!step.disabled || (linear && index > activeIndex);
          const tabIndex = isDisabled ? -1 : isActive ? 0 : -1;

          const itemClasses = [
            'cria-stepper__tab',
            isActive && 'cria-stepper__tab--active',
            step.completed && 'cria-stepper__tab--completed',
            step.error && 'cria-stepper__tab--error',
            isDisabled && 'cria-stepper__tab--disabled',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={step.id}
              role="tab"
              ref={el => (tabRefs.current[index] = el)}
              className={itemClasses}
              aria-selected={isActive ? 'true' : 'false'}
              aria-disabled={isDisabled ? 'true' : undefined}
              tabIndex={tabIndex}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {step.icon && <span className="cria-stepper__icon" aria-hidden="true">{step.icon}</span>}
              <span className="cria-stepper__title">{step.title}</span>
              {step.description && (
                <span className="cria-stepper__description">{step.description}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
