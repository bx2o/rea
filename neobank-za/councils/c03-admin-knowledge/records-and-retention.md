# C03 — Records & Retention

- **Owner:** C03 Chief Librarian · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`knowledge-architecture.md`](./knowledge-architecture.md)
- **Grounding:** `../../research/regulatory/aml-fica.md` §3.3, `../../research/regulatory/privacy-popia.md`, `../../research/regulatory/tax-governance.md`

> Retention periods below are tagged `[REG]` where sourced and `[ASSUMPTION]` where they are internal defaults pending legal confirmation. **This is not legal advice**; C01 and a SA admitted attorney must ratify the schedule. Where the research pack explicitly flags a period as needing confirmation, it is marked `[UNKNOWN]`.

---

## 1. Why records management matters in a bank

1. **Legal compulsion.** FICA, POPIA, the Companies Act, tax law and PA expectations all require records to be kept — and to be **producible**.
2. **Evidence.** Reconciliation, audit and disputes are won or lost on records.
3. **Privacy balance.** POPIA requires that personal information not be kept longer than necessary `[REG]` (`../../research/regulatory/privacy-popia.md` §2, condition 5) — records management is therefore a **tension** between "keep for FICA" and "delete for POPIA".
4. **Auditability.** Every retention/disposal action must itself be recorded.

---

## 2. Record taxonomy

| Class | Examples | Primary driver |
|---|---|---|
| **Client identification (KYC/CDD)** | ID docs, UBO records, screening results | FICA `[REG]` |
| **Transaction records** | payment records, statements, journal entries | FICA / tax `[REG]` |
| **AML reports & investigations** | CTR, STR, TPR, EDD files | FICA `[REG]` |
| **Prudential reports** | BA returns, capital/liquidity files | Banks Act `[REG]` |
| **Corporate/governance** | board minutes, resolutions, share register | Companies Act `[REG]` |
| **Tax & AEOI** | tax returns, CRS/FATCA/CARF files | Tax law `[REG]` |
| **Financial statements** | annual financials, audit files | Companies Act `[REG]` |
| **Privacy records** | privacy notices, consent, breach logs, PAIA manual | POPIA/PAIA `[REG]` |
| **Operational** | recon packs, incident records, complaint files | internal `[ASSUMPTION]` |
| **Program knowledge** | this workspace's artifacts | internal `[ASSUMPTION]` |

---

## 3. Retention schedule

> **Formula default:** a minimum retention period measured from the **later of** (a) the end of the relationship, or (b) the date of the record/transaction — whichever gives the longer retention. Exact statutory periods to be confirmed with C01.

| Record class | Proposed retention | Tag | Note |
|---|---|---|---|
| KYC/CDD records | `≥ 5 years` after end of relationship | `[REG]` (confirm) | `aml-fica.md` §3.3 flags "commonly ≥5 years" for confirmation |
| Transaction records | `≥ 5 years` | `[REG]` (confirm) | same caveat |
| AML reports (CTR/STR/TPR) | `≥ 5 years` | `[REG]` (confirm) | FIC |
| Prudential (BA returns) | `≥ 5 years` `[ASSUMPTION]` | `[ASSUMPTION]` | PA expectations — confirm |
| Board minutes / resolutions | life of company + `7 years` `[ASSUMPTION]` | `[ASSUMPTION]` | Companies Act practice — confirm |
| Financial statements / audit | `7 years` `[ASSUMPTION]` | `[ASSUMPTION]` | confirm with C10/C01 |
| Tax records | `5 years` `[ASSUMPTION]` | `[ASSUMPTION]` | confirm with SARS guidance |
| AEOI (CRS/FATCA/CARF) | `≥ 5 years` `[ASSUMPTION]` | `[ASSUMPTION]` | `tax-governance.md` §4 |
| Privacy/consent records | while processing + `1 year` `[ASSUMPTION]` | `[ASSUMPTION]` | balance with POPIA minimisation |
| Breach records | `≥ 3 years` `[ASSUMPTION]` | `[ASSUMPTION]` | for auditability |
| Operational records | `3 years` `[ASSUMPTION]` | `[ASSUMPTION]` | recon, incidents, complaints |
| Program knowledge artifacts | indefinite (versioned) | `[ASSUMPTION]` | superseded, not deleted |
| **Exact statutory periods** | **confirm** | `[UNKNOWN]` | see `aml-fica.md` §8 |

> ⚠️ **Do not treat the above as final.** Where a period is `[ASSUMPTION]`, it is an internal working default. The FIC Act's exact retention period is expressly flagged as needing confirmation in `../../research/regulatory/aml-fica.md` §8.

---

## 4. POPIA vs retention tension

| Rule | Source |
|---|---|
| Keep records for the legally required period | FICA / tax / Companies Act `[REG]` |
| Do not keep personal information longer than necessary | POPIA condition 5 `[REG]` |

**Resolution:** apply **retention holds**. Once the legal period lapses, personal information is **de-identified or securely destroyed**, unless a hold (litigation, investigation, regulator request) applies. Disposal actions are logged.

---

## 5. Storage, security & access

- **Classification:** public / internal / confidential / restricted (client data = restricted).
- **Access:** least privilege; access reviews; audit logging.
- **No secrets/PII in program artifacts** `.stremiium/README.md` — the knowledge workspace must carry references, not real client data.
- **Cross-border:** offshore storage triggers POPIA s72 conditions `[REG]` (`../../research/regulatory/privacy-popia.md` §6).
- **Encryption** at rest and in transit (interlock C12).

---

## 6. Archival & disposal

```text
ACTIVE      → current working records
ARCHIVE     → closed, retained, low-touch (still searchable, still retained)
HOLD        → legal/regulatory hold; disposal suspended
DISPOSAL    → eligible + approved; destroyed securely; action logged
```

- **Archive** preserves *identity* and *retrievability* — you must be able to prove a record existed even after disposal eligibility.
- **Disposal** requires **dual authorisation** and a **disposal register** entry.
- **Program knowledge** is *archived*, never disposed while it has evidentiary value.

---

## 7. Roles & governance

| Role | Responsibility |
|---|---|
| Information Officer (POPIA s55) | records of processing, breach, PAIA `[REG]` |
| C03 Chief Librarian | knowledge/record taxonomy, retention schedule stewardship |
| C01 | legal interpretation, holds |
| C12 | security of records |
| C10 | financial-record retention |
| `crd-knowledge-flow` (SESS) | memory hygiene, knowledge bindings |

---

## 8. PAIA note

A PAIA Manual must be maintained; **private bodies submit an annual PAIA report** to the Information Regulator between **1 Apr – 30 Jun** `[REG]` (`../../research/regulatory/privacy-popia.md` §9). Requests are answered within 30 days `[REG]`.

---

## 9. Open items / unknowns

- `[UNKNOWN]` Exact FIC-retention period — confirm against consolidated Act (`../../research/regulatory/aml-fica.md` §8).
- `[ASSUMPTION]` All non-`[REG]` periods above.
- `[UNKNOWN]` POPIA 2025 amendment impacts on retention/disposal.

---

## 10. Cross-links

- Knowledge architecture → [`knowledge-architecture.md`](./knowledge-architecture.md)
- AML record rules → `../../research/regulatory/aml-fica.md` §3.3
- Privacy → `../../research/regulatory/privacy-popia.md`
- Governance → `../../research/regulatory/tax-governance.md`
- Ops records → `../c02-operations/process-catalogue.md`
