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
  AgentDev: () => AgentDev_default,
  AreaChart: () => AreaChart,
  Avatar: () => Avatar,
  AvatarUpload: () => AvatarUpload,
  AvatarWithName: () => AvatarWithName,
  Backgrounds: () => Backgrounds,
  Badge: () => Badge,
  BarChart: () => BarChart,
  BaseChart: () => BaseChart,
  Button: () => Button,
  ButtonDemo: () => ButtonDemo,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDemo: () => CardDemo,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  Carousel: () => Carousel,
  Changelog: () => Changelog_default,
  Chat: () => Chat,
  Checkbox: () => Checkbox,
  Column: () => Column,
  ComposedChart: () => ComposedChart,
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
  DonutChart: () => DonutChart,
  Drawer: () => Drawer,
  Dropdown: () => Dropdown,
  DropdownItem: () => DropdownItem,
  EmptyState: () => EmptyState,
  FileUpload: () => FileUpload,
  Footer: () => Footer,
  Grid: () => Grid,
  Input: () => Input,
  LineChart: () => LineChart,
  MegaMenu: () => MegaMenu,
  Modal: () => Modal,
  Navigation: () => Navigation,
  NavigationSidebar: () => Sidebar,
  Notification: () => Notification,
  NotificationCenter: () => NotificationCenter,
  Pagination: () => Pagination,
  PieChart: () => PieChart,
  ProgressBar: () => ProgressBar,
  RadarChart: () => RadarChart,
  RadialProgressChart: () => RadialProgressChart,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  RadioGroupLabel: () => RadioGroupLabel,
  Row: () => Row,
  RowOfCards: () => RowOfCards,
  ScatterChart: () => ScatterChart,
  Scrollbar: () => Scrollbar,
  SearchFilters: () => SearchFilters,
  Section: () => Section,
  ShimmerSkeleton: () => ShimmerSkeleton,
  Sidebar: () => Sidebar2,
  Snackbar: () => Snackbar,
  StackedBarChart: () => StackedBarChart,
  StatisticMetricCard: () => StatisticMetricCard,
  Stepper: () => Stepper,
  StepperStep: () => StepperStep,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  TagChip: () => TagChip,
  TextBody: () => TextBody,
  TextContent: () => TextContent,
  TextContentImportant: () => TextContentImportant,
  TextContentTitle: () => TextContentTitle,
  Textarea: () => Textarea,
  Timeline: () => Timeline,
  TimelineItem: () => TimelineItem,
  Tooltip: () => Tooltip,
  Topbar: () => Topbar,
  Typography: () => Typography,
  TypographyDemo: () => TypographyDemo,
  Version: () => Version,
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

// src/components/Avatar/AvatarWithName.tsx
var import_react4 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var AvatarWithName = (0, import_react4.forwardRef)(({
  avatarProps = {},
  name,
  size = "md",
  variant = "default",
  clickable = false,
  onClick,
  className = "",
  style,
  ...props
}, ref) => {
  const sizeConfig = {
    sm: {
      padding: `${spacing[2]} ${spacing[3]}`,
      avatarSize: "sm",
      gap: spacing[2],
      fontSize: "14px",
      borderRadius: radii.full,
      minHeight: "32px"
    },
    md: {
      padding: `${spacing[2]} ${spacing[3]}`,
      avatarSize: "md",
      gap: spacing[3],
      fontSize: "16px",
      borderRadius: radii.full,
      minHeight: "40px"
    },
    lg: {
      padding: `${spacing[3]} ${spacing[4]}`,
      avatarSize: "lg",
      gap: spacing[3],
      fontSize: "18px",
      borderRadius: radii.full,
      minHeight: "48px"
    }
  };
  const config = sizeConfig[size];
  const handleClick = (event) => {
    if (clickable && onClick) {
      onClick(event);
    }
  };
  const handleKeyDown = (event) => {
    if (clickable && onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick(event);
    }
  };
  const componentClasses = [
    "avatar-with-name",
    `avatar-with-name--${size}`,
    `avatar-with-name--${variant}`,
    clickable && "avatar-with-name--clickable",
    className
  ].filter(Boolean).join(" ");
  const getContainerStyles2 = () => {
    const baseStyles = {
      display: "flex",
      alignItems: "center",
      gap: config.gap,
      padding: config.padding,
      borderRadius: config.borderRadius,
      minHeight: config.minHeight,
      cursor: clickable ? "pointer" : "default",
      transition: "all 0.2s ease",
      border: "none",
      background: "transparent",
      width: "fit-content",
      ...style
    };
    switch (variant) {
      case "outlined":
        return {
          ...baseStyles,
          border: `1px solid ${colors.gray[200]}`,
          backgroundColor: colors.white
          // Hover styles handled by CSS classes
        };
      case "filled":
        return {
          ...baseStyles,
          backgroundColor: colors.gray[50],
          border: `1px solid ${colors.gray[100]}`
          // Hover styles handled by CSS classes
        };
      case "default":
      default:
        return {
          ...baseStyles,
          backgroundColor: "transparent"
          // Hover styles handled by CSS classes
        };
    }
  };
  const containerStyles = getContainerStyles2();
  const ariaLabel = clickable ? `Click to interact with ${name}` : name;
  const tabIndex = clickable ? 0 : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      ref,
      className: componentClasses,
      style: containerStyles,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: clickable ? "button" : void 0,
      "aria-label": ariaLabel,
      tabIndex,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Avatar,
          {
            ...avatarProps,
            size: config.avatarSize,
            name
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Typography_default,
          {
            variant: "body",
            style: {
              fontSize: config.fontSize,
              fontWeight: 500,
              color: colors.gray[700],
              lineHeight: 1.4,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "200px"
              // Prevent extremely long names from breaking layout
            },
            children: name
          }
        )
      ]
    }
  );
});
AvatarWithName.displayName = "AvatarWithName";

// src/components/Badge/Badge.tsx
var import_react5 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  const displayContent = (0, import_react5.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
        leftIcon && !dot && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "cria-badge__icon cria-badge__icon--left", "aria-hidden": "true", children: leftIcon }),
        !dot && displayContent && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "cria-badge__content", children: displayContent }),
        rightIcon && !dot && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "cria-badge__icon cria-badge__icon--right", "aria-hidden": "true", children: rightIcon })
      ]
    }
  );
};

