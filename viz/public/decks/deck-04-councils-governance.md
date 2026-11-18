## 16 Councils, Two Planes, Six Routing Rules

<p aria-hidden="true" style="font-size:1.5em;margin:0 0 0.2em 0">🏛️ ⚙️ 🧭 🔐 ⬆️ ⏱️ 🤝</p>

<svg role="img" aria-label="Governance crest chaining Sparkling Curious to the command, workforce and staff planes" width="100%" height="86" viewBox="0 0 900 86" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="crest-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-stremiium))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" font-size="12" text-anchor="middle">
    <rect x="18" y="20" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="108" y="38" fill="hsl(var(--zone-stremiium))" font-weight="700">SC-MASTER-001</text>
    <text x="108" y="55" fill="hsl(var(--zone-stremiium))">Sparkling Curious</text>
    <line x1="200" y1="42" x2="240" y2="42" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#crest-arrow)"/>
    <rect x="246" y="20" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="336" y="38" fill="hsl(var(--zone-stremiium))" font-weight="700">COMMAND 🏛️</text>
    <text x="336" y="55" fill="hsl(var(--zone-stremiium))">C01–C16 captains</text>
    <line x1="428" y1="42" x2="468" y2="42" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#crest-arrow)"/>
    <rect x="474" y="20" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="564" y="38" fill="hsl(var(--zone-execution))" font-weight="700">WORKFORCE ⚙️</text>
    <text x="564" y="55" fill="hsl(var(--zone-execution))">cNN-* → AGT → SUB</text>
    <line x1="656" y1="42" x2="696" y2="42" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#crest-arrow)"/>
    <rect x="702" y="20" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="792" y="38" fill="hsl(var(--primary))" font-weight="700">STAFF 🧭</text>
    <text x="792" y="55" fill="hsl(var(--primary))">CRD gates · META advice</text>
  </g>
</svg>

