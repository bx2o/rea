"use client";

/**
 * /commits — commit history timeline (VIZ-020 §5 view 3).
 *
 * Data: GET /api/commits (newest first) with an offline fallback to the
 * committed snapshot; the active source is badged "Live git" / "Snapshot".
 * ?path= deep-links (e.g. from the Explorer file viewer's history link)
 * filter the timeline client-side by checking each commit's numstat file
 * list (GET /api/diff/<sha>, cached) against the filter path.
 *
 * A11y (VIZ-014 §8.7): a polite status region exists in the initial HTML
 * and announces loading / loaded / filtering / error transitions; errors
 * are also visible with a Retry action. The page is wrapped in <Suspense>
 * so useSearchParams() stays prerender-safe.
 */
import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AlertCircle,
  FileMinus,
  FilePlus,
  GitCommit,
  RotateCw,
  Search,
  X,
} from "lucide-react";
import type { CommitRecord } from "@/lib/types";
import { cn, formatCompact, formatExact } from "@/lib/utils";
import { CommitTimeline } from "@/components/timeline/commit-timeline";
import { TimelineSkeleton } from "@/components/timeline/timeline-skeleton";
import {
  fetchCommitDiff,
  fetchCommits,
  fileMatchesPath,
  mapWithLimit,
  normalizeFilterPath,
  type CommitsSource,
} from "@/components/timeline/diff-store";

type LoadStatus = "loading" | "loaded" | "error";
type FilterStatus = "idle" | "filtering" | "filtered" | "unavailable";

const FILTER_DEBOUNCE_MS = 300;
/** Max concurrent /api/diff requests while evaluating a path filter. */
const FILTER_CONCURRENCY = 8;

export default function CommitsPage() {
  return (
    <Suspense fallback={<TimelineSkeleton cards={5} />}>
      <CommitsView />
    </Suspense>
  );
}

