import React, { forwardRef, useMemo } from 'react';

export interface BreadcrumbItem {
  /**
   * Label text for the breadcrumb item
   */
  label: string;
  
  /**
   * URL for the breadcrumb link (optional)
   */
  href?: string;
  
  /**
   * Click handler for the breadcrumb item
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => void;
  
  /**
   * Icon to display before the label
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the breadcrumb item is disabled
   */
  disabled?: boolean;
  
  /**
   * Custom class name for the item
   */
  className?: string;
}

export interface BreadcrumbsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  
  /**
   * Separator between breadcrumb items
   */
  separator?: string | React.ReactNode;
  
  /**
   * Maximum number of items to show before truncating
   */
  maxItems?: number;
  
  /**
   * Custom aria-label for the navigation element
   */
  ariaLabel?: string;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

/**
 * Breadcrumbs component for navigation hierarchy display
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(({
  items,
  separator = '/',
  maxItems,
  ariaLabel = 'Breadcrumb',
  className = '',
  style,
  ...props
}, ref) => {
  // Truncate items if maxItems is specified and we have more items than maxItems
  const displayItems = useMemo(() => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    // Always show first item and last item
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    
    // Calculate how many items to show after ellipsis
    const itemsAfterEllipsis = Math.max(1, maxItems - 2); // -2 for first item and ellipsis
    const lastItems = items.slice(-itemsAfterEllipsis);
    
    return [
      firstItem,
      { label: '...', disabled: true, className: 'cria-breadcrumbs__item--ellipsis' },
      ...lastItems
    ];
  }, [items, maxItems]);

  // Generate CSS classes
  const breadcrumbClasses = [
    'cria-breadcrumbs',
    className,
  ].filter(Boolean).join(' ');

  const renderSeparator = (index: number) => {
    if (index === displayItems.length - 1) return null;
    
    return (
      <li
        key={`separator-${index}`}
        className="cria-breadcrumbs__separator"
        aria-hidden="true"
      >
        {separator}
      </li>
    );
  };

  const renderItem = (item: BreadcrumbItem, index: number) => {
    const isLast = index === displayItems.length - 1;
    const isDisabled = item.disabled;
    
    const itemClasses = [
      'cria-breadcrumbs__item',
      isLast && 'cria-breadcrumbs__item--current',
      isDisabled && 'cria-breadcrumbs__item--disabled',
      item.className,
    ].filter(Boolean).join(' ');

    const content = (
      <>
        {item.icon && (
          <span className="cria-breadcrumbs__icon" aria-hidden="true">
            {item.icon}
          </span>
        )}
        <span className="cria-breadcrumbs__label">{item.label}</span>
      </>
    );

    // Render as link if it has href and is not disabled and not the last item
    // For single items with href, render as link even if it's the last item
    if (item.href && !isDisabled && (!isLast || displayItems.length === 1)) {
      return (
        <li key={index} className={itemClasses}>
          <a
            href={item.href}
            className="cria-breadcrumbs__link"
            onClick={item.onClick}
            tabIndex={isDisabled ? -1 : undefined}
            aria-disabled={isDisabled ? 'true' : undefined}
          >
            {content}
          </a>
        </li>
      );
    }

    // Render as span for last item or items without href
    return (
      <li key={index} className={itemClasses}>
        <span
          className={isLast ? 'cria-breadcrumbs__current' : 'cria-breadcrumbs__text'}
          onClick={item.onClick}
          aria-current={isLast ? 'page' : undefined}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {content}
        </span>
      </li>
    );
  };

  if (items.length === 0) {
    return (
      <nav
        ref={ref}
        className={breadcrumbClasses}
        aria-label={ariaLabel}
        style={style}
        {...props}
      />
    );
  }

  return (
    <nav
      ref={ref}
      className={breadcrumbClasses}
      aria-label={ariaLabel}
      style={style}
      {...props}
    >
      <ol className="cria-breadcrumbs__list">
        {displayItems.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item, index)}
            {renderSeparator(index)}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
