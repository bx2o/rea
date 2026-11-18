"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

import { PRIMARY_NAV, routeLabelForPath } from "@/components/nav/mobile-nav";
import { cn } from "@/lib/utils";

/**
 * Site-level breadcrumbs (WCAG 2.2 - 2.4.8 Location).
 *
 * Derived entirely from the pathname: Home > Section > Subsection, with every
 * segment a real link and aria-current="page" on the final one. The shell
 * renders this above {children} on every non-home route; on "/" the component
 * returns null so the page keeps its single <h1> as the only page heading.
 */

interface Crumb {
  href: string;
  label: string;
}

function humanizeSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function crumbsForPath(pathname: string): Crumb[] {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const crumbs: Crumb[] = [{ href: "/", label: "Home" }];
  let accumulated = "";

  for (const segment of clean.split("/").filter(Boolean)) {
    accumulated += `/${segment}`;
    const known = PRIMARY_NAV.find((item) => item.href === accumulated);
    const isCommitSha = /^[0-9a-f]{7,40}$/i.test(segment);
    const label =
      known?.label ??
      (isCommitSha ? routeLabelForPath(accumulated) : humanizeSegment(segment));
    crumbs.push({ href: accumulated, label });
  }

  return crumbs;
}

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  if (pathname === "/" || pathname === "") return null;

  const crumbs = crumbsForPath(pathname);

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-5", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
        {crumbs.map((crumb, index) => {
          const current = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="size-3.5 shrink-0 opacity-60" aria-hidden="true" />
              ) : (
                <Home className="size-3.5 shrink-0 opacity-60" aria-hidden="true" />
              )}
              <Link
                href={crumb.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-sm px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  current ? "font-semibold text-foreground" : "hover:text-foreground"
                )}
              >
                {crumb.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
