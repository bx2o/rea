---
name: Design References Library
description: Curated collection of high-quality landing page designs with detailed analysis for inspiration and pattern learning
owner: Undangan team
last_updated: 2026-01-24
---

# Design References Library

## Purpose

This library contains analyzed reference landing pages that demonstrate distinct design character and premium execution. Use these as benchmarks when evaluating design quality and developing brand identity directions.

## Inputs

- Reference URLs to analyze
- Screenshots (hero + key sections)

## Outputs

- Updated reference entries with analysis and screenshots
- Comparison matrix and pattern extraction notes
- Local assets stored under `.agent/skills/design-references-library/assets/`

## Prerequisites

- Ability to capture screenshots (manual or tool-based)

## Tools & Availability

- `browser_subagent` for screenshots (if unavailable, capture manually)

## Snapshot Policy

- Store all screenshots under `.agent/skills/design-references-library/assets/`
- Add a **Captured** date (YYYY-MM-DD) for each reference
- Record local asset paths next to each entry

---

## Reference 1: Hoox

**URL:** https://www.landingfolio.com/inspiration/post/hoox  
**Category:** High-Performance Authority  
**Best For:** Premium SaaS, Performance tools, Agency services
**Captured:** 2026-01-20 (UTC)  
**Local assets:**

- `.agent/skills/design-references-library/assets/hoox_hero_overview_1768926645345.png`
- `.agent/skills/design-references-library/assets/hoox_features_founder_1768926686645.png`

### Screenshots

- Hero: `hoox_hero_overview_1768926645345.png`
- Features: `hoox_features_founder_1768926686645.png`

### Design DNA

| Element           | Analysis                                                                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Color Palette** | Dark mode (`#000000`) with single electrifying accent (Lime Green `#BFFF00`). Proves single bold accent CAN work when execution is flawless. |
| **Typography**    | Massive centered headlines using Inter-like modern sans-serif. Authority through **sheer scale** — doesn't apologize for space.              |
| **Layout**        | Large numbered feature cards (1, 2, 3, 4). Numbers become visual anchor points. Breaks monotony of standard card grids.                      |
| **Photography**   | Real founder (Nik Sharma) integrated directly into brand story. Authenticity over stock imagery.                                             |
| **Spacing**       | Generous, unapologetic whitespace. Premium = breathing room.                                                                                 |

### Key Patterns to Borrow

✅ **Dark Mode Premium**: Black backgrounds with strategic accent = luxury perception  
✅ **Massive Typography**: Scale creates authority and confidence  
✅ **Numbered Sections**: Large numbers as visual design elements, not just utility  
✅ **Founder Integration**: Real people create trust and differentiation  
✅ **Single Bold Accent**: One electrifying color beats timid multi-color palettes

### When to Use This Reference

- Client wants "premium" or "high-end" positioning
- Need maximum authority and credibility signals
- Target audience is performance-focused professionals
- Dark mode aligns with brand (tech, agency, creative)

### Implementation Notes

**Typography Scale:**

```css
h1 {
  font-size: clamp(48px, 8vw, 96px);
}
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.02em;
```

**Color System:**

```css
--bg-primary: #000000;
--text-primary: #ffffff;
--accent-electric: #bfff00;
```

---

## Reference 2: ToBeHonest

**URL:** https://www.landingfolio.com/inspiration/post/tobehonest  
**Category:** Human Connection / Warmth  
**Best For:** Health/wellness, Education, Community platforms
**Captured:** 2026-01-20 (UTC)  
**Local assets:**

- `.agent/skills/design-references-library/assets/tobehonest_hero_1768926891253.png`
- `.agent/skills/design-references-library/assets/tobehonest_features_1768926929264.png`

### Screenshots

- Hero: `tobehonest_hero_1768926891253.png`
- Features: `tobehonest_features_1768926929264.png`

### Design DNA

