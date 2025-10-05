"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionHeader: () => AccordionHeader,
  AccordionItem: () => AccordionItem,
  Avatar: () => Avatar,
  AvatarUpload: () => AvatarUpload,
  Badge: () => Badge,
  Button: () => Button,
  ButtonDemo: () => ButtonDemo,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDemo: () => CardDemo,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardSelector: () => CardSelector,
  Chat: () => Chat,
  Checkbox: () => Checkbox,
  Column: () => Column,
  CommentsSection: () => CommentsSection,
  Container: () => Container,
  CriaClassroomFutureEventCard: () => CriaClassroomFutureEventCard,
  CriaClassroomTrilhaCard: () => CriaClassroomTrilhaCard,
  CriaCourseCard: () => CriaCourseCard,
  CriaLessonCard: () => CriaLessonCard,
  CriaLessonCardSmall: () => CriaLessonCardSmall,
  CriaTextAlert: () => CriaTextAlert,
  CriaTextBody1: () => CriaTextBody1,
  CriaTextBody1Inverse: () => CriaTextBody1Inverse,
  CriaTextBody2: () => CriaTextBody2,
  CriaTextHeadline1: () => CriaTextHeadline1,
  CriaTextHeadline2: () => CriaTextHeadline2,
  CriaTextImportant: () => CriaTextImportant,
  CriaTextTitle1: () => CriaTextTitle1,
  CriaTextTitle2: () => CriaTextTitle2,
  DatePicker: () => DatePicker,
  Divider: () => Divider,
  Dropdown: () => Dropdown,
  DropdownItem: () => DropdownItem,
  FileUpload: () => FileUpload,
  FloatingSidebar: () => FloatingSidebar,
  Footer: () => Footer,
  Grid: () => Grid,
  Input: () => Input,
  LineChart: () => LineChart,
  MegaMenu: () => MegaMenu,
  Modal: () => Modal,
  Navigation: () => Navigation,
  NavigationSidebar: () => Sidebar,
  PageLoadingProgress: () => PageLoadingProgress,
  Pagination: () => Pagination,
  PieChart: () => PieChart,
  PricingPage: () => PricingPage,
  ProgressBar: () => ProgressBar,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  RadioGroupLabel: () => RadioGroupLabel,
  Row: () => Row,
  RowOfCards: () => RowOfCards,
  Scrollbar: () => Scrollbar,
  SearchFilters: () => SearchFilters,
  Section: () => Section,
  ShimmerSkeleton: () => ShimmerSkeleton,
  Sidebar: () => Sidebar2,
  Slider: () => Slider,
  Snackbar: () => Snackbar,
  Stepper: () => Stepper,
  Switch: () => Switch,
  Tabs: () => Tabs,
  TextBody: () => TextBody,
  TextContent: () => TextContent,
  TextContentImportant: () => TextContentImportant,
  TextContentTitle: () => TextContentTitle,
  Textarea: () => Textarea,
  Tooltip: () => Tooltip,
  Topbar: () => Topbar,
  Typography: () => Typography,
  TypographyDemo: () => TypographyDemo,
  VerticalTabs: () => VerticalTabs,
  colors: () => colors,
  cssVariables: () => cssVariables,
  radii: () => radii,
  shadows: () => shadows,
  spacing: () => spacing,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/tokens/colors.ts
var colors = {
  // Primary Colors
  primary: "#7566A1",
  primaryLight: "#3A2E52",
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
    // Content should match primaryLight
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
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var AccordionContext = (0, import_react.createContext)(null);
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
  const [internalOpenItems, setInternalOpenItems] = (0, import_react.useState)(defaultOpenItems);
  const accordionRef = (0, import_react.useRef)(null);
  const isControlled = openItems !== void 0;
  const currentOpenItems = isControlled ? openItems : internalOpenItems;
  const handleItemToggle = (0, import_react.useCallback)((itemId) => {
    const newOpenItems = currentOpenItems.includes(itemId) ? currentOpenItems.filter((id) => id !== itemId) : allowMultiple ? [...currentOpenItems, itemId] : [itemId];
    if (!isControlled) {
      setInternalOpenItems(newOpenItems);
    }
    onChange?.(newOpenItems);
  }, [currentOpenItems, allowMultiple, isControlled, onChange]);
  const handleKeyDown = (0, import_react.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const context = (0, import_react.useContext)(AccordionContext);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItemContext.Provider, { value: id, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const context = (0, import_react.useContext)(AccordionContext);
  if (!context) {
    throw new Error("AccordionHeader must be used within an Accordion");
  }
  const { onToggle, size } = context;
  const itemId = (0, import_react.useContext)(AccordionItemContext);
  if (!itemId) {
    throw new Error("AccordionHeader must be used within an AccordionItem");
  }
  const isOpen = context.openItems.includes(itemId);
  const handleClick = (0, import_react.useCallback)((event) => {
    onClick?.(event);
    onToggle(itemId);
  }, [onClick, itemId, onToggle]);
  const handleKeyDown = (0, import_react.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var AccordionItemContext = (0, import_react.createContext)(null);
var AccordionContent = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const context = (0, import_react.useContext)(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion");
  }
  const itemId = (0, import_react.useContext)(AccordionItemContext);
  if (!itemId) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }
  const isOpen = context.openItems.includes(itemId);
  const contentRef = (0, import_react.useRef)(null);
  const [height, setHeight] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      id: `${itemId}-content`,
      className: classes,
      style: contentStyles,
      "aria-labelledby": `${itemId}-header`,
      role: "region",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// src/components/Avatar/Avatar.tsx
var import_react2 = require("react");
var import_phosphor_react = require("phosphor-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Avatar = (0, import_react2.forwardRef)(({
  src,
  alt,
  size = "md",
  variant = "circle",
  initials,
  name,
  email,
  icon,
  fallback,
  backgroundColor,
  textColor,
  disabled = false,
  loading = false,
  status,
  clickable = false,
  onClick,
  className = "",
  style,
  ...props
}, ref) => {
  const [imageError, setImageError] = (0, import_react2.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react2.useState)(false);
  const generateInitials = (0, import_react2.useCallback)((input) => {
    if (!input || typeof input !== "string") return "";
    const words = input.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    if (words.length === 1) {
      const word = words[0];
      if (word.includes("@")) {
        const localPart = word.split("@")[0];
        const parts = localPart.split(/[._-]/);
        if (parts.length >= 2) {
          return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return localPart.substring(0, 2).toUpperCase();
      }
      return word.substring(0, 2).toUpperCase();
    }
    return "";
  }, []);
  const displayInitials = initials || name && generateInitials(name) || email && generateInitials(email) || "";
  const showImage = src && !imageError && !loading;
  const showInitials = !showImage && displayInitials;
  const showIcon = !showImage && !showInitials && icon;
  const showFallback = !showImage && !showInitials && !showIcon && fallback;
  const showDefaultIcon = !showImage && !showInitials && !showIcon && !showFallback;
  const handleImageError = (0, import_react2.useCallback)(() => {
    setImageError(true);
  }, []);
  const handleImageLoad = (0, import_react2.useCallback)(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);
  const handleClick = (0, import_react2.useCallback)((event) => {
    if (disabled || loading) return;
    onClick?.(event);
  }, [disabled, loading, onClick]);
  const handleKeyDown = (0, import_react2.useCallback)((event) => {
    if (disabled || loading) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(event);
    }
  }, [disabled, loading, onClick]);
  const avatarClasses = [
    "cria-avatar",
    `cria-avatar--${size}`,
    `cria-avatar--${variant}`,
    disabled && "cria-avatar--disabled",
    loading && "cria-avatar--loading",
    clickable && "cria-avatar--clickable",
    status && `cria-avatar--status-${status}`,
    className
  ].filter(Boolean).join(" ");
  const ariaLabel = alt || (name ? `${name}'s Avatar` : "User Avatar");
  const role = showImage ? void 0 : "img";
  const tabIndex = (clickable || onClick) && !disabled && !loading ? 0 : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      ref,
      className: avatarClasses,
      style: {
        backgroundColor: backgroundColor || (showInitials || showFallback ? void 0 : "var(--cria-gray-200)"),
        ...style
      },
      role,
      "aria-label": ariaLabel,
      "aria-disabled": disabled,
      tabIndex,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      ...props,
      children: [
        showImage && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "img",
          {
            src,
            alt: alt || "",
            className: "cria-avatar__image",
            onError: handleImageError,
            onLoad: handleImageLoad,
            style: { opacity: imageLoaded ? 1 : 0 }
          }
        ),
        loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "cria-avatar__loading", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "cria-avatar__spinner" }) }),
        (showInitials || showFallback) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "span",
          {
            className: "cria-avatar__initials",
            style: { color: textColor },
            children: showInitials ? displayInitials : fallback
          }
        ),
        (showIcon || showDefaultIcon) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "cria-avatar__icon", children: showIcon ? icon : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_phosphor_react.User, { size: "50%" }) }),
        status && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: `cria-avatar__status cria-avatar__status--${status}`,
            "data-testid": "avatar-status",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
});
Avatar.displayName = "Avatar";

// src/components/Avatar/AvatarUpload.tsx
var import_react3 = __toESM(require("react"), 1);

// src/components/Typography/Typography.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Element, { className: classes, style: styles, ...props, children });
};
var Typography_default = Typography;

// src/components/Typography/demo.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var TypographyDemo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Typography Demo" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h1", weight: "bold", style: { marginBottom: "16px" }, children: "Heading 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Heading 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Heading 3" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Titles (ALL CAPS)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "16px" }, children: "Title 1 - Large Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "title2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Title 2 - Medium Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "title3", weight: "medium", style: { marginBottom: "16px" }, children: "Title 3 - Small Title" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", style: { marginBottom: "12px" }, children: "This is body text using the regular weight. It's perfect for paragraphs and general content." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "bodySmall", style: { marginBottom: "12px" }, children: "This is smaller body text, ideal for captions and secondary information." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "caption", children: "This is caption text, typically used for labels and fine print." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Color Variants" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "primary", style: { marginBottom: "8px" }, children: "Primary text color - Main brand purple (#7566A1)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "content", style: { marginBottom: "8px" }, children: "Content text color - Primary dark for content (#3A2E52)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "primaryLight", style: { marginBottom: "8px" }, children: "Primary Light text color - Darker purple variant (#3A2E52)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "secondary", style: { marginBottom: "8px" }, children: "Secondary text color - Brand teal (#28DDB9)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "secondaryDark", style: { marginBottom: "8px" }, children: "Secondary Dark text color - Darker teal variant (#167B7A)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "disabled", style: { marginBottom: "8px" }, children: "Disabled text color (light gray)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "success", style: { marginBottom: "8px" }, children: "Success text color (green)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "warning", style: { marginBottom: "8px" }, children: "Warning text color (orange)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "error", style: { marginBottom: "8px" }, children: "Error text color (red)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "info", style: { marginBottom: "8px" }, children: "Info text color (blue)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { backgroundColor: "#111827", padding: "12px", borderRadius: "8px" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", color: "inverse", children: "Inverse text color (white on dark background)" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Font Weights" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "thin", style: { marginBottom: "4px" }, children: "Thin (100) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "light", style: { marginBottom: "4px" }, children: "Light (300) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "regular", style: { marginBottom: "4px" }, children: "Regular (400) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "medium", style: { marginBottom: "4px" }, children: "Medium (500) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "semiBold", style: { marginBottom: "4px" }, children: "Semi Bold (600) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "bold", style: { marginBottom: "4px" }, children: "Bold (700) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "extraBold", style: { marginBottom: "4px" }, children: "Extra Bold (800) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", weight: "heavy", children: "Heavy (900) - Lorem ipsum dolor sit amet" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Text Alignment" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", align: "left", children: "Left aligned text (default)" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", align: "center", children: "Center aligned text" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", align: "right", children: "Right aligned text" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px", width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", align: "justify", children: "Justified text that spreads across the full width of the container, creating even margins on both sides. This demonstrates how justified text creates uniform spacing." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Line Heights" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", lineHeight: "tight", style: { marginBottom: "8px" }, children: "Tight line height (1.2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", lineHeight: "normal", style: { marginBottom: "8px" }, children: "Normal line height (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", lineHeight: "relaxed", children: "Relaxed line height (1.75) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Custom HTML Elements" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", as: "div", style: { marginBottom: "8px" }, children: "Rendered as a div element" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", as: "span", style: { marginBottom: "8px" }, children: "Rendered as a span element" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", as: "strong", style: { marginBottom: "8px" }, children: "Rendered as a strong element" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography_default, { variant: "body", as: "em", children: "Rendered as an em element" })
    ] })
  ] });
};

// src/components/Avatar/AvatarUpload.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var AvatarUpload = ({
  size = "lg",
  label = "Upload avatar",
  accept = "image/*",
  disabled = false,
  onChange,
  src,
  className = "",
  style,
  ...props
}) => {
  const inputRef = (0, import_react3.useRef)(null);
  const [preview, setPreview] = (0, import_react3.useState)(src);
  const id = import_react3.default.useId();
  const handlePick = (0, import_react3.useCallback)(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);
  const handleChange = (0, import_react3.useCallback)((e) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file);
    } else {
      setPreview(void 0);
      onChange?.(null);
    }
  }, [onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: ["cria-avatar-upload", className].filter(Boolean).join(" "), style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      {
        ref: inputRef,
        id: `avatar-input-${id}`,
        type: "file",
        accept,
        style: { display: "none" },
        onChange: handleChange,
        disabled
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        type: "button",
        className: "cria-avatar-upload__button",
        "aria-label": label,
        onClick: handlePick,
        disabled,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Avatar, { src: preview, size, clickable: true })
      }
    ),
    label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Typography, { variant: "caption", color: "secondary", style: { marginTop: 8 }, children: label })
  ] });
};

// src/components/Badge/Badge.tsx
var import_react4 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  const displayContent = (0, import_react4.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
        leftIcon && !dot && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "cria-badge__icon cria-badge__icon--left", "aria-hidden": "true", children: leftIcon }),
        !dot && displayContent && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "cria-badge__content", children: displayContent }),
        rightIcon && !dot && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "cria-badge__icon cria-badge__icon--right", "aria-hidden": "true", children: rightIcon })
      ]
    }
  );
};

