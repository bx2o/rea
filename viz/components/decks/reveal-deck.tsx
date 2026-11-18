"use client";

/**
 * RevealDeck — fullscreen reveal.js deck renderer for the /learn route (VIZ-030).
 *
 * - reveal.js + the markdown plugin are loaded client-only via dynamic
 *   `import()` inside useEffect (plan §8 SSR failure mode: reveal.js does not
 *   server-render). No reveal import exists at module scope.
 * - Deck markdown is fetched from `/decks/<file>`. NOTE: files under
 *   `viz/content/` are NOT publicly served by Next.js, so the deck sources
 *   ship as duplicated copies in `viz/public/decks/` (authored source of
 *   truth stays `viz/content/decks/`; duplication accepted + documented).
 * - Accessibility per VIZ-014 §8.5: native reveal keyboard navigation
 *   preserved; focus moves to the new slide's heading on `slidechanged`;
 *   a polite live region announces "Slide N of M: <title>"; reduced motion
 *   → `transition: "none"`. The overlay is a modal dialog with a Tab focus
 *   trap (VIZ-014 §8.8 contract: initial focus, Tab wrap, Escape close,
 *   focus return handled by the opening page).
 * - Escape closes the deck, EXCEPT while reveal's overview mode is open —
 *   the same keypress then only exits the overview (reveal listens on the
 *   document; our handler runs first and lets it pass through).
 */

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

/** Props. `file` is a path under public/decks (e.g. "deck-01-repo-orientation.md"). */
export interface RevealDeckProps {
  file: string;
  title: string;
  /** Manifest deck id — used for the overlay element id. */
  deckId?: string;
  /** Called when the user closes the overlay (Escape or the Close button). */
  onClose?: () => void;
}

/** Minimal structural typing for the untyped reveal.js package. */
interface RevealApi {
  initialize: (config?: Record<string, unknown>) => Promise<void> | void;
  destroy: () => void;
  on: (event: string, listener: (data: unknown) => void) => void;
  isOverview: () => boolean;
}
type RevealCtor = new (element: HTMLElement, config?: Record<string, unknown>) => RevealApi;
type RevealPlugin = { id?: string; init?: (deck: RevealApi) => void };

interface SlideChangedEvent {
  currentSlide: HTMLElement;
}

const SLIDE_SEPARATOR = "^---$";
const FOCUSABLE_SELECTOR =
  "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

/**
 * reveal.js ships without type declarations. Both import specifiers are
 * resolvable at bundle time (reveal.js "main" + the markdown plugin file);
 * @ts-ignore keeps the optional-declarations gate green either way.
 */
async function loadReveal(): Promise<RevealCtor> {
  // @ts-ignore untyped reveal.js package (no bundled declarations)
  const mod = await import("reveal.js");
  const candidate =
    (mod as { default?: unknown }).default ?? (mod as unknown as { Reveal?: unknown }).Reveal ?? mod;
  if (typeof candidate !== "function") {
    throw new Error("reveal.js did not export a constructor");
  }
  return candidate as unknown as RevealCtor;
}

/**
 * The markdown plugin ships as an ES-module default export and/or a UMD
 * global (`RevealMarkdown`) depending on the resolved build; accept either
 * the factory form or the `{ id, init }` object form.
 */
async function loadMarkdownPlugin(): Promise<RevealPlugin> {
  // @ts-ignore plugin builds ship without type declarations
  const mod = await import("reveal.js/plugin/markdown/markdown.js");
  const candidates: unknown[] = [
    (mod as { default?: unknown }).default,
    (mod as { RevealMarkdown?: unknown }).RevealMarkdown,
    mod,
  ];
  if (typeof window !== "undefined") {
    candidates.push((window as { RevealMarkdown?: unknown }).RevealMarkdown);
  }
  for (const candidate of candidates) {
    if (typeof candidate === "function") return candidate as unknown as RevealPlugin;
    if (
      typeof candidate === "object" &&
      candidate !== null &&
      typeof (candidate as RevealPlugin).init === "function"
    ) {
      return candidate as RevealPlugin;
    }
  }
  throw new Error("reveal.js markdown plugin could not be resolved");
}

