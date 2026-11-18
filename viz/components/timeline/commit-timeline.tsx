"use client";

/**
 * CommitTimeline — vertical commit history (VIZ-020 §5 view 3; layout per
 * VIZ-013 §6.3; motion per VIZ-014 §8.4).
 *
 * - Each commit is a glass card node on a decorative spine whose gradient
 *   walks the zone hues in fixed legend order. Hues come from lib/brand.ts
 *   (zoneHue/ZONE_ORDER) — the app's single token source (VIZ-017 D2); no
 *   hex values are hardcoded here.
 * - Cards are <button aria-expanded> elements; expanding loads the commit's
 *   DiffSummary (cached per sha) and renders it in an aria-live polite
 *   region so screen readers hear loading → loaded transitions (SC 4.1.3).
 *   The diff is fetched LAZILY on expand — the timeline never pre-loads a
 *   diff for a card the user has not opened (PERF-07).
 * - The card is a memoised component with stable props (PERF-06): expanding
 *   or loading one commit re-renders that card only, never the whole list.
 * - GSAP: ScrollTrigger reveals cards (fade + slide, staggered) in
 *   ScrollTrigger.batch, wrapped in gsap.matchMedia() — under
 *   prefers-reduced-motion: reduce no tween is ever attached and the list
 *   renders static. Cleanup reverts the whole context on unmount/re-run.
 */
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  FileMinus,
  FilePlus,
  GitCommit,
  RotateCw,
} from "lucide-react";
import { ZONE_ORDER, zoneHue } from "@/lib/brand";
import type { CommitRecord, DiffFile } from "@/lib/types";
import { cn, formatDate, formatExact, shortSha } from "@/lib/utils";
import { fetchCommitDiff } from "./diff-store";
import { DiffViewer } from "./diff-viewer";

type DiffStatus = "loading" | "loaded" | "error";

/** How often the shared relative-time clock ticks (ms). */
const CLOCK_TICK_MS = 60_000;

interface DiffState {
  status: DiffStatus;
  files: DiffFile[] | null;
}

/** Zone-ordered spine gradient from the brand token source. */
function spineGradient(theme: "light" | "dark"): string {
  const stops = ZONE_ORDER.map((zone) => zoneHue(zone, theme));
  return `linear-gradient(to bottom, ${stops.join(", ")})`;
}

/** Relative time ("3 days ago"), Intl-based. */
function formatRelative(iso: string, now: number = Date.now()): string {
  const parsed = Date.parse(
    iso.endsWith("Z") || iso.includes("+") ? iso : `${iso}Z`
  );
  if (Number.isNaN(parsed)) return "";
  const seconds = Math.abs(now - parsed) / 1000;
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 31_536_000],
    ["month", 2_592_000],
    ["week", 604_800],
    ["day", 86_400],
    ["hour", 3_600],
    ["minute", 60],
    ["second", 1],
  ];
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const [unit, unitSeconds] of units) {
    if (seconds >= unitSeconds || unit === "second") {
      const value = Math.round(seconds / unitSeconds);
      return formatter.format(now >= parsed ? -value : value, unit);
    }
  }
  return "now";
}

/** Author initials for the avatar chip (repo git metadata only). */
function initialsOf(author: string): string {
  const parts = author.trim().split(/[\s.]+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export interface CommitTimelineProps {
  /** Commit records, newest first (pre-sorted by the data layer). */
  commits: CommitRecord[];
}

export function CommitTimeline({ commits }: CommitTimelineProps) {
  const listRef = useRef<HTMLOListElement>(null);
  /** Shas whose diff region is open. */
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(
    () => new Set<string>()
  );
  const [diffs, setDiffs] = useState<Record<string, DiffState>>({});
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  /** Spine gradient — memoised so a card update does not rebuild it. */
  const spine = useMemo(() => spineGradient(theme), [theme]);

  /**
   * Mirror of the open-set. The toggle callback reads the previous state
   * from this ref so its dependency list stays empty — a stable callback is
   * what lets the memoised cards bail out (PERF-06).
   */
  const expandedRef = useRef<ReadonlySet<string>>(expanded);

  /**
   * Shared clock for the relative timestamps ("3 days ago"). The cards are
   * memoised, so without a ticking clock their relative time would freeze
   * at first render. One tick per minute keeps every card in step.
   */
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), CLOCK_TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  /** Load (or retry) a commit's diff; cached by the data layer. */
  const loadDiff = useCallback((sha: string) => {
    setDiffs((prev) =>
      prev[sha] !== undefined && prev[sha].status !== "error"
        ? prev
        : { ...prev, [sha]: { status: "loading", files: null } }
    );
    fetchCommitDiff(sha)
      .then((diff) =>
        setDiffs((prev) => ({
          ...prev,
          [sha]: { status: "loaded", files: diff.files },
        }))
      )
      .catch(() =>
        setDiffs((prev) => ({
          ...prev,
          [sha]: { status: "error", files: null },
        }))
      );
  }, []);

  /**
   * Toggle one card. Referentially stable (no state in its closure) so the
   * memoised card components are not invalidated by unrelated expansions.
   * The diff is requested here and nowhere else — lazy-on-expand (PERF-07).
   */
  const handleCardClick = useCallback(
    (sha: string) => {
      const wasOpen = expandedRef.current.has(sha);
      const next = new Set(expandedRef.current);
      if (wasOpen) next.delete(sha);
      else next.add(sha);
      expandedRef.current = next;
      setExpanded(next);
      if (!wasOpen) loadDiff(sha);
    },
    [loadDiff]
  );

  /**
   * GSAP scroll-in reveals. matchMedia keeps every tween behind
   * (prefers-reduced-motion: no-preference); the reduce branch attaches
   * nothing so the timeline renders static (VIZ-014 §8.4). Re-runs when the
   * commit list changes (e.g. a ?path= filter swaps the cards).
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const list = listRef.current;
    if (list === null) return;
    const cards = gsap.utils.toArray<HTMLElement>(
      "[data-timeline-card]",
      list
    );
    if (cards.length === 0) return;

    const mm = gsap.matchMedia();
    // Attach tweens only when motion is allowed. Under
    // (prefers-reduced-motion: reduce) this query does not match, so no
    // tween or ScrollTrigger is created and the list renders static
    // (VIZ-014 §8.4). matchMedia re-runs/reverts automatically if the
    // user's preference changes while mounted.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: "power2.out",
              overwrite: true,
            }
          ),
      });
    });
    return () => mm.revert();
  }, [commits]);

  /**
   * Expanding/collapsing changes card heights — refresh trigger positions
   * so below-fold reveals stay accurate. Motion-safe only.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, [expanded, diffs]);

  if (commits.length === 0) {
    return (
      <p className="glass rounded-xl p-6 text-center text-sm text-muted-foreground">
        No commits to display.
      </p>
    );
  }

  return (
    <div className="relative">
      {/* Decorative spine — zone hues, fixed legend order (VIZ-017 D2). */}
      <span
        aria-hidden="true"
        className="absolute inset-y-1 left-4 w-px -translate-x-1/2"
        style={{ backgroundImage: spine }}
      />
      <ol ref={listRef} className="space-y-4">
        {commits.map((commit) => (
          <CommitCard
            key={commit.sha}
            commit={commit}
            isOpen={expanded.has(commit.sha)}
            diff={diffs[commit.sha]}
            now={now}
            onToggle={handleCardClick}
            onRetry={loadDiff}
          />
        ))}
      </ol>
    </div>
  );
}