// src/components/Button/Button.tsx
var import_react5 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var Button = import_react5.default.forwardRef(({
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "button",
    {
      ref,
      className: classes,
      style: buttonStyles,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { opacity: loading ? 0 : 1, display: "flex", alignItems: "center", gap: spacing[2] }, children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: rightIcon })
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
var import_react6 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ButtonDemo = () => {
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Typography, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Button Demo" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { size: "sm", children: "Pequeno" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { size: "md", children: "M\xE9dio" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { size: "lg", children: "Grande" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Estados" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { children: "Normal" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { loading: true, children: "Carregando" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { disabled: true, children: "Desabilitado" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { loading, onClick: handleLoadingClick, children: "Clique para Carregar" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Com \xCDcones" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { leftIcon: "\u2190", children: "Voltar" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { rightIcon: "\u2192", children: "Pr\xF3ximo" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { leftIcon: "\u2605", rightIcon: "\u2605", children: "Estrela" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { leftIcon: "\u{1F4E7}", children: "Email" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Largura Completa" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { fullWidth: true, children: "Bot\xE3o de Largura Completa" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "outline", fullWidth: true, children: "Contorno de Largura Completa" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Efeitos de Hover" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { fontFamily: "var(--cria-font-family)", color: "#6B7280", marginBottom: "16px", fontSize: "14px" }, children: "Passe o mouse sobre os bot\xF5es para ver os efeitos de hover" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Exemplos Interativos" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { onClick: () => alert("Prim\xE1rio clicado!"), children: "Clique em Mim" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "secondary", onClick: () => console.log("Secund\xE1rio clicado!"), children: "Log no Console" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "outline", onClick: () => window.open("https://example.com", "_blank"), children: "Link Externo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Acessibilidade" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { "aria-label": "Fechar di\xE1logo", children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { "aria-describedby": "help-text", children: "Ajuda" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { disabled: true, "aria-label": "Esta a\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel", children: "Indispon\xEDvel" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { id: "help-text", style: { fontSize: "14px", color: "#6B7280", marginTop: "8px" }, children: "Este bot\xE3o fornece informa\xE7\xF5es de ajuda adicionais." })
    ] })
  ] });
};

// src/components/Card/Card.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_react12 = require("react");

// src/components/CriaLessonCardSmall/CriaLessonCardSmall.tsx
var import_react7 = require("react");
var import_phosphor_react2 = require("phosphor-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var CriaLessonCardSmall = ({
  lesson,
  completed = false,
  inProgress = false,
  toolIconUrl,
  onLessonClick,
  onToggleCompletion,
  onInstructorClick,
  className = "",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = (0, import_react7.useState)(false);
  const lessonId = lesson.id || lesson.slug;
  const thumbnailUrl = lesson.thumbnailUrl || "https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6876c357bfbaf5d573e3dd27_AU-409Thumb2.png";
  const duration = lesson.duration || lesson.videoLength || "--";
  const category = lesson.categoryNames?.[0] || lesson.categories?.[0] || lesson.category || "TUTORIAL";
  const handleLessonClick = () => {
    onLessonClick?.(lesson);
  };
  const handleToggleCompletion = (e) => {
    e.stopPropagation();
    onToggleCompletion?.(lesson, !completed);
  };
  const handleInstructorClick = (e) => {
    e.stopPropagation();
    onInstructorClick?.(lesson.instructor);
  };
  const classes = [
    "cria-lesson-card-small",
    completed && "cria-lesson-card-small--completed",
    inProgress && "cria-lesson-card-small--in-progress",
    className
  ].filter(Boolean).join(" ");
  const cardStyles = {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    boxShadow: shadows.lg,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "240px",
    height: "320px",
    border: `1px solid ${colors.border.light}`,
    cursor: onLessonClick ? "pointer" : "default",
    transition: "all 0.3s ease",
    position: "relative",
    ...style
  };
  const hoverStyles = isHovered ? {
    boxShadow: shadows.xl,
    transform: "translateY(-2px)"
  } : {};
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      className: classes,
      style: { ...cardStyles, ...hoverStyles },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick: handleLessonClick,
      "data-lesson-id": lessonId,
      "data-categories": lesson.categories?.join(",") || "",
      "data-tools": lesson.tools?.join(",") || "",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
          position: "relative",
          width: "100%",
          height: "140px",
          background: `linear-gradient(135deg, ${colors.gray[100]} 0%, ${colors.gray[200]} 100%)`,
          overflow: "visible"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "img",
            {
              src: thumbnailUrl,
              alt: lesson.title,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease-out",
                transform: isHovered ? "scale(1.1)" : "scale(1)"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
          } }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
            position: "absolute",
            top: spacing[2],
            right: spacing[2],
            zIndex: 10
          }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "button",
            {
              onClick: handleToggleCompletion,
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: completed ? colors.secondary : "transparent",
                borderColor: completed ? colors.secondary : colors.gray[300],
                borderWidth: completed ? "0" : "2px",
                borderStyle: "solid",
                opacity: completed ? 1 : isHovered ? 1 : 0
              },
              title: completed ? "Mark as incomplete" : "Mark as completed",
              "aria-label": completed ? "Mark as incomplete" : "Mark as completed",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                import_phosphor_react2.Check,
                {
                  size: completed ? 16 : 14,
                  color: completed ? colors.white : colors.gray[400],
                  weight: "bold"
                }
              )
            }
          ) }),
          toolIconUrl && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
            position: "absolute",
            bottom: "-20px",
            left: spacing[4],
            zIndex: 30
          }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "img",
            {
              src: toolIconUrl,
              alt: "Tool",
              style: {
                width: "56px",
                height: "56px",
                borderRadius: radii.md,
                objectFit: "cover"
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`,
          zIndex: 10,
          paddingTop: toolIconUrl ? spacing[6] : spacing[2]
          // Adjust for tool icon
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { marginBottom: spacing[2] }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Typography,
            {
              variant: "body",
              weight: "semiBold",
              style: {
                color: colors.text.primary,
                lineHeight: typography.lineHeight.tight,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                minHeight: "2.4em"
                // Ensure consistent height
              },
              children: lesson.title
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: spacing[2] }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              Typography,
              {
                variant: "caption",
                style: {
                  color: colors.primary,
                  fontWeight: typography.fontWeight.medium,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                },
                children: category
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[1] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_phosphor_react2.Clock, { size: 12, color: colors.gray[500] }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  Typography,
                  {
                    variant: "caption",
                    style: {
                      color: colors.gray[600],
                      fontSize: "12px"
                    },
                    children: duration
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
                width: lesson.instructors && lesson.instructors.length > 0 ? "80px" : "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                justifyContent: "flex-end"
              }, children: lesson.instructors && lesson.instructors.length > 0 ? (
                // Stacked avatars for multiple instructors
                lesson.instructors.slice(0, 3).map((instructor, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "div",
                  {
                    onClick: () => onInstructorClick?.(instructor),
                    style: {
                      cursor: onInstructorClick ? "pointer" : "default",
                      position: "absolute",
                      right: `${index * 8}px`,
                      zIndex: 3 - index
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      Avatar,
                      {
                        src: instructor.avatarUrl,
                        alt: instructor.name,
                        size: "sm",
                        name: instructor.name,
                        style: {
                          width: "32px",
                          height: "32px",
                          border: `2px solid ${colors.white}`,
                          boxShadow: shadows.sm
                        }
                      }
                    )
                  },
                  instructor.id
                ))
              ) : lesson.instructor ? (
                // Single instructor - aligned to right
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "div",
                  {
                    onClick: handleInstructorClick,
                    style: {
                      cursor: onInstructorClick ? "pointer" : "default",
                      position: "absolute",
                      right: "0px"
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      Avatar,
                      {
                        src: lesson.instructor.avatarUrl,
                        alt: lesson.instructor.name,
                        size: "sm",
                        name: lesson.instructor.name,
                        style: {
                          width: "32px",
                          height: "32px",
                          border: `2px solid ${colors.white}`,
                          boxShadow: shadows.sm
                        }
                      }
                    )
                  }
                )
              ) : (
                // Default user icon - aligned to right
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: "0px"
                }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_phosphor_react2.User, { size: 16, color: colors.white }) })
              ) })
            ] })
          ] })
        ] })
      ]
    }
  );
};

// src/components/CriaLessonCard/CriaLessonCard.tsx
var import_react8 = require("react");
var import_phosphor_react3 = require("phosphor-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var CriaLessonCard = ({
  lesson,
  onLessonClick,
  className = "",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react8.useState)(false);
  const handleCardClick = (0, import_react8.useCallback)(() => {
    onLessonClick?.(lesson);
  }, [lesson, onLessonClick]);
  const handleInstructorClick = (0, import_react8.useCallback)((e) => {
    e.stopPropagation();
  }, []);
  const cardClasses = [
    "cria-lesson-card",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: cardClasses,
      onClick: handleCardClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        position: "relative",
        width: "100%",
        height: "320px",
        background: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.lg,
        cursor: "pointer",
        transition: "all 0.3s ease",
        overflow: "hidden",
        ...style
      },
      "data-lesson-id": lesson.id,
      "data-lesson-slug": lesson.slug,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "140px",
              background: colors.gray[100],
              borderRadius: `${radii.lg} ${radii.lg} 0 0`,
              overflow: "hidden"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "img",
              {
                src: lesson.thumbnailUrl || "https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6876c357bfbaf5d573e3dd27_AU-409Thumb2.png",
                alt: lesson.title,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-out",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  opacity: imageLoaded ? 1 : 0
                },
                onLoad: () => setImageLoaded(true),
                onError: () => setImageLoaded(true)
              }
            )
          }
        ),
        lesson.toolIconText && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: spacing[4],
              top: "120px",
              width: "48px",
              height: "48px",
              zIndex: 20
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "#D4C4A8",
                  borderRadius: radii.md,
                  boxShadow: shadows.md,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  Typography,
                  {
                    variant: "caption",
                    style: {
                      color: "#2D1B0E",
                      fontWeight: typography.fontWeight.bold,
                      fontSize: "14px"
                    },
                    children: lesson.toolIconText
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "div",
          {
            style: {
              position: "absolute",
              top: "160px",
              left: 0,
              right: 0,
              background: colors.white,
              padding: `${spacing[8]} ${spacing[8]} ${spacing[6]} ${spacing[8]}`,
              height: "134px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              zIndex: 10
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                Typography,
                {
                  variant: "body",
                  style: {
                    color: colors.primary,
                    fontFamily: typography.fontFamily.mono,
                    fontWeight: typography.fontWeight.semiBold,
                    fontSize: "14px",
                    lineHeight: 1.4,
                    textTransform: "uppercase",
                    marginBottom: spacing[2],
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "2.8em"
                  },
                  children: lesson.title
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "div",
                {
                  style: {
                    width: "100%",
                    height: "1px",
                    background: colors.gray[200],
                    marginBottom: spacing[2]
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                Typography,
                {
                  variant: "caption",
                  style: {
                    color: colors.gray[600],
                    fontFamily: typography.fontFamily.mono,
                    fontWeight: typography.fontWeight.medium,
                    fontSize: "12px",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "3.6em"
                  },
                  children: lesson.description || "Uma sele\xE7\xE3o de aulas do CR_IA, escolhidas a dedo para funcionarem como seu kit de sobreviv\xEAncia nos primeiros passos do mundo de IA"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "46px",
              background: colors.white,
              borderRadius: `0 0 ${radii.lg} ${radii.lg}`,
              padding: `${spacing[2]} ${spacing[8]}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 10,
              borderTop: `1px solid ${colors.gray[200]}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react3.Clock, { size: 16, color: colors.gray[600], style: { marginRight: spacing[1] } }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  Typography,
                  {
                    variant: "caption",
                    style: {
                      color: colors.gray[700],
                      fontFamily: typography.fontFamily.mono,
                      fontWeight: typography.fontWeight.regular,
                      fontSize: "12px",
                      textTransform: "uppercase"
                    },
                    children: lesson.duration || "--"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { width: "25px", height: "25px" }, children: lesson.instructor ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "div",
                {
                  onClick: handleInstructorClick,
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                    Avatar,
                    {
                      src: lesson.instructor.avatarUrl,
                      alt: lesson.instructor.name,
                      size: "sm",
                      name: lesson.instructor.name,
                      style: {
                        width: "25px",
                        height: "25px",
                        border: `2px solid ${colors.white}`,
                        boxShadow: shadows.sm
                      }
                    }
                  )
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "div",
                {
                  style: {
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react3.User, { size: 16, color: colors.white })
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};

// src/components/CriaCourseCard/CriaCourseCard.tsx
var import_react9 = require("react");
var import_phosphor_react4 = require("phosphor-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var CriaCourseCard = ({
  course,
  onCourseClick,
  onInstructorClick,
  onToolClick,
  className = "",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = (0, import_react9.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react9.useState)(false);
  const handleCardClick = (0, import_react9.useCallback)(() => {
    onCourseClick?.(course);
  }, [course, onCourseClick]);
  const handleInstructorClick = (0, import_react9.useCallback)((instructor, e) => {
    e.stopPropagation();
    onInstructorClick?.(instructor);
  }, [onInstructorClick]);
  const handleToolClick = (0, import_react9.useCallback)((tool, e) => {
    e.stopPropagation();
    onToolClick?.(tool);
  }, [onToolClick]);
  const cardClasses = [
    "cria-course-card",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: cardClasses,
      onClick: handleCardClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        backgroundColor: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.sm,
        overflow: "hidden",
        display: "flex",
        cursor: "pointer",
        transition: "all 0.3s ease",
        ...style
      },
      "data-course-id": course.id,
      "data-course-slug": course.slug,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            style: {
              width: "33.333%",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "img",
              {
                src: course.thumbnailUrl || "https://via.placeholder.com/400x300?text=No+Image",
                alt: course.title,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-out",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  opacity: imageLoaded ? 1 : 0,
                  minHeight: "200px"
                },
                onLoad: () => setImageLoaded(true),
                onError: () => setImageLoaded(true)
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "div",
          {
            style: {
              padding: `${spacing[8]} ${spacing[8]} ${spacing[8]} ${spacing[12]}`,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  Typography,
                  {
                    variant: "h1",
                    style: {
                      color: colors.primary,
                      fontWeight: typography.fontWeight.bold,
                      letterSpacing: "0.1em",
                      marginBottom: spacing[2],
                      textTransform: "uppercase",
                      transition: "color 0.3s ease",
                      cursor: "pointer"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.color = colors.secondary;
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.color = colors.primary;
                    },
                    children: course.title
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  Typography,
                  {
                    variant: "body",
                    style: {
                      color: colors.gray[600],
                      fontSize: "14px",
                      lineHeight: 1.6,
                      marginBottom: spacing[6]
                    },
                    children: course.description || "A comprehensive course designed to help you master the fundamentals and advanced concepts."
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: spacing[8]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: spacing[2],
                            marginBottom: spacing[4]
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                              import_phosphor_react4.UserCircle,
                              {
                                size: 20,
                                color: colors.primary,
                                weight: "duotone",
                                style: { marginTop: "2px", flexShrink: 0 }
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: spacing[1]
                                },
                                children: course.instructors?.map((instructor) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                                  "div",
                                  {
                                    onClick: (e) => handleInstructorClick(instructor, e),
                                    style: {
                                      display: "inline-flex",
                                      alignItems: "center",
                                      padding: `${spacing[1]} ${spacing[2]}`,
                                      borderRadius: radii.full,
                                      fontSize: "12px",
                                      fontWeight: typography.fontWeight.semiBold,
                                      color: colors.primary,
                                      border: `1px solid ${colors.primary}20`,
                                      backgroundColor: colors.primary + "08",
                                      cursor: "pointer",
                                      transition: "all 0.2s ease"
                                    },
                                    onMouseEnter: (e) => {
                                      e.currentTarget.style.backgroundColor = colors.primary + "15";
                                      e.currentTarget.style.borderColor = colors.primary + "40";
                                    },
                                    onMouseLeave: (e) => {
                                      e.currentTarget.style.backgroundColor = colors.primary + "08";
                                      e.currentTarget.style.borderColor = colors.primary + "20";
                                    },
                                    children: [
                                      instructor.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                                        Avatar,
                                        {
                                          src: instructor.avatarUrl,
                                          alt: instructor.name,
                                          size: "sm",
                                          name: instructor.name,
                                          style: {
                                            width: "20px",
                                            height: "20px",
                                            marginRight: spacing[1]
                                          }
                                        }
                                      ),
                                      instructor.name
                                    ]
                                  },
                                  instructor.id
                                ))
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: spacing[2]
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                              import_phosphor_react4.Clock,
                              {
                                size: 20,
                                color: colors.primary,
                                weight: "duotone"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                              Typography,
                              {
                                variant: "caption",
                                style: {
                                  color: colors.primary,
                                  fontSize: "14px"
                                },
                                children: course.duration || "--"
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          gap: spacing[2]
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            import_phosphor_react4.Wrench,
                            {
                              size: 20,
                              color: colors.primary,
                              weight: "duotone",
                              style: { marginTop: "2px", flexShrink: 0 }
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing[1]
                              },
                              children: course.tools?.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                                "div",
                                {
                                  onClick: (e) => handleToolClick(tool, e),
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    padding: `${spacing[1]} ${spacing[2]}`,
                                    borderRadius: radii.full,
                                    fontSize: "12px",
                                    fontWeight: typography.fontWeight.semiBold,
                                    color: colors.primary,
                                    border: `1px solid ${colors.primary}20`,
                                    backgroundColor: colors.primary + "08",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                  },
                                  onMouseEnter: (e) => {
                                    e.currentTarget.style.backgroundColor = colors.primary + "15";
                                    e.currentTarget.style.borderColor = colors.primary + "40";
                                  },
                                  onMouseLeave: (e) => {
                                    e.currentTarget.style.backgroundColor = colors.primary + "08";
                                    e.currentTarget.style.borderColor = colors.primary + "20";
                                  },
                                  children: [
                                    tool.icon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                                      "span",
                                      {
                                        style: {
                                          width: "20px",
                                          height: "20px",
                                          marginRight: spacing[1],
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          fontSize: "14px"
                                        },
                                        children: tool.icon
                                      }
                                    ),
                                    tool.name
                                  ]
                                },
                                tool.id
                              ))
                            }
                          )
                        ]
                      }
                    ) })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};

// src/components/CriaClassroomFutureEventCard/CriaClassroomFutureEventCard.tsx
var import_react10 = require("react");
var import_phosphor_react5 = require("phosphor-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var CriaClassroomFutureEventCard = ({
  event,
  classroomItem,
  onEventClick,
  onCalendarClick,
  className = "",
  style,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = (0, import_react10.useState)({ days: 0, hours: 0, minutes: 0 });
  const [isLive, setIsLive] = (0, import_react10.useState)(false);
  const calculateTimeLeft = (0, import_react10.useCallback)(() => {
    const eventDate2 = new Date(event.startDate);
    const now = /* @__PURE__ */ new Date();
    const difference = eventDate2.getTime() - now.getTime();
    if (difference > 0) {
      const days = Math.floor(difference / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
      setTimeLeft({ days, hours, minutes });
      setIsLive(false);
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      setIsLive(true);
    }
  }, [event.startDate]);
  (0, import_react10.useEffect)(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 6e4);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);
  const handleEventClick = (0, import_react10.useCallback)(() => {
    onEventClick?.(event);
  }, [event, onEventClick]);
  const handleCalendarClick = (0, import_react10.useCallback)(() => {
    onCalendarClick?.(event);
  }, [event, onCalendarClick]);
  const title = classroomItem.customTitle || event.name;
  const description = classroomItem.customSubtitle || event.description || "";
  const eventDate = new Date(event.startDate);
  const formattedDate = eventDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short"
  });
  const formattedTime = eventDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const cardClasses = [
    "cria-classroom-future-event-card",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      className: cardClasses,
      style: {
        backgroundColor: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.lg,
        overflow: "hidden",
        display: "flex",
        border: `1px solid ${colors.gray[100]}`,
        minHeight: "200px",
        ...style
      },
      "data-event-id": event.id,
      "data-classroom-item-id": classroomItem.id,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          "div",
          {
            style: {
              width: "33.333%",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              minHeight: "200px",
              padding: spacing[8],
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            },
            children: [
              classroomItem.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "img",
                {
                  src: classroomItem.imageUrl,
                  alt: title,
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center"
                  },
                  onError: (e) => {
                    e.target.style.display = "none";
                  }
                }
              ) : null,
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #14b8a6 100%)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0, 221, 185, 0.6) 0%, rgba(0, 123, 122, 0.6) 100%)",
                    backdropFilter: "blur(12px)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { position: "absolute", inset: 0, opacity: 0.3 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                      width: "128px",
                      height: "128px",
                      background: colors.white,
                      borderRadius: "50%",
                      filter: "blur(32px)"
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      bottom: "-20px",
                      left: "-20px",
                      width: "80px",
                      height: "80px",
                      background: "#00ddb9",
                      borderRadius: "50%",
                      filter: "blur(24px)"
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "96px",
                      height: "96px",
                      background: "rgba(255, 255, 255, 0.4)",
                      borderRadius: "50%",
                      filter: "blur(16px)"
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: spacing[4],
                      left: spacing[4],
                      width: "64px",
                      height: "64px",
                      background: "rgba(0, 221, 185, 0.3)",
                      borderRadius: "50%",
                      filter: "blur(12px)"
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      bottom: spacing[4],
                      right: spacing[4],
                      width: "48px",
                      height: "48px",
                      background: "rgba(255, 255, 255, 0.5)",
                      borderRadius: "50%",
                      filter: "blur(8px)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { position: "relative", zIndex: 10 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  Typography,
                  {
                    variant: "h1",
                    style: {
                      fontSize: "48px",
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.bold,
                      color: colors.white,
                      lineHeight: 1,
                      marginBottom: spacing[1]
                    },
                    children: String(classroomItem.position || 1).padStart(2, "0")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  Typography,
                  {
                    variant: "caption",
                    style: {
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.medium,
                      color: colors.white,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em"
                    },
                    children: "Este evento acontecer\xE1 em"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { position: "relative", zIndex: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: spacing[1]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "h2",
                          style: {
                            fontSize: "32px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.white,
                            lineHeight: 1
                          },
                          children: String(timeLeft.days).padStart(2, "0")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            fontSize: "12px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.white,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                          },
                          children: "dias"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "h2",
                          style: {
                            fontSize: "32px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.white,
                            lineHeight: 1
                          },
                          children: String(timeLeft.hours).padStart(2, "0")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            fontSize: "12px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.white,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                          },
                          children: "horas"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "h2",
                          style: {
                            fontSize: "32px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.white,
                            lineHeight: 1
                          },
                          children: String(timeLeft.minutes).padStart(2, "0")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            fontSize: "12px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.white,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                          },
                          children: "min"
                        }
                      )
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { position: "relative", zIndex: 10, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "div",
                {
                  style: {
                    padding: `${spacing[1]} ${spacing[4]}`,
                    border: `2px solid ${colors.white}`,
                    borderRadius: radii.full,
                    color: colors.white,
                    fontFamily: typography.fontFamily.primary,
                    fontWeight: typography.fontWeight.medium,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  },
                  children: "Ao Vivo"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          "div",
          {
            style: {
              padding: `${spacing[8]} ${spacing[8]} ${spacing[8]} ${spacing[8]}`,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "66.667%",
              minHeight: "200px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { marginBottom: spacing[4] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  Typography,
                  {
                    variant: "h2",
                    style: {
                      color: colors.primary,
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.bold,
                      fontSize: "24px",
                      lineHeight: 1.2,
                      marginBottom: spacing[2],
                      cursor: "pointer",
                      textDecoration: "none"
                    },
                    onClick: handleEventClick,
                    children: title
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  Typography,
                  {
                    variant: "body",
                    style: {
                      color: colors.gray[600],
                      fontSize: "16px",
                      lineHeight: 1.5
                    },
                    children: description
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: spacing[8],
                    marginBottom: spacing[6]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.primary,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: spacing[1]
                          },
                          children: "Data"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "body",
                          style: {
                            fontSize: "18px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.primary
                          },
                          children: formattedDate
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.primary,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: spacing[1]
                          },
                          children: "Hor\xE1rio"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "body",
                          style: {
                            fontSize: "18px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.primary
                          },
                          children: formattedTime
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.primary,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: spacing[1]
                          },
                          children: "Dura\xE7\xE3o"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        Typography,
                        {
                          variant: "body",
                          style: {
                            fontSize: "18px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.primary
                          },
                          children: event.duration || "2H"
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: spacing[4] }, children: event.gcalendarUrl ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                Button,
                {
                  variant: "primary",
                  onClick: handleCalendarClick,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[1]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_phosphor_react5.Calendar, { size: 16 }),
                    "SALVAR NA AGENDA"
                  ]
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                Typography,
                {
                  variant: "caption",
                  style: {
                    color: colors.gray[500],
                    fontFamily: typography.fontFamily.primary
                  },
                  children: "Link da agenda n\xE3o dispon\xEDvel"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};

// src/components/CriaClassroomTrilhaCard/CriaClassroomTrilhaCard.tsx
var import_react11 = require("react");
var import_phosphor_react6 = require("phosphor-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var CriaClassroomTrilhaCard = ({
  customLearning,
  classroomItem,
  onCardClick,
  onInstructorClick,
  onToolClick,
  className = "",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = (0, import_react11.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react11.useState)(false);
  const handleCardClick = (0, import_react11.useCallback)(() => {
    onCardClick?.(customLearning);
  }, [customLearning, onCardClick]);
  const handleInstructorClick = (0, import_react11.useCallback)((instructor, e) => {
    e.stopPropagation();
    onInstructorClick?.(instructor);
  }, [onInstructorClick]);
  const handleToolClick = (0, import_react11.useCallback)((tool, e) => {
    e.stopPropagation();
    onToolClick?.(tool);
  }, [onToolClick]);
  const imageSource = customLearning.imageUrl || classroomItem.imageUrl || "/src/assets/cria_emblem_home.png";
  const title = classroomItem.customTitle || customLearning.title;
  const description = classroomItem.customSubtitle || customLearning.description || "";
  const aggregateInstructors = () => {
    const allInstructors = [];
    if (customLearning.lessons) {
      customLearning.lessons.forEach((lesson) => {
        if (lesson.instructors) {
          lesson.instructors.forEach((instructorName) => {
            const instructor = {
              id: instructorName.toLowerCase().replace(/\s+/g, "-"),
              name: instructorName
            };
            allInstructors.push(instructor);
          });
        }
      });
    }
    if (customLearning.courses) {
      customLearning.courses.forEach((course) => {
        if (course.instructors) {
          allInstructors.push(...course.instructors);
        }
      });
    }
    const uniqueInstructors = allInstructors.filter(
      (instructor, index, self) => index === self.findIndex((i) => i.id === instructor.id)
    );
    return uniqueInstructors;
  };
  const aggregateTools = () => {
    const allTools = [];
    if (customLearning.lessons) {
      customLearning.lessons.forEach((lesson) => {
        if (lesson.tools) {
          lesson.tools.forEach((toolName) => {
            const tool = {
              id: toolName.toLowerCase().replace(/\s+/g, "-"),
              name: toolName
            };
            allTools.push(tool);
          });
        }
      });
    }
    if (customLearning.courses) {
      customLearning.courses.forEach((course) => {
        if (course.tools) {
          allTools.push(...course.tools);
        }
      });
    }
    const uniqueTools = allTools.filter(
      (tool, index, self) => index === self.findIndex((t) => t.id === tool.id)
    );
    return uniqueTools;
  };
  const instructors = aggregateInstructors();
  const tools = aggregateTools();
  const visibleInstructors = instructors.slice(0, 2);
  const overflowInstructorsCount = Math.max(instructors.length - visibleInstructors.length, 0);
  const cardClasses = [
    "cria-classroom-trilha-card",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      className: cardClasses,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        backgroundColor: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.lg,
        overflow: "hidden",
        display: "flex",
        border: `1px solid ${colors.gray[100]}`,
        minHeight: "200px",
        transition: "all 0.3s ease",
        cursor: onCardClick ? "pointer" : "default",
        ...style
      },
      "data-custom-learning-id": customLearning.id,
      "data-classroom-item-id": classroomItem.id,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "div",
          {
            style: {
              width: "33.333%",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              minHeight: "200px"
            },
            onClick: handleCardClick,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "img",
                {
                  src: imageSource,
                  alt: title,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.3s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    opacity: imageLoaded ? 1 : 0
                  },
                  onLoad: () => setImageLoaded(true),
                  onError: () => setImageLoaded(true)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                "div",
                {
                  className: "learning-path-position",
                  style: {
                    position: "absolute",
                    top: spacing[4],
                    left: spacing[4]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      Typography,
                      {
                        variant: "h1",
                        style: {
                          fontSize: "48px",
                          fontFamily: typography.fontFamily.primary,
                          fontWeight: typography.fontWeight.bold,
                          color: colors.white,
                          lineHeight: 1,
                          marginBottom: spacing[1]
                        },
                        children: String(classroomItem.position || 1).padStart(2, "0")
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      Typography,
                      {
                        variant: "caption",
                        style: {
                          fontFamily: typography.fontFamily.primary,
                          fontWeight: typography.fontWeight.medium,
                          color: colors.white,
                          textTransform: "uppercase",
                          fontSize: "12px",
                          letterSpacing: "0.1em"
                        },
                        children: "TRILHA"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "div",
          {
            style: {
              padding: `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "66.667%",
              minHeight: "200px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  Typography,
                  {
                    variant: "h2",
                    style: {
                      color: colors.primary,
                      fontFamily: typography.fontFamily.primary,
                      fontWeight: typography.fontWeight.bold,
                      fontSize: "20px",
                      lineHeight: 1.2,
                      marginBottom: spacing[2],
                      cursor: "pointer",
                      textDecoration: customLearning.slug ? "underline" : "none",
                      textDecorationColor: "transparent",
                      transition: "all 0.3s ease"
                    },
                    onClick: handleCardClick,
                    onMouseEnter: (e) => {
                      if (customLearning.slug) {
                        e.currentTarget.style.textDecorationColor = colors.primary;
                      }
                    },
                    onMouseLeave: (e) => {
                      if (customLearning.slug) {
                        e.currentTarget.style.textDecorationColor = "transparent";
                      }
                    },
                    children: title
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  Typography,
                  {
                    variant: "body",
                    style: {
                      color: colors.gray[600],
                      fontSize: "14px",
                      lineHeight: 1.5,
                      marginBottom: spacing[4]
                    },
                    children: description
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: spacing[2],
                      marginTop: spacing[4],
                      marginBottom: spacing[2]
                    },
                    children: instructors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
                      visibleInstructors.map((instructor) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                        "div",
                        {
                          onClick: (e) => handleInstructorClick(instructor, e),
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            padding: `${spacing[1]} ${spacing[3]}`,
                            borderRadius: radii.full,
                            fontSize: typography.fontSize.caption,
                            fontWeight: typography.fontWeight.semiBold,
                            border: `1px solid ${colors.primaryLight}`,
                            color: colors.primary,
                            backgroundColor: colors.primaryLighter,
                            cursor: onInstructorClick ? "pointer" : "default",
                            flexShrink: 0
                          },
                          children: [
                            instructor.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                              Avatar,
                              {
                                src: instructor.avatarUrl,
                                alt: instructor.name,
                                size: "xs",
                                name: instructor.name,
                                style: { width: "20px", height: "20px", marginRight: spacing[2] }
                              }
                            ),
                            instructor.name
                          ]
                        },
                        instructor.id
                      )),
                      overflowInstructorsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                        "span",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            padding: `${spacing[1]} ${spacing[2]}`,
                            borderRadius: radii.full,
                            backgroundColor: colors.gray[100],
                            color: colors.gray[600],
                            fontSize: typography.fontSize.caption,
                            fontWeight: typography.fontWeight.medium,
                            flexShrink: 0
                          },
                          children: [
                            "+",
                            overflowInstructorsCount
                          ]
                        }
                      )
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      "span",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          padding: `${spacing[1]} ${spacing[3]}`,
                          borderRadius: radii.full,
                          backgroundColor: colors.gray[100],
                          color: colors.gray[600],
                          fontSize: typography.fontSize.caption,
                          fontWeight: typography.fontWeight.medium
                        },
                        children: "No instructors"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: spacing[3],
                      marginBottom: spacing[4]
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react6.Wrench, { size: 20, color: colors.primary, style: { marginTop: spacing[1], flexShrink: 0 } }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: spacing[2]
                          },
                          children: tools.length > 0 ? tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                            "span",
                            {
                              onClick: (e) => handleToolClick(tool, e),
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                padding: `${spacing[1]} ${spacing[3]}`,
                                borderRadius: radii.full,
                                fontSize: typography.fontSize.caption,
                                fontWeight: typography.fontWeight.semiBold,
                                border: `1px solid ${colors.primaryLight}`,
                                color: colors.primary,
                                backgroundColor: colors.primaryLighter,
                                cursor: onToolClick ? "pointer" : "default"
                              },
                              children: [
                                tool.icon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { width: "20px", height: "20px", marginRight: spacing[2], display: "flex", alignItems: "center", justifyContent: "center" }, children: tool.icon }),
                                tool.name
                              ]
                            },
                            tool.id
                          )) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                            "span",
                            {
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                padding: `${spacing[1]} ${spacing[3]}`,
                                borderRadius: radii.full,
                                fontSize: typography.fontSize.caption,
                                fontWeight: typography.fontWeight.semiBold,
                                border: `1px solid ${colors.gray[300]}`,
                                color: colors.gray[600],
                                backgroundColor: colors.gray[100]
                              },
                              children: "No tools"
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: spacing[2]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react6.Clock, { size: 16, color: colors.primary, style: { marginRight: spacing[1] } }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        Typography,
                        {
                          variant: "caption",
                          style: {
                            color: colors.primary,
                            fontSize: "12px",
                            fontFamily: typography.fontFamily.primary,
                            fontWeight: typography.fontWeight.medium
                          },
                          children: customLearning.duration || "--"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      Typography,
                      {
                        variant: "caption",
                        style: {
                          color: colors.primary,
                          fontSize: "12px",
                          fontFamily: typography.fontFamily.primary,
                          fontWeight: typography.fontWeight.bold,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em"
                        },
                        children: "TRILHA"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {})
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};

