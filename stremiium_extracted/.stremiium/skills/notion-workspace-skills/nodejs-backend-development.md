---
description: 'Node.js Backend Development - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Node.js Backend Development - Skill Guide

**Skill Category**: Backend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Node.js enables JavaScript on the server. This skill covers building scalable, production-grade backend services.

---

## Core Architecture

### MVC Pattern

```
Request → Controller → Service → Database → Response
  (Define endpoints)
  (Business logic)
  (Persistence)
```

### Express App Structure

```javascript
// app.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(errorHandler);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;

// server.js
const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}`));
```

---

## Design Patterns

### Pattern 1: Service Layer

```javascript
// Repository: Data access
class UserRepository {
  async findById(id) {
    return User.findById(id);
  }
}

// Service: Business logic
class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async getUser(id) {
    const user = await this.userRepo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}

// Controller: API endpoint
router.get('/:id', async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.json(user);
});
```

### Pattern 2: Middleware

```javascript
// Authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Use in routes
router.get('/profile', authenticate, (req, res) => {
  res.json(req.user);
});
```

---

## Async Patterns

### Promises

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

fetchUser(1)
  .then((user) => console.log(user))
  .catch((err) => console.error(err));
```

### Async/Await

```javascript
async function getUser(id) {
  try {
    const user = await User.findById(id);
    const posts = await Post.find({ userId: id });
    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Common Operations

### Database Connection

```javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### Request Validation

```javascript
const { body, validationResult } = require('express-validator');

router.post('/', [body('email').isEmail(), body('password').isLength({ min: 8 })], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors });
  }
  // Process request
});
```

### Error Handling

```javascript
// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Server error',
  });
});
```

---

**Proficiency Verified**: Can build scalable Node.js backends with proper architecture and testing.
