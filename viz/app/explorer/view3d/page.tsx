"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Boxes,
  FileText,
  Folder,
  GitCommitHorizontal,
  Loader2,
} from "lucide-react";
import { cn, formatCompact, formatExact } from "@/lib/utils";
import { ZONE_META, ZONE_ORDER, zoneHue } from "@/lib/brand";
import type { RepoStats } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { useThemeMode } from "@/components/explorer/use-zone-theme";

/* ------------------------------------------------------------------ */
/* 3D scene — next/dynamic, ssr:false (plan §8: WebGL must never run   */
/* during prerender). The scene module is owned by the globe/3D agent   */
/* (components/three/view3d-wrapper.tsx → FileSystem3D). The loader     */
/* wraps resolution in a catch: if the module or its chunk fails to     */
/* resolve at runtime, the stats fallback card renders instead.        */
/* ------------------------------------------------------------------ */

const View3DScene = dynamic(
  () =>
    import("@/components/three/view3d-wrapper")
      .then((mod) => ({ default: mod.default }))
      .catch(() => ({ default: View3DFallback })),
  {
    ssr: false,
    loading: () => <SceneLoading />,
  }
);

function SceneLoading() {
  return (
    <div
      className="flex h-[calc(100dvh-8rem)] items-center justify-center"
      role="status"
    >
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <Loader2 aria-hidden="true" className="h-8 w-8 animate-spin" />
        <p className="text-sm">Preparing 3D file system…</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Fallback card — stats summary from the committed stats.json         */
/* ------------------------------------------------------------------ */

function View3DFallback() {
  const theme = useThemeMode();
  const [stats, setStats] = React.useState<RepoStats | null>(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/snapshots/stats.json");
        if (!res.ok) throw new Error("unavailable");
        const json = (await res.json()) as RepoStats & {
          totalFiles?: number;
        };
        if (
          typeof json.totalFiles === "number" &&
          typeof json.totalDirs === "number" &&
          typeof json.totalCommits === "number" &&
          json.byZone
        ) {
          if (!cancelled) setStats(json);
        } else {
          throw new Error("bad shape");
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex h-[calc(100dvh-8rem)] items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            <Boxes className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-heading text-lg font-bold">
              3D scene unavailable
            </h2>
            <p className="text-sm text-muted-foreground">
              WebGL could not initialise or the 3D chunk failed to load. The
              2D tree explorer remains fully available.
            </p>
          </div>
        </div>

        <div className="mt-5">
          {failed ? (
            <p className="text-sm text-muted-foreground">
              Repository stats are unavailable right now.
            </p>
          ) : stats ? (
            <>
              <dl className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border bg-background/40 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <FileText aria-hidden="true" className="h-3.5 w-3.5" />
                    Files
                  </dt>
                  <dd
                    className="mt-1 font-heading text-xl font-bold tabular-nums"
                    title={formatExact(stats.totalFiles)}
                  >
                    {formatCompact(stats.totalFiles)}
                  </dd>
                </div>
                <div className="rounded-lg border bg-background/40 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <Folder aria-hidden="true" className="h-3.5 w-3.5" />
                    Directories
                  </dt>
                  <dd
                    className="mt-1 font-heading text-xl font-bold tabular-nums"
                    title={formatExact(stats.totalDirs)}
                  >
                    {formatCompact(stats.totalDirs)}
                  </dd>
                </div>
                <div className="rounded-lg border bg-background/40 p-3">
                  <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <GitCommitHorizontal aria-hidden="true" className="h-3.5 w-3.5" />
                    Commits
                  </dt>
                  <dd
                    className="mt-1 font-heading text-xl font-bold tabular-nums"
                    title={formatExact(stats.totalCommits)}
                  >
                    {formatCompact(stats.totalCommits)}
                  </dd>
                </div>
              </dl>

              <ul
                className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3"
                aria-label="Files per zone"
              >
                {ZONE_ORDER.map((zone) => {
                  const n = stats.byZone?.[zone]?.files ?? 0;
                  return (
                    <li key={zone} className="flex items-center gap-2 text-sm">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: zoneHue(zone, theme) }}
                      />
                      <span className="text-muted-foreground">
                        {ZONE_META[zone].label}
                      </span>
                      <span className="ml-auto tabular-nums" title={formatExact(n)}>
                        {formatCompact(n)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="space-y-2" aria-hidden="true">
              <div className="h-16 animate-pulse rounded-lg bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            </div>
          )}
        </div>

        <div className="mt-6">
          <Link
            href="/explorer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            Browse the 2D tree explorer
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

/**
 * /explorer/view3d — 3D file-system view (VIZ-011 §8.2 view 4). The scene
 * mounts client-only (ssr:false); a loader catch swaps in the stats
 * fallback card when the 3D module is absent or fails to load.
 */
export default function View3DPage() {
  return (
    <div className="relative">
      <h1 className="sr-only">3D File System</h1>
      <View3DScene />
    </div>
  );
}
