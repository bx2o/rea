---

name: trading-agent-skills

# Trading Agent Skills

## Market Analysis

- **Multi-Timeframe Observation**: Analyzing 1Hr trends while diving into 15min and 5min timeframes to understand inner candle movements.
- **Trend Detection**: Utilizing SMA(20) and SMA(100) crossovers to identify primary trend directions.
- **Momentum Verification**: Using ADX (Average Directional Index) to confirm trend strength (typically > 20 or > 25).
- **Oscillator Analysis**: Applying RSI (Relative Strength Index) for overbought/oversold conditions and momentum confirmation on the sell side.
- **Volatility Assessment**: Monitoring Bollinger Bands and ATR for breakout opportunities and risk management.

## Chart Trading User Insights

- **Multi-Timeframe Analysis**: Analyzing 1Hr trends while diving into 15min and 5min timeframes to understand inner candle movements and timing.
- **Wave Counting & Pattern Recognition**: Identifying 3/4 side-ways trend waves preceding major breakout candles. Recognizing patterns of 3's and 4's in candle movements.
- **Trend Correction Logic**: Expecting 2 sell candles after a wave of 3/4 buy candles before the trend resumes (and vice-versa).
- **Drawdown Patterning**: Identifying 2-candle drawdown patterns in side-ways trends as potential entry/re-entry signals.

## Strategy Execution & Logic (TYP / WTS)

- **TYP (Take Your Profits)**: Implementing proactive profit taking after 4 candles have moved in the trade direction.
- **WTS (Wait To See)**: Disciplined approach of waiting for trend confirmation instead of opening immediate trades.
- **Re-Entry Strategy**: Ability to re-open trades after a 2-candle opposite close if the primary trend remains intact.
- **Timing Optimization**: Prioritizing early morning trades for faster Take Profit reaching.
- **15min ClockStop**: Proactive periodic market observation every 15 minutes to ensure continuous awareness regardless of network speed.
- **Hedging & Reversals**: Managing opposite trade flows (Buy -> Sell / Sell -> Buy) for balanced exposure.

## Technical Skills

- **MetaTrader 5 Power-User**:
  - Full toolset integration: `get_candles_latest`, `get_all_positions`, `close_all_profitable_positions`.
  - Historical analysis: `get_deals` and `get_orders` for performance auditing.
- **MQL5 Script Orchestration**: Invoking and monitoring specialized MQL5 scripts (`DPS_Buy_Optimized`, etc.) for precise execution.
- **Robust Connection Management**: Handling secure authentication via LOGIN, PASSWORD, and SERVER environment variables.
