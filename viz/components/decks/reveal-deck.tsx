"use client";

/**
 * RevealDeck — premium fullscreen reveal.js deck renderer for /learn (VIZ-030).
 *
 * - reveal.js + the markdown plugin (and, when available, the speaker-notes
 *   plugin) are loaded client-only via dynamic `import()` inside useEffect
 *   (plan §8 SSR failure mode: reveal.js does not server-render). No reveal
 *   import exists at module scope.
 * - Deck markdown is fetched from `/decks/<file>`. NOTE: files under
 *   `viz/content/` are NOT publicly served by Next.js, so the deck sources
 *   ship as duplicated copies in `viz/public/decks/` (authored source of
 *   truth stays `viz/content/decks/`; duplication accepted + documented).
 * - Rich slides: inline SVG, fragment HTML comments, tables and speaker notes
 *   all travel through `section.textContent = markdown` into the markdown
 *   plugin — nothing sanitises or strips `<!-- .element: class="fragment" -->`
 *   comments, so reveal.js applies them natively. One 1280×720 section canvas,
 *   controls + progress + slide numbers, overview, fragments and notes.
 * - Accessibility per VIZ-014 §8.5: native reveal keyboard navigation
 *   preserved (arrow keys are NEVER intercepted here); focus moves to the new
 *   slide's heading on `slidechanged`; a polite LIVE "Slide N of M: <title>"
 *   status is visible in the chrome; reduced motion → `transition: "none"`.
 *   The overlay is a modal dialog with a Tab focus trap (VIZ-014 §8.8:
 *   initial focus, Tab wrap, Escape close, focus return handled by the page).
 * - Escape closes the deck, EXCEPT while reveal's overview mode is open — the
 *   same keypress then only exits the overview — and except while the browser
 *   owns fullscreen (first Escape exits fullscreen, second closes).
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
  toggleOverview: () => void;
  getCurrentSlide?: () => HTMLElement | null;
  getTotalSlides?: () => number;
}
type RevealCtor = new (element: HTMLElement, config?: Record<string, unknown>) => RevealApi;
type RevealPlugin = { id?: string; init?: (deck: RevealApi) => void };

interface SlideChangedEvent {
  currentSlide: HTMLElement;
}

/** Visible, polite slide status derived from reveal's own slide events. */
interface SlideInfo {
  index: number;
  total: number;
  heading: string;
}

const SLIDE_SEPARATOR = "^---$";
const NOTE_SEPARATOR = "^Note:";
const FOCUSABLE_SELECTOR =
  "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

/** Two-digit slide counter used by the status chip and the progress ring. */
const pad2 = (value: number) => String(Math.max(0, value)).padStart(2, "0");

/** Shared classes for the floating command-bar pill controls (token-only, no hex). */
const TOOL_PILL_CLASS =
  "group relative inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-transparent transition-[color,background-color,box-shadow] hover:bg-primary/10 hover:text-foreground hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-4";

/**
 * Cinematic deck-progress arc. A token-coloured SVG ring replaces the plain
 * reveal progress bar; the current slide index sits in its centre. The ring is
 * decorative — the polite live status in the chrome carries the announcement.
 */
function ProgressRing({ index, total }: { index: number; total: number }) {
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const fraction = total > 0 ? Math.min(1, Math.max(0, index / total)) : 0;

  return (
    <span className="stunning-ring relative grid size-11 shrink-0 place-items-center" aria-hidden="true">
      <svg viewBox="0 0 40 40" className="absolute inset-0 size-full -rotate-90">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          style={{ stroke: "hsl(var(--muted-foreground) / 0.25)" }}
          strokeWidth="3"
        />
        <circle
          className="stunning-ring-value"
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          style={{ stroke: "hsl(var(--primary))" }}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - fraction)}
        />
      </svg>
      <span className="relative font-mono text-[10px] font-semibold leading-none text-foreground">
        {pad2(index)}
      </span>
    </span>
  );
}

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

