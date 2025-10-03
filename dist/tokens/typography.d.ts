/**
 * CRIA Design System - Typography Tokens
 *
 * Type scale using Cartograph font family
 */
export declare const typography: {
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
export type TypographyVariant = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
//# sourceMappingURL=typography.d.ts.map