/** reveal.css + a built-in theme; wrapped in try per VIZ-030 spec. */
async function loadDeckStyles(): Promise<void> {
  try {
    // @ts-ignore css side-effect import (declarations provided by next-env)
    await import("reveal.js/dist/reveal.css");
    try {
      // @ts-ignore css side-effect import (declarations provided by next-env)
      await import("reveal.js/dist/theme/black.css");
    } catch {
      // Theme is optional — the deck falls back to reveal.css + app tokens.
    }
  } catch {
    // Base styles optional — content still renders with app chrome.
  }
}

/** VIZ-014 §8.4 contract: OS media query, with the planned in-app switch honoured when set. */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.localStorage.getItem("viz-reduced-motion") === "on") return true;
  } catch {
    /* storage unavailable — fall through to the OS query */
  }
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/** Wrap Tab (and Shift+Tab) inside the overlay (VIZ-014 §8.8 focus-trap contract). */
function trapFocus(event: ReactKeyboardEvent<HTMLElement>, container: HTMLElement | null): void {
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
}

/** Carousel semantics per VIZ-014 §8.5: one labelled "slide" per section, focusable headings. */
function decorateSlides(revealRoot: HTMLElement, title: string): HTMLElement[] {
  revealRoot.setAttribute("role", "region");
  revealRoot.setAttribute("aria-roledescription", "carousel");
  revealRoot.setAttribute("aria-label", `${title} slide deck`);
  const sections = Array.from(revealRoot.querySelectorAll<HTMLElement>(".slides > section"));
  sections.forEach((section, index) => {
    section.setAttribute("aria-roledescription", "slide");
    const heading = section.querySelector<HTMLElement>("h1, h2, h3, h4");
    if (heading) heading.setAttribute("tabindex", "-1");
    const label = heading?.textContent?.trim() ?? `Slide ${index + 1}`;
    section.setAttribute("aria-label", `${index + 1}. ${label}`);
  });
  return sections;
}

