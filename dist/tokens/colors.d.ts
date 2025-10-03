/**
 * CRIA Design System - Color Tokens
 *
 * Semantic color system based on CRIA brand colors
 */
export declare const colors: {
    readonly primary: "#7566A1";
    readonly primaryLight: "#3A2E52";
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
    readonly warning: "#F59E0B";
    readonly error: "#EF4444";
    readonly info: "#3B82F6";
    readonly text: {
        readonly primary: "#3A2E52";
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
export type ColorToken = keyof typeof colors;
export type GrayScale = keyof typeof colors.gray;
export type TextColor = keyof typeof colors.text;
export type BorderColor = keyof typeof colors.border;
//# sourceMappingURL=colors.d.ts.map