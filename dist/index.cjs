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
  Badge: () => Badge_default,
  Button: () => Button_default,
  ButtonDemo: () => ButtonDemo,
  Card: () => Card_default,
  CardContent: () => CardContent,
  CardDemo: () => CardDemo,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  Checkbox: () => Checkbox,
  Input: () => Input,
  Modal: () => Modal,
  Navigation: () => Navigation,
  Sidebar: () => Sidebar,
  Snackbar: () => Snackbar,
  Switch: () => Switch,
  Tabs: () => Tabs,
  Tooltip: () => Tooltip,
  Topbar: () => Topbar,
  Typography: () => Typography_default,
  TypographyDemo: () => TypographyDemo,
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

// src/components/Typography/Typography.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
      // Main brand purple - ONLY for titles
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Element, { className: classes, style: styles, ...props, children });
};
var Typography_default = Typography;

// src/components/Typography/demo.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TypographyDemo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Typography Demo" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h1", weight: "bold", style: { marginBottom: "16px" }, children: "Heading 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Heading 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Heading 3" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Titles (ALL CAPS)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "16px" }, children: "Title 1 - Large Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "title2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Title 2 - Medium Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "title3", weight: "medium", style: { marginBottom: "16px" }, children: "Title 3 - Small Title" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", style: { marginBottom: "12px" }, children: "This is body text using the regular weight. It's perfect for paragraphs and general content." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "bodySmall", style: { marginBottom: "12px" }, children: "This is smaller body text, ideal for captions and secondary information." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "caption", children: "This is caption text, typically used for labels and fine print." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Color Variants" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "primary", style: { marginBottom: "8px" }, children: "Primary text color - Main brand purple (#7566A1)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "content", style: { marginBottom: "8px" }, children: "Content text color - Primary dark for content (#3A2E52)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "primaryLight", style: { marginBottom: "8px" }, children: "Primary Light text color - Darker purple variant (#3A2E52)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "secondary", style: { marginBottom: "8px" }, children: "Secondary text color - Brand teal (#28DDB9)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "secondaryDark", style: { marginBottom: "8px" }, children: "Secondary Dark text color - Darker teal variant (#167B7A)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "disabled", style: { marginBottom: "8px" }, children: "Disabled text color (light gray)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "success", style: { marginBottom: "8px" }, children: "Success text color (green)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "warning", style: { marginBottom: "8px" }, children: "Warning text color (orange)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "error", style: { marginBottom: "8px" }, children: "Error text color (red)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "info", style: { marginBottom: "8px" }, children: "Info text color (blue)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { backgroundColor: "#111827", padding: "12px", borderRadius: "8px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", color: "inverse", children: "Inverse text color (white on dark background)" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Font Weights" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "thin", style: { marginBottom: "4px" }, children: "Thin (100) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "light", style: { marginBottom: "4px" }, children: "Light (300) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "regular", style: { marginBottom: "4px" }, children: "Regular (400) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "medium", style: { marginBottom: "4px" }, children: "Medium (500) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "semiBold", style: { marginBottom: "4px" }, children: "Semi Bold (600) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "bold", style: { marginBottom: "4px" }, children: "Bold (700) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "extraBold", style: { marginBottom: "4px" }, children: "Extra Bold (800) - Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", weight: "heavy", children: "Heavy (900) - Lorem ipsum dolor sit amet" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Text Alignment" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", align: "left", children: "Left aligned text (default)" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", align: "center", children: "Center aligned text" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", align: "right", children: "Right aligned text" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px", width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", align: "justify", children: "Justified text that spreads across the full width of the container, creating even margins on both sides. This demonstrates how justified text creates uniform spacing." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Line Heights" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", lineHeight: "tight", style: { marginBottom: "8px" }, children: "Tight line height (1.2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", lineHeight: "normal", style: { marginBottom: "8px" }, children: "Normal line height (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", lineHeight: "relaxed", children: "Relaxed line height (1.75) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Custom HTML Elements" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", as: "div", style: { marginBottom: "8px" }, children: "Rendered as a div element" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", as: "span", style: { marginBottom: "8px" }, children: "Rendered as a span element" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", as: "strong", style: { marginBottom: "8px" }, children: "Rendered as a strong element" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Typography_default, { variant: "body", as: "em", children: "Rendered as an em element" })
    ] })
  ] });
};

