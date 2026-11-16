---
name: nodejs-backend-patterns
description: Master Node.js, Express, and Fastify backend patterns for building scalable APIs and microservices. Use when building Node.js backends, REST APIs, or backend services.
---

# Node.js Backend Patterns

Master Node.js, Express, and Fastify backend patterns for building scalable, maintainable, and high-performance APIs and microservices.

## When to Use This Skill

- Building Node.js REST APIs and backend services
- Creating Express or Fastify applications
- Implementing microservices architecture
- Setting up backend patterns and best practices
- Optimizing Node.js application performance

## Core Concepts

### 1. Project Structure

**Recommended Layout:**

```
src/
├── api/                    # API routes
│   ├── routes/
│   │   ├── users.js
│   │   ├── auth.js
│   │   └── items.js
│   └── index.js
├── services/               # Business logic
│   ├── userService.js
│   └── authService.js
├── models/                 # Data models
│   ├── User.js
│   └── Item.js
├── middleware/             # Express middleware
│   ├── auth.js
│   ├── error.js
│   └── validation.js
├── utils/                  # Utility functions
│   ├── logger.js
│   └── helpers.js
├── config/                 # Configuration
│   └── index.js
└── index.js                # Application entry
```

### 2. Express vs Fastify

**Express:**

- Simple, minimal framework
- Large ecosystem and community
- Flexible middleware system
- Good for small to medium applications

**Fastify:**

- High performance (faster than Express)
- Built-in schema validation
- Plugin system
- Better for high-performance APIs

### 3. Middleware Patterns

**Authentication Middleware:**

```javascript
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

**Error Handling Middleware:**

```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};
```

**Validation Middleware:**

```javascript
const { body, validationResult } = require('express-validator');

const validateUser = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
```

### 4. Service Layer Pattern

**Separate business logic from routes:**

```javascript
// services/userService.js
class UserService {
  async createUser(userData) {
    // Business logic here
    const user = await User.create(userData);
    return user;
  }

  async getUserById(id) {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(id, updates) {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    return user;
  }
}

module.exports = new UserService();
```

### 5. Async/Await Patterns

**Always use async/await for async operations:**

```javascript
// Good
router.get('/users/:id', async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Bad - callback hell
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(user);
    }
  });
});
```

### 6. Environment Configuration

**Use environment variables:**

```javascript
// config/index.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  },
  nodeEnv: process.env.NODE_ENV || 'development',
};
```

### 7. Logging

**Structured logging:**

```javascript
// utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = logger;
```

### 8. Database Integration

**MongoDB with Mongoose:**

```javascript
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
```

**PostgreSQL with pg or Sequelize:**

```javascript
// config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
```

### 9. API Response Patterns

**Consistent response format:**

```javascript
// utils/response.js
const successResponse = (res, data, message = 'Success') => {
  res.json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, message, statusCode = 400) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { successResponse, errorResponse };
```

### 10. Testing Patterns

**Unit tests with Jest:**

```javascript
// services/userService.test.js
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };

      const user = await userService.createUser(userData);

      expect(user.email).toBe(userData.email);
      expect(user.name).toBe(userData.name);
    });
  });
});
```

## Best Practices

1. **Use async/await** for all async operations
2. **Separate concerns** - routes, services, models
3. **Validate input** - use express-validator or joi
4. **Handle errors** - centralized error handling
5. **Use environment variables** - never hardcode secrets
6. **Implement logging** - structured logging for debugging
7. **Write tests** - unit and integration tests
8. **Document APIs** - use Swagger/OpenAPI
9. **Use TypeScript** - for type safety (optional but recommended)
10. **Optimize performance** - caching, connection pooling

## Common Patterns

### Repository Pattern

```javascript
// repositories/userRepository.js
class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findAll(filters = {}) {
    return await User.find(filters);
  }

  async update(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
```

### Factory Pattern

```javascript
// utils/userFactory.js
const userFactory = (userData) => ({
  id: userData.id || generateId(),
  email: userData.email,
  name: userData.name,
  createdAt: userData.createdAt || new Date(),

  async save() {
    // Save to database
  },

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
    };
  },
});

module.exports = userFactory;
```

## Performance Optimization

1. **Use connection pooling** for database connections
2. **Implement caching** with Redis for frequently accessed data
3. **Use compression** middleware for response compression
4. **Optimize queries** - use indexes, limit fields
5. **Use clustering** for CPU-bound operations
6. **Implement rate limiting** to prevent abuse
7. **Use CDN** for static assets

## Security Best Practices

1. **Never expose secrets** - use environment variables
2. **Validate all input** - prevent injection attacks
3. **Use HTTPS** - encrypt all traffic
4. **Implement rate limiting** - prevent DoS attacks
5. **Use helmet** - security headers
6. **Sanitize user input** - prevent XSS attacks
7. **Use bcrypt** for password hashing
8. **Implement CORS** properly
9. **Use JWT** for authentication
10. **Regular security audits** - update dependencies

## Related Skills

- `api-design-principles` - API design best practices
- `backend-patterns` - General backend patterns
- `senior-backend` - Advanced backend optimization
- `security-compliance` - Security requirements
- `testing-patterns` - Testing strategies
