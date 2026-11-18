/**
 * Client data layer for the /commits view (VIZ-020 §5 view 3).
 *
 * Owns the boundary between the timeline UI and the VIZ-021 API:
 *   - GET /api/commits      → { source, data: CommitRecord[] }
 *     (fallback: /snapshots/commits.json → { meta, commits })
 *   - GET /api/diff/<sha>   → { source, data: DiffSummary }
 *
 * Contracts are typed against lib/types.ts (VIZ-022) — never redefined here.
 * Every payload is sanitized at the boundary so malformed data fails closed
 * to error states instead of crashing the view (VIZ-020 §10).
 */
import type { CommitRecord, DiffFile, DiffSummary } from "@/lib/types";

export type CommitsSource = "git" | "snapshot";

export interface CommitsPayload {
  commits: CommitRecord[];
  source: CommitsSource;
}

type Json = Record<string, unknown>;

function isJson(value: unknown): value is Json {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Clamp to a non-negative integer ("-" numstat rows arrive as 0). */
function toCount(value: unknown): number {
  const n =
    typeof value === "number" ? value : Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

function sanitizeCommit(raw: unknown): CommitRecord | null {
  if (!isJson(raw)) return null;
  const sha = typeof raw.sha === "string" ? raw.sha : "";
  const date = typeof raw.date === "string" ? raw.date : "";
  if (sha === "" || date === "") return null;
  return {
    sha,
    date,
    author:
      typeof raw.author === "string" && raw.author !== ""
        ? raw.author
        : "unknown",
    message: typeof raw.message === "string" ? raw.message : "",
    filesChanged: toCount(raw.filesChanged),
    insertions: toCount(raw.insertions),
    deletions: toCount(raw.deletions),
  };
}

function sanitizeDiffFile(raw: unknown): DiffFile | null {
  if (!isJson(raw)) return null;
  const path = typeof raw.path === "string" ? raw.path : "";
  if (path === "") return null;
  return {
    path,
    insertions: toCount(raw.insertions),
    deletions: toCount(raw.deletions),
    binary: raw.binary === true,
  };
}

/**
 * Accepts the API envelope ({ source, data: DiffSummary }) and a flattened
 * variant ({ source, sha, files }) so the view keeps working if the route
 * shape drifts; returns null when no file list is present.
 */
function sanitizeDiff(raw: unknown, sha: string): DiffSummary | null {
  if (!isJson(raw)) return null;
  const inner = isJson(raw.data) ? raw.data : raw;
  const rawFiles = Array.isArray(inner.files) ? inner.files : [];
  const files: DiffFile[] = [];
  for (const file of rawFiles) {
    const parsed = sanitizeDiffFile(file);
    if (parsed !== null) files.push(parsed);
  }
  if (rawFiles.length > 0 && files.length === 0) return null;
  const resolvedSha =
    typeof inner.sha === "string" && inner.sha !== "" ? inner.sha : sha;
  if (files.length === 0 && resolvedSha === "") return null;
  return { sha: resolvedSha, files };
}

async function getJson(url: string): Promise<unknown> {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  try {
    return await res.json();
  } catch {
    throw new Error("Malformed JSON response");
  }
}

/** Extract CommitRecord[] from either envelope shape ({data} or {commits}). */
function parseCommitsList(payload: unknown): CommitRecord[] | null {
  if (!isJson(payload)) return null;
  const rawList = Array.isArray(payload.data)
    ? payload.data
    : Array.isArray(payload.commits)
      ? payload.commits
      : null;
  if (rawList === null) return null;
  const commits: CommitRecord[] = [];
  for (const raw of rawList) {
    const parsed = sanitizeCommit(raw);
    if (parsed !== null) commits.push(parsed);
  }
  return commits;
}

function sourceOf(payload: unknown, fallback: CommitsSource): CommitsSource {
  return isJson(payload) && payload.source === "snapshot"
    ? "snapshot"
    : fallback;
}

/** Newest first (deterministic tie-break on sha). */
export function sortNewestFirst(commits: CommitRecord[]): CommitRecord[] {
  return [...commits].sort(
    (a, b) =>
      (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0) ||
      a.sha.localeCompare(b.sha)
  );
}

/**
 * Commit history, newest first. Live API first, committed snapshot as the
 * offline fallback (VIZ-020 manual-scaffold mode serves from snapshots).
 */
export async function fetchCommits(): Promise<CommitsPayload> {
  try {
    const payload = await getJson("/api/commits");
    const commits = parseCommitsList(payload);
    if (commits !== null) {
      return {
        commits: sortNewestFirst(commits),
        source: sourceOf(payload, "git"),
      };
    }
  } catch {
    // fall through to the committed snapshot
  }
  const snapPayload = await getJson("/snapshots/commits.json");
  const snapshotCommits = parseCommitsList(snapPayload);
  if (snapshotCommits === null) {
    throw new Error("Commit history unavailable");
  }
  return {
    commits: sortNewestFirst(snapshotCommits),
    source: "snapshot",
  };
}

const diffCache = new Map<string, Promise<DiffSummary>>();

/**
 * DiffSummary for one commit (GET /api/diff/<sha>). History is immutable so
 * results are cached per sha (also lets the ?path= filter and the expand
 * cards share one request). Failed requests are evicted so Retry re-fetches.
 *
 * There is no per-sha snapshot fallback: `public/snapshots/diffs/` is never
 * generated, so that branch always 404'd (FC-14).
 */
export function fetchCommitDiff(sha: string): Promise<DiffSummary> {
  const cached = diffCache.get(sha);
  if (cached !== undefined) return cached;
  const request = (async () => {
    let payload: unknown;
    try {
      payload = await getJson(`/api/diff/${encodeURIComponent(sha)}`);
    } catch {
      throw new Error("Diff unavailable");
    }
    const diff = sanitizeDiff(payload, sha);
    if (diff === null) throw new Error("Diff unavailable");
    return diff;
  })();
  diffCache.set(sha, request);
  void request.catch(() => {
    diffCache.delete(sha);
  });
  return request;
}

/** Normalize a ?path= filter value: trimmed, no surrounding slashes. */
export function normalizeFilterPath(value: string): string {
  return value.trim().replace(/^\/+/, "").replace(/\/+$/, "");
}

/**
 * Does a changed file fall under the filter path? Matches the file itself
 * and everything inside its subtree (git `log -- <path>` semantics).
 */
export function fileMatchesPath(filePath: string, filterPath: string): boolean {
  const filter = normalizeFilterPath(filterPath);
  if (filter === "") return true;
  return filePath === filter || filePath.startsWith(`${filter}/`);
}

/** Map async work over items with bounded concurrency (no request stampede). */
export async function mapWithLimit<T, R>(
  items: T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>
): Promise<PromiseSettledResult<R>[]> {
  const results = new Array<PromiseSettledResult<R>>(items.length);
  let cursor = 0;
  const runners = Array.from(
    { length: Math.max(1, Math.min(limit, items.length)) },
    async () => {
      for (;;) {
        const index = cursor;
        cursor += 1;
        if (index >= items.length) return;
        try {
          results[index] = {
            status: "fulfilled",
            value: await worker(items[index], index),
          };
        } catch (reason) {
          results[index] = { status: "rejected", reason };
        }
      }
    }
  );
  await Promise.all(runners);
  return results;
}
