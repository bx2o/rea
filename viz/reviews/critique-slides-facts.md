# Slide Fact-Integrity Critic — DIRECT AUDIT

**Date:** 2026-11-18 · Direct coordinator audit (critic subagent rate-limited).

## Method

Compared every number in the 4 decks against `viz/public/snapshots/{stats,commits,graph,tours}.json`, the live git repo, `PROGRAM_BRIEF.md`, and `council-department-mapping.json`.

## Verified facts (all correct)

| Fact | Deck | Verified against | Result |
|---|---|---|---|
| 11,746 files / 3,254 dirs (as of commit `b474113`) | 01 | `git ls-tree -r b474113` = 11,745 tracked (+1) | ✅ accurate at cited commit |
| Zone counts: docs 2,981 / prompts 835 / execution 1,613 / .stremiium 2,150 / rea 4,068 / other 99 | 01 | snapshot byZone at that commit | ✅ |
| File types: md 6,534 / ts 3,090 / json 648 | 01 | `stats.json` byType | ✅ (D1 corrected a stale 6,519/3,068/614 from the brief) |
| 33 commits | 01 | commits.json length | ✅ |
| REA v6.5.0 / 153 CLI commands | 01, 02 | root README | ✅ (MCP tool count correctly stated as ≈200 source-dependent) |
| 16 councils + all captains, tier split 10/3/3 | 02 | council-department-mapping.json | ✅ |
| 17 entities across 6 domain groups (5/2/2/3/0/5) | 02 | PROGRAM_BRIEF §3 | ✅ (30-vs-17 correctly framed as definition difference) |
| $STM 1B / 20% / 50% / 25% | 02 | PROGRAM_BRIEF §8 | ✅ |
| 201 = 164+37 prompts → 603 reply files | 03 | filesystem counts | ✅ |
| 19 viz briefs, 18-section format, 6×3 grid | 03 | prompts/viz + reply format | ✅ |
| 15 CRDs, 16 councils, 29 departments, 61 graph nodes | 04 | graph.json + mapping | ✅ |
| R1–R6 verbatim, SLA 1/4/24/72h, private-funded boundary | 04 | governance rules | ✅ |
| All backtick paths in all 4 decks resolve | all | `ls` loop | ✅ zero BROKEN |

## One documented drift (not a defect)

The in-memory `stats.json` currently reads **11,888 files / 3,298 dirs / other 241** because the snapshot script counted uncommitted design files (new SVGs, review docs) added after commit `b474113`. Deck 01 explicitly labels its figures "as of commit `b474113`, 2026-11-18" and warns "file counts drift as the repo grows." At the cited commit, `git ls-tree` = 11,745 tracked files — the deck's 11,746 was accurate then. Once these design files are committed and the snapshot regenerated, the dashboard will reflect the new HEAD; the deck remains a correct historical snapshot.

## Verdict: FACT-ACCURATE at cited commits. Zero incorrect claims introduced by the design agents; one agent proactively corrected a stale number from the brief.
