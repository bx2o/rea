"use client";

import * as React from "react";
import Link from "next/link";
import {
  Check,
  CloudOff,
  Code,
  Copy,
  Download,
  FileSearch,
  FileWarning,
  GitCommitHorizontal,
  History,
  X,
} from "lucide-react";
import { Breadcrumb } from "./breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatBytes, formatDate, shortSha } from "@/lib/utils";
import type { ApiEnvelope, FileContent, FileNode } from "@/lib/types";

export interface FileViewerProps {
  /** Selected file path; null → empty placeholder (desktop) / no sheet. */
  path: string | null;
  /** Tree node for the selection — metadata source in snapshot-fallback. */
  node: FileNode | null;
  /** True while the tree is still resolving the selected path. */
  pending?: boolean;
  /** True when the selection is a directory (viewer shows a hint). */
  dirSelected?: boolean;
  /** Mobile presentation: fixed bottom sheet with drag-handle visual. */
  isMobile: boolean;
  /** Close the mobile sheet (page clears ?path=). */
  onClose?: () => void;
  /** Navigate the tree from the viewer's path breadcrumb. */
  onNavigateDir?: (dirPath: string) => void;
  /** `?path=` does not resolve in the tree — show the empty "not found" state. */
  notFound?: boolean;
  /** Optional page-level polite live region (copy/download confirmations). */
  onAnnounce?: (message: string) => void;
  className?: string;
}

/** Clipboard with a graceful failure result — no dependency required. */
async function copyText(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Clipboard permission denied or unavailable (e.g. insecure context).
  }
  return false;
}

/* ------------------------------------------------------------------ */
/* Hand-rolled lightweight markdown renderer (VIZ-020 — no            */
/* react-markdown dependency, sanitization by construction: every     */
/* token renders as a React text node, never as raw HTML).            */
/* ------------------------------------------------------------------ */

const INLINE_RE =
  /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`|\[[^\]\n]+\]\([^)\n]*\))/g;

/** Inline tokens: **bold**, *italic*, `code`, [links](render as text). */
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = new RegExp(INLINE_RE.source, "g");
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyPrefix}-${k++}`;
    if (tok.startsWith("**")) {
      out.push(
        <strong key={key} className="font-semibold text-foreground">
          {tok.slice(2, -2)}
        </strong>
      );
    } else if (tok.startsWith("`")) {
      out.push(
        <code
          key={key}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]"
        >
          {tok.slice(1, -1)}
        </code>
      );
    } else if (tok.startsWith("[")) {
      // Links render as their label text only (offline-safe, VIZ-020).
      out.push(<span key={key}>{tok.slice(1, tok.indexOf("]"))}</span>);
    } else {
      out.push(<em key={key}>{tok.slice(1, -1)}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

interface ListItem {
  text: string;
  nested: { ordered: boolean; items: ListItem[] } | null;
}

function collectList(
  lines: string[],
  i: number,
  baseIndent: number
): { items: ListItem[]; end: number } {
  const items: ListItem[] = [];
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      const peek = lines[i + 1] ?? "";
      if (/^\s*([-*+]|\d+[.)])\s+/.test(peek)) {
        i++;
        continue;
      }
      break;
    }
    const m = line.match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
    if (!m) break;
    if (m[1].length < baseIndent) break;
    if (m[1].length > baseIndent) {
      const nested = collectList(lines, i, m[1].length);
      if (items.length > 0) {
        items[items.length - 1].nested = {
          ordered: /\d/.test(m[2]),
          items: nested.items,
        };
      }
      i = nested.end;
      continue;
    }
    items.push({ text: m[3], nested: null });
    i++;
  }
  return { items, end: i };
}

function renderList(
  list: { ordered: boolean; items: ListItem[] },
  key: string
): React.ReactNode {
  const Tag = list.ordered ? "ol" : "ul";
  return (
    <Tag
      key={key}
      className={cn(list.ordered ? "list-decimal" : "list-disc", "space-y-1 pl-6")}
    >
      {list.items.map((item, i) => (
        <li key={`${key}-${i}`}>
          {renderInline(item.text, `${key}-${i}`)}
          {item.nested && renderList(item.nested, `${key}-n${i}`)}
        </li>
      ))}
    </Tag>
  );
}