- Governance model: **`two-plane-hierarchy`** · mapping v1.1.0 (2026-08-22) <!-- .element: class="fragment" -->
- Owner: Sparkling Curious (`SC-MASTER-001`) <!-- .element: class="fragment" -->
- Machine-readable sources: `.stremiium/config/council-department-mapping.json`, `.stremiium/registry/master-registry.json` <!-- .element: class="fragment" -->
- Learn deck 04 of 04 · 14 slides <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` header · `.stremiium/governance/workflow-routing.md`*

Note: The governance deck: how work enters the org, who may command whom, and where escalation stops. Routing rules are quoted verbatim from the governance sources.

---

## The two-plane hierarchy

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🏛️ ⚙️ 🧭</p>

<svg role="img" aria-label="Two-plane hierarchy: Stremiium to Sparkling Curious SC-MASTER-001, then Meta-Councils advisory only, Coordinator Staff Line CRD with interception rights, and Councils C01 to C16 command plane; councils own Departments cNN workforce plane, Agents AGT, Subagents SUB, and Skills Tools Workflows" width="100%" height="330" viewBox="0 0 920 330" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="hier-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-stremiium))"/></marker>
    <marker id="hier-arrow-advisory" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--primary))"/></marker>
  </defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <rect x="350" y="6" width="220" height="32" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="460" y="27" font-size="14" font-weight="700" fill="hsl(var(--primary))">Stremiium</text>
    <line x1="460" y1="38" x2="460" y2="54" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#hier-arrow)"/>
    <rect x="320" y="56" width="280" height="36" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2.5"/>
    <text x="460" y="80" font-size="14" font-weight="700" fill="hsl(var(--zone-stremiium))">Sparkling Curious (SC-MASTER-001)</text>
    <line x1="460" y1="92" x2="460" y2="106" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <line x1="155" y1="106" x2="765" y2="106" stroke="hsl(var(--primary))" stroke-width="2"/>
    <line x1="155" y1="106" x2="155" y2="120" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#hier-arrow-advisory)"/>
    <line x1="460" y1="106" x2="460" y2="120" stroke="hsl(var(--primary))" stroke-width="2" marker-end="url(#hier-arrow-advisory)"/>
    <line x1="765" y1="106" x2="765" y2="120" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#hier-arrow)"/>

    <rect x="30" y="122" width="250" height="62" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="155" y="145" font-size="13" font-weight="700" fill="hsl(var(--zone-stremiium))">🧭 Meta-Councils · META-*</text>
    <text x="155" y="166" font-size="11" fill="hsl(var(--zone-stremiium))">advisory only, no line authority</text>

    <rect x="335" y="122" width="250" height="62" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="460" y="145" font-size="13" font-weight="700" fill="hsl(var(--primary))">⚙️ Coordinator Staff Line · CRD-*</text>
    <text x="460" y="166" font-size="11" fill="hsl(var(--primary))">cross-cutting gates; may intercept</text>

    <rect x="640" y="122" width="250" height="62" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2.5"/>
    <text x="765" y="145" font-size="13" font-weight="700" fill="hsl(var(--zone-stremiium))">🏛️ Councils · C01–C16</text>
    <text x="765" y="166" font-size="11" fill="hsl(var(--zone-stremiium))">COMMAND PLANE</text>

    <line x1="765" y1="184" x2="765" y2="200" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#hier-arrow)"/>
    <rect x="640" y="202" width="250" height="36" rx="8" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2.5"/>
    <text x="765" y="226" font-size="13" font-weight="700" fill="hsl(var(--zone-execution))">Departments · cNN-*</text>
    <text x="765" y="262" font-size="11" fill="hsl(var(--zone-execution))">WORKFORCE PLANE</text>
    <line x1="765" y1="238" x2="765" y2="276" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#hier-arrow)"/>

    <rect x="560" y="278" width="140" height="30" rx="7" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="630" y="298" font-size="12" fill="hsl(var(--zone-execution))">Agents · AGT-*</text>
    <line x1="702" y1="293" x2="740" y2="293" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#hier-arrow)"/>
    <rect x="742" y="278" width="148" height="30" rx="7" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="816" y="298" font-size="12" fill="hsl(var(--zone-execution))">Subagents · SUB-*</text>
    <text x="630" y="324" font-size="11" fill="hsl(var(--zone-execution))">Skills / Tools / Workflows</text>
  </g>
</svg>

<details><summary>Semantic text fallback — two-plane hierarchy tree</summary><pre>Stremiium
└── Sparkling Curious (SC-MASTER-001)
    ├── Meta-Councils            META-*   advisory only, no line authority
    ├── Coordinator Staff Line   CRD-*    cross-cutting gates; may intercept
    └── Councils                 C01–C16  COMMAND PLANE
        └── Departments          cNN-*    WORKFORCE PLANE
            └── Agents           AGT-*
                └── Subagents    SUB-*</pre></details>

- **Command plane** (`.stremiium/agents/council-agents`): strategy, approval, arbitration, escalation to SC <!-- .element: class="fragment" -->
- **Workforce** (`.stremiium/agents/department-agents`): execution, specialist judgment, subagent fan-out <!-- .element: class="fragment" -->
- **Staff line** (`.stremiium/agents/coordinators`): cross-cutting enforcement · **Advisory** (`.stremiium/agents/meta-councils`): no line authority <!-- .element: class="fragment" -->
- Executive node: `EXEC-council-ceo.agent.md` (CEO proxy) <!-- .element: class="fragment" -->

*Source: `.stremiium/governance/workflow-routing.md` §1 "Canonical Hierarchy" + §2 · `.stremiium/config/council-department-mapping.json` "planes"*

Note: Captains command, departments execute, coordinators intercept on gates, meta-councils only advise. The tree is ratified policy, not an org chart sketch.

---

## Sparkling Curious (`SC-MASTER-001`)

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🧭 🏛️ ⬆️</p>

The master orchestrator's role in the routing contract:

<svg role="img" aria-label="Sparkling Curious routing contract steps: STEP 1 Intake, STEP 2 Council assign, STEP 5 Synthesis, STEP 6 Audit, plus arbitration under 24 hours and escalation to Mychael and the Board" width="100%" height="120" viewBox="0 0 920 120" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-stremiium))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" font-size="11" text-anchor="middle">
    <rect x="14" y="26" width="176" height="42" rx="9" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="102" y="44" fill="hsl(var(--zone-stremiium))" font-weight="700">STEP 1 · Intake</text>
    <text x="102" y="60" fill="hsl(var(--zone-stremiium))">classify intent → TBS</text>
    <line x1="192" y1="47" x2="212" y2="47" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#sc-arrow)"/>
    <rect x="214" y="26" width="176" height="42" rx="9" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="302" y="44" fill="hsl(var(--primary))" font-weight="700">STEP 2 · Council assign</text>
    <text x="302" y="60" fill="hsl(var(--primary))">domain matrix (R1)</text>
    <line x1="392" y1="47" x2="412" y2="47" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#sc-arrow)"/>
    <rect x="414" y="26" width="176" height="42" rx="9" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="502" y="44" fill="hsl(var(--zone-execution))" font-weight="700">STEP 5 · Synthesis</text>
    <text x="502" y="60" fill="hsl(var(--zone-execution))">dept → captain → SC</text>
    <line x1="592" y1="47" x2="612" y2="47" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#sc-arrow)"/>
    <rect x="614" y="26" width="176" height="42" rx="9" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="702" y="44" fill="hsl(var(--zone-stremiium))" font-weight="700">STEP 6 · Audit</text>
    <text x="702" y="60" fill="hsl(var(--zone-stremiium))">status boards per milestone</text>
    <rect x="812" y="16" width="94" height="62" rx="9" fill="none" stroke="hsl(var(--highlight))" stroke-width="2"/>
    <text x="859" y="40" fill="hsl(var(--highlight))" font-weight="700">⚖️ R3</text>
    <text x="859" y="58" fill="hsl(var(--highlight))">arbitrate &lt;24h</text>
    <text x="460" y="100" fill="hsl(var(--zone-stremiium))" font-size="12">⬆️ Escalation node: Council Captain → SC → Mychael → Board</text>
  </g>
</svg>

- **STEP 1 Intake** — SC classifies intent → TBS decomposition <!-- .element: class="fragment" -->
- **STEP 2 Council assign** — resolves owner via `council-department-mapping.json` (R1) <!-- .element: class="fragment" -->
- **STEP 5 Synthesis** — results roll up department → captain → SC <!-- .element: class="fragment" -->
- **STEP 6 Audit** — status boards updated per milestone <!-- .element: class="fragment" -->
- **Arbitration** — cross-council conflicts settled < 24h (R3) <!-- .element: class="fragment" -->
- **Escalation node** — Council Captain → SC → Mychael → Board <!-- .element: class="fragment" -->

*Source: `.stremiium/governance/workflow-routing.md` §3 "Routing Contract" + §4 · `.stremiium/config/council-department-mapping.json` "owner"*

Note: Sparkling Curious is the single entry point: intake, ownership, synthesis, audit, arbitration, and escalation all route through SC-MASTER-001.

---

## R1 — intake ownership

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🎯 🏛️ 🔐</p>

<svg role="img" aria-label="R1 rule badge and flow: a task routes through the domain matrix to the owning council captain before any department contact" width="100%" height="140" viewBox="0 0 900 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="r1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--primary))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <circle cx="52" cy="58" r="30" fill="none" stroke="hsl(var(--primary))" stroke-width="3"/>
    <text x="52" y="58" font-size="22" fill="hsl(var(--primary))">🎯</text>
    <text x="52" y="112" font-size="16" font-weight="700" fill="hsl(var(--primary))">R1</text>
    <text x="108" y="30" font-size="13" fill="hsl(var(--primary))" text-anchor="start">R1: task -&gt; owning council captain by domain matrix BEFORE ANY DEPARTMENT CONTACT</text>
    <rect x="108" y="44" width="130" height="40" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="173" y="69" font-size="12" fill="hsl(var(--primary))">TASK</text>
    <line x1="240" y1="64" x2="272" y2="64" stroke="hsl(var(--primary))" stroke-width="2" marker-end="url(#r1-arrow)"/>
    <rect x="274" y="44" width="170" height="40" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="359" y="69" font-size="12" fill="hsl(var(--primary))">DOMAIN MATRIX</text>
    <line x1="446" y1="64" x2="478" y2="64" stroke="hsl(var(--primary))" stroke-width="2" marker-end="url(#r1-arrow)"/>
    <rect x="480" y="44" width="190" height="40" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2.5"/>
    <text x="575" y="69" font-size="12" fill="hsl(var(--primary))">OWNING CAPTAIN</text>
    <line x1="700" y1="64" x2="752" y2="64" stroke="hsl(var(--highlight))" stroke-width="2" stroke-dasharray="5 4"/>
    <rect x="754" y="44" width="132" height="40" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2"/>
    <text x="820" y="69" font-size="11" fill="hsl(var(--highlight))">DIRECT DEPT: BLOCKED</text>
  </g>
</svg>

> "R1: task -> owning council captain by domain matrix **before any department contact**"

- Every task is first mapped to its owning council via the domain matrix in `.stremiium/config/council-department-mapping.json` <!-- .element: class="fragment" -->
- Departments are never contacted directly by the task source <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[0] · `.stremiium/governance/workflow-routing.md` §3 STEP 2*

Note: Rule one: ownership before delegation. The domain matrix decides which captain receives the task — no shortcuts straight to departments.

---

## R2 — decomposition limits

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🌿 🏛️ ⚙️</p>

<svg role="img" aria-label="R2 rule badge and bounded fan-out: a captain decomposes only to registered departments listed above, example C15 to c15 product management, c15 products BLT and c15 products fan tokens" width="100%" height="140" viewBox="0 0 900 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="r2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-execution))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <rect x="22" y="28" width="60" height="60" rx="14" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="3"/>
    <text x="52" y="58" font-size="22" fill="hsl(var(--zone-execution))">🌿</text>
    <text x="52" y="112" font-size="16" font-weight="700" fill="hsl(var(--zone-execution))">R2</text>
    <text x="108" y="30" font-size="13" fill="hsl(var(--zone-execution))" text-anchor="start">R2: captain decomposes to departments LISTED ABOVE ONLY</text>
    <rect x="108" y="46" width="150" height="46" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="183" y="66" font-size="12" fill="hsl(var(--zone-stremiium))" font-weight="700">C15 CAPTAIN</text>
    <text x="183" y="82" font-size="10" fill="hsl(var(--zone-stremiium))">registered set only</text>
    <line x1="260" y1="69" x2="292" y2="69" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#r2-arrow)"/>
    <line x1="292" y1="34" x2="292" y2="118" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <line x1="292" y1="34" x2="320" y2="34" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#r2-arrow)"/>
    <line x1="292" y1="76" x2="320" y2="76" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#r2-arrow)"/>
    <line x1="292" y1="118" x2="320" y2="118" stroke="hsl(var(--zone-execution))" stroke-width="2" marker-end="url(#r2-arrow)"/>
    <rect x="322" y="18" width="250" height="30" rx="7" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="447" y="38" font-size="11" fill="hsl(var(--zone-execution))">c15-product-management</text>
    <rect x="322" y="60" width="250" height="30" rx="7" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="447" y="80" font-size="11" fill="hsl(var(--zone-execution))">c15-products-blt</text>
    <rect x="322" y="102" width="250" height="30" rx="7" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
    <text x="447" y="122" font-size="11" fill="hsl(var(--zone-execution))">c15-products-fan-tokens</text>
    <rect x="610" y="46" width="276" height="46" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="748" y="66" font-size="12" fill="hsl(var(--highlight))" font-weight="700">NO OTHERS</text>
    <text x="748" y="82" font-size="10" fill="hsl(var(--highlight))">blast radius bounded</text>
  </g>
</svg>

> "R2: captain decomposes to departments **listed above only**"

- A captain may only fan work out to the departments registered under their council in the mapping <!-- .element: class="fragment" -->
- Example: C15 may decompose to `c15-product-management`, `c15-products-blt`, `c15-products-fan-tokens` — no others <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[1] + "councils".C15*

Note: Rule two bounds the blast radius: a captain commands exactly their registered departments, nothing else.

---

## R3 — cross-council arbitration

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🤝 ⚖️ 🧭</p>

<svg role="img" aria-label="R3 rule badge and arbitration flow: cross-council tasks convene captains and Sparkling Curious arbitrates conflicts within 24 hours" width="100%" height="140" viewBox="0 0 900 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="r3-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-stremiium))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <polygon points="52,24 78,40 78,74 52,90 26,74 26,40" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="3"/>
    <text x="52" y="64" font-size="20" fill="hsl(var(--zone-stremiium))">🤝</text>
    <text x="52" y="116" font-size="16" font-weight="700" fill="hsl(var(--zone-stremiium))">R3</text>
    <text x="108" y="30" font-size="13" fill="hsl(var(--zone-stremiium))" text-anchor="start">R3: cross-council tasks convene captains; SC ARBITRATES CONFLICTS &lt;24h</text>
    <rect x="108" y="48" width="150" height="44" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="183" y="68" font-size="12" fill="hsl(var(--zone-stremiium))">C-A + C-B</text>
    <text x="183" y="84" font-size="10" fill="hsl(var(--zone-stremiium))">shared task</text>
    <line x1="260" y1="70" x2="292" y2="70" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#r3-arrow)"/>
    <rect x="294" y="48" width="180" height="44" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="384" y="68" font-size="12" fill="hsl(var(--zone-stremiium))">CAPTAINS CONVENE</text>
    <text x="384" y="84" font-size="10" fill="hsl(var(--zone-stremiium))">relevant councils</text>
    <line x1="476" y1="70" x2="508" y2="70" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#r3-arrow)"/>
    <rect x="510" y="42" width="220" height="56" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2.5"/>
    <text x="620" y="64" font-size="12" fill="hsl(var(--highlight))" font-weight="700">SC ARBITRATES</text>
    <text x="620" y="84" font-size="11" fill="hsl(var(--highlight))">conflict settled &lt; 24 hours</text>
    <text x="770" y="72" font-size="11" fill="hsl(var(--zone-stremiium))" text-anchor="start">no shared</text>
    <text x="770" y="88" font-size="11" fill="hsl(var(--zone-stremiium))" text-anchor="start">work stalls</text>
  </g>
</svg>

> "R3: cross-council tasks convene captains; **SC arbitrates conflicts <24h**"

- Tasks spanning multiple councils convene the relevant captains <!-- .element: class="fragment" -->
- Conflicts between councils are arbitrated by Sparkling Curious within 24 hours <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[2] · `.stremiium/governance/workflow-routing.md` §4*

Note: Rule three keeps shared work from stalling: captains convene, and if they disagree, SC settles it inside a day.

---

## R4 — coordinator interception

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🔐 ⚙️ ⛔</p>

<svg role="img" aria-label="R4 rule badge and gate flow: coordinators CRD may intercept any step for git safety, security and cost gates, with standing gates git state safeguard, security compliance sentinel, resource cost governor and workflow orchestrator" width="100%" height="140" viewBox="0 0 900 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="r4-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--highlight))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <polygon points="52,20 82,32 82,62 52,92 22,62 22,32" fill="none" stroke="hsl(var(--highlight))" stroke-width="3"/>
    <text x="52" y="62" font-size="20" fill="hsl(var(--highlight))">🔐</text>
    <text x="52" y="116" font-size="16" font-weight="700" fill="hsl(var(--highlight))">R4</text>
    <text x="108" y="28" font-size="12.5" fill="hsl(var(--highlight))" text-anchor="start">R4: coordinators (CRD-*) may intercept any step for GIT-SAFETY / SECURITY / COST GATES</text>
    <rect x="108" y="46" width="140" height="42" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
    <text x="178" y="72" font-size="12" fill="hsl(var(--zone-stremiium))">ANY STEP</text>
    <line x1="250" y1="67" x2="282" y2="67" stroke="hsl(var(--highlight))" stroke-width="2" marker-end="url(#r4-arrow)"/>
    <rect x="284" y="38" width="230" height="58" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2.5"/>
    <text x="399" y="60" font-size="12" fill="hsl(var(--highlight))" font-weight="700">⚙️ CRD GATE</text>
    <text x="399" y="78" font-size="10" fill="hsl(var(--highlight))">halt or block on breach</text>
    <line x1="516" y1="67" x2="548" y2="67" stroke="hsl(var(--highlight))" stroke-width="2" marker-end="url(#r4-arrow)"/>
    <rect x="550" y="46" width="120" height="42" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2"/>
    <text x="610" y="72" font-size="12" fill="hsl(var(--highlight))">HALT / BLOCK</text>
    <text x="700" y="48" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">Standing gates:</text>
    <text x="700" y="66" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">git-state-safeguard · security-compliance-sentinel</text>
    <text x="700" y="84" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">resource-cost-governor · workflow-orchestrator</text>
    <text x="700" y="104" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">reports to SC + owning captain</text>
  </g>
</svg>

> "R4: coordinators (CRD-*) may intercept any step for **git-safety/security/cost gates**"

- Staff-line coordinators can halt or block any step on a gate breach <!-- .element: class="fragment" -->
- Standing gates: git-state-safeguard (no destructive ops without approval), security-compliance-sentinel (C01/C12 binding rules), resource-cost-governor (budget guard), workflow-orchestrator (sequencing) <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[3] · `.stremiium/governance/workflow-routing.md` §2 "Staff" + §3 STEP 4*

Note: Rule four is the enforcement backstop: at every step, the staff line can stop work for git safety, security, or cost — and reports to SC plus the owning captain.

---

## R5 — advisory boundary

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🧭 💬 🚫</p>

<svg role="img" aria-label="R5 rule badge and advisory boundary: meta-councils advise Sparkling Curious on request but never command departments directly and hold no line authority" width="100%" height="140" viewBox="0 0 900 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="r5-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-stremiium))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <path d="M22 26 H82 V62 H58 L44 76 V62 H22 Z" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="3" stroke-dasharray="5 3"/>
    <text x="52" y="58" font-size="20" fill="hsl(var(--zone-stremiium))">🧭</text>
    <text x="52" y="116" font-size="16" font-weight="700" fill="hsl(var(--zone-stremiium))">R5</text>
    <text x="108" y="30" font-size="13" fill="hsl(var(--zone-stremiium))" text-anchor="start">R5: meta-councils advise SC ON REQUEST; NEVER COMMAND DEPARTMENTS DIRECTLY</text>
    <rect x="108" y="46" width="180" height="44" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="198" y="66" font-size="12" fill="hsl(var(--zone-stremiium))">META-* advisory</text>
    <text x="198" y="82" font-size="10" fill="hsl(var(--zone-stremiium))">on request only</text>
    <line x1="290" y1="68" x2="322" y2="68" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#r5-arrow)"/>
    <rect x="324" y="46" width="150" height="44" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2.5"/>
    <text x="399" y="72" font-size="12" fill="hsl(var(--zone-stremiium))">SC receives advice</text>
    <line x1="476" y1="68" x2="540" y2="68" stroke="hsl(var(--highlight))" stroke-width="2" stroke-dasharray="6 4"/>
    <rect x="542" y="46" width="180" height="44" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2"/>
    <text x="632" y="66" font-size="11" fill="hsl(var(--highlight))">DEPARTMENTS: NO COMMAND</text>
    <text x="632" y="82" font-size="10" fill="hsl(var(--highlight))">zero line authority</text>
    <text x="750" y="58" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">recommendations to SC only</text>
    <text x="750" y="78" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">no sideways control</text>
  </g>
</svg>

> "R5: meta-councils advise SC **on request; never command departments directly**"

- Meta-councils (META-*) are consultative bodies with recommendations to SC only <!-- .element: class="fragment" -->
- They hold no line authority over departments or agents <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[4] · `.stremiium/governance/workflow-routing.md` §2 "Advisory"*

Note: Rule five: advice flows upward to SC on request, never sideways into the workforce. Advisory influence, zero command.

---

## R6 — subagent containment

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🔒 🌱 🧬</p>

<svg role="img" aria-label="R6 rule badge and containment flow: subagents SUB and The dash instantiate only under a registered AGT parent and new files violating the ID prefixes are invalid" width="100%" height="140" viewBox="0 0 900 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="r6-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--primary))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <polygon points="52,22 82,56 52,90 22,56" fill="none" stroke="hsl(var(--primary))" stroke-width="3"/>
    <text x="52" y="62" font-size="20" fill="hsl(var(--primary))">🔒</text>
    <text x="52" y="116" font-size="16" font-weight="700" fill="hsl(var(--primary))">R6</text>
    <text x="108" y="30" font-size="13" fill="hsl(var(--primary))" text-anchor="start">R6: subagents (SUB-/The-*) instantiate ONLY UNDER A REGISTERED AGT PARENT</text>
    <rect x="108" y="46" width="170" height="44" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2.5"/>
    <text x="193" y="66" font-size="12" fill="hsl(var(--primary))" font-weight="700">AGT PARENT</text>
    <text x="193" y="82" font-size="10" fill="hsl(var(--primary))">registered in registry</text>
    <line x1="280" y1="68" x2="312" y2="68" stroke="hsl(var(--primary))" stroke-width="2" marker-end="url(#r6-arrow)"/>
    <rect x="314" y="46" width="170" height="44" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
    <text x="399" y="66" font-size="12" fill="hsl(var(--primary))">SUB-* / The-*</text>
    <text x="399" y="82" font-size="10" fill="hsl(var(--primary))">leaf under parent</text>
    <rect x="520" y="38" width="366" height="60" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="703" y="60" font-size="11.5" fill="hsl(var(--highlight))" font-weight="700">PREFIX LAW — INVALID IDS REJECTED</text>
    <text x="703" y="80" font-size="10.5" fill="hsl(var(--highlight))">AGT / SUB / CRD / META / EXEC / Cnn / SPEC / SC</text>
    <line x1="486" y1="68" x2="518" y2="68" stroke="hsl(var(--highlight))" stroke-width="2" stroke-dasharray="5 4"/>
  </g>
</svg>

> "R6: subagents (SUB-/The-*) instantiate **only under a registered AGT parent**"

- Every subagent hangs off a registered parent agent <!-- .element: class="fragment" -->
- New files violating ID prefixes (AGT/SUB/CRD/META/EXEC/Cnn/SPEC/SC) are invalid <!-- .element: class="fragment" -->

*Source: `.stremiium/config/council-department-mapping.json` "routing_rules"[5] · `.stremiium/governance/workflow-routing.md` §5*

Note: Rule six keeps the leaf of the tree attached: subagents exist only under registered parents, and prefix law validates every new agent file.

---

## Council captain map (C01–C16)

<!-- .slide: class="deck-compact" -->
<style>.deck-compact table{font-size:0.72em;line-height:1.12}.deck-compact td,.deck-compact th{padding:2px 6px}</style>

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🏛️ 🏛️ 🏛️</p>

<svg role="img" aria-label="Command plane ribbon of sixteen councils C01 through C16" width="100%" height="70" viewBox="0 0 920 70" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <g aria-hidden="true" font-family="inherit" text-anchor="middle" font-size="10">
    <text x="14" y="42" font-size="11" fill="hsl(var(--zone-stremiium))" text-anchor="start">COMMAND PLANE · 16 councils</text>
    <g fill="hsl(var(--zone-stremiium))">
      <circle cx="248" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="248" y="40">C01</text>
      <circle cx="290" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="290" y="40">C02</text>
      <circle cx="332" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="332" y="40">C03</text>
      <circle cx="374" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="374" y="40">C04</text>
      <circle cx="416" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="416" y="40">C05</text>
      <circle cx="458" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="458" y="40">C06</text>
      <circle cx="500" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="500" y="40">C07</text>
      <circle cx="542" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="542" y="40">C08</text>
      <circle cx="584" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="584" y="40">C09</text>
      <circle cx="626" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="626" y="40">C10</text>
      <circle cx="668" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="668" y="40">C11</text>
      <circle cx="710" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="710" y="40">C12</text>
      <circle cx="752" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="752" y="40">C13</text>
      <circle cx="794" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="794" y="40">C14</text>
      <circle cx="836" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="836" y="40">C15</text>
      <circle cx="878" cy="36" r="17" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="878" y="40">C16</text>
    </g>
  </g>
</svg>

| Council | Captain | Departments |
|---|---|---|
| C01 Legal-Compliance | `C01-legal-compliance-captain` | c01-legal-compliance |
| C02 Operations | `C02-vp-operations` | c02-operations, c02-operations-infrastructure |
| C03 Admin-Knowledge | `C03-chief-librarian` | c03-admin-knowledge |
| C04 Strategy-Growth | `C04-chief-strategist` | c04-strategy-growth, strategy-operations, strategy-research, strategy-core |
| C05 HR-Culture | `C05-chief-people-officer` | c05-hr-culture, c05-hr-people |
| C06 Engineering-Infra | `C06-chief-technology-officer` | c06-engineering-infrastructure |
| C07 Sales-BizDev | `C07-rainmaker-captain` | c07-sales-business-development, c07-sales-revenue |
| C08 Design-Creative | `C08-chief-design-officer` | c08-design-creative |
| C09 Marketing-Comms | `C09-chief-marketing-officer` | c09-marketing-brand, c09-marketing-growth, c09-marketing-communications |
| C10 Finance-IR | `C10-chief-financial-officer` | c10-finance-cfo, c10-finance-investor-relations, c10-algo-trading |
| C11 Dev-Engineering | `C11-dev-engineering-captain` | c11-dev-engineering |
| C12 Cybersecurity-Intel | `C12-cybersecurity-intel-captain` | c12-cybersecurity-intel |
| C13 Web3-Finance | `C13-web3-finance-captain` | c13-web3-finance |
| C14 Customer-Success | `C14-customer-success-captain` | c14-customer-success |
| C15 Product-Management | `C15-product-management-captain` | c15-product-management, c15-products-blt, c15-products-fan-tokens |
| C16 Banking-Fintech | `C16-banking-fintech-captain` | c16-banking-fintech, c16-website-product |

*Source: `.stremiium/config/council-department-mapping.json` "councils" (v1.1.0) — department IDs as listed, abbreviated only by dropping the repeated `cNN-` prefix within C04*

Note: The full command plane: sixteen captains and their registered departments, straight from the machine-readable mapping. This is the table R1 and R2 operate on.

---

## 15 CRD coordinators (staff line)

<!-- .slide: class="deck-compact" -->
<style>.deck-compact table{font-size:0.72em;line-height:1.12}.deck-compact td,.deck-compact th{padding:2px 6px}</style>

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">⚙️ 🔐 💰 📋</p>

<svg role="img" aria-label="Coordinator function distribution bar chart and grid of fifteen CRD chips grouped by function: workflow, git, security, cost, compliance, liaison, research, data, knowledge, incident, deployment, lifecycle, project, executive and engineering, one coordinator per function" width="100%" height="170" viewBox="0 0 920 170" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <text x="14" y="16" font-size="11" fill="hsl(var(--primary))" text-anchor="start">Coordinator function distribution · 1 per function · 15 total</text>
    <g font-size="8" fill="hsl(var(--primary))">
      <rect x="20" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="42" y="70">workflow</text>
      <rect x="80" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="102" y="70">git</text>
      <rect x="140" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="162" y="70">security</text>
      <rect x="200" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="222" y="70">cost</text>
      <rect x="260" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="282" y="70">compliance</text>
      <rect x="320" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="342" y="70">liaison</text>
      <rect x="380" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="402" y="70">research</text>
      <rect x="440" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="462" y="70">data</text>
      <rect x="500" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="522" y="70">knowledge</text>
      <rect x="560" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="582" y="70">incident</text>
      <rect x="620" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="642" y="70">deployment</text>
      <rect x="680" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="702" y="70">lifecycle</text>
      <rect x="740" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="762" y="70">project</text>
      <rect x="800" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="822" y="70">executive</text>
      <rect x="860" y="26" width="44" height="34" rx="3" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="882" y="70">engineering</text>
    </g>
    <text x="14" y="92" font-size="11" fill="hsl(var(--primary))" text-anchor="start">Staff-line chips · interception rights under R4 · several embedded as C01–C12 staff</text>
    <g font-size="8.5">
      <rect x="14" y="100" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--primary))"/><text x="101" y="114" fill="hsl(var(--primary))">crd-workflow-orchestrator</text>
      <rect x="196" y="100" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-execution))"/><text x="283" y="114" fill="hsl(var(--zone-execution))">crd-git-state-safeguard</text>
      <rect x="378" y="100" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-stremiium))"/><text x="465" y="114" fill="hsl(var(--zone-stremiium))">crd-security-compliance-sentinel</text>
      <rect x="560" y="100" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-execution))"/><text x="647" y="114" fill="hsl(var(--zone-execution))">crd-resource-cost-governor</text>
      <rect x="742" y="100" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--primary))"/><text x="829" y="114" fill="hsl(var(--primary))">crd-engineering-product</text>

      <rect x="14" y="124" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-stremiium))"/><text x="101" y="138" fill="hsl(var(--zone-stremiium))">crd-council-liaison</text>
      <rect x="196" y="124" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--primary))"/><text x="283" y="138" fill="hsl(var(--primary))">crd-compliance-ops</text>
      <rect x="378" y="124" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-stremiium))"/><text x="465" y="138" fill="hsl(var(--zone-stremiium))">crd-executive-liaison</text>
      <rect x="560" y="124" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-stremiium))"/><text x="647" y="138" fill="hsl(var(--zone-stremiium))">crd-research-ops</text>
      <rect x="742" y="124" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--primary))"/><text x="829" y="138" fill="hsl(var(--primary))">crd-data-governance</text>

      <rect x="14" y="148" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-stremiium))"/><text x="101" y="162" fill="hsl(var(--zone-stremiium))">crd-knowledge-flow</text>
      <rect x="196" y="148" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-execution))"/><text x="283" y="162" fill="hsl(var(--zone-execution))">crd-incident-response</text>
      <rect x="378" y="148" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--zone-execution))"/><text x="465" y="162" fill="hsl(var(--zone-execution))">crd-deployment</text>
      <rect x="560" y="148" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--primary))"/><text x="647" y="162" fill="hsl(var(--primary))">crd-agent-lifecycle</text>
      <rect x="742" y="148" width="174" height="20" rx="5" fill="none" stroke="hsl(var(--primary))"/><text x="829" y="162" fill="hsl(var(--primary))">crd-project-sync</text>
    </g>
  </g>
</svg>

| Coordinator | Duty |
|---|---|
| `crd-workflow-orchestrator` | sequencing, handoffs, task-routing table |
| `crd-git-state-safeguard` | destructive-op guard |
| `crd-security-compliance-sentinel` | security interception |
| `crd-resource-cost-governor` | budget/cost guard |
| `crd-engineering-product` | engineering coordination |
| `crd-council-liaison` | consult clocks + department fold coverage |
| `crd-compliance-ops` | regulatory screen calendar (C01 staff) |
| `crd-executive-liaison` | briefings + override-log integrity |
| `crd-research-ops` | evidence library + contradiction queue (C04 staff) |
| `crd-data-governance` | PI inventory + flow declarations (C01/C12 staff) |
| `crd-knowledge-flow` | learnings routing + memory hygiene (C03 staff) |
| `crd-incident-response` | incident command process (C12 staff) |
| `crd-deployment` | release gates + rollback readiness (C06/C11 staff) |
| `crd-agent-lifecycle` | P12 transition mechanics + registry parity |
| `crd-project-sync` | milestones + dependency chains |

*Source: `.stremiium/config/council-department-mapping.json` "coordinators" (duties quoted)*

Note: The staff line: fifteen coordinators with interception rights under R4, several of them embedded as C01–C12 staff.

---

## Escalation path + SLAs

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">⬆️ ⏱️ 🔐 🏛️</p>

<svg role="img" aria-label="Escalation ladder from Agent to Captain to Sparkling Curious to Mychael the CEO to the Board, with response SLA log-scale bars Critical 1 hour, High 4 hours, Medium 24 hours, Low 72 hours, and a highlighted gold critical skip path straight to SC plus C01 plus C16 within 1 hour" width="100%" height="320" viewBox="0 0 920 320" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="esc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--zone-stremiium))"/></marker></defs>
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <text x="14" y="18" font-size="11" fill="hsl(var(--zone-stremiium))" text-anchor="start">⬆️ Escalation ladder</text>
    <g font-size="12">
      <rect x="20" y="26" width="230" height="34" rx="8" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="135" y="48" fill="hsl(var(--zone-execution))">Agent</text>
      <line x1="135" y1="60" x2="135" y2="74" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#esc-arrow)"/>
      <rect x="20" y="76" width="230" height="34" rx="8" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="135" y="98" fill="hsl(var(--zone-execution))">Captain</text>
      <line x1="135" y1="110" x2="135" y2="124" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#esc-arrow)"/>
      <rect x="20" y="126" width="230" height="34" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2.5"/><text x="135" y="148" fill="hsl(var(--zone-stremiium))">SC (Sparkling Curious)</text>
      <line x1="135" y1="160" x2="135" y2="174" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#esc-arrow)"/>
      <rect x="20" y="176" width="230" height="34" rx="8" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="135" y="198" fill="hsl(var(--zone-stremiium))">Mychael (CEO)</text>
      <line x1="135" y1="210" x2="135" y2="224" stroke="hsl(var(--zone-stremiium))" stroke-width="2" marker-end="url(#esc-arrow)"/>
      <rect x="20" y="226" width="230" height="34" rx="8" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="135" y="248" fill="hsl(var(--primary))">Board</text>
    </g>
    <text x="290" y="18" font-size="11" fill="hsl(var(--primary))" text-anchor="start">⏱️ Response SLA · log-scale durations</text>
    <g font-size="11" text-anchor="start">
      <text x="290" y="52" fill="hsl(var(--highlight))">Critical</text>
      <rect x="360" y="40" width="80" height="16" rx="3" fill="none" stroke="hsl(var(--highlight))" stroke-width="2"/>
      <text x="448" y="52" fill="hsl(var(--highlight))">1h</text>
      <text x="290" y="92" fill="hsl(var(--zone-execution))">High</text>
      <rect x="360" y="80" width="164" height="16" rx="3" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/>
      <text x="532" y="92" fill="hsl(var(--zone-execution))">4h</text>
      <text x="290" y="132" fill="hsl(var(--zone-stremiium))">Medium</text>
      <rect x="360" y="120" width="273" height="16" rx="3" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/>
      <text x="641" y="132" fill="hsl(var(--zone-stremiium))">24h</text>
      <text x="290" y="172" fill="hsl(var(--primary))">Low</text>
      <rect x="360" y="160" width="340" height="16" rx="3" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/>
      <text x="708" y="172" fill="hsl(var(--primary))">72h</text>
    </g>
    <line x1="135" y1="150" x2="135" y2="282" stroke="hsl(var(--highlight))" stroke-width="2.5" stroke-dasharray="6 4"/>
    <line x1="135" y1="282" x2="360" y2="282" stroke="hsl(var(--highlight))" stroke-width="2.5"/>
    <rect x="362" y="262" width="338" height="40" rx="8" fill="none" stroke="hsl(var(--highlight))" stroke-width="2.5"/>
    <text x="531" y="279" font-size="11.5" fill="hsl(var(--highlight))" font-weight="700">🔐 CRITICAL SKIP: SC + C01 + C16</text>
    <text x="531" y="295" font-size="10.5" fill="hsl(var(--highlight))">immediate · 1h SLA</text>
    <text x="290" y="222" font-size="10.5" fill="hsl(var(--primary))" text-anchor="start">VIZ-task conflicts → SC arbitration (R3, &lt; 24h)</text>
    <text x="290" y="262" font-size="10.5" fill="hsl(var(--highlight))" text-anchor="start">gold path jumps the queue</text>
  </g>
</svg>

> "Council Captain → SC → Mychael → Board. Critical security/regulatory skips to SC/Mychael."

> "Response SLAs: **Critical 1h · High 4h · Medium 24h · Low 72h**."

- Critical security/regulatory/privacy events skip straight to SC + C01 + C16 immediately (1h SLA) <!-- .element: class="fragment" -->
- VIZ-task conflicts escalate to Sparkling Curious for arbitration per routing R3 (< 24h) <!-- .element: class="fragment" -->

*Source: `.stremiium/governance/workflow-routing.md` §4 "Escalation & SLA" · `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` §14*

Note: Every chain ends at the Board, but critical events jump the queue: straight to SC plus Legal-Compliance and Banking-Fintech within the hour.

---

## Private-funded boundary · model lock · vocabulary

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🤝 🔒 📖</p>

<svg role="img" aria-label="Three standing laws: private-funded boundary requiring C01 plus C16 plus C10 plus Mychael approval, model lock auto Kilo Code Auto Free, and vocabulary law with Council as sole canonical noun and Squad retired" width="100%" height="130" viewBox="0 0 920 130" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <g aria-hidden="true" font-family="inherit" text-anchor="middle">
    <rect x="14" y="20" width="290" height="98" rx="10" fill="none" stroke="hsl(var(--highlight))" stroke-width="2.5"/>
    <text x="159" y="46" font-size="14" fill="hsl(var(--highlight))" font-weight="700">🤝 PRIVATE-FUNDED</text>
    <text x="159" y="70" font-size="11" fill="hsl(var(--highlight))">no public investor/client funds</text>
    <text x="159" y="88" font-size="11" fill="hsl(var(--highlight))">C01 + C16 + C10 + Mychael</text>
    <text x="159" y="106" font-size="11" fill="hsl(var(--highlight))">private-funded-only by default</text>

    <rect x="315" y="20" width="290" height="98" rx="10" fill="none" stroke="hsl(var(--primary))" stroke-width="2.5"/>
    <text x="460" y="46" font-size="14" fill="hsl(var(--primary))" font-weight="700">🔒 MODEL LOCK</text>
    <text x="460" y="70" font-size="11" fill="hsl(var(--primary))">auto · Kilo Code Auto Free</text>
    <text x="460" y="88" font-size="11" fill="hsl(var(--primary))">provider/model kilo-auto/free</text>
    <text x="460" y="106" font-size="11" fill="hsl(var(--primary))">do not substitute</text>

    <rect x="616" y="20" width="290" height="98" rx="10" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2.5"/>
    <text x="761" y="46" font-size="14" fill="hsl(var(--zone-stremiium))" font-weight="700">📖 VOCABULARY LAW</text>
    <text x="761" y="70" font-size="11" fill="hsl(var(--zone-stremiium))">"Council" = sole canonical noun</text>
    <text x="761" y="88" font-size="11" fill="hsl(var(--zone-stremiium))">"Squad" retired; aliases one cycle</text>
    <text x="761" y="106" font-size="11" fill="hsl(var(--zone-stremiium))">lexical + structural retirement</text>
  </g>
</svg>

- **Private-funded boundary:** no public investor/client funds without separate C01 + C16 + C10 + Mychael approval — all execution artifacts state **private-funded-only** unless separately approved <!-- .element: class="fragment" -->
- **Model lock:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`) — do not substitute another model <!-- .element: class="fragment" -->
- **Vocabulary law:** "Council" is the sole canonical collective noun; "Squad" is retired (structurally and lexically); frontmatter `aliases: [squad]` tolerated one release cycle <!-- .element: class="fragment" -->