// src/components/Button/Button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Button = ({
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
}) => {
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
    ...getVariantStyles(variant),
    ...getSizeStyles(size),
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "button",
    {
      className: classes,
      style: buttonStyles,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { style: { opacity: loading ? 0 : 1, display: "flex", alignItems: "center", gap: spacing[2] }, children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: rightIcon })
        ] })
      ]
    }
  );
};
function getVariantStyles(variant) {
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
function getSizeStyles(size) {
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
var Button_default = Button;

// src/components/Button/demo.tsx
var import_react = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var ButtonDemo = () => {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Typography, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Button Demo" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { size: "sm", children: "Pequeno" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { size: "md", children: "M\xE9dio" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { size: "lg", children: "Grande" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Estados" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { children: "Normal" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { loading: true, children: "Carregando" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { disabled: true, children: "Desabilitado" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { loading, onClick: handleLoadingClick, children: "Clique para Carregar" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Com \xCDcones" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { leftIcon: "\u2190", children: "Voltar" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { rightIcon: "\u2192", children: "Pr\xF3ximo" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { leftIcon: "\u2605", rightIcon: "\u2605", children: "Estrela" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { leftIcon: "\u{1F4E7}", children: "Email" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Largura Completa" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { fullWidth: true, children: "Bot\xE3o de Largura Completa" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "outline", fullWidth: true, children: "Contorno de Largura Completa" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Efeitos de Hover" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { fontFamily: "var(--cria-font-family)", color: "#6B7280", marginBottom: "16px", fontSize: "14px" }, children: "Passe o mouse sobre os bot\xF5es para ver os efeitos de hover" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "primary", children: "Prim\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "secondary", children: "Secund\xE1rio" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Exemplos Interativos" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { onClick: () => alert("Prim\xE1rio clicado!"), children: "Clique em Mim" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "secondary", onClick: () => console.log("Secund\xE1rio clicado!"), children: "Log no Console" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { variant: "outline", onClick: () => window.open("https://example.com", "_blank"), children: "Link Externo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Acessibilidade" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { "aria-label": "Fechar di\xE1logo", children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { "aria-describedby": "help-text", children: "Ajuda" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button_default, { disabled: true, "aria-label": "Esta a\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel", children: "Indispon\xEDvel" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { id: "help-text", style: { fontSize: "14px", color: "#6B7280", marginTop: "8px" }, children: "Este bot\xE3o fornece informa\xE7\xF5es de ajuda adicionais." })
    ] })
  ] });
};

// src/components/Card/Card.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
    ...getVariantStyles2(variant),
    ...getSizeStyles2(size),
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: classes,
      style: cardStyles,
      ...props,
      children
    }
  );
};
function getVariantStyles2(variant) {
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
function getSizeStyles2(size) {
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var Card_default = Card;

// src/components/Card/demo.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var CardDemo = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { padding: "24px", maxWidth: "1000px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Demo de Cards" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "default", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Padr\xE3o" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Este \xE9 um card padr\xE3o com borda e fundo claros." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "elevated", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Elevado" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Este card tem uma sombra para profundidade e hierarquia visual." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "outlined", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card com Contorno" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Este card tem uma borda proeminente e fundo transparente." }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "filled", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Preenchido" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Este card tem um preenchimento sutil de cor de fundo." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Card_default, { size: "sm", style: { width: "200px" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "bodySmall", children: "Card pequeno com preenchimento m\xEDnimo" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Card_default, { size: "md", style: { width: "250px" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Card m\xE9dio com preenchimento padr\xE3o" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Card_default, { size: "lg", style: { width: "300px" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Card grande com preenchimento generoso para mais conte\xFAdo" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards Interativos" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          Card_default,
          {
            interactive: true,
            onClick: () => alert("Card clicado!"),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Card Clic\xE1vel" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Este card \xE9 interativo e responde a cliques." }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { interactive: true, disabled: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", color: "disabled", weight: "medium", children: "Card Desabilitado" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", color: "disabled", children: "Este card est\xE1 desabilitado e n\xE3o pode ser interagido." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Exemplos Complexos" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "elevated", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CardContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: {
              height: "200px",
              backgroundColor: "#f3f4f6",
              borderRadius: "8px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280"
            }, children: "Imagem do Produto" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Nome do Produto" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Esta \xE9 uma descri\xE7\xE3o do produto que explica o que o produto faz e por que \xE9 \xFAtil." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "bold", children: "R$ 99,99" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { size: "sm", children: "Adicionar ao Carrinho" })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "outlined", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CardContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", alignItems: "center", marginBottom: "16px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: {
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
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Jo\xE3o Silva" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "bodySmall", children: "Engenheiro de Software" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Apaixonado por construir grandes experi\xEAncias de usu\xE1rio e resolver problemas complexos." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", gap: "8px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { variant: "outline", size: "sm", children: "Mensagem" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { size: "sm", children: "Seguir" })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Card_default, { variant: "filled", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Receita Total" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "display", weight: "bold", style: { marginBottom: "8px" }, children: "R$ 12.345" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "bodySmall", color: "success", children: "\u2197 +12,5% do m\xEAs passado" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards com A\xE7\xF5es" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card_default, { variant: "elevated", style: { maxWidth: "500px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "h3", weight: "medium", children: "Configura\xE7\xF5es" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", style: { marginBottom: "16px" }, children: "Gerencie suas configura\xE7\xF5es de conta e prefer\xEAncias." }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Notifica\xE7\xF5es por Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { variant: "outline", size: "sm", children: "Alternar" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Typography_default, { variant: "body", children: "Modo Escuro" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { variant: "outline", size: "sm", children: "Alternar" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { variant: "ghost", size: "sm", children: "Cancelar" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button_default, { size: "sm", children: "Salvar Altera\xE7\xF5es" })
        ] }) })
      ] })
    ] })
  ] });
};

