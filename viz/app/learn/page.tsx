"use client";

/**
 * /learn — Learning hub for the four slide decks (VIZ-030).
 *
 * - Deck metadata: `fetch("/decks/decks.json")`. The manifest is authored at
 *   `content/decks/decks.json` and duplicated to `public/decks/` because
 *   Next.js does not publicly serve `viz/content/` (same duplication as the
 *   deck markdown itself). Source path is cited in the header Snapshot badge
 *   and in the error / empty states below.
 * - Cards carry an accent bar, cover art and icon in the deck's docs/prompts/
 *   execution/stremiium zone hue, resolved through the `--zone-*` CSS tokens —
 *   no hardcoded hex; single source `viz/lib/brand.ts` (VIZ-017 D2). The
 *   manifest `accent` field mirrors ZONE_HUES.docs.light as data.
 * - Opening a deck mounts the fullscreen RevealDeck overlay (owned by
 *   components/decks/reveal-deck.tsx). Escape closes it, Tab stays trapped
 *   inside, and focus returns to the opening card's button (VIZ-014 §8.8
 *   focus-trap contract) via `triggerRef` in this page.
 * - Async-load announcements per VIZ-014 §8.7: one polite live region with
 *   loading → loaded/error copy. Filter changes use a second polite region:
 *   "Showing N decks".
 * - Motion: hover/focus preview scales and fades only under `motion-safe:`;
 *   the global `prefers-reduced-motion` gate in globals.css covers the rest.
 */

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Compass,
  Layers3,
  Play,
} from "lucide-react";
import { RevealDeck } from "@/components/decks/reveal-deck";
import { Badge } from "@/components/ui/badge";
import { LEXICON } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Deck manifest entry (content/decks/decks.json). */
interface DeckMeta {
  id: string;
  title: string;
  description: string;
  file: string;
  slides: number;
  /** Authored from ZONE_HUES.docs.light (docs zone hue) — see lib/brand.ts. */
  accent: string;
}

/* -------------------------------------------------------------------------- */
/* Category filter                                                             */
/* -------------------------------------------------------------------------- */

type FilterKey = "all" | "fundamentals" | "program" | "systems";
type CategoryKey = Exclude<FilterKey, "all">;

const FILTERS: ReadonlyArray<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All decks" },
  { key: "fundamentals", label: "Fundamentals" },
  { key: "program", label: "Program" },
  { key: "systems", label: "Systems" },
];

/** Stable id → category map; unknown decks fall back to "systems". */
const DECK_CATEGORY: Record<string, CategoryKey> = {
  "deck-01-repo-orientation": "fundamentals",
  "deck-02-program-brief": "program",
  "deck-03-prompts-and-replies": "systems",
  "deck-04-councils-governance": "systems",
};

function categoryOf(deck: DeckMeta): CategoryKey {
  return DECK_CATEGORY[deck.id] ?? "systems";
}

/* -------------------------------------------------------------------------- */
/* Per-deck visual identity                                                    */
/* -------------------------------------------------------------------------- */

type CoverVariant = "zones" | "tree" | "pipeline" | "ladder";

interface DeckVisual {
  cover: CoverVariant;
  /** Accent bar / badge surface class (literal so Tailwind emits it). */
  bar: string;
  /** AA-safe text class for badges and inline labels. */
  text: string;
  /** SVG fill class for the deck's primary hue. */
  fill: string;
  /** SVG stroke class for the deck's primary hue. */
  stroke: string;
  artLabel: string;
  points: readonly [string, string, string];
}

/**
 * Visual tokens are literal class strings (one per deck) so Tailwind's scanner
 * keeps the `fill-zone-*` / `stroke-zone-*` utilities in the bundle. Bullets
 * are restatements of facts already present in each deck's manifest description.
 */
