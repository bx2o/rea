#!/usr/bin/env node
/**
 * rea-run.mjs — thin wrapper around the local REA CLI.
 * Runs one REA command, captures stdout/stderr, and optionally persists the
 * Evidence JSON. Preserves REA provenance; never rewrites results.
 *
 * Usage:
 *   node rea-run.mjs doctor
 *   node rea-run.mjs capabilities
 *   node rea-run.mjs inspect-android-package /path/app.apk --format json --out out.json
 */
import { spawnSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const REA_ROOT = process.env.REA_ROOT || '/workspace/rea';
const REA = resolve(REA_ROOT, 'scripts/rea.mjs');

const argv = process.argv.slice(2);
if (argv.length === 0) {
  console.error('usage: node rea-run.mjs <rea-command> [...args] [--out <file.json>]');
  process.exit(2);
}

// Extract our own --out flag, pass the rest to REA.
let out = null;
const passthrough = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--out') { out = argv[++i]; continue; }
  passthrough.push(argv[i]);
}

const started = Date.now();
const res = spawnSync(process.execPath, [REA, ...passthrough], {
  cwd: REA_ROOT,
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
  env: process.env,
});
const ms = Date.now() - started;

const envelope = {
  tool: 'rea-run',
  reaRoot: REA_ROOT,
  command: passthrough,
  exitCode: res.status,
  elapsedMs: ms,
  stdout: res.stdout ?? '',
  stderr: res.stderr ?? '',
  provenance: 'captured-by-stremiium-toolkit',
};

if (out) {
  mkdirSync(dirname(resolve(out)), { recursive: true });
  writeFileSync(resolve(out), JSON.stringify(envelope, null, 2));
  console.error(`[rea-run] wrote ${out} (exit ${res.status}, ${ms}ms)`);
}

process.stdout.write(envelope.stdout);
process.stderr.write(envelope.stderr);
process.exit(res.status ?? 1);
