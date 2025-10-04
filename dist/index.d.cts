import * as React from 'react';
import React__default from 'react';

/**
 * CRIA Design System - Color Tokens
 *
 * Semantic color system based on CRIA brand colors
 */
declare const colors: {
    readonly primary: "#7566A1";
    readonly primaryLight: "#9E9AD9";
    readonly primaryDarker: "#3A2E52";
    readonly primaryDark: "#2A1F3A";
    readonly secondary: "#28DDB9";
    readonly secondaryDark: "#167B7A";
    readonly background: "#F2F4F3";
    readonly backgroundLight: "#FFFFFF";
    readonly backgroundDark: "#1A1A1A";
    readonly white: "#FFFFFF";
    readonly black: "#000000";
    readonly gray: {
        readonly 50: "#F9FAFB";
        readonly 100: "#F3F4F6";
        readonly 200: "#E5E7EB";
        readonly 300: "#D1D5DB";
        readonly 400: "#9CA3AF";
        readonly 500: "#6B7280";
        readonly 600: "#4B5563";
        readonly 700: "#374151";
        readonly 800: "#1F2937";
        readonly 900: "#111827";
    };
    readonly success: "#10B981";
    readonly warning: "#D97706";
    readonly error: "#DC2626";
    readonly info: "#3B82F6";
    readonly text: {
        readonly primary: "#374151";
        readonly content: "#3A2E52";
        readonly secondary: "#6B7280";
        readonly disabled: "#9CA3AF";
        readonly inverse: "#FFFFFF";
    };
    readonly border: {
        readonly light: "#E5E7EB";
        readonly medium: "#D1D5DB";
        readonly dark: "#9CA3AF";
    };
};
type ColorToken = keyof typeof colors;
type GrayScale = keyof typeof colors.gray;
type TextColor = keyof typeof colors.text;
type BorderColor = keyof typeof colors.border;

/**
 * CRIA Design System - Spacing Tokens
 *
 * 4px grid system for consistent spacing
 */
declare const spacing: {
    readonly 0: "0px";
    readonly 1: "4px";
    readonly 2: "8px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 8: "32px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
    readonly 32: "128px";
    readonly 40: "160px";
    readonly 48: "192px";
    readonly 56: "224px";
    readonly 64: "256px";
};
type SpacingToken = keyof typeof spacing;

/**
 * CRIA Design System - Typography Tokens
 *
 * Type scale using Cartograph font family
 */
declare const typography: {
    readonly fontFamily: {
        readonly primary: "\"Cartograph CF\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
        readonly mono: "\"SF Mono\", Monaco, \"Cascadia Code\", \"Roboto Mono\", Consolas, \"Courier New\", monospace";
    };
    readonly fontSize: {
        readonly display: "48px";
        readonly h1: "32px";
        readonly h2: "24px";
        readonly h3: "20px";
        readonly title1: "32px";
        readonly title2: "24px";
        readonly title3: "20px";
        readonly body: "16px";
        readonly bodySmall: "14px";
        readonly caption: "12px";
    };
    readonly fontWeight: {
        readonly thin: 100;
        readonly extraLight: 200;
        readonly light: 300;
        readonly regular: 400;
        readonly medium: 500;
        readonly semiBold: 600;
        readonly bold: 700;
        readonly extraBold: 800;
        readonly heavy: 900;
    };
    readonly lineHeight: {
        readonly tight: 1.2;
        readonly normal: 1.5;
        readonly relaxed: 1.75;
    };
    readonly letterSpacing: {
        readonly tight: "-0.025em";
        readonly normal: "0em";
        readonly wide: "0.025em";
    };
};
type TypographyVariant = keyof typeof typography.fontSize;
type FontWeight = keyof typeof typography.fontWeight;
type LineHeight = keyof typeof typography.lineHeight;
type LetterSpacing = keyof typeof typography.letterSpacing;

/**
 * CRIA Design System - Border Radius Tokens
 */