/** Named export — renders the deck as a fullscreen modal overlay. */
export function RevealDeck({ file, title, deckId, onClose }: RevealDeckProps) {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const revealRootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const announce = useCallback((message: string) => {
    if (liveRef.current) liveRef.current.textContent = message;
  }, []);

  // 1. Fetch the deck markdown (public/decks copy; viz/content is not served).
  useEffect(() => {
    let alive = true;
    setMarkdown(null);
    setError(null);
    fetch(`/decks/${file}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} for /decks/${file}`);
        return res.text();
      })
      .then((text) => {
        if (alive) setMarkdown(text);
      })
      .catch((err: unknown) => {
        if (!alive) return;
        setError(err instanceof Error ? err.message : "Failed to load deck.");
        announce(`Deck failed to load: ${title}`);
      });
    return () => {
      alive = false;
    };
  }, [file, title, announce]);

  // 2. Mount reveal.js once the markdown text is in hand (client-only import).
  useEffect(() => {
    if (markdown === null) return;
    const revealRoot = revealRootRef.current;
    if (!revealRoot) return;

    let disposed = false;
    let deck: RevealApi | null = null;
    const savedHash = typeof window === "undefined" ? "" : window.location.hash;
    const savedBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleSlideChange = (event: unknown) => {
      const { currentSlide } = (event ?? {}) as SlideChangedEvent;
      if (!currentSlide) return;
      // Focus management (VIZ-014 §8.5): move focus to the new slide heading.
      const heading = currentSlide.querySelector<HTMLElement>("h1, h2, h3, h4");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        try {
          heading.focus({ preventScroll: true });
        } catch {
          heading.focus();
        }
      }
      const slides = Array.from(revealRoot.querySelectorAll<HTMLElement>(".slides > section"));
      const position = Math.max(1, slides.indexOf(currentSlide) + 1);
      const label = heading?.textContent?.trim() ?? title;
      announce(`Slide ${position} of ${slides.length}: ${label}`);
    };

    const mount = async () => {
      try {
        const [RevealCtor, Markdown] = await Promise.all([loadReveal(), loadMarkdownPlugin()]);
        await loadDeckStyles();
        if (disposed) return;

        // (Re)build the markdown source section imperatively so remounts
        // (e.g. React strict mode, deck switch) start from a clean slate.
        let slidesWrap = revealRoot.querySelector<HTMLElement>(":scope > .slides");
        if (!slidesWrap) {
          slidesWrap = document.createElement("div");
          slidesWrap.className = "slides";
          slidesWrap.setAttribute("data-separator", SLIDE_SEPARATOR);
          revealRoot.appendChild(slidesWrap);
        }
        slidesWrap.setAttribute("data-separator", SLIDE_SEPARATOR);
        slidesWrap.innerHTML = "";
        const section = document.createElement("section");
        section.setAttribute("data-markdown", "");
        section.setAttribute("data-separator", SLIDE_SEPARATOR);
        section.textContent = markdown;
        slidesWrap.appendChild(section);

        const reduced = prefersReducedMotion();
        deck = new RevealCtor(revealRoot, {
          embedded: true,
          hash: true,
          transition: reduced ? "none" : "fade",
          backgroundTransition: reduced ? "none" : "fade",
          markdown: { separator: SLIDE_SEPARATOR, notesSeparator: "^Note:" },
          keyboard: true,
          controls: true,
          progress: true,
          slideNumber: "c/t",
          touch: true,
          plugins: [Markdown],
        });
        deckRef.current = deck;
        deck.on("slidechanged", handleSlideChange);
        await deck.initialize();
        if (disposed) {
          // Cleanup already destroyed the instance while initializing.
          return;
        }

        const slides = decorateSlides(revealRoot, title);
        announce(`Deck loaded: ${title}. Slide 1 of ${slides.length}.`);
        closeRef.current?.focus();
      } catch (err) {
        if (!disposed) {
          setError(err instanceof Error ? err.message : "Failed to initialize deck.");
          announce(`Deck failed to initialize: ${title}`);
        }
      }
    };
    void mount();

    return () => {
      disposed = true;
      try {
        deck?.destroy();
      } catch {
        /* destroy is best-effort */
      }
      deckRef.current = null;
      document.body.style.overflow = savedBodyOverflow;
      // Restore the pre-deck hash (reveal hash:true writes /<slide> fragments).
      if (typeof window !== "undefined" && window.location.hash !== savedHash) {
        const restore =
          savedHash || `${window.location.pathname}${window.location.search}`;
        try {
          window.history.replaceState(null, "", restore);
        } catch {
          /* ignore history restrictions */
        }
      }
    };
  }, [markdown, title, announce]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      // While reveal's overview is open, the same keypress only exits it.
      const inOverview = deckRef.current?.isOverview() ?? false;
      if (!inOverview) {
        event.preventDefault();
        event.stopPropagation();
        onCloseRef.current?.();
      }
      return;
    }
    if (event.key === "Tab") {
      trapFocus(event, overlayRef.current);
    }
  };

  return (
    <div
      ref={overlayRef}
      id={deckId ? `deck-overlay-${deckId}` : undefined}
      className="fixed inset-0 z-50 flex flex-col bg-background"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — slide deck`}
      onKeyDown={handleKeyDown}
    >
      {/* Deck chrome — visible controls are real buttons (VIZ-014 §8.5). */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-2.5">
        <p className="truncate text-sm font-medium text-card-foreground">
          {title}
          <span className="ml-2 text-xs font-normal text-muted-foreground">Learn deck</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={() => onCloseRef.current?.()}
          className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Close deck
          <kbd className="rounded border border-border px-1 text-[0.65rem] text-muted-foreground">
            Esc
          </kbd>
        </button>
      </div>

      {/* Reveal mount — rendered only after the markdown is fetched. */}
      <div className="relative min-h-0 flex-1">
        {markdown !== null ? (
          <div ref={revealRootRef} className="reveal h-full w-full">
            <div className="slides" data-separator={SLIDE_SEPARATOR} />
          </div>
        ) : error !== null ? (
          <div role="alert" className="flex h-full items-center justify-center p-8">
            <div className="max-w-md rounded-lg border border-destructive/40 bg-card p-6 text-center">
              <p className="font-medium text-foreground">Deck failed to load</p>
              <p className="mt-2 text-sm text-muted-foreground">{error}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Source: /decks/{file} — the authored deck lives in{" "}
                <code>content/decks/</code>; re-copy it to <code>public/decks/</code> if missing.
              </p>
            </div>
          </div>
        ) : (
          <div role="status" aria-busy="true" className="flex h-full items-center justify-center">
            <p className="text-sm text-muted-foreground">Loading deck…</p>
          </div>
        )}
      </div>

      {/* Polite announcements (VIZ-014 §8.5/§8.7): "Slide N of M: title". */}
      <div ref={liveRef} role="status" aria-live="polite" className="sr-only" />
    </div>
  );
}

export default RevealDeck;
