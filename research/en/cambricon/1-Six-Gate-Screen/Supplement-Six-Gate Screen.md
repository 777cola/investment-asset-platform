# Cambricon（688256）— Six-Gate Screen Supplement

- Research date：2026/08/17
- Price：1156.0 CNY
- Market cap：Approximately RMB 727.1 billion

## Notes

Six-gate scoring framework: 10 points per gate, 60 in total, defined by this report and consistent with the working papers (28/60). Financial data: 2026 interim report — operating revenue RMB 5.996 billion, net profit attributable to parent RMB 2.311 billion, non-recurring-adjusted net profit RMB 2.166 billion, gross margin 55.25%, R&D spending RMB 702 million (11.72% of revenue), total assets RMB 18.199 billion, net assets attributable to parent RMB 13.555 billion, inventory RMB 8.248 billion, prepayments RMB 2.914 billion, operating cash flow RMB 311 million; 2026Q1 — revenue RMB 2.885 billion, net profit RMB 1.013 billion; 2025 annual report — revenue RMB 6.497 billion, net profit RMB 2.059 billion, top five customers RMB 5.760 billion/88.66%. Derived figures: TTM net profit RMB 3.332 billion, TTM revenue RMB 9.612 billion, PE 217.9x, PS 75.6x, PB 53.6x, Q2 single-quarter data (interim report less Q1 report), 80x corresponding to net profit of RMB 9.08 billion and revenue of RMB 23.6 billion (back-solved at a 38.5% net margin). Market cap basis: RMB 1,156 × 628.29 million shares = RMB 726.3 billion; the market data snapshot separately gives RMB 727.1 billion, a 0.11% difference, arising from share count and market data source conventions.

## Six-gate screen (10 points per gate, 60 points total)

| Checkpoint | Determination | Rating | Based on |
|---|---|---|---|
| Gate one: circle of competence | Narrowly passed | 6/10 | Sells chips to cloud providers and intelligent computing centers, a simple revenue model; but order visibility is low and customers are highly concentrated (top five at 88.66% in 2025), so quarterly results cannot be extrapolated |
| Stage two: a good business | Narrowly passed | 6/10 | Gross margin of 55.25% signals a good business; but with RMB 8.248 billion in inventory and only RMB 311 million in operating cash flow, profit is not turning into cash |
| Stage three: the moat | Through | 7/10 | Domestic second source for training chips: MLU 590/690 already deployed in CSP-scale scenarios; the BANG software stack and model adaptation create switching costs, but the ecosystem is far weaker than CUDA |
| Stage 4: Management | Through | 6/10 | Chen Tianshi's technical judgment proved accurate: the company turned profitable in 2025, and the 2026 incentive plan sets a revenue target of RMB 13.5 billion; it completed 44% in the first half, leaving RMB 7.5 billion to deliver in the second half |
| Gate 5: Margin of safety | Does not pass | 1/10 | 218x TTM PE, 75.6x PS, 53.6x PB; bear-case target RMB 400, 65% downside, no cushion whatsoever |
| Stage six: discipline | Fails to pass | 2/10 | The buy case rests on "the compute gap persists + customers do not switch orders + capacity is obtainable" — none of the three is within the company's control, and none can be reconciled line by line against quarterly reports |
| Consensus | Fails to pass | 28/60 | Great sector, genuinely scarce, absurdly expensive. Added to the watchlist; waiting for earnings to catch up with the valuation or the price to fall below RMB 800. |

> Data sources: Cambricon 2026 interim report (2026/08/07), 2025 annual report (2026/03/12), 2026 restricted stock incentive plan (draft) (2026/07/28); share price and market cap as of batchdata close on 2026/08/17 (RMB 1,156.00, total share capital 628.29 million shares). The scoring methodology is defined by this report and is consistent with the six-gate assessment in the working papers (28/60).

## Gate one and two: the business is understandable, the quarter is not

The first hurdle scores 6 points; the deduction is not for "incomprehensible" but for "opaque." Its revenue structure boils down to one sentence: sell SiYuan-series accelerator cards to internet cloud providers, telecom operators and local intelligent computing centers. Grasping that layer takes five minutes; judging how much revenue the next quarter will bring is far harder — Q1 2026 revenue was RMB 2.885 billion (+159.56% YoY), Q2 RMB 3.111 billion (+75.83% YoY, +7.84% QoQ), **from doubling to seventy percent to low single-digit sequential growth, three speeds in three quarters** — such a curve cannot be extrapolated.

The reason lies in the customer structure. In the 2025 annual report, the top five customers accounted for RMB 5.760 billion in sales, 88.66% of the full year; in Q1 2025 a single major customer at one point accounted for 96.48% (media estimate based on the private placement filing). **One customer's acceptance schedule is a quarter's financials** — this is not a problem analytical skill can solve; it is a transparency problem inherent to the business itself.

## The other half of the second hurdle: 55% gross margin, but the cash is stuck in inventory

The standard for a good business is "raising prices without losing volume, and earning cash." Cambricon delivered the first half: gross margin was 55.25% in the first half of 2026, down only 0.68 points year on year, and Q2 alone was 56.10%, up 1.77 points sequentially — **no price cuts to buy volume, pricing power intact**, a rarity among domestic chips.

It did not deliver the second half. First-half net profit attributable to shareholders was RMB 2.311 billion, while operating cash flow was only RMB 311 million, down 65.83% year on year, for a net profit cash content of 0.135. The shortfall sits in two places: inventory of RMB 8.248 billion (up RMB 3.304 billion from the start of the year, 45.32% of total assets) and prepayments of RMB 2.914 billion (up 291.37% year on year). **This is the classic move of a Fabless company: pay first to lock in capacity, then wait for the wafers to come back.** It shows the orders are real, and it also shows that profit is for now just a pickup slip.

