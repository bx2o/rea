# Registries — shadcn/ui Registry Manifest (VIZ-012 §8.10/§8.12)

Manifest of the 29 user-supplied shadcn/ui third-party registries, plus one commonly-cited
extra (`@ui-layouts`). Every registry below is listed in the **official shadcn registry
directory** (`https://ui.shadcn.com/r/registries.json`).

## How the shadcn CLI actually works

There is **no `registry` subcommand** in the shadcn CLI. The real command set is
`init, add, apply, preset, view, search/list, build, docs, info, migrate, eject`
(<https://ui.shadcn.com/docs/cli>). A registry is therefore *declared*, not "added", and the
install is done with `add`:

**Step 1 — declare the registry (one time per registry).**
Add it to the `registries` map of `components.json`:

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

`{name}` is replaced with the component name when you install (`@aceternity/text-reveal-card`
→ `https://ui.aceternity.com/registry/text-reveal-card.json`).

**Step 2 — install a component from that registry.**

```bash
pnpm dlx shadcn@latest add @aceternity/text-reveal-card
```

The reference form is `pnpm dlx shadcn@latest add @<namespace>/<component>` — the namespace
parser requires `@ns/resource`; a bare `@name` is not a valid reference.

> `viz/components.json` already contains a `registries` map with the 24 verified registries from
> the list below plus `@ui-layouts` (25 entries), so step 1 is already done for them. The 5
> unverified registries are deliberately **not** in the map — add them yourself once their URL is
> confirmed (see "Verified vs unverified" below). The CLI also resolves namespaces
> automatically against the official registry directory when you run `add @ns/resource`.

Useful companions:

```bash
pnpm dlx shadcn@latest view @glass-ui/card      # inspect the payload before installing
pnpm dlx shadcn@latest search @glass-ui         # list what a registry offers
```

## Verified vs unverified

| Status | Meaning | Count |
|---|---|---|
| `VERIFIED` | URL taken from the official shadcn registry directory **and** the registry's own `registry.json` index was fetched successfully (HTTP 200) **and** at least one example component JSON was fetched successfully (HTTP 200). | 24 of the 29 (+ `@ui-layouts`) |
| `UNVERIFIED` | URL is the one published in the official shadcn registry directory, but the registry did not serve a live index/item at verification time (404 / 429 / 530). The URL is published, not confirmed working. | 5 of the 29 |

`UNVERIFIED` entries are **not** present in `components.json`. Do not treat a directory-listed
URL as a working registry. Verification performed 2026-11-18.

## Registry manifest

| Namespace | Purpose in viz app | Registry URL | Status | Example install command |
|---|---|---|---|---|
| `@7ovr` | Hero/section and app-shell blocks | `https://7ovr.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @7ovr/hero-1` |
| `@8bitcn` | Retro 8-bit component set | `https://www.8bitcn.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @8bitcn/button` |
| `@8starlabs-ui` | App components incl. empty states | `https://ui.8starlabs.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @8starlabs-ui/empty-state` |
| `@aceternity` | Animated hero/text effects (VIZ-017 hero polish) | `https://ui.aceternity.com/registry/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @aceternity/text-reveal-card` |
| `@agentcn` | Agent-flavoured UI | `https://agentcn.vercel.app/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @agentcn/eve/chat-with-pdf` |
| `@agents-ui` | LiveKit agent/chat surfaces (VIZ-025) | `https://livekit.com/ui/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @agents-ui/agent-control-bar` |
| `@ai-elements` | Vercel AI SDK Elements — LLM chat primitives (VIZ-025) | `https://ai-sdk.dev/elements/api/registry/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @ai-elements/conversation` |
| `@animate-ui` | Animated primitives + backgrounds (plan §4 target) | `https://animate-ui.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @animate-ui/buttons-flip` |
| `@arc` | Arc design blocks | `https://witharc.co/r/{name}.json` | UNVERIFIED (index 404) | `pnpm dlx shadcn@latest add @arc/<component>` |
| `@billingsdk` | Stripe billing blocks (n/a to viz UI) | `https://billingsdk.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @billingsdk/pricing-table-one` |
| `@chamaac` | Chama visual blocks | `https://chamaac.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @chamaac/liquid-chrome` |
| `@cognicatch` | Adaptive banners/toasts | `https://cognicatch.dev/registry/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @cognicatch/adaptive-toast` |
| `@commercn` | Commerce/storefront blocks (n/a to viz UI) | `https://commercn.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @commercn/checkout-01` |
| `@darx` | Dark aesthetic blocks | `https://darshitdev.in/r/{name}.json` | UNVERIFIED (origin error 530) | `pnpm dlx shadcn@latest add @darx/<component>` |
| `@dsikeres1` | Date-range picker | `https://dsikeres1.github.io/react-date-range-picker/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @dsikeres1/date-range-picker` |
| `@elevenlabs-ui` | Voice/agent UI | `https://ui.elevenlabs.io/r/{name}.json` | UNVERIFIED (HTTP 429) | `pnpm dlx shadcn@latest add @elevenlabs-ui/<component>` |
| `@extend` | shadcn-compatible extended components | `https://ui.extend.ai/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @extend/accordion` |
| `@flightcn` | Flight-booking style blocks | `https://flightcn.yencheng.dev/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @flightcn/flight` |
| `@framecn` | Caption/animation blocks | `https://framecn.vercel.app/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @framecn/caption-gradient-fill` |
| `@gamekitui` | Gamified UI (3D FS HUD candidate) | `https://gamekitui.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @gamekitui/snake` |
| `@glass-ui` | Glassmorphism primitives (liquid-glass accents, VIZ-018) | `https://glass-ui.crenspire.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @glass-ui/card` |
| `@grootstudio` | Polished blocks | `https://grootstudio.vercel.app/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @grootstudio/glow-card` |
| `@ha-components` | HA components | `https://hacomponents.keshuac.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @ha-components/type-generator` |
| `@heroicons-animated` | Animated Heroicons set (icon motion, VIZ-019) | `https://www.heroicons-animated.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @heroicons-animated/academic-cap` |
| `@icons-animated` | Animated icon set | `https://icons.lndev.me/r/{name}.json` | UNVERIFIED (index 404) | `pnpm dlx shadcn@latest add @icons-animated/<component>` |
| `@limeplay` | Vidstack media-player UI (deck video option) | `https://limeplay.winoffrg.dev/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @limeplay/media-provider` |
| `@loading-ui` | Loaders/skeletons (3D + churn loading states) | `https://loading-ui.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @loading-ui/ring` |
| `@lmscn` | Learning blocks — quiz/flashcards (VIZ-030 decks) | `https://lmscn.vercel.app/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @lmscn/quiz` |
| `@openpolicy` | Policy/self-serve flow blocks (n/a to viz UI) | `https://www.openpolicy.sh/r/{name}.json` | UNVERIFIED (index 404) | `pnpm dlx shadcn@latest add @openpolicy/<component>` |
| `@ui-layouts` | *(extra, not in the 29)* animated buttons/layouts | `https://ui-layouts.com/r/{name}.json` | VERIFIED | `pnpm dlx shadcn@latest add @ui-layouts/btn-bg-shine` |

`<component>` in the `UNVERIFIED` rows is a placeholder: no item name could be confirmed for
those registries, so no example item is invented.

## Curated UI kit — what actually exists

The curated set names **12** shadcn components: `button, card, table, tabs, badge, separator,
scroll-area, sheet, command, tooltip, dialog, chart`.

Of those 12, **9 are hand-implemented** in `components/ui/` (offline-first per plan §8, same API
surface as shadcn): `button, card, table, tabs, badge, separator, scroll-area, command, tooltip`.

`components/ui/` currently holds **10** files — those 9 plus `skeleton.tsx` (a 10th hand-written
component that is not part of the 12-name curated set).

**3 curated components are still missing** and must be added with `shadcn add`:

| Missing component | Install command | Extra dependency |
|---|---|---|
| `dialog` | `pnpm dlx shadcn@latest add dialog` | `@radix-ui/react-dialog` |
| `sheet` | `pnpm dlx shadcn@latest add sheet` | `@radix-ui/react-dialog` |
| `chart` | `pnpm dlx shadcn@latest add chart` | `recharts` (already a dependency) |

`shadcn add` writes to `components/ui/` and installs the missing npm dependencies.

## Install sequence (online, deferred)

`components.json` is already committed, so `shadcn init` is **not** required — running `init`
would overwrite the existing config (including the `registries` map).

```bash
cd viz
pnpm install
pnpm dlx shadcn@latest add dialog sheet chart
pnpm add three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe next-themes
```

## Offline policy (plan §8)

If a registry is unavailable, skip it — the shadcn core components plus the hand-implemented
kit cover all required UI. The curated `components/ui/` set is committed to the repo, so the app
builds and runs without any network install.

## Known stale reference

Plan §4 step 5 in `.kilo/plans/1794948779713-repo-viz-learning-environment.md` still prescribes a
non-existent shadcn subcommand: it inserts `registry` between `shadcn@latest` and `add` and
passes a list of namespaces to it. That command form is invalid — the shadcn CLI has no
`registry` subcommand, and a namespace list cannot be "added" to the CLI. The plan file is
read-only for the remediation pass; the correct replacement is: declare the registries in
`components.json` (already done) and install with
`pnpm dlx shadcn@latest add @<namespace>/<component>`.
