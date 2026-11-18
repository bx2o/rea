"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowRight,
  Files,
  Folder,
  History,
  Loader2,
  RefreshCw,
  TriangleAlert,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LEXICON, ZONE_META, ZONE_ORDER, zoneHue, type Zone } from "@/lib/brand";
import type {
  ChurnEntry,
  CommitRecord,
  CommitsOverTimePoint,
  RepoStats,
  TypeMixPoint,
  ZoneDistPoint,
} from "@/lib/types";
import { cn, formatCompact, formatDate, formatExact } from "@/lib/utils";

/** Council count from .stremiium/config/council-department-mapping.json (SC + C01–C16). */
const COUNCIL_COUNT = 16;

type DataSource = "git" | "snapshot";

/* ---------------------------------------------------------------------------
 * Data loading — live API first, committed snapshot fallback (plan §6).
 * NOTE: files under public/ are served from the web root, so the committed
 * snapshots live at /snapshots/*.json (not /public/snapshots/...).
 * ------------------------------------------------------------------------- */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toSource(value: unknown, fallback: DataSource): DataSource {
  return value === "git" ? "git" : value === "snapshot" ? "snapshot" : fallback;
}

/** Runtime validation against the VIZ-022 RepoStats contract — fail closed. */
function parseStats(payload: unknown): RepoStats {
  const raw = isRecord(payload) && isRecord(payload.data) ? payload.data : payload;
  if (
    !isRecord(raw) ||
    typeof raw.totalFiles !== "number" ||
    typeof raw.totalDirs !== "number" ||
    typeof raw.totalCommits !== "number" ||
    !isRecord(raw.byZone) ||
    !isRecord(raw.byType) ||
    !Array.isArray(raw.churnTop)
  ) {
    throw new Error("stats payload does not match the RepoStats contract");
  }
  return raw as unknown as RepoStats;
}

function parseCommits(payload: unknown): CommitRecord[] {
  let list: unknown = payload;
  if (isRecord(payload)) {
    if (Array.isArray(payload.data)) list = payload.data; // ApiEnvelope<CommitRecord[]>
    else if (Array.isArray(payload.commits)) list = payload.commits; // snapshot { meta, commits }
  }
  if (!Array.isArray(list)) {
    throw new Error("commits payload does not match the CommitRecord[] contract");
  }
  return list.filter(
    (commit): commit is CommitRecord =>
      isRecord(commit) && typeof commit.sha === "string" && typeof commit.date === "string"
  );
}

async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url, { headers: { accept: "application/json" }, cache: "no-store" });
  if (!response.ok) throw new Error(`${url} responded ${response.status}`);
  return response.json();
}

async function loadStats(): Promise<{ stats: RepoStats; source: DataSource }> {
  try {
    const payload = await fetchJson("/api/stats");
    return {
      stats: parseStats(payload),
      source: isRecord(payload) ? toSource(payload.source, "snapshot") : "snapshot",
    };
  } catch {
    const payload = await fetchJson("/snapshots/stats.json");
    return { stats: parseStats(payload), source: "snapshot" };
  }
}

async function loadCommits(): Promise<{ commits: CommitRecord[]; source: DataSource }> {
  try {
    const payload = await fetchJson("/api/commits");
    return {
      commits: parseCommits(payload),
      source: isRecord(payload) ? toSource(payload.source, "snapshot") : "snapshot",
    };
  } catch {
    const payload = await fetchJson("/snapshots/commits.json");
    return { commits: parseCommits(payload), source: "snapshot" };
  }
}

/* ---------------------------------------------------------------------------
 * Formatting helpers (VIZ-015 §8 rules)
 * ------------------------------------------------------------------------- */

/** Exact with separators below 10,000; compact at/above 10,000. */
function formatStat(value: number): string {
  return value >= 10_000 ? formatCompact(value) : formatExact(value);
}

function formatPct(ratio: number): string {
  if (ratio <= 0) return "0%";
  return ratio * 100 < 1 ? "<1%" : `${Math.round(ratio * 100)}%`;
}

function typeLabel(type: string): string {
  if (type === "other" || !/^[a-z0-9][a-z0-9]*$/i.test(type)) return type;
  return `.${type}`;
}

function truncatePath(path: string, max = 34): string {
  if (path.length <= max) return path;
  const keep = Math.floor((max - 1) / 2);
  return `${path.slice(0, keep)}…${path.slice(path.length - keep)}`;
}

