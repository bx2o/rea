import Link from "next/link";

/**
 * Site footer — basic website function (AAA+).
 * Program identity, primary links, external repo link, model-lock note.
 * Server component (no interactivity), semantic <footer>/<nav>.
 */
export function SiteFooter() {
  return (
    <footer className="border-t px-4 py-5 text-xs text-muted-foreground md:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-0.5">
          <p className="font-medium text-foreground">Stremiium Repo Viz</p>
          <p>SC-REA-NEOBANK-5.0 · Interactive repository learning environment</p>
          <p>Model lock: auto (kilo-auto/free) · Offline-first</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/learn" className="rounded hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Learn
          </Link>
          <Link href="/tours" className="rounded hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Tours
          </Link>
          <Link href="/councils" className="rounded hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Councils
          </Link>
          <a
            href="https://github.com/bx2o/rea"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            GitHub repository (opens in a new tab)
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;