// src/components/Button/Button.tsx
var import_react6 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var Button = import_react6.default.forwardRef(({
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "button",
    {
      ref,
      className: classes,
      style: buttonStyles,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { style: { opacity: loading ? 0 : 1, display: "flex", alignItems: "center", gap: spacing[2] }, children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: rightIcon })
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
var import_react7 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var ButtonDemo = () => {
  const [loading, setLoading] = (0, import_react7.useState)(false);
  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Typography, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Button Demo" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { size: "sm", children: "Pequeno" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { size: "md", children: "M\xE9dio" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { size: "lg", children: "Grande" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Estados" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { children: "Normal" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { loading: true, children: "Carregando" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { disabled: true, children: "Desabilitado" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { loading, onClick: handleLoadingClick, children: "Clique para Carregar" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Com \xCDcones" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { leftIcon: "\u2190", children: "Voltar" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { rightIcon: "\u2192", children: "Pr\xF3ximo" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { leftIcon: "\u2605", rightIcon: "\u2605", children: "Estrela" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { leftIcon: "\u{1F4E7}", children: "Email" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Largura Completa" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { fullWidth: true, children: "Bot\xE3o de Largura Completa" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "outline", fullWidth: true, children: "Contorno de Largura Completa" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Efeitos de Hover" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { style: { fontFamily: "var(--cria-font-family)", color: "#6B7280", marginBottom: "16px", fontSize: "14px" }, children: "Passe o mouse sobre os bot\xF5es para ver os efeitos de hover" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Exemplos Interativos" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { onClick: () => alert("Prim\xE1rio clicado!"), children: "Clique em Mim" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "secondary", onClick: () => console.log("Secund\xE1rio clicado!"), children: "Log no Console" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "outline", onClick: () => window.open("https://example.com", "_blank"), children: "Link Externo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Acessibilidade" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { "aria-label": "Fechar di\xE1logo", children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { "aria-describedby": "help-text", children: "Ajuda" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { disabled: true, "aria-label": "Esta a\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel", children: "Indispon\xEDvel" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { id: "help-text", style: { fontSize: "14px", color: "#6B7280", marginTop: "8px" }, children: "Este bot\xE3o fornece informa\xE7\xF5es de ajuda adicionais." })
    ] })
  ] });
};

// src/components/Card/Card.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_react10 = require("react");

// src/components/CriaLessonCardSmall/CriaLessonCardSmall.tsx
var import_react8 = require("react");
var import_phosphor_react2 = require("phosphor-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
          position: "relative",
          width: "100%",
          height: "140px",
          background: `linear-gradient(135deg, ${colors.gray[100]} 0%, ${colors.gray[200]} 100%)`,
          overflow: "visible"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
          } }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
            position: "absolute",
            top: spacing[2],
            right: spacing[2],
            zIndex: 10
          }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                import_phosphor_react2.Check,
                {
                  size: completed ? 16 : 14,
                  color: completed ? colors.white : colors.gray[400],
                  weight: "bold"
                }
              )
            }
          ) }),
          toolIconUrl && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
            position: "absolute",
            bottom: "-20px",
            left: spacing[4],
            zIndex: 30
          }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`,
          zIndex: 10,
          paddingTop: toolIconUrl ? spacing[6] : spacing[2]
          // Adjust for tool icon
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { marginBottom: spacing[2] }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: spacing[2] }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[1] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.Clock, { size: 12, color: colors.gray[500] }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
                width: lesson.instructors && lesson.instructors.length > 0 ? "80px" : "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                justifyContent: "flex-end"
              }, children: lesson.instructors && lesson.instructors.length > 0 ? (
                // Stacked avatars for multiple instructors
                lesson.instructors.slice(0, 3).map((instructor, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  "div",
                  {
                    onClick: () => onInstructorClick?.(instructor),
                    style: {
                      cursor: onInstructorClick ? "pointer" : "default",
                      position: "absolute",
                      right: `${index * 8}px`,
                      zIndex: 3 - index
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  "div",
                  {
                    onClick: handleInstructorClick,
                    style: {
                      cursor: onInstructorClick ? "pointer" : "default",
                      position: "absolute",
                      right: "0px"
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: "0px"
                }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.User, { size: 16, color: colors.white }) })
              ) })
            ] })
          ] })
        ] })
      ]
    }
  );
};

// src/components/CriaLessonCard/CriaLessonCard.tsx
var import_react9 = require("react");
var import_phosphor_react3 = require("phosphor-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var CriaLessonCard = ({
  lesson,
  onLessonClick,
  className = "",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = (0, import_react9.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react9.useState)(false);
  const handleCardClick = (0, import_react9.useCallback)(() => {
    onLessonClick?.(lesson);
  }, [lesson, onLessonClick]);
  const handleInstructorClick = (0, import_react9.useCallback)((e) => {
    e.stopPropagation();
  }, []);
  const cardClasses = [
    "cria-lesson-card",
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
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
        lesson.toolIconText && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_phosphor_react3.Clock, { size: 16, color: colors.gray[600], style: { marginRight: spacing[1] } }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: { width: "25px", height: "25px" }, children: lesson.instructor ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "div",
                {
                  onClick: handleInstructorClick,
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
              ) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_phosphor_react3.User, { size: 16, color: colors.white })
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};

// src/components/Card/demo.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var CardDemo = () => {
  const [completedLessons, setCompletedLessons] = (0, import_react10.useState)(/* @__PURE__ */ new Set(["1", "3", "6"]));
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
      category: "Frontend",
      instructor: {
        id: "3",
        name: "Mike Johnson",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "4",
      slug: "git-workflow",
      title: "Git Workflow Best Practices",
      thumbnailUrl: "https://images.unsplash.com/photo-1584949080480-fd112f687692?w=400&h=200&fit=crop",
      duration: "30min",
      category: "DevOps",
      instructor: {
        id: "4",
        name: "Emma Davis",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "5",
      slug: "vscode-tips",
      title: "VS Code Productivity Tips",
      thumbnailUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop",
      duration: "12min",
      category: "Tools",
      instructor: {
        id: "5",
        name: "Chris Evans",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "6",
      slug: "design-principles",
      title: "Design Principles for Developers",
      thumbnailUrl: "https://images.unsplash.com/photo-1504384764586-bb4be8f53b13?w=400&h=200&fit=crop",
      duration: "18min",
      category: "Design",
      instructor: {
        id: "6",
        name: "Olivia White",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "7",
      slug: "nodejs-backend",
      title: "Building REST APIs with Node.js",
      thumbnailUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
      duration: "30min",
      category: "Backend",
      instructor: {
        id: "7",
        name: "Sarah Wilson",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "8",
      slug: "database-design",
      title: "Database Design Principles",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      duration: "35min",
      category: "Database",
      instructor: {
        id: "8",
        name: "David Brown",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
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
      slug: "react-advanced",
      title: "Advanced React Patterns",
      description: "Dive deep into advanced React concepts like render props, HOCs, and custom hooks for building scalable applications.",
      thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      duration: "45min",
      category: "Frontend",
      progress: 75,
      completed: false,
      instructor: {
        id: "1",
        name: "John Doe",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "2",
      slug: "state-management",
      title: "State Management with Redux Toolkit",
      description: "Learn modern state management using Redux Toolkit, including RTK Query for data fetching and caching.",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      duration: "60min",
      category: "Frontend",
      progress: 100,
      completed: true,
      instructor: {
        id: "2",
        name: "Jane Smith",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      id: "3",
      slug: "performance-optimization",
      title: "React Performance Optimization",
      description: "Techniques and best practices to optimize the rendering performance of your React applications.",
      thumbnailUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=300&fit=crop",
      duration: "30min",
      category: "Performance",
      progress: 50,
      completed: false,
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { padding: "24px", maxWidth: "1000px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Lesson Cards" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaLessonCardSmall - Lesson Cards" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Specialized lesson card component with completion tracking, instructor details, and interactive elements. Features examples with different instructors across various categories, including stacked instructor avatars for collaborative lessons." }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleLessons.slice(0, 4).map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        CriaLessonCardSmall,
        {
          lesson,
          completed: completedLessons.has(lesson.id),
          onLessonClick: handleLessonClick,
          onToggleCompletion: handleToggleCompletion,
          onInstructorClick: handleInstructorClick
        },
        lesson.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "CriaLessonCard - Detailed Lesson Cards" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "body", style: { marginBottom: "24px", color: "#6b7280" }, children: "Large, detailed lesson card component with tool icons, descriptions, and comprehensive lesson information. Perfect for showcasing detailed course content with rich visual elements." }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
        marginBottom: "24px",
        maxWidth: "1200px"
      }, children: sampleCriaLessons.slice(0, 2).map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        CriaLessonCard,
        {
          lesson,
          onLessonClick: handleCriaLessonClick
        },
        lesson.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Card, { variant: "default", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Padr\xE3o" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "body", children: "Este \xE9 um card padr\xE3o com borda e fundo claros." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Card, { variant: "elevated", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Elevado" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "body", children: "Este card tem uma sombra mais pronunciada para dar destaque." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Card, { variant: "outlined", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "h3", children: "Outlined Card" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, { variant: "body", children: "This card has a prominent border and transparent background." }) })
        ] })
      ] })
    ] })
  ] });
};

// src/components/Checkbox/Checkbox.tsx
var import_react11 = require("react");
var import_phosphor_react4 = require("phosphor-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Checkbox = (0, import_react11.forwardRef)(({
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
  const inputRef = (0, import_react11.useRef)(null);
  (0, import_react11.useImperativeHandle)(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = (0, import_react11.useCallback)((event) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);
  const handleClick = (0, import_react11.useCallback)((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = (0, import_react11.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: checkboxClasses, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "cria-checkbox__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "cria-checkbox__checkmark", children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "cria-checkbox__indeterminate" }) : checked === true ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react4.Check, { size: size === "sm" ? 12 : size === "lg" ? 20 : 16 }) : null }),
      label && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { htmlFor: id || (label ? `${name || "checkbox"}-input` : void 0), className: labelClasses, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "cria-checkbox__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-checkbox__helper-text",
        id: `${id || name || "checkbox"}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-checkbox__error-message",
        id: `${id || name || "checkbox"}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_react12 = require("react");

// src/components/TextTokens/CriaText.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var CriaTextHeadline1 = ({ as, children, className = "", ...props }) => {
  const Element = as || "h1";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_phosphor_react5 = require("phosphor-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Dropdown = (0, import_react12.forwardRef)(({
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
  const [isOpen, setIsOpen] = (0, import_react12.useState)(false);
  const [searchTerm, setSearchTerm] = (0, import_react12.useState)("");
  const [focusedIndex, setFocusedIndex] = (0, import_react12.useState)(-1);
  const [selectedValues, setSelectedValues] = (0, import_react12.useState)(() => {
    const initialValue = value || defaultValue;
    return Array.isArray(initialValue) ? initialValue : initialValue ? [initialValue] : [];
  });
  const triggerRef = (0, import_react12.useRef)(null);
  const listboxRef = (0, import_react12.useRef)(null);
  const searchInputRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    if (value !== void 0) {
      setSelectedValues(Array.isArray(value) ? value : value ? [value] : []);
    }
  }, [value]);
  (0, import_react12.useImperativeHandle)(ref, () => ({
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
  const handleOptionSelect = (0, import_react12.useCallback)((option) => {
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
  const handleTriggerClick = (0, import_react12.useCallback)(() => {
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
  const handleKeyDown = (0, import_react12.useCallback)((event) => {
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
  (0, import_react12.useEffect)(() => {
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
  (0, import_react12.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: containerClasses, style, ...props, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "cria-dropdown__label", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: { color: colors.error }, children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
            textAlign: "left"
          }, children: getDisplayText() }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_phosphor_react5.CaretDown,
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
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        ref: listboxRef,
        role: "listbox",
        className: "cria-dropdown-listbox",
        style: getListboxStyles(),
        "aria-labelledby": triggerRef.current?.id,
        children: [
          searchable && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { padding: spacing[2], borderBottom: `1px solid ${colors.border.light}` }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              import_phosphor_react5.MagnifyingGlass,
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
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
          filteredOptions.length > 0 ? filteredOptions.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "div",
            {
              role: "option",
              className: getOptionClasses(option, index),
              style: getOptionStyles(option, index),
              onClick: () => handleOptionSelect(option),
              "aria-selected": selectedValues.includes(option.value),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
                  option.icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: { marginRight: spacing[2] }, children: option.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CriaTextBody1, { as: "span", children: option.label }),
                    option.description && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { marginTop: spacing[1] }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CriaTextBody2, { as: "span", children: option.description }) })
                  ] })
                ] }),
                selectedValues.includes(option.value) && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_phosphor_react5.Check, { size: 16, style: { color: colors.primary, flexShrink: 0 } })
              ]
            },
            option.value
          )) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: {
            padding: spacing[4],
            textAlign: "center",
            color: colors.text.secondary,
            fontSize: typography.fontSize.bodySmall
          }, children: "No options found" })
        ]
      }
    ),
    (helperText || errorMessage) && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        id: `${label || "dropdown"}-helper`,
        className: "cria-dropdown__messages",
        style: { marginTop: spacing[1] },
        children: errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Typography, { variant: "bodySmall", color: "error", children: errorMessage }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Typography, { variant: "bodySmall", color: "secondary", children: helperText })
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: { marginRight: spacing[2] }, children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: children || /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: label }),
      description && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: {
        fontSize: typography.fontSize.caption,
        color: colors.text.secondary,
        marginTop: spacing[1]
      }, children: description })
    ] }) })
  ] });
};

// src/components/Input/Input.tsx
var import_react13 = __toESM(require("react"), 1);
var import_phosphor_react6 = require("phosphor-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var Input = (0, import_react13.forwardRef)(({
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
  const inputRef = (0, import_react13.useRef)(null);
  const [showPassword, setShowPassword] = import_react13.default.useState(false);
  const [isFocused, setIsFocused] = import_react13.default.useState(false);
  (0, import_react13.useImperativeHandle)(ref, () => ({
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
  const handlePasswordToggle = (0, import_react13.useCallback)(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  const handleClear = (0, import_react13.useCallback)(() => {
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
  const handleFocus = (0, import_react13.useCallback)((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = (0, import_react13.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "cria-input__label", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "cria-input__required", children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "cria-input__wrapper", children: [
      leftIcon && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "cria-input__left-icon", children: leftIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      (rightIcon || shouldShowPasswordToggle || shouldShowClearButton) && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "cria-input__right-icons", children: [
        shouldShowClearButton && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "button",
          {
            type: "button",
            className: "cria-input__clear-button",
            onClick: handleClear,
            "aria-label": "Clear input",
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_phosphor_react6.X, { size: 16 })
          }
        ),
        shouldShowPasswordToggle && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "button",
          {
            type: "button",
            className: "cria-input__password-toggle",
            onClick: handlePasswordToggle,
            "aria-label": showPassword ? "Hide password" : "Show password",
            children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_phosphor_react6.EyeSlash, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_phosphor_react6.Eye, { size: 16 })
          }
        ),
        rightIcon && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "cria-input__right-icon", children: rightIcon })
      ] })
    ] }),
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "cria-input__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Typography, { variant: "body", color: "secondary", className: "cria-input__helper-text", children: helperText }),
      errorMessage && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Typography, { variant: "body", color: "error", className: "cria-input__error-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_phosphor_react6.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        errorMessage
      ] }),
      successMessage && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Typography, { variant: "body", color: "success", className: "cria-input__success-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_phosphor_react6.Check, { size: 14, style: { marginRight: "4px" } }),
        successMessage
      ] }),
      warningMessage && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Typography, { variant: "body", color: "warning", className: "cria-input__warning-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_phosphor_react6.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        warningMessage
      ] }),
      showCharacterCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Typography, { variant: "body", color: "secondary", className: "cria-input__character-count", children: [
        characterCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});
Input.displayName = "Input";

// src/components/Modal/Modal.tsx
var import_react14 = require("react");
var import_phosphor_react7 = require("phosphor-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
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
  const modalRef = (0, import_react14.useRef)(null);
  const previousActiveElement = (0, import_react14.useRef)(null);
  const overlayRef = (0, import_react14.useRef)(null);
  const handleEscapeKey = (0, import_react14.useCallback)((event) => {
    if (event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  }, [closeOnEscape, onClose]);
  const handleOverlayClick = (0, import_react14.useCallback)((event) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);
  const handleFocus = (0, import_react14.useCallback)(() => {
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
  const toggleBodyScroll = (0, import_react14.useCallback)((lock) => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, []);
  (0, import_react14.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
            showHeader && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "cria-modal__header", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                Typography,
                {
                  id: "modal-title",
                  variant: "h3",
                  weight: "semiBold",
                  className: "cria-modal__title",
                  children: title
                }
              ),
              showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onClose,
                  className: "cria-modal__close-button",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_phosphor_react7.X, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "div",
              {
                id: "modal-content",
                className: "cria-modal__content",
                children
              }
            ),
            showFooter && footer && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "cria-modal__footer", children: footer })
          ]
        }
      )
    }
  );
};

// src/components/Navigation/Navigation.tsx
var import_react15 = require("react");
var import_phosphor_react8 = require("phosphor-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Sidebar = ({
  items,
  activeRoute,
  collapsed = false,
  onToggle,
  showToggle = true,
  title,
  titleHref,
  subtitle,
  className,
  style,
  theme = "default",
  ...props
}) => {
  const [isMobile, setIsMobile] = (0, import_react15.useState)(false);
  const [expandedItems, setExpandedItems] = (0, import_react15.useState)(
    new Set(items.filter((item) => item.defaultExpanded).map((item) => item.id))
  );
  (0, import_react15.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleToggle = (0, import_react15.useCallback)(() => {
    onToggle?.(!collapsed);
  }, [collapsed, onToggle]);
  const handleSubitemToggle = (0, import_react15.useCallback)((itemId) => {
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
  const handleKeyDown = (0, import_react15.useCallback)((event, index) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "nav",
    {
      className: sidebarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "cria-sidebar__header", children: [
          title && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-sidebar__title-section", children: titleHref ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: titleHref, className: "cria-sidebar__title-link", children: theme !== "default" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "h3", weight: "bold", children: title }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: title }) }) : theme !== "default" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "h3", weight: "bold", children: title }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: title }) }),
          subtitle && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-sidebar__subtitle-section", style: { marginTop: "0.5rem" }, children: subtitle }),
          showToggle && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleToggle,
              "aria-label": "Toggle sidebar",
              className: "cria-sidebar__toggle",
              children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react8.CaretRight, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react8.CaretLeft, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-sidebar__content", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "cria-sidebar__items", role: "menubar", children: items.map((item, index) => {
          const hasSubitems = item.subitems && item.subitems.length > 0;
          const isExpanded = expandedItems.has(item.id);
          const isActive = activeRoute === item.href || hasSubitems && item.subitems?.some((subitem) => activeRoute === subitem.href);
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "cria-sidebar__item-wrapper", children: [
            hasSubitems ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
                  !collapsed && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__label", children: item.label }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                      "span",
                      {
                        className: "cria-sidebar__subitem-toggle",
                        "aria-hidden": "true",
                        children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react8.CaretDown, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react8.CaretRight, { size: 16 })
                      }
                    )
                  ] }),
                  item.badge && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
                ]
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
                  !collapsed && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__label", children: item.label }),
                  item.badge && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
                ]
              }
            ),
            hasSubitems && isExpanded && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "cria-sidebar__subitems", role: "menu", children: item.subitems?.map((subitem) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { className: "cria-sidebar__subitem-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
                  subitem.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__subitem-icon", "aria-hidden": "true", children: subitem.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__subitem-label", children: subitem.label }),
                  subitem.badge && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-sidebar__subitem-badge", "aria-hidden": "true", children: subitem.badge })
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
  const [isMobile, setIsMobile] = (0, import_react15.useState)(false);
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react15.useState)(false);
  (0, import_react15.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleMobileMenuToggle = (0, import_react15.useCallback)(() => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  }, [mobileMenuOpen, onMobileMenuToggle]);
  const handleKeyDown = (0, import_react15.useCallback)((event, index) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "nav",
    {
      className: topbarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "cria-topbar__content", children: [
          brand && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-topbar__brand", children: brandHref ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: brandHref, className: "cria-topbar__brand-link", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: itemsClasses, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "cria-topbar__items-list", role: "menubar", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { className: "cria-topbar__item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-topbar__icon", "aria-hidden": "true", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-topbar__label", children: item.label }),
                item.badge && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-topbar__badge", "aria-hidden": "true", children: item.badge })
              ]
            }
          ) }, item.id)) }) }),
          isMobile && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleMobileMenuToggle,
              "aria-label": "Toggle menu",
              "aria-expanded": mobileMenuOpen,
              className: "cria-topbar__mobile-toggle",
              children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_phosphor_react8.List, { size: 16 })
            }
          )
        ] }),
        isMobile && mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cria-topbar__mobile-menu", role: "menu", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "cria-topbar__mobile-items", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { className: "cria-topbar__mobile-item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-topbar__mobile-icon", "aria-hidden": "true", children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-topbar__mobile-label", children: item.label }),
              item.badge && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "cria-topbar__mobile-badge", "aria-hidden": "true", children: item.badge })
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: navigationClasses, style, ...props, children: [
    sidebar && (variant === "sidebar-only" || variant === "both") && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sidebar, { ...sidebar }),
    topbar && (variant === "topbar-only" || variant === "both") && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Topbar, { ...topbar })
  ] });
};

// src/components/Pagination/Pagination.tsx
var import_react16 = require("react");
var import_phosphor_react9 = require("phosphor-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Pagination = (0, import_react16.forwardRef)(({
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
  const pageNumbers = (0, import_react16.useMemo)(() => {
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
  const pageInfo = (0, import_react16.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "nav",
    {
      ref,
      className: paginationClasses,
      "aria-label": ariaLabel,
      style,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "cria-pagination__content", children: [
        showPageSize && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "cria-pagination__page-size", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { htmlFor: "page-size-select", className: "cria-pagination__page-size-label", children: "Items per page:" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "select",
            {
              id: "page-size-select",
              className: "cria-pagination__page-size-select",
              value: pageSize,
              onChange: handlePageSizeChange,
              "aria-label": "Items per page",
              children: pageSizeOptions.map((size) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: size, children: size }, size))
            }
          )
        ] }),
        showPageInfo && pageInfo && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "cria-pagination__info", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "cria-pagination__info-text", children: pageInfo }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "cria-pagination__navigation", children: [
          showFirstLast && currentPage > 1 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              className: "cria-pagination__button cria-pagination__button--first",
              onClick: () => handlePageChange(1),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(1)),
              "aria-label": firstLabel,
              children: firstLabel
            }
          ),
          showPrevNext && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "button",
            {
              className: `cria-pagination__button cria-pagination__button--prev ${currentPage <= 1 ? "cria-pagination__button--disabled" : ""}`,
              onClick: () => handlePageChange(currentPage - 1),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(currentPage - 1)),
              disabled: currentPage <= 1,
              "aria-disabled": currentPage <= 1,
              "aria-label": previousLabel,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_phosphor_react9.CaretLeft, { size: 16 }),
                variant !== "minimal" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "cria-pagination__button-text", children: previousLabel })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "cria-pagination__pages", children: pageNumbers.map((page, index) => {
            if (page === "...") {
              return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
          showPrevNext && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "button",
            {
              className: `cria-pagination__button cria-pagination__button--next ${currentPage >= totalPages ? "cria-pagination__button--disabled" : ""}`,
              onClick: () => handlePageChange(currentPage + 1),
              onKeyDown: (e) => handleKeyDown(e, () => handlePageChange(currentPage + 1)),
              disabled: currentPage >= totalPages,
              "aria-disabled": currentPage >= totalPages,
              "aria-label": nextLabel,
              children: [
                variant !== "minimal" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "cria-pagination__button-text", children: nextLabel }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_phosphor_react9.CaretRight, { size: 16 })
              ]
            }
          ),
          showFirstLast && currentPage < totalPages && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var import_react17 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var ProgressBar = (0, import_react17.forwardRef)(({
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
  const normalizedValue = (0, import_react17.useMemo)(() => {
    if (variant === "indeterminate") return 0;
    const clampedValue = Math.max(min, Math.min(max, value));
    return clampedValue;
  }, [value, min, max, variant]);
  const percentage = (0, import_react17.useMemo)(() => {
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
  const accessibilityProps = (0, import_react17.useMemo)(() => {
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
      "aria-disabled": disabled || void 0
    };
  }, [variant, normalizedValue, min, max, ariaLabel, label, disabled]);
  const progressFillStyle = {
    width: variant === "indeterminate" ? "100%" : `${percentage}%`,
    transitionDuration
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "cria-progress-bar__container", children: [
    (label || showPercentage) && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "cria-progress-bar__header", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "cria-progress-bar__label", children: label }),
      showPercentage && variant === "determinate" && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "cria-progress-bar__percentage", children: [
        Math.round(percentage),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "div",
      {
        ref,
        className: progressBarClasses,
        role: "progressbar",
        style,
        ...accessibilityProps,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_react18 = __toESM(require("react"), 1);
var import_jsx_runtime22 = require("react/jsx-runtime");
var VerticalTabs = ({
  tabs,
  activeId,
  onChange,
  renderPanel,
  className = "",
  style,
  ...props
}) => {
  const tabRefs = import_react18.default.useRef([]);
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: containerClass, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { role: "tablist", "aria-orientation": "vertical", className: "cria-vertical-tabs__list", children: tabs.map((tab, index) => {
      const selected = tab.id === activeId;
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
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
            tab.icon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "cria-vertical-tabs__icon", children: tab.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "cria-vertical-tabs__label", children: tab.label })
          ]
        },
        tab.id
      );
    }) }),
    renderPanel && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "cria-vertical-tabs__panel", children: renderPanel(activeId) })
  ] });
};

// src/components/DatePicker/DatePicker.tsx
var import_react19 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  const [open, setOpen] = (0, import_react19.useState)(false);
  const today = (0, import_react19.useMemo)(() => /* @__PURE__ */ new Date(), []);
  const initial = Array.isArray(value) ? value[0] ?? today : (value ?? today) || today;
  const [view, setView] = (0, import_react19.useState)(startOfMonth(initial instanceof Date ? initial : today));
  const containerRef = (0, import_react19.useRef)(null);
  const inputRef = (0, import_react19.useRef)(null);
  const selectedStart = Array.isArray(value) ? value[0] : Array.isArray(value) ? null : value ?? null;
  const selectedEnd = Array.isArray(value) ? value[1] : null;
  const days = (0, import_react19.useMemo)(() => {
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
  const isDisabled = (0, import_react19.useCallback)((d) => {
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
  (0, import_react19.useEffect)(() => {
    const onDoc = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const displayValue = (0, import_react19.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: ["cria-date-picker", className].filter(Boolean).join(" "), ref: containerRef, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "cria-date-picker__label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
    open && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "cria-calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date picker", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "cria-calendar__header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("button", { className: "cria-calendar__nav", onClick: () => setView(addMonths(view, -1)), "aria-label": "Previous month", children: "\u2039" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "cria-calendar__month", "aria-live": "polite", children: [
          view.toLocaleString(void 0, { month: "long" }),
          " ",
          view.getFullYear()
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("button", { className: "cria-calendar__nav", onClick: () => setView(addMonths(view, 1)), "aria-label": "Next month", children: "\u203A" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "cria-calendar__weekdays", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "cria-calendar__weekday", "aria-hidden": "true", children: d }, d)) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "cria-calendar__grid", role: "grid", children: days.map((d, i) => {
        const inMonth = d.getMonth() === view.getMonth();
        const disabled = !inMonth || isDisabled(d);
        const isStart = selectedStart instanceof Date && sameDay(d, selectedStart);
        const isEnd = selectedEnd instanceof Date && sameDay(d, selectedEnd);
        const inRange = range && selectedStart instanceof Date && selectedEnd instanceof Date && d >= selectedStart && d <= selectedEnd;
        const isToday = sameDay(d, today);
        return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_react20 = require("react");
var import_phosphor_react10 = require("phosphor-react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var StepperStep = (0, import_react20.forwardRef)(({
  step,
  index,
  size = "md",
  variant = "default",
  style = "filled",
  onClick,
  className = "",
  ...props
}, ref) => {
  const {
    id,
    title,
    description,
    icon,
    completed = false,
    active = false,
    disabled = false,
    loading = false,
    selected = false
  } = step;
  const sizeConfig = {
    sm: {
      padding: spacing[2],
      iconSize: "1rem",
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      borderRadius: radii.sm,
      iconPadding: spacing[1]
    },
    md: {
      padding: spacing[3],
      iconSize: "1.25rem",
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      borderRadius: radii.md,
      iconPadding: spacing[2]
    },
    lg: {
      padding: spacing[4],
      iconSize: "1.5rem",
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      borderRadius: radii.lg,
      iconPadding: spacing[3]
    }
  };
  const config = sizeConfig[size];
  const getStepStyles = () => {
    const baseStyles = {
      display: "flex",
      alignItems: "center",
      gap: spacing[3],
      padding: config.padding,
      borderRadius: config.borderRadius,
      transition: "all 0.2s ease",
      cursor: onClick && !disabled ? "pointer" : "default",
      opacity: disabled ? 0.6 : 1,
      position: "relative",
      ...props.style
    };
    let backgroundColor = "transparent";
    let borderColor = "transparent";
    let textColor = colors.gray[600];
    if (completed) {
      backgroundColor = colors.success[100];
      borderColor = colors.success[300];
      textColor = colors.success[800];
    } else if (active) {
      backgroundColor = colors.primary[100];
      borderColor = colors.primary[300];
      textColor = colors.primary[800];
    } else if (selected) {
      backgroundColor = colors.secondary[100];
      borderColor = colors.secondary[300];
      textColor = colors.secondary[800];
    }
    switch (style) {
      case "filled":
        return {
          ...baseStyles,
          backgroundColor,
          border: `1px solid ${borderColor}`
        };
      case "outlined":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          border: `2px solid ${borderColor}`
        };
      case "ghost":
        return {
          ...baseStyles,
          backgroundColor: completed ? colors.success[50] : active ? colors.primary[50] : "transparent",
          border: "none"
        };
      default:
        return baseStyles;
    }
  };
  const getIconStyles = () => {
    const baseIconStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: config.iconSize,
      height: config.iconSize,
      borderRadius: "50%",
      flexShrink: 0,
      fontSize: config.iconSize
    };
    if (completed) {
      return {
        ...baseIconStyles,
        backgroundColor: colors.success[500],
        color: colors.white
      };
    } else if (active) {
      return {
        ...baseIconStyles,
        backgroundColor: colors.primary[500],
        color: colors.white
      };
    } else {
      return {
        ...baseIconStyles,
        backgroundColor: colors.gray[200],
        color: colors.gray[500]
      };
    }
  };
  const stepStyles = getStepStyles();
  const iconStyles = getIconStyles();
  const handleClick = (event) => {
    if (onClick && !disabled && !loading) {
      onClick(index, step);
    }
  };
  const handleKeyDown = (event) => {
    if (onClick && !disabled && !loading && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick(index, step);
    }
  };
  const Component = onClick ? "button" : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    Component,
    {
      ref,
      className: `stepper-step variant-${variant} size-${size} style-${style} ${className} ${onClick ? "clickable" : ""} ${disabled ? "disabled" : ""} ${loading ? "loading" : ""} ${selected ? "selected" : ""} ${completed ? "completed" : ""} ${active ? "active" : ""}`,
      role: onClick ? "button" : "listitem",
      "aria-label": `${title}${description ? `: ${description}` : ""}`,
      "aria-disabled": disabled || loading,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: onClick && !disabled ? 0 : void 0,
      disabled: onClick && disabled,
      style: stepStyles,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "stepper-step-icon", style: iconStyles, children: loading ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_phosphor_react10.Spinner, { size: 16, weight: "bold", style: { animation: "spin 1s linear infinite" } }) : completed ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { style: { fontSize: "0.75rem", fontWeight: "bold" }, children: "\u2713" }) : icon || /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { style: { fontSize: "0.75rem", fontWeight: "bold" }, children: index + 1 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "stepper-step-content", style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              className: "stepper-step-title",
              style: {
                fontSize: config.titleFontSize,
                fontWeight: typography.fontWeight.semiBold,
                color: stepStyles.color || colors.gray[900],
                marginBottom: description ? spacing[1] : 0,
                lineHeight: typography.lineHeight.tight
              },
              children: title
            }
          ),
          description && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              className: "stepper-step-description",
              style: {
                fontSize: config.fontSize,
                color: colors.gray[600],
                lineHeight: typography.lineHeight.relaxed
              },
              children: description
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("style", { children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .stepper-step.clickable:focus {
          outline: 2px solid ${colors.primary[500]};
          outline-offset: 2px;
        }

        .stepper-step.clickable:focus-visible {
          outline: 2px solid ${colors.primary[500]};
          outline-offset: 2px;
        }

        .stepper-step.clickable:hover {
          ${!disabled && !loading ? `transform: translateY(-1px); box-shadow: ${shadows.sm};` : ""}
        }
      ` })
      ]
    }
  );
});
StepperStep.displayName = "StepperStep";
var Stepper = (0, import_react20.forwardRef)(({
  steps,
  currentStep = 0,
  orientation = "horizontal",
  size = "md",
  variant = "default",
  showConnector = true,
  showNavigation = true,
  connector,
  connectorStyle = "solid",
  connectorColor = "primary",
  loading = false,
  disabled = false,
  stepRenderer,
  onStepClick,
  onNext,
  onPrevious,
  onComplete,
  nextLabel = "Next",
  previousLabel = "Previous",
  completeLabel = "Complete",
  className = "",
  style = {},
  ...props
}, ref) => {
  const sizeConfig = {
    sm: {
      stepSpacing: spacing[3],
      iconSize: "1rem",
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      connectorWidth: "2px"
    },
    md: {
      stepSpacing: spacing[4],
      iconSize: "1.25rem",
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      connectorWidth: "2px"
    },
    lg: {
      stepSpacing: spacing[5],
      iconSize: "1.5rem",
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      connectorWidth: "3px"
    }
  };
  const config = sizeConfig[size];
  const connectorColorMap = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    gray: colors.gray[300]
  };
  const renderLoading = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      className: "stepper-loading",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing[8],
        color: colors.gray[500]
      },
      "aria-label": "Loading stepper",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_phosphor_react10.Spinner, { size: 24, weight: "bold", style: { animation: "spin 1s linear infinite" } })
    }
  );
  const renderConnector = (isLast) => {
    if (!showConnector || isLast) return null;
    if (connector) {
      return connector;
    }
    const connectorStyles = {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "div",
      {
        className: "stepper-connector",
        style: {
          position: "absolute",
          ...orientation === "horizontal" ? {
            left: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            width: config.stepSpacing,
            height: config.connectorWidth
          } : {
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: config.connectorWidth,
            height: config.stepSpacing
          },
          backgroundColor: connectorColorMap[connectorColor],
          borderStyle: connectorStyles[connectorStyle],
          borderWidth: "0 0 0 2px",
          borderColor: connectorColorMap[connectorColor],
          zIndex: 1
        }
      }
    );
  };
  const renderStep = (step, index) => {
    if (stepRenderer) {
      return stepRenderer({ step, index });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      StepperStep,
      {
        step,
        index,
        size,
        variant,
        onClick: onStepClick,
        style: {
          marginBottom: orientation === "vertical" && index < steps.length - 1 ? config.stepSpacing : 0,
          marginRight: orientation === "horizontal" && index < steps.length - 1 ? config.stepSpacing : 0
        }
      },
      step.id
    );
  };
  const renderNavigation = () => {
    if (!showNavigation) return null;
    const currentStepData = steps[currentStep];
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        className: "stepper-navigation",
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: spacing[6],
          padding: spacing[4],
          borderTop: `1px solid ${colors.gray[200]}`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            Button,
            {
              variant: "outlined",
              size,
              disabled: isFirstStep || disabled || loading,
              onClick: () => onPrevious?.(currentStep, currentStepData),
              children: previousLabel
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { style: { display: "flex", alignItems: "center", gap: spacing[2] }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Typography, { variant: "bodySmall", color: "secondary", children: [
            "Step ",
            currentStep + 1,
            " of ",
            steps.length
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            Button,
            {
              variant: "primary",
              size,
              disabled: disabled || loading,
              onClick: () => {
                if (isLastStep) {
                  onComplete?.(currentStep, currentStepData);
                } else {
                  onNext?.(currentStep, currentStepData);
                }
              },
              children: isLastStep ? completeLabel : nextLabel
            }
          )
        ]
      }
    );
  };
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "div",
      {
        ref,
        className: `stepper loading ${className}`,
        style,
        ...props,
        children: renderLoading()
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "div",
    {
      ref,
      className: `stepper orientation-${orientation} size-${size} variant-${variant} ${className}`,
      style: {
        position: "relative",
        ...orientation === "horizontal" && {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        ...orientation === "vertical" && {
          display: "flex",
          flexDirection: "column"
        },
        ...style
      },
      role: "navigation",
      "aria-label": "Stepper navigation",
      ...props,
      children: [
        steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          "div",
          {
            className: "stepper-step-wrapper",
            style: {
              position: "relative",
              ...orientation === "horizontal" && {
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              },
              ...orientation === "vertical" && {
                display: "flex",
                flexDirection: "column"
              }
            },
            children: [
              renderStep(step, index),
              renderConnector(index === steps.length - 1)
            ]
          },
          step.id
        )),
        renderNavigation(),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("style", { children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .stepper-step-wrapper:last-child .stepper-connector {
          display: none;
        }
      ` })
      ]
    }
  );
});
Stepper.displayName = "Stepper";

// src/components/RadioGroup/RadioGroup.tsx
var import_react21 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var RadioGroupContext = (0, import_react21.createContext)(null);
var useRadioGroup = () => {
  const context = (0, import_react21.useContext)(RadioGroupContext);
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
  const fieldsetRef = (0, import_react21.useRef)(null);
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
  const handleKeyDown = (0, import_react21.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: "\u26A0" }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "legend",
    {
      id: labelId,
      className: classes,
      style: labelStyles,
      "aria-required": required,
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
  const handleChange = (0, import_react21.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: classes, style: containerStyles, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
var import_react22 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
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
  const [internalActiveItem, setInternalActiveItem] = (0, import_react22.useState)(
    defaultActiveItem || items[0]?.id || ""
  );
  const [internalCollapsed, setInternalCollapsed] = (0, import_react22.useState)(false);
  const isControlled = controlledActiveItem !== void 0;
  const activeItem = isControlled ? controlledActiveItem : internalActiveItem;
  const isCollapseControlled = controlledCollapsed !== void 0;
  const collapsed = isCollapseControlled ? controlledCollapsed : internalCollapsed;
  const itemRefs = (0, import_react22.useRef)({});
  const sidebarRef = (0, import_react22.useRef)(null);
  const handleItemChange = (0, import_react22.useCallback)((itemId) => {
    if (isControlled) {
      onChange?.(itemId);
    } else {
      setInternalActiveItem(itemId);
      onChange?.(itemId);
    }
  }, [isControlled, onChange]);
  const handleCollapseToggle = (0, import_react22.useCallback)(() => {
    if (isCollapseControlled) {
      onCollapseChange?.(!collapsed);
    } else {
      setInternalCollapsed(!collapsed);
      onCollapseChange?.(!collapsed);
    }
  }, [isCollapseControlled, collapsed, onCollapseChange]);
  const handleKeyDown = (0, import_react22.useCallback)((event, itemId) => {
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
  (0, import_react22.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "cria-sidebar__item-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
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
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-sidebar__item-icon", children: item.icon }),
            !collapsed && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-sidebar__item-label", children: item.label }),
            !collapsed && item.badge && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-sidebar__item-badge", children: item.badge }),
            hasChildren && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "cria-sidebar__item-arrow", children: item.expanded ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      hasChildren && !collapsed && item.expanded && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "cria-sidebar__submenu", children: item.children?.map((child) => renderSidebarItem(child, level + 1)) })
    ] }, item.id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      ref: sidebarRef,
      className: containerClasses,
      style,
      role: "navigation",
      "aria-label": "Sidebar navigation",
      ...props,
      children: [
        collapsible && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "button",
          {
            className: "cria-sidebar__toggle",
            onClick: handleCollapseToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? "\u25B6" : "\u25C0"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "cria-sidebar__items", role: "menu", children: items.map((item) => renderSidebarItem(item)) }),
        showContent && activeItemData?.content && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var React23 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_phosphor_react11 = require("phosphor-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Snackbar = React23.forwardRef(({
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
  const [isVisible, setIsVisible] = React23.useState(open);
  const [isAnimating, setIsAnimating] = React23.useState(false);
  const timeoutRef = React23.useRef(null);
  React23.useEffect(() => {
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
  React23.useEffect(() => {
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
  const handleClose = React23.useCallback(() => {
    onClose?.();
  }, [onClose]);
  const handleBackdropClick = React23.useCallback((event) => {
    if (dismissible && event.target === event.currentTarget) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  const handleKeyDown = React23.useCallback((event) => {
    if (event.key === "Escape" && dismissible) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  React23.useImperativeHandle(ref, () => ({
    close: handleClose
  }), [handleClose]);
  if (!isVisible) {
    return null;
  }
  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_phosphor_react11.CheckCircle, { size: 20, "data-testid": "snackbar-icon" });
      case "error":
        return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_phosphor_react11.X, { size: 20, "data-testid": "snackbar-icon" });
      case "warning":
        return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_phosphor_react11.Info, { size: 20, "data-testid": "snackbar-icon" });
      case "info":
        return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_phosphor_react11.Info, { size: 20, "data-testid": "snackbar-icon" });
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
  const snackbarContent = /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "div",
    {
      "data-testid": "snackbar-container",
      className: containerClasses,
      onClick: handleBackdropClick,
      onKeyDown: handleKeyDown,
      tabIndex: -1,
      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
        "div",
        {
          className: snackbarClasses,
          style,
          role,
          "aria-live": ariaLive,
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "cria-snackbar__content", children: [
              displayIcon && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "cria-snackbar__icon", children: displayIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "cria-snackbar__text", children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Typography, { variant: "body", weight: "medium", className: "cria-snackbar__title", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Typography, { variant: "body", className: "cria-snackbar__message", children: message })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "cria-snackbar__actions", children: [
              action && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: action.onClick,
                  className: "cria-snackbar__action",
                  children: action.label
                }
              ),
              dismissible && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleClose,
                  className: "cria-snackbar__close",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_phosphor_react11.X, { size: 16 })
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
var import_react23 = __toESM(require("react"), 1);
var import_jsx_runtime28 = require("react/jsx-runtime");
var Switch = (0, import_react23.forwardRef)(({
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
  const inputRef = (0, import_react23.useRef)(null);
  const reactId = import_react23.default.useId();
  const isControlled = checked !== void 0;
  const [uncontrolledChecked, setUncontrolledChecked] = import_react23.default.useState(!!checked);
  const isChecked = isControlled ? !!checked : uncontrolledChecked;
  const resolvedId = id || `${name || "switch"}-${reactId}`;
  (0, import_react23.useImperativeHandle)(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = (0, import_react23.useCallback)((event) => {
    if (disabled || readOnly) return;
    const next = event.target.checked;
    if (!isControlled) setUncontrolledChecked(next);
    onChange?.(next, event);
  }, [disabled, readOnly, onChange, isControlled]);
  const handleClick = (0, import_react23.useCallback)((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = (0, import_react23.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: switchClasses, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "cria-switch__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "cria-switch__track", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "cria-switch__thumb" }) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { htmlFor: resolvedId, className: labelClasses, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "cria-switch__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-switch__helper-text",
        id: `${resolvedId}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-switch__error-message",
        id: `${resolvedId}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
var import_react24 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
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
  const [internalActiveTab, setInternalActiveTab] = (0, import_react24.useState)(
    defaultActiveTab || items[0]?.id || ""
  );
  const isControlled = controlledActiveTab !== void 0;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  const tabRefs = (0, import_react24.useRef)({});
  const tabListRef = (0, import_react24.useRef)(null);
  const handleTabChange = (0, import_react24.useCallback)((tabId) => {
    if (isControlled) {
      onChange?.(tabId);
    } else {
      setInternalActiveTab(tabId);
      onChange?.(tabId);
    }
  }, [isControlled, onChange]);
  const handleKeyDown = (0, import_react24.useCallback)((event, tabId) => {
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
  (0, import_react24.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "div",
    {
      className: containerClasses,
      style,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
              return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
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
                    item.icon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "cria-tabs__tab-icon", children: item.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "cria-tabs__tab-label", children: item.label }),
                    item.badge && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "cria-tabs__tab-badge", children: item.badge })
                  ]
                },
                item.id
              );
            })
          }
        ),
        showContent && activeTabItem && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Element, { className: classes, style: styles, ...props, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Element, { className: classes, style: styles, ...props, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Element, { className: classes, style: styles, ...props, children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Element, { className: classes, style: styles, ...props, children });
};

// src/components/Textarea/Textarea.tsx
var import_react25 = __toESM(require("react"), 1);
var import_phosphor_react12 = require("phosphor-react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var Textarea = (0, import_react25.forwardRef)(({
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
  const textareaRef = (0, import_react25.useRef)(null);
  const [isFocused, setIsFocused] = import_react25.default.useState(false);
  (0, import_react25.useImperativeHandle)(ref, () => ({
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
  const adjustHeight = (0, import_react25.useCallback)(() => {
    if (textareaRef.current && autoResize) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [autoResize]);
  const handleChange = (0, import_react25.useCallback)((event) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(event);
  }, [onChange, autoResize, adjustHeight]);
  const handleFocus = (0, import_react25.useCallback)((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = (0, import_react25.useCallback)((event) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);
  (0, import_react25.useEffect)(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize, adjustHeight]);
  const currentState = errorMessage ? "error" : successMessage ? "success" : warningMessage ? "warning" : state;
  const textareaId = import_react25.default.useId();
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { htmlFor: textareaId, id: labelId, className: "cria-textarea__label", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "cria-textarea__required", "aria-label": "required", children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "cria-textarea__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        Typography,
        {
          variant: "body",
          color: "secondary",
          className: "cria-textarea__helper-text",
          id: helperId,
          children: helperText
        }
      ),
      errorMessage && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        Typography,
        {
          variant: "body",
          color: "error",
          className: "cria-textarea__error-message",
          id: errorId,
          role: "alert",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_phosphor_react12.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
            errorMessage
          ]
        }
      ),
      successMessage && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        Typography,
        {
          variant: "body",
          color: "success",
          className: "cria-textarea__success-message",
          id: successId,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_phosphor_react12.Check, { size: 14, style: { marginRight: "4px" } }),
            successMessage
          ]
        }
      ),
      warningMessage && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        Typography,
        {
          variant: "body",
          color: "warning",
          className: "cria-textarea__warning-message",
          id: warningId,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_phosphor_react12.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
            warningMessage
          ]
        }
      ),
      showCharacterCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
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
var import_react26 = __toESM(require("react"), 1);
var import_react_dom2 = require("react-dom");
var import_jsx_runtime32 = require("react/jsx-runtime");
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
  const [isVisible, setIsVisible] = (0, import_react26.useState)(false);
  const [tooltipPosition, setTooltipPosition] = (0, import_react26.useState)({ top: 0, left: 0 });
  const triggerRef = (0, import_react26.useRef)(null);
  const tooltipRef = (0, import_react26.useRef)(null);
  const showTimeoutRef = (0, import_react26.useRef)();
  const hideTimeoutRef = (0, import_react26.useRef)();
  const isControlled = controlledVisible !== void 0;
  const visible = isControlled ? controlledVisible : isVisible;
  const calculatePosition = (0, import_react26.useCallback)(() => {
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
  const showTooltip = (0, import_react26.useCallback)(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }, delay);
  }, [disabled, isControlled, delay, onVisibilityChange]);
  const hideTooltip = (0, import_react26.useCallback)(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      onVisibilityChange?.(false);
    }, hideDelay);
  }, [disabled, isControlled, hideDelay, onVisibilityChange]);
  const handleMouseEnter = (0, import_react26.useCallback)(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleMouseLeave = (0, import_react26.useCallback)(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  const handleFocus = (0, import_react26.useCallback)(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleBlur = (0, import_react26.useCallback)(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  (0, import_react26.useEffect)(() => {
    if (visible) {
      calculatePosition();
    }
  }, [visible, calculatePosition]);
  (0, import_react26.useEffect)(() => {
    if (!visible) return;
    const updatePosition = () => calculatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [visible, calculatePosition]);
  (0, import_react26.useEffect)(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  const triggerElement = import_react26.default.cloneElement(children, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
    triggerElement,
    visible && (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "cria-tooltip__content", children: content }),
            arrow && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "cria-tooltip__arrow" })
          ]
        }
      ),
      document.body
    )
  ] });
};

// src/components/FileUpload/FileUpload.tsx
var import_react27 = __toESM(require("react"), 1);
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  const inputRef = (0, import_react27.useRef)(null);
  const [internalFiles, setInternalFiles] = (0, import_react27.useState)([]);
  const isControlled = value !== void 0;
  const files = isControlled ? value : internalFiles;
  const id = import_react27.default.useId();
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
  const handleInput = (0, import_react27.useCallback)((e) => {
    if (!e.target.files) return;
    const list = Array.from(e.target.files);
    commit(list);
  }, []);
  const handleClick = (0, import_react27.useCallback)(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);
  const handleDrop = (0, import_react27.useCallback)((e) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
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
        label && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { htmlFor: `file-input-${id}`, className: "cria-file-upload__label", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Typography, { variant: "body", weight: "medium", color: disabled ? "secondary" : "content", children: [
          label,
          required && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { "aria-label": "required", children: " *" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "cria-file-upload__dropzone-inner", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Typography, { variant: "body", color: "secondary", children: "Drag & drop files here, or click to select" }),
              accept && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Typography, { variant: "caption", color: "secondary", children: [
                "Accepted: ",
                accept
              ] })
            ] })
          }
        ),
        description && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Typography, { id: `file-desc-${id}`, variant: "caption", color: "secondary", style: { marginTop: 8 }, children: description }),
        files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("ul", { className: "cria-file-upload__list", "aria-label": "Selected files", children: files.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("li", { className: "cria-file-upload__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "cria-file-upload__filename", children: f.name }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "cria-file-upload__filesize", children: [
            (f.size / 1024).toFixed(1),
            " KB"
          ] }),
          !disabled && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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

// src/components/TagChip/TagChip.tsx
var import_react28 = require("react");
var import_phosphor_react13 = require("phosphor-react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var TagChip = (0, import_react28.forwardRef)(({
  label,
  variant = "default",
  size = "md",
  visualStyle: styleProp = "filled",
  icon,
  clickable = false,
  removable = false,
  disabled = false,
  loading = false,
  selected = false,
  closeIcon,
  onClick,
  onRemove,
  className = "",
  style = {},
  ...props
}, ref) => {
  const colorMap = {
    default: colors.gray,
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info
  };
  const sizeConfig = {
    sm: {
      padding: `${spacing[1]} ${spacing[2]}`,
      fontSize: typography.fontSize.caption,
      iconSize: "0.875rem",
      borderRadius: radii.sm,
      minHeight: "1.5rem"
    },
    md: {
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.fontSize.body2,
      iconSize: "1rem",
      borderRadius: radii.md,
      minHeight: "2rem"
    },
    lg: {
      padding: `${spacing[3]} ${spacing[4]}`,
      fontSize: typography.fontSize.body,
      iconSize: "1.125rem",
      borderRadius: radii.lg,
      minHeight: "2.5rem"
    }
  };
  const config = sizeConfig[size];
  const selectedColor = colorMap[variant];
  const getStyleConfig = () => {
    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      gap: spacing[1],
      padding: config.padding,
      fontSize: config.fontSize,
      fontWeight: typography.fontWeight.medium,
      borderRadius: config.borderRadius,
      minHeight: config.minHeight,
      transition: "all 0.2s ease",
      cursor: clickable && !disabled ? "pointer" : "default",
      opacity: disabled ? 0.6 : 1,
      userSelect: "none",
      outline: "none",
      border: "none",
      position: "relative",
      ...style
    };
    switch (styleProp) {
      case "filled":
        return {
          ...baseStyles,
          backgroundColor: selected ? selectedColor[600] : selectedColor[500],
          color: colors.white,
          ...clickable && !disabled && {
            "&:hover": {
              backgroundColor: selectedColor[600],
              transform: "translateY(-1px)",
              boxShadow: shadows.md
            },
            "&:active": {
              transform: "translateY(0)"
            }
          }
        };
      case "outlined":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          color: selected ? selectedColor[600] : selectedColor[500],
          border: `1px solid ${selected ? selectedColor[600] : selectedColor[500]}`,
          ...clickable && !disabled && {
            "&:hover": {
              backgroundColor: `${selectedColor[500]}10`,
              borderColor: selectedColor[600]
            }
          }
        };
      case "soft":
        return {
          ...baseStyles,
          backgroundColor: `${selectedColor[500]}15`,
          color: selectedColor[700],
          ...clickable && !disabled && {
            "&:hover": {
              backgroundColor: `${selectedColor[500]}25`
            }
          }
        };
      case "ghost":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          color: selectedColor[600],
          ...clickable && !disabled && {
            "&:hover": {
              backgroundColor: `${selectedColor[500]}10`
            }
          }
        };
      default:
        return baseStyles;
    }
  };
  const styleConfig = getStyleConfig();
  const handleClick = (event) => {
    if (clickable && !disabled && !loading && onClick) {
      onClick(event);
    }
  };
  const handleKeyDown = (event) => {
    if (clickable && !disabled && !loading && (event.key === "Enter" || event.key === " ") && onClick) {
      event.preventDefault();
      onClick(event);
    }
  };
  const handleRemoveClick = (event) => {
    if (disabled || loading || !onRemove) return;
    event.stopPropagation();
    onRemove(event);
  };
  const handleRemoveKeyDown = (event) => {
    if (disabled || loading || !onRemove) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onRemove(event);
    }
  };
  const Component = clickable ? "button" : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    Component,
    {
      ref,
      className: `tag-chip variant-${variant} size-${size} style-${styleProp} ${className} ${clickable ? "clickable" : ""} ${disabled ? "disabled" : ""} ${loading ? "loading" : ""} ${selected ? "selected" : ""}`,
      style: { ...styleConfig, ...style },
      role: clickable ? "button" : "region",
      "aria-label": label,
      "aria-pressed": clickable ? selected : void 0,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: clickable && !disabled ? 0 : void 0,
      disabled: clickable && disabled,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "div",
          {
            className: "loading-spinner",
            style: {
              width: config.iconSize,
              height: config.iconSize,
              border: `2px solid ${colors.gray[300]}`,
              borderTop: `2px solid ${selectedColor[500]}`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginRight: spacing[1]
            }
          }
        ),
        icon && !loading && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "span",
          {
            className: "tag-chip-icon",
            style: {
              fontSize: config.iconSize,
              display: "inline-flex",
              alignItems: "center"
            },
            children: icon
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "span",
          {
            className: "tag-chip-label",
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "200px"
            },
            children: label
          }
        ),
        removable && !loading && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "button",
          {
            className: "tag-chip-remove",
            type: "button",
            "aria-label": `Remove ${label}`,
            onClick: handleRemoveClick,
            onKeyDown: handleRemoveKeyDown,
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: config.iconSize,
              height: config.iconSize,
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "50%",
              cursor: disabled ? "not-allowed" : "pointer",
              marginLeft: spacing[1],
              transition: "background-color 0.2s ease",
              ...styleProp === "filled" && {
                color: colors.white,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }
              },
              ...styleProp !== "filled" && {
                color: "inherit",
                "&:hover": {
                  backgroundColor: `${selectedColor[500]}20`
                }
              }
            },
            disabled,
            children: closeIcon || /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_phosphor_react13.X, { size: parseInt(config.iconSize) * 0.75 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("style", { children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .tag-chip.clickable:focus {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }

        .tag-chip.clickable:focus-visible {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }

        .tag-chip-remove:focus {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 1px;
        }

        .tag-chip-remove:focus-visible {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 1px;
        }
      ` })
      ]
    }
  );
});
TagChip.displayName = "TagChip";

