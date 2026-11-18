"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  FolderTree,
  GraduationCap,
  LayoutDashboard,
  SearchX,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * App-level 404 (UX-16 remediation: unknown routes used to render the stock
 * Next.js "404: This page could not be found." page — no brand chrome, no
 * navigation, a dead end).
 *
 * Rendered inside the root layout, so the app shell (sidebar, top bar, skip
 * link) is already in place; this page adds the brand surface, the path that
 * was requested, and three ways out (Overview / Explorer / Learn) per UI/UX
 * §9.3 "never a dead end".
 *
 * Client component: the requested path comes from usePathname().
 */
export default function NotFound() {
  const pathname = usePathname();
  const requested = pathname && pathname !== "/" ? pathname : null;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 md:px-6 md:py-14">
      <section
        aria-labelledby="not-found-heading"
        className="glass rounded-2xl p-8 text-center shadow-sm"
      >
        <SearchX
          aria-hidden="true"
          className="mx-auto size-9 text-muted-foreground"
        />
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error 404
        </p>
        <h1
          id="not-found-heading"
          className="mt-1 font-heading text-2xl font-semibold tracking-tight"
        >
          Not found
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {requested === null ? (
            <>This address does not match anything in the repository view.</>
          ) : (
            <>
              Nothing in the repository view matches{" "}
              <span className="font-mono break-all text-foreground">
                {requested}
              </span>
              .
            </>
          )}
        </p>

        <nav
          aria-label="Suggested destinations"
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <LayoutDashboard aria-hidden="true" />
            Back to overview
          </Link>
          <Link
            href="/explorer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <FolderTree aria-hidden="true" />
            Explore files
          </Link>
          <Link
            href="/learn"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <GraduationCap aria-hidden="true" />
            Learn the system
          </Link>
        </nav>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Compass aria-hidden="true" className="size-3.5" />
          Commits, councils and the 3D map are reachable from the sidebar.
        </p>
      </section>
    </div>
  );
}
