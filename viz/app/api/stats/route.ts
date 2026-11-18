/**
 * GET /api/stats — repository aggregate statistics (VIZ-021 §11; consumer
 * VIZ-015 charts).
 *
 * Serves from the committed snapshot (it carries precise churn from the
 * snapshot script's numstat aggregation); the parse is memoised (SEC-05).
 * Rate limited per IP (SEC-02).
 */
import { NextResponse } from "next/server";
import { loadSnapshot, rateLimit, type StatsFile } from "../_lib";
import type { RepoStats } from "@/lib/types";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET(request: Request): Promise<NextResponse> {
  const limited = rateLimit("meta", request);
  if (limited !== null) return limited;

  try {
    const snap = await loadSnapshot<StatsFile>("stats.json");
    if (snap === null) throw new Error("stats snapshot unavailable");
    const data: RepoStats = {
      totalFiles: snap.totalFiles,
      totalDirs: snap.totalDirs,
      totalCommits: snap.totalCommits,
      byZone: snap.byZone,
      byType: snap.byType,
      churnTop: snap.churnTop ?? [],
    };
    return NextResponse.json({ source: "snapshot", data });
  } catch {
    return NextResponse.json({ error: "stats unavailable" }, { status: 404 });
  }
}