const HEADING_CLASSES: Record<number, string> = {
  1: "mt-7 mb-3 font-heading text-2xl font-bold",
  2: "mt-6 mb-2 font-heading text-xl font-bold",
  3: "mt-5 mb-2 font-heading text-lg font-semibold",
  4: "mt-4 mb-1 font-heading text-base font-semibold",
  5: "mt-3 mb-1 font-heading text-sm font-semibold",
  6: "mt-3 mb-1 font-heading text-sm font-semibold",
};

function parseMarkdown(src: string): React.ReactNode[] {
  const lines = src.split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;
  let k = 0;
  const key = () => `md-${k++}`;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // Fenced code block → <pre> with bg-muted font-mono.
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3).trim();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++; // closing fence (or EOF)
      out.push(
        <figure key={key()} className="space-y-1">
          {lang && (
            <figcaption className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {lang}
            </figcaption>
          )}
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-[13px] leading-6">
            <code>{buf.join("\n")}</code>
          </pre>
        </figure>
      );
      continue;
    }

    // Heading (h1–h6 with graduated sizes).
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      out.push(
        React.createElement(
          `h${level}`,
          { key: key(), className: HEADING_CLASSES[level] },
          renderInline(h[2], key())
        )
      );
      i++;
      continue;
    }

    // Horizontal rule.
    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      out.push(<hr key={key()} className="border-border" />);
      i++;
      continue;
    }

    // Blockquote.
    if (line.trimStart().startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith(">")) {
        buf.push(lines[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      out.push(
        <blockquote
          key={key()}
          className="border-l-4 border-border pl-4 text-muted-foreground italic"
        >
          {renderInline(buf.join(" "), key())}
        </blockquote>
      );
      continue;
    }

    // Table passthrough — pipe blocks render preformatted.
    if (line.trimStart().startsWith("|")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("|")) {
        buf.push(lines[i]);
        i++;
      }
      out.push(
        <pre
          key={key()}
          className="overflow-x-auto rounded-lg bg-muted/60 p-4 font-mono text-xs leading-6 whitespace-pre"
        >
          {buf.join("\n")}
        </pre>
      );
      continue;
    }

    // Lists (nested via indentation).
    const listMatch = line.match(/^(\s*)([-*+]|\d+[.)])\s+/);
    if (listMatch) {
      const { items, end } = collectList(lines, i, listMatch[1].length);
      out.push(
        renderList({ ordered: /\d/.test(listMatch[2]), items }, key())
      );
      i = end;
      continue;
    }

    // Paragraph — consume until blank or a special line.
    const buf: string[] = [line];
    i++;
    while (i < lines.length) {
      const l = lines[i];
      if (
        l.trim() === "" ||
        l.trim().startsWith("```") ||
        l.trimStart().startsWith("|") ||
        l.trimStart().startsWith(">") ||
        /^(#{1,6})\s+/.test(l) ||
        /^\s*([-*+]|\d+[.)])\s+/.test(l) ||
        /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l)
      ) {
        break;
      }
      buf.push(l);
      i++;
    }
    out.push(
      <p key={key()} className="leading-7">
        {renderInline(buf.join(" "), key())}
      </p>
    );
  }

  return out;
}

function MarkdownView({ content }: { content: string }) {
  const blocks = React.useMemo(() => parseMarkdown(content), [content]);
  return <div className="space-y-4 px-4 py-5 text-sm">{blocks}</div>;
}

/* ------------------------------------------------------------------ */
/* Code view with basic line numbers                                   */
/* ------------------------------------------------------------------ */