interface CommitCardProps {
  commit: CommitRecord;
  isOpen: boolean;
  diff: DiffState | undefined;
  /** Shared clock for the relative timestamp (PERF-06). */
  now: number;
  onToggle: (sha: string) => void;
  onRetry: (sha: string) => void;
}

/**
 * One commit card. Memoised (PERF-06): `commit` is a stable record
 * reference, `isOpen`/`diff` only change for the card they belong to, and
 * the two callbacks are referentially stable — so expanding one commit
 * never reconciles the rest of the timeline.
 */
const CommitCard = memo(function CommitCard({
  commit,
  isOpen,
  diff,
  now,
  onToggle,
  onRetry,
}: CommitCardProps) {
  const diffId = `commit-diff-${commit.sha}`;
  return (
    <li data-timeline-card className="relative pl-10 md:pl-12">
      <span
        aria-hidden="true"
        className="absolute left-0 top-4 flex size-8 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm"
      >
        <GitCommit className="size-4" />
      </span>
      <article className="glass rounded-xl shadow-sm transition-shadow hover:shadow-md">
        {/* Card is a disclosure button (VIZ-014 / SC 4.1.2): full card
            toggles the diff region referenced by aria-controls. */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={diffId}
          onClick={() => onToggle(commit.sha)}
          className="flex w-full flex-col gap-2 rounded-xl p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span
              aria-hidden="true"
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold uppercase text-secondary-foreground"
            >
              {initialsOf(commit.author)}
            </span>
            <span className="text-sm font-medium text-foreground">
              {commit.author}
            </span>
            <time
              dateTime={commit.date}
              suppressHydrationWarning
              className="text-xs text-muted-foreground"
            >
              {formatRelative(commit.date)} · {formatDate(commit.date)}
            </time>
            <span className="ml-auto flex items-center gap-1.5 pl-2">
              <span className="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[11px] font-medium text-primary">
                {shortSha(commit.sha)}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </span>
          </div>
          <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground">
            {commit.message}
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tabular-nums">
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <GitCommit aria-hidden="true" className="size-3.5" />
              {formatExact(commit.filesChanged)}{" "}
              {commit.filesChanged === 1 ? "file" : "files"}
            </span>
            <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
              <FilePlus aria-hidden="true" className="size-3.5" />+
              {formatExact(commit.insertions)}
            </span>
            <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400">
              <FileMinus aria-hidden="true" className="size-3.5" />-
              {formatExact(commit.deletions)}
            </span>
          </p>
        </button>
        {isOpen && (
          <div
            id={diffId}
            role="region"
            aria-label={`Changed files for commit ${shortSha(commit.sha)}`}
            aria-live="polite"
            className="border-t border-border/60 px-4 pb-4 pt-3"
          >
            {diff === undefined || diff.status === "loading" ? (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <RotateCw aria-hidden="true" className="size-4 animate-spin" />
                Loading changed files…
              </p>
            ) : diff.status === "error" ? (
              <div className="text-sm">
                <p className="text-red-600 dark:text-red-400">
                  Failed to load the diff for this commit.
                </p>
                <button
                  type="button"
                  onClick={() => onRetry(commit.sha)}
                  className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-input bg-card px-2 py-1 text-xs font-medium hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <RotateCw aria-hidden="true" className="size-3.5" />
                  Retry
                </button>
              </div>
            ) : (
              <DiffViewer files={diff.files ?? []} />
            )}
          </div>
        )}
      </article>
    </li>
  );
});