// src/components/Timeline/Timeline.tsx
var import_react29 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var TimelineItem = (0, import_react29.forwardRef)(({
  item,
  size = "md",
  showTimestamp = true,
  timestampFormat,
  onClick,
  className = "",
  style = {},
  ...props
}, ref) => {
  const {
    id,
    title,
    description,
    timestamp,
    icon,
    variant = "default",
    style: itemStyle = "filled",
    loading = false,
    selected = false,
    disabled = false
  } = item;
  const sizeConfig = {
    sm: {
      padding: spacing[2],
      iconSize: "1rem",
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      borderRadius: radii.sm,
      iconPadding: spacing[1]
    },
    md: {
      padding: spacing[3],
      iconSize: "1.25rem",
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      borderRadius: radii.md,
      iconPadding: spacing[2]
    },
    lg: {
      padding: spacing[4],
      iconSize: "1.5rem",
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      borderRadius: radii.lg,
      iconPadding: spacing[3]
    }
  };
  const config = sizeConfig[size];
  const colorMap = {
    default: colors.gray,
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info
  };
  const selectedColor = colorMap[variant];
  const formatTimestamp = (timestamp2, format) => {
    const date = new Date(timestamp2);
    if (format) {
      return date.toLocaleDateString();
    }
    return date.toLocaleString();
  };
  const getItemStyles = () => {
    const baseStyles = {
      display: "flex",
      alignItems: "flex-start",
      gap: spacing[3],
      padding: config.padding,
      borderRadius: config.borderRadius,
      transition: "all 0.2s ease",
      cursor: onClick && !disabled ? "pointer" : "default",
      opacity: disabled ? 0.6 : 1,
      position: "relative"
    };
    let variantStyles;
    switch (itemStyle) {
      case "filled":
        variantStyles = {
          backgroundColor: selected ? selectedColor[100] : colors.white,
          border: `1px solid ${selected ? selectedColor[300] : colors.gray[200]}`,
          ...onClick && !disabled && {
            "&:hover": {
              backgroundColor: selectedColor[50],
              borderColor: selectedColor[300],
              transform: "translateY(-1px)",
              boxShadow: shadows.sm
            }
          }
        };
        break;
      case "outlined":
        variantStyles = {
          backgroundColor: "transparent",
          border: `2px solid ${selected ? selectedColor[500] : selectedColor[300]}`,
          ...onClick && !disabled && {
            "&:hover": {
              backgroundColor: `${selectedColor[500]}10`,
              borderColor: selectedColor[500]
            }
          }
        };
        break;
      case "ghost":
        variantStyles = {
          backgroundColor: selected ? `${selectedColor[500]}15` : "transparent",
          border: "none",
          ...onClick && !disabled && {
            "&:hover": {
              backgroundColor: `${selectedColor[500]}10`
            }
          }
        };
        break;
      default:
        variantStyles = {};
    }
    return {
      ...baseStyles,
      ...variantStyles,
      ...style
      // Custom styles override default styles
    };
  };
  const getIconStyles = () => {
    const baseIconStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: config.iconSize,
      height: config.iconSize,
      borderRadius: "50%",
      flexShrink: 0,
      fontSize: config.iconSize
    };
    switch (itemStyle) {
      case "filled":
        return {
          ...baseIconStyles,
          backgroundColor: selectedColor[500],
          color: colors.white
        };
      case "outlined":
        return {
          ...baseIconStyles,
          backgroundColor: "transparent",
          color: selectedColor[500],
          border: `2px solid ${selectedColor[500]}`
        };
      case "ghost":
        return {
          ...baseIconStyles,
          backgroundColor: `${selectedColor[500]}20`,
          color: selectedColor[600]
        };
      default:
        return {
          ...baseIconStyles,
          backgroundColor: selectedColor[500],
          color: colors.white
        };
    }
  };
  const itemStyles = getItemStyles();
  const iconStyles = getIconStyles();
  const handleClick = (event) => {
    if (onClick && !disabled && !loading) {
      onClick(item);
    }
  };
  const handleKeyDown = (event) => {
    if (onClick && !disabled && !loading && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick(item);
    }
  };
  const Component = onClick ? "button" : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    Component,
    {
      ref,
      className: `timeline-item variant-${variant} size-${size} style-${itemStyle} ${className} ${onClick ? "clickable" : ""} ${disabled ? "disabled" : ""} ${loading ? "loading" : ""} ${selected ? "selected" : ""}`,
      style: itemStyles,
      role: onClick ? "button" : "listitem",
      "aria-label": `${title}${description ? `: ${description}` : ""}`,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: onClick && !disabled ? 0 : void 0,
      disabled: onClick && disabled,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "timeline-item-icon", style: iconStyles, children: loading ? /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "div",
          {
            style: {
              width: "0.75rem",
              height: "0.75rem",
              border: `2px solid ${colors.gray[300]}`,
              borderTop: `2px solid ${selectedColor[500]}`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          }
        ) : icon }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "timeline-item-content", style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "div",
            {
              className: "timeline-item-title",
              style: {
                fontSize: config.titleFontSize,
                fontWeight: typography.fontWeight.semiBold,
                color: colors.gray[900],
                marginBottom: description ? spacing[1] : 0,
                lineHeight: typography.lineHeight.tight
              },
              children: title
            }
          ),
          description && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "div",
            {
              className: "timeline-item-description",
              style: {
                fontSize: config.fontSize,
                color: colors.gray[600],
                lineHeight: typography.lineHeight.relaxed,
                marginBottom: showTimestamp ? spacing[1] : 0
              },
              children: description
            }
          ),
          showTimestamp && timestamp && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "div",
            {
              className: "timeline-item-timestamp",
              style: {
                fontSize: typography.fontSize.caption,
                color: colors.gray[500],
                fontWeight: typography.fontWeight.medium
              },
              children: formatTimestamp(timestamp, timestampFormat)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("style", { children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .timeline-item.clickable:focus {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }

        .timeline-item.clickable:focus-visible {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }
      ` })
      ]
    }
  );
});
TimelineItem.displayName = "TimelineItem";
var Timeline = (0, import_react29.forwardRef)(({
  items,
  orientation = "vertical",
  size = "md",
  variant = "default",
  showConnector = true,
  showTimestamps = true,
  connector,
  connectorStyle = "solid",
  connectorColor = "gray",
  loading = false,
  emptyMessage = "No activities yet",
  emptyComponent,
  itemRenderer,
  onItemClick,
  className = "",
  style = {},
  ...props
}, ref) => {
  const sizeConfig = {
    sm: {
      itemSpacing: spacing[3],
      iconSize: "1rem",
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      connectorWidth: "2px"
    },
    md: {
      itemSpacing: spacing[4],
      iconSize: "1.25rem",
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      connectorWidth: "2px"
    },
    lg: {
      itemSpacing: spacing[5],
      iconSize: "1.5rem",
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      connectorWidth: "3px"
    }
  };
  const config = sizeConfig[size];
  const connectorColorMap = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    gray: colors.gray[300]
  };
  const formatTimestamp = (timestamp, format) => {
    const date = new Date(timestamp);
    if (format) {
      return date.toLocaleDateString();
    }
    return date.toLocaleString();
  };
  const renderLoading = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      className: "timeline-loading",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing[8],
        color: colors.gray[500]
      },
      "aria-label": "Loading timeline",
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "div",
        {
          style: {
            width: "2rem",
            height: "2rem",
            border: `3px solid ${colors.gray[200]}`,
            borderTop: `3px solid ${colors.primary[500]}`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }
        }
      )
    }
  );
  const renderEmpty = () => {
    if (emptyComponent) {
      return emptyComponent;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "div",
      {
        className: "timeline-empty",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: spacing[8],
          color: colors.gray[500],
          textAlign: "center"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "div",
            {
              style: {
                fontSize: "2rem",
                marginBottom: spacing[2],
                opacity: 0.5
              },
              children: "\u{1F4C5}"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { style: { fontSize: config.fontSize }, children: emptyMessage })
        ] })
      }
    );
  };
  const renderConnector = (isLast) => {
    if (!showConnector || isLast) return null;
    if (connector) {
      return connector;
    }
    const connectorStyles = {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "div",
      {
        className: "timeline-connector",
        style: {
          position: "absolute",
          left: "50%",
          top: "100%",
          transform: "translateX(-50%)",
          width: config.connectorWidth,
          height: config.itemSpacing,
          backgroundColor: connectorColorMap[connectorColor],
          borderStyle: connectorStyles[connectorStyle],
          borderWidth: "0 0 0 2px",
          borderColor: connectorColorMap[connectorColor],
          zIndex: 1
        }
      }
    );
  };
  const renderItem = (item, index) => {
    if (itemRenderer) {
      return itemRenderer({ item, index });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      TimelineItem,
      {
        item,
        size,
        showTimestamp: showTimestamps,
        timestampFormat: item.timestampFormat,
        onClick: onItemClick,
        style: {
          marginBottom: index < items.length - 1 ? config.itemSpacing : 0
        }
      },
      item.id
    );
  };
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "div",
      {
        ref,
        className: `timeline loading ${className}`,
        style,
        ...props,
        children: renderLoading()
      }
    );
  }
  if (items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "div",
      {
        ref,
        className: `timeline empty ${className}`,
        style,
        ...props,
        children: renderEmpty()
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "div",
    {
      ref,
      className: `timeline orientation-${orientation} size-${size} variant-${variant} ${className}`,
      style: {
        position: "relative",
        ...orientation === "vertical" && {
          display: "flex",
          flexDirection: "column"
        },
        ...orientation === "horizontal" && {
          display: "flex",
          flexDirection: "row",
          overflowX: "auto"
        },
        ...style
      },
      role: "list",
      ...props,
      children: [
        items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
          "div",
          {
            className: "timeline-item-wrapper",
            style: {
              position: "relative",
              ...orientation === "vertical" && {
                display: "flex",
                flexDirection: "column"
              },
              ...orientation === "horizontal" && {
                flex: "0 0 auto",
                minWidth: "200px"
              }
            },
            children: [
              renderItem(item, index),
              renderConnector(index === items.length - 1)
            ]
          },
          item.id
        )),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("style", { children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .timeline-item-wrapper:last-child .timeline-connector {
          display: none;
        }
      ` })
      ]
    }
  );
});
Timeline.displayName = "Timeline";

