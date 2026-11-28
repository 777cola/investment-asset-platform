# CoreWeave（CRWV）— Quality Screen Supplement

- Research date：2026/11/20
- Price：39.51 USD
- Market cap：Approximately USD 22 billion

## Notes

Thresholds: ROE ≥15%, gross margin ≥40%, OCF/net profit ≥80%, interest coverage ≥5x, net debt/EBITDA ≤2x, FCF positive in two of three years, share dilution ≤2%/year. Q1/Q2 revenue is back-solved from Q3's +42% QoQ (36.61/1.42≈25.8, 25.8/1.42≈18.2) and flagged as a rough estimate. LTM EBITDA is rough-calculated by summing each quarter's revenue × adjusted EBITDA margin; the company's disclosed LTM basis is not used.

## Seven hard metrics to weed out the weak (Q3 2026 data, 2026/11/20)

| Indicator | Company data | Threshold | Determination |
|---|---|---|---|
| ROE (5 consecutive years) | Negative: Q3 net loss of USD 709 million, with a larger cumulative loss over the first three quarters | ≥15%, for 5 consecutive years | ❌ However |
| Gross margin | About 70% (rough calculation: revenue of RMB 3.661 billion less direct costs; the company does not disclose gross profit separately) | ≥40% and stable | ✅ Passed |
| Operating cash flow / net profit | OCF USD 1.975 billion, of which USD 2.127 billion came from customer prepayments; negative after excluding these | ≥80% | ❌ However (net profit negative, ratio distorted) |
| Interest coverage (EBIT/interest) | 2.07 billion / 8.46 billion = 0.24x; Q4 interest guidance 1.05–1.15 billion | ≥5x | ❌ However |
| Net debt / adjusted EBITDA | Net debt of approximately RMB 61 billion / LTM EBITDA of approximately RMB 5.5–6.0 billion ≈ 10–11x (rough calculation) | ≤2x | ❌ However |
| Free cash flow (past 3 years) | 2026 first three quarters: USD -4.71 / -5.74 / -7.47 billion, never turned positive | At least 2 of 3 years positive | ❌ However |
| Share dilution | Q3 disclosed a plan to issue 35 million shares, about 6.3% of existing share capital; continuous issuance since IPO | Annual average ≤2%, with buybacks/dividends | ❌ However |

> Thresholds follow the seven quality screens. LTM EBITDA is a rough calculation from quarterly revenue and adjusted EBITDA margin (Q1 revenue about RMB 1.82 billion, Q2 about RMB 2.58 billion, Q3 RMB 3.661 billion; Q1/Q2 revenue back-solved from Q3's +42% QoQ), not the company-disclosed LTM basis. Sources: 2026Q3 earnings release and 10-Q, stockanalysis.com share count data.

## The one that got through is precisely the one least deserving of trust

Gross margin is about 70%, absurdly high for a hardware-intensive business. The reason is that it sells "compute hours": the cost side is only electricity, data center rent and O&M, while GPU purchase costs do not run through cost of goods but through depreciation. **Moving capex out of cost and into depreciation makes the gross margin flattering by construction** — a generic accounting effect in asset-heavy industries, not a competitive advantage.

To judge whether the business actually makes money, look at what is left after depreciation: GAAP operating margin of 5.7%, and net margin of -19.4% after interest. So a "pass" on this item only means it is not losing money on direct costs; it does not mean it is profitable.

## But the six points all point to the same problem: surviving on financing

The picture becomes clear when you line up the three cash-flow metrics. Operating cash flow was RMB 1.975 billion, which looks healthy, but RMB 2.127 billion of it was customer prepayments—**prepayments exceed total operating cash flow, meaning that excluding prepayments, day-to-day operations were net cash outflows**. Capital expenditure was RMB 9.441 billion, leaving free cash flow at negative RMB 7.466 billion. What fills the gap? RMB 4.2 billion in convertible bonds, RMB 2.6 billion in delayed-draw loans, 35 million shares in a follow-on offering, and roughly RMB 9 billion of prepayments over the next three months.

Interest coverage of 0.24x and net debt/EBITDA of 10x are two gauges of the same thing: **the absolute scale of debt has outstripped this business's ability to generate cash**. Q4 interest guidance is USD 1.05–1.15 billion, against adjusted operating profit of USD 379 million this quarter—even doubling margins would not cover the interest.

## But is it fatal: not fatal, but "uninvestable"

Taken individually, each item has a defense: negative ROE because the company is still in its expansion phase; negative FCF because capex is front-loaded; share dilution because it had to seize the window. These defenses held up within the 2024–2025 growth-stock narrative.

But failing all seven at once does not signal "temporarily ugly" — it signals that **this business's cash-flow structure is inherently misaligned with shareholder interests**: every dollar it earns must be plowed straight back into equipment, and it borrows two more on top; what shareholders receive is accounting growth and an ever-thickening debt instrument. For a framework whose first principle is "don't lose money," this is not a question of valuation being high or low — the target is disqualified.

## Sources

- CoreWeave Q3 2026 earnings and 10-Q (released after market close on 2026/11/10)
- Global Data Center Hub "CoreWeave's $2.1B in Customer Advances Topped Its Operating Cash Flow" (2026/11/18, line-by-line breakdown of the 10-Q)
- CoreWeave 2026Q3 10-Q (filed November 10, 2026; customer concentration, debt maturities and lease liability details)
- Ainvest《CoreWeave Raised Its Forecast. The Market Was Never Worried About Demand.》（2026/11/09）
- Cailianshe "Huang Jen-hsun 'Falls From Grace': Who Gets Hurt?" (2026/11/17, bonds enter distress territory)
- China Securities Network, "Sudden Negative News: Nvidia Falls Over 14%" (2026/11/20, Nasdaq -5.28%, Philadelphia Semiconductor Index -10.73%)
- stockanalysis.com/stocks/crwv/statistics/ (556.13 million shares outstanding, D/E 16.45, mid-November data)
- Share price vs 52-week range: batchdata B9.json (close of USD 39.51 on 2026/11/20)