| Element             | Analysis                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Color Palette**   | Warm cream base (`#FDF9F3`) + warm orange (`#E9743F`) + soft blue/purple accents. Rejects clinical white for warmth.     |
| **Typography**      | Editorial serif (DM Serif Display-like) for headlines + **handwritten script** for annotations. Mix creates personality. |
| **Shapes**          | Organic blob shapes and speech bubbles instead of rectangles. Breaks rigid grid = approachable.                          |
| **Annotations**     | Hand-drawn arrows, stars, underlines. Adds "made by humans" soul without looking crafty.                                 |
| **Layout**          | Collage-style overlapping elements. Creates depth and tactile quality.                                                   |
| **Photo Treatment** | Images in organic frames, not rectangular crops. Human-centric visual language.                                          |

### Key Patterns to Borrow

✅ **Cream Over White**: `#FDF9F3` feels warmer than clinical `#FFFFFF`  
✅ **Handwritten Accents**: Script fonts for key words adds personality without overwhelming  
✅ **Organic Shapes**: Blob backgrounds and speech bubbles = friendly, approachable  
✅ **Playful Annotations**: Hand-drawn arrows and stars guide attention warmly  
✅ **Slanted Dividers**: Organic section transitions, not straight lines

### When to Use This Reference

- Emotional connection is top priority
- Targeting people-focused services (health, education, community)
- Need to reduce intimidation (tech-averse audience)
- Brand personality is friendly, honest, empathetic

### Implementation Notes

**Organic Blob Shapes** (SVG):

```svg
<svg viewBox="0 0 200 200">
  <path d="M45,-50C58,-40,68,-25,70,-10C72,5,66,20,55,30C44,40,28,45,10,48C-8,51,-26,52,-40,45C-54,38,-64,23,-68,5C-72,-13,-70,-34,-60,-45C-50,-56,-32,-57,-15,-55C2,-53,15,-48,28,-40Z"
  transform="translate(100 100)" fill="#F5DEB3" />
</svg>
```

**Handwritten Annotation Component:**

```tsx
<span className="handwritten text-lg text-orange-500 rotate-[-2deg]">Save 40 hours!</span>
```

---

## Reference 3: Parallel (useparallel.com)

**URL:** https://www.useparallel.com  
**Category:** Tech Luxury Brutalist  
**Best For:** AI tools, Tech products, Gen Z SaaS
**Captured:** 2026-01-20 (UTC)  
**Local assets:**

- `.agent/skills/design-references-library/assets/parallel_hero_1768926754058.png`

### Screenshots

- Hero: `parallel_hero_1768926754058.png`

### Design DNA

| Element           | Analysis                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| **Color Palette** | High-contrast black/white with neon purple (`#A855F7`) and yellow accents. Minimal palette = maximum impact. |
| **Typography**    | Brutalist approach — headlines so large they **break containers**. Unapologetic visual weight.               |
| **Borders**       | Thick 3-5px borders around every element. Creates tactile, "pop off screen" effect.                          |
| **Badges**        | Circular sticker-style badges with bold icons. Adds playful element to brutalist base.                       |
| **Grid**          | Subtle grid overlay texture. Tech/precision aesthetic.                                                       |
| **Visual Weight** | Heavy, intentional, maximalist in restraint. Not "polite" or timid.                                          |

### Key Patterns to Borrow

✅ **Visual Volume**: Thick borders and massive type = confident, premium  
✅ **Container Breaking**: Headlines that overflow boxes = disruptive, bold  
✅ **Circular Badges**: Sticker-style elements add playfulness to severity  
✅ **Grid Texture**: Subtle overlay adds tech precision feel  
✅ **Neon Accents**: Electric purple/yellow on black = modern edge

### When to Use This Reference

- Want maximum differentiation in conservative industry
- Targeting Gen Z or design-forward audience
- AI/Tech brand identity supersedes emotional warmth
- Comfortable with bold, potentially polarizing aesthetic

### Implementation Notes

**Thick Border System:**

