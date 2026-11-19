#!/usr/bin/env node
/**
 * verify-viz.mjs — QA gate for the viz app (VIZ-024 §8, zero-dependency).
 *
 * Validates, using only Node builtins (no git, no npm deps):
 *   1. SNAPSHOT SHAPES — public/snapshots/{tree,commits,stats,graph,tours}.json
 *      conform to the viz/lib/types.ts contracts (VIZ-022 authoritative).
 *   2. COVERAGE — snapshot counts reconcile internally; the 19-file
 *      prompts/viz register and >= 4 learn decks are present.
 *   3. SOURCE — key app/lib/scripts files exist.
 *   4. A11Y STATIC — "use client" on interactive components, reduced-motion
 *      media query, app-shell skip link + main landmark, file-tree
 *      role="tree" (chart aria check is warn-level only).
 *   5. NO-HEX DRIFT — no hardcoded hex colors outside lib/brand.ts and
 *      app/globals.css (VIZ-017 single-source rule).
 *
 * Usage:
 *   node scripts/verify-viz.mjs [--snapshots <dir>] [--report <file>]
 *
 * Output: one line per check — "[PASS]|[FAIL]|[WARN] <check> — <detail>",
 * then a summary. Exit-code contract (fail-closed, precedence 4 > 1 > 2 > 3 > 0):
 *   0  all checks pass (WARN-level findings never change the exit code)
 *   1  shape/contract errors — malformed snapshot shapes or no-hex drift
 *   2  coverage errors — count reconciliation, prompt register, decks, source
 *   3  a11y static check failures
 *   4  unexpected exception — the run is incomplete; fix script/input and re-run
 * When several classes fail, the lowest class wins (most fundamental first).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const VIZ_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// ---------------------------------------------------------------- args -----
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log("usage: node scripts/verify-viz.mjs [--snapshots <dir>] [--report <file>]");
  process.exit(0);
}
function argValue(flag) {
  const i = args.indexOf(flag);
  if (i !== -1) return args[i + 1] ?? null;
  const pfx = flag + "=";
  const hit = args.find((a) => a.startsWith(pfx));
  return hit ? hit.slice(pfx.length) : null;
}
const SNAP_DIR = path.resolve(VIZ_ROOT, argValue("--snapshots") ?? path.join("public", "snapshots"));
const REPORT_FILE = argValue("--report") ? path.resolve(VIZ_ROOT, argValue("--report")) : null;

// ----------------------------------------------------------- constants -----
const SNAP_FILES = ["tree.json", "commits.json", "stats.json", "graph.json", "tours.json"];
const ZONES = ["docs", "prompts", "execution", "stremiium", "rea", "other"];
const GRAPH_NODE_TYPES = new Set(["sc", "crd", "meta", "council", "department", "zone", "folder", "file"]);
const GRAPH_EDGE_TYPES = new Set(["parent-of", "routes-to", "maps-to", "cross-references"]);
const EXPECTED_PROMPTS = 19; // prompts/viz/** register size — exact match; drift in either direction fails
const MIN_DECKS = 4; // plan §9.5: >= 4 learn decks
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "dist", ".turbo"]);

const SOURCE_FILES = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/explorer/page.tsx",
  "app/commits/page.tsx",
  "app/globe/page.tsx",
  "app/learn/page.tsx",
  "app/councils/page.tsx",
  "components/nav/app-shell.tsx",
  "lib/brand.ts",
  "lib/types.ts",
  "scripts/snapshot.mjs",
];

const PROMPTS_DIR = path.resolve(VIZ_ROOT, "..", "prompts", "viz"); // ../prompts/viz from the viz dir
const GLOBALS_CSS = path.join(VIZ_ROOT, "app", "globals.css");
const HEX_EXEMPT = new Set([GLOBALS_CSS, path.join(VIZ_ROOT, "lib", "brand.ts")]);

// ------------------------------------------------------------- helpers -----
const rel = (p) => path.relative(VIZ_ROOT, p) || p;
const cap = (arr, n = 5) => arr.slice(0, n).join(", ") + (arr.length > n ? `, …+${arr.length - n} more` : "");
const ok = (detail) => ({ status: "pass", detail });
const bad = (detail) => ({ status: "fail", detail });
const soft = (detail) => ({ status: "warn", detail });

function* walkFiles(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkFiles(abs);
    else if (e.isFile()) yield abs;
  }
}

function readText(file) {
  try {
    const text = fs.readFileSync(file).toString("utf8");
    return text.includes("\u0000") ? null : text; // binary → skip
  } catch {
    return null;
  }
}

function countFiles(dir, filter) {
  if (!fs.existsSync(dir)) return 0;
  let n = 0;
  for (const f of walkFiles(dir)) if (filter(f)) n++;
  return n;
}

/** Collect .tsx/.ts source files under app/ and components/ (recursively). */
function sourceFiles(exts) {
  const out = [];
  for (const d of ["app", "components"]) {
    const dir = path.join(VIZ_ROOT, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of walkFiles(dir)) if (exts.includes(path.extname(f))) out.push(f);
  }
  return out;
}

function findComponents(basenameRe) {
  return sourceFiles([".tsx"]).filter((f) => basenameRe.test(path.basename(f)));
}

// -------------------------------------------------------- run plumbing -----
const snap = {}; // parsed snapshot payloads, filled by V01
const results = [];
let exceptionCount = 0;

function emit(check, r) {
  const status = r.status === "warn" ? "WARN" : r.status === "fail" ? "FAIL" : "PASS";
  console.log(`[${status}] ${check.id} ${check.name} — ${r.detail}`);
  results.push({
    checkId: check.id,
    area: check.area,
    status: r.status,
    cls: r.status === "fail" ? check.cls : null,
    owner: check.owner,
    detail: r.detail,
  });
}

