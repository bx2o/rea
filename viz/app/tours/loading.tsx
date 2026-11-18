/**
 * /tours — route-level loading skeleton (FC-03).
 *
 * Mirrors the layout the route renders once the tours snapshot resolves:
 * a heading block plus three tour cards.
 */
import { Skeleton } from "@/components/ui/skeleton";

export default function ToursLoading() {
  return (
    <div className="container py-8" aria-busy="true">
      <p role="status" className="sr-only">
        Loading guided tours…
      </p>
      <header className="mb-8">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="mt-2 h-9 w-64" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
      </header>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <li key={index} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
            <Skeleton className="h-9 w-28" />
          </li>
        ))}
      </ul>
    </div>
  );
}
