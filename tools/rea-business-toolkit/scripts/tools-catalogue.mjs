#!/usr/bin/env node
/**
 * tools-catalogue.mjs — REA tool inventory → business-question catalogue.
 *
 * Runs `node /workspace/rea/scripts/rea.mjs --llms` and `--help`, parses the
 * full command inventory, then maps every REA command to the business-question
 * categories defined in queries/business-question-matrix.md.
 *
 * Outputs:
 *   - TOOLS-CATALOGUE.md                         (mapping REA tools → business questions)
 *   - out/catalogue/rea-llms.txt                 (raw --llms capture)
 *   - out/catalogue/rea-help.txt                 (raw --help capture)
 *   - out/catalogue/tools-catalogue.json         (machine-readable mapping)
 *
 * Fail-closed: if REA `--llms` cannot be run, it exits non-zero and writes nothing
 * beyond the raw error capture.
 *
 * Usage:
 *   node tools-catalogue.mjs [--out TOOLS-CATALOGUE.md] [--outdir out/catalogue]
 */
import { spawnSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOLKIT_ROOT = resolve(__dirname, '..');

const REA_ROOT = process.env.REA_ROOT || '/workspace/rea';
const REA = resolve(REA_ROOT, 'scripts/rea.mjs');

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const outMd = arg('out', resolve(TOOLKIT_ROOT, 'TOOLS-CATALOGUE.md'));
const outDir = arg('outdir', resolve(TOOLKIT_ROOT, 'out/catalogue'));

function run(args) {
  const res = spawnSync(process.execPath, [REA, ...args], {
    cwd: REA_ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, env: process.env,
  });
  return { code: res.status, stdout: res.stdout ?? '', stderr: res.stderr ?? '' };
}

// ---------------------------------------------------------------------------
// 1. Capture REA's own manifest
// ---------------------------------------------------------------------------
const llms = run(['--llms']);
const help = run(['--help']);
const versionRes = run(['--version']);

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'rea-llms.txt'), llms.stdout);
writeFileSync(resolve(outDir, 'rea-help.txt'), help.stdout);

if (llms.code !== 0 || !llms.stdout.trim()) {
  console.error('[tools-catalogue] FAIL-CLOSED: `rea --llms` produced no manifest.');
  console.error(`[tools-catalogue] stderr: ${llms.stderr.slice(0, 500)}`);
  writeFileSync(resolve(outDir, 'rea-llms.error.txt'), `${llms.stdout}\n${llms.stderr}`);
  process.exit(3);
}

const reaVersion = (versionRes.stdout.trim().match(/(\d+\.\d+\.\d+)/) || [, 'unknown'])[1];

// ---------------------------------------------------------------------------
// 2. Parse command inventory
// ---------------------------------------------------------------------------
const commands = new Map(); // name -> { name, signature, description }