declare const radii: {
    readonly none: "0px";
    readonly sm: "4px";
    readonly md: "8px";
    readonly lg: "16px";
    readonly full: "9999px";
};
type RadiusToken = keyof typeof radii;

/**
 * CRIA Design System - Shadow Tokens
 *
 * Subtle depth system for layering
 */
declare const shadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
    readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
    readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
    readonly inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
};
type ShadowToken = keyof typeof shadows;

/**
 * CRIA Design System - Design Tokens
 *
 * Central export for all design tokens
 */

declare const cssVariables: {
    readonly '--cria-primary': "#7566A1";
    readonly '--cria-primary-light': "#3A2E52";
    readonly '--cria-primary-dark': "#2A1F3A";
    readonly '--cria-secondary': "#28DDB9";
    readonly '--cria-secondary-dark': "#167B7A";
    readonly '--cria-background': "#F2F4F3";
    readonly '--cria-background-light': "#FFFFFF";
    readonly '--cria-background-dark': "#1A1A1A";
    readonly '--cria-text-primary': "#111827";
    readonly '--cria-text-secondary': "#6B7280";
    readonly '--cria-text-disabled': "#9CA3AF";
    readonly '--cria-text-inverse': "#FFFFFF";
    readonly '--cria-border-light': "#E5E7EB";
    readonly '--cria-border-medium': "#D1D5DB";
    readonly '--cria-border-dark': "#9CA3AF";
    readonly '--cria-success': "#10B981";
    readonly '--cria-warning': "#F59E0B";
    readonly '--cria-error': "#EF4444";
    readonly '--cria-info': "#3B82F6";
    readonly '--cria-font-family': "\"Cartograph CF\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
    readonly '--cria-font-size-display': "48px";
    readonly '--cria-font-size-h1': "32px";
    readonly '--cria-font-size-h2': "24px";
    readonly '--cria-font-size-h3': "20px";
    readonly '--cria-font-size-title1': "32px";
    readonly '--cria-font-size-title2': "24px";
    readonly '--cria-font-size-title3': "20px";
    readonly '--cria-font-size-body': "16px";
    readonly '--cria-font-size-body-small': "14px";
    readonly '--cria-font-size-caption': "12px";
    readonly '--cria-spacing-1': "4px";
    readonly '--cria-spacing-2': "8px";
    readonly '--cria-spacing-3': "12px";
    readonly '--cria-spacing-4': "16px";
    readonly '--cria-spacing-5': "20px";
    readonly '--cria-spacing-6': "24px";
    readonly '--cria-spacing-8': "32px";
    readonly '--cria-spacing-10': "40px";
    readonly '--cria-spacing-12': "48px";
    readonly '--cria-spacing-16': "64px";
    readonly '--cria-spacing-20': "80px";
    readonly '--cria-spacing-24': "96px";
    readonly '--cria-radius-sm': "4px";
    readonly '--cria-radius-md': "8px";
    readonly '--cria-radius-lg': "16px";
    readonly '--cria-radius-full': "9999px";
    readonly '--cria-shadow-sm': "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
    readonly '--cria-shadow-md': "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    readonly '--cria-shadow-lg': "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
};

interface AccordionProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
    children: React__default.ReactNode;
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
declare const Accordion: React__default.FC<AccordionProps>;
interface AccordionItemProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Unique identifier for the accordion item
     */
    id: string;
    /**
     * Accordion item content
     */
    children: React__default.ReactNode;
}
/**
 * Accordion Item component
 */
declare const AccordionItem: React__default.FC<AccordionItemProps>;
interface AccordionHeaderProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Header content
     */
    children: React__default.ReactNode;
}
/**
 * Accordion Header component
 */
declare const AccordionHeader: React__default.FC<AccordionHeaderProps>;
interface AccordionContentProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Content
     */
    children: React__default.ReactNode;
}
/**
 * Accordion Content component
 */
declare const AccordionContent: React__default.FC<AccordionContentProps>;

