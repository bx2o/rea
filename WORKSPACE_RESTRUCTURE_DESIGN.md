# Workspace Restructure Design Document

**Author:** Kilo (Software Engineer)
**Date:** 2026-11-16
**Status:** Design Proposal — No Changes Implemented

---

## Executive Summary

This document proposes a cleaner folder structure for four zones in `/workspace/app`:
- `04-engineering/` — Reverse engineering toolkit & analysis
- `03-architecture/` — Platform design & target-system specifications
- `05-deliverables/` — Competitive journeys, synthesis, charts
- `99-archive/` — Historical backups & scratch space

**Constraints honored:**
- Zero deletions; all files preserved
- `rea/` remains at repo root (vendor/test-path compatibility)
- `.stremiium/` and `.github/` remain at repo root
- Target NeoBank stack (Mambu/BankservAfrica/Polygon/Kafka/PostgreSQL) and 16-council model are fixed reference points

---

## Decision Log

| Question | Decision | Rationale |
|----------|----------|-----------|
| **(a) Split 03-architecture?** | **YES** — Create `06-architecture/` for platform-design (generic/reusable patterns); keep `03-architecture/` for target-system specs (NeoBank-specific) | Separates reusable platform architecture from target-specific implementation contracts. Enables platform-design to be referenced by other programs. |
| **(b) Add `rea-engine/` under 04-engineering?** | **NO** — Keep `rea/` at repo root; reference via relative path `../../rea` | Mandated by constraints. The rea-business-toolkit already references root `rea/` via scripts. Adding a subdir would create confusion/duplication. |
| **(c) Consolidate 3 stremiium trees?** | **YES** — Merge into single canonical backup at `99-archive/canonical-backups/stremiium-agent-os/` | Three near-identical trees waste space and create ambiguity. Preserve all unique content via deduplication strategy (see §4). |
| **(d) Rehome 3 `00-*` synthesis files?** | **YES** — Move to new `05-deliverables/synthesis/` | These are cross-cutting analytical syntheses, not individual journey summaries. Deserves dedicated namespace. |

---

## Proposed Directory Trees

### 1. ZONE `04-engineering/` — Reverse Engineering & Tooling

```
04-engineering/
├── README.md
├── rea-toolkit/
│   └── rea-business-toolkit/
│       ├── README.md
│       ├── scripts/
│       │   ├── app-surface-recon.mjs
│       │   ├── evidence-pack.mjs
│       │   ├── loyalty-teardown.mjs
│       │   ├── network-capability-map.mjs
│       │   ├── pricing-diff.mjs
│       │   ├── rea-run.mjs
│       │   ├── tools-catalogue.mjs
│       │   └── web-stack-recon.mjs
│       ├── queries/
│       │   └── business-question-matrix.md
│       └── out/
│           ├── catalogue/
│           │   ├── rea-help.txt
│           │   ├── rea-llms.txt
│           │   └── rea-llms-full.txt
│           └── evidence/
│               ├── inspect-artifact-frida-binding.json
│               ├── inspect-artifact-main-js.json
│               └── js-application-analysis.summary.json
└── reverse-engineering/
    ├── README.md
    ├── custom-tools/
    │   ├── README.md
    │   ├── authoring-guide.md
    │   ├── tool-contract-template.md
    │   ├── example-banking-tools.md
    │   └── external-orchestration-tools.md
    ├── playbooks/
    │   ├── README.md
    │   ├── android-banking-app-analysis.md
    │   ├── backend-and-api-reconstruction.md
    │   ├── competitive-feature-teardown.md
    │   ├── evidence-ledger-template.md
    │   ├── fraud-and-security-review.md
    │   ├── ios-app-analysis.md
    │   ├── network-capture-analysis.md
    │   └── web-banking-analysis.md
    ├── rea-analysis/
    │   ├── README.md
    │   ├── architecture.md
    │   ├── demonstration-bankapp.md
    │   ├── methodology.md
    │   ├── mcp-tool-names.tsv
    │   ├── mcp-vs-cli.md
    │   ├── setup-and-verification.md
    │   └── tool-catalog.md
    └── targets/
        ├── target-register.md
        ├── fixtures/
        │   └── demo-bankapp/
        │       ├── package.json
        │       └── src/
        │           ├── auth/login.js
        │           ├── core/http.js
        │           ├── kyc/verify.js
        │           ├── main.js
        │           ├── payments/pay.js
        │           └── preload.js
        └── findings/
            ├── README.md
            └── demo-bankapp/
                └── evidence-export.json
```

**Changes from current:**
- No structural changes (already clean)
- Explicit `README.md` at each leaf for navigation
- `rea/` at root referenced via `../../rea` in toolkit scripts (unchanged)

---

### 2. ZONE `03-architecture/` — Target-System Specifications (NeoBank-Specific)

