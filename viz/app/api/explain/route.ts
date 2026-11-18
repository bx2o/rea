import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { validateRepoPath } from "@/lib/git";
import { zoneOf, type Zone } from "@/lib/brand";
import type { ExplainSummary, NodeType } from "@/lib/types";

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
  const m = rel.match(/^prompts\/stremiium\/(c\d{2})-/i);
  if (m) return m[1].toUpperCase();
  const nb = rel.match(/^prompts\/neobank\/([^/]+)\//);
  if (nb && NEOBANK_COUNCIL[nb[1]]) return NEOBANK_COUNCIL[nb[1]];
  return null;
}

/** Deterministic file explanation (VIZ-025) — no LLM call in MVP. */
export async function POST(req: NextRequest) {
  let body: { path?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON body" }, { status: 400 });
  }
  const rel = body.path ?? "";
  const abs = validateRepoPath(rel);
  if (abs === null) {
    return NextResponse.json({ error: "invalid path" }, { status: 422 });
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

  const raw = st.size <= PARSE_CAP ? fs.readFileSync(abs, "utf8") : "";
  const lines = raw ? raw.split("\n").length : 0;

  const headings = raw
    ? raw
        .split("\n")
        .filter((l) => /^#{1,4}\s+/.test(l))
        .map((l) => l.replace(/^#{1,4}\s+/, "").trim())
        .slice(0, 10)
    : [];

  const symbols = raw
    ? [
        ...raw.matchAll(
          /(?:export\s+)?(?:async\s+)?(?:function|class|interface|type|const|enum)\s+([A-Za-z_$][\w$]*)/g
        ),
      ]
        .map((m) => m[1])
        .slice(0, 20)
    : [];

  const todos = raw ? (raw.match(/TODO/g) ?? []).length : 0;

  // lastCommit + churn from snapshots
  let lastCommit: ExplainSummary["lastCommit"] = null;
  let churn: ExplainSummary["churn"] = null;
  try {
    const commitsSnap = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "public", "snapshots", "commits.json"), "utf8")
    );
    lastCommit = commitsSnap.commits?.[0] ?? null;
    const statsSnap = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "public", "snapshots", "stats.json"), "utf8")
    );
    churn = statsSnap.churnTop?.find?.((c: any) => c.path === rel) ?? null;
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
