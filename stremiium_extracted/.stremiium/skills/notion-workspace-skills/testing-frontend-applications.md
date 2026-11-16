---
description: 'Testing Frontend Applications - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Testing Frontend Applications - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Frontend testing ensures components work correctly. This skill covers unit, integration, and end-to-end testing.

---

## Jest + React Testing Library

### Unit Test

```javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});

test('calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  screen.getByRole('button').click();
  expect(handleClick).toHaveBeenCalled();
});
```

### Integration Test

```javascript
test('form submission', async () => {
  render(<LoginForm />);

  fireEvent.change(screen.getByLabelText('Username'), {
    target: { value: 'user' },
  });
  fireEvent.change(screen.getByLabelText('Password'), {
    target: { value: 'pass' },
  });

  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  await waitFor(() => {
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
```

---

## Coverage Goals

- Critical paths: 100% coverage
- Components: 80%+ coverage
- Utils: 90%+ coverage

---

**Proficiency Verified**: Can write comprehensive frontend tests.
