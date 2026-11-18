import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Highlight / selected (VIZ-017 D1) — ZAR gold, highlight-only role.
        // `--accent` is the hover/focus SURFACE and is deliberately neutral.
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
        // Semantic status namespace (VIZ-017 D1 §7.1) — status only, never zones.
        // Replaces the hardcoded `text-green-600` / `text-red-600` / `border-amber-600`
        // Tailwind palette utilities (VIZ-017 single-source rule).
        st: {
          success: "hsl(var(--st-success))",
          "success-foreground": "hsl(var(--st-success-foreground))",
          warning: "hsl(var(--st-warning))",
          "warning-foreground": "hsl(var(--st-warning-foreground))",
          danger: "hsl(var(--st-danger))",
          "danger-foreground": "hsl(var(--st-danger-foreground))",
          info: "hsl(var(--st-info))",
          "info-foreground": "hsl(var(--st-info-foreground))",
        },
        stSuccess: {
          DEFAULT: "hsl(var(--st-success))",
          foreground: "hsl(var(--st-success-foreground))",
        },
        stWarning: {
          DEFAULT: "hsl(var(--st-warning))",
          foreground: "hsl(var(--st-warning-foreground))",
        },
        stDanger: {
          DEFAULT: "hsl(var(--st-danger))",
          foreground: "hsl(var(--st-danger-foreground))",
        },
        stInfo: {
          DEFAULT: "hsl(var(--st-info))",
          foreground: "hsl(var(--st-info-foreground))",
        },
        // Brand chrome namespace (VIZ-017 D1 §7.1) — chrome only, never zones.
        stBrand: {
          300: "hsl(var(--st-brand-300))",
          500: "hsl(var(--st-brand-500))",
          600: "hsl(var(--st-brand-600))",
        },
        stGold: {
          400: "hsl(var(--st-gold-400))",
          500: "hsl(var(--st-gold-500))",
          600: "hsl(var(--st-gold-600))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Zone hues (VIZ-017 D2 — single source viz/lib/brand.ts values)
        zone: {
          docs: "hsl(var(--zone-docs))",
          prompts: "hsl(var(--zone-prompts))",
          execution: "hsl(var(--zone-execution))",
          stremiium: "hsl(var(--zone-stremiium))",
          rea: "hsl(var(--zone-rea))",
          other: "hsl(var(--zone-other))",
          // AA-safe text variants (VIZ-017 D2 rule 4) — mandatory for labels/legends.
          "docs-text": "hsl(var(--zone-docs-text))",
          "prompts-text": "hsl(var(--zone-prompts-text))",
          "execution-text": "hsl(var(--zone-execution-text))",
          "stremiium-text": "hsl(var(--zone-stremiium-text))",
          "rea-text": "hsl(var(--zone-rea-text))",
          "other-text": "hsl(var(--zone-other-text))",
        },
        // Camel-case alias of the AA zone text variants.
        zoneText: {
          docs: "hsl(var(--zone-docs-text))",
          prompts: "hsl(var(--zone-prompts-text))",
          execution: "hsl(var(--zone-execution-text))",
          stremiium: "hsl(var(--zone-stremiium-text))",
          rea: "hsl(var(--zone-rea-text))",
          other: "hsl(var(--zone-other-text))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
          "6": "hsl(var(--chart-6))",
        },
        glass: "hsl(var(--glass-bg))",
        scene: {
          fog: "hsl(var(--scene-fog))",
          node: "hsl(var(--node-accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
