"use client";

import * as React from "react";

/**
 * Reactive light/dark mode for zoneHue() picks (VIZ-014 §8.6 — zone colors
 * must follow the active theme). Mirrors the dashboard's useIsDark():
 * MutationObserver on <html class> so next-themes toggles re-render
 * consumers. SSR and the first client render resolve "light", matching the
 * server HTML; the observer corrects after mount.
 */
export function useThemeMode(): "light" | "dark" {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const el = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () =>
      setMode(
        el.classList.contains("dark") || mq.matches ? "dark" : "light"
      );
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    const onMq = () => update();
    mq.addEventListener("change", onMq);
    return () => {
      obs.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return mode;
}