```css
.card {
  border: 4px solid #000000;
  border-radius: 16px;
}

.badge {
  border: 3px solid #000000;
  border-radius: 50%;
}
```

**Container-Breaking Typography:**

```css
h1 {
  font-size: clamp(60px, 12vw, 120px);
  font-weight: 900;
  line-height: 0.9;
  margin: -0.2em 0; /* Allow overflow */
}
```

---

## Comparison Matrix

| Criterion               | Hoox       | ToBeHonest | Parallel   |
| ----------------------- | ---------- | ---------- | ---------- |
| **Visual Weight**       | ⭐⭐⭐⭐   | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| **Warmth**              | ⭐⭐       | ⭐⭐⭐⭐⭐ | ⭐         |
| **Premium Feel**        | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐⭐   |
| **Memorability**        | ⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Tech Brand Fit**      | ⭐⭐⭐⭐   | ⭐⭐       | ⭐⭐⭐⭐⭐ |
| **Implementation Risk** | Low        | Medium     | High       |

---

## Pattern Extraction

### What Creates "Premium" Feel

From all three references:

1. **Visual Volume** — Thick borders, bold weights, intentional scale (not timid)
2. **Distinctive Typography** — Never default system fonts or basic Google Fonts pairings
3. **Confident Spacing** — Generous whitespace, doesn't fear "empty" space
4. **Signature Element** — One unique visual hook (numbered cards, organic blobs, thick borders)
5. **Texture/Depth** — Never flat; always grain, shadow, overlap, or layering

### What Creates "Cheap" Feel

Anti-patterns to avoid:

1. **Template Layouts** — Standard hero (left text, right image/mockup)
2. **Predictable Colors** — Industry cliché palettes (pink for beauty, blue for tech)
3. **Thin Everything** — 1px borders, light font weights, minimal padding
4. **No Signature** — Every element could be from a different site
5. **Clinical White** — Pure `#FFFFFF` without warmth or texture

---

## Hybrid Strategies

### Combining References

**High-End Editorial (Hoox) + Human Touch (ToBeHonest):**

- Base: Dark mode or cream warmth
- Typography: Editorial serif headlines + handwritten accents
- Signature: Numbered sections with organic annotation doodles
- Use Case: Premium yet approachable (luxury with soul)

**Tech Brutalist (Parallel) + Human Touch (ToBeHonest):**

- Base: Thick borders and massive type
- Softening: Organic shapes and warm colors
- Signature: Bold structure with playful elements
- Use Case: Modern tech that doesn't feel cold

---

## Usage Guidelines

### For New Projects

1. **Start with references** — Don't design in a vacuum
2. **Identify the soul** — What makes each reference memorable?
3. **Extract patterns** — Color, typography, layout, signature elements
4. **Don't copy** — Adapt patterns to your context
5. **Combine strategically** — Hybrid approaches usually win

### For Existing Projects

1. **Compare to references** — Where does current design fall short?
2. **Identify gaps** — What patterns are missing?
3. **Add signature element** — Borrow one unique visual hook
4. **Increase visual weight** — Thicker, bolder, more confident
5. **Add texture** — Remove flat, clinical feel

---

## Maintenance

**Update this library when:**

- User provides new reference sites
- New design patterns emerge in industry
- Additional analysis of existing references discovered

**Storage:** `.agent/skills/design-references-library/SKILL.md`

## Verification

- [ ] Each reference has URL, Captured date, and local asset paths
- [ ] New references include at least hero + one supporting section
- [ ] Comparison matrix updated when new references are added

**Pass/Fail:** Pass only if all checks above are satisfied.

## Risks & Mitigations

- IP/copying risk → extract patterns, do not replicate layouts or assets
- Reference rot → keep local screenshots + captured date
- Over-reliance on one aesthetic → keep cross-industry references

---

## Related Skills

- Brand Identity Research — How to analyze references systematically
- Design Mockup Generation — How to use these patterns in mockups
