#!/usr/bin/env node
/**
 * Zero-dependency snapshot generator (VIZ-022 §8.4).
 * Emits public/snapshots/{tree,commits,stats}.json (+ graph.json, tours.json).
 * Degrades gracefully when git is absent (empty commits, exit 0).
 *
 * Usage: node scripts/snapshot.mjs [--collapse-rea] [--exclude dir] [--no-meta]
 */
import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..", ".."); // repo root (viz/../)
const OUT = path.resolve(import.meta.dirname, "..", "public", "snapshots");

const args = process.argv.slice(2);
const collapseRea = args.includes("--collapse-rea");
const noMeta = args.includes("--no-meta");
const extraExcludes = args
  .filter((a, i) => args[i - 1] === "--exclude")
  .flatMap((a) => [a]);
const EXCLUDED = new Set(["node_modules", ".next", "dist", ".turbo", ...extraExcludes]);

const ZONES = ["docs", "prompts", "execution", "stremiium", "rea", "other"];
function zoneOf(p) {
  const first = p.split("/")[0];
  if (first === ".stremiium") return "stremiium";
  return ZONES.includes(first) ? first : "other";
}

function sh(cmd, args) {
  return new Promise((resolve) => {
    execFile(cmd, args, { cwd: ROOT, timeout: 30000, maxBuffer: 64 * 1024 * 1024 }, (err, stdout) =>
      resolve(err ? null : stdout)
    );
  });
}

async function gitLog() {
  const sep = "%x1f";
  const rec = "%x1e";
  const out = await sh("git", [
    "log",
    `--pretty=format:${sep}%H${sep}%cI${sep}%an${sep}%s${rec}`,
    "--numstat",
    "--no-renames",
  ]);
  return out ?? "";
}

function applyNumstat(text, commit, churn) {
  let filesChanged = 0,
    insertions = 0,
    deletions = 0;
  for (const line of text.split("\n")) {
    const m = line.trim().match(/^(\d+|-)\s+(\d+|-)\s+(.+)$/);
    if (!m) continue;
    filesChanged++;
    const ins = m[1] === "-" ? 0 : +m[1];
    const del = m[2] === "-" ? 0 : +m[2];
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
 * git log emits per commit: the pretty line (with \x1f field separators and a
 * trailing \x1e record separator), THEN the numstat lines. Therefore numstat
 * for commit N appears at the START of the chunk that follows commit N's \x1e,
 * i.e. attached to the NEXT record's leading text (or the final tail chunk).
 */
function parseCommits(raw) {
  const commits = [];
  const churn = new Map();
  let last = null;
  const chunks = raw.split("\x1e");
  for (const chunk of chunks) {
    if (!chunk.trim()) continue;
    const fields = chunk.split("\x1f").filter((p) => p !== "");
    if (fields.length < 4) {
      // numstat-only tail chunk → belongs to the previous commit
      if (last) applyNumstat(fields.join("\n"), last, churn);
      continue;
    }
    const header = fields.slice(-4); // sha, date, author, message
    const leading = fields.slice(0, -4).join("\n"); // numstat of the PREVIOUS commit
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
    commits.push(last);
  }
  return { commits, churn: [...churn.values()] };
}

function walk(rel) {
  const abs = rel ? path.join(ROOT, rel) : ROOT;
  const out = [];
  let entries;
  try {
    entries = fs.readdirSync(abs, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (EXCLUDED.has(e.name)) continue;
    const childRel = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      const node = {
        path: childRel,
        name: e.name,
        type: "dir",
        size: e.name === ".git" ? 0 : dirSize(path.join(abs, e.name), 0),
        zone: zoneOf(childRel),
        children: e.name === ".git" ? [] : walk(childRel),
      };
      if (collapseRea && childRel === "rea") node.children = [];
      out.push(node);
    } else if (e.isFile()) {
      try {
        const st = fs.statSync(path.join(abs, e.name));
        out.push({ path: childRel, name: e.name, type: "file", size: st.size, zone: zoneOf(childRel) });
      } catch {
        /* unreadable file: skip */
      }
    }
  }
  out.sort((a, b) => (a.type !== b.type ? (a.type === "dir" ? -1 : 1) : a.name.localeCompare(b.name)));
  return out;
}

function dirSize(dir, depth) {
  if (depth > 8) return 0;
  let total = 0;
  try {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (EXCLUDED.has(e.name)) continue;
      if (e.isFile()) total += fs.statSync(path.join(dir, e.name)).size;
      else if (e.isDirectory()) total += dirSize(path.join(dir, e.name), depth + 1);
    }
  } catch {}
  return total;
}

function computeStats(tree, commits, churn) {
  const byZone = Object.fromEntries(ZONES.map((z) => [z, { files: 0, dirs: 0 }]));
  const byType = {};
  (function count(nodes) {
    for (const n of nodes) {
      const z = byZone[n.zone] ?? (byZone[n.zone] = { files: 0, dirs: 0 });
      if (n.type === "dir") {
        z.dirs++;
        if (n.children) count(n.children);
      } else {
        z.files++;
        const ext = n.name.includes(".") ? n.name.split(".").pop().toLowerCase() : "(none)";
        byType[ext] = (byType[ext] ?? 0) + 1;
      }
    }
  })(tree);
  const churnTop = churn.sort((a, b) => b.commits - a.commits || b.insertions + b.deletions - (a.insertions + a.deletions)).slice(0, 20);
  return {
    totalFiles: Object.values(byZone).reduce((s, z) => s + z.files, 0),
    totalDirs: Object.values(byZone).reduce((s, z) => s + z.dirs, 0),
    totalCommits: commits.length,
    byZone,
    byType,
    churnTop,
  };
}

function emitAtomic(file, data) {
  const tmp = file + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, file);
}

