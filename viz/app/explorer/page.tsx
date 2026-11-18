"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Database } from "lucide-react";
import { FileTree } from "@/components/explorer/file-tree";
import { FileViewer } from "@/components/explorer/file-viewer";
import { Breadcrumb } from "@/components/explorer/breadcrumb";
import { useThemeMode } from "@/components/explorer/use-zone-theme";
import { Skeleton } from "@/components/ui/skeleton";
import { ZONE_META, ZONE_ORDER, zoneHue, type Zone } from "@/lib/brand";
import { cn } from "@/lib/utils";
import type { ApiEnvelope, FileNode } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Explorer state contract                                             */
/* ------------------------------------------------------------------ */

/**
 * Default expansion (VIZ-020): root (""), docs/, prompts/ and execution/
 * open one level; rea/ is collapsed by default (plan §8 large-repo
 * mitigation). "" is implicit — the root level always renders — and is
 * filtered out of the serialized ?expand= param.
 */
const DEFAULT_EXPANDED = ["", "docs", "prompts", "execution"];

/** Walk the snapshot tree root down to `path` and return its children. */
function snapshotChildrenAt(
  root: FileNode[],
  path: string
): FileNode[] | null {
  if (path === "") return root;
  let level = root;
  for (const seg of path.split("/")) {
    const dir = level.find((n) => n.type === "dir" && n.name === seg);
    if (dir === undefined || dir.children === undefined) return null;
    level = dir.children;
  }
  return level;
}

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

/**
 * /explorer — two-pane repository browser (VIZ-020 §7, layout VIZ-013 §6.2):
 * virtualized tree (left ~40%) + file viewer (right ~60%), resizable via a
 * keyboard/pointer divider; on mobile the tree is full-width and the viewer
 * is a fixed bottom sheet (VIZ-013 §8.2).
 *
 * State is URL-synced: ?path=<selected file>&expand=<comma-separated
 * expanded dirs> — every view is a shareable deep link (VIZ-020 §5).
 * Children are fetched lazily per directory via GET /api/tree?path=, with a
 * client-side tree.json snapshot fallback on 4xx/5xx (VIZ-021 contract).
 */
export default function ExplorerPage() {
  return (
    <React.Suspense fallback={<ExplorerSkeleton />}>
      <Explorer />
    </React.Suspense>
  );
}

