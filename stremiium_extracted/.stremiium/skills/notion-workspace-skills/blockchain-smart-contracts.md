---
description: 'Blockchain Smart Contracts - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Blockchain Smart Contracts - Skill Guide

**Skill Category**: Blockchain/Crypto  
**Level**: Advanced  
**Time to Proficiency**: 10-12 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Smart contracts are self-executing programs on blockchain. This skill covers writing secure, efficient contracts on Ethereum.

---

## Core Concepts

### 1. Solidity Basics

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    // State variables (stored on blockchain)
    string public name = "MyToken";
    mapping(address => uint256) public balances;

    // Function
    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
```

### 2. Key Concepts

**Gas**: Cost of execution

```solidity
// This uses gas (costs ETH)
function store(uint x) public {
    data = x;  // Storage = expensive
}

// Cheaper operations
function read() public view returns(uint) {
    return data;  // Read-only = free
}
```

**Events**: Logging for tracking changes

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);

function transfer(address to, uint256 amount) public {
    // ... transfer logic ...
    emit Transfer(msg.sender, to, amount);
}
```

**Modifiers**: Reusable validation

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
}

function withdraw() public onlyOwner {
    // Only owner can call
}
```

---

## Contract Types

### Pattern 1: Token Extension (ERC-20)

```solidity
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}
```

### Pattern 2: NFT (ERC-721)

```solidity
// For unique digital assets
contract MyNFT {
    mapping(uint256 => address) public tokenOwner;

    function mint(uint256 tokenId, address to) public {
        tokenOwner[tokenId] = to;
    }

    function transfer(uint256 tokenId, address to) public {
        require(tokenOwner[tokenId] == msg.sender, "Not owner");
        tokenOwner[tokenId] = to;
    }
}
```

---

## Security Best Practices

❌ **Reentrancy Attack**

```solidity
// Bad: Calls external contract before updating state
function withdraw() public {
    uint amount = balances[msg.sender];
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    balances[msg.sender] = 0;  // Updated after call!
}

// Good: Update state first (Checks-Effects-Interactions)
function withdraw() public {
    uint amount = balances[msg.sender];
    balances[msg.sender] = 0;  // Update first
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
}
```

❌ **Integer Overflow**

```solidity
// Solidity 0.8+ has built-in overflow checking
// But be aware in earlier versions

uint256 x = type(uint256).max;
x += 1;  // Reverts in 0.8+
```

---

## Testing

```javascript
// Hardhat/ethers.js testing
const MyToken = await ethers.getContractFactory('MyToken');
const token = await MyToken.deploy();

it('should transfer tokens', async function () {
  const [owner, addr1] = await ethers.getSigners();

  await token.transfer(addr1.address, 100);
  const balance = await token.balanceOf(addr1.address);
  expect(balance).to.equal(100);
});
```

---

**Proficiency Verified**: Can write secure smart contracts with proper testing and understanding of blockchain mechanics.