// src/components/NotificationCenter/NotificationCenter.tsx
var import_react30 = require("react");
var import_phosphor_react14 = require("phosphor-react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Notification = (0, import_react30.forwardRef)(({
  notification,
  size = "md",
  variant = "default",
  showProgress = false,
  showIcon = true,
  onDismiss,
  onAction,
  className = "",
  ...props
}, ref) => {
  const {
    id,
    title,
    message,
    type = "info",
    icon,
    duration = 5e3,
    dismissible = true,
    action,
    loading = false,
    disabled = false
  } = notification;
  const [progress, setProgress] = (0, import_react30.useState)(100);
  const [isVisible, setIsVisible] = (0, import_react30.useState)(true);
  const sizeConfig = {
    sm: {
      padding: spacing[2],
      iconSize: "1rem",
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      borderRadius: radii.sm,
      iconPadding: spacing[1]
    },
    md: {
      padding: spacing[3],
      iconSize: "1.25rem",
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      borderRadius: radii.md,
      iconPadding: spacing[2]
    },
    lg: {
      padding: spacing[4],
      iconSize: "1.5rem",
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      borderRadius: radii.lg,
      iconPadding: spacing[3]
    }
  };
  const config = sizeConfig[size];
  (0, import_react30.useEffect)(() => {
    if (duration > 0 && !disabled && onDismiss) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onDismiss(id), 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onDismiss, disabled]);
  const colorMap = {
    success: {
      main: colors.success[500],
      bg: colors.success[50],
      border: colors.success[200],
      text: colors.success[800],
      icon: colors.success[600]
    },
    error: {
      main: colors.error[500],
      bg: colors.error[50],
      border: colors.error[200],
      text: colors.error[800],
      icon: colors.error[600]
    },
    warning: {
      main: colors.warning[500],
      bg: colors.warning[50],
      border: colors.warning[200],
      text: colors.warning[800],
      icon: colors.warning[600]
    },
    info: {
      main: colors.info[500],
      bg: colors.info[50],
      border: colors.info[200],
      text: colors.info[800],
      icon: colors.info[600]
    }
  };
  const selectedColor = colorMap[type];
  const defaultIcons = {
    success: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react14.Check, { size: 16 }),
    error: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react14.XCircle, { size: 16 }),
    warning: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react14.Warning, { size: 16 }),
    info: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react14.Info, { size: 16 })
  };
  const getNotificationStyles = () => {
    const baseStyles = {
      display: "flex",
      alignItems: "flex-start",
      gap: spacing[3],
      padding: config.padding,
      borderRadius: config.borderRadius,
      border: `1px solid ${selectedColor.border}`,
      backgroundColor: selectedColor.bg,
      boxShadow: shadows.sm,
      transition: "all 0.3s ease",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0)" : "translateX(100%)",
      position: "relative",
      minWidth: "300px",
      maxWidth: "400px",
      ...props.style
    };
    if (variant === "compact") {
      return {
        ...baseStyles,
        padding: spacing[2],
        minWidth: "250px",
        maxWidth: "300px"
      };
    }
    return baseStyles;
  };
  const getIconStyles = () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: config.iconSize,
    height: config.iconSize,
    borderRadius: "50%",
    backgroundColor: selectedColor.main,
    color: colors.white,
    flexShrink: 0,
    fontSize: config.iconSize
  });
  const notificationStyles = getNotificationStyles();
  const iconStyles = getIconStyles();
  const handleDismiss = () => {
    if (dismissible && !disabled) {
      setIsVisible(false);
      setTimeout(() => onDismiss?.(id), 300);
    }
  };
  const handleAction = () => {
    if (action && !disabled) {
      action.onClick(id, notification);
    }
  };
  if (!isVisible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      ref,
      className: `notification type-${type} size-${size} variant-${variant} ${className} ${disabled ? "disabled" : ""} ${loading ? "loading" : ""}`,
      role: "alert",
      "aria-live": "polite",
      style: notificationStyles,
      ...props,
      children: [
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "notification-icon", style: iconStyles, children: loading ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "div",
          {
            style: {
              width: "0.75rem",
              height: "0.75rem",
              border: `2px solid ${colors.gray[300]}`,
              borderTop: `2px solid ${colors.white}`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          }
        ) : icon || defaultIcons[type] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "notification-content", style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "div",
            {
              className: "notification-title",
              style: {
                fontSize: config.titleFontSize,
                fontWeight: typography.fontWeight.semiBold,
                color: selectedColor.text,
                marginBottom: message ? spacing[1] : 0,
                lineHeight: typography.lineHeight.tight
              },
              children: title
            }
          ),
          message && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "div",
            {
              className: "notification-message",
              style: {
                fontSize: config.fontSize,
                color: colors.gray[600],
                lineHeight: typography.lineHeight.relaxed,
                marginBottom: action ? spacing[2] : 0
              },
              children: message
            }
          ),
          action && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Button,
            {
              variant: "outlined",
              size: "sm",
              onClick: handleAction,
              disabled,
              style: {
                marginTop: spacing[1]
              },
              children: action.label
            }
          )
        ] }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss notification",
            onClick: handleDismiss,
            disabled,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: disabled ? "not-allowed" : "pointer",
              padding: spacing[1],
              color: colors.gray[400],
              transition: "color 0.2s ease",
              flexShrink: 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_phosphor_react14.X, { size: 16 })
          }
        ),
        showProgress && duration > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "div",
          {
            className: "notification-progress",
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: selectedColor.border,
              borderRadius: `0 0 ${config.borderRadius} ${config.borderRadius}`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "div",
              {
                style: {
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: selectedColor.main,
                  transition: "width 0.1s linear",
                  borderRadius: `0 0 ${config.borderRadius} ${config.borderRadius}`
                }
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("style", { children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .notification:hover {
          box-shadow: ${shadows.md};
          transform: translateY(-1px);
        }

        .notification.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .notification.disabled:hover {
          transform: none;
          box-shadow: ${shadows.sm};
        }
      ` })
      ]
    }
  );
});
Notification.displayName = "Notification";
var NotificationCenter = (0, import_react30.forwardRef)(({
  notifications,
  position = "top-right",
  size = "md",
  variant = "default",
  maxNotifications = 5,
  showProgress = false,
  showIcons = true,
  stackDirection = "down",
  animation = "slide",
  notificationRenderer,
  onDismiss,
  onAction,
  className = "",
  style = {},
  ...props
}, ref) => {
  const limitedNotifications = notifications.slice(0, maxNotifications);
  const getPositionStyles = () => {
    const baseStyles = {
      position: "fixed",
      zIndex: 1e3,
      pointerEvents: "none"
    };
    switch (position) {
      case "top-left":
        return { ...baseStyles, top: spacing[4], left: spacing[4] };
      case "top-right":
        return { ...baseStyles, top: spacing[4], right: spacing[4] };
      case "bottom-left":
        return { ...baseStyles, bottom: spacing[4], left: spacing[4] };
      case "bottom-right":
        return { ...baseStyles, bottom: spacing[4], right: spacing[4] };
      case "top-center":
        return { ...baseStyles, top: spacing[4], left: "50%", transform: "translateX(-50%)" };
      case "bottom-center":
        return { ...baseStyles, bottom: spacing[4], left: "50%", transform: "translateX(-50%)" };
      default:
        return { ...baseStyles, top: spacing[4], right: spacing[4] };
    }
  };
  const getContainerStyles2 = () => ({
    display: "flex",
    flexDirection: stackDirection === "up" ? "column-reverse" : "column",
    gap: spacing[2],
    pointerEvents: "auto",
    ...getPositionStyles(),
    ...style
  });
  const renderNotification = (notification) => {
    if (notificationRenderer) {
      return notificationRenderer({ notification, onDismiss, onAction });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      Notification,
      {
        notification,
        size,
        variant,
        showProgress,
        showIcon: showIcons,
        onDismiss,
        onAction
      },
      notification.id
    );
  };
  if (limitedNotifications.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "div",
    {
      ref,
      className: `notification-center position-${position} stack-${stackDirection} animation-${animation} ${className}`,
      style: getContainerStyles2(),
      role: "region",
      "aria-label": "Notifications",
      "aria-live": "polite",
      ...props,
      children: limitedNotifications.map((notification) => renderNotification(notification))
    }
  );
});
NotificationCenter.displayName = "NotificationCenter";

// src/components/Version/Version.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var Version = ({
  version,
  badge = false,
  showBuildInfo = false,
  className = "",
  style,
  size = "body2",
  variant = "secondary"
}) => {
  const currentVersion = version || "0.1.0";
  const buildInfo = showBuildInfo ? {
    buildTime: (/* @__PURE__ */ new Date()).toISOString(),
    nodeVersion: process.env.NODE_VERSION || "unknown",
    buildEnv: process.env.NODE_ENV || "development"
  } : null;
  const getVariantColor = () => {
    switch (variant) {
      case "primary":
        return colors.primary[600];
      case "secondary":
        return colors.gray[600];
      case "muted":
        return colors.gray[500];
      case "success":
        return colors.success[600];
      case "warning":
        return colors.warning[600];
      case "error":
        return colors.error[600];
      default:
        return colors.gray[600];
    }
  };
  const versionStyles = {
    color: getVariantColor(),
    ...style
  };
  const badgeStyles = {
    display: "inline-flex",
    alignItems: "center",
    padding: `${spacing[1]} ${spacing[2]}`,
    backgroundColor: colors.gray[100],
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radii.sm,
    boxShadow: shadows.xs,
    ...versionStyles
  };
  const buildInfoStyles = {
    marginTop: spacing[1],
    fontSize: "0.75rem",
    color: colors.gray[500],
    fontFamily: "monospace"
  };
  if (badge) {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: `version-badge ${className}`, style: badgeStyles, children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(Typography, { variant: size, style: { color: "inherit", margin: 0 }, children: [
        "v",
        currentVersion
      ] }),
      showBuildInfo && buildInfo && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { style: buildInfoStyles, children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
          "Build: ",
          buildInfo.buildTime
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
          "Node: ",
          buildInfo.nodeVersion
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
          "Env: ",
          buildInfo.buildEnv
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: `version ${className}`, style: versionStyles, children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(Typography, { variant: size, style: { color: "inherit", margin: 0 }, children: [
      "v",
      currentVersion
    ] }),
    showBuildInfo && buildInfo && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { style: buildInfoStyles, children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
        "Build: ",
        buildInfo.buildTime
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
        "Node: ",
        buildInfo.nodeVersion
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
        "Env: ",
        buildInfo.buildEnv
      ] })
    ] })
  ] });
};
Version.displayName = "Version";

// src/components/Drawer/Drawer.tsx
var import_react31 = require("react");
var import_react_dom3 = require("react-dom");
var import_phosphor_react15 = require("phosphor-react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  header,
  footer,
  position = "right",
  size = "md",
  variant = "default",
  showCloseButton = true,
  showOverlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockBodyScroll = true,
  usePortal = true,
  zIndex = 9999,
  animationDuration = 300,
  loading = false,
  overlayClassName = "",
  overlayStyle,
  className = "",
  style,
  ...props
}) => {
  const [isVisible, setIsVisible] = (0, import_react31.useState)(false);
  const [isAnimating, setIsAnimating] = (0, import_react31.useState)(false);
  const drawerRef = (0, import_react31.useRef)(null);
  const previousActiveElement = (0, import_react31.useRef)(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react31.useState)(false);
  (0, import_react31.useEffect)(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  (0, import_react31.useEffect)(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      previousActiveElement.current = document.activeElement;
      setTimeout(() => {
        if (drawerRef.current) {
          drawerRef.current.focus();
        }
      }, 50);
      setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      }, animationDuration);
    }
  }, [isOpen, animationDuration]);
  (0, import_react31.useEffect)(() => {
    if (isOpen && lockBodyScroll) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, lockBodyScroll]);
  (0, import_react31.useEffect)(() => {
    if (!isOpen || !closeOnEscape) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape, onClose]);
  const handleOverlayClick = (0, import_react31.useCallback)((event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);
  const handleKeyDown = (0, import_react31.useCallback)((event) => {
    if (event.key === "Tab") {
      const drawer = drawerRef.current;
      if (!drawer) return;
      const focusableElements = drawer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    }
  }, []);
  const drawerClasses = [
    "drawer",
    `drawer--${position}`,
    `drawer--${size}`,
    `drawer--${variant}`,
    isOpen && "drawer--open",
    isAnimating && "drawer--animating",
    !prefersReducedMotion && "drawer--animated",
    prefersReducedMotion && "drawer--no-animation",
    loading && "drawer--loading",
    className
  ].filter(Boolean).join(" ");
  const overlayClasses = [
    "drawer__overlay",
    isOpen && "drawer__overlay--open",
    isAnimating && "drawer__overlay--animating",
    overlayClassName
  ].filter(Boolean).join(" ");
  const drawerStyles = {
    zIndex,
    transitionDuration: `${animationDuration}ms`,
    ...style
  };
  const overlayStyles = {
    zIndex: zIndex - 1,
    transitionDuration: `${animationDuration}ms`,
    ...overlayStyle
  };
  if (!isVisible) {
    return null;
  }
  const drawerContent = /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
    showOverlay && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "div",
      {
        className: overlayClasses,
        style: overlayStyles,
        onClick: handleOverlayClick,
        "data-testid": "drawer-overlay",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
      "div",
      {
        ref: drawerRef,
        className: drawerClasses,
        style: drawerStyles,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? "drawer-title" : void 0,
        tabIndex: -1,
        onKeyDown: handleKeyDown,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "drawer__loading", "data-testid": "drawer-loading", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_phosphor_react15.Spinner, { size: 24, className: "animate-spin" }) }),
          (title || header || showCloseButton) && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "drawer__header", children: header || /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
              Typography,
              {
                id: "drawer-title",
                variant: "h3",
                weight: "semibold",
                className: "drawer__title",
                children: title
              }
            ),
            showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: onClose,
                "aria-label": "Close drawer",
                className: "drawer__close-button",
                children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_phosphor_react15.X, { size: 20 })
              }
            )
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "drawer__content", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "drawer__footer", children: footer })
        ]
      }
    )
  ] });
  if (usePortal) {
    return (0, import_react_dom3.createPortal)(drawerContent, document.body);
  }
  return drawerContent;
};

// src/components/Backgrounds/Backgrounds.tsx
var import_react32 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var Backgrounds = ({
  children,
  variant = "plain",
  gradientType = "linear",
  gradientDirection = "to-right",
  gradientColors,
  gradientStops,
  gradientPosition = "center",
  patternType = "dots",
  patternSize = "20px",
  patternOpacity = 0.1,
  patternColor,
  textureType = "paper",
  textureIntensity = 0.5,
  textureScale = 1,
  modernType = "radial-glow",
  colorScheme = "primary",
  size = "md",
  intensity = "medium",
  animated = false,
  animationDuration = 3e3,
  animationDelay = 0,
  showOverlay = false,
  overlayOpacity = 0.1,
  overlayColor = "#000000",
  responsive = true,
  className = "",
  style,
  ariaLabel,
  ariaDescribedBy,
  ariaLabelledBy,
  ...props
}) => {
  const gradientBackground = (0, import_react32.useMemo)(() => {
    if (variant !== "gradient") return "";
    const colors2 = gradientColors || getDefaultGradientColors(colorScheme);
    const stops = gradientStops || getDefaultGradientStops(colors2.length);
    let gradient = "";
    switch (gradientType) {
      case "linear":
        gradient = `linear-gradient(${gradientDirection}, ${colors2.map(
          (color, index) => `${color} ${stops[index] || "0%"}`
        ).join(", ")})`;
        break;
      case "radial":
        gradient = `radial-gradient(circle at ${gradientPosition}, ${colors2.map(
          (color, index) => `${color} ${stops[index] || "0%"}`
        ).join(", ")})`;
        break;
      case "conic":
        gradient = `conic-gradient(from ${gradientDirection}, ${colors2.map(
          (color, index) => `${color} ${stops[index] || "0%"}`
        ).join(", ")})`;
        break;
    }
    return gradient;
  }, [variant, gradientType, gradientDirection, gradientColors, gradientStops, gradientPosition, colorScheme]);
  const patternBackground = (0, import_react32.useMemo)(() => {
    if (variant !== "pattern") return "";
    const color = patternColor || getDefaultPatternColor(colorScheme);
    const opacity = patternOpacity;
    switch (patternType) {
      case "dots":
        return `radial-gradient(circle at 1px 1px, ${color} ${opacity}, transparent 0)`;
      case "grid":
        return `linear-gradient(${color} ${opacity} 1px, transparent 1px), linear-gradient(90deg, ${color} ${opacity} 1px, transparent 1px)`;
      case "lines":
        return `repeating-linear-gradient(45deg, transparent, transparent 2px, ${color} ${opacity} 2px, ${color} ${opacity} 4px)`;
      case "waves":
        return `radial-gradient(ellipse at center, ${color} ${opacity} 0%, transparent 70%)`;
      case "geometric":
        return `conic-gradient(from 0deg at 50% 50%, ${color} ${opacity} 0deg, transparent 60deg, ${color} ${opacity} 120deg, transparent 180deg, ${color} ${opacity} 240deg, transparent 300deg)`;
      default:
        return "";
    }
  }, [variant, patternType, patternColor, patternOpacity, colorScheme]);
  const textureBackground = (0, import_react32.useMemo)(() => {
    if (variant !== "texture") return "";
    const intensity2 = textureIntensity;
    const scale = textureScale;
    switch (textureType) {
      case "paper":
        return `radial-gradient(circle at 20% 50%, transparent 20%, rgba(255,255,255,${intensity2}) 21%, rgba(255,255,255,${intensity2}) 34%, transparent 35%, transparent), linear-gradient(0deg, rgba(255,255,255,${intensity2 * 0.5}) 50%, transparent 50%)`;
      case "fabric":
        return `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,${intensity2 * 0.3}) 2px, rgba(255,255,255,${intensity2 * 0.3}) 4px), repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,${intensity2 * 0.1}) 2px, rgba(0,0,0,${intensity2 * 0.1}) 4px)`;
      case "metal":
        return `linear-gradient(45deg, rgba(255,255,255,${intensity2 * 0.8}) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,${intensity2 * 0.8}) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,${intensity2 * 0.4}) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,${intensity2 * 0.4}) 75%)`;
      case "wood":
        return `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139,69,19,${intensity2 * 0.3}) 2px, rgba(139,69,19,${intensity2 * 0.3}) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(160,82,45,${intensity2 * 0.2}) 2px, rgba(160,82,45,${intensity2 * 0.2}) 4px)`;
      default:
        return "";
    }
  }, [variant, textureType, textureIntensity, textureScale]);
  const modernBackground = (0, import_react32.useMemo)(() => {
    if (variant !== "modern") return "";
    const colors2 = getDefaultGradientColors(colorScheme);
    switch (modernType) {
      case "radial-glow":
        return `radial-gradient(60% 120% at 50% 50%, hsla(0,0%,100%,0) 0, ${colors2[0]}50 100%)`;
      case "grid-dots":
        return `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px), radial-gradient(circle 400px at 50% 300px, ${colors2[0]}36, #000)`;
      case "mesh-gradient":
        return `radial-gradient(125% 125% at 50% 10%, #fff 40%, ${colors2[0]} 100%)`;
      case "noise":
        return `radial-gradient(#ffffff33 1px, #00091d 1px), url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
      case "aurora":
        return `linear-gradient(45deg, ${colors2[0]}20, ${colors2[1]}20, ${colors2[0]}20), radial-gradient(circle at 20% 50%, ${colors2[0]}40, transparent 50%), radial-gradient(circle at 80% 20%, ${colors2[1]}40, transparent 50%), radial-gradient(circle at 40% 80%, ${colors2[0]}40, transparent 50%)`;
      case "waves":
        return `radial-gradient(circle at 50% 50%, ${colors2[0]}20, transparent 50%), radial-gradient(circle at 80% 20%, ${colors2[1]}20, transparent 50%), radial-gradient(circle at 20% 80%, ${colors2[0]}20, transparent 50%)`;
      default:
        return "";
    }
  }, [variant, modernType, colorScheme]);
  const backgroundClasses = [
    "backgrounds",
    `backgrounds--${variant}`,
    variant === "gradient" && `backgrounds--gradient-${gradientType}`,
    variant === "gradient" && `backgrounds--gradient-${gradientDirection}`,
    variant === "pattern" && `backgrounds--pattern-${patternType}`,
    variant === "texture" && `backgrounds--texture-${textureType}`,
    variant === "modern" && `backgrounds--modern-${modernType}`,
    `backgrounds--color-${colorScheme}`,
    `backgrounds--${size}`,
    `backgrounds--intensity-${intensity}`,
    animated && "backgrounds--animated",
    showOverlay && "backgrounds--overlay",
    responsive && "backgrounds--responsive",
    className
  ].filter(Boolean).join(" ");
  const backgroundStyles = {
    ...variant === "gradient" && gradientBackground && {
      background: gradientBackground,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    },
    ...variant === "pattern" && patternBackground && {
      backgroundImage: patternBackground,
      backgroundSize: patternSize,
      backgroundPosition: "center",
      backgroundRepeat: "repeat"
    },
    ...variant === "texture" && textureBackground && {
      backgroundImage: textureBackground,
      backgroundSize: `${100 * textureScale}%`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    },
    ...variant === "modern" && modernBackground && {
      background: modernBackground,
      backgroundSize: modernType === "noise" ? "20px 20px, 100% 100%" : "cover",
      backgroundPosition: "center",
      backgroundRepeat: modernType === "noise" ? "repeat, no-repeat" : "no-repeat"
    },
    ...animated && {
      animationDuration: `${animationDuration}ms`,
      animationDelay: `${animationDelay}ms`
    },
    ...showOverlay && {
      position: "relative"
    },
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "div",
    {
      className: backgroundClasses,
      style: backgroundStyles,
      role: "region",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-labelledby": ariaLabelledBy,
      ...props,
      children: [
        showOverlay && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "div",
          {
            className: "backgrounds__overlay",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
              pointerEvents: "none",
              zIndex: 1
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "backgrounds__content", style: { position: "relative", zIndex: 2 }, children })
      ]
    }
  );
};
function getDefaultGradientColors(colorScheme) {
  switch (colorScheme) {
    case "primary":
      return ["var(--cria-primary)", "var(--cria-primary-dark)"];
    case "secondary":
      return ["var(--cria-secondary)", "var(--cria-secondary-dark)"];
    case "neutral":
      return ["var(--cria-background-light)", "var(--cria-background-dark)"];
    case "accent":
      return ["var(--cria-primary-light)", "var(--cria-primary-darker)"];
    default:
      return ["var(--cria-primary)", "var(--cria-primary-dark)"];
  }
}
function getDefaultGradientStops(count) {
  const stops = [];
  for (let i = 0; i < count; i++) {
    stops.push(`${i / (count - 1) * 100}%`);
  }
  return stops;
}
function getDefaultPatternColor(colorScheme) {
  switch (colorScheme) {
    case "primary":
      return "var(--cria-primary)";
    case "secondary":
      return "var(--cria-secondary)";
    case "neutral":
      return "var(--cria-text-secondary)";
    case "accent":
      return "var(--cria-primary-light)";
    default:
      return "var(--cria-primary)";
  }
}

// src/components/Changelog/Changelog.tsx
var import_react33 = require("react");
var import_phosphor_react16 = require("phosphor-react");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Changelog = ({
  entries,
  itemsPerPage = 5,
  showPagination = true,
  className = "",
  style,
  ...props
}) => {
  const [currentPage, setCurrentPage] = (0, import_react33.useState)(1);
  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const paginatedEntries = (0, import_react33.useMemo)(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return entries.slice(startIndex, endIndex);
  }, [entries, currentPage, itemsPerPage]);
  const getTypeColor = (type) => {
    switch (type) {
      case "major":
        return "error";
      case "minor":
        return "warning";
      case "patch":
        return "success";
      case "hotfix":
        return "info";
      default:
        return "default";
    }
  };
  const getChangeTypeColor = (type) => {
    switch (type) {
      case "added":
        return "success";
      case "changed":
        return "warning";
      case "deprecated":
        return "info";
      case "removed":
        return "error";
      case "fixed":
        return "success";
      case "security":
        return "error";
      default:
        return "default";
    }
  };
  const getChangeTypeIcon = (type) => {
    const iconProps = { size: 16, style: { marginRight: spacing[1] } };
    switch (type) {
      case "added":
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Plus, { ...iconProps });
      case "changed":
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.ArrowsClockwise, { ...iconProps });
      case "deprecated":
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Warning, { ...iconProps });
      case "removed":
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Minus, { ...iconProps });
      case "fixed":
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Wrench, { ...iconProps });
      case "security":
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Lock, { ...iconProps });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Tag, { ...iconProps });
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const renderPagination = () => {
    if (!showPagination || totalPages <= 1) return null;
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    if (currentPage > 1) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => handlePageChange(currentPage - 1),
            style: { marginRight: spacing[2] },
            children: "Previous"
          },
          "prev"
        )
      );
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          Button,
          {
            variant: i === currentPage ? "primary" : "outline",
            size: "sm",
            onClick: () => handlePageChange(i),
            style: { marginRight: spacing[2] },
            children: i
          },
          i
        )
      );
    }
    if (currentPage < totalPages) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => handlePageChange(currentPage + 1),
            style: { marginLeft: spacing[2] },
            children: "Next"
          },
          "next"
        )
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: spacing[8],
      gap: spacing[2]
    }, children: pages });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "div",
    {
      className: `changelog ${className}`,
      style: {
        width: "100%",
        ...style
      },
      ...props,
      children: [
        paginatedEntries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(Card, { style: { marginBottom: spacing[6] }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: spacing[4]
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[4] }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Typography, { variant: "title2", style: { margin: 0 }, children: entry.title }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Badge, { variant: getTypeColor(entry.type), size: "sm", children: entry.version })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: spacing[4],
              color: "#666",
              fontSize: "14px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[1] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Calendar, { size: 16 }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: entry.date })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[1] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.User, { size: 16 }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: entry.author })
              ] }),
              entry.branch && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[1] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.GitBranch, { size: 16 }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: entry.branch })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(CardContent, { children: [
            entry.description && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Typography, { variant: "body", style: { marginBottom: spacing[4], color: "#666" }, children: entry.description }),
            entry.changes.map((change, index) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: { marginBottom: spacing[4] }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: spacing[2],
                marginBottom: spacing[2]
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { style: { display: "flex", alignItems: "center" }, children: getChangeTypeIcon(change.type) }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Badge, { variant: getChangeTypeColor(change.type), size: "sm", children: change.type.charAt(0).toUpperCase() + change.type.slice(1) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("ul", { style: {
                margin: 0,
                paddingLeft: spacing[6],
                listStyle: "none"
              }, children: change.items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("li", { style: {
                marginBottom: spacing[1],
                position: "relative"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { style: {
                  position: "absolute",
                  left: `-${spacing[4]}`,
                  color: "#666"
                }, children: "\u2022" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Typography, { variant: "body", style: { margin: 0 }, children: item })
              ] }, itemIndex)) })
            ] }, index)),
            entry.breaking && entry.breaking.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { style: {
              marginTop: spacing[4],
              padding: spacing[4],
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: spacing[2]
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(Typography, { variant: "title3", style: {
                color: "#dc2626",
                marginBottom: spacing[2],
                fontWeight: "bold"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_phosphor_react16.Warning, { size: 16, style: { marginRight: spacing[1] } }),
                "Breaking Changes"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("ul", { style: {
                margin: 0,
                paddingLeft: spacing[6],
                listStyle: "none"
              }, children: entry.breaking.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("li", { style: {
                marginBottom: spacing[1],
                position: "relative"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { style: {
                  position: "absolute",
                  left: `-${spacing[4]}`,
                  color: "#dc2626"
                }, children: "\u2022" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Typography, { variant: "body", style: { margin: 0, color: "#dc2626" }, children: item })
              ] }, index)) })
            ] })
          ] })
        ] }, entry.id)),
        renderPagination()
      ]
    }
  );
};
var Changelog_default = Changelog;

// src/components/Chat/Chat.tsx
var import_react34 = require("react");
var import_phosphor_react17 = require("phosphor-react");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  const [text, setText] = (0, import_react34.useState)("");
  const [replyingTo, setReplyingTo] = (0, import_react34.useState)(null);
  const logRef = (0, import_react34.useRef)(null);
  const [revealMsgId, setRevealMsgId] = (0, import_react34.useState)(null);
  const [revealIndex, setRevealIndex] = (0, import_react34.useState)(0);
  const revealTimer = (0, import_react34.useRef)(null);
  const lastRevealedId = (0, import_react34.useRef)(null);
  (0, import_react34.useEffect)(() => {
    const el = logRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typing]);
  (0, import_react34.useEffect)(() => {
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
  const handleSend = (0, import_react34.useCallback)(() => {
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
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { marginTop: 8, borderRadius: 8, overflow: "hidden" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "img",
            {
              src: attachment.url,
              alt: attachment.title || "Image",
              style: { maxWidth: "100%", height: "auto", display: "block" }
            }
          ),
          attachment.title && /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: {
            padding: 12,
            background: "rgba(0,0,0,0.05)",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 8
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 4 }, children: attachment.title }),
              attachment.description && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "caption", color: "secondary", children: attachment.description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { marginTop: 8, borderRadius: 8, overflow: "hidden", position: "relative" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "video",
            {
              src: attachment.url,
              controls: true,
              style: { maxWidth: "100%", height: "auto", display: "block" }
            }
          ),
          attachment.duration && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { style: {
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
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(Card, { style: { padding: 12, maxWidth: 280 }, children: [
          attachment.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "img",
            {
              src: attachment.thumbnail,
              alt: attachment.title || "Card",
              style: { width: "100%", height: 120, objectFit: "cover", borderRadius: 4, marginBottom: 8 }
            }
          ),
          attachment.title && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 4 }, children: attachment.title }),
          attachment.description && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "caption", color: "secondary", children: attachment.description })
        ] }) });
      case "file":
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: {
          marginTop: 8,
          padding: 8,
          background: "rgba(0,0,0,0.05)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          gap: 8
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_phosphor_react17.FileText, { size: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 2 }, children: attachment.title || "File" }),
            attachment.size && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "caption", color: "secondary", children: attachment.size })
          ] })
        ] });
      case "course":
      case "lesson":
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { marginTop: 8, borderRadius: 8, overflow: "hidden", border: "1px solid var(--cria-gray-200)", position: "relative" }, children: [
          attachment.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            "img",
            {
              src: attachment.thumbnail,
              alt: attachment.title || "Course/Lesson",
              style: { width: "100%", height: 200, objectFit: "cover", display: "block" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: {
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
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "body", weight: "semiBold", style: { marginBottom: 4, color: "var(--cria-white)" }, children: attachment.title }),
              attachment.description && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "caption", style: { color: "rgba(255,255,255,0.9)", marginBottom: 4, display: "block" }, children: attachment.description }),
              attachment.duration && /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(Typography, { variant: "caption", style: { color: "rgba(255,255,255,0.8)", marginTop: 4, display: "block" }, children: [
                "Dura\xE7\xE3o: ",
                attachment.duration
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
  const grouped = (0, import_react34.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: ["cria-chat", className].filter(Boolean).join(" "), style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
      "div",
      {
        ref: logRef,
        className: "cria-chat__log",
        role: "log",
        "aria-live": "polite",
        "aria-relevant": "additions",
        children: [
          grouped.map((group) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: ["cria-chat__group", group.author === "me" ? "cria-chat__group--me" : "cria-chat__group--them"].join(" "), children: group.items.map((item) => {
            const repliedMessage = item.replyTo ? findMessageById(item.replyTo) : null;
            return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cria-chat__bubble", "aria-label": `${group.author === "me" ? "Me" : "Them"} said ${item.text}`, children: [
              repliedMessage && /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: {
                marginBottom: 8,
                padding: 8,
                background: "rgba(0,0,0,0.05)",
                borderRadius: 6,
                borderLeft: "3px solid var(--cria-primary)",
                fontSize: "12px",
                color: "var(--cria-gray-600)"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { fontWeight: 500, marginBottom: 2 }, children: [
                  "Replying to ",
                  repliedMessage.author === "me" ? "you" : "them"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "200px"
                }, children: repliedMessage.text })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "body", color: group.author === "me" ? "inverse" : "content", children: revealThem && group.author === "them" && item.id === revealMsgId ? item.text.slice(0, Math.max(0, revealIndex)) : item.text }),
              item.attachments && item.attachments.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { children: renderAttachment(attachment) }, attachment.id)),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
                gap: 8
              }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Typography, { variant: "caption", color: group.author === "me" ? "inverse" : "secondary", children: item.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_phosphor_react17.ArrowBendUpLeft, { size: 12 }),
                      "Reply"
                    ]
                  }
                )
              ] })
            ] }, item.id);
          }) }, group.key)),
          typing && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cria-chat__group cria-chat__group--them", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cria-chat__bubble cria-chat__bubble--typing", "aria-label": "Typing", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_phosphor_react17.DotsThree, { size: 24, weight: "bold" }) }) })
        ]
      }
    ),
    replyingTo && /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: {
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
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { style: { fontSize: "12px", fontWeight: 500, color: "var(--cria-primary)", marginBottom: 2 }, children: [
          "Replying to ",
          replyingTo.author === "me" ? "your message" : "their message"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { style: {
          fontSize: "12px",
          color: "var(--cria-gray-600)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: replyingTo.text })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cria-chat__composer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Button, { variant: "secondary", size: "sm", onClick: handleSend, disabled: disabled || !text.trim(), "aria-label": "Send message", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_phosphor_react17.PaperPlaneRight, { size: 18 }) })
    ] })
  ] });
};

// src/app/views/AgentDev/AgentDev.tsx
var import_react37 = require("react");

// src/app/views/AgentDev/tabs/AgenteTab.tsx
var import_react36 = require("react");

// src/app/views/AgentDev/components/PRList.tsx
var import_phosphor_react18 = require("phosphor-react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var PRList = ({
  prs,
  title,
  emptyMessage,
  loading = false,
  onRefresh,
  className = ""
}) => {
  const getStatusIcon = (state) => {
    switch (state) {
      case "merged":
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.CheckCircle, { size: 16, className: "pr-list__status-icon pr-list__status-icon--merged" });
      case "closed":
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.XCircle, { size: 16, className: "pr-list__status-icon pr-list__status-icon--closed" });
      case "open":
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Clock, { size: 16, className: "pr-list__status-icon pr-list__status-icon--open" });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Clock, { size: 16, className: "pr-list__status-icon" });
    }
  };
  const getStatusBadge = (state) => {
    switch (state) {
      case "merged":
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Badge, { variant: "success", size: "sm", children: "Merged" });
      case "closed":
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Badge, { variant: "danger", size: "sm", children: "Closed" });
      case "open":
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Badge, { variant: "info", size: "sm", children: "Open" });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Badge, { variant: "secondary", size: "sm", children: state });
    }
  };
  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getLabelBadge = (label) => {
    const isAgentLabel = ["agent-create", "agent-fix"].includes(label.name);
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      Badge,
      {
        variant: isAgentLabel ? "primary" : "secondary",
        size: "sm",
        style: {
          backgroundColor: isAgentLabel ? void 0 : `#${label.color}20`,
          color: isAgentLabel ? void 0 : `#${label.color}`,
          borderColor: `#${label.color}40`
        },
        children: label.name
      },
      label.name
    );
  };
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `pr-list ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "h4", weight: "medium", children: title }),
        onRefresh && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Button, { variant: "ghost", size: "sm", onClick: onRefresh, disabled: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Clock, { size: 16 }),
          "Atualizando..."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "pr-list__loading", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__loading-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "pr-list__loading-spinner", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Clock, { size: 24, className: "pr-list__spinner-icon" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "body", color: "muted", children: "Carregando PRs..." })
      ] }) })
    ] });
  }
  if (prs.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `pr-list ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "h4", weight: "medium", children: title }),
        onRefresh && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Button, { variant: "ghost", size: "sm", onClick: onRefresh, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Clock, { size: 16 }),
          "Atualizar"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "pr-list__empty", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "body", color: "muted", children: emptyMessage }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `pr-list ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Typography, { variant: "h4", weight: "medium", children: [
        title,
        " (",
        prs.length,
        ")"
      ] }),
      onRefresh && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Button, { variant: "ghost", size: "sm", onClick: onRefresh, children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Clock, { size: 16 }),
        "Atualizar"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "pr-list__items", children: prs.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-title", children: [
          getStatusIcon(pr.state),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "h5", weight: "medium", className: "pr-list__item-title-text", children: pr.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-actions", children: [
          getStatusBadge(pr.state),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => window.open(pr.html_url, "_blank"),
              title: "Ver no GitHub",
              children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.ExternalLink, { size: 16 })
            }
          )
        ] })
      ] }),
      pr.body && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "pr-list__item-body", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "body", color: "muted", children: pr.body.length > 200 ? `${pr.body.substring(0, 200)}...` : pr.body }) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "pr-list__item-labels", children: pr.labels.map(getLabelBadge) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-meta-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.User, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "caption", color: "muted", children: pr.user.login })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-meta-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.GitBranch, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Typography, { variant: "caption", color: "muted", children: [
            pr.head.ref,
            " \u2192 ",
            pr.base.ref
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-meta-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.Calendar, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Typography, { variant: "caption", color: "muted", children: formatDate2(pr.created_at) })
        ] }),
        pr.merged_at && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-meta-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.CheckCircle, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Typography, { variant: "caption", color: "muted", children: [
            "Merged: ",
            formatDate2(pr.merged_at)
          ] })
        ] }),
        pr.closed_at && !pr.merged_at && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "pr-list__item-meta-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_phosphor_react18.XCircle, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Typography, { variant: "caption", color: "muted", children: [
            "Closed: ",
            formatDate2(pr.closed_at)
          ] })
        ] })
      ] })
    ] }, pr.id)) })
  ] });
};

// src/app/views/AgentDev/hooks/useGitHubPRs.ts
var import_react35 = require("react");
var GitHubAPIClient = class {
  constructor() {
    this.baseURL = "https://api.github.com";
    this.owner = "fernandofeitosa";
    // Replace with actual repo owner
    this.repo = "design-system-cria";
  }
  // Replace with actual repo name
  async fetchPRs() {
    const mockPRs = [
      {
        id: 1,
        number: 123,
        title: "feat: implement AgentDev interface with enhanced styling",
        body: "This PR implements the AgentDev interface with improved styling and functionality.\n\n- Enhanced drawer styling with white background\n- Improved component type mapping\n- Better form validation\n- Responsive design improvements",
        state: "merged",
        labels: [
          { name: "agent-create", color: "0e8a16" },
          { name: "enhancement", color: "a2eeef" }
        ],
        user: {
          login: "fernandofeitosa",
          avatar_url: "https://github.com/fernandofeitosa.png"
        },
        created_at: "2024-01-15T10:30:00Z",
        updated_at: "2024-01-15T14:45:00Z",
        merged_at: "2024-01-15T14:45:00Z",
        html_url: "https://github.com/fernandofeitosa/design-system-cria/pull/123",
        head: { ref: "feature/agent-dev-interface" },
        base: { ref: "main" }
      },
      {
        id: 2,
        number: 124,
        title: "fix: resolve AgentDev export issue and improve component functionality",
        body: "Fixed import path issues and improved component functionality.\n\n- Fixed import path in demo.tsx\n- Improved component exports\n- Enhanced form validation\n- Better error handling",
        state: "merged",
        labels: [
          { name: "agent-fix", color: "d73a4a" },
          { name: "bug", color: "d73a4a" }
        ],
        user: {
          login: "fernandofeitosa",
          avatar_url: "https://github.com/fernandofeitosa.png"
        },
        created_at: "2024-01-16T09:15:00Z",
        updated_at: "2024-01-16T11:30:00Z",
        merged_at: "2024-01-16T11:30:00Z",
        html_url: "https://github.com/fernandofeitosa/design-system-cria/pull/124",
        head: { ref: "fix/agent-dev-exports" },
        base: { ref: "main" }
      },
      {
        id: 3,
        number: 125,
        title: "feat: add new Button component variants",
        body: "Added new button variants for better design system coverage.\n\n- Added ghost variant\n- Added outline variant\n- Improved accessibility\n- Added comprehensive tests",
        state: "open",
        labels: [
          { name: "agent-create", color: "0e8a16" },
          { name: "component", color: "7057ff" }
        ],
        user: {
          login: "fernandofeitosa",
          avatar_url: "https://github.com/fernandofeitosa.png"
        },
        created_at: "2024-01-17T08:20:00Z",
        updated_at: "2024-01-17T08:20:00Z",
        html_url: "https://github.com/fernandofeitosa/design-system-cria/pull/125",
        head: { ref: "feature/button-variants" },
        base: { ref: "main" }
      },
      {
        id: 4,
        number: 126,
        title: "fix: improve Modal component accessibility",
        body: "Fixed accessibility issues in Modal component.\n\n- Added proper ARIA attributes\n- Improved keyboard navigation\n- Fixed focus management\n- Added screen reader support",
        state: "closed",
        labels: [
          { name: "agent-fix", color: "d73a4a" },
          { name: "accessibility", color: "1d76db" }
        ],
        user: {
          login: "fernandofeitosa",
          avatar_url: "https://github.com/fernandofeitosa.png"
        },
        created_at: "2024-01-18T13:45:00Z",
        updated_at: "2024-01-18T16:20:00Z",
        closed_at: "2024-01-18T16:20:00Z",
        html_url: "https://github.com/fernandofeitosa/design-system-cria/pull/126",
        head: { ref: "fix/modal-accessibility" },
        base: { ref: "main" }
      }
    ];
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    return mockPRs;
  }
  async fetchPRsByLabels(labels) {
    const allPRs = await this.fetchPRs();
    return allPRs.filter(
      (pr) => pr.labels.some((label) => labels.includes(label.name))
    );
  }
};
var useGitHubPRs = () => {
  const [state, setState] = (0, import_react35.useState)({
    prs: [],
    mergedPRs: [],
    closedPRs: [],
    loading: false,
    error: null,
    lastUpdated: null
  });
  const fetchPRs = (0, import_react35.useCallback)(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const client = new GitHubAPIClient();
      const allPRs = await client.fetchPRs();
      const agentPRs = allPRs.filter(
        (pr) => pr.labels.some((label) => ["agent-create", "agent-fix"].includes(label.name))
      );
      const mergedPRs = agentPRs.filter((pr) => pr.state === "merged");
      const closedPRs = agentPRs.filter((pr) => pr.state === "closed");
      const openPRs = agentPRs.filter((pr) => pr.state === "open");
      setState({
        prs: openPRs,
        mergedPRs,
        closedPRs,
        loading: false,
        error: null,
        lastUpdated: /* @__PURE__ */ new Date()
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : "Failed to fetch PRs"
      }));
    }
  }, []);
  const refreshPRs = (0, import_react35.useCallback)(() => {
    fetchPRs();
  }, [fetchPRs]);
  (0, import_react35.useEffect)(() => {
    fetchPRs();
    const interval = setInterval(fetchPRs, 5 * 60 * 1e3);
    return () => clearInterval(interval);
  }, [fetchPRs]);
  return {
    ...state,
    refreshPRs,
    fetchPRs
  };
};

// src/app/views/AgentDev/tabs/AgenteTab.tsx
var import_phosphor_react19 = require("phosphor-react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var AgenteTab = ({ className = "" }) => {
  const [activeSubTab, setActiveSubTab] = (0, import_react36.useState)("em-andamento");
  const { prs, mergedPRs, closedPRs, loading, error, lastUpdated, refreshPRs } = useGitHubPRs();
  const subTabs = [
    {
      id: "em-andamento",
      label: "Em Andamento",
      icon: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_phosphor_react19.AlertCircle, { size: 16 }),
      count: prs.length,
      description: "PRs abertos e em desenvolvimento"
    },
    {
      id: "em-producao",
      label: "Em Produ\xE7\xE3o",
      icon: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_phosphor_react19.CheckCircle, { size: 16 }),
      count: mergedPRs.length,
      description: "PRs merged e em produ\xE7\xE3o"
    },
    {
      id: "recusado",
      label: "Recusado",
      icon: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_phosphor_react19.XCircle, { size: 16 }),
      count: closedPRs.length,
      description: "PRs fechados sem merge"
    }
  ];
  const getCurrentPRs = () => {
    switch (activeSubTab) {
      case "em-andamento":
        return prs;
      case "em-producao":
        return mergedPRs;
      case "recusado":
        return closedPRs;
      default:
        return [];
    }
  };
  const getEmptyMessage = () => {
    switch (activeSubTab) {
      case "em-andamento":
        return "Nenhuma tarefa em andamento. Todas as PRs foram processadas!";
      case "em-producao":
        return "Nenhuma tarefa em produ\xE7\xE3o ainda. PRs merged aparecer\xE3o aqui.";
      case "recusado":
        return "Nenhuma tarefa recusada. Todas as PRs foram aceitas!";
      default:
        return "Nenhuma tarefa encontrada.";
    }
  };
  const formatLastUpdated = () => {
    if (!lastUpdated) return "Nunca";
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - lastUpdated.getTime();
    const minutes = Math.floor(diff / 6e4);
    if (minutes < 1) return "Agora mesmo";
    if (minutes < 60) return `${minutes} min atr\xE1s`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h atr\xE1s`;
    const days = Math.floor(hours / 24);
    return `${days}d atr\xE1s`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: `agente-tab ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "agente-tab__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "agente-tab__header-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Typography, { variant: "h3", weight: "semibold", style: { marginBottom: spacing[2] }, children: "Status do Agente" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Typography, { variant: "body", color: "muted", style: { marginBottom: spacing[4] }, children: "Acompanhe o status das suas solicita\xE7\xF5es de cria\xE7\xE3o e corre\xE7\xE3o." }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "agente-tab__stats", children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "agente-tab__stat", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Badge, { variant: "info", size: "md", children: [
            prs.length,
            " Em Andamento"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "agente-tab__stat", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Badge, { variant: "success", size: "md", children: [
            mergedPRs.length,
            " Em Produ\xE7\xE3o"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "agente-tab__stat", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Badge, { variant: "danger", size: "md", children: [
            closedPRs.length,
            " Recusado"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "agente-tab__header-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: refreshPRs,
            disabled: loading,
            title: "Atualizar PRs",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_phosphor_react19.Refresh, { size: 16, className: loading ? "agente-tab__refresh-icon--spinning" : "" }),
              "Atualizar"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => window.open("https://github.com/fernandofeitosa/design-system-cria/pulls", "_blank"),
            title: "Ver no GitHub",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_phosphor_react19.GithubLogo, { size: 16 }),
              "GitHub"
            ]
          }
        )
      ] })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "agente-tab__error", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_phosphor_react19.AlertCircle, { size: 20 }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Typography, { variant: "h5", weight: "medium", children: "Erro ao carregar PRs" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Typography, { variant: "body", color: "muted", children: error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Button, { variant: "outline", size: "sm", onClick: refreshPRs, children: "Tentar Novamente" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "agente-tab__sub-tabs", children: subTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      Button,
      {
        variant: activeSubTab === tab.id ? "primary" : "ghost",
        size: "sm",
        onClick: () => setActiveSubTab(tab.id),
        className: `agente-tab__sub-tab ${activeSubTab === tab.id ? "agente-tab__sub-tab--active" : ""}`,
        title: tab.description,
        children: [
          tab.icon,
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { children: tab.label }),
          tab.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            Badge,
            {
              variant: activeSubTab === tab.id ? "secondary" : "primary",
              size: "sm",
              className: "agente-tab__sub-tab-badge",
              children: tab.count
            }
          )
        ]
      },
      tab.id
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "agente-tab__content", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      PRList,
      {
        prs: getCurrentPRs(),
        title: subTabs.find((tab) => tab.id === activeSubTab)?.label || "PRs",
        emptyMessage: getEmptyMessage(),
        loading,
        onRefresh: refreshPRs
      }
    ) }),
    lastUpdated && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "agente-tab__footer", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Typography, { variant: "caption", color: "muted", children: [
      "\xDAltima atualiza\xE7\xE3o: ",
      formatLastUpdated()
    ] }) })
  ] });
};
var AgenteTab_default = AgenteTab;

// src/app/views/AgentDev/AgentDev.tsx
var import_phosphor_react20 = require("phosphor-react");
var import_jsx_runtime44 = require("react/jsx-runtime");
var AgentDev = ({
  isOpen,
  onClose,
  position = "right",
  size = "lg",
  className = "",
  style,
  ...props
}) => {
  const [activeTab, setActiveTab] = (0, import_react37.useState)("criar");
  const [tabState, setTabState] = (0, import_react37.useState)({
    activeTab: "criar",
    criar: {
      selectedType: null,
      selectedComponent: null,
      prompt: "",
      images: []
    },
    consertar: {
      selectedType: null,
      selectedComponents: [],
      description: ""
    },
    agente: {
      prs: [],
      mergedPRs: [],
      closedPRs: [],
      loading: false
    }
  });
  const handleTabChange = (0, import_react37.useCallback)((tab) => {
    setActiveTab(tab);
    setTabState((prev) => ({ ...prev, activeTab: tab }));
  }, []);
  const updateTabState = (0, import_react37.useCallback)((tab, updates) => {
    setTabState((prev) => ({
      ...prev,
      [tab]: { ...prev[tab], ...updates }
    }));
  }, []);
  const tabs = [
    {
      id: "criar",
      label: "Criar",
      icon: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Plus, { size: 20 }),
      description: "Create new components"
    },
    {
      id: "consertar",
      label: "Consertar",
      icon: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Wrench, { size: 20 }),
      description: "Fix existing components"
    },
    {
      id: "agente",
      label: "Agente",
      icon: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Code, { size: 20 }),
      description: "Manage agent tasks"
    }
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case "criar":
        return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__tab-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h3", weight: "semibold", style: { marginBottom: spacing[4] }, children: "Criar Componente" }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "body", color: "muted", style: { marginBottom: spacing[6] }, children: "Selecione o tipo de componente e descreva o que voc\xEA gostaria de criar." }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h4", weight: "medium", style: { marginBottom: spacing[3] }, children: "Tipo de Componente" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__type-selector", children: Object.entries(componentTypes).map(([category, types]) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { style: { marginBottom: spacing[3] }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                Button,
                {
                  variant: tabState.criar.selectedType === category ? "primary" : "outline",
                  size: "sm",
                  style: { marginBottom: spacing[2] },
                  onClick: () => updateTabState("criar", { selectedType: category }),
                  children: category
                }
              ),
              tabState.criar.selectedType === category && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { style: { marginLeft: spacing[4], display: "flex", flexWrap: "wrap", gap: spacing[2] }, children: types.map((type) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => updateTabState("criar", { selectedComponent: type }),
                  style: {
                    backgroundColor: tabState.criar.selectedComponent === type ? "var(--agent-dev-hover)" : "transparent",
                    color: tabState.criar.selectedComponent === type ? "var(--agent-dev-accent)" : "var(--agent-dev-text)"
                  },
                  children: type
                },
                type
              )) })
            ] }, category)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h4", weight: "medium", style: { marginBottom: spacing[3] }, children: "Descri\xE7\xE3o do Componente" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "textarea",
              {
                className: "agent-dev__textarea",
                placeholder: "Descreva o componente que voc\xEA gostaria de criar...",
                value: tabState.criar.prompt,
                onChange: (e) => updateTabState("criar", { prompt: e.target.value }),
                rows: 6
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h4", weight: "medium", style: { marginBottom: spacing[3] }, children: "Imagens de Refer\xEAncia (Opcional)" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__image-upload", children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  multiple: true,
                  className: "agent-dev__file-input",
                  id: "image-upload"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("label", { htmlFor: "image-upload", className: "agent-dev__file-label", children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Plus, { size: 24 }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { children: "Adicionar Imagens" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__actions", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            Button,
            {
              variant: "primary",
              size: "lg",
              disabled: !tabState.criar.selectedType || !tabState.criar.selectedComponent || !tabState.criar.prompt.trim(),
              onClick: () => {
                console.log("Creating component:", tabState.criar);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Plus, { size: 16 }),
                "Criar Componente"
              ]
            }
          ) })
        ] });
      case "consertar":
        return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__tab-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h3", weight: "semibold", style: { marginBottom: spacing[4] }, children: "Consertar Componentes" }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "body", color: "muted", style: { marginBottom: spacing[6] }, children: "Selecione os componentes que precisam ser corrigidos e descreva os problemas." }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h4", weight: "medium", style: { marginBottom: spacing[3] }, children: "Tipo de Componente" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__type-selector", children: Object.entries(componentTypes).map(([category, types]) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { style: { marginBottom: spacing[3] }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                Button,
                {
                  variant: tabState.consertar.selectedType === category ? "primary" : "outline",
                  size: "sm",
                  style: { marginBottom: spacing[2] },
                  onClick: () => updateTabState("consertar", { selectedType: category }),
                  children: category
                }
              ),
              tabState.consertar.selectedType === category && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__component-list", children: types.map((type) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__component-item", children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                  "input",
                  {
                    type: "checkbox",
                    id: `consertar-${type}`,
                    checked: tabState.consertar.selectedComponents.includes(type),
                    onChange: (e) => {
                      const newSelected = e.target.checked ? [...tabState.consertar.selectedComponents, type] : tabState.consertar.selectedComponents.filter((c) => c !== type);
                      updateTabState("consertar", { selectedComponents: newSelected });
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("label", { htmlFor: `consertar-${type}`, children: type })
              ] }, type)) })
            ] }, category)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h4", weight: "medium", style: { marginBottom: spacing[3] }, children: "Descri\xE7\xE3o do Problema" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "textarea",
              {
                className: "agent-dev__textarea",
                placeholder: "Descreva os problemas que precisam ser corrigidos...",
                value: tabState.consertar.description,
                onChange: (e) => updateTabState("consertar", { description: e.target.value }),
                rows: 4
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__actions", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            Button,
            {
              variant: "primary",
              size: "lg",
              disabled: tabState.consertar.selectedComponents.length === 0 || !tabState.consertar.description.trim(),
              onClick: () => {
                console.log("Fixing components:", tabState.consertar);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Wrench, { size: 16 }),
                "Consertar Componentes"
              ]
            }
          ) })
        ] });
      case "agente":
        return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(AgenteTab_default, {});
      default:
        return null;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Drawer,
    {
      isOpen,
      onClose,
      position,
      size,
      className: `agent-dev ${className}`,
      style,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__header-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__header-icon", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.Robot, { size: 24 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "agent-dev__header-text", children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "h2", weight: "bold", children: "Agent Dev" }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Typography, { variant: "body", color: "muted", size: "sm", children: "Desenvolvimento assistido por IA" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: onClose,
              className: "agent-dev__close-button",
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_phosphor_react20.X, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__tabs", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          "button",
          {
            className: `agent-dev__tab ${activeTab === tab.id ? "agent-dev__tab--active" : ""}`,
            onClick: () => handleTabChange(tab.id),
            title: tab.description,
            children: [
              tab.icon,
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { children: tab.label })
            ]
          },
          tab.id
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "agent-dev__content", children: renderTabContent() })
      ] })
    }
  );
};
var componentTypes = {
  "Foundations": ["Typography", "Colors", "Text", "Grid"],
  "Components": [
    "Button",
    "Input",
    "Textarea",
    "Avatar",
    "Checkbox",
    "Switch",
    "Radio Group",
    "Dropdown",
    "File Upload",
    "Chat",
    "Comments Section",
    "Slider",
    "Shimmer Skeleton",
    "Pricing Page",
    "Page Loading Progress",
    "Card Selector",
    "Floating Sidebar",
    "Search Filters",
    "Filter Dropdown",
    "Container",
    "Scrollbar",
    "Footer",
    "Mega Menu",
    "Command Palette",
    "Carousel",
    "Table",
    "Empty State"
  ],
  "Content": ["Lesson - Cards", "Course - Cards", "Events - Cards", "Trilha - Cards"],
  "Layout": [
    "Tabs",
    "Accordion",
    "Navigation",
    "Breadcrumbs",
    "Pagination",
    "Progress Bar",
    "Stepper",
    "Date Picker",
    "Charts",
    "Divider",
    "Row of Cards",
    "Statistic / Metric Card",
    "Backgrounds"
  ],
  "Feedback": [
    "Snackbar",
    "Modal",
    "Tooltip",
    "Badge",
    "Tag / Chip",
    "Timeline / Activity Feed",
    "Stepper / Wizard",
    "Notification Center",
    "Topbar",
    "Drawer"
  ]
};
var AgentDev_default = AgentDev;

// src/components/ShimmerSkeleton/ShimmerSkeleton.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
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
    return Array.from({ length: lines }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
        children: animated && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
          children: animated && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
          children: animated && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
          children: animated && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
  const shimmerElement = animated && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
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

// src/components/CriaCourseCard/CriaCourseCard.tsx
var import_react38 = require("react");
var import_phosphor_react21 = require("phosphor-react");
var import_jsx_runtime46 = require("react/jsx-runtime");
var CriaCourseCard = ({
  course,
  onCourseClick,
  onInstructorClick,
  onToolClick,
  className = "",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = (0, import_react38.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react38.useState)(false);
  const handleCardClick = (0, import_react38.useCallback)(() => {
    onCourseClick?.(course);
  }, [course, onCourseClick]);
  const handleInstructorClick = (0, import_react38.useCallback)((instructor, e) => {
    e.stopPropagation();
    onInstructorClick?.(instructor);
  }, [onInstructorClick]);
  const handleToolClick = (0, import_react38.useCallback)((tool, e) => {
    e.stopPropagation();
    onToolClick?.(tool);
  }, [onToolClick]);
  const cardClasses = [
    "cria-course-card",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "div",
          {
            style: {
              width: "33.333%",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: spacing[8]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: spacing[2],
                            marginBottom: spacing[4]
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                              import_phosphor_react21.UserCircle,
                              {
                                size: 20,
                                color: colors.primary,
                                weight: "duotone",
                                style: { marginTop: "2px", flexShrink: 0 }
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  flexWrap: "wrap",
                                  gap: spacing[2]
                                },
                                children: course.instructors?.map((instructor) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                                  AvatarWithName,
                                  {
                                    name: instructor.name,
                                    size: "sm",
                                    variant: "outlined",
                                    clickable: true,
                                    avatarProps: {
                                      src: instructor.avatarUrl,
                                      alt: instructor.name,
                                      size: "sm"
                                    },
                                    onClick: (e) => handleInstructorClick(instructor, e)
                                  },
                                  instructor.id
                                ))
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: spacing[2]
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                              import_phosphor_react21.Clock,
                              {
                                size: 20,
                                color: colors.primary,
                                weight: "duotone"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          gap: spacing[2]
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                            import_phosphor_react21.Wrench,
                            {
                              size: 20,
                              color: colors.primary,
                              weight: "duotone",
                              style: { marginTop: "2px", flexShrink: 0 }
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: spacing[2]
                              },
                              children: course.tools?.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
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
                                    tool.icon && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var import_react39 = require("react");
var import_phosphor_react22 = require("phosphor-react");
var import_jsx_runtime47 = require("react/jsx-runtime");
var CriaClassroomFutureEventCard = ({
  event,
  classroomItem,
  onEventClick,
  onCalendarClick,
  className = "",
  style,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = (0, import_react39.useState)({ days: 0, hours: 0, minutes: 0 });
  const [isLive, setIsLive] = (0, import_react39.useState)(false);
  const calculateTimeLeft = (0, import_react39.useCallback)(() => {
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
  (0, import_react39.useEffect)(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 6e4);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);
  const handleEventClick = (0, import_react39.useCallback)(() => {
    onEventClick?.(event);
  }, [event, onEventClick]);
  const handleCalendarClick = (0, import_react39.useCallback)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
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
              classroomItem.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #14b8a6 100%)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: { position: "absolute", inset: 0, opacity: 0.3 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: { position: "relative", zIndex: 10 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: { position: "relative", zIndex: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: spacing[1]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: { position: "relative", zIndex: 10, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { style: { marginBottom: spacing[4] }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: spacing[8],
                    marginBottom: spacing[6]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: spacing[4] }, children: event.gcalendarUrl ? /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_phosphor_react22.Calendar, { size: 16 }),
                    "SALVAR NA AGENDA"
                  ]
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
var import_react40 = require("react");
var import_phosphor_react23 = require("phosphor-react");
var import_jsx_runtime48 = require("react/jsx-runtime");
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
  const [isHovered, setIsHovered] = (0, import_react40.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react40.useState)(false);
  const handleCardClick = (0, import_react40.useCallback)(() => {
    onCardClick?.(customLearning);
  }, [customLearning, onCardClick]);
  const handleInstructorClick = (0, import_react40.useCallback)((instructor, e) => {
    e.stopPropagation();
    onInstructorClick?.(instructor);
  }, [onInstructorClick]);
  const handleToolClick = (0, import_react40.useCallback)((tool, e) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
                "div",
                {
                  className: "learning-path-position",
                  style: {
                    position: "absolute",
                    top: spacing[4],
                    left: spacing[4]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: spacing[2],
                      marginTop: spacing[4],
                      marginBottom: spacing[2]
                    },
                    children: instructors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
                      visibleInstructors.map((instructor) => /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
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
                            instructor.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                      overflowInstructorsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
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
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: spacing[3],
                      marginBottom: spacing[4]
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_phosphor_react23.Wrench, { size: 20, color: colors.primary, style: { marginTop: spacing[1], flexShrink: 0 } }),
                      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: spacing[2]
                          },
                          children: tools.length > 0 ? tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
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
                                tool.icon && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { style: { width: "20px", height: "20px", marginRight: spacing[2], display: "flex", alignItems: "center", justifyContent: "center" }, children: tool.icon }),
                                tool.name
                              ]
                            },
                            tool.id
                          )) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: spacing[2]
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_phosphor_react23.Clock, { size: 16, color: colors.primary, style: { marginRight: spacing[1] } }),
                      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", {})
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

// src/components/RowOfCards/RowOfCards.tsx
var import_react41 = require("react");
var import_phosphor_react24 = require("phosphor-react");
var import_jsx_runtime49 = require("react/jsx-runtime");
function RowOfCards({
  cards,
  renderCard,
  cardsPerPage = 6,
  onPageChange,
  className,
  style,
  "data-testid": dataTestId
}) {
  const [currentPage, setCurrentPage] = (0, import_react41.useState)(1);
  const pagination = (0, import_react41.useMemo)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Card, { variant: "outlined", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { style: { textAlign: "center", padding: spacing[8] }, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Typography, { variant: "body", color: "secondary", children: "No cards to display" }) }) })
      }
    );
  }
  if (pagination.totalPages <= 1) {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "div",
      {
        className: `row-of-cards ${className || ""}`,
        style: {
          ...style
        },
        "data-testid": dataTestId,
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "row-of-cards-grid", style: gridStyles, children: pagination.currentCards.map(
          (card, index) => renderCard(card, index)
        ) })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "div",
    {
      className: `row-of-cards ${className || ""}`,
      style: {
        ...style
      },
      "data-testid": dataTestId,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "row-of-cards-grid", style: gridStyles, children: pagination.currentCards.map(
          (card, index) => renderCard(card, index)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
          "div",
          {
            className: "row-of-cards-pagination",
            style: paginationStyles,
            role: "navigation",
            "aria-label": "Cards pagination",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { style: pageInfoStyles, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { style: navButtonsStyles, children: [
                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                  Button,
                  {
                    variant: "outlined",
                    size: "small",
                    onClick: handlePrevPage,
                    disabled: !pagination.hasPrevPage,
                    "aria-label": "Go to previous page",
                    style: navButtonStyles,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_phosphor_react24.CaretLeft, { size: 16 }),
                      "Previous"
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_phosphor_react24.CaretRight, { size: 16 })
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
var import_react43 = require("react");

// src/components/FilterDropdown/FilterDropdown.tsx
var import_react42 = require("react");
var import_phosphor_react25 = require("phosphor-react");
var import_jsx_runtime50 = require("react/jsx-runtime");
var FilterDropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  style,
  className = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = (0, import_react42.useState)(false);
  const [selectedOption, setSelectedOption] = (0, import_react42.useState)(null);
  const dropdownRef = (0, import_react42.useRef)(null);
  const triggerRef = (0, import_react42.useRef)(null);
  (0, import_react42.useEffect)(() => {
    const option = options.find((opt) => opt.value === value);
    setSelectedOption(option || null);
  }, [value, options]);
  (0, import_react42.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "ArrowDown" && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
    triggerRef.current?.focus();
  };
  const handleOptionKeyDown = (event, option) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOptionSelect(option);
    } else if (event.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };
  const containerStyles = {
    position: "relative",
    display: "inline-block",
    width: "100%",
    ...style
  };
  const labelStyles = {
    display: "block",
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing[2]
  };
  const triggerStyles = {
    width: "100%",
    padding: `${spacing[3]} ${spacing[4]}`,
    paddingRight: spacing[10],
    border: `1px solid ${colors.border.medium}`,
    borderRadius: radii.md,
    backgroundColor: colors.background.light,
    color: colors.text.primary,
    fontSize: typography.fontSize.body,
    cursor: disabled ? "not-allowed" : "pointer",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: disabled ? 0.6 : 1,
    transition: "all 0.2s ease",
    boxShadow: "none"
  };
  const triggerHoverStyles = {
    borderColor: colors.primary,
    boxShadow: `0 0 0 1px ${colors.primary}`
  };
  const triggerOpenStyles = {
    borderColor: colors.primary,
    boxShadow: `0 0 0 1px ${colors.primary}`
  };
  const dropdownStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 1e3,
    backgroundColor: colors.background.elevated,
    border: `1px solid ${colors.border.medium}`,
    borderRadius: radii.md,
    boxShadow: shadows.lg,
    marginTop: spacing[1],
    maxHeight: "200px",
    overflowY: "auto",
    display: isOpen ? "block" : "none"
  };
  const optionStyles = {
    padding: `${spacing[3]} ${spacing[4]}`,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: spacing[3],
    borderBottom: `1px solid ${colors.border.light}`,
    transition: "background-color 0.2s ease"
  };
  const optionHoverStyles = {
    backgroundColor: colors.background.hover
  };
  const optionSelectedStyles = {
    backgroundColor: colors.primary,
    color: colors.white
  };
  const iconStyles = {
    position: "absolute",
    right: spacing[4],
    top: "50%",
    transform: "translateY(-50%)",
    color: colors.text.secondary,
    transition: "transform 0.2s ease"
  };
  const iconOpenStyles = {
    transform: "translateY(-50%) rotate(180deg)"
  };
  const checkIconStyles = {
    width: "16px",
    height: "16px",
    flexShrink: 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "div",
    {
      ref: dropdownRef,
      className: `cria-filter-dropdown ${className}`,
      style: containerStyles,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { style: labelStyles, children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          "button",
          {
            ref: triggerRef,
            type: "button",
            disabled,
            onClick: () => setIsOpen(!isOpen),
            onKeyDown: handleKeyDown,
            style: {
              ...triggerStyles,
              ...isOpen ? triggerOpenStyles : {}
            },
            onMouseEnter: (e) => {
              if (!disabled && !isOpen) {
                Object.assign(e.currentTarget.style, triggerHoverStyles);
              }
            },
            onMouseLeave: (e) => {
              if (!disabled && !isOpen) {
                e.currentTarget.style.borderColor = colors.border.medium;
                e.currentTarget.style.boxShadow = "none";
              }
            },
            "aria-haspopup": "listbox",
            "aria-expanded": isOpen,
            "aria-label": `${label} dropdown`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: selectedOption ? selectedOption.label : placeholder }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                import_phosphor_react25.CaretDown,
                {
                  size: 16,
                  style: {
                    ...iconStyles,
                    ...isOpen ? iconOpenStyles : {}
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "div",
          {
            role: "listbox",
            "aria-label": `${label} options`,
            style: dropdownStyles,
            children: options.map((option, index) => {
              const isSelected = selectedOption?.value === option.value;
              return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
                "div",
                {
                  role: "option",
                  tabIndex: 0,
                  "aria-selected": isSelected,
                  onClick: () => handleOptionSelect(option),
                  onKeyDown: (e) => handleOptionKeyDown(e, option),
                  style: {
                    ...optionStyles,
                    ...isSelected ? optionSelectedStyles : {},
                    borderBottom: index === options.length - 1 ? "none" : optionStyles.borderBottom
                  },
                  onMouseEnter: (e) => {
                    if (!isSelected) {
                      Object.assign(e.currentTarget.style, optionHoverStyles);
                    }
                  },
                  onMouseLeave: (e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  },
                  children: [
                    isSelected && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                      import_phosphor_react25.Check,
                      {
                        size: 16,
                        style: checkIconStyles
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: option.label })
                  ]
                },
                option.value
              );
            })
          }
        )
      ]
    }
  );
};

// src/components/SearchFilters/SearchFilters.tsx
var import_phosphor_react26 = require("phosphor-react");
var import_jsx_runtime51 = require("react/jsx-runtime");
function SearchFilters({
  filters,
  values = {},
  onFiltersChange,
  mobileCollapsed = false,
  className,
  style,
  "data-testid": dataTestId
}) {
  const [isMobileOpen, setIsMobileOpen] = (0, import_react43.useState)(false);
  const [filterValues, setFilterValues] = (0, import_react43.useState)(values);
  (0, import_react43.useEffect)(() => {
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
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { style: filterGroupStyles, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          Input,
          {
            label: filter.label,
            placeholder: filter.placeholder,
            value: value || "",
            onChange: (e) => handleFilterChange(filter.id, e.target.value),
            style: filterInputStyles,
            "aria-label": filter.label
          }
        ) }, filter.id);
      case "select":
        const selectOptions = [
          { value: "", label: `All ${filter.label}s` },
          ...filter.options || []
        ];
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { style: filterGroupStyles, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          FilterDropdown,
          {
            label: filter.label,
            options: selectOptions,
            value: value || "",
            onChange: (newValue) => handleFilterChange(filter.id, newValue),
            style: filterInputStyles
          }
        ) }, filter.id);
      case "checkbox":
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { style: filterGroupStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Typography, { variant: "bodySmall", weight: "medium", style: filterLabelStyles, children: filter.label }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { style: checkboxContainerStyles, children: filter.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("label", { style: checkboxLabelStyles, children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              "input",
              {
                type: "checkbox",
                checked: value?.includes(option.value) || false,
                onChange: (e) => handleCheckboxChange(filter.id, option.value, e.target.checked),
                style: checkboxInputStyles
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { style: checkboxTextStyles, children: option.label })
          ] }, option.value)) })
        ] }, filter.id);
      case "dateRange":
        return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { style: filterGroupStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Typography, { variant: "bodySmall", weight: "medium", style: filterLabelStyles, children: filter.label }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { style: dateRangeContainerStyles, children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      "div",
      {
        className: `search-filters-container ${className || ""}`,
        style: getContainerStyles(style),
        "data-testid": dataTestId,
        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Typography, { variant: "body", color: "secondary", children: "No filters configured" })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    "div",
    {
      className: `search-filters-container ${className || ""}`,
      style: getContainerStyles(style),
      "data-testid": dataTestId,
      children: [
        mobileCollapsed && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
          Button,
          {
            variant: "outlined",
            onClick: toggleMobileFilters,
            "aria-label": "Toggle filters",
            style: mobileToggleStyles,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_phosphor_react26.FunnelSimple, { size: 16 }),
              "Filters",
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                import_phosphor_react26.CaretDown,
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
        (!mobileCollapsed || isMobileOpen) && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "search-filters-content", style: filtersContentStyles, children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { style: filtersGridStyles, children: filters.map(renderFilter) }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { style: actionsStyles, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
            Button,
            {
              variant: "outlined",
              size: "small",
              onClick: handleClearAll,
              disabled: !hasActiveFilters,
              style: clearButtonStyles,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_phosphor_react26.X, { size: 16 }),
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
var import_jsx_runtime52 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
      "div",
      {
        className: `${classes} cria-divider--with-label`,
        style: inlineStyles,
        role: "separator",
        "aria-orientation": orientation,
        ...dataProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "cria-divider__line cria-divider__line--before" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: `cria-divider__label cria-divider__label--${labelPosition}`, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "cria-divider__line cria-divider__line--after" })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
var import_jsx_runtime53 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
var import_jsx_runtime54 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
var import_jsx_runtime55 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
var import_jsx_runtime56 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
var import_jsx_runtime57 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
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
var import_react44 = require("react");
var import_jsx_runtime58 = require("react/jsx-runtime");
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
  const handleScroll = (0, import_react44.useCallback)((event) => {
    if (onScroll) {
      onScroll(event);
    }
  }, [onScroll]);
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
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
var import_react45 = __toESM(require("react"), 1);
var import_jsx_runtime59 = require("react/jsx-runtime");
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
  const handleLinkClick = (0, import_react45.useCallback)((href, label, event) => {
    if (onLinkClick) {
      event.preventDefault();
      onLinkClick(href, label);
    }
  }, [onLinkClick]);
  const handleSocialClick = (0, import_react45.useCallback)((href, label, icon, event) => {
    if (onSocialClick) {
      event.preventDefault();
      onSocialClick(href, label, icon);
    }
  }, [onSocialClick]);
  const renderLinks = () => {
    if (!links) return null;
    if (import_react45.default.isValidElement(links)) {
      return links;
    }
    if (Array.isArray(links)) {
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("nav", { className: "cria-footer__links", "aria-label": "Footer navigation", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("ul", { children: links.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
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
    if (import_react45.default.isValidElement(socialLinks)) {
      return socialLinks;
    }
    if (Array.isArray(socialLinks)) {
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("nav", { className: "cria-footer__social", "aria-label": "Social media links", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("ul", { children: socialLinks.map((socialLink, index) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        "a",
        {
          href: socialLink.href,
          target: socialLink.target || "_blank",
          rel: socialLink.rel || "noopener noreferrer",
          onClick: (e) => handleSocialClick(socialLink.href, socialLink.label, socialLink.icon, e),
          className: "cria-footer__social-link",
          "aria-label": socialLink.label,
          children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: `cria-footer__social-icon cria-footer__social-icon--${socialLink.icon}`, children: socialLink.icon })
        }
      ) }, index)) }) });
    }
    return null;
  };
  const renderCopyright = () => {
    if (!copyright) return null;
    if (import_react45.default.isValidElement(copyright)) {
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "cria-footer__copyright", children: copyright });
    }
    if (typeof copyright === "string") {
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "cria-footer__copyright", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: copyright }) });
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
    "footer",
    {
      className: classes,
      style,
      ...props,
      children: [
        children && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "cria-footer__content", children }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "cria-footer__sections", children: [
          renderLinks(),
          renderSocialLinks(),
          renderCopyright()
        ] })
      ]
    }
  );
};

// src/components/MegaMenu/MegaMenu.tsx
var import_react46 = require("react");
var import_jsx_runtime60 = require("react/jsx-runtime");
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
  const [activeDropdown, setActiveDropdown] = (0, import_react46.useState)(null);
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react46.useState)(false);
  const [searchQuery, setSearchQuery] = (0, import_react46.useState)("");
  const megaMenuRef = (0, import_react46.useRef)(null);
  const timeoutRef = (0, import_react46.useRef)(null);
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
  const handleItemClick = (0, import_react46.useCallback)((item, event) => {
    if (onItemClick) {
      event.preventDefault();
      onItemClick(item.href, item.label, item);
    }
  }, [onItemClick]);
  const handleSearchChange = (0, import_react46.useCallback)((event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  }, [onSearch]);
  const handleMouseEnter = (0, import_react46.useCallback)((itemLabel) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(itemLabel);
  }, []);
  const handleMouseLeave = (0, import_react46.useCallback)(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);
  const handleMobileToggle = (0, import_react46.useCallback)(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);
  const handleCtaClick = (0, import_react46.useCallback)((event) => {
    if (ctaButton?.onClick) {
      event.preventDefault();
      ctaButton.onClick();
    }
  }, [ctaButton]);
  (0, import_react46.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("li", { className: `cria-mega-menu__item cria-mega-menu__item--level-${level}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
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
            (hasChildren || hasCustomDropdown) && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "cria-mega-menu__dropdown-arrow", "aria-hidden": "true", children: "\u25BC" })
          ]
        }
      ),
      (hasChildren || hasCustomDropdown) && showDropdown && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        "div",
        {
          className: `cria-mega-menu__dropdown cria-mega-menu__dropdown--level-${level} show`,
          onMouseEnter: () => handleMouseEnter(item.label),
          onMouseLeave: handleMouseLeave,
          children: hasCustomDropdown ? item.customDropdown : /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("ul", { className: "cria-mega-menu__dropdown-list", children: item.children?.map((child) => renderMenuItem(child, level + 1)) })
        }
      )
    ] }, item.label);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
    "nav",
    {
      ref: megaMenuRef,
      className: classes,
      style,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "cria-mega-menu__container", children: [
          logo && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__logo", children: logo }),
          trigger && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__trigger", children: trigger }),
          items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("ul", { className: "cria-mega-menu__list", children: items.map((item) => renderMenuItem(item)) }),
          showSearch && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__search", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "input",
            {
              type: "text",
              placeholder: searchPlaceholder,
              value: searchQuery,
              onChange: handleSearchChange,
              className: "cria-mega-menu__search-input"
            }
          ) }),
          ctaButton && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__cta", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "a",
            {
              href: ctaButton.href || "#",
              onClick: handleCtaClick,
              className: `cria-mega-menu__cta-button cria-mega-menu__cta-button--${ctaButton.variant || "primary"} cria-mega-menu__cta-button--${ctaButton.size || "md"}`,
              children: ctaButton.label
            }
          ) }),
          showMobileToggle && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "button",
            {
              onClick: handleMobileToggle,
              className: "cria-mega-menu__mobile-toggle",
              "aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
              "aria-expanded": mobileMenuOpen,
              children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "cria-mega-menu__mobile-toggle-icon", children: mobileMenuOpen ? "\u2715" : "\u2630" })
            }
          )
        ] }),
        showMobileToggle && mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__mobile-menu", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "cria-mega-menu__mobile-menu-content", children: [
          items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("ul", { className: "cria-mega-menu__mobile-list", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("li", { className: "cria-mega-menu__mobile-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
            item.children && item.children.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("ul", { className: "cria-mega-menu__mobile-sublist", children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { className: "cria-mega-menu__mobile-subitem", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
          showSearch && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__mobile-search", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "input",
            {
              type: "text",
              placeholder: searchPlaceholder,
              value: searchQuery,
              onChange: handleSearchChange,
              className: "cria-mega-menu__mobile-search-input"
            }
          ) }),
          ctaButton && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__mobile-cta", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "a",
            {
              href: ctaButton.href || "#",
              onClick: handleCtaClick,
              className: "cria-mega-menu__mobile-cta-button",
              children: ctaButton.label
            }
          ) })
        ] }) }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__loading-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__loading-spinner", "aria-label": "Loading", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Loading..." }) }) }),
        children && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "cria-mega-menu__content", children })
      ]
    }
  );
};