*Source: `.kilo/plans/1794948779713-neobank-code-mode-execution.md` (boundary clause) · `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` header (model lock) · `.stremiium/governance/workflow-routing.md` §5*

Note: Three standing laws: private funding by default, a locked execution model, and one canonical vocabulary for every collective.

---

## Closing — governance in one sentence

<p aria-hidden="true" style="font-size:1.3em;margin:0 0 0.2em 0">🏛️ ⚙️ 🧭 ⬆️ ⏱️ 🤝</p>

<svg role="img" aria-label="Governance summary loop: captains command, departments execute, coordinators intercept, meta-councils advise, and every path escalates through Sparkling Curious" width="100%" height="96" viewBox="0 0 920 96" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <g aria-hidden="true" font-family="inherit" text-anchor="middle" font-size="11">
    <rect x="20" y="26" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2"/><text x="110" y="46" fill="hsl(var(--zone-stremiium))" font-weight="700">🏛️ CAPTAINS</text><text x="110" y="62" fill="hsl(var(--zone-stremiium))">command</text>
    <text x="210" y="53" fill="hsl(var(--zone-stremiium))">→</text>
    <rect x="222" y="26" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--zone-execution))" stroke-width="2"/><text x="312" y="46" fill="hsl(var(--zone-execution))" font-weight="700">⚙️ DEPARTMENTS</text><text x="312" y="62" fill="hsl(var(--zone-execution))">execute</text>
    <text x="412" y="53" fill="hsl(var(--zone-stremiium))">→</text>
    <rect x="424" y="26" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--primary))" stroke-width="2"/><text x="514" y="46" fill="hsl(var(--primary))" font-weight="700">🔐 COORDINATORS</text><text x="514" y="62" fill="hsl(var(--primary))">intercept</text>
    <text x="614" y="53" fill="hsl(var(--zone-stremiium))">→</text>
    <rect x="626" y="26" width="180" height="44" rx="10" fill="none" stroke="hsl(var(--zone-stremiium))" stroke-width="2" stroke-dasharray="6 4"/><text x="716" y="46" fill="hsl(var(--zone-stremiium))" font-weight="700">🧭 META</text><text x="716" y="62" fill="hsl(var(--zone-stremiium))">advise</text>
    <text x="816" y="53" fill="hsl(var(--highlight))">→</text>
    <rect x="828" y="26" width="88" height="44" rx="10" fill="none" stroke="hsl(var(--highlight))" stroke-width="2.5"/><text x="872" y="46" fill="hsl(var(--highlight))" font-weight="700">⬆️ SC</text><text x="872" y="62" fill="hsl(var(--highlight))">all paths</text>
    <text x="460" y="88" fill="hsl(var(--primary))">⏱️ 1h / 4h / 24h / 72h · 🤝 private-funded-only</text>
  </g>
</svg>

> **Captains command, departments execute, coordinators intercept, meta-councils advise — and every path escalates through Sparkling Curious.**

- Continue the tour: **deck 01 — Repo Orientation** · **deck 02 — Program Brief** · **deck 03 — Prompts & Replies** <!-- .element: class="fragment" -->
- Live view: `/councils` — the 16-council interactive graph (SC → CRD → C01–C16 → departments) <!-- .element: class="fragment" -->

*Sources: `.stremiium/config/council-department-mapping.json` · `.stremiium/governance/workflow-routing.md` · `viz/README.md` "Views" table*

Note: That is the governance model end to end. Open the councils view to walk the graph interactively, or return to deck one to revisit the workspace map.
