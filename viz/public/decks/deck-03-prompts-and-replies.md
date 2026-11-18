## 201 Master Prompts → Substantive Replies

- <span aria-hidden="true">📝</span> Program `SC-REA-NEOBANK-5.0` · orchestrator Sparkling Curious (`SC-MASTER-001`)
- All **201 Master Prompts** answered as substantive UnConsolidated replies in `prompts/replies/`
- Generated 2026-11-18 · model lock `auto`
- Learn deck 03 of 04 · 12 slides

<svg role="img" aria-label="Program at a glance: 201 master prompts, 603 reply files, 19 viz briefs" viewBox="0 0 960 150" width="100%" height="150" preserveAspectRatio="xMidYMid meet">
<title>201 Master Prompts answered produce 603 reply files and 19 viz briefs</title>
<rect x="8" y="24" width="290" height="102" rx="14" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.14; stroke: hsl(var(--zone-prompts)); stroke-width: 2"/>
<text x="153" y="68" text-anchor="middle" style="fill: hsl(var(--zone-prompts))" font-size="42" font-weight="800">201</text>
<text x="153" y="94" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="15">Master Prompts answered</text>
<text x="153" y="113" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">164 Stremiium · 37 NeoBank</text>
<path d="M306 75 H364" style="stroke: hsl(var(--highlight)); stroke-width: 3; fill: none"/>
<path d="M364 68 l12 7 -12 7 z" style="fill: hsl(var(--highlight))"/>
<rect x="382" y="24" width="290" height="102" rx="14" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.14; stroke: hsl(var(--zone-execution)); stroke-width: 2"/>
<text x="527" y="68" text-anchor="middle" style="fill: hsl(var(--zone-execution))" font-size="42" font-weight="800">603</text>
<text x="527" y="94" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="15">reply files generated</text>
<text x="527" y="113" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">reply · evidence · diagrams × 201</text>
<path d="M680 75 H738" style="stroke: hsl(var(--highlight)); stroke-width: 3; fill: none"/>
<path d="M738 68 l12 7 -12 7 z" style="fill: hsl(var(--highlight))"/>
<rect x="756" y="24" width="196" height="102" rx="14" style="fill: hsl(var(--highlight)); fill-opacity: 0.16; stroke: hsl(var(--highlight)); stroke-width: 2"/>
<text x="854" y="68" text-anchor="middle" style="fill: hsl(var(--highlight))" font-size="42" font-weight="800">19</text>
<text x="854" y="94" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="15">viz briefs (this app)</text>
<text x="854" y="113" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">C08 ×10 · C11 ×6 · C03 ×2 + 1</text>
</svg> <!-- .element: class="fragment" -->

201 answered prompts → 603 reply files → 19 viz briefs in this app. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` header + "Counts" table*

Note: This deck traces one chain through the repo: a prompt, its substantive reply, the research apparatus behind it, and the execution result it feeds.

---

## The prompt system

| Item | Count |
|---|---:|
| Stremiium agent prompts answered | 164 |
| NeoBank prompts answered | 37 |
| **Total prompts answered** | **201** |

- <span aria-hidden="true">📝</span> Unlike the earlier `execution/results/` files (which were generic templates), every reply answers the **actual questions** in its source prompt with concrete, citable, domain-specific content
- <span aria-hidden="true">💬</span> Example: "Which data fields are required for SARS CARF reporting?" is answered with the real CARF reporting schema

<svg role="img" aria-label="Funnel: 201 Master Prompts split into 164 Stremiium and 37 NeoBank, then expand into 603 reply files across three file types" viewBox="0 0 960 300" width="100%" height="300" style="max-height: 250px" preserveAspectRatio="xMidYMid meet">
<title>201 prompts = 164 Stremiium + 37 NeoBank, expanded to 603 reply files</title>
<text x="480" y="16" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12" letter-spacing="2">PROMPT ZONE → REPLY ZONE</text>
<rect x="12" y="100" width="150" height="100" rx="12" style="fill: hsl(var(--primary)); fill-opacity: 0.14; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="87" y="156" text-anchor="middle" style="fill: hsl(var(--primary))" font-size="46" font-weight="800">201</text>
<text x="87" y="180" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="13">Master Prompts</text>
<text x="87" y="194" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="11">all answered</text>
<path d="M166 150 H206" style="stroke: hsl(var(--primary)); stroke-width: 2; fill: none"/>
<path d="M206 143 l10 7 -10 7 z" style="fill: hsl(var(--primary))"/>
<rect x="220" y="56" width="272" height="86" rx="10" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.16; stroke: hsl(var(--zone-stremiium)); stroke-width: 2"/>
<text x="240" y="100" style="fill: hsl(var(--zone-stremiium))" font-size="34" font-weight="800">164</text>
<text x="310" y="90" style="fill: hsl(var(--foreground))" font-size="14">Stremiium agent prompts</text>
<text x="310" y="112" style="fill: hsl(var(--muted-foreground))" font-size="12">16 councils + orchestration</text>
<rect x="220" y="162" width="272" height="86" rx="10" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.16; stroke: hsl(var(--zone-prompts)); stroke-width: 2"/>
<text x="240" y="206" style="fill: hsl(var(--zone-prompts))" font-size="34" font-weight="800">37</text>
<text x="290" y="196" style="fill: hsl(var(--foreground))" font-size="14">NeoBank prompts</text>
<text x="290" y="218" style="fill: hsl(var(--muted-foreground))" font-size="12">16 departments</text>
<path d="M496 99 H520 V150 M496 205 H520 V150 M520 150 H556" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/>
<path d="M556 143 l10 7 -10 7 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="570" y="100" width="110" height="100" rx="12" style="fill: hsl(var(--highlight)); fill-opacity: 0.18; stroke: hsl(var(--highlight)); stroke-width: 2"/>
<text x="625" y="156" text-anchor="middle" style="fill: hsl(var(--highlight))" font-size="46" font-weight="800">603</text>
<text x="625" y="180" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="12">reply files</text>
<path d="M684 150 H700 M700 78 V234 M700 78 H718 M700 156 H718 M700 234 H718" style="stroke: hsl(var(--zone-execution)); stroke-width: 2; fill: none"/>
<rect x="722" y="48" width="230" height="60" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.12; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="738" y="76" style="fill: hsl(var(--zone-execution))" font-size="22" font-weight="800">201</text>
<text x="790" y="72" style="fill: hsl(var(--foreground))" font-size="13">reply.md</text>
<text x="790" y="90" style="fill: hsl(var(--muted-foreground))" font-size="11">the answer</text>
<rect x="722" y="126" width="230" height="60" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.12; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="738" y="154" style="fill: hsl(var(--zone-execution))" font-size="22" font-weight="800">201</text>
<text x="790" y="150" style="fill: hsl(var(--foreground))" font-size="12">research-evidence.md</text>
<text x="790" y="168" style="fill: hsl(var(--muted-foreground))" font-size="11">the evidence</text>
<rect x="722" y="204" width="230" height="60" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.12; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="738" y="232" style="fill: hsl(var(--zone-execution))" font-size="22" font-weight="800">201</text>
<text x="790" y="228" style="fill: hsl(var(--foreground))" font-size="12">diagrams-and-charts.md</text>
<text x="790" y="246" style="fill: hsl(var(--muted-foreground))" font-size="11">the visuals</text>
<text x="480" y="290" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="13">603 files = 201 × 3 — one answer, one evidence file, one diagram file per prompt</text>
</svg> <!-- .element: class="fragment" -->

164 Stremiium + 37 NeoBank = 201 prompts answered. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` "Purpose" + "Counts"*

