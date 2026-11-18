# Diagrams, Designs & Charts — C01-CARF-REPORTING-MAPPER

**Council:** C01 Legal-Compliance · **Format:** ASCII / Markdown (portable, no binary deps)

---

## 1. Primary flow diagram

```
USER ONBOARDING ──▶ [Tax residency self-certification]
                              │
                              ▼
                   [CARF due-diligence engine]
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
 [User identity]      [Transaction capture]   [Counterparty data]
        └─────────────────────┼─────────────────────┘
                              ▼
                   [CARF report assembly]
                              ▼
                   [SARS AEOI submission]
                              ▼
                   [5-year retention + audit]
```

---

## 2. Structured table — CARF data fields — the concrete reporting schema

| Field group | Specific fields | Source | Grade |
|---|---|---|---|
| User identification | Full name, residential address, date/place of birth, TIN(s), unique ID | CARF BRS | [FACT] [S17] |
| Jurisdiction | Jurisdiction(s) of residence; tax residency self-certification | CARF BRS | [FACT] [S17] |
| Reporting R-CASP | R-CASP legal name, registration/TIN, reporting period | CARF regs | [FACT] [S17] |
| Transaction type | Crypto↔fiat exchange, crypto-to-crypto transfer, receipt of crypto | CARF BRS | [FACT] [S17] |
| Asset type | Crypto-asset identifier (ticker/name), asset class | CARF BRS | [FACT] [S17] |
| Dates | Transaction date/time, reporting period (calendar year) | CARF BRS | [FACT] [S17] |
| Values | Fiat amount, crypto quantity, fair market value at transaction | CARF BRS | [FACT] [S17] |
| Counterparty | Counterparty name, wallet address, R-CASP/exchange identity | CARF BRS | [FACT] [S17] |

---

## 3. State machine (generic lifecycle for this domain)

```
[DRAFT] ──research──▶ [EVIDENCED] ──gate──▶ [RATIFIED]
   │                      │                    │
   └──gap──▶ [REVISE] ◀────┴──conflict──▶ [ARBITRATED by SC]
                                              │
                                              ▼
                                       [HANDED OFF]
```

---

## 4. ASCII bar chart — evidence grade distribution (illustrative)

```
FACT      ████████████████████████  (statutory + published sources)
EST       ████████████              (archive / hardware estimates)
INFER     ██████                    (artefact-dependent, REA pending)
UNKNOWN   ███                       (proprietary / server-side)
```

---

## 5. Decision tree — compliance gate

```
                    [Answer produced]
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        [Touches money?] [Touches data?] [Touches security?]
              │            │            │
              ▼            ▼            ▼
         [C01+C16+C10]   [C01 POPIA]   [C12 sentinel]
              └────────────┼────────────┘
                           ▼
                  [SC final arbitration]
                           ▼
                  [CEO → Board if critical]
```

---

## 6. Timeline — TBS phase rollout

```
T1 Foundation    ████████░░░░░░░░░░░░  COMPLETE
T2 Council Agents████████████████░░░░  COMPLETE
T3 Dept Agents   ████████████████░░░░  COMPLETE
T4 Workspace     ████████████████████  COMPLETE
T5 Security      ████████████████░░░░  GATES PENDING
T6 Configuration ████████████████████  COMPLETE
T7 Testing/QA    ████████████████████  COMPLETE
T8 Deployment    ████████░░░░░░░░░░░░  READY
```

---

## 7. Council dependency graph

```
       C01 Legal ◀──── C16 Banking ────▶ C10 Finance
         │                  │                   │
         ▼                  ▼                   ▼
       C12 Security ◀── C11 Dev ────▶ C13 Web3
         │                  │                   │
         └────────▶ C15 Product ◀──── C08 Design
                          │
                          ▼
                    C14 Customer
                          │
                          ▼
                    C02 Operations
```

---

**End of Diagrams — C01-CARF-REPORTING-MAPPER**
