"use client";

import * as React from "react";
import {
  Braces,
  ChevronRight,
  File,
  FileCode,
  FileText,
  Folder,
  FolderOpen,
  Image as ImageIcon,
  Settings,
  Table,
} from "lucide-react";
import { cn, formatBytes } from "@/lib/utils";
import { zoneHue, type Zone } from "@/lib/brand";
import type { FileNode } from "@/lib/types";
import { useThemeMode } from "./use-zone-theme";

/* ------------------------------------------------------------------ */
/* Constants (VIZ-013 §7.1)                                            */
/* ------------------------------------------------------------------ */

/** Fixed row height for the windowed list. */
const ROW_HEIGHT = 32;
/** Extra rows rendered above/below the viewport. */
const OVERSCAN = 5;
/** Indent per depth level, capped. */
const INDENT_PX = 12;
const MAX_INDENT = 6;

/** File-type glyph map (VIZ-019 §8.2; dir → Folder/FolderOpen). */
const FILE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  md: FileText,
  ts: FileCode,
  tsx: FileCode,
  js: FileCode,
  mjs: FileCode,
  json: Braces,
  yaml: Settings,
  yml: Settings,
  csv: Table,
  png: ImageIcon,
  jpg: ImageIcon,
  jpeg: ImageIcon,
};

function nodeIcon(
  node: FileNode,
  expanded: boolean
): React.ComponentType<{ className?: string }> {
  if (node.type === "dir") return expanded ? FolderOpen : Folder;
  const ext = node.name.includes(".")
    ? node.name.split(".").pop()!.toLowerCase()
    : "";
  return FILE_ICONS[ext] ?? File;
}

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/**
 * Flattened visible row. `setsize`/`posinset` carry the TRUE sibling counts
 * — not DOM counts — because virtualization keeps only the visible window
 * mounted (VIZ-014 §8.1).
 */
interface TreeRow {
  kind: "node" | "shimmer";
  path: string;
  node: FileNode | null;
  depth: number;
  /** Sibling count of this row's parent level. */
  setsize: number;
  /** 1-based position within the sibling level. */
  posinset: number;
}

export interface FileTreeProps {
  /** Cached children per directory path; "" = repository root level. */
  childrenByDir: Map<string, FileNode[]>;
  /** Expanded directory paths (URL-synced by the page; "" is implicit). */
  expandedDirs: Set<string>;
  /** Selected file path (viewer selection), or null. */
  selectedPath: string | null;
  /** Active zone filter; empty set = all zones. Non-matches dim. */
  zoneFilter: Set<Zone>;
  /**
   * Breadcrumb/deep-link navigation: focus + scroll to a directory row.
   * "" focuses the first row. `nonce` re-triggers identical paths.
   */
  focusRequest: { path: string; nonce: number } | null;
  /** Toggle a directory (page updates URL state and fetches children). */
  onToggleDir: (path: string) => void;
  /** Select a file (page opens the viewer). */
  onSelectFile: (path: string) => void;
  className?: string;
}

/* ------------------------------------------------------------------ */
/* FileTree                                                            */
/* ------------------------------------------------------------------ */

/**
 * Virtualized, fully keyboard-navigable ARIA file tree
 * (VIZ-020 §7.1, a11y contract VIZ-014 §8.1).
 *
 * Virtualization: the flattened visible rows (expanded dirs only) render
 * through a fixed 32px windowed list driven by the container's scroll
 * listener + ResizeObserver — no external virtualization library. Rows are
 * absolutely positioned inside a sized inner element so the browser handles
 * the scroll geometry.
 *
 * ARIA: role="tree" with role="treeitem" rows exposing aria-level,
 * aria-expanded, aria-setsize/aria-posinset (true counts). Flat DOM groups
 * are impossible with windowed rows; level/posinset/setsize carry the
 * hierarchy instead, per the VIZ-014 virtualization mandate.
 *
 * Roving tabindex: exactly one row (the active path) is tabbable. Keyboard
 * model: ↑/↓ move, → expand-or-into-child, ← collapse-or-to-parent,
 * Home/End, Enter select/toggle. Focus is tracked by PATH (not index) so it
 * survives virtualization re-renders, expansion changes, and filter
 * re-flattens; a pending-focus flag restores it when the row remounts.
 */