const DECK_VISUALS: readonly DeckVisual[] = [
  {
    cover: "zones",
    bar: "bg-zone-docs",
    text: "text-zone-docs-text",
    fill: "fill-zone-docs",
    stroke: "stroke-zone-docs",
    artLabel: "Cover art: six colored blocks representing the repository zones",
    points: [
      "Map the six repository zones",
      "Follow the canonical reading order",
      "Apply the evidentiary rule to every claim",
    ],
  },
  {
    cover: "tree",
    bar: "bg-zone-prompts",
    text: "text-zone-prompts-text",
    fill: "fill-zone-prompts",
    stroke: "stroke-zone-prompts",
    artLabel: "Cover art: an organization tree of the strategic councils",
    points: [
      "Trace the NeoBank thesis and competitive field",
      "Meet the 16 councils and the 17-entity dossier roster",
      "Apply the ADOPT / ADAPT / AVOID / BEAT filter",
    ],
  },
  {
    cover: "pipeline",
    bar: "bg-zone-execution",
    text: "text-zone-execution-text",
    fill: "fill-zone-execution",
    stroke: "stroke-zone-execution",
    artLabel: "Cover art: a pipeline from prompts to evidence-grade replies",
    points: [
      "Read the 201 Master Prompts and 18-section reply format",
      "Decode evidence grades and the research apparatus",
      "Explore prompts and results in this app",
    ],
  },
  {
    cover: "ladder",
    bar: "bg-zone-stremiium",
    text: "text-zone-stremiium-text",
    fill: "fill-zone-stremiium",
    stroke: "stroke-zone-stremiium",
    artLabel: "Cover art: a governance hierarchy ladder with routing rules",
    points: [
      "Decode the two-plane hierarchy and Sparkling Curious's role",
      "Quote routing rules R1–R6 verbatim",
      "Follow escalation SLAs and the private-funded boundary",
    ],
  },
];

const ZONE_FILLS = [
  "fill-zone-docs",
  "fill-zone-prompts",
  "fill-zone-execution",
  "fill-zone-stremiium",
  "fill-zone-rea",
  "fill-zone-other",
] as const;

