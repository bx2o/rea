#!/usr/bin/env node
/**
 * web-stack-recon.mjs — website → technology & vendor stack projection.
 *
 * Runs REA's web-bundle analysis against a target URL, then projects the
 * Evidence into a business-relevant "vendor stack" view (frameworks, CDNs,
 * analytics, payment/identity providers, third-party domains).
 *
 * NOTE: REA's web commands require a running Chrome-family browser/CDP target.
 * When unavailable, this tool exits with a clear READINESS error (fail-closed)
 * and instructs the analyst to use the WebFetch fallback — it never fabricates.
 *
 * Usage:
 *   node web-stack-recon.mjs --url https://www.fnb.co.za --out research/banks/fnb/technology
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

const url = arg('url');
const outDir = arg('out', 'research/_out/web-stack');
if (!url) { console.error('usage: node web-stack-recon.mjs --url <url> [--out dir]'); process.exit(2); }

const res = spawnSync(process.execPath, [REA, 'analyze-web-bundle', url, '--format', 'json'], {
  cwd: REA_ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
});

mkdirSync(resolve(outDir), { recursive: true });
const report = {
  tool: 'web-stack-recon',
  target: url,
  exitCode: res.status,
  readinessOk: res.status === 0 && !/VALIDATION_ERROR|READINESS|missing/i.test(res.stdout + res.stderr),
  raw: { stdout: res.stdout, stderr: res.stderr },
  projection: {
    note: 'Populate vendor categories from REA Evidence once a CDP browser target is available.',
    frameworks: [], cdn: [], analytics: [], payments: [], identity: [], thirdPartyDomains: [],
  },
  provenance: 'rea analyze-web-bundle → streamium projection; no synthetic values',
};
writeFileSync(resolve(outDir, 'web-stack-recon.json'), JSON.stringify(report, null, 2));

if (!report.readinessOk) {
  console.error('[web-stack-recon] READINESS BLOCKED: REA web analysis needs a Chrome-family browser/CDP target.');
  console.error('[web-stack-recon] Fallback: use orchestrator WebFetch on the target URL and record as [OBS].');
  console.error('[web-stack-recon] No fabricated output written beyond the raw envelope.');
  process.exit(3);
}
console.log(`[web-stack-recon] wrote ${outDir}/web-stack-recon.json`);
