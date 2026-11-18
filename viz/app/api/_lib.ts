/**
 * Shared helpers for the viz API routes (VIZ-021 §10.3).
 *
 * Private module: the underscore prefix keeps it out of the route tree —
 * only `route.ts` files under `app/api/**` become handlers.
 *
 * Contains: committed-snapshot loading (public/snapshots/*.json), the
 * success/error response envelopes, traversal-proof path resolution with a
 * realpath containment re-check, and the single-spawn "last commit touching
 * a path" lookup shared by /api/file and /api/explain.
 */
import fs from "fs";
import { promises as fsp } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { gitCommits, REPO_ROOT, validateRepoPath } from "@/lib/git";
import { parseCommits } from "@/lib/repo-scan";
import type {
  ApiEnvelope,
  ChurnEntry,
  CommitRecord,
  FileNode,
  RepoStats,
  SnapshotMeta,
} from "@/lib/types";

/** Absolute snapshot directory (viz/public/snapshots, VIZ-022 §8.4). */
export const SNAPSHOTS_DIR = path.join(process.cwd(), "public", "snapshots");

/** Committed snapshot file shapes (meta block + payload). */
export type TreeFile = { meta?: SnapshotMeta; root: FileNode[] };
export type CommitsFile = { meta?: SnapshotMeta; commits: CommitRecord[] };
export type StatsFile = { meta?: SnapshotMeta } & RepoStats;

/** Read + parse a committed snapshot; null when absent or corrupt (VIZ-021 §12). */
export async function loadSnapshot<T>(file: string): Promise<T | null> {
  try {
    const text = await fsp.readFile(path.join(SNAPSHOTS_DIR, file), "utf-8");
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

/** stats.json without its meta block, or null when absent/corrupt. */
export async function loadStatsSnapshot(): Promise<RepoStats | null> {
  const parsed = await loadSnapshot<StatsFile>("stats.json");
  if (
    parsed === null ||
    typeof parsed.totalFiles !== "number" ||
    typeof parsed.totalCommits !== "number" ||
    !Array.isArray(parsed.churnTop)
  ) {
    return null;
  }
  const { meta: _meta, ...stats } = parsed;
  return stats;
}

/** Churn entry for one repo-relative path from the snapshot's churnTop. */
export async function churnForPath(rel: string): Promise<ChurnEntry | null> {
  const stats = await loadStatsSnapshot();
  if (stats === null) return null;
  return stats.churnTop.find((entry) => entry.path === rel) ?? null;
}

/** Success envelope ({source, data}) with s-maxage caching (VIZ-021 §12). */
export function ok<T>(source: "git" | "snapshot", data: T, sMaxAge: number): NextResponse {
  return NextResponse.json(
    { source, data } satisfies ApiEnvelope<T>,
    {
      headers: {
        "Cache-Control": `public, s-maxage=${sMaxAge}, stale-while-revalidate=${sMaxAge}`,
      },
    }
  );
}

/** Operator-safe error envelope: fixed message, no stack/absolute-path leakage. */
export function fail(status: number, message: string): NextResponse {
  return NextResponse.json(
    { error: message },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

/** Repo-relative posix form — responses never carry absolute paths. */
export function toRepoRelative(abs: string): string {
  return path.relative(REPO_ROOT, abs).split(path.sep).join("/");
}

export interface RepoPath {
  /** Absolute, resolve()-contained path. Server-side fs access only. */
  abs: string;
  /** Repo-relative posix path — the only form that appears in responses. */
  rel: string;
}

/**
 * Boundary path validation (VIZ-021 §15, fail-closed):
 * reject `..` segments, absolute paths, Windows drive patterns and NUL
 * bytes, then assert resolve() containment inside REPO_ROOT (via the
 * foundation's validateRepoPath). "" and "." mean the repo root.
 * Returns null when the request must be rejected with 422.
 */
export function resolveRepoPath(raw: string): RepoPath | null {
  const trimmed = raw.trim();
  if (trimmed === "" || trimmed === ".") return { abs: REPO_ROOT, rel: "" };
  const abs = validateRepoPath(trimmed);
  if (abs === null) return null;
  const rel = toRepoRelative(abs);
  if (rel.startsWith("..")) return null; // defense in depth
  return { abs, rel };
}

let cachedRealRoot: string | null | undefined;

function realRepoRoot(): string | null {
  if (cachedRealRoot === undefined) {
    try {
      cachedRealRoot = fs.realpathSync(REPO_ROOT);
    } catch {
      cachedRealRoot = null;
    }
  }
  return cachedRealRoot;
}

/**
 * Realpath containment re-check (VIZ-021 §15 — defeats symlink escapes that
 * survive a naive resolve() check). "ok" = resolves inside the repo;
 * "missing" = does not exist on disk; "escape" = resolves outside (→ 422).
 */
export function assertContainedRealpath(abs: string): "ok" | "missing" | "escape" {
  let real: string;
  try {
    real = fs.realpathSync(abs);
  } catch {
    return "missing";
  }
  const inside = (base: string): boolean =>
    real === base || real.startsWith(base + path.sep);
  if (inside(REPO_ROOT)) return "ok";
  const root = realRepoRoot();
  if (root !== null && inside(root)) return "ok";
  return "escape";
}

const NUMSTAT_LINE = /^(\d+|-)\s+(\d+|-)\s+(.+)$/;

function numstatTouches(numstatText: string, rel: string): boolean {
  for (const line of numstatText.split("\n")) {
    const m = line.trim().match(NUMSTAT_LINE);
    if (m !== null && m[3].trim() === rel) return true;
  }
  return false;
}

/**
 * Newest commit whose numstat touches `rel`. One `gitCommits()` spawn covers
 * the whole history (no N+1 per-commit diffs, VIZ-021 §5). git log emits the
 * pretty header (ending in \x1e) BEFORE its numstat lines, so each chunk's
 * leading text belongs to the previous commit (same pairing as
 * scripts/snapshot.mjs). git log is newest-first, so the first match wins.
 * Throws when git is unavailable; null when no commit touches the path.
 */
export async function lastCommitForPath(rel: string): Promise<CommitRecord | null> {
  const raw = await gitCommits(undefined, 2000);
  const records = parseCommits(raw);
  if (records.length === 0) return null;
  let match: string | null = null;
  let pending: string | null = null;
  for (const chunk of raw.split("\x1e")) {
    if (chunk.trim() === "") continue;
    const fields = chunk.split("\x1f").filter((part) => part !== "");
    if (fields.length >= 4) {
      const leading = fields.slice(0, -4).join("\n");
      if (pending !== null && match === null && numstatTouches(leading, rel)) {
        match = pending;
      }
      pending = fields[fields.length - 4];
    } else if (
      pending !== null &&
      match === null &&
      numstatTouches(fields.join("\n"), rel)
    ) {
      match = pending;
    }
  }
  if (match === null) return null;
  const matchedSha: string = match;
  return records.find((c) => c.sha === matchedSha) ?? null;
}
