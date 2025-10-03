import { default as React } from 'react';
import { TypographyVariant } from '../../tokens';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The typography variant to use
     */
    variant?: TypographyVariant;
    /**
     * The HTML element to render
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Text color variant
     */
    color?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryDark' | 'disabled' | 'inverse' | 'success' | 'warning' | 'error' | 'info';
    /**
     * Font weight
     */
    weight?: 'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'heavy';
    /**
     * Line height
     */
    lineHeight?: 'tight' | 'normal' | 'relaxed';
    /**
     * Letter spacing
     */
    letterSpacing?: 'tight' | 'normal' | 'wide';
    /**
     * Text alignment
     */
    align?: 'left' | 'center' | 'right' | 'justify';
    /**
     * Text content
     */
    children: React.ReactNode;
}
/**
 * Typography component for consistent text styling across the design system
 *
 * @example
 * ```tsx
 * <Typography variant="h1" color="primary">
 *   Welcome to CRIA
 * </Typography>
 * ```
 */
export declare const Typography: React.FC<TypographyProps>;
export default Typography;
//# sourceMappingURL=Typography.d.ts.map