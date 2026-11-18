/**
 * Stremiium brand tokens — SINGLE SOURCE OF TRUTH (VIZ-017 D1/D2).
 * No other file in viz/ may hardcode brand hex values.
 * Consume zone hues via `ZONE_HUES` or the CSS `--zone-*` aliases.
 */

export const BRAND = {
  /** ZAR green — chrome: nav, active states, KPIs. AA on dark ≈ 5.6:1. */
  green: "#007749",
  /** Dark-mode primary green (lighter variant). Re-measure on dark bg. */
  greenDark: "#4CC38A",
  /** ZAR gold — highlight/selected ONLY, never body text (≈1.8:1 fails AA). */
  gold: "#FFB612",
} as const;

export type Zone = "docs" | "prompts" | "execution" | "stremiium" | "rea" | "other";

export interface ZoneHue {
  light: string;
  dark: string;
  /** AA-safe text variant for body text on card backgrounds. */
  textLight: string;
  textDark: string;
}

/**
 * Zone color coding (VIZ-017 D2). Fixed legend order. Zones are the app's
 * ONLY categorical chart hues.
 */
export const ZONE_HUES: Record<Zone, ZoneHue> = {
  docs:      { light: "#2563EB", dark: "#60A5FA", textLight: "#1D4ED8", textDark: "#93C5FD" },
  prompts:   { light: "#D97706", dark: "#FBBF24", textLight: "#B45309", textDark: "#FCD34D" },
  execution: { light: "#16A34A", dark: "#4ADE80", textLight: "#15803D", textDark: "#86EFAC" },
  stremiium: { light: "#7C3AED", dark: "#A78BFA", textLight: "#6D28D9", textDark: "#C4B5FD" },
  rea:       { light: "#64748B", dark: "#94A3B8", textLight: "#475569", textDark: "#CBD5E1" },
  other:     { light: "#9CA3AF", dark: "#D1D5DB", textLight: "#6B7280", textDark: "#E5E7EB" },
};

/** Fixed legend order for all zone-coded visuals. */
export const ZONE_ORDER: Zone[] = ["docs", "prompts", "execution", "stremiium", "rea", "other"];

/** Zone display metadata. */
export const ZONE_META: Record<Zone, { label: string; icon: string }> = {
  docs: { label: "Docs", icon: "BookOpen" },
  prompts: { label: "Prompts", icon: "ScrollText" },
  execution: { label: "Execution", icon: "CirclePlay" },
  stremiium: { label: ".stremiium", icon: "Hexagon" },
  rea: { label: "REA", icon: "Binary" },
  other: { label: "Other", icon: "FolderGit2" },
};

/** Verb lexicon (VIZ-017 D6): Explore / Learn / Inspect. */
export const LEXICON = {
  explore: "Explore",
  learn: "Learn",
  inspect: "Inspect",
} as const;

/** Typography stack (VIZ-017 D3) with offline-safe system fallbacks. */
export const TYPOGRAPHY = {
  heading: "Space Grotesk, Inter, system-ui, sans-serif",
  body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  mono: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace",
} as const;

/** Detect the zone for a repo path (VIZ-022 §8.2 rules). */
export function zoneOf(path: string): Zone {
  const first = path.split("/")[0];
  switch (first) {
    case "docs": return "docs";
    case "prompts": return "prompts";
    case "execution": return "execution";
    case ".stremiium": return "stremiium";
    case "rea": return "rea";
    default: return "other";
  }
}

/** Resolve a zone hue for the current theme. */
export function zoneHue(zone: Zone, theme: "light" | "dark", text = false): string {
  const h = ZONE_HUES[zone];
  if (text) return theme === "dark" ? h.textDark : h.textLight;
  return theme === "dark" ? h.dark : h.light;
}
