import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Brand logo / home link (VIZ-017 D1 — ZAR green chrome, gold highlight only).
 *
 * The mark is an inline SVG so the app ships no binary brand asset (no such
 * asset exists in the repository). Every colour comes from a design token:
 *   - rounded square  -> --primary      (ZAR green)
 *   - "S" monogram    -> --primary-foreground
 *   - corner accent   -> --highlight     (ZAR gold, highlight-only role)
 *
 * The wrapper is a real next/link to "/" with an accessible name, a title and
 * a visible focus ring, so the logo doubles as the site's home function in
 * both the desktop sidebar and the mobile top bar.
 */

export interface LogoProps {
  /** Show the wordmark beside the mark. Defaults to true. */
  showWordmark?: boolean;
  /** Smaller mark for compact chrome (e.g. the mobile top bar). */
  compact?: boolean;
  /** Override the accessible name / title of the home link. */
  label?: string;
  className?: string;
}

export const LOGO_HOME_LABEL = "Stremiium Repo Viz — home";

/** Decorative brand mark. The parent link carries the accessible name. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("size-8 shrink-0", className)}
    >
      <rect x="1.5" y="1.5" width="37" height="37" rx="10" className="fill-primary" />
      <path
        d="M27.5 13.8C26 11.2 23 9.8 20 9.8C16 9.8 13.5 12 13.5 15.2C13.5 18 15.6 19.6 20 20.6C24.4 21.6 26.5 23.2 26.5 26.2C26.5 29.6 23.8 31.8 19.8 31.8C16.6 31.8 14 30.6 12.5 28.2"
        className="stroke-primary-foreground"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30.6" cy="9.4" r="3" className="fill-highlight" />
    </svg>
  );
}

/** Home link: brand mark (+ optional wordmark). */
export function Logo({
  showWordmark = true,
  compact = false,
  label = LOGO_HOME_LABEL,
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      title={label}
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <LogoMark className={compact ? "size-8" : "size-9"} />
      {showWordmark ? (
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-heading text-sm font-semibold tracking-tight text-foreground">
            Stremiium Repo Viz
          </span>
          <span className="block truncate text-[11px] text-muted-foreground">
            bx2o/rea learning environment
          </span>
        </span>
      ) : null}
    </Link>
  );
}

export default Logo;
