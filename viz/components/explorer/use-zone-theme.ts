"use client";

import * as React from "react";
import { useTheme } from "next-themes";

/**
 * Theme awareness helpers (VIZ-014 §8.6 — zone colours must follow the
 * active theme; UX-09 / UX-10 remediation).
 *
 * `useThemeMode()` resolves the ACTIVE theme in the correct order:
 *   1. an explicit user choice ("light" / "dark") always wins,
 *   2. "system" (or a provider-less render) follows the OS preference.
 *
 * The previous implementation OR-ed the `prefers-color-scheme` query with the
 * `<html class="dark">` check, so an explicit "Light" choice was ignored on a
 * dark-preferring OS: the Explorer painted dark zone hues on a light UI while
 * the Overview (which reads `useTheme().resolvedTheme`) painted light ones —
 * the same folder showed a different hue in two views of the same app.
 * next-themes owns the user choice (`theme`) and its resolution
 * (`resolvedTheme`), so both are read from it directly.
 *
 * SSR + the first client render resolve "light" (matching the server HTML,
 * which next-themes renders without the theme class); the mounted effect
 * corrects the value before the client tree paints.
 */
export function useThemeMode(): "light" | "dark" {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [systemPrefersDark, setSystemPrefersDark] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // OS preference — only consulted for the "system" choice.
  React.useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => setSystemPrefersDark(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  if (!mounted) return "light";

  // 1. An explicit user choice wins over the OS preference.
  if (theme === "light") return "light";
  if (theme === "dark") return "dark";

  // 2. "system" → follow the OS (next-themes resolves this for us).
  if (resolvedTheme === "light" || resolvedTheme === "dark") return resolvedTheme;
  return systemPrefersDark ? "dark" : "light";
}

/**
 * Read an HSL design token (e.g. "--background") from the document root.
 * The tokens in app/globals.css are stored as bare HSL channels
 * ("220 14% 96%"), so a scene can adopt the app palette without any
 * hardcoded colour literal (VIZ-017 single-source rule).
 */
export function readThemeToken(name: string): string | null {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }
  const value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value.length > 0 ? value : null;
}

/**
 * "220 14% 96%" → [r, g, b] in 0–1 sRGB. Returns null for unusable input so
 * callers can fall back to their own defaults.
 */
export function hslTripletToRgb(
  triplet: string
): [number, number, number] | null {
  const parts = triplet
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(Number);
  if (parts.length < 3 || parts.some((value) => !Number.isFinite(value))) {
    return null;
  }
  const [hue, saturation, lightness] = parts;
  const h = ((((hue % 360) + 360) % 360) / 360);
  const s = Math.min(Math.max(saturation, 0), 100) / 100;
  const l = Math.min(Math.max(lightness, 0), 100) / 100;
  const a = s * Math.min(l, 1 - l);
  const channel = (n: number) => {
    const k = (n + h * 12) % 12;
    return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [channel(0), channel(8), channel(4)];
}
