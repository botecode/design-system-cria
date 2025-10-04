// src/tokens/colors.ts
var colors = {
  // Primary Colors
  primary: "#7566A1",
  primaryLight: "#9E9AD9",
  primaryDarker: "#3A2E52",
  primaryDark: "#2A1F3A",
  // Secondary Colors
  secondary: "#28DDB9",
  secondaryDark: "#167B7A",
  // Background Colors
  background: "#F2F4F3",
  backgroundLight: "#FFFFFF",
  backgroundDark: "#1A1A1A",
  // Neutral Colors
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827"
  },
  // Semantic Colors
  success: "#10B981",
  warning: "#D97706",
  // Darker orange for better contrast
  error: "#DC2626",
  // Darker red for better contrast
  info: "#3B82F6",
  // Text Colors
  text: {
    primary: "#374151",
    // Dark gray for default text
    content: "#3A2E52",
    // Primary Darker for content text
    secondary: "#6B7280",
    disabled: "#9CA3AF",
    inverse: "#FFFFFF"
  },
  // Border Colors
  border: {
    light: "#E5E7EB",
    medium: "#D1D5DB",
    dark: "#9CA3AF"
  }
};

// src/tokens/spacing.ts
var spacing = {
  0: "0px",
  1: "4px",
  // 0.25rem
  2: "8px",
  // 0.5rem
  3: "12px",
  // 0.75rem
  4: "16px",
  // 1rem
  5: "20px",
  // 1.25rem
  6: "24px",
  // 1.5rem
  8: "32px",
  // 2rem
  10: "40px",
  // 2.5rem
  12: "48px",
  // 3rem
  16: "64px",
  // 4rem
  20: "80px",
  // 5rem
  24: "96px",
  // 6rem
  32: "128px",
  // 8rem
  40: "160px",
  // 10rem
  48: "192px",
  // 12rem
  56: "224px",
  // 14rem
  64: "256px"
  // 16rem
};

// src/tokens/typography.ts
var typography = {
  fontFamily: {
    primary: '"Cartograph CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
  },
  fontSize: {
    display: "48px",
    h1: "32px",
    h2: "24px",
    h3: "20px",
    title1: "32px",
    title2: "24px",
    title3: "20px",
    body: "16px",
    bodySmall: "14px",
    caption: "12px"
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    heavy: 900
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em"
  }
};

// src/tokens/radii.ts
var radii = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px"
};

// src/tokens/shadows.ts
var shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
};

// src/tokens/index.ts
var cssVariables = {
  // Colors
  "--cria-primary": "#7566A1",
  "--cria-primary-light": "#3A2E52",
  "--cria-primary-dark": "#2A1F3A",
  "--cria-secondary": "#28DDB9",
  "--cria-secondary-dark": "#167B7A",
  "--cria-background": "#F2F4F3",
  "--cria-background-light": "#FFFFFF",
  "--cria-background-dark": "#1A1A1A",
  "--cria-text-primary": "#111827",
  "--cria-text-secondary": "#6B7280",
  "--cria-text-disabled": "#9CA3AF",
  "--cria-text-inverse": "#FFFFFF",
  "--cria-border-light": "#E5E7EB",
  "--cria-border-medium": "#D1D5DB",
  "--cria-border-dark": "#9CA3AF",
  "--cria-success": "#10B981",
  "--cria-warning": "#F59E0B",
  "--cria-error": "#EF4444",
  "--cria-info": "#3B82F6",
  // Typography
  "--cria-font-family": '"Cartograph CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  "--cria-font-size-display": "48px",
  "--cria-font-size-h1": "32px",
  "--cria-font-size-h2": "24px",
  "--cria-font-size-h3": "20px",
  "--cria-font-size-title1": "32px",
  "--cria-font-size-title2": "24px",
  "--cria-font-size-title3": "20px",
  "--cria-font-size-body": "16px",
  "--cria-font-size-body-small": "14px",
  "--cria-font-size-caption": "12px",
  // Spacing
  "--cria-spacing-1": "4px",
  "--cria-spacing-2": "8px",
  "--cria-spacing-3": "12px",
  "--cria-spacing-4": "16px",
  "--cria-spacing-5": "20px",
  "--cria-spacing-6": "24px",
  "--cria-spacing-8": "32px",
  "--cria-spacing-10": "40px",
  "--cria-spacing-12": "48px",
  "--cria-spacing-16": "64px",
  "--cria-spacing-20": "80px",
  "--cria-spacing-24": "96px",
  // Border Radius
  "--cria-radius-sm": "4px",
  "--cria-radius-md": "8px",
  "--cria-radius-lg": "16px",
  "--cria-radius-full": "9999px",
  // Shadows
  "--cria-shadow-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "--cria-shadow-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "--cria-shadow-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
};

// src/components/Accordion/Accordion.tsx
import { useState, useCallback, useRef, createContext, useContext, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var AccordionContext = createContext(null);
var Accordion = ({
  variant = "default",
  size = "md",
  allowMultiple = true,
  defaultOpenItems = [],
  openItems,
  onChange,
  children,
  className = "",
  style,
  ...props
}) => {
  const [internalOpenItems, setInternalOpenItems] = useState(defaultOpenItems);
  const accordionRef = useRef(null);
  const isControlled = openItems !== void 0;
  const currentOpenItems = isControlled ? openItems : internalOpenItems;
  const handleItemToggle = useCallback((itemId) => {
    const newOpenItems = currentOpenItems.includes(itemId) ? currentOpenItems.filter((id) => id !== itemId) : allowMultiple ? [...currentOpenItems, itemId] : [itemId];
    if (!isControlled) {
      setInternalOpenItems(newOpenItems);
    }
    onChange?.(newOpenItems);
  }, [currentOpenItems, allowMultiple, isControlled, onChange]);
  const handleKeyDown = useCallback((event) => {
    if (!accordionRef.current) return;
    const headers = Array.from(
      accordionRef.current.querySelectorAll('[role="button"]')
    );
    const currentIndex = headers.indexOf(event.target);
    if (currentIndex === -1) return;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % headers.length;
        headers[nextIndex]?.focus();
        break;
      case "ArrowUp":
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? headers.length - 1 : currentIndex - 1;
        headers[prevIndex]?.focus();
        break;
    }
  }, []);
  const classes = [
    "cria-accordion",
    `cria-accordion--${variant}`,
    `cria-accordion--${size}`,
    className
  ].filter(Boolean).join(" ");
  const accordionStyles = {
    ...getVariantStyles(variant),
    ...getSizeStyles(size),
    ...style
  };
  const contextValue = {
    openItems: currentOpenItems,
    allowMultiple,
    onToggle: handleItemToggle,
    size
  };
  return /* @__PURE__ */ jsx(AccordionContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref: accordionRef,
      className: classes,
      style: accordionStyles,
      onKeyDown: handleKeyDown,
      ...props,
      children
    }
  ) });
};
function getVariantStyles(variant) {
  switch (variant) {
    case "default":
      return {
        backgroundColor: "transparent"
      };
    case "bordered":
      return {
        backgroundColor: colors.backgroundLight,
        border: `1px solid ${colors.border.light}`,
        borderRadius: radii.md,
        overflow: "hidden"
      };
    default:
      return {};
  }
}
function getSizeStyles(size) {
  switch (size) {
    case "sm":
      return {
        fontSize: "14px"
      };
    case "md":
      return {
        fontSize: "16px"
      };
    case "lg":
      return {
        fontSize: "18px"
      };
    default:
      return {};
  }
}
var AccordionItem = ({
  id,
  children,
  className = "",
  style,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  const { openItems } = context;
  const isOpen = openItems.includes(id);
  const classes = [
    "cria-accordion-item",
    isOpen && "cria-accordion-item--open",
    className
  ].filter(Boolean).join(" ");
  const itemStyles = {
    borderBottom: `1px solid ${colors.border.light}`,
    ...style
  };
  return /* @__PURE__ */ jsx(AccordionItemContext.Provider, { value: id, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: classes,
      style: itemStyles,
      ...props,
      children
    }
  ) });
};
var AccordionHeader = ({
  children,
  className = "",
  style,
  onClick,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionHeader must be used within an Accordion");
  }
  const { onToggle, size } = context;
  const itemId = useContext(AccordionItemContext);
  if (!itemId) {
    throw new Error("AccordionHeader must be used within an AccordionItem");
  }
  const isOpen = context.openItems.includes(itemId);
  const handleClick = useCallback((event) => {
    onClick?.(event);
    onToggle(itemId);
  }, [onClick, itemId, onToggle]);
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle(itemId);
    }
  }, [itemId, onToggle]);
  const classes = [
    "cria-accordion-header",
    `cria-accordion-header--${size}`,
    className
  ].filter(Boolean).join(" ");
  const headerStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: getHeaderPadding(size),
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--cria-font-family)",
    fontWeight: 500,
    color: colors.text.primary,
    textAlign: "left",
    transition: "all 0.3s ease-in-out",
    ...style
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      id: `${itemId}-header`,
      className: classes,
      style: headerStyles,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      "aria-expanded": isOpen,
      "aria-controls": `${itemId}-content`,
      role: "button",
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { children }),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              fontSize: "14px"
            },
            "aria-hidden": "true",
            children: "\u25BC"
          }
        )
      ]
    }
  );
};
var AccordionItemContext = createContext(null);
var AccordionContent = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion");
  }
  const itemId = useContext(AccordionItemContext);
  if (!itemId) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }
  const isOpen = context.openItems.includes(itemId);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen, children]);
  const classes = [
    "cria-accordion-content",
    className
  ].filter(Boolean).join(" ");
  const contentStyles = {
    height: `${height}px`,
    overflow: "hidden",
    transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out",
    opacity: isOpen ? 1 : 0,
    ...style
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: `${itemId}-content`,
      className: classes,
      style: contentStyles,
      "aria-labelledby": `${itemId}-header`,
      role: "region",
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref: contentRef,
          style: {
            padding: getContentPadding(),
            transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            transition: "transform 0.4s ease-in-out"
          },
          children
        }
      )
    }
  );
};
function getHeaderPadding(size) {
  switch (size) {
    case "sm":
      return `${spacing[2]} ${spacing[3]}`;
    case "md":
      return `${spacing[3]} ${spacing[4]}`;
    case "lg":
      return `${spacing[4]} ${spacing[5]}`;
    default:
      return `${spacing[3]} ${spacing[4]}`;
  }
}
function getContentPadding() {
  return `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`;
}

// src/components/Badge/Badge.tsx
import { useMemo } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Badge = ({
  variant = "default",
  size = "md",
  badgeStyle = "solid",
  interactive = false,
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  maxCount,
  dot = false,
  className = "",
  style,
  ...props
}) => {
  const displayContent = useMemo(() => {
    if (dot) return null;
    if (typeof children === "number" && maxCount && children > maxCount) {
      return `${maxCount}+`;
    }
    return children;
  }, [children, maxCount, dot]);
  const classes = [
    "cria-badge",
    `cria-badge--${variant}`,
    `cria-badge--${size}`,
    `cria-badge--${badgeStyle}`,
    interactive ? "cria-badge--interactive" : null,
    disabled ? "cria-badge--disabled" : null,
    dot ? "cria-badge--dot" : null,
    className
  ].filter(Boolean).join(" ");
  const badgeStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    fontFamily: "var(--cria-font-family)",
    fontWeight: "var(--cria-font-weight-medium)",
    lineHeight: "1",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "var(--cria-radius-full)",
    transition: "all 0.2s ease-in-out",
    ...style
  };
  const handleClick = (event) => {
    if (disabled || !interactive) return;
    props.onClick?.(event);
  };
  const handleKeyDown = (event) => {
    if (disabled || !interactive) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      props.onClick?.(event);
    }
  };
  const { onClick, onKeyDown, ...restProps } = props;
  return /* @__PURE__ */ jsxs2(
    "span",
    {
      className: classes,
      style: badgeStyles,
      onClick: interactive ? handleClick : void 0,
      onKeyDown: interactive ? handleKeyDown : void 0,
      role: interactive ? "button" : void 0,
      tabIndex: interactive && !disabled ? 0 : void 0,
      "aria-disabled": disabled,
      ...restProps,
      children: [
        leftIcon && !dot && /* @__PURE__ */ jsx2("span", { className: "cria-badge__icon cria-badge__icon--left", "aria-hidden": "true", children: leftIcon }),
        !dot && displayContent && /* @__PURE__ */ jsx2("span", { className: "cria-badge__content", children: displayContent }),
        rightIcon && !dot && /* @__PURE__ */ jsx2("span", { className: "cria-badge__icon cria-badge__icon--right", "aria-hidden": "true", children: rightIcon })
      ]
    }
  );
};

