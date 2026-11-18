# Diagrams, Designs & Charts — C13-TOKEN-GOVERNANCE-LEAD

**Council:** C13 Web3-Finance · **Format:** ASCII / Markdown (portable, no binary deps)

---

## 1. Primary flow diagram

```
USER ──▶ [MPC WaaS wallet] ──▶ [Polygon PoS / ZK-EVM]
                   │                        │
                   │                        ├─▶ [$STM ERC-20: fee discount]
                   │                        ├─▶ [Fan tokens / BLTs]
                   │                        └─▶ [Smart contracts: audited]
                   ▼
        [Travel Rule: originator+beneficiary data]
                   ▼
        [CARF reporting: R-CASP obligations]
```

---

## 2. Structured table — $STM token economics

| Parameter | Value | Purpose | Grade |
|---|---|---|---|
| Chain | Polygon PoS / ZK-EVM | Low-cost, high throughput | [FACT] [S24] |
| Standard | ERC-20 | Interoperability | [FACT] [S24] |
| Supply | 1,000,000,000 fixed | Scarcity | [FACT] [S1] |
| Buy-back & burn | 20% net quarterly fees → 50% retired | Value accrual | [FACT] [S1] |
| Fee discount | 25% when fees settled in $STM | Utility driver | [FACT] [S1] |
| Wallet | Non-custodial MPC WaaS | User custody | [FACT] [S24] |

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

**End of Diagrams — C13-TOKEN-GOVERNANCE-LEAD**
