# Tier 3 — Client & Product Councils (C14–C16)

**Derived from:** `.stremiium/agents/council-agents/C14…C16*.agent.md`, `.stremiium/config/council-department-mapping.json`, `.stremiium/config/councils/COUNCIL_REGISTRY.json`, `.stremiium/config/councils/C16-banking-fintech.config.json`, `.stremiium/registry/master-registry.json`
**Tier:** `TIER-3-CUSTOMER-PRODUCT` (user-facing; 3 councils) [SEEN — `COUNCIL_REGISTRY.json`:8]
**Canonical status:** `.stremiium/` is authoritative; this file is a derived view.

> Fields tagged `[INFERRED]` are derived mappings rather than literal statements in the
> consolidated files. Record counts are from `master-registry.json`.

---

## Tier summary

| ID | Council | Captain agent file | Workforce departments (mapping) | Registry records | Config authority |
|---|---|---|---|---|---|
| C14 | Customer-Success | `C14-customer-success-captain.agent.md` | c14-customer-success | 6 | customer authority |
| C15 | Product-Management | `C15-product-management-captain.agent.md` | c15-product-management, c15-products-blt, c15-products-fan-tokens | 19 | product-decision authority |
| C16 | Banking-Fintech | `C16-banking-fintech-captain.agent.md` | c16-banking-fintech, c16-website-product | 7 | banking-compliance authority |

All three are `"status": "active"` and report to Sparkling Curious.

---

## C14 — Customer-Success

- **ID / Name:** C14 / Customer-Success-Squad.
- **Captain:** `C14-customer-success-captain` (VP-Customer-Success).
- **Mandate:** onboarding, disputes, Tier 1–3 support, retention, customer satisfaction.
  [SEEN — `PROGRAM_BRIEF.md`:47]
- **Sub-squads / specialties (SEEN):** department `c14-customer-success`; roles include
  Customer-Success-Manager, Customer-Support-Lead, Onboarding-Adoption-Manager, CSM-Team-Lead,
  Client-Retention-Specialist.
- **RACI:** **A** = C14 captain; depends on C15 (product) and C11 (dev) for fixes; coordinates
  with C07, C05 (SEEN config). Smallest tier-3 department (6 registry records).
- **Owned T-tasks `[INFERRED]`:** T9 UX workflows (support paths); **Support SLA 2–4 h by severity**
  (SEEN `COUNCIL_REGISTRY.json`:241).
- **Key skills:** `workflows/operational-playbooks/customer-support-escalation-playbook.md`,
  `nudging`/UX skills from C08, `axiom-privacy-ux`.
- **Escalation:** standard ladder; support severity SLA governs first-tier escalation.
- **Current status:** `active`.

## C15 — Product-Management

- **ID / Name:** C15 / Product-Management-Squad.
- **Captain:** `C15-product-management-captain` (Product-Management-Squad-Captain).
- **Mandate:** roadmap, parity matrices, feature specs, product strategy, analytics, user research.
  [SEEN — `PROGRAM_BRIEF.md`:48]
- **Sub-squads (SEEN):** three departments — `c15-product-management`, `c15-products-blt`
  (with subbench `SUB-brand-onboarding.c15`), `c15-products-fan-tokens`. This makes C15 the
  product-canon owner for BLTs and Fan Tokens specifically.
- **RACI:** **A** = C15 captain; **product-decision authority**; coordinates with all councils on
  product strategy (SEEN `COUNCIL_REGISTRY.json`:216-220). Owns the service canon (11 services).
- **Owned T-tasks `[INFERRED]`:** T4 Workspace Services (product specs), parity matrices for the
  program's dossier entities; Product SLA 10 days.
  Program role: dossier `03-products-and-pricing.md` and `04-rewards-and-behaviour.md`.
- **Key skills:** `skills/defining-product-vision`, `problem-definition`,
  `workflows/decision-frameworks/feature-prioritization-framework.md`, `product-roadmap-planning-playbook.md`.
- **Escalation:** standard ladder.
- **Current status:** `active`.

## C16 — Banking-Fintech

- **ID / Name:** C16 / Banking-Fintech-Squad.
- **Captain:** `C16-banking-fintech-captain` (Banking-Fintech-Squad-Captain / Banking-Expert).
  File: `.stremiium/agents/council-agents/C16-banking-fintech-captain.agent.md`.
- **Mandate:** CBS signatures, ISO 20022, BankservAfrica, PayShap, payments processing,
  financial infrastructure, banking compliance, settlement.
  [SEEN — `PROGRAM_BRIEF.md`:49; `C16-banking-fintech.config.json`]
- **Sub-squads (SEEN):** departments `c16-banking-fintech` (subbenches `SUB-fraud-analyst`,
  `SUB-onboarding-specialist`, `SUB-rail-integrator`) and `c16-website-product`.
- **RACI:** **A** = C16 captain; **banking-compliance authority**; depends on C01, C06, C11;
  coordinates with C10, C12 (SEEN config:25-28). C16 leads the largest number of program dossiers
  (banks + Flex.one + parts of FNB/ABSA/Nedbank).
- **Owned T-tasks `[INFERRED]`:** T4 Workspace Services (banking rails); Banking integration SLA
  20 days, compliance review 10 days, payment-processing test 24 h.
  Program role: dossier `02-technology-and-systems.md` (CBS signature, BankservAfrica/PayShap)
  and `06-regulatory-and-risk.md` for the 7 SA banks (`PROGRAM_BRIEF.md`:60-69).
- **Key skills:** `skills/banking-expert`, `fintech-banking`, `banking-expert/SKILL.md`,
  `pci-compliance`, `payment` integration patterns.
- **Escalation:** standard ladder; banking compliance is critical-path (no discretionary delay).
- **Current status:** `active`.

---

## Cross-tier observations (evidence-tagged)

1. **Product-canon ownership is split.** C15 owns the service canon and the BLT/Fan-Token product
   lanes; C16 owns the banking rails; C14 owns the customer lifecycle. All three feed the same
   user journey, so any cross-tier change touches ≥2 of them. `[SEEN]`
2. **C16 is program-critical.** Per `PROGRAM_BRIEF.md`:56-76, C16 is a lead council on 7+ of the
   17 target entities — the single most loaded tier-3 council for `SC-REA-NEOBANK-5.0`. `[SEEN]`
3. **Smallest councils, largest downstream impact.** C14 (6 records) and C16 (7) are the smallest
   tier-3 footprints yet gate customer experience and the entire fiat/banking integration. `[SEEN]`