// src/components/Card/demo.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var CardDemo = () => {
  const [completedLessons, setCompletedLessons] = (0, import_react12.useState)(/* @__PURE__ */ new Set(["1", "3", "6"]));
  const sampleLessons = [
    {
      id: "1",
      slug: "react-basics",
      title: "Introduction to React",
      thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      duration: "15min",
      category: "Frontend",
      instructor: {
        id: "1",
        name: "John Doe",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "2",
      slug: "css-fundamentals",
      title: "CSS Fundamentals and Modern Layouts",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      duration: "20min",
      category: "Frontend",
      instructor: {
        id: "2",
        name: "Jane Smith",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "3",
      slug: "javascript-es6",
      title: "JavaScript ES6+ Features",
      thumbnailUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop",
      duration: "25min",
      category: "JavaScript",
      instructor: {
        id: "3",
        name: "Mike Johnson",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "6",
      slug: "nodejs-backend",
      title: "Building REST APIs with Node.js",
      thumbnailUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
      duration: "30min",
      category: "Backend",
      instructor: {
        id: "4",
        name: "Sarah Wilson",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "7",
      slug: "database-design",
      title: "Database Design Principles",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      duration: "35min",
      category: "Database",
      instructor: {
        id: "5",
        name: "David Brown",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "8",
      slug: "docker-containers",
      title: "Docker and Containerization",
      thumbnailUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=200&fit=crop",
      duration: "40min",
      category: "DevOps",
      instructor: {
        id: "6",
        name: "Lisa Garcia",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "9",
      slug: "fullstack-project",
      title: "Full-Stack Project Workshop",
      thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      duration: "60min",
      category: "Workshop",
      instructors: [
        {
          id: "1",
          name: "John Doe",
          avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: "2",
          name: "Jane Smith",
          avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: "3",
          name: "Mike Johnson",
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
        }
      ]
    }
  ];
  const handleLessonClick = (lesson) => {
    console.log("Lesson clicked:", lesson.title);
    alert(`Opening lesson: ${lesson.title}`);
  };
  const handleToggleCompletion = (lesson, completed) => {
    console.log("Toggle completion:", lesson.title, completed);
    setCompletedLessons((prev) => {
      const newSet = new Set(prev);
      if (completed) {
        newSet.add(lesson.id);
      } else {
        newSet.delete(lesson.id);
      }
      return newSet;
    });
  };
  const handleInstructorClick = (instructor) => {
    if (instructor) {
      console.log("Instructor clicked:", instructor.name);
      alert(`Viewing instructor profile: ${instructor.name}`);
    }
  };
  const sampleCriaLessons = [
    {
      id: "1",
      slug: "react-fundamentals",
      title: "React Fundamentals",
      description: "Master the core concepts of React including components, state, and props",
      thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      duration: "45min",
      category: "Frontend",
      toolIconText: "AI",
      instructor: {
        id: "1",
        name: "John Doe",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "2",
      slug: "advanced-css",
      title: "Advanced CSS Techniques",
      description: "Learn modern CSS features including Grid, Flexbox, and animations",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      duration: "60min",
      category: "Frontend",
      toolIconText: "CSS",
      instructor: {
        id: "2",
        name: "Jane Smith",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "3",
      slug: "nodejs-backend",
      title: "Node.js Backend Development",
      description: "Build robust backend applications with Node.js and Express",
      thumbnailUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
      duration: "90min",
      category: "Backend",
      toolIconText: "JS",
      instructor: {
        id: "3",
        name: "Mike Johnson",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    }
  ];
  const handleCriaLessonClick = (lesson) => {
    console.log("CriaLesson clicked:", lesson.title);
    alert(`Opening lesson: ${lesson.title}`);
  };
  const sampleCourses = [
    {
      id: "1",
      slug: "react-complete-course",
      title: "React Complete Course",
      description: "Master React from basics to advanced concepts including hooks, context, and performance optimization.",
      thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      duration: "8 hours",
      instructors: [
        {
          id: "1",
          name: "John Doe",
          avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: "2",
          name: "Jane Smith",
          avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        }
      ],
      tools: [
        {
          id: "1",
          name: "React",
          icon: "\u269B\uFE0F"
        },
        {
          id: "2",
          name: "TypeScript",
          icon: "\u{1F537}"
        },
        {
          id: "3",
          name: "Vite",
          icon: "\u26A1"
        }
      ]
    },
    {
      id: "2",
      slug: "fullstack-javascript",
      title: "Full-Stack JavaScript Development",
      description: "Learn to build complete web applications with JavaScript, Node.js, and modern frameworks.",
      thumbnailUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
      duration: "12 hours",
      instructors: [
        {
          id: "3",
          name: "Mike Johnson",
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
        }
      ],
      tools: [
        {
          id: "4",
          name: "Node.js",
          icon: "\u{1F7E2}"
        },
        {
          id: "5",
          name: "Express",
          icon: "\u{1F680}"
        },
        {
          id: "6",
          name: "MongoDB",
          icon: "\u{1F343}"
        },
        {
          id: "7",
          name: "Jest",
          icon: "\u{1F9EA}"
        }
      ]
    },
    {
      id: "3",
      slug: "ui-ux-design",
      title: "UI/UX Design Fundamentals",
      description: "Master the principles of user interface and user experience design for modern applications.",
      thumbnailUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      duration: "6 hours",
      instructors: [
        {
          id: "4",
          name: "Sarah Wilson",
          avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        {
          id: "5",
          name: "David Brown",
          avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        }
      ],
      tools: [
        {
          id: "8",
          name: "Figma",
          icon: "\u{1F3A8}"
        },
        {
          id: "9",
          name: "Adobe XD",
          icon: "\u{1F4D0}"
        },
        {
          id: "10",
          name: "Sketch",
          icon: "\u270F\uFE0F"
        }
      ]
    }
  ];
  const handleCriaCourseClick = (course) => {
    console.log("CriaCourse clicked:", course.title);
    alert(`Opening course: ${course.title}`);
  };
  const handleCriaInstructorClick = (instructor) => {
    console.log("Instructor clicked:", instructor.name);
    alert(`Viewing instructor profile: ${instructor.name}`);
  };
  const handleCriaToolClick = (tool) => {
    console.log("Tool clicked:", tool.name);
    alert(`Learning about: ${tool.name}`);
  };
  const sampleClassroomEvents = [
    {
      event: {
        id: "1",
        name: "React Workshop",
        description: "Learn React fundamentals and best practices with hands-on exercises",
        startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1e3).toISOString(),
        // 2 days from now
        duration: "2H",
        eventLink: "/events/react-workshop",
        gcalendarUrl: "https://calendar.google.com/event"
      },
      classroomItem: {
        id: "1",
        position: 1,
        customTitle: "React Workshop - Advanced Concepts",
        customSubtitle: "Master React hooks, context, and performance optimization",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
      }
    },
    {
      event: {
        id: "2",
        name: "JavaScript Fundamentals",
        description: "Build a solid foundation in JavaScript programming",
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1e3).toISOString(),
        // 5 days from now
        duration: "3H",
        eventLink: "/events/javascript-fundamentals",
        gcalendarUrl: "https://calendar.google.com/event"
      },
      classroomItem: {
        id: "2",
        position: 2,
        customTitle: "JavaScript Fundamentals - Complete Course",
        customSubtitle: "From variables to advanced ES6+ features and async programming",
        imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop"
      }
    },
    {
      event: {
        id: "3",
        name: "UI/UX Design Workshop",
        description: "Learn design principles and create beautiful user interfaces",
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3).toISOString(),
        // 7 days from now
        duration: "2.5H",
        eventLink: "/events/ui-ux-workshop"
        // No calendar URL for this event
      },
      classroomItem: {
        id: "3",
        position: 3,
        customTitle: "UI/UX Design Workshop - Modern Principles",
        customSubtitle: "Master design thinking, user research, and prototyping techniques",
        imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
      }
    }
  ];
  const handleClassroomEventClick = (event) => {
    console.log("Classroom event clicked:", event.name);
    alert(`Opening event: ${event.name}`);
  };
  const handleClassroomCalendarClick = (event) => {
    console.log("Classroom calendar clicked:", event.name);
    alert(`Adding to calendar: ${event.name}`);
  };
  const sampleClassroomTrilhas = [
    {
      customLearning: {
        id: "1",
        slug: "react-complete-path",
        title: "React Complete Learning Path",
        description: "Master React from basics to advanced concepts with comprehensive lessons and courses.",
        duration: "12 hours",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        lessons: [
          {
            id: "1",
            title: "React Fundamentals",
            instructors: ["John Doe", "Jane Smith"],
            tools: ["React", "JavaScript", "JSX"]
          },
          {
            id: "2",
            title: "Advanced React Patterns",
            instructors: ["Mike Johnson"],
            tools: ["React", "TypeScript", "Hooks"]
          }
        ],
        courses: [
          {
            id: "1",
            title: "React Complete Course",
            instructors: [
              { id: "1", name: "John Doe", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
              { id: "2", name: "Jane Smith", avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" }
            ],
            tools: [
              { id: "1", name: "React", icon: "\u269B\uFE0F" },
              { id: "2", name: "TypeScript", icon: "\u{1F537}" }
            ]
          }
        ]
      },
      classroomItem: {
        id: "1",
        position: 1,
        customTitle: "React Complete Path - Advanced",
        customSubtitle: "From beginner to expert with hands-on projects and real-world applications",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
      }
    },
    {
      customLearning: {
        id: "2",
        slug: "fullstack-javascript-path",
        title: "Full-Stack JavaScript Learning Path",
        description: "Learn to build complete web applications with JavaScript, Node.js, and modern frameworks.",
        duration: "16 hours",
        imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
        lessons: [
          {
            id: "1",
            title: "JavaScript Fundamentals",
            instructors: ["Alice Brown", "Bob Wilson", "Charlie Davis"],
            tools: ["JavaScript", "ES6", "DOM"]
          },
          {
            id: "2",
            title: "Node.js Backend",
            instructors: ["David Miller"],
            tools: ["Node.js", "Express", "MongoDB"]
          }
        ],
        courses: [
          {
            id: "1",
            title: "Full-Stack JavaScript Course",
            instructors: [
              { id: "3", name: "Alice Brown", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
              { id: "4", name: "Bob Wilson", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" }
            ],
            tools: [
              { id: "3", name: "Node.js", icon: "\u{1F7E2}" },
              { id: "4", name: "Express", icon: "\u{1F680}" },
              { id: "5", name: "MongoDB", icon: "\u{1F343}" }
            ]
          }
        ]
      },
      classroomItem: {
        id: "2",
        position: 2,
        customTitle: "Full-Stack JavaScript Path",
        customSubtitle: "Build complete web applications from frontend to backend"
      }
    },
    {
      customLearning: {
        id: "3",
        slug: "ui-ux-design-path",
        title: "UI/UX Design Learning Path",
        description: "Master the principles of user interface and user experience design for modern applications.",
        duration: "8 hours",
        imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
        lessons: [
          {
            id: "1",
            title: "Design Principles",
            instructors: ["Sarah Wilson"],
            tools: ["Figma", "Design Thinking"]
          }
        ],
        courses: [
          {
            id: "1",
            title: "UI/UX Design Course",
            instructors: [
              { id: "5", name: "Sarah Wilson", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
            ],
            tools: [
              { id: "6", name: "Figma", icon: "\u{1F3A8}" },
              { id: "7", name: "Adobe XD", icon: "\u{1F4D0}" }
            ]
          }
        ]
      },
      classroomItem: {
        id: "3",
        position: 3,
        customTitle: "UI/UX Design Mastery",
        customSubtitle: "Create beautiful and intuitive user experiences"
      }
    }
  ];
  const handleClassroomTrilhaClick = (customLearning) => {
    console.log("Classroom trilha clicked:", customLearning.title);
    alert(`Opening learning path: ${customLearning.title}`);
  };
  const handleClassroomTrilhaInstructorClick = (instructor) => {
    console.log("Classroom trilha instructor clicked:", instructor.name);
    alert(`Viewing instructor: ${instructor.name}`);
  };
  const handleClassroomTrilhaToolClick = (tool) => {
    console.log("Classroom trilha tool clicked:", tool.name);
    alert(`Learning about: ${tool.name}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { padding: "24px", maxWidth: "1000px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Demo de Cards" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaLessonCardSmall - Lesson Cards" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Specialized lesson card component with completion tracking, instructor details, and interactive elements. Features examples with 6 different instructors across various categories, including stacked instructor avatars for collaborative lessons." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleLessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        CriaLessonCardSmall,
        {
          lesson,
          completed: completedLessons.has(lesson.id),
          onLessonClick: handleLessonClick,
          onToggleCompletion: handleToggleCompletion,
          onInstructorClick: handleInstructorClick
        },
        lesson.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px"
      }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        CriaLessonCardSmall,
        {
          lesson: {
            id: "5",
            slug: "vscode-tips",
            title: "VS Code Productivity Tips",
            thumbnailUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop",
            duration: "12min",
            category: "Tools",
            instructor: {
              id: "4",
              name: "Emma Davis",
              avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
            }
          },
          toolIconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          completed: false,
          onLessonClick: handleLessonClick,
          onToggleCompletion: handleToggleCompletion,
          onInstructorClick: handleInstructorClick
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaLessonCard - Detailed Lesson Cards" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Large, detailed lesson card component with tool icons, descriptions, and comprehensive lesson information. Perfect for showcasing detailed course content with rich visual elements." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleCriaLessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        CriaLessonCard,
        {
          lesson,
          onLessonClick: handleCriaLessonClick
        },
        lesson.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaCourseCard - Horizontal Course Cards" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Large, horizontal course card component with comprehensive course information, instructor details, and tool badges. Perfect for showcasing detailed course content with rich metadata and interactive elements." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleCourses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        CriaCourseCard,
        {
          course,
          onCourseClick: handleCriaCourseClick,
          onInstructorClick: handleCriaInstructorClick,
          onToolClick: handleCriaToolClick
        },
        course.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaClassroomFutureEventCard - Event Cards with Countdown" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Interactive event cards with live countdown timers, beautiful gradient backgrounds, and calendar integration. Perfect for showcasing upcoming classroom events with real-time countdown functionality." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleClassroomEvents.map(({ event, classroomItem }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        CriaClassroomFutureEventCard,
        {
          event,
          classroomItem,
          onEventClick: handleClassroomEventClick,
          onCalendarClick: handleClassroomCalendarClick
        },
        event.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaClassroomTrilhaCard - Learning Path Cards" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Custom learning path cards with aggregated instructors and tools from lessons and courses. Features comprehensive learning content display, instructor overflow handling, and interactive tool badges." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleClassroomTrilhas.map(({ customLearning, classroomItem }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        CriaClassroomTrilhaCard,
        {
          customLearning,
          classroomItem,
          onCardClick: handleClassroomTrilhaClick,
          onInstructorClick: handleClassroomTrilhaInstructorClick,
          onToolClick: handleClassroomTrilhaToolClick
        },
        customLearning.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "default", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Padr\xE3o" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Este \xE9 um card padr\xE3o com borda e fundo claros." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "elevated", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Elevado" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Este card tem uma sombra para profundidade e hierarquia visual." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "outlined", style: { borderColor: "#28DDB9" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card com Contorno" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Este card tem uma borda proeminente e fundo transparente." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "outlined", style: { borderColor: "#28DDB9" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { color: "#6B7280" }, children: "Card com Contorno - Texto Secund\xE1rio" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { color: "#6B7280" }, children: "Este card tem uma borda proeminente, fundo transparente e texto em cor secund\xE1ria." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "filled", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Preenchido" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Este card tem um preenchimento sutil de cor de fundo." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Card, { size: "sm", style: { width: "200px" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "bodySmall", children: "Card pequeno com preenchimento m\xEDnimo" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Card, { size: "md", style: { width: "250px" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Card m\xE9dio com preenchimento padr\xE3o" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Card, { size: "lg", style: { width: "300px" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Card grande com preenchimento generoso para mais conte\xFAdo" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards Interativos" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          Card,
          {
            interactive: true,
            onClick: () => alert("Card clicado!"),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Clic\xE1vel" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Este card \xE9 interativo e responde a cliques." }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { interactive: true, disabled: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", color: "disabled", weight: "medium", children: "Card Desabilitado" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", color: "disabled", children: "Este card est\xE1 desabilitado e n\xE3o pode ser interagido." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Exemplos Complexos" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "elevated", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(CardContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
              height: "200px",
              backgroundColor: "#f3f4f6",
              borderRadius: "8px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280"
            }, children: "Imagem do Produto" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Nome do Produto" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Esta \xE9 uma descri\xE7\xE3o do produto que explica o que o produto faz e por que \xE9 \xFAtil." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "bold", children: "R$ 99,99" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { size: "sm", children: "Adicionar ao Carrinho" })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "outlined", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(CardContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", alignItems: "center", marginBottom: "16px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: {
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
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Jo\xE3o Silva" }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "bodySmall", children: "Engenheiro de Software" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Apaixonado por construir grandes experi\xEAncias de usu\xE1rio e resolver problemas complexos." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", gap: "8px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "outline", size: "sm", children: "Mensagem" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { size: "sm", children: "Seguir" })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Card, { variant: "filled", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Receita Total" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "display", weight: "bold", style: { marginBottom: "8px" }, children: "R$ 12.345" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "bodySmall", color: "success", children: "\u2197 +12,5% do m\xEAs passado" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards com A\xE7\xF5es" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Card, { variant: "elevated", style: { maxWidth: "500px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Configura\xE7\xF5es" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Gerencie suas configura\xE7\xF5es de conta e prefer\xEAncias." }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Notifica\xE7\xF5es por Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "outline", size: "sm", children: "Alternar" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography_default, { variant: "body", children: "Modo Escuro" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "outline", size: "sm", children: "Alternar" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "ghost", size: "sm", children: "Cancelar" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { size: "sm", children: "Salvar Altera\xE7\xF5es" })
        ] }) })
      ] })
    ] })
  ] });
};

// src/components/Checkbox/Checkbox.tsx
var import_react13 = require("react");
var import_phosphor_react7 = require("phosphor-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Checkbox = (0, import_react13.forwardRef)(({
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
  const inputRef = (0, import_react13.useRef)(null);
  (0, import_react13.useImperativeHandle)(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = (0, import_react13.useCallback)((event) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);
  const handleClick = (0, import_react13.useCallback)((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = (0, import_react13.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: checkboxClasses, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "cria-checkbox__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "cria-checkbox__checkmark", children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "cria-checkbox__indeterminate" }) : checked === true ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_phosphor_react7.Check, { size: size === "sm" ? 12 : size === "lg" ? 20 : 16 }) : null }),
      label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: id || (label ? `${name || "checkbox"}-input` : void 0), className: labelClasses, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "cria-checkbox__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-checkbox__helper-text",
        id: `${id || name || "checkbox"}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-checkbox__error-message",
        id: `${id || name || "checkbox"}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_react14 = require("react");

// src/components/TextTokens/CriaText.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var CriaTextHeadline1 = ({ as, children, className = "", ...props }) => {
  const Element = as || "h1";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "h1",
      color: "primary",
      weight: "bold",
      className,
      ...props,
      children
    }
  );
};
var CriaTextHeadline2 = ({ as, children, className = "", ...props }) => {
  const Element = as || "h2";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "h2",
      color: "primary",
      weight: "semiBold",
      className,
      ...props,
      children
    }
  );
};
var CriaTextBody1 = ({ as, children, className = "", ...props }) => {
  const Element = as || "p";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "body",
      color: "content",
      className,
      ...props,
      children
    }
  );
};
var CriaTextBody2 = ({ as, children, className = "", ...props }) => {
  const Element = as || "span";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "bodySmall",
      color: "content",
      className,
      ...props,
      children
    }
  );
};
var CriaTextBody1Inverse = ({ as, children, className = "", ...props }) => {
  const Element = as || "p";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "body",
      color: "inverse",
      className,
      ...props,
      children
    }
  );
};
var CriaTextTitle1 = ({ as, children, className = "", ...props }) => {
  const Element = as || "h3";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "title2",
      color: "primary",
      weight: "bold",
      className,
      ...props,
      children
    }
  );
};
var CriaTextTitle2 = ({ as, children, className = "", ...props }) => {
  const Element = as || "h4";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "title3",
      color: "primary",
      weight: "semiBold",
      className,
      ...props,
      children
    }
  );
};
var CriaTextImportant = ({ as, children, className = "", ...props }) => {
  const Element = as || "span";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "body",
      color: "content",
      weight: "medium",
      className,
      ...props,
      children
    }
  );
};
var CriaTextAlert = ({ as, children, className = "", ...props }) => {
  const Element = as || "span";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Typography,
    {
      as: Element,
      variant: "body",
      color: "error",
      weight: "medium",
      className,
      ...props,
      children
    }
  );
};

// src/components/Dropdown/Dropdown.tsx
var import_phosphor_react8 = require("phosphor-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Dropdown = (0, import_react14.forwardRef)(({
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
  name,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = (0, import_react14.useState)(false);
  const [searchTerm, setSearchTerm] = (0, import_react14.useState)("");
  const [focusedIndex, setFocusedIndex] = (0, import_react14.useState)(-1);
  const [selectedValues, setSelectedValues] = (0, import_react14.useState)(() => {
    const initialValue = value || defaultValue;
    return Array.isArray(initialValue) ? initialValue : initialValue ? [initialValue] : [];
  });
  const triggerRef = (0, import_react14.useRef)(null);
  const listboxRef = (0, import_react14.useRef)(null);
  const searchInputRef = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    if (value !== void 0) {
      setSelectedValues(Array.isArray(value) ? value : value ? [value] : []);
    }
  }, [value]);
  (0, import_react14.useImperativeHandle)(ref, () => ({
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
  const handleOptionSelect = (0, import_react14.useCallback)((option) => {
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
  const handleTriggerClick = (0, import_react14.useCallback)(() => {
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
  const handleKeyDown = (0, import_react14.useCallback)((event) => {
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
  (0, import_react14.useEffect)(() => {
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
  (0, import_react14.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: containerClasses, style, ...props, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "cria-dropdown__label", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { style: { color: colors.error }, children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "button",
      {
        ref: triggerRef,
        type: "button",
        role: "combobox",
        name,
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
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
            textAlign: "left"
          }, children: getDisplayText() }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            import_phosphor_react8.CaretDown,
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
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "div",
      {
        ref: listboxRef,
        role: "listbox",
        className: "cria-dropdown-listbox",
        style: getListboxStyles(),
        "aria-labelledby": triggerRef.current?.id,
        children: [
          searchable && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { padding: spacing[2], borderBottom: `1px solid ${colors.border.light}` }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              import_phosphor_react8.MagnifyingGlass,
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
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
          filteredOptions.length > 0 ? filteredOptions.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
            "div",
            {
              role: "option",
              className: getOptionClasses(option, index),
              style: getOptionStyles(option, index),
              onClick: () => handleOptionSelect(option),
              "aria-selected": selectedValues.includes(option.value),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
                  option.icon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { style: { marginRight: spacing[2] }, children: option.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CriaTextBody1, { as: "span", children: option.label }),
                    option.description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { marginTop: spacing[1] }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CriaTextBody2, { as: "span", children: option.description }) })
                  ] })
                ] }),
                selectedValues.includes(option.value) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_phosphor_react8.Check, { size: 16, style: { color: colors.primary, flexShrink: 0 } })
              ]
            },
            option.value
          )) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: {
            padding: spacing[4],
            textAlign: "center",
            color: colors.text.secondary,
            fontSize: typography.fontSize.bodySmall
          }, children: "No options found" })
        ]
      }
    ),
    (helperText || errorMessage) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "div",
      {
        id: `${label || "dropdown"}-helper`,
        className: "cria-dropdown__messages",
        style: { marginTop: spacing[1] },
        children: errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Typography, { variant: "bodySmall", color: "error", children: errorMessage }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Typography, { variant: "bodySmall", color: "secondary", children: helperText })
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { style: { marginRight: spacing[2] }, children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: children || /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: label }),
      description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: {
        fontSize: typography.fontSize.caption,
        color: colors.text.secondary,
        marginTop: spacing[1]
      }, children: description })
    ] }) })
  ] });
};

// src/components/Input/Input.tsx
var import_react15 = __toESM(require("react"), 1);
var import_phosphor_react9 = require("phosphor-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Input = (0, import_react15.forwardRef)(({
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
  const inputRef = (0, import_react15.useRef)(null);
  const [showPassword, setShowPassword] = import_react15.default.useState(false);
  const [isFocused, setIsFocused] = import_react15.default.useState(false);
  (0, import_react15.useImperativeHandle)(ref, () => ({
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
  const handlePasswordToggle = (0, import_react15.useCallback)(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  const handleClear = (0, import_react15.useCallback)(() => {
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
  const handleFocus = (0, import_react15.useCallback)((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = (0, import_react15.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "cria-input__label", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-input__required", children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "cria-input__wrapper", children: [
      leftIcon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-input__left-icon", children: leftIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
      (rightIcon || shouldShowPasswordToggle || shouldShowClearButton) && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "cria-input__right-icons", children: [
        shouldShowClearButton && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "button",
          {
            type: "button",
            className: "cria-input__clear-button",
            onClick: handleClear,
            "aria-label": "Clear input",
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react9.X, { size: 16 })
          }
        ),
        shouldShowPasswordToggle && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "button",
          {
            type: "button",
            className: "cria-input__password-toggle",
            onClick: handlePasswordToggle,
            "aria-label": showPassword ? "Hide password" : "Show password",
            children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react9.EyeSlash, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react9.Eye, { size: 16 })
          }
        ),
        rightIcon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-input__right-icon", children: rightIcon })
      ] })
    ] }),
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "cria-input__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "body", color: "secondary", className: "cria-input__helper-text", children: helperText }),
      errorMessage && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Typography, { variant: "body", color: "error", className: "cria-input__error-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react9.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        errorMessage
      ] }),
      successMessage && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Typography, { variant: "body", color: "success", className: "cria-input__success-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react9.Check, { size: 14, style: { marginRight: "4px" } }),
        successMessage
      ] }),
      warningMessage && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Typography, { variant: "body", color: "warning", className: "cria-input__warning-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react9.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        warningMessage
      ] }),
      showCharacterCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Typography, { variant: "body", color: "secondary", className: "cria-input__character-count", children: [
        characterCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});
Input.displayName = "Input";

// src/components/Modal/Modal.tsx
var import_react16 = require("react");
var import_phosphor_react10 = require("phosphor-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  const modalRef = (0, import_react16.useRef)(null);
  const previousActiveElement = (0, import_react16.useRef)(null);
  const overlayRef = (0, import_react16.useRef)(null);
  const handleEscapeKey = (0, import_react16.useCallback)((event) => {
    if (event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  }, [closeOnEscape, onClose]);
  const handleOverlayClick = (0, import_react16.useCallback)((event) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);
  const handleFocus = (0, import_react16.useCallback)(() => {
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
  const toggleBodyScroll = (0, import_react16.useCallback)((lock) => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, []);
  (0, import_react16.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
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
            showHeader && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "cria-modal__header", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                Typography,
                {
                  id: "modal-title",
                  variant: "h3",
                  weight: "semiBold",
                  className: "cria-modal__title",
                  children: title
                }
              ),
              showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onClose,
                  className: "cria-modal__close-button",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_phosphor_react10.X, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              "div",
              {
                id: "modal-content",
                className: "cria-modal__content",
                children
              }
            ),
            showFooter && footer && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "cria-modal__footer", children: footer })
          ]
        }
      )
    }
  );
};

// src/components/Navigation/Navigation.tsx
var import_react17 = require("react");
var import_phosphor_react11 = require("phosphor-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  theme = "default",
  ...props
}) => {
  const [isMobile, setIsMobile] = (0, import_react17.useState)(false);
  const [expandedItems, setExpandedItems] = (0, import_react17.useState)(
    new Set(items.filter((item) => item.defaultExpanded).map((item) => item.id))
  );
  (0, import_react17.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleToggle = (0, import_react17.useCallback)(() => {
    onToggle?.(!collapsed);
  }, [collapsed, onToggle]);
  const handleSubitemToggle = (0, import_react17.useCallback)((itemId) => {
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
  const handleKeyDown = (0, import_react17.useCallback)((event, index) => {
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
    theme !== "default" && `cria-sidebar--${theme}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "nav",
    {
      className: sidebarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "cria-sidebar__header", children: [
          title && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "cria-sidebar__title-section", children: titleHref ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: titleHref, className: "cria-sidebar__title-link", children: theme !== "default" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Typography, { variant: "h3", weight: "bold", children: title }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: title }) }) : theme !== "default" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Typography, { variant: "h3", weight: "bold", children: title }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: title }) }),
          showToggle && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleToggle,
              "aria-label": "Toggle sidebar",
              className: "cria-sidebar__toggle",
              children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_phosphor_react11.CaretRight, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_phosphor_react11.CaretLeft, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "cria-sidebar__content", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { className: "cria-sidebar__items", role: "menubar", children: items.map((item, index) => {
          const hasSubitems = item.subitems && item.subitems.length > 0;
          const isExpanded = expandedItems.has(item.id);
          const isActive = activeRoute === item.href || hasSubitems && item.subitems?.some((subitem) => activeRoute === subitem.href);
          return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("li", { className: "cria-sidebar__item-wrapper", children: [
            hasSubitems ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
                role: "button",
                "aria-expanded": isExpanded,
                onClick: () => handleSubitemToggle(item.id),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSubitemToggle(item.id);
                    return;
                  }
                  handleKeyDown(e, index);
                },
                children: [
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
                  !collapsed && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__label", children: item.label }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                      "span",
                      {
                        className: "cria-sidebar__subitem-toggle",
                        "aria-hidden": "true",
                        children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_phosphor_react11.CaretDown, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_phosphor_react11.CaretRight, { size: 16 })
                      }
                    )
                  ] }),
                  item.badge && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
                ]
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
                  !collapsed && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__label", children: item.label }),
                  item.badge && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
                ]
              }
            ),
            hasSubitems && isExpanded && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { className: "cria-sidebar__subitems", role: "menu", children: item.subitems?.map((subitem) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: "cria-sidebar__subitem-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
                  subitem.icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__subitem-icon", "aria-hidden": "true", children: subitem.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__subitem-label", children: subitem.label }),
                  subitem.badge && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-sidebar__subitem-badge", "aria-hidden": "true", children: subitem.badge })
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
  const [isMobile, setIsMobile] = (0, import_react17.useState)(false);
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleMobileMenuToggle = (0, import_react17.useCallback)(() => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  }, [mobileMenuOpen, onMobileMenuToggle]);
  const handleKeyDown = (0, import_react17.useCallback)((event, index) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "nav",
    {
      className: topbarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "cria-topbar__content", children: [
          brand && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "cria-topbar__brand", children: brandHref ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: brandHref, className: "cria-topbar__brand-link", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: itemsClasses, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { className: "cria-topbar__items-list", role: "menubar", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: "cria-topbar__item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-topbar__icon", "aria-hidden": "true", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-topbar__label", children: item.label }),
                item.badge && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-topbar__badge", "aria-hidden": "true", children: item.badge })
              ]
            }
          ) }, item.id)) }) }),
          isMobile && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleMobileMenuToggle,
              "aria-label": "Toggle menu",
              "aria-expanded": mobileMenuOpen,
              className: "cria-topbar__mobile-toggle",
              children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_phosphor_react11.List, { size: 16 })
            }
          )
        ] }),
        isMobile && mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "cria-topbar__mobile-menu", role: "menu", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { className: "cria-topbar__mobile-items", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: "cria-topbar__mobile-item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-topbar__mobile-icon", "aria-hidden": "true", children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-topbar__mobile-label", children: item.label }),
              item.badge && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-topbar__mobile-badge", "aria-hidden": "true", children: item.badge })
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: navigationClasses, style, ...props, children: [
    sidebar && (variant === "sidebar-only" || variant === "both") && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sidebar, { ...sidebar }),
    topbar && (variant === "topbar-only" || variant === "both") && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Topbar, { ...topbar })
  ] });
};