Note: 201 equals 164 Stremiium plus 37 NeoBank. The replies system replaced generic template outputs with question-by-question answers.

---

## prompts/ zone structure

One folder per prompt, one `prompt.md` inside it:

- **NeoBank prompts:** `prompts/neobank/<department>/<prompt-name>/prompt.md` — 16 departments, 37 prompts
- **Stremiium agent prompts:** `prompts/stremiium/<council>/<agent-name>/prompt.md` — 16 councils + orchestration, ~165 agents

Each prompt header carries: agent ID, council, gate, and model lock `auto`.

<svg role="img" aria-label="Folder-per-prompt structure: NeoBank organised by 16 departments, Stremiium by 16 councils plus orchestration" viewBox="0 0 960 150" width="100%" height="150" preserveAspectRatio="xMidYMid meet">
<title>One folder per prompt, one prompt.md inside</title>
<rect x="16" y="14" width="452" height="118" rx="12" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.12; stroke: hsl(var(--zone-prompts)); stroke-width: 2"/>
<text x="36" y="42" style="fill: hsl(var(--zone-prompts))" font-size="15" font-weight="700">prompts/neobank/&lt;department&gt;/&lt;prompt-name&gt;/prompt.md</text>
<text x="36" y="76" style="fill: hsl(var(--foreground))" font-size="14">📁 16 departments · 37 prompts</text>
<text x="36" y="104" style="fill: hsl(var(--muted-foreground))" font-size="12">Department-organised · one folder per prompt</text>
<rect x="492" y="14" width="452" height="118" rx="12" style="fill: hsl(var(--primary)); fill-opacity: 0.12; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="512" y="42" style="fill: hsl(var(--primary))" font-size="15" font-weight="700">prompts/stremiium/&lt;council&gt;/&lt;agent-name&gt;/prompt.md</text>
<text x="512" y="76" style="fill: hsl(var(--foreground))" font-size="14">📁 16 councils + orchestration · ~165 agents</text>
<text x="512" y="104" style="fill: hsl(var(--muted-foreground))" font-size="12">Council-organised · header: agent ID, council, gate, model lock auto</text>
</svg> <!-- .element: class="fragment" -->

Prompt header metadata is carried forward into every reply. <!-- .element: class="fragment" -->

*Source: `README.md` "Prompt structure"*

Note: The prompts zone is fully folder-per-prompt: department-organised for NeoBank, council-organised for Stremiium agents.

---

## The replies system

`prompts/replies/` — substantive answers with research evidence and diagrams:

| Item | Count |
|---|---:|
| `reply.md` files | 201 |
| `research-evidence.md` files | 201 |
| `diagrams-and-charts.md` files | 201 |
| **Total files** | **603** + index/research/tools |

- <span aria-hidden="true">💬</span> `MASTER-INDEX.md` — the complete folder/file index
- <span aria-hidden="true">🔬</span> `README.md` — the format specification