function CommitsView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ---- commit history ------------------------------------------------------
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [commits, setCommits] = useState<CommitRecord[]>([]);
  const [source, setSource] = useState<CommitsSource | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetchCommits()
      .then((payload) => {
        if (cancelled) return;
        setCommits(payload.commits);
        setSource(payload.source);
        setStatus("loaded");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [retryKey]);

  // ---- ?path= filter (URL-synced, shareable deep link) ---------------------
  const pathParam = normalizeFilterPath(searchParams.get("path") ?? "");
  const [input, setInput] = useState(pathParam);

  // External ?path= changes (e.g. explorer history links) re-sync the field.
  useEffect(() => {
    setInput(pathParam);
  }, [pathParam]);

  // Debounced push of the filter into the URL.
  useEffect(() => {
    const normalized = normalizeFilterPath(input);
    if (normalized === pathParam) return;
    const timer = window.setTimeout(
      () =>
        router.replace(
          normalized === ""
            ? "/commits"
            : `/commits?path=${encodeURIComponent(normalized)}`,
          { scroll: false }
        ),
      FILTER_DEBOUNCE_MS
    );
    return () => window.clearTimeout(timer);
  }, [input, pathParam, router]);

  // ---- filter evaluation (client-side numstat check per commit) ------------
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("idle");
  const [filtered, setFiltered] = useState<CommitRecord[]>([]);
  const [filterFailures, setFilterFailures] = useState(0);

  useEffect(() => {
    if (status !== "loaded" || pathParam === "") {
      setFilterStatus("idle");
      return;
    }
    let cancelled = false;
    setFilterStatus("filtering");
    mapWithLimit(commits, FILTER_CONCURRENCY, (commit) =>
      fetchCommitDiff(commit.sha)
    ).then((results) => {
      if (cancelled) return;
      const matched: CommitRecord[] = [];
      let failures = 0;
      for (let index = 0; index < commits.length; index += 1) {
        const result = results[index];
        if (result.status === "rejected") {
          failures += 1;
          continue;
        }
        if (
          result.value.files.some((file) =>
            fileMatchesPath(file.path, pathParam)
          )
        ) {
          matched.push(commits[index]);
        }
      }
      setFilterFailures(failures);
      setFiltered(matched);
      // Every diff failed (snapshot-only mode without per-sha diffs):
      // the filter cannot be evaluated — show all commits, with a notice.
      setFilterStatus(
        commits.length > 0 && failures >= commits.length
          ? "unavailable"
          : "filtered"
      );
    });
    return () => {
      cancelled = true;
    };
  }, [status, pathParam, commits, retryKey]);

  // ---- derived view state ---------------------------------------------------
  const pending =
    pathParam !== "" && (filterStatus === "idle" || filterStatus === "filtering");
  const visible =
    pathParam === "" || filterStatus === "unavailable"
      ? commits
      : pending
        ? commits
        : filtered;
  const statsSource = pending ? commits : visible;
  const stats = useMemo(() => {
    const insertions = statsSource.reduce((sum, c) => sum + c.insertions, 0);
    const deletions = statsSource.reduce((sum, c) => sum + c.deletions, 0);
    return { count: statsSource.length, insertions, deletions };
  }, [statsSource]);

  const announcement =
    status === "loading"
      ? "Loading commits…"
      : status === "error"
        ? "Failed to load commits."
        : pathParam === ""
          ? `Commits loaded: ${formatExact(commits.length)} commits${
              source === "snapshot" ? " (offline snapshot)" : ""
            }.`
          : pending
            ? `Filtering commits by path ${pathParam}…`
            : filterStatus === "unavailable"
              ? "Path filter unavailable — diff data could not be loaded. Showing all commits."
              : `${formatExact(visible.length)} commits touch ${pathParam}.`;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:px-6">
      {/* Screen-reader status region — present in initial HTML (VIZ-014 §8.7). */}
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Commits
          </h1>
          <p className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {status === "loaded" ? (
              <>
                <span>
                  {formatExact(stats.count)}{" "}
                  {stats.count === 1 ? "commit" : "commits"}
                  {pathParam !== "" && !pending && filterStatus === "filtered"
                    ? ` touching ${pathParam}`
                    : ""}
                </span>
                {source !== null && (
                  <span
                    title={
                      source === "snapshot"
                        ? "Offline snapshot data — regenerate via scripts/snapshot.mjs"
                        : "Live git data"
                    }
                    className={cn(
                      "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                      source === "snapshot"
                        ? "border-amber-600/40 text-amber-700 dark:border-amber-400/40 dark:text-amber-400"
                        : "border-primary/40 text-primary"
                    )}
                  >
                    {source === "snapshot" ? "Snapshot" : "Live git"}
                  </span>
                )}
              </>
            ) : (
              <span>Repository history</span>
            )}
          </p>
        </div>
        <form
          role="search"
          aria-label="Filter commits by path"
          className="w-full sm:w-72"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="commits-path-filter" className="sr-only">
            Filter commits by file path
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id="commits-path-filter"
              type="search"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Filter by path, e.g. docs/engineering"
              aria-describedby="commits-path-filter-hint"
              autoComplete="off"
              className="h-9 w-full rounded-md border border-input bg-card pl-8 pr-8 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            {input !== "" && (
              <button
                type="button"
                onClick={() => setInput("")}
                aria-label="Clear path filter"
                className="absolute right-1 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            )}
          </div>
          <p id="commits-path-filter-hint" className="sr-only">
            Shows only commits whose changes touch this file or folder.
          </p>
        </form>
      </header>

      <section aria-label="Commit totals">
        <dl className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="glass rounded-lg p-3">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <GitCommit aria-hidden="true" className="size-3.5" />
              Commits
            </dt>
            <dd
              title={formatExact(stats.count)}
              className="mt-1 font-heading text-lg font-semibold tabular-nums text-foreground"
            >
              {formatCompact(stats.count)}
            </dd>
          </div>
          <div className="glass rounded-lg p-3">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <FilePlus aria-hidden="true" className="size-3.5" />
              Insertions
            </dt>
            <dd
              title={formatExact(stats.insertions)}
              className="mt-1 font-heading text-lg font-semibold tabular-nums text-green-600 dark:text-green-400"
            >
              +{formatCompact(stats.insertions)}
            </dd>
          </div>
          <div className="glass rounded-lg p-3">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <FileMinus aria-hidden="true" className="size-3.5" />
              Deletions
            </dt>
            <dd
              title={formatExact(stats.deletions)}
              className="mt-1 font-heading text-lg font-semibold tabular-nums text-red-600 dark:text-red-400"
            >
              -{formatCompact(stats.deletions)}
            </dd>
          </div>
        </dl>
      </section>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-border border-l-4 border-l-red-600 bg-card p-4 shadow-sm dark:border-l-red-400"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-sm text-foreground">
              <AlertCircle
                aria-hidden="true"
                className="size-4 text-red-600 dark:text-red-400"
              />
              Failed to load commits.
            </p>
            <button
              type="button"
              onClick={() => setRetryKey((key) => key + 1)}
              className="inline-flex items-center gap-1.5 rounded-md border border-input bg-card px-2.5 py-1 text-xs font-medium hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <RotateCw aria-hidden="true" className="size-3.5" />
              Retry
            </button>
          </div>
        </div>
      )}

      {filterStatus === "unavailable" && (
        <p
          role="status"
          className="rounded-lg border border-amber-600/40 bg-amber-600/5 px-3 py-2 text-xs text-amber-700 dark:border-amber-400/40 dark:text-amber-400"
        >
          Path filter needs per-commit diff data, which is unavailable —
          showing all {formatExact(commits.length)} commits.
        </p>
      )}
      {filterStatus === "filtered" && filterFailures > 0 && (
        <p
          role="status"
          className="rounded-lg border border-amber-600/40 bg-amber-600/5 px-3 py-2 text-xs text-amber-700 dark:border-amber-400/40 dark:text-amber-400"
        >
          {formatExact(filterFailures)} commit{" "}
          {filterFailures === 1 ? "diff was" : "diffs were"} unavailable —
          results may be incomplete.
        </p>
      )}

      {status === "loading" && <TimelineSkeleton cards={5} />}

      {status === "loaded" && pending && (
        <p
          role="status"
          className="flex items-center gap-2 text-xs text-muted-foreground"
        >
          <RotateCw aria-hidden="true" className="size-3.5 animate-spin" />
          Filtering commits by path…
        </p>
      )}

      {status === "loaded" && !pending && visible.length === 0 && (
        <div className="glass rounded-xl p-8 text-center">
          <GitCommit
            aria-hidden="true"
            className="mx-auto size-8 text-muted-foreground"
          />
          {pathParam !== "" && commits.length > 0 ? (
            <>
              <p className="mt-2 text-sm font-medium text-foreground">
                No commits touch this path
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {pathParam}
              </p>
              <button
                type="button"
                onClick={() => setInput("")}
                className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-input bg-card px-2.5 py-1 text-xs font-medium hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X aria-hidden="true" className="size-3.5" />
                Clear filter
              </button>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm font-medium text-foreground">
                No commit history
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                This snapshot was generated without git history. Regenerate
                with scripts/snapshot.mjs.
              </p>
            </>
          )}
        </div>
      )}

      {status === "loaded" && visible.length > 0 && (
        <CommitTimeline commits={visible} />
      )}
    </div>
  );
}
