# C11 — Dev-Engineering Council

- **Council ID:** C11 (`c11-dev-engineering`)
- **Captain:** C11 Dev-Engineering Captain (`C11-dev-engineering-captain.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for build execution and code quality; Consulted on architecture (C06) and security posture (C12)
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Every number in this council's artifacts is a **planning assumption**, not measured data. Figures are tagged `[ASSUMPTION]` (modelled input), `[TARGET]` (internal objective), or `[UNVERIFIED]` (asserted by an external source, not yet corroborated). Coverage, throughput and build figures are **internal objectives `[TARGET]`** until measured on a running system.

Back-links: [council index](../README.md) · [charter](./CHARTER.md) · [quality gates](../../program/delivery/quality-gates.md).

---

## 1. Purpose

C11 is the **implementation council** — the "implementer" of the SAOS operating model (§8.2). Where C06 defines *how the platform is shaped* and C12 defines *what must be safe*, C11 **builds the software**: the ledger, payments, cards, KYC/AML integrations, services, APIs and the customer-facing channels.

In a bank, C11's output is not "features" — it is **money movement that must be provably correct**. That changes the engineering culture: correctness, idempotency and auditability outrank velocity, and every service sits behind an explicit contract.

C11 interfaces tightly with:

- **[C06 Engineering-Infrastructure](../c06-engineering-infrastructure/README.md)** — architecture ↔ implementation, release candidates, environments.
- **[C12 Cybersecurity-Intel](../c12-cybersecurity-intel/README.md)** — secure coding, threat-model fixes, security gates.
- **[C15 Product-Management](../c15-product-management/README.md)** — requirements ↔ build.
- **[C16 Banking-Fintech](../c16-banking-fintech/README.md)** — payment/rail specifications, ISO 20022.
- **[C08 Design-Creative](../c08-design-creative/README.md)** — design ↔ implementation.
- **[C01 Legal-Compliance](../c01-legal-compliance/README.md)** — FICA/POPIA obligations implemented in code.

---

## 2. Mandate & authority

| Dimension | Detail |
|---|---|
| **Mandate** | Build the bank's software against the architecture; meet the 80% coverage, no-secrets and validation standards. |
| **Authority** | Technical implementation approach **within the domain**; sign-off on **G-COV** (coverage) and **G-VAL** (validation). |
| **Escalation** | `AGT → Dev-Engineering Captain → Chief-Technology-Officer → Sparkling Curious`. |
| **Out of scope** | Architecture definition (C06); security posture and gates (C12); requirements (C15). |

---

## 3. Scope of this council

**In scope:** all application code and services; ledger and posting engine; payments and rail adapters; KYC/AML/FIC integration code; API design and documentation; test strategy and automation; release candidates; internal data pipelines for reporting feeds.

**Out of scope (route elsewhere):** infrastructure-as-code and platform (C06), threat model and pen-testing (C12), product requirements and prioritisation (C15), legal interpretation (C01), rail/market access (C16). See [`../../workflows/agent-routing.md`](../../workflows/agent-routing.md) for the routing contract.

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview + mandate. |
| [`team-topology.md`](./team-topology.md) | Stream-aligned teams mapped to bounded contexts (Conway's Law). |
| [`engineering-handbook.md`](./engineering-handbook.md) | Branching, commit conventions, PR readiness, definition of done. |
| [`api-standards.md`](./api-standards.md) | REST/OpenAPI, versioning, idempotency, error taxonomy, ISO 20022 alignment. |
| [`service-catalogue.md`](./service-catalogue.md) | Services to be built, mapped to bounded contexts. |

---

## 5. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C06 architecture | C11 implements the seams defined in [`../../architecture/system-design/bounded-contexts.md`](../../architecture/system-design/bounded-contexts.md); boundary changes are ADR'd with C06. |
| C12 security gates | Secure SDLC hooks and the 5-role release sign-off ([`../../architecture/security/secure-sdlc.md`](../../architecture/security/secure-sdlc.md)) — C11 builds the compensating controls C12 specifies. |
| C16 rail specs | Rail adapters implement the message contracts in [`../../architecture/integrations/payments-rails.md`](../../architecture/integrations/payments-rails.md). |
| C10 reporting feeds | BA-return / AEOI data pipelines (with C10) — source code in C11, truth in C10. |
| Escalation | Council Captain → CTO → SC → Board; Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 6. KPIs

| KPI | Target | Weight |
|---|---|---|
| Test coverage on shipped code | ≥ 80% | `[TARGET]` |
| Build success rate | ≥ 95% | `[TARGET]` |
| Defect escape rate | Declining | `[TARGET]` |
| Release-candidate first-pass gates | ≥ 90% | `[TARGET]` |
| Secrets in code | 0 | `[TARGET]` |

(These mirror the C11 charter §8; they are engineering objectives, not contractual commitments.)

---

## 7. South-Africa-specific notes

- **Payments:** implement **ISO 20022** messaging and **PayShap**/instant-payment flows; isolate rulebook logic so the **PSMB→SARB** transition (milestone 11 Aug 2026 — [`../../research/regulatory/payments-nps.md`](../../research/regulatory/payments-nps.md) §1) is a configuration change.
- **FICA integrations:** CDD, sanctions/TFS screening and STR/CTR pipelines processed on SA-resident data.
- **Data residency:** implement the SA-region hosting constraint (D-002) and POPIA data handling in code ([`../../research/regulatory/privacy-popia.md`](../../research/regulatory/privacy-popia.md)).
- **Reporting:** implement BA-return and AEOI data pipelines (with C10) ([`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §4).
- **Resilience:** code for **load-shedding** and connectivity variability on the customer channel; degraded-mode behaviour is part of the definition of done.

---

## 8. Open items / unknowns

- `[UNKNOWN]` Final non-bank payment framework changes which adapters C11 must build ([`../../research/regulatory/payments-nps.md`](../../research/regulatory/payments-nps.md) §3).
- `[ASSUMPTION]` Team topology assumes the bounded-context clusters in [`../../architecture/system-design/bounded-contexts.md`](../../architecture/system-design/bounded-contexts.md) §8 are stable; a context split re-shapes a team.
- `[UNVERIFIED]` Rail message specs (PayShap, RTC, card scheme) are not contracted; adapter contracts are DESIGN until then.

_Codename `Project Umoya` is a working label only._
