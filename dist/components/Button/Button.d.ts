import { default as React } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    /**
     * Button size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the button is in a loading state
     */
    loading?: boolean;
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Icon to display before the text
     */
    leftIcon?: React.ReactNode;
    /**
     * Icon to display after the text
     */
    rightIcon?: React.ReactNode;
    /**
     * Whether the button should take full width
     */
    fullWidth?: boolean;
    /**
     * Button content
     */
    children: React.ReactNode;
}
/**
 * Button component for user interactions
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map