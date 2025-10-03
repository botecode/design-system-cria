import { default as React } from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Badge variant
     */
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    /**
     * Badge size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Badge style
     */
    badgeStyle?: 'solid' | 'outline' | 'soft';
    /**
     * Whether the badge is interactive (clickable)
     */
    interactive?: boolean;
    /**
     * Whether the badge is disabled
     */
    disabled?: boolean;
    /**
     * Badge content
     */
    children: React.ReactNode;
    /**
     * Optional icon to display before the text
     */
    leftIcon?: React.ReactNode;
    /**
     * Optional icon to display after the text
     */
    rightIcon?: React.ReactNode;
    /**
     * Maximum number of characters to display (for count badges)
     */
    maxCount?: number;
    /**
     * Whether to show a dot instead of text (for notification badges)
     */
    dot?: boolean;
}
/**
 * Badge component for displaying status, counts, and labels
 */
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map