---
description: 'Vue.js Frontend Framework - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Vue.js Frontend Framework - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Vue.js is a progressive JavaScript framework for building user interfaces. This skill covers component development, state management, and optimization.

---

## Core Concepts

### 1. Components & Templates

```vue
<template>
  <div class="greeting">
    <h1>{{ message }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped>
.greeting {
  padding: 20px;
}
</style>
```

### 2. Vue 3 Composition API

```javascript
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubled = computed(() => count.value * 2);

    onMounted(() => {
      console.log('Component mounted');
    });

    return {
      count,
      doubled,
    };
  },
};
```

---

## Best Practices

### Component Design

- One component per file
- Small, focused components
- Props for parent→child communication
- Events for child→parent communication

### State Management

```javascript
// Pinia (preferred over Vuex)
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    async login(credentials) {
      this.user = await api.login(credentials);
      this.isLoggedIn = true;
    },
  },
});

// Usage
import { useUserStore } from './stores/user';

const userStore = useUserStore();
await userStore.login({ email, password });
```

---

**Proficiency Verified**: Can build component-based Vue.js applications with proper state management.