// src/components/Carousel/Carousel.tsx
var import_react47 = require("react");
var import_embla_carousel_react = __toESM(require("embla-carousel-react"), 1);
var import_embla_carousel_autoplay = __toESM(require("embla-carousel-autoplay"), 1);
var import_phosphor_react27 = require("phosphor-react");
var import_jsx_runtime61 = require("react/jsx-runtime");
var Carousel = ({
  slides,
  children,
  variant = "default",
  size = "md",
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayDelay = 4e3,
  loop = false,
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive,
  header,
  footer,
  onSlideChange,
  onSlideClick,
  loading = false,
  className = "",
  style = {},
  ...props
}) => {
  const [emblaRef, emblaApi] = (0, import_embla_carousel_react.default)(
    {
      loop,
      slidesToScroll,
      breakpoints: responsive ? {
        "(min-width: 768px)": { slidesToScroll: responsive.tablet || slidesToScroll },
        "(min-width: 1024px)": { slidesToScroll: responsive.desktop || slidesToScroll }
      } : void 0
    },
    autoPlay ? [(0, import_embla_carousel_autoplay.default)({ delay: autoPlayDelay })] : []
  );
  const [selectedIndex, setSelectedIndex] = (0, import_react47.useState)(0);
  const [scrollSnaps, setScrollSnaps] = (0, import_react47.useState)([]);
  const scrollPrev = (0, import_react47.useCallback)(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = (0, import_react47.useCallback)(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = (0, import_react47.useCallback)((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);
  const onSelect = (0, import_react47.useCallback)(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    onSlideChange?.(emblaApi.selectedScrollSnap());
  }, [emblaApi, onSlideChange]);
  (0, import_react47.useEffect)(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  const handleSlideClick = (0, import_react47.useCallback)((slide, index) => {
    onSlideClick?.(slide, index);
  }, [onSlideClick]);
  const classes = [
    "cria-carousel",
    `cria-carousel--${variant}`,
    `cria-carousel--size-${size}`,
    autoPlay && "cria-carousel--autoplay",
    loop && "cria-carousel--loop",
    responsive && "cria-carousel--responsive",
    loading && "cria-carousel--loading",
    className
  ].filter(Boolean).join(" ");
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: classes, style, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__loading", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__spinner" }) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: classes, style, ...props, children: [
    header && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__header", children: header }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "cria-carousel__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__viewport", ref: emblaRef, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__container-inner", children: slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        "div",
        {
          className: "cria-carousel__slide",
          onClick: () => handleSlideClick(slide, index),
          children: children(slide, index)
        },
        slide.id
      )) }) }),
      showArrows && /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "button",
          {
            className: "cria-carousel__arrow cria-carousel__arrow--prev",
            onClick: scrollPrev,
            "aria-label": "Previous slide",
            children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_phosphor_react27.CaretLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "button",
          {
            className: "cria-carousel__arrow cria-carousel__arrow--next",
            onClick: scrollNext,
            "aria-label": "Next slide",
            children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_phosphor_react27.CaretRight, { size: 24 })
          }
        )
      ] })
    ] }),
    showDots && scrollSnaps.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__dots", children: scrollSnaps.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
      "button",
      {
        className: `cria-carousel__dot ${index === selectedIndex ? "cria-carousel__dot--active" : ""}`,
        onClick: () => scrollTo(index),
        "aria-label": `Go to slide ${index + 1}`,
        children: index === selectedIndex ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_phosphor_react27.Circle, { size: 12, weight: "fill" }) : /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_phosphor_react27.CircleDashed, { size: 12, weight: "regular" })
      },
      index
    )) }),
    footer && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "cria-carousel__footer", children: footer })
  ] });
};

