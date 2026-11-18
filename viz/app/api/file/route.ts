import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { validateRepoPath } from "@/lib/git";
import { zoneOf } from "@/lib/brand";
import type { FileContent } from "@/lib/types";

export const revalidate = 300;

const MAX_BYTES = 256 * 1024;
const BINARY_SNIFF = 8192;

function isBinary(buf: Buffer): boolean {
  for (let i = 0; i < Math.min(buf.length, BINARY_SNIFF); i++) {
    if (buf[i] === 0) return true;
  }
  return false;
}

/** Last commit touching a path, from the committed snapshot (source of truth). */
function lastCommitFor(p: string): FileContent["lastCommit"] {
  try {
    const snap = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "public", "snapshots", "commits.json"), "utf8")
    );
    return snap.commits?.find((c: any) =>
      (c as any).__files?.includes?.(p)
    ) ?? null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const rel = req.nextUrl.searchParams.get("path") ?? "";
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

  const name = path.basename(rel);
  const tooLarge = st.size > MAX_BYTES;
  let binary = false;
  let content: string | null = null;
  if (!tooLarge) {
    const buf = fs.readFileSync(abs);
    binary = isBinary(buf);
    if (!binary) content = buf.toString("utf8");
  }

  const data: FileContent = {
    path: rel,
    name,
    zone: zoneOf(rel),
    type: "file",
    size: st.size,
    binary,
    tooLarge,
    content,
    lastCommit: null, // populated by the client via /api/commits (per-path numstat not in snapshot)
  };
  return NextResponse.json({ source: "git", data });
}
