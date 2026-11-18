"use client";

/**
 * TimelineSkeleton — loading state for the /commits route (VIZ-013 §9.2:
 * "6 card skeletons"; this route uses 5) and for the useSearchParams
 * Suspense fallback inside the client page.
 *
 * Pure CSS shimmer (`animate-pulse`); the global prefers-reduced-motion
 * rule in app/globals.css freezes it to a static skeleton. No client
 * features, so it renders from both server (loading.tsx) and client code.
 */
export function TimelineSkeleton({ cards = 5 }: { cards?: number }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <div className="h-7 w-32 animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-56 animate-pulse rounded bg-muted" />
        </div>
        <div className="h-9 w-full animate-pulse rounded-md bg-muted sm:w-72" />
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="glass rounded-lg p-3">
            <div className="h-3 w-16 animate-pulse rounded bg-muted" />
            <div className="mt-2 h-6 w-14 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-4 w-px -translate-x-1/2 bg-border" />
        <ol className="space-y-4">
          {Array.from({ length: cards }, (_, i) => (
            <li key={i} className="relative pl-10 md:pl-12">
              <span className="absolute left-0 top-4 size-8 animate-pulse rounded-full bg-muted" />
              <div className="glass rounded-xl p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 animate-pulse rounded-full bg-muted" />
                    <div className="h-4 w-28 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                    <div className="ml-auto h-5 w-14 animate-pulse rounded-md bg-muted" />
                  </div>
                  <div className="h-3.5 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="h-3.5 w-1/2 animate-pulse rounded bg-muted" />
                  <div className="flex gap-2 pt-1">
                    <div className="h-4 w-14 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-12 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-12 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
