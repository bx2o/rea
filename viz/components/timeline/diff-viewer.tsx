"use client";

/**
 * DiffViewer — changed-file list for one commit (VIZ-020 /commits expand
 * card; row/column semantics per VIZ-013 §6.3 file list).
 *
 * Each row links into the Explorer at the file's parent directory; counts
 * use green/red chips with explicit +/- sigils so color is never the only
 * encoding (WCAG 1.4.1, VIZ-014 §8.3). Very large commits (the repo has
 * 1,600-file commits) render a first window and disclose the rest on
 * demand instead of dumping thousands of rows into the DOM.
 *
 * Colours resolve through the semantic status tokens (`--st-success` /
 * `--st-danger`, VIZ-017 single-source rule) — never raw palette utilities.
 * The row is memoised (PERF-06) so a re-render of the list does not
 * reconcile rows whose file entry did not change.
 */
import { memo, useMemo, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Binary,
  Braces,
  File as FileIcon,
  FileCode,
  FileMinus,
  FilePlus,
  FileTerminal,
  FileText,
  Image as ImageIcon,
  Settings,
  Table,
  Workflow,
} from "lucide-react";
import type { DiffFile } from "@/lib/types";
import { formatExact } from "@/lib/utils";

/**
 * Extension → glyph map (VIZ-019 §8.2 canonical mapping, lucide UI set).
 * Unknown extensions fall back to File via the ?? below.
 */
const EXTENSION_ICONS: Record<string, LucideIcon> = {
  md: FileText,
  markdown: FileText,
  txt: FileText,
  tex: FileText,
  sty: FileText,
  ts: FileCode,
  tsx: FileCode,
  js: FileCode,
  mjs: FileCode,
  jsx: FileCode,
  py: FileCode,
  css: FileCode,
  html: FileCode,
  cs: FileCode,
  json: Braces,
  yaml: Settings,
  yml: Settings,
  csv: Table,
  svg: ImageIcon,
  png: ImageIcon,
  jpg: ImageIcon,
  jpeg: ImageIcon,
  gif: ImageIcon,
  webp: ImageIcon,
  sh: FileTerminal,
  mermaid: Workflow,
};

const INITIAL_ROW_LIMIT = 50;

function extensionOf(path: string): string {
  const name = path.split("/").pop() ?? path;
  const dot = name.lastIndexOf(".");
  if (dot <= 0) return ""; // extensionless / dotfiles
  return name.slice(dot + 1).toLowerCase();
}

function dirnameOf(path: string): string {
  const index = path.lastIndexOf("/");
  return index === -1 ? "" : path.slice(0, index);
}

export interface DiffViewerProps {
  /** Changed files for the commit (VIZ-022 DiffFile). */
  files: DiffFile[];
}

export function DiffViewer({ files }: DiffViewerProps) {
  const [showAll, setShowAll] = useState(false);
  // Memoised so a parent re-render never re-slices the file list (PERF-06):
  // the rows below are memoised components, so a stable array keeps them
  // from reconciling.
  const visible = useMemo(
    () => (showAll ? files : files.slice(0, INITIAL_ROW_LIMIT)),
    [files, showAll]
  );
  const hiddenCount = files.length - visible.length;
  const { totalInsertions, totalDeletions } = useMemo(
    () => ({
      totalInsertions: files.reduce((sum, file) => sum + file.insertions, 0),
      totalDeletions: files.reduce((sum, file) => sum + file.deletions, 0),
    }),
    [files]
  );

  return (
    <div className="space-y-2">
      <div className="max-h-96 overflow-y-auto rounded-lg border border-border/70">
        <ul className="divide-y divide-border/60">
          {visible.map((file) => (
            <DiffFileRow key={file.path} file={file} />
          ))}
        </ul>
      </div>
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="inline-flex items-center gap-1.5 rounded-md border border-input bg-card px-2.5 py-1 text-xs font-medium hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Show all {formatExact(files.length)} files
          <span className="text-muted-foreground">
            ({formatExact(hiddenCount)} hidden)
          </span>
        </button>
      )}
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
        <span>
          {formatExact(files.length)} {files.length === 1 ? "file" : "files"}{" "}
          changed
        </span>
        <span className="text-st-success">
          +{formatExact(totalInsertions)}
        </span>
        <span className="text-st-danger">
          -{formatExact(totalDeletions)}
        </span>
      </p>
    </div>
  );
}

/**
 * One changed-file row. Memoised (PERF-06): the `file` object is a stable
 * reference from the DiffSummary, so a parent re-render (another row
 * expanding, a sibling card loading) never reconciles this row again.
 */
const DiffFileRow = memo(function DiffFileRow({ file }: { file: DiffFile }) {
  const Icon = EXTENSION_ICONS[extensionOf(file.path)] ?? FileIcon;
  const dir = dirnameOf(file.path);
  const href = dir === "" ? "/explorer" : `/explorer?path=${encodeURIComponent(dir)}`;
  const openLabel = `Open ${dir === "" ? "repository root" : dir} in explorer`;

  return (
    <li>
      <Link
        href={href}
        aria-label={openLabel}
        className="flex items-center gap-2 rounded-md px-2 py-1.5 -mx-2 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
      >
        <Icon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
        <span
          title={file.path}
          className="min-w-0 flex-1 truncate font-mono text-xs text-foreground/90"
        >
          {file.path}
        </span>
        {file.binary ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
            <Binary aria-hidden="true" className="size-3" />
            binary
          </span>
        ) : (
          <>
            <span className="shrink-0 rounded-md bg-st-success/10 px-1.5 py-0.5 font-mono text-[11px] font-medium text-st-success">
              +{formatExact(file.insertions)}
            </span>
            <span className="shrink-0 rounded-md bg-st-danger/10 px-1.5 py-0.5 font-mono text-[11px] font-medium text-st-danger">
              -{formatExact(file.deletions)}
            </span>
          </>
        )}
      </Link>
    </li>
  );
});
