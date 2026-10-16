---
description: 'Financial Modeling & Forecasting - Skill Guide - Technical skill documentation'
document_type: 'skill_reference'
version: '1.0'
last_updated: '2026-04-28'
status: 'active'
---

# Financial Modeling & Forecasting - Skill Guide

**Skill Category**: Finance  
**Level**: Intermediate to Advanced  
**Time to Proficiency**: 8-10 weeks  
**Last Updated**: February 18, 2026

---

## Overview

Financial modeling is critical for making strategic business decisions. This skill covers building models, forecasting scenarios, and analyzing financial health.

---

## Core Concepts

### 1. Financial Statements

**Income Statement** (Performance)

```
Revenue                    $1,000,000
- Cost of Goods Sold      ($300,000)
= Gross Profit              $700,000   (70% margin)
- Operating Expenses      ($400,000)
= Operating Income          $300,000
- Taxes (25%)              ($75,000)
= Net Income               $225,000    (22.5% bottom line)
```

**Balance Sheet** (Financial position at point in time)

```
ASSETS                      LIABILITIES
Current:                    Current:
  Cash              $100K     Accounts Payable  $50K
  Accounts Rec.     $200K     Short-term Debt   $100K
Fixed:                      Long-term:
  Equipment        $500K      Long-term Debt    $400K

Total Assets: $800K         Total Liabilities: $550K
                            Equity: $250K (Assets - Liabilities)
```

**Cash Flow** (Actual money movement)

```
Operating CF: +$200K        (from operations)
Investing CF: -$100K        (buy equipment)
Financing CF: +$50K         (new loan)
Net Change:   +$150K
```

### 2. Key Metrics

```
Profitability:
- Gross Margin = Gross Profit / Revenue        (cover of COGS)
- Operating Margin = Operating Income / Rev    (cover of operations)
- Net Margin = Net Income / Revenue            (ultimate profit)
- ROE = Net Income / Equity                    (return to shareholders)

Liquidity:
- Current Ratio = Current Assets / Current Liabilities  (ability to pay)
- Quick Ratio = (CA - Inventory) / CL         (immediate ability)

Efficiency:
- Asset Turnover = Revenue / Total Assets      (asset usage)
- Inventory Turnover = COGS / Avg Inventory    (inventory usage)

Leverage:
- Debt/Equity = Total Debt / Equity            (financial risk)
- Interest Coverage = Operating Income / Interest  (ability to service debt)
```

---

## Building Financial Models

### Step 1: Historical Analysis

```
Gather data for 3-5 years:
- Revenue
- Cost of Goods Sold
- Operating Expenses
- Capital Expenditures
- Cash flows

Calculate trends:
- YoY growth rates
- Margin trends
- Ratio trends
- Volatility
```

### Step 2: Forecast Assumptions

```
Revenue Driver:
- Market size
- Market share
- Price changes
- Unit volume

Expense Driver:
- COGS as % of revenue
- Operating expense growth
- Personnel headcount and salary
- Depreciation
```

### Step 3: Build Projections

```
Year 1: Conservative estimate
Year 2-3: Growth to steady state
Year 5+: Terminal value (steady growth)

Run scenarios:
- Base case
- Upside (everything goes well)
- Downside (challenges arise)
```

### Step 4: Sensitivity Analysis

```
Which assumptions matter most?
  - If revenue 10% lower, impact?
  - If costs 5% higher, impact?
  - Which drives bottom line most?

Create tornado chart showing sensitivity
```

---

## Forecasting Techniques

### Technique 1: Driver-Based Forecast

**Use when**: Clear drivers visible

```
Revenue = Market Size × Market Share × Price
$1M = $10M market × 10% share × $100 price

If market grows 20%, new revenue $1.2M
If we gain 1% share, new revenue $1.1M
```

### Technique 2: Regression Analysis

**Use when**: Historical correlation exists

```
Analyze historical relationship:
Sales vs Marketing Spend
Plot relationship, fit trend line
Use to forecast future

If relationship = Sales = $50K + $2x Spend
Then $1M spend → $2.05M sales
```

### Technique 3: Time Series Analysis

**Use when**: Trends and seasonality

```
Decompose historical data:
- Trend (overall direction)
- Seasonality (predictable variation)
- Cyclicality (economic cycles)
- Random variation

Project forward using components
```

---

## Scenario Planning

### Structure

```
Base Case: Most likely scenario
Upside: Everything goes well
Downside: Challenges emerge

For each scenario:
- Key assumption changes
- Impact on revenue
- Impact on profitability
- Impact on cash flow
- Required funding
- Break-even timeline
```

### Example

```
BASE CASE
- 30% YoY growth
- 40% gross margin
- N/A break-even
- $1.5M cash in year 2

UPSIDE
- 50% YoY growth (market accelerates)
- 45% gross margin (scale efficiency)
- Profitable year 2
- $3M cash in year 2

DOWNSIDE
- 10% YoY growth (competition)
- 35% gross margin (pricing pressure)
- Break-even year 3
- $500K cash in year 2
```

---

## Common Pitfalls

❌ **Pitfall 1**: Hockey stick forecasts

- Assumption: Flat then suddenly soaring
- Reality: Change is gradual
- Fix: Ramp growth year-by-year

❌ **Pitfall 2**: Ignoring cash flow

- Focus: Just profit
- Problem: Can be profitable but cash-negative
- Fix: Model actual cash timing

❌ **Pitfall 3**: Single scenario

- Assumption: Only one outcome
- Problem: Miss risks and opportunities
- Fix: Build multiple scenarios

❌ **Pitfall 4**: Inputs disconnected from drivers

- Problem: Assumptions not grounded in reality
- Fix: Base on historical ratios and market analysis

---

## Tools

- **Excel/Sheets**: Build custom models
- **Tableau**: Visualize results
- **Python**: Complex analyses
- **DCF/LBO models**: Pre-built templates
- **Financial software**: NetSuite, SAP

---

## Practice Exercise

**Build a SaaS Financial Model**:

1. 100 customers at $1,000/month
2. 20% growth rate for 3 years
3. 70% COGS, 30% OpEx, 10% churn
4. Scenario analysis (base/up/down)
5. Break-even analysis

---

**Proficiency Verified**: Can build financial models, create realistic forecasts, and communicate financial implications of business decisions.
