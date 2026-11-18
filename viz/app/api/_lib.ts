/**
 * Shared helpers for the viz API routes (VIZ-021 §10.3).
 *
 * Private module: the underscore prefix keeps it out of the route tree —
 * only `route.ts` files under `app/api/**` become handlers.
 *
 * Contains: committed-snapshot loading (public/snapshots/*.json), the
 * success/error response envelopes, traversal-proof path resolution with a
 * realpath containment re-check, the path deny-list (SEC-03 / SEC-15),
 * an in-process rate limiter (SEC-02) and the short-TTL caches that keep
 * the API off the DoS cliff (SEC-05).
 */
import fs from "fs";
import { promises as fsp } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { gitCommits, REPO_ROOT, validateRepoPath } from "@/lib/git";
import { parseCommits, readDirLevel } from "@/lib/repo-scan";
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

/* ------------------------------------------------------------------ *
 * Caches (SEC-05 — DoS)
 * ------------------------------------------------------------------ */

/** Parsed-snapshot TTL. tree.json is 2.4 MB; re-parsing it per request cost ~80 ms. */
const SNAPSHOT_TTL_MS = 60_000;
/** `git log` TTL. One `git log --numstat -n 2000` spawn cost 10.8–12.7 s. */
const GIT_TTL_MS = 60_000;
/** Directory-level TTL. The root level walks + stats the whole repository. */
const DIR_TTL_MS = 30_000;
/** Hard ceiling on the number of commits fetched from git (SEC-05 — DoS). */
export const MAX_HISTORY = 500;

interface CacheEntry<T> {
  value: T;
  at: number;
}

const snapshotCache = new Map<string, CacheEntry<unknown>>();
const gitCache = new Map<string, CacheEntry<string>>();
const parsedCommitsCache = new Map<string, CacheEntry<CommitRecord[]>>();
const dirLevelCache = new Map<string, CacheEntry<FileNode[]>>();

/** Drop expired entries so the caches cannot grow without bound. */
function prune<T>(cache: Map<string, CacheEntry<T>>, now: number, ttl: number): void {
  if (cache.size < 64) return;
  for (const [key, entry] of cache) {
    if (now - entry.at >= ttl) cache.delete(key);
  }
}

/**
 * Read + parse a committed snapshot; null when absent or corrupt (VIZ-021 §12).
 * Memoised per file (SEC-05) — the parsed object is reused for the TTL window.
 */
