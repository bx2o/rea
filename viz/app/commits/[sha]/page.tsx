import { headers } from "next/headers";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarClock,
  FileDiff,
  FileMinus,
  FilePlus,
  GitCommit,
  User,
} from "lucide-react";

import { GET as getCommitsRoute } from "@/app/api/commits/route";
import { GET as getDiffRoute } from "@/app/api/diff/[sha]/route";
import { DiffViewer } from "@/components/timeline/diff-viewer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { CommitRecord, DiffFile } from "@/lib/types";
import { cn, formatDate, formatExact, shortSha } from "@/lib/utils";

/**
 * /commits/[sha] — per-commit detail view (UX-04 remediation: the route the
 * design brief specifies at §6.3 and that used to answer 404).
 *
 * Data: the commit record comes from the /api/commits contract (matched on
 * the full sha or any 7+ character prefix), the file-level diff from
 * /api/diff/<sha> — the same two endpoints the rest of the app uses, so the
 * page shares one data contract (lib/types.ts) and one git/snapshot fallback
 * path. The data is loaded on the server, so the HTML already carries the
 * commit (no client fetch waterfall, no loading flash).
 *
 * The requests go out over HTTP to the app's own origin rather than calling
 * the route modules in-process: an in-process call keeps the multi-megabyte
 * raw `git log --numstat` output inside the React render scope, where the
 * development server's debug channel would serialise it into the RSC
 * payload. The route modules are still used as a fallback when the self
 * request cannot be made.
 *
 * Unknown or malformed sha → a friendly "commit not found" state with a way
 * back; never a crash and never a dead end (UI/UX §9.3).
 */

/** Minimum length of an abbreviated sha (git's own minimum). */
const MIN_ABBREV_LENGTH = 7;

export const revalidate = 60; // commit history is immutable-ish

interface CommitDetail {
  commit: CommitRecord | null;
  files: DiffFile[];
  source: "git" | "snapshot" | null;
  diffAvailable: boolean;
}

