"use client";

/**
 * TourPlayer — guided-tour step-through overlay (FC-03, VIZ-025).
 *
 * The tours shipped as data (`public/snapshots/tours.json` — 3 tours, 9
 * steps) but nothing consumed them, so the whole "guided tours" promise of
 * plan §1 goal 3 was unreachable. This component is that consumer: it reads
 * the snapshot and renders an overlay that walks the user through the steps.
 *
 * Data shape (lib/types.ts): `{ tours: Tour[] }` where
 *   Tour     = { id, title, description, steps: TourStep[] }
 *   TourStep = { id, title, description, route, filePath? }
 *
 * Accessibility (VIZ-014 §8.5–§8.8):
 * - `role="dialog"` + `aria-modal="true"` + a labelled title;
 * - Tab / Shift+Tab are trapped inside the overlay;
 * - Escape closes the overlay and returns focus to the opener;
 * - a polite live region announces the current step ("Step 2 of 4: Explorer");
 * - the tour selector is a list of real buttons carrying `aria-pressed`.
 *
 * The active tour/step is mirrored into sessionStorage so a tour survives a
 * navigation (the "Go" button routes away) and can be resumed.
 */

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Compass, MapPin, Play, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Tour, TourStep } from "@/lib/types";

/** Snapshot endpoint served from `public/snapshots/tours.json`. */
export const TOURS_SNAPSHOT_URL = "/snapshots/tours.json";

/** sessionStorage key holding the resumable tour position. */
const TOUR_STATE_KEY = "viz-tour-state";

const FOCUSABLE_SELECTOR =
  "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

/* ------------------------------------------------------------------ */
/* Data loading                                                        */
/* ------------------------------------------------------------------ */

interface ToursPayload {
  tours: Tour[];
}

function isTour(value: unknown): value is Tour {
  if (typeof value !== "object" || value === null) return false;
  const rec = value as Record<string, unknown>;
  return (
    typeof rec.id === "string" &&
    typeof rec.title === "string" &&
    Array.isArray(rec.steps) &&
    rec.steps.every((step) => {
      if (typeof step !== "object" || step === null) return false;
      const s = step as Record<string, unknown>;
      return (
        typeof s.id === "string" &&
        typeof s.title === "string" &&
        typeof s.description === "string" &&
        typeof s.route === "string"
      );
    })
  );
}

function parseTours(payload: unknown): Tour[] {
  if (typeof payload !== "object" || payload === null) return [];
  const rec = payload as Record<string, unknown>;
  const list = Array.isArray(rec.tours) ? rec.tours : [];
  return list.filter(isTour);
}