function CodeView({ content }: { content: string }) {
  const lines = React.useMemo(() => content.split("\n"), [content]);
  return (
    <div className="overflow-x-auto">
      <pre className="min-w-full bg-muted/40 px-4 py-4 font-mono text-[13px] leading-6">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="grid grid-cols-[3.5rem_1fr]">
              <span
                aria-hidden="true"
                className="select-none pr-4 text-right tabular-nums text-muted-foreground/60"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{line || " "}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Notices                                                              */
/* ------------------------------------------------------------------ */

function Notice({
  title,
  detail,
  icon: Icon = FileWarning,
}: {
  title: string;
  detail?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
      <Icon aria-hidden="true" className="h-10 w-10 text-muted-foreground/60" />
      <p className="text-sm font-medium">{title}</p>
      {detail && <p className="max-w-sm text-xs text-muted-foreground">{detail}</p>}
    </div>
  );
}

function isMarkdown(path: string): boolean {
  return /\.(md|mdx|markdown)$/i.test(path);
}

/* ------------------------------------------------------------------ */
/* FileViewer                                                           */
/* ------------------------------------------------------------------ */

export function FileViewer({
  path,
  node,
  pending = false,
  dirSelected = false,
  isMobile,
  onClose,
  className,
}: FileViewerProps) {
  const [content, setContent] = React.useState<FileContent | null>(null);
  const [status, setStatus] = React.useState<"idle" | "loading" | "loaded" | "fallback">(
    "idle"
  );
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const prevPathRef = React.useRef<string | null>(null);

  // Mobile sheet visibility: any selection (file or directory).
  const sheetOpen = isMobile && (path !== null || dirSelected);

  /* Fetch GET /api/file?path= — on 4xx/5xx degrade to the snapshot-mode
     notice with metadata from the tree node (VIZ-020 fallback contract). */
  React.useEffect(() => {
    if (!path) {
      setContent(null);
      setStatus("idle");
      return;
    }
    let cancelled = false;
    setStatus("loading");
    setContent(null);
    (async () => {
      try {
        const res = await fetch(`/api/file?path=${encodeURIComponent(path)}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const env = (await res.json()) as ApiEnvelope<FileContent>;
        if (
          !env?.data ||
          typeof env.data.path !== "string" ||
          typeof env.data.size !== "number"
        ) {
          throw new Error("bad envelope");
        }
        if (!cancelled) {
          setContent(env.data);
          setStatus("loaded");
        }
      } catch {
        if (!cancelled) {
          setContent(null);
          setStatus("fallback");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [path]);

  // Move focus into the sheet when it opens (not on every file switch),
  // and close on Escape (VIZ-014 §8.8 sheet contract).
  React.useEffect(() => {
    if (!sheetOpen) return;
    if (prevPathRef.current === null) {
      headingRef.current?.focus();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheetOpen, onClose]);

  React.useEffect(() => {
    prevPathRef.current = path;
  }, [path]);

  // Early return AFTER all hooks (Rules of Hooks): hidden on mobile
  // when nothing is selected — the desktop pane renders placeholders.
  if (isMobile && !sheetOpen) return null;

  /* Header metadata: live FileContent when loaded, tree node when the
     API is unavailable. */
  const meta = {
    name: content?.name ?? node?.name ?? path?.split("/").pop() ?? "—",
    zone: content?.zone ?? node?.zone,
    size: content?.size ?? node?.size,
    path: content?.path ?? path ?? node?.path ?? "",
    type:
      (content?.name ?? node?.name ?? path ?? "").includes(".")
        ? (
            (content?.name ?? node?.name ?? path ?? "").split(".").pop() ?? ""
          ).toLowerCase()
        : "unknown",
    lastCommit: content?.lastCommit ?? null,
  };

  const body = (() => {
    if (pending) {
      return (
        <div className="space-y-3 px-4 py-5">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      );
    }
    if (!path) {
      if (dirSelected) {
        return (
          <Notice
            icon={FileSearch}
            title="Directory selected"
            detail="Pick a file inside it to inspect contents, metadata, and history."
          />
        );
      }
      return (
        <Notice
          icon={FileSearch}
          title="No file selected"
          detail="Pick a file in the tree to inspect its contents, metadata, and last commit."
        />
      );
    }
    if (status === "loading") {
      return (
        <div className="space-y-3 px-4 py-5" role="status">
          <Skeleton className="h-4 w-1/2" />
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-4" style={{ width: `${88 - (i % 3) * 18}%` }} />
          ))}
        </div>
      );
    }
    if (status === "fallback") {
      return (
        <div className="px-4 py-5">
          <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-6 text-center">
            <CloudOff aria-hidden="true" className="h-10 w-10 text-muted-foreground/60" />
            <p className="text-sm font-medium">
              Snapshot mode: content unavailable for this file
            </p>
            <p className="max-w-md text-xs text-muted-foreground">
              {node
                ? "Live git could not read this file. Metadata below comes from the committed tree snapshot."
                : "This path does not resolve in the repository tree — it may be a stale link or the file no longer exists."}
            </p>
            {node && (
              <dl className="mt-2 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-left text-xs">
                <dt className="text-muted-foreground">Path</dt>
                <dd className="truncate font-mono">{node.path}</dd>
                <dt className="text-muted-foreground">Zone</dt>
                <dd>{node.zone}</dd>
                <dt className="text-muted-foreground">Size</dt>
                <dd className="tabular-nums">{formatBytes(node.size)}</dd>
                <dt className="text-muted-foreground">Type</dt>
                <dd>{node.type}</dd>
              </dl>
            )}
          </div>
        </div>
      );
    }
    if (status === "loaded" && content) {
      if (content.binary) {
        return (
          <Notice
            icon={FileWarning}
            title="Binary file — preview unavailable"
            detail={`${formatBytes(content.size)} of binary content; open it with the appropriate tool outside this viewer.`}
          />
        );
      }
      if (content.tooLarge) {
        return (
          <Notice
            icon={FileWarning}
            title="Too large to preview"
            detail={`${formatBytes(content.size)} exceeds the 256 KB viewer cap. Use the History link to see how it changed.`}
          />
        );
      }
      if (isMarkdown(content.path)) {
        return <MarkdownView content={content.content ?? ""} />;
      }
      return <CodeView content={content.content ?? ""} />;
    }
    return null;
  })();

  return (
    <section
      id="file-viewer"
      aria-label="File viewer"
      tabIndex={-1}
      className={cn(
        "flex min-w-0 flex-col bg-card",
        isMobile
          ? "fixed inset-x-0 bottom-0 z-40 max-h-[85dvh] flex-none rounded-t-2xl border-t shadow-2xl"
          : "hidden min-h-0 flex-1 overflow-y-auto md:flex",
        className
      )}
    >
      {isMobile && (
        <>
          {/* Sheet drag-handle visual (VIZ-013 §8.2) */}
          <div aria-hidden="true" className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-muted-foreground/30" />
          <div className="flex items-center justify-between px-3 pt-1">
            <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              File viewer
            </span>
            <button
              type="button"
              aria-label="Close file viewer"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </>
      )}

      {/* Header: filename, zone badge, size · type, last-commit chip,
          History link (VIZ-013 §7.3) */}
      <div className="border-b px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <h2
            ref={headingRef}
            tabIndex={-1}
            title={meta.path}
            className="min-w-0 truncate font-heading text-base font-bold"
          >
            {meta.name}
          </h2>
          {meta.zone && <Badge zone={meta.zone}>{meta.zone}</Badge>}
          <span className="text-xs text-muted-foreground">
            {meta.size !== undefined ? formatBytes(meta.size) : "—"} · {meta.type}
          </span>
          {meta.lastCommit ? (
            <span className="inline-flex max-w-[320px] min-w-0 items-center gap-1 rounded-full border bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground">
              <GitCommitHorizontal aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              <span className="font-mono text-primary">{shortSha(meta.lastCommit.sha)}</span>
              <span className="shrink-0">· {formatDate(meta.lastCommit.date)} ·</span>
              <span className="truncate">
                {meta.lastCommit.message.slice(0, 80)}
                {meta.lastCommit.message.length > 80 ? "…" : ""}
              </span>
            </span>
          ) : path ? (
            <span className="text-xs text-muted-foreground">no commit data</span>
          ) : null}
          {path && (
            <Link
              href={`/commits?path=${encodeURIComponent(path)}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "ml-auto shrink-0 gap-1.5"
              )}
            >
              <History aria-hidden="true" className="h-3.5 w-3.5" />
              History
            </Link>
          )}
        </div>
        {path && (
          <p className="mt-1 break-all font-mono text-[11px] text-muted-foreground">
            {meta.path}
          </p>
        )}
      </div>

      <div
        className={cn(
          "min-h-0 flex-1 overflow-y-auto",
          isMobile ? "max-h-[60dvh]" : undefined
        )}
      >
        {body}
      </div>
    </section>
  );
}