function toCount(value: unknown): number {
  const n =
    typeof value === "number" ? value : Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

function parseCommitsPayload(payload: unknown): {
  commits: CommitRecord[];
  source: "git" | "snapshot";
} {
  const root = (payload ?? {}) as Record<string, unknown>;
  const rawList = Array.isArray(root.data)
    ? root.data
    : Array.isArray(root.commits)
      ? root.commits
      : [];
  const commits: CommitRecord[] = [];
  for (const entry of rawList) {
    if (entry === null || typeof entry !== "object") continue;
    const raw = entry as Record<string, unknown>;
    const sha = typeof raw.sha === "string" ? raw.sha.trim() : "";
    const date = typeof raw.date === "string" ? raw.date.trim() : "";
    if (sha === "" || date === "") continue;
    commits.push({
      sha,
      date,
      author:
        typeof raw.author === "string" && raw.author.trim() !== ""
          ? raw.author
          : "unknown",
      message: typeof raw.message === "string" ? raw.message : "",
      filesChanged: toCount(raw.filesChanged),
      insertions: toCount(raw.insertions),
      deletions: toCount(raw.deletions),
    });
  }
  return {
    commits,
    source: root.source === "snapshot" ? "snapshot" : "git",
  };
}

function parseDiffPayload(payload: unknown): DiffFile[] {
  const root = (payload ?? {}) as Record<string, unknown>;
  const inner =
    root.data !== null && typeof root.data === "object"
      ? (root.data as Record<string, unknown>)
      : root;
  const rawList = Array.isArray(inner.files) ? inner.files : [];
  const files: DiffFile[] = [];
  for (const entry of rawList) {
    if (entry === null || typeof entry !== "object") continue;
    const raw = entry as Record<string, unknown>;
    const path = typeof raw.path === "string" ? raw.path.trim() : "";
    if (path === "") continue;
    files.push({
      path,
      insertions: toCount(raw.insertions),
      deletions: toCount(raw.deletions),
      binary: raw.binary === true,
    });
  }
  return files;
}

/**
 * Match the requested sha against the history: exact full sha first, then
 * the newest commit sharing the abbreviated prefix.
 */
function matchCommit(commits: CommitRecord[], sha: string): CommitRecord | null {
  const needle = sha.trim().toLowerCase();
  if (needle.length < MIN_ABBREV_LENGTH) return null;
  const exact = commits.find((commit) => commit.sha.toLowerCase() === needle);
  if (exact !== undefined) return exact;
  const prefixed = commits.find((commit) =>
    commit.sha.toLowerCase().startsWith(needle)
  );
  return prefixed ?? null;
}

/**
 * Origins to try for the server-side API calls, most specific first:
 * the app's own loopback interface (always reachable from the server
 * process), then the host the request came in on (proxy/tunnel setups).
 */
async function apiOrigins(): Promise<string[]> {
  const origins: string[] = [];
  const port = process.env.PORT ?? "3000";
  origins.push(`http://127.0.0.1:${port}`);
  try {
    const requestHeaders = await headers();
    const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
    if (host !== null && host !== "") {
      const forwardedProto = requestHeaders.get("x-forwarded-proto");
      const proto =
        forwardedProto ??
        (host.startsWith("localhost") || host.startsWith("127.0.0.1")
          ? "http"
          : "https");
      const fromHost = `${proto}://${host}`;
      if (!origins.includes(fromHost)) origins.push(fromHost);
    }
  } catch {
    // headers() is unavailable outside a request scope — loopback only.
  }
  return origins;
}

interface ApiResult {
  ok: boolean;
  payload: unknown;
}

/** GET a JSON endpoint from the app's own API surface. */
async function fetchApi(path: string): Promise<ApiResult> {
  for (const origin of await apiOrigins()) {
    try {
      const response = await fetch(`${origin}${path}`, {
        headers: { Accept: "application/json" },
      });
      const payload = await response.json();
      return { ok: response.ok, payload };
    } catch {
      continue;
    }
  }
  return { ok: false, payload: null };
}

/**
 * Load one commit + its file-level diff.
 *
 * Primary path: the app's own API over HTTP. Fallback: the very same route
 * modules invoked in-process, so the page still renders when the server
 * cannot reach itself (e.g. a sandbox with no loopback route).
 */
const loadCommitDetail = async (rawSha: string): Promise<CommitDetail> => {
  const empty: CommitDetail = {
    commit: null,
    files: [],
    source: null,
    diffAvailable: false,
  };
  const sha = rawSha.trim().toLowerCase();
  if (sha.length < MIN_ABBREV_LENGTH) return empty;

  // ---- commit history -------------------------------------------------------
  let commits: CommitRecord[] = [];
  let source: "git" | "snapshot" = "git";
  const commitsResult = await fetchApi("/api/commits");
  if (commitsResult.ok) {
    const parsed = parseCommitsPayload(commitsResult.payload);
    commits = parsed.commits;
    source = parsed.source;
  } else {
    try {
      const response = await getCommitsRoute(
        new Request("http://api.local/api/commits")
      );
      const parsed = parseCommitsPayload(await response.json());
      commits = parsed.commits;
      source = parsed.source;
    } catch {
      return empty;
    }
  }
  if (commits.length === 0) return { ...empty, source };

  const commit = matchCommit(commits, sha);
  if (commit === null) return { ...empty, source };

  // ---- file-level diff ------------------------------------------------------
  let files: DiffFile[] = [];
  let diffAvailable = false;
  const diffPath = `/api/diff/${encodeURIComponent(commit.sha)}`;
  const diffResult = await fetchApi(diffPath);
  if (diffResult.ok) {
    files = parseDiffPayload(diffResult.payload);
    diffAvailable = true;
  } else {
    try {
      const response = await getDiffRoute(new Request(`http://api.local${diffPath}`), {
        params: Promise.resolve({ sha: commit.sha }),
      });
      if (response.ok) {
        files = parseDiffPayload(await response.json());
        diffAvailable = true;
      }
    } catch {
      diffAvailable = false;
    }
  }

  return { commit, files, source, diffAvailable };
};

export default async function CommitDetailPage({
  params,
}: {
  params: Promise<{ sha: string }>;
}) {
  const { sha } = await params;
  const { commit, files, source, diffAvailable } = await loadCommitDetail(sha);

  if (commit === null) {
    return (
      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:px-6">
        <BackLink />
        <section
          aria-labelledby="commit-missing-heading"
          className="glass rounded-xl p-8 text-center shadow-sm"
        >
          <GitCommit
            aria-hidden="true"
            className="mx-auto size-8 text-muted-foreground"
          />
          <h1
            id="commit-missing-heading"
            className="mt-3 font-heading text-xl font-semibold tracking-tight"
          >
            Commit not found
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            No commit in this repository matches{" "}
            <span className="font-mono text-foreground">{sha}</span>.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Link href="/commits" className={buttonVariants({ variant: "default" })}>
              Back to commits
            </Link>
            <Link
              href="/explorer"
              className={buttonVariants({ variant: "outline" })}
            >
              Explore the repository
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const [subject, ...bodyLines] = commit.message.split("\n");
  const body = bodyLines.join("\n").trim();
  const filesChanged = diffAvailable ? files.length : commit.filesChanged;
  const insertions = diffAvailable
    ? files.reduce((sum, file) => sum + file.insertions, 0)
    : commit.insertions;
  const deletions = diffAvailable
    ? files.reduce((sum, file) => sum + file.deletions, 0)
    : commit.deletions;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:px-6">
      <BackLink />

      {/* Header: sha, short sha, date, author, full message */}
      <header className="glass rounded-xl p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="font-mono text-[11px] tracking-tight"
            title="Full commit sha"
          >
            {commit.sha}
          </Badge>
          <Badge variant="secondary" className="font-mono text-[11px]">
            {shortSha(commit.sha)}
          </Badge>
          {source !== null && (
            <span
              title={
                source === "snapshot"
                  ? "Offline snapshot data — regenerate via scripts/snapshot.mjs"
                  : "Live git data"
              }
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                source === "snapshot"
                  ? "border-border text-muted-foreground"
                  : "border-primary/40 text-primary"
              )}
            >
              {source === "snapshot" ? "Snapshot" : "Live git"}
            </span>
          )}
        </div>

        <h1 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
          {subject.trim() === "" ? "Untitled commit" : subject}
        </h1>
        {body !== "" && (
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
            {body}
          </p>
        )}

        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-1.5">
            <dt className="flex items-center gap-1.5 text-muted-foreground">
              <User aria-hidden="true" className="size-3.5" />
              Author
            </dt>
            <dd className="font-medium text-foreground">{commit.author}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="flex items-center gap-1.5 text-muted-foreground">
              <CalendarClock aria-hidden="true" className="size-3.5" />
              Date
            </dt>
            <dd className="font-medium text-foreground">
              {formatDate(commit.date, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </dd>
          </div>
        </dl>
      </header>

      {/* Stat strip: files changed / insertions / deletions */}
      <section aria-label="Change summary">
        <dl className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="glass rounded-lg p-3">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <FileDiff aria-hidden="true" className="size-3.5" />
              Files changed
            </dt>
            <dd
              title={formatExact(filesChanged)}
              className="mt-1 font-heading text-lg font-semibold tabular-nums text-foreground"
            >
              {formatExact(filesChanged)}
            </dd>
          </div>
          <div className="glass rounded-lg p-3">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <FilePlus aria-hidden="true" className="size-3.5" />
              Insertions
            </dt>
            <dd
              title={formatExact(insertions)}
              className="mt-1 font-heading text-lg font-semibold tabular-nums text-green-600 dark:text-green-400"
            >
              +{formatExact(insertions)}
            </dd>
          </div>
          <div className="glass rounded-lg p-3">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <FileMinus aria-hidden="true" className="size-3.5" />
              Deletions
            </dt>
            <dd
              title={formatExact(deletions)}
              className="mt-1 font-heading text-lg font-semibold tabular-nums text-red-600 dark:text-red-400"
            >
              -{formatExact(deletions)}
            </dd>
          </div>
        </dl>
      </section>

      {/* File list — same component the commits timeline uses when it expands a card */}
      <section
        aria-labelledby="commit-files-heading"
        className="glass rounded-xl p-5 shadow-sm"
      >
        <h2
          id="commit-files-heading"
          className="font-heading text-base font-semibold tracking-tight"
        >
          Changed files
        </h2>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Select a file to open its folder in the Explorer.
        </p>
        <div className="mt-3">
          {diffAvailable ? (
            <DiffViewer files={files} />
          ) : (
            <p
              role="status"
              className="rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground"
            >
              The file-level diff for this commit is unavailable — only the
              summary above could be loaded.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href="/commits"
      className="inline-flex items-center gap-1.5 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowLeft aria-hidden="true" className="size-4" />
      Back to commits
    </Link>
  );
}
