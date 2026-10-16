---
description: 'GraphQL API Design - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# GraphQL API Design - Skill Guide

**Skill Category**: API Design  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 6-8 weeks  
**Last Updated**: February 18, 2026

---

## Overview

GraphQL offers a modern alternative to REST for building flexible, efficient APIs. This skill covers designing GraphQL schemas and implementing best practices.

---

## Core Concepts

### 1. GraphQL Basics

**Query** (Ask for data)

```graphql
query {
  user(id: "123") {
    name
    email
    posts {
      title
      createdAt
    }
  }
}
```

**Mutation** (Change data)

```graphql
mutation {
  createPost(title: "Hello", content: "World") {
    id
    title
  }
}
```

**Subscription** (Real-time updates)

```graphql
subscription {
  postCreated {
    id
    title
    author {
      name
    }
  }
}
```

### 2. Schema Definition

```graphql
type User {
  id: ID! # Required
  name: String! # Required string
  email: String!
  age: Int
  posts: [Post!]! # Required array of required posts
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
}

type Query {
  user(id: ID!): User
  users(limit: Int = 10): [User!]!
  post(id: ID!): Post
}

type Mutation {
  createPost(title: String!, content: String!): Post!
  updateUser(id: ID!, name: String): User
  deletePost(id: ID!): Boolean!
}

type Subscription {
  postCreated: Post!
}
```

---

## Design Patterns

### Pattern 1: Connections for Pagination

```graphql
type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type UserEdge {
  node: User!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}

type Query {
  users(first: Int, after: String): UserConnection!
}
```

### Pattern 2: Input Types

```graphql
input CreatePostInput {
  title: String!
  content: String!
  published: Boolean = false
}

input updateUserInput {
  name: String
  email: String
}

type Mutation {
  createPost(input: CreatePostInput!): Post!
  updateUser(id: ID!, input: UpdateUserInput!): User
}
```

### Pattern 3: Union Types (Multiple return types)

```graphql
union SearchResult = User | Post | Comment

type Query {
  search(term: String!): [SearchResult!]!
}

# Query
query {
  search(term: "GraphQL") {
    ... on User {
      name
      email
    }
    ... on Post {
      title
      content
    }
  }
}
```

---

## Performance Optimization

### 1. Field Resolvers (Control what executes)

```javascript
const resolvers = {
  Query: {
    user: async (_, { id }) => fetchUser(id),
  },
  User: {
    posts: async (user) => fetchUserPosts(user.id), // Only if requested
  },
};
```

### 2. DataLoader (Batch queries)

```javascript
const dataloader = new DataLoader(async (userIds) => {
  // Fetch all users in one query instead of N queries
  return fetchUsersByIds(userIds);
});

const resolvers = {
  Post: {
    author: (post) => dataloader.load(post.authorId),
  },
};
```

### 3. Query Complexity

```graphql
# Bad: Can request deeply nested data from millions of records
query {
  users(limit: 1000000) {
    posts { comments { replies { ... } } }
  }
}

# Good: Limit depth and breadth
# Max depth: 5
# Max fields: 100
# Implement query cost analysis
```

---

## Common Pitfalls

❌ **N+1 Problem**: Query for users, then query posts for each user separately
✅ **Solution**: Use DataLoader for batch queries

❌ **No Rate Limiting**: Users can request unlimited data
✅ **Solution**: Implement query complexity limits

❌ **Overly Complex Schema**: Too many fields, confusing
✅ **Solution**: Start simple, add as needed

---

**Proficiency Verified**: Can design GraphQL schemas, implement resolvers, and optimize query performance.
