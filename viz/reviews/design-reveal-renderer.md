# D5 — Reveal renderer upgrade (design subagent RESULT)

**Files owned:** `components/decks/reveal-deck.tsx`, `app/globals.css` (append-only block).
`tailwind.config.ts` was read-only reference. Props API `(file, title, deckId?, onClose?)`,
`use client`, CSS imports, `deck.destroy()` cleanup and focus-return via `onClose` are preserved.

## Renderer changes

- **Config:** `embedded`, `hash`, `controls`, `controlsTutorial`, `progress`,
  `slideNumber: "c/t"`, `overview`, `keyboard`, `center: false`, `width/height 1280×720`,
  `margin 0.04`, `fragments: true`, `touch`, `transition/backgroundTransition` =
  `fade` or `none` under reduced motion (OS query **and** the `viz-reduced-motion` switch),
  `markdown: { separator: "^---$", notesSeparator: "^Note:" }`.
- **Plugins:** `[Markdown]` plus `RevealNotes` when `reveal.js/plugin/notes/notes.esm.js`
  resolves (it is installed in 5.2.1); loader degrades silently if missing.
- **Rich content:** markdown is injected with `section.textContent = markdown`, so raw
  inline SVG, `style="fill: hsl(var(--token))"` and `<!-- .element: class="fragment" -->`
  comments reach reveal's markdown plugin untouched — fragments are applied natively.
- **A11Y:** reveal container gets `role="region" aria-label="Learning deck: <title>"`;
  visible labelled `aria-live="polite"` status reads "Slide N of M: <heading>" on every
  `slidechanged`; arrow/F/O/S keys stay native; Tab focus trap, Escape close (help panel →
  overview → fullscreen → close precedence) and page-owned focus return preserved.
- **Controls overlay:** floating top-right glass toolbar with Overview (`toggleOverview`),
  Help (toggles shortcut panel listing ← →, F, O, S, Esc), Fullscreen (`requestFullscreen`
  on the overlay, hidden when unavailable, `aria-pressed` synced via `fullscreenchange`).
  Header also carries an explicit "Keyboard shortcuts" hint button. All controls have
  `aria-label`, `title`, focus rings and are keyboard accessible.
- **Cleanup:** `destroy()`, body-overflow restore, hash restore, fullscreen exit.

## CSS (appended at end of globals.css only)

Token-only `.deck-player .reveal …` block (scoped prefix wins over runtime-injected
`reveal.css`): glass slides with opaque fallback, Space Grotesk headings + gold accent
underline, table header/zone row accents, SVG max-width + drop shadow, fragment fades with
reduced-motion override, themed controls/progress/slide-number, hidden speaker notes,
toolbar/help glass, and a `@media print` one-slide-per-page layout. **No literal hex** in
the appended block (verified: `awk 'NR>250 && /#[0-9a-fA-F]{3,8}/'` → empty).

## Verification

| Check | Result |
|---|---|
| `npx tsc --noEmit` | 0 errors |
| `node scripts/verify-viz.mjs` | **19 PASS / 0 FAIL / 0 WARN** (exit 0) |
| `grep -nE '#[0-9a-fA-F]{3,8}\b' … \| grep -v 'var(--'` | only the pre-existing token-definition comments (lines 1–249); none in the new block |
| Dev chunk compile (`/_next/static/chunks/app/learn/page.js`) | contains `deck-player`, `notes.esm`, `Learning deck:`, `toggleOverview` — Turbopack compiled the dynamic imports |
| Browser runtime test | not runnable: no Playwright/Puppeteer/jsdom in this sandbox |

## Open dependency (not in my ownership)

`curl -s http://localhost:3000/learn | grep -oE 'aria-label="Learning deck|reveal' | head`
still returns nothing. `/learn` is a client route whose `openDeck` state is `null` on the
server, so `RevealDeck` is never in the SSR markup; the new `aria-label` only exists after
a card click. D6 owns `app/learn/page.tsx` and was asked to add a server-rendered marker
containing `aria-label="Learning deck` (e.g. an sr-only hint). No other gate is affected.
