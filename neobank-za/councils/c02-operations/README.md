# C02 — Operations Council

- **Council ID:** C02 (`c02-operations`)
- **Captain:** C02 VP Operations (`C02-vp-operations.agent.md`) — per `.stremiium/config/council-department-mapping.json`
- **Program:** Project Umoya — NeoBank ZA (codename only, not a brand decision)
- **Owner council RACI:** Accountable for run-the-bank execution; Consulted on change-the-bank delivery
- **Status:** Draft v1.0 (UnConsolidated) — 2026-10-16

> **Evidence discipline (inherited from PLAN.md §0).** Every number in this council's artifacts is a **planning assumption**, not measured data. Figures are tagged `[ASSUMPTION]` (modelled input), `[TARGET]` (internal objective), or `[UNVERIFIED]` (asserted by an external source, not yet corroborated). Nothing here is a service-level commitment to a customer until ratified by C01/C10 and SC.

---

## 1. Purpose

C02 owns the **operating machinery of the bank**: the people, processes, controls and vendors that make money move correctly, disputes get resolved, and the ledger always reconciles. In a neobank, operations is not a back-office cost centre bolted on at the end — it is a **first-class product surface**, because onboarding, payments, card management and complaint handling are experienced by customers as *the bank* itself.

This council sits at the intersection of:

- **C16 Banking-Fintech** — rails, licences, settlement participation, sponsor-bank economics.
- **C10 Finance-CFO** — reconciliation truth, treasury/liquidity, cost-to-serve.
- **C12 Cybersecurity-Intel** — fraud, disputes, incident response, financial-crime ops.
- **C01 Legal-Compliance** — FICA/POPIA/NCA/conduct obligations that generate operational work.
- **C14 Customer-Success** — the front door for complaints and service recovery.
- **C03 Admin-Knowledge** — process documentation and records retention.

---

## 2. Operating model: run-the-bank vs change-the-bank

We separate two flows deliberately, because conflating them is the classic failure mode of fast-growing fintechs: *the run flow is measured in minutes and errors, the change flow is measured in sprints and risk.*

| Dimension | **Run-the-Bank (RTB)** | **Change-the-Bank (CTB)** |
|---|---|---|
| Question answered | "Is it working, right now?" | "How should this work next quarter?" |
| Cadence | Continuous / intraday | Programme / sprint |
| Owner | Operations duty leads | C02 captain + C15/C06 delivery |
| Primary controls | Reconciliation, SLA, maker-checker | Change board, ADR, release gate |
| Failure cost | Customer harm + regulatory breach | Rework + delivery delay |
| Metric family | Throughput, accuracy, MTTR | Cycle time, adoption, def/rom cost |
| Output artifact | `service-levels.md` result set | `process-catalogue.md` change, ADRs |

**Bridging rule.** Any CTB change that alters a process in `process-catalogue.md` must come with (a) a named RTB owner, (b) updated controls, and (c) a service-level impact statement. No process ships into the run flow without an operational owner.

### 2.1 The three operational layers

```text
L1  CUSTOMER-FACING OPS      onboarding ops · complaints ops · dispute ops
    └─ L2  TRANSACTION OPS    payments ops · card ops · settlement ops · recon ops
        └─ L3  PLATFORM OPS   back-office · BPO/vendor mgmt · BCP · data ops
```

- **L1** is where the customer feels the bank. SLA exposure is highest here (`service-levels.md`).
- **L2** is where money and the ledger meet. Accuracy and cut-off discipline dominate.
- **L3** is where scale and resilience are bought. Vendor concentration and BCP risk dominate.

---

## 3. Scope of this council

**In scope:** reconciliation & suspense; settlement & clearing ops; chargeback/dispute lifecycle; card operations; complaints operations; back-office processing; BPO & procurement; vendor/third-party risk management; business continuity & operational resilience; operational process catalogue and service levels.

**Out of scope (route elsewhere):** regulatory interpretation (C01), treasury/liquidity decisions (C10), fraud *engineering* controls (C12), customer-facing support tier-1 (C14), systems engineering (C06/C11). See `../../workflows/agent-routing.md` for the routing contract.

---

## 4. File index

| File | Contents |
|---|---|
| [`README.md`](./README.md) | This overview + RTB/CTB operating model. |
| [`operating-model.md`](./operating-model.md) | Day-to-day run mechanics: reconciliation, settlements, chargebacks/disputes, card ops, complaints, back-office, BPO/procurement, vendor management, business continuity. |
| [`process-catalogue.md`](./process-catalogue.md) | Key operational processes: owner, inputs, outputs, controls. |
| [`service-levels.md`](./service-levels.md) | Internal SLAs and operational KPIs (all `[TARGET]` until ratified). |

---

## 5. Interlocks & governance hooks

| Interlock | Contract |
|---|---|
| C01 / C12 screening | FICA/POPIA/NCA conduct screens before any money/data process goes live — mirrors `.stremiium/governance/workflow-routing.md` §6 Compliance Hooks. |
| C10 reconciliation truth | Ops produces sub-ledger evidence; C10 owns the general-ledger truth and BA-return input (see `../c10-finance-cfo/financial-controls.md`). |
| C16 rails | Ops executes against clearing/settlement rules owned by C16 and the SARB (see `../../research/regulatory/payments-nps.md`). |
| C03 records | Every operational artefact is retained per `../c03-admin-knowledge/records-and-retention.md`. |
| Escalation | Council Captain → SC → Mychael → Board; Critical 1h · High 4h · Medium 24h · Low 72h (PLAN.md §5). |

---

## 6. Open items / unknowns

- `[UNKNOWN]` Final non-bank payment framework capital/tier thresholds affect the ops build-out for any non-bank entity (`../../research/regulatory/payments-nps.md` §8).
- `[UNKNOWN]` PASA/PSMB → SARB transition (milestone 11 Aug 2026) changes the clearing rulebook Ops must execute against (`../../research/regulatory/payments-nps.md` §1).
- `[ASSUMPTION]` A sponsor-bank arrangement is the launch RTB model until direct SARB settlement access is licensed.

_Codename `Project Umoya` is a working label only._
