---
description: 'React Component Architecture - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# React Component Architecture - Skill Guide

**Skill Category**: Frontend Development  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

React is a sophisticated library for building user interfaces. This skill covers designing component hierarchies that are maintainable, performant, and scalable.

---

## Core Concepts

### 1. Components & Props

**Function Component**:

```jsx
function Greeting({ name, age }) {
  return (
    <p>
      Hello {name}, age {age}!
    </p>
  );
}

// Usage
<Greeting name="Alice" age={30} />;
```

**Props Flow**:

- Parent → Child (unidirectional)
- Props are immutable
- Changes in parent cause child re-render

### 2. Hooks

**useState**: Manage component state

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**useEffect**: Side effects (data fetching, subscriptions)

```jsx
useEffect(() => {
  // Fetch data
  fetchUser();

  // Cleanup (optional)
  return () => cleanup();
}, [dependency]); // Run when dependency changes
```

**useContext**: Global state without prop drilling

```jsx
const UserContext = createContext();

// Provider
<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>;

// Consumer
const user = useContext(UserContext);
```

### 3. Component Composition

**Strategy 1: Container/Presentational**

```jsx
// Presentational (pure, reusable)
function UserCard({ user, onEdit }) {
  return (
    <div>
      {user.name} <button onClick={onEdit}>Edit</button>
    </div>
  );
}

// Container (logic, state)
function UserCardContainer({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  return <UserCard user={user} onEdit={handleEdit} />;
}
```

**Strategy 2: Custom Hooks**

```jsx
// Reusable hook
function useUser(userId) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  return user;
}

// Use in any component
function Profile({ userId }) {
  const user = useUser(userId);
  return <div>{user?.name}</div>;
}
```

---

## Design Patterns

### Pattern 1: Compound Components

**Use when**: Related components that should work together

```jsx
// Usage: Nice API
<Select value={value} onChange={setValue}>
  <SelectOption value="a">Option A</SelectOption>
  <SelectOption value="b">Option B</SelectOption>
</Select>;

// Implementation
const SelectContext = createContext();

function Select({ value, onChange, children }) {
  return (
    <SelectContext.Provider value={{ value, onChange }}>
      <div className="select">{children}</div>
    </SelectContext.Provider>
  );
}

function SelectOption({ value, children }) {
  const { value: selectedValue, onChange } = useContext(SelectContext);
  return (
    <div
      onClick={() => onChange(value)}
      style={{ background: selectedValue === value ? 'blue' : 'white' }}
    >
      {children}
    </div>
  );
}
```

### Pattern 2: Render Props

**Use when**: Sharing logic between components

```jsx
<DataFetcher url="/api/users">
  {(data, loading, error) => (loading ? <p>Loading...</p> : <p>{data.name}</p>)}
</DataFetcher>
```

### Pattern 3: Higher-Order Components

**Use when**: Enhancing components with additional behavior

```jsx
function withTheme(Component) {
  return function ThemedComponent(props) {
    const [theme, setTheme] = useState('light');
    return <Component theme={theme} onThemeChange={setTheme} {...props} />;
  };
}

const ThemedButton = withTheme(Button);
```

---

## State Management

### Local State

```jsx
// Component state with useState
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  // Use for component-specific state
}
```

### Context API

```jsx
// Global state without library
const AppContext = createContext();

function App() {
  const [appState, setAppState] = useState({...});
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <MyApp />
    </AppContext.Provider>
  );
}
```

### Redux (for complex apps)

```jsx
// Centralized state management
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
```

---

## Performance Optimization

### 1. Memoization

```jsx
// Prevent re-renders if props unchanged
const UserCard = memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
```

### 2. useCallback

```jsx
// Memoize function across re-renders
function List({ items }) {
  const handleClick = useCallback((id) => {
    console.log(id);
  }, []); // Dependencies

  return items.map((item) => <Item key={item.id} onSelect={handleClick} />);
}
```

### 3. Code Splitting

```jsx
// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>;
```

---

## Testing

```jsx
import { render, screen, waitFor } from '@testing-library/react';

test('displays user data', async () => {
  render(<UserProfile userId={1} />);
  await waitFor(() => {
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });
});
```

---

## Common Pitfalls

❌ **Prop Drilling**: Passing props through many levels
✅ **Solution**: Use Context API or state management

❌ **Missing Dependencies**: useEffect deps array incomplete
✅ **Solution**: Use ESLint rule, be explicit

❌ **State in Loops/Conditions**: Breaks hooks rules
✅ **Solution**: Keep all hooks at top level

---

**Proficiency Verified**: Can build scalable, maintainable React applications with proper component architecture.
