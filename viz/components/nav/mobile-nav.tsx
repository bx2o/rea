"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  FolderTree,
  Globe2,
  GraduationCap,
  History,
  LayoutDashboard,
  Network,
  Plus,
  Route,
  X,
  type LucideIcon,
} from "lucide-react";

import {
  REDUCED_MOTION_EVENT,
  REDUCED_MOTION_STORAGE_KEY,
} from "@/components/nav/reduced-motion-toggle";
import { cn } from "@/lib/utils";

/**
 * Primary route registry + mobile Flo navigation (VIZ-013 §6 / §8, VIZ-014).
 *
 * PRIMARY_NAV is the single source of truth for the shell's route list: the
 * desktop sidebar, the Flo menu, the breadcrumbs and the route-change live
 * region all derive from it. It includes the two routes added after the
 * original shell was built — /explorer/view3d and /tours.
 *
 * The Flo menu is a thumb-zone arc with >=44px targets. It exposes a real
 * modal-ish interaction: aria-expanded/aria-hidden, a visible close affordance,
 * focus to the first item on open and back to the trigger on close, Escape to
 * close, arrow/Home/End roving focus and a Tab focus trap. Motion is disabled
 * when the OS asks for reduced motion OR when the app's own
 * `viz-reduced-motion` switch is set to "on" (the CustomEvent is consumed so
 * changes apply immediately without a reload).
 */

export interface PrimaryNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const PRIMARY_NAV: readonly PrimaryNavItem[] = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/explorer", label: "Explorer", icon: FolderTree },
  { href: "/explorer/view3d", label: "3D View", icon: Box },
  { href: "/commits", label: "Commits", icon: History },
  { href: "/globe", label: "Globe", icon: Globe2 },
  { href: "/learn", label: "Learn", icon: GraduationCap },
  { href: "/tours", label: "Tours", icon: Route },
  { href: "/councils", label: "Councils", icon: Network },
] as const;

/** Longest matching nav href — so /explorer/view3d highlights "3D View" only. */
export function activeHrefForPath(pathname: string): string {
  let best = "/";
  let bestLength = -1;
  for (const item of PRIMARY_NAV) {
    const matches =
      item.href === "/"
        ? pathname === "/"
        : pathname === item.href || pathname.startsWith(`${item.href}/`);
    if (matches && item.href.length > bestLength) {
      best = item.href;
      bestLength = item.href.length;
    }
  }
  return best;
}

/** Human-readable page name used by breadcrumbs and the route live region. */
export function routeLabelForPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const sha = /^\/commits\/([0-9a-f]{7,40})$/i.exec(clean);
  if (sha) return `Commit ${sha[1].slice(0, 7)}`;

  const active = activeHrefForPath(clean);
  const item = PRIMARY_NAV.find((nav) => nav.href === active);
  if (item) return item.label;

  const last = clean.split("/").filter(Boolean).pop() ?? "page";
  return last.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

/** Fan-out arc in the bottom-right thumb sweep: straight up → straight left. */
function floPosition(index: number, total: number): { x: number; y: number } {
  const RADIUS = 104;
  const span = total > 1 ? 90 / (total - 1) : 0;
  const angle = (-90 - index * span) * (Math.PI / 180);
  return {
    x: Math.round(Math.cos(angle) * RADIUS),
    y: Math.round(Math.sin(angle) * RADIUS),
  };
}

export function MobileNav() {
  const pathname = usePathname() ?? "/";
  const activeHref = activeHrefForPath(pathname);

  const [open, setOpen] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);

  const fabRef = React.useRef<HTMLButtonElement | null>(null);
  const closeRef = React.useRef<HTMLButtonElement | null>(null);
  const itemRefs = React.useRef<Array<HTMLAnchorElement | null>>([]);
  const menuId = React.useId();

  /* ---- reduced motion: OS query + app switch (storage + event) ---------- */
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => {
      let stored: string | null = null;
      try {
        stored = window.localStorage.getItem(REDUCED_MOTION_STORAGE_KEY);
      } catch {
        /* storage blocked — fall back to the OS preference */
      }
      setReduced(stored === "on" || (stored !== "off" && query.matches));
    };
    read();
    query.addEventListener("change", read);
    window.addEventListener(REDUCED_MOTION_EVENT, read);
    const onStorage = (event: StorageEvent) => {
      if (event.key === REDUCED_MOTION_STORAGE_KEY) read();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      query.removeEventListener("change", read);
      window.removeEventListener(REDUCED_MOTION_EVENT, read);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  /* ---- close on route change, crossing to desktop, or unmount ----------- */
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const close = React.useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => fabRef.current?.focus());
    }
  }, []);

  /* ---- focus first item on open; Escape + Tab trap while open ----------- */
  React.useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => itemRefs.current[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = [
        closeRef.current,
        ...itemRefs.current,
        fabRef.current,
      ].filter((element): element is HTMLButtonElement | HTMLAnchorElement => element !== null);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  /* ---- arrow / Home / End roving focus inside the menu ------------------ */
  const onMenuKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const current = itemRefs.current.findIndex(
      (element) => element === document.activeElement
    );
    if (current < 0) return;

    let next = current;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (current + 1) % PRIMARY_NAV.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (current - 1 + PRIMARY_NAV.length) % PRIMARY_NAV.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = PRIMARY_NAV.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    itemRefs.current[next]?.focus();
  };

  return (
    <>
      {open ? (
        <div
          aria-hidden="true"
          onClick={() => close()}
          className="fixed inset-0 z-40 bg-foreground/10 md:hidden"
        />
      ) : null}

      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        {open ? (
          <div className="absolute bottom-[68px] right-0 flex items-center gap-2 rounded-full border bg-card/95 px-3 py-1.5 shadow-lg backdrop-blur">
            <span className="text-xs font-semibold text-foreground">Sections</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => close()}
              aria-label="Close navigation menu"
              title="Close navigation menu"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-secondary"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        ) : null}

        <ul
          id={menuId}
          role="menu"
          aria-label="Site sections"
          onKeyDown={onMenuKeyDown}
          className="absolute bottom-0 right-0 m-0 h-0 w-0 list-none p-0"
        >
          {PRIMARY_NAV.map((item, index) => {
            const { x, y } = floPosition(index, PRIMARY_NAV.length);
            const active = item.href === activeHref;
            return (
              <li key={item.href} role="none" className="absolute bottom-0 right-0 list-none">
                <Link
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  href={item.href}
                  role="menuitem"
                  aria-label={item.label}
                  title={item.label}
                  aria-current={active ? "page" : undefined}
                  aria-hidden={!open}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  style={{
                    transform: open
                      ? `translate(${x}px, ${y}px) scale(1)`
                      : "translate(0px, 0px) scale(0.4)",
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                    transition: reduced
                      ? "none"
                      : `transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 24}ms, opacity 160ms ease ${index * 24}ms`,
                  }}
                  className={cn(
                    "relative flex size-12 items-center justify-center rounded-full border bg-card shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="size-5" aria-hidden="true" />
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute -left-0.5 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          ref={fabRef}
          id="mobile-navigation-trigger"
          type="button"
          onClick={() => (open ? close() : setOpen(true))}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          className="relative inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {open ? (
            <X className={cn("size-6", !reduced && "transition-transform duration-200")} aria-hidden="true" />
          ) : (
            <Plus className={cn("size-6", !reduced && "transition-transform duration-200")} aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
}

export default MobileNav;
