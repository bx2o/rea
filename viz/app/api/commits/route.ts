/**
 * GET /api/commits?since=<iso>&limit=<n> — commit history (VIZ-021 §11;
 * consumers: VIZ-020 commits timeline, VIZ-015 charts).
 *
 * Live: gitCommits() + parseCommits() — a single `git log --numstat` pass
 * with %x1f/%x1e separators (no space-splitting, no N+1 spawns).
 * Any git failure degrades to commits.json filtered by `since`
 * (source: "snapshot").
 *
 * Query: `since` optional ISO-8601 (date or datetime); `limit` optional
 * integer, default 500, clamped to 2000.
 * Envelope: { source, data: CommitRecord[] }.
 */
import { NextResponse } from "next/server";
import { gitCommits } from "@/lib/git";
import { parseCommits } from "@/lib/repo-scan";
import { fail, loadSnapshot, ok, type CommitsFile } from "../_lib";

export const runtime = "nodejs";
export const revalidate = 60;

const DEFAULT_LIMIT = 500;
const MAX_LIMIT = 2000;

const ISO_SINCE =
  /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/;

export async function GET(request: Request): Promise<NextResponse> {
  const params = new URL(request.url).searchParams;

  let since: string | undefined;
  const sinceRaw = params.get("since");
  if (sinceRaw !== null && sinceRaw.trim() !== "") {
    const candidate = sinceRaw.trim();
    if (!ISO_SINCE.test(candidate) || Number.isNaN(Date.parse(candidate))) {
      return fail(400, "Invalid 'since' parameter — ISO-8601 expected.");
    }
    since = candidate;
  }

  let limit = DEFAULT_LIMIT;
  const limitRaw = params.get("limit");
  if (limitRaw !== null && limitRaw.trim() !== "") {
    const parsed = Number(limitRaw);
    if (!Number.isInteger(parsed) || parsed < 1) {
      return fail(400, "Invalid 'limit' parameter.");
    }
    limit = Math.min(parsed, MAX_LIMIT);
  }

  try {
    const raw = await gitCommits(since, limit);
    return ok("git", parseCommits(raw).slice(0, limit), 60);
  } catch {
    const snap = await loadSnapshot<CommitsFile>("commits.json");
    if (snap === null || !Array.isArray(snap.commits)) {
      return fail(500, "Commit history unavailable.");
    }
    let commits = snap.commits;
    if (since !== undefined) {
      const sinceMs = Date.parse(since);
      commits = commits.filter((c) => Date.parse(c.date) >= sinceMs);
    }
    return ok("snapshot", commits.slice(0, limit), 60);
  }
}
