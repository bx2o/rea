# Tier 2 — Technical Specialist Councils (C11–C13)

**Derived from:** `.stremiium/agents/council-agents/C11…C13*.agent.md`, `.stremiium/config/council-department-mapping.json`, `.stremiium/config/councils/COUNCIL_REGISTRY.json`, `.stremiium/registry/master-registry.json`
**Tier:** `TIER-2-TECHNICAL` (domain experts; 3 councils) [SEEN — `COUNCIL_REGISTRY.json`:8]
**Canonical status:** `.stremiium/` is authoritative; this file is a derived view.

> Fields tagged `[INFERRED]` are derived mappings (e.g. T-task ownership) rather than literal
> statements in the consolidated files. Record counts are from `master-registry.json`.

---

## Tier summary

| ID | Council | Captain agent file | Workforce department | Registry records | Config authority |
|---|---|---|---|---|---|
| C11 | Dev-Engineering | `C11-dev-engineering-captain.agent.md` | c11-dev-engineering | 15 | delivery authority |
| C12 | Cybersecurity-Intel | `C12-cybersecurity-intel-captain.agent.md` | c12-cybersecurity-intel | 25 | security authority |
| C13 | Web3-Finance | `C13-web3-finance-captain.agent.md` | c13-web3-finance | 19 | web3/protocol authority |

All three are `"status": "active"` and report to Sparkling Curious. Tier-2 councils are the
**execution engines** for the tiers above: they translate strategy (tier 1) into software,
security posture and on-chain systems, and they feed tier-3 product councils.

---

## C11 — Dev-Engineering

- **ID / Name:** C11 / Dev-Engineering-Squad.
- **Captain:** `C11-dev-engineering-captain` (Dev-Engineering-Squad-Captain / The-Engineer).
  File: `.stremiium/agents/council-agents/C11-dev-engineering-captain.agent.md`.
- **Mandate:** full-stack delivery, React Native, API design, REA JS analysis, QA, technical
  excellence. [SEEN — `PROGRAM_BRIEF.md`:44]
- **Sub-squads (SEEN):** department `c11-dev-engineering` with subbenches
  `SUB-db-reliability-engineer.c11`, `SUB-package-security-scanner.c11`,
  `SUB-performance-engineer.c11`; also staffs `crd-deployment` (with C06) and
  `crd-engineering-product`.
- **RACI:** **A** = C11 captain; depends on C06, C12; coordinates with C15, C14, C13
  (SEEN — `COUNCIL_REGISTRY.json` collaborationMatrix C11). All code requires C12 security review
  (SEEN — `sparkling-curious`:1926).
- **Owned T-tasks `[INFERRED]`:** T3 Squad Agents (engineering craft), T7 Testing & QA,
  T8 Deployment & Launch; Development SLA 10 days.
  Program role: dossier `07-rea-reverse-engineering.md` (REA JS analysis) for FNB, African Bank,
  FanDuel (`PROGRAM_BRIEF.md`:60,66,75).
- **Key skills:** `skills/backend-development`, `api-design-principles`, `typescript`,
  `react-native`-adjacent mobile skills, `python-testing-patterns`, `frontend-testing`,
  `code-quality`, `spec-to-code-compliance`.
- **Escalation:** standard ladder.
- **Current status:** `active`.

## C12 — Cybersecurity-Intel

- **ID / Name:** C12 / Cybersecurity-Intel-Squad.
- **Captain:** `C12-cybersecurity-intel-captain` (Cybersecurity-Intelligence-Squad-Captain).
- **Mandate:** threat model, pen-test, REA static/dynamic audit, incident response, security
  compliance. [SEEN — `PROGRAM_BRIEF.md`:45]
- **Sub-squads (SEEN — richest subbench set in the org):** `c12-cybersecurity-intel` with
  subbenches `SUB-attack-surface-mapper`, `SUB-evidence-custodian`, `SUB-remediation-recommender`,
  `SUB-security-coordinator`, `SUB-threat-modeler`, `SUB-vuln-detector.c12`; plus a dedicated
  `.stremiium/agents/council-agents/specialists/` pool: `SPEC-Crypto-Forensic-Analyst`,
  `SPEC-cloud-security-engineer`, `SPEC-incident-forensics-analyst`, `SPEC-prompt-defense-engineer`,
  `SPEC-secrets-key-management`, `SPEC-secure-architecture-reviewer`, `SPEC-threat-intel-analyst`,
  `SPEC-vulnerability-manager`, `SPEC-bridge-risk-engineer`.
  C12 also staffs `crd-security-compliance-sentinel` and `crd-incident-response`.
