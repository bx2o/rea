"use client";

import * as React from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

/**
 * VIZ-018 theme system: next-themes with attribute="class", light/dark/system.
 * VIZ-020 implements it; tokens live in app/globals.css (VIZ-012/VIZ-017).
 */

type NextThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

function ThemeProvider({ children, ...props }: NextThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

type ThemeOption = (typeof THEME_OPTIONS)[number]["value"];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const toggleRef = React.useRef<HTMLButtonElement | null>(null);
  const menuId = React.useId();

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // SSR mounted-guard (VIZ-018): stable placeholder avoids a hydration mismatch
  // and layout shift before next-themes resolves the stored preference.
  if (!mounted) {
    return <span aria-hidden="true" className="inline-block size-9" />;
  }

  const current: ThemeOption = (THEME_OPTIONS.find((option) => option.value === theme)?.value ??
    "system") as ThemeOption;
  const CurrentIcon = THEME_OPTIONS.find((option) => option.value === current)?.icon ?? Monitor;

  return (
    <div ref={rootRef} className="relative">
      <Button
        ref={toggleRef}
        variant="ghost"
        size="icon"
        aria-label={`Theme: ${current}. Change theme`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <CurrentIcon className="size-4" aria-hidden="true" />
      </Button>
      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label="Theme"
          className="absolute right-0 top-11 z-50 min-w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          {THEME_OPTIONS.map((option) => (
            <li key={option.value} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={current === option.value}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                  toggleRef.current?.focus();
                }}
                className="flex w-full items-center gap-2 rounded-sm px-2 py-2 text-left text-sm transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
              >
                <option.icon className="size-4" aria-hidden="true" />
                <span className="flex-1">{option.label}</span>
                {current === option.value && (
                  <Check className="size-4 text-primary" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { ThemeProvider, ThemeToggle };
