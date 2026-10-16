# Project Umoya — Architecture Index (NeoBank South Africa)

**Program codename (placeholder):** `Project Umoya` — *a working label only, not a brand.*
**Owning councils:** C06 Engineering-Infrastructure · C11 Dev-Engineering · C15 Product (with C01/C12 compliance review per [PLAN.md](../PLAN.md) §5 sign-off).
**Document status:** Design baseline v0.1 — *proposed architecture, not an implemented system.*
**As-of:** 2026-10-16.

> **Reading discipline.** Every substantive *recommendation* in this architecture set is explicitly labelled **DESIGN CHOICE**. Every factual claim about an external party, vendor, regulatory figure or market datum that we have **not independently verified in this workspace** is labelled **UNVERIFIED**. Where a regulatory number is already sourced in the [regulatory research pack](../research/regulatory/README.md) we cross-link to it rather than restating it. See [Conventions](#5-conventions-and-evidence-discipline) below.

---

## 1. What this document set is

This is the **core platform architecture** for a greenfield South African digital bank. It describes *what we intend to build, why, and how the parts fit together* — it is deliberately **opinionated but honest**: choices are stated as choices, unknowns are stated as unknowns.

The set covers five domains:

| Domain | Folder | Answers |
|---|---|---|
| System design | [`system-design/`](./system-design/README.md) | How the platform is structured (C4 L1–L3, DDD, NFRs, stack). |
| Domain model | [`domain-model/`](./domain-model/README.md) | What the business *is* in code terms (entities, aggregates, events, ledger, money). |
| Integrations | [`integrations/`](./integrations/README.md) | What we connect to and how we insulate ourselves (rails, KYC, core build-vs-buy, open finance, vendors). |
| Data | [`data/`](./data/README.md) | How data is modelled, governed (POPIA), reported on, and used for AI/ML. |
| Platform | [`platform/`](./platform/README.md) | How we run and ship it (topology, observability, DevOps/SDLC). |

Planned but **out of scope for this document set** (owned by other councils, tracked in [PLAN.md](../PLAN.md)): the dedicated `architecture/security/` control set (W9, C12/C01) and the customer/product/GTM design (W8, C15/C14/C09/C07).

---

## 2. Navigation — start here, then branch

```
architecture/
├─ README.md                     ← you are here (index, principles, C4 legend, conventions)
├─ system-design/
│   ├─ README.md                  overview + design principles
│   ├─ context-diagram.md         C4 L1 — actors & external systems
│   ├─ container-diagram.md       C4 L2 — deployable units
│   ├─ component-map.md           C4 L3 — key services & responsibilities
│   ├─ bounded-contexts.md        DDD contexts & context map
│   ├─ non-functional-requirements.md  NFRs (SLOs, RPO/RTO, residency, cost)
│   └─ technology-selection.md    stack + rationale + alternatives
├─ domain-model/
│   ├─ README.md                  how to read the model
│   ├─ entities.md                core entities
│   ├─ aggregates.md              aggregate boundaries & invariants
│   ├─ domain-events.md           event catalogue
│   ├─ ledger-model.md            double-entry ledger, posting rules, audit
│   └─ money-and-currency.md      ZAR base, minor units, FX, rounding
├─ integrations/
│   ├─ README.md                  integration landscape + ACL strategy
│   ├─ payments-rails.md          PayShap, EFT/AC, RTC, cards, DebiCheck, sponsorship
│   ├─ kyc-and-identity.md        DHA/ABIS, liveness, screening, bureaus
│   ├─ core-banking-build-vs-buy.md   decision matrix
│   ├─ open-banking-and-open-finance.md  SA posture, consent, sandbox
│   └─ third-party-catalogue.md   vendor/partner catalogue with risk/status
├─ data/
│   ├─ README.md                  data platform overview
│   ├─ data-model.md              logical model, schemas, PII tagging
│   ├─ data-governance.md         POPIA-aligned governance
│   ├─ analytics-and-reporting.md BA returns, BI, metrics, lakehouse
│   └─ ai-and-ml.md               ML use cases, MLOps, model governance
└─ platform/
    ├─ README.md                  platform engineering overview
    ├─ deployment-topology.md     environments, regions, DR/BCP, segmentation
    ├─ observability.md           logs/metrics/traces, SLOs, audit logging
    └─ devops-and-sdlc.md         CI/CD, IaC, release, change management, secure SDLC
```

**Suggested reading paths**

- **New engineer (week 1):** [system-design/README](./system-design/README.md) → [context-diagram](./system-design/context-diagram.md) → [container-diagram](./system-design/container-diagram.md) → [bounded-contexts](./system-design/bounded-contexts.md) → [domain-model/README](./domain-model/README.md) → [ledger-model](./domain-model/ledger-model.md).
- **Compliance / risk reviewer:** [context-diagram](./system-design/context-diagram.md) (regulators) → [data-governance](./data/data-governance.md) → [observability](./platform/observability.md) (audit logging) → [third-party-catalogue](./integrations/third-party-catalogue.md).
- **Product / GTM:** [context-diagram](./system-design/context-diagram.md) → [domain-model/entities](./domain-model/entities.md) → [payments-rails](./integrations/payments-rails.md) → [non-functional-requirements](./system-design/non-functional-requirements.md).
- **Platform / SRE:** [technology-selection](./system-design/technology-selection.md) → [deployment-topology](./platform/deployment-topology.md) → [observability](./platform/observability.md) → [devops-and-sdlc](./platform/devops-and-sdlc.md).

---

## 3. The C4 model — level legend

We document the system with the **C4 model** (Context, Containers, Components, Code). We stop at **L3 (component)**; L4 (code) is generated from source, not hand-written, to avoid stale diagrams.

| Level | Name | Audience | Question it answers | Our artefact |
|---|---|---|---|---|
| **L1** | System Context | Everyone (including non-technical) | Who uses it and what external systems does it talk to? | [`context-diagram.md`](./system-design/context-diagram.md) |
| **L2** | Container | Technical staff, ops, security | What are the deployable/executable units and how do they communicate? | [`container-diagram.md`](./system-design/container-diagram.md) |
| **L3** | Component | Architects, engineers on a service | What are the responsibilities inside a container? | [`component-map.md`](./system-design/component-map.md) |
| **L4** | Code | Engineers of a specific module | Classes/functions. **Not hand-authored here.** | generated (e.g. Spring Modulith / ArchUnit diagrams, IDE) |

Conventions used in our diagrams:

- **Person** = an actor (customer, back-office operator, regulator, machine partner).
- **System** = something we do not own or operate.
- **Container** = a separately runnable thing (app, service, datastore, queue, function). *In C4, "container" is not Docker-specific.*
- **Component** = a grouping of code behind a well-defined interface, inside a container.
- Arrows are labelled with **direction + protocol + intent** (e.g. `HTTPS/JSON — initiates payment`).

Diagrams are written as **Mermaid** so they render in-repo and can be reviewed by diff. Where Mermaid's C4 support is insufficient we fall back to `flowchart`, which is still C4-shaped because the node types are labelled.

---

## 4. Architecture principles (the ten we will be held to)

These are expanded in [system-design/README.md](./system-design/README.md). One line each here:

1. **Cloud-native & elastic** — stateless services, horizontal scale, managed data stores. *(DESIGN CHOICE)*
2. **API-first** — every capability is an internal contract before it is a UI. *(DESIGN CHOICE)*
3. **Event-driven backbone** — state changes are facts published as events; consumers are decoupled. *(DESIGN CHOICE)*
4. **Zero-trust** — no implicit network trust; every call authenticated, authorised, encrypted. *(DESIGN CHOICE)*
5. **POPIA-by-design** — lawful basis, minimisation, residency and data-subject rights are architecture inputs, not afterthoughts. *(DESIGN CHOICE)*
6. **Ledger is the source of truth** — balances are derived from immutable double-entry postings; nothing mutates money directly. *(DESIGN CHOICE)*
7. **Anti-corruption at the edge** — external models never leak into our domain; adapt to them behind ACLs. *(DESIGN CHOICE)*
8. **Resilience & graceful degradation** — a rail, bureau or KYC provider outage must not take the bank down. *(DESIGN CHOICE)*
9. **Auditability as a feature** — every regulated action is reconstructable; logs are evidence-grade. *(DESIGN CHOICE)*
10. **In-region by default** — production personal data and the ledger run in South Africa. *(DESIGN CHOICE, driven by POPIA/§72 — see [data-governance](./data/data-governance.md))*

---

## 5. Conventions and evidence discipline

We inherit the evidence discipline from the research packs ([regulatory](../research/regulatory/README.md), [landscape](../research/sa-banking-landscape/README.md), [competitors](../research/neobank-competitors/README.md)).

| Tag | Meaning in this document set |
|---|---|
| **DESIGN CHOICE** | A decision *we* make. Reversible at a cost; recorded so it can be challenged. Not a fact about the world. |
| **UNVERIFIED** | An external fact (vendor capability, a regulator's current figure, a partner's API) that we have **not** confirmed in this workspace. Must be validated before it becomes load-bearing. |
| *(cross-link)* | A regulatory/market fact already sourced elsewhere in `neobank-za/` — we link, we do not duplicate. |

**Rules we apply:**

- Regulatory obligations are **linked to their source** in the [regulatory pack](../research/regulatory/README.md) and referenced by regime (e.g. "FIC Act — see [aml-fica](../research/regulatory/aml-fica.md)"), not restated as if freshly verified.
- No figures, vendor claims or SLAs are invented. A blank cell is honest; a guessed cell is not.
- Terminology is fixed in the [glossary](#6-glossary--fixed-terminology) and used consistently across every file.

---

## 6. Glossary — fixed terminology

We use these terms with a single meaning throughout the set. Where an industry term is ambiguous we say which sense we mean.

| Term | Our precise meaning |
|---|---|
| **Customer** | A natural or legal person holding a banking relationship with us. Distinct from **Party** (any actor in the domain) and **User** (an authenticated principal in the app). |
| **Party** | Any person or organisation the platform must represent (customer, beneficial owner, director, signatory, operator, external agent). |
| **Account** | A product-specific sub-ledger container (e.g. current account, savings pocket, loan). Holds a **Balance**. |
| **LedgerEntry** | One immutable debit-or-credit line, in one currency, against one **LedgerAccount**. |
| **LedgerAccount** | A node in the chart of accounts (asset/liability/equity/income/expense). Distinct from **Account**. |
| **Transaction** | A business-level unit of work that produces one or more balanced **LedgerEntry** postings. |
| **Posting** | The act of writing balanced LedgerEntries; also used for a single entry within a transaction. |
| **Journal** | An ordered, immutable sequence of postings for a Transaction. |
| **Payment** | A movement of value to/from an external rail (PayShap, EFT, card). Distinct from an internal transfer. |
| **Rail** | An external payment or settlement system (PayShap, EFT/AC, RTC, card schemes). |
| **Sponsor bank** | A licensed bank that provides clearing/settlement membership on our behalf pre-licence. |
| **ACL** | Anti-Corruption Layer — a translation boundary that protects our domain from an external model. |
| **Context** | A DDD bounded context (see [bounded-contexts](./system-design/bounded-contexts.md)). |
| **Money** | A `(minorUnits, currency)` value object. See [money-and-currency](./domain-model/money-and-currency.md). |

---

## 7. How this set relates to the rest of the program

- **Regulatory grounding:** [research/regulatory/](../research/regulatory/README.md) — licensing, NPS/payments, AML/FICA, POPIA, FAIS/NCA, tax/governance.
- **Market grounding:** [research/sa-banking-landscape/](../research/sa-banking-landscape/README.md), [research/neobank-competitors/](../research/neobank-competitors/README.md).
- **Program plan & gates:** [PLAN.md](../PLAN.md) — quality gates (no secrets, no PII in artifacts, PCI/POPIA gates before money surfaces ship, 80% test coverage on produced code).
- **Governance:** King IV-aligned board/committee model and the sign-off chain (Tech Lead → CTO → Security → Privacy → Sparkling Curious).

---

## 8. Document governance

- **Owner:** C06 Engineering-Infrastructure (primary), with C11 Dev-Engineering and C15 Product.
- **Change control:** architecture decisions of lasting consequence are captured as short ADRs referenced from the relevant file; this index does not itself contain ADRs.
- **Review cadence:** re-reviewed at each program gate defined in [PLAN.md](../PLAN.md) §4.
- **Status legend used per file:** *Proposed* (v0.x) → *Accepted* → *Superseded*.
