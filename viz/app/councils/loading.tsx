/**
 * VIZ-031 — Route-level skeleton for /councils (VIZ-013 loading states).
 * Mirrors the page layout: header + stat chips, 70/30 graph/details grid,
 * summary-table block. Server component — the client page takes over once
 * its data fetch resolves.
 */

export default function CouncilsLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8" aria-busy="true">
      <p role="status" aria-live="polite" className="sr-only">
        Loading councils view.
      </p>

      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2.5">
          <div className="h-8 w-44 animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-full max-w-xl animate-pulse rounded-md bg-muted" />
        </div>
        <div className="flex gap-2 sm:gap-3" aria-hidden="true">
          <div className="h-[62px] w-[96px] animate-pulse rounded-lg bg-muted" />
          <div className="h-[62px] w-[96px] animate-pulse rounded-lg bg-muted" />
          <div className="h-[62px] w-[96px] animate-pulse rounded-lg bg-muted" />
        </div>
      </div>

      <div className="mb-4 h-4 w-72 animate-pulse rounded bg-muted" aria-hidden="true" />

      <div className="grid gap-4 lg:grid-cols-[7fr_3fr]">
        <div className="h-[480px] animate-pulse rounded-lg border bg-muted sm:h-[560px] lg:h-[600px]" />
        <div className="h-[320px] animate-pulse rounded-lg border bg-muted sm:h-[380px] lg:h-[600px]" />
      </div>

      <div className="mt-10 space-y-3" aria-hidden="true">
        <div className="h-5 w-44 animate-pulse rounded bg-muted" />
        <div className="h-44 animate-pulse rounded-lg border bg-muted" />
      </div>
    </div>
  );
}
