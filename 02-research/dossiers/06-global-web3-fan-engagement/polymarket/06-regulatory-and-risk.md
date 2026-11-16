# Polymarket — 06 Regulatory & Risk

## 1. Home-market posture (US)

| Regulator / regime | Relationship | Class |
|---|---|---|
| **US CFTC** | 2022 settlement for operating an unregistered facility offering off-exchange event-based binary options; penalty (reported) + wind-down of US-facing activity; subsequent US geoblock | SEEN (CFTC order) |
| **US re-entry** | Reported return via an acquired CFTC-licensed venue (DCM) | SEEN-as-reported — verify on CFTC register |
| **State gaming laws** | Prediction markets can collide with state gambling regimes | INFERRED |
| **USDC/stablecoin** | Collateral exposes platform to stablecoin regulatory risk | INFERRED |
| **AML/CFT** | KYC on fiat ramps; crypto AML obligations | INFERRED |

> The **CFTC order number, exact penalty, and acquired-venue identity** must be read from
> the CFTC register before citation. The penalty figure here is **as reported**.

## 2. Structural risk register

| Risk | Description | Severity |
|---|---|---|
| Regulatory (event contracts) | Binary options on events are squarely regulated; unlicensed operation = enforcement | **Critical** |
| Geoblock arbitration | Blocked users route around geoblocks → ongoing legal exposure | High |
| Oracle manipulation | UMA resolution disputes / proposed-outcome attacks | High |
| Stablecoin dependence | USDC depeg or regulatory action | Medium |
| Event concentration | Volume collapses between major events | High |
| State vs federal | Patchwork of state gambling/prediction rules | High |

## 3. South Africa comparison

| SA regime | Relevance to a Polymarket-like product | Class |
|---|---|---|
| **NGB / provincial gambling boards** (National Gambling Act 7 of 2004) | Prediction markets on events look like **betting/event wagering**; likely require a **provincial bookmaker/totalisator licence**. Online gambling licensing under the National Gambling Amendment Bill remains evolving. | SEEN (statute) / INFERRED (application) |
| **FSCA** (FAIS; crypto assets = financial products 2022; CASP licensing) | If outcome shares are marketed as derivative-like instruments, they may be **financial products**; a CASP/FSP or derivative licence could apply. Structural risk is high. | SEEN (regime) / INFERRED |
| **FSCA / FMA (derivatives)** | Binary event contracts are structurally derivative-like → potential exchange/ODP licensing under the Financial Markets Act regime | INFERRED |
| **FICA** (Act 38 of 2001; Directive 9 Travel Rule) | Deposit/withdraw + crypto settlement triggers KYC/Travel Rule | SEEN |
| **POPIA** (Act 4 of 2013) | Trading-activity profiling = personal information; lawful basis required | SEEN |
| **SARB / FinSurv / Exchange Control** | Cross-border USDC/ZAR flows need FinSurv attention | SEEN (regime) |
| **Consumer Protection Act 68 of 2008** | Probability framing must not mislead; loss-risk disclosure required | SEEN (regime) |

## 4. Gaps Stremiium can exploit

1. **Licensed-by-design:** build prediction/event contracts *inside* a licensed perimeter (provincial bookmaker + FSCA-aligned) rather than offshore-then-geoblock — Polymarket's exact failure mode.
2. **Non-wagering framing where possible:** position as information/skill markets with clear, disclosed rules — but assume regulatory treatment is wagering-like in SA.
3. **Behavioural rewards overlay:** wrap participation in `$STM`/FanCash so retention doesn't depend solely on PnL (Polymarket's weakness).
4. **ZAR-first settlement:** avoids USDC depeg + exchange-control friction for SA users.

## 5. Red lines

* Never assert a CFTC penalty figure, order number, or licence without reading the register.
* Never market prediction participation as investment advice or guaranteed return.
* Do not launch any prediction line in SA without explicit licensing review by C01.
