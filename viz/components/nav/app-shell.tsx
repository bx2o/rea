"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  FolderTree,
  Globe2,
  GraduationCap,
  Hexagon,
  History,
  LayoutDashboard,
  Network,
  Plus,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * App shell (VIZ-020, layout per VIZ-013 §6 / VIZ-011 §8.5):
 * - Desktop: fixed left sidebar + sticky top bar.
 * - Mobile: thumb-zone Flo menu (bottom-right FAB fanning nav items in an arc,
 *   ≥44px targets, VIZ-013 §8).
 * - Skip-to-content link and <main id="main"> landmark (VIZ-014 §8.9).
 */

const NAV_ITEMS = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/explorer", label: "Explorer", icon: FolderTree },
  { href: "/commits", label: "Commits", icon: History },
  { href: "/globe", label: "Globe", icon: Globe2 },
  { href: "/learn", label: "Learn", icon: GraduationCap },
  { href: "/councils", label: "Councils", icon: Network },
] as const;

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Fan-out arc in the bottom-right thumb sweep: straight up → straight left. */
function floPosition(index: number, total: number): { x: number; y: number } {
  const RADIUS = 92;
  const span = total > 1 ? 90 / (total - 1) : 0;
  const angle = (-90 - index * span) * (Math.PI / 180);
  return { x: Math.cos(angle) * RADIUS, y: Math.sin(angle) * RADIUS };
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [floOpen, setFloOpen] = React.useState(false);
  const fabRef = React.useRef<HTMLButtonElement | null>(null);
  const floMenuId = React.useId();

  // Close the Flo menu whenever the route changes.
  React.useEffect(() => {
    setFloOpen(false);
  }, [pathname]);

  // Escape closes the Flo menu and returns focus to the trigger (VIZ-014 §8.9).
  React.useEffect(() => {
    if (!floOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFloOpen(false);
        fabRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [floOpen]);

  return (
    <div className="flex min-h-svh w-full">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-svh w-60 shrink-0 flex-col border-r bg-card/60 md:flex">
        <div className="flex items-center gap-2.5 border-b px-4 py-4">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"
          >
            <Hexagon className="size-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-semibold leading-tight">
              Stremiium Repo Viz
            </p>
            <p className="truncate text-[11px] text-muted-foreground">
              bx2o/rea learning environment
            </p>
          </div>
        </div>
        <nav aria-label="Primary" className="flex flex-1 flex-col gap-1 px-3 py-3">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className="size-4 shrink-0" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
          Offline-first · snapshot fallback
        </div>
      </aside>

      {/* Content column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-3 border-b bg-background/80 px-4 backdrop-blur-md md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate font-heading text-sm font-semibold tracking-tight">
              Stremiium Repo Viz
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              bx2o/rea
            </Badge>
          </div>
          <ThemeToggle />
        </header>

        <main id="main" className="flex-1">
          <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 md:px-6 md:pb-8 lg:pt-8">
            {children}
          </div>
        </main>

        <footer className="border-t px-4 py-3 text-[11px] text-muted-foreground md:px-6">
          Stremiium Repo Viz · offline-first · WCAG 2.1 AA target
        </footer>
      </div>

      {/* Mobile Flo menu (VIZ-013 §8 thumb-zone arc) */}
      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <Button
          ref={fabRef}
          size="icon"
          className="size-14 rounded-full shadow-lg"
          aria-label={floOpen ? "Close menu" : "Open menu"}
          aria-haspopup="menu"
          aria-expanded={floOpen}
          aria-controls={floMenuId}
          onClick={() => setFloOpen((value) => !value)}
        >
          <Plus
            className={cn("size-6 transition-transform duration-200", floOpen && "rotate-45")}
            aria-hidden="true"
          />
        </Button>
        <ul
          id={floMenuId}
          role="menu"
          aria-label="Sections"
          className="m-0 list-none p-0"
        >
          {NAV_ITEMS.map((item, index) => {
            const { x, y } = floPosition(index, NAV_ITEMS.length);
            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href} className="absolute bottom-1.5 right-1.5 list-none">
                <Link
                  href={item.href}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                  aria-hidden={!floOpen}
                  tabIndex={floOpen ? 0 : -1}
                  onClick={() => setFloOpen(false)}
                  style={{
                    transform: floOpen
                      ? `translate(${x}px, ${y}px) scale(1)`
                      : "translate(0px, 0px) scale(0.4)",
                    opacity: floOpen ? 1 : 0,
                    pointerEvents: floOpen ? "auto" : "none",
                    transitionDelay: `${index * 30}ms`,
                  }}
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full border bg-card shadow-md transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="size-5" aria-hidden="true" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
