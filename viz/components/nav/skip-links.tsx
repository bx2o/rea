"use client";

import * as React from "react";

/**
 * Skip links (VIZ-014 §8.9 / WCAG 2.2 - Bypass Blocks).
 *
 * Three visually hidden links become visible on keyboard focus:
 *  - Skip to main content  -> <main id="main"> (made focusable by the shell)
 *  - Skip to navigation    -> desktop <nav id="primary-navigation">, or the
 *                             mobile Flo trigger when the desktop nav is hidden
 *  - Skip to search        -> the always-rendered ⌘K search trigger
 *
 * They are the first focusable elements in the document (rendered by the shell
 * before the sidebar/header) and use tokens only — no literal colour values.
 */

const SKIP_LINKS = [
  { href: "#main", label: "Skip to main content" },
  { href: "#primary-navigation", label: "Skip to navigation" },
  { href: "#command-search", label: "Skip to search" },
] as const;

export function SkipLinks() {
  /**
   * The desktop primary nav is display:none below the md breakpoint. When a
   * keyboard user activates "Skip to navigation" there, move focus to the
   * mobile Flo trigger instead of leaving focus on a hidden landmark.
   */
  const skipToNavigation = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const primary = document.getElementById("primary-navigation");
      if (primary && primary.getClientRects().length > 0) return; // native anchor is fine
      event.preventDefault();
      document.getElementById("mobile-navigation-trigger")?.focus();
    },
    []
  );

  return (
    <>
      {SKIP_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={link.href === "#primary-navigation" ? skipToNavigation : undefined}
          className="sr-only rounded-md focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

export default SkipLinks;
