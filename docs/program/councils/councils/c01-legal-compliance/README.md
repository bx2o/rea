# C01 — Legal-Compliance Council

- **Council ID:** C01 (`c01-legal-compliance`)
- **Captain:** Legal-Compliance Captain (`C01-legal-compliance-captain.agent.md`) — Tier 2
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for legal, regulatory & privacy compliance; binding compliance veto on money/data surfaces
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Every figure in this council's artifacts is either carried from the regulatory research pack with a source tag (`[STATUTE]`, `[REG]`, `[REG-GUIDE]`, `[CONSULT]`, `[INDUSTRY]`) or is explicitly labelled `[ASSUMPTION]` / `[TARGET]` / `[UNVERIFIED]`. This pack is **not legal advice**; every `[CONFIRM]` item must be validated by the appointed MLCO / Information Officer / admitted attorney before reliance. See [`../../research/regulatory/README.md`](../../research/regulatory/README.md) §1 for the full evidence-classification legend.

---

## 1. Purpose

C01 is the **gatekeeper council** for legal, regulatory and privacy compliance on the program. It assures — it does not build. Its job is to make the NeoBank **lawful by design** across the South African perimeter (Banks Act, FICA, POPIA, NPS Act, FAIS, NCA, Companies Act) and to ensure that **no money/data surface ships without documented compliance sign-off**.

This council sits at the intersection of:

- **C16 Banking-Fintech** — joint licensing strategy; banking-compliance authority; rails and prudential interfaces.
- **C12 Cybersecurity-Intel** — privacy/security overlap, incident response, the technical AML controls C01 specifies.
- **C10 Finance-CFO** — capital adequacy, tax, investor compliance, BA-return evidence.
- **C03 Admin-Knowledge** — records, retention, audit trail, knowledge capture.
- **C15 / C06 / C11** — compliance requirements feeding product and architecture.

The full mandate, authority and agent roster are fixed in [`CHARTER.md`](./CHARTER.md).

---

## 2. Mandate & authority

| Dimension | Position |
|---|---|
| **Mandate** | Ensure the bank is lawful by design; own the compliance gate; hold the legal & privacy special authority |
| **Authority** | Binding veto to **block** any release that fails compliance gates (G-COMP, G-DATA); binding on law/regulation interpretation |
| **Out of scope** | Commercial decision-making (C04/C10); building the controls (C11/C12 implement what C01 specifies) |
| **Escalation** | `AGT → Legal-Compliance Captain → Sparkling Curious → Board`; critical regulatory/AML/privacy skips to C01 + C16 + SC at the 1h SLA |

C01 does **not** override the security special authority (C12) or the banking-compliance authority (C16) on their own terrain — where these conflict, the matter is escalated to Sparkling Curious (see [`../../program/governance/escalation-protocols.md`](../../program/governance/escalation-protocols.md)).

---

## 3. Scope of this council

**In scope:** licensing applications (with C16); POPIA/privacy programme; FICA/AML compliance obligations; FAIS/conduct compliance; NCA/credit compliance; contract review and the contract register; governance legal review and company secretarial duties; regulatory correspondence and the regulatory-obligation register.

**Out of scope (route elsewhere):** licence/sponsor commercial strategy (C16), markets strategy (C04), capital raising (C10), building AML/fraud *systems* (C12/C11), customer support (C14). See [`../../workflows/agent-routing.md`](../../workflows/agent-routing.md) for the routing contract.

---

## 4. How C01 interfaces with C12

C01 and C12 are deliberately separated by **duty type**, not by topic: C01 decides **what the law requires**, C12 decides and operates **how the bank is protected** and holds the risk register. Both hold binding authority in their own domain.

| Interface | C01 owns | C12 owns | Joint artefact / gate |
|---|---|---|---|
| Privacy | POPIA lawfulness, Information Officer, DPIA, breach *legal* notification | Security safeguards, encryption, DLP, breach *detection* | [`../../architecture/security/privacy-by-design.md`](../../architecture/security/privacy-by-design.md) |
| AML / financial crime | RMCP, CDD/EDD policy, FIC reporting decisions (MLCO) | Sanctions/monitoring **systems**, alerting, case tooling | [`../../architecture/security/aml-transaction-monitoring.md`](../../architecture/security/aml-transaction-monitoring.md) |
| Incident response | Statutory notification obligations (POPIA / FIC / PA) | Detection, containment, forensics | [`../../architecture/security/incident-response.md`](../../architecture/security/incident-response.md) §6 |
| Gates | G-COMP, G-DATA sign-off | G-SEC, G-DEP, G-RISK sign-off | [`../../program/delivery/quality-gates.md`](../../program/delivery/quality-gates.md) |
| Registers | Regulatory-obligation register (this council) | Risk register (`../../program/risk/risk-register.md`) | Cross-referenced, not duplicated |

**Division-of-labour rule.** A regulatory obligation that produces *legal* work (a filing, a contract, a notice) is C01's; an obligation that produces a *control* (a monitor, a filter, a scanner) is C12's to build and run, using C01's specification as the requirement. The security-compliance sentinel reports jointly to both.

---

## 5. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview; mandate; C12 interface. |
| [`regulatory-obligation-register.md`](./regulatory-obligation-register.md) | Register of SA legal/regulatory obligations: obligation, owner council, evidence, status — citing `../../research/regulatory/`. |
| [`contract-review-process.md`](./contract-review-process.md) | Review of vendor, partner, sponsor-bank and customer T&C contracts; clause checklist; escalation. |
| [`company-secretarial.md`](./company-secretarial.md) | Board, company records, CIPC, delegations of authority, statutory filings. |

---

## 6. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C16 licensing | Joint Banks Act / FSP / NCR / FIC applications — this council owns legal form, C16 owns banking-domain strategy (`../c16-banking-fintech/README.md`). |
| C12 security | POPIA/FICA controls specified by C01, built and operated by C12 (`../c12-cybersecurity-intel/README.md`). |
| C10 finance | BA-return and tax obligations are evidenced through `../c10-finance-cfo/financial-controls.md`. |
| C03 records | Every legal artefact retained per `../c03-admin-knowledge/records-and-retention.md`. |
| Gates | Compliance sign-off on G-COMP/G-DATA before any money/data release (`../../program/delivery/quality-gates.md`). |
| Escalation | Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 7. KPIs

| KPI | Target |
|---|---|
| Compliance sign-off completeness before release | 100% |
| Regulatory submissions acknowledged | 100% |
| POPIA/PAIA obligations on schedule | 100% |
| FICA reporting accuracy | No late/inaccurate STR/CTR |
| Compliance gate first-pass rate | ≥ 90% |

---

## 8. Open items / unknowns

- `[UNKNOWN]` Whether the **COFI Bill** will be enacted by launch and its transitional arrangements (`../../research/regulatory/conduct-fais-nca.md` §1).
- `[UNKNOWN]` Exact **FICA record-retention period** — commonly cited as ≥5 years but marked `[CONFIRM]` (`../../research/regulatory/aml-fica.md` §8).
- `[CONFIRM]` POPIA **prior-authorisation** need for ID-number linking / credit processing under s57 (`../../research/regulatory/privacy-popia.md` §4).
- `[CONSULT]` Final **non-bank payment framework** capital tiers (draft as at 2026-10) (`../../research/regulatory/payments-nps.md` §3).

_Codename `Project Umoya` is a working label only._