// src/components/Table/Table.tsx
var import_react48 = require("react");
var import_phosphor_react28 = require("phosphor-react");
var import_jsx_runtime62 = require("react/jsx-runtime");
var Table = ({
  columns,
  data,
  variant = "default",
  size = "md",
  sortable = true,
  sortBy,
  sortDirection,
  onSort,
  pagination,
  onPageChange,
  onPageSizeChange,
  selection,
  onSelectionChange,
  filterable = false,
  filterValue,
  onFilterChange,
  filterPlaceholder = "Filter...",
  loading = false,
  loadingMessage = "Loading...",
  emptyMessage = "No data available",
  emptyComponent,
  rowActions,
  onRowAction,
  header,
  footer,
  exportable = false,
  onExport,
  rowKey = "id",
  rowClickable = false,
  onRowClick,
  rowClassName,
  className = "",
  style = {},
  ...props
}) => {
  const [internalFilter, setInternalFilter] = (0, import_react48.useState)(filterValue || "");
  const [showRowActions, setShowRowActions] = (0, import_react48.useState)({});
  const getRowKey = (0, import_react48.useCallback)((row, index) => {
    if (typeof rowKey === "function") {
      return rowKey(row, index);
    }
    return row[rowKey] || index;
  }, [rowKey]);
  const filteredData = (0, import_react48.useMemo)(() => {
    if (!data || !Array.isArray(data)) {
      return [];
    }
    if (!filterable || !internalFilter && !filterValue) {
      return data;
    }
    const filter = filterValue || internalFilter;
    return data.filter(
      (row) => columns.some((column) => {
        const value = row[column.key];
        return value && value.toString().toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [data, columns, filterable, internalFilter, filterValue]);
  const sortedData = (0, import_react48.useMemo)(() => {
    if (!sortBy || !sortDirection) {
      return filteredData;
    }
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue === bValue) return 0;
      const comparison = aValue < bValue ? -1 : 1;
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filteredData, sortBy, sortDirection]);
  const paginatedData = (0, import_react48.useMemo)(() => {
    if (!pagination) {
      return sortedData;
    }
    const startIndex = (pagination.page - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, pagination]);
  const handleSort = (0, import_react48.useCallback)((columnKey) => {
    if (!onSort) return;
    const column = columns.find((col) => col.key === columnKey);
    if (!column || !column.sortable) return;
    let newDirection = "asc";
    if (sortBy === columnKey && sortDirection === "asc") {
      newDirection = "desc";
    }
    onSort(columnKey, newDirection);
  }, [columns, sortBy, sortDirection, onSort]);
  const handleRowSelect = (0, import_react48.useCallback)((row, checked) => {
    if (!selection || !onSelectionChange) return;
    const currentSelection = selection.selectedRows || [];
    let newSelection;
    if (checked) {
      newSelection = [...currentSelection, row];
    } else {
      newSelection = currentSelection.filter(
        (selectedRow) => getRowKey(selectedRow, 0) !== getRowKey(row, 0)
      );
    }
    onSelectionChange(newSelection);
  }, [selection, onSelectionChange, getRowKey]);
  const handleSelectAll = (0, import_react48.useCallback)((checked) => {
    if (!selection || !onSelectionChange) return;
    onSelectionChange(checked ? paginatedData : []);
  }, [selection, onSelectionChange, paginatedData]);
  const handleFilterChange = (0, import_react48.useCallback)((value) => {
    setInternalFilter(value);
    onFilterChange?.(value);
  }, [onFilterChange]);
  const handleRowClick = (0, import_react48.useCallback)((row, index) => {
    if (rowClickable && onRowClick) {
      onRowClick(row, index);
    }
  }, [rowClickable, onRowClick]);
  const handleRowActionClick = (0, import_react48.useCallback)((action, row, index) => {
    action.onClick(row, index);
    onRowAction?.(action.label, row, index);
    setShowRowActions((prev) => ({ ...prev, [getRowKey(row, index)]: false }));
  }, [onRowAction, getRowKey]);
  const renderSortIcon = (0, import_react48.useCallback)((columnKey) => {
    if (!sortable) return null;
    if (sortBy === columnKey) {
      return sortDirection === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.CaretUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.CaretDown, { size: 16 });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.CaretUp, { size: 8 }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.CaretDown, { size: 8 })
    ] });
  }, [sortable, sortBy, sortDirection]);
  const renderPagination = (0, import_react48.useCallback)(() => {
    if (!pagination) return null;
    const totalPages = Math.ceil(pagination.total / pagination.pageSize);
    const pageSizeOptions = pagination.pageSizeOptions || [10, 20, 50, 100];
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__pagination", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__pagination-info", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("span", { children: [
          "Page ",
          pagination.page,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("span", { children: [
          "Showing ",
          (pagination.page - 1) * pagination.pageSize + 1,
          " to",
          " ",
          Math.min(pagination.page * pagination.pageSize, pagination.total),
          " of",
          " ",
          pagination.total,
          " entries"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__pagination-controls", children: [
        pagination.showSizeChanger && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "select",
          {
            value: pagination.pageSize,
            onChange: (e) => onPageSizeChange?.(Number(e.target.value)),
            className: "cria-table__page-size-select",
            children: pageSizeOptions.map((size2) => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("option", { value: size2, children: [
              size2,
              " per page"
            ] }, size2))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__page-buttons", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
            "button",
            {
              disabled: pagination.page <= 1,
              onClick: () => onPageChange?.(pagination.page - 1),
              className: "cria-table__page-button",
              children: "Previous"
            }
          ),
          Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = pagination.page <= 3 ? i + 1 : pagination.page - 2 + i;
            if (page > totalPages) return null;
            return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "button",
              {
                onClick: () => onPageChange?.(page),
                className: `cria-table__page-button ${page === pagination.page ? "cria-table__page-button--active" : ""}`,
                children: page
              },
              page
            );
          }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
            "button",
            {
              disabled: pagination.page >= totalPages,
              onClick: () => onPageChange?.(pagination.page + 1),
              className: "cria-table__page-button",
              children: "Next"
            }
          )
        ] })
      ] })
    ] });
  }, [pagination, onPageChange, onPageSizeChange]);
  const classes = [
    "cria-table",
    `cria-table--${variant}`,
    `cria-table--size-${size}`,
    loading && "cria-table--loading",
    className
  ].filter(Boolean).join(" ");
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: classes, style, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__loading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__spinner" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: loadingMessage })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: classes, style, children: [
    header && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__header", children: header }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__toolbar", children: [
      filterable && /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__filter", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.MagnifyingGlass, { size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "input",
          {
            type: "text",
            placeholder: filterPlaceholder,
            value: filterValue || internalFilter,
            onChange: (e) => handleFilterChange(e.target.value),
            className: "cria-table__filter-input"
          }
        )
      ] }),
      exportable && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__export", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
        "button",
        {
          onClick: () => onExport?.("csv"),
          className: "cria-table__export-button",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.Download, { size: 16 }),
            "Export CSV"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__container", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("table", { className: "cria-table__table", role: "table", tabIndex: 0, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("thead", { className: "cria-table__thead", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("tr", { className: "cria-table__tr", children: [
        selection && selection.type === "checkbox" && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("th", { className: "cria-table__th", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "input",
          {
            type: "checkbox",
            checked: paginatedData.length > 0 && paginatedData.every(
              (row) => selection.selectedRows?.some(
                (selected) => getRowKey(selected, 0) === getRowKey(row, 0)
              )
            ),
            onChange: (e) => handleSelectAll(e.target.checked),
            "aria-label": "Select all rows"
          }
        ) }),
        columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "th",
          {
            className: `cria-table__th ${column.headerClassName || ""}`,
            style: {
              width: column.width,
              textAlign: column.align || "left"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
              "div",
              {
                className: `cria-table__header-cell ${column.sortable && sortable ? "cria-table__header-cell--sortable" : ""}`,
                onClick: () => column.sortable && handleSort(column.key),
                "aria-sort": sortBy === column.key ? sortDirection === "asc" ? "ascending" : "descending" : "none",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: column.label }),
                  renderSortIcon(column.key)
                ]
              }
            )
          },
          column.key
        )),
        rowActions && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("th", { className: "cria-table__th cria-table__th--actions", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("tbody", { className: "cria-table__tbody", children: paginatedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("tr", { className: "cria-table__tr", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        "td",
        {
          className: "cria-table__td cria-table__td--empty",
          colSpan: columns.length + (selection ? 1 : 0) + (rowActions ? 1 : 0),
          children: emptyComponent || /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__empty", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: emptyMessage }) })
        }
      ) }) : paginatedData.map((row, index) => {
        const key = getRowKey(row, index);
        const isSelected = selection?.selectedRows?.some(
          (selected) => getRowKey(selected, 0) === key
        );
        return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
          "tr",
          {
            className: `cria-table__tr ${rowClassName ? rowClassName(row, index) : ""} ${rowClickable ? "cria-table__tr--clickable" : ""} ${isSelected ? "cria-table__tr--selected" : ""}`,
            onClick: () => handleRowClick(row, index),
            children: [
              selection && selection.type === "checkbox" && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("td", { className: "cria-table__td", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
                "input",
                {
                  type: "checkbox",
                  checked: !!isSelected,
                  onChange: (e) => handleRowSelect(row, e.target.checked),
                  "aria-label": `Select row ${index + 1}`
                }
              ) }),
              selection && selection.type === "radio" && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("td", { className: "cria-table__td", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
                "input",
                {
                  type: "radio",
                  name: "table-selection",
                  checked: !!isSelected,
                  onChange: () => onSelectionChange?.([row]),
                  "aria-label": `Select row ${index + 1}`
                }
              ) }),
              columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
                "td",
                {
                  className: `cria-table__td ${column.className || ""}`,
                  style: { textAlign: column.align || "left" },
                  children: column.render ? column.render(row[column.key], row, index) : row[column.key]
                },
                column.key
              )),
              rowActions && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("td", { className: "cria-table__td cria-table__td--actions", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "cria-table__row-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
                  "button",
                  {
                    className: "cria-table__row-actions-button",
                    onClick: (e) => {
                      e.stopPropagation();
                      setShowRowActions((prev) => ({
                        ...prev,
                        [key]: !prev[key]
                      }));
                    },
                    "aria-label": `Actions for row ${index + 1}`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_phosphor_react28.DotsThree, { size: 16 })
                  }
                ),
                showRowActions[key] && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__row-actions-menu", children: rowActions(row, index).map((action, actionIndex) => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
                  "button",
                  {
                    className: `cria-table__row-action ${action.className || ""}`,
                    onClick: (e) => {
                      e.stopPropagation();
                      handleRowActionClick(action, row, index);
                    },
                    disabled: action.disabled?.(row),
                    children: [
                      action.icon,
                      action.label
                    ]
                  },
                  actionIndex
                )) })
              ] }) })
            ]
          },
          key
        );
      }) })
    ] }) }),
    renderPagination(),
    footer && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "cria-table__footer", children: footer })
  ] });
};