/** GSAP/recharts JS animations are not covered by the global CSS motion gate. */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Media-query hook so charts can adapt their axis geometry on narrow screens. */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const list = window.matchMedia(query);
    setMatches(list.matches);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/* ---------------------------------------------------------------------------
 * Chart tooltip cells (glass treatment, VIZ-018 §8.5)
 * ------------------------------------------------------------------------- */

function CommitsTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value?: number | string }>;
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  const count = Number(payload[0]?.value ?? 0);
  return (
    <div className="glass rounded-md px-3 py-2 text-xs">
      <p className="font-medium">
        {formatDate(String(label ?? ""), {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="mt-0.5 text-muted-foreground">
        {formatExact(count)} {count === 1 ? "commit" : "commits"}
      </p>
    </div>
  );
}

function TypeTooltip({
  active,
  payload,
  total,
}: {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number | string }>;
  total: number;
}) {
  if (!active || !payload?.length) return null;
  const count = Number(payload[0]?.value ?? 0);
  const type = String(payload[0]?.name ?? "");
  return (
    <div className="glass rounded-md px-3 py-2 text-xs">
      <p className="font-medium">{typeLabel(type)} files</p>
      <p className="mt-0.5 text-muted-foreground">
        {formatExact(count)} files · {formatPct(count / total)}
      </p>
    </div>
  );
}

function ChurnTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload?: ChurnEntry }>;
}) {
  if (!active || !payload?.length) return null;
  const entry = payload[0]?.payload;
  if (!entry) return null;
  return (
    <div className="glass max-w-72 rounded-md px-3 py-2 text-xs">
      <p className="break-all font-medium">{entry.path}</p>
      <p className="mt-1 flex flex-col gap-0.5">
        <span className="font-medium text-chart-3">+{formatExact(entry.insertions)} insertions</span>
        <span className="font-medium text-destructive">−{formatExact(entry.deletions)} deletions</span>
        <span className="text-muted-foreground">{formatExact(entry.commits)} commits</span>
      </p>
    </div>
  );
}

function ChurnPathTick({
  x = 0,
  y = 0,
  payload,
  maxChars = 34,
}: {
  x?: number;
  y?: number;
  payload?: { value?: string };
  maxChars?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      dominantBaseline="central"
      fontSize={11}
      className="fill-muted-foreground"
    >
      {truncatePath(payload?.value ?? "", maxChars)}
    </text>
  );
}

/* ---------------------------------------------------------------------------
 * Globe hero (cobe WebGL) — client-only, SSR-safe (VIZ-013 §6.1, §9.2)
 * ------------------------------------------------------------------------- */

/** cobe marker shape (the subset the globe scene consumes). */
interface HeroMarker {
  id: string;
  location: [number, number];
  size: number;
  color: [number, number, number];
}

/**
 * GlobeHero is being refactored in parallel (theme-aware markers). The
 * Overview therefore talks to it through a narrow adapter that hands over BOTH
 * the cobe marker list and the raw zone counts — whichever of the two the
 * scene reads, the hero renders the same six zones in the active theme.
 */
interface HeroGlobeProps {
  className?: string;
  markers?: HeroMarker[];
  byZone?: Record<Zone, { files: number }>;
}

const GlobeHero = dynamic(() => import("@/components/three/globe-hero"), {
  ssr: false,
  loading: () => <GlobePreparing />,
}) as unknown as React.ComponentType<HeroGlobeProps>;

/** Load gate — Spinner + "Preparing globe…" (VIZ-013 §9.2). */
function GlobePreparing() {
  return (
    <div
      role="status"
      className="flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-muted-foreground"
    >
      <Loader2 className="size-5 animate-spin" aria-hidden="true" />
      <span>Preparing globe…</span>
    </div>
  );
}

/** Hex → rgb floats (cobe colour space). Colours always come from zoneHue(). */
function hexToRgbTuple(hex: string): [number, number, number] {
  const value = hex.replace(/^#/, "");
  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
  ];
}

/**
 * One marker per zone, fixed legend order (VIZ-017 D2). Marker size tracks the
 * zone share of repository files (sqrt scale); colour resolves through
 * zoneHue() so the hero follows the active theme (VIZ-018 §8.4).
 */