// src/components/Button/Button.tsx
import React3 from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Button = React3.forwardRef(({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = "",
  style,
  ...props
}, ref) => {
  const isDisabled = disabled || loading;
  const classes = [
    "cria-button",
    `cria-button--${variant}`,
    `cria-button--${size}`,
    fullWidth && "cria-button--full-width",
    loading && "cria-button--loading",
    isDisabled && "cria-button--disabled",
    className
  ].filter(Boolean).join(" ");
  const buttonStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[2],
    fontFamily: "var(--cria-font-family)",
    fontWeight: 500,
    textDecoration: "none",
    border: "none",
    borderRadius: radii.md,
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease-in-out",
    position: "relative",
    width: fullWidth ? "100%" : "auto",
    ...getVariantStyles2(variant),
    ...getSizeStyles2(size),
    ...style
  };
  return /* @__PURE__ */ jsxs3(
    "button",
    {
      ref,
      className: classes,
      style: buttonStyles,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx3(
          "div",
          {
            style: {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "16px",
              height: "16px",
              border: "2px solid transparent",
              borderTop: "2px solid currentColor",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          }
        ),
        /* @__PURE__ */ jsxs3("span", { style: { opacity: loading ? 0 : 1, display: "flex", alignItems: "center", gap: spacing[2] }, children: [
          leftIcon && /* @__PURE__ */ jsx3("span", { children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ jsx3("span", { children: rightIcon })
        ] })
      ]
    }
  );
});
Button.displayName = "Button";
function getVariantStyles2(variant) {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: colors.primary,
        color: colors.white,
        boxShadow: shadows.sm
      };
    case "secondary":
      return {
        backgroundColor: colors.secondary,
        color: colors.white,
        boxShadow: shadows.sm
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: colors.primary,
        border: `1px solid ${colors.primary}`
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
        color: colors.primary
      };
    case "danger":
      return {
        backgroundColor: colors.error,
        color: colors.white,
        boxShadow: shadows.sm
      };
    default:
      return {};
  }
}
function getSizeStyles2(size) {
  switch (size) {
    case "sm":
      return {
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: "14px",
        minHeight: "32px"
      };
    case "md":
      return {
        padding: `${spacing[3]} ${spacing[4]}`,
        fontSize: "16px",
        minHeight: "40px"
      };
    case "lg":
      return {
        padding: `${spacing[4]} ${spacing[6]}`,
        fontSize: "18px",
        minHeight: "48px"
      };
    default:
      return {};
  }
}

// src/components/Button/demo.tsx
import { useState as useState2 } from "react";

// src/components/Typography/Typography.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Typography = ({
  variant = "body",
  as,
  className = "",
  color,
  weight = "regular",
  lineHeight = "normal",
  letterSpacing = "normal",
  align = "left",
  children,
  ...props
}) => {
  const getElement = () => {
    if (as) return as;
    switch (variant) {
      case "display":
      case "h1":
      case "title1":
        return "h1";
      case "h2":
      case "title2":
        return "h2";
      case "h3":
      case "title3":
        return "h3";
      case "body":
      case "bodySmall":
        return "p";
      case "caption":
        return "span";
      default:
        return "p";
    }
  };
  const Element = getElement();
  const classes = [
    "cria-typography",
    `cria-typography--${variant}`,
    color ? `cria-typography--color-${color}` : null,
    `cria-typography--weight-${weight}`,
    `cria-typography--line-height-${lineHeight}`,
    `cria-typography--letter-spacing-${letterSpacing}`,
    `cria-typography--align-${align}`,
    className
  ].filter(Boolean).join(" ");
  const getColorStyles = (color2) => {
    switch (color2) {
      case "primary":
        return { color: "#7566A1" };
      // Main brand purple
      case "primaryLight":
        return { color: "#3A2E52" };
      // Primary light/darker
      case "content":
        return { color: "#3A2E52" };
      // Primary light/darker for content text
      case "secondary":
        return { color: "#28DDB9" };
      // Secondary brand teal
      case "secondaryDark":
        return { color: "#167B7A" };
      // Secondary dark
      case "disabled":
        return { color: "#9CA3AF" };
      case "inverse":
        return { color: "#FFFFFF" };
      case "success":
        return { color: "#10B981" };
      case "warning":
        return { color: "#F59E0B" };
      case "error":
        return { color: "#EF4444" };
      case "info":
        return { color: "#3B82F6" };
      default:
        return { color: "#374151" };
    }
  };
  const isTitleVariant = variant === "title1" || variant === "title2" || variant === "title3";
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize[variant],
    fontWeight: typography.fontWeight[weight],
    lineHeight: typography.lineHeight[lineHeight],
    letterSpacing: typography.letterSpacing[letterSpacing],
    textAlign: align,
    margin: 0,
    textTransform: isTitleVariant ? "uppercase" : "none",
    ...getColorStyles(isTitleVariant ? "primary" : color || "default")
  };
  return /* @__PURE__ */ jsx4(Element, { className: classes, style: styles, ...props, children });
};
var Typography_default = Typography;

// src/components/Button/demo.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var ButtonDemo = () => {
  const [loading, setLoading] = useState2(false);
  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2e3);
  };
  return /* @__PURE__ */ jsxs4("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ jsx5(Typography, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Button Demo" }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ jsx5(Button, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ jsx5(Button, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ jsx5(Button, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ jsx5(Button, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { size: "sm", children: "Pequeno" }),
        /* @__PURE__ */ jsx5(Button, { size: "md", children: "M\xE9dio" }),
        /* @__PURE__ */ jsx5(Button, { size: "lg", children: "Grande" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Estados" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { children: "Normal" }),
        /* @__PURE__ */ jsx5(Button, { loading: true, children: "Carregando" }),
        /* @__PURE__ */ jsx5(Button, { disabled: true, children: "Desabilitado" }),
        /* @__PURE__ */ jsx5(Button, { loading, onClick: handleLoadingClick, children: "Clique para Carregar" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Com \xCDcones" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { leftIcon: "\u2190", children: "Voltar" }),
        /* @__PURE__ */ jsx5(Button, { rightIcon: "\u2192", children: "Pr\xF3ximo" }),
        /* @__PURE__ */ jsx5(Button, { leftIcon: "\u2605", rightIcon: "\u2605", children: "Estrela" }),
        /* @__PURE__ */ jsx5(Button, { leftIcon: "\u{1F4E7}", children: "Email" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Largura Completa" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
        /* @__PURE__ */ jsx5(Button, { fullWidth: true, children: "Bot\xE3o de Largura Completa" }),
        /* @__PURE__ */ jsx5(Button, { variant: "outline", fullWidth: true, children: "Contorno de Largura Completa" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Efeitos de Hover" }),
      /* @__PURE__ */ jsx5("p", { style: { fontFamily: "var(--cria-font-family)", color: "#6B7280", marginBottom: "16px", fontSize: "14px" }, children: "Passe o mouse sobre os bot\xF5es para ver os efeitos de hover" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ jsx5(Button, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ jsx5(Button, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ jsx5(Button, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ jsx5(Button, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Exemplos Interativos" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { onClick: () => alert("Prim\xE1rio clicado!"), children: "Clique em Mim" }),
        /* @__PURE__ */ jsx5(Button, { variant: "secondary", onClick: () => console.log("Secund\xE1rio clicado!"), children: "Log no Console" }),
        /* @__PURE__ */ jsx5(Button, { variant: "outline", onClick: () => window.open("https://example.com", "_blank"), children: "Link Externo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx5("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Acessibilidade" }),
      /* @__PURE__ */ jsxs4("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx5(Button, { "aria-label": "Fechar di\xE1logo", children: "\xD7" }),
        /* @__PURE__ */ jsx5(Button, { "aria-describedby": "help-text", children: "Ajuda" }),
        /* @__PURE__ */ jsx5(Button, { disabled: true, "aria-label": "Esta a\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel", children: "Indispon\xEDvel" })
      ] }),
      /* @__PURE__ */ jsx5("p", { id: "help-text", style: { fontSize: "14px", color: "#6B7280", marginTop: "8px" }, children: "Este bot\xE3o fornece informa\xE7\xF5es de ajuda adicionais." })
    ] })
  ] });
};

// src/components/Card/Card.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Card = ({
  variant = "default",
  size = "md",
  interactive = false,
  disabled = false,
  children,
  className = "",
  style,
  ...props
}) => {
  const classes = [
    "cria-card",
    `cria-card--${variant}`,
    `cria-card--${size}`,
    interactive && "cria-card--interactive",
    disabled && "cria-card--disabled",
    className
  ].filter(Boolean).join(" ");
  const cardStyles = {
    borderRadius: radii.md,
    overflow: "hidden",
    position: "relative",
    cursor: interactive && !disabled ? "pointer" : "default",
    transition: "all 0.2s ease-in-out",
    ...getVariantStyles3(variant),
    ...getSizeStyles3(size),
    ...style
  };
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: classes,
      style: cardStyles,
      ...props,
      children
    }
  );
};
function getVariantStyles3(variant) {
  switch (variant) {
    case "default":
      return {
        backgroundColor: colors.backgroundLight,
        border: `1px solid ${colors.border.light}`
      };
    case "elevated":
      return {
        backgroundColor: colors.backgroundLight,
        boxShadow: shadows.md,
        border: "none"
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        border: `2px solid ${colors.border.medium}`
      };
    case "filled":
      return {
        backgroundColor: colors.gray[50],
        border: "none"
      };
    default:
      return {};
  }
}
function getSizeStyles3(size) {
  switch (size) {
    case "sm":
      return {
        padding: spacing[3]
      };
    case "md":
      return {
        padding: spacing[4]
      };
    case "lg":
      return {
        padding: spacing[6]
      };
    default:
      return {};
  }
}
var CardHeader = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const classes = ["cria-card-header", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: classes,
      style: {
        marginBottom: spacing[4],
        ...style
      },
      ...props,
      children
    }
  );
};
var CardContent = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const classes = ["cria-card-content", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: classes,
      style: {
        ...style
      },
      ...props,
      children
    }
  );
};
var CardFooter = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const classes = ["cria-card-footer", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: classes,
      style: {
        marginTop: spacing[4],
        paddingTop: spacing[4],
        borderTop: `1px solid ${colors.border.light}`,
        ...style
      },
      ...props,
      children
    }
  );
};

