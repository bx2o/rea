# 06 — Regulatory & Risk · TymeBank / GoTymeBank

## Regulator relationships

| Regulator | Mandate | TymeBank interface | Class |
|---|---|---|---|
| SARB — Prudential Authority | Prudential supervision (Banks Act 94 of 1990) | Registered bank **Sept 2017**; Pillar III published | [SEEN] |
| FSCA | Market conduct | Financial services provider | [SEEN] |
| National Credit Regulator | Consumer credit | NCR-registered (TymeAdvance/lending) | [SEEN] |
| Financial Intelligence Centre | AML/CFT (FICA) | Accountable institution | [SEEN, universal] |
| Information Regulator | POPIA | Responsible party | [SEEN, universal] |
| Regulators in PH / VN / ID markets | Host-country licensing | GoTyme/group entities licensed per market | [SEEN, partial] |

## Prudential disclosure posture

| Item | Finding | Class |
|---|---|---|
| Basel Pillar III | TymeBank publishes Pillar III (30 June 2025) | [SEEN] |
| CAR / Tier 1 / LCR | Disclosed in Pillar III (values not extracted) | [SEEN, value not extracted] |
| Minimum capital | Bank-licence process required ZAR 250m minimum capital at licensing | [SEEN] |

## Data-residency & privacy position

| Item | Finding | Class |
|---|---|---|
| Cloud | AWS (~85% of systems) — likely `af-south-1` for SA, unconfirmed | [INFERRED] |
| POPIA | SA-resident controller; s72 governs cross-border (Singapore/HQ, group shared services) | [INFERRED] |
| Biometric data | IDEMIA kiosk biometrics = sensitive processing needing explicit consent & safeguards | [INFERRED] |
| Strict residency guarantee | Not publicly stated | [UNKNOWN] |

## Key risks

| Risk | Exposure | Class |
|---|---|---|
| **Vendor concentration on Mambu** | Core banking is SaaS-dependent; outage/vendor risk | [INFERRED] |
| **Kiosk-partner dependency** | Distribution tied to Pick n Pay/Boxer/TFG retail health | [INFERRED] |
| **Thin deposit franchise per client** | Low balances per client; reliance on interchange | [INFERRED] |
| **Multi-jurisdiction complexity** | PH/VN/ID expansion multiplies compliance surface | [INFERRED] |
| **Unsecured lending credit risk** | TymeAdvance/lending exposure in a high-unemployment market | [INFERRED] |

## Gaps Stremiium can exploit

1. **No loyalty currency in SA** — TymeBank rewards are rate/fee mechanics only; a transferable `$STM` reward is a clean upgrade.
2. **Kiosk-bound onboarding** — physical kiosk dependency limits reach outside partner stores; a fully app-native onboarding (with digital ID/eKYC) can go further.
3. **Limited product depth** — few credit/investment products; Stremiium can add wallet/crypto/investment rails.
4. **Thin per-client value** — Stremiium can target higher engagement value with a rewards loop.

## Thin-data caveats

* No enforcement actions or FIC findings were identified in public search; absence of evidence is **not** absence. [UNKNOWN]
* Exact SARB/FSCA licence reference numbers for TymeBank should be pulled from the Pillar III/AFS. [UNKNOWN]
