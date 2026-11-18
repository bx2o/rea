"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Search } from "lucide-react";

import { ThemeToggle } from "@/components/theme-provider";
import { CommandPalette } from "@/components/nav/command-palette";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/nav/logo";
import { SkipLinks } from "@/components/nav/skip-links";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { MobileNav } from "@/components/nav/mobile-nav";
import { SiteFooter } from "@/components/nav/footer";
import { PRIMARY_NAV, activeHrefForPath } from "@/components/nav/mobile-nav";
import { cn } from "@/lib/utils";

/**
 * App shell (VIZ-020, layout per VIZ-013 §6 / VIZ-011 §8.5):
 * - Desktop: fixed left sidebar with a real logo→home link + full nav.
 * - Mobile: thumb-zone Flo menu with ALL routes (incl. 3D + Tours).
 * - Skip links, landmarks, breadcrumbs, footer, ⌘K palette, theme toggle.
 * - A polite live region announces route changes (AAA+).
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const activeHref = activeHrefForPath(pathname);
  const isHome = pathname === "/";

  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const paletteTriggerRef = React.useRef<HTMLButtonElement | null>(null);
  const [shortcutLabel, setShortcutLabel] = React.useState("⌘K");

  React.useEffect(() => {
    const isApple = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent ?? "");
    setShortcutLabel(isApple ? "⌘K" : "Ctrl K");
  }, []);

  return (
    <div className="flex min-h-svh w-full">
      {/* Skip links are the first focusable elements (WCAG 2.2 Bypass Blocks). */}
      <SkipLinks />

      {/* Polite route-change announcer (AAA+). */}
      <span aria-live="polite" role="status" className="sr-only">
        {`Navigated to ${isHome ? "Overview" : pathname}`}
      </span>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-svh w-60 shrink-0 flex-col border-r bg-card/60 md:flex">
        <div className="flex items-center border-b px-4 py-4">
          <Logo />
        </div>
        <nav id="primary-navigation" aria-label="Primary" className="flex flex-1 flex-col gap-1 px-3 py-3">
          {PRIMARY_NAV.map((item) => {
            const active = activeHref === item.href;
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
            {/* Compact logo→home on mobile; desktop shows wordmark in sidebar. */}
            <div className="md:hidden">
              <Logo compact showWordmark={false} />
            </div>
            <div className="hidden min-w-0 items-center gap-2 md:flex">
              <span className="truncate font-heading text-sm font-semibold tracking-tight">
                Stremiium Repo Viz
              </span>
              <Badge variant="secondary">bx2o/rea</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              ref={paletteTriggerRef}
              id="command-search"
              variant="outline"
              size="sm"
              className="hidden gap-2 text-muted-foreground md:inline-flex"
              onClick={() => setPaletteOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={paletteOpen}
              aria-keyshortcuts="Meta+K Control+K"
            >
              <Search className="size-4" aria-hidden="true" />
              <span>Search</span>
              <kbd className="pointer-events-none hidden select-none items-center rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground lg:inline-flex">
                {shortcutLabel}
              </kbd>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 md:px-6 md:pb-8 lg:pt-8">
            {!isHome && <Breadcrumbs className="mb-5" />}
            {children}
          </div>
        </main>

        <SiteFooter />
      </div>

      {/* Global command palette (VIZ-013 §7.2) — mounted once per shell. */}
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        triggerRef={paletteTriggerRef}
      />

      {/* Mobile Flo menu — all 8 routes, focus trap, Escape, ≥44px targets. */}
      <MobileNav />
    </div>
  );
}
