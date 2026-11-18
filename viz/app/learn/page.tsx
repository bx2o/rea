"use client";

/**
 * /learn — Learning decks grid (VIZ-030).
 *
 * - Deck metadata: `fetch("/decks/decks.json")`. The manifest is authored at
 *   `content/decks/decks.json` and duplicated to `public/decks/` because
 *   Next.js does not publicly serve `viz/content/` (same duplication as the
 *   deck markdown itself).
 * - Cards carry an accent bar in the docs zone hue (ZONE_HUES.docs) resolved
 *   through the `--zone-docs` token — no hardcoded hex; single source
 *   `viz/lib/brand.ts` (VIZ-017 D2). The manifest `accent` field mirrors
 *   ZONE_HUES.docs.light as data.
 * - Opening a deck mounts the fullscreen RevealDeck overlay. Escape closes
 *   it, Tab stays trapped inside, and focus returns to the opening card's
 *   button (VIZ-014 §8.8 focus-trap contract).
 * - Async-load announcements per VIZ-014 §8.7: one polite live region with
 *   loading → loaded/error copy.
 */

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, ChevronRight, Compass } from "lucide-react";
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

/**
 * Recommended order for first-time visitors: two decks, a guided repo tour,
 * then the governance deck. Deck steps open the same fullscreen player as the
 * cards; the tour step links to /tours.
 */
const LEARNING_PATH = [
  {
    kind: "deck",
    id: "deck-01-repo-orientation",
    title: "Repo Orientation deck",
    description: "The six zones, reading order and evidentiary rule.",
  },
  {
    kind: "deck",
    id: "deck-02-program-brief",
    title: "Program Brief deck",
    description: "Stremiium context, the NeoBank thesis and 16 councils.",
  },
  {
    kind: "tour",
    id: "repo-orientation",
    title: "Repo tour",
    description: "A guided, four-stop walkthrough of the live views.",
  },
  {
    kind: "deck",
    id: "deck-04-councils-governance",
    title: "Councils deck",
    description: "Routing rules R1–R6, SLAs and the funding boundary.",
  },
] as const;

export default function LearnPage() {
  // Client route — set the document title on mount (SSR-safe: effect only).
  useEffect(() => {
    document.title = "Learn · Stremiium Repo Viz";
  }, []);

  const [decks, setDecks] = useState<DeckMeta[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("Loading learning decks…");
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

      {error !== null ? (
        <div
          role="alert"
          className="rounded-lg border border-destructive/40 bg-card p-6 text-card-foreground"
        >
          <p className="font-medium">Failed to load learning decks ({error}).</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Deck sources live in <code>content/decks/</code> and are served from{" "}
            <code>public/decks/</code> — re-copy the folder if decks are missing.
          </p>
        </div>
      ) : decks === null ? (
        <p role="status" className="text-sm text-muted-foreground">
          Loading decks…
        </p>
      ) : decks.length === 0 ? (
        <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
          No learning decks are defined yet. Check that <code>content/decks/</code> has
          been copied to <code>public/decks/</code>, then reload.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {decks.map((deck) => (
            <DeckCard key={deck.id} deck={deck} onOpen={openDeckAt} />
          ))}
        </ul>
      )}

      {/* Recommended order for new visitors. */}
      <section aria-labelledby="learning-path-heading" className="mt-10">
        <h2
          id="learning-path-heading"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          Learning path
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          New here? Follow this order — Orientation deck → Program Brief deck → Repo
          tour → Councils deck. Each step builds on the previous one.
        </p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_PATH.map((step, index) => (
            <li
              key={step.id}
              className="relative flex h-full flex-col rounded-lg border border-border bg-card/60 p-4"
            >
              <span
                aria-hidden="true"
                className="absolute -top-2.5 left-3 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
              >
                {index + 1}
              </span>
              <h3 className="mt-1 font-heading text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {step.kind === "tour" ? (
                <Link
                  href="/tours"
                  className="mt-3 inline-flex items-center gap-1 self-start text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Compass className="size-3.5" aria-hidden="true" />
                  Go to Tours
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={(event) => openDeckById(step.id, event.currentTarget)}
                  className="mt-3 inline-flex items-center gap-1 self-start rounded text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <BookOpen className="size-3.5" aria-hidden="true" />
                  {step.title.includes("Orientation") ? "Start here" : "Open deck"}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </button>
              )}
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-sm">
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
      </div>

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

function DeckCard({
  deck,
  onOpen,
}: {
  deck: DeckMeta;
  onOpen: (deck: DeckMeta, trigger: HTMLElement) => void;
}) {
  const hasSource = typeof deck.file === "string" && deck.file.length > 0;
  return (
    <li className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      {/* Accent bar — docs zone hue (ZONE_HUES.docs via --zone-docs, VIZ-017 D2). */}
      <div className="h-1 w-full bg-zone-docs" aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-heading text-base font-semibold leading-snug text-foreground">
            {deck.title}
          </h2>
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-zone-docs" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            What you&apos;ll learn
          </p>
          <p className={cn("mt-0.5 text-sm text-muted-foreground", !hasSource && "italic")}>
            {deck.description}
          </p>
        </div>
        <p className="text-xs font-medium text-muted-foreground">
          {deck.slides} {deck.slides === 1 ? "slide" : "slides"}
          <span aria-hidden="true"> · </span>
          ~{Math.max(1, Math.round(deck.slides * 0.75))} min read
        </p>
        <button
          type="button"
          onClick={(event) => onOpen(deck, event.currentTarget)}
          className="mt-auto inline-flex h-9 items-center gap-1 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Open deck
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