<svg role="img" aria-label="Donut chart: 603 reply files are exactly three equal sets of 201 — reply.md, research-evidence.md and diagrams-and-charts.md" viewBox="0 0 960 300" width="100%" height="300" style="max-height: 250px" preserveAspectRatio="xMidYMid meet">
<title>603 = 201 × 3: three equal file types per prompt</title>
<g transform="translate(180,150) rotate(-90)">
<circle r="90" fill="none" style="stroke: hsl(var(--zone-prompts))" stroke-width="44" stroke-dasharray="184 381.5" stroke-dashoffset="0"/>
<circle r="90" fill="none" style="stroke: hsl(var(--zone-execution))" stroke-width="44" stroke-dasharray="184 381.5" stroke-dashoffset="-188.5"/>
<circle r="90" fill="none" style="stroke: hsl(var(--highlight))" stroke-width="44" stroke-dasharray="184 381.5" stroke-dashoffset="-377"/>
</g>
<text x="180" y="144" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="44" font-weight="800">603</text>
<text x="180" y="170" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="13">reply files</text>
<rect x="360" y="40" width="20" height="20" rx="4" style="fill: hsl(var(--zone-prompts))"/>
<text x="392" y="57" style="fill: hsl(var(--foreground))" font-size="16" font-weight="700">reply.md — 201</text>
<text x="392" y="79" style="fill: hsl(var(--muted-foreground))" font-size="13">the substantive UnConsolidated answer · 33%</text>
<rect x="360" y="112" width="20" height="20" rx="4" style="fill: hsl(var(--zone-execution))"/>
<text x="392" y="129" style="fill: hsl(var(--foreground))" font-size="16" font-weight="700">research-evidence.md — 201</text>
<text x="392" y="151" style="fill: hsl(var(--muted-foreground))" font-size="13">the graded, citable research apparatus · 33%</text>
<rect x="360" y="184" width="20" height="20" rx="4" style="fill: hsl(var(--highlight))"/>
<text x="392" y="201" style="fill: hsl(var(--foreground))" font-size="16" font-weight="700">diagrams-and-charts.md — 201</text>
<text x="392" y="223" style="fill: hsl(var(--muted-foreground))" font-size="13">the visual artefacts · 33%</text>
<rect x="360" y="248" width="584" height="36" rx="8" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="652" y="272" text-anchor="middle" style="fill: hsl(var(--primary))" font-size="14" font-weight="700">603 = 201 × 3 · plus MASTER-INDEX.md + README.md + research/ + tools/</text>
</svg> <!-- .element: class="fragment" -->

