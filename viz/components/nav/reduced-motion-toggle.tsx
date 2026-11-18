"use client";

/**
 * ReducedMotionToggle — the in-app reduced-motion switch (FC-12).
 *
 * `components/decks/reveal-deck.tsx` reads `localStorage.getItem("viz-reduced-motion")`
 * but nothing ever wrote that key, so the "reduced-motion a11y switch" of
 * plan §5 item 7 was a read-only contract. This component is the writer.
 *
 * Contract (kept byte-compatible with the reveal-deck reader):
 *   localStorage "viz-reduced-motion" = "on"   → Reduced  (forced reduced motion)
 *   localStorage "viz-reduced-motion" = "off"  → Full     (no forced reduction)
 *   absent / anything else                     → System   (follow the OS query)
 *
 * On every change the value is persisted AND broadcast as
 *   window.dispatchEvent(new CustomEvent("viz-reduced-motion-change", { detail: { value } }))
 * so motion-aware consumers (deck reader, 3D scene, globe) can react without
 * polling localStorage.
 *
 * It also applies the preference immediately, so CSS can respond:
 *   document.documentElement.dataset.reducedMotion = "on" | "off" | "system"
 *   document.documentElement.setAttribute("data-reduced-motion", <same value>)
 *   document.documentElement.setAttribute("data-reduced-motion-effective", "true" | "false")
 * ("effective" resolves the OS query for the System state, which the
 * `prefers-reduced-motion` media query in app/globals.css already honours.)
 *
 * Accessibility: a labelled button group (`role="group"`) whose options are
 * real buttons carrying `aria-pressed`; keyboard reachable, visible label,
 * and a polite live region announcing the new preference.
 */

import { useCallback, useEffect, useId, useState } from "react";
import { Accessibility, MonitorCog, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

/** Persisted preference values — "on" | "off" match the reveal-deck reader. */
export type ReducedMotionValue = "system" | "on" | "off";

/** localStorage key shared with components/decks/reveal-deck.tsx. */
export const REDUCED_MOTION_STORAGE_KEY = "viz-reduced-motion";

/** CustomEvent name broadcast on every change. */
export const REDUCED_MOTION_EVENT = "viz-reduced-motion-change";

interface Option {
  value: ReducedMotionValue;
  label: string;
  hint: string;
  icon: typeof MonitorCog;
}

const OPTIONS: readonly Option[] = [
  { value: "system", label: "System", hint: "Follow the operating system preference", icon: MonitorCog },
  { value: "on", label: "Reduced", hint: "Always reduce motion", icon: Accessibility },
  { value: "off", label: "Full", hint: "Allow full motion", icon: Zap },
] as const;

/** Read the persisted preference; anything unknown is treated as System. */
export function readReducedMotionValue(): ReducedMotionValue {
  if (typeof window === "undefined") return "system";
  try {
    const raw = window.localStorage.getItem(REDUCED_MOTION_STORAGE_KEY);
    if (raw === "on") return "on";
    if (raw === "off") return "off";
    return "system";
  } catch {
    return "system";
  }
}

/**
 * CSS injected once into <head> so the forced "Reduced" state actually
 * freezes animation — the same rule set app/globals.css applies for the
 * `prefers-reduced-motion` media query (System state). Imported imperatively
 * so it survives even when the toggle component is unmounted.
 */
const REDUCED_MOTION_STYLE_ID = "viz-reduced-motion-styles";

function ensureReducedMotionStyles(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(REDUCED_MOTION_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = REDUCED_MOTION_STYLE_ID;
  style.textContent = [
    'html[data-reduced-motion="on"] *,',
    'html[data-reduced-motion="on"] *::before,',
    'html[data-reduced-motion="on"] *::after {',
    "  animation-duration: 0.01ms !important;",
    "  animation-iteration-count: 1 !important;",
    "  transition-duration: 0.01ms !important;",
    "  scroll-behavior: auto !important;",
    "}",
  ].join("\n");
  document.head.appendChild(style);
}

/** Apply the preference to the document root so CSS can respond. */
export function applyReducedMotionValue(value: ReducedMotionValue): void {
  if (typeof document === "undefined") return;
  ensureReducedMotionStyles();
  const root = document.documentElement;
  root.dataset.reducedMotion = value;
  root.setAttribute("data-reduced-motion", value);
  const osReduced =
    typeof window !== "undefined"
      ? (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false)
      : false;
  const effective = value === "on" ? true : osReduced;
  root.setAttribute("data-reduced-motion-effective", effective ? "true" : "false");
}

export interface ReducedMotionToggleProps {
  /** Extra classes for the wrapper. */
  className?: string;
  /** Visible label (also the group's accessible name). */
  label?: string;
  /** Fired after the value is persisted and broadcast. */
  onChange?: (value: ReducedMotionValue) => void;
}

export function ReducedMotionToggle({
  className,
  label = "Motion",
  onChange,
}: ReducedMotionToggleProps) {
  const [value, setValue] = useState<ReducedMotionValue>("system");
  const [announcement, setAnnouncement] = useState("");
  const labelId = useId();

  /* --- hydrate from storage (client-only — avoids an SSR mismatch) ------ */
  useEffect(() => {
    const stored = readReducedMotionValue();
    setValue(stored);
    applyReducedMotionValue(stored);
    const option = OPTIONS.find((o) => o.value === stored);
    setAnnouncement(`Motion preference: ${option?.label ?? "System"}.`);
  }, []);

  /* --- keep in sync with other instances of this toggle ---------------- */
  useEffect(() => {
    const onChangeEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: unknown }>).detail;
      const next =
        detail?.value === "on" || detail?.value === "off" || detail?.value === "system"
          ? detail.value
          : readReducedMotionValue();
      setValue(next);
      applyReducedMotionValue(next);
    };
    window.addEventListener(REDUCED_MOTION_EVENT, onChangeEvent);
    return () => window.removeEventListener(REDUCED_MOTION_EVENT, onChangeEvent);
  }, []);

  const choose = useCallback(
    (next: ReducedMotionValue) => {
      setValue(next);
      try {
        window.localStorage.setItem(REDUCED_MOTION_STORAGE_KEY, next);
      } catch {
        /* storage unavailable — the attribute + event still apply */
      }
      applyReducedMotionValue(next);
      try {
        window.dispatchEvent(
          new CustomEvent(REDUCED_MOTION_EVENT, { detail: { value: next } }),
        );
      } catch {
        /* event dispatch is best-effort */
      }
      const option = OPTIONS.find((o) => o.value === next);
      setAnnouncement(`Motion preference set to ${option?.label ?? next}.`);
      onChange?.(next);
    },
    [onChange],
  );

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span id={labelId} className="text-xs font-medium text-muted-foreground">
        {label}
      </span>
      <div
        role="group"
        aria-labelledby={labelId}
        className="inline-flex w-fit rounded-md border border-border bg-background p-0.5"
      >
        {OPTIONS.map((option) => {
          const Icon = option.icon;
          const pressed = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={pressed}
              title={option.hint}
              onClick={() => choose(option.value)}
              className={cn(
                "inline-flex h-8 items-center gap-1.5 rounded px-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                pressed
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary",
              )}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {option.label}
            </button>
          );
        })}
      </div>
      <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </div>
  );
}

export default ReducedMotionToggle;
