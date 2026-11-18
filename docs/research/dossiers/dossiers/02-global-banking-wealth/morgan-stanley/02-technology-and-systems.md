# 02 — Technology & Systems

**Entity:** Morgan Stanley · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA status:** `not-executed` — no artefact; stack claims from public sources or marked INFERRED/UNKNOWN.

---

## 1. Wealth platform architecture (hybrid advisor + self-directed)

```
        ┌─────────────────────── Morgan Stanley Wealth ───────────────────────┐
        │                                                                      │
 Advisor desk ◄──► Advisor workstation  ◄──► Portfolio management / risk      │
        │              (planning, IPS)         engines (Monte Carlo)           │
        │                                                                      │
 Client ──► Next-Gen client portal / app ──► Accounts, statements, planning   │
        │                                                                      │
 Self-directed (E*TRADE) ──► Trading + banking app ──► brokerage + sweep      │
        │                                                                      │
        └───────────────┬──────────────────────────────┬─────────────────────┘
                        ▼                              ▼
              Custody / clearing                 Bank (deposits, SBL, sweep)
```

| Layer | Detail | Class |
|---|---|---|
| Advisor workstation | Planning + portfolio management + risk tools for ~16,000 FAs | SEEN/INFERRED |
| **Portfolio risk engine** | **Monte Carlo** simulation for planning/risk (goal-probability) | SEEN (widely-attested feature) |
| **E*TRADE platform** | Self-directed digital brokerage (web + mobile) | SEEN |
| Cash-sweep | Automated sweep of idle cash into deposit/sweep vehicles | SEEN |
| Custody/clearing | Morgan Stanley clearing + custody | SEEN |
| Client-facing app | Morgan Stanley / E*TRADE mobile apps | SEEN (app stores) |

---

## 2. E*TRADE (self-directed digital arm)

| Property | Detail | Evidence |
|---|---|---|
| Acquired | Announced 20-Feb-2020; closed **2-Oct-2020** (~$13bn all-stock) | SEEN |
| Brand | Retained for self-directed | SEEN |
| Accounts | Migrated to Morgan Stanley infrastructure over time | SEEN (reported) |
| Function | Digital B2C brokerage + banking (checking/sweep) | SEEN |

> **Relevance:** E*TRADE is the canonical "**digital channel bolted onto a wealth incumbent**" case — the model Stremiium's hybrid human+digital advice should study.

---

## 3. Cash-sweep & banking stack

| Component | Detail | Class |
|---|---|---|
| Cash sweep | Idle brokerage cash auto-swept to deposit/sweep programme | SEEN |
| Bank deposits | Bank deposit funding base | SEEN |
| Securities-based lending (SBL) | Lending against securities portfolios | SEEN |
| NII generation | Sweep deposits + SBL → net interest income | SEEN (Q4'25 release) |

---

## 4. Portfolio risk / advisory tooling

| Tool | Detail | Class |
|---|---|---|
| **Monte Carlo simulation** | Probability-of-goal / risk modelling in planning | SEEN |
| Asset allocation models | Advisory model portfolios | SEEN |
| Fee-based advisory tech | Billing + reporting on fee-based assets | SEEN |

---

## 5. Delivery & auth (client side)

| Dimension | Observation | Class |
|---|---|---|
| Mobile apps | Morgan Stanley + E*TRADE apps (iOS/Android) | SEEN |
| MFA | Multi-factor authentication standard | SEEN/INFERRED |
| Digit/portal security | Standard brokerage security controls | SEEN |
| App framework | UNKNOWN (no artefact) | UNKNOWN |

---

## 6. DLT / blockchain footprint

| Area | Observation | Class |
|---|---|---|
| Public blockchain products | **Limited footprint in public sources reviewed** (unlike JPMorgan's Kinexys) | INFERRED |
| Tokenised funds / digital assets | Some industry activity cited; **no specific MS contract asserted** | UNKNOWN |
| Digital asset trading access | Reported via partner/offering in some channels | UNKNOWN (do not assert) |

> **Honesty:** this dossier does **not** claim a Morgan Stanley on-chain contract or product it cannot verify. Morgan Stanley's differentiator is **wealth economics**, not blockchain infrastructure.

---

## 7. Gaps / unknowns

| Unknown | Resolving step |
|---|---|
| Monte Carlo engine internals/assumptions | Not public → confidential IP |
| E*TRADE app internals (auth, framework) | **REA extraction** of APK (not supplied) |
| Cash-sweep rate mechanics | Disclosure / programme docs |
| Any MS tokenised-fund contract | Verified explorer + issuer docs |