Three files per prompt: answer, evidence, diagrams. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` "Counts" + "Folder Structure" · `prompts/replies/MASTER-INDEX.md`*

Note: 603 files is three per prompt: the answer, the evidence, and the diagrams. The master index lists every one.

---

## The 18-section reply format

| 1–6 | 7–12 | 13–18 |
|---|---|---|
| 1 Executive Answer | 7 Implementation Plan | 13 Rollback Plan |
| 2 Research Base | 8 Schemas & Contracts | 14 Escalation Path (SLAs 1h/4h/24h/72h) |
| 3 Questions Answered | 9 Security Analysis | 15 Artifact Handoff to SC |
| 4 Concerns Resolved | 10 SA Regulatory Analysis | 16 Detailed Tables |
| 5 Suggested Improvements | 11 Strategic Filter | 17 Visualization Reference |
| 6 Missing Dependencies | 12 Compliance Gate | 18 Validation Checklist |

Plus a header block with model lock `auto`, agent ID, council, gate, and source prompt path.

<svg role="img" aria-label="Six by three grid of the 18 numbered UnConsolidated reply sections, rows covering 1 to 6, 7 to 12 and 13 to 18" viewBox="0 0 960 350" width="100%" height="350" style="max-height: 278px" preserveAspectRatio="xMidYMid meet">
<title>18-section UnConsolidated reply format: a 3-row by 6-column numbered grid</title>
<g>
<rect x="20" y="28" width="145" height="80" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="32" y="56" style="fill: hsl(var(--primary))" font-size="21" font-weight="800">01</text>
<text x="32" y="78" style="fill: hsl(var(--foreground))" font-size="11">Executive</text><text x="32" y="94" style="fill: hsl(var(--foreground))" font-size="11">Answer</text>
<rect x="175" y="28" width="145" height="80" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="187" y="56" style="fill: hsl(var(--primary))" font-size="21" font-weight="800">02</text>
<text x="187" y="78" style="fill: hsl(var(--foreground))" font-size="11">Research</text><text x="187" y="94" style="fill: hsl(var(--foreground))" font-size="11">Base</text>
<rect x="330" y="28" width="145" height="80" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="342" y="56" style="fill: hsl(var(--primary))" font-size="21" font-weight="800">03</text>
<text x="342" y="78" style="fill: hsl(var(--foreground))" font-size="11">Questions</text><text x="342" y="94" style="fill: hsl(var(--foreground))" font-size="11">Answered</text>
<rect x="485" y="28" width="145" height="80" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="497" y="56" style="fill: hsl(var(--primary))" font-size="21" font-weight="800">04</text>
<text x="497" y="78" style="fill: hsl(var(--foreground))" font-size="11">Concerns</text><text x="497" y="94" style="fill: hsl(var(--foreground))" font-size="11">Resolved</text>
<rect x="640" y="28" width="145" height="80" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="652" y="56" style="fill: hsl(var(--primary))" font-size="21" font-weight="800">05</text>
<text x="652" y="78" style="fill: hsl(var(--foreground))" font-size="11">Suggested</text><text x="652" y="94" style="fill: hsl(var(--foreground))" font-size="11">Improvements</text>
<rect x="795" y="28" width="145" height="80" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="807" y="56" style="fill: hsl(var(--primary))" font-size="21" font-weight="800">06</text>
<text x="807" y="78" style="fill: hsl(var(--foreground))" font-size="11">Missing</text><text x="807" y="94" style="fill: hsl(var(--foreground))" font-size="11">Dependencies</text>
<rect x="20" y="128" width="145" height="80" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="32" y="156" style="fill: hsl(var(--zone-prompts))" font-size="21" font-weight="800">07</text>
<text x="32" y="178" style="fill: hsl(var(--foreground))" font-size="11">Implementation</text><text x="32" y="194" style="fill: hsl(var(--foreground))" font-size="11">Plan</text>
<rect x="175" y="128" width="145" height="80" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="187" y="156" style="fill: hsl(var(--zone-prompts))" font-size="21" font-weight="800">08</text>
<text x="187" y="178" style="fill: hsl(var(--foreground))" font-size="11">Schemas &amp;</text><text x="187" y="194" style="fill: hsl(var(--foreground))" font-size="11">Contracts</text>
<rect x="330" y="128" width="145" height="80" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="342" y="156" style="fill: hsl(var(--zone-prompts))" font-size="21" font-weight="800">09</text>
<text x="342" y="178" style="fill: hsl(var(--foreground))" font-size="11">Security</text><text x="342" y="194" style="fill: hsl(var(--foreground))" font-size="11">Analysis</text>
<rect x="485" y="128" width="145" height="80" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="497" y="156" style="fill: hsl(var(--zone-prompts))" font-size="21" font-weight="800">10</text>
<text x="497" y="178" style="fill: hsl(var(--foreground))" font-size="11">SA Regulatory</text><text x="497" y="194" style="fill: hsl(var(--foreground))" font-size="11">Analysis</text>
<rect x="640" y="128" width="145" height="80" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="652" y="156" style="fill: hsl(var(--zone-prompts))" font-size="21" font-weight="800">11</text>
<text x="652" y="178" style="fill: hsl(var(--foreground))" font-size="11">Strategic</text><text x="652" y="194" style="fill: hsl(var(--foreground))" font-size="11">Filter</text>
<rect x="795" y="128" width="145" height="80" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="807" y="156" style="fill: hsl(var(--zone-prompts))" font-size="21" font-weight="800">12</text>
<text x="807" y="178" style="fill: hsl(var(--foreground))" font-size="11">Compliance</text><text x="807" y="194" style="fill: hsl(var(--foreground))" font-size="11">Gate</text>
<rect x="20" y="228" width="145" height="80" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="32" y="256" style="fill: hsl(var(--zone-execution))" font-size="21" font-weight="800">13</text>
<text x="32" y="278" style="fill: hsl(var(--foreground))" font-size="11">Rollback</text><text x="32" y="294" style="fill: hsl(var(--foreground))" font-size="11">Plan</text>
<rect x="175" y="228" width="145" height="80" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="187" y="256" style="fill: hsl(var(--zone-execution))" font-size="21" font-weight="800">14</text>
<text x="187" y="278" style="fill: hsl(var(--foreground))" font-size="11">Escalation</text><text x="187" y="294" style="fill: hsl(var(--foreground))" font-size="11">Path (SLAs)</text>
<rect x="330" y="228" width="145" height="80" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="342" y="256" style="fill: hsl(var(--zone-execution))" font-size="21" font-weight="800">15</text>
<text x="342" y="278" style="fill: hsl(var(--foreground))" font-size="11">Artifact Handoff</text><text x="342" y="294" style="fill: hsl(var(--foreground))" font-size="11">to SC</text>
<rect x="485" y="228" width="145" height="80" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="497" y="256" style="fill: hsl(var(--zone-execution))" font-size="21" font-weight="800">16</text>
<text x="497" y="278" style="fill: hsl(var(--foreground))" font-size="11">Detailed</text><text x="497" y="294" style="fill: hsl(var(--foreground))" font-size="11">Tables</text>
<rect x="640" y="228" width="145" height="80" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="652" y="256" style="fill: hsl(var(--zone-execution))" font-size="21" font-weight="800">17</text>
<text x="652" y="278" style="fill: hsl(var(--foreground))" font-size="11">Visualization</text><text x="652" y="294" style="fill: hsl(var(--foreground))" font-size="11">Reference</text>
<rect x="795" y="228" width="145" height="80" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="807" y="256" style="fill: hsl(var(--zone-execution))" font-size="21" font-weight="800">18</text>
<text x="807" y="278" style="fill: hsl(var(--foreground))" font-size="11">Validation</text><text x="807" y="294" style="fill: hsl(var(--foreground))" font-size="11">Checklist</text>
</g>
<text x="480" y="335" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">1–6 question &amp; evidence · 7–12 plan &amp; gates · 13–18 closure &amp; validation · header block carries model lock auto</text>
</svg> <!-- .element: class="fragment" -->

Eighteen sections, identical in every reply. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` "The 18-Section UnConsolidated Reply Format"*

Note: Every reply follows the same eighteen-section skeleton as the master prompts themselves — question, evidence, plan, gates, rollback.

---

## Evidence grades

Every substantive claim is graded:

- <span aria-hidden="true">✅</span> **`[FACT]`** — verified against a cited source
- <span aria-hidden="true">📊</span> **`[EST]`** — estimate, not yet measured
- <span aria-hidden="true">❓</span> **`[UNKNOWN]`** — unresolved in-repo
- <span aria-hidden="true">🔬</span> **`[INFER]`** — derived, not directly observed

`[S#]` citations map to physical source paths via the citation map. The four-bucket evidentiary rule (Seen / Synthesised / Limitations / Unknowns) is applied throughout.