// src/components/Pagination/Pagination.tsx
var import_react18 = require("react");
var import_phosphor_react12 = require("phosphor-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Pagination = (0, import_react18.forwardRef)(({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  showPrevNext = true,
  previousLabel = "Previous",
  nextLabel = "Next",
  firstLabel = "First",
  lastLabel = "Last",
  showPageSize = false,
  pageSize,
  pageSizeOptions = [5, 10, 20, 50],
  onPageSizeChange,
  showPageInfo = false,
  totalItems,
  variant = "default",
  ariaLabel = "Pagination",
  className = "",
  style,
  ...props
}, ref) => {
  const pageNumbers = (0, import_react18.useMemo)(() => {
    if (totalPages <= 1) return [1];
    const pages = [];
    const totalVisiblePages = 7;
    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
      const shouldShowLeftEllipsis = leftSiblingIndex > 2;
      const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;
      if (shouldShowLeftEllipsis) {
        pages.push("...");
      }
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      if (shouldShowRightEllipsis) {
        pages.push("...");
      }
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    return pages;
  }, [currentPage, totalPages, siblingCount]);
  const pageInfo = (0, import_react18.useMemo)(() => {
    if (!showPageInfo || !totalItems || !pageSize) return "";
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);
    return `Showing ${startItem}-${endItem} of ${totalItems}`;
  }, [showPageInfo, totalItems, pageSize, currentPage]);
  const paginationClasses = [
    "cria-pagination",
    variant !== "default" && `cria-pagination--${variant}`,
    className
  ].filter(Boolean).join(" ");
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    onPageSizeChange?.(newPageSize);
  };
  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };
  if (totalPages <= 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "nav",
    {
      ref,
      className: paginationClasses,
      "aria-label": ariaLabel,
      style,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "cria-pagination__content", children: [
        showPageSize && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "cria-pagination__page-size", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: "page-size-select", className: "cria-pagination__page-size-label", children: "Items per page:" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "select",
            {
              id: "page-size-select",
              className: "cria-pagination__page-size-select",
              value: pageSize,
              onChange: handlePageSizeChange,
              "aria-label": "Items per page",
              children: pageSizeOptions.map((size) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: size, children: size }, size))
            }
          )
        ] }),
        showPageInfo && pageInfo && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "cria-pagination__info", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "cria-pagination__info-text", children: pageInfo }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "cria-pagination__navigation", children: [
          showFirstLast && currentPage > 1 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "button",
            {
              className: "cria-pagination__button cria-pagination__button--first",
              onClick: () => handlePageChange(1),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(1)),
              "aria-label": firstLabel,
              children: firstLabel
            }
          ),
          showPrevNext && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
            "button",
            {
              className: `cria-pagination__button cria-pagination__button--prev ${currentPage <= 1 ? "cria-pagination__button--disabled" : ""}`,
              onClick: () => handlePageChange(currentPage - 1),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(currentPage - 1)),
              disabled: currentPage <= 1,
              "aria-disabled": currentPage <= 1,
              "aria-label": previousLabel,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_phosphor_react12.CaretLeft, { size: 16 }),
                variant !== "minimal" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "cria-pagination__button-text", children: previousLabel })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "cria-pagination__pages", children: pageNumbers.map((page, index) => {
            if (page === "...") {
              return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "span",
                {
                  className: "cria-pagination__ellipsis",
                  "aria-hidden": "true",
                  children: "..."
                },
                `ellipsis-${index}`
              );
            }
            const pageNum = page;
            const isActive = pageNum === currentPage;
            return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "button",
              {
                className: `cria-pagination__page ${isActive ? "cria-pagination__page--active" : ""}`,
                onClick: () => handlePageChange(pageNum),
                onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(pageNum)),
                "aria-current": isActive ? "page" : void 0,
                "aria-label": isActive ? `Page ${pageNum}, current page` : `Page ${pageNum}`,
                children: pageNum
              },
              pageNum
            );
          }) }),
          showPrevNext && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
            "button",
            {
              className: `cria-pagination__button cria-pagination__button--next ${currentPage >= totalPages ? "cria-pagination__button--disabled" : ""}`,
              onClick: () => handlePageChange(currentPage + 1),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(currentPage + 1)),
              disabled: currentPage >= totalPages,
              "aria-disabled": currentPage >= totalPages,
              "aria-label": nextLabel,
              children: [
                variant !== "minimal" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "cria-pagination__button-text", children: nextLabel }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_phosphor_react12.CaretRight, { size: 16 })
              ]
            }
          ),
          showFirstLast && currentPage < totalPages && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "button",
            {
              className: "cria-pagination__button cria-pagination__button--last",
              onClick: () => handlePageChange(totalPages),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(totalPages)),
              "aria-label": lastLabel,
              children: lastLabel
            }
          )
        ] })
      ] })
    }
  );
});
Pagination.displayName = "Pagination";

// src/components/ProgressBar/ProgressBar.tsx
var import_react19 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var ProgressBar = (0, import_react19.forwardRef)(({
  value = 0,
  min = 0,
  max = 100,
  variant = "determinate",
  size = "md",
  color = "primary",
  label,
  showPercentage = false,
  disabled = false,
  striped = false,
  animated = false,
  transitionDuration = "0.3s",
  ariaLabel,
  className = "",
  style,
  ...props
}, ref) => {
  const normalizedValue = (0, import_react19.useMemo)(() => {
    if (variant === "indeterminate") return 0;
    const clampedValue = Math.max(min, Math.min(max, value));
    return clampedValue;
  }, [value, min, max, variant]);
  const percentage = (0, import_react19.useMemo)(() => {
    if (variant === "indeterminate") return 0;
    if (min === max) return 100;
    return (normalizedValue - min) / (max - min) * 100;
  }, [normalizedValue, min, max, variant]);
  const progressBarClasses = [
    "cria-progress-bar",
    `cria-progress-bar--${size}`,
    variant === "indeterminate" && "cria-progress-bar--indeterminate",
    disabled && "cria-progress-bar--disabled",
    className
  ].filter(Boolean).join(" ");
  const progressFillClasses = [
    "cria-progress-bar__fill",
    `cria-progress-bar__fill--${color}`,
    variant === "indeterminate" && "cria-progress-bar__fill--indeterminate",
    striped && "cria-progress-bar__fill--striped",
    animated && "cria-progress-bar__fill--animated"
  ].filter(Boolean).join(" ");
  const accessibilityProps = (0, import_react19.useMemo)(() => {
    if (variant === "indeterminate") {
      return {
        "aria-busy": true,
        "aria-label": ariaLabel || "Loading"
      };
    }
    return {
      "aria-valuenow": normalizedValue,
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-label": ariaLabel || (typeof label === "string" ? label : "Progress"),
      "aria-disabled": disabled ? "true" : void 0
    };
  }, [variant, normalizedValue, min, max, ariaLabel, label, disabled]);
  const progressFillStyle = {
    width: variant === "indeterminate" ? "100%" : `${percentage}%`,
    transitionDuration
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "cria-progress-bar__container", children: [
    (label || showPercentage) && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "cria-progress-bar__header", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "cria-progress-bar__label", children: label }),
      showPercentage && variant === "determinate" && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { className: "cria-progress-bar__percentage", children: [
        Math.round(percentage),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "div",
      {
        ref,
        className: progressBarClasses,
        role: "progressbar",
        style,
        ...accessibilityProps,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "div",
          {
            className: progressFillClasses,
            "data-testid": "progress-fill",
            style: progressFillStyle
          }
        )
      }
    )
  ] });
});
ProgressBar.displayName = "ProgressBar";

// src/components/VerticalTabs/VerticalTabs.tsx
var import_react20 = __toESM(require("react"), 1);
var import_jsx_runtime24 = require("react/jsx-runtime");
var VerticalTabs = ({
  tabs,
  activeId,
  onChange,
  renderPanel,
  className = "",
  style,
  ...props
}) => {
  const tabRefs = import_react20.default.useRef([]);
  const focusTabAt = (startIndex, direction) => {
    const len = tabs.length;
    let i = startIndex;
    for (let step = 0; step < len; step++) {
      i = (i + direction + len) % len;
      const item = tabs[i];
      if (!item.disabled) {
        tabRefs.current[i]?.focus();
        break;
      }
    }
  };
  const onKeyDownTab = (e, index, id, disabled) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusTabAt(index, 1);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      focusTabAt(index, -1);
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      onChange(id);
    }
  };
  const containerClass = ["cria-vertical-tabs", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: containerClass, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { role: "tablist", "aria-orientation": "vertical", className: "cria-vertical-tabs__list", children: tabs.map((tab, index) => {
      const selected = tab.id === activeId;
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
        "button",
        {
          role: "tab",
          ref: (el) => tabRefs.current[index] = el,
          className: [
            "cria-vertical-tabs__tab",
            selected && "cria-vertical-tabs__tab--active",
            tab.disabled && "cria-vertical-tabs__tab--disabled"
          ].filter(Boolean).join(" "),
          "aria-selected": selected ? "true" : "false",
          "aria-disabled": tab.disabled ? "true" : void 0,
          tabIndex: tab.disabled ? -1 : selected ? 0 : -1,
          onClick: () => {
            if (!tab.disabled) onChange(tab.id);
          },
          onKeyDown: (e) => onKeyDownTab(e, index, tab.id, tab.disabled),
          children: [
            tab.icon && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "cria-vertical-tabs__icon", children: tab.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "cria-vertical-tabs__label", children: tab.label })
          ]
        },
        tab.id
      );
    }) }),
    renderPanel && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "cria-vertical-tabs__panel", children: renderPanel(activeId) })
  ] });
};

// src/components/DatePicker/DatePicker.tsx
var import_react21 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function endOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function formatDate(d, format) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  switch (format) {
    case "dd.mm.yyyy":
      return `${dd}.${mm}.${yyyy}`;
    case "mm/dd/yyyy":
      return `${mm}/${dd}/${yyyy}`;
    case "iso":
    default:
      return `${yyyy}-${mm}-${dd}`;
  }
}
var DatePicker = ({
  value,
  onChange,
  format = "dd.mm.yyyy",
  placeholder = "Select date",
  range = false,
  minDate,
  maxDate,
  disabledDate,
  label,
  className = "",
  ...inputProps
}) => {
  const [open, setOpen] = (0, import_react21.useState)(false);
  const today = (0, import_react21.useMemo)(() => /* @__PURE__ */ new Date(), []);
  const initial = Array.isArray(value) ? value[0] ?? today : (value ?? today) || today;
  const [view, setView] = (0, import_react21.useState)(startOfMonth(initial instanceof Date ? initial : today));
  const containerRef = (0, import_react21.useRef)(null);
  const inputRef = (0, import_react21.useRef)(null);
  const selectedStart = Array.isArray(value) ? value[0] : Array.isArray(value) ? null : value ?? null;
  const selectedEnd = Array.isArray(value) ? value[1] : null;
  const days = (0, import_react21.useMemo)(() => {
    const start = startOfMonth(view);
    const end = endOfMonth(view);
    const startWeekday = (start.getDay() + 6) % 7;
    const total = startWeekday + end.getDate();
    const rows = Math.ceil(total / 7);
    const out = [];
    const first = new Date(start);
    first.setDate(first.getDate() - startWeekday);
    for (let i = 0; i < rows * 7; i++) {
      const d = new Date(first);
      d.setDate(first.getDate() + i);
      out.push(d);
    }
    return out;
  }, [view]);
  const isDisabled = (0, import_react21.useCallback)((d) => {
    if (minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
    if (maxDate && d > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
    if (disabledDate && disabledDate(d)) return true;
    return false;
  }, [minDate, maxDate, disabledDate]);
  const commitSingle = (d) => {
    if (isDisabled(d)) return;
    onChange?.(d);
    setOpen(false);
    inputRef.current?.focus();
  };
  const commitRange = (d) => {
    if (isDisabled(d)) return;
    const start = selectedStart;
    const end = selectedEnd;
    if (!start || start && end) {
      onChange?.([d, null]);
    } else {
      if (start && d < start) {
        onChange?.([d, start]);
      } else {
        onChange?.([start, d]);
        setOpen(false);
        inputRef.current?.focus();
      }
    }
  };
  const handleDayClick = (d) => {
    if (range) commitRange(d);
    else commitSingle(d);
  };
  (0, import_react21.useEffect)(() => {
    const onDoc = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const displayValue = (0, import_react21.useMemo)(() => {
    if (Array.isArray(value)) {
      const [s, e] = value;
      if (s && e) return `${formatDate(s, format)} \u2013 ${formatDate(e, format)}`;
      if (s) return `${formatDate(s, format)} \u2013 `;
      return "";
    }
    return value ? formatDate(value, format) : "";
  }, [value, format]);
  const onKeyDown = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      return;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: ["cria-date-picker", className].filter(Boolean).join(" "), ref: containerRef, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { className: "cria-date-picker__label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "input",
      {
        ref: inputRef,
        className: "cria-date-picker__input",
        value: displayValue,
        placeholder,
        onFocus: () => setOpen(true),
        onClick: () => setOpen(true),
        onKeyDown,
        readOnly: true,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        ...inputProps
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "cria-calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date picker", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "cria-calendar__header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { className: "cria-calendar__nav", onClick: () => setView(addMonths(view, -1)), "aria-label": "Previous month", children: "\u2039" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "cria-calendar__month", "aria-live": "polite", children: [
          view.toLocaleString(void 0, { month: "long" }),
          " ",
          view.getFullYear()
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { className: "cria-calendar__nav", onClick: () => setView(addMonths(view, 1)), "aria-label": "Next month", children: "\u203A" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "cria-calendar__weekdays", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "cria-calendar__weekday", "aria-hidden": "true", children: d }, d)) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "cria-calendar__grid", role: "grid", children: days.map((d, i) => {
        const inMonth = d.getMonth() === view.getMonth();
        const disabled = !inMonth || isDisabled(d);
        const isStart = selectedStart instanceof Date && sameDay(d, selectedStart);
        const isEnd = selectedEnd instanceof Date && sameDay(d, selectedEnd);
        const inRange = range && selectedStart instanceof Date && selectedEnd instanceof Date && d >= selectedStart && d <= selectedEnd;
        const isToday = sameDay(d, today);
        return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "button",
          {
            role: "gridcell",
            className: [
              "cria-calendar__day",
              inMonth ? "" : "cria-calendar__day--outside",
              disabled ? "cria-calendar__day--disabled" : "",
              isStart ? "cria-calendar__day--start" : "",
              isEnd ? "cria-calendar__day--end" : "",
              inRange ? "cria-calendar__day--in-range" : "",
              isToday ? "cria-calendar__day--today" : ""
            ].filter(Boolean).join(" "),
            onClick: () => handleDayClick(d),
            disabled,
            "aria-label": d.toDateString(),
            "aria-current": isToday ? "date" : void 0,
            children: d.getDate()
          },
          i
        );
      }) })
    ] })
  ] });
};