interface BadgeProps extends React__default.HTMLAttributes<HTMLSpanElement> {
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
    children: React__default.ReactNode;
    /**
     * Optional icon to display before the text
     */
    leftIcon?: React__default.ReactNode;
    /**
     * Optional icon to display after the text
     */
    rightIcon?: React__default.ReactNode;
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
declare const Badge: React__default.FC<BadgeProps>;

interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
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
    leftIcon?: React__default.ReactNode;
    /**
     * Icon to display after the text
     */
    rightIcon?: React__default.ReactNode;
    /**
     * Whether the button should take full width
     */
    fullWidth?: boolean;
    /**
     * Button content
     */
    children: React__default.ReactNode;
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
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

/**
 * Button component demo
 */
declare const ButtonDemo: React__default.FC;

interface CardProps extends React__default.HTMLAttributes<HTMLDivElement> {
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
    children: React__default.ReactNode;
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
declare const Card: React__default.FC<CardProps>;
/**
 * Card Header component
 */
interface CardHeaderProps extends React__default.HTMLAttributes<HTMLDivElement> {
    children: React__default.ReactNode;
}
declare const CardHeader: React__default.FC<CardHeaderProps>;
/**
 * Card Content component
 */
interface CardContentProps extends React__default.HTMLAttributes<HTMLDivElement> {
    children: React__default.ReactNode;
}
declare const CardContent: React__default.FC<CardContentProps>;
/**
 * Card Footer component
 */
interface CardFooterProps extends React__default.HTMLAttributes<HTMLDivElement> {
    children: React__default.ReactNode;
}
declare const CardFooter: React__default.FC<CardFooterProps>;

/**
 * Card component demo
 */
declare const CardDemo: React__default.FC;

interface CheckboxProps {
    /** Whether the checkbox is checked */
    checked?: boolean;
    /** Whether the checkbox is in an indeterminate state */
    indeterminate?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Whether the checkbox is required */
    required?: boolean;
    /** Whether the checkbox is read-only */
    readOnly?: boolean;
    /** The label text for the checkbox */
    label?: string;
    /** Helper text displayed below the checkbox */
    helperText?: string;
    /** Error message displayed below the checkbox */
    errorMessage?: string;
    /** Warning message displayed below the checkbox */
    warningMessage?: string;
    /** The size of the checkbox */
    size?: 'sm' | 'md' | 'lg';
    /** The variant style of the checkbox */
    variant?: 'default' | 'filled' | 'outlined';
    /** The color theme of the checkbox */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: React__default.CSSProperties;
    /** Change handler */
    onChange?: (checked: boolean, event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /** Click handler */
    onClick?: (event: React__default.MouseEvent<HTMLInputElement>) => void;
    /** Focus handler */
    onFocus?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    /** Blur handler */
    onBlur?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    /** The value of the checkbox (for form handling) */
    value?: string;
    /** The name of the checkbox (for form handling) */
    name?: string;
    /** The id of the checkbox */
    id?: string;
    /** Additional props for the input element */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
}
interface CheckboxRef {
    /** Focus the checkbox */
    focus: () => void;
    /** Blur the checkbox */
    blur: () => void;
    /** Get the current checked state */
    getChecked: () => boolean;
    /** Set the checked state */
    setChecked: (checked: boolean) => void;
}
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<CheckboxRef>>;

interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Input label
     */
    label?: string;
    /**
     * Input placeholder
     */
    placeholder?: string;
    /**
     * Input size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Input variant
     */
    variant?: 'default' | 'filled' | 'outlined' | 'underlined';
    /**
     * Input state
     */
    state?: 'default' | 'success' | 'warning' | 'error';
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * Whether the input is required
     */
    required?: boolean;
    /**
     * Whether the input is read-only
     */
    readOnly?: boolean;
    /**
     * Whether to show password toggle for password inputs
     */
    showPasswordToggle?: boolean;
    /**
     * Whether to show clear button
     */
    showClearButton?: boolean;
    /**
     * Whether to show character count
     */
    showCharacterCount?: boolean;
    /**
     * Maximum character count
     */
    maxLength?: number;
    /**
     * Helper text
     */
    helperText?: string;
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * Success message
     */
    successMessage?: string;
    /**
     * Warning message
     */
    warningMessage?: string;
    /**
     * Left icon
     */
    leftIcon?: React__default.ReactNode;
    /**
     * Right icon
     */
    rightIcon?: React__default.ReactNode;
    /**
     * Custom class name for the input container
     */
    className?: string;
    /**
     * Custom styles for the input container
     */
    style?: React__default.CSSProperties;
    /**
     * Callback fired when the input value changes
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the input is cleared
     */
    onClear?: () => void;
    /**
     * Callback fired when the input is focused
     */
    onFocus?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the input is blurred
     */
    onBlur?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
}
interface InputRef {
    focus: () => void;
    blur: () => void;
    select: () => void;
    getValue: () => string;
    setValue: (value: string) => void;
}
/**
 * Input component for text input with various states and features
 */
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<InputRef>>;

interface ModalProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Whether the modal is open
     */
    isOpen: boolean;
    /**
     * Callback fired when the modal should be closed
     */
    onClose: () => void;
    /**
     * Modal title
     */
    title?: React__default.ReactNode;
    /**
     * Modal content
     */
    children: React__default.ReactNode;
    /**
     * Modal size
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /**
     * Whether to show the close button
     */
    showCloseButton?: boolean;
    /**
     * Whether to close modal when clicking overlay
     */
    closeOnOverlayClick?: boolean;
    /**
     * Whether to close modal when pressing Escape key
     */
    closeOnEscape?: boolean;
    /**
     * Whether to lock body scroll when modal is open
     */
    lockBodyScroll?: boolean;
    /**
     * Whether the modal is centered vertically
     */
    centered?: boolean;
    /**
     * Custom class name for the modal
     */
    className?: string;
    /**
     * Custom styles for the modal
     */
    style?: React__default.CSSProperties;
    /**
     * Footer content (buttons, etc.)
     */
    footer?: React__default.ReactNode;
    /**
     * Whether to show the modal header
     */
    showHeader?: boolean;
    /**
     * Whether to show the modal footer
     */
    showFooter?: boolean;
    /**
     * Custom overlay class name
     */
    overlayClassName?: string;
    /**
     * Custom overlay styles
     */
    overlayStyle?: React__default.CSSProperties;
    /**
     * Whether the modal is scrollable
     */
    scrollable?: boolean;
    /**
     * Animation duration in milliseconds
     */
    animationDuration?: number;
}
/**
 * Modal component for displaying content in an overlay
 */
declare const Modal: React__default.FC<ModalProps>;

interface NavigationItem {
    /**
     * Unique identifier for the navigation item
     */
    id: string;
    /**
     * Label to display in the navigation
     */
    label: string;
    /**
     * URL or path for the navigation item
     */
    href: string;
    /**
     * Icon to display alongside the label
     */
    icon?: React__default.ReactNode;
    /**
     * Whether the item is disabled
     */
    disabled?: boolean;
    /**
     * Badge or count to display
     */
    badge?: React__default.ReactNode;
    /**
     * Click handler for the navigation item
     */
    onClick?: (event: React__default.MouseEvent<HTMLAnchorElement>) => void;
}
interface SidebarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Array of navigation items
     */
    items: NavigationItem[];
    /**
     * Currently active route
     */
    activeRoute?: string;
    /**
     * Whether the sidebar is collapsed
     */
    collapsed?: boolean;
    /**
     * Callback when sidebar toggle is triggered
     */
    onToggle?: (collapsed: boolean) => void;
    /**
     * Whether to show the toggle button
     */
    showToggle?: boolean;
}
interface TopbarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Array of navigation items
     */
    items: NavigationItem[];
    /**
     * Currently active route
     */
    activeRoute?: string;
    /**
     * Brand/logo text
     */
    brand?: string;
    /**
     * Brand/logo link URL
     */
    brandHref?: string;
    /**
     * Whether to show mobile menu
     */
    showMobileMenu?: boolean;
    /**
     * Callback when mobile menu toggle is triggered
     */
    onMobileMenuToggle?: (open: boolean) => void;
}
interface NavigationProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Sidebar configuration
     */
    sidebar?: SidebarProps;
    /**
     * Topbar configuration
     */
    topbar?: TopbarProps;
    /**
     * Layout variant
     */
    variant?: 'sidebar-only' | 'topbar-only' | 'both';
}
declare const Sidebar: React__default.FC<SidebarProps>;
declare const Topbar: React__default.FC<TopbarProps>;
declare const Navigation: React__default.FC<NavigationProps>;

type SnackbarVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
type SnackbarPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface SnackbarAction {
    label: string;
    onClick: () => void;
}
interface SnackbarProps {
    /** The message to display */
    message: string;
    /** Whether the snackbar is open */
    open: boolean;
    /** Optional title */
    title?: string;
    /** The variant/type of snackbar */
    variant?: SnackbarVariant;
    /** The position of the snackbar */
    position?: SnackbarPosition;
    /** Auto-hide duration in milliseconds (0 = no auto-hide) */
    autoHideDuration?: number;
    /** Whether the snackbar can be dismissed by clicking outside */
    dismissible?: boolean;
    /** Optional action button */
    action?: SnackbarAction;
    /** Optional icon */
    icon?: React.ReactNode;
    /** Callback when the snackbar is closed */
    onClose?: () => void;
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Additional props */
    [key: string]: any;
}
interface SnackbarRef {
    /** Close the snackbar */
    close: () => void;
}
declare const Snackbar: React.ForwardRefExoticComponent<Omit<SnackbarProps, "ref"> & React.RefAttributes<SnackbarRef>>;

interface SwitchProps {
    /** Whether the switch is on/checked */
    checked?: boolean;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Whether the switch is required */
    required?: boolean;
    /** Whether the switch is read-only */
    readOnly?: boolean;
    /** The label text for the switch */
    label?: string;
    /** Helper text displayed below the switch */
    helperText?: string;
    /** Error message displayed below the switch */
    errorMessage?: string;
    /** Warning message displayed below the switch */
    warningMessage?: string;
    /** The size of the switch */
    size?: 'sm' | 'md' | 'lg';
    /** The variant style of the switch */
    variant?: 'default' | 'filled' | 'outlined';
    /** The color theme of the switch */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: React__default.CSSProperties;
    /** Change handler */
    onChange?: (checked: boolean, event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /** Click handler */
    onClick?: (event: React__default.MouseEvent<HTMLInputElement>) => void;
    /** Focus handler */
    onFocus?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    /** Blur handler */
    onBlur?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    /** The value of the switch (for form handling) */
    value?: string;
    /** The name of the switch (for form handling) */
    name?: string;
    /** The id of the switch */
    id?: string;
    /** Additional props for the input element */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
}
interface SwitchRef {
    /** Focus the switch */
    focus: () => void;
    /** Blur the switch */
    blur: () => void;
    /** Get the current checked state */
    getChecked: () => boolean;
    /** Set the checked state */
    setChecked: (checked: boolean) => void;
}
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<SwitchRef>>;

interface TabItem {
    /**
     * Unique identifier for the tab
     */
    id: string;
    /**
     * Label to display in the tab
     */
    label: React__default.ReactNode;
    /**
     * Content to display when tab is active
     */
    content: React__default.ReactNode;
    /**
     * Whether the tab is disabled
     */
    disabled?: boolean;
    /**
     * Icon to display in the tab
     */
    icon?: React__default.ReactNode;
    /**
     * Badge or count to display in the tab
     */
    badge?: React__default.ReactNode;
}
interface TabsProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Array of tab items
     */
    items: TabItem[];
    /**
     * Currently active tab ID
     */
    activeTab?: string;
    /**
     * Default active tab ID (uncontrolled)
     */
    defaultActiveTab?: string;
    /**
     * Callback when active tab changes
     */
    onChange?: (activeTab: string) => void;
    /**
     * Tab variant
     */
    variant?: 'default' | 'pills' | 'underline' | 'cards';
    /**
     * Tab size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Tab orientation
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Whether tabs are full width
     */
    fullWidth?: boolean;
    /**
     * Whether to show tab content
     */
    showContent?: boolean;
    /**
     * Custom class name for the tabs container
     */
    className?: string;
    /**
     * Custom styles for the tabs container
     */
    style?: React__default.CSSProperties;
}
/**
 * Tabs component for organizing content into multiple panels
 */
