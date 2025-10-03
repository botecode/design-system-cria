import { default as React } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Card variant
     */
    variant?: 'default' | 'elevated' | 'outlined' | 'filled';
    /**
     * Card size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the card is interactive (clickable)
     */
    interactive?: boolean;
    /**
     * Whether the card is disabled
     */
    disabled?: boolean;
    /**
     * Card content
     */
    children: React.ReactNode;
}
/**
 * Card component for grouping related content
 *
 * @example
 * ```tsx
 * <Card variant="elevated" size="md">
 *   <CardHeader>Title</CardHeader>
 *   <CardContent>Content goes here</CardContent>
 * </Card>
 * ```
 */
export declare const Card: React.FC<CardProps>;
/**
 * Card Header component
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const CardHeader: React.FC<CardHeaderProps>;
/**
 * Card Content component
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const CardContent: React.FC<CardContentProps>;
/**
 * Card Footer component
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const CardFooter: React.FC<CardFooterProps>;
export default Card;
//# sourceMappingURL=Card.d.ts.map