/** Accept either a factory export or the `{ id, init }` plugin object form. */
function pluginFromModule(mod: unknown, globalNames: string[]): RevealPlugin | null {
  const candidates: unknown[] = [
    (mod as { default?: unknown }).default,
    ...globalNames.map((name) => (mod as Record<string, unknown>)[name]),
    mod,
  ];
  if (typeof window !== "undefined") {
    for (const name of globalNames) {
      candidates.push((window as unknown as Record<string, unknown>)[name]);
    }
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
  return null;
}

/** The markdown plugin is REQUIRED — fail loudly if it cannot be resolved. */
async function loadMarkdownPlugin(): Promise<RevealPlugin> {
  // @ts-ignore plugin builds ship without type declarations
  const mod = await import("reveal.js/plugin/markdown/markdown.js");
  const plugin = pluginFromModule(mod, ["RevealMarkdown"]);
  if (!plugin) throw new Error("reveal.js markdown plugin could not be resolved");
  return plugin;
}

/** Speaker notes are a progressive enhancement — degrade to no plugin. */
async function loadNotesPlugin(): Promise<RevealPlugin | null> {
  try {
    // @ts-ignore optional plugin build ships without type declarations
    const mod = await import("reveal.js/plugin/notes/notes.esm.js");
    return pluginFromModule(mod, ["RevealNotes"]);
  } catch {
    return null;
  }
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
  revealRoot.setAttribute("aria-label", `Learning deck: ${title}`);
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
  const [helpOpen, setHelpOpen] = useState(false);
  const [slideInfo, setSlideInfo] = useState<SlideInfo | null>(null);
  const [fullscreenAvailable, setFullscreenAvailable] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  /** Mirrors the OS query AND the persisted viz-reduced-motion switch for CSS gating. */
  const [motionStill, setMotionStill] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const revealRootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);
  const onCloseRef = useRef(onClose);

  const helpId = deckId ? `deck-help-${deckId}` : "deck-help";

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Keep decorative motion in sync with BOTH motion gates. The in-app toggle
  // broadcasts `viz-reduced-motion-change` and writes localStorage; the class
  // it drives is the CSS-side companion to reveal's `transition: "none"`.
  useEffect(() => {
    const sync = () => setMotionStill(prefersReducedMotion());
    sync();
    window.addEventListener("viz-reduced-motion-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("viz-reduced-motion-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const announce = useCallback((message: string) => {
    if (liveRef.current) liveRef.current.textContent = message;
  }, []);

  // 0. Feature-detect Fullscreen API; keep the button hidden when unsupported.
  useEffect(() => {
    const supported =
      typeof document !== "undefined" &&
      ("fullscreenEnabled" in document ? document.fullscreenEnabled : true) &&
      typeof overlayRef.current?.requestFullscreen === "function";
    setFullscreenAvailable(supported);
    if (!supported) return;
    const onFullscreenChange = () => setIsFullscreen(document.fullscreenElement !== null);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // 1. Fetch the deck markdown (public/decks copy; viz/content is not served).
  useEffect(() => {
    let alive = true;
    setMarkdown(null);
    setError(null);
    setSlideInfo(null);
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

    /** Derive the polite status from reveal's live DOM (works on init too). */
    const syncSlideInfo = (currentSlide?: HTMLElement | null) => {
      const slides = Array.from(revealRoot.querySelectorAll<HTMLElement>(".slides > section"));
      const active =
        currentSlide ??
        revealRoot.querySelector<HTMLElement>(".slides > section.present") ??
        slides[0] ??
        null;
      const position = active ? Math.max(1, slides.indexOf(active) + 1) : 0;
      const heading =
        active?.querySelector<HTMLElement>("h1, h2, h3, h4")?.textContent?.trim() || title;
      setSlideInfo({ index: position, total: slides.length, heading });
    };

    const handleSlideChange = (event: unknown) => {
      const { currentSlide } = (event ?? {}) as SlideChangedEvent;
      if (!currentSlide) {
        syncSlideInfo();
        return;
      }
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
      syncSlideInfo(currentSlide);
    };

    const mount = async () => {
      try {
        const [RevealCtor, Markdown, Notes] = await Promise.all([
          loadReveal(),
          loadMarkdownPlugin(),
          loadNotesPlugin(),
        ]);
        await loadDeckStyles();
        if (disposed) return;

        // (Re)build the markdown source section imperatively so remounts
        // (e.g. React strict mode, deck switch) start from a clean slate.
        // NOTE: textContent is deliberate — it preserves raw HTML and the
        // `<!-- .element: class="fragment" -->` comments reveal.js needs.
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
        const plugins: RevealPlugin[] = [Markdown];
        if (Notes) plugins.push(Notes); // speaker notes: progressive enhancement
        // Easing upgrade: convex for full motion, absolutely none when reduced.
        const transition = reduced ? "none" : "convex";

        deck = new RevealCtor(revealRoot, {
          embedded: true,
          hash: true,
          transition,
          backgroundTransition: transition,
          markdown: { separator: SLIDE_SEPARATOR, notesSeparator: NOTE_SEPARATOR },
          keyboard: true,
          controls: true,
          controlsTutorial: true,
          controlsLayout: "bottom-right",
          progress: true,
          slideNumber: "c/t",
          overview: true,
          center: false,
          width: 1280,
          height: 720,
          margin: 0.04,
          fragments: true,
          touch: true,
          plugins,
        });
        deckRef.current = deck;
        deck.on("slidechanged", handleSlideChange);
        await deck.initialize();
        if (disposed) {
          // Cleanup already destroyed the instance while initializing.
          return;
        }

        const slides = decorateSlides(revealRoot, title);
        // hash:true may restore a deep-linked slide on init — prefer the live one.
        syncSlideInfo(deck?.getCurrentSlide?.() ?? slides[0] ?? null);
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
      // Leave fullscreen when the overlay is torn down (deck switch / unmount).
      if (typeof document !== "undefined" && document.fullscreenElement) {
        try {
          const exit = document.exitFullscreen();
          if (exit && typeof exit.catch === "function") void exit.catch(() => {});
        } catch {
          /* fullscreen teardown is best-effort */
        }
      }
      // Restore the pre-deck hash (reveal hash:true writes /<slide> fragments).
      if (typeof window !== "undefined" && window.location.hash !== savedHash) {
        const restore = savedHash || `${window.location.pathname}${window.location.search}`;
        try {
          window.history.replaceState(null, "", restore);
        } catch {
          /* ignore history restrictions */
        }
      }
    };
  }, [markdown, title, announce]);

  /** Focus return to the card button is owned by /learn via `onClose`. */
  const closeDeck = useCallback(() => {
    setHelpOpen(false);
    onCloseRef.current?.();
  }, []);

  const toggleOverview = useCallback(() => {
    try {
      deckRef.current?.toggleOverview();
    } catch {
      /* overview is best-effort */
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = overlayRef.current;
    if (!container) return;
    try {
      if (document.fullscreenElement) {
        const exit = document.exitFullscreen();
        if (exit && typeof exit.catch === "function") void exit.catch(() => {});
      } else {
        const enter = container.requestFullscreen();
        if (enter && typeof enter.catch === "function") void enter.catch(() => {});
      }
    } catch {
      /* fullscreen denied (user gesture / policy) — no-op */
    }
  }, []);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      if (helpOpen) {
        event.preventDefault();
        event.stopPropagation();
        setHelpOpen(false);
        return;
      }
      // The browser owns the first Escape while fullscreen is active.
      if (typeof document !== "undefined" && document.fullscreenElement) return;
      // While reveal's overview is open, the same keypress only exits it.
      const inOverview = deckRef.current?.isOverview() ?? false;
      if (!inOverview) {
        event.preventDefault();
        event.stopPropagation();
        closeDeck();
      }
      return;
    }
    // Tab wrap only. Arrow keys / F / O / S stay native to reveal.js.
    if (event.key === "Tab") trapFocus(event, overlayRef.current);
  };

  return (
    <div
      ref={overlayRef}
      id={deckId ? `deck-overlay-${deckId}` : undefined}
      className={`stunning-deck deck-player fixed inset-0 z-50 flex flex-col overflow-hidden ${motionStill ? "stunning-still" : ""}`}
      style={{
        background:
          "radial-gradient(120% 85% at 50% -10%, hsl(var(--primary) / 0.18), transparent 55%), radial-gradient(85% 65% at 100% 105%, hsl(var(--st-gold-500) / 0.10), transparent 62%), hsl(var(--background))",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Learning deck: ${title}`}
      onKeyDown={handleKeyDown}
    >
      {/* Deck chrome — visible controls are real buttons (VIZ-014 §8.5). */}
      <header className="stunning-chrome-top relative z-30 flex shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="stunning-live-dot hidden size-2.5 shrink-0 rounded-full sm:block"
          />
          <div className="min-w-0">
            <p className="stunning-eyebrow truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Learning deck <span aria-hidden="true">/</span> {deckId ?? "interactive slides"}
            </p>
            <p className="truncate font-heading text-sm font-bold tracking-tight text-foreground sm:text-base">
              {title}
            </p>
          </div>
          {/* Polite, labelled slide status (also visible — no duplicate live region). */}
          <p
            aria-live="polite"
            aria-atomic="true"
            className="stunning-status hidden shrink-0 items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 font-mono text-[10px] text-muted-foreground md:inline-flex"
          >
            <span className="sr-only">Slide status: </span>
            {slideInfo
              ? `SLIDE ${pad2(slideInfo.index)} / ${pad2(slideInfo.total)} · ${slideInfo.heading}`
              : "SLIDE STATUS LOADING…"}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {/* Explicit header hint alongside title + Close (Learn page contract). */}
          <button
            type="button"
            onClick={() => setHelpOpen((open) => !open)}
            className="stunning-ghost hidden h-11 items-center gap-1.5 rounded-full px-3 text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
            aria-label="Keyboard shortcuts"
            aria-expanded={helpOpen}
            aria-controls={helpId}
            title="Keyboard shortcuts (?)"
          >
            Keyboard shortcuts
            <kbd className="rounded border border-border px-1 text-[0.65rem]">?</kbd>
          </button>
          <button
            ref={closeRef}
            type="button"
            onClick={closeDeck}
            className="stunning-close inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 text-sm font-semibold text-foreground ring-1 ring-inset ring-card-foreground/5 hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Close deck
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
              Esc
            </kbd>
          </button>
        </div>
      </header>

      {/* Cinematic stage + floating command bar. */}
      <div className="relative min-h-0 flex-1 p-3 sm:px-6 sm:pb-6">
        {markdown !== null && error === null ? (
          <div className="stunning-bar pointer-events-auto absolute bottom-5 left-1/2 z-40 flex max-w-[calc(100%-1rem)] -translate-x-1/2 items-center gap-1 rounded-full border border-border/70 bg-card/85 p-1.5 pl-2 shadow-2xl sm:bottom-6 sm:gap-1.5 sm:pl-2.5">
            <ProgressRing index={slideInfo?.index ?? 0} total={slideInfo?.total ?? 0} />
            <span aria-hidden="true" className="mx-0.5 h-6 w-px shrink-0 bg-border/80" />

            <button
              type="button"
              onClick={toggleOverview}
              className={`stunning-tool ${TOOL_PILL_CLASS}`}
              aria-label="Toggle slide overview"
              title="Overview (O)"
            >
              <svg
                viewBox="0 0 24 24"
                className="stunning-tool-icon size-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span className="hidden sm:inline">Overview</span>
            </button>

            <button
              type="button"
              onClick={() => setHelpOpen((open) => !open)}
              className={`stunning-tool ${TOOL_PILL_CLASS}`}
              aria-label="Show keyboard shortcuts"
              aria-expanded={helpOpen}
              aria-controls={helpId}
              title="Keyboard shortcuts"
            >
              <svg
                viewBox="0 0 24 24"
                className="stunning-tool-icon size-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9.4 9.2a2.7 2.7 0 1 1 3.9 2.4c-.9.5-1.3 1.1-1.3 2.1" />
                <circle cx="12" cy="17.2" r="0.7" fill="currentColor" stroke="none" />
              </svg>
              <span className="hidden sm:inline">Help</span>
            </button>

            {fullscreenAvailable ? (
              <button
                type="button"
                onClick={toggleFullscreen}
                className={`stunning-tool ${TOOL_PILL_CLASS}`}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                aria-pressed={isFullscreen}
                title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="stunning-tool-icon size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {isFullscreen ? (
                    <path d="M9 3v6H3M15 21v-6h6M21 9h-6V3M3 15h6v6" />
                  ) : (
                    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
                  )}
                </svg>
                <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
              </button>
            ) : null}
          </div>
        ) : null}

        {helpOpen ? (
          <div
            id={helpId}
            role="group"
            aria-label="Keyboard shortcuts"
            className="deck-help-panel stunning-help absolute bottom-24 right-3 z-50 w-64 rounded-2xl border border-border/70 bg-card/95 p-4 text-card-foreground shadow-2xl sm:right-6"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <h2 className="font-heading text-sm font-semibold text-foreground">
                Keyboard shortcuts
              </h2>
              <button
                type="button"
                onClick={() => setHelpOpen(false)}
                aria-label="Close keyboard shortcuts"
                title="Close"
                className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <dl className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center justify-between gap-2">
                <dt><kbd>←</kbd> <kbd>→</kbd></dt>
                <dd>Previous / next slide</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt><kbd>F</kbd></dt>
                <dd>Fullscreen</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt><kbd>O</kbd></dt>
                <dd>Overview</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt><kbd>S</kbd></dt>
                <dd>Speaker notes</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt><kbd>Esc</kbd></dt>
                <dd>Close deck</dd>
              </div>
            </dl>
          </div>
        ) : null}

        <div
          className="stunning-stage relative h-full w-full overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40"
          style={{ boxShadow: "0 2rem 5rem hsl(var(--foreground) / 0.18)" }}
        >
          <div aria-hidden="true" className="stunning-accent absolute inset-x-0 top-0 z-20 h-[3px]" />
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
          <div
            aria-hidden="true"
            className="stunning-vignette pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          />
        </div>
      </div>

      {/* Polite load/error announcements (VIZ-014 §8.5/§8.7). */}
      <div ref={liveRef} role="status" aria-live="polite" className="sr-only" />
    </div>
  );
}

export default RevealDeck;
