# C05 — Learning & Development (Capability Academy)

- **Owner:** C05 Chief People Officer (with C03 knowledge function) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`culture-and-values.md`](./culture-and-values.md), `../c03-admin-knowledge/README.md`

> The academy closes the gap between "people we can hire" and "capability the licence requires". Certification requirement figures are `[ASSUMPTION]` planning targets; regulatory exam requirements are sourced.

---

## 1. Academy structure

Four capability schools, each mapped to councils and to the reusable skills index (`../../skills/README.md`):

```text
Capability Academy
├── School of Banking Domain      → C16/C01   (licensing, rails, regulation)
├── School of Financial Crime     → C01/C12   (AML/FICA, sanctions, fraud)
├── School of Secure Engineering  → C11/C06/C12 (secure SDLC, crypto, cloud)
└── School of Data & AI           → C06/C12/C13 (data governance, analytics, ML)
```

Every school produces three things: a **curriculum**, a **practical assessment**, and an **evidence record** (interlock with C03 records & retention).

---

## 2. School of Banking Domain

| Module | Content | Audience |
|---|---|---|
| SA regulatory perimeter | Banks Act, Mutual Banks Act, FSRA Twin Peaks, FAIS, NCA `[reg]` | all staff (foundation) |
| Licensing & authorisation | s12/s16 path, fit-and-proper, capital minimums | C01, leadership |
| Payments & rails | NPS Act, PayShap, ISO 20022, clearing/settlement `[reg]` | C02, C16 |
| Banking products & economics | deposits, lending, cards, interchange | product, C10 |
| Conduct & Treating Customers Fairly | Code of Banking Practice, NFO | all customer-facing |

Pointers: `../../research/regulatory/banking-licensing.md`, `../../research/regulatory/payments-nps.md`, `../../research/regulatory/conduct-fais-nca.md`.

---

## 3. School of Financial Crime

| Module | Content | Audience |
|---|---|---|
| FICA fundamentals | accountable institutions, CDD/EDD, UBO, record-keeping `[reg]` | all ops/compliance |
| Reporting | CTR (> R49,999.99 / 3 days), STR (15 days), TPR `[reg]` | AML ops |
| Sanctions & TFS | ss26A–26C screening, POCA awareness `[reg]` | AML ops, C12 |
| Travel rule (crypto) | Directive 9; zero threshold `[reg]` | C13, C01 |
| Fraud & dispute ops | case handling, chargebacks | C02, C12 |

Pointers: `../../research/regulatory/aml-fica.md`, `../../skills/aml-fica-screening/SKILL.md`.

---

## 4. School of Secure Engineering

| Module | Content | Audience |
|---|---|---|
| Secure SDLC | threat modelling, code review, secret handling | C11 |
| Cloud & platform security | least privilege, IaC scanning | C06/C11 |
| Cryptography & key management | HSM/key-lifecycle, tokenisation, PCI-DSS scope | C11/C12 |
| Security incident response | detection, containment, POPIA breach trigger | C12 |

Pointers: `../../architecture/security/`, `../../research/regulatory/privacy-popia.md` §7.

---

## 5. School of Data & AI

| Module | Content | Audience |
|---|---|---|
| POPIA & data governance | 8 conditions, lawful basis, cross-border transfer `[reg]` | all handling PI |
| Data modelling & lineage | domain model, reconciliation lineage | C06/C10 |
| Analytics & reporting | MIS, BA-return data quality | C10 |
| Responsible AI in banking | model risk, explainability, fairness | C12/C15 |

Pointers: `../../research/regulatory/privacy-popia.md`, `../c03-admin-knowledge/knowledge-architecture.md`.

---

## 6. Certification paths

### 6.1 Compliance / FinCrime path (C01)
`FICA fundamentals → AML/CFT advanced → sanctions/TFS → FAIS fit-and-proper (RE1/RE3 for KIs, RE5 for representatives) → compliance monitoring → policy & RMCP authoring`

- **Regulatory exam requirement `[reg]`:** KI/representative RE exams per BN 194 of 2017 (`../../research/regulatory/conduct-fais-nca.md` §2.2).
- **Target `[TARGET]`:** completion before licence reliance.

### 6.2 Payments / Rails path (C16/C02)
`NPS fundamentals → ISO 20022 → PayShap → clearing/settlement → reconciliation & suspense → disputes`

### 6.3 Data path (C06/C10)
`POPIA → data modelling → lineage & quality → MIS/reporting → (optional) analytics/ML`

### 6.4 Web3 / digital-asset path (C13)
`FSCA CASP regime → FICA item-12 + travel rule → custody & controls → tokenisation concepts → DeFi risk literacy`

Pointers: `../c13-web3-finance/stablecoin-and-digital-asset-rails.md`, `../c13-web3-finance/defi-and-risk.md`.

---

## 7. Delivery model

- **Internal SMEs + external providers** `[ASSUMPTION]`; external accreditation where a certificate carries regulatory weight.
- **Learning hours `[TARGET]`:** foundation modules mandatory at onboarding; specialist paths time-boxed per role.
- **Assessment:** knowledge check + practical artefact; pass required before independent work on money/data surfaces.
- **Records:** all completion evidence retained per `../c03-admin-knowledge/records-and-retention.md`.

---

## 8. Reusable skills linkage

The program's reusable skills (see `../../skills/README.md`) are the *executable* form of this academy — e.g. `sa-banking-domain`, `aml-fica-screening`, `rea-reverse-engineering`. Academy modules should reference the matching skill so learning and doing share one artefact.

---

## 9. Open items / unknowns

- `[OPEN ITEM]` External provider selection and accreditation mapping.
- `[ASSUMPTION]` Learning-hour targets are placeholders.
- `[UNKNOWN]` Post-COFI conduct training requirements once the Bill is enacted (`../../research/regulatory/conduct-fais-nca.md` §8).

---

## 10. Cross-links

- Culture → [`culture-and-values.md`](./culture-and-values.md)
- Skills index → `../../skills/README.md`
- Knowledge function → `../c03-admin-knowledge/README.md`
