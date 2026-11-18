# KYC & Identity Integration

**Parent:** [integrations/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

How Umoya verifies who a customer is, screens them, and pulls credit/affordability data — and how each external provider is wrapped in an ACL. Regulatory obligations are cross-linked ([aml-fica](../../research/regulatory/aml-fica.md), [privacy-popia](../../research/regulatory/privacy-popia.md)); integration approaches are **DESIGN CHOICE**. Provider capability/interface details are **UNVERIFIED**.

---

## 1. What "KYC" means for a SA bank

At onboarding and continuously thereafter, Umoya must (as an FIC accountable institution — [aml-fica](../../research/regulatory/aml-fica.md) §2–3):

1. **Identify & verify** the customer (natural and legal persons) — "FICA verification".
2. **Trace beneficial ownership** to natural persons for legal entities.
3. **Screen** against sanctions/TFS and PEP lists.
4. Apply **enhanced due diligence (EDD)** for higher-risk/PEP relationships.
5. **Verify** bank account details for payouts/collections.
6. For credit: run **affordability assessment** (NCA — [conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md) §3).

POPIA overlays this with lawful basis, minimisation, and special-category rules for **biometrics** ([privacy-popia](../../research/regulatory/privacy-popia.md) §5). Linking SA ID numbers across sources may trigger **prior authorisation** ([privacy-popia](../../research/regulatory/privacy-popia.md) §4).

---

## 2. The identity verification pipeline

```mermaid
flowchart LR
    IN[Customer input] --> DOC[Document capture & check]
    DOC --> LIFE[Liveness / biometric match]
    LIFE --> DHA[DHA/ABIS ID verification]
    DHA --> SCREEN[Sanctions / PEP screening]
    SCREEN --> BUREAU[Bureau pull (if credit)]
    BUREAU --> BAV[Bank account verification]
    BAV --> DEC{Decision}
    DEC -->|pass| KYC[KYCProfile]
    DEC -->|review| REVIEW[Manual review]
    DEC -->|fail| DECLINE[Decline]
```

Each node is a component of the KYC service ([component-map](../system-design/component-map.md) §3) backed by an ACL adapter.

---

## 3. Provider categories

### 3.1 Home Affairs — DHA / ABIS (ID verification)
- **Purpose:** verify the SA identity number / identity document against the national population register.
- **Why it matters:** the SA ID number is the anchor of identity and is used for FICA verification, de-duplication, and credit matching.
- **Integration model:** typically via an **accredited provider** or an approved DHA interface. Exact access route (direct vs via accredited third party), and the **fee** (a known cost pain point — DHA fee changes hit digital onboarding economics, per [digital-banks](../../research/neobank-competitors/digital-banks.md)), are **UNVERIFIED**.
- **ACL:** `IDVerificationAdapter` → returns canonical `IdentityVerificationResult{ status, matchedFields, confidence, provider, timestamp }`.
- **POPIA flag:** using the ID number for cross-source matching may need **prior authorisation** ([privacy-popia](../../research/regulatory/privacy-popia.md) §4). Assess before design lock.

### 3.2 Liveness & biometrics
- **Purpose:** confirm a live human is present and matches the document (anti-spoofing, anti-deepfake).
- **Integration:** specialist liveness vendor (selfie video + passive/active checks). **UNVERIFIED** which vendor(s).
- **POPIA flag:** biometrics are **special personal information** — requires explicit consent or another listed ground; store only what is necessary (prefer a **match result + hashed artefact**, not raw biometric templates) ([privacy-popia](../../research/regulatory/privacy-popia.md) §5).
- **ACL:** `LivenessAdapter` → `LivenessResult{ passed, score, method, evidenceRef }`.

### 3.3 Sanctions / PEP screening
- **Purpose:** screen against **UN Security Council TFS lists** (FIC Act ss26A–26C) and **PEP/domestic prominent influential person** lists, at onboarding and **continuously** ([aml-fica](../../research/regulatory/aml-fica.md) §4).
- **Integration:** specialist screening vendor (list management is specialist). **UNVERIFIED** vendor.
- **Matching:** fuzzy name/DOB/nationality matching with a review queue for potential matches (avoid over-blocking).
- **ACL:** `ScreeningAdapter` → `ScreeningResult{ matches[], lists[], confidence, screenedAt }`.
- **Consequence of a confirmed TFS match:** block transactions + report (TPR) — [aml-fica](../../research/regulatory/aml-fica.md) §4.

### 3.4 Credit bureaus
- **Purpose:** credit history, default data, and affordability inputs.
- **Providers in-market:** **TransUnion, Experian, Compuscan** (the "big three" cited in the research) ([conduct-fais-nca](../../research/regulatory/conduct-fais-nca.md) context; **UNVERIFIED** specific product/API terms).
- **Regulatory flag:** credit reporting and certain ID-linking may be subject to **POPIA prior authorisation** ([privacy-popia](../../research/regulatory/privacy-popia.md) §4).
- **ACL:** separate adapter per bureau (portability, second-source resilience) → `CreditReport`, `AffordabilityData`.

### 3.5 Bank account verification (BAV)
- **Purpose:** confirm an external account's holder/number (for payouts, beneficiary validation, anti-fraud).
- **Integration:** via a verification provider or the receiving bank. **UNVERIFIED** options.
- **ACL:** `BankAccountVerificationAdapter` → `AccountVerification{ matched, nameMatchScore, status }`.

---

## 4. Onboarding decisioning

| Signal | Source | Use |
|---|---|---|
| ID verified | DHA/ABIS | FICA identify/verify |
| Document authentic | Document check | Fraud/KYC |
| Live human | Liveness | Anti-impersonation |
| Not sanctioned | Screening | TFS compliance |
| PEP status | Screening | EDD routing |
| Credit profile | Bureau | Credit/limits |
| Account verified | BAV | Beneficiary/payout |
| Device/behaviour | Fraud (BC9) | Risk |

**Decision outcomes:** `APPROVE` (open account), `REVIEW` (manual, human-in-loop), `DECLINE` (with reason codes). Every decision stores reason codes + endpoint versions (explainability — [aggregates](../domain-model/aggregates.md) §3.5 K5).

---

## 5. Resilience & degradation

| Provider down | Degraded behaviour *(DESIGN CHOICE)* |
|---|---|
| Liveness/DHA | Queue onboarding; optionally allow **provisional account** with restricted limits and a "verify to unlock" flow. |
| Screening | **Do not activate** a relationship without screening; queue and re-run; only proceed when cleared (TFS is non-negotiable). |
| Bureau | Defer credit decision; do not block transactional onboarding. |
| BAV | Payout to beneficiary flagged "unverified" with cooling-off. |

Screening is treated as **non-degradable** for activation (unlike the others) because it is a legal obligation. *(DESIGN CHOICE)*

---

## 6. Data handling & residency

- **Minimisation:** send providers only the fields required; strip extras.
- **Retention:** CDD records retained per FICA (≥5 years; confirm — [aml-fica](../../research/regulatory/aml-fica.md) §8); biometric artefacts minimised and secured.
- **Residency:** prefer in-region processing; any provider processing offshore requires a **§72 basis** ([privacy-popia](../../research/regulatory/privacy-popia.md) §6) — **UNVERIFIED** per vendor.
- **No PII in logs:** never log full ID numbers, biometrics, or screening payloads ([PLAN.md](../../PLAN.md) §4).

---

## 7. Build vs buy

**Buy the specialists; build the orchestration.** *(DESIGN CHOICE)*
- **Buy:** DHA access, liveness, list/screening coverage, bureau data — these are specialist, list-maintenance-heavy, or licensed-access services.
- **Build:** the **orchestration** (pipeline, decisioning, degraded modes, audit) in the KYC service (C13). This is where our differentiation and control sit.

---

## 8. Open questions *(UNVERIFIED)*

1. DHA/ABIS access route, contract, and current per-verification fee. **UNVERIFIED.**
2. Liveness/screening/bureau vendor selection & residency terms. **UNVERIFIED.**
3. Whether ID-number linking and credit processing require **prior authorisation** — legal assessment pending ([privacy-popia](../../research/regulatory/privacy-popia.md) §4). **UNVERIFIED.**
4. Legal-entity beneficial-ownership verification sources (CIPC register availability). **UNVERIFIED** ([aml-fica](../../research/regulatory/aml-fica.md) §3.2).
5. BAV provider options & interchange with local banks. **UNVERIFIED.**

---

## 9. Related reading

- [aml-fica](../../research/regulatory/aml-fica.md) — CDD/EDD, screening, reporting obligations.
- [privacy-popia](../../research/regulatory/privacy-popia.md) — lawful basis, special categories, prior authorisation, residency.
- [component-map](../system-design/component-map.md) §3 — the KYC service components.
- [data/data-governance.md](../data/data-governance.md) — how this data is governed.