export async function loadSnapshot<T>(file: string): Promise<T | null> {
  const now = Date.now();
  const hit = snapshotCache.get(file);
  if (hit !== undefined && now - hit.at < SNAPSHOT_TTL_MS) {
    return hit.value as T | null;
  }
  let value: T | null = null;
  try {
    const text = await fsp.readFile(path.join(SNAPSHOTS_DIR, file), "utf-8");
    value = JSON.parse(text) as T;
  } catch {
    value = null;
  }
  prune(snapshotCache, now, SNAPSHOT_TTL_MS);
  snapshotCache.set(file, { value, at: now });
  return value;
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

/* ------------------------------------------------------------------ *
 * Response envelopes
 * ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ *
 * Path safety (SEC-01 / SEC-03 / SEC-06 / SEC-15)
 * ------------------------------------------------------------------ */

/**
 * Directory names that must never be reachable through the file-serving
 * routes: version-control internals, build output and dependency trees.
 */
const BLOCKED_DIR_SEGMENTS = new Set([
  ".git",
  ".hg",
  ".svn",
  "node_modules",
  ".next",
  ".next-dev",
  "dist",
  ".turbo",
]);

/** Secret-shaped file names (defence in depth — SEC-15). */
function isSecretShapedName(name: string): boolean {
  const lower = name.toLowerCase();
  if (lower === ".env" || lower.startsWith(".env.")) return true;
  if (lower === ".npmrc" || lower === ".netrc" || lower === ".htpasswd") return true;
  if (lower === "credentials.json" || lower.startsWith("credentials.")) return true;
  if (/\.(pem|key|p12|pfx)$/.test(lower)) return true;
  if (/^id_(rsa|dsa|ecdsa|ed25519)(\.pub)?$/.test(lower)) return true;
  return false;
}

/**
 * Deny-list for repo-relative paths (SEC-03, SEC-06, SEC-15).
 *
 * True when ANY path segment is a blocked directory (`.git`, `node_modules`,
 * `.next`, `dist`, …) or a secret-shaped filename (`.env*`, `*.pem`, `*.key`,
 * `id_rsa*`, `.npmrc`, `.netrc`, `credentials.json`, `*.p12`, …).
 * The repo-relative form is expected (no leading slash, posix separators).
 */
export function isBlockedPath(rel: string): boolean {
  const segments = rel.split(/[\\/]+/).filter((s) => s !== "" && s !== ".");
  for (const segment of segments) {
    if (BLOCKED_DIR_SEGMENTS.has(segment)) return true;
    if (isSecretShapedName(segment)) return true;
  }
  return false;
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

/**
 * Symlink rejection for the *final* path component (SEC-01, hardening).
 * A symlink is never served, even when its target happens to stay inside
 * the repository — the link is a redirection the caller controls.
 */
export function assertNotSymlink(abs: string): "ok" | "symlink" | "missing" {
  try {
    if (fs.lstatSync(abs).isSymbolicLink()) return "symlink";
    return "ok";
  } catch {
    return "missing";
  }
}

/* ------------------------------------------------------------------ *
 * Rate limiting (SEC-02 — no auth on a public tunnel)
 * ------------------------------------------------------------------ */

/** Rate-limit buckets, per client IP, per route group. */
export type RateGroup = "fs" | "git" | "meta";

/** Requests allowed per window, per IP, per group. */
const RATE_LIMIT_PER_MIN = Number.parseInt(process.env.VIZ_RATE_LIMIT_PER_MIN ?? "120", 10) || 120;
/** Window length (fixed window, 60 s). */
const RATE_WINDOW_MS = 60_000;

interface RateBucket {
  count: number;
  resetAt: number;
}

const rateBuckets = new Map<string, RateBucket>();

/**
 * Client IP for bucketing. `x-forwarded-for` is read right-most first: the
 * closest proxy appends the real peer, so a spoofed left-most value cannot
 * buy extra budget.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded !== null && forwarded.trim() !== "") {
    const parts = forwarded
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part !== "");
    if (parts.length > 0) return parts[parts.length - 1];
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp !== null && realIp.trim() !== "") return realIp.trim();
  return "unknown";
}

/**
 * In-process fixed-window rate limiter (SEC-02) — dependency-free.
 * Returns a 429 response when the caller is over budget, otherwise null.
 */
export function rateLimit(group: RateGroup, request: Request): NextResponse | null {
  const now = Date.now();
  const key = `${group}:${clientIp(request)}`;
  let bucket = rateBuckets.get(key);
  if (bucket === undefined || now >= bucket.resetAt) {
    bucket = { count: 0, resetAt: now + RATE_WINDOW_MS };
    rateBuckets.set(key, bucket);
  }
  bucket.count += 1;
  if (rateBuckets.size > 512) {
    for (const [k, v] of rateBuckets) {
      if (now >= v.resetAt) rateBuckets.delete(k);
    }
  }
  if (bucket.count > RATE_LIMIT_PER_MIN) {
    const retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
    return NextResponse.json(
      { error: "Too many requests — slow down." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "Cache-Control": "no-store",
        },
      }
    );
  }
  return null;
}

/* ------------------------------------------------------------------ *
 * Cached git / directory access (SEC-05)
 * ------------------------------------------------------------------ */

/**
 * Whole-history git log, cached under a SINGLE key.
 *
 * The cache key must not vary with the request: an attacker could otherwise
 * mint one key per `limit`/`since` value and force a fresh 10 s git spawn
 * per request (SEC-05). The history is fetched once per TTL window and every
 * query is answered from it.
 */
export async function cachedGitHistory(limit = 500): Promise<string> {
  const key = `history|${limit}`;
  const now = Date.now();
  const hit = gitCache.get(key);
  if (hit !== undefined && now - hit.at < GIT_TTL_MS) return hit.value;
  const raw = await gitCommits(undefined, limit);
  prune(gitCache, now, GIT_TTL_MS);
  gitCache.set(key, { value: raw, at: now });
  return raw;
}

/** Parsed whole-history commit records (single cache entry). */
export async function cachedHistoryRecords(limit = 500): Promise<CommitRecord[]> {
  const key = `history-records|${limit}`;
  const now = Date.now();
  const hit = parsedCommitsCache.get(key);
  if (hit !== undefined && now - hit.at < GIT_TTL_MS) return hit.value;
  const raw = await cachedGitHistory(limit);
  const records = parseCommits(raw);
  prune(parsedCommitsCache, now, GIT_TTL_MS);
  parsedCommitsCache.set(key, { value: records, at: now });
  return records;
}

/**
 * Commit records for a query, served from the single cached history.
 * `since` is applied in memory (same semantics as `git log --since`,
 * which filters on the committer date — %cI — exactly like the snapshot
 * fallback), `limit` slices the result.
 */
export async function cachedCommits(since?: string, limit = 500): Promise<CommitRecord[]> {
  const records = await cachedHistoryRecords(MAX_HISTORY);
  let out = records;
  if (since !== undefined && since !== "") {
    const sinceMs = Date.parse(since);
    out = records.filter((c) => Date.parse(c.date) >= sinceMs);
  }
  return out.slice(0, limit);
}

/** One directory level cached per repo-relative path (short TTL). */
export function cachedDirLevel(rel: string): FileNode[] {
  const now = Date.now();
  const hit = dirLevelCache.get(rel);
  if (hit !== undefined && now - hit.at < DIR_TTL_MS) return hit.value;
  const nodes = readDirLevel(rel);
  prune(dirLevelCache, now, DIR_TTL_MS);
  dirLevelCache.set(rel, { value: nodes, at: now });
  return nodes;
}

/* ------------------------------------------------------------------ *
 * Per-path commit lookup
 * ------------------------------------------------------------------ */

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
  const raw = await cachedGitHistory(MAX_HISTORY);
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
