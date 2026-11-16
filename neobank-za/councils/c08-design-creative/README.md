# C08 — Design & Creative (Project Umoya)

**Council:** C08 Design & Creative
**Program:** Project Umoya — greenfield NeoBank, South Africa *(codename placeholder)*
**As-of:** 2026-10-16 · **Status:** Draft v1.0 (UnConsolidated)

> **Evidence discipline.** Design decisions are proposals; any accessibility standard, language or benchmark is cited to its source. Consumer-behaviour assumptions are labelled **ASSUMPTION**. We do not assert measured usability statistics.

---

## 1. Purpose of the design function

Design & Creative makes the bank **usable, trustworthy, inclusive and recognisable**. For a mass-market, multi-language, low-data South African audience, design is a **functional requirement**, not decoration: if a feature does not work on an entry-level Android phone, on 2G/3G data, in a customer's first language, or for a user with low digital literacy, it is **not shipped**.

The function owns:
- **design principles**, accessibility, localisation, low-end-device/data design and trust UX ([`design-principles.md`](./design-principles.md));
- **key UX flows at wireframe-description level** ([`ux-flows.md`](./ux-flows.md));
- brand creative execution (with C09 — [`../c09-marketing-growth/brand-positioning.md`](../c09-marketing-growth/brand-positioning.md));
- the **design system** (components, tokens, patterns) that keeps cost-to-serve and build effort down.

---

## 2. Function organisation (target)

| Role | Reports to | Accountability |
|---|---|---|
| **Head of Design (Captain)** | C08 | Design vision, system, quality bar |
| **Product Designer(s) — Everyday/credit/SME** | Captain | End-to-end product flows & UI |
| **Design Systems Lead** | Captain | Component library, tokens, consistency |
| **UX Researcher / Accessibility Lead** | Captain | Usability testing, WCAG, inclusion research |
| **Content Designer (Ux writer)** | Captain | Plain language, multilingual copy, error/trust messaging |
| **Brand / Visual Designer** | Captain | Identity, campaign creative, motion |
| **Localisation Coordinator** | Captain | 11 official languages, translation QA |

> **ASSUMPTION:** team starts small; research is both internal (usability labs, field testing) and outsourced (in-language moderated testing in-target markets).

---

## 3. Design tenets

1. **The phone is the branch — but not the only door.** App-first with genuine **USSD/WhatsApp/agent** parity for the core jobs.
2. **Design for the floor, not the ceiling.** Lowest-end device, lowest-bandwidth, lowest-literacy, lowest-cost-data is the design target.
3. **Trust is a visual language.** Licences, protections, fees and privacy are shown, plainly, at the moment they matter.
4. **Plain language, in the customer's language.** No jargon; **11 official languages** where feasible.
5. **Accessible by construction.** WCAG 2.2 **AA** as a launch requirement; assistive and non-visual paths for the core jobs.
6. **One system, consistent everywhere.** A shared design system reduces cost and confusion across app, USSD and WhatsApp.
7. **Measure the experience.** Usability testing, accessibility audits and inclusion coverage feed Product metrics.

---

## 4. File index (this council)

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This overview. |
| [`design-principles.md`](./design-principles.md) | Principles, accessibility (WCAG), localisation (11 languages), low-end device & data-light design, trust UX. |
| [`ux-flows.md`](./ux-flows.md) | Key UX flows at wireframe-description level (onboarding, home/dashboard, pay, save, borrow, card controls, support). |

## 5. Cross-council links

- **Product (what we design) & scope:** [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) · [`../c15-product-management/mvp-scope.md`](../c15-product-management/mvp-scope.md)
- **Customer journeys (design companion):** [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md)
- **Brand narrative & messaging:** [`../c09-marketing-growth/brand-positioning.md`](../c09-marketing-growth/brand-positioning.md)
- **Regulatory UX hooks (FICA/POPIA/NCA):** [`../../research/regulatory/`](../../research/regulatory/README.md)