export function FileTree({
  childrenByDir,
  expandedDirs,
  selectedPath,
  zoneFilter,
  focusRequest,
  onToggleDir,
  onSelectFile,
  className,
}: FileTreeProps) {
  const theme = useThemeMode();

  /* ---------------- flattened rows ---------------- */

  const rows = React.useMemo<TreeRow[]>(() => {
    const out: TreeRow[] = [];
    const rootChildren = childrenByDir.get("");

    if (rootChildren === undefined) {
      // Root still loading — placeholder shimmer rows.
      for (let i = 0; i < 8; i++) {
        out.push({
          kind: "shimmer",
          path: `__loading-root-${i}`,
          node: null,
          depth: 0,
          setsize: 8,
          posinset: i + 1,
        });
      }
      return out;
    }

    const filtering = zoneFilter.size > 0;
    const matches = (n: FileNode) => !filtering || zoneFilter.has(n.zone);

    // A directory is kept when its own zone matches OR any descendant
    // (already loaded) matches — so a user can still navigate into a mixed
    // zone tree and see the files of the selected zone.
    const descendantMatches = (n: FileNode, seen: Set<string>): boolean => {
      if (seen.has(n.path)) return false;
      seen.add(n.path);
      const kids = childrenByDir.get(n.path);
      if (!kids) return false;
      return kids.some((k) => matches(k) || descendantMatches(k, seen));
    };

    const walk = (list: FileNode[], depth: number) => {
      const visible = filtering ? list.filter((n) => matches(n) || descendantMatches(n, new Set())) : list;
      for (let i = 0; i < visible.length; i++) {
        const node = visible[i];
        out.push({
          kind: "node",
          path: node.path,
          node,
          depth,
          setsize: visible.length,
          posinset: i + 1,
        });
        if (node.type === "dir" && expandedDirs.has(node.path)) {
          const kids = childrenByDir.get(node.path);
          if (kids !== undefined) {
            const visibleKids = filtering ? kids.filter((k) => matches(k) || descendantMatches(k, new Set())) : kids;
            if (visibleKids.length > 0) walk(visibleKids, depth + 1);
          } else {
            // Expanded but not cached yet — the page fetch is in flight.
            out.push({
              kind: "shimmer",
              path: `${node.path}/__loading`,
              node: null,
              depth: depth + 1,
              setsize: 1,
              posinset: 1,
            });
          }
        }
      }
    };
    walk(rootChildren, 0);
    return out;
  }, [childrenByDir, expandedDirs, zoneFilter]);

  const rootLoaded = childrenByDir.has("");

  /* ---------------- scroll windowing ---------------- */

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const rafRef = React.useRef(0);
  const [scrollTop, setScrollTop] = React.useState(0);
  const [viewportH, setViewportH] = React.useState(480);

  const onScroll = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      if (scrollRef.current) setScrollTop(scrollRef.current.scrollTop);
    });
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setViewportH(el.clientHeight));
    ro.observe(el);
    setViewportH(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  const total = rows.length;
  const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);
  const end = Math.min(total, Math.ceil((scrollTop + viewportH) / ROW_HEIGHT) + OVERSCAN);
  const visible = rows.slice(start, end);

  /* ---------------- roving focus state ---------------- */

  const [focusedPath, setFocusedPath] = React.useState<string | null>(null);
  const rowRefs = React.useRef(new Map<string, HTMLDivElement>());
  const pendingFocus = React.useRef(false);
  const treeHadFocus = React.useRef(false);
  const desiredFocusRef = React.useRef<string | null>(null);
  const lastFocusNonce = React.useRef(0);

  /** The single tabbable row (falls back to the first node row). */
  const activePath = React.useMemo(() => {
    if (focusedPath) {
      const hit = rows.find((r) => r.kind === "node" && r.path === focusedPath);
      if (hit) return focusedPath;
    }
    return rows.find((r) => r.kind === "node")?.path ?? null;
  }, [rows, focusedPath]);

  const focusRow = React.useCallback((path: string) => {
    pendingFocus.current = true;
    setFocusedPath(path);
  }, []);

  /** Move focus by row delta, skipping shimmer rows. */
  const moveFocus = React.useCallback(
    (fromPath: string, delta: 1 | -1) => {
      const idx = rows.findIndex((r) => r.kind === "node" && r.path === fromPath);
      if (idx < 0) return;
      let t = idx + delta;
      while (t >= 0 && t < rows.length && rows[t].kind !== "node") t += delta;
      if (t < 0 || t >= rows.length) return;
      focusRow(rows[t].path);
    },
    [rows, focusRow]
  );

  /**
   * Focus restoration + pending-request resolution (VIZ-014 §8.1):
   * runs after every commit that changes the row window, so a focus target
   * that was scrolled out of the window re-focuses when it remounts.
   */
  React.useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Resolve a breadcrumb/deep-link focus request ("" → first row).
    if (focusRequest && focusRequest.nonce !== lastFocusNonce.current) {
      lastFocusNonce.current = focusRequest.nonce;
      desiredFocusRef.current = focusRequest.path;
    }
    if (desiredFocusRef.current) {
      const target =
        desiredFocusRef.current === ""
          ? rows.find((r) => r.kind === "node")?.path ?? null
          : desiredFocusRef.current;
      const exists = target !== null && rows.some(
        (r) => r.kind === "node" && r.path === target
      );
      if (exists && target) {
        desiredFocusRef.current = null;
        pendingFocus.current = true;
        setFocusedPath(target);
        return; // the re-render (activePath = target) performs the focus
      }
      // If the row isn't mounted yet (ancestors still loading), the
      // request stays pending and re-evaluates on the next rows change.
    }

    if (!activePath) return;
    let el = rowRefs.current.get(activePath);
    if (!el) {
      // Keyboard move to a row outside the rendered window: scroll it in;
      // the scroll re-renders the window and this effect re-runs.
      if (pendingFocus.current) {
        const idx = rows.findIndex(
          (r) => r.kind === "node" && r.path === activePath
        );
        if (idx >= 0) {
          const target =
            idx * ROW_HEIGHT - container.clientHeight / 2 + ROW_HEIGHT / 2;
          const max = container.scrollHeight - container.clientHeight;
          container.scrollTop = Math.max(0, Math.min(target, Math.max(0, max)));
        }
      }
      return;
    }
    el = rowRefs.current.get(activePath)!;

    const active = document.activeElement;
    const inside = container.contains(active);
    const shouldTake =
      pendingFocus.current ||
      (treeHadFocus.current &&
        !inside &&
        (active === document.body || active === null));
    if (shouldTake) {
      el.focus({ preventScroll: true });
      el.scrollIntoView({ block: "nearest" });
    }
    pendingFocus.current = false;
  }, [activePath, rows, start, end, focusRequest]);

  /* ---------------- keyboard model ---------------- */

  const firstNodePath = rows.find((r) => r.kind === "node")?.path ?? null;
  let lastNodePath: string | null = null;
  for (const r of rows) if (r.kind === "node") lastNodePath = r.path;

  const onRowKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, row: TreeRow) => {
    if (row.kind !== "node" || !row.node) return;
    const node = row.node;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        moveFocus(row.path, 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        moveFocus(row.path, -1);
        break;
      case "ArrowRight":
        e.preventDefault();
        if (node.type === "dir") {
          if (!expandedDirs.has(node.path)) onToggleDir(node.path);
          else moveFocus(row.path, 1);
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (node.type === "dir" && expandedDirs.has(node.path)) {
          onToggleDir(node.path);
        } else if (row.depth > 0 && node.path.includes("/")) {
          const parentPath = node.path.slice(0, node.path.lastIndexOf("/"));
          focusRow(parentPath);
        }
        break;
      case "Home":
        e.preventDefault();
        if (firstNodePath) focusRow(firstNodePath);
        break;
      case "End":
        e.preventDefault();
        if (lastNodePath) focusRow(lastNodePath);
        break;
      case "Enter":
        e.preventDefault();
        if (node.type === "file") onSelectFile(node.path);
        else onToggleDir(node.path);
        break;
    }
  };

  /* ---------------- render ---------------- */

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      onFocusCapture={() => {
        treeHadFocus.current = true;
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          treeHadFocus.current = false;
        }
      }}
      className={cn("relative h-full overflow-y-auto overscroll-contain", className)}
    >
      <div
        role="tree"
        aria-label="Repository file tree"
        aria-busy={!rootLoaded || undefined}
        className="relative w-full"
        style={{ height: total * ROW_HEIGHT }}
      >
        {visible.map((row, i) => {
          const absoluteIdx = start + i;
          const top = absoluteIdx * ROW_HEIGHT;
          const indent =
            Math.min(row.depth, MAX_INDENT) * INDENT_PX + 8;

          if (row.kind === "shimmer" || !row.node) {
            return (
              <div
                key={row.path}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top,
                  height: ROW_HEIGHT,
                  left: 0,
                  right: 0,
                  paddingLeft: indent,
                }}
                className="flex items-center"
              >
                <span className="h-3 w-3 animate-pulse rounded-full bg-muted" />
                <span className="ml-2 h-2.5 w-28 animate-pulse rounded bg-muted" />
              </div>
            );
          }

          const node = row.node;
          const isDir = node.type === "dir";
          const isOpen = isDir && expandedDirs.has(node.path);
          const isSelected = !isDir && selectedPath === node.path;
          const Icon = nodeIcon(node, isOpen);

          return (
            <div
              key={row.path}
              ref={(el) => {
                if (el) rowRefs.current.set(row.path, el);
                else rowRefs.current.delete(row.path);
              }}
              role="treeitem"
              aria-level={row.depth + 1}
              aria-setsize={row.setsize}
              aria-posinset={row.posinset}
              aria-expanded={isDir ? isOpen : undefined}
              aria-selected={!isDir ? isSelected : undefined}
              tabIndex={activePath === row.path ? 0 : -1}
              onClick={() =>
                isDir ? onToggleDir(node.path) : onSelectFile(node.path)
              }
              onKeyDown={(e) => onRowKeyDown(e, row)}
              onFocus={() => setFocusedPath(row.path)}
              style={{
                position: "absolute",
                top,
                height: ROW_HEIGHT,
                left: 0,
                right: 0,
                paddingLeft: indent,
                ...(isSelected
                  ? { boxShadow: "inset 2px 0 0 0 hsl(var(--primary))" }
                  : {}),
              }}
              className={cn(
                "group flex cursor-pointer select-none items-center gap-1.5 pr-3 text-sm outline-none transition-colors",
                "hover:bg-accent/60 focus-visible:bg-accent",
                "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                isSelected && "bg-primary/10 font-medium"
              )}
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center text-muted-foreground">
                {isDir && (
                  <ChevronRight
                    aria-hidden="true"
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-150",
                      isOpen && "rotate-90"
                    )}
                  />
                )}
              </span>
              <Icon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted-foreground"
              />
              <span className="min-w-0 flex-1 truncate">
                {node.name}
              </span>
              <span
                aria-hidden="true"
                title={node.zone}
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: zoneHue(node.zone, theme) }}
              />
              <span className="hidden shrink-0 text-[11px] tabular-nums text-muted-foreground group-hover:inline">
                {formatBytes(node.size)}
              </span>
            </div>
          );
        })}
      </div>

      {rootLoaded && total === 0 && (
        <div className="absolute inset-x-0 top-2 px-3 text-center text-sm text-muted-foreground">
          No repository entries to display.
        </div>
      )}
    </div>
  );
}