function buildHeroMarkers(
  byZone: Record<Zone, { files: number }>,
  theme: "light" | "dark"
): HeroMarker[] {
  const counts = ZONE_ORDER.map((zone) => byZone[zone]?.files ?? 0);
  const maxFiles = Math.max(...counts, 1);
  return ZONE_ORDER.map((zone, index) => ({
    id: zone,
    // cobe location is [latitude, longitude] — six zones spread around the globe.
    location: [index % 2 === 0 ? 18 : -12, -150 + index * 60],
    size: 0.04 + 0.1 * Math.sqrt(counts[index] / maxFiles),
    color: hexToRgbTuple(zoneHue(zone, theme)),
  }));
}

/* ---------------------------------------------------------------------------
 * Local presentational blocks
 * ------------------------------------------------------------------------- */

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  hint: string;
}

function StatCard({ label, value, icon: Icon, hint }: StatCardProps) {
  return (
    <Card className="gap-2">
      <CardHeader>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <Icon className="size-3.5 text-primary" aria-hidden="true" />
          {label}
        </div>
        <CardTitle className="text-3xl tabular-nums" title={formatExact(value)}>
          {formatStat(value)}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground">{hint}</CardContent>
    </Card>
  );
}

/** Zero-count zone record — the hero renders before the stats land. */
const EMPTY_BY_ZONE: Record<Zone, { files: number }> = {
  docs: { files: 0 },
  prompts: { files: 0 },
  execution: { files: 0 },
  stremiium: { files: 0 },
  rea: { files: 0 },
  other: { files: 0 },
};

/**
 * Overview hero — cobe globe with the repo title, a one-sentence value
 * proposition and the primary "Start exploring" CTA (VIZ-013 §6.1 row 1).
 * Rendered unconditionally so the first paint already carries the identity
 * of the repository; the numbers fill in once the stats resolve.
 */
function OverviewHero({
  files,
  commits,
  byZone,
  theme,
}: {
  files: number | null;
  commits: number | null;
  byZone: Record<Zone, { files: number }>;
  theme: "light" | "dark";
}) {
  const markers = React.useMemo(() => buildHeroMarkers(byZone, theme), [byZone, theme]);

  return (
    <Card className="relative col-span-12 min-h-[26rem] overflow-hidden border-border/60 p-0 lg:col-span-8">
      {/* WebGL globe layer */}
      <div className="absolute inset-0">
        <GlobeHero className="h-full w-full" markers={markers} byZone={byZone} />
      </div>

      {/* Scrim — keeps the overlay copy legible over the scene (VIZ-018 §8.3) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/10"
      />

      {/* Liquid-glass copy panel (VIZ-018 §8.5) */}
      <div className="relative flex min-h-[26rem] flex-col justify-end p-4 sm:p-6">
        <div className="glass max-w-md rounded-2xl p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Repository identity
          </p>
          <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            The bx2o/rea repository
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {files !== null && commits !== null ? (
              <>
                {formatExact(files)} files across six zones and {formatExact(commits)} commits of
                history — explore the tree, trace what changed, and learn how the program fits
                together.
              </>
            ) : (
              <>
                Six zones, one commit history — explore the tree, trace what changed, and learn how
                the program fits together.
              </>
            )}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link href="/explorer" className={cn(buttonVariants({ size: "lg" }))}>
              Start exploring
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/learn"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Learn the program
            </Link>
          </div>
          <Link
            href="/globe"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {LEXICON.inspect} the globe
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

/**
 * Accessible table alternative for a chart (VIZ-014 §8.3, SC 1.3.1) — collapsed
 * by default so the default view stays uncluttered, but never removed from the
 * accessibility tree.
 */
function DataTable({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <details className="mt-4 rounded-lg border border-border/60 bg-card/40">
      <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Data table
      </summary>
      <div className="max-h-80 overflow-auto border-t border-border/60 p-4">
        <Table>
          <TableCaption className="text-left text-xs text-muted-foreground">{caption}</TableCaption>
          {children}
        </Table>
      </div>
    </details>
  );
}

function EmptyBlock({ text }: { text: string }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
      {text}
    </div>
  );
}

function ChartErrorBlock({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-6 text-center">
      <p className="text-sm text-muted-foreground">Could not load chart data — {message}</p>
      <Button variant="outline" size="sm" onClick={onRetry}>
        <RefreshCw aria-hidden="true" />
        Retry
      </Button>
    </div>
  );
}

function OverviewSkeleton() {
  return (
    <>
      <div className="col-span-12 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 lg:col-span-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="gap-3" aria-hidden="true">
            <CardHeader>
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-24" />
            </CardHeader>
          </Card>
        ))}
      </div>
      <Skeleton aria-hidden="true" className="col-span-12 h-72 w-full rounded-lg lg:col-span-7" />
      <Skeleton aria-hidden="true" className="col-span-12 h-72 w-full rounded-lg lg:col-span-5" />
      <Skeleton aria-hidden="true" className="col-span-12 h-72 w-full rounded-lg lg:col-span-5" />
      <Skeleton aria-hidden="true" className="col-span-12 h-[22rem] w-full rounded-lg lg:col-span-7" />
    </>
  );
}

