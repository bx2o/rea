# C04 — Strategic Plan

- **Owner:** C04 Chief-Strategist · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Positioning:** [`competitive-positioning.md`](./competitive-positioning.md) · **Sizing:** [`market-sizing.md`](./market-sizing.md)
- **Grounding:** [`../../research/sa-banking-landscape/README.md`](../../research/sa-banking-landscape/README.md), [`../../research/neobank-competitors/README.md`](../../research/neobank-competitors/README.md)

> **Evidence discipline.** Market facts are carried from the research pack with tags. Strategic statements are `[DESIGN]` (our choice) or `[ASSUMPTION]` (modelled). No measured market statistic is invented here.

---

## 1. Mission

> **Make everyday banking work for the South Africans the mainstream banks under-serve** — delivering a low-cost, instant, fair transactional account and payments experience, built on a bank-grade core, accessible on the devices people already own.

The mission is deliberately **narrow at launch** (transactional account + instant payments + card + basic KYC) and **expansive over time** (savings, credit, ecosystem). Scope discipline is what converts a small capital base into a durable position.

---

## 2. The SA market-entry thesis

South Africa's retail banking market is **large, concentrated, and being actively disrupted** — which is exactly why a new entrant needs a *sharp* thesis, not a "better app".

| Thesis pillar | Statement | Evidence base |
|---|---|---|
| **1. Under-served segments are real** | Sub-prime, township, informal-economy and thin-file customers are served expensively or not at all | `../../research/sa-banking-landscape/README.md` |
| **2. Distribution decides winners** | Kiosks/stores/township POS reach the mass market; app-only struggles | `../../research/neobank-competitors/competitive-matrix.md` §F |
| **3. Zero-fee is table stakes** | Price alone no longer differentiates | competitive-matrix §E |
| **4. Instant rails change economics** | PayShap makes real-time low-value banking cheap and lets non-banks in | `../../research/regulatory/payments-nps.md` §4 |
| **5. Licence = optionality** | Only a bank licence allows deposits + lending margin at scale | competitive-matrix §F |
| **6. Time-to-learning beats time-to-scale** | Sponsor-first (D-001) lets us launch and learn before the full licence | `../../program/governance/decision-log.md` D-001 |

### 2.1 Why now

- **FATF grey-list exit (24 Oct 2025)** reduces correspondent-banking friction — a better environment for a new entrant `[FACT]` (`../../research/regulatory/aml-fica.md` §6).
- **Basel III/IV implemented 1 July 2025** — build against the current framework, not legacy `[FACT]` (`../../research/regulatory/banking-licensing.md` §5).
- **Payments modernisation (PEM)** and the **PSMB→SARB transition (major milestone 11 Aug 2026)** are reshaping rails `[CONSULT]` (`../../research/regulatory/payments-nps.md` §1).

### 2.2 Why us (the non-obvious bet)

The bet is **not** "we will out-app the incumbents". It is: **a modern, compliant, low-cost core plus distribution partnerships plus a service ethos for the under-served** — delivered on a capital-efficient sponsor-first path.

---

## 3. Segment strategy

We prioritise segments by **reach cost × need × regulatory fit**, not by headline TAM.

| Priority | Segment | Need | Why us | Entry route |
|---|---|---|---|---|
| **P1** | Under-banked / thin-file consumers | Cheap, instant, fair transactional banking; no punitive fees | Low cost-to-serve; simple KYC; instant rails | App + agent/kiosk + partner distribution |
| **P2** | Digital-native mass market | Frictionless UX, instant P2P, transparent pricing | Modern stack; PayShap-native | App-led acquisition |
| **P3** | Informal / micro-entrepreneurs | Receive/send money, basic account, later credit | Township-relevant partnerships | Retailer/POS partnerships |
| **P4** | SME (later) | Merchant payments, cash-flow tools | Acquiring partnerships | Phase 3 |

**Non-goals at launch:** affluent wealth management, full lending book, crypto, investment products (deferred per D-005).

> **ASSUMPTION:** Segment priorities are a planning hypothesis to be tested in the pilot (M9–M10); they will be re-based on real activation/retention data.

---

## 4. Differentiation

Differentiation is a **portfolio**, stacked so no single axis is the whole story:

1. **Cost-to-serve discipline** — serverless-scale cloud, straight-through processing, agent-assisted onboarding where needed.
2. **Instant, transparent money movement** — PayShap/RTC first-class; no hidden fees; clear limits.
3. **Fair, plain-language conduct** — Code of Banking Practice alignment; NFO membership; complaints as a product surface.
4. **Distribution partnership** — meet customers where they already are (retail, agent, telco).
5. **Compliance as a moat** — a genuinely strong AML/POPIA/security posture is a *licence to operate*, not a cost centre.

See [`competitive-positioning.md`](./competitive-positioning.md) for the axis-by-axis comparison.

---

## 5. Phased expansion

Sequenced to the program roadmap (`../../program/roadmaps/implementation-plan.md`, `launch-roadmap.md`):

| Phase | Focus | Strategic objective | Gate |
|---|---|---|---|
| **0 — Foundations** | Entity, decisions, sponsor strategy | Be lawful and funded to start | G-1 |
| **1 — Permission** | Licence path + sponsor/rails | Secure the permission stack | G-3/G-4 |
| **2 — Build** | Core, payments, card, KYC, MVP | Prove the platform | G-5/G-6/G-7 |
| **3 — Pilot** | Controlled launch | Prove demand + unit economics | G-7/M10 |
| **4 — Launch** | Public launch & GTM | Scale acquisition | M11 |
| **5 — Maturity** | Savings, credit, ecosystem; scale | Diversify revenue, reach profitability | M12 |

**Expansion principle:** each phase must **earn** the next — no phase is entered without its gating criterion met, and scope is frozen per D-005 to avoid the classic over-scoped-MVP failure (R-011).

---

## 6. Strategic risks (from the register)

| Risk | Link | Strategic response |
|---|---|---|
| R-001 Licensing delay | `../../program/risk/risk-register.md` | Sponsor-first (D-001) so launch isn't licence-blocked |
| R-002 Sponsor dependency | risk-register | Contractual protections; second sponsor/rail; exit plan |
| R-014 Competition | risk-register | Under-served focus; low cost-to-serve; partnerships |
| R-026 Adoption below forecast | risk-register | Pilot validation; distribution partnerships; retention focus |
| R-030 Macro downturn | risk-register | Conservative modelling; diversified funding |

---

## 7. Open items / unknowns

- `[ASSUMPTION]` Segment demand is a hypothesis; validated only at pilot.
- `[UNKNOWN]` Final non-bank payment framework may alter the entry sequence (`../../research/regulatory/payments-nps.md` §3).
- `[CONFIRM]` Sponsor-bank commercial terms (R-002) — pending negotiation.

_Codename `Project Umoya` is a working label only._
