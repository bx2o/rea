---
description: 'CSS Architecture & BEM - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# CSS Architecture & BEM - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate  
**Time to Proficiency**: 4-6 weeks  
**Last Updated**: February 18, 2026

---

## Overview

CSS can become unmaintainable at scale. This skill covers organizing CSS with BEM and other methodologies.

---

## BEM (Block Element Modifier)

```css
/* Block: independent component */
.card { }

/* Element: part of block, no standalone meaning */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier: flag changing appearance/behavior */
.card--featured { }
.card__header--large { }

/* Usage */
<div class="card card--featured">
  <div class="card__header card__header--large">Title</div>
  <div class="card__body">Content</div>
</div>
```

---

## Sass Organization

```
styles/
  base/
    _reset.scss
    _typography.scss
  components/
    _card.scss
    _button.scss
  layouts/
    _header.scss
    _footer.scss
  main.scss  # Imports all
```

---

## Best Practices

- Shallow specificity
- Reusable classes
- Naming conventions
- Single responsibility
- Clear component boundaries

---

**Proficiency Verified**: Can organize CSS at scale.
