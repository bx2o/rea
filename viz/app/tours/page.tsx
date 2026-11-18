"use client";

/**
 * /tours — guided tours (FC-03, VIZ-025).
 *
 * `public/snapshots/tours.json` shipped with 3 tours (9 steps, each with an
 * in-app route) but no UI consumed it, so the "guided tours" promise of
 * plan §1 goal 3 was unreachable. This route is the entry point: it lists
 * the tours and hosts the step-through overlay (components/learn/tour-player).
 *
 * The route is deliberately standalone — `app/learn/page.tsx` is owned by
 * another workstream, so the tours get their own URL instead of being
 * mounted inside the decks page.
 */

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, BookOpen, Clock, Compass, MapPin, Play } from "lucide-react";

import { TourPlayer, useTours } from "@/components/learn/tour-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

/** Same recommended order as /learn, expressed as in-app routes. */
const LEARNING_PATH = [
  { href: "/learn", step: "1", title: "Orientation deck", hint: "Start with the six zones." },
  { href: "/learn", step: "2", title: "Program Brief deck", hint: "Thesis, councils, dossiers." },
  { href: "/tours", step: "3", title: "Repo tour", hint: "Walk the live views in order." },
  { href: "/learn", step: "4", title: "Councils deck", hint: "Routing rules and SLAs." },
] as const;

/** Rough reading time per step — only used for the "estimated duration" hint. */
const minutesFor = (steps: number) => Math.max(1, Math.round(steps * 0.75));

export default function ToursPage() {
  // Client route — set the document title on mount (SSR-safe: effect only).
  useEffect(() => {
    document.title = "Guided Tours · Stremiium Repo Viz";
  }, []);

  const { tours, loading, error, reload } = useTours();
  const [activeTourId, setActiveTourId] = useState<string | null>(null);
  const [playerOpen, setPlayerOpen] = useState(false);

  const startTour = useCallback((tourId: string) => {
    setActiveTourId(tourId);
    setPlayerOpen(true);
  }, []);

  return (
    <div className="container py-8">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Learn
          </p>
          <h1 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground">
            Guided tours
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Pick a tour and step through it at your own pace — every step names the
            view it opens and what to look for there. The overlay keeps your place
            if you navigate away.
          </p>
        </div>
        <Badge variant="secondary" className="gap-1.5">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-muted-foreground" />
          Snapshot · public/snapshots/tours.json
        </Badge>
      </header>

      {loading ? (
        <div role="status" aria-live="polite">
          <p className="mb-4 text-sm text-muted-foreground">Loading guided tours…</p>
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <li
                key={index}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4"
              >
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-9 w-28" />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {!loading && error !== null ? (
        <div
          role="alert"
          className="rounded-lg border border-destructive/40 bg-card p-6 text-card-foreground"
        >
          <p className="font-medium">Could not load the guided tours</p>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Tour data lives in <code>public/snapshots/tours.json</code> — regenerate it
            with <code>npm run snapshot</code> if the file is missing.
          </p>
          <Button variant="outline" size="sm" className="mt-3" onClick={reload}>
            Try again
          </Button>
        </div>
      ) : null}

      {!loading && error === null && tours !== null && tours.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No guided tours are defined in the snapshot yet.
        </p>
      ) : null}

      {!loading && error === null && tours !== null && tours.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => (
            <li
              key={tour.id}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-heading text-base font-semibold leading-snug text-foreground">
                    {tour.title}
                  </h2>
                  <Badge variant="outline">
                    {tour.steps.length} {tour.steps.length === 1 ? "step" : "steps"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{tour.description}</p>
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  Estimated duration: ~{minutesFor(tour.steps.length)} min
                  <span aria-hidden="true"> · </span>
                  {tour.steps.length} stops
                </p>
                <ol className="space-y-1.5 text-xs text-muted-foreground">
                  {tour.steps.map((step, index) => (
                    <li key={step.id} className="flex items-start gap-2">
                      <span className="mt-0.5 font-mono text-foreground">
                        {index + 1}.
                      </span>
                      <span className="min-w-0">
                        <span className="font-medium text-foreground">{step.title}</span>
                        <span className="ml-1.5 inline-flex items-center gap-1 font-mono">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          {step.route}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
                <Button
                  className="mt-auto w-fit"
                  onClick={() => startTour(tour.id)}
                >
                  <Play aria-hidden="true" />
                  Start tour
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Step-through overlay — role="dialog" aria-modal, focus trapped. */}
      <TourPlayer
        tours={tours}
        tourId={activeTourId ?? undefined}
        onTourChange={setActiveTourId}
        open={playerOpen}
        onClose={() => setPlayerOpen(false)}
      />
    </div>
  );
}