// `--llms` markdown table: | `rea <name> <args>` | <description> |
for (const line of llms.stdout.split(/\r?\n/)) {
  const m = line.match(/^\|\s*`rea\s+([^`]+?)`\s*\|\s*(.*?)\s*\|\s*$/);
  if (!m) continue;
  const signature = m[1].trim();
  const name = signature.split(/\s+/)[0];
  commands.set(name, { name, signature, description: m[2].replace(/\s+/g, ' ').trim() });
}

// `--help` block: "  <name>   <description>" (fills any help-only commands)
for (const line of help.stdout.split(/\r?\n/)) {
  const m = line.match(/^ {2}([a-z][a-z0-9-]*)\s{2,}(.+?)\s*$/);
  if (!m) continue;
  const name = m[1];
  if (!commands.has(name)) commands.set(name, { name, signature: name, description: m[2].trim() });
}

const all = [...commands.values()].sort((a, b) => a.name.localeCompare(b.name));

// ---------------------------------------------------------------------------
// 3. Business-question categories (aligned to queries/business-question-matrix.md)
// ---------------------------------------------------------------------------
const CATEGORIES = [
  {
    id: 'web-stack', matrix: 'Q1', dept: 'Technology',
    question: 'Which web frameworks, CDNs, trackers and payment/identity vendors power the portal?',
    keywords: ['web', 'website', 'browser', 'page', 'bundle', 'screenshot', 'webmcp', 'session',
      'execution', 'dom', 'script', 'source-location', 'module-trace', 'http', 'network-capture',
      'capture-web', 'compare-web', 'source-map', 'link'],
  },
  {
    id: 'app-surface-js', matrix: 'Q1/Q3', dept: 'Technology',
    question: 'How is a desktop/Electron banking app built (module graph, IPC boundaries)?',
    keywords: ['javascript', 'electron', 'asar', 'fuse', 'runtime', 'export-shape'],
  },
  {
    id: 'mobile-sdk', matrix: 'Q2/Q14', dept: 'Technology',
    question: 'Which SDKs (fraud, KYC, core-banking, loyalty) ship in the mobile app?',
    keywords: ['android', 'apk', 'adb', 'apktool', 'jeb', 'jadx', 'dart', 'flutter', 'harmony',
      'resource', 'class', 'method', 'package', 'application-graph'],
  },
  {
    id: 'native-binary', matrix: 'Q3/Q10', dept: 'Technology',
    question: 'What does the native binary contain (symbols, strings, imports, functions)?',
    keywords: ['native', 'binary', 'decompile', 'function', 'instruction', 'xref', 'macho', 'swift',
      'gdb', 'rizin', 'frida', 'cutter', 'disassem', 'architectures', 'signature', 'dispatch',
      'bytes', 'procedure', 'segment', 'lldb', 'pwn', 'offset', 'layout'],
  },
  {
    id: 'managed-core-banking', matrix: 'Q3', dept: 'Technology',
    question: 'What core-banking / .NET (PE-CLI) stack is present?',
    keywords: ['managed', 'dotnet', 'cil', 'boundar', 'member'],
  },
  {
    id: 'runtime-language', matrix: 'Q3', dept: 'Technology',
    question: 'Which language runtime / VM produced the artifact?',
    keywords: ['go-binary', 'rust', 'wasm', 'evm', 'dart-aot', 'bytecode', 'solidity', 'flutter', 'demangle'],
  },
  {
    id: 'api-payments-rails', matrix: 'Q5', dept: 'Payments',
    question: 'Which payment rails and API endpoints are exposed (PayShap/RTC/QR)?',
    keywords: ['network-capture', 'capture-process', 'pcap', 'qlog', 'packet', 'endpoint', 'signal', 'decoder', 'recorded'],
  },
  {
    id: 'data-artifacts', matrix: 'Q3/Q10', dept: 'Technology',
    question: 'What structured data, firmware or captures exist inside the artifact?',
    keywords: ['sqlite', 'database', 'firmware', 'crash', 'extract', 'artifact', 'archive', 'plist',
      'asset-catalog', 'keyed', 'interface-builder', 'storyboard', 'nib', 'crash'],
  },
  {
    id: 'evidence-provenance', matrix: 'all', dept: 'Cross-cutting',
    question: 'How do we preserve Evidence provenance for citation?',
    keywords: ['evidence', 'compare', 'inspect-analysis-view', 'reconstruction', 'ledger', 'coverage', 'reference-source'],
  },
  {
    id: 'lifecycle-ops', matrix: 'all', dept: 'Cross-cutting',
    question: 'Is the analysis environment ready, configured and correctly identified?',
    keywords: ['doctor', 'capabilit', 'provider', 'setup', 'update', 'uninstall', 'completion', 'mcp',
      'config', 'client', 'identity', 'skill', 'install'],
  },
  {
    id: 'marketing-security', matrix: 'Q6/Q10', dept: 'Marketing/Security',
    question: 'Which analytics/tracker SDKs and security-posture signals exist?',
    keywords: ['string', 'search', 'entropy', 'certificate', 'token', 'permission', 'track', 'secret'],
  },
];

for (const c of CATEGORIES) c.commands = [];

const unassigned = [];
for (const cmd of all) {
  const haystack = `${cmd.name} ${cmd.description}`.toLowerCase();
  let matched = false;
  for (const cat of CATEGORIES) {
    if (cat.keywords.some((k) => haystack.includes(k))) {
      cat.commands.push(cmd);
      matched = true;
    }
  }
  if (!matched) unassigned.push(cmd);
}

// ---------------------------------------------------------------------------
// 4. Emit markdown + JSON
// ---------------------------------------------------------------------------
const esc = (s) => String(s).replace(/\|/g, '\\|');

const md = [];
md.push('# REA Tools → Business-Question Catalogue');
md.push('');
md.push(`> Generated by \`scripts/tools-catalogue.mjs\` against REA **v${reaVersion}** at \`${REA_ROOT}\`.`);
md.push('> REA answers *"how is this software built?"*; the categories below map each command to the');
md.push('> NeoBank **business question** it can evidence. See `queries/business-question-matrix.md`.');
md.push('');
md.push(`- REA commands discovered: **${all.length}** (from \`--llms\` + \`--help\`).`);
md.push(`- Business categories: **${CATEGORIES.length}**; commands mapped to ≥1 category: **${all.length - unassigned.length}**.`);
md.push(`- Unmapped commands: **${unassigned.length}**.`);
md.push('');
md.push('## Category → REA commands');
md.push('');
for (const cat of CATEGORIES) {
  md.push(`### ${cat.dept} — ${cat.question}  \`[${cat.matrix}]\``);
  md.push('');
  if (cat.commands.length === 0) {
    md.push('_No REA commands matched this category._');
    md.push('');
    continue;
  }
  md.push('| REA command | Usage | Description |');
  md.push('|---|---|---|');
  for (const c of cat.commands) {
    md.push(`| \`${c.name}\` | \`rea ${esc(c.signature)}\` | ${esc(c.description)} |`);
  }
  md.push('');
}

md.push('## Unmapped commands');
md.push('');
if (unassigned.length === 0) {
  md.push('_None._');
} else {
  md.push('| REA command | Description |');
  md.push('|---|---|');
  for (const c of unassigned) md.push(`| \`${c.name}\` | ${esc(c.description)} |`);
}
md.push('');

md.push('## Full command inventory');
md.push('');
md.push('| REA command | Usage | Description |');
md.push('|---|---|---|');
for (const c of all) md.push(`| \`${c.name}\` | \`rea ${esc(c.signature)}\` | ${esc(c.description)} |`);
md.push('');

writeFileSync(resolve(outMd), md.join('\n'));

const json = {
  tool: 'tools-catalogue',
  reaRoot: REA_ROOT,
  reaVersion,
  generatedAt: new Date().toISOString(),
  commandCount: all.length,
  categories: CATEGORIES.map((c) => ({
    id: c.id, matrix: c.matrix, dept: c.dept, question: c.question,
    commands: c.commands.map((x) => x.name),
  })),
  unmapped: unassigned.map((x) => x.name),
  provenance: 'rea --llms / --help → streamium category projection; descriptions are REA verbatim',
};
writeFileSync(resolve(outDir, 'tools-catalogue.json'), JSON.stringify(json, null, 2));

console.log(`[tools-catalogue] REA v${reaVersion}: ${all.length} commands; ${CATEGORIES.length} categories; ${unassigned.length} unmapped.`);
console.log(`[tools-catalogue] wrote ${outMd}`);
console.log(`[tools-catalogue] wrote ${outDir}/tools-catalogue.json`);