// src/components/Badge/Badge.tsx
var import_react2 = require("react");
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
  const displayContent = (0, import_react2.useMemo)(() => {
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
var Badge_default = Badge;

// src/components/Tabs/Tabs.tsx
var import_react3 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const [internalActiveTab, setInternalActiveTab] = (0, import_react3.useState)(
    defaultActiveTab || items[0]?.id || ""
  );
  const isControlled = controlledActiveTab !== void 0;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  const tabRefs = (0, import_react3.useRef)({});
  const tabListRef = (0, import_react3.useRef)(null);
  const handleTabChange = (0, import_react3.useCallback)((tabId) => {
    if (isControlled) {
      onChange?.(tabId);
    } else {
      setInternalActiveTab(tabId);
      onChange?.(tabId);
    }
  }, [isControlled, onChange]);
  const handleKeyDown = (0, import_react3.useCallback)((event, tabId) => {
    const tabIds = items.map((item) => item.id);
    const currentIndex = tabIds.indexOf(tabId);
    let nextIndex = currentIndex;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % tabIds.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
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
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
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
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: containerClasses,
      style,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
              return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
                    item.icon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "cria-tabs__tab-icon", children: item.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "cria-tabs__tab-label", children: item.label }),
                    item.badge && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "cria-tabs__tab-badge", children: item.badge })
                  ]
                },
                item.id
              );
            })
          }
        ),
        showContent && activeTabItem && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/components/Tooltip/Tooltip.tsx
var import_react4 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  const [isVisible, setIsVisible] = (0, import_react4.useState)(false);
  const [tooltipPosition, setTooltipPosition] = (0, import_react4.useState)({ top: 0, left: 0 });
  const triggerRef = (0, import_react4.useRef)(null);
  const tooltipRef = (0, import_react4.useRef)(null);
  const showTimeoutRef = (0, import_react4.useRef)();
  const hideTimeoutRef = (0, import_react4.useRef)();
  const isControlled = controlledVisible !== void 0;
  const visible = isControlled ? controlledVisible : isVisible;
  const calculatePosition = (0, import_react4.useCallback)(() => {
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
  const showTooltip = (0, import_react4.useCallback)(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }, delay);
  }, [disabled, isControlled, delay, onVisibilityChange]);
  const hideTooltip = (0, import_react4.useCallback)(() => {
    if (disabled || isControlled) return;
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      onVisibilityChange?.(false);
    }, hideDelay);
  }, [disabled, isControlled, hideDelay, onVisibilityChange]);
  const handleMouseEnter = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleMouseLeave = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  const handleFocus = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  const handleBlur = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  (0, import_react4.useEffect)(() => {
    if (visible) {
      calculatePosition();
    }
  }, [visible, calculatePosition]);
  (0, import_react4.useEffect)(() => {
    if (!visible) return;
    const updatePosition = () => calculatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [visible, calculatePosition]);
  (0, import_react4.useEffect)(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  const triggerElement = import_react4.default.cloneElement(children, {
    ref: (el) => {
      triggerRef.current = el;
      if (typeof children.ref === "function") {
        children.ref(el);
      } else if (children.ref) {
        children.ref.current = el;
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    triggerElement,
    visible && (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "cria-tooltip__content", children: content }),
            arrow && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "cria-tooltip__arrow" })
          ]
        }
      ),
      document.body
    )
  ] });
};

