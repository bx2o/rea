# T1 phases · phase-plan.md

**Task:** T1.0 Environment & REA Setup
**Primary council:** C06 Engineering-Infra
**Phase owner legend:** Captain in parentheses.

---

## T1.1 — REA Doctor & Provider Verification
**Status:** `PENDING` · **Owner:** C11 (`C11-dev-engineering-captain`) · **Co-sign:** C12 (`C12-cybersecurity-intel-captain`)

**Deliverable:** `task/T1-infrastructure-setup/implementation/rea-doctor-contract.md`

Steps:
1. Install REA: `npx rea-agents setup` (pin version once resolvable).
2. Run `rea doctor --verbose`; capture provider list, model routing, tool availability.
3. Record exit codes, warnings, missing providers; declare the supported capability surface.
4. Define the machine-readable **doctor contract** (expected fields + pass/fail thresholds).
5. C12 validates that no secret material is captured in the transcript.

**Exit:** doctor contract committed; provider/model health documented; MCP transport reachability stated.

## T1.2 — Custom Banking REA Tool Engine
**Status:** `ACTIVE` · **Owner:** C11 · **Review:** C16 (`C16-banking-fintech-captain`), C06

**Deliverable:** `architecture/core-banking/stremiium-rea-banking-plugin.ts`

Steps:
1. Model the CBS signature taxonomy: Mambu / Finacle / BaNCS / Temenos / in-house.
2. Define payment-rail markers: BankservAfrica, PayShap, RTC/EFT, SWIFT, ISO 20022.
3. Implement detection rules keyed to string/bytecode signatures (for later REA runs).
4. Expose plugin as a REA tool with a typed result schema.
5. Contract-test against the `rea doctor` version from T1.1.

**Exit:** plugin compiles, exposes typed CBS markers, passes contract tests.

## T1.3 — Evidence Ledger & Honesty Gate
**Status:** `ACTIVE` (implicit) · **Owner:** C03 (`C03-chief-librarian`) · **Audit:** C12

**Deliverable:** ledger schema note in `context/` + validation rule set.

Steps:
1. Formalise `evidence-ledger.json` (§6) fields and enum values.
2. Enforce SEEN / INFERRED / UNKNOWN vocabulary in all dossier files.
3. Publish the REA-not-installed cap as a standing constraint banner.

**Exit:** every dossier is required to carry a conformant ledger; C12 gate defined.

## T1.4 — MCP Transport & Agent Wiring
**Status:** `ACTIVE` · **Owner:** C06 · **Support:** C11

**Deliverable:** transport note in `implementation/` + tool registration.

Steps:
1. Register REA as an MCP server for council agents.
2. Define invocation contract: `npx -y rea-agents@latest analyze-javascript-application <path> --json`.
3. Publish fallback (pinned local CLI) if MCP transport is unreachable in sandbox.

**Exit:** at least one council agent can invoke REA (or the documented fallback) end-to-end.

---

## Phase dependency order

```
T1.1 (doctor) ──► T1.2 (plugin) ──► T1.4 (transport wiring)
      └────────► T1.3 (ledger/honesty gate) ──► gates all T2–T7 outputs
```
