---
name: frontend-patterns
description: Master React design patterns, state management, and component architecture for building scalable frontend applications. Use when building React applications, designing component architecture, or implementing frontend patterns.
---

# Frontend Patterns

Master React design patterns, state management, and component architecture for building scalable, maintainable, and high-performance frontend applications.

## When to Use This Skill

- Building React applications
- Designing component architecture
- Implementing state management solutions
- Optimizing frontend performance
- Creating reusable component libraries
- Managing complex application state

## Core Concepts

### 1. Component Patterns

**Functional Components with Hooks:**

```jsx
// Modern approach - functional component
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <Spinner />;

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

**Compound Components:**

```jsx
// Parent component
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

// Child components
function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button className={activeTab === index ? 'active' : ''} onClick={() => setActiveTab(index)}>
      {children}
    </button>
  );
}

function TabPanel({ index, children }) {
  const { activeTab } = useContext(TabsContext);

  return activeTab === index ? <div>{children}</div> : null;
}
```

### 2. State Management Patterns

**Local State (useState):**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

**Context API (Global State):**

```jsx
// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

// Consumer component
function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
  );
}
```

**Redux (Complex State):**

```jsx
// Action
const increment = () => ({ type: 'INCREMENT' });

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

**Zustand (Lightweight State):**

```jsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### 3. Custom Hooks

**Data Fetching Hook:**

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading } = useFetch('/api/users');

  if (loading) return <Spinner />;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**LocalStorage Hook:**

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

### 4. Performance Optimization

**React.memo (Component Memoization):**

```jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  // Expensive computation
  return <div>{/* ... */}</div>;
});
```

**useMemo (Expensive Computations):**

```jsx
function DataList({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

**useCallback (Function Memoization):**

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}

const Child = React.memo(function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click</button>;
});
```

**Code Splitting (React.lazy):**

```jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 5. Form Handling

**Controlled Components:**

```jsx
function Form() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Form Libraries (React Hook Form):**

```jsx
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: 'Email is required' })} />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Min 6 characters' },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

### 6. Error Boundaries

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

### 7. Component Composition

**Render Props:**

```jsx
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>{render(position)}</div>
  );
}

// Usage
<Mouse
  render={({ x, y }) => (
    <p>
      Mouse position: {x}, {y}
    </p>
  )}
/>;
```

**Higher-Order Components (HOC):**

```jsx
function withLoading(WrappedComponent) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);
```

### 8. Styling Patterns

**CSS Modules:**

```jsx
import styles from './Button.module.css';

function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
```

**Styled Components:**

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;
```

**Tailwind CSS:**

```jsx
function Button({ children }) {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">{children}</button>;
}
```

### 9. Testing Patterns

**Unit Tests (React Testing Library):**

```jsx
import { render, screen, fireEvent } from '@testing-library/react';

test('increments count on click', () => {
  render(<Counter />);

  const button = screen.getByText('Increment');
  const count = screen.getByText('Count: 0');

  fireEvent.click(button);

  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

**Integration Tests:**

```jsx
test('user can login', async () => {
  render(<LoginForm />);

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
```

### 10. Best Practices

1. **Use functional components** with hooks
2. **Keep components small** and focused
3. **Use composition** over inheritance
4. **Lift state up** when needed
5. **Use custom hooks** for reusable logic
6. **Optimize performance** with memoization
7. **Handle errors** with error boundaries
8. **Write tests** for components
9. **Use TypeScript** for type safety
10. **Follow naming conventions**

## Common Patterns

**Container/Presenter Pattern:**

```jsx
// Container (logic)
function UserContainer({ userId }) {
  const user = useFetchUser(userId);

  if (!user) return null;

  return <UserPresenter user={user} />;
}

// Presenter (UI)
function UserPresenter({ user }) {
  return (
    <div className="user">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

**Render Props Pattern:**

```jsx
function DataProvider({ url, children }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return children(data);
}

// Usage
<DataProvider url="/api/users">{(users) => <UserList users={users} />}</DataProvider>;
```

## Related Skills

- `frontend-design` - UI/UX design principles
- `frontend-code-review` - Code quality standards
- `accessibility-compliance` - WCAG accessibility
- `tailwindcss-mobile-first` - Responsive design
- `building-native-ui` - Native UI patterns