// src/components/EmptyState/EmptyState.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");
var EmptyState = ({
  icon,
  title,
  description,
  action,
  additionalContent,
  variant = "default",
  size = "md",
  centered = true,
  className = "",
  style = {},
  children,
  ...props
}) => {
  const classes = [
    "cria-empty-state",
    `cria-empty-state--${variant}`,
    `cria-empty-state--size-${size}`,
    centered && "cria-empty-state--centered",
    className
  ].filter(Boolean).join(" ");
  const renderTitle = () => {
    if (!title) return null;
    if (typeof title === "string") {
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("h3", { className: "cria-empty-state__title", children: title });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "cria-empty-state__title", children: title });
  };
  const renderDescription = () => {
    if (!description) return null;
    if (typeof description === "string") {
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("p", { className: "cria-empty-state__description", children: description });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "cria-empty-state__description", children: description });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    "div",
    {
      className: classes,
      style,
      role: "status",
      "aria-live": "polite",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "cria-empty-state__content", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "cria-empty-state__icon", children: icon }),
        renderTitle(),
        renderDescription(),
        action && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "cria-empty-state__action", children: action }),
        additionalContent && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "cria-empty-state__additional", children: additionalContent }),
        children && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "cria-empty-state__children", children })
      ] })
    }
  );
};

