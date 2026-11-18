# Diagrams, Designs & Charts — SUB-C04-STRAT-NEO-001

**Council:** C04 Strategy-Growth · **Format:** ASCII / Markdown (portable, no binary deps)

---

## 1. Primary flow diagram

```
CUSTOMER PAYMENT ──▶ [GraphQL + Kong gateway]
                            │
                            ▼
                   [Mambu CBS (af-south-1)]
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        [PayShap]      [RTC / EFT]   [ISO 20022]
              └─────────────┼─────────────┘
                            ▼
                  [BankservAfrica clearing]
                            ▼
                  [Settlement + ledger post]
                            ▼
                  [Kafka → rewards engine]
```

---

## 2. Structured table — Payment rails and settlement methods

| Rail | Operator | Use case | Settlement | Grade |
|---|---|---|---|---|
| PayShap | BankservAfrica | Instant retail payments | Real-time | [FACT] [S19] |
| RTC | BankservAfrica | Real-time clearing | Real-time | [FACT] [S19] |
| EFT | BankservAfrica | Batch transfers | End-of-day | [FACT] [S19] |
| ISO 20022 | SWIFT / Bankserv | Messaging standard | n/a | [FACT] [S19] |
| On-chain (Polygon) | $STM / stablecoins | Web3 settlement | Block finality | [FACT] [S24] |

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

**End of Diagrams — SUB-C04-STRAT-NEO-001**
