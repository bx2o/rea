import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { RepoStats } from "@/lib/types";

export const revalidate = 300;

/**
 * Stats serve from the committed snapshot (it carries precise churn from the
 * snapshot script's numstat aggregation); live walk is the fallback.
 */
export async function GET() {
  try {
    const snap = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "public", "snapshots", "stats.json"), "utf8")
    );
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
