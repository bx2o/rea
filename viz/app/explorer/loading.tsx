import { Skeleton } from "@/components/ui/skeleton";
import { ZONE_ORDER } from "@/lib/brand";

/**
 * /explorer segment skeleton (VIZ-013 §9.2): toolbar, 12 shimmer tree rows,
 * and a viewer-column placeholder. Shimmer is frozen automatically under
 * prefers-reduced-motion by the global rule in globals.css.
 */
export default function ExplorerLoading() {
  return (
    <div
      className="flex h-full flex-col"
      aria-busy="true"
      aria-label="Loading explorer"
    >
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
        <div className="hidden min-w-0 flex-1 p-6 md:block">
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
