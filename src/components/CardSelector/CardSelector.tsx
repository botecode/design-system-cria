import React, { useState, useEffect } from 'react';
import { Card } from '../Card';
import { Checkbox } from '../Checkbox';
import { RadioGroup } from '../RadioGroup';
import { Typography } from '../Typography';
import { colors, spacing, typography } from '../../tokens';

export type SelectionMode = 'single' | 'multi';
export type CardLayout = 'grid' | 'list';
export type CardSize = 'sm' | 'md' | 'lg';
export type CardSpacing = 'sm' | 'md' | 'lg';
export type CardOrientation = 'horizontal' | 'vertical';
export type CardVariant = 'default' | 'outlined' | 'elevated';

export interface CardItem {
  id: string;
  title: string;
  description?: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  image?: string;
  badge?: string;
  price?: string;
  features?: string[];
  [key: string]: any;
}

export interface CardSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardItem[];
  mode?: SelectionMode;
  selectedValues?: string[];
  onChange?: (selectedValues: string[]) => void;
  onCardClick?: (card: CardItem) => void;
  layout?: CardLayout;
  size?: CardSize;
  spacing?: CardSpacing;
  orientation?: CardOrientation;
  variant?: CardVariant;
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
  name?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  error?: string;
  helpText?: string;
  maxSelections?: number;
  minSelections?: number;
  cardRenderer?: (card: CardItem, isSelected: boolean, isDisabled: boolean) => React.ReactNode;
}

