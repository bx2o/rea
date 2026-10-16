# Risk Appetite Statement — NeoBank ZA (`Project Umoya`)

**Approver:** Board (via Sparkling Curious) · **Owner:** C10 Finance-CFO with C12 Cybersecurity-Intel
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED (for Board ratification)

> Board-level statement of how much risk the NeoBank ZA program is willing to take, by category, and the limits that must never be breached. Read with [`README.md`](./README.md) (framework) and [`risk-register.md`](./risk-register.md) (live risks).

Back-links: [governance](../governance/README.md) · [roadmaps](../roadmaps/README.md).

---

## 1. Principles

1. **We are risk-aware, not risk-averse.** We take risk deliberately where it buys learning, reach or return — and only within the limits below.
2. **Compliance and security are non-negotiable.** No appetite for knowingly breaching regulation, POPIA, FICA or security baselines. These are floors, not trade-offs.
3. **Customer trust is the balance sheet.** We accept less upside before we accept preventable customer harm.
4. **Everything above appetite is a Level-3 decision.** Escalate to SC + Board; never accept silently (see [authority matrix](../governance/authority-matrix.md)).
5. **Evidence over assertion.** Appetite compliance is demonstrated with artifacts, not statements.

---

## 2. Appetite by category

| Category | Appetite | Rationale / bounds |
|---|---|---|
| **Regulatory & licensing** | **Low** | Zero tolerance for wilful non-compliance. We may *accept* timeline risk (licence delay) provided the sponsor/lawful path preserves regulatory standing. |
| **Legal & conduct** | **Low** | No appetite for mis-selling, unfair treatment, or FAIS/COFI/Code breaches. |
| **Privacy (POPIA)** | **Very low** | No appetite for unlawful processing or unremediated breach. Cross-border transfers only with documented safeguards. |
| **Security & cyber** | **Low** | No appetite for known-unmitigated Critical vulnerabilities; security review is a release gate. |
| **Financial (capital & funding)** | **Moderate** | We accept the risk of an unproven raise within a staged-tranche structure; we do not accept insolvency or inability to meet minimum capital. |
| **Credit** | **Low–Moderate** | Conservative, phased; lending deferred from MVP. No sub-prime concentration. |
| **Liquidity & operational resilience** | **Low** | No appetite for sustained unavailability or SPOF without failover. |
| **Fraud** | **Low** | We accept controlled fraud-loss during pilot within a defined rate; we do not accept unmonitored money movement. |
| **Strategic / market** | **Moderate–High** | We must take real market risk to matter in a competitive field; we do not take licence-blocking strategic risk without a fallback. |
| **Operational & delivery** | **Moderate** | We accept phased scope and pilot learning; we do not accept shipping without quality gates. |
| **Supplier / third-party** | **Moderate** | Accept managed concentration with exit plans; no critical service without a contingency. |
| **People** | **Moderate** | Accept a start-up talent profile with mentoring; no critical role left undocumentable. |
| **Macro** | **Accept (monitored)** | Beyond our control; managed via conservative underwriting and cost flexibility. |

Legend: Very low → Low → Moderate → Moderate–High.

---

## 3. Quantitative limits (must never be breached)

| # | Limit | Threshold | Owner |
|---|---|---|---|
| L1 | Minimum regulatory capital | ≥ statutory minimum + PA buffer | C10 |
| L2 | Liquidity coverage (LCR / NSFR) | ≥ regulatory minimum at all times | C10 |
| L3 | Test coverage on shipped code | ≥ 80% | C11 |
| L4 | Hardcoded secrets / PII in artifacts | **0** | C12 |
| L5 | Unmitigated Critical security findings at release | **0** | C12 |
| L6 | POPIA/FICA/PCI sign-off before money/data surfaces ship | **100%** | C01 |
| L7 | Critical incident response SLA | 1 hour | C02 |
| L8 | Critical risks without a named owner + treatment | **0** | C12 |

---

## 4. Tolerances by band (how the register is judged)

| Band | Tolerance |
|---|---|
| Low (1–4) | Accepted within BAU; monitor. |
| Medium (5–9) | Accept with treatment plan; report monthly. |
| High (10–14) | **Not** accepted by default — active mitigation required; milestone-gating; SC oversight (4h). |
| Critical (15–25) | **Never** accepted without a Level-3 Board decision and a documented treatment + contingency; blocks gates until treated. |

---

## 5. Zero-tolerance list

The program has **no appetite whatsoever** for:
1. Wilfully breaching banking, AML, payments or privacy law.
2. Processing customer data without a lawful basis or outside SA without safeguards.
3. Shipping money/data surfaces without compliance sign-off.
4. Any unremediated **Critical** security finding in production.
5. Misrepresenting products to customers (conduct).
6. Concealing a material risk, incident or loss from the Board.

---

## 6. Governance & review

- **Owner accountability:** each category has an owning council; the CFO (C10) and CISO (C12) jointly report appetite adherence.
- **Review cadence:** quarterly, plus immediately after any breach of a quantitative limit.
- **Escalation:** a limit breach is a Critical incident ([escalation-protocols.md](../governance/escalation-protocols.md)); a risk above appetite is a Level-3 decision ([authority matrix](../governance/authority-matrix.md)).
- **Evidence:** adherence is evidenced via the [quality gates](../delivery/quality-gates.md) and the [risk register](./risk-register.md).

**Ratification path:** Board approval via SC (Level-3, up to 15–20 business days).