// src/components/Stepper/Stepper.tsx
var import_react22 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var Stepper = ({
  steps,
  activeId,
  onChange,
  orientation = "horizontal",
  linear = true,
  className,
  style,
  ...props
}) => {
  const activeIndex = (0, import_react22.useMemo)(() => steps.findIndex((s) => s.id === activeId), [steps, activeId]);
  const tabRefs = (0, import_react22.useRef)([]);
  const canActivate = (0, import_react22.useCallback)((index) => {
    const step = steps[index];
    if (!step || step.disabled) return false;
    if (!linear) return true;
    return index <= activeIndex;
  }, [steps, linear, activeIndex]);
  const handleClick = (0, import_react22.useCallback)((index) => {
    if (canActivate(index)) {
      onChange?.(steps[index].id);
    }
  }, [canActivate, onChange, steps]);
  const moveFocus = (current, dir) => {
    const total = steps.length;
    let i = current;
    for (let c = 0; c < total; c++) {
      i = (i + dir + total) % total;
      if (!steps[i].disabled) {
        tabRefs.current[i]?.focus();
        break;
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (orientation === "horizontal") {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        moveFocus(index, 1);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        moveFocus(index, -1);
        return;
      }
    } else {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        moveFocus(index, 1);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        moveFocus(index, -1);
        return;
      }
    }
    if ((e.key === "Enter" || e.key === " ") && canActivate(index)) {
      e.preventDefault();
      onChange?.(steps[index].id);
    }
  };
  const containerClasses = [
    "cria-stepper",
    `cria-stepper--${orientation}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: containerClasses, style, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { role: "tablist", "aria-orientation": orientation, className: "cria-stepper__list", children: steps.map((step, index) => {
    const isActive = step.id === activeId;
    const isDisabled = !!step.disabled || linear && index > activeIndex;
    const tabIndex = isDisabled ? -1 : isActive ? 0 : -1;
    const itemClasses = [
      "cria-stepper__tab",
      isActive && "cria-stepper__tab--active",
      step.completed && "cria-stepper__tab--completed",
      step.error && "cria-stepper__tab--error",
      isDisabled && "cria-stepper__tab--disabled"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "button",
      {
        role: "tab",
        ref: (el) => tabRefs.current[index] = el,
        className: itemClasses,
        "aria-selected": isActive ? "true" : "false",
        "aria-disabled": isDisabled ? "true" : void 0,
        tabIndex,
        onClick: () => handleClick(index),
        onKeyDown: (e) => handleKeyDown(e, index),
        children: [
          step.icon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-stepper__icon", "aria-hidden": "true", children: step.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-stepper__title", children: step.title }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-stepper__description", children: step.description })
        ]
      },
      step.id
    );
  }) }) });
};

// src/components/RadioGroup/RadioGroup.tsx
var import_react23 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var RadioGroupContext = (0, import_react23.createContext)(null);
var useRadioGroup = () => {
  const context = (0, import_react23.useContext)(RadioGroupContext);
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
  const fieldsetRef = (0, import_react23.useRef)(null);
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
  const handleKeyDown = (0, import_react23.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u26A0" }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "legend",
    {
      id: labelId,
      className: classes,
      style: labelStyles,
      "aria-required": required,
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
  const handleChange = (0, import_react23.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: classes, style: containerStyles, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
var import_react24 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  const [internalActiveItem, setInternalActiveItem] = (0, import_react24.useState)(
    defaultActiveItem || items[0]?.id || ""
  );
  const [internalCollapsed, setInternalCollapsed] = (0, import_react24.useState)(false);
  const isControlled = controlledActiveItem !== void 0;
  const activeItem = isControlled ? controlledActiveItem : internalActiveItem;
  const isCollapseControlled = controlledCollapsed !== void 0;
  const collapsed = isCollapseControlled ? controlledCollapsed : internalCollapsed;
  const itemRefs = (0, import_react24.useRef)({});
  const sidebarRef = (0, import_react24.useRef)(null);
  const handleItemChange = (0, import_react24.useCallback)((itemId) => {
    if (isControlled) {
      onChange?.(itemId);
    } else {
      setInternalActiveItem(itemId);
      onChange?.(itemId);
    }
  }, [isControlled, onChange]);
  const handleCollapseToggle = (0, import_react24.useCallback)(() => {
    if (isCollapseControlled) {
      onCollapseChange?.(!collapsed);
    } else {
      setInternalCollapsed(!collapsed);
      onCollapseChange?.(!collapsed);
    }
  }, [isCollapseControlled, collapsed, onCollapseChange]);
  const handleKeyDown = (0, import_react24.useCallback)((event, itemId) => {
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
  (0, import_react24.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "cria-sidebar__item-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
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
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "cria-sidebar__item-icon", children: item.icon }),
            !collapsed && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "cria-sidebar__item-label", children: item.label }),
            !collapsed && item.badge && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "cria-sidebar__item-badge", children: item.badge }),
            hasChildren && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "cria-sidebar__item-arrow", children: item.expanded ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      hasChildren && !collapsed && item.expanded && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "cria-sidebar__submenu", children: item.children?.map((child) => renderSidebarItem(child, level + 1)) })
    ] }, item.id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "div",
    {
      ref: sidebarRef,
      className: containerClasses,
      style,
      role: "navigation",
      "aria-label": "Sidebar navigation",
      ...props,
      children: [
        collapsible && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "button",
          {
            className: "cria-sidebar__toggle",
            onClick: handleCollapseToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? "\u25B6" : "\u25C0"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "cria-sidebar__items", role: "menu", children: items.map((item) => renderSidebarItem(item)) }),
        showContent && activeItemData?.content && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
var React25 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_phosphor_react13 = require("phosphor-react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Snackbar = React25.forwardRef(({
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
  const [isVisible, setIsVisible] = React25.useState(open);
  const [isAnimating, setIsAnimating] = React25.useState(false);
  const timeoutRef = React25.useRef(null);
  React25.useEffect(() => {
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
  React25.useEffect(() => {
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
  const handleClose = React25.useCallback(() => {
    onClose?.();
  }, [onClose]);
  const handleBackdropClick = React25.useCallback((event) => {
    if (dismissible && event.target === event.currentTarget) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  const handleKeyDown = React25.useCallback((event) => {
    if (event.key === "Escape" && dismissible) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  React25.useImperativeHandle(ref, () => ({
    close: handleClose
  }), [handleClose]);
  if (!isVisible) {
    return null;
  }
  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_phosphor_react13.CheckCircle, { size: 20, "data-testid": "snackbar-icon" });
      case "error":
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_phosphor_react13.X, { size: 20, "data-testid": "snackbar-icon" });
      case "warning":
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_phosphor_react13.Info, { size: 20, "data-testid": "snackbar-icon" });
      case "info":
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_phosphor_react13.Info, { size: 20, "data-testid": "snackbar-icon" });
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
  const snackbarContent = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "div",
    {
      "data-testid": "snackbar-container",
      className: containerClasses,
      onClick: handleBackdropClick,
      onKeyDown: handleKeyDown,
      tabIndex: -1,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
        "div",
        {
          className: snackbarClasses,
          style,
          role,
          "aria-live": ariaLive,
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "cria-snackbar__content", children: [
              displayIcon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "cria-snackbar__icon", children: displayIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "cria-snackbar__text", children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Typography, { variant: "body", weight: "medium", className: "cria-snackbar__title", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Typography, { variant: "body", className: "cria-snackbar__message", children: message })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "cria-snackbar__actions", children: [
              action && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: action.onClick,
                  className: "cria-snackbar__action",
                  children: action.label
                }
              ),
              dismissible && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleClose,
                  className: "cria-snackbar__close",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_phosphor_react13.X, { size: 16 })
                }
              )
            ] })
          ]
        }
      )
    }
  );
  return (0, import_react_dom.createPortal)(snackbarContent, document.body);
});
Snackbar.displayName = "Snackbar";

// src/components/Switch/Switch.tsx
var import_react25 = __toESM(require("react"), 1);
var import_jsx_runtime30 = require("react/jsx-runtime");
var Switch = (0, import_react25.forwardRef)(({
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
  const inputRef = (0, import_react25.useRef)(null);
  const reactId = import_react25.default.useId();
  const isControlled = checked !== void 0;
  const [uncontrolledChecked, setUncontrolledChecked] = import_react25.default.useState(!!checked);
  const isChecked = isControlled ? !!checked : uncontrolledChecked;
  const resolvedId = id || `${name || "switch"}-${reactId}`;
  (0, import_react25.useImperativeHandle)(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = (0, import_react25.useCallback)((event) => {
    if (disabled || readOnly) return;
    const next = event.target.checked;
    if (!isControlled) setUncontrolledChecked(next);
    onChange?.(next, event);
  }, [disabled, readOnly, onChange, isControlled]);
  const handleClick = (0, import_react25.useCallback)((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = (0, import_react25.useCallback)((event) => {
    if (disabled || readOnly) return;
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      const newChecked = !isChecked;
      if (!isControlled) setUncontrolledChecked(newChecked);
      onChange?.(newChecked, event);
    }
  }, [disabled, readOnly, isChecked, isControlled, onChange]);
  const switchClasses = [
    "cria-switch",
    `cria-switch--${size}`,
    `cria-switch--${variant}`,
    `cria-switch--${color}`,
    isChecked && "cria-switch--checked",
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: switchClasses, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "cria-switch__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "input",
        {
          ref: inputRef,
          type: "checkbox",
          role: "switch",
          id: resolvedId,
          name,
          value,
          checked: isChecked,
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
            helperText && `${resolvedId}-helper`,
            errorMessage && `${resolvedId}-error`,
            warningMessage && `${resolvedId}-warning`
          ].filter(Boolean).join(" ") || void 0,
          "aria-invalid": !!errorMessage,
          "aria-checked": isChecked,
          "aria-label": label,
          ...inputProps
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "cria-switch__track", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "cria-switch__thumb" }) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: resolvedId, className: labelClasses, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "cria-switch__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-switch__helper-text",
        id: `${resolvedId}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-switch__error-message",
        id: `${resolvedId}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      Typography,
      {
        variant: "caption",
        color: "warning",
        className: "cria-switch__warning-message",
        id: `${resolvedId}-warning`,
        children: warningMessage
      }
    )
  ] });
});
Switch.displayName = "Switch";

// src/components/Tabs/Tabs.tsx
var import_react26 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
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
  const [internalActiveTab, setInternalActiveTab] = (0, import_react26.useState)(
    defaultActiveTab || items[0]?.id || ""
  );
  const isControlled = controlledActiveTab !== void 0;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  const tabRefs = (0, import_react26.useRef)({});
  const tabListRef = (0, import_react26.useRef)(null);
  const handleTabChange = (0, import_react26.useCallback)((tabId) => {
    if (isControlled) {
      onChange?.(tabId);
    } else {
      setInternalActiveTab(tabId);
      onChange?.(tabId);
    }
  }, [isControlled, onChange]);
  const handleKeyDown = (0, import_react26.useCallback)((event, tabId) => {
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
  (0, import_react26.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      className: containerClasses,
      style,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
              return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
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
                    item.icon && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "cria-tabs__tab-icon", children: item.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "cria-tabs__tab-label", children: item.label }),
                    item.badge && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "cria-tabs__tab-badge", children: item.badge })
                  ]
                },
                item.id
              );
            })
          }
        ),
        showContent && activeTabItem && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
var import_jsx_runtime32 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Element, { className: classes, style: styles, ...props, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Element, { className: classes, style: styles, ...props, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Element, { className: classes, style: styles, ...props, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Element, { className: classes, style: styles, ...props, children });
};

// src/components/Textarea/Textarea.tsx
var import_react27 = __toESM(require("react"), 1);
var import_phosphor_react14 = require("phosphor-react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var Textarea = (0, import_react27.forwardRef)(({
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
  const textareaRef = (0, import_react27.useRef)(null);
  const [isFocused, setIsFocused] = import_react27.default.useState(false);
  (0, import_react27.useImperativeHandle)(ref, () => ({
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
  const adjustHeight = (0, import_react27.useCallback)(() => {
    if (textareaRef.current && autoResize) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [autoResize]);
  const handleChange = (0, import_react27.useCallback)((event) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(event);
  }, [onChange, autoResize, adjustHeight]);
  const handleFocus = (0, import_react27.useCallback)((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = (0, import_react27.useCallback)((event) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);
  (0, import_react27.useEffect)(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize, adjustHeight]);
  const currentState = errorMessage ? "error" : successMessage ? "success" : warningMessage ? "warning" : state;
  const textareaId = import_react27.default.useId();
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { htmlFor: textareaId, id: labelId, className: "cria-textarea__label", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "cria-textarea__required", "aria-label": "required", children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "cria-textarea__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        Typography,
        {
          variant: "body",
          color: "secondary",
          className: "cria-textarea__helper-text",
          id: helperId,
          children: helperText
        }
      ),
      errorMessage && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        Typography,
        {
          variant: "body",
          color: "error",
          className: "cria-textarea__error-message",
          id: errorId,
          role: "alert",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_phosphor_react14.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
            errorMessage
          ]
        }
      ),
      successMessage && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        Typography,
        {
          variant: "body",
          color: "success",
          className: "cria-textarea__success-message",
          id: successId,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_phosphor_react14.Check, { size: 14, style: { marginRight: "4px" } }),
            successMessage
          ]
        }
      ),
      warningMessage && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        Typography,
        {
          variant: "body",
          color: "warning",
          className: "cria-textarea__warning-message",
          id: warningId,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_phosphor_react14.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
            warningMessage
          ]
        }
      ),
      showCharacterCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
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
var import_react28 = __toESM(require("react"), 1);
var import_react_dom2 = require("react-dom");
var import_jsx_runtime34 = require("react/jsx-runtime");
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
  const [isVisible, setIsVisible] = (0, import_react28.useState)(false);
  const [tooltipPosition, setTooltipPosition] = (0, import_react28.useState)({ top: 0, left: 0 });
  const triggerRef = (0, import_react28.useRef)(null);
  const tooltipRef = (0, import_react28.useRef)(null);
  const showTimeoutRef = (0, import_react28.useRef)();
  const hideTimeoutRef = (0, import_react28.useRef)();
  const isControlled = controlledVisible !== void 0;
  const visible = isControlled ? controlledVisible : isVisible;
  const calculatePosition = (0, import_react28.useCallback)(() => {
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
  const showTooltip = (0, import_react28.useCallback)(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }, delay);
  }, [disabled, isControlled, delay, onVisibilityChange]);
  const hideTooltip = (0, import_react28.useCallback)(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      onVisibilityChange?.(false);
    }, hideDelay);
  }, [disabled, isControlled, hideDelay, onVisibilityChange]);
  const handleMouseEnter = (0, import_react28.useCallback)(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleMouseLeave = (0, import_react28.useCallback)(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  const handleFocus = (0, import_react28.useCallback)(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleBlur = (0, import_react28.useCallback)(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  (0, import_react28.useEffect)(() => {
    if (visible) {
      calculatePosition();
    }
  }, [visible, calculatePosition]);
  (0, import_react28.useEffect)(() => {
    if (!visible) return;
    const updatePosition = () => calculatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [visible, calculatePosition]);
  (0, import_react28.useEffect)(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  const triggerElement = import_react28.default.cloneElement(children, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    triggerElement,
    visible && (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cria-tooltip__content", children: content }),
            arrow && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cria-tooltip__arrow" })
          ]
        }
      ),
      document.body
    )
  ] });
};

// src/components/FileUpload/FileUpload.tsx
var import_react29 = __toESM(require("react"), 1);
var import_jsx_runtime35 = require("react/jsx-runtime");
var FileUpload = ({
  label = "Upload files",
  description,
  accept,
  multiple = true,
  disabled = false,
  required = false,
  dragAndDrop = true,
  maxSizeBytes,
  onFilesChange,
  onError,
  value,
  className = "",
  style,
  ...props
}) => {
  const inputRef = (0, import_react29.useRef)(null);
  const [internalFiles, setInternalFiles] = (0, import_react29.useState)([]);
  const isControlled = value !== void 0;
  const files = isControlled ? value : internalFiles;
  const id = import_react29.default.useId();
  const validate = (next) => {
    if (!maxSizeBytes) return next;
    const valid = next.filter((f) => f.size <= maxSizeBytes);
    const invalidCount = next.length - valid.length;
    if (invalidCount > 0) {
      onError?.(`Ignored ${invalidCount} file(s) over ${(maxSizeBytes / (1024 * 1024)).toFixed(1)}MB`);
    }
    return valid;
  };
  const commit = (next) => {
    const validated = validate(next);
    if (!isControlled) setInternalFiles(validated);
    onFilesChange?.(validated);
  };
  const handleInput = (0, import_react29.useCallback)((e) => {
    if (!e.target.files) return;
    const list = Array.from(e.target.files);
    commit(list);
  }, []);
  const handleClick = (0, import_react29.useCallback)(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);
  const handleDrop = (0, import_react29.useCallback)((e) => {
    e.preventDefault();
    if (disabled) return;
    const dt = e.dataTransfer;
    const list = Array.from(dt.files || []);
    if (!multiple && list.length > 1) {
      commit([list[0]]);
    } else {
      commit(list);
    }
  }, [disabled, multiple]);
  const prevent = (e) => {
    e.preventDefault();
  };
  const removeAt = (idx) => {
    if (disabled) return;
    const next = files.filter((_, i) => i !== idx);
    commit(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "div",
    {
      className: [
        "cria-file-upload",
        dragAndDrop && "cria-file-upload--dnd",
        disabled && "cria-file-upload--disabled",
        className
      ].filter(Boolean).join(" "),
      style,
      ...props,
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("label", { htmlFor: `file-input-${id}`, className: "cria-file-upload__label", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(Typography, { variant: "body", weight: "medium", color: disabled ? "secondary" : "content", children: [
          label,
          required && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { "aria-label": "required", children: " *" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "input",
          {
            ref: inputRef,
            id: `file-input-${id}`,
            type: "file",
            className: "cria-file-upload__input",
            accept,
            multiple,
            disabled,
            onChange: handleInput,
            "aria-describedby": description ? `file-desc-${id}` : void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "div",
          {
            className: "cria-file-upload__dropzone",
            role: "button",
            tabIndex: disabled ? -1 : 0,
            onClick: handleClick,
            onKeyDown: (e) => {
              if (disabled) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            },
            onDragOver: prevent,
            onDragEnter: prevent,
            onDrop: dragAndDrop ? handleDrop : void 0,
            "aria-disabled": disabled,
            "aria-label": label,
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cria-file-upload__dropzone-inner", children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Typography, { variant: "body", color: "secondary", children: "Drag & drop files here, or click to select" }),
              accept && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(Typography, { variant: "caption", color: "secondary", children: [
                "Accepted: ",
                accept
              ] })
            ] })
          }
        ),
        description && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Typography, { id: `file-desc-${id}`, variant: "caption", color: "secondary", style: { marginTop: 8 }, children: description }),
        files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("ul", { className: "cria-file-upload__list", "aria-label": "Selected files", children: files.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { className: "cria-file-upload__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "cria-file-upload__filename", children: f.name }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "cria-file-upload__filesize", children: [
            (f.size / 1024).toFixed(1),
            " KB"
          ] }),
          !disabled && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "button",
            {
              type: "button",
              className: "cria-file-upload__remove",
              onClick: () => removeAt(idx),
              "aria-label": `Remove ${f.name}`,
              children: "\xD7"
            }
          )
        ] }, `${f.name}-${idx}`)) })
      ]
    }
  );
};

// src/components/Chat/Chat.tsx
var import_react30 = require("react");
var import_phosphor_react15 = require("phosphor-react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Chat = ({
  messages = [],
  onSend,
  typing = false,
  placeholder = "Type a message\u2026",
  disabled = false,
  revealThem = false,
  revealSpeedMs = 18,
  className = "",
  style,
  ...props
}) => {
  const [text, setText] = (0, import_react30.useState)("");
  const [replyingTo, setReplyingTo] = (0, import_react30.useState)(null);
  const logRef = (0, import_react30.useRef)(null);
  const [revealMsgId, setRevealMsgId] = (0, import_react30.useState)(null);
  const [revealIndex, setRevealIndex] = (0, import_react30.useState)(0);
  const revealTimer = (0, import_react30.useRef)(null);
  const lastRevealedId = (0, import_react30.useRef)(null);
  (0, import_react30.useEffect)(() => {
    const el = logRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typing]);
  (0, import_react30.useEffect)(() => {
    if (!revealThem) return;
    const last = messages[messages.length - 1];
    if (!last || last.author !== "them") return;
    if (lastRevealedId.current === last.id) return;
    lastRevealedId.current = last.id;
    setRevealMsgId(last.id);
    setRevealIndex(0);
    if (revealTimer.current) window.clearInterval(revealTimer.current);
    revealTimer.current = window.setInterval(() => {
      setRevealIndex((i) => {
        const next = i + 1;
        if (next >= last.text.length) {
          if (revealTimer.current) window.clearInterval(revealTimer.current);
          revealTimer.current = null;
        }
        return next;
      });
    }, Math.max(5, revealSpeedMs));
    return () => {
      if (revealTimer.current) window.clearInterval(revealTimer.current);
    };
  }, [messages, revealThem, revealSpeedMs]);
  const handleSend = (0, import_react30.useCallback)(() => {
    if (!text.trim() || disabled) return;
    onSend?.(text.trim(), replyingTo?.id);
    setText("");
    setReplyingTo(null);
  }, [text, onSend, disabled, replyingTo]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleReply = (message) => {
    setReplyingTo(message);
  };
  const cancelReply = () => {
    setReplyingTo(null);
  };
  const findMessageById = (id) => {
    return messages.find((msg) => msg.id === id);
  };
  const renderAttachment = (attachment) => {
    switch (attachment.type) {
      case "image":
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { marginTop: 8, borderRadius: 8, overflow: "hidden" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "img",
            {
              src: attachment.url,
              alt: attachment.title || "Image",
              style: { maxWidth: "100%", height: "auto", display: "block" }
            }
          ),
          attachment.title && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: {
            padding: 12,
            background: "rgba(0,0,0,0.05)",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 4 }, children: attachment.title }),
              attachment.description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "caption", color: "secondary", children: attachment.description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              Button,
              {
                variant: "primary",
                size: "sm",
                onClick: () => {
                  console.log("View course/lesson:", attachment.title);
                },
                style: { alignSelf: "flex-start" },
                children: attachment.title?.toLowerCase().includes("curso") || attachment.title?.toLowerCase().includes("course") ? "Ver Curso" : "Ver Aula"
              }
            )
          ] })
        ] });
      case "video":
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { marginTop: 8, borderRadius: 8, overflow: "hidden", position: "relative" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "video",
            {
              src: attachment.url,
              controls: true,
              style: { maxWidth: "100%", height: "auto", display: "block" }
            }
          ),
          attachment.duration && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: {
            position: "absolute",
            bottom: 8,
            right: 8,
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "2px 6px",
            borderRadius: 4,
            fontSize: "12px"
          }, children: attachment.duration })
        ] });
      case "card":
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Card, { style: { padding: 12, maxWidth: 280 }, children: [
          attachment.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "img",
            {
              src: attachment.thumbnail,
              alt: attachment.title || "Card",
              style: { width: "100%", height: 120, objectFit: "cover", borderRadius: 4, marginBottom: 8 }
            }
          ),
          attachment.title && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 4 }, children: attachment.title }),
          attachment.description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "caption", color: "secondary", children: attachment.description })
        ] }) });
      case "file":
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: {
          marginTop: 8,
          padding: 8,
          background: "rgba(0,0,0,0.05)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          gap: 8
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react15.FileText, { size: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 2 }, children: attachment.title || "File" }),
            attachment.size && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "caption", color: "secondary", children: attachment.size })
          ] })
        ] });
      case "course":
      case "lesson":
        return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { marginTop: 8, borderRadius: 8, overflow: "hidden", border: "1px solid var(--cria-gray-200)", position: "relative" }, children: [
          attachment.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "img",
            {
              src: attachment.thumbnail,
              alt: attachment.title || "Course/Lesson",
              style: { width: "100%", height: 200, objectFit: "cover", display: "block" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 16,
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
            display: "flex",
            flexDirection: "column",
            gap: 12
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 4, color: "var(--cria-white)" }, children: attachment.title }),
              attachment.description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "caption", style: { color: "rgba(255,255,255,0.9)", marginBottom: 4, display: "block" }, children: attachment.description }),
              attachment.duration && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Typography, { variant: "caption", style: { color: "rgba(255,255,255,0.8)", marginTop: 4, display: "block" }, children: [
                "Dura\xE7\xE3o: ",
                attachment.duration
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              Button,
              {
                variant: "primary",
                size: "sm",
                onClick: () => {
                  console.log("View course/lesson:", attachment.title);
                },
                style: { alignSelf: "flex-start" },
                children: attachment.actionText || (attachment.type === "course" ? "Ver Curso" : "Ver Aula")
              }
            )
          ] })
        ] });
      default:
        return null;
    }
  };
  const grouped = (0, import_react30.useMemo)(() => {
    const out = [];
    messages.forEach((m) => {
      const last = out[out.length - 1];
      if (last && last.author === m.author) {
        last.items.push(m);
      } else {
        out.push({ key: `${m.author}-${m.id}`, author: m.author, items: [m] });
      }
    });
    return out;
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: ["cria-chat", className].filter(Boolean).join(" "), style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
      "div",
      {
        ref: logRef,
        className: "cria-chat__log",
        role: "log",
        "aria-live": "polite",
        "aria-relevant": "additions",
        children: [
          grouped.map((group) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: ["cria-chat__group", group.author === "me" ? "cria-chat__group--me" : "cria-chat__group--them"].join(" "), children: group.items.map((item) => {
            const repliedMessage = item.replyTo ? findMessageById(item.replyTo) : null;
            return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cria-chat__bubble", "aria-label": `${group.author === "me" ? "Me" : "Them"} said ${item.text}`, children: [
              repliedMessage && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: {
                marginBottom: 8,
                padding: 8,
                background: "rgba(0,0,0,0.05)",
                borderRadius: 6,
                borderLeft: "3px solid var(--cria-primary)",
                fontSize: "12px",
                color: "var(--cria-gray-600)"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { fontWeight: 500, marginBottom: 2 }, children: [
                  "Replying to ",
                  repliedMessage.author === "me" ? "you" : "them"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "200px"
                }, children: repliedMessage.text })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "body", color: group.author === "me" ? "inverse" : "content", children: revealThem && group.author === "them" && item.id === revealMsgId ? item.text.slice(0, Math.max(0, revealIndex)) : item.text }),
              item.attachments && item.attachments.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { children: renderAttachment(attachment) }, attachment.id)),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
                gap: 8
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Typography, { variant: "caption", color: group.author === "me" ? "inverse" : "secondary", children: item.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                  "button",
                  {
                    onClick: () => handleReply(item),
                    style: {
                      background: "none",
                      border: "none",
                      color: group.author === "me" ? "rgba(255,255,255,0.7)" : "var(--cria-gray-500)",
                      cursor: "pointer",
                      padding: 2,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: "12px"
                    },
                    title: "Reply to this message",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react15.ArrowBendUpLeft, { size: 12 }),
                      "Reply"
                    ]
                  }
                )
              ] })
            ] }, item.id);
          }) }, group.key)),
          typing && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cria-chat__group cria-chat__group--them", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cria-chat__bubble cria-chat__bubble--typing", "aria-label": "Typing", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react15.DotsThree, { size: 24, weight: "bold" }) }) })
        ]
      }
    ),
    replyingTo && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: {
      padding: 8,
      background: "rgba(117, 102, 161, 0.1)",
      borderRadius: 6,
      border: "1px solid var(--cria-primary)",
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { style: { fontSize: "12px", fontWeight: 500, color: "var(--cria-primary)", marginBottom: 2 }, children: [
          "Replying to ",
          replyingTo.author === "me" ? "your message" : "their message"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { style: {
          fontSize: "12px",
          color: "var(--cria-gray-600)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: replyingTo.text })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "button",
        {
          onClick: cancelReply,
          style: {
            background: "none",
            border: "none",
            color: "var(--cria-gray-500)",
            cursor: "pointer",
            padding: 4,
            borderRadius: 4,
            fontSize: "12px"
          },
          title: "Cancel reply",
          children: "\u2715"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cria-chat__composer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "textarea",
        {
          className: "cria-chat__textarea",
          placeholder: replyingTo ? `Reply to ${replyingTo.author === "me" ? "your message" : "their message"}...` : placeholder,
          value: text,
          onChange: (e) => setText(e.target.value),
          onKeyDown: handleKeyDown,
          "aria-label": "Message composer",
          disabled,
          rows: 1
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { variant: "secondary", size: "sm", onClick: handleSend, disabled: disabled || !text.trim(), "aria-label": "Send message", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react15.PaperPlaneRight, { size: 18 }) })
    ] })
  ] });
};

// src/components/PieChart/PieChart.tsx
var import_react31 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var PieChart = ({
  data,
  title = "Pie chart",
  size = 220,
  innerRadius = 0,
  style,
  className = "",
  ...props
}) => {
  const chartId = (0, import_react31.useId)();
  const total = (0, import_react31.useMemo)(() => data.reduce((sum, d) => sum + d.value, 0), [data]);
  const [hoveredIndex, setHoveredIndex] = (0, import_react31.useState)(null);
  const [selectedIndex, setSelectedIndex] = (0, import_react31.useState)(null);
  const radius = size / 2;
  const cx = radius;
  const cy = radius;
  const paths = (0, import_react31.useMemo)(() => {
    let cumulative = 0;
    return data.map((d, idx) => {
      const valueRatio = total === 0 ? 0 : d.value / total;
      const startAngle = cumulative * 2 * Math.PI;
      const endAngle = (cumulative + valueRatio) * 2 * Math.PI;
      cumulative += valueRatio;
      const outerR = radius;
      const innerR = Math.max(0, Math.min(innerRadius, radius - 2));
      const x0 = cx + outerR * Math.cos(startAngle);
      const y0 = cy + outerR * Math.sin(startAngle);
      const x1 = cx + outerR * Math.cos(endAngle);
      const y1 = cy + outerR * Math.sin(endAngle);
      const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
      if (innerR <= 0) {
        const dPath2 = [
          `M ${cx} ${cy}`,
          `L ${x0} ${y0}`,
          `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x1} ${y1}`,
          "Z"
        ].join(" ");
        return dPath2;
      }
      const xi0 = cx + innerR * Math.cos(endAngle);
      const yi0 = cy + innerR * Math.sin(endAngle);
      const xi1 = cx + innerR * Math.cos(startAngle);
      const yi1 = cy + innerR * Math.sin(startAngle);
      const dPath = [
        `M ${x0} ${y0}`,
        `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x1} ${y1}`,
        `L ${xi0} ${yi0}`,
        `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${xi1} ${yi1}`,
        "Z"
      ].join(" ");
      return dPath;
    });
  }, [data, total, radius, cx, cy, innerRadius]);
  const handleKeyDown = (idx, e) => {
    switch (e.key) {
      case " ":
      case "Enter":
        e.preventDefault();
        setSelectedIndex((prev2) => prev2 === idx ? null : idx);
        break;
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        const next = (idx + 1) % data.length;
        document.getElementById(`${chartId}-slice-${next}`)?.focus();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        const prev = (idx - 1 + data.length) % data.length;
        document.getElementById(`${chartId}-slice-${prev}`)?.focus();
        break;
    }
  };
  const palette = [
    colors.primary,
    colors.secondary,
    "#8B5CF6",
    "#F59E0B",
    "#10B981",
    "#3B82F6",
    "#EF4444"
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: ["cria-piechart", className].filter(Boolean).join(" "), style, ...props, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Typography, { variant: "h3", weight: "semiBold", style: { marginBottom: spacing[3] }, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { style: { display: "flex", gap: spacing[6], flexWrap: "wrap" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        "svg",
        {
          role: "img",
          "aria-label": title,
          width: size,
          height: size,
          viewBox: `0 0 ${size} ${size}`,
          style: { flexShrink: 0 },
          children: paths.map((dPath, idx) => {
            const isHovered = hoveredIndex === idx;
            const isSelected = selectedIndex === idx;
            const fill = data[idx].color || palette[idx % palette.length];
            const opacity = isHovered || isSelected ? 1 : 0.9;
            const stroke = isSelected ? colors.border.dark : "transparent";
            const strokeWidth = isSelected ? 2 : 1;
            return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              "path",
              {
                id: `${chartId}-slice-${idx}`,
                d: dPath,
                fill,
                opacity,
                stroke,
                strokeWidth,
                tabIndex: 0,
                "aria-label": `Slice: ${data[idx].label}`,
                "aria-current": isHovered ? "true" : void 0,
                "aria-pressed": isSelected ? "true" : void 0,
                onMouseEnter: () => setHoveredIndex(idx),
                onMouseLeave: () => setHoveredIndex((h) => h === idx ? null : h),
                onClick: () => setSelectedIndex((prev) => prev === idx ? null : idx),
                onKeyDown: (e) => handleKeyDown(idx, e)
              },
              idx
            );
          })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cria-piechart__legend", "aria-label": "Legend", children: data.map((d, idx) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cria-piechart__legend-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "span",
          {
            className: "cria-piechart__legend-swatch",
            style: { backgroundColor: d.color || palette[idx % palette.length] },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cria-piechart__legend-label", children: d.label }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cria-piechart__legend-value", children: d.value })
      ] }, idx)) })
    ] })
  ] });
};

// src/components/LineChart/LineChart.tsx
var import_react32 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var LineChart = ({
  title = "Line chart",
  series,
  width = 480,
  height = 280,
  padding = 32,
  className = "",
  style,
  ...props
}) => {
  const [hover, setHover] = (0, import_react32.useState)(null);
  const [pressed, setPressed] = (0, import_react32.useState)(null);
  const flat = (0, import_react32.useMemo)(() => series.flatMap((s) => s.points), [series]);
  const minX = Math.min(...flat.map((p) => p.x));
  const maxX = Math.max(...flat.map((p) => p.x));
  const minY = Math.min(...flat.map((p) => p.y));
  const maxY = Math.max(...flat.map((p) => p.y));
  const plotW = width - padding * 2;
  const plotH = height - padding * 2;
  const sx = (x) => padding + (x - minX) / (maxX - minX || 1) * plotW;
  const sy = (y) => height - padding - (y - minY) / (maxY - minY || 1) * plotH;
  const palette = [colors.primary, colors.secondary, "#8B5CF6", "#F59E0B", "#10B981"];
  const toPath = (pts) => pts.map((p, i) => `${i ? "L" : "M"} ${sx(p.x)} ${sy(p.y)}`).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: ["cria-linechart", className].filter(Boolean).join(" "), style, ...props, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Typography, { variant: "h3", weight: "semiBold", style: { marginBottom: spacing[3] }, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { style: { display: "flex", gap: spacing[6], flexWrap: "wrap" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("svg", { role: "img", "aria-label": title, width, height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("line", { x1: padding, y1: height - padding, x2: width - padding, y2: height - padding, stroke: colors.border.medium }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("line", { x1: padding, y1: padding, x2: padding, y2: height - padding, stroke: colors.border.medium }),
        series.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("g", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: toPath(s.points), fill: "none", stroke: s.color || palette[i % palette.length], strokeWidth: 2 }),
          s.points.map((p, idx) => {
            const id = `${s.id}-${idx}`;
            const cx = sx(p.x);
            const cy = sy(p.y);
            const isCurrent = hover === id;
            const isPressed = pressed === id;
            return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("g", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("circle", { cx, cy, r: 4, fill: s.color || palette[i % palette.length] }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("foreignObject", { x: cx - 8, y: cy - 8, width: 16, height: 16, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                "button",
                {
                  style: { width: 16, height: 16, background: "transparent", border: 0, padding: 0, cursor: "pointer" },
                  "aria-label": `${s.label} point (${p.x}, ${p.y})`,
                  "aria-current": isCurrent ? "true" : void 0,
                  "aria-pressed": isPressed ? "true" : void 0,
                  onMouseEnter: () => setHover(id),
                  onMouseLeave: () => setHover((h) => h === id ? null : h),
                  onKeyDown: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPressed((pr) => pr === id ? null : id);
                    }
                  }
                }
              ) })
            ] }, id);
          })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cria-linechart__legend", "aria-label": "Legend", children: series.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cria-linechart__legend-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cria-linechart__legend-swatch", style: { backgroundColor: s.color || palette[i % palette.length] }, "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cria-linechart__legend-label", children: s.label })
      ] }, s.id)) })
    ] })
  ] });
};

// src/components/CommentsSection/CommentsSection.tsx
var import_react33 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var CommentsSection = ({
  comments,
  onAddComment,
  onAddReply,
  onEditComment,
  onDeleteComment,
  placeholder = "Add a comment...",
  maxLength = 1e3,
  className = "",
  style,
  ...props
}) => {
  const [newComment, setNewComment] = (0, import_react33.useState)("");
  const [editingComment, setEditingComment] = (0, import_react33.useState)(null);
  const [editingContent, setEditingContent] = (0, import_react33.useState)("");
  const [replyingTo, setReplyingTo] = (0, import_react33.useState)(null);
  const [replyContent, setReplyContent] = (0, import_react33.useState)("");
  const [deleteConfirm, setDeleteConfirm] = (0, import_react33.useState)(null);
  const textareaRef = (0, import_react33.useRef)(null);
  const replyTextareaRef = (0, import_react33.useRef)(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendComment();
    }
  };
  const handleReplyKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };
  const handleSendComment = () => {
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment.trim());
      setNewComment("");
    }
  };
  const handleSendReply = () => {
    if (replyContent.trim() && replyingTo && onAddReply) {
      onAddReply(replyingTo, replyContent.trim());
      setReplyContent("");
      setReplyingTo(null);
    }
  };
  const handleEdit = (comment) => {
    setEditingComment(comment.id);
    setEditingContent(comment.content);
  };
  const handleSaveEdit = () => {
    if (editingComment && editingContent.trim() && onEditComment) {
      onEditComment(editingComment, editingContent.trim());
      setEditingComment(null);
      setEditingContent("");
    }
  };
  const handleCancelEdit = () => {
    setEditingComment(null);
    setEditingContent("");
  };
  const handleDelete = (commentId) => {
    setDeleteConfirm(commentId);
  };
  const confirmDelete = () => {
    if (deleteConfirm && onDeleteComment) {
      onDeleteComment(deleteConfirm);
      setDeleteConfirm(null);
    }
  };
  const formatTimestamp = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(date);
  };
  const renderComment = (comment, depth = 0) => {
    const isEditing = editingComment === comment.id;
    const isReplying = replyingTo === comment.id;
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      "div",
      {
        className: "cria-comment",
        style: {
          marginLeft: depth * 20,
          marginBottom: depth > 0 ? 8 : 16,
          display: "flex",
          flexDirection: "column",
          alignItems: depth > 0 ? "flex-end" : "flex-start"
        },
        children: [
          isEditing ? /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comment__edit", style: {
            backgroundColor: colors.background.primary,
            border: `1px solid ${colors.border.medium}`,
            borderRadius: 12,
            padding: 12,
            width: "100%"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Textarea,
              {
                value: editingContent,
                onChange: (e) => setEditingContent(e.target.value),
                placeholder: "Edit your comment...",
                maxLength,
                style: { marginBottom: 8, border: "none", backgroundColor: "transparent" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { size: "sm", onClick: handleSaveEdit, disabled: !editingContent.trim(), children: "Save" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { size: "sm", variant: "secondary", onClick: handleCancelEdit, children: "Cancel" })
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comment__bubble", style: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "70%",
            minWidth: "200px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comment__header", style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
              padding: "0 4px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Avatar,
                {
                  src: comment.avatar,
                  name: comment.author,
                  size: "sm",
                  style: { flexShrink: 0 }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Typography, { variant: "body2", weight: "bold", style: { color: colors.text.primary, marginBottom: 2 }, children: comment.author }),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Typography, { variant: "caption", style: { color: colors.text.secondary }, children: formatTimestamp(comment.timestamp) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comment__content", style: {
                backgroundColor: depth > 0 ? colors.primaryDarker : colors.primary,
                color: depth > 0 ? colors.white : colors.white,
                padding: "12px 16px",
                borderRadius: 16,
                position: "relative",
                marginBottom: 8,
                wordWrap: "break-word"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  Typography,
                  {
                    variant: "body2",
                    style: {
                      color: depth > 0 ? colors.white : colors.white,
                      whiteSpace: "pre-wrap",
                      margin: 0
                    },
                    children: comment.content
                  }
                ),
                depth === 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { style: {
                  position: "absolute",
                  top: -6,
                  left: 20,
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderBottom: `6px solid ${colors.primary}`
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comment__actions", style: {
                display: "flex",
                gap: 8,
                padding: "0 4px",
                justifyContent: "flex-end"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    onClick: () => setReplyingTo(comment.id),
                    "aria-label": `Reply to ${comment.author}`,
                    style: { fontSize: "12px", padding: "4px 8px" },
                    children: "Reply"
                  }
                ),
                onEditComment && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    onClick: () => handleEdit(comment),
                    "aria-label": `Edit comment by ${comment.author}`,
                    style: { fontSize: "12px", padding: "4px 8px" },
                    children: "Edit"
                  }
                ),
                onDeleteComment && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    onClick: () => handleDelete(comment.id),
                    "aria-label": `Delete comment by ${comment.author}`,
                    style: { color: colors.error, fontSize: "12px", padding: "4px 8px" },
                    children: "Delete"
                  }
                )
              ] })
            ] }),
            isReplying && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comment__reply", style: {
              marginTop: 12,
              padding: 12,
              backgroundColor: colors.background.primary,
              borderRadius: 12,
              border: `1px solid ${colors.border.light}`,
              maxWidth: "100%"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Typography, { variant: "body2", weight: "semiBold", style: { marginBottom: 8, color: colors.text.primary }, children: [
                "Reply to ",
                comment.author
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Textarea,
                {
                  ref: replyTextareaRef,
                  value: replyContent,
                  onChange: (e) => setReplyContent(e.target.value),
                  onKeyDown: handleReplyKeyDown,
                  placeholder: "Write your reply...",
                  maxLength,
                  style: { marginBottom: 8, border: "none", backgroundColor: "transparent" },
                  "aria-label": `Reply to ${comment.author}`
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { size: "sm", onClick: handleSendReply, disabled: !replyContent.trim(), children: "Send Reply" }),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { size: "sm", variant: "secondary", onClick: () => {
                  setReplyingTo(null);
                  setReplyContent("");
                }, children: "Cancel" })
              ] })
            ] })
          ] }),
          comment.replies.map((reply) => renderComment(reply, depth + 1))
        ]
      },
      comment.id
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "div",
    {
      className: ["cria-comments-section", className].filter(Boolean).join(" "),
      style,
      role: "region",
      "aria-label": "Comments",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cria-comments-section__header", style: { marginBottom: spacing[4] }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Typography, { variant: "h3", weight: "semiBold", style: { color: colors.text.primary }, children: [
          "Comments (",
          comments.length,
          ")"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cria-comments-section__composer", style: { marginBottom: spacing[6] }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Textarea,
            {
              ref: textareaRef,
              value: newComment,
              onChange: (e) => setNewComment(e.target.value),
              onKeyDown: handleKeyDown,
              placeholder,
              maxLength,
              style: { marginBottom: spacing[2] },
              "aria-label": "Add a comment"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Typography, { variant: "caption", style: { color: colors.text.secondary }, children: [
              newComment.length,
              "/",
              maxLength,
              " characters"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { onClick: handleSendComment, disabled: !newComment.trim(), children: "Send" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cria-comments-section__thread", children: comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { style: { textAlign: "center", padding: spacing[6], color: colors.text.secondary }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Typography, { variant: "body2", children: "No comments yet. Be the first to comment!" }) }) : comments.map((comment) => renderComment(comment)) }),
        deleteConfirm && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
          Modal,
          {
            isOpen: true,
            onClose: () => setDeleteConfirm(null),
            title: "Delete Comment",
            size: "sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Typography, { variant: "body2", style: { marginBottom: spacing[4] }, children: "Are you sure you want to delete this comment? This action cannot be undone." }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { style: { display: "flex", gap: spacing[2], justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { variant: "secondary", onClick: () => setDeleteConfirm(null), children: "Cancel" }),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { variant: "danger", onClick: confirmDelete, children: "Confirm" })
              ] })
            ]
          }
        )
      ]
    }
  );
};

// src/components/Slider/Slider.tsx
var import_react34 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue,
  onChange,
  onChangeCommitted,
  range = false,
  disabled = false,
  marks = [],
  showLabels = true,
  showTooltip = true,
  orientation = "horizontal",
  size = "md",
  color = "primary",
  className = "",
  style,
  "aria-label": ariaLabel,
  ...props
}) => {
  const [internalValue, setInternalValue] = (0, import_react34.useState)(() => {
    if (controlledValue !== void 0) return controlledValue;
    if (defaultValue !== void 0) return defaultValue;
    return range ? [min, max] : min;
  });
  const [isDragging, setIsDragging] = (0, import_react34.useState)(false);
  const [activeThumb, setActiveThumb] = (0, import_react34.useState)(null);
  const sliderRef = (0, import_react34.useRef)(null);
  const thumbRefs = (0, import_react34.useRef)([]);
  const currentValue = controlledValue !== void 0 ? controlledValue : internalValue;
  const isControlled = controlledValue !== void 0;
  const getColorValue = (colorName) => {
    const colorMap = {
      primary: colors.primary,
      secondary: colors.secondary,
      success: colors.success,
      warning: colors.warning,
      error: colors.error
    };
    return colorMap[colorName] || colors.primary;
  };
  const getSizeValue = (sizeName) => {
    const sizeMap = {
      sm: { track: 4, thumb: 16, thumbHover: 20 },
      md: { track: 6, thumb: 20, thumbHover: 24 },
      lg: { track: 8, thumb: 24, thumbHover: 28 }
    };
    return sizeMap[sizeName] || sizeMap.md;
  };
  const normalizeValue = (0, import_react34.useCallback)((val) => {
    const normalized = Math.round((val - min) / step) * step + min;
    return Math.max(min, Math.min(max, normalized));
  }, [min, max, step]);
  const getPercentage = (0, import_react34.useCallback)((val) => {
    return (val - min) / (max - min) * 100;
  }, [min, max]);
  const handleValueChange = (0, import_react34.useCallback)((newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [isControlled, onChange]);
  const handleKeyDown = (0, import_react34.useCallback)((event, thumbIndex) => {
    if (disabled) return;
    const currentVal = Array.isArray(currentValue) ? currentValue[thumbIndex] : currentValue;
    let newVal = currentVal;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        event.preventDefault();
        newVal = normalizeValue(currentVal + step);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        event.preventDefault();
        newVal = normalizeValue(currentVal - step);
        break;
      case "Home":
        event.preventDefault();
        newVal = min;
        break;
      case "End":
        event.preventDefault();
        newVal = max;
        break;
      case "PageUp":
        event.preventDefault();
        newVal = normalizeValue(currentVal + step * 10);
        break;
      case "PageDown":
        event.preventDefault();
        newVal = normalizeValue(currentVal - step * 10);
        break;
      default:
        return;
    }
    if (range) {
      const newRangeValue = [...currentValue];
      newRangeValue[thumbIndex] = newVal;
      if (thumbIndex === 0 && newRangeValue[0] > newRangeValue[1]) {
        newRangeValue[0] = newRangeValue[1];
      } else if (thumbIndex === 1 && newRangeValue[1] < newRangeValue[0]) {
        newRangeValue[1] = newRangeValue[0];
      }
      handleValueChange(newRangeValue);
    } else {
      handleValueChange(newVal);
    }
  }, [disabled, currentValue, step, min, max, normalizeValue, range, handleValueChange]);
  const handleMouseDown = (0, import_react34.useCallback)((event, thumbIndex) => {
    if (disabled) return;
    event.preventDefault();
    setIsDragging(true);
    setActiveThumb(thumbIndex);
    const handleMouseMove = (e) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = orientation === "horizontal" ? (e.clientX - rect.left) / rect.width : 1 - (e.clientY - rect.top) / rect.height;
      const newVal = normalizeValue(min + percentage * (max - min));
      if (range) {
        const newRangeValue = [...currentValue];
        newRangeValue[thumbIndex] = newVal;
        if (thumbIndex === 0 && newRangeValue[0] > newRangeValue[1]) {
          newRangeValue[0] = newRangeValue[1];
        } else if (thumbIndex === 1 && newRangeValue[1] < newRangeValue[0]) {
          newRangeValue[1] = newRangeValue[0];
        }
        handleValueChange(newRangeValue);
      } else {
        handleValueChange(newVal);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      setActiveThumb(null);
      onChangeCommitted?.(currentValue);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [disabled, orientation, min, max, normalizeValue, range, currentValue, handleValueChange, onChangeCommitted]);
  const renderThumb = (thumbIndex, value) => {
    const percentage = getPercentage(value);
    const sizeConfig = getSizeValue(size);
    const colorValue = getColorValue(color);
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "div",
      {
        ref: (el) => thumbRefs.current[thumbIndex] = el,
        className: "cria-slider__thumb",
        style: {
          position: "absolute",
          [orientation === "horizontal" ? "left" : "top"]: `${percentage}%`,
          [orientation === "horizontal" ? "top" : "left"]: "50%",
          transform: orientation === "horizontal" ? "translate(-50%, -50%)" : "translate(-50%, 50%)",
          width: sizeConfig.thumb,
          height: sizeConfig.thumb,
          backgroundColor: colorValue,
          border: `2px solid ${colors.white}`,
          borderRadius: "50%",
          cursor: disabled ? "not-allowed" : "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "all 0.2s ease",
          zIndex: activeThumb === thumbIndex ? 2 : 1,
          opacity: disabled ? 0.5 : 1
        },
        onMouseDown: (e) => handleMouseDown(e, thumbIndex),
        onKeyDown: (e) => handleKeyDown(e, thumbIndex),
        tabIndex: disabled ? -1 : 0,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": disabled,
        "aria-label": ariaLabel || `Slider ${thumbIndex + 1}`,
        children: showTooltip && (isDragging || activeThumb === thumbIndex) && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "div",
          {
            className: "cria-slider__tooltip",
            style: {
              position: "absolute",
              bottom: orientation === "horizontal" ? "100%" : "auto",
              top: orientation === "vertical" ? "100%" : "auto",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: colors.background.dark,
              color: colors.white,
              padding: "4px 8px",
              borderRadius: 4,
              fontSize: "12px",
              whiteSpace: "nowrap",
              marginBottom: orientation === "horizontal" ? 8 : 0,
              marginTop: orientation === "vertical" ? 8 : 0,
              zIndex: 3
            },
            children: value
          }
        )
      },
      thumbIndex
    );
  };
  const renderTrack = () => {
    const sizeConfig = getSizeValue(size);
    const colorValue = getColorValue(color);
    if (range) {
      const [minVal, maxVal] = currentValue;
      const minPercentage = getPercentage(minVal);
      const maxPercentage = getPercentage(maxVal);
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "div",
          {
            className: "cria-slider__track-background",
            style: {
              position: "absolute",
              [orientation === "horizontal" ? "top" : "left"]: "50%",
              [orientation === "horizontal" ? "left" : "top"]: 0,
              [orientation === "horizontal" ? "width" : "height"]: "100%",
              [orientation === "horizontal" ? "height" : "width"]: sizeConfig.track,
              [orientation === "horizontal" ? "marginTop" : "marginLeft"]: `-${sizeConfig.track / 2}px`,
              backgroundColor: colors.border.light,
              borderRadius: sizeConfig.track / 2
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "div",
          {
            className: "cria-slider__track-active",
            style: {
              position: "absolute",
              [orientation === "horizontal" ? "top" : "left"]: "50%",
              [orientation === "horizontal" ? "left" : "top"]: `${minPercentage}%`,
              [orientation === "horizontal" ? "width" : "height"]: `${maxPercentage - minPercentage}%`,
              [orientation === "horizontal" ? "height" : "width"]: sizeConfig.track,
              [orientation === "horizontal" ? "marginTop" : "marginLeft"]: `-${sizeConfig.track / 2}px`,
              backgroundColor: colorValue,
              borderRadius: sizeConfig.track / 2
            }
          }
        )
      ] });
    } else {
      const percentage = getPercentage(currentValue);
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "div",
          {
            className: "cria-slider__track-background",
            style: {
              position: "absolute",
              [orientation === "horizontal" ? "top" : "left"]: "50%",
              [orientation === "horizontal" ? "left" : "top"]: 0,
              [orientation === "horizontal" ? "width" : "height"]: "100%",
              [orientation === "horizontal" ? "height" : "width"]: sizeConfig.track,
              [orientation === "horizontal" ? "marginTop" : "marginLeft"]: `-${sizeConfig.track / 2}px`,
              backgroundColor: colors.border.light,
              borderRadius: sizeConfig.track / 2
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "div",
          {
            className: "cria-slider__track-active",
            style: {
              position: "absolute",
              [orientation === "horizontal" ? "top" : "left"]: "50%",
              [orientation === "horizontal" ? "left" : "top"]: 0,
              [orientation === "horizontal" ? "width" : "height"]: `${percentage}%`,
              [orientation === "horizontal" ? "height" : "width"]: sizeConfig.track,
              [orientation === "horizontal" ? "marginTop" : "marginLeft"]: `-${sizeConfig.track / 2}px`,
              backgroundColor: colorValue,
              borderRadius: sizeConfig.track / 2
            }
          }
        )
      ] });
    }
  };
  const renderMarks = () => {
    if (marks.length === 0) return null;
    return marks.map((mark, index) => {
      const percentage = getPercentage(mark.value);
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        "div",
        {
          className: "cria-slider__mark",
          style: {
            position: "absolute",
            [orientation === "horizontal" ? "left" : "top"]: `${percentage}%`,
            [orientation === "horizontal" ? "top" : "left"]: "50%",
            transform: orientation === "horizontal" ? "translate(-50%, -50%)" : "translate(-50%, 50%)",
            width: 8,
            height: 8,
            backgroundColor: colors.border.medium,
            borderRadius: "50%",
            zIndex: 0
          },
          children: mark.label && showLabels && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            "div",
            {
              className: "cria-slider__mark-label",
              style: {
                position: "absolute",
                [orientation === "horizontal" ? "top" : "left"]: "100%",
                [orientation === "horizontal" ? "left" : "top"]: "50%",
                transform: orientation === "horizontal" ? "translateX(-50%)" : "translateY(-50%)",
                marginTop: orientation === "horizontal" ? 8 : 0,
                marginLeft: orientation === "vertical" ? 8 : 0,
                fontSize: "12px",
                color: colors.text.secondary,
                whiteSpace: "nowrap"
              },
              children: mark.label
            }
          )
        },
        index
      );
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "div",
    {
      ref: sliderRef,
      className: ["cria-slider", className].filter(Boolean).join(" "),
      style: {
        position: "relative",
        [orientation === "horizontal" ? "width" : "height"]: "100%",
        [orientation === "horizontal" ? "height" : "width"]: getSizeValue(size).thumbHover,
        padding: `${getSizeValue(size).thumbHover / 2}px 0`,
        ...style
      },
      ...props,
      children: [
        renderTrack(),
        renderMarks(),
        range ? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
          renderThumb(0, currentValue[0]),
          renderThumb(1, currentValue[1])
        ] }) : renderThumb(0, currentValue)
      ]
    }
  );
};

// src/components/ShimmerSkeleton/ShimmerSkeleton.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
var ShimmerSkeleton = ({
  variant = "rectangle",
  size = "md",
  width,
  height,
  lines = 1,
  animated = true,
  className = "",
  style,
  "aria-label": ariaLabel,
  ...props
}) => {
  const getSizeValue = (sizeName) => {
    const sizeMap = {
      sm: { width: "16px", height: "16px" },
      md: { width: "24px", height: "24px" },
      lg: { width: "40px", height: "40px" }
    };
    return sizeMap[sizeName] || sizeMap.md;
  };
  const getVariantStyles4 = () => {
    const sizeConfig = getSizeValue(size);
    switch (variant) {
      case "text":
        return {
          width: width || "100%",
          height: height || "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        };
      case "avatar":
        return {
          width: width || sizeConfig.width,
          height: height || sizeConfig.width,
          borderRadius: "50%"
        };
      case "card":
        return {
          width: width || "100%",
          height: height || "200px",
          borderRadius: "12px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        };
      case "button":
        return {
          width: width || "120px",
          height: height || "36px",
          borderRadius: "6px"
        };
      case "circle":
        return {
          width: width || sizeConfig.width,
          height: height || sizeConfig.height,
          borderRadius: "50%"
        };
      case "rectangle":
      default:
        return {
          width: width || "100%",
          height: height || "20px",
          borderRadius: "4px"
        };
    }
  };
  const renderTextLines = () => {
    if (variant !== "text") return null;
    return Array.from({ length: lines }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "div",
      {
        className: "cria-shimmer-skeleton__line",
        style: {
          width: index === lines - 1 ? "75%" : "100%",
          height: "16px",
          borderRadius: "4px",
          backgroundColor: colors.gray[200],
          position: "relative",
          overflow: "hidden"
        },
        children: animated && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "div",
          {
            className: "cria-shimmer-skeleton__shimmer",
            style: {
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
              animation: "shimmer 1.5s infinite"
            }
          }
        )
      },
      index
    ));
  };
  const renderCardContent = () => {
    if (variant !== "card") return null;
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_jsx_runtime41.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "div",
        {
          className: "cria-shimmer-skeleton__line",
          style: {
            width: "60%",
            height: "20px",
            borderRadius: "4px",
            backgroundColor: colors.gray[200],
            position: "relative",
            overflow: "hidden"
          },
          children: animated && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "div",
            {
              className: "cria-shimmer-skeleton__shimmer",
              style: {
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
                animation: "shimmer 1.5s infinite"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "div",
        {
          className: "cria-shimmer-skeleton__line",
          style: {
            width: "100%",
            height: "16px",
            borderRadius: "4px",
            backgroundColor: colors.gray[200],
            position: "relative",
            overflow: "hidden"
          },
          children: animated && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "div",
            {
              className: "cria-shimmer-skeleton__shimmer",
              style: {
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
                animation: "shimmer 1.5s infinite"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "div",
        {
          className: "cria-shimmer-skeleton__line",
          style: {
            width: "80%",
            height: "16px",
            borderRadius: "4px",
            backgroundColor: colors.gray[200],
            position: "relative",
            overflow: "hidden"
          },
          children: animated && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "div",
            {
              className: "cria-shimmer-skeleton__shimmer",
              style: {
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
                animation: "shimmer 1.5s infinite"
              }
            }
          )
        }
      )
    ] });
  };
  const baseStyles = {
    backgroundColor: colors.gray[200],
    position: "relative",
    overflow: "hidden",
    ...getVariantStyles4(),
    ...style
  };
  const shimmerElement = animated && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "div",
    {
      className: "cria-shimmer-skeleton__shimmer",
      style: {
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
        animation: "shimmer 1.5s infinite"
      }
    }
  );
  const classNames = [
    "cria-shimmer-skeleton",
    `cria-shimmer-skeleton--${variant}`,
    `cria-shimmer-skeleton--${size}`,
    !animated && "cria-shimmer-skeleton--no-animation",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    "div",
    {
      className: classNames,
      style: baseStyles,
      role: "status",
      "aria-label": ariaLabel || "Loading content",
      "aria-live": "polite",
      ...props,
      children: [
        variant === "text" && renderTextLines(),
        variant === "card" && renderCardContent(),
        variant !== "text" && variant !== "card" && shimmerElement
      ]
    }
  );
};

// src/components/PricingPage/PricingPage.tsx
var import_react35 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var PricingPage = ({
  tiers,
  title = "Choose Your Plan",
  subtitle = "Select the perfect plan for your needs",
  currency = "$",
  defaultBillingPeriod = "monthly",
  onTierSelect,
  onBillingToggle,
  className = "",
  style,
  ...props
}) => {
  const [billingPeriod, setBillingPeriod] = (0, import_react35.useState)(defaultBillingPeriod);
  const handleBillingToggle = (period) => {
    setBillingPeriod(period);
    onBillingToggle?.(period);
  };
  const handleTierSelect = (tier) => {
    const price = billingPeriod === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
    onTierSelect?.(tier.id, billingPeriod, price);
  };
  const formatPrice = (price) => {
    return `${currency}${price}`;
  };
  const getSavings = (monthlyPrice, yearlyPrice) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    const percentage = Math.round(savings / monthlyTotal * 100);
    return { savings, percentage };
  };
  if (tiers.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "main",
      {
        className: `cria-pricing-page ${className}`,
        style: {
          padding: spacing.lg,
          textAlign: "center",
          ...style
        },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "h2", weight: "semiBold", style: { color: colors.text.primary }, children: "No pricing tiers available" })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    "main",
    {
      className: `cria-pricing-page ${className}`,
      style: {
        padding: spacing.xl,
        maxWidth: "1200px",
        margin: "0 auto",
        ...style
      },
      role: "main",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: { textAlign: "center", marginBottom: spacing.xl }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            Typography,
            {
              variant: "h1",
              weight: "bold",
              style: {
                marginBottom: spacing.md,
                color: colors.text.primary,
                fontSize: typography.fontSize.display,
                lineHeight: typography.lineHeight.tight
              },
              children: title
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            Typography,
            {
              variant: "h3",
              style: {
                color: colors.text.secondary,
                marginBottom: spacing.xl
              },
              children: subtitle
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: spacing.md,
            marginBottom: spacing.xl
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              Typography,
              {
                variant: "body",
                weight: billingPeriod === "monthly" ? "semiBold" : "normal",
                style: {
                  color: billingPeriod === "monthly" ? colors.primary : colors.text.secondary,
                  cursor: "pointer"
                },
                onClick: () => handleBillingToggle("monthly"),
                children: "Monthly"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => handleBillingToggle(billingPeriod === "monthly" ? "yearly" : "monthly"),
                style: {
                  minWidth: "60px",
                  height: "32px",
                  borderRadius: "16px",
                  position: "relative",
                  backgroundColor: billingPeriod === "yearly" ? colors.primary : colors.background.primary,
                  borderColor: colors.primary
                },
                "aria-label": `Switch to ${billingPeriod === "monthly" ? "yearly" : "monthly"} billing`,
                children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: "2px",
                      left: billingPeriod === "monthly" ? "2px" : "30px",
                      width: "28px",
                      height: "28px",
                      backgroundColor: billingPeriod === "yearly" ? colors.white : colors.primary,
                      borderRadius: "50%",
                      transition: "left 0.3s ease"
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              Typography,
              {
                variant: "body",
                weight: billingPeriod === "yearly" ? "semiBold" : "normal",
                style: {
                  color: billingPeriod === "yearly" ? colors.primary : colors.text.secondary,
                  cursor: "pointer"
                },
                onClick: () => handleBillingToggle("yearly"),
                children: "Yearly"
              }
            ),
            billingPeriod === "yearly" && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              Badge,
              {
                variant: "success",
                style: { marginLeft: spacing.sm },
                children: "Save up to 20%"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: spacing.md,
          alignItems: "stretch",
          maxWidth: "100%"
        }, children: tiers.map((tier) => {
          const price = billingPeriod === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
          const savings = getSavings(tier.monthlyPrice, tier.yearlyPrice);
          return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
            Card,
            {
              style: {
                position: "relative",
                padding: spacing.lg,
                textAlign: "center",
                border: tier.popular ? `2px solid ${colors.primary}` : `1px solid ${colors.border.medium}`,
                borderRadius: "12px",
                backgroundColor: colors.background.primary,
                boxShadow: tier.popular ? `0 4px 20px ${colors.primary}15` : `0 2px 8px ${colors.border.light}`,
                transform: tier.popular ? "scale(1.02)" : "scale(1)",
                transition: "all 0.2s ease",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column"
              },
              children: [
                tier.popular && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { style: {
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)"
                }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                  Badge,
                  {
                    variant: "primary",
                    style: {
                      backgroundColor: colors.primary,
                      color: colors.white,
                      padding: `${spacing.xs} ${spacing.md}`,
                      borderRadius: "20px",
                      fontSize: typography.fontSize.bodySmall,
                      fontWeight: typography.fontWeight.semiBold
                    },
                    children: "Most Popular"
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: { marginBottom: spacing.lg, flex: "0 0 auto" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                    Typography,
                    {
                      variant: "h3",
                      weight: "semiBold",
                      style: {
                        marginBottom: spacing.xs,
                        color: colors.text.primary,
                        fontSize: typography.fontSize.h3
                      },
                      children: tier.name
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                    Typography,
                    {
                      variant: "body",
                      style: {
                        color: colors.text.secondary,
                        marginBottom: spacing.md,
                        fontSize: typography.fontSize.bodySmall
                      },
                      children: tier.description
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: { marginBottom: spacing.sm }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                      Typography,
                      {
                        variant: "h1",
                        weight: "bold",
                        style: {
                          color: colors.primary,
                          fontSize: typography.fontSize.h1,
                          lineHeight: typography.lineHeight.tight,
                          marginBottom: spacing.xs
                        },
                        children: formatPrice(price)
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                      Typography,
                      {
                        variant: "body",
                        style: {
                          color: colors.text.secondary,
                          fontSize: typography.fontSize.bodySmall
                        },
                        children: [
                          "/",
                          billingPeriod === "monthly" ? "month" : "year"
                        ]
                      }
                    )
                  ] }),
                  billingPeriod === "yearly" && savings.percentage > 0 && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                    Typography,
                    {
                      variant: "caption",
                      style: {
                        color: colors.success,
                        fontWeight: typography.fontWeight.medium
                      },
                      children: [
                        "Save ",
                        savings.percentage,
                        "%"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { style: { marginBottom: spacing.lg, flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("ul", { style: {
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left"
                }, children: [
                  tier.features.slice(0, 5).map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                    "li",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: spacing.xs,
                        color: colors.text.primary
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                          "div",
                          {
                            style: {
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              backgroundColor: colors.success,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: spacing.sm,
                              flexShrink: 0
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { style: { color: colors.white, fontSize: "10px", fontWeight: "bold" }, children: "\u2713" })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "body2", style: { color: colors.text.primary, fontSize: typography.fontSize.bodySmall }, children: feature })
                      ]
                    },
                    index
                  )),
                  tier.features.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { style: { marginTop: spacing.xs }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Typography, { variant: "caption", style: { color: colors.text.secondary, fontStyle: "italic" }, children: [
                    "+",
                    tier.features.length - 5,
                    " more features"
                  ] }) })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                  Button,
                  {
                    variant: tier.ctaVariant || (tier.popular ? "primary" : "outline"),
                    size: "md",
                    onClick: () => handleTierSelect(tier),
                    style: {
                      width: "100%",
                      padding: `${spacing.sm} ${spacing.md}`,
                      fontSize: typography.fontSize.bodySmall,
                      fontWeight: typography.fontWeight.semiBold,
                      flex: "0 0 auto"
                    },
                    children: tier.ctaText
                  }
                )
              ]
            },
            tier.id
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: {
          textAlign: "center",
          marginTop: spacing.xl,
          padding: spacing.lg,
          backgroundColor: colors.background.secondary,
          borderRadius: "12px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            Typography,
            {
              variant: "body",
              style: {
                color: colors.text.secondary,
                marginBottom: spacing.sm
              },
              children: "All plans include 14-day free trial"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            Typography,
            {
              variant: "caption",
              style: {
                color: colors.text.tertiary
              },
              children: "No credit card required \u2022 Cancel anytime"
            }
          )
        ] })
      ]
    }
  );
};

// src/components/PageLoadingProgress/PageLoadingProgress.tsx
var import_react36 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var PageLoadingProgress = ({
  progress = 0,
  color = "primary",
  size = "md",
  position = "top",
  thickness = "normal",
  animated = false,
  smooth = false,
  indeterminate = false,
  label,
  zIndex = 9999,
  duration = 300,
  delay = 0,
  onComplete,
  onProgressChange,
  className = "",
  style,
  ...props
}) => {
  const [displayProgress, setDisplayProgress] = (0, import_react36.useState)(0);
  const [isVisible, setIsVisible] = (0, import_react36.useState)(false);
  const clampedProgress = Math.max(0, Math.min(100, progress));
  (0, import_react36.useEffect)(() => {
    if (onProgressChange) {
      onProgressChange(clampedProgress);
    }
    if (clampedProgress === 100 && onComplete) {
      onComplete(clampedProgress);
    }
  }, [clampedProgress, onProgressChange, onComplete]);
  (0, import_react36.useEffect)(() => {
    if (smooth && !indeterminate) {
      const timer = setTimeout(() => {
        setDisplayProgress(clampedProgress);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(clampedProgress);
    }
  }, [clampedProgress, smooth, indeterminate]);
  (0, import_react36.useEffect)(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [delay]);
  const baseClass = "cria-page-loading-progress";
  const classes = [
    baseClass,
    `${baseClass}--${color}`,
    `${baseClass}--${size}`,
    `${baseClass}--${position}`,
    `${baseClass}--${thickness}`,
    animated && `${baseClass}--animated`,
    smooth && `${baseClass}--smooth`,
    indeterminate && `${baseClass}--indeterminate`,
    delay > 0 && `${baseClass}--delayed`,
    className
  ].filter(Boolean).join(" ");
  const inlineStyles = {
    position: "fixed",
    left: 0,
    right: 0,
    [position]: 0,
    zIndex,
    height: thickness === "thin" ? "2px" : thickness === "thick" ? "6px" : "4px",
    backgroundColor: colors.background.primary,
    border: "none",
    outline: "none",
    ...smooth && {
      transition: `width ${duration}ms ease-out`
    },
    ...delay > 0 && {
      opacity: isVisible ? 1 : 0,
      transition: "opacity 200ms ease-in-out"
    },
    ...style
  };
  const progressBarStyles = {
    height: "100%",
    width: indeterminate ? "100%" : `${displayProgress}%`,
    backgroundColor: color === "primary" ? colors.primary : color === "secondary" ? colors.secondary : color === "success" ? colors.success : color === "warning" ? colors.warning : color === "error" ? colors.error : colors.primary,
    transition: smooth ? `width ${duration}ms ease-out` : "none",
    ...animated && {
      background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
      backgroundSize: "200% 100%",
      animation: "cria-progress-shimmer 1.5s infinite"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      className: classes,
      style: inlineStyles,
      role: "progressbar",
      "aria-valuenow": indeterminate ? 0 : displayProgress,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": label || "Loading progress",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { style: progressBarStyles }),
        label && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              top: position === "top" ? "100%" : "auto",
              bottom: position === "bottom" ? "100%" : "auto",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: position === "top" ? spacing.xs : 0,
              marginBottom: position === "bottom" ? spacing.xs : 0,
              padding: `${spacing.xs} ${spacing.sm}`,
              backgroundColor: colors.background.secondary,
              color: colors.text.primary,
              fontSize: typography.fontSize.caption,
              fontWeight: typography.fontWeight.medium,
              borderRadius: "4px",
              boxShadow: `0 2px 8px ${colors.border.light}`,
              whiteSpace: "nowrap",
              zIndex: zIndex + 1
            },
            children: label
          }
        )
      ]
    }
  );
};

// src/components/CardSelector/CardSelector.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
var CardSelector = ({
  cards = [],
  mode = "single",
  selectedValues = [],
  onChange,
  onCardClick,
  layout = "grid",
  size = "md",
  spacing: spacing5 = "md",
  orientation = "horizontal",
  variant = "default",
  disabled = false,
  loading = false,
  required = false,
  name = "card-selector",
  ariaLabel,
  ariaLabelledBy,
  error,
  helpText,
  maxSelections,
  minSelections,
  cardRenderer,
  className = "",
  style,
  ...props
}) => {
  const currentSelectedValues = selectedValues;
  const handleSelectionChange = (value, checked) => {
    let newSelectedValues;
    if (mode === "single") {
      newSelectedValues = checked ? [value] : [];
    } else {
      if (checked) {
        newSelectedValues = [...currentSelectedValues, value];
        if (maxSelections && newSelectedValues.length > maxSelections) {
          return;
        }
      } else {
        newSelectedValues = currentSelectedValues.filter((v) => v !== value);
        if (minSelections && newSelectedValues.length < minSelections) {
          return;
        }
      }
    }
    onChange?.(newSelectedValues);
  };
  const handleCardClick = (card) => {
    if (disabled || loading || card.disabled) return;
    const isSelected = currentSelectedValues.includes(card.value);
    handleSelectionChange(card.value, !isSelected);
    onCardClick?.(card);
  };
  const handleKeyDown = (event, card) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const isSelected = currentSelectedValues.includes(card.value);
      handleSelectionChange(card.value, !isSelected);
    }
  };
  const baseClass = "cria-card-selector";
  const classes = [
    baseClass,
    `${baseClass}--${layout}`,
    `${baseClass}--${size}`,
    `${baseClass}--spacing-${spacing5}`,
    `${baseClass}--${orientation}`,
    `${baseClass}--${variant}`,
    disabled && `${baseClass}--disabled`,
    loading && `${baseClass}--loading`,
    error && `${baseClass}--error`,
    className
  ].filter(Boolean).join(" ");
  const defaultCardRenderer = (card, isSelected, isDisabled) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Card,
    {
      style: {
        cursor: disabled || loading || card.disabled ? "not-allowed" : "pointer",
        opacity: disabled || loading || card.disabled ? 0.6 : 1,
        border: isSelected ? `2px solid ${colors.primary}` : `1px solid ${colors.border.medium}`,
        backgroundColor: isSelected ? colors.background.secondary : colors.background.primary,
        transition: "all 0.2s ease",
        position: "relative"
      },
      onClick: () => handleCardClick(card),
      onKeyDown: (e) => handleKeyDown(e, card),
      tabIndex: disabled || loading || card.disabled ? -1 : 0,
      role: "button",
      "aria-pressed": isSelected,
      "aria-disabled": disabled || loading || card.disabled,
      children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { style: { display: "flex", alignItems: "flex-start", gap: spacing5.sm }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { style: { marginTop: "4px", flexShrink: 0 }, children: mode === "single" ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "input",
          {
            type: "radio",
            name,
            value: card.value,
            checked: isSelected,
            onChange: () => handleSelectionChange(card.value, true),
            onClick: (e) => e.stopPropagation(),
            disabled: disabled || loading || card.disabled,
            style: { margin: 0 },
            "aria-label": card.title
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "input",
          {
            type: "checkbox",
            name,
            value: card.value,
            checked: isSelected,
            onChange: (e) => handleSelectionChange(card.value, e.target.checked),
            onClick: (e) => e.stopPropagation(),
            disabled: disabled || loading || card.disabled,
            style: { margin: 0 },
            "aria-label": card.title
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
          card.badge && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { style: {
            position: "absolute",
            top: spacing5.sm,
            right: spacing5.sm,
            backgroundColor: colors.primary,
            color: colors.white,
            padding: `${spacing5.xs} ${spacing5.sm}`,
            borderRadius: "4px",
            fontSize: typography.fontSize.caption,
            fontWeight: typography.fontWeight.semiBold
          }, children: card.badge }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Typography,
            {
              variant: "h3",
              weight: "semiBold",
              style: {
                marginBottom: spacing5.xs,
                color: colors.text.primary
              },
              children: card.title
            }
          ),
          card.description && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Typography,
            {
              variant: "body",
              style: {
                marginBottom: spacing5.sm,
                color: colors.text.secondary
              },
              children: card.description
            }
          ),
          card.price && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Typography,
            {
              variant: "h2",
              weight: "bold",
              style: {
                marginBottom: spacing5.sm,
                color: colors.primary
              },
              children: card.price
            }
          ),
          card.features && card.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { style: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            marginBottom: spacing5.sm
          }, children: card.features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            "li",
            {
              style: {
                display: "flex",
                alignItems: "center",
                marginBottom: spacing5.xs,
                color: colors.text.primary
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                  "div",
                  {
                    style: {
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: colors.success,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: spacing5.sm,
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { style: { color: colors.white, fontSize: "10px", fontWeight: "bold" }, children: "\u2713" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "body2", style: { color: colors.text.primary }, children: feature })
              ]
            },
            index
          )) }),
          card.icon && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: spacing5.sm
          }, children: card.icon }),
          card.image && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { style: {
            width: "100%",
            height: "120px",
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            marginBottom: spacing5.sm
          } })
        ] })
      ] })
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    "div",
    {
      className: classes,
      style,
      role: "group",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-required": required,
      ...props,
      children: [
        error && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          Typography,
          {
            variant: "caption",
            style: {
              color: colors.error,
              marginBottom: spacing5.sm,
              display: "block"
            },
            className: "cria-card-selector__error",
            children: error
          }
        ),
        helpText && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          Typography,
          {
            variant: "body2",
            style: {
              color: colors.text.secondary,
              marginBottom: spacing5.md,
              display: "block"
            },
            className: "cria-card-selector__help",
            children: helpText
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cria-card-selector__cards", children: cards.map((card) => {
          const isSelected = currentSelectedValues.includes(card.value);
          const isDisabled = disabled || loading || card.disabled;
          return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cria-card-selector__card", children: cardRenderer ? cardRenderer(card, isSelected, isDisabled) : defaultCardRenderer(card, isSelected, isDisabled) }, card.id);
        }) }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "body", style: { color: colors.text.secondary }, children: "Loading..." })
          }
        )
      ]
    }
  );
};

// src/components/FloatingSidebar/FloatingSidebar.tsx
var import_phosphor_react16 = require("phosphor-react");
var import_jsx_runtime45 = require("react/jsx-runtime");
var FloatingSidebar = ({
  title = "CR_IA.lab",
  subtitle = "(beta)",
  items = [],
  user,
  emblemImage = "/src/assets/cria_emblem.png",
  className = "",
  style,
  ...props
}) => {
  const baseClass = "cria-floating-sidebar";
  const classes = [
    baseClass,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    "div",
    {
      className: classes,
      style: {
        position: "fixed",
        left: spacing.lg,
        top: spacing.lg,
        width: 280,
        backgroundColor: colors.primary,
        borderRadius: spacing.xl,
        padding: spacing.lg,
        display: "flex",
        flexDirection: "column",
        zIndex: 1e3,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { style: {
          position: "relative",
          marginBottom: spacing.lg,
          display: "flex",
          justifyContent: "center"
        }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          "img",
          {
            src: emblemImage,
            alt: "CRIA Emblem",
            style: {
              width: 120,
              height: 120,
              objectFit: "contain",
              position: "relative",
              top: -30,
              // Overlap the top of the sidebar
              zIndex: 1,
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))"
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { style: {
          textAlign: "center",
          marginBottom: spacing.xl,
          marginTop: -24
          // Adjust for larger emblem overlap
        }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
          Typography,
          {
            variant: "title1",
            style: {
              color: colors.white,
              fontWeight: "bold",
              fontSize: "24px",
              letterSpacing: "0.5px",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: spacing.sm
            },
            children: [
              title,
              subtitle && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { style: {
                fontSize: "14px",
                fontWeight: "normal",
                opacity: 0.8
              }, children: subtitle })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: spacing.sm
        }, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
          Button,
          {
            variant: item.active ? "secondary" : "ghost",
            size: "md",
            onClick: item.onClick,
            style: {
              width: "100%",
              justifyContent: "flex-start",
              padding: `${spacing.md} ${spacing.lg}`,
              borderRadius: spacing.sm,
              backgroundColor: item.active ? "rgba(255, 255, 255, 0.15)" : "transparent",
              color: colors.white,
              border: "none",
              fontSize: "14px",
              fontWeight: "500",
              fontFamily: "monospace",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: spacing.sm
            },
            onMouseEnter: (e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = colors.secondary;
              }
            },
            onMouseLeave: (e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            },
            children: [
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                "img",
                {
                  src: item.icon,
                  alt: "",
                  style: {
                    width: 20,
                    height: 20,
                    filter: "brightness(0) invert(1)"
                    // Make icons white
                  }
                }
              ),
              item.label
            ]
          },
          item.id
        )) }),
        user && /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { style: {
          marginTop: spacing.lg,
          marginBottom: spacing.md,
          paddingTop: spacing.lg,
          paddingBottom: spacing.sm,
          borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
          display: "flex",
          alignItems: "center",
          gap: spacing.md
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            Avatar,
            {
              src: user.avatar,
              size: "md",
              alt: user.name,
              style: {
                border: `2px solid ${colors.white}`
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              Typography,
              {
                variant: "body",
                style: {
                  color: colors.white,
                  fontWeight: "600",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  marginBottom: 2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: user.name
              }
            ),
            user.class && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              Typography,
              {
                variant: "caption",
                style: {
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  textTransform: "uppercase"
                },
                children: user.class
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              style: {
                color: colors.white,
                padding: spacing.sm,
                minWidth: "auto",
                marginRight: spacing.sm
              },
              onClick: () => console.log("Analytics clicked"),
              "aria-label": "Analytics",
              children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_phosphor_react16.ChartBar, { size: 16 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              style: {
                color: colors.white,
                padding: spacing.sm,
                minWidth: "auto"
              },
              onClick: () => console.log("Settings clicked"),
              "aria-label": "Settings",
              children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_phosphor_react16.Gear, { size: 16 })
            }
          )
        ] })
      ]
    }
  );
};

// src/components/RowOfCards/RowOfCards.tsx
var import_react37 = require("react");
var import_phosphor_react17 = require("phosphor-react");
var import_jsx_runtime46 = require("react/jsx-runtime");
function RowOfCards({
  cards,
  renderCard,
  cardsPerPage = 6,
  onPageChange,
  className,
  style,
  "data-testid": dataTestId
}) {
  const [currentPage, setCurrentPage] = (0, import_react37.useState)(1);
  const pagination = (0, import_react37.useMemo)(() => {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);
    return {
      totalPages,
      currentCards,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    };
  }, [cards, cardsPerPage, currentPage]);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange?.(newPage);
  };
  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      handlePageChange(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      handlePageChange(currentPage - 1);
    }
  };
  if (cards.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        className: `row-of-cards ${className || ""}`,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          padding: spacing[8],
          ...style
        },
        "data-testid": dataTestId,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Card, { variant: "outlined", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { style: { textAlign: "center", padding: spacing[8] }, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Typography, { variant: "body", color: "secondary", children: "No cards to display" }) }) })
      }
    );
  }
  if (pagination.totalPages <= 1) {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        className: `row-of-cards ${className || ""}`,
        style: {
          ...style
        },
        "data-testid": dataTestId,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "row-of-cards-grid", style: gridStyles, children: pagination.currentCards.map(
          (card, index) => renderCard(card, index)
        ) })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    "div",
    {
      className: `row-of-cards ${className || ""}`,
      style: {
        ...style
      },
      "data-testid": dataTestId,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "row-of-cards-grid", style: gridStyles, children: pagination.currentCards.map(
          (card, index) => renderCard(card, index)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
          "div",
          {
            className: "row-of-cards-pagination",
            style: paginationStyles,
            role: "navigation",
            "aria-label": "Cards pagination",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { style: pageInfoStyles, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                Typography,
                {
                  variant: "bodySmall",
                  color: "secondary",
                  style: {
                    fontFamily: typography.fontFamily.primary,
                    fontSize: "14px"
                  },
                  children: [
                    "Page ",
                    currentPage,
                    " of ",
                    pagination.totalPages
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { style: navButtonsStyles, children: [
                /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                  Button,
                  {
                    variant: "outlined",
                    size: "small",
                    onClick: handlePrevPage,
                    disabled: !pagination.hasPrevPage,
                    "aria-label": "Go to previous page",
                    style: navButtonStyles,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_phosphor_react17.CaretLeft, { size: 16 }),
                      "Previous"
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                  Button,
                  {
                    variant: "outlined",
                    size: "small",
                    onClick: handleNextPage,
                    disabled: !pagination.hasNextPage,
                    "aria-label": "Go to next page",
                    style: navButtonStyles,
                    children: [
                      "Next",
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_phosphor_react17.CaretRight, { size: 16 })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
var gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: spacing[6],
  marginBottom: spacing[8],
  padding: spacing[4]
};
var paginationStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${spacing[4]} ${spacing[6]}`,
  backgroundColor: colors.backgroundLight,
  border: `1px solid ${colors.border.light}`,
  borderRadius: radii.md,
  boxShadow: shadows.sm
};
var pageInfoStyles = {
  display: "flex",
  alignItems: "center"
};
var navButtonsStyles = {
  display: "flex",
  gap: spacing[3]
};
var navButtonStyles = {
  minWidth: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing[2]
};