// src/components/Modal/Modal.tsx
var import_react5 = require("react");
var import_phosphor_react = require("phosphor-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  const modalRef = (0, import_react5.useRef)(null);
  const previousActiveElement = (0, import_react5.useRef)(null);
  const overlayRef = (0, import_react5.useRef)(null);
  const handleEscapeKey = (0, import_react5.useCallback)((event) => {
    if (event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  }, [closeOnEscape, onClose]);
  const handleOverlayClick = (0, import_react5.useCallback)((event) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);
  const handleFocus = (0, import_react5.useCallback)(() => {
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
  const toggleBodyScroll = (0, import_react5.useCallback)((lock) => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, []);
  (0, import_react5.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
            showHeader && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "cria-modal__header", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                Typography,
                {
                  id: "modal-title",
                  variant: "h3",
                  weight: "semiBold",
                  className: "cria-modal__title",
                  children: title
                }
              ),
              showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onClose,
                  className: "cria-modal__close-button",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_phosphor_react.X, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "div",
              {
                id: "modal-content",
                className: "cria-modal__content",
                children
              }
            ),
            showFooter && footer && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "cria-modal__footer", children: footer })
          ]
        }
      )
    }
  );
};

// src/components/Input/Input.tsx
var import_react6 = __toESM(require("react"), 1);
var import_phosphor_react2 = require("phosphor-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Input = (0, import_react6.forwardRef)(({
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
  const inputRef = (0, import_react6.useRef)(null);
  const [showPassword, setShowPassword] = import_react6.default.useState(false);
  const [isFocused, setIsFocused] = import_react6.default.useState(false);
  (0, import_react6.useImperativeHandle)(ref, () => ({
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
  const handlePasswordToggle = (0, import_react6.useCallback)(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  const handleClear = (0, import_react6.useCallback)(() => {
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
  const handleFocus = (0, import_react6.useCallback)((event) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  const handleBlur = (0, import_react6.useCallback)((event) => {
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
  const characterCount = currentValue.length;
  const shouldShowClearButton = showClearButton && currentValue && !disabled && !readOnly;
  const shouldShowPasswordToggle = showPasswordToggle && type === "password" && !disabled && !readOnly;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: containerClasses, style, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "cria-input__label", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Typography, { variant: "body", weight: "medium", color: "primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "cria-input__required", children: " *" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "cria-input__wrapper", children: [
      leftIcon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "cria-input__left-icon", children: leftIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
      (rightIcon || shouldShowPasswordToggle || shouldShowClearButton) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "cria-input__right-icons", children: [
        shouldShowClearButton && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            type: "button",
            className: "cria-input__clear-button",
            onClick: handleClear,
            "aria-label": "Clear input",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.X, { size: 16 })
          }
        ),
        shouldShowPasswordToggle && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            type: "button",
            className: "cria-input__password-toggle",
            onClick: handlePasswordToggle,
            "aria-label": showPassword ? "Hide password" : "Show password",
            children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.EyeSlash, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.Eye, { size: 16 })
          }
        ),
        rightIcon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "cria-input__right-icon", children: rightIcon })
      ] })
    ] }),
    (helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "cria-input__messages", children: [
      helperText && !errorMessage && !successMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Typography, { variant: "body", size: "sm", color: "secondary", className: "cria-input__helper-text", children: helperText }),
      errorMessage && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Typography, { variant: "body", size: "sm", color: "error", className: "cria-input__error-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        errorMessage
      ] }),
      successMessage && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Typography, { variant: "body", size: "sm", color: "success", className: "cria-input__success-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.Check, { size: 14, style: { marginRight: "4px" } }),
        successMessage
      ] }),
      warningMessage && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Typography, { variant: "body", size: "sm", color: "warning", className: "cria-input__warning-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_phosphor_react2.WarningCircle, { size: 14, style: { marginRight: "4px" } }),
        warningMessage
      ] }),
      showCharacterCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Typography, { variant: "body", size: "sm", color: "secondary", className: "cria-input__character-count", children: [
        characterCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});