function Explorer() {
  const router = useRouter();
  const params = useSearchParams();
  const theme = useThemeMode();
  const isMobile = useIsMobile();

  /* ---------------- URL-derived state ---------------- */

  const selectedPath = params.get("path") || null;
  const expandParam = params.get("expand");

  const expandedDirs = React.useMemo<Set<string>>(() => {
    if (expandParam === null) return new Set(DEFAULT_EXPANDED);
    return new Set(
      expandParam
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "")
    );
  }, [expandParam]);

  /* ---------------- local state ---------------- */

  const [zoneFilter, setZoneFilter] = React.useState<Set<Zone>>(new Set());
  const [childrenByDir, setChildrenByDir] = React.useState<
    Map<string, FileNode[]>
  >(new Map());
  const [snapshotMode, setSnapshotMode] = React.useState(false);
  const [liveMessage, setLiveMessage] = React.useState("");
  const [focusRequest, setFocusRequest] = React.useState<{
    path: string;
    nonce: number;
  } | null>(null);
  const [treeWidth, setTreeWidth] = React.useState<number | null>(null);

  const nonceRef = React.useRef(0);
  const inFlight = React.useRef<Set<string>>(new Set());
  const snapshotTreeRef = React.useRef<FileNode[] | null | undefined>(undefined);

  const announce = React.useCallback((message: string) => {
    setLiveMessage(message);
  }, []);

  /* ---------------- snapshot fallback ---------------- */

  const ensureSnapshot = React.useCallback(async (): Promise<FileNode[] | null> => {
    if (snapshotTreeRef.current !== undefined) return snapshotTreeRef.current;
    try {
      const res = await fetch("/snapshots/tree.json");
      if (!res.ok) throw new Error("snapshot unavailable");
      const json = (await res.json()) as { root?: FileNode[] };
      snapshotTreeRef.current = Array.isArray(json.root) ? json.root : null;
    } catch {
      snapshotTreeRef.current = null;
    }
    return snapshotTreeRef.current;
  }, []);

  /* ---------------- lazy children loading ---------------- */

  const loadChildren = React.useCallback(
    async (dirPath: string) => {
      if (inFlight.current.has(dirPath)) return;
      inFlight.current.add(dirPath);
      try {
        // Live API first (VIZ-021 envelope { source, data }).
        try {
          const res = await fetch(
            `/api/tree?path=${encodeURIComponent(dirPath)}`
          );
          if (res.ok) {
            const env = (await res.json()) as ApiEnvelope<FileNode[]>;
            const data = env?.data;
            if (Array.isArray(data)) {
              setChildrenByDir((prev) => new Map(prev).set(dirPath, data));
              announce(`Loaded ${data.length} items`);
              return;
            }
          }
        } catch {
          // network error → snapshot fallback below
        }
        // 4xx/5xx or malformed → navigate the committed tree.json snapshot
        // client-side (VIZ-020 offline fallback).
        const root = await ensureSnapshot();
        if (root === null) {
          setChildrenByDir((prev) => new Map(prev).set(dirPath, []));
          announce(
            `Failed to load ${
              dirPath === "" ? "the repository tree" : dirPath
            }`
          );
          return;
        }
        const kids = snapshotChildrenAt(root, dirPath);
        setChildrenByDir((prev) => new Map(prev).set(dirPath, kids ?? []));
        setSnapshotMode(true);
        announce(`Loaded ${kids?.length ?? 0} items from snapshot`);
      } finally {
        inFlight.current.delete(dirPath);
      }
    },
    [announce, ensureSnapshot]
  );

  React.useEffect(() => {
    const targets = new Set<string>(["", ...expandedDirs]);
    for (const t of targets) {
      if (!childrenByDir.has(t)) void loadChildren(t);
    }
  }, [expandedDirs, childrenByDir, loadChildren]);

  /* ---------------- URL updates ---------------- */

  const updateUrl = React.useCallback(
    (next?: { path?: string | null; expand?: Set<string> }) => {
      const nextPath = next?.path !== undefined ? next.path : selectedPath;
      const nextExpand = next?.expand ?? expandedDirs;
      const search = new URLSearchParams();
      if (nextPath) search.set("path", nextPath);
      // Keep an explicit (even empty) expand param once the URL carries one,
      // so a fully-collapsed state survives reloads.
      const includeExpand = next?.expand !== undefined || expandParam !== null;
      const exp = [...nextExpand]
        .filter((p) => p !== "")
        .sort()
        .join(",");
      if (includeExpand) search.set("expand", exp);
      const qs = search.toString();
      router.replace(qs ? `/explorer?${qs}` : "/explorer", { scroll: false });
    },
    [router, selectedPath, expandedDirs, expandParam]
  );

  const onToggleDir = React.useCallback(
    (dirPath: string) => {
      const next = new Set([...expandedDirs].filter((p) => p !== ""));
      if (next.has(dirPath)) next.delete(dirPath);
      else next.add(dirPath);
      updateUrl({ expand: next });
    },
    [expandedDirs, updateUrl]
  );

  const onSelectFile = React.useCallback(
    (path: string) => {
      if (path !== selectedPath) updateUrl({ path });
    },
    [selectedPath, updateUrl]
  );

  const onCloseViewer = React.useCallback(() => {
    updateUrl({ path: null });
  }, [updateUrl]);

  /** Breadcrumb navigation: expand ancestors + target, focus its row. */
  const navigateToDir = React.useCallback(
    (dirPath: string) => {
      const next = new Set([...expandedDirs].filter((p) => p !== ""));
      if (dirPath !== "") {
        let acc = "";
        for (const seg of dirPath.split("/")) {
          acc = acc ? `${acc}/${seg}` : seg;
          next.add(acc);
        }
      }
      updateUrl({ expand: next });
      setFocusRequest({ path: dirPath, nonce: ++nonceRef.current });
    },
    [expandedDirs, updateUrl]
  );

  /* ---------------- selection resolution ---------------- */

  /**
   * Walk the cached levels from the root: undefined = ancestors still
   * loading, null = definitively not found (stale deep link), FileNode =
   * resolved. Keeps ?path= dir links (/councils deep links) and stale links
   * graceful — they never crash the view.
   */
  const selectedNode: FileNode | null | undefined = React.useMemo(() => {
    if (!selectedPath) return null;
    const segs = selectedPath.split("/");
    let level = childrenByDir.get("");
    if (level === undefined) return undefined;
    let acc = "";
    for (let i = 0; i < segs.length; i++) {
      const hit = level.find((n) => n.name === segs[i]);
      if (!hit) return null;
      if (i === segs.length - 1) return hit;
      if (hit.type !== "dir") return null;
      acc = acc ? `${acc}/${segs[i]}` : segs[i];
      const kids = childrenByDir.get(acc);
      if (kids === undefined) return undefined;
      level = kids;
    }
    return null;
  }, [selectedPath, childrenByDir]);

  const viewerPath =
    selectedNode !== null && selectedNode !== undefined && selectedNode.type === "file"
      ? selectedPath
      : null;
  const pending = selectedPath !== null && selectedNode === undefined;
  const dirSelected = selectedNode?.type === "dir" === true;

  // Deep links: auto-expand the ancestors of ?path= so the selection is
  // visible in the tree (VIZ-020 shareable deep links).
  React.useEffect(() => {
    if (!selectedPath) return;
    const segs = selectedPath.split("/");
    if (segs.length <= 1) return;
    const next = new Set([...expandedDirs].filter((p) => p !== ""));
    let acc = "";
    let changed = false;
    for (const seg of segs.slice(0, -1)) {
      acc = acc ? `${acc}/${seg}` : seg;
      if (!next.has(acc)) {
        next.add(acc);
        changed = true;
      }
    }
    if (changed) updateUrl({ expand: next });
  }, [selectedPath, expandedDirs, updateUrl]);

  // A ?path= that resolves to a directory: expand it and focus its row
  // (councils "View in Explorer" deep links).
  React.useEffect(() => {
    if (selectedNode?.type === "dir" && !expandedDirs.has(selectedNode.path)) {
      const next = new Set([...expandedDirs].filter((p) => p !== ""));
      next.add(selectedNode.path);
      updateUrl({ expand: next });
      setFocusRequest({ path: selectedNode.path, nonce: ++nonceRef.current });
    }
  }, [selectedNode, expandedDirs, updateUrl]);

  /* ---------------- zone filter ---------------- */

  const toggleZone = React.useCallback((zone: Zone) => {
    setZoneFilter((prev) => {
      const next = new Set(prev);
      if (next.has(zone)) next.delete(zone);
      else next.add(zone);
      return next;
    });
  }, []);

  /* ---------------- pane divider (drag + keyboard) ---------------- */

  const paneRef = React.useRef<HTMLDivElement>(null);
  const dragRef = React.useRef<{ startX: number; startW: number } | null>(null);

  const clampWidth = (w: number) => {
    const total = paneRef.current?.getBoundingClientRect().width ?? 1200;
    return Math.round(Math.min(Math.max(w, 220), total * 0.75));
  };

  const onDividerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const current = treeWidth ?? (paneRef.current?.getBoundingClientRect().width ?? 1000) * 0.4;
    setTreeWidth(clampWidth(current + (e.key === "ArrowLeft" ? -24 : 24)));
  };

  const onDividerPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const wrap = paneRef.current;
    if (!wrap) return;
    const current = treeWidth ?? wrap.getBoundingClientRect().width * 0.4;
    dragRef.current = { startX: e.clientX, startW: current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onDividerPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const next = dragRef.current.startW + (e.clientX - dragRef.current.startX);
    setTreeWidth(clampWidth(next));
  };
  const onDividerPointerUp = () => {
    dragRef.current = null;
  };

  /* ---------------- render ---------------- */

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Skip link to the viewer panel (VIZ-014 §8.9) */}
      <a
        href="#file-viewer"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to file viewer
      </a>
      <h1 className="sr-only">Explorer — repository tree and file viewer</h1>

      {/* Toolbar: breadcrumb + zone filter chips (VIZ-013 §6.2) */}
      <div className="flex flex-col gap-2 border-b bg-card/60 px-3 py-2 md:flex-row md:items-center md:gap-3">
        <Breadcrumb path={selectedPath} onNavigate={navigateToDir} className="md:min-w-0 md:flex-1" />
        <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Filter tree by zone">
          {ZONE_ORDER.map((zone) => {
            const active = zoneFilter.has(zone);
            const hue = zoneHue(zone, theme);
            return (
              <button
                key={zone}
                type="button"
                aria-pressed={active}
                title={`Show only ${ZONE_META[zone].label} zone files`}
                onClick={() => toggleZone(zone)}
                className={cn(
                  "inline-flex min-h-[44px] items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:min-h-[32px]",
                  !active && "border-border text-muted-foreground hover:text-foreground"
                )}
                style={
                  active
                    ? {
                        borderColor: `${hue}66`,
                        backgroundColor: `${hue}1a`,
                        color: zoneHue(zone, theme, true),
                      }
                    : undefined
                }
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: hue }}
                />
                {ZONE_META[zone].label}
                <span className="sr-only"> zone</span>
              </button>
            );
          })}
          {snapshotMode && (
            <span
              title="Live git unavailable — showing committed snapshot data (VIZ-013 §9.3)"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-border bg-secondary px-3 text-xs font-medium text-secondary-foreground md:min-h-[32px]"
            >
              <Database aria-hidden="true" className="h-3.5 w-3.5" />
              snapshot mode
            </span>
          )}
        </div>
      </div>

      {/* Two-pane region: tree + divider + viewer (mobile: tree + sheet) */}
      <div ref={paneRef} className="flex min-h-0 flex-1 flex-col md:flex-row">
        <section
          aria-label="Repository file tree"
          className="min-h-0 flex-1 border-b md:flex-none md:border-b-0 md:border-r md:w-[var(--tree-w,40%)]"
          style={
            treeWidth !== null
              ? ({ "--tree-w": `${treeWidth}px` } as React.CSSProperties)
              : undefined
          }
        >
          <FileTree
            className="h-full"
            childrenByDir={childrenByDir}
            expandedDirs={expandedDirs}
            selectedPath={viewerPath}
            zoneFilter={zoneFilter}
            focusRequest={focusRequest}
            onToggleDir={onToggleDir}
            onSelectFile={onSelectFile}
          />
        </section>

        <div
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize tree and viewer panes"
          aria-valuenow={treeWidth ?? undefined}
          tabIndex={0}
          onKeyDown={onDividerKeyDown}
          onPointerDown={onDividerPointerDown}
          onPointerMove={onDividerPointerMove}
          onPointerUp={onDividerPointerUp}
          onPointerCancel={onDividerPointerUp}
          className="hidden w-1.5 shrink-0 cursor-col-resize bg-border transition-colors hover:bg-primary/40 focus-visible:bg-primary/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:block"
        />

        <FileViewer
          path={viewerPath}
          node={selectedNode ?? null}
          pending={pending}
          dirSelected={dirSelected}
          isMobile={isMobile}
          onClose={onCloseViewer}
        />
      </div>

      {/* Async load announcements (SC 4.1.3, VIZ-014 §8.7) */}
      <div aria-live="polite" role="status" className="sr-only">
        {liveMessage}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Suspense fallback (route loading.tsx mirrors this layout)           */
/* ------------------------------------------------------------------ */

function ExplorerSkeleton() {
  return (
    <div className="flex h-full flex-col" aria-busy="true" aria-label="Loading explorer">
      <div className="flex flex-wrap items-center gap-2 border-b bg-card/60 px-3 py-2">
        <Skeleton className="h-5 w-48" />
        <div className="ml-auto flex gap-1">
          {ZONE_ORDER.map((z) => (
            <Skeleton key={z} className="h-6 w-20 rounded-full" />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="min-h-0 flex-1 space-y-1 border-b p-3 md:w-[40%] md:flex-none md:border-b-0 md:border-r">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-7" />
          ))}
        </div>
        <div className="hidden min-w-0 flex-1 flex-col p-6 md:flex">
          <Skeleton className="h-6 w-64" />
          <Skeleton className="mt-3 h-4 w-40" />
          <div className="mt-6 space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-4" style={{ width: `${88 - (i % 3) * 18}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