function ErrorCard({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <Card className="mx-auto w-full max-w-lg border-destructive/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert className="size-5 text-destructive" aria-hidden="true" />
          Statistics unavailable
        </CardTitle>
        <CardDescription>
          Both the live API and the committed snapshot failed to load valid stats. {message}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={onRetry}>
          <RefreshCw aria-hidden="true" />
          Try again
        </Button>
      </CardContent>
    </Card>
  );
}

/* ---------------------------------------------------------------------------
 * Overview dashboard (VIZ-015 composition, VIZ-020 build)
 * ------------------------------------------------------------------------- */

export default function OverviewPage() {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";
  const reducedMotion = usePrefersReducedMotion();
  const narrow = useMediaQuery("(max-width: 640px)");

  const [stats, setStats] = React.useState<RepoStats | null>(null);
  const [statsSource, setStatsSource] = React.useState<DataSource | null>(null);
  const [statsError, setStatsError] = React.useState<string | null>(null);
  const [commits, setCommits] = React.useState<CommitRecord[] | null>(null);
  const [commitsSource, setCommitsSource] = React.useState<DataSource | null>(null);
  const [commitsError, setCommitsError] = React.useState<string | null>(null);
  const [reloadNonce, setReloadNonce] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const result = await loadStats();
        if (!cancelled) {
          setStats(result.stats);
          setStatsSource(result.source);
          setStatsError(null);
        }
      } catch (error) {
        if (!cancelled) {
          setStatsError(error instanceof Error ? error.message : "unknown error");
        }
      }
      try {
        const result = await loadCommits();
        if (!cancelled) {
          setCommits(result.commits);
          setCommitsSource(result.source);
          setCommitsError(null);
        }
      } catch (error) {
        if (!cancelled) {
          setCommitsError(error instanceof Error ? error.message : "unknown error");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [reloadNonce]);

  const retry = React.useCallback(() => setReloadNonce((nonce) => nonce + 1), []);

  /* --- Derived chart data (VIZ-015 contracts) --- */

  const commitsOverTime: CommitsOverTimePoint[] = React.useMemo(() => {
    if (!commits) return [];
    const byDay = new Map<string, number>();
    for (const commit of commits) {
      const day = commit.date.slice(0, 10); // UTC day bucket (VIZ-015)
      byDay.set(day, (byDay.get(day) ?? 0) + 1);
    }
    return [...byDay.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, commits: count }));
  }, [commits]);

  const peakPoint = React.useMemo(
    () =>
      commitsOverTime.reduce<CommitsOverTimePoint | null>(
        (best, point) => (best === null || point.commits > best.commits ? point : best),
        null
      ),
    [commitsOverTime]
  );

  const totalCommitsPlotted = commitsOverTime.reduce((sum, point) => sum + point.commits, 0);

  const typeMix: TypeMixPoint[] = React.useMemo(() => {
    if (!stats) return [];
    const entries = Object.entries(stats.byType)
      .filter(([, count]) => typeof count === "number" && count > 0)
      .sort((a, b) => b[1] - a[1]);
    const mix = entries.slice(0, 8).map(([type, count]) => ({ type, count }));
    const otherCount = entries.slice(8).reduce((sum, [, count]) => sum + count, 0);
    if (otherCount > 0) mix.push({ type: "other", count: otherCount });
    return mix;
  }, [stats]);
  const typeMixTotal = typeMix.reduce((sum, point) => sum + point.count, 0) || 1;

  /**
   * byType is NOT zone-coded, and VIZ-017 reserves zone hues as the only
   * categorical chart hues. Ranked extension counts are therefore treated as
   * an ordinal (continuous) series: a single-hue intensity ramp on
   * --chart-1, with muted gray for the aggregated "other" bucket.
   */
  const typeSliceFill = React.useCallback((index: number, type: string): string => {
    if (type === "other") return "hsl(var(--muted-foreground) / 0.45)";
    const alpha = Math.max(0.15, 0.92 - index * 0.1);
    return `hsl(var(--chart-1) / ${alpha.toFixed(2)})`;
  }, []);

  const zoneDist: ZoneDistPoint[] = React.useMemo(() => {
    if (!stats) return [];
    return ZONE_ORDER.map((zone) => ({ zone, files: stats.byZone[zone]?.files ?? 0 }));
  }, [stats]);
  const zoneMaxFiles = Math.max(1, ...zoneDist.map((point) => point.files));
  const totalZoneFiles = zoneDist.reduce((sum, point) => sum + point.files, 0) || 1;

  const churn: ChurnEntry[] = React.useMemo(() => {
    if (!stats) return [];
    return [...stats.churnTop]
      .filter(
        (entry) =>
          typeof entry.path === "string" &&
          typeof entry.insertions === "number" &&
          typeof entry.deletions === "number" &&
          typeof entry.commits === "number"
      )
      .sort((a, b) => b.insertions + b.deletions - (a.insertions + a.deletions))
      .slice(0, 10);
  }, [stats]);

  /* --- Takeaway sentences (VIZ-014 §8.3 text alternative) --- */

  const areaTakeaway =
    peakPoint && commitsOverTime.length > 0
      ? `Commit activity peaked on ${formatDate(peakPoint.date, { dateStyle: "long" })} with ${formatExact(peakPoint.commits)} commits; ${formatExact(totalCommitsPlotted)} commits across ${formatExact(commitsOverTime.length)} active days.`
      : "Commit activity per day over the repository's history.";

  const typeTakeaway =
    typeMix.length > 0
      ? (() => {
          const top = typeMix[0];
          const named = typeMix.filter((point) => point.type !== "other");
          const covered = named.reduce((sum, point) => sum + point.count, 0);
          return `${typeLabel(top.type)} files dominate with ${formatPct(top.count / typeMixTotal)} of the mix; the top ${named.length} types cover ${formatPct(covered / typeMixTotal)}.`;
        })()
      : "File-type mix — no typed files tracked yet.";

  const zoneTakeaway =
    zoneDist.length > 0
      ? (() => {
          const top = [...zoneDist].sort((a, b) => b.files - a.files)[0];
          return `${ZONE_META[top.zone].label} is the largest zone with ${formatExact(top.files)} files (${formatPct(top.files / totalZoneFiles)}); the same six zone hues are used across every view.`;
        })()
      : "Zone distribution — no tracked files yet.";

  const churnTakeaway =
    churn.length > 0
      ? `${truncatePath(churn[0].path, 48)} is the most-changed file — ${formatExact(churn[0].insertions + churn[0].deletions)} lines changed across ${formatExact(churn[0].commits)} commits.`
      : "Churn hotspots — no tracked churn yet.";

  const areaAria = `Area chart of commits per day. ${areaTakeaway}`;
  const donutAria = `Donut chart of files by type. ${typeTakeaway}`;
  const zoneAria = `Bar list of files per repository zone. ${zoneTakeaway}`;
  const churnAria = `Horizontal stacked bar chart of the ten most-changed files, insertions and deletions per file. ${churnTakeaway}`;

  const statusMessage = statsError
    ? `Failed to load statistics: ${statsError}`
    : stats === null
      ? "Loading repository statistics…"
      : `Loaded repository statistics (${formatExact(stats.totalFiles)} files) from ${statsSource === "git" ? "live git" : "the committed snapshot"}.`;

  const latestCommitDate = commits?.[0]?.date;
  const sparseDots =
    commitsOverTime.length > 0 && commitsOverTime.length <= 6
      ? { r: 3, fill: "hsl(var(--chart-1))", strokeWidth: 0 }
      : false;

  /* Churn axis geometry — narrow viewports get a shorter label gutter. */
  const churnAxisWidth = narrow ? 110 : 200;
  const churnTickChars = narrow ? 18 : 30;

  return (
    /* 12-column Overview grid (VIZ-013 §6.1) */
    <div className="grid grid-cols-12 gap-6">
      <header className="col-span-12 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight">
            Overview
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            The bx2o/rea repository in numbers, zones, and history.
          </p>
        </div>
        {statsSource && !statsError && (
          <Badge variant="secondary" className="gap-1.5">
            <span
              aria-hidden="true"
              className={cn(
                "size-1.5 rounded-full",
                statsSource === "git" ? "bg-primary" : "bg-muted-foreground"
              )}
            />
            {statsSource === "git" ? "Live git data" : "Snapshot data"}
          </Badge>
        )}
      </header>

      {/* Polite live region for async loads (VIZ-014 §8.7) */}
      <p className="sr-only col-span-12" aria-live="polite">
        {statusMessage}
      </p>

      {statsError ? (
        <div className="col-span-12">
          <ErrorCard message={statsError} onRetry={retry} />
        </div>
      ) : stats === null ? (
        <OverviewSkeleton />
      ) : (
        <>
          {/* Row 1 — globe hero (lg:col-span-8) + quick-stats stack (lg:col-span-4) */}
          <OverviewHero
            files={stats.totalFiles}
            commits={stats.totalCommits}
            byZone={stats.byZone}
            theme={theme}
          />

          <section
            aria-label="Repository totals"
            className="col-span-12 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 lg:col-span-4"
          >
            <StatCard
              label="Files"
              value={stats.totalFiles}
              icon={Files}
              hint="tracked files across six zones"
            />
            <StatCard
              label="Directories"
              value={stats.totalDirs}
              icon={Folder}
              hint="folders in the scanned tree"
            />
            <StatCard
              label="Commits"
              value={stats.totalCommits}
              icon={History}
              hint={latestCommitDate ? `latest ${formatDate(latestCommitDate)}` : "full git history"}
            />
            <StatCard
              label="Councils"
              value={COUNCIL_COUNT}
              icon={Users}
              hint="governance: SC and C01–C16"
            />
          </section>

          {/* Row 2 — commits over time (lg:col-span-7) + file-type mix (lg:col-span-5) */}
          <Card className="col-span-12 lg:col-span-7">
            <CardHeader>
              <CardTitle>Commits over time</CardTitle>
              <CardDescription>{areaTakeaway}</CardDescription>
            </CardHeader>
            <CardContent>
              {commits === null && commitsError === null ? (
                <Skeleton className="h-64 w-full" />
              ) : commitsError ? (
                <ChartErrorBlock message={commitsError} onRetry={retry} />
              ) : commitsOverTime.length === 0 ? (
                <EmptyBlock text="No commit history yet — run scripts/snapshot.mjs or connect live git to populate the timeline." />
              ) : (
                <>
                  <figure className="h-64" role="img" aria-label={areaAria}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={commitsOverTime} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
                        <defs>
                          <linearGradient id="commits-area-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--chart-1))" stopOpacity={0.32} />
                            <stop offset="100%" stopColor="hsl(var(--chart-1))" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis
                          dataKey="date"
                          minTickGap={16}
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                          tickFormatter={(value: string) =>
                            formatDate(value, { day: "numeric", month: "short" })
                          }
                        />
                        <YAxis
                          allowDecimals={false}
                          width={30}
                          tickLine={false}
                          axisLine={false}
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                          tickFormatter={(value: number) => formatCompact(value)}
                        />
                        <Tooltip
                          content={<CommitsTooltip />}
                          cursor={{ stroke: "hsl(var(--border))", strokeDasharray: "4 4" }}
                        />
                        <Area
                          dataKey="commits"
                          name="Commits"
                          stroke="hsl(var(--chart-1))"
                          strokeWidth={2}
                          fill="url(#commits-area-fill)"
                          isAnimationActive={!reducedMotion}
                          dot={sparseDots}
                          activeDot={{
                            r: 4,
                            fill: "hsl(var(--chart-1))",
                            stroke: "hsl(var(--card))",
                            strokeWidth: 2,
                          }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </figure>

                  <DataTable caption="Commits per day (UTC buckets)">
                    <TableHeader>
                      <TableRow>
                        <TableHead scope="col">Date</TableHead>
                        <TableHead scope="col" className="text-right">
                          Commits
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {commitsOverTime.map((point) => (
                        <TableRow key={point.date}>
                          <TableHead
                            scope="row"
                            className="h-auto whitespace-normal px-2 py-1.5 font-normal"
                          >
                            {formatDate(point.date, { dateStyle: "medium" })}
                          </TableHead>
                          <TableCell className="p-2 text-right tabular-nums">
                            {formatExact(point.commits)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </DataTable>
                </>
              )}
            </CardContent>
            {commitsSource && (
              <CardFooter className="justify-between text-xs text-muted-foreground">
                <span>
                  Data source: {commitsSource === "git" ? "live git" : "committed snapshot"}
                </span>
                <span className="tabular-nums">{formatExact(totalCommitsPlotted)} commits plotted</span>
              </CardFooter>
            )}
          </Card>

          <Card className="col-span-12 lg:col-span-5">
            <CardHeader>
              <CardTitle>File-type mix</CardTitle>
              <CardDescription>{typeTakeaway}</CardDescription>
            </CardHeader>
            <CardContent>
              {typeMix.length === 0 ? (
                <EmptyBlock text="No typed files tracked yet." />
              ) : (
                <>
                  <figure className="relative h-56" role="img" aria-label={donutAria}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Tooltip content={<TypeTooltip total={typeMixTotal} />} cursor={false} />
                        <Pie
                          data={typeMix}
                          dataKey="count"
                          nameKey="type"
                          innerRadius="62%"
                          outerRadius="90%"
                          paddingAngle={2}
                          stroke="hsl(var(--card))"
                          strokeWidth={2}
                          isAnimationActive={!reducedMotion}
                        >
                          {typeMix.map((point, index) => (
                            <Cell key={point.type} fill={typeSliceFill(index, point.type)} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-heading text-2xl font-semibold tabular-nums">
                        {formatStat(typeMixTotal)}
                      </span>
                      <span className="text-xs text-muted-foreground">files</span>
                    </div>
                  </figure>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {typeMix.map((point, index) => (
                      <li
                        key={point.type}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="size-2 rounded-full"
                          style={{ backgroundColor: typeSliceFill(index, point.type) }}
                        />
                        <span className="font-medium text-foreground">{typeLabel(point.type)}</span>
                        <span className="tabular-nums">{formatExact(point.count)}</span>
                        <span>{formatPct(point.count / typeMixTotal)}</span>
                      </li>
                    ))}
                  </ul>

                  <DataTable caption="Files by type">
                    <TableHeader>
                      <TableRow>
                        <TableHead scope="col">Type</TableHead>
                        <TableHead scope="col" className="text-right">
                          Files
                        </TableHead>
                        <TableHead scope="col" className="text-right">
                          Share
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {typeMix.map((point, index) => (
                        <TableRow key={point.type}>
                          <TableHead
                            scope="row"
                            className="h-auto whitespace-normal px-2 py-1.5 font-normal"
                          >
                            <span className="flex items-center gap-1.5">
                              <span
                                aria-hidden="true"
                                className="size-2 shrink-0 rounded-full"
                                style={{ backgroundColor: typeSliceFill(index, point.type) }}
                              />
                              {typeLabel(point.type)}
                            </span>
                          </TableHead>
                          <TableCell className="p-2 text-right tabular-nums">
                            {formatExact(point.count)}
                          </TableCell>
                          <TableCell className="p-2 text-right tabular-nums">
                            {formatPct(point.count / typeMixTotal)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </DataTable>
                </>
              )}
            </CardContent>
          </Card>

          {/* Row 3 — zone distribution (lg:col-span-5) + churn hotspots (lg:col-span-7) */}
          <Card className="col-span-12 lg:col-span-5">
            <CardHeader>
              <CardTitle>Zone distribution</CardTitle>
              <CardDescription>{zoneTakeaway}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              {zoneDist.length === 0 ? (
                <EmptyBlock text="No tracked files yet." />
              ) : (
                <>
                  <figure className="flex flex-col gap-5" role="img" aria-label={zoneAria}>
                    {/* Proportional overview strip (decorative; rows carry the data) */}
                    <div
                      aria-hidden="true"
                      className="flex h-2 w-full overflow-hidden rounded-full bg-secondary"
                    >
                      {zoneDist.map((point) => (
                        <div
                          key={point.zone}
                          className="h-full"
                          style={{
                            width: `${(point.files / totalZoneFiles) * 100}%`,
                            backgroundColor: zoneHue(point.zone, theme),
                          }}
                        />
                      ))}
                    </div>
                    {/* Zone legend in fixed ZONE_ORDER (VIZ-017 D2) */}
                    <ul aria-label="Files per zone" className="flex flex-col gap-3">
                      {zoneDist.map((point) => (
                        <li
                          key={point.zone}
                          className="grid grid-cols-[7rem_minmax(0,1fr)_auto] items-center gap-3"
                        >
                          <Badge zone={point.zone}>{ZONE_META[point.zone].label}</Badge>
                          <div className="h-2 min-w-0 overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${Math.max(point.files > 0 ? 2 : 0, (point.files / zoneMaxFiles) * 100)}%`,
                                backgroundColor: zoneHue(point.zone, theme),
                              }}
                            />
                          </div>
                          <span className="w-24 text-right text-xs tabular-nums text-muted-foreground">
                            <span className="font-medium text-foreground">
                              {formatExact(point.files)}
                            </span>{" "}
                            · {formatPct(point.files / totalZoneFiles)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </figure>

                  <DataTable caption="Files per repository zone">
                    <TableHeader>
                      <TableRow>
                        <TableHead scope="col">Zone</TableHead>
                        <TableHead scope="col" className="text-right">
                          Files
                        </TableHead>
                        <TableHead scope="col" className="text-right">
                          Share
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {zoneDist.map((point) => (
                        <TableRow key={point.zone}>
                          <TableHead
                            scope="row"
                            className="h-auto whitespace-normal px-2 py-1.5 font-normal"
                          >
                            <span className="flex items-center gap-1.5">
                              <span
                                aria-hidden="true"
                                className="size-2 shrink-0 rounded-full"
                                style={{ backgroundColor: zoneHue(point.zone, theme) }}
                              />
                              {ZONE_META[point.zone].label}
                            </span>
                          </TableHead>
                          <TableCell className="p-2 text-right tabular-nums">
                            {formatExact(point.files)}
                          </TableCell>
                          <TableCell className="p-2 text-right tabular-nums">
                            {formatPct(point.files / totalZoneFiles)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </DataTable>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="col-span-12 lg:col-span-7">
            <CardHeader>
              <CardTitle>Churn hotspots</CardTitle>
              <CardDescription>{churnTakeaway}</CardDescription>
            </CardHeader>
            <CardContent>
              {churn.length === 0 ? (
                <EmptyBlock text="No churn data tracked yet." />
              ) : (
                <>
                  <figure className="h-[22rem]" role="img" aria-label={churnAria}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={churn}
                        layout="vertical"
                        margin={{ top: 4, right: 16, bottom: 4, left: 8 }}
                      >
                        <CartesianGrid
                          horizontal={false}
                          strokeDasharray="3 3"
                          stroke="hsl(var(--border))"
                        />
                        <XAxis
                          type="number"
                          allowDecimals={false}
                          tickLine={false}
                          axisLine={false}
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                          tickFormatter={(value: number) => formatCompact(value)}
                        />
                        <YAxis
                          type="category"
                          dataKey="path"
                          width={churnAxisWidth}
                          tickLine={false}
                          axisLine={false}
                          tickMargin={10}
                          tick={<ChurnPathTick maxChars={churnTickChars} />}
                        />
                        <Tooltip
                          content={<ChurnTooltip />}
                          cursor={{ fill: "hsl(var(--muted) / 0.35)" }}
                        />
                        <Bar
                          dataKey="insertions"
                          name="Insertions"
                          stackId="churn"
                          fill="hsl(var(--chart-3))"
                          isAnimationActive={!reducedMotion}
                        />
                        <Bar
                          dataKey="deletions"
                          name="Deletions"
                          stackId="churn"
                          fill="hsl(var(--destructive))"
                          radius={[0, 4, 4, 0]}
                          isAnimationActive={!reducedMotion}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </figure>

                  <DataTable caption="Ten most-changed files by total churn">
                    <TableHeader>
                      <TableRow>
                        <TableHead scope="col">Path</TableHead>
                        <TableHead scope="col" className="text-right">
                          + Ins
                        </TableHead>
                        <TableHead scope="col" className="text-right">
                          − Del
                        </TableHead>
                        <TableHead scope="col" className="text-right">
                          Commits
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {churn.map((entry) => (
                        <TableRow key={entry.path}>
                          <TableHead
                            scope="row"
                            className="h-auto max-w-[16rem] whitespace-normal break-all px-2 py-1.5 font-mono text-xs font-normal"
                          >
                            {entry.path}
                          </TableHead>
                          <TableCell className="p-2 text-right tabular-nums text-chart-3">
                            +{formatExact(entry.insertions)}
                          </TableCell>
                          <TableCell className="p-2 text-right tabular-nums text-destructive">
                            −{formatExact(entry.deletions)}
                          </TableCell>
                          <TableCell className="p-2 text-right tabular-nums">
                            {formatExact(entry.commits)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </DataTable>
                </>
              )}
            </CardContent>
            {churn.length > 0 && (
              <CardFooter className="gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2 rounded-sm bg-chart-3" />+ insertions
                </span>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2 rounded-sm bg-destructive" />
                  − deletions
                </span>
                <span className="ml-auto">top 10 by total churn</span>
              </CardFooter>
            )}
          </Card>
        </>
      )}
    </div>
  );
}
