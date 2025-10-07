import React from 'react';
import { typography, colors } from '../../tokens';

// Base Text component props
export interface BaseTextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Additional CSS class name
   */
  className?: string;
}

// TextBody component - default body text for UI copy
export interface TextBodyProps extends BaseTextProps {}

/**
 * TextBody component for default body text used in cards and UI copy
 * 
 * @example
 * ```tsx
 * <TextBody>Default body text</TextBody>
 * <TextBody as="p">Body text as paragraph</TextBody>
 * ```
 */
export const TextBody: React.FC<TextBodyProps> = ({
  as = 'span',
  children,
  className = '',
  ...props
}) => {
  const Element = as;

  const classes = [
    'cria-text',
    'cria-text--body',
    className,
  ].filter(Boolean).join(' ');

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
    color: colors.text.primary,
    margin: 0,
  };

  return (
    <Element className={classes} style={styles} {...(props as any)}>
      {children}
    </Element>
  );
};

// TextContent component - long-form content paragraphs
export interface TextContentProps extends BaseTextProps {}

/**
 * TextContent component for long-form content paragraphs
 * 
 * @example
 * ```tsx
 * <TextContent>Long-form content paragraph</TextContent>
 * <TextContent as="div">Content as div</TextContent>
 * ```
 */
export const TextContent: React.FC<TextContentProps> = ({
  as = 'p',
  children,
  className = '',
  ...props
}) => {
  const Element = as;

  const classes = [
    'cria-text',
    'cria-text--content',
    className,
  ].filter(Boolean).join(' ');

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.relaxed, // More readable for long content
    color: colors.text.primary,
    margin: 0,
  };

  return (
    <Element className={classes} style={styles} {...(props as any)}>
      {children}
    </Element>
  );
};

// TextContentTitle component - section titles in long content
export interface TextContentTitleProps extends BaseTextProps {}

/**
 * TextContentTitle component for section titles in long-form content
 * 
 * @example
 * ```tsx
 * <TextContentTitle>Section Title</TextContentTitle>
 * <TextContentTitle as="h2">Title as h2</TextContentTitle>
 * ```
 */
export const TextContentTitle: React.FC<TextContentTitleProps> = ({
  as = 'h3',
  children,
  className = '',
  ...props
}) => {
  const Element = as;

  const classes = [
    'cria-text',
    'cria-text--content-title',
    className,
  ].filter(Boolean).join(' ');

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.h3,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.normal,
    color: colors.text.primary,
    margin: 0,
  };

  return (
    <Element className={classes} style={styles} {...(props as any)}>
      {children}
    </Element>
  );
};

// TextContentImportant component - highlighted/emphasized text
export interface TextContentImportantProps extends BaseTextProps {}

/**
 * TextContentImportant component for highlighted/emphasized text
 * 
 * @example
 * ```tsx
 * <TextContentImportant>Important text</TextContentImportant>
 * <TextContentImportant as="strong">Important as strong</TextContentImportant>
 * ```
 */
export const TextContentImportant: React.FC<TextContentImportantProps> = ({
  as = 'span',
  children,
  className = '',
  ...props
}) => {
  const Element = as;

  const classes = [
    'cria-text',
    'cria-text--content-important',
    className,
  ].filter(Boolean).join(' ');

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    color: colors.text.primary,
    margin: 0,
  };

  return (
    <Element className={classes} style={styles} {...(props as any)}>
      {children}
    </Element>
  );
};

// Default export for convenience
export default TextBody;