```
03-architecture/
├── README.md
└── target-system/
    ├── README.md
    ├── 00-SYSTEM-OVERVIEW.md
    ├── DATA-MODEL-CONTRACTS.md
    ├── REA-Tooling-Analysis.md
    ├── core-banking/
    │   ├── README.md
    │   ├── stremiium-rea-banking-plugin.ts
    │   └── stremiium-transaction-model.ts
    ├── diagrams/
    │   ├── README.md
    │   └── system-context.md
    ├── payment-rails/
    │   └── README.md
    ├── regulatory-compliance/
    │   ├── README.md
    │   └── south-africa-regulatory-hierarchy.md
    └── web3-bridge/
        └── README.md
```

**Changes from current:**
- **Renamed from `03-architecture/` (old) to `03-architecture/target-system/`** — Now exclusively holds NeoBank-target contracts, data models, and integration specs
- `platform-design/` **moved to new `06-architecture/`** (see below)
- All target-system files preserved in place

---

### 3. ZONE `06-architecture/` — Platform Design (Generic/Reusable Patterns) **NEW**

```
06-architecture/
├── README.md
└── platform-design/
    ├── README.md
    ├── data/
    │   ├── README.md
    │   ├── ai-and-ml.md
    │   ├── analytics-and-reporting.md
    │   ├── data-governance.md
    │   └── data-model.md
    ├── domain-model/
    │   ├── README.md
    │   ├── aggregates.md
    │   ├── domain-events.md
    │   ├── entities.md
    │   ├── ledger-model.md
    │   └── money-and-currency.md
    ├── integrations/
    │   ├── README.md
    │   ├── core-banking-build-vs-buy.md
    │   ├── kyc-and-identity.md
    │   ├── open-banking-and-open-finance.md
    │   ├── payments-rails.md
    │   └── third-party-catalogue.md
    ├── platform/
    │   ├── README.md
    │   ├── deployment-topology.md
    │   ├── devops-and-sdlc.md
    │   └── observability.md
    ├── security/
    │   ├── README.md
    │   ├── attack-surface-register.md
    │   ├── aml-transaction-monitoring.md
    │   ├── controls-catalog.md
    │   ├── cryptography-and-key-management.md
    │   ├── fraud-risk-engine.md
    │   ├── iam-and-secrets.md
    │   ├── incident-response.md
    │   ├── privacy-by-design.md
    │   ├── secure-sdlc.md
    │   ├── third-party-and-cloud-risk.md
    │   └── threat-model-stride.md
    └── system-design/
        ├── README.md
        ├── bounded-contexts.md
        ├── component-map.md
        ├── container-diagram.md
        ├── context-diagram.md
        ├── non-functional-requirements.md
        └── technology-selection.md
```

**Changes from current:**
- **New zone `06-architecture/`** created at repo root (parallel to `03-architecture/`)
- Entire `platform-design/` tree moved here from old `03-architecture/platform-design/`
- Now serves as reusable architecture pattern library for any program
- `03-architecture/target-system/` can reference patterns via `../../06-architecture/platform-design/...`

---

### 4. ZONE `05-deliverables/` — Competitive Intelligence & Synthesis

```
05-deliverables/
├── README.md
├── charts/
│   └── pricing-fee-matrix.csv
├── summaries/
│   ├── README.md
│   ├── absa-journey.md
│   ├── bank-zero-journey.md
│   ├── capitec-journey.md
│   ├── discovery-bank-journey.md
│   ├── ebucks-journey.md
│   ├── flex-one-journey.md
│   ├── fnb-journey.md
│   ├── jpmorgan-chase-journey.md
│   ├── jpmorgan-private-bank-and-kinexys-journey.md
│   ├── luno-journey.md
│   ├── morgan-stanley-journey.md
│   ├── nedbank-journey.md
│   ├── standard-bank-journey.md
│   ├── tymebank-gotyme-journey.md
│   └── valr-journey.md
└── synthesis/                          **NEW**
    ├── README.md
    ├── 00-FAN-ENGAGEMENT-COMPETITOR-TEARDOWN.md
    ├── 00-GLOBAL-NEOBANK-MODELS.md
    └── 00-SA-NEOBANK-AND-CRYPTO-COMPARISON.md
```

**Changes from current:**
- **New `synthesis/` subdirectory** created
- Three `00-*` synthesis files moved from `summaries/` → `synthesis/`
- `summaries/` now contains only individual competitor journey teardowns (15 files)
- Clear separation: `summaries/` = raw journeys; `synthesis/` = cross-cutting analysis

---

### 5. ZONE `99-archive/` — Historical Backups & Scratch Space