// src/components/Charts/BaseChart.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
var BaseChart = ({
  title,
  children,
  className = "",
  style = {},
  height = 300
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(Card, { className: `cria-chart-card ${className}`, style, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Typography, { variant: "title2", style: { color: colors.text.primary }, children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CardContent, { style: { padding: spacing[6] }, children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { style: { height: `${height}px`, width: "100%" }, children }) })
  ] });
};

// src/components/Charts/LineChart.tsx
var import_recharts = require("recharts");
var import_jsx_runtime65 = require("react/jsx-runtime");
var LineChart = ({
  data,
  title = "Line Chart",
  dataKey = "value",
  lines = [{ dataKey, stroke: colors.primary, strokeWidth: 2, dot: false, name: "Value" }],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
    import_recharts.LineChart,
    {
      data,
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      },
      children: [
        showGrid && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_recharts.CartesianGrid,
          {
            strokeDasharray: "3 3",
            stroke: colors.border.light,
            opacity: 0.3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_recharts.XAxis,
          {
            dataKey: "name",
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_recharts.YAxis,
          {
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        showTooltip && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_recharts.Tooltip,
          {
            contentStyle: {
              backgroundColor: colors.background.elevated,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: spacing[2],
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: colors.text.primary
            },
            labelStyle: { color: colors.text.primary, fontWeight: "600" }
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_recharts.Legend,
          {
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        ),
        lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_recharts.Line,
          {
            type: "monotone",
            dataKey: line.dataKey,
            stroke: line.stroke || defaultColors[index % defaultColors.length],
            strokeWidth: line.strokeWidth || 2,
            dot: line.dot !== false ? { fill: line.stroke || defaultColors[index % defaultColors.length], strokeWidth: 2, r: 4 } : false,
            name: line.name || line.dataKey,
            activeDot: { r: 6, stroke: line.stroke || defaultColors[index % defaultColors.length], strokeWidth: 2 }
          },
          line.dataKey
        ))
      ]
    }
  ) }) });
};

// src/components/Charts/BarChart.tsx
var import_recharts2 = require("recharts");
var import_jsx_runtime66 = require("react/jsx-runtime");
var BarChart = ({
  data,
  title = "Bar Chart",
  bars = [{ dataKey: "value", fill: colors.primary, name: "Value" }],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_recharts2.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
    import_recharts2.BarChart,
    {
      data,
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      },
      children: [
        showGrid && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_recharts2.CartesianGrid,
          {
            strokeDasharray: "3 3",
            stroke: colors.border.light,
            opacity: 0.3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_recharts2.XAxis,
          {
            dataKey: "name",
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_recharts2.YAxis,
          {
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        showTooltip && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_recharts2.Tooltip,
          {
            contentStyle: {
              backgroundColor: colors.background.elevated,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: spacing[2],
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: colors.text.primary
            },
            labelStyle: { color: colors.text.primary, fontWeight: "600" }
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_recharts2.Legend,
          {
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        ),
        bars.map((bar, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_recharts2.Bar,
          {
            dataKey: bar.dataKey,
            fill: bar.fill || defaultColors[index % defaultColors.length],
            name: bar.name || bar.dataKey,
            radius: bar.radius || [4, 4, 0, 0]
          },
          bar.dataKey
        ))
      ]
    }
  ) }) });
};

// src/components/Charts/StackedBarChart.tsx
var import_recharts3 = require("recharts");
var import_jsx_runtime67 = require("react/jsx-runtime");
var StackedBarChart = ({
  data,
  title = "Stacked Bar Chart",
  bars = [
    { dataKey: "value1", fill: colors.primary, name: "Value 1", stackId: "stack1" },
    { dataKey: "value2", fill: colors.secondary, name: "Value 2", stackId: "stack1" }
  ],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_recharts3.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
    import_recharts3.BarChart,
    {
      data,
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      },
      children: [
        showGrid && /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          import_recharts3.CartesianGrid,
          {
            strokeDasharray: "3 3",
            stroke: colors.border.light,
            opacity: 0.3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          import_recharts3.XAxis,
          {
            dataKey: "name",
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          import_recharts3.YAxis,
          {
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        showTooltip && /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          import_recharts3.Tooltip,
          {
            contentStyle: {
              backgroundColor: colors.background.elevated,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: spacing[2],
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: colors.text.primary
            },
            labelStyle: { color: colors.text.primary, fontWeight: "600" }
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          import_recharts3.Legend,
          {
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        ),
        bars.map((bar, index) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          import_recharts3.Bar,
          {
            dataKey: bar.dataKey,
            stackId: bar.stackId || "stack1",
            fill: bar.fill || defaultColors[index % defaultColors.length],
            name: bar.name || bar.dataKey,
            radius: index === bars.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]
          },
          bar.dataKey
        ))
      ]
    }
  ) }) });
};

// src/components/Charts/AreaChart.tsx
var import_recharts4 = require("recharts");
var import_jsx_runtime68 = require("react/jsx-runtime");
var AreaChart = ({
  data,
  title = "Area Chart",
  areas = [{ dataKey: "value", fill: colors.primary, stroke: colors.primary, name: "Value" }],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_recharts4.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
    import_recharts4.AreaChart,
    {
      data,
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      },
      children: [
        showGrid && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          import_recharts4.CartesianGrid,
          {
            strokeDasharray: "3 3",
            stroke: colors.border.light,
            opacity: 0.3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          import_recharts4.XAxis,
          {
            dataKey: "name",
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          import_recharts4.YAxis,
          {
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        showTooltip && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          import_recharts4.Tooltip,
          {
            contentStyle: {
              backgroundColor: colors.background.elevated,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: spacing[2],
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: colors.text.primary
            },
            labelStyle: { color: colors.text.primary, fontWeight: "600" }
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          import_recharts4.Legend,
          {
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        ),
        areas.map((area, index) => /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          import_recharts4.Area,
          {
            type: "monotone",
            dataKey: area.dataKey,
            stroke: area.stroke || defaultColors[index % defaultColors.length],
            fill: area.fill || defaultColors[index % defaultColors.length],
            strokeWidth: area.strokeWidth || 2,
            name: area.name || area.dataKey,
            fillOpacity: 0.3
          },
          area.dataKey
        ))
      ]
    }
  ) }) });
};

// src/components/Charts/PieChart.tsx
var import_recharts5 = require("recharts");
var import_jsx_runtime69 = require("react/jsx-runtime");
var PieChart = ({
  data,
  title = "Pie Chart",
  height = 300,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {},
  innerRadius = 0,
  outerRadius = 80
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success, colors.error];
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: item.color || defaultColors[index % defaultColors.length]
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_recharts5.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_recharts5.PieChart, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      import_recharts5.Pie,
      {
        data: dataWithColors,
        cx: "50%",
        cy: "50%",
        labelLine: false,
        label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
        outerRadius,
        innerRadius,
        fill: "#8884d8",
        dataKey: "value",
        children: dataWithColors.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_recharts5.Cell, { fill: entry.color }, `cell-${index}`))
      }
    ),
    showTooltip && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      import_recharts5.Tooltip,
      {
        contentStyle: {
          backgroundColor: colors.background.elevated,
          border: `1px solid ${colors.border.medium}`,
          borderRadius: spacing[2],
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: colors.text.primary
        },
        formatter: (value, name) => [value, name]
      }
    ),
    showLegend && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      import_recharts5.Legend,
      {
        wrapperStyle: {
          paddingTop: spacing[4],
          color: colors.text.secondary,
          fontSize: "12px"
        }
      }
    )
  ] }) }) });
};

// src/components/Charts/DonutChart.tsx
var import_recharts6 = require("recharts");
var import_jsx_runtime70 = require("react/jsx-runtime");
var DonutChart = ({
  data,
  title = "Donut Chart",
  height = 300,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {},
  innerRadius = 60,
  outerRadius = 80
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success, colors.error];
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: item.color || defaultColors[index % defaultColors.length]
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_recharts6.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(import_recharts6.PieChart, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
      import_recharts6.Pie,
      {
        data: dataWithColors,
        cx: "50%",
        cy: "50%",
        labelLine: false,
        label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
        outerRadius,
        innerRadius,
        fill: "#8884d8",
        dataKey: "value",
        children: dataWithColors.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_recharts6.Cell, { fill: entry.color }, `cell-${index}`))
      }
    ),
    showTooltip && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
      import_recharts6.Tooltip,
      {
        contentStyle: {
          backgroundColor: colors.background.elevated,
          border: `1px solid ${colors.border.medium}`,
          borderRadius: spacing[2],
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: colors.text.primary
        },
        formatter: (value, name) => [value, name]
      }
    ),
    showLegend && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
      import_recharts6.Legend,
      {
        wrapperStyle: {
          paddingTop: spacing[4],
          color: colors.text.secondary,
          fontSize: "12px"
        }
      }
    )
  ] }) }) });
};

// src/components/Charts/RadarChart.tsx
var import_recharts7 = require("recharts");
var import_jsx_runtime71 = require("react/jsx-runtime");
var RadarChart = ({
  data,
  title = "Radar Chart",
  radars = [{ dataKey: "value", fill: colors.primary, stroke: colors.primary, name: "Value" }],
  height = 300,
  showTooltip = true,
  showLegend = true,
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_recharts7.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(import_recharts7.RadarChart, { data, children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_recharts7.PolarGrid, { stroke: colors.border.light }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      import_recharts7.PolarAngleAxis,
      {
        dataKey: "subject",
        tick: { fontSize: 12, fill: colors.text.secondary }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      import_recharts7.PolarRadiusAxis,
      {
        angle: 90,
        domain: [0, "dataMax"],
        tick: { fontSize: 12, fill: colors.text.secondary }
      }
    ),
    showTooltip && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      import_recharts7.Tooltip,
      {
        contentStyle: {
          backgroundColor: colors.background.elevated,
          border: `1px solid ${colors.border.medium}`,
          borderRadius: spacing[2],
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: colors.text.primary
        },
        labelStyle: { color: colors.text.primary, fontWeight: "600" }
      }
    ),
    showLegend && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      import_recharts7.Legend,
      {
        wrapperStyle: {
          paddingTop: spacing[4],
          color: colors.text.secondary,
          fontSize: "12px"
        }
      }
    ),
    radars.map((radar, index) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      import_recharts7.Radar,
      {
        name: radar.name || radar.dataKey,
        dataKey: radar.dataKey,
        stroke: radar.stroke || defaultColors[index % defaultColors.length],
        fill: radar.fill || defaultColors[index % defaultColors.length],
        fillOpacity: radar.fillOpacity || 0.3
      },
      radar.dataKey
    ))
  ] }) }) });
};

// src/components/Charts/ScatterChart.tsx
var import_recharts8 = require("recharts");
var import_jsx_runtime72 = require("react/jsx-runtime");
var ScatterChart = ({
  data,
  title = "Scatter Chart",
  scatters = [{ dataKey: "y", fill: colors.primary, name: "Data Points" }],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  xAxisKey = "x",
  yAxisKey = "y",
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_recharts8.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
    import_recharts8.ScatterChart,
    {
      data,
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      },
      children: [
        showGrid && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          import_recharts8.CartesianGrid,
          {
            strokeDasharray: "3 3",
            stroke: colors.border.light,
            opacity: 0.3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          import_recharts8.XAxis,
          {
            dataKey: xAxisKey,
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          import_recharts8.YAxis,
          {
            dataKey: yAxisKey,
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        showTooltip && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          import_recharts8.Tooltip,
          {
            contentStyle: {
              backgroundColor: colors.background.elevated,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: spacing[2],
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: colors.text.primary
            },
            labelStyle: { color: colors.text.primary, fontWeight: "600" }
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          import_recharts8.Legend,
          {
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        ),
        scatters.map((scatter, index) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          import_recharts8.Scatter,
          {
            dataKey: scatter.dataKey,
            fill: scatter.fill || defaultColors[index % defaultColors.length],
            name: scatter.name || scatter.dataKey,
            r: scatter.r || 6
          },
          scatter.dataKey
        ))
      ]
    }
  ) }) });
};

// src/components/Charts/ComposedChart.tsx
var import_recharts9 = require("recharts");
var import_jsx_runtime73 = require("react/jsx-runtime");
var ComposedChart = ({
  data,
  title = "Composed Chart",
  bars = [{ dataKey: "value", fill: colors.primary, name: "Value" }],
  lines = [],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = "",
  style = {}
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_recharts9.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
    import_recharts9.ComposedChart,
    {
      data,
      margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      },
      children: [
        showGrid && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.CartesianGrid,
          {
            strokeDasharray: "3 3",
            stroke: colors.border.light,
            opacity: 0.3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.XAxis,
          {
            dataKey: "name",
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.YAxis,
          {
            stroke: colors.text.secondary,
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        showTooltip && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.Tooltip,
          {
            contentStyle: {
              backgroundColor: colors.background.elevated,
              border: `1px solid ${colors.border.medium}`,
              borderRadius: spacing[2],
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: colors.text.primary
            },
            labelStyle: { color: colors.text.primary, fontWeight: "600" }
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.Legend,
          {
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        ),
        bars.map((bar, index) => /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.Bar,
          {
            dataKey: bar.dataKey,
            fill: bar.fill || defaultColors[index % defaultColors.length],
            name: bar.name || bar.dataKey,
            radius: [4, 4, 0, 0]
          },
          bar.dataKey
        )),
        lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_recharts9.Line,
          {
            type: "monotone",
            dataKey: line.dataKey,
            stroke: line.stroke || defaultColors[index % defaultColors.length],
            strokeWidth: line.strokeWidth || 2,
            name: line.name || line.dataKey,
            dot: { fill: line.stroke || defaultColors[index % defaultColors.length], strokeWidth: 2, r: 4 }
          },
          line.dataKey
        ))
      ]
    }
  ) }) });
};

// src/components/Charts/RadialProgressChart.tsx
var import_recharts10 = require("recharts");
var import_jsx_runtime74 = require("react/jsx-runtime");
var RadialProgressChart = ({
  data,
  title = "Radial Progress Chart",
  height = 300,
  showLegend = true,
  className = "",
  style = {},
  innerRadius = 20,
  outerRadius = 80,
  startAngle = 90,
  endAngle = -270
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success, colors.error];
  const dataWithColors = data.map((item, index) => ({
    ...item,
    fill: item.fill || defaultColors[index % defaultColors.length]
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(BaseChart, { title, height, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_recharts10.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(
    import_recharts10.RadialBarChart,
    {
      cx: "50%",
      cy: "50%",
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      data: dataWithColors,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
          import_recharts10.RadialBar,
          {
            minAngle: 15,
            label: { position: "insideStart", fill: "#fff" },
            background: true,
            clockWise: true,
            dataKey: "value"
          }
        ),
        showLegend && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
          import_recharts10.Legend,
          {
            iconType: "circle",
            wrapperStyle: {
              paddingTop: spacing[4],
              color: colors.text.secondary,
              fontSize: "12px"
            }
          }
        )
      ]
    }
  ) }) });
};

// src/components/StatisticMetricCard/StatisticMetricCard.tsx
var import_react49 = require("react");
var import_jsx_runtime75 = require("react/jsx-runtime");
var StatisticMetricCard = (0, import_react49.forwardRef)(({
  id,
  value,
  label,
  icon,
  color = "primary",
  size = "md",
  trend,
  loading = false,
  error,
  onClick,
  className = "",
  style,
  ...props
}, ref) => {
  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info
  };
  const trendColorMap = {
    up: colors.success,
    down: colors.error,
    neutral: colors.gray[500]
  };
  const sizeConfig = {
    sm: {
      valueFontSize: typography.fontSize.h3,
      labelFontSize: typography.fontSize.body2,
      trendFontSize: typography.fontSize.caption,
      iconSize: "1.5rem",
      padding: spacing[3]
    },
    md: {
      valueFontSize: typography.fontSize.h1,
      labelFontSize: typography.fontSize.body,
      trendFontSize: typography.fontSize.caption,
      iconSize: "2rem",
      padding: spacing[4]
    },
    lg: {
      valueFontSize: typography.fontSize.display2,
      labelFontSize: typography.fontSize.h3,
      trendFontSize: typography.fontSize.body,
      iconSize: "2.5rem",
      padding: spacing[5]
    }
  };
  const config = sizeConfig[size];
  const selectedColor = colorMap[color];
  const formatTrendValue = (trendValue, direction) => {
    const sign = direction === "up" ? "+" : direction === "down" ? "-" : "+";
    const absoluteValue = Math.abs(trendValue);
    return `${sign}${absoluteValue.toFixed(1)}%`;
  };
  const trendId = `trend-${id}`;
  const handleClick = (event) => {
    if (onClick && !loading && !error) {
      onClick({ id, value, label, icon, color, size, trend, loading, error });
    }
  };
  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === " ") && onClick && !loading && !error) {
      event.preventDefault();
      onClick({ id, value, label, icon, color, size, trend, loading, error });
    }
  };
  const Component = onClick ? "button" : "div";
  const renderLoading = () => /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: spacing[2] }, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
      ShimmerSkeleton,
      {
        variant: "circle",
        width: config.iconSize,
        height: config.iconSize,
        style: { marginBottom: spacing[2] }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
      ShimmerSkeleton,
      {
        variant: "text",
        width: "60%",
        height: config.valueFontSize,
        style: { marginBottom: spacing[1] }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
      ShimmerSkeleton,
      {
        variant: "text",
        width: "80%",
        height: config.labelFontSize,
        style: { marginBottom: spacing[2] }
      }
    ),
    trend && /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
      ShimmerSkeleton,
      {
        variant: "text",
        width: "40%",
        height: config.trendFontSize
      }
    )
  ] });
  const renderError = () => /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[3],
    color: colors.error,
    textAlign: "center"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(Typography, { variant: "body2", weight: "medium", children: error }) });
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
    Component,
    {
      ref,
      className: `statistic-metric-card variant-${color} size-${size} ${className} ${onClick ? "clickable" : ""}`,
      style: {
        background: "transparent",
        padding: "0",
        cursor: onClick ? "pointer" : "default",
        width: "100%",
        textAlign: "left",
        ...style
      },
      role: onClick ? "button" : "region",
      "aria-label": `${label}: ${value}`,
      "aria-describedby": trend ? trendId : void 0,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: onClick ? 0 : void 0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
          Card,
          {
            variant: "default",
            size: "md",
            style: {
              borderRadius: radii.md,
              overflow: "hidden",
              position: "relative",
              cursor: onClick ? "pointer" : "default",
              transition: "all 0.2s ease",
              backgroundColor: colors.white,
              border: `1px solid ${colors.gray[200]}`,
              padding: config.padding,
              height: "100%"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(CardContent, { style: { padding: "0" }, children: [
              loading ? renderLoading() : /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_jsx_runtime75.Fragment, { children: [
                icon && /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: spacing[3] }, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { style: { fontSize: config.iconSize, display: "inline-block" }, children: icon }) }),
                /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { style: { marginBottom: spacing[2] }, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                  Typography,
                  {
                    variant: size === "sm" ? "h3" : size === "lg" ? "display2" : "h1",
                    style: {
                      fontWeight: typography.fontWeight.bold,
                      color: selectedColor,
                      lineHeight: typography.lineHeight.tight
                    },
                    children: value
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                  Typography,
                  {
                    variant: size === "sm" ? "body2" : "body",
                    style: {
                      color: colors.gray[700],
                      fontWeight: typography.fontWeight.medium,
                      marginBottom: spacing[1]
                    },
                    children: label
                  }
                ),
                trend && /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { id: trendId, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: spacing[1], marginTop: spacing[2] }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { style: { color: trendColorMap[trend.direction], fontWeight: typography.fontWeight.semiBold }, children: trend.direction === "up" ? "\u2197" : trend.direction === "down" ? "\u2198" : "\u2192" }),
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                    Typography,
                    {
                      variant: "caption",
                      style: {
                        color: trendColorMap[trend.direction],
                        fontSize: config.trendFontSize,
                        fontWeight: typography.fontWeight.medium
                      },
                      children: formatTrendValue(trend.value, trend.direction)
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
                    Typography,
                    {
                      variant: "caption",
                      style: {
                        color: colors.gray[500],
                        fontSize: config.trendFontSize
                      },
                      children: trend.period
                    }
                  )
                ] }) })
              ] }),
              error && renderError()
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("style", { children: `
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .statistic-metric-card.clickable:focus {
          outline: 2px solid ${selectedColor};
          outline-offset: 2px;
        }

        .statistic-metric-card.clickable:focus-visible {
          outline: 2px solid ${selectedColor};
          outline-offset: 2px;
        }
      ` })
      ]
    }
  );
});
StatisticMetricCard.displayName = "StatisticMetricCard";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AgentDev,
  AreaChart,
  Avatar,
  AvatarUpload,
  AvatarWithName,
  Backgrounds,
  Badge,
  BarChart,
  BaseChart,
  Button,
  ButtonDemo,
  Card,
  CardContent,
  CardDemo,
  CardFooter,
  CardHeader,
  Carousel,
  Changelog,
  Chat,
  Checkbox,
  Column,
  ComposedChart,
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
  DonutChart,
  Drawer,
  Dropdown,
  DropdownItem,
  EmptyState,
  FileUpload,
  Footer,
  Grid,
  Input,
  LineChart,
  MegaMenu,
  Modal,
  Navigation,
  NavigationSidebar,
  Notification,
  NotificationCenter,
  Pagination,
  PieChart,
  ProgressBar,
  RadarChart,
  RadialProgressChart,
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
  Row,
  RowOfCards,
  ScatterChart,
  Scrollbar,
  SearchFilters,
  Section,
  ShimmerSkeleton,
  Sidebar,
  Snackbar,
  StackedBarChart,
  StatisticMetricCard,
  Stepper,
  StepperStep,
  Switch,
  Table,
  Tabs,
  TagChip,
  TextBody,
  TextContent,
  TextContentImportant,
  TextContentTitle,
  Textarea,
  Timeline,
  TimelineItem,
  Tooltip,
  Topbar,
  Typography,
  TypographyDemo,
  Version,
  VerticalTabs,
  colors,
  cssVariables,
  radii,
  shadows,
  spacing,
  typography
});
