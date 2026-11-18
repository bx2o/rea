/**
 * GET /api/file?path=<rel> — file content + metadata for the viewer
 * (VIZ-021 §11; consumer VIZ-020).
 *
 * Security (SEC-01): the requested path is validated lexically AND re-checked
 * with a realpath containment assert, so a symlink inside the repository
 * cannot escape it. Blocked internals (SEC-03/SEC-06/SEC-15) are refused with
 * 403. Rate limited (SEC-02).
 *
 * Envelope: { source: "git", data: FileContent } | { error }.
 */
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { zoneOf } from "@/lib/brand";
import type { FileContent } from "@/lib/types";
import {
  assertContainedRealpath,
  assertNotSymlink,
  isBlockedPath,
  rateLimit,
  resolveRepoPath,
} from "../_lib";

export const runtime = "nodejs";
export const revalidate = 300;

const MAX_BYTES = 256 * 1024;
const BINARY_SNIFF = 8192;

function isBinary(buf: Buffer): boolean {
  for (let i = 0; i < Math.min(buf.length, BINARY_SNIFF); i++) {
    if (buf[i] === 0) return true;
  }
  return false;
}

export async function GET(req: NextRequest) {
  const limited = rateLimit("fs", req);
  if (limited !== null) return limited;

  const raw = req.nextUrl.searchParams.get("path") ?? "";
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

  // Realpath containment re-check — defeats symlink escapes (SEC-01).
  const real = assertContainedRealpath(abs);
  if (real === "escape") {
    return NextResponse.json({ error: "invalid path" }, { status: 422 });
  }
  if (real === "missing") {
    return NextResponse.json({ error: "file not found" }, { status: 404 });
  }
  // A symlinked file is never served, even when it points inside the repo.
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

  const rel = target.rel;
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
