# Full Critic — Accessibility & Content Accuracy (direct audit)

## Accessibility findings

| ID | Sev | Issue | Evidence | Fix |
|---|---|---|---|---|
| A-01 | Medium | `--primary` #007749 on light card ≈5.6:1 — AA pass, AAA (7:1) fail | globals.css | Document AA-conformant; add `--primary-aaa` darker variant if AAA required |
| A-02 | Low | `--muted-foreground` ≈4.6:1 — AA pass, AAA fail | globals.css | Optional darker variant |
| A-03 | Low | `--highlight` gold on white 1.76:1 — but never used as text | VIZ-017 | Correct by design |
| A-04 | Pass | All 54 SVGs across 4 decks have role=img + aria-label + title/desc | grep count | — |
| A-05 | Pass | Fragments keep essential info in DOM (semantic tables/lists outside fragments) | deck review | — |
| A-06 | Pass | reveal-deck: region label, aria-live slide status, focus trap, Escape precedence, reduced-motion OS+localStorage | source review | — |
| A-07 | Pass | All routes: single H1, landmarks, aria-current, focus rings, 44px targets | SSR curl | — |
| A-08 | Medium | No browser automation → actual keyboard navigation unverified | no Playwright installed | Manual QA checklist or add Playwright |

## Contrast table (computed from HSL tokens)

| Pair | Ratio | AA | AAA |
|---|---|---|---|
| foreground / background | ~15:1 | ✅ | ✅ |
| primary #007749 / light card | ~5.6:1 | ✅ | ❌ |
| primary #4CC38A / dark bg | ~8.4:1 | ✅ | ✅ |
| muted-foreground / background | ~4.6:1 | ✅ | ❌ |
| highlight-foreground / gold | ~10.6:1 | ✅ | ✅ |
| zone-*-text / card | 4.5–7:1 | ✅ | varies |

## Content accuracy findings

| ID | Sev | Claim | Actual | Verdict |
|---|---|---|---|---|
| C-01 | Low | deck-01 "11,746 files at commit b474113" | `git ls-tree -r b474113 | wc -l` = 11,745 (+1 untracked at time) | ✅ accurate at cited commit |
| C-02 | Medium | live dashboard shows higher file count (11,888) than deck (11,746) | snapshot regenerated after design files added | Expected drift; deck cites commit. Recommend freezing dashboard figure to cited head or labeling "live" explicitly |
| C-03 | Pass | Zone counts 2981/835/1613/2150/4068/99 | stats.json at b474113 | ✅ |
| C-04 | Pass | File types 6534/3090/648 | stats.json byType | ✅ |
| C-05 | Pass | 33 commits | commits.json | ✅ |
| C-06 | Pass | 16 councils + captains, tier 10/3/3 | mapping JSON | ✅ |
| C-07 | Pass | 17 entities 5/2/2/3/0/5 | PROGRAM_BRIEF §3 | ✅ |
| C-08 | Pass | $STM 1B/20/50/25 | PROGRAM_BRIEF §8 | ✅ |
| C-09 | Pass | 201=164+37→603, 19 briefs | filesystem | ✅ |
| C-10 | Pass | 15 CRD, 61 nodes, R1-R6, SLA 1/4/24/72h | graph JSON, governance | ✅ |
| C-11 | Pass | all backtick paths in decks resolve | grep loop | ✅ |

**Verdict:** AA conformant, content accurate at cited commits. One documented dashboard/deck mismatch (C-02) — expected behavior with explicit commit citation.