// src/components/Card/demo.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var CardDemo = () => {
  return /* @__PURE__ */ jsxs5("div", { style: { padding: "24px", maxWidth: "1000px" }, children: [
    /* @__PURE__ */ jsx7(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Demo de Cards" }),
    /* @__PURE__ */ jsxs5("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx7(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ jsxs5("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ jsxs5(Card, { variant: "default", children: [
          /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Card Padr\xE3o" }) }),
          /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Este \xE9 um card padr\xE3o com borda e fundo claros." }) })
        ] }),
        /* @__PURE__ */ jsxs5(Card, { variant: "elevated", children: [
          /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Card Elevado" }) }),
          /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Este card tem uma sombra para profundidade e hierarquia visual." }) })
        ] }),
        /* @__PURE__ */ jsxs5(Card, { variant: "outlined", children: [
          /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Card com Contorno" }) }),
          /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Este card tem uma borda proeminente e fundo transparente." }) })
        ] }),
        /* @__PURE__ */ jsxs5(Card, { variant: "filled", children: [
          /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Card Preenchido" }) }),
          /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Este card tem um preenchimento sutil de cor de fundo." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx7(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ jsxs5("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx7(Card, { size: "sm", style: { width: "200px" }, children: /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "bodySmall", children: "Card pequeno com preenchimento m\xEDnimo" }) }) }),
        /* @__PURE__ */ jsx7(Card, { size: "md", style: { width: "250px" }, children: /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Card m\xE9dio com preenchimento padr\xE3o" }) }) }),
        /* @__PURE__ */ jsx7(Card, { size: "lg", style: { width: "300px" }, children: /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Card grande com preenchimento generoso para mais conte\xFAdo" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx7(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards Interativos" }),
      /* @__PURE__ */ jsxs5("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ jsxs5(
          Card,
          {
            interactive: true,
            onClick: () => alert("Card clicado!"),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Card Clic\xE1vel" }) }),
              /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Este card \xE9 interativo e responde a cliques." }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs5(Card, { interactive: true, disabled: true, children: [
          /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", color: "disabled", weight: "medium", children: "Card Desabilitado" }) }),
          /* @__PURE__ */ jsx7(CardContent, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "body", color: "disabled", children: "Este card est\xE1 desabilitado e n\xE3o pode ser interagido." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx7(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Exemplos Complexos" }),
      /* @__PURE__ */ jsxs5("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ jsxs5(Card, { variant: "elevated", children: [
          /* @__PURE__ */ jsxs5(CardContent, { children: [
            /* @__PURE__ */ jsx7("div", { style: {
              height: "200px",
              backgroundColor: "#f3f4f6",
              borderRadius: "8px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280"
            }, children: "Imagem do Produto" }),
            /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Nome do Produto" }),
            /* @__PURE__ */ jsx7(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Esta \xE9 uma descri\xE7\xE3o do produto que explica o que o produto faz e por que \xE9 \xFAtil." })
          ] }),
          /* @__PURE__ */ jsx7(CardFooter, { children: /* @__PURE__ */ jsxs5("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "bold", children: "R$ 99,99" }),
            /* @__PURE__ */ jsx7(Button, { size: "sm", children: "Adicionar ao Carrinho" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs5(Card, { variant: "outlined", children: [
          /* @__PURE__ */ jsxs5(CardContent, { children: [
            /* @__PURE__ */ jsxs5("div", { style: { display: "flex", alignItems: "center", marginBottom: "16px" }, children: [
              /* @__PURE__ */ jsx7("div", { style: {
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#7566A1",
                marginRight: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold"
              }, children: "JD" }),
              /* @__PURE__ */ jsxs5("div", { children: [
                /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Jo\xE3o Silva" }),
                /* @__PURE__ */ jsx7(Typography_default, { variant: "bodySmall", children: "Engenheiro de Software" })
              ] })
            ] }),
            /* @__PURE__ */ jsx7(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Apaixonado por construir grandes experi\xEAncias de usu\xE1rio e resolver problemas complexos." })
          ] }),
          /* @__PURE__ */ jsx7(CardFooter, { children: /* @__PURE__ */ jsxs5("div", { style: { display: "flex", gap: "8px" }, children: [
            /* @__PURE__ */ jsx7(Button, { variant: "outline", size: "sm", children: "Mensagem" }),
            /* @__PURE__ */ jsx7(Button, { size: "sm", children: "Seguir" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx7(Card, { variant: "filled", children: /* @__PURE__ */ jsxs5(CardContent, { children: [
          /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Receita Total" }),
          /* @__PURE__ */ jsx7(Typography_default, { variant: "display", weight: "bold", style: { marginBottom: "8px" }, children: "R$ 12.345" }),
          /* @__PURE__ */ jsx7(Typography_default, { variant: "bodySmall", color: "success", children: "\u2197 +12,5% do m\xEAs passado" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ jsx7(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards com A\xE7\xF5es" }),
      /* @__PURE__ */ jsxs5(Card, { variant: "elevated", style: { maxWidth: "500px" }, children: [
        /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(Typography_default, { variant: "h3", weight: "medium", children: "Configura\xE7\xF5es" }) }),
        /* @__PURE__ */ jsxs5(CardContent, { children: [
          /* @__PURE__ */ jsx7(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Gerencie suas configura\xE7\xF5es de conta e prefer\xEAncias." }),
          /* @__PURE__ */ jsxs5("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
            /* @__PURE__ */ jsxs5("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Notifica\xE7\xF5es por Email" }),
              /* @__PURE__ */ jsx7(Button, { variant: "outline", size: "sm", children: "Alternar" })
            ] }),
            /* @__PURE__ */ jsxs5("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsx7(Typography_default, { variant: "body", children: "Modo Escuro" }),
              /* @__PURE__ */ jsx7(Button, { variant: "outline", size: "sm", children: "Alternar" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx7(CardFooter, { children: /* @__PURE__ */ jsxs5("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ jsx7(Button, { variant: "ghost", size: "sm", children: "Cancelar" }),
          /* @__PURE__ */ jsx7(Button, { size: "sm", children: "Salvar Altera\xE7\xF5es" })
        ] }) })
      ] })
    ] })
  ] });
};

// src/components/Checkbox/Checkbox.tsx
import { forwardRef, useRef as useRef2, useImperativeHandle, useCallback as useCallback2 } from "react";

// src/components/Typography/demo.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var TypographyDemo = () => {
  return /* @__PURE__ */ jsxs6("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ jsx8(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Typography Demo" }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h1", weight: "bold", style: { marginBottom: "16px" }, children: "Heading 1" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Heading 2" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Heading 3" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Titles (ALL CAPS)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "16px" }, children: "Title 1 - Large Title" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "title2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Title 2 - Medium Title" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "title3", weight: "medium", style: { marginBottom: "16px" }, children: "Title 3 - Small Title" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", style: { marginBottom: "12px" }, children: "This is body text using the regular weight. It's perfect for paragraphs and general content." }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "bodySmall", style: { marginBottom: "12px" }, children: "This is smaller body text, ideal for captions and secondary information." }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "caption", children: "This is caption text, typically used for labels and fine print." })
    ] }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Color Variants" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "primary", style: { marginBottom: "8px" }, children: "Primary text color - Main brand purple (#7566A1)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "content", style: { marginBottom: "8px" }, children: "Content text color - Primary dark for content (#3A2E52)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "primaryLight", style: { marginBottom: "8px" }, children: "Primary Light text color - Darker purple variant (#3A2E52)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "secondary", style: { marginBottom: "8px" }, children: "Secondary text color - Brand teal (#28DDB9)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "secondaryDark", style: { marginBottom: "8px" }, children: "Secondary Dark text color - Darker teal variant (#167B7A)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "disabled", style: { marginBottom: "8px" }, children: "Disabled text color (light gray)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "success", style: { marginBottom: "8px" }, children: "Success text color (green)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "warning", style: { marginBottom: "8px" }, children: "Warning text color (orange)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "error", style: { marginBottom: "8px" }, children: "Error text color (red)" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "info", style: { marginBottom: "8px" }, children: "Info text color (blue)" }),
      /* @__PURE__ */ jsx8("div", { style: { backgroundColor: "#111827", padding: "12px", borderRadius: "8px" }, children: /* @__PURE__ */ jsx8(Typography_default, { variant: "body", color: "inverse", children: "Inverse text color (white on dark background)" }) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Font Weights" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "thin", style: { marginBottom: "4px" }, children: "Thin (100) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "light", style: { marginBottom: "4px" }, children: "Light (300) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "regular", style: { marginBottom: "4px" }, children: "Regular (400) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "medium", style: { marginBottom: "4px" }, children: "Medium (500) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "semiBold", style: { marginBottom: "4px" }, children: "Semi Bold (600) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "bold", style: { marginBottom: "4px" }, children: "Bold (700) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "extraBold", style: { marginBottom: "4px" }, children: "Extra Bold (800) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", weight: "heavy", children: "Heavy (900) - Lorem ipsum dolor sit amet" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Text Alignment" }),
      /* @__PURE__ */ jsx8("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ jsx8(Typography_default, { variant: "body", align: "left", children: "Left aligned text (default)" }) }),
      /* @__PURE__ */ jsx8("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ jsx8(Typography_default, { variant: "body", align: "center", children: "Center aligned text" }) }),
      /* @__PURE__ */ jsx8("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ jsx8(Typography_default, { variant: "body", align: "right", children: "Right aligned text" }) }),
      /* @__PURE__ */ jsx8("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px", width: "100%" }, children: /* @__PURE__ */ jsx8(Typography_default, { variant: "body", align: "justify", children: "Justified text that spreads across the full width of the container, creating even margins on both sides. This demonstrates how justified text creates uniform spacing." }) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Line Heights" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", lineHeight: "tight", style: { marginBottom: "8px" }, children: "Tight line height (1.2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", lineHeight: "normal", style: { marginBottom: "8px" }, children: "Normal line height (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", lineHeight: "relaxed", children: "Relaxed line height (1.75) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }),
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx8(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Custom HTML Elements" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", as: "div", style: { marginBottom: "8px" }, children: "Rendered as a div element" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", as: "span", style: { marginBottom: "8px" }, children: "Rendered as a span element" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", as: "strong", style: { marginBottom: "8px" }, children: "Rendered as a strong element" }),
      /* @__PURE__ */ jsx8(Typography_default, { variant: "body", as: "em", children: "Rendered as an em element" })
    ] })
  ] });
};

// src/components/Checkbox/Checkbox.tsx
import { Check } from "phosphor-react";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var Checkbox = forwardRef(({
  checked,
  indeterminate = false,
  disabled = false,
  required = false,
  readOnly = false,
  label,
  helperText,
  errorMessage,
  warningMessage,
  size = "md",
  variant = "default",
  color = "primary",
  className = "",
  style,
  onChange,
  onClick,
  onFocus,
  onBlur,
  value,
  name,
  id,
  inputProps = {},
  ...props
}, ref) => {
  const inputRef = useRef2(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = useCallback2((event) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);
  const handleClick = useCallback2((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = useCallback2((event) => {
    if (disabled || readOnly) return;
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      const newChecked = !checked;
      onChange?.(newChecked, event);
    }
  }, [disabled, readOnly, checked, onChange]);
  const checkboxClasses = [
    "cria-checkbox",
    `cria-checkbox--${size}`,
    `cria-checkbox--${variant}`,
    `cria-checkbox--${color}`,
    checked && "cria-checkbox--checked",
    indeterminate && "cria-checkbox--indeterminate",
    disabled && "cria-checkbox--disabled",
    readOnly && "cria-checkbox--readonly",
    required && "cria-checkbox--required",
    errorMessage && "cria-checkbox--error",
    warningMessage && "cria-checkbox--warning",
    className
  ].filter(Boolean).join(" ");
  const inputClasses = [
    "cria-checkbox__input",
    `cria-checkbox__input--${size}`,
    `cria-checkbox__input--${variant}`,
    `cria-checkbox__input--${color}`
  ].filter(Boolean).join(" ");
  const labelClasses = [
    "cria-checkbox__label",
    `cria-checkbox__label--${size}`,
    disabled && "cria-checkbox__label--disabled",
    readOnly && "cria-checkbox__label--readonly"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs7("div", { className: checkboxClasses, style, ...props, children: [
    /* @__PURE__ */ jsxs7("div", { className: "cria-checkbox__container", children: [
      /* @__PURE__ */ jsx9(
        "input",
        {
          ref: inputRef,
          type: "checkbox",
          id: id || (label ? `${name || "checkbox"}-input` : void 0),
          name,
          value,
          ...checked !== void 0 ? { checked } : {},
          disabled,
          readOnly,
          required,
          className: inputClasses,
          onChange: handleChange,
          onClick: handleClick,
          onFocus,
          onBlur,
          onKeyDown: handleKeyDown,
          "aria-describedby": [
            helperText && `${id || name || "checkbox"}-helper`,
            errorMessage && `${id || name || "checkbox"}-error`,
            warningMessage && `${id || name || "checkbox"}-warning`
          ].filter(Boolean).join(" ") || void 0,
          "aria-invalid": !!errorMessage,
          "aria-checked": indeterminate ? "mixed" : checked || false,
          "aria-label": label,
          ...inputProps
        }
      ),
      /* @__PURE__ */ jsx9("div", { className: "cria-checkbox__checkmark", children: indeterminate ? /* @__PURE__ */ jsx9("div", { className: "cria-checkbox__indeterminate" }) : checked === true ? /* @__PURE__ */ jsx9(Check, { size: size === "sm" ? 12 : size === "lg" ? 20 : 16 }) : null }),
      label && /* @__PURE__ */ jsx9("label", { htmlFor: id || (label ? `${name || "checkbox"}-input` : void 0), className: labelClasses, children: /* @__PURE__ */ jsxs7(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ jsx9("span", { className: "cria-checkbox__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ jsx9(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-checkbox__helper-text",
        id: `${id || name || "checkbox"}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ jsx9(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-checkbox__error-message",
        id: `${id || name || "checkbox"}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ jsx9(
      Typography,
      {
        variant: "caption",
        color: "warning",
        className: "cria-checkbox__warning-message",
        id: `${id || name || "checkbox"}-warning`,
        children: warningMessage
      }
    )
  ] });
});
Checkbox.displayName = "Checkbox";

// src/components/Dropdown/Dropdown.tsx
import { useState as useState3, useRef as useRef3, useEffect as useEffect2, useCallback as useCallback3, forwardRef as forwardRef2, useImperativeHandle as useImperativeHandle2 } from "react";
import { CaretDown, MagnifyingGlass, Check as Check2 } from "phosphor-react";
import { Fragment, jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var Dropdown = forwardRef2(({
  options,
  value,
  defaultValue,
  placeholder = "Select an option",
  label,
  size = "md",
  variant = "default",
  disabled = false,
  required = false,
  multiple = false,
  searchable = false,
  loading = false,
  helperText,
  errorMessage,
  className = "",
  style,
  onChange,
  onOpen,
  onClose,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState3(false);
  const [searchTerm, setSearchTerm] = useState3("");
  const [focusedIndex, setFocusedIndex] = useState3(-1);
  const [selectedValues, setSelectedValues] = useState3(() => {
    const initialValue = value || defaultValue;
    return Array.isArray(initialValue) ? initialValue : initialValue ? [initialValue] : [];
  });
  const triggerRef = useRef3(null);
  const listboxRef = useRef3(null);
  const searchInputRef = useRef3(null);
  useEffect2(() => {
    if (value !== void 0) {
      setSelectedValues(Array.isArray(value) ? value : value ? [value] : []);
    }
  }, [value]);
  useImperativeHandle2(ref, () => ({
    focus: () => triggerRef.current?.focus(),
    blur: () => triggerRef.current?.blur(),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }));
  const filteredOptions = options.filter(
    (option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const getDisplayText = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      if (selectedValues.length === 1) {
        const option2 = options.find((opt) => opt.value === selectedValues[0]);
        return option2?.label || placeholder;
      }
      if (selectedValues.length === 2) {
        const selectedOptions = options.filter((opt) => selectedValues.includes(opt.value));
        return selectedOptions.map((opt) => opt.label).join(", ");
      }
      return `${selectedValues.length} selected`;
    }
    if (selectedValues.length === 0) return placeholder;
    const option = options.find((opt) => opt.value === selectedValues[0]);
    return option?.label || placeholder;
  };
  const handleOptionSelect = useCallback3((option) => {
    if (option.disabled) return;
    let newSelectedValues;
    if (multiple) {
      if (selectedValues.includes(option.value)) {
        newSelectedValues = selectedValues.filter((val) => val !== option.value);
      } else {
        newSelectedValues = [...selectedValues, option.value];
      }
    } else {
      newSelectedValues = [option.value];
      setIsOpen(false);
    }
    setSelectedValues(newSelectedValues);
    const selectedOptions = options.filter((opt) => newSelectedValues.includes(opt.value));
    onChange?.(
      multiple ? newSelectedValues : newSelectedValues[0] || "",
      multiple ? selectedOptions : selectedOptions[0]
    );
  }, [selectedValues, multiple, options, onChange]);
  const handleTriggerClick = useCallback3(() => {
    if (disabled || loading) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      onOpen?.();
      setSearchTerm("");
      setFocusedIndex(0);
    } else {
      onClose?.();
      setSearchTerm("");
      setFocusedIndex(-1);
    }
  }, [disabled, loading, isOpen, onOpen, onClose]);
  const handleKeyDown = useCallback3((event) => {
    if (disabled || loading) return;
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
        } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleOptionSelect(filteredOptions[focusedIndex]);
        }
        break;
      case "Escape":
        event.preventDefault();
        setIsOpen(false);
        setSearchTerm("");
        onClose?.();
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
          setFocusedIndex(0);
        } else {
          setFocusedIndex(
            (prev) => prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(
            (prev) => prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
      case "Home":
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(0);
        }
        break;
      case "End":
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(filteredOptions.length - 1);
        }
        break;
    }
  }, [disabled, loading, isOpen, focusedIndex, filteredOptions, onOpen, onClose, handleOptionSelect]);
  useEffect2(() => {
    const handleClickOutside = (event) => {
      if (isOpen && triggerRef.current && listboxRef.current && !triggerRef.current.contains(event.target) && !listboxRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
        onClose?.();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);
  useEffect2(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);
  const containerClasses = [
    "cria-dropdown",
    `cria-dropdown--${size}`,
    `cria-dropdown--${variant}`,
    disabled && "cria-dropdown--disabled",
    loading && "cria-dropdown--loading",
    isOpen && "cria-dropdown--open",
    errorMessage && "cria-dropdown--error",
    className
  ].filter(Boolean).join(" ");
  const triggerClasses = [
    "cria-dropdown-trigger",
    `cria-dropdown--${size}`,
    `cria-dropdown--${variant}`,
    `cria-dropdown-trigger--${size}`,
    `cria-dropdown-trigger--${variant}`,
    disabled && "cria-dropdown-trigger--disabled",
    loading && "cria-dropdown--loading",
    loading && "cria-dropdown-trigger--loading",
    isOpen && "cria-dropdown-trigger--open",
    errorMessage && "cria-dropdown-trigger--error"
  ].filter(Boolean).join(" ");
  const getTriggerStyles = () => {
    const baseStyles = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: getTriggerPadding(size),
      backgroundColor: variant === "filled" ? colors.gray[100] : colors.backgroundLight,
      border: `1px solid ${errorMessage ? colors.error : isOpen ? colors.primary : colors.border.medium}`,
      borderRadius: radii.md,
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize[size === "sm" ? "bodySmall" : size === "lg" ? "h3" : "body"],
      color: colors.text.primary,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      transition: "all 0.2s ease-in-out",
      outline: "none"
    };
    if (disabled || loading) {
      baseStyles.opacity = 0.6;
    }
    return baseStyles;
  };
  const getListboxStyles = () => ({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 1e3,
    backgroundColor: colors.backgroundLight,
    border: `1px solid ${colors.border.medium}`,
    borderRadius: radii.md,
    boxShadow: shadows.lg,
    maxHeight: "200px",
    overflowY: "auto",
    marginTop: spacing[1]
  });
  const getOptionStyles = (option, index) => ({
    padding: getOptionPadding(size),
    cursor: option.disabled ? "not-allowed" : "pointer",
    backgroundColor: index === focusedIndex ? colors.gray[100] : "transparent",
    color: option.disabled ? colors.text.disabled : colors.text.primary,
    opacity: option.disabled ? 0.6 : 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "background-color 0.15s ease-in-out"
  });
  const getOptionClasses = (option, index) => {
    const classes = [
      "cria-dropdown-option",
      index === focusedIndex && "cria-dropdown-option--focused",
      option.disabled && "cria-dropdown-option--disabled"
    ].filter(Boolean);
    return classes.join(" ");
  };
  return /* @__PURE__ */ jsxs8("div", { className: containerClasses, style, ...props, children: [
    label && /* @__PURE__ */ jsx10("label", { className: "cria-dropdown__label", children: /* @__PURE__ */ jsxs8(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ jsx10("span", { style: { color: colors.error }, children: " *" })
    ] }) }),
    /* @__PURE__ */ jsxs8(
      "button",
      {
        ref: triggerRef,
        type: "button",
        role: "combobox",
        className: triggerClasses,
        style: getTriggerStyles(),
        onClick: handleTriggerClick,
        onKeyDown: handleKeyDown,
        disabled: disabled || loading,
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        "aria-required": required,
        "aria-invalid": !!errorMessage,
        "aria-disabled": disabled || loading,
        "aria-describedby": helperText || errorMessage ? `${label || "dropdown"}-helper` : void 0,
        id: label ? `${label.toLowerCase().replace(/\s+/g, "-")}-dropdown` : void 0,
        children: [
          /* @__PURE__ */ jsx10("span", { style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
            textAlign: "left"
          }, children: getDisplayText() }),
          /* @__PURE__ */ jsx10(
            CaretDown,
            {
              size: 16,
              style: {
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease-in-out",
                flexShrink: 0,
                marginLeft: spacing[2]
              }
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs8(
      "div",
      {
        ref: listboxRef,
        role: "listbox",
        className: "cria-dropdown-listbox",
        style: getListboxStyles(),
        "aria-labelledby": triggerRef.current?.id,
        children: [
          searchable && /* @__PURE__ */ jsx10("div", { style: { padding: spacing[2], borderBottom: `1px solid ${colors.border.light}` }, children: /* @__PURE__ */ jsxs8("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsx10(
              MagnifyingGlass,
              {
                size: 16,
                style: {
                  position: "absolute",
                  left: spacing[2],
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: colors.text.secondary
                }
              }
            ),
            /* @__PURE__ */ jsx10(
              "input",
              {
                ref: searchInputRef,
                type: "text",
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value),
                placeholder: "Search options...",
                role: "textbox",
                "aria-label": "Search options",
                style: {
                  width: "100%",
                  padding: `${spacing[2]} ${spacing[2]} ${spacing[2]} ${spacing[8]}`,
                  border: `1px solid ${colors.border.medium}`,
                  borderRadius: radii.sm,
                  fontSize: typography.fontSize.bodySmall,
                  fontFamily: typography.fontFamily.primary,
                  outline: "none"
                }
              }
            )
          ] }) }),
          filteredOptions.length > 0 ? filteredOptions.map((option, index) => /* @__PURE__ */ jsxs8(
            "div",
            {
              role: "option",
              className: getOptionClasses(option, index),
              style: getOptionStyles(option, index),
              onClick: () => handleOptionSelect(option),
              "aria-selected": selectedValues.includes(option.value),
              children: [
                /* @__PURE__ */ jsxs8("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
                  option.icon && /* @__PURE__ */ jsx10("span", { style: { marginRight: spacing[2] }, children: option.icon }),
                  /* @__PURE__ */ jsxs8("div", { children: [
                    /* @__PURE__ */ jsx10("div", { style: { fontSize: typography.fontSize[size === "sm" ? "bodySmall" : "body"] }, children: option.label }),
                    option.description && /* @__PURE__ */ jsx10("div", { style: {
                      fontSize: typography.fontSize.caption,
                      color: colors.text.secondary,
                      marginTop: spacing[1]
                    }, children: option.description })
                  ] })
                ] }),
                selectedValues.includes(option.value) && /* @__PURE__ */ jsx10(Check2, { size: 16, style: { color: colors.primary, flexShrink: 0 } })
              ]
            },
            option.value
          )) : /* @__PURE__ */ jsx10("div", { style: {
            padding: spacing[4],
            textAlign: "center",
            color: colors.text.secondary,
            fontSize: typography.fontSize.bodySmall
          }, children: "No options found" })
        ]
      }
    ),
    (helperText || errorMessage) && /* @__PURE__ */ jsx10(
      "div",
      {
        id: `${label || "dropdown"}-helper`,
        className: "cria-dropdown__messages",
        style: { marginTop: spacing[1] },
        children: errorMessage ? /* @__PURE__ */ jsx10(Typography, { variant: "bodySmall", color: "error", children: errorMessage }) : /* @__PURE__ */ jsx10(Typography, { variant: "bodySmall", color: "secondary", children: helperText })
      }
    )
  ] });
});
Dropdown.displayName = "Dropdown";
function getTriggerPadding(size) {
  switch (size) {
    case "sm":
      return `${spacing[2]} ${spacing[3]}`;
    case "md":
      return `${spacing[3]} ${spacing[4]}`;
    case "lg":
      return `${spacing[4]} ${spacing[5]}`;
    default:
      return `${spacing[3]} ${spacing[4]}`;
  }
}
function getOptionPadding(size) {
  switch (size) {
    case "sm":
      return `${spacing[2]} ${spacing[3]}`;
    case "md":
      return `${spacing[3]} ${spacing[4]}`;
    case "lg":
      return `${spacing[4]} ${spacing[5]}`;
    default:
      return `${spacing[3]} ${spacing[4]}`;
  }
}
var DropdownItem = ({
  value,
  label,
  disabled = false,
  icon,
  description,
  children
}) => {
  return /* @__PURE__ */ jsxs8("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
    icon && /* @__PURE__ */ jsx10("span", { style: { marginRight: spacing[2] }, children: icon }),
    /* @__PURE__ */ jsx10("div", { children: children || /* @__PURE__ */ jsxs8(Fragment, { children: [
      /* @__PURE__ */ jsx10("div", { children: label }),
      description && /* @__PURE__ */ jsx10("div", { style: {
        fontSize: typography.fontSize.caption,
        color: colors.text.secondary,
        marginTop: spacing[1]
      }, children: description })
    ] }) })
  ] });
};

// src/components/Input/Input.tsx
import React7, { forwardRef as forwardRef3, useRef as useRef4, useImperativeHandle as useImperativeHandle3, useCallback as useCallback4 } from "react";
import { Eye, EyeSlash, X as X2, Check as Check3, WarningCircle } from "phosphor-react";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var Input = forwardRef3(({
  label,
  placeholder,
  size = "md",
  variant = "default",
  state = "default",
  disabled = false,
  required = false,
  readOnly = false,
  showPasswordToggle = false,
  showClearButton = false,
  showCharacterCount = false,
  maxLength,
  helperText,
  errorMessage,
  successMessage,
  warningMessage,
  leftIcon,
  rightIcon,
  className = "",
  style,
  onChange,
  onClear,
  onFocus,
  onBlur,
  type = "text",
  value,
  defaultValue,
  ...props
}, ref) => {
  const inputRef = useRef4(null);
  const [showPassword, setShowPassword] = React7.useState(false);
  const [isFocused, setIsFocused] = React7.useState(false);
  useImperativeHandle3(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    select: () => inputRef.current?.select(),
    getValue: () => inputRef.current?.value || "",
    setValue: (newValue) => {
      if (inputRef.current) {
        inputRef.current.value = newValue;
      }
    }
  }));
  const handlePasswordToggle = useCallback4(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  const handleClear = useCallback4(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      onChange?.({
        target: inputRef.current,
        currentTarget: inputRef.current
      });
      onClear?.();
    }
  }, [onChange, onClear]);
  const handleFocus = useCallback4((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = useCallback4((event) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);
  const currentState = errorMessage ? "error" : successMessage ? "success" : warningMessage ? "warning" : state;
  const inputType = type === "password" && showPassword ? "text" : type;
  const containerClasses = [
    "cria-input-container",
    `cria-input-container--${size}`,
    `cria-input-container--${variant}`,
    `cria-input-container--${currentState}`,
    disabled && "cria-input-container--disabled",
    readOnly && "cria-input-container--readonly",
    isFocused && "cria-input-container--focused",
    leftIcon && "cria-input-container--with-left-icon",
    (rightIcon || showPasswordToggle || showClearButton) && "cria-input-container--with-right-icon",
    className
  ].filter(Boolean).join(" ");
  const inputClasses = [
    "cria-input",
    `cria-input--${size}`,
    `cria-input--${variant}`,
    `cria-input--${currentState}`,
    disabled && "cria-input--disabled",
    readOnly && "cria-input--readonly",
    isFocused && "cria-input--focused"
  ].filter(Boolean).join(" ");
  const currentValue = value || inputRef.current?.value || "";
  const characterCount = String(currentValue).length;
  const shouldShowClearButton = showClearButton && currentValue && !disabled && !readOnly;
  const shouldShowPasswordToggle = showPasswordToggle && type === "password" && !disabled && !readOnly;
  return /* @__PURE__ */ jsxs9("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ jsx11("label", { className: "cria-input__label", children: /* @__PURE__ */ jsxs9(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ jsx11("span", { className: "cria-input__required", children: " *" })
    ] }) }),
    /* @__PURE__ */ jsxs9("div", { className: "cria-input__wrapper", children: [
      leftIcon && /* @__PURE__ */ jsx11("div", { className: "cria-input__left-icon", children: leftIcon }),
      /* @__PURE__ */ jsx11(
        "input",
        {
          ref: inputRef,
          type: inputType,
          className: inputClasses,
          placeholder,
          disabled,
          readOnly,
          required,
          maxLength,
          value,
          defaultValue,
          onChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          ...props
        }
      ),
      (rightIcon || shouldShowPasswordToggle || shouldShowClearButton) && /* @__PURE__ */ jsxs9("div", { className: "cria-input__right-icons", children: [
        shouldShowClearButton && /* @__PURE__ */ jsx11(
          "button",
          {
            type: "button",
            className: "cria-input__clear-button",
            onClick: handleClear,
            "aria-label": "Clear input",
            children: /* @__PURE__ */ jsx11(X2, { size: 16 })
          }
        ),
        shouldShowPasswordToggle && /* @__PURE__ */ jsx11(
          "button",
          {
            type: "button",
            className: "cria-input__password-toggle",
            onClick: handlePasswordToggle,
            "aria-label": showPassword ? "Hide password" : "Show password",
            children: showPassword ? /* @__PURE__ */ jsx11(EyeSlash, { size: 16 }) : /* @__PURE__ */ jsx11(Eye, { size: 16 })
          }
        ),
        rightIcon && /* @__PURE__ */ jsx11("div", { className: "cria-input__right-icon", children: rightIcon })
      ] })
    ] }),
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ jsxs9("div", { className: "cria-input__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ jsx11(Typography, { variant: "body", color: "secondary", className: "cria-input__helper-text", children: helperText }),
      errorMessage && /* @__PURE__ */ jsxs9(Typography, { variant: "body", color: "error", className: "cria-input__error-message", children: [
        /* @__PURE__ */ jsx11(WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        errorMessage
      ] }),
      successMessage && /* @__PURE__ */ jsxs9(Typography, { variant: "body", color: "success", className: "cria-input__success-message", children: [
        /* @__PURE__ */ jsx11(Check3, { size: 14, style: { marginRight: "4px" } }),
        successMessage
      ] }),
      warningMessage && /* @__PURE__ */ jsxs9(Typography, { variant: "body", color: "warning", className: "cria-input__warning-message", children: [
        /* @__PURE__ */ jsx11(WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        warningMessage
      ] }),
      showCharacterCount && maxLength && /* @__PURE__ */ jsxs9(Typography, { variant: "body", color: "secondary", className: "cria-input__character-count", children: [
        characterCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});
Input.displayName = "Input";

// src/components/Modal/Modal.tsx
import { useEffect as useEffect3, useRef as useRef5, useCallback as useCallback5 } from "react";
import { X as X3 } from "phosphor-react";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockBodyScroll = true,
  centered = true,
  className = "",
  style,
  footer,
  showHeader = true,
  showFooter = false,
  overlayClassName = "",
  overlayStyle,
  scrollable = true,
  animationDuration = 200,
  ...props
}) => {
  const modalRef = useRef5(null);
  const previousActiveElement = useRef5(null);
  const overlayRef = useRef5(null);
  const handleEscapeKey = useCallback5((event) => {
    if (event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  }, [closeOnEscape, onClose]);
  const handleOverlayClick = useCallback5((event) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);
  const handleFocus = useCallback5(() => {
    if (modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      if (firstElement) {
        firstElement.focus();
      }
    }
  }, []);
  const toggleBodyScroll = useCallback5((lock) => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, []);
  useEffect3(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.addEventListener("keydown", handleEscapeKey);
      if (lockBodyScroll) {
        toggleBodyScroll(true);
      }
      setTimeout(handleFocus, 0);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      if (lockBodyScroll) {
        toggleBodyScroll(false);
      }
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      if (lockBodyScroll) {
        toggleBodyScroll(false);
      }
    };
  }, [isOpen, handleEscapeKey, lockBodyScroll, handleFocus]);
  const overlayClasses = [
    "cria-modal-overlay",
    isOpen ? "cria-modal-overlay--visible" : "",
    overlayClassName
  ].filter(Boolean).join(" ");
  const modalClasses = [
    "cria-modal",
    `cria-modal--${size}`,
    centered ? "cria-modal--centered" : "",
    scrollable ? "cria-modal--scrollable" : "",
    isOpen ? "cria-modal--visible" : "",
    className
  ].filter(Boolean).join(" ");
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsx12(
    "div",
    {
      ref: overlayRef,
      className: overlayClasses,
      style: {
        animationDuration: `${animationDuration}ms`,
        ...overlayStyle
      },
      onClick: handleOverlayClick,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? "modal-title" : void 0,
      "aria-describedby": "modal-content",
      children: /* @__PURE__ */ jsxs10(
        "div",
        {
          ref: modalRef,
          className: modalClasses,
          style: {
            animationDuration: `${animationDuration}ms`,
            ...style
          },
          ...props,
          children: [
            showHeader && /* @__PURE__ */ jsxs10("div", { className: "cria-modal__header", children: [
              title && /* @__PURE__ */ jsx12(
                Typography,
                {
                  id: "modal-title",
                  variant: "h3",
                  weight: "semiBold",
                  className: "cria-modal__title",
                  children: title
                }
              ),
              showCloseButton && /* @__PURE__ */ jsx12(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onClose,
                  className: "cria-modal__close-button",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ jsx12(X3, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx12(
              "div",
              {
                id: "modal-content",
                className: "cria-modal__content",
                children
              }
            ),
            showFooter && footer && /* @__PURE__ */ jsx12("div", { className: "cria-modal__footer", children: footer })
          ]
        }
      )
    }
  );
};

// src/components/Navigation/Navigation.tsx
import { useState as useState4, useCallback as useCallback6, useEffect as useEffect4 } from "react";
import { List, CaretDown as CaretDown2, CaretRight, CaretLeft } from "phosphor-react";
import { Fragment as Fragment2, jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
var Sidebar = ({
  items,
  activeRoute,
  collapsed = false,
  onToggle,
  showToggle = true,
  title,
  titleHref,
  className,
  style,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState4(false);
  const [expandedItems, setExpandedItems] = useState4(
    new Set(items.filter((item) => item.defaultExpanded).map((item) => item.id))
  );
  useEffect4(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleToggle = useCallback6(() => {
    onToggle?.(!collapsed);
  }, [collapsed, onToggle]);
  const handleSubitemToggle = useCallback6((itemId) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);
  const handleKeyDown = useCallback6((event, index) => {
    const currentIndex = index;
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (nextIndex < items.length) {
          const nextItem = document.querySelector(`[data-nav-item="${nextIndex}"]`);
          nextItem?.focus();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (prevIndex >= 0) {
          const prevItem = document.querySelector(`[data-nav-item="${prevIndex}"]`);
          prevItem?.focus();
        }
        break;
    }
  }, [items.length]);
  const sidebarClasses = [
    "cria-sidebar",
    collapsed && "cria-sidebar--collapsed",
    !collapsed && "cria-sidebar--expanded",
    isMobile && "cria-sidebar--mobile",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs11(
    "nav",
    {
      className: sidebarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ jsxs11("div", { className: "cria-sidebar__header", children: [
          title && /* @__PURE__ */ jsx13("div", { className: "cria-sidebar__title-section", children: titleHref ? /* @__PURE__ */ jsx13("a", { href: titleHref, className: "cria-sidebar__title-link", children: collapsed ? /* @__PURE__ */ jsx13("div", { className: "cria-sidebar__logo", children: /* @__PURE__ */ jsx13(
            "img",
            {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MF9saW5lYXJfMV8xIiB4MT0iMCIgeTE9IjAiIHgyPSIzMiIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3MzQ2QTAiLz4KPHN0b3Agb2Zmc2V0PSIwLjMiIHN0b3AtY29sb3I9IiM4QzVBRjQiLz4KPHN0b3Agb2Zmc2V0PSIwLjciIHN0b3AtY29sb3I9IiM0QjU2NjMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN0I0N0Y1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+",
              alt: "CRIA.lab",
              className: "cria-sidebar__logo-img"
            }
          ) }) : /* @__PURE__ */ jsx13(Typography, { variant: "h3", weight: "bold", color: "primary", children: title }) }) : collapsed ? /* @__PURE__ */ jsx13("div", { className: "cria-sidebar__logo", children: /* @__PURE__ */ jsx13(
            "img",
            {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MF9saW5lYXJfMV8xIiB4MT0iMCIgeTE9IjAiIHgyPSIzMiIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3MzQ2QTAiLz4KPHN0b3Agb2Zmc2V0PSIwLjMiIHN0b3AtY29sb3I9IiM4QzVBRjQiLz4KPHN0b3Agb2Zmc2V0PSIwLjciIHN0b3AtY29sb3I9IiM0QjU2NjMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN0I0N0Y1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+",
              alt: "CRIA.lab",
              className: "cria-sidebar__logo-img"
            }
          ) }) : /* @__PURE__ */ jsx13(Typography, { variant: "h3", weight: "bold", color: "primary", children: title }) }),
          showToggle && /* @__PURE__ */ jsx13(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleToggle,
              "aria-label": "Toggle sidebar",
              className: "cria-sidebar__toggle",
              children: collapsed ? /* @__PURE__ */ jsx13(CaretRight, { size: 16 }) : /* @__PURE__ */ jsx13(CaretLeft, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx13("div", { className: "cria-sidebar__content", children: /* @__PURE__ */ jsx13("ul", { className: "cria-sidebar__items", role: "menubar", children: items.map((item, index) => {
          const hasSubitems = item.subitems && item.subitems.length > 0;
          const isExpanded = expandedItems.has(item.id);
          const isActive = activeRoute === item.href || hasSubitems && item.subitems?.some((subitem) => activeRoute === subitem.href);
          return /* @__PURE__ */ jsxs11("li", { className: "cria-sidebar__item-wrapper", children: [
            hasSubitems ? /* @__PURE__ */ jsxs11(
              "div",
              {
                className: [
                  "cria-sidebar__item",
                  "cria-sidebar__item--group",
                  isActive && "cria-sidebar__item--active",
                  item.disabled && "cria-sidebar__item--disabled"
                ].filter(Boolean).join(" "),
                "data-nav-item": index,
                tabIndex: item.disabled ? -1 : 0,
                onKeyDown: (e) => handleKeyDown(e, index),
                children: [
                  item.icon && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
                  !collapsed && /* @__PURE__ */ jsxs11(Fragment2, { children: [
                    /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__label", children: item.label }),
                    /* @__PURE__ */ jsx13(
                      "button",
                      {
                        className: "cria-sidebar__subitem-toggle",
                        onClick: () => handleSubitemToggle(item.id),
                        "aria-expanded": isExpanded,
                        "aria-label": `Toggle ${item.label} submenu`,
                        children: isExpanded ? /* @__PURE__ */ jsx13(CaretDown2, { size: 16 }) : /* @__PURE__ */ jsx13(CaretRight, { size: 16 })
                      }
                    )
                  ] }),
                  item.badge && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
                ]
              }
            ) : /* @__PURE__ */ jsxs11(
              "a",
              {
                href: item.href,
                className: [
                  "cria-sidebar__item",
                  isActive && "cria-sidebar__item--active",
                  item.disabled && "cria-sidebar__item--disabled"
                ].filter(Boolean).join(" "),
                "data-nav-item": index,
                tabIndex: item.disabled ? -1 : 0,
                onKeyDown: (e) => handleKeyDown(e, index),
                onClick: item.onClick,
                "aria-current": activeRoute === item.href ? "page" : void 0,
                "aria-disabled": item.disabled,
                children: [
                  item.icon && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
                  !collapsed && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__label", children: item.label }),
                  item.badge && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
                ]
              }
            ),
            hasSubitems && isExpanded && !collapsed && /* @__PURE__ */ jsx13("ul", { className: "cria-sidebar__subitems", role: "menu", children: item.subitems?.map((subitem) => /* @__PURE__ */ jsx13("li", { className: "cria-sidebar__subitem-wrapper", children: /* @__PURE__ */ jsxs11(
              "a",
              {
                href: subitem.href,
                className: [
                  "cria-sidebar__subitem",
                  activeRoute === subitem.href && "cria-sidebar__subitem--active",
                  subitem.disabled && "cria-sidebar__subitem--disabled"
                ].filter(Boolean).join(" "),
                onClick: subitem.onClick,
                "aria-current": activeRoute === subitem.href ? "page" : void 0,
                "aria-disabled": subitem.disabled,
                children: [
                  subitem.icon && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__subitem-icon", "aria-hidden": "true", children: subitem.icon }),
                  /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__subitem-label", children: subitem.label }),
                  subitem.badge && /* @__PURE__ */ jsx13("span", { className: "cria-sidebar__subitem-badge", "aria-hidden": "true", children: subitem.badge })
                ]
              }
            ) }, subitem.id)) })
          ] }, item.id);
        }) }) })
      ]
    }
  );
};
var Topbar = ({
  items,
  activeRoute,
  brand,
  brandHref,
  showMobileMenu = false,
  onMobileMenuToggle,
  className,
  style,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState4(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState4(false);
  useEffect4(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleMobileMenuToggle = useCallback6(() => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  }, [mobileMenuOpen, onMobileMenuToggle]);
  const handleKeyDown = useCallback6((event, index) => {
    const currentIndex = index;
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        if (nextIndex < items.length) {
          const nextItem = document.querySelector(`[data-nav-item="${nextIndex}"]`);
          nextItem?.focus();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (prevIndex >= 0) {
          const prevItem = document.querySelector(`[data-nav-item="${prevIndex}"]`);
          prevItem?.focus();
        }
        break;
    }
  }, [items.length]);
  const topbarClasses = [
    "cria-topbar",
    isMobile && "cria-topbar--mobile",
    className
  ].filter(Boolean).join(" ");
  const itemsClasses = [
    "cria-topbar__items",
    isMobile && !mobileMenuOpen && "cria-topbar__items--hidden"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs11(
    "nav",
    {
      className: topbarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ jsxs11("div", { className: "cria-topbar__content", children: [
          brand && /* @__PURE__ */ jsx13("div", { className: "cria-topbar__brand", children: brandHref ? /* @__PURE__ */ jsx13("a", { href: brandHref, className: "cria-topbar__brand-link", children: /* @__PURE__ */ jsx13(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }) : /* @__PURE__ */ jsx13(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }),
          /* @__PURE__ */ jsx13("div", { className: itemsClasses, children: /* @__PURE__ */ jsx13("ul", { className: "cria-topbar__items-list", role: "menubar", children: items.map((item, index) => /* @__PURE__ */ jsx13("li", { className: "cria-topbar__item-wrapper", children: /* @__PURE__ */ jsxs11(
            "a",
            {
              href: item.href,
              className: [
                "cria-topbar__item",
                activeRoute === item.href && "cria-topbar__item--active",
                item.disabled && "cria-topbar__item--disabled"
              ].filter(Boolean).join(" "),
              "data-nav-item": index,
              tabIndex: item.disabled ? -1 : 0,
              onKeyDown: (e) => handleKeyDown(e, index),
              onClick: item.onClick,
              "aria-current": activeRoute === item.href ? "page" : void 0,
              "aria-disabled": item.disabled,
              children: [
                item.icon && /* @__PURE__ */ jsx13("span", { className: "cria-topbar__icon", "aria-hidden": "true", children: item.icon }),
                /* @__PURE__ */ jsx13("span", { className: "cria-topbar__label", children: item.label }),
                item.badge && /* @__PURE__ */ jsx13("span", { className: "cria-topbar__badge", "aria-hidden": "true", children: item.badge })
              ]
            }
          ) }, item.id)) }) }),
          isMobile && /* @__PURE__ */ jsx13(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleMobileMenuToggle,
              "aria-label": "Toggle menu",
              "aria-expanded": mobileMenuOpen,
              className: "cria-topbar__mobile-toggle",
              children: /* @__PURE__ */ jsx13(List, { size: 16 })
            }
          )
        ] }),
        isMobile && mobileMenuOpen && /* @__PURE__ */ jsx13("div", { className: "cria-topbar__mobile-menu", role: "menu", children: /* @__PURE__ */ jsx13("ul", { className: "cria-topbar__mobile-items", children: items.map((item) => /* @__PURE__ */ jsx13("li", { className: "cria-topbar__mobile-item-wrapper", children: /* @__PURE__ */ jsxs11(
          "a",
          {
            href: item.href,
            className: [
              "cria-topbar__mobile-item",
              activeRoute === item.href && "cria-topbar__mobile-item--active",
              item.disabled && "cria-topbar__mobile-item--disabled"
            ].filter(Boolean).join(" "),
            onClick: item.onClick,
            "aria-current": activeRoute === item.href ? "page" : void 0,
            "aria-disabled": item.disabled,
            children: [
              item.icon && /* @__PURE__ */ jsx13("span", { className: "cria-topbar__mobile-icon", "aria-hidden": "true", children: item.icon }),
              /* @__PURE__ */ jsx13("span", { className: "cria-topbar__mobile-label", children: item.label }),
              item.badge && /* @__PURE__ */ jsx13("span", { className: "cria-topbar__mobile-badge", "aria-hidden": "true", children: item.badge })
            ]
          }
        ) }, item.id)) }) })
      ]
    }
  );
};
var Navigation = ({
  sidebar,
  topbar,
  variant = "both",
  className,
  style,
  ...props
}) => {
  const navigationClasses = [
    "cria-navigation",
    `cria-navigation--${variant}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs11("div", { className: navigationClasses, style, ...props, children: [
    sidebar && (variant === "sidebar-only" || variant === "both") && /* @__PURE__ */ jsx13(Sidebar, { ...sidebar }),
    topbar && (variant === "topbar-only" || variant === "both") && /* @__PURE__ */ jsx13(Topbar, { ...topbar })
  ] });
};

// src/components/RadioGroup/RadioGroup.tsx
import { createContext as createContext2, useContext as useContext2, useCallback as useCallback7, useRef as useRef7 } from "react";
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var RadioGroupContext = createContext2(null);
var useRadioGroup = () => {
  const context = useContext2(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroup components must be used within a RadioGroup");
  }
  return context;
};
function getSizeStyles4(size) {
  switch (size) {
    case "sm":
      return {
        fontSize: typography.fontSize.bodySmall,
        gap: spacing[2]
      };
    case "lg":
      return {
        fontSize: typography.fontSize.body,
        gap: spacing[4]
      };
    case "md":
    default:
      return {
        fontSize: typography.fontSize.body,
        gap: spacing[3]
      };
  }
}
function getOrientationStyles(orientation) {
  switch (orientation) {
    case "horizontal":
      return {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: spacing[4]
      };
    case "vertical":
    default:
      return {
        display: "flex",
        flexDirection: "column",
        gap: spacing[2]
      };
  }
}
var RadioGroup = ({
  name,
  value,
  onChange,
  disabled = false,
  required = false,
  size = "md",
  error,
  orientation = "vertical",
  className = "",
  style,
  children,
  ...props
}) => {
  const fieldsetRef = useRef7(null);
  const contextValue = {
    name,
    value,
    onChange,
    disabled,
    required,
    size,
    error,
    orientation
  };
  const handleKeyDown = useCallback7((event) => {
    if (disabled) return;
    const radios = fieldsetRef.current?.querySelectorAll('input[type="radio"]');
    if (!radios.length) return;
    const currentIndex = Array.from(radios).findIndex((radio) => radio === document.activeElement);
    let nextIndex = currentIndex;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        nextIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
        break;
      case " ":
      case "Enter":
        event.preventDefault();
        if (currentIndex >= 0) {
          radios[currentIndex].click();
        }
        break;
      default:
        return;
    }
    if (nextIndex !== currentIndex && radios[nextIndex]) {
      radios[nextIndex].focus();
    }
  }, [disabled]);
  const classes = [
    "cria-radio-group",
    `cria-radio-group--${size}`,
    `cria-radio-group--${orientation}`,
    disabled && "cria-radio-group--disabled",
    error && "cria-radio-group--error",
    className
  ].filter(Boolean).join(" ");
  const fieldsetStyles = {
    border: "none",
    padding: 0,
    margin: 0,
    ...getSizeStyles4(size),
    ...getOrientationStyles(orientation),
    ...style
  };
  return /* @__PURE__ */ jsx14(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs12(
    "fieldset",
    {
      ref: fieldsetRef,
      className: classes,
      style: fieldsetStyles,
      disabled,
      "aria-required": required,
      "aria-invalid": error ? "true" : void 0,
      onKeyDown: handleKeyDown,
      ...props,
      children: [
        children,
        error && /* @__PURE__ */ jsxs12(
          "div",
          {
            role: "alert",
            style: {
              color: colors.error,
              fontSize: typography.fontSize.caption,
              marginTop: spacing[2],
              display: "flex",
              alignItems: "center",
              gap: spacing[1]
            },
            children: [
              /* @__PURE__ */ jsx14("span", { children: "\u26A0" }),
              error
            ]
          }
        )
      ]
    }
  ) });
};
var RadioGroupLabel = ({
  children,
  className = "",
  style,
  id,
  ...props
}) => {
  const { required, size, name } = useRadioGroup();
  const labelId = id || `${name}-legend`;
  const classes = [
    "cria-radio-group-label",
    `cria-radio-group-label--${size}`,
    className
  ].filter(Boolean).join(" ");
  const labelStyles = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing[2],
    display: "block",
    ...style
  };
  return /* @__PURE__ */ jsxs12(
    "legend",
    {
      id: labelId,
      className: classes,
      style: labelStyles,
      "aria-required": required,
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ jsx14(
          "span",
          {
            style: {
              color: colors.error,
              marginLeft: spacing[1]
            },
            "aria-label": "required",
            children: "*"
          }
        )
      ]
    }
  );
};
var RadioGroupItem = ({
  value,
  children,
  disabled = false,
  id,
  className = "",
  style,
  ...props
}) => {
  const { name, value: selectedValue, onChange, disabled: groupDisabled, size } = useRadioGroup();
  const isDisabled = disabled || groupDisabled;
  const isSelected = selectedValue === value;
  const inputId = id || `${name}-${value}`;
  const labelId = `${inputId}-label`;
  const handleChange = useCallback7((event) => {
    if (isDisabled) return;
    if (onChange) {
      onChange(value);
    }
  }, [isDisabled, onChange, value]);
  const classes = [
    "cria-radio-group-item",
    `cria-radio-group-item--${size}`,
    isSelected && "cria-radio-group-item--selected",
    isDisabled && "cria-radio-group-item--disabled",
    className
  ].filter(Boolean).join(" ");
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    gap: spacing[2],
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.6 : 1,
    ...style
  };
  const inputStyles = {
    appearance: "none",
    width: size === "sm" ? "16px" : size === "lg" ? "20px" : "18px",
    height: size === "sm" ? "16px" : size === "lg" ? "20px" : "18px",
    borderRadius: "50%",
    border: `2px solid ${isSelected ? colors.primary : colors.border.medium}`,
    backgroundColor: isSelected ? colors.primary : colors.backgroundLight,
    position: "relative",
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease-in-out",
    margin: 0,
    flexShrink: 0
  };
  const labelStyles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: getSizeStyles4(size).fontSize,
    color: isDisabled ? colors.text.disabled : colors.text.primary,
    cursor: isDisabled ? "not-allowed" : "pointer",
    userSelect: "none",
    flex: 1
  };
  return /* @__PURE__ */ jsxs12("div", { className: classes, style: containerStyles, children: [
    /* @__PURE__ */ jsx14(
      "input",
      {
        type: "radio",
        id: inputId,
        name,
        value,
        ...onChange ? { checked: isSelected } : {},
        onChange: handleChange,
        disabled: isDisabled,
        style: inputStyles,
        "aria-labelledby": labelId,
        ...props
      }
    ),
    /* @__PURE__ */ jsx14(
      "label",
      {
        id: labelId,
        htmlFor: inputId,
        style: labelStyles,
        children
      }
    )
  ] });
};

// src/components/Sidebar/Sidebar.tsx
import { useState as useState5, useCallback as useCallback8, useRef as useRef8, useEffect as useEffect5 } from "react";
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
var Sidebar2 = ({
  items,
  activeItem: controlledActiveItem,
  defaultActiveItem,
  onChange,
  variant = "default",
  size = "md",
  showContent = true,
  collapsible = false,
  collapsed: controlledCollapsed,
  onCollapseChange,
  className = "",
  style,
  ...props
}) => {
  const [internalActiveItem, setInternalActiveItem] = useState5(
    defaultActiveItem || items[0]?.id || ""
  );
  const [internalCollapsed, setInternalCollapsed] = useState5(false);
  const isControlled = controlledActiveItem !== void 0;
  const activeItem = isControlled ? controlledActiveItem : internalActiveItem;
  const isCollapseControlled = controlledCollapsed !== void 0;
  const collapsed = isCollapseControlled ? controlledCollapsed : internalCollapsed;
  const itemRefs = useRef8({});
  const sidebarRef = useRef8(null);
  const handleItemChange = useCallback8((itemId) => {
    if (isControlled) {
      onChange?.(itemId);
    } else {
      setInternalActiveItem(itemId);
      onChange?.(itemId);
    }
  }, [isControlled, onChange]);
  const handleCollapseToggle = useCallback8(() => {
    if (isCollapseControlled) {
      onCollapseChange?.(!collapsed);
    } else {
      setInternalCollapsed(!collapsed);
      onCollapseChange?.(!collapsed);
    }
  }, [isCollapseControlled, collapsed, onCollapseChange]);
  const handleKeyDown = useCallback8((event, itemId) => {
    const flatItems = items.flatMap(
      (item) => item.children ? [item, ...item.children] : [item]
    );
    const itemIds = flatItems.map((item) => item.id);
    const currentIndex = itemIds.indexOf(itemId);
    let nextIndex = currentIndex;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % itemIds.length;
        break;
      case "ArrowUp":
        event.preventDefault();
        nextIndex = (currentIndex - 1 + itemIds.length) % itemIds.length;
        break;
      case "Home":
        event.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        event.preventDefault();
        nextIndex = itemIds.length - 1;
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        handleItemChange(itemId);
        return;
      default:
        return;
    }
    while (flatItems[nextIndex]?.disabled && nextIndex !== currentIndex) {
      if (event.key === "ArrowDown") {
        nextIndex = (nextIndex + 1) % itemIds.length;
      } else {
        nextIndex = (nextIndex - 1 + itemIds.length) % itemIds.length;
      }
    }
    const nextItemId = itemIds[nextIndex];
    if (nextItemId) {
      handleItemChange(nextItemId);
      itemRefs.current[nextItemId]?.focus();
    }
  }, [items, handleItemChange]);
  useEffect5(() => {
    if (activeItem && itemRefs.current[activeItem]) {
      itemRefs.current[activeItem]?.focus();
    }
  }, [activeItem]);
  const containerClasses = [
    "cria-sidebar",
    `cria-sidebar--${variant}`,
    `cria-sidebar--${size}`,
    collapsed ? "cria-sidebar--collapsed" : null,
    collapsible ? "cria-sidebar--collapsible" : null,
    className
  ].filter(Boolean).join(" ");
  const contentClasses = [
    "cria-sidebar__content",
    `cria-sidebar__content--${variant}`,
    `cria-sidebar__content--${size}`
  ].filter(Boolean).join(" ");
  const activeItemData = items.find((item) => item.id === activeItem) || items.flatMap((item) => item.children || []).find((item) => item.id === activeItem);
  const renderSidebarItem = (item, level = 0) => {
    const isActive = item.id === activeItem;
    const isDisabled = item.disabled;
    const hasChildren = item.children && item.children.length > 0;
    const itemClasses = [
      "cria-sidebar__item",
      `cria-sidebar__item--${variant}`,
      `cria-sidebar__item--${size}`,
      `cria-sidebar__item--level-${level}`,
      isActive ? "cria-sidebar__item--active" : null,
      isDisabled ? "cria-sidebar__item--disabled" : null,
      hasChildren ? "cria-sidebar__item--has-children" : null
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs13("div", { className: "cria-sidebar__item-wrapper", children: [
      /* @__PURE__ */ jsxs13(
        "button",
        {
          ref: (el) => {
            itemRefs.current[item.id] = el;
          },
          className: itemClasses,
          role: "menuitem",
          "aria-selected": isActive,
          "aria-disabled": isDisabled,
          "aria-expanded": hasChildren ? item.expanded ? "true" : "false" : void 0,
          tabIndex: isActive ? 0 : -1,
          disabled: isDisabled,
          onClick: () => !isDisabled && handleItemChange(item.id),
          onKeyDown: (e) => !isDisabled && handleKeyDown(e, item.id),
          children: [
            item.icon && /* @__PURE__ */ jsx15("span", { className: "cria-sidebar__item-icon", children: item.icon }),
            !collapsed && /* @__PURE__ */ jsx15("span", { className: "cria-sidebar__item-label", children: item.label }),
            !collapsed && item.badge && /* @__PURE__ */ jsx15("span", { className: "cria-sidebar__item-badge", children: item.badge }),
            hasChildren && !collapsed && /* @__PURE__ */ jsx15("span", { className: "cria-sidebar__item-arrow", children: item.expanded ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      hasChildren && !collapsed && item.expanded && /* @__PURE__ */ jsx15("div", { className: "cria-sidebar__submenu", children: item.children?.map((child) => renderSidebarItem(child, level + 1)) })
    ] }, item.id);
  };
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      ref: sidebarRef,
      className: containerClasses,
      style,
      role: "navigation",
      "aria-label": "Sidebar navigation",
      ...props,
      children: [
        collapsible && /* @__PURE__ */ jsx15(
          "button",
          {
            className: "cria-sidebar__toggle",
            onClick: handleCollapseToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? "\u25B6" : "\u25C0"
          }
        ),
        /* @__PURE__ */ jsx15("div", { className: "cria-sidebar__items", role: "menu", children: items.map((item) => renderSidebarItem(item)) }),
        showContent && activeItemData?.content && /* @__PURE__ */ jsx15(
          "div",
          {
            className: contentClasses,
            role: "main",
            "aria-labelledby": `cria-sidebar-item-${activeItemData.id}`,
            children: activeItemData.content
          }
        )
      ]
    }
  );
};

// src/components/Snackbar/Snackbar.tsx
import * as React12 from "react";
import { createPortal } from "react-dom";
import { X as X4, CheckCircle, Info } from "phosphor-react";
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var Snackbar = React12.forwardRef(({
  message,
  open,
  title,
  variant = "default",
  position = "top",
  autoHideDuration = 4e3,
  dismissible = true,
  action,
  icon,
  onClose,
  className,
  style,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = React12.useState(open);
  const [isAnimating, setIsAnimating] = React12.useState(false);
  const timeoutRef = React12.useRef(null);
  React12.useEffect(() => {
    if (open && autoHideDuration > 0) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, autoHideDuration]);
  React12.useEffect(() => {
    if (open) {
      setIsVisible(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 100);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300);
    }
  }, [open]);
  const handleClose = React12.useCallback(() => {
    onClose?.();
  }, [onClose]);
  const handleBackdropClick = React12.useCallback((event) => {
    if (dismissible && event.target === event.currentTarget) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  const handleKeyDown = React12.useCallback((event) => {
    if (event.key === "Escape" && dismissible) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  React12.useImperativeHandle(ref, () => ({
    close: handleClose
  }), [handleClose]);
  if (!isVisible) {
    return null;
  }
  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return /* @__PURE__ */ jsx16(CheckCircle, { size: 20, "data-testid": "snackbar-icon" });
      case "error":
        return /* @__PURE__ */ jsx16(X4, { size: 20, "data-testid": "snackbar-icon" });
      case "warning":
        return /* @__PURE__ */ jsx16(Info, { size: 20, "data-testid": "snackbar-icon" });
      case "info":
        return /* @__PURE__ */ jsx16(Info, { size: 20, "data-testid": "snackbar-icon" });
      default:
        return null;
    }
  };
  const displayIcon = icon || getDefaultIcon();
  const isAlert = variant === "error" || variant === "warning";
  const role = isAlert ? "alert" : "status";
  const ariaLive = isAlert ? "assertive" : "polite";
  const containerClasses = [
    "cria-snackbar-container",
    `cria-snackbar-container--${position}`
  ].filter(Boolean).join(" ");
  const snackbarClasses = [
    "cria-snackbar",
    `cria-snackbar--${variant}`,
    isAnimating && open && "cria-snackbar--entering",
    isAnimating && !open && "cria-snackbar--exiting",
    className
  ].filter(Boolean).join(" ");
  const snackbarContent = /* @__PURE__ */ jsx16(
    "div",
    {
      "data-testid": "snackbar-container",
      className: containerClasses,
      onClick: handleBackdropClick,
      onKeyDown: handleKeyDown,
      tabIndex: -1,
      children: /* @__PURE__ */ jsxs14(
        "div",
        {
          className: snackbarClasses,
          style,
          role,
          "aria-live": ariaLive,
          ...props,
          children: [
            /* @__PURE__ */ jsxs14("div", { className: "cria-snackbar__content", children: [
              displayIcon && /* @__PURE__ */ jsx16("div", { className: "cria-snackbar__icon", children: displayIcon }),
              /* @__PURE__ */ jsxs14("div", { className: "cria-snackbar__text", children: [
                title && /* @__PURE__ */ jsx16(Typography, { variant: "body", weight: "medium", className: "cria-snackbar__title", children: title }),
                /* @__PURE__ */ jsx16(Typography, { variant: "body", className: "cria-snackbar__message", children: message })
              ] })
            ] }),
            /* @__PURE__ */ jsxs14("div", { className: "cria-snackbar__actions", children: [
              action && /* @__PURE__ */ jsx16(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: action.onClick,
                  className: "cria-snackbar__action",
                  children: action.label
                }
              ),
              dismissible && /* @__PURE__ */ jsx16(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleClose,
                  className: "cria-snackbar__close",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsx16(X4, { size: 16 })
                }
              )
            ] })
          ]
        }
      )
    }
  );
  return createPortal(snackbarContent, document.body);
});
Snackbar.displayName = "Snackbar";

// src/components/Switch/Switch.tsx
import { forwardRef as forwardRef5, useRef as useRef10, useImperativeHandle as useImperativeHandle5, useCallback as useCallback10 } from "react";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var Switch = forwardRef5(({
  checked,
  disabled = false,
  required = false,
  readOnly = false,
  label,
  helperText,
  errorMessage,
  warningMessage,
  size = "md",
  variant = "default",
  color = "primary",
  className = "",
  style,
  onChange,
  onClick,
  onFocus,
  onBlur,
  value,
  name,
  id,
  inputProps = {},
  ...props
}, ref) => {
  const inputRef = useRef10(null);
  useImperativeHandle5(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = useCallback10((event) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);
  const handleClick = useCallback10((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = useCallback10((event) => {
    if (disabled || readOnly) return;
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      const newChecked = !checked;
      onChange?.(newChecked, event);
    }
  }, [disabled, readOnly, checked, onChange]);
  const switchClasses = [
    "cria-switch",
    `cria-switch--${size}`,
    `cria-switch--${variant}`,
    `cria-switch--${color}`,
    checked && "cria-switch--checked",
    disabled && "cria-switch--disabled",
    readOnly && "cria-switch--readonly",
    required && "cria-switch--required",
    errorMessage && "cria-switch--error",
    warningMessage && "cria-switch--warning",
    className
  ].filter(Boolean).join(" ");
  const inputClasses = [
    "cria-switch__input",
    `cria-switch__input--${size}`,
    `cria-switch__input--${variant}`,
    `cria-switch__input--${color}`
  ].filter(Boolean).join(" ");
  const labelClasses = [
    "cria-switch__label",
    `cria-switch__label--${size}`,
    disabled && "cria-switch__label--disabled",
    readOnly && "cria-switch__label--readonly"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs15("div", { className: switchClasses, style, ...props, children: [
    /* @__PURE__ */ jsxs15("div", { className: "cria-switch__container", children: [
      /* @__PURE__ */ jsx17(
        "input",
        {
          ref: inputRef,
          type: "checkbox",
          role: "switch",
          id: id || (label ? `${name || "switch"}-input` : void 0),
          name,
          value,
          ...checked !== void 0 ? { checked } : {},
          disabled,
          readOnly,
          required,
          className: inputClasses,
          onChange: handleChange,
          onClick: handleClick,
          onFocus,
          onBlur,
          onKeyDown: handleKeyDown,
          "aria-describedby": [
            helperText && `${id || name || "switch"}-helper`,
            errorMessage && `${id || name || "switch"}-error`,
            warningMessage && `${id || name || "switch"}-warning`
          ].filter(Boolean).join(" ") || void 0,
          "aria-invalid": !!errorMessage,
          "aria-checked": checked || false,
          "aria-label": label,
          ...inputProps
        }
      ),
      /* @__PURE__ */ jsx17("div", { className: "cria-switch__track", children: /* @__PURE__ */ jsx17("div", { className: "cria-switch__thumb" }) }),
      label && /* @__PURE__ */ jsx17("label", { htmlFor: id || (label ? `${name || "switch"}-input` : void 0), className: labelClasses, children: /* @__PURE__ */ jsxs15(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ jsx17("span", { className: "cria-switch__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ jsx17(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-switch__helper-text",
        id: `${id || name || "switch"}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ jsx17(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-switch__error-message",
        id: `${id || name || "switch"}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ jsx17(
      Typography,
      {
        variant: "caption",
        color: "warning",
        className: "cria-switch__warning-message",
        id: `${id || name || "switch"}-warning`,
        children: warningMessage
      }
    )
  ] });
});
Switch.displayName = "Switch";

// src/components/Tabs/Tabs.tsx
import { useState as useState7, useCallback as useCallback11, useRef as useRef11, useEffect as useEffect7 } from "react";
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var Tabs = ({
  items,
  activeTab: controlledActiveTab,
  defaultActiveTab,
  onChange,
  variant = "default",
  size = "md",
  orientation = "horizontal",
  fullWidth = false,
  showContent = true,
  className = "",
  style,
  ...props
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState7(
    defaultActiveTab || items[0]?.id || ""
  );
  const isControlled = controlledActiveTab !== void 0;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  const tabRefs = useRef11({});
  const tabListRef = useRef11(null);
  const handleTabChange = useCallback11((tabId) => {
    if (isControlled) {
      onChange?.(tabId);
    } else {
      setInternalActiveTab(tabId);
      onChange?.(tabId);
    }
  }, [isControlled, onChange]);
  const handleKeyDown = useCallback11((event, tabId) => {
    const tabIds = items.map((item) => item.id);
    const currentIndex = tabIds.indexOf(tabId);
    let nextIndex = currentIndex;
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % tabIds.length;
        break;
      case "ArrowLeft":
        event.preventDefault();
        nextIndex = (currentIndex - 1 + tabIds.length) % tabIds.length;
        break;
      case "Home":
        event.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        event.preventDefault();
        nextIndex = tabIds.length - 1;
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        handleTabChange(tabId);
        return;
      default:
        return;
    }
    while (items[nextIndex]?.disabled && nextIndex !== currentIndex) {
      if (event.key === "ArrowRight") {
        nextIndex = (nextIndex + 1) % tabIds.length;
      } else {
        nextIndex = (nextIndex - 1 + tabIds.length) % tabIds.length;
      }
    }
    const nextTabId = tabIds[nextIndex];
    if (nextTabId) {
      handleTabChange(nextTabId);
      tabRefs.current[nextTabId]?.focus();
    }
  }, [items, handleTabChange]);
  useEffect7(() => {
    if (activeTab && tabRefs.current[activeTab]) {
      tabRefs.current[activeTab]?.focus();
    }
  }, [activeTab]);
  const containerClasses = [
    "cria-tabs",
    `cria-tabs--${variant}`,
    `cria-tabs--${size}`,
    `cria-tabs--${orientation}`,
    fullWidth ? "cria-tabs--full-width" : null,
    className
  ].filter(Boolean).join(" ");
  const tabListClasses = [
    "cria-tabs__list",
    `cria-tabs__list--${variant}`,
    `cria-tabs__list--${size}`,
    `cria-tabs__list--${orientation}`,
    fullWidth ? "cria-tabs__list--full-width" : null
  ].filter(Boolean).join(" ");
  const contentClasses = [
    "cria-tabs__content",
    `cria-tabs__content--${variant}`,
    `cria-tabs__content--${size}`
  ].filter(Boolean).join(" ");
  const activeTabItem = items.find((item) => item.id === activeTab);
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: containerClasses,
      style,
      ...props,
      children: [
        /* @__PURE__ */ jsx18(
          "div",
          {
            ref: tabListRef,
            className: tabListClasses,
            role: "tablist",
            "aria-orientation": orientation,
            children: items.map((item) => {
              const isActive = item.id === activeTab;
              const isDisabled = item.disabled;
              const tabClasses = [
                "cria-tabs__tab",
                `cria-tabs__tab--${variant}`,
                `cria-tabs__tab--${size}`,
                isActive ? "cria-tabs__tab--active" : null,
                isDisabled ? "cria-tabs__tab--disabled" : null,
                fullWidth ? "cria-tabs__tab--full-width" : null
              ].filter(Boolean).join(" ");
              return /* @__PURE__ */ jsxs16(
                "button",
                {
                  ref: (el) => {
                    tabRefs.current[item.id] = el;
                  },
                  className: tabClasses,
                  role: "tab",
                  "aria-selected": isActive,
                  "aria-controls": `cria-tab-panel-${item.id}`,
                  "aria-disabled": isDisabled,
                  id: `cria-tab-${item.id}`,
                  tabIndex: isActive ? 0 : -1,
                  disabled: isDisabled,
                  onClick: () => !isDisabled && handleTabChange(item.id),
                  onKeyDown: (e) => !isDisabled && handleKeyDown(e, item.id),
                  children: [
                    item.icon && /* @__PURE__ */ jsx18("span", { className: "cria-tabs__tab-icon", children: item.icon }),
                    /* @__PURE__ */ jsx18("span", { className: "cria-tabs__tab-label", children: item.label }),
                    item.badge && /* @__PURE__ */ jsx18("span", { className: "cria-tabs__tab-badge", children: item.badge })
                  ]
                },
                item.id
              );
            })
          }
        ),
        showContent && activeTabItem && /* @__PURE__ */ jsx18(
          "div",
          {
            className: contentClasses,
            role: "tabpanel",
            id: `cria-tab-panel-${activeTabItem.id}`,
            "aria-labelledby": `cria-tab-${activeTabItem.id}`,
            children: activeTabItem.content
          }
        )
      ]
    }
  );
};

// src/components/Text/Text.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var TextBody = ({
  as = "span",
  children,
  className = "",
  ...props
}) => {
  const Element = as;
  const classes = [
    "cria-text",
    "cria-text--body",
    className
  ].filter(Boolean).join(" ");
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
    color: "#374151",
    // Default dark gray
    margin: 0
  };
  return /* @__PURE__ */ jsx19(Element, { className: classes, style: styles, ...props, children });
};
var TextContent = ({
  as = "p",
  children,
  className = "",
  ...props
}) => {
  const Element = as;
  const classes = [
    "cria-text",
    "cria-text--content",
    className
  ].filter(Boolean).join(" ");
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.relaxed,
    // More readable for long content
    color: "#374151",
    // Default dark gray
    margin: 0
  };
  return /* @__PURE__ */ jsx19(Element, { className: classes, style: styles, ...props, children });
};
var TextContentTitle = ({
  as = "h3",
  children,
  className = "",
  ...props
}) => {
  const Element = as;
  const classes = [
    "cria-text",
    "cria-text--content-title",
    className
  ].filter(Boolean).join(" ");
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.h3,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.normal,
    color: "#374151",
    // Default dark gray
    margin: 0
  };
  return /* @__PURE__ */ jsx19(Element, { className: classes, style: styles, ...props, children });
};
var TextContentImportant = ({
  as = "span",
  children,
  className = "",
  ...props
}) => {
  const Element = as;
  const classes = [
    "cria-text",
    "cria-text--content-important",
    className
  ].filter(Boolean).join(" ");
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    color: "#374151",
    // Default dark gray
    margin: 0
  };
  return /* @__PURE__ */ jsx19(Element, { className: classes, style: styles, ...props, children });
};

// src/components/Textarea/Textarea.tsx
import React15, { forwardRef as forwardRef6, useRef as useRef12, useImperativeHandle as useImperativeHandle6, useCallback as useCallback12, useEffect as useEffect8 } from "react";
import { Check as Check4, WarningCircle as WarningCircle2 } from "phosphor-react";
import { jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
var Textarea = forwardRef6(({
  label,
  placeholder,
  size = "md",
  variant = "default",
  state = "default",
  disabled = false,
  required = false,
  readOnly = false,
  showCharacterCount = false,
  maxLength,
  helperText,
  errorMessage,
  successMessage,
  warningMessage,
  autoResize = false,
  resize = "vertical",
  className = "",
  style,
  onChange,
  onFocus,
  onBlur,
  value,
  defaultValue,
  rows = 4,
  cols,
  ...props
}, ref) => {
  const textareaRef = useRef12(null);
  const [isFocused, setIsFocused] = React15.useState(false);
  useImperativeHandle6(ref, () => ({
    focus: () => textareaRef.current?.focus(),
    blur: () => textareaRef.current?.blur(),
    select: () => textareaRef.current?.select(),
    getValue: () => textareaRef.current?.value || "",
    setValue: (newValue) => {
      if (textareaRef.current) {
        textareaRef.current.value = newValue;
        if (autoResize) {
          adjustHeight();
        }
      }
    }
  }));
  const adjustHeight = useCallback12(() => {
    if (textareaRef.current && autoResize) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [autoResize]);
  const handleChange = useCallback12((event) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(event);
  }, [onChange, autoResize, adjustHeight]);
  const handleFocus = useCallback12((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = useCallback12((event) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);
  useEffect8(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize, adjustHeight]);
  const currentState = errorMessage ? "error" : successMessage ? "success" : warningMessage ? "warning" : state;
  const textareaId = React15.useId();
  const labelId = `${textareaId}-label`;
  const helperId = `${textareaId}-helper`;
  const errorId = `${textareaId}-error`;
  const successId = `${textareaId}-success`;
  const warningId = `${textareaId}-warning`;
  const countId = `${textareaId}-count`;
  const containerClasses = [
    "cria-textarea-container",
    `cria-textarea-container--${size}`,
    `cria-textarea-container--${variant}`,
    `cria-textarea-container--${currentState}`,
    disabled && "cria-textarea-container--disabled",
    readOnly && "cria-textarea-container--readonly",
    isFocused && "cria-textarea-container--focused",
    autoResize && "cria-textarea-container--auto-resize",
    className
  ].filter(Boolean).join(" ");
  const textareaClasses = [
    "cria-textarea",
    `cria-textarea--${size}`,
    `cria-textarea--${variant}`,
    `cria-textarea--${currentState}`,
    disabled && "cria-textarea--disabled",
    readOnly && "cria-textarea--readonly",
    isFocused && "cria-textarea--focused",
    autoResize && "cria-textarea--auto-resize"
  ].filter(Boolean).join(" ");
  const currentValue = value !== void 0 ? value : textareaRef.current?.value || "";
  const characterCount = String(currentValue).length;
  const describedBy = [
    helperText && !errorMessage && !successMessage && !warningMessage ? helperId : null,
    errorMessage ? errorId : null,
    successMessage ? successId : null,
    warningMessage ? warningId : null,
    showCharacterCount && maxLength ? countId : null
  ].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxs17("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ jsx20("label", { htmlFor: textareaId, id: labelId, className: "cria-textarea__label", children: /* @__PURE__ */ jsxs17(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ jsx20("span", { className: "cria-textarea__required", "aria-label": "required", children: " *" })
    ] }) }),
    /* @__PURE__ */ jsx20(
      "textarea",
      {
        ref: textareaRef,
        id: textareaId,
        className: textareaClasses,
        placeholder,
        disabled,
        readOnly,
        required,
        maxLength,
        value,
        defaultValue,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        rows,
        cols,
        style: {
          resize: autoResize ? "none" : resize
        },
        "aria-describedby": describedBy,
        "aria-required": required,
        "aria-invalid": currentState === "error",
        ...props
      }
    ),
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ jsxs17("div", { className: "cria-textarea__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ jsx20(
        Typography,
        {
          variant: "body",
          color: "secondary",
          className: "cria-textarea__helper-text",
          id: helperId,
          children: helperText
        }
      ),
      errorMessage && /* @__PURE__ */ jsxs17(
        Typography,
        {
          variant: "body",
          color: "error",
          className: "cria-textarea__error-message",
          id: errorId,
          role: "alert",
          children: [
            /* @__PURE__ */ jsx20(WarningCircle2, { size: 14, style: { marginRight: "4px" } }),
            errorMessage
          ]
        }
      ),
      successMessage && /* @__PURE__ */ jsxs17(
        Typography,
        {
          variant: "body",
          color: "success",
          className: "cria-textarea__success-message",
          id: successId,
          children: [
            /* @__PURE__ */ jsx20(Check4, { size: 14, style: { marginRight: "4px" } }),
            successMessage
          ]
        }
      ),
      warningMessage && /* @__PURE__ */ jsxs17(
        Typography,
        {
          variant: "body",
          color: "warning",
          className: "cria-textarea__warning-message",
          id: warningId,
          children: [
            /* @__PURE__ */ jsx20(WarningCircle2, { size: 14, style: { marginRight: "4px" } }),
            warningMessage
          ]
        }
      ),
      showCharacterCount && maxLength && /* @__PURE__ */ jsxs17(
        Typography,
        {
          variant: "body",
          color: "secondary",
          className: "cria-textarea__character-count",
          id: countId,
          children: [
            characterCount,
            "/",
            maxLength
          ]
        }
      )
    ] })
  ] });
});
Textarea.displayName = "Textarea";

// src/components/Tooltip/Tooltip.tsx
import React16, { useState as useState8, useRef as useRef13, useEffect as useEffect9, useCallback as useCallback13 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { Fragment as Fragment3, jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
var Tooltip = ({
  content,
  children,
  variant = "default",
  size = "md",
  position = "top",
  disabled = false,
  delay = 0,
  hideDelay = 0,
  arrow = true,
  interactive = false,
  visible: controlledVisible,
  className = "",
  style,
  onVisibilityChange,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState8(false);
  const [tooltipPosition, setTooltipPosition] = useState8({ top: 0, left: 0 });
  const triggerRef = useRef13(null);
  const tooltipRef = useRef13(null);
  const showTimeoutRef = useRef13();
  const hideTimeoutRef = useRef13();
  const isControlled = controlledVisible !== void 0;
  const visible = isControlled ? controlledVisible : isVisible;
  const calculatePosition = useCallback13(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    let top = 0;
    let left = 0;
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;
    switch (position) {
      case "top":
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerCenterX - tooltipRect.width / 2;
        break;
      case "top-start":
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left;
        break;
      case "top-end":
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.right - tooltipRect.width;
        break;
      case "bottom":
        top = triggerRect.bottom + 8;
        left = triggerCenterX - tooltipRect.width / 2;
        break;
      case "bottom-start":
        top = triggerRect.bottom + 8;
        left = triggerRect.left;
        break;
      case "bottom-end":
        top = triggerRect.bottom + 8;
        left = triggerRect.right - tooltipRect.width;
        break;
      case "left":
        top = triggerCenterY - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case "left-start":
        top = triggerRect.top;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case "left-end":
        top = triggerRect.bottom - tooltipRect.height;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case "right":
        top = triggerCenterY - tooltipRect.height / 2;
        left = triggerRect.right + 8;
        break;
      case "right-start":
        top = triggerRect.top;
        left = triggerRect.right + 8;
        break;
      case "right-end":
        top = triggerRect.bottom - tooltipRect.height;
        left = triggerRect.right + 8;
        break;
    }
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (left < 8) left = 8;
    if (left + tooltipRect.width > viewportWidth - 8) {
      left = viewportWidth - tooltipRect.width - 8;
    }
    if (top < 8) top = 8;
    if (top + tooltipRect.height > viewportHeight - 8) {
      top = viewportHeight - tooltipRect.height - 8;
    }
    setTooltipPosition({
      top,
      left
    });
  }, [position]);
  const showTooltip = useCallback13(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }, delay);
  }, [disabled, isControlled, delay, onVisibilityChange]);
  const hideTooltip = useCallback13(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      onVisibilityChange?.(false);
    }, hideDelay);
  }, [disabled, isControlled, hideDelay, onVisibilityChange]);
  const handleMouseEnter = useCallback13(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleMouseLeave = useCallback13(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  const handleFocus = useCallback13(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleBlur = useCallback13(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  useEffect9(() => {
    if (visible) {
      calculatePosition();
    }
  }, [visible, calculatePosition]);
  useEffect9(() => {
    if (!visible) return;
    const updatePosition = () => calculatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [visible, calculatePosition]);
  useEffect9(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  const triggerElement = React16.cloneElement(children, {
    ref: (el) => {
      triggerRef.current = el;
      const childRef = children.ref;
      if (childRef) {
        if (typeof childRef === "function") {
          childRef(el);
        } else if (childRef && "current" in childRef) {
          childRef.current = el;
        }
      }
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur
  });
  const tooltipClasses = [
    "cria-tooltip",
    `cria-tooltip--${variant}`,
    `cria-tooltip--${size}`,
    `cria-tooltip--${position}`,
    arrow ? "cria-tooltip--arrow" : null,
    interactive ? "cria-tooltip--interactive" : null,
    visible ? "cria-tooltip--visible" : null,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs18(Fragment3, { children: [
    triggerElement,
    visible && createPortal2(
      /* @__PURE__ */ jsxs18(
        "div",
        {
          ref: tooltipRef,
          className: tooltipClasses,
          style: {
            position: "fixed",
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            zIndex: 9999,
            ...style
          },
          role: "tooltip",
          ...props,
          children: [
            /* @__PURE__ */ jsx21("div", { className: "cria-tooltip__content", children: content }),
            arrow && /* @__PURE__ */ jsx21("div", { className: "cria-tooltip__arrow" })
          ]
        }
      ),
      document.body
    )
  ] });
};
export {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Badge,
  Button,
  ButtonDemo,
  Card,
  CardContent,
  CardDemo,
  CardFooter,
  CardHeader,
  Checkbox,
  Dropdown,
  DropdownItem,
  Input,
  Modal,
  Navigation,
  Sidebar as NavigationSidebar,
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
  Sidebar2 as Sidebar,
  Snackbar,
  Switch,
  Tabs,
  TextBody,
  TextContent,
  TextContentImportant,
  TextContentTitle,
  Textarea,
  Tooltip,
  Topbar,
  Typography,
  TypographyDemo,
  colors,
  cssVariables,
  radii,
  shadows,
  spacing,
  typography
};
