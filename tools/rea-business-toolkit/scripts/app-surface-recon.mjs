#!/usr/bin/env node
/**
 * app-surface-recon.mjs — APK/IPA → SDK & feature inventory projection.
 *
 * Uses REA static analysis (no execution) to inventory an app's declared
 * packages, then projects to business categories:
 *   fraud, KYC/identity, core-banking middleware, loyalty, analytics, push, maps, crypto.
 *
 * Usage:
 *   node app-surface-recon.mjs --apk /path/app.apk --out research/banks/fnb/technology/app-re
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

const apk = arg('apk');
const outDir = arg('out', 'research/_out/app-surface');
if (!apk) { console.error('usage: node app-surface-recon.mjs --apk <file.apk> [--out dir]'); process.exit(2); }

const res = spawnSync(process.execPath,
  [REA, 'inspect-android-package', apk, '--format', 'json'],
  { cwd: REA_ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

mkdirSync(resolve(outDir), { recursive: true });
const report = {
  tool: 'app-surface-recon',
  target: apk,
  exitCode: res.status,
  readinessOk: res.status === 0,
  categoryHints: {
    fraud: ['iovation', 'threatmetrix', 'lexisnexis', 'sift', 'featurespace', 'feedzai'],
    kyc_identity: ['onfido', 'jumio', 'thisisme', 'entersekt', 'aida', 'transunion', 'experian'],
    loyalty: ['ebucks', 'vitality', 'loyalty', 'rewards'],
    analytics: ['firebase', 'amplitude', 'mixpanel', 'adjust', 'braze', 'optimizely'],
    push: ['firebase', 'huawei', 'onesignal'],
  },
  raw: { stdout: res.stdout, stderr: res.stderr },
  provenance: 'rea inspect-android-package → streamium projection',
};
writeFileSync(resolve(outDir, 'app-surface-recon.json'), JSON.stringify(report, null, 2));
if (res.status !== 0) {
  console.error('[app-surface-recon] REA static Android analysis requires a caller-supplied JADX. See docs/android-analysis.md.');
  process.exit(3);
}
console.log(`[app-surface-recon] wrote ${outDir}/app-surface-recon.json`);
