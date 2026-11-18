import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind-aware class merge (shadcn convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Compact number formatting for stat cards (VIZ-015). */
export function formatCompact(n: number): string {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(n);
}

/** Exact number formatting for tooltips. */
export function formatExact(n: number): string {
  return new Intl.NumberFormat("en").format(n);
}

/** ISO date → locale string, timezone-safe (UTC parse, local display). */
export function formatDate(iso: string, opts?: Intl.DateTimeFormatOptions): string {
  const d = new Date(iso.endsWith("Z") || iso.includes("+") ? iso : iso + "Z");
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en", opts ?? { dateStyle: "medium" }).format(d);
}

/** Human file size. */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

/** Shortened sha for display. */
export function shortSha(sha: string): string {
  return sha.slice(0, 7);
}
