# C04 — Partnership Strategy

- **Owner:** C04 Chief-Strategist (with C16 Banking-Fintech and C07 Sales-Revenue) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Plan:** [`strategic-plan.md`](./strategic-plan.md) · **Rails:** [`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md)
- **Vendor register:** [`../../architecture/integrations/third-party-catalogue.md`](../../architecture/integrations/third-party-catalogue.md)

> **Evidence discipline.** Partner *categories* are grounded in the research pack and the third-party catalogue. Specific **vendors are unverified candidates** (status `TO SELECT` / `VENDOR UNVERIFIED`) — no named partner below is a commitment. Commercial terms are `[ASSUMPTION]` / `[UNVERIFIED]`.

---

## 1. Why partnerships are the strategy (not a tactic)

The research is unambiguous: **distribution beats product**, and no new entrant reaches the SA mass market app-only. Partnership is therefore a **primary pillar**, not a growth add-on:

- Kiosks (Tyme), stores (Shoprite/PEP/PnP) and township POS (Lesaka) reach customers where apps do not `[FACT]` (`../../research/neobank-competitors/competitive-matrix.md` §F).
- Retaining customer funds / rails **requires a licence holder** — a non-bank must **rent** it (Mukuru via Bank Zero) `[FACT]` (§F).
- Consolidation is the mature-market exit path — partnerships are also **M&A options** `[FACT]` (§F).

---

## 2. Partnership portfolio

| # | Category | Purpose | Criticality | Route | Status |
|---|---|---|---|---|---|
| P1 | **Sponsor bank** | Pre-licence funds custody, clearing, settlement, scheme access | Critical | Bilateral + API/file | `TO SELECT` (D-001) |
| P2 | **Card scheme / BIN sponsor** | Debit card issuing, e-commerce, tokenisation | Critical | Scheme membership / BIN sponsor | `UNVERIFIED` |
| P3 | **Clearing house** | EFT/AC, RTC clearing | Critical | Via sponsor or participation | `VENDOR UNVERIFIED` (PayInc) |
| P4 | **Telco** | Distribution (SIM base/agents), wallet interoperability | High | Commercial | `TO SELECT` |
| P5 | **Retail / agent / kiosk** | Physical onboarding, CICO, cash access | High | Commercial | `TO SELECT` |
| P6 | **Merchant acquirer** | Payment acceptance for SME/informal | Medium | Commercial | `TO SELECT` |
| P7 | **Open-finance / TPP** | Data sharing, payment initiation (gated) | Medium | API | `DESIGNED (gated)` |
| P8 | **Product cross-sell** | Insurance/other products (conduct-gated) | Low | Commercial | `TO SELECT` |

Source: third-party catalogue §1, §7.

---

## 3. Sponsor-bank strategy (D-001)

The **sponsor bank is the keystone partnership**. Strategy (per [`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md) §7):

| Aspect | Position `[DESIGN]` |
|---|---|
| **Role** | Provides clearing/settlement and (often) BIN/card access while we are pre-licence |
| **Design guardrail** | The sponsor sits **behind an ACL** (Sponsor Adapter). Migration to direct participation must be a **configuration/contract change, not a domain rewrite** |
| **Risk** | Counterparty, pricing and control risk (R-002) — mitigate with contractual protections, a service level, a **second** sponsor/rail, and a documented exit plan |
| **Exit path** | Post-licence: become a bank/branch or designated clearing participant; open a SARB settlement account; join schemes directly |

**This is the single most important strategic dependency of the launch** — it decouples customer launch from the (non-statutory) PA timeline.

---

## 4. Telco partnerships

**Rationale:** telcos bring **distribution and reach** (agent networks, large subscriber bases, USSD) into the under-served segment.

- **Precedent:** MTN MoMo became the **first non-bank on PayShap** and runs MoMo Pay `[FACT]` (`../../research/neobank-competitors/competitive-matrix.md` §A). Vodacom has super-app ambitions (VodaPay); M-Pesa SA closed in 2016 `[FACT]`.
- **Our plays** `[DESIGN]`: agent-assisted onboarding; wallet interoperability; airtime/data as a rewards channel; joint township/POS distribution.
- **Caution:** telco wallet is also a **competitor** (see [`competitive-positioning.md`](./competitive-positioning.md) §4). Structure partnerships to complement, not cede the customer relationship.

---

## 5. Retail & agent partnerships

**Rationale:** stores and agents are how the included are won `[FACT]`.

- **Precedent:** Shoprite Money Market (4m+ accounts, 2,800+ stores, R5 cash access); PEP cash send; TymeBank kiosks `[FACT]` (`../../research/neobank-competitors/competitive-matrix.md` §A).
- **Our plays** `[DESIGN]`: assisted onboarding kiosks; cash-in/cash-out (CICO) via agent networks; branded presence in high-footfall retail.
- **Constraints:** agent settlement, float management, reconciliation and **agent-side fraud** must be designed for (`../../architecture/integrations/payments-rails.md` §3.5).

---

## 6. Ecosystem plays

| Play | Purpose | Gate |
|---|---|---|
| **Rewards via partners** | Substitute for an eBucks-class ecosystem we won't build | Conduct/C01 review |
| **Merchant acceptance** | Serve SME/informal; acquire via partner | Acquiring = SARB designation `[CONSULT]` |
| **Open finance / data sharing** | Consent-based data, PIS later | Regulator-ready design (no mandate today) `[CONSULT]` |
| **Cross-sell products** | Insurance/investments later | Conduct (FAIS) + resolution |
| **Cash network** | Inclusion in remote areas | Partner-mediated |

**Open-finance posture:** there is **no statutory open-banking mandate** in SA today; an Open Finance framework is **in development** via the IFWG `[CONSULT]` (`../../research/regulatory/payments-nps.md` §6). We design API/consent architecture to be **regulator-ready** because obligations are likely to arrive.

---

## 7. Partner selection criteria

Every partner is assessed on: **reach** (segments), **trust** (brand/conduct), **economics** (revenue-share, CAC), **technical fit** (API/agent capability), **compliance posture** (POPIA/FICA/AML), and **strategic alignment** (does it strengthen or hollow out our customer relationship?). Vendor due diligence and contract review follow [`../c01-legal-compliance/contract-review-process.md`](../c01-legal-compliance/contract-review-process.md).

---

## 8. Risks

| Risk | Link | Mitigation |
|---|---|---|
| Sponsor dependency | R-002 | Second sponsor/rail; exit plan; ACL isolation |
| Partner concentration | R-018 | Multi-partner; exit clauses |
| Channel conflict | — | Clear segment/role division; contractual exclusivity care |
| Partner compliance failure | R-007 | Due diligence; audit rights; monitoring |
| Distribution under-delivery | R-026 | Diversify channels; measure throughput |

---

## 9. Open items / unknowns

- `[UNVERIFIED]` All named partner categories are unconfirmed candidates.
- `[UNKNOWN]` Sponsor-bank commercial/technical interface model.
- `[CONSULT]` Whether the final non-bank framework changes who must sponsor whom (`../../research/regulatory/payments-nps.md` §3).
- `[CONSULT]` Open Finance framework timing (`../../research/regulatory/payments-nps.md` §6).

_Codename `Project Umoya` is a working label only._
