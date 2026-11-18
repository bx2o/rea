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

/** Two-digit display value for KPI counters (04, 06, …). */
const two = (value: number) => String(Math.max(0, value)).padStart(2, "0");

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

/**
 * Decorative-motion mirror of the OS query AND the persisted
 * `viz-reduced-motion` switch. The reveal player uses the same reader; here it
 * freezes the poster sheen, roadmap flow and KPI rises on the learning hub.
 */
function useMotionStill(): boolean {
  const [still, setStill] = useState(false);
  useEffect(() => {
    const sync = () => {
      let forced = false;
      try {
        forced = window.localStorage.getItem("viz-reduced-motion") === "on";
      } catch {
        /* storage unavailable — fall through to the OS query */
      }
      setStill(forced || (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false));
    };
    sync();
    window.addEventListener("viz-reduced-motion-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("viz-reduced-motion-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return still;
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
  /** Foreground poster title (Space Grotesk, letter-spaced). */
  shortTitle: string;
  /** Small kicker printed beneath the poster title. */
  kicker: string;
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
    shortTitle: "REPO MAP",
    kicker: "SIX ZONES / ONE SOURCE OF TRUTH",
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
    shortTitle: "COUNCILS",
    kicker: "TWO PLANES / SIXTEEN VOICES",
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
    shortTitle: "PROMPTS",
    kicker: "ASK / EVIDENCE / REPLY",
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
    shortTitle: "GOVERNANCE",
    kicker: "R1–R6 / THE FUNDING BOUNDARY",
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
  index,
  shortTitle,
  kicker,
}: {
  variant: CoverVariant;
  accentFill: string;
  accentStroke: string;
  label: string;
  index: number;
  shortTitle: string;
  kicker: string;
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

  const washId = `stunning-wash-${index}`;
  const glossId = `stunning-gloss-${index}`;
  const haloId = `stunning-halo-${index}`;

  return (
    <svg
      viewBox="0 0 320 176"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <desc>{kicker}</desc>
      <defs>
        {/* Backdrop wash — token-derived gradient, never a literal hex. */}
        <linearGradient id={washId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "hsl(var(--muted) / 0.85)" }} />
          <stop offset="48%" style={{ stopColor: "hsl(var(--card) / 0.9)" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--primary) / 0.16)" }} />
        </linearGradient>
        <linearGradient id={glossId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "hsl(var(--card-foreground) / 0.10)" }} />
          <stop offset="42%" style={{ stopColor: "hsl(var(--card-foreground) / 0.01)" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--card-foreground) / 0.08)" }} />
        </linearGradient>
        <radialGradient id={haloId} cx="50%" cy="44%" r="62%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--highlight) / 0.16)" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--highlight) / 0)" }} />
        </radialGradient>
      </defs>

      <rect width="320" height="176" fill={`url(#${washId})`} />
      <rect width="320" height="176" fill={`url(#${haloId})`} />
      <g style={{ stroke: "hsl(var(--border) / 0.55)" }} strokeWidth="0.6" opacity="0.7">
        {[22, 44, 66, 88, 110, 132].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} />
        ))}
        {[40, 100, 160, 220, 280].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="176" />
        ))}
      </g>

      {/* Mid-ground motif — the deck's procedural diagram, depth-lifted. */}
      <g className="stunning-motif" transform="translate(0 4)">
        {art}
      </g>

      {/* Foreground gloss + letter-spaced title band. */}
      <rect width="320" height="176" fill={`url(#${glossId})`} opacity="0.7" />
      <rect x="0" y="128" width="320" height="48" style={{ fill: "hsl(var(--card) / 0.72)" }} />
      <text
        x="18"
        y="151"
        className="font-heading fill-foreground"
        fontSize="17"
        fontWeight="700"
        letterSpacing="0.15em"
      >
        {shortTitle}
      </text>
      <text
        x="18"
        y="166"
        className="fill-muted-foreground"
        fontSize="8"
        fontWeight="600"
        letterSpacing="0.2em"
      >
        {kicker}
      </text>
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

