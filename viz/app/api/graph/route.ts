/**
 * GET /api/graph — council graph data (VIZ-031).
 *
 * Serves the committed snapshot; the parse is memoised (SEC-05).
 * Rate limited per IP (SEC-02).
 */
import { NextResponse } from "next/server";
import { loadSnapshot, rateLimit } from "../_lib";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET(request: Request): Promise<NextResponse> {
  const limited = rateLimit("meta", request);
  if (limited !== null) return limited;

  try {
    const snap = await loadSnapshot<Record<string, unknown>>("graph.json");
    if (snap === null) throw new Error("graph snapshot unavailable");
    return NextResponse.json({ source: "snapshot", data: snap });
  } catch {
    return NextResponse.json({ error: "graph unavailable" }, { status: 404 });
  }
}
