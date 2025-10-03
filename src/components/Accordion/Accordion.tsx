import React, { useState, useCallback, useRef, createContext, useContext, useEffect } from 'react';
import { colors, spacing, radii, shadows } from '../../tokens';

// Context for accordion state
interface AccordionContextType {
  openItems: string[];
  allowMultiple: boolean;
  onToggle: (itemId: string) => void;
  size: 'sm' | 'md' | 'lg';
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Accordion variant
   */
  variant?: 'default' | 'bordered';
  /**
   * Accordion size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether multiple items can be open at once
   */
  allowMultiple?: boolean;
  /**
   * Array of item IDs that should be open by default
   */
  defaultOpenItems?: string[];
  /**
   * Array of item IDs that are currently open (controlled mode)
   */
  openItems?: string[];
  /**
   * Callback fired when open items change
   */
  onChange?: (openItems: string[]) => void;
  /**
   * Accordion content
   */
  children: React.ReactNode;
}

/**
 * Accordion component for collapsible content sections
 * 
 * @example
 * ```tsx
 * <Accordion allowMultiple={false}>
 *   <AccordionItem id="item1">
 *     <AccordionHeader>Section 1</AccordionHeader>
 *     <AccordionContent>Content for section 1</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export const Accordion: React.FC<AccordionProps> = ({
  variant = 'default',
  size = 'md',
  allowMultiple = true,
  defaultOpenItems = [],
  openItems,
  onChange,
  children,
  className = '',
  style,
  ...props
}) => {
  const [internalOpenItems, setInternalOpenItems] = useState<string[]>(defaultOpenItems);
  const accordionRef = useRef<HTMLDivElement>(null);
  const isControlled = openItems !== undefined;

  const currentOpenItems = isControlled ? openItems : internalOpenItems;

  const handleItemToggle = useCallback((itemId: string) => {
    const newOpenItems = currentOpenItems.includes(itemId)
      ? currentOpenItems.filter(id => id !== itemId)
      : allowMultiple
        ? [...currentOpenItems, itemId]
        : [itemId];

    if (!isControlled) {
      setInternalOpenItems(newOpenItems);
    }

    onChange?.(newOpenItems);
  }, [currentOpenItems, allowMultiple, isControlled, onChange]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!accordionRef.current) return;

    const headers = Array.from(
      accordionRef.current.querySelectorAll('[role="button"]')
    ) as HTMLButtonElement[];

    const currentIndex = headers.indexOf(event.target as HTMLButtonElement);
    if (currentIndex === -1) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % headers.length;
        headers[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? headers.length - 1 : currentIndex - 1;
        headers[prevIndex]?.focus();
        break;
    }
  }, []);

  // Build CSS classes
  const classes = [
    'cria-accordion',
    `cria-accordion--${variant}`,
    `cria-accordion--${size}`,
    className,
  ].filter(Boolean).join(' ');

  // Build inline styles
  const accordionStyles: React.CSSProperties = {
    ...getVariantStyles(variant),
    ...getSizeStyles(size),
    ...style,
  };

  const contextValue: AccordionContextType = {
    openItems: currentOpenItems,
    allowMultiple,
    onToggle: handleItemToggle,
    size,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        ref={accordionRef}
        className={classes}
        style={accordionStyles}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Helper function to get variant-specific styles
function getVariantStyles(variant: AccordionProps['variant']): React.CSSProperties {
  switch (variant) {
    case 'default':
      return {
        backgroundColor: 'transparent',
      };
    case 'bordered':
      return {
        backgroundColor: colors.backgroundLight,
        border: `1px solid ${colors.border.light}`,
        borderRadius: radii.md,
        overflow: 'hidden',
      };
    default:
      return {};
  }
}

// Helper function to get size-specific styles
function getSizeStyles(size: AccordionProps['size']): React.CSSProperties {
  switch (size) {
    case 'sm':
      return {
        fontSize: '14px',
      };
    case 'md':
      return {
        fontSize: '16px',
      };
    case 'lg':
      return {
        fontSize: '18px',
      };
    default:
      return {};
  }
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the accordion item
   */
  id: string;
  /**
   * Accordion item content
   */
  children: React.ReactNode;
}

/**
 * Accordion Item component
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  children,
  className = '',
  style,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const { openItems } = context;
  const isOpen = openItems.includes(id);

  const classes = [
    'cria-accordion-item',
    isOpen && 'cria-accordion-item--open',
    className,
  ].filter(Boolean).join(' ');

  const itemStyles: React.CSSProperties = {
    borderBottom: `1px solid ${colors.border.light}`,
    ...style,
  };

  return (
    <AccordionItemContext.Provider value={id}>
      <div
        className={classes}
        style={itemStyles}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Header content
   */
  children: React.ReactNode;
}

/**
 * Accordion Header component
 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionHeader must be used within an Accordion');
  }

  const { onToggle, size } = context;
  
  // Get the item ID from the parent AccordionItem
  const itemId = useContext(AccordionItemContext);
  if (!itemId) {
    throw new Error('AccordionHeader must be used within an AccordionItem');
  }

  const isOpen = context.openItems.includes(itemId);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    onToggle(itemId);
  }, [onClick, itemId, onToggle]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle(itemId);
    }
  }, [itemId, onToggle]);

  const classes = [
    'cria-accordion-header',
    `cria-accordion-header--${size}`,
    className,
  ].filter(Boolean).join(' ');

  const headerStyles: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: getHeaderPadding(size),
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--cria-font-family)',
    fontWeight: 500,
    color: colors.text.primary,
    textAlign: 'left',
    transition: 'all 0.2s ease-in-out',
    ...style,
  };

  return (
    <button
      id={`${itemId}-header`}
      className={classes}
      style={headerStyles}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-controls={`${itemId}-content`}
      role="button"
      {...props}
    >
      <span>{children}</span>
      <span
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease-in-out',
          fontSize: '14px',
        }}
        aria-hidden="true"
      >
        ▼
      </span>
    </button>
  );
};

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content
   */
  children: React.ReactNode;
}

// Context for passing item ID to header and content
const AccordionItemContext = createContext<string | null>(null);

/**
 * Accordion Content component
 */
export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
  style,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionContent must be used within an Accordion');
  }

  const itemId = useContext(AccordionItemContext);
  if (!itemId) {
    throw new Error('AccordionContent must be used within an AccordionItem');
  }

  const isOpen = context.openItems.includes(itemId);

  const classes = [
    'cria-accordion-content',
    className,
  ].filter(Boolean).join(' ');

  const contentStyles: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    ...style,
  };

  return (
    <div
      id={`${itemId}-content`}
      className={classes}
      style={contentStyles}
      aria-labelledby={`${itemId}-header`}
      role="region"
      {...props}
    >
      <div style={{ padding: getContentPadding() }}>
        {children}
      </div>
    </div>
  );
};

// Helper function to get header padding based on size
function getHeaderPadding(size: 'sm' | 'md' | 'lg'): string {
  switch (size) {
    case 'sm':
      return `${spacing[2]} ${spacing[3]}`;
    case 'md':
      return `${spacing[3]} ${spacing[4]}`;
    case 'lg':
      return `${spacing[4]} ${spacing[5]}`;
    default:
      return `${spacing[3]} ${spacing[4]}`;
  }
}

// Helper function to get content padding
function getContentPadding(): string {
  return `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`;
}

export default Accordion;