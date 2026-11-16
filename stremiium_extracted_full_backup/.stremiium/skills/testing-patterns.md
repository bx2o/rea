---
name: testing-patterns
description: Master testing strategies, unit testing, integration testing, and test coverage for ensuring code quality. Use when writing tests, setting up testing frameworks, or improving test coverage.
---

# Testing Patterns

Master testing strategies, unit testing, integration testing, and test coverage for ensuring code quality and reliability.

## When to Use This Skill

- Writing unit tests for components and functions
- Setting up testing frameworks and infrastructure
- Improving test coverage
- Writing integration tests
- Implementing test-driven development (TDD)
- Debugging failing tests

## Core Concepts

### 1. Testing Pyramid

```
        E2E Tests (10%)
           /      \
     Integration Tests (30%)
        /          \
   Unit Tests (60%)
```

**Unit Tests:**

- Fast, isolated, test individual functions/components
- Mock external dependencies
- Test business logic

**Integration Tests:**

- Test interactions between components
- Use real databases/services
- Slower than unit tests

**E2E Tests:**

- Test complete user flows
- Use real browser
- Slowest, most fragile

### 2. Unit Testing Patterns

**Arrange-Act-Assert Pattern:**

```javascript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      // Arrange
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
      };
      const mockUser = { id: 1, ...userData };

      // Act
      const result = await userService.createUser(userData);

      // Assert
      expect(result).toEqual(mockUser);
      expect(result.id).toBe(1);
    });
  });
});
```

**Given-When-Then Pattern:**

```javascript
describe('Shopping Cart', () => {
  it('should calculate total price', () => {
    // Given
    const cart = new ShoppingCart();
    cart.addItem({ price: 10, quantity: 2 });
    cart.addItem({ price: 5, quantity: 1 });

    // When
    const total = cart.calculateTotal();

    // Then
    expect(total).toBe(25);
  });
});
```

### 3. React Testing (React Testing Library)

**Component Testing:**

```javascript
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('should render button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Form Testing:**

```javascript
describe('LoginForm', () => {
  it('should submit form with valid data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });
});
```

**Async Testing:**

```javascript
describe('UserList', () => {
  it('should display users after loading', async () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];

    jest.spyOn(api, 'fetchUsers').mockResolvedValue(mockUsers);

    render(<UserList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('Jane')).toBeInTheDocument();
    });
  });
});
```

### 4. Backend Testing (Jest)

**Service Testing:**

```javascript
describe('AuthService', () => {
  describe('login', () => {
    it('should return token for valid credentials', async () => {
      const mockUser = { id: 1, email: 'test@example.com' };
      const mockToken = 'mock-jwt-token';

      userRepository.findByEmail.mockResolvedValue(mockUser);
      jwt.sign.mockReturnValue(mockToken);

      const result = await authService.login('test@example.com', 'password');

      expect(result).toEqual({ token: mockToken, user: mockUser });
    });

    it('should throw error for invalid credentials', async () => {
      userRepository.findByEmail.mockResolvedValue(null);

      await expect(authService.login('test@example.com', 'password')).rejects.toThrow(
        'Invalid credentials'
      );
    });
  });
});
```

**API Testing (Supertest):**

```javascript
describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const userData = {
      email: 'test@example.com',
      name: 'Test User',
    };

    const response = await request(app).post('/api/users').send(userData).expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe(userData.email);
  });

  it('should return 400 for invalid data', async () => {
    const invalidData = { email: 'invalid' };

    await request(app).post('/api/users').send(invalidData).expect(400);
  });
});
```

### 5. Testing Best Practices

**Test One Thing:**

```javascript
// Bad - testing multiple things
it('should handle user operations', () => {
  // Creates user
  // Updates user
  // Deletes user
});

// Good - one test per operation
it('should create user', () => {
  /* ... */
});
it('should update user', () => {
  /* ... */
});
it('should delete user', () => {
  /* ... */
});
```

**Use Descriptive Test Names:**

```javascript
// Bad
it('works', () => {
  /* ... */
});

