# Registries — shadcn/ui Registry Manifest (VIZ-012 §8.10/§8.12)

Full user-supplied registry list. Each entry installs with:

```bash
pnpm dlx shadcn@latest registry add @<name>
```

**Offline policy (plan §8):** if a registry is unavailable, skip with a note below — shadcn core components cover all required UI. Status: `PENDING` until network install is possible.

| Registry | Purpose in viz app | Grade | Status |
|---|---|---|---|
| `@7ovr` | Overlay/UI primitives | [UNKNOWN] | PENDING |
| `@8bitcn` | 8-bit aesthetic blocks | [UNKNOWN] | PENDING |
| `@8starlabs-ui` | Alternative UI kit | [UNKNOWN] | PENDING |
| `@aceternity` | Animated hero/effects components | [EST] | PENDING |
| `@agentcn` | Agent-flavored UI | [UNKNOWN] | PENDING |
| `@agents-ui` | Agent chat surfaces (VIZ-025 explain panel) | [EST] | PENDING |
| `@ai-elements` | AI output components (VIZ-025) | [EST] | PENDING |
| `@animate-ui` | Animated components (motion) | [EST] | PENDING |
| `@arc` | Arc design blocks | [UNKNOWN] | PENDING |
| `@billingsdk` | Billing SDK UI | [UNKNOWN] | PENDING |
| `@chamaac` | Chama UI blocks | [UNKNOWN] | PENDING |
| `@cognicatch` | CogniCatch UI | [UNKNOWN] | PENDING |
| `@commercn` | Commerce UI | [UNKNOWN] | PENDING |
| `@darx` | Dark aesthetic blocks | [UNKNOWN] | PENDING |
| `@dsikeres1` | Community components | [UNKNOWN] | PENDING |
| `@elevenlabs-ui` | Voice/audio UI | [UNKNOWN] | PENDING |
| `@extend` | Extended components | [UNKNOWN] | PENDING |
| `@flightcn` | Flight-booking style blocks | [UNKNOWN] | PENDING |
| `@framecn` | Framed layouts | [UNKNOWN] | PENDING |
| `@gamekitui` | Game UI kit (3D FS HUD candidate) | [EST] | PENDING |
| `@glass-ui` | Glassmorphism components (liquid-glass accents, VIZ-018) | [EST] | PENDING |
| `@grootstudio` | Groot Studio blocks | [UNKNOWN] | PENDING |
| `@ha-components` | HA components | [UNKNOWN] | PENDING |
| `@heroicons-animated` | Animated heroicons | [UNKNOWN] | PENDING |
| `@icons-animated` | Animated icon set | [UNKNOWN] | PENDING |
| `@limeplay` | Media player UI | [UNKNOWN] | PENDING |
| `@loading-ui` | Loading states/skeletons | [EST] | PENDING |
| `@lmscn` | LMS components (learning decks) | [EST] | PENDING |
| `@openpolicy` | Policy display components | [UNKNOWN] | PENDING |

## Curated install set (this app's core UI)

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart
```

These 11 core components are hand-implemented in `components/ui/` (offline-first per plan §8) with the same API surface, so the app is source-complete without network installs.

## Install sequence (online, deferred)

```bash
cd viz
pnpm install
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart
pnpm add three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe next-themes
```
