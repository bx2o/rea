# 06 — Regulatory & Risk

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

---

## 1. Regulator relationship map

| Regulator / regime | Instrument | Luno position | Evidence |
|---|---|---|---|
| **FSCA** (Financial Sector Conduct Authority) | FAIS — crypto classified a financial product (Oct-2022) | FSP **No. 53314**; CASP authorisation reported | SEEN (Luno legal disclosures) |
| **NCR** (National Credit Regulator) | National Credit Act 34 of 2005 | Registered credit provider **NCRCP22123** | SEEN (Luno legal disclosures) |
| **FIC** (Financial Intelligence Centre) | FIC Act 38 of 2001 — accountable institution; **Directive 9** (Travel Rule) | Crypto transfers in scope | SEEN (FIC Directive 9; Luno casas-in-scope) |
| **SARB FinSurv** | Exchange Control (ExCon) — crypto deemed "capital" / allowance rules | Fiat ramps constrained by ExCon | INFERRED (statutory context) |
| **Information Regulator** | POPIA | Data protection obligations | INFERRED (statutory) |
| **Foreign regulators** | EU (MiCA-adjacent), Nigeria, Malaysia, Indonesia, etc. | Per-market licensing | SEEN (global footprint) |
| **Auditor** | ISRS 4400 (Revised) PoR AUP | Moore | SEEN (report) |

---

## 2. FICA Directive 9 — Travel Rule (the key compliance mechanic)

| Element | Detail | Evidence |
|---|---|---|
| Issued | **15 November 2024** by the FIC (s. 43A(2) FIC Act) | SEEN (FIC media release) |
| Effective | **30 April 2025** | SEEN (FIC) |
| Scope | All crypto-asset transfers: CASP↔CASP and CASP↔**unhosted (self-custody) wallets** | SEEN (PCC 61 of 2026) |
| Threshold | **R5,000** per single transfer | SEEN (PCC 61 / compliance guidance) |
| < R5,000 | Reduced data set; verification not required absent suspicion | SEEN |
| ≥ R5,000 | Full originator + beneficiary data incl. identity/passport, residential address, distributed-ledger address | SEEN |
| Guidance | **PCC 61 of 2026** — guidance for CASPs on Travel-Rule implementation | SEEN (FIC) |
| Enforcement | Action may follow where an accountable institution fails | SEEN (ENSafrica commentary) |

**Implication for Luno:** every external send/receive must carry Travel-Rule payloads; unhosted-wallet transfers are in scope → Luno must collect and (at ≥R5k) verify beneficiary data. This is a **material operating cost** for Stremiium to plan for at launch.

---

## 3. Custody & reserves risk

| Risk | Description | Mitigation (observed) | Residual |
|---|---|---|---|
| Key compromise | Hot-wallet theft | Multi-sig + dual auth + RBAC + biometric ceremony | Hot-wallet tail risk remains |
| Insolvency | Platform unable to honour withdrawals | Monthly Merkle PoR (Moore, ISRS 4400) | Snapshot-only; assets could be encumbered |
| Custodian risk | Reliance on BitGo/Fireblocks | Diversified custody partners | Third-party concentration |
| Segregation | Customer vs corporate assets | 1:1 reserves stated | Not independently audited as a full audit opinion |
| Parent contagion | DCG group stress | Luno operated independently | Perceived, not contractual, separation |

---

## 4. Data-residency & privacy

| Dimension | Position | Class |
|---|---|---|
| POPIA compliance | Required (SA data subjects) | INFERRED (statutory) |
| Data residency | SA customer data likely processed in SA/UK/EU clouds | UNKNOWN (not published) |
| Cross-border transfer | Group entities span jurisdictions → cross-border flows | INFERRED |
| PoR privacy | Merkle-tree preserves per-account confidentiality | SEEN (report) |

---

## 5. Exchange-control (ExCon) context (SA-wide, applies to Luno)

| Rule | Effect |
|---|---|
| Crypto treated as capital under ExCon / SARB position | Transfers have allowance implications |
| Fiat on/off-ramp via SA banks | Requires bank AML/KYC cooperation |
| Travel Rule (Directive 9) | Adds originator/beneficiary verification burden |

---

## 6. Regulatory gaps Stremiium can exploit

| Gap in Luno | Stremiium wedge |
|---|---|
| PoR is monthly snapshot, not continuous | Real-time on-chain proof (Polygon) → stronger trust story |
| No explicit SA data-residency commitment surfaced | Stremiium `af-south-1` (Cape Town) residency is a compliance selling point |
| Custodial by default (no self-custody option) | Non-custodial MPC wallet addresses custody-conscious users |
| Limited SA-ownership/B-BBEE signalling | SA-domiciled, B-BBEE-led positioning |
| Reliance on bank rails for ramp (ExCon-bound) | PayShap-native + licensed-bank partnership reduces rail dependency |

---

## 7. Open regulatory questions (UNKNOWN)

1. Exact FSCA licence **conditions** attached to Luno's CASP/FSP authorisation (not public).
2. Whether Luno holds any **SARB/FinSurv** approval for specific cross-border flows (not public).
3. Whether the staking product is a **regulated** product (securities/collective-investment character) under current FSCA view.
4. Data-residency and POPIA cross-border transfer agreements (not public).