// src/components/SearchFilters/SearchFilters.tsx
var import_react38 = require("react");
var import_phosphor_react18 = require("phosphor-react");
var import_jsx_runtime47 = require("react/jsx-runtime");
function SearchFilters({
  filters,
  values = {},
  onFiltersChange,
  mobileCollapsed = false,
  className,
  style,
  "data-testid": dataTestId
}) {
  const [isMobileOpen, setIsMobileOpen] = (0, import_react38.useState)(false);
  const [filterValues, setFilterValues] = (0, import_react38.useState)(values);
  (0, import_react38.useEffect)(() => {
    const initialValues = {};
    filters.forEach((filter) => {
      if (!filterValues[filter.id]) {
        switch (filter.type) {
          case "text":
          case "select":
            initialValues[filter.id] = "";
            break;
          case "checkbox":
            initialValues[filter.id] = [];
            break;
          case "dateRange":
            initialValues[filter.id] = { start: "", end: "" };
            break;
        }
      }
    });
    setFilterValues({ ...filterValues, ...initialValues });
  }, [filters]);
  const handleFilterChange = (filterId, value) => {
    const newValues = { ...filterValues, [filterId]: value };
    setFilterValues(newValues);
    onFiltersChange(newValues);
  };
  const handleClearAll = () => {
    const clearedValues = {};
    filters.forEach((filter) => {
      switch (filter.type) {
        case "text":
        case "select":
          clearedValues[filter.id] = "";
          break;
        case "checkbox":
          clearedValues[filter.id] = [];
          break;
        case "dateRange":
          clearedValues[filter.id] = { start: "", end: "" };
          break;
      }
    });
    setFilterValues(clearedValues);
    onFiltersChange(clearedValues);
  };
  const handleCheckboxChange = (filterId, optionValue, checked) => {
    const currentValues = filterValues[filterId] || [];
    const newValues = checked ? [...currentValues, optionValue] : currentValues.filter((v) => v !== optionValue);
    handleFilterChange(filterId, newValues);
  };
  const handleDateRangeChange = (filterId, field, value) => {
    const currentRange = filterValues[filterId] || { start: "", end: "" };
    const newRange = { ...currentRange, [field]: value };
    handleFilterChange(filterId, newRange);
  };
  const hasActiveFilters = Object.values(filterValues).some((value) => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return value.start || value.end;
    return value !== "";
  });
  const toggleMobileFilters = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  const renderFilter = (filter) => {
    const value = filterValues[filter.id];
    switch (filter.type) {
      case "text":
        return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: filterGroupStyles, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          Input,
          {
            label: filter.label,
            placeholder: filter.placeholder,
            value,
            onChange: (e) => handleFilterChange(filter.id, e.target.value),
            style: filterInputStyles,
            "aria-label": filter.label
          }
        ) }, filter.id);
      case "select":
        return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: filterGroupStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { style: filterLabelStyles, children: filter.label }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: selectContainerStyles, children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
              "select",
              {
                value,
                onChange: (e) => handleFilterChange(filter.id, e.target.value),
                style: selectStyles,
                "aria-label": filter.label,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("option", { value: "", children: [
                    "All ",
                    filter.label,
                    "s"
                  ] }),
                  filter.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: option.value, children: option.label }, option.value))
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_phosphor_react18.CaretDown, { size: 16, style: selectIconStyles })
          ] })
        ] }, filter.id);
      case "checkbox":
        return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: filterGroupStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Typography, { variant: "bodySmall", weight: "medium", style: filterLabelStyles, children: filter.label }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: checkboxContainerStyles, children: filter.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("label", { style: checkboxLabelStyles, children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              "input",
              {
                type: "checkbox",
                checked: value?.includes(option.value) || false,
                onChange: (e) => handleCheckboxChange(filter.id, option.value, e.target.checked),
                style: checkboxInputStyles
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { style: checkboxTextStyles, children: option.label })
          ] }, option.value)) })
        ] }, filter.id);
      case "dateRange":
        return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: filterGroupStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Typography, { variant: "bodySmall", weight: "medium", style: filterLabelStyles, children: filter.label }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: dateRangeContainerStyles, children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              Input,
              {
                type: "date",
                label: filter.startLabel || "Start Date",
                value: value?.start || "",
                onChange: (e) => handleDateRangeChange(filter.id, "start", e.target.value),
                style: dateInputStyles,
                "aria-label": filter.startLabel || "Start Date"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              Input,
              {
                type: "date",
                label: filter.endLabel || "End Date",
                value: value?.end || "",
                onChange: (e) => handleDateRangeChange(filter.id, "end", e.target.value),
                style: dateInputStyles,
                "aria-label": filter.endLabel || "End Date"
              }
            )
          ] })
        ] }, filter.id);
      default:
        return null;
    }
  };
  if (filters.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      "div",
      {
        className: `search-filters-container ${className || ""}`,
        style: getContainerStyles(style),
        "data-testid": dataTestId,
        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Typography, { variant: "body", color: "secondary", children: "No filters configured" })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    "div",
    {
      className: `search-filters-container ${className || ""}`,
      style: getContainerStyles(style),
      "data-testid": dataTestId,
      children: [
        mobileCollapsed && /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          Button,
          {
            variant: "outlined",
            onClick: toggleMobileFilters,
            "aria-label": "Toggle filters",
            style: mobileToggleStyles,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_phosphor_react18.FunnelSimple, { size: 16 }),
              "Filters",
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_phosphor_react18.CaretDown,
                {
                  size: 16,
                  style: {
                    transform: isMobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease"
                  }
                }
              )
            ]
          }
        ),
        (!mobileCollapsed || isMobileOpen) && /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "search-filters-content", style: filtersContentStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: filtersGridStyles, children: filters.map(renderFilter) }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: actionsStyles, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
            Button,
            {
              variant: "outlined",
              size: "small",
              onClick: handleClearAll,
              disabled: !hasActiveFilters,
              style: clearButtonStyles,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_phosphor_react18.X, { size: 16 }),
                "Clear All"
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
var getContainerStyles = (customStyle) => ({
  backgroundColor: colors.backgroundLight,
  border: `1px solid ${colors.border.light}`,
  borderRadius: radii.md,
  padding: spacing[6],
  boxShadow: shadows.sm,
  ...customStyle
});
var mobileToggleStyles = {
  width: "100%",
  marginBottom: spacing[4],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing[2]
};
var filtersContentStyles = {
  // Content styles handled by grid and individual filters
};
var filtersGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: spacing[6],
  marginBottom: spacing[6]
};
var filterGroupStyles = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[2]
};
var filterLabelStyles = {
  fontFamily: typography.fontFamily.primary,
  fontSize: "14px",
  fontWeight: typography.fontWeight.medium,
  color: colors.text.primary,
  marginBottom: spacing[1]
};
var filterInputStyles = {
  width: "100%"
};
var selectContainerStyles = {
  position: "relative",
  width: "100%"
};
var selectStyles = {
  width: "100%",
  padding: `${spacing[3]} ${spacing[4]}`,
  paddingRight: spacing[8],
  border: `1px solid ${colors.border.medium}`,
  borderRadius: radii.sm,
  backgroundColor: colors.backgroundLight,
  fontFamily: typography.fontFamily.primary,
  fontSize: "14px",
  color: colors.text.primary,
  appearance: "none",
  cursor: "pointer",
  transition: "border-color 0.2s ease"
};
var selectIconStyles = {
  position: "absolute",
  right: spacing[3],
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: colors.text.secondary
};
var checkboxContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: spacing[2]
};
var checkboxLabelStyles = {
  display: "flex",
  alignItems: "center",
  gap: spacing[2],
  cursor: "pointer",
  fontSize: "14px",
  color: colors.text.primary
};
var checkboxInputStyles = {
  width: "16px",
  height: "16px",
  accentColor: colors.primary
};
var checkboxTextStyles = {
  fontFamily: typography.fontFamily.primary,
  fontSize: "14px"
};
var dateRangeContainerStyles = {
  display: "flex",
  gap: spacing[3]
};
var dateInputStyles = {
  flex: 1
};
var actionsStyles = {
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: spacing[4],
  borderTop: `1px solid ${colors.border.light}`
};
var clearButtonStyles = {
  display: "flex",
  alignItems: "center",
  gap: spacing[2]
};

