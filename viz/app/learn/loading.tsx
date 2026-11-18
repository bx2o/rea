/**
 * /learn route loading skeleton (VIZ-030 · VIZ-014 §8.7).
 * Static pulse blocks — the reduced-motion override in globals.css
 * (prefers-reduced-motion) collapses the animation to a static skeleton.
 */

export default function LearnLoading() {
  return (
    <main className="container py-8" aria-busy="true">
      <span role="status" className="sr-only">
        Loading learning decks…
      </span>
      <div className="mb-2 h-9 w-32 animate-pulse rounded bg-muted" aria-hidden="true" />
      <div className="mb-8 h-4 w-full max-w-2xl animate-pulse rounded bg-muted" aria-hidden="true" />
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-hidden="true">
        {[0, 1, 2, 3].map((index) => (
          <li key={index} className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="h-1 w-full bg-muted" />
            <div className="space-y-3 p-4">
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-full animate-pulse rounded bg-muted" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-9 w-28 animate-pulse rounded bg-muted" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
