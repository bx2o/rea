/**
 * GET /api/diff/[sha] — per-file numstat summary for one commit
 * (VIZ-021 §11; consumer VIZ-020 file history).
 *
 * `sha` is validated (/^[0-9a-f]{7,40}$/i) before any use — it is only ever
 * passed as an execFile argument element, never interpolated. numstat rows
 * with "-\t-" markers mark binary files (binary: true, zero churn).
 *
 * Live: gitDiffNumstat(). On git failure: optional per-sha snapshot
 * (public/snapshots/diffs/<sha>.json, VIZ-022 §8.5 extension) if present,
 * else 404. Envelope: { source, data: DiffSummary { sha, files } }.
 */
import { NextResponse } from "next/server";
import { gitDiffNumstat, validateSha } from "@/lib/git";
import { fail, loadSnapshot, ok } from "../../_lib";
import type { DiffFile, DiffSummary } from "@/lib/types";

export const runtime = "nodejs";
export const revalidate = 3600; // history is immutable

const NUMSTAT_LINE = /^(\d+|-)\s+(\d+|-)\s+(.+)$/;

export async function GET(
  _request: Request,
  ctx: { params: Promise<{ sha: string }> }
): Promise<NextResponse> {
  const { sha } = await ctx.params;
  if (!validateSha(sha)) return fail(400, "Invalid commit sha.");

  try {
    const raw = await gitDiffNumstat(sha);
    const files: DiffFile[] = [];
    for (const line of raw.split("\n")) {
      const m = line.trim().match(NUMSTAT_LINE);
      if (m === null) continue;
      const binary = m[1] === "-" || m[2] === "-";
      files.push({
        path: m[3].trim(),
        insertions: binary || m[1] === "-" ? 0 : Number.parseInt(m[1], 10),
        deletions: binary || m[2] === "-" ? 0 : Number.parseInt(m[2], 10),
        binary,
      });
    }
    return ok("git", { sha, files } satisfies DiffSummary, 3600);
  } catch {
    // Optional per-sha snapshot extension; sha is hex-only (validated above).
    const perSha = await loadSnapshot<DiffSummary>(`diffs/${sha}.json`);
    if (
      perSha !== null &&
      typeof perSha.sha === "string" &&
      Array.isArray(perSha.files)
    ) {
      return ok("snapshot", perSha, 3600);
    }
    return fail(404, "Diff not found for this commit.");
  }
}
