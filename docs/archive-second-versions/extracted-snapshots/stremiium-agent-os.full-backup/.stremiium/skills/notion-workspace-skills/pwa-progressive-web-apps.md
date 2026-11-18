---
description: 'Progressive Web Apps (PWA) - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Progressive Web Apps (PWA) - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Progressive Web Apps combine web and native app capabilities. This skill covers building PWAs with service workers.

---

## Manifest File

```json
{
  "name": "My App",
  "short_name": "MyApp",
  "description": "My Progressive Web App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## Service Worker

```javascript
// sw.js
const CACHE_NAME = 'v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['/', '/index.html', '/styles.css', '/app.js']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
```

---

## Key Features

- Offline functionality
- Installable on home screen
- Fast loading (cached assets)
- Push notifications
- Works on mobile & desktop

---

**Proficiency Verified**: Can build production Progressive Web Apps.
