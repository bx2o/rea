"use client";

/** /globe loading skeleton (VIZ-020 segment loading state; VIZ-013 §9 shapes). */
export default function GlobeLoading() {
  return (
    // Renders into the AppShell's <main id="main"> container — no duplicate main landmark.
    <div className="w-full" aria-busy="true">
      <div className="relative min-h-[70vh] overflow-hidden rounded-2xl border border-border/60 bg-secondary/40">
        <div
          className="animate-pulse absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/50"
          aria-hidden="true"
        />
        <div className="absolute inset-x-4 bottom-4 space-y-3 rounded-2xl border border-border/60 bg-card/80 p-5 sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-md">
          <div className="h-3 w-20 rounded bg-muted" aria-hidden="true" />
          <div className="h-7 w-2/3 rounded bg-muted" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-muted/70" aria-hidden="true" />
          <div className="h-4 w-5/6 rounded bg-muted/70" aria-hidden="true" />
          <div className="grid grid-cols-2 gap-2 pt-1">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="h-4 rounded bg-muted/60"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <p role="status" className="sr-only">
        Loading the zone globe.
      </p>
    </div>
  );
}
