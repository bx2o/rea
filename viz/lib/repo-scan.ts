import fs from "fs";
import path from "path";
import { REPO_ROOT } from "./git";
import { zoneOf } from "./brand";
import type { FileNode, CommitRecord, ChurnEntry, RepoStats } from "./types";

/** Directories excluded at any depth (VIZ-022 §8.5). */
export const EXCLUDED_DIRS = new Set(["node_modules", ".next", "dist", ".turbo"]);

function applyNumstat(
  text: string,
  commit: CommitRecord,
  churn: Map<string, ChurnEntry>
): void {
  let filesChanged = 0;
  let insertions = 0;
  let deletions = 0;
  for (const line of text.split("\n")) {
    const m = line.trim().match(/^(\d+|-)\s+(\d+|-)\s+(.+)$/);
    if (!m) continue;
    filesChanged++;
    const ins = m[1] === "-" ? 0 : parseInt(m[1], 10);
    const del = m[2] === "-" ? 0 : parseInt(m[2], 10);
    insertions += ins;
    deletions += del;
    const p = m[3];
    const e = churn.get(p) ?? { path: p, insertions: 0, deletions: 0, commits: 0 };
    e.insertions += ins;
    e.deletions += del;
    e.commits += 1;
    churn.set(p, e);
  }
  commit.filesChanged = filesChanged;
  commit.insertions = insertions;
  commit.deletions = deletions;
}

/**
 * Parse %x1f/%x1e-separated `git log --numstat` output into CommitRecords.
 * git prints the pretty line (ending in \x1e) BEFORE the numstat lines, so
 * commit N's numstat appears at the start of the chunk following N's \x1e.
 */
export function parseCommits(raw: string): CommitRecord[] {
  const out: CommitRecord[] = [];
  const churn = new Map<string, ChurnEntry>();
  let last: CommitRecord | null = null;
  for (const chunk of raw.split("\x1e")) {
    if (!chunk.trim()) continue;
    const fields = chunk.split("\x1f").filter((p) => p !== "");
    if (fields.length < 4) {
      if (last) applyNumstat(fields.join("\n"), last, churn);
      continue;
    }
    const header = fields.slice(-4); // sha, date, author, message
    const leading = fields.slice(0, -4).join("\n"); // previous commit's numstat
    if (last) applyNumstat(leading, last, churn);
    last = {
      sha: header[0],
      date: header[1],
      author: header[2],
      message: header[3].trim(),
      filesChanged: 0,
      insertions: 0,
      deletions: 0,
    };
    out.push(last);
  }
  return out;
}

/** Read one directory level (lazy children for the virtualized tree). */
export function readDirLevel(relPath: string): FileNode[] {
  const abs = relPath ? path.join(REPO_ROOT, relPath) : REPO_ROOT;
  const entries = fs.readdirSync(abs, { withFileTypes: true });
  const nodes: FileNode[] = [];
  for (const e of entries) {
    if (EXCLUDED_DIRS.has(e.name)) continue;
    const childRel = relPath ? `${relPath}/${e.name}` : e.name;
    if (e.isDirectory()) {
      // `.git` kept as hollow dir node (VIZ-022)
      const hollow = e.name === ".git";
      nodes.push({
        path: childRel,
        name: e.name,
        type: "dir",
        size: hollow ? 0 : dirSize(path.join(abs, e.name), 0),
        zone: zoneOf(childRel),
        children: hollow ? [] : undefined,
      });
    } else if (e.isFile()) {
      const st = fs.statSync(path.join(abs, e.name));
      nodes.push({ path: childRel, name: e.name, type: "file", size: st.size, zone: zoneOf(childRel) });
    }
  }
  nodes.sort((a, b) =>
    a.type !== b.type ? (a.type === "dir" ? -1 : 1) : a.name.localeCompare(b.name)
  );
  return nodes;
}

function dirSize(dir: string, depth: number): number {
  if (depth > 8) return 0;
  let total = 0;
  try {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (EXCLUDED_DIRS.has(e.name)) continue;
      if (e.isFile()) total += fs.statSync(path.join(dir, e.name)).size;
      else if (e.isDirectory()) total += dirSize(path.join(dir, e.name), depth + 1);
    }
  } catch {
    // permission-denied dirs contribute 0
  }
  return total;
}

/** Full-tree walk (stats + snapshot). `collapseRea` affects tree emission only. */
export function walkTree(relPath = "", depth = 0, collapseRea = false): FileNode[] {
  const nodes = readDirLevel(relPath);
  for (const n of nodes) {
    if (n.type === "dir") {
      if (collapseRea && n.path === "rea") {
        n.children = [];
      } else if (n.name !== ".git") {
        n.children = walkTree(n.path, depth + 1, collapseRea);
      }
    }
  }
  return nodes;
}

/** Count files/dirs recursively for RepoStats. */
function countTree(nodes: FileNode[], acc: { files: number; dirs: number; byType: Record<string, number> }) {
  for (const n of nodes) {
    if (n.type === "dir") {
      acc.dirs++;
      if (n.children) countTree(n.children, acc);
    } else {
      acc.files++;
      const ext = n.name.includes(".") ? n.name.split(".").pop()!.toLowerCase() : "(none)";
      acc.byType[ext] = (acc.byType[ext] ?? 0) + 1;
    }
  }
}

/** Compute aggregate RepoStats from a full tree + commits. */
export function computeStats(tree: FileNode[], commits: CommitRecord[]): RepoStats {
  const acc = { files: 0, dirs: 0, byType: {} as Record<string, number> };
  countTree(tree, acc);

  const byZone: RepoStats["byZone"] = {
    docs: { files: 0, dirs: 0 },
    prompts: { files: 0, dirs: 0 },
    execution: { files: 0, dirs: 0 },
    stremiium: { files: 0, dirs: 0 },
    rea: { files: 0, dirs: 0 },
    other: { files: 0, dirs: 0 },
  };
  const zoneAcc: Record<string, { files: number; dirs: number }> = byZone as any;
  (function walk(nodes: FileNode[]) {
    for (const n of nodes) {
      const z = zoneAcc[n.zone] ?? (zoneAcc[n.zone] = { files: 0, dirs: 0 });
      if (n.type === "dir") {
        z.dirs++;
        if (n.children) walk(n.children);
      } else z.files++;
    }
  })(tree);

  // Churn: aggregate numstat from commits
  const churnMap = new Map<string, ChurnEntry>();
  for (const c of commits) {
    for (let i = 0; i < c.filesChanged; i++) {
      // Churn detail requires per-file data; approximate via commit-level here.
      // The snapshot script does precise per-file aggregation.
    }
  }

  return {
    totalFiles: acc.files,
    totalDirs: acc.dirs,
    totalCommits: commits.length,
    byZone,
    byType: acc.byType,
    churnTop: [],
  };
}