## Third and fourth hurdles: scarce supply is the only hard logic behind this rally

Gate three scores 7, the highest of the six. On 15 December 2022, the US BIS added Cambricon to the Entity List; TSMC then stopped supplying 7nm-and-below capacity to mainland AI chip customers, and the Siyuan 590/690 shifted to SMIC's N+2 (7nm-equivalent). **The sanctions did not kill it; they pinned it into the position of "the only viable second supplier"**: Huawei's Ascend capacity goes first to its own use, so customers that need secured supply must keep a non-Huawei path.

Software is where the moat's depth lies, and also its thinnest link. The BANG instruction set plus the Neuware software stack has completed adaptation for mainstream open-source models including DeepSeek, Qwen, Hunyuan, GLM, Kimi and MiniMax, and customers migrating over must rewrite operators and retune performance—that cost is real. But the developer habits CUDA built over fifteen years cannot be caught up in three to five, hence 7 rather than 9.

Gate four scores 6. Chen Tianshi's judgment has been validated twice in the past two years: 2025 revenue of RMB 6.497 billion, +453% year on year, with its first full-year turnaround to profit (net profit RMB 2.059 billion); in July 2026 it launched an incentive plan of 5 million shares (0.80% of total share capital, grant price RMB 750), with assessment thresholds of RMB 13.5 billion for 2026, RMB 40.5 billion cumulative for 2026–2027, and RMB 100 billion cumulative over three years. **Daring to write "RMB 100 billion in three years" into the assessment is confidence, and also pressure**—backing that out implies RMB 27 billion in 2027 and RMB 59.5 billion in 2028.

## Level five: the arithmetic of a 218x P/E, and the problem worked in reverse

First, align the basis. TTM net profit = full-year 2025 20.59 + 2026H1 23.11 − 2025H1 10.38 = RMB 3.332 billion; market cap 1,156 × 628.29 million shares = RMB 726.3 billion; **PE(TTM) 217.9x**. At the same point: TTM revenue RMB 9.612 billion, P/S 75.6x; net assets attributable to shareholders RMB 13.555 billion, P/B 53.6x.

Another calculation is more intuitive. At the current RMB 726.3 billion, if the market were willing to pay 80x (already generous for a growth stock), net profit would need to be RMB 9.08 billion; working back from a 38.5% net margin, revenue would need to be RMB 23.6 billion. **Yet the company's own assessment targets are RMB 13.5 billion for 2026 and RMB 27 billion for 2027**—in other words, the current price roughly equals "full achievement of the 2027 assessment target + 80x PE." At 60x, revenue of RMB 31.4 billion would be required, which is a 2028 event.

Here is another set of figures for comparison: on June 30, with the share price at RMB 1,595.55, the company itself issued a risk warning announcement stating a rolling PE of 368.97x and P/B of 77.88x, versus an average of 74.86x for the computer, communications and electronics manufacturing industry and 74.13x for the software industry. **The company proactively told the market "I am five times more expensive than the industry"—rare in A-shares.** The interim report lifted TTM net profit from RMB 2.717 billion to RMB 3.332 billion, and only then did PE fall from 369x to 218x.

## Gate six: turn the buy thesis into three numbers that quarterly results can prove wrong

I do not accept the premise that "domestic compute has large long-term space." Discipline requires turning assumptions into things that can be verified as true or false in the next earnings report. What I write down now are three: **Q3 single-quarter revenue up ≥15% QoQ** (H1 completed only RMB 13.5 billion of the RMB 30 billion target, 44%; H2 must deliver RMB 7.5 billion, and less than 15% QoQ means the target is missed); **operating cash flow/net profit ≥0.5** (now 0.135, meaning profit is still sitting in inventory); **top five customers' share falls below 80%** (now 88.66%; if it cannot come down, bargaining power stays permanently with the other side).

All three can be read in the Q3 report in late October. Why not buy now? Because if any one of these three fails to hold, the 218x P/E has no denominator to match it. **Buying it requires not courage, but bringing the valuation down first.**

## Veto items and items to be verified

**Veto item: margin of safety.** A 218x TTM P/E and 75.6x P/S mean the market has already assumed 2028 revenue above RMB 30 billion with net margin sustained at 35% — that is the bull case, not the base case. The 6.33% drop on the first trading day after the August 10 interim results, wiping about RMB 48 billion off market cap, was the market's first reaction to the "growth downshift"; from June 30 to August 17 the stock fell from RMB 1,595.55 to RMB 1,156, a 27.6% drawdown. **Three items to verify:** ① whether Q3 single-quarter revenue returns to above 15% QoQ (implying RMB 13.5 billion for the full year); ② inventory turnover days and write-down provisions on the RMB 8.248 billion of inventory — RMB 5.749 billion of raw materials and RMB 2.537 billion of outsourced processing materials, which require provisioning with each product iteration; ③ whether top-five customer concentration falls, especially the share of a single internet customer. If all three improve, then we can talk valuation; if only one improves, that is a bounce, not a reversal.

## Sources

- Cambricon 2026 Interim Report (disclosed August 7, 2026, SSE)
- Sina Finance/China Securities Network: Cambricon H1 revenue RMB 5.996 billion, net profit RMB 2.311 billion (2026/08/07)
- Guosheng Securities, "Cambricon: 26H1 earnings release accelerates, stepping up supply to support order delivery" (2026/08/11)
- 21st Century Business Herald: Three-year revenue targets RMB 100 billion, Cambricon equity incentive assessment targets (2026/07/28)
- East Money: down 6.33% on the first trading day after the interim report, market cap down about RMB 48 billion (2026/08/10)
- Share price, 52-week range and market cap: batchdata quote snapshot (2026/08/17 close); total share capital 629 million shares