declare const Tabs: React__default.FC<TabsProps>;

interface BaseTextProps extends React__default.HTMLAttributes<HTMLElement> {
    /**
     * The HTML element to render
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Text content
     */
    children: React__default.ReactNode;
    /**
     * Additional CSS class name
     */
    className?: string;
}
interface TextBodyProps extends BaseTextProps {
}
/**
 * TextBody component for default body text used in cards and UI copy
 *
 * @example
 * ```tsx
 * <TextBody>Default body text</TextBody>
 * <TextBody as="p">Body text as paragraph</TextBody>
 * ```
 */
declare const TextBody: React__default.FC<TextBodyProps>;
interface TextContentProps extends BaseTextProps {
}
/**
 * TextContent component for long-form content paragraphs
 *
 * @example
 * ```tsx
 * <TextContent>Long-form content paragraph</TextContent>
 * <TextContent as="div">Content as div</TextContent>
 * ```
 */
declare const TextContent: React__default.FC<TextContentProps>;
interface TextContentTitleProps extends BaseTextProps {
}
/**
 * TextContentTitle component for section titles in long-form content
 *
 * @example
 * ```tsx
 * <TextContentTitle>Section Title</TextContentTitle>
 * <TextContentTitle as="h2">Title as h2</TextContentTitle>
 * ```
 */