/**
 * One glowing stop on the 1→2→3→4 roadmap. The bezier stubs enter from the
 * previous card and leave toward the next, so adjacent grid cells read as one
 * continuous curve on wide screens and as a self-contained motif when stacked.
 */
function RoadmapNode({ index, last }: { index: number; last: boolean }) {
  const visual = DECK_VISUALS[index % DECK_VISUALS.length];
  const lineId = `stunning-road-line-${index}`;
  const lineStyle = "hsl(var(--primary) / 0.5)";

  return (
    <svg
      viewBox="0 0 240 56"
      preserveAspectRatio="none"
      className="stunning-roadmap h-14 w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={lineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary) / 0.15)" }} />
          <stop offset="50%" style={{ stopColor: "hsl(var(--primary) / 0.7)" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--highlight) / 0.55)" }} />
        </linearGradient>
      </defs>

      {index > 0 ? (
        <path
          className="stunning-road-line"
          d="M0 40 C 52 40 72 12 108 28"
          fill="none"
          style={{ stroke: `url(#${lineId})` }}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : null}
      {last ? (
        <path
          className="stunning-road-line"
          d="M132 28 C 172 42 196 16 240 24"
          fill="none"
          style={{ stroke: `url(#${lineId})` }}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          className="stunning-road-line"
          d="M132 28 C 172 42 196 16 240 24"
          fill="none"
          style={{ stroke: lineStyle }}
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}

      {/* Blurred halo + solid ring give the numbered stop its glow. */}
      <circle cx="120" cy="28" r="19" className={`${visual.fill} stunning-halo`} opacity="0.55" />
      <circle cx="120" cy="28" r="16" className={visual.fill} fillOpacity="0.14" />
      <circle
        cx="120"
        cy="28"
        r="15"
        className="stunning-road-ring"
        style={{ fill: "hsl(var(--card))", stroke: "hsl(var(--primary) / 0.65)" }}
        strokeWidth="2"
      />
      <text
        x="120"
        y="34"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        className={visual.fill}
      >
        {index + 1}
      </text>
      {last ? (
        <circle cx="216" cy="24" r="4" className="stunning-endpoint fill-highlight" />
      ) : null}
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
  /** Freezes decorative motion when either motion gate is engaged. */
  const motionStill = useMotionStill();

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
    <div
      className={`stunning-deck stunning-learn container py-8 ${motionStill ? "stunning-still" : ""}`}
    >
      <header className="stunning-page-header relative mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="stunning-eyebrow mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
            <span aria-hidden="true" className="stunning-kicker-rule h-px w-8 bg-primary" />
            The curriculum / 01—04
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {LEXICON.learn}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Pick a deck and step through it at your own pace. Every deck is generated
            from the canonical repository docs and every slide cites its physical
            source path.
          </p>
        </div>
        <Badge variant="secondary" className="stunning-snapshot gap-1.5 rounded-full px-3 py-1.5">
          <span aria-hidden="true" className="stunning-live-dot size-1.5 rounded-full bg-primary" />
          Snapshot · public/decks/decks.json
        </Badge>
      </header>

      {/* Async-load announcements (VIZ-014 §8.7). */}
      <div role="status" aria-live="polite" className="sr-only">
        {status}
      </div>

      {/* KPI dashboard — totals plus four token-coloured mini-charts. */}
      <section
        aria-labelledby="learn-stats-heading"
        className="stunning-stats relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-4 shadow-lg sm:p-5"
      >
        <div
          aria-hidden="true"
          className="stunning-stats-glow pointer-events-none absolute -right-16 -top-24 size-64 rounded-full"
        />
        <div className="relative flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="stunning-eyebrow text-[9px] font-semibold uppercase tracking-[0.28em] text-primary">
              Curriculum intelligence / dashboard
            </p>
            <h2
              id="learn-stats-heading"
              className="mt-1 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Curriculum at a glance
            </h2>
          </div>
          <p className="font-heading text-sm font-semibold text-foreground">
            {`${deckCount} decks · ${totalSlides} slides · ~20 min total`}
          </p>
        </div>
        <div className="relative mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatKpi
            label="Decks"
            value={two(deckCount)}
            unit="TOTAL"
            note="Four guided decks"
            icon={<Layers3 className="size-4" aria-hidden="true" />}
          >
            <DeckMixChart decks={decks} />
          </StatKpi>
          <StatKpi
            label="Slides"
            value={String(totalSlides)}
            unit="SLIDES"
            note="Every slide cites a source"
            icon={<BookOpen className="size-4" aria-hidden="true" />}
          >
            <SlideBarChart decks={decks} />
          </StatKpi>
          <StatKpi
            label="Read time"
            value="~20"
            unit="MIN"
            note="Entirely self-paced"
            icon={<Compass className="size-4" aria-hidden="true" />}
          >
            <SparklineChart />
          </StatKpi>
          <StatKpi
            label="Zones"
            value="06"
            unit="DOMAINS"
            note="One canonical repository"
            icon={<Layers3 className="size-4" aria-hidden="true" />}
          >
            <ZoneMosaic />
          </StatKpi>
        </div>
      </section>

      <section
        aria-labelledby="deck-library-heading"
        aria-label="Learning deck library"
        className="mt-8"
      >
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
            className="stunning-filters inline-flex flex-wrap gap-1 rounded-full border border-border/70 bg-card/80 p-1 shadow-sm"
          >
            {FILTERS.map((option) => (
              <button
                key={option.key}
                type="button"
                aria-pressed={filter === option.key}
                onClick={() => setFilter(option.key)}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-full px-3.5 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  filter === option.key
                    ? "stunning-filter-active bg-primary text-primary-foreground shadow-md"
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
          <ul
            aria-label="Learning deck library"
            className="stunning-deck-grid mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {visibleDecks.map(({ deck, index }) => (
              <DeckCard key={deck.id} deck={deck} index={index} onOpen={openDeckAt} />
            ))}
          </ul>
        )}
      </section>

      {/* Recommended order for new visitors — a glowing four-stop roadmap. */}
      <section aria-labelledby="learning-path-heading" className="stunning-path-section relative mt-12">
        <p className="stunning-eyebrow text-[9px] font-semibold uppercase tracking-[0.28em] text-primary">
          Recommended sequence / start here
        </p>
        <h2
          id="learning-path-heading"
          className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Learning path
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
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
        <ol className="stunning-roadmap mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_PATH.map((step, index) => {
            const visual = DECK_VISUALS[index % DECK_VISUALS.length];
            return (
              <li key={step.id} className="relative min-w-0">
                <button
                  type="button"
                  onClick={(event) => openDeckById(step.id, event.currentTarget)}
                  aria-label={`Step ${index + 1}: open ${step.title}`}
                  className="stunning-step group flex h-full min-h-11 w-full flex-col gap-2 rounded-2xl border border-border/70 bg-card/70 p-4 text-left ring-1 ring-inset ring-card-foreground/5 transition-[box-shadow,border-color,transform] hover:border-primary/40 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <RoadmapNode index={index} last={index === LEARNING_PATH.length - 1} />
                  <span className="stunning-eyebrow text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Step {two(index + 1)}
                  </span>
                  <h3 className="font-heading text-sm font-bold leading-snug text-foreground">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <span
                    className={cn(
                      "stunning-step-cta inline-flex items-center gap-1 text-xs font-semibold",
                      visual.text,
                    )}
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

/** One KPI cell in the curriculum dashboard. */
function StatKpi({
  label,
  value,
  unit,
  note,
  icon,
  children,
}: {
  label: string;
  value: string;
  unit: string;
  note: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="stunning-kpi relative overflow-hidden rounded-xl border border-border/70 bg-card/80 px-4 py-3 ring-1 ring-inset ring-card-foreground/5">
      <div
        aria-hidden="true"
        className="stunning-kpi-sheen pointer-events-none absolute -right-10 -top-12 size-28 rounded-full"
      />
      <div className="relative flex items-center justify-between gap-2">
        <span className="stunning-eyebrow text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          {label}
        </span>
        <span className="text-primary">{icon}</span>
      </div>
      <div className="relative mt-1 flex items-end gap-2">
        <span className="stunning-kpi-value font-heading text-3xl font-bold leading-none tracking-tight text-foreground">
          {value}
        </span>
        <span className="mb-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {unit}
        </span>
      </div>
      <p className="relative mt-1 text-[11px] text-muted-foreground">{note}</p>
      <div className="relative mt-2">{children}</div>
    </div>
  );
}

/** Mini-chart: the four decks as a zone-coloured mosaic. */
function DeckMixChart({ decks }: { decks: DeckMeta[] | null }) {
  const label = `Deck mix — ${decks?.length ?? 4} decks across four categories.`;
  return (
    <figure role="img" aria-label={label} className="m-0">
      <svg viewBox="0 0 120 44" className="stunning-mini-chart h-11 w-full" aria-hidden="true">
        {ZONE_FILLS.slice(0, 4).map((fill, i) => {
          const x = 4 + i * 29;
          const top = 8 + (i % 2) * 6;
          return (
            <g key={fill}>
              <rect x={x} y={top} width="23" height={34 - (top - 8)} rx="4" className={fill} opacity="0.9" />
              <circle cx={x + 11.5} cy={top + 6} r="2.5" className="fill-card" opacity="0.85" />
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

/** Compact edition of the slide-count bar chart, coloured by deck zone hue. */
function SlideBarChart({ decks }: { decks: DeckMeta[] | null }) {
  const counts = [0, 1, 2, 3].map((i) => decks?.[i]?.slides ?? [13, 14, 12, 14][i]);
  const max = Math.max(14, ...counts);
  const xs = [4, 34, 64, 94];
  const baseline = 38;
  const label = `Slide counts per deck — Deck 01: ${counts[0]} slides, Deck 02: ${counts[1]} slides, Deck 03: ${counts[2]} slides, Deck 04: ${counts[3]} slides.`;

  return (
    <figure role="img" aria-label={label} className="m-0">
      <svg viewBox="0 0 120 44" className="stunning-mini-chart h-11 w-full" aria-hidden="true">
        <line x1="0" y1={baseline} x2="120" y2={baseline} style={{ stroke: "hsl(var(--border))" }} strokeWidth="1" />
        {counts.map((count, i) => {
          const height = Math.max(2, Math.round((count / max) * 26));
          return (
            <g key={i}>
              <rect
                x={xs[i]}
                y={baseline - height}
                width="22"
                height={height}
                rx="3"
                className={DECK_VISUALS[i].fill}
                opacity="0.92"
              />
              <rect
                x={xs[i]}
                y={baseline - height}
                width="22"
                height="2"
                rx="1"
                className="fill-card"
                opacity="0.7"
              />
              <text
                x={xs[i] + 11}
                y={baseline - height - 3}
                textAnchor="middle"
                fontSize="8"
                className="fill-foreground font-medium"
              >
                {count}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

/** Mini-chart: a gently rising token-green area sparkline for read time. */
function SparklineChart() {
  const label = "Reading-time profile — steady, self-paced across all four decks.";
  return (
    <figure role="img" aria-label={label} className="m-0">
      <svg viewBox="0 0 120 44" className="stunning-mini-chart h-11 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="stunning-spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "hsl(var(--primary) / 0.32)" }} />
            <stop offset="100%" style={{ stopColor: "hsl(var(--primary) / 0)" }} />
          </linearGradient>
        </defs>
        <path
          d="M2 34 C 20 30 26 18 42 22 S 64 36 80 20 S 104 12 118 8 L118 44 L2 44 Z"
          fill="url(#stunning-spark-fill)"
        />
        <path
          d="M2 34 C 20 30 26 18 42 22 S 64 36 80 20 S 104 12 118 8"
          fill="none"
          style={{ stroke: "hsl(var(--primary))" }}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="118" cy="8" r="2.5" className="fill-highlight" />
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

/** Mini-chart: the six repository zones as a token-coloured dot matrix. */
function ZoneMosaic() {
  const label = "Six repository zones — docs, prompts, execution, stremiium, rea and other.";
  return (
    <figure role="img" aria-label={label} className="m-0">
      <svg viewBox="0 0 120 44" className="stunning-mini-chart h-11 w-full" aria-hidden="true">
        {ZONE_FILLS.map((fill, i) => (
          <rect
            key={fill}
            x={4 + i * 19}
            y={10 + (i % 3) * 4}
            width="15"
            height={24 - (i % 3) * 4}
            rx="3"
            className={fill}
            opacity="0.92"
          />
        ))}
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
  const duration = Math.max(1, Math.round(deck.slides * 0.75));

  return (
    <li className="stunning-poster group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card text-card-foreground shadow-md ring-1 ring-inset ring-card-foreground/5 transition-[box-shadow,border-color,transform] duration-300 hover:border-primary/40 motion-safe:hover:-translate-y-1 motion-reduce:transform-none focus-within:ring-2 focus-within:ring-ring">
      {/* Accent rail — deck zone hue via --zone-* (VIZ-017 D2). */}
      <div className={cn("stunning-poster-rail h-[3px] w-full", visual.bar)} aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Layered movie-poster art + gloss sweep + metadata chips. */}
        <div className="stunning-poster-art relative h-40 overflow-hidden rounded-xl border border-border/60 bg-muted/30">
          <div className="h-full w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.06] motion-safe:group-focus-within:scale-[1.06] motion-reduce:transform-none">
            <CoverArt
              variant={visual.cover}
              accentFill={visual.fill}
              accentStroke={visual.stroke}
              label={visual.artLabel}
              index={index}
              shortTitle={visual.shortTitle}
              kicker={visual.kicker}
            />
          </div>
          <span
            className={cn(
              "stunning-chip absolute left-3 top-3 rounded-full border border-border/60 bg-card/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-sm",
              visual.text,
            )}
          >
            Deck {two(index + 1)}
          </span>
          <span className="stunning-chip stunning-count absolute right-3 top-3 rounded-full border border-border/60 bg-card/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground backdrop-blur-sm">
            {deck.slides} slides
          </span>
          <span className="stunning-duration absolute bottom-3 right-3 rounded-full border border-primary/30 bg-primary/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lg">
            ~{duration} min
          </span>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-[background-color,opacity] duration-300 group-hover:bg-background/55 group-hover:opacity-100 group-focus-within:bg-background/55 group-focus-within:opacity-100 motion-reduce:transition-none">
            <span className="stunning-preview inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg">
              <Play className="size-3.5" aria-hidden="true" />
              Preview deck
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-base font-bold leading-snug text-foreground">
            {deck.title}
          </h3>
          <BookOpen className={cn("mt-0.5 size-4 shrink-0", visual.text)} aria-hidden="true" />
        </div>

        <div>
          <p className="stunning-eyebrow text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
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

        <p className={cn("text-xs leading-relaxed text-muted-foreground", !hasSource && "italic")}>
          {deck.description}
        </p>

        <button
          type="button"
          onClick={(event) => onOpen(deck, event.currentTarget)}
          aria-label={`Open deck: ${deck.title}`}
          className="stunning-open mt-auto inline-flex h-12 w-full items-center justify-between gap-2 rounded-xl px-4 text-sm font-semibold text-primary-foreground shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="stunning-open-icon grid size-6 place-items-center rounded-lg bg-primary-foreground/15"
            >
              <Play className="size-3" aria-hidden="true" />
            </span>
            Open deck
          </span>
          <ChevronRight className="stunning-open-arrow size-4" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
