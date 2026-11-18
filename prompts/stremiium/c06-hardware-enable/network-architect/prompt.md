# Master Prompt — C06-NETWORK-ARCHITECT (Network-Architect)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-NETWORK-ARCHITECT-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-NETWORK-ARCHITECT  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C06-NETWORK-ARCHITECT to design home lab network topology, VLANs, firewall rules, Tailscale mesh, DNS, DHCP, and network segmentation between councils.
- Research data to ingest: 02-research/landscape/04-networking/, C12 network security policy, Tailscale documentation.
- Prompts to improve: Network topology diagram, VLAN segmentation, Firewall rules, Tailscale mesh configuration, DNS and DHCP, Network segmentation between councils, Intrusion detection, Network monitoring.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-NETWORK-ARCHITECT-prompts.md`.

---

## 2. Assumptions

- Network topology is documented.
- VLANs segment council traffic.
- Firewall rules are defined.
- Tailscale mesh is configured.

---

## 3. Questions

- What is the home lab network topology?
- How are VLANs segmented between councils?
- What firewall rules are in place?
- How is Tailscale mesh configured?
- How is network segmentation between councils enforced?

---

## 4. Concerns

- No network topology documented.
- VLAN segmentation between councils missing.
- Firewall rules not defined.
- Network monitoring not implemented.

---

## 5. Suggested Improvements

- Document network topology diagram.
- Create VLAN segmentation between councils.
- Define firewall rules.
- Configure Tailscale mesh for remote access.
- Add intrusion detection and network monitoring.

---

## 6. Missing Dependencies

- 02-research/landscape/04-networking/
- C12 network security policy
- Tailscale documentation

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read assigned research data sources and extract obligations tagged [STATUTE]/[REG]/[REG-GUIDE] with [S#] references.
- 2. Read current prompt text for assigned MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ prompts from the master prompt registry.
- 3. Identify gaps between research data and current prompt content.
- 4. Draft improved prompt sections with concrete research citations and [FACT]/[EST]/[UNKNOWN]/[INFER] evidence grades.
- 5. Replace all placeholders/TBD with concrete content.
- 6. Add South African regulatory considerations where relevant (FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act 71 of 2008, King IV, CPA 68 of 2008, NCA, Exchange Control Rules, Travel Rule, CASP, ADM restrictions).
- 7. Compile all improvements into the unconsolidated artifact at the stated output path.
- 8. Run validation checklist (§9 below).
- 9. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains prompt text only.
- Reference schema: {vlan, council, subnet, firewallRules, dns, dhcp, tailscaleNode, monitoring, idsStatus}

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Network architecture may contain security details; restrict to C06 + C12.
- No firewall credentials in network docs.

---

## 11. South African Regulatory Considerations

- POPIA for network processing personal data
- FICA for network used in financial workflows

---

## 12. Compliance Gate

- C06 Hardware Enable + C12 Cybersecurity-Intel. Network architecture requires C12 security review.

---

## 13. Rollback Plan

- Revert firewall rules if blocking traffic.
- Re-segment VLANs on misconfiguration.
- Escalate network breaches to C12 + C06.

---

## 14. Escalation Path

- C06-NETWORK-ARCHITECT → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-NETWORK-ARCHITECT-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
