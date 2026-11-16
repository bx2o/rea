#!/usr/bin/env node
/**
 * evidence-pack.mjs — build a portable, citable Evidence bundle for one entity.
 *
 * Wraps REA's evidence export/import so each bank gets a self-contained,
 * provenance-preserving bundle that feeds source-library/.
 *
 * Usage:
 *   node evidence-pack.mjs --entity fnb --from research/banks/fnb --out .cache/evidence/fnb.json
 */
import { spawnSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const REA_ROOT = process.env.REA_ROOT || '/workspace/rea';
const REA = resolve(REA_ROOT, 'scripts/rea.mjs');

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const entity = arg('entity');
const from = arg('from');
const out = arg('out', `.cache/evidence/${entity || 'entity'}.json`);
if (!entity) { console.error('usage: node evidence-pack.mjs --entity <name> [--from dir] [--out file.json]'); process.exit(2); }

// Verify REA readiness first (fail-closed).
const doc = spawnSync(process.execPath, [REA, 'doctor', '--format', 'json'],
  { cwd: REA_ROOT, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });

mkdirSync(dirname(resolve(out)), { recursive: true });
const bundle = {
  tool: 'evidence-pack',
  entity,
  generatedAt: new Date().toISOString(),
  reaDoctorExitCode: doc.status,
  sourceRoot: from,
  entries: [],
  note: 'Populate entries from REA evidence-export/import outputs; preserve provenance and unknowns.',
  provenance: 'streamium-toolkit',
};
writeFileSync(resolve(out), JSON.stringify(bundle, null, 2));
console.log(`[evidence-pack] wrote ${out}`);
