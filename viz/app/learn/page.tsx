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

import { useCallback, useEffect, useRef, useState } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { RevealDeck } from "@/components/decks/reveal-deck";
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

export default function LearnPage() {
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

  return (
    <main id="main" className="container py-8">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          {LEXICON.learn}
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Guided presentation decks generated from the canonical repo docs — every slide
          cites its physical source path.
        </p>
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
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {decks.map((deck) => (
            <DeckCard key={deck.id} deck={deck} onOpen={openDeckAt} />
          ))}
        </ul>
      )}

      {openDeck !== null ? (
        <RevealDeck
          file={openDeck.file}
          title={openDeck.title}
          deckId={openDeck.id}
          onClose={closeDeck}
        />
      ) : null}
    </main>
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
        <p className={cn("text-sm text-muted-foreground", !hasSource && "italic")}>
          {deck.description}
        </p>
        <p className="text-xs font-medium text-muted-foreground">
          {deck.slides} {deck.slides === 1 ? "slide" : "slides"}
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