export interface UseToursResult {
  tours: Tour[] | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

/**
 * useTours — loads the tours snapshot. Shared by the /tours route and the
 * player so the list and the overlay read one source of truth. Pass
 * `enabled: false` when the tours are already loaded by the host component
 * (the player then skips its own fetch).
 */
export function useTours(enabled = true): UseToursResult {
  const [tours, setTours] = useState<Tour[] | null>(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const controller = new AbortController();
    let alive = true;
    setLoading(true);
    setError(null);
    fetch(TOURS_SNAPSHOT_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${TOURS_SNAPSHOT_URL}`);
        return res.json() as Promise<ToursPayload>;
      })
      .then((payload) => {
        if (!alive) return;
        const list = parseTours(payload);
        setTours(list);
        setError(list.length === 0 ? "No tours found in the snapshot." : null);
      })
      .catch((err: unknown) => {
        if (!alive) return;
        if (err instanceof DOMException && err.name === "AbortError") return;
        setTours([]);
        setError(err instanceof Error ? err.message : "Failed to load guided tours.");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
      controller.abort();
    };
  }, [enabled, nonce]);

  const reload = useCallback(() => setNonce((n) => n + 1), []);
  return { tours, loading, error, reload };
}

/* ------------------------------------------------------------------ */
/* Resumable state                                                     */
/* ------------------------------------------------------------------ */

interface TourState {
  tourId: string;
  stepIndex: number;
}

function readStoredState(): TourState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(TOUR_STATE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<TourState>;
    if (typeof parsed.tourId !== "string") return null;
    const stepIndex =
      typeof parsed.stepIndex === "number" && Number.isFinite(parsed.stepIndex)
        ? Math.max(0, Math.trunc(parsed.stepIndex))
        : 0;
    return { tourId: parsed.tourId, stepIndex };
  } catch {
    return null;
  }
}

function writeStoredState(state: TourState | null): void {
  if (typeof window === "undefined") return;
  try {
    if (state === null) window.sessionStorage.removeItem(TOUR_STATE_KEY);
    else window.sessionStorage.setItem(TOUR_STATE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — tours still work, they just do not resume */
  }
}

/* ------------------------------------------------------------------ */
/* Props                                                               */
/* ------------------------------------------------------------------ */

export interface TourPlayerProps {
  /** Pre-loaded tours — when omitted the player fetches the snapshot itself. */
  tours?: Tour[] | null;
  /** Controlled active tour id. */
  tourId?: string;
  /** Fired when the user picks another tour. */
  onTourChange?: (tourId: string) => void;
  /**
   * Controlled visibility. When `undefined` the player is uncontrolled and
   * renders its own "Start guided tour" launcher.
   */
  open?: boolean;
  /** Fired when the overlay closes (Escape or the Close button). */
  onClose?: () => void;
  /** Extra classes for the overlay container. */
  className?: string;
  /** Fired after a successful "Go" navigation. */
  onNavigate?: (route: string) => void;
}

/* ------------------------------------------------------------------ */
/* Player                                                              */
/* ------------------------------------------------------------------ */

export function TourPlayer({
  tours: toursProp = undefined,
  tourId,
  onTourChange,
  open,
  onClose,
  className,
  onNavigate,
}: TourPlayerProps) {
  const router = useRouter();
  const ownsFetch = toursProp === undefined;
  const loaded = useTours(ownsFetch);
  const tours = toursProp ?? loaded.tours;
  const loading = ownsFetch ? loaded.loading : tours === null;
  const error = ownsFetch ? loaded.error : null;

  const [internalOpen, setInternalOpen] = useState(false);
  const [internalTourId, setInternalTourId] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const isControlledOpen = open !== undefined;
  const isOpen = isControlledOpen ? open : internalOpen;

  /* --- active tour ---------------------------------------------------- */
  const activeTour = useMemo<Tour | null>(() => {
    if (!tours || tours.length === 0) return null;
    const wanted = tourId ?? internalTourId;
    const found = wanted ? tours.find((t) => t.id === wanted) : undefined;
    return found ?? tours[0];
  }, [tours, tourId, internalTourId]);

  const steps: TourStep[] = activeTour?.steps ?? [];
  const safeIndex = steps.length === 0 ? 0 : Math.min(stepIndex, steps.length - 1);
  const step = steps[safeIndex] ?? null;

  /* --- resume a stored position on first load ------------------------- */
  const resumedRef = useRef(false);
  const hydratedRef = useRef(false);
  useEffect(() => {
    if (resumedRef.current) return;
    if (tours === null || tours.length === 0) return;
    resumedRef.current = true;
    hydratedRef.current = true;
    const stored = readStoredState();
    if (!stored) return;
    const match = tours.find((t) => t.id === stored.tourId);
    if (!match) return;
    if (tourId === undefined && internalTourId === null) {
      setInternalTourId(match.id);
    }
    const maxIndex = Math.max(0, match.steps.length - 1);
    setStepIndex(Math.min(stored.stepIndex, maxIndex));
  }, [tours, tourId, internalTourId]);

  /* --- persist the position ------------------------------------------- */
  useEffect(() => {
    if (!hydratedRef.current) return;
    if (!activeTour) return;
    writeStoredState({ tourId: activeTour.id, stepIndex: safeIndex });
  }, [activeTour, safeIndex]);

  /* --- close (Escape / Close button) ----------------------------------- */
  const close = useCallback(() => {
    if (isControlledOpen) {
      onClose?.();
    } else {
      setInternalOpen(false);
    }
  }, [isControlledOpen, onClose]);

  /* --- focus management ------------------------------------------------ */
  useEffect(() => {
    if (!isOpen) return;
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    headingRef.current?.focus();
    return () => {
      const target = returnFocusRef.current;
      if (target && document.body.contains(target)) {
        try {
          target.focus();
        } catch {
          /* focus is best-effort */
        }
      }
    };
  }, [isOpen]);

  /* --- focus the step heading once the snapshot has resolved ----------- */
  const focusedStepRef = useRef(false);
  useEffect(() => {
    if (!isOpen) {
      focusedStepRef.current = false;
      return;
    }
    if (focusedStepRef.current) return;
    if (!step) return;
    focusedStepRef.current = true;
    headingRef.current?.focus();
  }, [isOpen, step]);

  /* --- Escape closes (document-level so it works from anywhere) -------- */
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  const selectTour = useCallback(
    (id: string) => {
      if (tourId === undefined && internalTourId === null) setInternalTourId(id);
      onTourChange?.(id);
      setStepIndex(0);
    },
    [tourId, internalTourId, onTourChange],
  );

  const goTo = useCallback(
    (route: string) => {
      if (!route) return;
      onNavigate?.(route);
      try {
        router.push(route);
      } catch {
        /* navigation failure is non-fatal */
      }
    },
    [router, onNavigate],
  );

  const previous = useCallback(() => {
    setStepIndex((index) => Math.max(0, index - 1));
  }, []);

  const next = useCallback(() => {
    setStepIndex((index) => (steps.length === 0 ? 0 : Math.min(index + 1, steps.length - 1)));
  }, [steps.length]);

  const trapFocus = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const container = dialogRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement,
    );
    if (items.length === 0) {
      event.preventDefault();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (event.shiftKey) {
      if (active === first || !container.contains(active)) {
        event.preventDefault();
        last.focus();
      }
    } else if (active === last || !container.contains(active)) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  /* --- uncontrolled launcher ------------------------------------------- */
  if (!isControlledOpen && !isOpen) {
    return (
      <div className={className}>
        <Button onClick={() => setInternalOpen(true)} disabled={loading || tours === null}>
          <Play aria-hidden="true" />
          Start guided tour
        </Button>
        {error !== null ? (
          <p role="alert" className="mt-2 text-xs text-destructive">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  if (!isOpen) return null;

  const announcement = step
    ? `Step ${safeIndex + 1} of ${steps.length}: ${step.title}. ${step.description}`
    : `Guided tour ${activeTour?.title ?? ""} has no steps.`;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 sm:items-center sm:p-6",
        className,
      )}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={trapFocus}
        className="flex max-h-[92svh] w-full max-w-xl flex-col overflow-hidden rounded-t-xl border border-border bg-card text-card-foreground shadow-xl sm:rounded-xl"
      >
        {/* Polite announcements (VIZ-014 §8.7). */}
        <div role="status" aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <header className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Guided tour
            </p>
            <h2
              id={titleId}
              className="mt-1 truncate font-heading text-base font-semibold text-foreground"
            >
              {activeTour?.title ?? "Guided tour"}
            </h2>
            {activeTour?.description ? (
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {activeTour.description}
              </p>
            ) : null}
          </div>
          <Button variant="ghost" size="icon" onClick={close} aria-label="Close guided tour">
            <X aria-hidden="true" />
          </Button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          {loading ? (
            <p role="status" className="text-sm text-muted-foreground">
              Loading guided tours…
            </p>
          ) : null}

          {!loading && error !== null ? (
            <div
              role="alert"
              className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-foreground"
            >
              <p className="font-medium">Could not load guided tours</p>
              <p className="mt-1 text-muted-foreground">{error}</p>
            </div>
          ) : null}

          {!loading && error === null && step === null ? (
            <p className="text-sm text-muted-foreground">
              This tour has no steps yet.
            </p>
          ) : null}

          {step !== null ? (
            <section aria-labelledby={`${titleId}-step`}>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Step {safeIndex + 1} of {steps.length}
              </p>
              <h3
                id={`${titleId}-step`}
                ref={headingRef}
                tabIndex={-1}
                className="mt-1 font-heading text-lg font-semibold text-foreground focus:outline-none"
              >
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded border border-border bg-muted px-2 py-1 font-mono text-xs text-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                {step.route}
              </p>
              {step.filePath ? (
                <p className="mt-2 font-mono text-xs text-muted-foreground">{step.filePath}</p>
              ) : null}
            </section>
          ) : null}
        </div>

        {/* Step controls */}
        <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
          <Button
            variant="outline"
            size="sm"
            onClick={previous}
            disabled={step === null || safeIndex === 0}
          >
            <ArrowLeft aria-hidden="true" />
            Previous
          </Button>
          <Button size="sm" onClick={() => goTo(step?.route ?? "")} disabled={step === null}>
            Go
            <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={next}
            disabled={step === null || safeIndex >= steps.length - 1}
          >
            Next
          </Button>
        </div>

        {/* Tour selector — a list of buttons with aria-pressed (VIZ-014 §8.5). */}
        {tours && tours.length > 0 ? (
          <nav aria-label="Choose a guided tour" className="border-t border-border px-4 py-3">
            <ul className="flex flex-wrap gap-2">
              {tours.map((tour) => {
                const selected = activeTour?.id === tour.id;
                return (
                  <li key={tour.id}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectTour(tour.id)}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                        selected
                          ? "border-transparent bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:bg-secondary",
                      )}
                    >
                      {tour.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

export default TourPlayer;
