import React, { useState, useRef, useCallback, useEffect } from 'react';
import { colors, spacing, typography } from '../../tokens';
import { Typography } from '../Typography';

export interface SliderMark {
  value: number;
  label?: string;
}

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  onChange?: (value: number | [number, number]) => void;
  onChangeCommitted?: (value: number | [number, number]) => void;
  range?: boolean;
  disabled?: boolean;
  marks?: SliderMark[];
  showLabels?: boolean;
  showTooltip?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  'aria-label'?: string;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue,
  onChange,
  onChangeCommitted,
  range = false,
  disabled = false,
  marks = [],
  showLabels = true,
  showTooltip = true,
  orientation = 'horizontal',
  size = 'md',
  color = 'primary',
  className = '',
  style,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<number | [number, number]>(() => {
    if (controlledValue !== undefined) return controlledValue;
    if (defaultValue !== undefined) return defaultValue;
    return range ? [min, max] : min;
  });

  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  const isControlled = controlledValue !== undefined;

  const getColorValue = (colorName: string) => {
    const colorMap: Record<string, string> = {
      primary: colors.primary,
      secondary: colors.secondary,
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
    };
    return colorMap[colorName] || colors.primary;
  };

  const getSizeValue = (sizeName: string) => {
    const sizeMap: Record<string, { track: number; thumb: number; thumbHover: number }> = {
      sm: { track: 4, thumb: 16, thumbHover: 20 },
      md: { track: 6, thumb: 20, thumbHover: 24 },
      lg: { track: 8, thumb: 24, thumbHover: 28 },
    };
    return sizeMap[sizeName] || sizeMap.md;
  };

  const normalizeValue = useCallback((val: number) => {
    const normalized = Math.round((val - min) / step) * step + min;
    return Math.max(min, Math.min(max, normalized));
  }, [min, max, step]);

  const getPercentage = useCallback((val: number) => {
    return ((val - min) / (max - min)) * 100;
  }, [min, max]);

  const handleValueChange = useCallback((newValue: number | [number, number]) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [isControlled, onChange]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, thumbIndex: number) => {
    if (disabled) return;

    const currentVal = Array.isArray(currentValue) ? currentValue[thumbIndex] : currentValue;
    let newVal = currentVal;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newVal = normalizeValue(currentVal + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newVal = normalizeValue(currentVal - step);
        break;
      case 'Home':
        event.preventDefault();
        newVal = min;
        break;
      case 'End':
        event.preventDefault();
        newVal = max;
        break;
      case 'PageUp':
        event.preventDefault();
        newVal = normalizeValue(currentVal + step * 10);
        break;
      case 'PageDown':
        event.preventDefault();
        newVal = normalizeValue(currentVal - step * 10);
        break;
      default:
        return;
    }

    if (range) {
      const newRangeValue = [...(currentValue as [number, number])] as [number, number];
      newRangeValue[thumbIndex] = newVal;
      
      // Prevent handles from crossing
      if (thumbIndex === 0 && newRangeValue[0] > newRangeValue[1]) {
        newRangeValue[0] = newRangeValue[1];
      } else if (thumbIndex === 1 && newRangeValue[1] < newRangeValue[0]) {
        newRangeValue[1] = newRangeValue[0];
      }
      
      handleValueChange(newRangeValue);
    } else {
      handleValueChange(newVal);
    }
  }, [disabled, currentValue, step, min, max, normalizeValue, range, handleValueChange]);

  const handleMouseDown = useCallback((event: React.MouseEvent, thumbIndex: number) => {
    if (disabled) return;
    
    event.preventDefault();
    setIsDragging(true);
    setActiveThumb(thumbIndex);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = orientation === 'horizontal' 
        ? (e.clientX - rect.left) / rect.width
        : 1 - (e.clientY - rect.top) / rect.height;
      
      const newVal = normalizeValue(min + percentage * (max - min));
      
      if (range) {
        const newRangeValue = [...(currentValue as [number, number])] as [number, number];
        newRangeValue[thumbIndex] = newVal;
        
        // Prevent handles from crossing
        if (thumbIndex === 0 && newRangeValue[0] > newRangeValue[1]) {
          newRangeValue[0] = newRangeValue[1];
        } else if (thumbIndex === 1 && newRangeValue[1] < newRangeValue[0]) {
          newRangeValue[1] = newRangeValue[0];
        }
        
        handleValueChange(newRangeValue);
      } else {
        handleValueChange(newVal);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      setActiveThumb(null);
      onChangeCommitted?.(currentValue);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [disabled, orientation, min, max, normalizeValue, range, currentValue, handleValueChange, onChangeCommitted]);

  const renderThumb = (thumbIndex: number, value: number) => {
    const percentage = getPercentage(value);
    const sizeConfig = getSizeValue(size);
    const colorValue = getColorValue(color);
    
    return (
      <div
        key={thumbIndex}
        ref={(el) => (thumbRefs.current[thumbIndex] = el)}
        className="cria-slider__thumb"
        style={{
          position: 'absolute',
          [orientation === 'horizontal' ? 'left' : 'top']: `${percentage}%`,
          [orientation === 'horizontal' ? 'top' : 'left']: '50%',
          transform: orientation === 'horizontal' 
            ? 'translate(-50%, -50%)' 
            : 'translate(-50%, 50%)',
          width: sizeConfig.thumb,
          height: sizeConfig.thumb,
          backgroundColor: colorValue,
          border: `2px solid ${colors.white}`,
          borderRadius: '50%',
          cursor: disabled ? 'not-allowed' : 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.2s ease',
          zIndex: activeThumb === thumbIndex ? 2 : 1,
          opacity: disabled ? 0.5 : 1,
        }}
        onMouseDown={(e) => handleMouseDown(e, thumbIndex)}
        onKeyDown={(e) => handleKeyDown(e, thumbIndex)}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
        aria-label={ariaLabel || `Slider ${thumbIndex + 1}`}
      >
        {showTooltip && (isDragging || activeThumb === thumbIndex) && (
          <div
            className="cria-slider__tooltip"
            style={{
              position: 'absolute',
              bottom: orientation === 'horizontal' ? '100%' : 'auto',
              top: orientation === 'vertical' ? '100%' : 'auto',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: colors.background.dark,
              color: colors.white,
              padding: '4px 8px',
              borderRadius: 4,
              fontSize: '12px',
              whiteSpace: 'nowrap',
              marginBottom: orientation === 'horizontal' ? 8 : 0,
              marginTop: orientation === 'vertical' ? 8 : 0,
              zIndex: 3,
            }}
          >
            {value}
          </div>
        )}
      </div>
    );
  };

  const renderTrack = () => {
    const sizeConfig = getSizeValue(size);
    const colorValue = getColorValue(color);
    
    if (range) {
      const [minVal, maxVal] = currentValue as [number, number];
      const minPercentage = getPercentage(minVal);
      const maxPercentage = getPercentage(maxVal);
      
      return (
        <>
          {/* Background track */}
          <div
            className="cria-slider__track-background"
            style={{
              position: 'absolute',
              [orientation === 'horizontal' ? 'top' : 'left']: '50%',
              [orientation === 'horizontal' ? 'left' : 'top']: 0,
              [orientation === 'horizontal' ? 'width' : 'height']: '100%',
              [orientation === 'horizontal' ? 'height' : 'width']: sizeConfig.track,
              [orientation === 'horizontal' ? 'marginTop' : 'marginLeft']: `-${sizeConfig.track / 2}px`,
              backgroundColor: colors.border.light,
              borderRadius: sizeConfig.track / 2,
            }}
          />
          {/* Active track */}
          <div
            className="cria-slider__track-active"
            style={{
              position: 'absolute',
              [orientation === 'horizontal' ? 'top' : 'left']: '50%',
              [orientation === 'horizontal' ? 'left' : 'top']: `${minPercentage}%`,
              [orientation === 'horizontal' ? 'width' : 'height']: `${maxPercentage - minPercentage}%`,
              [orientation === 'horizontal' ? 'height' : 'width']: sizeConfig.track,
              [orientation === 'horizontal' ? 'marginTop' : 'marginLeft']: `-${sizeConfig.track / 2}px`,
              backgroundColor: colorValue,
              borderRadius: sizeConfig.track / 2,
            }}
          />
        </>
      );
    } else {
      const percentage = getPercentage(currentValue as number);
      
      return (
        <>
          {/* Background track */}
          <div
            className="cria-slider__track-background"
            style={{
              position: 'absolute',
              [orientation === 'horizontal' ? 'top' : 'left']: '50%',
              [orientation === 'horizontal' ? 'left' : 'top']: 0,
              [orientation === 'horizontal' ? 'width' : 'height']: '100%',
              [orientation === 'horizontal' ? 'height' : 'width']: sizeConfig.track,
              [orientation === 'horizontal' ? 'marginTop' : 'marginLeft']: `-${sizeConfig.track / 2}px`,
              backgroundColor: colors.border.light,
              borderRadius: sizeConfig.track / 2,
            }}
          />
          {/* Active track */}
          <div
            className="cria-slider__track-active"
            style={{
              position: 'absolute',
              [orientation === 'horizontal' ? 'top' : 'left']: '50%',
              [orientation === 'horizontal' ? 'left' : 'top']: 0,
              [orientation === 'horizontal' ? 'width' : 'height']: `${percentage}%`,
              [orientation === 'horizontal' ? 'height' : 'width']: sizeConfig.track,
              [orientation === 'horizontal' ? 'marginTop' : 'marginLeft']: `-${sizeConfig.track / 2}px`,
              backgroundColor: colorValue,
              borderRadius: sizeConfig.track / 2,
            }}
          />
        </>
      );
    }
  };

  const renderMarks = () => {
    if (marks.length === 0) return null;
    
    return marks.map((mark, index) => {
      const percentage = getPercentage(mark.value);
      
      return (
        <div
          key={index}
          className="cria-slider__mark"
          style={{
            position: 'absolute',
            [orientation === 'horizontal' ? 'left' : 'top']: `${percentage}%`,
            [orientation === 'horizontal' ? 'top' : 'left']: '50%',
            transform: orientation === 'horizontal' 
              ? 'translate(-50%, -50%)' 
              : 'translate(-50%, 50%)',
            width: 8,
            height: 8,
            backgroundColor: colors.border.medium,
            borderRadius: '50%',
            zIndex: 0,
          }}
        >
          {mark.label && showLabels && (
            <div
              className="cria-slider__mark-label"
              style={{
                position: 'absolute',
                [orientation === 'horizontal' ? 'top' : 'left']: '100%',
                [orientation === 'horizontal' ? 'left' : 'top']: '50%',
                transform: orientation === 'horizontal' 
                  ? 'translateX(-50%)' 
                  : 'translateY(-50%)',
                marginTop: orientation === 'horizontal' ? 8 : 0,
                marginLeft: orientation === 'vertical' ? 8 : 0,
                fontSize: '12px',
                color: colors.text.secondary,
                whiteSpace: 'nowrap',
              }}
            >
              {mark.label}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      ref={sliderRef}
      className={["cria-slider", className].filter(Boolean).join(' ')}
      style={{
        position: 'relative',
        [orientation === 'horizontal' ? 'width' : 'height']: '100%',
        [orientation === 'horizontal' ? 'height' : 'width']: getSizeValue(size).thumbHover,
        padding: `${getSizeValue(size).thumbHover / 2}px 0`,
        ...style,
      }}
      {...props}
    >
      {renderTrack()}
      {renderMarks()}
      
      {range ? (
        <>
          {renderThumb(0, (currentValue as [number, number])[0])}
          {renderThumb(1, (currentValue as [number, number])[1])}
        </>
      ) : (
        renderThumb(0, currentValue as number)
      )}
    </div>
  );
};

export default Slider;