// Good
it('should return 404 when user does not exist', () => {
  /* ... */
});
```

**Arrange-Act-Assert:**

```javascript
it('should calculate discount', () => {
  // Arrange
  const price = 100;
  const discount = 0.2;

  // Act
  const result = calculateDiscount(price, discount);

  // Assert
  expect(result).toBe(80);
});
```

### 6. Mocking

**Mock Functions:**

```javascript
const mockFn = jest.fn();
mockFn('arg1', 'arg2');

expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
expect(mockFn).toHaveBeenCalledTimes(1);
```

**Mock Modules:**

```javascript
jest.mock('./api');
const { fetchUsers } = require('./api');

fetchUsers.mockResolvedValue([{ id: 1, name: 'John' }]);
```

**Mock Implementations:**

```javascript
const mockAuthService = {
  login: jest.fn().mockImplementation((email, password) => {
    if (email === 'test@example.com' && password === 'password') {
      return Promise.resolve({ token: 'mock-token' });
    }
    return Promise.reject(new Error('Invalid credentials'));
  }),
};
```

### 7. Test Coverage

**Jest Coverage:**

```javascript
// jest.config.js
module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
};
```

**Coverage Report:**

```bash
npm test -- --coverage
```

### 8. Integration Testing

**Database Integration:**

```javascript
describe('UserRepository Integration', () => {
  beforeAll(async () => {
    await setupTestDatabase();
  });

  afterAll(async () => {
    await cleanupTestDatabase();
  });

  it('should create and retrieve user', async () => {
    const user = await userRepository.create({
      email: 'test@example.com',
      name: 'Test User',
    });

    const found = await userRepository.findById(user.id);

    expect(found).toEqual(user);
  });
});
```

**API Integration:**

```javascript
describe('User API Integration', () => {
  let app;

  beforeAll(async () => {
    app = await setupTestApp();
  });

  afterAll(async () => {
    await cleanupTestApp();
  });

  it('should create user through API', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ email: 'test@example.com', name: 'Test User' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
  });
});
```

### 9. E2E Testing (Playwright/Cypress)

**Playwright Example:**

```javascript
test('user can login', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('Welcome');
});
```

**Cypress Example:**

```javascript
describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});
```

### 10. Test-Driven Development (TDD)

**Red-Green-Refactor Cycle:**

1. **Red:** Write failing test

```javascript
it('should calculate total', () => {
  const cart = new ShoppingCart();
  expect(cart.calculateTotal()).toBe(0);
});
```

2. **Green:** Make test pass

```javascript
class ShoppingCart {
  calculateTotal() {
    return 0;
  }
}
```

3. **Refactor:** Improve code

```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
```

### 11. Common Testing Patterns

**Page Object Model:**

```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Usage
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('test@example.com', 'password');

  await expect(page).toHaveURL('/dashboard');
});
```

**Data-Driven Tests:**

```javascript
const testCases = [
  { input: 2, expected: 4 },
  { input: 3, expected: 9 },
  { input: 5, expected: 25 },
];

describe.each(testCases)('square', ({ input, expected }) => {
  it(`should return ${expected} for input ${input}`, () => {
    expect(square(input)).toBe(expected);
  });
});
```

**Snapshot Testing:**

```javascript
it('should match snapshot', () => {
  const tree = renderer.create(<User user={mockUser} />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

## Best Practices

1. **Test behavior, not implementation**
2. **Keep tests independent**
3. **Use descriptive test names**
4. **Mock external dependencies**
5. **Test edge cases**
6. **Maintain test coverage > 80%**
7. **Run tests in CI/CD**
8. **Keep tests fast**
9. **Use page objects for E2E**
10. **Regularly refactor tests**

## Related Skills

- `frontend-testing` - React component testing
- `python-testing-patterns` - Python testing
- `web3-testing` - Smart contract testing
- `code-quality` - Code quality standards
- `security-review` - Security testing
