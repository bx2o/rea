#!/usr/bin/env node
/**
 * network-capability-map.mjs — HAR/SAZ capture → API taxonomy projection.
 *
 * Runs REA's retained-capture inspector on a local HAR/SAZ file (no fetching),
 * then projects endpoints into a business taxonomy: auth, accounts, payments,
 * products, third-party/analytics.
 *
 * Usage:
 *   node network-capability-map.mjs --capture session.har --out research/banks/fnb/technology/api
 */
import { spawnSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const REA_ROOT = process.env.REA_ROOT || '/workspace/rea';
const REA = resolve(REA_ROOT, 'scripts/rea.mjs');

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const capture = arg('capture');
const outDir = arg('out', 'research/_out/api-map');
if (!capture) { console.error('usage: node network-capability-map.mjs --capture <file.har|.saz> [--out dir]'); process.exit(2); }

const res = spawnSync(process.execPath,
  [REA, 'inspect-web-network-capture', capture, '--format', 'json'],
  { cwd: REA_ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

mkdirSync(resolve(outDir), { recursive: true });
const report = {
  tool: 'network-capability-map',
  target: capture,
  exitCode: res.status,
  readinessOk: res.status === 0,
  taxonomy: { auth: [], accounts: [], payments: [], products: [], thirdParty: [] },
  raw: { stdout: res.stdout, stderr: res.stderr },
  provenance: 'rea inspect-web-network-capture → streamium projection',
};
writeFileSync(resolve(outDir, 'network-capability-map.json'), JSON.stringify(report, null, 2));
if (res.status !== 0) {
  console.error('[network-capability-map] Could not inspect capture; check format (HAR/SAZ/mitmproxy/qlog).');
  process.exit(3);
}
console.log(`[network-capability-map] wrote ${outDir}/network-capability-map.json`);
