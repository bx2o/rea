# Data Governance (POPIA-aligned)

**Parent:** [data/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

How Umoya governs data to satisfy **POPIA** (and PAIA), while supporting FICA, conduct and prudential obligations. This is the governance counterpart to the [data model](./data-model.md) and the [observability](../platform/observability.md) audit story.

> Governance *obligations* are grounded in [privacy-popia](../../research/regulatory/privacy-popia.md) (and cross-linked to [aml-fica](../../research/regulatory/aml-fica.md), [conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md), [tax-governance](../../research/regulatory/tax-governance.md)). Our *implementation choices* are **DESIGN CHOICE**.

---

## 1. POPIA in one paragraph

POPIA sets **eight conditions for lawful processing** ([privacy-popia](../../research/regulatory/privacy-popia.md) §2). Enforcement is active, with **administrative fines up to R10m** and criminal exposure ([privacy-popia](../../research/regulatory/privacy-popia.md) §8). A bank handles large volumes of personal and **special** personal information, so governance is a first-class engineering concern.

---

## 2. The eight conditions → our controls

| # | POPIA condition | Our control *(DESIGN CHOICE)* |
|---|---|---|
| 1 | **Accountability** | Named Information Officer (registered s55) + Deputy IOs; governance board reporting. |
| 2 | **Processing limitation** | Lawful-basis register per processing activity; consent captured as first-class records; minimisation enforced at data-model tags. |
| 3 | **Purpose specification** | Purpose tags on data stores; collection limited to stated purpose. |
| 4 | **Further processing limitation** | Purpose-compatibility review before any reuse; analytics uses de-identified data. |
| 5 | **Information quality** | Data-quality tests; customer self-service correction; periodic refresh. |
| 6 | **Openness** | Privacy notices; PAIA manual; transparent consent language. |
| 7 | **Security safeguards** | Encryption, least privilege, audit logging, breach runbook ([observability](../platform/observability.md)). |
| 8 | **Data subject participation** | DSAR service for access/correction/deletion. |

---

## 3. Information Officer & PAIA

- **Information Officer (IO):** legally required, registered with the Information Regulator under **s55** before duties ([privacy-popia](../../research/regulatory/privacy-popia.md) §3). By default the head of the organisation, with **Deputy IOs** designated.
- **PAIA:** publish a **PAIA Manual**; handle access requests within **30 days**; submit an **annual PAIA report** (**1 Apr–30 Jun**) ([privacy-popia](../../research/regulatory/privacy-popia.md) §9).
- **Our build** *(DESIGN CHOICE)*: an internal **Privacy Registry** (record of processing activities × lawful basis × retention × data classes) that the IO owns; DSAR tooling is a platform service.

---

## 4. Lawful basis register

Each processing activity records its lawful basis. For a bank, the common bases *(DESIGN CHOICE mapping)*:

| Activity | Typical basis |
|---|---|
| Account servicing, payments | **Performance of a contract** |
| FICA identification/screening | **Legal obligation** |
| Fraud prevention | **Legitimate interests** / legal obligation |
| Marketing | **Consent** (opt-in) |
| Biometric verification | **Explicit consent** (special category — [privacy-popia](../../research/regulatory/privacy-popia.md) §5) |
| Credit reporting | Legal obligation / prior-authorisation assessment |

> **Rule:** no processing activity ships without a registered lawful basis. Enforced at design review.

---

## 5. Data classification

We use the classification in [data-model](./data-model.md) §PII legend (P0–P4). Governance defines the **controls per class**:

| Class | Encryption | Access | Masking | Residency |
|---|---|---|---|---|
| P0 Public | In transit | Open | — | Any |
| P1 Internal | Transit + at rest | Internal roles | — | In-region preferred |
| P2 Confidential (PII) | Transit + at rest + field-level where needed | Least privilege, need-to-know | Masked in non-prod & analytics | **In-region** |
| P3 Restricted (PII) | As P2 + stricter key management | Named roles, audited | Always masked outside prod | **In-region** |
| P4 Special Category | As P3 + per-ground controls | Minimal, audited | Never in analytics raw | **In-region** |

---

## 6. Prior authorisation (POPIA s57)

Certain higher-risk processing requires **prior authorisation** from the Regulator ([privacy-popia](../../research/regulatory/privacy-popia.md) §4), notably:

- Processing **unique identifiers** (e.g. SA ID number) for a purpose other than intended and **linking** them with data from other responsible parties.
- Processing **criminal behaviour / unlawful conduct** information on behalf of third parties.
- Processing for **credit reporting**.

**Our stance *(DESIGN CHOICE)*:** assess prior-authorisation needs **early** for ID-number linking and credit-related processing; legal opinion pending (**UNVERIFIED**). Design the ID-number handling to **minimise** the trigger (deterministic hashing for matching; encrypted retrieval; documented purpose).

---

## 7. Master data management (MDM)

| Master entity | Golden source | Governance |
|---|---|---|
| Customer/Party | BC2 Customer & Party | Single golden record; de-dup on ID hash. |
| Product/pricing | BC4 | Versioned; effective-dated. |
| Currency/country/codes | Reference tables | ISO-aligned; change-controlled. |
| Business calendar | Platform reference | SAST; holiday-aware. |

MDM rules *(DESIGN CHOICE)*: one golden source per entity, conflict resolution rules, and stewardship (owner per domain).

---

## 8. Retention & disposal

| Data | Retention (indicative) | Source / note |
|---|---|---|
| CDD/KYC records | ≥5 years (confirm) | [aml-fica](../../research/regulatory/aml-fica.md) §3.3, §8 |
| Transaction records | ≥5 years | FICA |
| Tax/AEOI records | per SARS | [tax-governance](../../research/regulatory/tax-governance.md) |
| Contact/marketing data | Until consent withdrawn | POPIA purpose limitation |
| Logs/audit | Long retention (regulatory) | [observability](../platform/observability.md) §6 |
| Analytics (de-identified) | Longer allowed | POPIA (re-identification risk managed) |

**Disposal:** secure deletion/anonymisation when retention lapses and no legal hold applies. Deletion must not break the **immutable ledger** (corrections are compensating entries; the ledger retains financial facts while PII refs can be cryptographically erased — see §11).

> **Note:** exact retention periods are regulatory and should be confirmed against the consolidated Acts — flagged **UNVERIFIED** ([aml-fica](../../research/regulatory/aml-fica.md) §8).

---

## 9. Cross-border transfers (POPIA s72)

- **Default: in-region** processing of production PII. *(DESIGN CHOICE)*
- Cross-border transfers are permitted **only** under a §72(1) basis: adequate protection (BCRs/binding agreement with substantially similar protections incl. onward transfer), consent, contract necessity, legal-obligation, etc. ([privacy-popia](../../research/regulatory/privacy-popia.md) §6).
- **No formal adequacy list** — the test is **recipient-by-recipient** ([privacy-popia](../../research/regulatory/privacy-popia.md) §11).
- **Our controls** *(DESIGN CHOICE)*: egress tagging denies unclassified cross-border by default; every approved transfer carries a §72 basis reference and is logged; vendor due-diligence validates onward-transfer protections ([third-party-catalogue](../integrations/third-party-catalogue.md) §9).

---

## 10. DSAR (data subject access requests)

A DSAR service supports **access, correction, and deletion** (POPIA condition 8):

| Step | SLA *(DESIGN CHOICE)* |
|---|---|
| Verify requester identity | Immediately (secure) |
| Locate data across stores (via lineage & registry) | ≤ 5 days |
| Provide access/correction | ≤ 30 days (POPIA-aligned) |
| Erasure where lawful (respecting retention/legal hold) | ≤ 30 days |

DSAR tooling reuses **column-level lineage** ([analytics-and-reporting](./analytics-and-reporting.md)) so we know *where* a subject's data lives.

---

## 11. Erasure & the immutable ledger (a hard problem)

A bank cannot simply delete financial history (FICA retention + audit + accounting). Our approach *(DESIGN CHOICE)*:

- **Ledger = financial facts** (amounts, dates, accounts) — retained, immutable.
- **PII = references** — personal identifiers stored separately and referenced by ID; **crypto-shredding** (destroying the key) renders the PII unreadable while preserving the financial record.
- **Reconciliation vs erasure:** erasure requests that conflict with legal obligations are **refused in part** with a documented basis (POPIA allows processing required by law).

This keeps the ledger intact **and** honours data-subject rights to the extent the law allows.

---

## 12. Breach handling

- **Detect → assess → notify.** On a **security compromise**, notify the **Information Regulator** and affected data subjects as soon as reasonably possible ([privacy-popia](../../research/regulatory/privacy-popia.md) §7).
- **Runbook** *(DESIGN CHOICE)*: containment, forensic capture, impact assessment (which data classes/subjects), regulator + subject notification, remediation, post-incident review.
- **Instrumentation:** breach detection relies on the observability/audit stack ([observability](../platform/observability.md)).

---

## 13. Governance operating model *(DESIGN CHOICE)*

| Artefact | Owner |
|---|---|
| Record of processing activities | Information Officer |
| Lawful-basis register | Privacy + Data Governance |
| Data classification registry | Data Governance (with security) |
| Retention schedule | Compliance + Records |
| DSAR operations | Privacy Ops |
| Vendor §72 assessments | Privacy + Procurement |
| Consent records | Identity/Product (BC1/BC4) |

- **Data Governance Committee** reviews new data uses, prior-authorisation triggers, and cross-border transfers.
- **Design gates:** privacy review is a required gate before any money/data surface ships ([PLAN.md](../../PLAN.md) §4).

---

## 14. Open questions *(UNVERIFIED)*

1. Whether **ID-number linking / credit processing requires prior authorisation** — legal opinion pending ([privacy-popia](../../research/regulatory/privacy-popia.md) §4). **UNVERIFIED.**
2. **Exact retention periods** and any 2026 POPIA/FIC amendments ([privacy-popia](../../research/regulatory/privacy-popia.md) §11). **UNVERIFIED.**
3. **Vendor residency/onward-transfer** protections for each provider ([third-party-catalogue](../integrations/third-party-catalogue.md)). **UNVERIFIED.**
4. Any Regulator **adequacy determinations** (none identified) ([privacy-popia](../../research/regulatory/privacy-popia.md) §11). **UNVERIFIED.**

---

## 15. Related reading

- [privacy-popia](../../research/regulatory/privacy-popia.md) — the full POPIA analysis.
- [data-model.md](./data-model.md) — classification tags.
- [analytics-and-reporting.md](./analytics-and-reporting.md) — lineage & DSAR enabler.
- [platform/observability.md](../platform/observability.md) — audit logging for accountability.