```
99-archive/
├── README.md
├── source-bundles/
│   └── stremiium.zip
├── extracted-snapshots/
│   └── stremiium-agent-os.full-backup/
│       └── .stremiium/
│           ├── agents/
│           ├── config/
│           ├── evaluations/
│           ├── execution/
│           ├── governance/
│           ├── memory/
│           ├── observability/
│           ├── policies/
│           ├── recovery/
│           ├── registry/
│           ├── skills/
│           ├── templates/
│           └── workflows/
├── canonical-backups/                  **NEW — Consolidated canonical backup**
│   └── stremiium-agent-os/
│       └── .stremiium/
│           ├── agents/
│           ├── config/
│           ├── evaluations/
│           ├── execution/
│           ├── governance/
│           ├── memory/
│           ├── observability/
│           ├── policies/
│           ├── recovery/
│           ├── registry/
│           ├── skills/
│           ├── templates/
│           └── workflows/
└── tooling-scratch/
    └── trae-html-share-packages/       **PRESERVED — Original scratch space (read-only)**
        ├── .stremiium/                 ← Original tree #1 (preserved)
        ├── _stremiium_canonical/       ← Original tree #2 (preserved)
        │   └── .stremiium/
        └── stremiium_extracted_full_backup/  ← Original tree #3 (preserved)
            └── .stremiium/
```

**Changes from current:**
- **New `canonical-backups/stremiium-agent-os/`** — Single deduplicated canonical backup
  - Created by merging the three near-identical trees from `tooling-scratch/trae-html-share-packages/`
  - Deduplication strategy: keep newest/unique files; preserve all unique content via `diff`/`rsync -av --ignore-existing`
  - Source trees in `tooling-scratch/` **remain untouched** (constraint: no deletions)
- `extracted-snapshots/stremiium-agent-os.full-backup/` — Preserved as-is (original full backup)
- `source-bundles/stremiium.zip` — Preserved as-is
- `tooling-scratch/` — Preserved entirely as historical scratch space

---

## Migration Notes (For Implementation Phase)

### Phase 1: Create New Zones (No File Moves)
```bash
mkdir -p /workspace/app/06-architecture/platform-design
mkdir -p /workspace/app/05-deliverables/synthesis
mkdir -p /workspace/app/99-archive/canonical-backups/stremiium-agent-os/.stremiium
```

### Phase 2: Move `platform-design/` → `06-architecture/`
```bash
mv /workspace/app/03-architecture/platform-design /workspace/app/06-architecture/
# Update any internal references from ../platform-design/ to ../../06-architecture/platform-design/
```

### Phase 3: Move Synthesis Files
```bash
mv /workspace/app/05-deliverables/summaries/00-*.md /workspace/app/05-deliverables/synthesis/
```

### Phase 4: Create Canonical Backup (Deduplication)
```bash
# Use rsync to merge three trees, preserving unique files
cd /workspace/app/99-archive/tooling-scratch/trae-html-share-packages
rsync -av --ignore-existing .stremiium/ ../../../canonical-backups/stremiium-agent-os/.stremiium/
rsync -av --ignore-existing _stremiium_canonical/.stremiium/ ../../../canonical-backups/stremiium-agent-os/.stremiium/
rsync -av --ignore-existing stremiium_extracted_full_backup/.stremiium/ ../../../canonical-backups/stremiium-agent-os/.stremiium/
# Verify: diff -r canonical-backups/stremiium-agent-os/.stremiium tooling-scratch/... (should show only duplicates)
```

### Phase 5: Add README.md Files
- Add `README.md` to every new directory explaining purpose and navigation
- Update root `README.md` (if exists) or create zone-level READMEs

---

## Cross-Reference Map (Post-Restructure)

| From | To | Reference Pattern |
|------|-----|-------------------|
| `03-architecture/target-system/` | `06-architecture/platform-design/` | `../../06-architecture/platform-design/...` |
| `04-engineering/rea-toolkit/` | `rea/` (root) | `../../rea/...` |
| `05-deliverables/synthesis/` | `05-deliverables/summaries/` | `../summaries/...` |
| `01-program/councils/` | `03-architecture/target-system/` | `../../03-architecture/target-system/...` |
| `01-program/councils/` | `06-architecture/platform-design/` | `../../06-architecture/platform-design/...` |

---

## Validation Checklist

- [ ] All existing files accounted for in new trees
- [ ] No file deletions proposed
- [ ] `rea/` remains at repo root
- [ ] `.stremiium/` and `.github/` remain at repo root
- [ ] Three synthesis files rehomed to `05-deliverables/synthesis/`
- [ ] Three duplicate stremiium trees consolidated to one canonical backup
- [ ] `platform-design/` separated from `target-system/` into new `06-architecture/`
- [ ] All directory trees are complete and specific

---

## Appendix: Current vs. Proposed Zone Count

| Zone | Current | Proposed | Change |
|------|---------|----------|--------|
| 01-program | ✓ | ✓ | Unchanged |
| 03-architecture | ✓ | ✓ (target-system only) | Split |
| 04-engineering | ✓ | ✓ | Unchanged |
| 05-deliverables | ✓ | ✓ (+ synthesis/) | Extended |
| 06-architecture | — | ✓ (platform-design) | **New** |
| 99-archive | ✓ | ✓ (+ canonical-backups/) | Extended |

**Total zones:** 6 (was 5, +1 new architecture zone)

---

*End of Design Document*