Input.displayName = "Input";

// src/components/Checkbox/Checkbox.tsx
var import_react7 = require("react");
var import_phosphor_react3 = require("phosphor-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Checkbox = (0, import_react7.forwardRef)(({
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
  const inputRef = (0, import_react7.useRef)(null);
  (0, import_react7.useImperativeHandle)(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = (0, import_react7.useCallback)((event) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);
  const handleClick = (0, import_react7.useCallback)((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = (0, import_react7.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: checkboxClasses, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "cria-checkbox__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "cria-checkbox__checkmark", children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "cria-checkbox__indeterminate" }) : checked === true ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_phosphor_react3.Check, { size: size === "sm" ? 12 : size === "lg" ? 20 : 16 }) : null }),
      label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { htmlFor: id || (label ? `${name || "checkbox"}-input` : void 0), className: labelClasses, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "cria-checkbox__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-checkbox__helper-text",
        id: `${id || name || "checkbox"}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-checkbox__error-message",
        id: `${id || name || "checkbox"}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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

// src/components/Switch/Switch.tsx
var import_react8 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Switch = (0, import_react8.forwardRef)(({
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
  const inputRef = (0, import_react8.useRef)(null);
  (0, import_react8.useImperativeHandle)(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    }
  }));
  const handleChange = (0, import_react8.useCallback)((event) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);
  const handleClick = (0, import_react8.useCallback)((event) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);
  const handleKeyDown = (0, import_react8.useCallback)((event) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: switchClasses, style, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "cria-switch__container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "cria-switch__track", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "cria-switch__thumb" }) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: id || (label ? `${name || "switch"}-input` : void 0), className: labelClasses, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        Typography,
        {
          variant: "body",
          color: disabled ? "secondary" : "content",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "cria-switch__required", "aria-label": "required", children: " *" })
          ]
        }
      ) })
    ] }),
    helperText && !errorMessage && !warningMessage && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Typography,
      {
        variant: "caption",
        color: "secondary",
        className: "cria-switch__helper-text",
        id: `${id || name || "switch"}-helper`,
        children: helperText
      }
    ),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Typography,
      {
        variant: "caption",
        color: "error",
        className: "cria-switch__error-message",
        id: `${id || name || "switch"}-error`,
        children: errorMessage
      }
    ),
    warningMessage && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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

// src/components/Snackbar/Snackbar.tsx
var React9 = __toESM(require("react"), 1);
var import_react_dom2 = require("react-dom");
var import_phosphor_react4 = require("phosphor-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Snackbar = React9.forwardRef(({
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
  const [isVisible, setIsVisible] = React9.useState(open);
  const [isAnimating, setIsAnimating] = React9.useState(false);
  const timeoutRef = React9.useRef(null);
  React9.useEffect(() => {
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
  React9.useEffect(() => {
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
  const handleClose = React9.useCallback(() => {
    onClose?.();
  }, [onClose]);
  const handleBackdropClick = React9.useCallback((event) => {
    if (dismissible && event.target === event.currentTarget) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  const handleKeyDown = React9.useCallback((event) => {
    if (event.key === "Escape" && dismissible) {
      handleClose();
    }
  }, [dismissible, handleClose]);
  React9.useImperativeHandle(ref, () => ({
    close: handleClose
  }), [handleClose]);
  if (!isVisible) {
    return null;
  }
  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react4.CheckCircle, { size: 20, "data-testid": "snackbar-icon" });
      case "error":
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react4.X, { size: 20, "data-testid": "snackbar-icon" });
      case "warning":
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react4.Info, { size: 20, "data-testid": "snackbar-icon" });
      case "info":
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react4.Info, { size: 20, "data-testid": "snackbar-icon" });
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
  const snackbarContent = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      "data-testid": "snackbar-container",
      className: containerClasses,
      onClick: handleBackdropClick,
      onKeyDown: handleKeyDown,
      tabIndex: -1,
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: snackbarClasses,
          style,
          role,
          "aria-live": ariaLive,
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "cria-snackbar__content", children: [
              displayIcon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "cria-snackbar__icon", children: displayIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "cria-snackbar__text", children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Typography, { variant: "body", weight: "medium", className: "cria-snackbar__title", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Typography, { variant: "body", className: "cria-snackbar__message", children: message })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "cria-snackbar__actions", children: [
              action && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                Button,
                {
                  variant: "text",
                  size: "sm",
                  onClick: action.onClick,
                  className: "cria-snackbar__action",
                  children: action.label
                }
              ),
              dismissible && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                Button,
                {
                  variant: "text",
                  size: "sm",
                  onClick: handleClose,
                  className: "cria-snackbar__close",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_phosphor_react4.X, { size: 16 })
                }
              )
            ] })
          ]
        }
      )
    }
  );
  return (0, import_react_dom2.createPortal)(snackbarContent, document.body);
});
Snackbar.displayName = "Snackbar";