// ------------------------------------------------------------ promptsDirs ---
/** Root of the per-council prompt tree (Explorer deep-link targets). */
const PROMPTS_STREMIIUM = "prompts/stremiium";

/**
 * Real directory names under prompts/stremiium, read from disk at snapshot
 * time (never hardcoded — the listing is the source of truth).
 */
function readPromptDirectories() {
  try {
    return fs
      .readdirSync(path.join(ROOT, PROMPTS_STREMIIUM), { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

/** Length of the shared prefix of two strings. */
function commonPrefixLength(a, b) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return i;
}

/**
 * Resolve the directory that actually exists for a department name.
 *
 * The council-department mapping is derived from .stremiium/agents/ and uses
 * a DIFFERENT naming set than the directories under prompts/stremiium (e.g.
 * "c06-engineering-infrastructure" vs the real "c06-hardware-enable"). Match
 * by the council's "cNN-" prefix: exact name first, then the closest prefix
 * match inside that council. Returns null when nothing resolves, so the
 * emitter can omit the entry instead of emitting a dead Explorer link.
 */
function resolvePromptDirectory(department, candidates, actual) {
  if (actual.includes(department)) return department;
  if (candidates.length === 0) return null;
  let best = candidates[0];
  let bestScore = commonPrefixLength(best, department);
  for (const candidate of candidates.slice(1)) {
    const score = commonPrefixLength(candidate, department);
    if (score > bestScore || (score === bestScore && candidate < best)) {
      best = candidate;
      bestScore = score;
    }
  }
  return best;
}

/**
 * council id → { primary, departments } where every value is a directory that
 * exists under prompts/stremiium. "primary" is the first department (in
 * mapping order) that resolves; null when the council has no directory.
 */
function buildPromptsDirs(councils) {
  const actual = readPromptDirectories();
  const out = {};
  for (const [cid, council] of Object.entries(councils)) {
    const prefix = `${cid.toLowerCase()}-`;
    const candidates = actual.filter((d) => d.startsWith(prefix));
    const departments = {};
    for (const department of council.departments ?? []) {
      const dir = resolvePromptDirectory(department, candidates, actual);
      if (dir) departments[department] = dir;
    }
    const first = Object.values(departments)[0] ?? null;
    out[cid] = { primary: first, departments };
  }
  return out;
}

async function main() {
  console.log(`[snapshot] repo root: ${ROOT}`);
  fs.mkdirSync(OUT, { recursive: true });

  const raw = await gitLog();
  const { commits, churn } = parseCommits(raw);
  const tree = walk("");
  const stats = computeStats(tree, commits, churn);

  const meta = noMeta
    ? undefined
    : { schemaVersion: 1, generatedAt: new Date().toISOString(), headSha: commits[0]?.sha ?? null, root: "." };

  emitAtomic(path.join(OUT, "tree.json"), { ...(meta ? { meta } : {}), root: tree });
  emitAtomic(path.join(OUT, "commits.json"), { ...(meta ? { meta } : {}), commits });
  emitAtomic(path.join(OUT, "stats.json"), { ...(meta ? { meta } : {}), ...stats });

  // graph.json (VIZ-031 councils view) from council-department-mapping.json
  let snapGraph = null;
  try {
    const mapping = JSON.parse(fs.readFileSync(path.join(ROOT, ".stremiium", "config", "council-department-mapping.json"), "utf8"));
    const nodes = [{ id: "SC-MASTER-001", type: "sc", label: "Sparkling Curious" }];
    const edges = [];
    for (const [id, spec] of Object.entries(mapping.coordinators ?? {})) {
      nodes.push({ id, type: "crd", label: id });
      edges.push({ source: "SC-MASTER-001", target: id, type: "parent-of" });
    }
    for (const [cid, c] of Object.entries(mapping.councils ?? {})) {
      nodes.push({ id: cid, type: "council", label: c.captain?.replace(".agent.md", "") ?? cid });
      edges.push({ source: "SC-MASTER-001", target: cid, type: "parent-of" });
      for (const d of c.departments ?? []) {
        const did = `${cid}:${d}`;
        nodes.push({ id: did, type: "department", label: d });
        edges.push({ source: cid, target: did, type: "parent-of" });
      }
    }
    snapGraph = { nodes, edges, promptsDirs: buildPromptsDirs(mapping.councils ?? {}) };
    emitAtomic(path.join(OUT, "graph.json"), snapGraph);
  } catch {
    console.warn("[snapshot] council mapping unavailable — graph.json skipped");
  }

  // tours.json (VIZ-025 deterministic tours)
  const tours = [
    {
      id: "repo-orientation",
      title: "Repo Orientation",
      description: "The five zones and how they fit together",
      steps: [
        { id: "t1", title: "Overview", description: "Start at the dashboard: total files, commits, and zone mix.", route: "/" },
        { id: "t2", title: "Explorer", description: "Browse the full folder tree, zone by zone.", route: "/explorer" },
        { id: "t3", title: "Councils", description: "See the 16-council governance structure.", route: "/councils" },
        { id: "t4", title: "Learn", description: "Open the learning decks to go deeper.", route: "/learn" },
      ],
    },
    {
      id: "prompts-and-replies",
      title: "Prompts & Replies",
      description: "How 201 master prompts become substantive replies",
      steps: [
        { id: "t1", title: "Prompts zone", description: "164 Stremiium + 37 NeoBank prompts.", route: "/explorer?path=prompts" },
        { id: "t2", title: "Replies", description: "Substantive answers with evidence grades.", route: "/explorer?path=prompts/replies" },
        { id: "t3", title: "Execution", description: "Execution results per agent.", route: "/explorer?path=execution" },
      ],
    },
    {
      id: "history-highlights",
      title: "History Highlights",
      description: "The repo's evolution in commits",
      steps: [
        { id: "t1", title: "Timeline", description: "Scroll the animated commit timeline.", route: "/commits" },
        { id: "t2", title: "Churn", description: "See which files change most.", route: "/" },
      ],
    },
  ];
  emitAtomic(path.join(OUT, "tours.json"), { tours });

  console.log(`[snapshot] files=${stats.totalFiles} dirs=${stats.totalDirs} commits=${commits.length}`);
  console.log(`[snapshot] churnTop[0]=${stats.churnTop[0]?.path ?? "(none)"}`);
  console.log(
    `[snapshot] graph.json promptsDirs: ${Object.keys(snapGraph?.promptsDirs ?? {}).length} council(s) mapped to real prompts/stremiium directories`
  );
  console.log(`[snapshot] wrote tree.json, commits.json, stats.json, graph.json, tours.json → ${path.relative(ROOT, OUT)}`);
}

main().catch((e) => {
  console.error("[snapshot] fatal:", e);
  process.exit(1);
});
