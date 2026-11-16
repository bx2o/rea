---
description: 'Accessibility (A11y) Standards - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Accessibility (A11y) Standards - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Web accessibility ensures all users, including those with disabilities, can use your site. This skill covers WCAG compliance.

---

## WCAG Principles

### 1. Perceivable

- Content must be visible
- Color alone not sufficient (text + color)
- Captions for video

### 2. Operable

- Keyboard navigable
- Buttons clickable sizes
- No content traps

### 3. Understandable

- Clear language
- Predictable navigation
- Error messages

### 4. Robust

- Valid HTML
- Compatible with assistive tech
- Semantic markup

---

## Implementation

### Semantic HTML

```html
<!-- Bad: Divs everywhere -->
<div class="button">Click me</div>

<!-- Good: Semantic -->
<button>Click me</button>

<!-- Bad: Images without alt -->
<img src="chart.png" />

<!-- Good: Descriptive alt -->
<img src="chart.png" alt="Sales by region, bar chart" />
```

### ARIA Labels

```html
<nav aria-label="Main navigation">
  <a href="/">Home</a>
</nav>

<div role="alert">Error message</div>

<button aria-expanded="false">Menu</button>
```

---

## Testing

- axe DevTools (browser extension)
- WAVE (WebAIM)
- Screen reader testing

---

**Proficiency Verified**: Can build WCAG-compliant websites.
