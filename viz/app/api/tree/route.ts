/**
 * GET /api/tree?path=<rel>&depth=1 — one directory level of FileNodes for the
 * virtualized explorer (VIZ-021 §11; consumer VIZ-020).
 *
 * Live: readDirLevel() (pure fs, git-independent). Any fs failure (missing
 * dir, unreadable, ENOTDIR) degrades to the committed tree.json snapshot
 * walked down to the requested path (source: "snapshot").
 *
 * Envelope: { source: "git" | "snapshot", data: FileNode[] }.
 * `depth` is accepted for contract compatibility; exactly one level is
 * served (lazy levels feed the virtualized tree).
 */
import { NextResponse } from "next/server";
import { readDirLevel } from "@/lib/repo-scan";
import {
  assertContainedRealpath,
  fail,
  loadSnapshot,
  ok,
  resolveRepoPath,
  type TreeFile,
} from "../_lib";
import type { FileNode } from "@/lib/types";

export const runtime = "nodejs";
export const revalidate = 60;

/** Walk snapshot tree.json root down `segments`; return that level's children. */
function snapshotChildren(nodes: FileNode[], segments: string[]): FileNode[] | null {
  if (segments.length === 0) return nodes;
  const [head, ...rest] = segments;
  const child = nodes.find((n) => n.name === head && n.type === "dir");
  if (child === undefined || child.children === undefined) return null;
  return snapshotChildren(child.children, rest);
}

export async function GET(request: Request): Promise<NextResponse> {
  const params = new URL(request.url).searchParams;
  const target = resolveRepoPath(params.get("path") ?? "");
  if (target === null) return fail(422, "Invalid or unsafe path.");

  const real = assertContainedRealpath(target.abs);
  if (real === "escape") return fail(422, "Invalid or unsafe path.");

  if (real === "ok") {
    try {
      return ok("git", readDirLevel(target.rel), 60);
    } catch {
      // fs failure → snapshot fallback below
    }
  }

  const snap = await loadSnapshot<TreeFile>("tree.json");
  if (snap === null || !Array.isArray(snap.root)) {
    return fail(500, "Tree data unavailable.");
  }
  const segments = target.rel === "" ? [] : target.rel.split("/");
  const children = snapshotChildren(snap.root, segments);
  if (children === null) return fail(404, "Directory not found.");
  // One-level parity with readDirLevel: strip nested children (keep .git hollow).
  const oneLevel: FileNode[] = children.map((n) =>
    n.type === "dir" && n.name !== ".git" ? { ...n, children: undefined } : n
  );
  return ok("snapshot", oneLevel, 60);
}