declare const TextContentTitle: React__default.FC<TextContentTitleProps>;
interface TextContentImportantProps extends BaseTextProps {
}
/**
 * TextContentImportant component for highlighted/emphasized text
 *
 * @example
 * ```tsx
 * <TextContentImportant>Important text</TextContentImportant>
 * <TextContentImportant as="strong">Important as strong</TextContentImportant>
 * ```
 */
declare const TextContentImportant: React__default.FC<TextContentImportantProps>;

interface TooltipProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'children' | 'content'> {
    /**
     * The content to display in the tooltip
     */
    content: React__default.ReactNode;
    /**
     * The element that triggers the tooltip
     */
    children: React__default.ReactElement;
    /**
     * Tooltip variant
     */
    variant?: 'default' | 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error';
    /**
     * Tooltip size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Tooltip position
     */
    position?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /**
     * Whether the tooltip is disabled
     */
    disabled?: boolean;
    /**
     * Delay before showing tooltip (in milliseconds)
     */
    delay?: number;
    /**
     * Delay before hiding tooltip (in milliseconds)
     */
    hideDelay?: number;
    /**
     * Whether to show arrow
     */
    arrow?: boolean;
    /**
     * Whether tooltip is interactive (stays open on hover)
     */
    interactive?: boolean;
    /**
     * Whether tooltip is always visible
     */
    visible?: boolean;
    /**
     * Custom class name for the tooltip
     */
    className?: string;
    /**
     * Custom styles for the tooltip
     */
    style?: React__default.CSSProperties;
    /**
     * Callback when tooltip visibility changes
     */
    onVisibilityChange?: (visible: boolean) => void;
}
/**
 * Tooltip component for displaying contextual information
 */
declare const Tooltip: React__default.FC<TooltipProps>;

