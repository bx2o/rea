/**
 * POST /api/explain — deterministic file explanation (VIZ-021 §11,
 * VIZ-025; consumer VIZ-020).
 *
 * Security (SEC-01): the requested path is validated lexically AND re-checked
 * with a realpath containment assert, so a symlink inside the repository
 * cannot leak metadata (or content) from outside it. Blocked internals
 * (SEC-03/SEC-06/SEC-15) are refused with 403. Rate limited (SEC-02).
 *
 * Envelope: { source: "git", data: ExplainSummary } | { error }.
 */
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { zoneOf, type Zone } from "@/lib/brand";
import type { ExplainSummary, NodeType } from "@/lib/types";
import {
  assertContainedRealpath,
  assertNotSymlink,
  isBlockedPath,
  loadSnapshot,
  rateLimit,
  resolveRepoPath,
  type CommitsFile,
  type StatsFile,
} from "../_lib";

export const runtime = "nodejs";

const PARSE_CAP = 1024 * 1024; // 1 MB (VIZ-025)

const NEOBANK_COUNCIL: Record<string, string> = {
  legal: "C01",
  operations: "C02",
  "knowledge-base": "C03",
  strategy: "C04",
  hr: "C05",
  engineering: "C06",
  sales: "C07",
  design: "C08",
  marketing: "C09",
  finance: "C10",
  "dev-engineering": "C11",
  security: "C12",
  web3: "C13",
  "customer-success": "C14",
  product: "C15",
  banking: "C16",
};

function councilFor(rel: string): string | null {
  const m = rel.match(/^prompts\/stremiium\/(c\d{2}-)/i);
  if (m) return m[1].toUpperCase();
  const nb = rel.match(/^prompts\/neobank\/([^/]+)\//);
  if (nb && NEOBANK_COUNCIL[nb[1]]) return NEOBANK_COUNCIL[nb[1]];
  return null;
}

/** Deterministic file explanation (VIZ-025) — no LLM call in MVP. */
export async function POST(req: NextRequest) {
  const limited = rateLimit("fs", req);
  if (limited !== null) return limited;

  let body: { path?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON body" }, { status: 400 });
  }
  const raw = body.path ?? "";
  if (raw.trim() === "") {
    return NextResponse.json({ error: "invalid path" }, { status: 422 });
  }
  const target = resolveRepoPath(raw);
  if (target === null) {
    return NextResponse.json({ error: "invalid path" }, { status: 422 });
  }
  // Deny-list: .git internals, dependency/build trees, secret-shaped files.
  if (isBlockedPath(target.rel)) {
    return NextResponse.json({ error: "forbidden path" }, { status: 403 });
  }
  const abs = target.abs;
  const rel = target.rel;

  // Realpath containment re-check — defeats symlink escapes (SEC-01).
  const real = assertContainedRealpath(abs);
  if (real === "escape") {
    return NextResponse.json({ error: "invalid path" }, { status: 422 });
  }
  if (real === "missing") {
    return NextResponse.json({ error: "file not found" }, { status: 404 });
  }
  const link = assertNotSymlink(abs);
  if (link === "symlink") {
    return NextResponse.json({ error: "invalid path" }, { status: 422 });
  }
  if (link === "missing") {
    return NextResponse.json({ error: "file not found" }, { status: 404 });
  }

  let st: fs.Stats;
  try {
    st = fs.statSync(abs);
  } catch {
    return NextResponse.json({ error: "file not found" }, { status: 404 });
  }
  if (!st.isFile()) {
    return NextResponse.json({ error: "not a file" }, { status: 400 });
  }

  const rawText = st.size <= PARSE_CAP ? fs.readFileSync(abs, "utf8") : "";
  const lines = rawText ? rawText.split("\n").length : 0;

  const headings = rawText
    ? rawText
        .split("\n")
        .filter((l) => /^#{1,4}\s+/.test(l))
        .map((l) => l.replace(/^#{1,4}\s+/, "").trim())
        .slice(0, 10)
    : [];

  const symbols = rawText
    ? [
        ...rawText.matchAll(
          /(?:export\s+)?(?:async\s+)?(?:function|class|interface|type|const|enum)\s+([A-Za-z_$][\w$]*)/g
        ),
      ]
        .map((m) => m[1])
        .slice(0, 20)
    : [];

  const todos = rawText ? (rawText.match(/TODO/g) ?? []).length : 0;

  // lastCommit + churn from the memoised snapshots (SEC-05 — no re-parse).
  let lastCommit: ExplainSummary["lastCommit"] = null;
  let churn: ExplainSummary["churn"] = null;
  try {
    const commitsSnap = await loadSnapshot<CommitsFile>("commits.json");
    lastCommit = commitsSnap?.commits?.[0] ?? null;
    const statsSnap = await loadSnapshot<StatsFile>("stats.json");
    churn = statsSnap?.churnTop?.find?.((c) => c.path === rel) ?? null;
  } catch {}

  // Related files: siblings (same dir, cap 12)
  let relatedFiles: string[] = [];
  try {
    const dirAbs = path.dirname(abs);
    const dirRel = path.dirname(rel);
    relatedFiles = fs
      .readdirSync(dirAbs)
      .filter((f) => f !== path.basename(rel) && !f.startsWith("."))
      .slice(0, 12)
      .map((f) => (dirRel === "." ? f : `${dirRel}/${f}`));
  } catch {}

  const zone: Zone = zoneOf(rel);
  const type: NodeType = "file";
  const council = councilFor(rel);
  const parts = [
    `${rel} is a ${zone === "stremiium" ? ".stremiium" : zone} zone file (${st.size} bytes, ${lines} lines).`,
    headings.length
      ? `It covers: ${headings.slice(0, 3).join("; ")}.`
      : "",
    council ? `It belongs to the ${council} council's scope.` : "",
  ].filter(Boolean);
  const summary = parts.join(" ") || `${rel} — no additional detail extracted (binary or empty).`;

  const data: ExplainSummary = {
    path: rel,
    zone,
    type,
    size: st.size,
    lines,
    headings,
    symbols,
    todos,
    lastCommit,
    churn,
    council,
    relatedFiles,
    summary,
    confidence: "deterministic",
  };
  return NextResponse.json({ source: "git", data });
}
