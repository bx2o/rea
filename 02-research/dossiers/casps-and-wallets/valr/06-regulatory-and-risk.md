# 06 — Regulatory & Risk

**Entity:** VALR · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

---

## 1. Regulator relationship map

| Regulator / regime | Instrument | VALR position | Evidence |
|---|---|---|---|
| **FSCA** | FAIS (crypto as financial product); CASP licensing | **CASP Category I & II** (reported ~2025); additional **FSP licence** | SEEN (VALR blog / media) |
| **FSCA** | ODP (OTC derivatives) licensing | **Over-the-Counter Derivatives Provider licence** (reported 20 Oct 2025) | SEEN (VALR blog) |
| **FIC** | FIC Act; **Directive 9** Travel Rule (R5,000) | Crypto transfers in scope | SEEN (FIC Directive 9) |
| **SARB FinSurv** | Exchange Control | ZAR ramps constrained | INFERRED (statutory) |
| **EU authorities** | MiCA-adjacent | Approval to serve **parts of the EU** (reported) | SEEN (VALR blog) |
| **Information Regulator** | POPIA | Data protection | INFERRED (statutory) |

---

## 2. Directive 9 — Travel Rule obligation

| Element | Detail | Evidence |
|---|---|---|
| Effective | 30 April 2025 | SEEN (FIC) |
| Threshold | R5,000 single transfer | SEEN |
| Scope | CASP↔CASP and CASP↔unhosted wallets | SEEN (PCC 61) |
| Impact | Originator/beneficiary data transmission + (≥R5k) verification | SEEN |

VALR, as a licensed CASP handling both ZAR fiat and crypto, must implement Travel-Rule payloads on every external transfer. **Same obligation binds Stremiium.**

---

## 3. Derivatives & leverage risk

| Risk | Description | Control (observed/inferred) |
|---|---|---|
| Leverage losses | Perp/margin (up to ~5–10x, site references higher) | Margin engines, liquidation |
| ODP conduct | Derivatives conduct standards (FAIS) | Licensed ODP (reported) |
| Retail suitability | High-leverage retail harm | Suitability/appropriateness checks (INFERRED) |
| Counterparty | OTC/lending counterparty risk | Desk controls (UNKNOWN) |

> **Careful:** exact max leverage figures vary by source (5x spot margin; ~10x futures per aggregators; VALR's own API page references up to 60x "across all major crypto pairs" marketing copy). Recorded as `UNKNOWN/conflicting`.

---

## 4. Custody & operational risk

| Risk | Detail | Residual |
|---|---|---|
| Custodial key risk | Platform holds keys | Hot-wallet tail risk |
| Qualified custody | Not publicly disclosed | UNKNOWN |
| Segregation | Sub-accounts segregate end-client funds (business-level) | Legal/insolvency segregation UNKNOWN |
| PoR | No public monthly Merkle PoR program surfaced (unlike Luno) | Transparency gap |
| Exchange-control | ZAR ramp dependency | Bank-partner dependency |

---

## 5. Data-residency & privacy

| Dimension | Position | Class |
|---|---|---|
| POPIA | Required | INFERRED |
| Data residency | SA/EU cloud likely | UNKNOWN |
| Cross-border | EU approval → cross-border flows | INFERRED |

---

## 6. Regulatory gaps Stremiium can exploit

| VALR gap | Stremiium wedge |
|---|---|
| No public PoR transparency program | Real-time on-chain reserve attestation |
| Custodial-only | Non-custodial MPC option |
| No consumer/banking licence bundle (deposit/credit) | NeoBank licence stack + FSP/CASP |
| No B-BBEE/SA-ownership signalling | Domestic ownership as compliance selling point |
| Complex, trader-oriented fee tiers | Simple transparent `$STM` fee discounts |

---

## 7. Open regulatory questions (UNKNOWN)

1. Exact **FSCA licence conditions** attached to VALR's CASP Category I/II and ODP licences.
2. The **scope** of VALR's EU approval (which passport/MiCA route; which member states).
3. Whether VALR holds a **separate custody licence** or relies on its CASP/FSP status for custody.
4. Any **enforcement** or public censure history (none surfaced in reviewed sources).