function run(check) {
  try {
    emit(check, check.fn());
  } catch (e) {
    exceptionCount++;
    const msg = e instanceof Error ? e.message : String(e);
    console.error(`[FAIL] ${check.id} ${check.name} — exception: ${msg}`);
    if (e instanceof Error && e.stack) console.error(e.stack.split("\n").slice(0, 4).join("\n"));
    results.push({
      checkId: check.id,
      area: check.area,
      status: "fail",
      cls: 4,
      owner: check.owner,
      detail: `exception: ${msg}`,
    });
  }
}

// -------------------------------------------------- 1. snapshot shapes -----
function checkSnapshotsParse() {
  const unreadable = [];
  for (const f of SNAP_FILES) {
    const file = path.join(SNAP_DIR, f);
    try {
      snap[f.slice(0, -5)] = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (e) {
      unreadable.push(fs.existsSync(file) ? `${f} (invalid JSON: ${e.message})` : `${f} (missing)`);
    }
  }
  return unreadable.length
    ? bad(`${unreadable.length}/5 snapshot files unreadable: ${unreadable.join("; ")}`)
    : ok(`all 5 snapshot files exist and parse (${rel(SNAP_DIR)})`);
}

function checkTreeShape() {
  const tree = snap.tree;
  if (!tree || typeof tree !== "object") return bad("tree.json unavailable — see V01");
  if (!Array.isArray(tree.root)) return bad("tree.root is not an array of FileNode");
  if (tree.root.length === 0) return bad("tree.root is empty — snapshot drift (a real repo walk yields top-level entries)");
  const errs = [];
  let files = 0;
  let dirs = 0;
  const visit = (n) => {
    const id = n && typeof n === "object" && typeof n.path === "string" && n.path ? n.path : "node(?)";
    if (!n || typeof n !== "object" || Array.isArray(n)) {
      errs.push(`${id}: not a FileNode object`);
      return;
    }
    if (typeof n.path !== "string" || n.path === "") errs.push(`${id}: path missing/empty`);
    if (typeof n.name !== "string" || n.name === "") errs.push(`${id}: name missing/empty`);
    if (n.type !== "file" && n.type !== "dir") errs.push(`${id}: type "${String(n.type)}" not in file|dir`);
    else if (n.type === "dir") dirs++;
    else files++;
    if (typeof n.size !== "number" || !Number.isFinite(n.size) || n.size < 0) errs.push(`${id}: size invalid`);
    if (!ZONES.includes(n.zone)) errs.push(`${id}: zone "${String(n.zone)}" not in the 6 zones (${ZONES.join("|")})`);
    if (n.children !== undefined) {
      if (!Array.isArray(n.children)) errs.push(`${id}: children is not an array`);
      else n.children.forEach(visit);
    }
  };
  tree.root.forEach(visit);
  return errs.length
    ? bad(`${errs.length} FileNode contract violations (VIZ-022): ${cap(errs)}`)
    : ok(
        `root is a FileNode[] — validated ALL ${files + dirs} nodes (50-node sample floor exceeded): ` +
          `${files} files / ${dirs} dirs; path/name/type/size/zone conform; zone ∈ {${ZONES.join("|")}}`
      );
}

function checkCommitsShape() {
  const cj = snap.commits;
  if (!cj || typeof cj !== "object") return bad("commits.json unavailable — see V01");
  if (!Array.isArray(cj.commits)) return bad("commits.commits is not an array");
  const errs = [];
  cj.commits.forEach((c, i) => {
    const t = c && typeof c === "object" && typeof c.sha === "string" ? c.sha.slice(0, 12) : `commit[${i}]`;
    if (!c || typeof c !== "object") {
      errs.push(`${t}: not an object`);
      return;
    }
    if (typeof c.sha !== "string" || !/^[0-9a-f]{7,40}$/i.test(c.sha)) errs.push(`${t}: sha invalid`);
    if (typeof c.date !== "string" || Number.isNaN(Date.parse(c.date))) errs.push(`${t}: date not ISO-8601`);
    if (typeof c.author !== "string" || c.author === "") errs.push(`${t}: author missing`);
    if (typeof c.message !== "string") errs.push(`${t}: message missing`);
    for (const k of ["filesChanged", "insertions", "deletions"])
      if (typeof c[k] !== "number" || !Number.isFinite(c[k]) || c[k] < 0) errs.push(`${t}: ${k} invalid`);
  });
  return errs.length
    ? bad(`${errs.length} CommitRecord violations (VIZ-022): ${cap(errs)}`)
    : ok(`${cj.commits.length} commits validated — sha/date/author/message/filesChanged/insertions/deletions conform`);
}

function checkStatsShape() {
  const s = snap.stats;
  if (!s || typeof s !== "object") return bad("stats.json unavailable — see V01");
  const errs = [];
  if (typeof s.totalFiles !== "number" || !Number.isFinite(s.totalFiles) || s.totalFiles <= 0)
    errs.push(`totalFiles must be a number > 0 (got ${String(s.totalFiles)})`);
  if (typeof s.totalDirs !== "number" || !Number.isFinite(s.totalDirs) || s.totalDirs < 0)
    errs.push("totalDirs invalid");
  if (typeof s.totalCommits !== "number" || !Number.isFinite(s.totalCommits) || s.totalCommits < 0)
    errs.push("totalCommits invalid");

  const bz = s.byZone;
  if (!bz || typeof bz !== "object" || Array.isArray(bz)) errs.push("byZone missing/not an object");
  else {
    const keys = Object.keys(bz);
    for (const z of ZONES) if (!keys.includes(z)) errs.push(`byZone.${z} missing — all 6 zone keys required`);
    for (const k of keys) if (!ZONES.includes(k)) errs.push(`byZone.${k} is not one of the 6 zones`);
    for (const z of ZONES) {
      const zc = bz[z];
      if (!zc || typeof zc !== "object") continue;
      if (typeof zc.files !== "number" || !Number.isFinite(zc.files) || zc.files < 0)
        errs.push(`byZone.${z}.files invalid`);
      if (typeof zc.dirs !== "number" || !Number.isFinite(zc.dirs) || zc.dirs < 0) errs.push(`byZone.${z}.dirs invalid`);
    }
  }

  const bt = s.byType;
  if (!bt || typeof bt !== "object" || Array.isArray(bt)) errs.push("byType missing/not an object");
  else
    for (const [k, v] of Object.entries(bt))
      if (typeof v !== "number" || !Number.isFinite(v) || v < 0) errs.push(`byType.${k} invalid`);

  const ct = s.churnTop;
  if (!Array.isArray(ct)) errs.push("churnTop missing/not an array");
  else {
    ct.forEach((e, i) => {
      const t = e && typeof e === "object" && typeof e.path === "string" ? e.path : `churnTop[${i}]`;
      if (!e || typeof e !== "object") {
        errs.push(`${t}: not an object`);
        return;
      }
      if (typeof e.path !== "string" || e.path === "") errs.push(`${t}: path missing`);
      for (const k of ["insertions", "deletions", "commits"])
        if (typeof e[k] !== "number" || !Number.isFinite(e[k]) || e[k] < 0) errs.push(`${t}: ${k} invalid`);
    });
    for (let i = 1; i < ct.length; i++)
      if (typeof ct[i]?.commits === "number" && typeof ct[i - 1]?.commits === "number" && ct[i].commits > ct[i - 1].commits)
        errs.push(
          `churnTop not sorted desc by commits at [${i}]: ${ct[i - 1].path} (${ct[i - 1].commits}) < ${ct[i].path} (${ct[i].commits})`
        );
  }

  // Dynamic reconciliation — the zone mix changes with the repo; totals are never hardcoded.
  let mixDetail = "";
  if (bz && typeof bz === "object" && !Array.isArray(bz)) {
    const zoneFiles = ZONES.reduce((t, z) => t + (typeof bz[z]?.files === "number" ? bz[z].files : 0), 0);
    const zoneDirs = ZONES.reduce((t, z) => t + (typeof bz[z]?.dirs === "number" ? bz[z].dirs : 0), 0);
    if (typeof s.totalFiles === "number" && zoneFiles !== s.totalFiles)
      errs.push(`byZone files sum ${zoneFiles} ≠ totalFiles ${s.totalFiles} (checked dynamically, no hardcoded totals)`);
    if (typeof s.totalDirs === "number" && zoneDirs !== s.totalDirs)
      errs.push(`byZone dirs sum ${zoneDirs} ≠ totalDirs ${s.totalDirs}`);
    mixDetail =
      ` byZone files sum: ${ZONES.map((z) => `${z} ${typeof bz[z]?.files === "number" ? bz[z].files : 0}`).join(" + ")} = ${zoneFiles} === totalFiles;` +
      ` dirs sum ${zoneDirs} === totalDirs;`;
  }
  if (errs.length) return bad(`${errs.length} RepoStats violations (VIZ-022): ${cap(errs)}`);
  return ok(`totalFiles=${s.totalFiles} > 0;${mixDetail} churnTop (${ct.length} entries) sorted desc by commits`);
}

function checkGraphShape() {
  const g = snap.graph;
  if (!g || typeof g !== "object") return bad("graph.json unavailable — see V01");
  const errs = [];
  if (!Array.isArray(g.nodes)) errs.push("nodes is not an array");
  if (!Array.isArray(g.edges)) errs.push("edges is not an array");
  const ids = new Set();
  if (Array.isArray(g.nodes)) {
    if (g.nodes.length === 0) errs.push("nodes is empty — council graph has no data");
    g.nodes.forEach((n, i) => {
      const t = n && typeof n === "object" && typeof n.id === "string" ? n.id : `node[${i}]`;
      if (!n || typeof n !== "object") {
        errs.push(`${t}: not an object`);
        return;
      }
      if (typeof n.id !== "string" || n.id === "") errs.push(`${t}: id missing`);
      else ids.add(n.id);
      if (!GRAPH_NODE_TYPES.has(n.type))
        errs.push(`${t}: type "${String(n.type)}" not in {${[...GRAPH_NODE_TYPES].join("|")}}`);
      if (typeof n.label !== "string" || n.label === "") errs.push(`${t}: label missing`);
      if (n.zone !== undefined && !ZONES.includes(n.zone)) errs.push(`${t}: zone "${String(n.zone)}" invalid`);
      if (n.size !== undefined && (typeof n.size !== "number" || !Number.isFinite(n.size)))
        errs.push(`${t}: size invalid`);
    });
  }
  if (Array.isArray(g.edges)) {
    g.edges.forEach((e, i) => {
      const t = `edge[${i}]`;
      if (!e || typeof e !== "object") {
        errs.push(`${t}: not an object`);
        return;
      }
      if (typeof e.source !== "string" || e.source === "") errs.push(`${t}: source missing`);
      if (typeof e.target !== "string" || e.target === "") errs.push(`${t}: target missing`);
      if (!GRAPH_EDGE_TYPES.has(e.type))
        errs.push(`${t}: type "${String(e.type)}" not in {${[...GRAPH_EDGE_TYPES].join("|")}}`);
      if (ids.size && typeof e.source === "string" && !ids.has(e.source))
        errs.push(`${t}: source "${e.source}" has no node`);
      if (ids.size && typeof e.target === "string" && !ids.has(e.target))
        errs.push(`${t}: target "${e.target}" has no node`);
    });
  }
  return errs.length
    ? bad(`${errs.length} GraphData violations (VIZ-031): ${cap(errs)}`)
    : ok(
        `nodes ${g.nodes.length} / edges ${g.edges.length} — id/type/label and source/target/type conform; ` +
          "all edge endpoints resolve to node ids"
      );
}

function checkToursShape() {
  const t = snap.tours;
  if (!t || typeof t !== "object") return bad("tours.json unavailable — see V01");
  if (!Array.isArray(t.tours)) return bad("tours.tours is not an array");
  const errs = [];
  if (t.tours.length < 3) errs.push(`${t.tours.length} tours < 3 required`);
  const stepCounts = [];
  t.tours.forEach((tour, i) => {
    const id = tour && typeof tour === "object" && typeof tour.id === "string" ? tour.id : `tour[${i}]`;
    if (!tour || typeof tour !== "object") {
      errs.push(`${id}: not an object`);
      return;
    }
    for (const k of ["id", "title", "description"])
      if (typeof tour[k] !== "string" || tour[k] === "") errs.push(`${id}: ${k} missing`);
    if (!Array.isArray(tour.steps)) {
      errs.push(`${id}: steps missing/not an array`);
      return;
    }
    stepCounts.push(tour.steps.length);
    if (tour.steps.length < 2) errs.push(`${id}: ${tour.steps.length} steps < 2 required`);
    tour.steps.forEach((st, j) => {
      const sid = `${id}.steps[${j}]`;
      if (!st || typeof st !== "object") {
        errs.push(`${sid}: not an object`);
        return;
      }
      for (const k of ["id", "title", "description", "route"])
        if (typeof st[k] !== "string" || st[k] === "") errs.push(`${sid}: ${k} missing`);
    });
  });
  const names = t.tours.map((x) => (x && typeof x.id === "string" ? x.id : "?")).join(", ");
  return errs.length
    ? bad(`${errs.length} tours.json violations (VIZ-025): ${cap(errs)}`)
    : ok(`${t.tours.length} tours ≥ 3 (${names}); steps per tour ${stepCounts.join("/")} all ≥ 2; step fields id/title/description/route conform`);
}

// ---------------------------------------------------- 2. coverage -----
function checkCoverageCounts() {
  const tree = snap.tree;
  const s = snap.stats;
  if (!tree || !Array.isArray(tree.root)) return bad("tree.json unavailable — see V01");
  if (!s || typeof s !== "object") return bad("stats.json unavailable — see V01");
  let files = 0;
  let dirs = 0;
  (function visit(nodes) {
    for (const n of nodes) {
      if (n && n.type === "dir") {
        dirs++;
        if (Array.isArray(n.children)) visit(n.children);
      } else files++;
    }
  })(tree.root);
  const errs = [];
  if (files !== s.totalFiles) errs.push(`tree.json file count ${files} ≠ stats.totalFiles ${s.totalFiles}`);
  if (dirs !== s.totalDirs) errs.push(`tree.json dir count ${dirs} ≠ stats.totalDirs ${s.totalDirs}`);
  return errs.length
    ? bad(errs.join("; "))
    : ok(`tree.json walks to ${files} files / ${dirs} dirs — both === stats.totalFiles (${s.totalFiles}) / stats.totalDirs (${s.totalDirs})`);
}

function checkCoverageHistory() {
  const cj = snap.commits;
  const s = snap.stats;
  if (!cj || !Array.isArray(cj.commits)) return bad("commits.json unavailable — see V01");
  if (!s || typeof s !== "object") return bad("stats.json unavailable — see V01");
  const errs = [];
  if (cj.commits.length !== s.totalCommits)
    errs.push(`commits.json length ${cj.commits.length} ≠ stats.totalCommits ${s.totalCommits}`);
  const churn = Array.isArray(s.churnTop) ? s.churnTop : [];
  const zero = churn.filter((e) => !(e && typeof e.commits === "number" && e.commits >= 1));
  if (zero.length)
    errs.push(`${zero.length} churnTop entries have commits < 1: ${cap(zero.map((e) => e?.path ?? "?"))}`);
  return errs.length
    ? bad(errs.join("; "))
    : ok(`commits ${cj.commits.length} === stats.totalCommits ${s.totalCommits}; churnTop ${churn.length} entries all have commits ≥ 1`);
}

function checkPromptsRegister() {
  if (!fs.existsSync(PROMPTS_DIR))
    return bad(`prompts dir not found: ${rel(PROMPTS_DIR)} (expected ../prompts/viz next to the viz app)`);
  const found = [];
  for (const f of walkFiles(PROMPTS_DIR)) if (path.basename(f) === "prompt.md") found.push(rel(f));
  if (found.length !== EXPECTED_PROMPTS)
    return bad(
      `found ${found.length} prompt.md under ${rel(PROMPTS_DIR)}, expected exactly ${EXPECTED_PROMPTS} (register drift): ${cap(found)}`
    );
  return ok(`${found.length}/${EXPECTED_PROMPTS} prompt.md files present under ../prompts/viz (exact register match)`);
}

function checkLearnDecks() {
  const contentDir = path.join(VIZ_ROOT, "content", "decks");
  const publicDir = path.join(VIZ_ROOT, "public", "decks");
  const mdCount = countFiles(contentDir, (f) => f.endsWith(".md"));
  const publicCount = countFiles(publicDir, () => true);
  const manifestCandidates = [
    path.join(contentDir, "decks.manifest.json"), // documented layout (VIZ-030 §8)
    path.join(contentDir, "decks.json"),
    path.join(VIZ_ROOT, "content", "decks.json"),
    path.join(publicDir, "decks.json"),
    path.join(publicDir, "decks.manifest.json"),
    path.join(VIZ_ROOT, "public", "decks.json"),
  ];
  let manifest = null;
  let decks = null;
  for (const m of manifestCandidates) {
    if (!fs.existsSync(m)) continue;
    try {
      const parsed = JSON.parse(fs.readFileSync(m, "utf8"));
      const arr = Array.isArray(parsed) ? parsed : parsed?.decks;
      if (Array.isArray(arr)) {
        manifest = m;
        decks = arr;
        break;
      }
    } catch {
      /* try next candidate */
    }
  }
  const errs = [];
  if (mdCount < MIN_DECKS) errs.push(`content/decks: ${mdCount} md file(s) < ${MIN_DECKS}`);
  if (publicCount < MIN_DECKS) errs.push(`public/decks: ${publicCount} file(s) < ${MIN_DECKS}`);
  if (!manifest)
    errs.push("no decks manifest found (tried decks.manifest.json / decks.json under content/decks, content, public/decks, public)");
  else if (decks.length < MIN_DECKS) errs.push(`${rel(manifest)}: ${decks.length} entries < ${MIN_DECKS}`);
  else {
    const badEntries = decks.filter(
      (d) => !d || typeof d !== "object" || !(typeof d.id === "string" || typeof d.title === "string")
    );
    if (badEntries.length) errs.push(`${rel(manifest)}: ${badEntries.length} entries lack id/title`);
  }
  return errs.length
    ? bad(errs.join("; "))
    : ok(
        `content/decks: ${mdCount} md ≥ ${MIN_DECKS}; public/decks: ${publicCount} files ≥ ${MIN_DECKS}; ` +
          `${rel(manifest)}: ${decks.length} deck entries`
      );
}

// ------------------------------------------------------- 3. source -----
function checkSourceComplete() {
  const missing = SOURCE_FILES.filter((f) => !fs.existsSync(path.join(VIZ_ROOT, f)));
  return missing.length
    ? bad(`missing ${missing.length}/${SOURCE_FILES.length} key source files: ${missing.join(", ")}`)
    : ok(`all ${SOURCE_FILES.length} key source files present (routes, nav shell, brand/types libs, snapshot script)`);
}

// -------------------------------------------------- 4. a11y static -----
function checkUseClient() {
  const src = sourceFiles([".tsx", ".ts"]);
  if (src.length === 0)
    return bad("no .tsx/.ts source files under app/ or components/ — source incomplete (see V11)");
  // Interactive-component name heuristic: the known client-only surfaces
  // (virtualized tree, GSAP timeline, cobe globe, reveal.js decks, nav shell).
  const CANDIDATE = /(file[-_]?tree|timeline|globe|deck|reveal|app[-_]?shell|shell|nav|tour)/i;
  const candidates = src.filter((f) => CANDIDATE.test(path.basename(f)));
  if (candidates.length === 0)
    return bad(
      "no interactive component candidates found under app/ or components/ " +
        "(expected names matching file-tree|timeline|globe|deck|reveal|app-shell|nav|tour)"
    );
  const missing = candidates.filter((f) => !/["']use client["']/.test(readText(f) ?? ""));
  return missing.length
    ? bad(`${missing.length}/${candidates.length} interactive components lack "use client": ${cap(missing.map(rel))}`)
    : ok(`${candidates.length}/${candidates.length} interactive components carry "use client" (${cap(candidates.map(rel), 4)})`);
}

function checkReducedMotion() {
  const css = readText(GLOBALS_CSS);
  if (css === null) return bad("app/globals.css not found/readable");
  const hits = (css.match(/prefers-reduced-motion/g) ?? []).length;
  return hits > 0
    ? ok(`prefers-reduced-motion present in app/globals.css (${hits}×)`)
    : bad(`prefers-reduced-motion media query missing from app/globals.css (VIZ-014 static a11y requirement)`);
}

function checkShellA11y() {
  const expected = path.join(VIZ_ROOT, "components", "nav", "app-shell.tsx");
  const shells = fs.existsSync(expected) ? [expected] : findComponents(/app[-_]?shell/i);
  if (shells.length === 0) return bad("app-shell component not found (expected components/nav/app-shell.tsx)");
  const problems = [];
  for (const f of shells) {
    const c = readText(f) ?? "";
    if (!/skip/i.test(c)) problems.push(`${rel(f)}: skip link missing`);
    if (!/<main[\s>]/.test(c) && !/role=["']main["']/.test(c)) problems.push(`${rel(f)}: main landmark missing`);
  }
  return problems.length
    ? bad(problems.join("; "))
    : ok(`${cap(shells.map(rel))}: skip link and main landmark present`);
}

function checkTreeRole() {
  const trees = findComponents(/file[-_]?tree/i);
  if (trees.length === 0) return bad('file-tree component not found under app/ or components/');
  const problems = trees.filter((f) => !/role=["']tree["']/.test(readText(f) ?? ""));
  return problems.length
    ? bad(`${cap(problems.map(rel))} missing role="tree"`)
    : ok(`${trees.length} file-tree component(s) expose role="tree" (${cap(trees.map(rel), 3)})`);
}

/** Warn-level only — never affects the exit code (per VIZ-024 task spec). */
function checkChartsA11y() {
  const page = path.join(VIZ_ROOT, "app", "page.tsx");
  if (!fs.existsSync(page))
    return soft('app/page.tsx not found — chart a11y (aria-label / role="img") not checkable yet (warn-only)');
  const c = readText(page) ?? "";
  return /aria-label|role=["']img["']/.test(c)
    ? ok('app/page.tsx mentions aria-label / role="img" for charts')
    : soft('app/page.tsx has no aria-label / role="img" mention — add chart a11y (warn-only; manual pass per VIZ-014)');
}

// -------------------------------------------------- 5. no-hex drift -----
function checkNoHex() {
  const violations = [];
  let scanned = 0;
  for (const d of ["app", "components"]) {
    const dir = path.join(VIZ_ROOT, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of walkFiles(dir)) {
      if (HEX_EXEMPT.has(f)) continue;
      const text = readText(f);
      if (text === null) continue;
      scanned++;
      const re = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})(?![0-9a-fA-F])/g;
      let m;
      while ((m = re.exec(text)) !== null) {
        const prev = m.index > 0 ? text[m.index - 1] : "";
        if (/[0-9A-Za-z]/.test(prev)) continue; // embedded in a longer token — not a color literal
        const line = text.slice(0, m.index).split("\n").length;
        violations.push(`${rel(f)}:${line} ${m[0]}`);
      }
    }
  }
  return violations.length
    ? bad(
        `${violations.length} hardcoded hex color(s) outside lib/brand.ts + app/globals.css (VIZ-017 single-source rule): ${cap(violations)}`
      )
    : ok(
        `no hardcoded hex in app/ + components/ (${scanned} file(s) scanned; hex tokens live only in lib/brand.ts and app/globals.css)`
      );
}

// ------------------------------------------------------------- checks -----
/**
 * Link-existence gate (V18) — regression guard for the broken markdown links
 * the content-accuracy critic found in the root README and the learning decks.
 * Scans markdown link targets and backtick-quoted repo paths in the root
 * README, viz/README.md and viz/content/decks/*.md and asserts each resolves
 * on disk.
 *
 * Known-explanatory exceptions: deck-01 documents the README's abbreviated
 * paths in prose; those are listed explicitly rather than silently skipped.
 */
const LINK_EXCEPTIONS = new Set([
  "docs/program/tbs/PROGRAM_BRIEF.md",
  "docs/program/plan/PLAN.md",
  "docs/governance/unconsolidated/README.md",
]);

function checkLinksResolve() {
  const repoRoot = path.resolve(VIZ_ROOT, "..");
  const targets = [
    path.join(repoRoot, "README.md"),
    path.join(VIZ_ROOT, "README.md"),
    ...fs
      .readdirSync(path.join(VIZ_ROOT, "content", "decks"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => path.join(VIZ_ROOT, "content", "decks", f)),
  ];

  const broken = [];
  let scanned = 0;

  for (const file of targets) {
    if (!fs.existsSync(file)) continue;
    const text = readText(file);
    if (text === null) continue;
    const found = new Set();
    // markdown link targets: ](path)
    for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) found.add(m[1]);
    // backtick-quoted paths that look like repo paths (contain a / and a file extension)
    for (const m of text.matchAll(/`([\w./-]+\/[\w./-]+\.[a-z]{2,4})`/g)) found.add(m[1]);

    for (const raw of found) {
      let t = raw.trim();
      if (!t || t.startsWith("http") || t.startsWith("#") || t.startsWith("mailto:")) continue;
      t = t.split("#")[0];
      if (!t || !/[\w-]+\.[a-z]{2,4}$/i.test(t)) continue; // not a file path
      if (LINK_EXCEPTIONS.has(t)) continue; // documented explanatory reference
      scanned++;
      // Resolve relative to the repo root AND to the referring file's own
      // directory — viz/README.md uses file-relative links ("../REGISTRIES.md"
      // style), the root README uses repo-relative ones.
      const candidates = [
        path.resolve(repoRoot, t),
        path.resolve(path.dirname(file), t),
        path.resolve(VIZ_ROOT, t),
      ];
      if (!candidates.some((c) => fs.existsSync(c))) broken.push(`${rel(file)} → ${t}`);
    }
  }

  return broken.length
    ? bad(`${broken.length} unresolved markdown link/path claim(s): ${cap(broken)}`)
    : ok(`all markdown link + backtick path claims resolve (${scanned} checked across ${targets.length} file(s))`);
}

/**
 * Feature-contract gate (V19) — the functional-completeness critic found that
 * the harness passed 17/17 while checking NO feature-level contract, so a
 * missing ⌘K palette, an unreachable /api/explain and orphan tours all sailed
 * through. This asserts that each promised feature is actually PRESENT and
 * WIRED, not merely that its data file parses.
 */
function checkFeatureContracts() {
  const repoRoot = path.resolve(VIZ_ROOT, "..");
  const missing = [];

  const need = (rel, hint) => {
    if (!fs.existsSync(path.join(VIZ_ROOT, rel))) missing.push(`${rel} (${hint})`);
  };
  const needRepo = (rel, hint) => {
    if (!fs.existsSync(path.join(repoRoot, rel))) missing.push(`${rel} (${hint})`);
  };
  const contains = (rel, needle, hint) => {
    const p = path.join(VIZ_ROOT, rel);
    if (!fs.existsSync(p)) return;
    const t = readText(p);
    if (t === null || !t.includes(needle)) missing.push(`${rel} lacks "${needle}" (${hint})`);
  };
  /** Inverted check: the file MUST NOT contain the needle (e.g. placeholder copy). */
  const lacks = (rel, needle, hint) => {
    const p = path.join(VIZ_ROOT, rel);
    if (!fs.existsSync(p)) return;
    const t = readText(p);
    if (t !== null && t.includes(needle)) missing.push(`${rel} still contains "${needle}" (${hint})`);
  };

  // FC-01 ⌘K command palette — present AND key-handled AND mounted.
  need("components/ui/command.tsx", "FC-01 shadcn command primitives");
  need("components/nav/command-palette.tsx", "FC-01 palette component");
  contains("components/nav/command-palette.tsx", "metaKey", "FC-01 ⌘K handler");
  contains("components/nav/command-palette.tsx", "ctrlKey", "FC-01 Ctrl+K handler");
  contains("components/nav/app-shell.tsx", "CommandPalette", "FC-01 palette must be mounted in the shell");

  // FC-02 /api/explain must have a UI caller.
  need("components/explain/explain-panel.tsx", "FC-02 explain UI");

  // FC-03 guided tours must have a UI consumer.
  need("components/learn/tour-player.tsx", "FC-03 tour player");
  need("app/tours/page.tsx", "FC-03 tours route");

  // FC-12 the reduced-motion switch must have a WRITER.
  need("components/nav/reduced-motion-toggle.tsx", "FC-12 reduced-motion toggle");
  contains("components/nav/reduced-motion-toggle.tsx", "viz-reduced-motion", "FC-12 must write the key reveal-deck.tsx reads");

  // FC-04 council→prompts-dir mapping must resolve on disk.
  const graphPath = path.join(VIZ_ROOT, "public", "snapshots", "graph.json");
  if (fs.existsSync(graphPath)) {
    let g = null;
    try {
      g = JSON.parse(fs.readFileSync(graphPath, "utf8"));
    } catch {}
    if (!g || !g.promptsDirs) {
      missing.push("public/snapshots/graph.json lacks promptsDirs (FC-04 council link mapping)");
    } else {
      const dirs = [];
      for (const v of Object.values(g.promptsDirs)) {
        if (typeof v === "string") dirs.push(v);
        else if (v && typeof v === "object") dirs.push(...Object.values(v).filter((x) => typeof x === "string"));
      }
      for (const d of dirs) {
        if (!fs.existsSync(path.join(repoRoot, "prompts", "stremiium", d))) {
          missing.push(`graph.json promptsDirs → prompts/stremiium/${d} does not exist (FC-04)`);
        }
      }
    }
  } else {
    missing.push("public/snapshots/graph.json missing (FC-04)");
  }

  // FC-05 the zone filter must FILTER, not merely dim.
  const treeSrc = (() => {
    const p = path.join(VIZ_ROOT, "components", "explorer", "file-tree.tsx");
    return fs.existsSync(p) ? readText(p) : null;
  })();
  if (treeSrc && (/\.filter\(/.test(treeSrc) === false || treeSrc.includes("opacity-40"))) {
    missing.push("components/explorer/file-tree.tsx zone filter is dim-only or never filters rows (FC-05)");
  }

  // FC-06 the last-commit chip must be populated server-side.
  contains("app/api/file/route.ts", "lastCommit: null", "FC-06 lastCommit hardcoded null — chip unreachable");

  // FC-07 / FC-13 no user-visible placeholder copy.
  for (const rel of ["app/page.tsx", "app/explorer/view3d/page.tsx"]) {
    lacks(rel, "Placeholder hero", "FC-07 placeholder hero copy");
    lacks(rel, "coming in this build", "FC-13 stale 3D fallback copy");
  }

  // FC-08 route-level error boundaries + not-found.
  for (const r of ["commits", "councils", "globe", "learn"]) {
    need(`app/${r}/error.tsx`, "FC-08 route error boundary");
  }
  need("app/not-found.tsx", "FC-08 custom 404");

  // FC-10 route transition.
  need("app/template.tsx", "FC-10 route transition template");

  // The per-commit detail route.
  need("app/commits/[sha]/page.tsx", "FC-01 per-commit detail route");

  return missing.length
    ? bad(`${missing.length} promised feature contract(s) unmet: ${cap(missing)}`)
    : ok("all promised features present and wired (palette, explain, tours, motion switch, council links, zone filter, last-commit, error boundaries, 404, transition)");
}

/**
 * V20 — stale dist reference gate (permanent guard against the recurring
 * dev-server SyntaxErrors). next build with an alternate NEXT_DIST_DIR
 * rewrites next-env.d.ts / tsconfig.json to point at that dir; when it is
 * deleted the dev server recompiles against it and serves a broken chunk.
 */
function checkNoStaleDistRefs() {
  // Only config that the dev server WATCHES can be poisoned by a stale dist
  // path. Build scripts that merely mention cleanup names are exempt.
  const files = ["next-env.d.ts", "tsconfig.json"];
  const refs = [];
  for (const f of files) {
    const p = path.join(VIZ_ROOT, f);
    if (!fs.existsSync(p)) continue;
    const text = readText(p);
    if (text === null) continue;
    for (const m of text.matchAll(/\.next-[A-Za-z0-9_-]+/g)) {
      const dir = m[0];
      if (dir === ".next-dev") continue; // canonical live dist
      if (!fs.existsSync(path.join(VIZ_ROOT, dir))) {
        refs.push(`${f}: ${dir} (missing on disk)`);
      }
    }
  }
  return refs.length
    ? bad(`stale dist reference(s) that cause dev-server SyntaxErrors: ${cap(refs)}`)
    : ok("no stale dist references in dev config/build scripts");
}

const CHECKS = [
  { id: "V20", name: "stability/no-stale-dist", area: "source", cls: 1, owner: "VIZ-023", fn: checkNoStaleDistRefs },
  { id: "V01", name: "snapshots/parse", area: "snapshots", cls: 1, owner: "VIZ-022", fn: checkSnapshotsParse },
  { id: "V02", name: "snapshots/tree-shape", area: "snapshots", cls: 1, owner: "VIZ-022", fn: checkTreeShape },
  { id: "V03", name: "snapshots/commits-shape", area: "snapshots", cls: 1, owner: "VIZ-022", fn: checkCommitsShape },
  { id: "V04", name: "snapshots/stats-shape", area: "snapshots", cls: 1, owner: "VIZ-022", fn: checkStatsShape },
  { id: "V05", name: "snapshots/graph-shape", area: "snapshots", cls: 1, owner: "VIZ-031", fn: checkGraphShape },
  { id: "V06", name: "snapshots/tours-shape", area: "snapshots", cls: 1, owner: "VIZ-025", fn: checkToursShape },
  { id: "V07", name: "coverage/tree-vs-stats", area: "coverage", cls: 2, owner: "VIZ-022", fn: checkCoverageCounts },
  { id: "V08", name: "coverage/history-churn", area: "coverage", cls: 2, owner: "VIZ-022", fn: checkCoverageHistory },
  { id: "V09", name: "coverage/prompts-register", area: "coverage", cls: 2, owner: "SC-orchestration", fn: checkPromptsRegister },
  { id: "V10", name: "coverage/learn-decks", area: "coverage", cls: 2, owner: "VIZ-030", fn: checkLearnDecks },
  { id: "V11", name: "source/complete", area: "source", cls: 2, owner: "VIZ-020", fn: checkSourceComplete },
  { id: "V12", name: "a11y/use-client", area: "a11y", cls: 3, owner: "VIZ-020", fn: checkUseClient },
  { id: "V13", name: "a11y/reduced-motion", area: "a11y", cls: 3, owner: "VIZ-014", fn: checkReducedMotion },
  { id: "V14", name: "a11y/shell-skip-main", area: "a11y", cls: 3, owner: "VIZ-014", fn: checkShellA11y },
  { id: "V15", name: "a11y/file-tree-role", area: "a11y", cls: 3, owner: "VIZ-014", fn: checkTreeRole },
  { id: "V16", name: "a11y/charts-aria (warn-only)", area: "a11y", cls: null, owner: "VIZ-014", fn: checkChartsA11y },
  { id: "V17", name: "nohex/drift", area: "source", cls: 1, owner: "VIZ-017", fn: checkNoHex },
  { id: "V18", name: "links/resolve", area: "source", cls: 1, owner: "VIZ-024", fn: checkLinksResolve },
  { id: "V19", name: "features/contract", area: "source", cls: 1, owner: "VIZ-024", fn: checkFeatureContracts },
];

// --------------------------------------------------------------- main -------
console.log(`viz verify — ${VIZ_ROOT}`);
console.log(`snapshots dir: ${rel(SNAP_DIR)}`);
console.log("");

for (const c of CHECKS) run(c);

const passCount = results.filter((r) => r.status === "pass").length;
const failResults = results.filter((r) => r.status === "fail");
const warnCount = results.filter((r) => r.status === "warn").length;
const failingClasses = [...new Set(failResults.map((r) => r.cls).filter((c) => typeof c === "number"))].sort(
  (a, b) => a - b
);

let exitCode = 0;
if (exceptionCount > 0 || failResults.some((r) => r.cls === 4)) exitCode = 4;
else if (failingClasses.length > 0) exitCode = failingClasses[0]; // lowest failing class = most fundamental
if (exitCode === 0 && failResults.length > 0) exitCode = 4; // unclassified failure — treat as run defect

const CLASS_NAMES = {
  1: "shape/contract errors (snapshot shapes, no-hex drift)",
  2: "coverage errors (counts, prompts register, decks, source)",
  3: "a11y static check failures",
  4: "unexpected exception — run incomplete",
};

console.log("");
console.log("==== verify-viz summary ====");
console.log(`${passCount} PASS · ${failResults.length} FAIL · ${warnCount} WARN (${results.length} checks)`);
for (const cls of [1, 2, 3, 4]) {
  const ids = failResults.filter((r) => r.cls === cls).map((r) => r.checkId);
  if (ids.length) console.log(`  exit class ${cls}: ${CLASS_NAMES[cls]} → ${ids.join(", ")}`);
}
if (exitCode === 0 && warnCount > 0) console.log("  warnings never affect the exit code");
const exitLabel = exitCode === 0 ? "all checks pass" : CLASS_NAMES[exitCode];
console.log(`exit ${exitCode} — ${exitLabel}`);

if (REPORT_FILE) {
  const payload = {
    generatedAt: new Date().toISOString(),
    vizRoot: VIZ_ROOT,
    snapshotsDir: SNAP_DIR,
    exitCode,
    totals: { pass: passCount, fail: failResults.length, warn: warnCount },
    results,
  };
  try {
    fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
    fs.writeFileSync(REPORT_FILE, JSON.stringify(payload, null, 2) + "\n");
    console.log(`report: ${rel(REPORT_FILE)}`);
  } catch (e) {
    console.error(`report write failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

process.exit(exitCode);
