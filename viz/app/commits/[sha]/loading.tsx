import { Skeleton } from "@/components/ui/skeleton";

/**
 * Route-level loading UI for /commits/[sha] — header, stat strip and file
 * list placeholders (UI/UX §9.2). Server component; the global
 * prefers-reduced-motion rule in app/globals.css freezes the pulse.
 */
export default function CommitDetailLoading() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:px-6"
    >
      <Skeleton className="h-5 w-32" />
      <div className="glass rounded-xl p-5 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-5 w-56" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="mt-3 h-7 w-3/4" />
        <Skeleton className="mt-2 h-4 w-1/2" />
        <div className="mt-4 flex flex-wrap gap-6">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-44" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[0, 1, 2].map((index) => (
          <div key={index} className="glass rounded-lg p-3">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-2 h-6 w-16" />
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-5 shadow-sm">
        <Skeleton className="h-5 w-36" />
        <div className="mt-4 space-y-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="flex items-center gap-2">
              <Skeleton className="size-4 shrink-0 rounded-sm" />
              <Skeleton className="h-3.5 flex-1" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
