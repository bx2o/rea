#!/usr/bin/env node
/**
 * pricing-diff.mjs — consolidate product / financial CSVs across the research tree.
 *
 * Reads every `products.csv`, `financials.csv` and `fees.csv` under a research
 * root and emits:
 *   - consolidated-products.csv   / consolidated-financials.csv / consolidated-fees.csv
 *   - pricing-diff.md             (comparison tables + Mermaid charts)
 *   - pricing-diff.json           (machine-readable summary)
 *
 * CSV values are copied verbatim (no invented numbers). No network access.
 *
 * Usage:
 *   node pricing-diff.mjs [--root /workspace/research] [--out dir]
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOLKIT_ROOT = resolve(__dirname, '..');

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const root = resolve(arg('root', '/workspace/research'));
const outDir = resolve(arg('out', resolve(TOOLKIT_ROOT, 'out/pricing')));
mkdirSync(outDir, { recursive: true });

// ---------------------------------------------------------------------------
// RFC4180-ish CSV parsing (handles quoted fields with embedded commas/newlines)
// ---------------------------------------------------------------------------
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  const s = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); field = ''; rows.push(row); row = []; }
    else field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0].trim() !== ''));
}

function toObjects(rows) {
  if (!rows.length) return { header: [], records: [] };
  const header = rows[0].map((h) => h.trim());
  const records = rows.slice(1).map((r) => {
    const o = {};
    header.forEach((h, i) => { o[h] = (r[i] ?? '').trim(); });
    return o;
  });
  return { header, records };
}

function csvEscape(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
function toCSV(header, rows) {
  const lines = [header.map(csvEscape).join(',')];
  for (const r of rows) lines.push(header.map((h) => csvEscape(r[h])).join(','));
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Discover datasets
// ---------------------------------------------------------------------------
const DATASETS = { products: [], financials: [], fees: [] };
function walk(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) { if (!e.name.startsWith('.')) walk(full); continue; }
    const lower = e.name.toLowerCase();
    const kind = lower === 'products.csv' ? 'products' : lower === 'financials.csv' ? 'financials' : lower === 'fees.csv' ? 'fees' : null;
    if (kind) DATASETS[kind].push(full);
  }
}
walk(root);

for (const k of Object.keys(DATASETS)) DATASETS[k].sort();

if (!DATASETS.products.length && !DATASETS.financials.length && !DATASETS.fees.length) {
  console.error(`[pricing-diff] FAIL-CLOSED: no products.csv/financials.csv/fees.csv found under ${root}.`);
  process.exit(3);
}

function deriveEntity(file) {
  // Entity = the folder directly above the dataset folder, e.g. research/banks/fnb/products/products.csv -> fnb
  const rel = relative(root, file).split(/[\\/]/);
  return rel.length >= 3 ? rel[rel.length - 3] : (rel[0] || 'unknown');
}

// ---------------------------------------------------------------------------
// Consolidate each dataset (union of headers, entity + source_file prepended)
// ---------------------------------------------------------------------------
const consolidated = {};
for (const [kind, files] of Object.entries(DATASETS)) {
  if (!files.length) continue;
  const headerUnion = [];
  const perFile = [];
  for (const file of files) {
    const { header, records } = toObjects(parseCSV(readFileSync(file, 'utf8')));
    for (const h of header) if (!headerUnion.includes(h)) headerUnion.push(h);
    perFile.push({ file, entity: deriveEntity(file), records });
  }
  const fullHeader = ['entity', 'source_file', ...headerUnion];
  const outRows = [];
  for (const { file, entity, records } of perFile) {
    for (const rec of records) outRows.push({ entity, source_file: relative(root, file), ...rec });
  }
  const csv = toCSV(fullHeader, outRows);
  const file = resolve(outDir, `consolidated-${kind}.csv`);
  writeFileSync(file, csv);
  consolidated[kind] = { files: files.length, rows: outRows.length, columns: fullHeader, entities: [...new Set(outRows.map((r) => r.entity))].sort(), outFile: file, outRows };
}

// ---------------------------------------------------------------------------
// Charts (Mermaid)
// ---------------------------------------------------------------------------
function sanitizeLabel(s) { return String(s).replace(/[^A-Za-z0-9_]/g, '_'); }

// cost-to-income by entity from financials (metric column = cost_to_income_ratio)
const cti = [];
const fin = consolidated.financials;
if (fin) {
  const byEntity = new Map();
  for (const r of fin.outRows) {
    const metric = (r.metric || r.metric_name || '').toLowerCase();
    if (metric === 'cost_to_income_ratio') {
      const val = parseNumeric(r.fy2025 || r.value || r['2025'] || Object.values(r).find((v) => /^\d+(\.\d+)?$/.test(v)));
      if (val != null && !byEntity.has(r.entity)) byEntity.set(r.entity, val);
    }
  }
  for (const [k, v] of byEntity) cti.push({ entity: k, value: v });
}
function parseNumeric(v) {
  if (v == null) return null;
  const m = String(v).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

const charts = [];

// Chart 1: cost-to-income bar
if (cti.length) {
  const labels = cti.map((x) => `"${sanitizeLabel(x.entity)}"`).join(', ');
  const values = cti.map((x) => x.value).join(', ');
  const max = Math.max(60, Math.ceil(Math.max(...cti.map((x) => x.value)) / 10) * 10);
  charts.push([
    '```mermaid',
    'xychart-beta',
    '    title "Cost-to-income ratio (%) by entity"',
    `    x-axis [${labels}]`,
    `    y-axis "%" 0 --> ${max}`,
    `    bar [${values}]`,
    '```',
  ].join('\n'));
}

// Chart 2: product rows by entity (pie)
const prod = consolidated.products;
if (prod) {
  const counts = new Map();
  for (const r of prod.outRows) counts.set(r.entity, (counts.get(r.entity) || 0) + 1);
  const lines = ['```mermaid', 'pie title Product rows by entity'];
  for (const [k, v] of counts) lines.push(`    "${sanitizeLabel(k)}" : ${v}`);
  lines.push('```');
  charts.push(lines.join('\n'));
}

// Chart 3: financial metric rows by entity (pie)
if (fin) {
  const counts = new Map();
  for (const r of fin.outRows) counts.set(r.entity, (counts.get(r.entity) || 0) + 1);
  const lines = ['```mermaid', 'pie title Financial metric rows by entity'];
  for (const [k, v] of counts) lines.push(`    "${sanitizeLabel(k)}" : ${v}`);
  lines.push('```');
  charts.push(lines.join('\n'));
}

// ---------------------------------------------------------------------------
// Markdown + JSON
// ---------------------------------------------------------------------------
const md = [];
md.push('# Pricing & Financials Diff');
md.push('');
md.push(`> Source root: \`${root}\` · generated ${new Date().toISOString()} · values copied verbatim.`);
md.push('');
for (const [kind, info] of Object.entries(consolidated)) {
  md.push(`## ${kind[0].toUpperCase() + kind.slice(1)}`);
  md.push('');
  md.push(`- Files: **${info.files}** · consolidated rows: **${info.rows}** · entities: ${info.entities.join(', ') || '—'}`);
  md.push(`- Output: \`${relative(TOOLKIT_ROOT, info.outFile)}\``);
  md.push('');
}
if (charts.length) {
  md.push('## Charts');
  md.push('');
  for (const c of charts) { md.push(c); md.push(''); }
}
md.push('## Method');
md.push('');
md.push('`scripts/pricing-diff.mjs` discovers `products.csv`, `financials.csv` and `fees.csv` under the');
md.push('research root, parses them (RFC4180 quoting) and writes the union-of-columns consolidations plus');
md.push('Mermaid charts. CSV cells are never recomputed or invented.');
md.push('');
writeFileSync(resolve(outDir, 'pricing-diff.md'), md.join('\n'));

const summary = {
  tool: 'pricing-diff', root, generatedAt: new Date().toISOString(),
  datasets: Object.fromEntries(Object.entries(consolidated).map(([k, v]) => [k, {
    files: v.files, rows: v.rows, columns: v.columns, entities: v.entities, output: relative(TOOLKIT_ROOT, v.outFile),
  }])),
  costToIncome: cti,
  provenance: 'raw CSV values only; no synthetic numbers',
};
writeFileSync(resolve(outDir, 'pricing-diff.json'), JSON.stringify(summary, null, 2));

console.log(`[pricing-diff] datasets: ${Object.entries(consolidated).map(([k, v]) => `${k}=${v.rows} rows/${v.files} files`).join(', ')}`);
console.log(`[pricing-diff] wrote ${outDir}/pricing-diff.md (+ consolidated CSVs + json)`);