<svg role="img" aria-label="Four evidence grades in quadrants: FACT verified, EST estimate, INFER derived, UNKNOWN unresolved, governed by the four-bucket evidentiary rule" viewBox="0 0 960 350" width="100%" height="350" style="max-height: 278px" preserveAspectRatio="xMidYMid meet">
<title>Evidence grades and the four-bucket evidentiary rule</title>
<rect x="20" y="20" width="450" height="120" rx="12" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="42" y="56" font-size="24">✅</text>
<text x="82" y="56" style="fill: hsl(var(--primary))" font-size="23" font-weight="800">[FACT]</text>
<text x="42" y="90" style="fill: hsl(var(--foreground))" font-size="14">Verified against a cited source</text>
<text x="42" y="116" style="fill: hsl(var(--muted-foreground))" font-size="12">Bucket: Seen · physical path cited</text>
<rect x="490" y="20" width="450" height="120" rx="12" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 2"/>
<text x="512" y="56" font-size="24">📊</text>
<text x="552" y="56" style="fill: hsl(var(--zone-prompts))" font-size="23" font-weight="800">[EST]</text>
<text x="512" y="90" style="fill: hsl(var(--foreground))" font-size="14">Estimate, not yet measured</text>
<text x="512" y="116" style="fill: hsl(var(--muted-foreground))" font-size="12">Bucket: Synthesised · mark the estimate</text>
<rect x="20" y="156" width="450" height="120" rx="12" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 2"/>
<text x="42" y="192" font-size="24">🔬</text>
<text x="82" y="192" style="fill: hsl(var(--zone-execution))" font-size="23" font-weight="800">[INFER]</text>
<text x="42" y="226" style="fill: hsl(var(--foreground))" font-size="14">Derived, not directly observed</text>
<text x="42" y="252" style="fill: hsl(var(--muted-foreground))" font-size="12">Bucket: Limitations · state the inference</text>
<rect x="490" y="156" width="450" height="120" rx="12" style="fill: hsl(var(--highlight)); fill-opacity: 0.12; stroke: hsl(var(--highlight)); stroke-width: 2"/>
<text x="512" y="192" font-size="24">❓</text>
<text x="552" y="192" style="fill: hsl(var(--highlight))" font-size="23" font-weight="800">[UNKNOWN]</text>
<text x="512" y="226" style="fill: hsl(var(--foreground))" font-size="14">Unresolved in-repo</text>
<text x="512" y="252" style="fill: hsl(var(--muted-foreground))" font-size="12">Bucket: Unknowns · flag, never assert as fact</text>
<rect x="20" y="294" width="920" height="44" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.08; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="480" y="321" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">Four-bucket rule: Seen / Synthesised / Limitations / Unknowns · 🔗 [S#] → physical source via SOURCE-CITATION-MAP</text>
</svg> <!-- .element: class="fragment" -->