// src/components/Divider/Divider.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var Divider = ({
  orientation = "horizontal",
  variant = "solid",
  size = "md",
  color = "gray",
  label,
  labelPosition = "center",
  width,
  height,
  spacing: spacingProp = "md",
  className = "",
  style = {},
  "data-testid": dataTestId,
  ...dataAttributes
}) => {
  const baseClasses = ["cria-divider"];
  if (orientation === "vertical") {
    baseClasses.push("cria-divider--vertical");
  }
  baseClasses.push(`cria-divider--${variant}`);
  baseClasses.push(`cria-divider--${size}`);
  baseClasses.push(`cria-divider--${color}`);
  baseClasses.push(`cria-divider--spacing-${spacingProp}`);
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const inlineStyles = {
    ...style
  };
  if (orientation === "horizontal") {
    if (width !== void 0) {
      inlineStyles.width = typeof width === "number" ? `${width}px` : width;
    }
  } else {
    if (height !== void 0) {
      inlineStyles.height = typeof height === "number" ? `${height}px` : height;
    }
  }
  const dataProps = {
    "data-testid": dataTestId
  };
  Object.entries(dataAttributes).forEach(([key, value]) => {
    if (key.startsWith("data-")) {
      dataProps[key] = value;
    }
  });
  if (label && orientation === "horizontal") {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
      "div",
      {
        className: `${classes} cria-divider--with-label`,
        style: inlineStyles,
        role: "separator",
        "aria-orientation": orientation,
        ...dataProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "cria-divider__line cria-divider__line--before" }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: `cria-divider__label cria-divider__label--${labelPosition}`, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "cria-divider__line cria-divider__line--after" })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    "div",
    {
      className: classes,
      style: inlineStyles,
      role: "separator",
      "aria-orientation": orientation,
      ...dataProps
    }
  );
};

