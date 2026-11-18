# 06 — Regulatory & Risk

**Entity:** Flex.one · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19

---

## 1. Regulatory posture (US-centric, as verifiable)

| Regulator / regime | Instrument | Flex position | Evidence |
|---|---|---|---|
| **US OCC / state banking** | Bank charter / BaaS | Banking services via **Thread Bank**; cards via **Lead Bank** (partner banks hold the licences) | SEEN (third-party) |
| **US BSA / AML** | Bank Secrecy Act | Obligations flow to partner banks + Flex programme | INFERRED |
| **FinCEN** | MSB registration (if applicable) | UNKNOWN | UNKNOWN |
| **Card networks** | Visa rules | Programme via Visa | SEEN |
| **US state money transmission** | State MTLs | Likely via partner/registration | UNKNOWN |
| **Data/privacy** | (US state laws; GDPR if EU users) | UNKNOWN | UNKNOWN |

> **Key structural point:** Flex's regulated activity is **wrapped by partner banks** (Thread/Lead). The fintech sits in the **BaaS/programme-manager** layer. This is materially different from Stremiium's planned **own-licence** (FSP/CASP + bank-partner) model.

---

## 2. Card & stablecoin risks (the ones Stremiium inherits if it copies the mechanic)

| Risk | Description | Control |
|---|---|---|
| FX/liquidation risk | Stablecoin→fiat at POS; who bears slippage | Explicit treasury/FX policy |
| Price volatility | Crypto balance value fluctuates between auth and settlement | Buffer/margin |
| Issuer/BIN partner risk | Dependency on partner bank | Diversify; SLA |
| Chargebacks | Card scheme dispute liability | Reserve/chargeback provisioning |
| Network rules | Visa programme compliance | Programme-manager compliance |
| Travel Rule | Crypto transfers (FICA Directive 9 if SA) | Travel-Rule payload engine |
| ExCon | SA crypto/capital classification | Bank-partner ExCon compliance |

---

## 3. SA-relevance gap

| Aspect | Flex (US) | Stremiium (SA) |
|---|---|---|
| Issuing regime | US BaaS partner banks | SA bank + FSP/CASP |
| Crypto regulation | US framework(s) | FSCA CASP + FIC Directive 9 |
| Card network | Visa | Visa (SA) |
| Currency | USD-centric | ZAR-centric |
| Consumer protection | US rules | NCA/FAIS/CPA |

**Conclusion:** Flex's **regulatory wrapper cannot be transplanted** to SA. Only the **mechanics** (stablecoin-funded card, BaaS issuance, multi-currency) transfer, and even those need SA-specific licensing.

---

## 4. Regulatory gaps Stremiium can exploit

| Gap | Stremiium wedge |
|---|---|
| Flex absent from SA | SA-native ZAR card + stablecoin spend is an open niche |
| BaaS dependency (partner-bank limited) | Stremiium's own FSP/CASP licences give more control |
| No consumer protections tailored to SA | SA-compliant, transparent FX + NCA-aligned |
| No rewards/points | `$STM` spend rewards |

---

## 5. Open questions (UNKNOWN)

1. Flex's exact **licence/registration** footprint (MTL/MSB, states).
2. Whether any **SA entity** ("Flex.one") exists at all (anchor vs verified mismatch).
3. Exact **FX markup and interchange split** (not public).
4. Data-residency/POPIA posture (N/A if not operating in SA).