/** Procedural, token-colored cover art — one SVG per deck theme (no bitmaps). */
function CoverArt({
  variant,
  accentFill,
  accentStroke,
  label,
}: {
  variant: CoverVariant;
  accentFill: string;
  accentStroke: string;
  label: string;
}) {
  let art: ReactNode = null;

  if (variant === "zones") {
    // Deck 01 — six repository zones as a 3 × 2 block grid.
    art = (
      <>
        {ZONE_FILLS.map((fill, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 30 + col * 92;
          const y = 16 + row * 46;
          return (
            <g key={fill}>
              <rect x={x} y={y} width="80" height="36" rx="7" className={fill} fillOpacity="0.9" />
              <circle cx={x + 11} cy={y + 11} r="3" className="fill-card" fillOpacity="0.9" />
            </g>
          );
        })}
        <text x="30" y="112" fontSize="10" className="fill-muted-foreground">
          SIX ZONES · ONE REPOSITORY
        </text>
      </>
    );
  } else if (variant === "tree") {
    // Deck 02 — Supreme Coordinator over a bus of strategic councils.
    const children = [56, 124, 196, 264];
    art = (
      <>
        <circle cx="160" cy="24" r="14" className={accentFill} />
        <text x="160" y="28" textAnchor="middle" fontSize="9" className="fill-card">
          SC
        </text>
        <path d="M160 38 V56" stroke="hsl(var(--border))" strokeWidth="2" />
        <path d="M56 56 H264" stroke="hsl(var(--border))" strokeWidth="2" />
        {children.map((x, i) => (
          <g key={x}>
            <path d={`M${x} 56 V78`} stroke="hsl(var(--border))" strokeWidth="2" />
            <circle cx={x} cy="88" r="10" className={ZONE_FILLS[i]} />
            <text x={x} y="91" textAnchor="middle" fontSize="8" className="fill-card">
              C{i + 1}
            </text>
          </g>
        ))}
        <text x="18" y="114" fontSize="10" className="fill-muted-foreground">
          16 COUNCILS · TWO PLANES
        </text>
      </>
    );
  } else if (variant === "pipeline") {
    // Deck 03 — prompt → reply pipeline with explicit arrows.
    const stages = [
      { x: 12, fill: "fill-zone-prompts", label: "ASK" },
      { x: 88, fill: "fill-zone-docs", label: "PROMPT" },
      { x: 164, fill: "fill-zone-rea", label: "EVIDENCE" },
      { x: 240, fill: "fill-zone-execution", label: "REPLY" },
    ];
    art = (
      <>
        <text x="14" y="24" fontSize="10" className="fill-muted-foreground">
          201 PROMPTS → 18-SECTION REPLIES
        </text>
        {stages.map((stage, i) => {
          const next = stages[i + 1];
          return (
            <g key={stage.label}>
              <rect
                x={stage.x}
                y="46"
                width="64"
                height="34"
                rx="7"
                className={stage.fill}
                fillOpacity="0.92"
              />
              <text
                x={stage.x + 32}
                y="67"
                textAnchor="middle"
                fontSize="9"
                className="fill-card"
              >
                {stage.label}
              </text>
              {next ? (
                <path
                  d={`M${stage.x + 64} 63 H${next.x - 4} M${next.x - 10} 58 L${next.x - 4} 63 L${next.x - 10} 68`}
                  className={accentStroke}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : null}
            </g>
          );
        })}
      </>
    );
  } else {
    // Deck 04 — ascending governance ladder with a routing-rule baseline.
    art = (
      <>
        <circle cx="160" cy="18" r="9" className={accentFill} />
        <text x="160" y="22" textAnchor="middle" fontSize="9" className="fill-card">
          SC
        </text>
        {[0, 1, 2, 3, 4].map((i) => {
          const height = 14 + i * 10;
          return (
            <rect
              key={i}
              x={30 + i * 52}
              y={96 - height}
              width="46"
              height={height}
              rx="5"
              className={ZONE_FILLS[i]}
              fillOpacity="0.92"
            />
          );
        })}
        <path d="M18 98 H310" stroke="hsl(var(--border))" strokeWidth="2" />
        <text x="18" y="114" fontSize="10" className="fill-muted-foreground">
          R1–R6 ROUTING · SLA LADDER
        </text>
      </>
    );
  }

  return (
    <svg
      viewBox="0 0 320 120"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={label}
    >
      <rect x="0" y="0" width="320" height="120" fill="hsl(var(--muted) / 0.35)" />
      {art}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Recommended learning path — Orientation → Program → Prompts → Councils      */
/* -------------------------------------------------------------------------- */

const LEARNING_PATH = [
  {
    kind: "deck",
    id: "deck-01-repo-orientation",
    title: "Repo Orientation deck",
    description: "The six zones, reading order and evidentiary rule.",
    cta: "Start here",
  },
  {
    kind: "deck",
    id: "deck-02-program-brief",
    title: "Program Brief deck",
    description: "Stremiium context, the NeoBank thesis and 16 councils.",
    cta: "Open deck",
  },
  {
    kind: "deck",
    id: "deck-03-prompts-and-replies",
    title: "Prompts & Replies deck",
    description: "201 master prompts, the reply format and evidence grades.",
    cta: "Open deck",
  },
  {
    kind: "deck",
    id: "deck-04-councils-governance",
    title: "Councils deck",
    description: "Routing rules R1–R6, SLAs and the funding boundary.",
    cta: "Open deck",
  },
] as const;

/** One numbered flow node (circle + arrow) rendered as inline SVG. */
function StepNode({ index, last }: { index: number; last: boolean }) {
  const visual = DECK_VISUALS[index % DECK_VISUALS.length];
  return (
    <svg viewBox="0 0 96 40" className="h-10 w-24" aria-hidden="true">
      <circle cx="20" cy="20" r="15" className={visual.fill} fillOpacity="0.16" />
      <circle cx="20" cy="20" r="15" fill="none" className={visual.stroke} strokeWidth="2" />
      <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="700" className={visual.fill}>
        {index + 1}
      </text>
      <path d="M40 20 H82" stroke="hsl(var(--border))" strokeWidth="2" />
      <path
        d="M76 15 L82 20 L76 25"
        fill="none"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {last ? <circle cx="90" cy="20" r="4" className="fill-primary" /> : null}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function LearnPage() {
  // Client route — set the document title on mount (SSR-safe: effect only).
  useEffect(() => {
    document.title = "Learn · Stremiium Repo Viz";
  }, []);

  const [decks, setDecks] = useState<DeckMeta[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("Loading learning decks…");
  const [filter, setFilter] = useState<FilterKey>("all");
  const [openDeck, setOpenDeck] = useState<DeckMeta | null>(null);
  /** Element to refocus when the deck overlay closes (VIZ-014 §8.8). */
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/decks/decks.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<DeckMeta[]>;
      })
      .then((data) => {
        if (!alive) return;
        const list = Array.isArray(data) ? data : [];
        setDecks(list);
        setStatus(
          list.length > 0
            ? `Learning decks loaded: ${list.length} decks.`
            : "No learning decks found.",
        );
      })
      .catch((err: unknown) => {
        if (!alive) return;
        setError(err instanceof Error ? err.message : "Failed to load decks.");
        setStatus("Failed to load learning decks.");
      });
    return () => {
      alive = false;
    };
  }, []);

  /** Decks shown by the active category filter, with original indices intact. */
  const visibleDecks = useMemo(() => {
    if (!decks) return [] as Array<{ deck: DeckMeta; index: number }>;
    return decks
      .map((deck, index) => ({ deck, index }))
      .filter(({ deck }) => filter === "all" || categoryOf(deck) === filter);
  }, [decks, filter]);

  const totalSlides = decks?.reduce((sum, deck) => sum + (deck.slides || 0), 0) ?? 53;
  const deckCount = decks?.length ?? 4;

  const closeDeck = useCallback(() => setOpenDeck(null), []);

  // Return focus to the card button that opened the deck.
  useEffect(() => {
    if (openDeck === null && triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [openDeck]);

  const openDeckAt = useCallback((deck: DeckMeta, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenDeck(deck);
  }, []);

  /** Learning-path step → open the matching manifest deck in the same player. */
  const openDeckById = useCallback(
    (id: string, trigger: HTMLElement) => {
      const deck = decks?.find((entry) => entry.id === id);
      if (deck) openDeckAt(deck, trigger);
    },
    [decks, openDeckAt]
  );

  return (
    // The AppShell already provides the single <main id="main"> landmark.
    <div className="container py-8">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            {LEXICON.learn}
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Pick a deck and step through it at your own pace. Every deck is generated
            from the canonical repository docs and every slide cites its physical
            source path.
          </p>
        </div>
        <Badge variant="secondary" className="gap-1.5">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-muted-foreground" />
          Snapshot · public/decks/decks.json
        </Badge>
      </header>

      {/* Async-load announcements (VIZ-014 §8.7). */}
      <div role="status" aria-live="polite" className="sr-only">
        {status}
      </div>

      {/* Progress / stats strip — totals + slide-count bar chart. */}
      <section
        aria-labelledby="learn-stats-heading"
        className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card/60 px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            <Layers3 className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2
              id="learn-stats-heading"
              className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Curriculum at a glance
            </h2>
            <p className="font-heading text-base font-semibold text-foreground">
              {`${deckCount} decks · ${totalSlides} slides · ~20 min total`}
            </p>
          </div>
        </div>
        <SlideBarChart decks={decks} />
      </section>

      <section aria-labelledby="deck-library-heading" className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="deck-library-heading"
              className="font-heading text-lg font-semibold tracking-tight text-foreground"
            >
              Deck library
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Browse by topic or jump straight into a deck — each one is interactive
              and keyboard navigable.
            </p>
          </div>
          <div
            role="group"
            aria-label="Filter decks by category"
            className="inline-flex flex-wrap gap-1 rounded-lg border border-border bg-card p-1"
          >
            {FILTERS.map((option) => (
              <button
                key={option.key}
                type="button"
                aria-pressed={filter === option.key}
                onClick={() => setFilter(option.key)}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  filter === option.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter-change announcement (separate from the async-load region). */}
        <p role="status" aria-live="polite" className="mt-2 text-xs text-muted-foreground">
          {`Showing ${visibleDecks.length} ${visibleDecks.length === 1 ? "deck" : "decks"}`}
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Source: <code>content/decks/</code> <span aria-hidden="true">·</span> served from{" "}
          <code>public/decks/</code> — every slide cites its physical source path.
        </p>

        {error !== null ? (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-destructive/40 bg-card p-6 text-card-foreground"
          >
            <p className="font-medium">Failed to load learning decks ({error}).</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Deck sources live in <code>content/decks/</code> and are served from{" "}
              <code>public/decks/</code> — re-copy the folder if decks are missing.
            </p>
          </div>
        ) : decks === null ? (
          <p role="status" className="mt-4 text-sm text-muted-foreground">
            Loading decks…
          </p>
        ) : decks.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            No learning decks are defined yet. Check that <code>content/decks/</code> has
            been copied to <code>public/decks/</code>, then reload.
          </p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visibleDecks.map(({ deck, index }) => (
              <DeckCard key={deck.id} deck={deck} index={index} onOpen={openDeckAt} />
            ))}
          </ul>
        )}
      </section>

      {/* Recommended order for new visitors. */}
      <section aria-labelledby="learning-path-heading" className="mt-10">
        <h2
          id="learning-path-heading"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          Learning path
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          New here? Follow this order — Repo Orientation deck → Program Brief deck →
          Prompts &amp; Replies deck → Councils deck. Each step builds on the previous
          one. Prefer a guided walkthrough?{" "}
          <Link
            href="/tours"
            className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Compass className="size-3.5" aria-hidden="true" />
            Take the repo tour
          </Link>
          .
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_PATH.map((step, index) => {
            const visual = DECK_VISUALS[index % DECK_VISUALS.length];
            return (
              <li key={step.id} className="relative min-w-0">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 bg-border lg:block"
                  />
                ) : null}
                <button
                  type="button"
                  onClick={(event) => openDeckById(step.id, event.currentTarget)}
                  aria-label={`Step ${index + 1}: open ${step.title}`}
                  className="flex h-full min-h-11 w-full flex-col gap-2 rounded-xl border border-border bg-card/60 p-4 text-left transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <StepNode index={index} last={index === LEARNING_PATH.length - 1} />
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Step {index + 1}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <span
                    className={cn("inline-flex items-center gap-1 text-xs font-medium", visual.text)}
                  >
                    {step.cta}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      <nav
        aria-label="Explore next"
        className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-sm"
      >
        <Link
          href="/tours"
          className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Explore next: Guided tours
          <ArrowRight aria-hidden="true" />
        </Link>
        <a
          href="#main"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </nav>

      {openDeck !== null ? (
        <RevealDeck
          file={openDeck.file}
          title={openDeck.title}
          deckId={openDeck.id}
          onClose={closeDeck}
        />
      ) : null}
    </div>
  );
}

/** Small SVG bar chart of slide counts per deck, colored by deck zone hue. */
function SlideBarChart({ decks }: { decks: DeckMeta[] | null }) {
  const counts = [0, 1, 2, 3].map((i) => decks?.[i]?.slides ?? [13, 14, 12, 14][i]);
  const max = Math.max(14, ...counts);
  const xs = [20, 76, 132, 188];
  const baseline = 62;
  const label = `Slide counts per deck — Deck 01: ${counts[0]} slides, Deck 02: ${counts[1]} slides, Deck 03: ${counts[2]} slides, Deck 04: ${counts[3]} slides.`;

  return (
    <figure role="img" aria-label={label} className="m-0">
      <svg viewBox="0 0 232 78" className="h-16 w-full max-w-[15rem]" aria-hidden="true">
        <line x1="10" y1={baseline} x2="222" y2={baseline} stroke="hsl(var(--border))" strokeWidth="1.5" />
        {counts.map((count, i) => {
          const height = Math.max(2, Math.round((count / max) * 44));
          return (
            <g key={i}>
              <rect
                x={xs[i]}
                y={baseline - height}
                width="36"
                height={height}
                rx="4"
                className={DECK_VISUALS[i].fill}
              />
              <text
                x={xs[i] + 18}
                y={baseline - height - 4}
                textAnchor="middle"
                fontSize="10"
                className="fill-foreground font-medium"
              >
                {count}
              </text>
              <text
                x={xs[i] + 18}
                y={baseline + 13}
                textAnchor="middle"
                fontSize="9"
                className="fill-muted-foreground"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

function DeckCard({
  deck,
  index,
  onOpen,
}: {
  deck: DeckMeta;
  index: number;
  onOpen: (deck: DeckMeta, trigger: HTMLElement) => void;
}) {
  const hasSource = typeof deck.file === "string" && deck.file.length > 0;
  const visual = DECK_VISUALS[index % DECK_VISUALS.length];

  return (
    <li
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        "transition-shadow duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-ring",
      )}
    >
      {/* Accent bar — deck zone hue via --zone-* (VIZ-017 D2). */}
      <div className={cn("h-1 w-full", visual.bar)} aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Cover art + hover/focus preview overlay. */}
        <div className="relative h-24 overflow-hidden rounded-md border border-border/60 bg-muted/30">
          <div className="h-full w-full transition-transform duration-300 motion-safe:group-hover:scale-105 motion-safe:group-focus-within:scale-105 motion-reduce:transform-none">
            <CoverArt
              variant={visual.cover}
              accentFill={visual.fill}
              accentStroke={visual.stroke}
              label={visual.artLabel}
            />
          </div>
          <span
            className={cn(
              "absolute left-2 top-2 rounded-md bg-background/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide",
              visual.text,
            )}
          >
            Deck {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-[background-color,opacity] duration-200 group-hover:bg-background/75 group-hover:opacity-100 group-focus-within:bg-background/75 group-focus-within:opacity-100 motion-reduce:transition-none">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
              <Play className="size-3.5" aria-hidden="true" />
              Preview deck
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-base font-semibold leading-snug text-foreground">
            {deck.title}
          </h3>
          <BookOpen className={cn("mt-0.5 size-4 shrink-0", visual.text)} aria-hidden="true" />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            What you&apos;ll learn
          </p>
          <ul className="mt-1.5 space-y-1">
            {visual.points.map((point) => (
              <li key={point} className="flex gap-1.5 text-xs leading-snug text-muted-foreground">
                <ChevronRight className={cn("mt-px size-3 shrink-0", visual.text)} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className={cn("text-xs text-muted-foreground", !hasSource && "italic")}>
          {deck.description}
        </p>

        <p className="text-xs font-medium text-muted-foreground">
          {deck.slides} {deck.slides === 1 ? "slide" : "slides"}
          <span aria-hidden="true"> · </span>
          ~{Math.max(1, Math.round(deck.slides * 0.75))} min read
        </p>

        <button
          type="button"
          onClick={(event) => onOpen(deck, event.currentTarget)}
          aria-label={`Open deck: ${deck.title}`}
          className="mt-auto inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open deck
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
