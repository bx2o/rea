import { execFile } from "child_process";
import path from "path";

const REPO_ROOT = path.resolve(process.cwd(), "..");
const GIT_TIMEOUT_MS = 15_000;
const MAX_BUFFER = 32 * 1024 * 1024;

function exec(
  cmd: string,
  args: string[],
  cwd: string = REPO_ROOT
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    execFile(cmd, args, { cwd, timeout: GIT_TIMEOUT_MS, maxBuffer: MAX_BUFFER }, (err, stdout, stderr) => {
      if (err) reject(err);
      else resolve({ stdout, stderr });
    });
  });
}

/** True when git and the repo are available in this runtime. */
export async function gitAvailable(): Promise<boolean> {
  try {
    await exec("git", ["rev-parse", "--is-inside-work-tree"]);
    return true;
  } catch {
    return false;
  }
}

/** Full commit history with per-commit numstat churn (VIZ-021 §commits). */
export async function gitCommits(since?: string, limit = 500): Promise<string> {
  const sep = "%x1f";
  const rec = "%x1e";
  const fmt = `${sep}%H${sep}%cI${sep}%an${sep}%s${rec}`;
  const args = ["log", `--pretty=format:${fmt}`, `--numstat`, "--no-renames", `-n`, String(Math.min(limit, 2000))];
  if (since) args.push(`--since=${since}`);
  const { stdout } = await exec("git", args);
  return stdout;
}

/** Per-file numstat for one commit (VIZ-021 §diff). */
export async function gitDiffNumstat(sha: string): Promise<string> {
  const { stdout } = await exec("git", ["diff", "--numstat", "--no-renames", `${sha}^!`]);
  return stdout;
}

/** Tracked file list (VIZ-021 git ls-files). */
export async function gitLsFiles(): Promise<string> {
  const { stdout } = await exec("git", ["ls-files"]);
  return stdout;
}

/** Working-tree status (VIZ-021 git status --porcelain). */
export async function gitStatus(): Promise<string> {
  const { stdout } = await exec("git", ["status", "--porcelain"]);
  return stdout;
}

/** HEAD sha, or null. */
export async function gitHeadSha(): Promise<string | null> {
  try {
    const { stdout } = await exec("git", ["rev-parse", "HEAD"]);
    return stdout.trim() || null;
  } catch {
    return null;
  }
}

/** Traversal-proof path validation (VIZ-021 fail-closed contract). */
export function validateRepoPath(input: string): string | null {
  if (!input || input.includes("\0")) return null;
  if (input.includes("..")) return null;
  if (path.isAbsolute(input)) return null;
  if (/^[a-zA-Z]:/.test(input)) return null;
  const resolved = path.resolve(REPO_ROOT, input);
  if (!resolved.startsWith(REPO_ROOT + path.sep) && resolved !== REPO_ROOT) return null;
  return resolved;
}

/** Validate a sha before any exec (VIZ-021). */
export function validateSha(sha: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(sha);
}

export { REPO_ROOT };