// src/components/Navigation/Navigation.tsx
var import_react9 = require("react");
var import_phosphor_react5 = require("phosphor-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Sidebar = ({
  items,
  activeRoute,
  collapsed = false,
  onToggle,
  showToggle = true,
  className,
  style,
  ...props
}) => {
  const [isMobile, setIsMobile] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleToggle = (0, import_react9.useCallback)(() => {
    onToggle?.(!collapsed);
  }, [collapsed, onToggle]);
  const handleKeyDown = (0, import_react9.useCallback)((event, index) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "nav",
    {
      className: sidebarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        showToggle && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "cria-sidebar__header", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: handleToggle,
            "aria-label": "Toggle sidebar",
            className: "cria-sidebar__toggle",
            children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_phosphor_react5.ArrowRight, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_phosphor_react5.ArrowLeft, { size: 16 })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "cria-sidebar__content", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "cria-sidebar__items", role: "menubar", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { className: "cria-sidebar__item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          "a",
          {
            href: item.href,
            className: [
              "cria-sidebar__item",
              activeRoute === item.href && "cria-sidebar__item--active",
              item.disabled && "cria-sidebar__item--disabled"
            ].filter(Boolean).join(" "),
            "data-nav-item": index,
            tabIndex: item.disabled ? -1 : 0,
            onKeyDown: (e) => handleKeyDown(e, index),
            onClick: item.onClick,
            "aria-current": activeRoute === item.href ? "page" : void 0,
            "aria-disabled": item.disabled,
            children: [
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-sidebar__icon", "aria-hidden": "true", children: item.icon }),
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-sidebar__label", children: item.label }),
              item.badge && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-sidebar__badge", "aria-hidden": "true", children: item.badge })
            ]
          }
        ) }, item.id)) }) })
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
  const [isMobile, setIsMobile] = (0, import_react9.useState)(false);
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleMobileMenuToggle = (0, import_react9.useCallback)(() => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  }, [mobileMenuOpen, onMobileMenuToggle]);
  const handleKeyDown = (0, import_react9.useCallback)((event, index) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "nav",
    {
      className: topbarClasses,
      style,
      role: "navigation",
      "aria-label": "Main navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "cria-topbar__content", children: [
          brand && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "cria-topbar__brand", children: brandHref ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("a", { href: brandHref, className: "cria-topbar__brand-link", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Typography, { variant: "h3", weight: "bold", color: "primary", children: brand }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: itemsClasses, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "cria-topbar__items-list", role: "menubar", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { className: "cria-topbar__item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-topbar__icon", "aria-hidden": "true", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-topbar__label", children: item.label }),
                item.badge && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-topbar__badge", "aria-hidden": "true", children: item.badge })
              ]
            }
          ) }, item.id)) }) }),
          isMobile && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleMobileMenuToggle,
              "aria-label": "Toggle menu",
              "aria-expanded": mobileMenuOpen,
              className: "cria-topbar__mobile-toggle",
              children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_phosphor_react5.List, { size: 16 })
            }
          )
        ] }),
        isMobile && mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "cria-topbar__mobile-menu", role: "menu", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "cria-topbar__mobile-items", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { className: "cria-topbar__mobile-item-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-topbar__mobile-icon", "aria-hidden": "true", children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-topbar__mobile-label", children: item.label }),
              item.badge && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "cria-topbar__mobile-badge", "aria-hidden": "true", children: item.badge })
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: navigationClasses, style, ...props, children: [
    sidebar && (variant === "sidebar-only" || variant === "both") && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Sidebar, { ...sidebar }),
    topbar && (variant === "topbar-only" || variant === "both") && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Topbar, { ...topbar })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Button,
  ButtonDemo,
  Card,
  CardContent,
  CardDemo,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Modal,
  Navigation,
  Sidebar,
  Snackbar,
  Switch,
  Tabs,
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
});
