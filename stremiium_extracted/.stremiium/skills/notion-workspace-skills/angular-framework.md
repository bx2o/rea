---
description: 'Angular Framework - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Angular Framework - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 10-12 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Angular is an opinionated framework for building enterprise applications. This skill covers Angular essentials.

---

## Components

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h1>Hello {{ name }}</h1>
      <button (click)="increment()">{{ count }}</button>
    </div>
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class HelloComponent {
  name = 'World';
  count = 0;

  increment() {
    this.count++;
  }
}
```

---

## Services & Dependency Injection

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() {
    return this.http.get('/api/users');
  }
}

// In component
@Component({...})
export class UserListComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
```

---

## Observables & RxJS

```typescript
// Service returns Observable
getUser(id: string) {
  return this.http.get(`/api/users/${id}`);
}

// Component subscribes
this.userService.getUser('123')
  .pipe(
    filter(user => user.active),
    map(user => user.name)
  )
  .subscribe(name => console.log(name));
```

---

## Routing

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
];
```

---

**Proficiency Verified**: Can build enterprise Angular applications.
