"use client";

/**
 * ExplainPanel — UI for the deterministic `/api/explain` endpoint (FC-02).
 *
 * The route (VIZ-025) was implemented and working but had no caller, so the
 * whole VIZ-025 contract was dead code. This panel is the missing caller:
 * it POSTs `{ path }` to `/api/explain` and renders the returned
 * `ExplainSummary` (summary, zone badge, type/size/lines, headings, symbols,
 * TODO count, council attribution, churn and related files).
 *
 * Mountable anywhere (the coordinator wires it into the file-viewer header):
 *   <ExplainPanel path={selectedPath} onClose={() => setOpen(false)} />
 *
 * A convenience launcher is exported from the same module so one import
 * yields both:
 *   import { ExplainButton } from "@/components/explain/explain-panel";
 *
 * Accessibility (VIZ-014 §8.5–§8.8):
 * - the panel is a labelled `region` landmark (`role="region"` + `aria-label`);
 * - a polite live region announces "Explaining <path>" and the outcome;
 * - focus moves to the panel heading when it opens;
 * - focus returns to the element that was focused before the panel mounted
 *   (the launcher button, or the surrounding UI when mounted standalone).
 */

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AlertTriangle,
  Braces,
  FileText,
  FolderTree,
  GitCommitVertical,
  Hash,
  ListTree,
  Sparkles,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ZONE_META, type Zone } from "@/lib/brand";
import { cn, formatBytes, formatDate } from "@/lib/utils";
import type { ChurnEntry, CommitRecord, ExplainSummary, NodeType } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Props                                                               */
/* ------------------------------------------------------------------ */

export interface ExplainPanelProps {
  /** Repository-relative path to explain (e.g. "README.md"). */
  path: string;
  /** Extra classes for the panel container. */
  className?: string;
  /**
   * Called when the user dismisses the panel. When omitted the panel has no
   * close affordance — the host decides when to unmount it.
   */
  onClose?: () => void;
}

export interface ExplainButtonProps {
  /** Repository-relative path to explain. */
  path: string;
  /** Button label (accessible name). */
  label?: string;
  /** Extra classes for the wrapper. */
  className?: string;
}

/* ------------------------------------------------------------------ */
/* Response parsing (defensive — the envelope is typed, the wire is not) */
/* ------------------------------------------------------------------ */

const ZONES: readonly Zone[] = [
  "docs",
  "prompts",
  "execution",
  "stremiium",
  "rea",
  "other",
];

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function asNumber(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string");
}

function asCommit(value: unknown): CommitRecord | null {
  if (typeof value !== "object" || value === null) return null;
  const rec = value as Record<string, unknown>;
  if (typeof rec.sha !== "string") return null;
  return {
    sha: rec.sha,
    date: asString(rec.date),
    author: asString(rec.author),
    message: asString(rec.message),
    filesChanged: asNumber(rec.filesChanged),
    insertions: asNumber(rec.insertions),
    deletions: asNumber(rec.deletions),
  };
}

function asChurn(value: unknown): ChurnEntry | null {
  if (typeof value !== "object" || value === null) return null;
  const rec = value as Record<string, unknown>;
  if (typeof rec.path !== "string") return null;
  return {
    path: rec.path,
    insertions: asNumber(rec.insertions),
    deletions: asNumber(rec.deletions),
    commits: asNumber(rec.commits),
  };
}

/**
 * Parse the `/api/explain` envelope.
 * Success → { source, data: ExplainSummary }; failure → { error: string }.
 */
function parseExplainResponse(
  payload: unknown,
): { data: ExplainSummary | null; error: string | null } {
  if (typeof payload !== "object" || payload === null) {
    return { data: null, error: "Malformed response from /api/explain." };
  }
  const root = payload as Record<string, unknown>;
  if (typeof root.error === "string") {
    return { data: null, error: root.error };
  }
  const body = root.data;
  if (typeof body !== "object" || body === null) {
    return { data: null, error: "Malformed response from /api/explain." };
  }
  const rec = body as Record<string, unknown>;
  if (typeof rec.path !== "string" || rec.path === "") {
    return { data: null, error: "Malformed response from /api/explain." };
  }
  const zone = ZONES.includes(rec.zone as Zone) ? (rec.zone as Zone) : "other";
  const type: NodeType = rec.type === "dir" ? "dir" : "file";
  return {
    data: {
      path: rec.path,
      zone,
      type,
      size: asNumber(rec.size),
      lines: asNumber(rec.lines),
      headings: asStringArray(rec.headings),
      symbols: asStringArray(rec.symbols),
      todos: asNumber(rec.todos),
      lastCommit: asCommit(rec.lastCommit),
      churn: asChurn(rec.churn),
      council: typeof rec.council === "string" ? rec.council : null,
      relatedFiles: asStringArray(rec.relatedFiles),
      summary: asString(rec.summary),
      confidence: "deterministic",
    },
    error: null,
  };
}

