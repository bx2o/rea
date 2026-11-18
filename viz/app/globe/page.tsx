"use client";

/**
 * /globe — Globe hero view (VIZ-020; VIZ-011 §8.2 view 7).
 *
 * Full-viewport hero (min-h-[70vh]) with the cobe globe behind a liquid-glass
 * overlay card: title, zone legend in fixed order with file counts, and a
 * dynamic text takeaway. Data comes from the committed offline snapshot
 * `public/snapshots/stats.json` (VIZ-022 contracts); marker colors/legend hues
 * all resolve through `viz/lib/brand.ts` (VIZ-017 — no hardcoded zone hex).
 */

import { useMemo } from "react";
import Link from "next/link";
import statsJson from "../../public/snapshots/stats.json";
import GlobeHero, { buildZoneMarkers } from "@/components/three/globe-hero";
import { LEXICON, ZONE_META, ZONE_ORDER, zoneHue } from "@/lib/brand";
import type { RepoStats } from "@/lib/types";
import { formatExact } from "@/lib/utils";

const repoStats = statsJson as RepoStats;

export default function GlobePage() {
  const markers = useMemo(() => buildZoneMarkers(repoStats.byZone), []);

  // Fixed legend order, ranked by file count for the takeaway sentence.
  const ranked = useMemo(
    () =>
      ZONE_ORDER.map((zone) => ({
        zone,
        files: repoStats.byZone[zone]?.files ?? 0,
      })).sort((a, b) => b.files - a.files),
    []
  );

  const totalFiles = repoStats.totalFiles;
  const top = ranked[0];
  const second = ranked[1];
  const share = (files: number) =>
    totalFiles > 0 ? Math.round((files / totalFiles) * 100) : 0;

  return (
    // Renders into the AppShell's <main id="main"> container (VIZ-020 shell)
    // — plain fragment content, no duplicate main landmark or page container.
    <div className="w-full">
      <section
        aria-labelledby="globe-heading"
        className="relative min-h-[70vh] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-background via-background to-secondary/60"
      >
        <div className="absolute inset-0">
          <GlobeHero markers={markers} className="h-full w-full" />
        </div>

        {/* Liquid-glass overlay card (VIZ-018 §8.5 accent surface). */}
        <div className="glass absolute inset-x-4 bottom-4 max-h-[75%] overflow-auto rounded-2xl p-5 shadow-xl sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-md sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Repo identity
          </p>
          <h1
            id="globe-heading"
            className="mt-1 font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Stremiium Repo — Zone Globe
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {ZONE_META[top.zone].label} dominates the workspace with{" "}
            {formatExact(top.files)} files ({share(top.files)}% of{" "}
            {formatExact(totalFiles)}), followed by{" "}
            {ZONE_META[second.zone].label} at {share(second.files)}%. Marker
            size on the globe tracks each zone share of the repository.
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {ranked.map(({ zone, files }) => (
              <li key={zone} className="flex items-center gap-2 text-sm">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: zoneHue(zone, "dark") }}
                />
                <span className="min-w-0 truncate">
                  {ZONE_META[zone].label}
                </span>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {formatExact(files)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="globe-about" className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-card/60 p-5">
          <h2 id="globe-about" className="font-heading text-lg font-semibold tracking-tight">
            What this view shows
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Six markers, one per repository zone in fixed legend order. Marker
            colors come from the zone hues (VIZ-017) and each diameter scales
            with the zone file count from the offline snapshot. Rotation pauses
            automatically when your system prefers reduced motion, and the
            control in the corner of the globe toggles it at any time.
          </p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-5">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Keep exploring
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The globe is an identity view — the spatial map of every folder
            lives in the 3D file system.
          </p>
          <Link
            href="/explorer/view3d"
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-primary/10 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {LEXICON.explore} the 3D file system
          </Link>
          <p className="mt-3 text-[11px] text-muted-foreground">
            Data: offline snapshot · public/snapshots/stats.json — regenerate
            with pnpm snapshot.
          </p>
        </div>
      </section>
    </div>
  );
}