export const CardSelector: React.FC<CardSelectorProps> = ({
  cards = [],
  mode = 'single',
  selectedValues = [],
  onChange,
  onCardClick,
  layout = 'grid',
  size = 'md',
  spacing = 'md',
  orientation = 'horizontal',
  variant = 'default',
  disabled = false,
  loading = false,
  required = false,
  name = 'card-selector',
  ariaLabel,
  ariaLabelledBy,
  error,
  helpText,
  maxSelections,
  minSelections,
  cardRenderer,
  className = '',
  style,
  ...props
}) => {
  const [internalSelectedValues, setInternalSelectedValues] = useState<string[]>(selectedValues);

  // Sync internal state with external selectedValues prop
  useEffect(() => {
    setInternalSelectedValues(selectedValues);
  }, [selectedValues]);

  const handleSelectionChange = (value: string, checked: boolean) => {
    let newSelectedValues: string[];

    if (mode === 'single') {
      newSelectedValues = checked ? [value] : [];
    } else {
      if (checked) {
        // Add to selection
        newSelectedValues = [...internalSelectedValues, value];
        
        // Check max selections limit
        if (maxSelections && newSelectedValues.length > maxSelections) {
          return; // Don't allow selection if it exceeds max
        }
      } else {
        // Remove from selection
        newSelectedValues = internalSelectedValues.filter(v => v !== value);
        
        // Check min selections limit
        if (minSelections && newSelectedValues.length < minSelections) {
          return; // Don't allow deselection if it goes below min
        }
      }
    }

    setInternalSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  const handleCardClick = (card: CardItem) => {
    if (disabled || loading || card.disabled) return;
    
    onCardClick?.(card);
    
    // Toggle selection on card click
    const isSelected = internalSelectedValues.includes(card.value);
    handleSelectionChange(card.value, !isSelected);
  };

  const handleKeyDown = (event: React.KeyboardEvent, card: CardItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(card);
    }
  };

  // Generate CSS classes
  const baseClass = 'cria-card-selector';
  const classes = [
    baseClass,
    `${baseClass}--${layout}`,
    `${baseClass}--${size}`,
    `${baseClass}--spacing-${spacing}`,
    `${baseClass}--${orientation}`,
    `${baseClass}--${variant}`,
    disabled && `${baseClass}--disabled`,
    loading && `${baseClass}--loading`,
    error && `${baseClass}--error`,
    className,
  ].filter(Boolean).join(' ');

  // Default card renderer
  const defaultCardRenderer = (card: CardItem, isSelected: boolean, isDisabled: boolean) => (
    <Card
      style={{
        cursor: disabled || loading || card.disabled ? 'not-allowed' : 'pointer',
        opacity: disabled || loading || card.disabled ? 0.6 : 1,
        border: isSelected ? `2px solid ${colors.primary}` : `1px solid ${colors.border.medium}`,
        backgroundColor: isSelected ? colors.background.secondary : colors.background.primary,
        transition: 'all 0.2s ease',
        position: 'relative',
      }}
      onClick={() => handleCardClick(card)}
      onKeyDown={(e) => handleKeyDown(e, card)}
      tabIndex={disabled || loading || card.disabled ? -1 : 0}
      role="button"
      aria-pressed={isSelected}
      aria-disabled={disabled || loading || card.disabled}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.sm }}>
        {/* Selection indicator */}
        <div style={{ marginTop: '4px', flexShrink: 0 }}>
          {mode === 'single' ? (
            <input
              type="radio"
              name={name}
              value={card.value}
              checked={isSelected}
              onChange={() => handleSelectionChange(card.value, true)}
              disabled={disabled || loading || card.disabled}
              style={{ margin: 0 }}
              aria-label={card.title}
            />
          ) : (
            <Checkbox
              checked={isSelected}
              onChange={(checked) => handleSelectionChange(card.value, checked)}
              disabled={disabled || loading || card.disabled}
              aria-label={card.title}
            />
          )}
        </div>

        {/* Card content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Badge */}
          {card.badge && (
            <div style={{
              position: 'absolute',
              top: spacing.sm,
              right: spacing.sm,
              backgroundColor: colors.primary,
              color: colors.white,
              padding: `${spacing.xs} ${spacing.sm}`,
              borderRadius: '4px',
              fontSize: typography.fontSize.caption,
              fontWeight: typography.fontWeight.semiBold,
            }}>
              {card.badge}
            </div>
          )}

          {/* Title */}
          <Typography
            variant="h3"
            weight="semiBold"
            style={{
              marginBottom: spacing.xs,
              color: colors.text.primary,
            }}
          >
            {card.title}
          </Typography>

          {/* Description */}
          {card.description && (
            <Typography
              variant="body"
              style={{
                marginBottom: spacing.sm,
                color: colors.text.secondary,
              }}
            >
              {card.description}
            </Typography>
          )}

          {/* Price */}
          {card.price && (
            <Typography
              variant="h2"
              weight="bold"
              style={{
                marginBottom: spacing.sm,
                color: colors.primary,
              }}
            >
              {card.price}
            </Typography>
          )}

          {/* Features */}
          {card.features && card.features.length > 0 && (
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginBottom: spacing.sm,
            }}>
              {card.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: spacing.xs,
                    color: colors.text.primary,
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: colors.success,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: spacing.sm,
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: colors.white, fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                  </div>
                  <Typography variant="body2" style={{ color: colors.text.primary }}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          )}

          {/* Icon */}
          {card.icon && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: spacing.sm,
            }}>
              {card.icon}
            </div>
          )}

          {/* Image */}
          {card.image && (
            <div style={{
              width: '100%',
              height: '120px',
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              marginBottom: spacing.sm,
            }} />
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <div
      className={classes}
      style={style}
      role="group"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-required={required}
      {...props}
    >
      {/* Error message */}
      {error && (
        <Typography
          variant="caption"
          style={{
            color: colors.error,
            marginBottom: spacing.sm,
            display: 'block',
          }}
          className="cria-card-selector__error"
        >
          {error}
        </Typography>
      )}

      {/* Help text */}
      {helpText && (
        <Typography
          variant="body2"
          style={{
            color: colors.text.secondary,
            marginBottom: spacing.md,
            display: 'block',
          }}
          className="cria-card-selector__help"
        >
          {helpText}
        </Typography>
      )}

      {/* Cards container */}
      <div className="cria-card-selector__cards">
        {cards.map((card) => {
          const isSelected = internalSelectedValues.includes(card.value);
          const isDisabled = disabled || loading || card.disabled;

          return (
            <div key={card.id} className="cria-card-selector__card">
              {cardRenderer
                ? cardRenderer(card, isSelected, isDisabled)
                : defaultCardRenderer(card, isSelected, isDisabled)
              }
            </div>
          );
        })}
      </div>

      {/* Loading overlay */}
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <Typography variant="body" style={{ color: colors.text.secondary }}>
            Loading...
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CardSelector;