interface TypographyProps extends React__default.HTMLAttributes<HTMLElement> {
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
    color?: 'primary' | 'primaryLight' | 'content' | 'secondary' | 'secondaryDark' | 'disabled' | 'inverse' | 'success' | 'warning' | 'error' | 'info';
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
    children: React__default.ReactNode;
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
declare const Typography: React__default.FC<TypographyProps>;

/**
 * Typography component demo
 */
declare const TypographyDemo: React__default.FC;

interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React__default.ReactNode;
    description?: string;
}
interface DropdownProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Dropdown options
     */
    options: DropdownOption[];
    /**
     * Selected value(s)
     */
    value?: string | string[];
    /**
     * Default selected value(s)
     */
    defaultValue?: string | string[];
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Dropdown label
     */
    label?: string;
    /**
     * Dropdown size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Dropdown variant
     */
    variant?: 'default' | 'filled' | 'outlined';
    /**
     * Whether the dropdown is disabled
     */
    disabled?: boolean;
    /**
     * Whether the dropdown is required
     */
    required?: boolean;
    /**
     * Whether multiple selection is allowed
     */
    multiple?: boolean;
    /**
     * Whether the dropdown is searchable
     */
    searchable?: boolean;
    /**
     * Whether the dropdown is in loading state
     */
    loading?: boolean;
    /**
     * Helper text
     */
    helperText?: string;
    /**
     * Error message
     */
    errorMessage?: string;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Custom styles
     */
    style?: React__default.CSSProperties;
    /**
     * Callback fired when selection changes
     */
    onChange?: (value: string | string[], option: DropdownOption | DropdownOption[]) => void;
    /**
     * Callback fired when dropdown opens
     */
    onOpen?: () => void;
    /**
     * Callback fired when dropdown closes
     */
    onClose?: () => void;
}
interface DropdownRef {
    focus: () => void;
    blur: () => void;
    open: () => void;
    close: () => void;
}
/**
 * Dropdown component for selecting options from a list
 *
 * @example
 * ```tsx
 * <Dropdown
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' }
 *   ]}
 *   placeholder="Select an option"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
declare const Dropdown: React__default.ForwardRefExoticComponent<DropdownProps & React__default.RefAttributes<DropdownRef>>;
interface DropdownItemProps {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React__default.ReactNode;
    description?: string;
    children?: React__default.ReactNode;
}
declare const DropdownItem: React__default.FC<DropdownItemProps>;

interface RadioOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    description?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    name?: string;
    orientation?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'card';
}
declare const RadioGroup: React__default.FC<RadioGroupProps>;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionHeader, type AccordionHeaderProps, AccordionItem, type AccordionItemProps, type AccordionProps, Badge, type BadgeProps, type BorderColor, Button, ButtonDemo, type ButtonProps, Card, CardContent, type CardContentProps, CardDemo, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, type CheckboxRef, type ColorToken, Dropdown, DropdownItem, type DropdownItemProps, type DropdownOption, type DropdownProps, type DropdownRef, type FontWeight, type GrayScale, Input, type InputProps, type InputRef, type LetterSpacing, type LineHeight, Modal, type ModalProps, Navigation, type NavigationItem, type NavigationProps, RadioGroup, type RadioGroupProps, type RadioOption, type RadiusToken, type ShadowToken, Sidebar, type SidebarProps, Snackbar, type SnackbarAction, type SnackbarPosition, type SnackbarProps, type SnackbarRef, type SnackbarVariant, type SpacingToken, Switch, type SwitchProps, type SwitchRef, type TabItem, Tabs, type TabsProps, TextBody as Text, TextBody, type TextBodyProps, type TextColor, TextContent, TextContentImportant, type TextContentImportantProps, type TextContentProps, TextContentTitle, type TextContentTitleProps, Tooltip, type TooltipProps, Topbar, type TopbarProps, Typography, TypographyDemo, type TypographyProps, type TypographyVariant, colors, cssVariables, radii, shadows, spacing, typography };