Every claim carries a grade and a citation number. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` §"Companion Files" · `prompts/replies/research/SOURCE-CITATION-MAP.md`*

Note: The same discipline that governs dossiers governs replies: every claim carries a grade and a citation number.

---

## Research apparatus

| File | Purpose |
|---|---|
| `prompts/replies/research/KNOWLEDGE-BASE.md` | Topic → substantive content mapping |
| `prompts/replies/research/SOURCE-CITATION-MAP.md` | `[S#]` → source path mapping |
| `prompts/replies/research/REA-RESEARCH-LOG.md` | REA engine research record |
| `prompts/replies/tools/generate-replies.mjs` | Reply generator tool |
| `prompts/replies/tools/verify-replies.mjs` | Validation tool |

Validation result: **201 prompts verified, 0 errors** — every prompt has all 3 files, every reply has 18 sections, no generic boilerplate.

<svg role="img" aria-label="Research apparatus: a shared knowledge base, citation map and research log plus two tools back 201 verified replies with zero errors" viewBox="0 0 960 160" width="100%" height="160" preserveAspectRatio="xMidYMid meet">
<title>Shared research apparatus backs 201 replies; verifier reports 0 errors</title>
<text x="470" y="14" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12" letter-spacing="2">SHARED APPARATUS → MACHINE-CHECKED OUTPUT</text>
<rect x="14" y="30" width="160" height="76" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="94" y="60" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="11">KNOWLEDGE-BASE.md</text>
<text x="94" y="82" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="10">topic → content</text>
<rect x="186" y="30" width="160" height="76" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="266" y="60" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="11">SOURCE-CITATION-MAP.md</text>
<text x="266" y="82" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="10">[S#] → path</text>
<rect x="358" y="30" width="160" height="76" rx="9" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="438" y="60" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="11">REA-RESEARCH-LOG.md</text>
<text x="438" y="82" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="10">research record</text>
<rect x="530" y="30" width="160" height="76" rx="9" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.10; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="610" y="60" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="11">generate-replies.mjs</text>
<text x="610" y="82" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="10">reply generator</text>
<rect x="702" y="30" width="160" height="76" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="782" y="60" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="11">verify-replies.mjs</text>
<text x="782" y="82" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="10">validation tool</text>
<path d="M862 68 H884" style="stroke: hsl(var(--highlight)); stroke-width: 2; fill: none"/>
<path d="M884 61 l10 7 -10 7 z" style="fill: hsl(var(--highlight))"/>
<rect x="898" y="30" width="48" height="76" rx="9" style="fill: hsl(var(--highlight)); fill-opacity: 0.16; stroke: hsl(var(--highlight)); stroke-width: 1.5"/>
<text x="922" y="62" text-anchor="middle" style="fill: hsl(var(--highlight))" font-size="22" font-weight="800">201</text>
<text x="922" y="84" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="10">0 errors</text>
<text x="480" y="138" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="13">Machine-checkable: 3 files per prompt · 18 sections per reply · no generic boilerplate</text>
</svg> <!-- .element: class="fragment" -->

201 verified, 0 errors. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` "Folder Structure", "Research Sources", "Validation" · `prompts/replies/MASTER-INDEX.md` top-level files*

Note: A shared knowledge base and citation map back all 201 replies, and a verifier enforces the format machine-checkably.

---

## Execution results zone

- `execution/results/<scope>/<prompt-name>/execution-result.md` — per-prompt results
- <span aria-hidden="true">📊</span> `execution/EXECUTION_LEDGER.md` — NeoBank Code Mode execution ledger (37 artifacts, 37 subagents, C01–C16, 2026-11-17, "Project Umoya")

<svg role="img" aria-label="Execution zone: 37 artifacts and 37 subagents across councils C01 to C16 recorded in a single execution ledger" viewBox="0 0 960 140" width="100%" height="140" preserveAspectRatio="xMidYMid meet">
<title>Execution results zone: 37 artifacts, 37 subagents, C01–C16</title>
<rect x="20" y="22" width="280" height="94" rx="12" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.12; stroke: hsl(var(--zone-execution)); stroke-width: 2"/>
<text x="160" y="66" text-anchor="middle" style="fill: hsl(var(--zone-execution))" font-size="40" font-weight="800">37</text>
<text x="160" y="94" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">artifacts · 37 subagents</text>
<path d="M308 69 H360" style="stroke: hsl(var(--highlight)); stroke-width: 2; fill: none"/>
<path d="M360 62 l10 7 -10 7 z" style="fill: hsl(var(--highlight))"/>
<rect x="374" y="22" width="566" height="94" rx="12" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="394" y="54" style="fill: hsl(var(--foreground))" font-size="15">execution/EXECUTION_LEDGER.md</text>
<text x="394" y="80" style="fill: hsl(var(--muted-foreground))" font-size="13">C01–C16 · 2026-11-17 · "Project Umoya"</text>
<text x="394" y="102" style="fill: hsl(var(--muted-foreground))" font-size="12">one ledger tracking everything actually built</text>
</svg> <!-- .element: class="fragment" -->

What was built is recorded here, not just promised. <!-- .element: class="fragment" -->

*Source: `README.md` "Workspace zones" row "Execution results" · `execution/EXECUTION_LEDGER.md` header + "Summary"*

Note: The execution zone records what was actually built: thirty-seven artifacts across all sixteen councils, tracked in a single ledger.

---

## The viz program (this app)

- <span aria-hidden="true">📊</span> `prompts/viz/` — **19 prompt files = 1 orchestration directive + 18 delegated briefs** (C08 ×10, C11 ×6, C03 ×2)
- Status board: `prompts/viz/TASK-INDEX.md`
- This deck is the **VIZ-030** deliverable (C03 Admin-Knowledge · documentation-specialist)

> **Fact-drift flag:** the viz plan's headline says "18 task prompts / C08 (9)" while its own C08 table lists 10 rows (VIZ-010–019); the task index tracks the enumerated 19-file roster. Quoted exactly, not silently reconciled.

<svg role="img" aria-label="Chart of 19 viz briefs by council: C08 10, C11 6, C03 2, orchestration 1; and 164 Stremiium agents across 16 councils" viewBox="0 0 960 320" width="100%" height="320" style="max-height: 265px" preserveAspectRatio="xMidYMid meet">
<title>Viz prompt distribution: 10 + 6 + 2 + 1 = 19 briefs; 164 agents across 16 councils</title>
<text x="280" y="22" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12" letter-spacing="2">VIZ BRIEFS BY COUNCIL</text>
<line x1="40" y1="250" x2="520" y2="250" style="stroke: hsl(var(--muted-foreground)); stroke-width: 1.5"/>
<rect x="70" y="90" width="70" height="160" rx="6" style="fill: hsl(var(--primary)); fill-opacity: 0.24; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="105" y="82" text-anchor="middle" style="fill: hsl(var(--primary))" font-size="22" font-weight="800">10</text>
<text x="105" y="272" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">C08</text>
<rect x="180" y="154" width="70" height="96" rx="6" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.24; stroke: hsl(var(--zone-execution)); stroke-width: 2"/>
<text x="215" y="146" text-anchor="middle" style="fill: hsl(var(--zone-execution))" font-size="22" font-weight="800">6</text>
<text x="215" y="272" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">C11</text>
<rect x="290" y="218" width="70" height="32" rx="6" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.24; stroke: hsl(var(--zone-prompts)); stroke-width: 2"/>
<text x="325" y="210" text-anchor="middle" style="fill: hsl(var(--zone-prompts))" font-size="22" font-weight="800">2</text>
<text x="325" y="272" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">C03</text>
<rect x="400" y="234" width="70" height="16" rx="6" style="fill: hsl(var(--highlight)); fill-opacity: 0.28; stroke: hsl(var(--highlight)); stroke-width: 2"/>
<text x="435" y="226" text-anchor="middle" style="fill: hsl(var(--highlight))" font-size="22" font-weight="800">1</text>
<text x="435" y="272" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="13">ORCH</text>
<text x="280" y="302" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="14">10 + 6 + 2 + 1 = 19 viz briefs · 1 directive + 18 delegated</text>
<text x="770" y="22" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12" letter-spacing="2">STREMIUM AGENTS</text>
<rect x="600" y="34" width="340" height="232" rx="12" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.08; stroke: hsl(var(--zone-stremiium)); stroke-width: 1.5"/>
<text x="770" y="98" text-anchor="middle" style="fill: hsl(var(--zone-stremiium))" font-size="54" font-weight="800">164</text>
<text x="770" y="124" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">agents across 16 councils</text>
<rect x="718" y="146" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="746" y="146" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="774" y="146" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="802" y="146" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/>
<rect x="718" y="174" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="746" y="174" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="774" y="174" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="802" y="174" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/>
<rect x="718" y="202" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="746" y="202" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="774" y="202" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="802" y="202" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/>
<rect x="718" y="230" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="746" y="230" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="774" y="230" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/><rect x="802" y="230" width="20" height="20" rx="3" style="fill: hsl(var(--zone-stremiium)); fill-opacity: 0.55"/>
<text x="770" y="258" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">≈10.25 agents per council</text>
</svg> <!-- .element: class="fragment" -->

Nineteen briefs, one status board, one C03 deliverable. <!-- .element: class="fragment" -->

*Source: `prompts/viz/TASK-INDEX.md` roster note + `viz/README.md`*

Note: The learning app itself follows the same prompt-driven governance: nineteen briefs, one status board, this deck as one of the C03 deliverables.

---

## How to explore

- <span aria-hidden="true">🔗</span> `/explorer` — virtualized file tree + file viewer (markdown render, metadata)
- **⌘K** — command palette opens: fuzzy search grouped into Views / Folders / Files / Commits
- `/commits` — commit timeline + diffs · `/councils` — 16-council graph · `/globe` — WebGL globe
- `/learn` — these decks

<svg role="img" aria-label="App routes: explorer, command palette, commits, councils, globe and learn" viewBox="0 0 960 130" width="100%" height="130" preserveAspectRatio="xMidYMid meet">
<title>Every cited path can be opened from these views</title>
<text x="480" y="16" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12" letter-spacing="2">OPEN ANYTHING CITED IN THESE DECKS</text>
<rect x="30" y="36" width="140" height="60" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.12; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="100" y="74" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">/explorer</text>
<rect x="182" y="36" width="140" height="60" rx="10" style="fill: hsl(var(--highlight)); fill-opacity: 0.16; stroke: hsl(var(--highlight)); stroke-width: 1.5"/>
<text x="252" y="74" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">⌘K palette</text>
<rect x="334" y="36" width="140" height="60" rx="10" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.12; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="404" y="74" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">/commits</text>
<rect x="486" y="36" width="140" height="60" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.12; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="556" y="74" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">/councils</text>
<rect x="638" y="36" width="140" height="60" rx="10" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.12; stroke: hsl(var(--zone-prompts)); stroke-width: 1.5"/>
<text x="708" y="74" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">/globe</text>
<rect x="790" y="36" width="140" height="60" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.12; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="860" y="74" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="14">/learn</text>
<text x="480" y="120" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">Press command-K and type a path from any slide</text>
</svg> <!-- .element: class="fragment" -->

Six entry points into the same repository. <!-- .element: class="fragment" -->

*Source: `viz/README.md` "Views" table · command palette per `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` §7*

Note: Everything cited in these decks can be opened directly: press command-K and type a path from any slide.

---

## Trace one prompt end-to-end

Worked example (C01 · CARF reporting):

1. Prompt: `prompts/neobank/legal/carf/prompt.md`
2. Reply: `prompts/replies/neobank/c01-legal-compliance/carf/reply.md` (+ `research-evidence.md`, `diagrams-and-charts.md`)
3. Execution: `execution/results/c01-legal-compliance/carf/execution-result.md`
4. Citations: `[S#]` → physical source paths in `prompts/replies/research/SOURCE-CITATION-MAP.md`

The prompt's question — "Which data fields are required for SARS CARF reporting?" — is answered with the real CARF reporting schema: user identification, jurisdiction, reporting R-CASP, transaction type, asset type, dates, values, counterparty.

<svg role="img" aria-label="Pipeline from prompt.md through reply.md, research-evidence.md and diagrams-and-charts.md to SOURCE-CITATION-MAP, with the CARF execution result as a side branch" viewBox="0 0 960 300" width="100%" height="300" style="max-height: 278px" preserveAspectRatio="xMidYMid meet">
<title>CARF example: one prompt, one reply, one execution result, one citation chain</title>
<text x="480" y="14" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12" letter-spacing="2">ONE PROMPT, FOUR HOPS</text>
<rect x="22" y="26" width="172" height="104" rx="10" style="fill: hsl(var(--zone-prompts)); fill-opacity: 0.12; stroke: hsl(var(--zone-prompts)); stroke-width: 2"/>
<text x="36" y="54" font-size="20">📝</text><text x="36" y="80" style="fill: hsl(var(--zone-prompts))" font-size="13" font-weight="700">prompt.md</text>
<text x="36" y="98" style="fill: hsl(var(--muted-foreground))" font-size="10">prompts/neobank/</text>
<text x="36" y="112" style="fill: hsl(var(--muted-foreground))" font-size="10">legal/carf/</text>
<path d="M198 78 H212" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M212 72 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="222" y="26" width="172" height="104" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.12; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="236" y="54" font-size="20">💬</text><text x="236" y="80" style="fill: hsl(var(--primary))" font-size="13" font-weight="700">reply.md</text>
<text x="236" y="98" style="fill: hsl(var(--muted-foreground))" font-size="10">c01-legal-compliance/</text>
<text x="236" y="112" style="fill: hsl(var(--muted-foreground))" font-size="10">carf/ · UnConsolidated</text>
<path d="M398 78 H412" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M412 72 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="422" y="26" width="172" height="104" rx="10" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.12; stroke: hsl(var(--zone-execution)); stroke-width: 2"/>
<text x="436" y="54" font-size="20">🔬</text><text x="436" y="80" style="fill: hsl(var(--zone-execution))" font-size="12" font-weight="700">research-evidence.md</text>
<text x="436" y="98" style="fill: hsl(var(--muted-foreground))" font-size="10">graded claims</text>
<text x="436" y="112" style="fill: hsl(var(--muted-foreground))" font-size="10">[S#] citations</text>
<path d="M598 78 H612" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M612 72 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="622" y="26" width="172" height="104" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.12; stroke: hsl(var(--primary)); stroke-width: 2"/>
<text x="636" y="54" font-size="20">📊</text><text x="636" y="80" style="fill: hsl(var(--primary))" font-size="11" font-weight="700">diagrams-and-charts.md</text>
<text x="636" y="98" style="fill: hsl(var(--muted-foreground))" font-size="10">visual artefacts</text>
<text x="636" y="112" style="fill: hsl(var(--muted-foreground))" font-size="10">reply companion</text>
<path d="M798 78 H812" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M812 72 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="822" y="26" width="116" height="104" rx="10" style="fill: hsl(var(--highlight)); fill-opacity: 0.16; stroke: hsl(var(--highlight)); stroke-width: 2"/>
<text x="836" y="54" font-size="20">🔗</text><text x="836" y="80" style="fill: hsl(var(--highlight))" font-size="11" font-weight="700">SOURCE-</text>
<text x="836" y="94" style="fill: hsl(var(--highlight))" font-size="11" font-weight="700">CITATION-MAP</text>
<text x="836" y="112" style="fill: hsl(var(--muted-foreground))" font-size="10">[S#] → path</text>
<path d="M308 130 V154" style="stroke: hsl(var(--zone-execution)); stroke-width: 2; fill: none"/><path d="M302 154 l6 8 6 -8 z" style="fill: hsl(var(--zone-execution))"/>
<rect x="222" y="164" width="370" height="48" rx="9" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="236" y="184" style="fill: hsl(var(--foreground))" font-size="12" font-weight="700">execution-result.md</text>
<text x="236" y="202" style="fill: hsl(var(--muted-foreground))" font-size="10">execution/results/c01-legal-compliance/carf/execution-result.md</text>
<text x="620" y="184" style="fill: hsl(var(--muted-foreground))" font-size="12">↳ feeds the built artefact back into the chain</text>
<text x="622" y="206" style="fill: hsl(var(--muted-foreground))" font-size="12">C01 · CARF reporting · ledger roster</text>
<text x="480" y="230" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">Cited paths (verbatim) are listed in the four hops above → SOURCE-CITATION-MAP maps every [S#]</text>
<rect x="20" y="240" width="920" height="54" rx="10" style="fill: hsl(var(--highlight)); fill-opacity: 0.12; stroke: hsl(var(--highlight)); stroke-width: 1.5"/>
<text x="36" y="261" style="fill: hsl(var(--foreground))" font-size="13" font-weight="700">Q: Which data fields are required for SARS CARF reporting?</text>
<text x="36" y="283" style="fill: hsl(var(--muted-foreground))" font-size="12">CARF schema: user identification · jurisdiction · reporting R-CASP · transaction type · asset type · dates · values · counterparty</text>
</svg> <!-- .element: class="fragment" -->

One prompt, one reply, one execution result, one citation chain. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` "Purpose" example · `prompts/replies/MASTER-INDEX.md` (neobank/c01-legal-compliance/carf) · `execution/EXECUTION_LEDGER.md` C01 roster*

Note: One prompt, one reply, one execution result, one citation chain — that is the whole system in four hops.

---

## Closing — sources & next steps

- <span aria-hidden="true">💬</span> The full corpus index: `prompts/replies/MASTER-INDEX.md` — every folder and file
- Next: **deck 04 — Councils & Governance** — who routes these prompts (two planes, R1–R6)
- Back: deck 01 Repo Orientation · deck 02 Program Brief

<svg role="img" aria-label="Deck sequence: deck 01 Repo Orientation, deck 02 Program Brief, deck 03 Prompts and Replies, next deck 04 Councils and Governance" viewBox="0 0 960 130" width="100%" height="130" preserveAspectRatio="xMidYMid meet">
<title>The four-deck learning path and the corpus index</title>
<rect x="20" y="28" width="200" height="66" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="120" y="70" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="13">01 · Repo Orientation</text>
<path d="M224 61 H248" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M248 55 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="260" y="28" width="200" height="66" rx="10" style="fill: hsl(var(--primary)); fill-opacity: 0.10; stroke: hsl(var(--primary)); stroke-width: 1.5"/>
<text x="360" y="70" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="13">02 · Program Brief</text>
<path d="M464 61 H488" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M488 55 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="500" y="28" width="200" height="66" rx="10" style="fill: hsl(var(--highlight)); fill-opacity: 0.18; stroke: hsl(var(--highlight)); stroke-width: 2"/>
<text x="600" y="70" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="13" font-weight="700">03 · Prompts &amp; Replies</text>
<path d="M704 61 H728" style="stroke: hsl(var(--muted-foreground)); stroke-width: 2; fill: none"/><path d="M728 55 l8 6 -8 6 z" style="fill: hsl(var(--muted-foreground))"/>
<rect x="740" y="28" width="200" height="66" rx="10" style="fill: hsl(var(--zone-execution)); fill-opacity: 0.10; stroke: hsl(var(--zone-execution)); stroke-width: 1.5"/>
<text x="840" y="70" text-anchor="middle" style="fill: hsl(var(--foreground))" font-size="13">04 · Councils &amp; Governance</text>
<text x="480" y="120" text-anchor="middle" style="fill: hsl(var(--muted-foreground))" font-size="12">Corpus index: prompts/replies/MASTER-INDEX.md · 201 questions answered with graded, citable evidence</text>
</svg> <!-- .element: class="fragment" -->

The knowledge engine is complete; governance routes the work. <!-- .element: class="fragment" -->

*Source: `prompts/replies/README.md` · `prompts/replies/MASTER-INDEX.md` · `prompts/viz/TASK-INDEX.md`*

Note: The replies system is the program's knowledge engine — 201 questions answered with graded, citable evidence. Deck 04 shows the governance that routes the work.