// src/components/Grid/Grid.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var Grid = ({
  columns = 12,
  gap = "md",
  align = "stretch",
  justify = "start",
  autoFit = false,
  autoFill = false,
  minColumnWidth = "250px",
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-grid"];
  baseClasses.push(`cria-grid--gap-${gap}`);
  baseClasses.push(`cria-grid--align-${align}`);
  baseClasses.push(`cria-grid--justify-${justify}`);
  if (typeof columns === "number") {
    baseClasses.push(`cria-grid--cols-${columns}`);
  } else {
    if (columns.sm !== void 0) {
      baseClasses.push(`cria-grid--cols-sm-${columns.sm}`);
    }
    if (columns.md !== void 0) {
      baseClasses.push(`cria-grid--cols-md-${columns.md}`);
    }
    if (columns.lg !== void 0) {
      baseClasses.push(`cria-grid--cols-lg-${columns.lg}`);
    }
    if (columns.xl !== void 0) {
      baseClasses.push(`cria-grid--cols-xl-${columns.xl}`);
    }
  }
  if (autoFit) {
    baseClasses.push("cria-grid--auto-fit");
  }
  if (autoFill) {
    baseClasses.push("cria-grid--auto-fill");
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const inlineStyles = {
    ...style
  };
  if (autoFit || autoFill) {
    const templateType = autoFit ? "auto-fit" : "auto-fill";
    inlineStyles.gridTemplateColumns = `repeat(${templateType}, minmax(${minColumnWidth}, 1fr))`;
  }
  if (!autoFit && !autoFill && minColumnWidth !== "250px") {
    inlineStyles.gridTemplateColumns = `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    "div",
    {
      className: classes,
      style: inlineStyles,
      ...props,
      children
    }
  );
};

// src/components/Grid/Row.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var Row = ({
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = true,
  direction = "row",
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-row"];
  baseClasses.push(`cria-row--gap-${gap}`);
  baseClasses.push(`cria-row--align-${align}`);
  baseClasses.push(`cria-row--justify-${justify}`);
  if (wrap) {
    baseClasses.push("cria-row--wrap");
  } else {
    baseClasses.push("cria-row--no-wrap");
  }
  baseClasses.push(`cria-row--direction-${direction}`);
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "div",
    {
      className: classes,
      style,
      ...props,
      children
    }
  );
};

// src/components/Grid/Column.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
var Column = ({
  span = 12,
  offset = 0,
  align = "stretch",
  justify = "start",
  auto = false,
  full = false,
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-column"];
  if (typeof span === "number") {
    baseClasses.push(`cria-column--span-${span}`);
  } else {
    if (span.sm !== void 0) {
      baseClasses.push(`cria-column--span-sm-${span.sm}`);
    }
    if (span.md !== void 0) {
      baseClasses.push(`cria-column--span-md-${span.md}`);
    }
    if (span.lg !== void 0) {
      baseClasses.push(`cria-column--span-lg-${span.lg}`);
    }
    if (span.xl !== void 0) {
      baseClasses.push(`cria-column--span-xl-${span.xl}`);
    }
  }
  if (typeof offset === "number" && offset > 0) {
    baseClasses.push(`cria-column--offset-${offset}`);
  } else if (typeof offset === "object") {
    if (offset.sm !== void 0) {
      baseClasses.push(`cria-column--offset-sm-${offset.sm}`);
    }
    if (offset.md !== void 0) {
      baseClasses.push(`cria-column--offset-md-${offset.md}`);
    }
    if (offset.lg !== void 0) {
      baseClasses.push(`cria-column--offset-lg-${offset.lg}`);
    }
    if (offset.xl !== void 0) {
      baseClasses.push(`cria-column--offset-xl-${offset.xl}`);
    }
  }
  baseClasses.push(`cria-column--align-${align}`);
  baseClasses.push(`cria-column--justify-${justify}`);
  if (auto) {
    baseClasses.push("cria-column--auto");
  }
  if (full) {
    baseClasses.push("cria-column--full");
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "div",
    {
      className: classes,
      style,
      ...props,
      children
    }
  );
};

// src/components/Container/Container.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
var Container = ({
  maxWidth = "lg",
  padding = "md",
  margin = "none",
  center = false,
  fluid = false,
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-container"];
  if (typeof maxWidth === "string" && !["sm", "md", "lg", "xl", "2xl", "full"].includes(maxWidth)) {
  } else {
    baseClasses.push(`cria-container--max-width-${maxWidth}`);
  }
  if (typeof padding === "string") {
    baseClasses.push(`cria-container--padding-${padding}`);
  } else {
    if (padding.sm !== void 0) {
      baseClasses.push(`cria-container--padding-sm-${padding.sm}`);
    }
    if (padding.md !== void 0) {
      baseClasses.push(`cria-container--padding-md-${padding.md}`);
    }
    if (padding.lg !== void 0) {
      baseClasses.push(`cria-container--padding-lg-${padding.lg}`);
    }
  }
  if (typeof margin === "string") {
    baseClasses.push(`cria-container--margin-${margin}`);
  } else {
    if (margin.sm !== void 0) {
      baseClasses.push(`cria-container--margin-sm-${margin.sm}`);
    }
    if (margin.md !== void 0) {
      baseClasses.push(`cria-container--margin-md-${margin.md}`);
    }
    if (margin.lg !== void 0) {
      baseClasses.push(`cria-container--margin-lg-${margin.lg}`);
    }
  }
  if (center) {
    baseClasses.push("cria-container--center");
  }
  if (fluid) {
    baseClasses.push("cria-container--fluid");
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const inlineStyles = {
    ...style
  };
  if (typeof maxWidth === "string" && !["sm", "md", "lg", "xl", "2xl", "full"].includes(maxWidth)) {
    inlineStyles.maxWidth = maxWidth;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    "div",
    {
      className: classes,
      style: inlineStyles,
      ...props,
      children
    }
  );
};

// src/components/Container/Section.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var Section = ({
  variant = "default",
  size = "md",
  padding = "lg",
  margin = "md",
  fullHeight = false,
  backgroundColor = "transparent",
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-section"];
  baseClasses.push(`cria-section--${variant}`);
  baseClasses.push(`cria-section--size-${size}`);
  if (typeof padding === "string") {
    baseClasses.push(`cria-section--padding-${padding}`);
  } else {
    if (padding.sm !== void 0) {
      baseClasses.push(`cria-section--padding-sm-${padding.sm}`);
    }
    if (padding.md !== void 0) {
      baseClasses.push(`cria-section--padding-md-${padding.md}`);
    }
    if (padding.lg !== void 0) {
      baseClasses.push(`cria-section--padding-lg-${padding.lg}`);
    }
  }
  if (typeof margin === "string") {
    baseClasses.push(`cria-section--margin-${margin}`);
  } else {
    if (margin.sm !== void 0) {
      baseClasses.push(`cria-section--margin-sm-${margin.sm}`);
    }
    if (margin.md !== void 0) {
      baseClasses.push(`cria-section--margin-md-${margin.md}`);
    }
    if (margin.lg !== void 0) {
      baseClasses.push(`cria-section--margin-lg-${margin.lg}`);
    }
  }
  if (fullHeight) {
    baseClasses.push("cria-section--full-height");
  }
  if (["primary", "secondary", "gray", "white", "transparent"].includes(backgroundColor)) {
    baseClasses.push(`cria-section--bg-${backgroundColor}`);
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const inlineStyles = {
    ...style
  };
  if (!["primary", "secondary", "gray", "white", "transparent"].includes(backgroundColor)) {
    inlineStyles.backgroundColor = backgroundColor;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    "section",
    {
      className: classes,
      style: inlineStyles,
      ...props,
      children
    }
  );
};

// src/components/Scrollbar/Scrollbar.tsx
var import_react39 = require("react");
var import_jsx_runtime54 = require("react/jsx-runtime");
var Scrollbar = ({
  size = "md",
  theme = "light",
  smooth = false,
  horizontal = false,
  vertical = true,
  height,
  width,
  autoHeight = false,
  trackColor,
  thumbColor,
  hoverColor,
  fade = false,
  onScroll,
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-scrollbar"];
  baseClasses.push(`cria-scrollbar--size-${size}`);
  baseClasses.push(`cria-scrollbar--theme-${theme}`);
  if (smooth) {
    baseClasses.push("cria-scrollbar--smooth");
  }
  if (horizontal) {
    baseClasses.push("cria-scrollbar--horizontal");
  }
  if (vertical) {
    baseClasses.push("cria-scrollbar--vertical");
  }
  if (autoHeight) {
    baseClasses.push("cria-scrollbar--auto-height");
  }
  if (fade) {
    baseClasses.push("cria-scrollbar--fade");
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const inlineStyles = {
    ...style
  };
  if (height !== void 0) {
    inlineStyles.height = typeof height === "number" ? `${height}px` : height;
  }
  if (width !== void 0) {
    inlineStyles.width = typeof width === "number" ? `${width}px` : width;
  }
  if (trackColor) {
    inlineStyles["--scrollbar-track-color"] = trackColor;
  }
  if (thumbColor) {
    inlineStyles["--scrollbar-thumb-color"] = thumbColor;
  }
  if (hoverColor) {
    inlineStyles["--scrollbar-hover-color"] = hoverColor;
  }
  const handleScroll = (0, import_react39.useCallback)((event) => {
    if (onScroll) {
      onScroll(event);
    }
  }, [onScroll]);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    "div",
    {
      className: classes,
      style: inlineStyles,
      onScroll: handleScroll,
      ...props,
      children
    }
  );
};

// src/components/Footer/Footer.tsx
var import_react40 = __toESM(require("react"), 1);
var import_jsx_runtime55 = require("react/jsx-runtime");
var Footer = ({
  variant = "default",
  size = "md",
  sticky = false,
  fixed = false,
  border = false,
  shadow = false,
  fullWidth = false,
  responsive = false,
  copyright,
  links,
  socialLinks,
  onLinkClick,
  onSocialClick,
  className = "",
  style = {},
  children,
  ...props
}) => {
  const baseClasses = ["cria-footer"];
  baseClasses.push(`cria-footer--${variant}`);
  baseClasses.push(`cria-footer--size-${size}`);
  if (sticky) {
    baseClasses.push("cria-footer--sticky");
  }
  if (fixed) {
    baseClasses.push("cria-footer--fixed");
  }
  if (border) {
    baseClasses.push("cria-footer--border");
  }
  if (shadow) {
    baseClasses.push("cria-footer--shadow");
  }
  if (fullWidth) {
    baseClasses.push("cria-footer--full-width");
  }
  if (responsive) {
    baseClasses.push("cria-footer--responsive");
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const handleLinkClick = (0, import_react40.useCallback)((href, label, event) => {
    if (onLinkClick) {
      event.preventDefault();
      onLinkClick(href, label);
    }
  }, [onLinkClick]);
  const handleSocialClick = (0, import_react40.useCallback)((href, label, icon, event) => {
    if (onSocialClick) {
      event.preventDefault();
      onSocialClick(href, label, icon);
    }
  }, [onSocialClick]);
  const renderLinks = () => {
    if (!links) return null;
    if (import_react40.default.isValidElement(links)) {
      return links;
    }
    if (Array.isArray(links)) {
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("nav", { className: "cria-footer__links", "aria-label": "Footer navigation", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("ul", { children: links.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        "a",
        {
          href: link.href,
          target: link.target || "_self",
          rel: link.rel,
          onClick: (e) => handleLinkClick(link.href, link.label, e),
          className: "cria-footer__link",
          children: link.label
        }
      ) }, index)) }) });
    }
    return null;
  };
  const renderSocialLinks = () => {
    if (!socialLinks) return null;
    if (import_react40.default.isValidElement(socialLinks)) {
      return socialLinks;
    }
    if (Array.isArray(socialLinks)) {
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("nav", { className: "cria-footer__social", "aria-label": "Social media links", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("ul", { children: socialLinks.map((socialLink, index) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        "a",
        {
          href: socialLink.href,
          target: socialLink.target || "_blank",
          rel: socialLink.rel || "noopener noreferrer",
          onClick: (e) => handleSocialClick(socialLink.href, socialLink.label, socialLink.icon, e),
          className: "cria-footer__social-link",
          "aria-label": socialLink.label,
          children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: `cria-footer__social-icon cria-footer__social-icon--${socialLink.icon}`, children: socialLink.icon })
        }
      ) }, index)) }) });
    }
    return null;
  };
  const renderCopyright = () => {
    if (!copyright) return null;
    if (import_react40.default.isValidElement(copyright)) {
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "cria-footer__copyright", children: copyright });
    }
    if (typeof copyright === "string") {
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "cria-footer__copyright", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { children: copyright }) });
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    "footer",
    {
      className: classes,
      style,
      ...props,
      children: [
        children && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "cria-footer__content", children }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "cria-footer__sections", children: [
          renderLinks(),
          renderSocialLinks(),
          renderCopyright()
        ] })
      ]
    }
  );
};

// src/components/MegaMenu/MegaMenu.tsx
var import_react41 = require("react");
var import_jsx_runtime56 = require("react/jsx-runtime");
var MegaMenu = ({
  variant = "default",
  position = "static",
  size = "md",
  alignment = "left",
  border = false,
  shadow = false,
  fullWidth = false,
  loading = false,
  items = [],
  logo,
  showSearch = false,
  searchPlaceholder = "Search...",
  onSearch,
  ctaButton,
  showMobileToggle = false,
  trigger,
  onItemClick,
  className = "",
  style = {},
  children,
  ...props
}) => {
  const [activeDropdown, setActiveDropdown] = (0, import_react41.useState)(null);
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react41.useState)(false);
  const [searchQuery, setSearchQuery] = (0, import_react41.useState)("");
  const megaMenuRef = (0, import_react41.useRef)(null);
  const timeoutRef = (0, import_react41.useRef)(null);
  const baseClasses = ["cria-mega-menu"];
  baseClasses.push(`cria-mega-menu--${variant}`);
  baseClasses.push(`cria-mega-menu--position-${position}`);
  baseClasses.push(`cria-mega-menu--size-${size}`);
  baseClasses.push(`cria-mega-menu--alignment-${alignment}`);
  if (border) {
    baseClasses.push("cria-mega-menu--border");
  }
  if (shadow) {
    baseClasses.push("cria-mega-menu--shadow");
  }
  if (fullWidth) {
    baseClasses.push("cria-mega-menu--full-width");
  }
  if (loading) {
    baseClasses.push("cria-mega-menu--loading");
  }
  if (mobileMenuOpen) {
    baseClasses.push("cria-mega-menu--mobile-open");
  }
  if (className) {
    baseClasses.push(className);
  }
  const classes = baseClasses.join(" ");
  const handleItemClick = (0, import_react41.useCallback)((item, event) => {
    if (onItemClick) {
      event.preventDefault();
      onItemClick(item.href, item.label, item);
    }
  }, [onItemClick]);
  const handleSearchChange = (0, import_react41.useCallback)((event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  }, [onSearch]);
  const handleMouseEnter = (0, import_react41.useCallback)((itemLabel) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(itemLabel);
  }, []);
  const handleMouseLeave = (0, import_react41.useCallback)(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);
  const handleMobileToggle = (0, import_react41.useCallback)(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);
  const handleCtaClick = (0, import_react41.useCallback)((event) => {
    if (ctaButton?.onClick) {
      event.preventDefault();
      ctaButton.onClick();
    }
  }, [ctaButton]);
  (0, import_react41.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const renderMenuItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const hasCustomDropdown = !!item.customDropdown;
    const showDropdown = activeDropdown === item.label && (hasChildren || hasCustomDropdown);
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("li", { className: `cria-mega-menu__item cria-mega-menu__item--level-${level}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
        "a",
        {
          href: item.href,
          target: item.target || "_self",
          rel: item.rel,
          onClick: (e) => handleItemClick(item, e),
          onMouseEnter: () => (hasChildren || hasCustomDropdown) && handleMouseEnter(item.label),
          onMouseLeave: hasChildren || hasCustomDropdown ? handleMouseLeave : void 0,
          className: `cria-mega-menu__link ${hasChildren || hasCustomDropdown ? "cria-mega-menu__link--has-dropdown" : ""}`,
          children: [
            item.label,
            (hasChildren || hasCustomDropdown) && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "cria-mega-menu__dropdown-arrow", "aria-hidden": "true", children: "\u25BC" })
          ]
        }
      ),
      (hasChildren || hasCustomDropdown) && showDropdown && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
        "div",
        {
          className: `cria-mega-menu__dropdown cria-mega-menu__dropdown--level-${level}`,
          onMouseEnter: () => handleMouseEnter(item.label),
          onMouseLeave: handleMouseLeave,
          style: { display: "block" },
          children: hasCustomDropdown ? item.customDropdown : /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("ul", { className: "cria-mega-menu__dropdown-list", children: item.children?.map((child) => renderMenuItem(child, level + 1)) })
        }
      )
    ] }, item.label);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
    "nav",
    {
      ref: megaMenuRef,
      className: classes,
      style,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "cria-mega-menu__container", children: [
          logo && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__logo", children: logo }),
          trigger && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__trigger", children: trigger }),
          items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("ul", { className: "cria-mega-menu__list", children: items.map((item) => renderMenuItem(item)) }),
          showSearch && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__search", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "input",
            {
              type: "text",
              placeholder: searchPlaceholder,
              value: searchQuery,
              onChange: handleSearchChange,
              className: "cria-mega-menu__search-input"
            }
          ) }),
          ctaButton && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__cta", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "a",
            {
              href: ctaButton.href || "#",
              onClick: handleCtaClick,
              className: `cria-mega-menu__cta-button cria-mega-menu__cta-button--${ctaButton.variant || "primary"} cria-mega-menu__cta-button--${ctaButton.size || "md"}`,
              children: ctaButton.label
            }
          ) }),
          showMobileToggle && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "button",
            {
              onClick: handleMobileToggle,
              className: "cria-mega-menu__mobile-toggle",
              "aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
              "aria-expanded": mobileMenuOpen,
              children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "cria-mega-menu__mobile-toggle-icon", children: mobileMenuOpen ? "\u2715" : "\u2630" })
            }
          )
        ] }),
        showMobileToggle && mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__mobile-menu", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "cria-mega-menu__mobile-menu-content", children: [
          items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("ul", { className: "cria-mega-menu__mobile-list", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("li", { className: "cria-mega-menu__mobile-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "a",
              {
                href: item.href,
                target: item.target || "_self",
                rel: item.rel,
                onClick: (e) => handleItemClick(item, e),
                className: "cria-mega-menu__mobile-link",
                children: item.label
              }
            ),
            item.children && item.children.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("ul", { className: "cria-mega-menu__mobile-sublist", children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("li", { className: "cria-mega-menu__mobile-subitem", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "a",
              {
                href: child.href,
                target: child.target || "_self",
                rel: child.rel,
                onClick: (e) => handleItemClick(child, e),
                className: "cria-mega-menu__mobile-sublink",
                children: child.label
              }
            ) }, child.label)) })
          ] }, item.label)) }),
          showSearch && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__mobile-search", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "input",
            {
              type: "text",
              placeholder: searchPlaceholder,
              value: searchQuery,
              onChange: handleSearchChange,
              className: "cria-mega-menu__mobile-search-input"
            }
          ) }),
          ctaButton && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__mobile-cta", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "a",
            {
              href: ctaButton.href || "#",
              onClick: handleCtaClick,
              className: "cria-mega-menu__mobile-cta-button",
              children: ctaButton.label
            }
          ) })
        ] }) }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__loading-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__loading-spinner", "aria-label": "Loading", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { children: "Loading..." }) }) }),
        children && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cria-mega-menu__content", children })
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Avatar,
  AvatarUpload,
  Badge,
  Button,
  ButtonDemo,
  Card,
  CardContent,
  CardDemo,
  CardFooter,
  CardHeader,
  CardSelector,
  Chat,
  Checkbox,
  Column,
  CommentsSection,
  Container,
  CriaClassroomFutureEventCard,
  CriaClassroomTrilhaCard,
  CriaCourseCard,
  CriaLessonCard,
  CriaLessonCardSmall,
  CriaTextAlert,
  CriaTextBody1,
  CriaTextBody1Inverse,
  CriaTextBody2,
  CriaTextHeadline1,
  CriaTextHeadline2,
  CriaTextImportant,
  CriaTextTitle1,
  CriaTextTitle2,
  DatePicker,
  Divider,
  Dropdown,
  DropdownItem,
  FileUpload,
  FloatingSidebar,
  Footer,
  Grid,
  Input,
  LineChart,
  MegaMenu,
  Modal,
  Navigation,
  NavigationSidebar,
  PageLoadingProgress,
  Pagination,
  PieChart,
  PricingPage,
  ProgressBar,
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
  Row,
  RowOfCards,
  Scrollbar,
  SearchFilters,
  Section,
  ShimmerSkeleton,
  Sidebar,
  Slider,
  Snackbar,
  Stepper,
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
  VerticalTabs,
  colors,
  cssVariables,
  radii,
  shadows,
  spacing,
  typography
});