- **RACI:** **A** = C12 captain; depends on none; coordinates with C01, C02, C06, C11, C16
  (SEEN config). Security-review gate applies to all code and all smart contracts.
- **Owned T-tasks `[INFERRED]`:** T7 QA (security gates), T5 Notion Integration & Security
  (credentials/secrets), SOP-3 audit stage; **Security SLA 24–48 h critical**.
  Program role: `07-rea-reverse-engineering.md` static/dynamic audit method.
- **Key skills:** `skills/security-review`, `smart-contract-security`, `solidity-security`,
  `security-compliance`, `k8s-security-policies`, `secrets-management.md`, `incident-response.md`.
- **Escalation:** critical incident responds within **1 hour** then escalates SC → Mychael
  (SEEN — `sparkling-curious`:1508-1512).
- **Current status:** `active`. Largest tier-2 record count (25) — reflecting the specialist pool.

## C13 — Web3-Finance

- **ID / Name:** C13 / Web3-Finance-Squad (a.k.a. Web3-Financial-Infrastructure-Squad).
- **Captain:** `C13-web3-finance-captain` (Web3-Financial-Infrastructure-Squad-Captain).
  File: `.stremiium/agents/council-agents/C13-web3-finance-captain.agent.md`.
- **Mandate:** Polygon contracts, MPC wallets, `$STM` tokenomics, DeFi integration, crypto-financial
  systems. TVL target $50M/18 months; Polygon PoS primary; ERC-20/721/1155/4626 standards
  [SEEN — `C13-web3-finance-captain.agent.md`:30-58]. [SEEN — `PROGRAM_BRIEF.md`:46]
- **Sub-squads (SEEN — 11 subbenches, the deepest on-chain bench):** `c13-web3-finance` with
  `SUB-chain-compliance-analyst`, `SUB-chain-watchtower`, `SUB-drop-operator`, `SUB-forensic-tracer`,
  `SUB-guardian-manager`, `SUB-liquidity-analyst`, `SUB-mev-shield-analyst`, `SUB-orderbook-manager`,
  `SUB-paymaster-ops`, `SUB-royalty-auditor`, `SUB-staking-ops`.
- **RACI:** **A** = C13 captain; depends on C06, C12; coordinates with C10, C11 (SEEN config).
  Web3-Finance approval is mandatory before modifying smart-contract logic
  (SEEN — `sparkling-curious`:1367). Responsible for SOP-3 Smart Contract Deployment.
- **Owned T-tasks `[INFERRED]`:** T4 Workspace Services (smart-contracts, launchpad), T5 (wallet
  credentials); Protocol SLA 20 days.
  Program role: `$STM` tokenomics + benchmark dossiers for Luno, VALR, Flex.one, JPMorgan
  Kinexys, Sorare, Socios/Chiliz, Polymarket (`PROGRAM_BRIEF.md`:67-74).
- **Key skills:** `skills/blockchain`, `blockchain-expert`, `smart-contract-engineer`,
  `defi-protocol-templates`, `compressed-nfts-basics`, `stellar-dev` (L2/wallet patterns),
  `software-crypto-web3`, `web3-testing`.
- **Escalation:** standard ladder; token-economic disruption detects within 2 h with C13+SC
  (SEEN — `sparkling-curious`:1534-1545).
- **Current status:** `active`. Declares "7 services" in its own §0 (stale vs the 11-service canon → `[SEEN]` inconsistency).

---

## Cross-tier observations (evidence-tagged)

1. **The specialist pool is council-scoped.** `.stremiium/agents/council-agents/specialists/`
   holds 13 `SPEC-*` agents, all in the security/Web3/mobile-engineering space — i.e. tier-2 is
   where council-level specialists (distinct from department agents) live. `[SEEN]`
2. **Security is a hard gate, not a reviewer.** C12 appears as a dependency of C06, C11, C13 and
   in the collaboration matrix with C01/C02/C16; the master orchestrator makes C12 review
   mandatory for security-sensitive change. `[SEEN]`
3. **C13 straddles finance and engineering.** It coordinates with C10 (finance) and C11 (dev)
   and depends on C06/C12 — making it the natural owner of the `$STM` token-economics bridge. `[SEEN]`