/* ------------------------------------------------------------------ */
/* Panel                                                               */
/* ------------------------------------------------------------------ */

export function ExplainPanel({ path, className, onClose }: ExplainPanelProps) {
  const [data, setData] = useState<ExplainSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [announcement, setAnnouncement] = useState(`Explaining ${path}`);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const panelId = useId();

  /* --- capture the pre-open focus target so focus can return on close --- */
  useEffect(() => {
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    // Focus the panel heading (VIZ-014 §8.5).
    headingRef.current?.focus();
    return () => {
      const target = returnFocusRef.current;
      if (target && document.body.contains(target)) {
        try {
          target.focus();
        } catch {
          /* focus is best-effort */
        }
      }
    };
  }, []);

  /* --- fetch the explanation ------------------------------------------- */
  useEffect(() => {
    if (typeof path !== "string" || path.trim() === "") {
      setLoading(false);
      setData(null);
      setError("No file path was provided.");
      setAnnouncement("No file path was provided.");
      return;
    }
    const controller = new AbortController();
    let alive = true;
    setLoading(true);
    setError(null);
    setData(null);
    setAnnouncement(`Explaining ${path}`);

    fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
      signal: controller.signal,
    })
      .then(async (res) => {
        let payload: unknown = null;
        try {
          payload = await res.json();
        } catch {
          payload = null;
        }
        if (!alive) return;
        if (!res.ok) {
          const parsed = parseExplainResponse(payload);
          const message = parsed.error ?? `Request failed with status ${res.status}.`;
          setError(message);
          setData(null);
          setAnnouncement(`Failed to explain ${path}: ${message}`);
          return;
        }
        const parsed = parseExplainResponse(payload);
        if (parsed.error !== null || parsed.data === null) {
          const message = parsed.error ?? "Malformed response from /api/explain.";
          setError(message);
          setData(null);
          setAnnouncement(`Failed to explain ${path}: ${message}`);
          return;
        }
        setData(parsed.data);
        setError(null);
        setAnnouncement(`Explained ${parsed.data.path}: ${parsed.data.summary}`);
      })
      .catch((err: unknown) => {
        if (!alive) return;
        if (err instanceof DOMException && err.name === "AbortError") return;
        const message = err instanceof Error ? err.message : "Failed to reach /api/explain.";
        setError(message);
        setData(null);
        setAnnouncement(`Failed to explain ${path}: ${message}`);
      });

    return () => {
      alive = false;
      controller.abort();
    };
  }, [path]);

  return (
    <section
      id={panelId}
      role="region"
      aria-label={`Explanation of ${path}`}
      aria-busy={loading}
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {/* Polite announcements (VIZ-014 §8.7). */}
      <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <header className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Explain
          </p>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mt-1 truncate font-heading text-base font-semibold text-foreground focus:outline-none"
          >
            {data?.path ?? path}
          </h2>
        </div>
        {onClose ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close explanation"
            className="shrink-0"
          >
            <X aria-hidden="true" />
          </Button>
        ) : null}
      </header>

      <div className="px-4 py-4">
        {loading ? <ExplainSkeleton /> : null}

        {!loading && error !== null ? (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/5 p-3"
          >
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                Could not explain this file
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        ) : null}

        {!loading && error === null && data === null ? (
          <p className="text-sm text-muted-foreground">
            No explanation is available for this path.
          </p>
        ) : null}

        {!loading && error === null && data !== null ? (
          <ExplainBody data={data} />
        ) : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Body                                                                */
/* ------------------------------------------------------------------ */

function ExplainBody({ data }: { data: ExplainSummary }) {
  const zoneLabel = ZONE_META[data.zone]?.label ?? data.zone;
  const isEmpty =
    data.summary === "" &&
    data.headings.length === 0 &&
    data.symbols.length === 0 &&
    data.relatedFiles.length === 0 &&
    data.todos === 0 &&
    data.council === null &&
    data.churn === null;

  return (
    <div className="space-y-4">
      {isEmpty ? (
        <p className="text-sm text-muted-foreground">
          No details could be extracted for this file.
        </p>
      ) : null}

      {data.summary ? (
        <p className="text-sm leading-relaxed text-foreground">{data.summary}</p>
      ) : null}

      {/* Metadata row — zone badge, type, size, lines, TODO count. */}
      <dl className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Zone</dt>
          <dd>
            <Badge zone={data.zone} variant="outline">
              {zoneLabel}
            </Badge>
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
          <dt className="sr-only">Type</dt>
          <dd>{data.type === "dir" ? "Directory" : "File"}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Hash className="h-3.5 w-3.5" aria-hidden="true" />
          <dt className="sr-only">Size</dt>
          <dd>{formatBytes(data.size)}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <ListTree className="h-3.5 w-3.5" aria-hidden="true" />
          <dt className="sr-only">Lines</dt>
          <dd>
            {data.lines} {data.lines === 1 ? "line" : "lines"}
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Braces className="h-3.5 w-3.5" aria-hidden="true" />
          <dt className="sr-only">TODO markers</dt>
          <dd>
            {data.todos} TODO {data.todos === 1 ? "marker" : "markers"}
          </dd>
        </div>
      </dl>

      {data.council ? (
        <p className="text-xs text-muted-foreground">
          Council attribution:{" "}
          <span className="font-medium text-foreground">{data.council}</span>
        </p>
      ) : null}

      {data.churn ? (
        <div className="rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <GitCommitVertical className="h-3.5 w-3.5" aria-hidden="true" />
            Churn
          </span>
          <span className="ml-2">
            +{data.churn.insertions} insertions · −{data.churn.deletions} deletions ·{" "}
            {data.churn.commits} {data.churn.commits === 1 ? "commit" : "commits"}
          </span>
        </div>
      ) : null}

      {data.headings.length > 0 ? (
        <section aria-labelledby={`${data.path}-headings`}>
          <h3
            id={`${data.path}-headings`}
            className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            Headings
          </h3>
          <ul className="mt-1.5 space-y-1 text-sm text-foreground">
            {data.headings.map((heading, index) => (
              <li key={`${heading}-${index}`} className="flex gap-2">
                <span aria-hidden="true" className="select-none text-muted-foreground">
                  ·
                </span>
                <span>{heading}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {data.symbols.length > 0 ? (
        <section aria-labelledby={`${data.path}-symbols`}>
          <h3
            id={`${data.path}-symbols`}
            className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            Symbols
          </h3>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {data.symbols.map((symbol, index) => (
              <li key={`${symbol}-${index}`}>
                <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  {symbol}
                </code>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {data.relatedFiles.length > 0 ? (
        <section aria-labelledby={`${data.path}-related`}>
          <h3
            id={`${data.path}-related`}
            className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            Related files
          </h3>
          <ul className="mt-1.5 space-y-1 text-sm">
            {data.relatedFiles.map((related) => (
              <li key={related}>
                <Link
                  href={`/explorer?path=${encodeURIComponent(related)}`}
                  className="inline-flex items-center gap-1.5 rounded text-foreground underline decoration-border underline-offset-2 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <FolderTree className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  {related}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {data.lastCommit ? (
        <p className="text-xs text-muted-foreground">
          Last commit:{" "}
          <span className="font-mono text-foreground">
            {data.lastCommit.sha.slice(0, 7)}
          </span>{" "}
          {data.lastCommit.date ? `· ${formatDate(data.lastCommit.date)}` : ""}
        </p>
      ) : null}
    </div>
  );
}

function ExplainSkeleton() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <div className="flex gap-2 pt-1">
        <Skeleton className="h-5 w-20 rounded-md" />
        <Skeleton className="h-5 w-16 rounded-md" />
        <Skeleton className="h-5 w-24 rounded-md" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Launcher                                                            */
/* ------------------------------------------------------------------ */

/**
 * ExplainButton — a self-contained launcher that renders the panel inline.
 * Importing this one symbol gives the coordinator both the trigger and the
 * panel; the panel stays mountable on its own for a custom header layout.
 */
export function ExplainButton({
  path,
  label = "Explain this file",
  className,
}: ExplainButtonProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex h-9 w-fit items-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
      {open ? (
        <div id={panelId}>
          <ExplainPanel path={path} onClose={() => setOpen(false)} />
        </div>
      ) : null}
    </div>
  );
}

export default ExplainPanel;
