#!/usr/bin/env node
/**
 * loyalty-teardown.mjs — loyalty/rewards SDK & partner signal teardown.
 *
 * Given a bank/entity folder, recursively scans the web-stack / app-surface
 * JSON produced by this toolkit (or raw REA output saved to disk) and projects
 * loyalty/rewards signals into a "loyalty mechanics" view.
 *
 * It does NOT fetch anything and does NOT invent signals: every hit is a literal
 * substring/pattern observed in a local JSON Evidence file. If no JSON source is
 * found the run fails closed (status: no_source) and says so explicitly.
 *
 * Usage:
 *   node loyalty-teardown.mjs --entity fnb --from research/banks/fnb [--out dir]
 *   node loyalty-teardown.mjs --entity capitec                 # auto-locates folder under /workspace/research
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOLKIT_ROOT = resolve(__dirname, '..');
const RESEARCH_ROOT = process.env.RESEARCH_ROOT || '/workspace/research';

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const entity = arg('entity');
let from = arg('from');
const outDir = arg('out', resolve(TOOLKIT_ROOT, 'out/loyalty'));

if (!entity && !from) {
  console.error('usage: node loyalty-teardown.mjs --entity <name> [--from <dir>] [--out <dir>]');
  process.exit(2);
}

// ---------------------------------------------------------------------------
// Signal dictionary — literal/pattern loyalty signals, grouped by role.
// ---------------------------------------------------------------------------
const SIGNALS = [
  // Named loyalty programmes (the bank's own or partners')
  { category: 'programme', id: 'ebucks', vendor: 'eBucks (FNB)', re: /\bebucks\b/i },
  { category: 'programme', id: 'ucount', vendor: 'UCount (Standard Bank)', re: /\bu-?count\b/i },
  { category: 'programme', id: 'greenbacks', vendor: 'Greenbacks (Nedbank)', re: /\bgreenbacks\b/i },
  { category: 'programme', id: 'discovery-miles-vitality', vendor: 'Discovery Miles / Vitality', re: /discovery\s*miles|vitality/i },
  { category: 'programme', id: 'smart-shopper', vendor: 'Smart Shopper (Pick n Pay)', re: /smart\s*shopper/i },
  { category: 'programme', id: 'thank-u', vendor: 'Thank U (Absa)', re: /thank\s*u\b|thankyou/i },
  { category: 'programme', id: 'live-better', vendor: 'Capitec Live Better', re: /live\s*better|\blb\b/i },
  { category: 'programme', id: 'generic-loyalty', vendor: null, re: /\bloyalty\b/i },
  { category: 'programme', id: 'generic-rewards', vendor: null, re: /\brewards?\b/i },
  // Mechanics
  { category: 'mechanic', id: 'cashback', vendor: null, re: /cash\s*-?\s*back/i },
  { category: 'mechanic', id: 'points', vendor: null, re: /\bpoints?\b/i },
  { category: 'mechanic', id: 'tiering', vendor: null, re: /\btier(s|ed|ing)?\b/i },
  { category: 'mechanic', id: 'redemption', vendor: null, re: /redeem|redemption/i },
  { category: 'mechanic', id: 'discount', vendor: null, re: /\bdiscount/i },
  { category: 'mechanic', id: 'voucher', vendor: null, re: /voucher|coupon/i },
  { category: 'mechanic', id: 'roundup', vendor: null, re: /round[\s-]?up/i },
  // Partnership rails
  { category: 'partner', id: 'partner', vendor: null, re: /\bpartner(s|ship|ing)?\b/i },
  { category: 'partner', id: 'affiliate', vendor: null, re: /\baffiliate/i },
  { category: 'partner', id: 'coalition', vendor: null, re: /coalition/i },
  // Loyalty / marketing SDKs often shipped in apps
  { category: 'sdk', id: 'braze', vendor: 'Braze', re: /\bbraze\b/i },
  { category: 'sdk', id: 'firebase', vendor: 'Firebase', re: /\bfirebase\b/i },
  { category: 'sdk', id: 'amplitude', vendor: 'Amplitude', re: /\bamplitude\b/i },
  { category: 'sdk', id: 'optimizely', vendor: 'Optimizely', re: /\boptimizely\b/i },
  { category: 'sdk', id: 'adjust', vendor: 'Adjust', re: /\badjust\b/i },
  { category: 'sdk', id: 'appsflyer', vendor: 'AppsFlyer', re: /appsflyer/i },
  { category: 'sdk', id: 'onesignal', vendor: 'OneSignal', re: /onesignal/i },
  { category: 'sdk', id: 'airship', vendor: 'Airship', re: /\bairship\b/i },
  { category: 'sdk', id: 'salesforce', vendor: 'Salesforce Marketing Cloud', re: /salesforce|exacttarget/i },
];

// ---------------------------------------------------------------------------
// Source discovery
// ---------------------------------------------------------------------------
function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      walk(full, acc);
    } else if (e.isFile() && full.toLowerCase().endsWith('.json')) {
      acc.push(full);
    }
  }
  return acc;
}

function locateEntityFolder(name) {
  const hits = [];
  const stack = [RESEARCH_ROOT];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      if (!e.isDirectory() || e.name.startsWith('.')) continue;
      const full = join(dir, e.name);
      if (e.name.toLowerCase() === name.toLowerCase()) hits.push(full);
      stack.push(full);
    }
  }
  return hits[0] || null;
}

if (!from && entity) from = locateEntityFolder(entity);
if (!from) {
  mkdirSync(outDir, { recursive: true });
  const fail = {
    tool: 'loyalty-teardown', entity: entity || null, status: 'no_source',
    generatedAt: new Date().toISOString(),
    note: 'FAIL-CLOSED: no source folder supplied and none matched the entity name under RESEARCH_ROOT. Provide --from <folder>.',
    signals: [], provenance: 'streamium-toolkit',
  };
  writeFileSync(resolve(outDir, 'loyalty-mechanics.json'), JSON.stringify(fail, null, 2));
  console.error('[loyalty-teardown] FAIL-CLOSED: no source folder found. Provide --from <folder>.');
  process.exit(3);
}

const files = walk(from);
mkdirSync(outDir, { recursive: true });

if (files.length === 0) {
  const fail = {
    tool: 'loyalty-teardown', entity: entity || basename(from), sourceRoot: from, status: 'no_source',
    generatedAt: new Date().toISOString(),
    note: 'FAIL-CLOSED: no .json Evidence files found under source folder. Run web-stack-recon / app-surface-recon first.',
    signals: [], provenance: 'streamium-toolkit',
  };
  writeFileSync(resolve(outDir, 'loyalty-mechanics.json'), JSON.stringify(fail, null, 2));
  console.error(`[loyalty-teardown] FAIL-CLOSED: no .json sources under ${from}.`);
  process.exit(3);
}

// ---------------------------------------------------------------------------
// Scan
// ---------------------------------------------------------------------------
const results = SIGNALS.map((s) => ({ ...s, hits: 0, files: new Set() }));
let totalBytes = 0;
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  totalBytes += text.length;
  for (const r of results) {
    const m = text.match(new RegExp(r.re.source, r.re.flags.includes('g') ? r.re.flags : r.re.flags + 'g'));
    if (m && m.length) { r.hits += m.length; r.files.add(file.replace(from, '.').replace(/^\.\//, '')); }
  }
}

const signals = results
  .filter((r) => r.hits > 0)
  .map((r) => ({ category: r.category, id: r.id, vendor: r.vendor, hits: r.hits, files: [...r.files].sort() }))
  .sort((a, b) => b.hits - a.hits);

const entityName = entity || basename(from);
const report = {
  tool: 'loyalty-teardown',
  entity: entityName,
  sourceRoot: from,
  status: signals.length ? 'signals_found' : 'no_signals',
  generatedAt: new Date().toISOString(),
  filesScanned: files.map((f) => f.replace(from, '.').replace(/^\.\//, '')),
  bytesScanned: totalBytes,
  signals,
  byCategory: group(signals, 'category'),
  note: 'Literal/pattern matches observed in local JSON Evidence only. Absence of a signal is NOT proof of absence.',
  provenance: 'streamium loyalty-teardown; no fetching, no synthetic values',
};

function group(arr, key) {
  const out = {};
  for (const x of arr) (out[x[key]] ||= []).push(x);
  return out;
}

writeFileSync(resolve(outDir, 'loyalty-mechanics.json'), JSON.stringify(report, null, 2));

const md = [];
md.push(`# Loyalty mechanics — ${entityName}`);
md.push('');
md.push(`> Source: \`${from}\` · ${files.length} JSON file(s) · ${totalBytes.toLocaleString()} chars scanned.`);
md.push(`> Status: **${report.status}**. Literal/pattern matches only; absence ≠ absence.`);
md.push('');
if (signals.length === 0) {
  md.push('_No loyalty/rewards signals matched the dictionary. This may mean the source carries none,');
  md.push('or that the web-stack/app-surface JSON has not been generated yet._');
  md.push('');
} else {
  md.push('## Signals');
  md.push('');
  md.push('| Category | Signal | Vendor | Hits | Files |');
  md.push('|---|---|---|---|---|');
  for (const s of signals) md.push(`| ${s.category} | ${s.id} | ${s.vendor || '—'} | ${s.hits} | ${s.files.join(', ')} |`);
  md.push('');
  md.push('## By category');
  md.push('');
  for (const [cat, items] of Object.entries(report.byCategory)) {
    md.push(`### ${cat}`);
    md.push('');
    for (const s of items) md.push(`- **${s.id}**${s.vendor ? ` (${s.vendor})` : ''} — ${s.hits} hit(s) in ${s.files.join(', ')}`);
    md.push('');
  }
}
md.push('## Method');
md.push('');
md.push('Scan is a literal dictionary pass (`scripts/loyalty-teardown.mjs`) over JSON files under the');
md.push('entity folder. Signals: programmes, mechanics, partner rails, and loyalty/marketing SDKs.');
md.push('');
writeFileSync(resolve(outDir, 'loyalty-mechanics.md'), md.join('\n'));

console.log(`[loyalty-teardown] ${entityName}: ${signals.length} signal(s) across ${files.length} file(s) → ${outDir}/loyalty-mechanics.{md,json}`);
