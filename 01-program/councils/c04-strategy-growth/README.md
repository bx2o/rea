# C04 — Strategy-Growth Council

- **Council ID:** C04 (`c04-strategy-growth`)
- **Captain:** Chief-Strategist (`C04-chief-strategist.agent.md`) — Tier 2
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for strategy, competitive intelligence and roadmap stewardship; Consulted on all Level-3 decisions
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Every number in this council's artifacts is either a **sourced fact** carried from `../../research/` (with an `[S#]`/`[FACT]`/`[EST]` tag), or is explicitly labelled `[ASSUMPTION]` (modelled input), `[TARGET]` (internal objective) or `[UNVERIFIED]`. We do **not** invent measured market statistics. Market sizing is a **framework with labelled assumptions**, never a fabricated TAM.

---

## 1. Purpose

C04 is the **direction-setting council**: it decides **where the NeoBank competes and how it wins** in South Africa. It owns the strategy narrative, the competitive-intelligence base, the business modelling inputs, and the program's roadmaps.

This council sits at the intersection of:

- **C10 Finance-CFO** — business case, capital strategy, unit economics.
- **C16 Banking-Fintech** — licence/sponsor strategy (D-001/D-004), banking fit.
- **C15 Product-Management** — roadmap ↔ product scope.
- **C09 Marketing-Growth** — positioning and go-to-market.
- **C07 Sales-Revenue** — growth and partnership strategy.
- **C01 Legal-Compliance** — regulatory constraints on strategy.

The full mandate and roster are fixed in [`CHARTER.md`](./CHARTER.md).

---

## 2. Scope of this council

**In scope:** market/segment strategy; competitive intelligence; business modelling; roadmap ownership ([`../../program/roadmaps/`](../../program/roadmaps/README.md)); framing of Level-3 strategic decisions (D-001…D-005).

**Out of scope (route elsewhere):** product authority (C15), budget authority (C10), licence execution (C01/C16), pricing execution (C07). See [`../../workflows/agent-routing.md`](../../workflows/agent-routing.md).

---

## 3. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview. |
| [`strategic-plan.md`](./strategic-plan.md) | Mission, SA market-entry thesis, segment strategy, differentiation, phased expansion. |
| [`competitive-positioning.md`](./competitive-positioning.md) | Positioning vs the Big Five and vs the digital challengers, citing `../../research/`. |
| [`market-sizing.md`](./market-sizing.md) | TAM/SAM/SOM framework with clearly-labelled `[ASSUMPTION]` inputs (no fabricated figures). |
| [`partnership-strategy.md`](./partnership-strategy.md) | Bank sponsorship, telco/retail partnerships, ecosystem plays. |

---

## 4. Strategic context (grounded)

| Input | Reality (sourced) | Implication |
|---|---|---|
| Profitability is capital-intensive | Tyme raised **$250m (Dec 2024)**; Discovery funded by a listed parent; Bank Zero under-capitalisation stalled break-even `[EST]` (`../../research/neobank-competitors/competitive-matrix.md` §F) | Sponsor-first (D-001) preserves capital and time |
| Distribution beats product | Kiosks (Tyme), stores (Shoprite/PEP), township POS (Lesaka) reach the mass market `[FACT]` | Distribution partnership is a strategic pillar |
| Zero-fee is commoditised | Bank Zero zero-fee; Shoprite Money Market R5 `[FACT]` | Differentiate on credit/ecosystem/rails, not price |
| PayShap reshapes economics | Real-time low-value rail; non-banks entering (`../../research/regulatory/payments-nps.md` §4) | Build rail-agnostic payments layer |
| Consolidation is the exit path | Nedbank→iKhokha; Lesaka→Bank Zero `[FACT]` | Plan for partnership/M&A optionality |

---

## 5. Decision rights (RACI-lite)

| Decision | Accountable | Consulted | Informed |
|---|---|---|---|
| Strategy narrative & segment priority | Chief-Strategist | C10, C16, C15, C09, SC | All councils |
| Competitive positioning | Chief-Strategist | C09, C07 | C15 |
| Roadmap re-baseline | Chief-Strategist | All councils | SC |
| Level-3 strategic decisions (D-00x) | SC + Board | C04 frames the options | All councils |

---

## 6. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C10 business case | C04 supplies assumptions; C10 owns the model (`../c10-finance-cfo/financial-model.md`). |
| C16 licence strategy | Joint framing of D-001/D-004 (`../c16-banking-fintech/README.md`). |
| C15 product | Roadmap ↔ scope consistency (`../c15-product-management/product-roadmap.md`). |
| C09 go-to-market | Positioning flows to GTM (`../c09-marketing-growth/go-to-market-strategy.md`). |
| Escalation | Council Captain → SC → Mychael → Board; Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 7. KPIs

| KPI | Target |
|---|---|
| Strategic decisions framed with options + rationale | 100% |
| Roadmap currency (artifacts current per milestone) | ≥ 95% |
| Competitive intelligence freshness | Reviewed per milestone |
| Business-case assumptions sourced/labelled | 100% |

---

## 8. Open items / unknowns

- `[UNKNOWN]` Effective **PA de-novo timeline** (6–9 months is guidance) — affects sponsor-first calculus (`../../research/regulatory/banking-licensing.md` §3).
- `[CONSULT]` Non-bank payment framework finalisation may open a non-bank path earlier (`../../research/regulatory/payments-nps.md` §3).
- `[ASSUMPTION]` Macro sensitivity (R-030) is modelled, not measured.

_Codename `Project Umoya` is a working label only._
