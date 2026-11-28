# CoreWeave（CRWV）— Earnings Read Supplement

- Research date：2026/11/20
- Price：39.51 USD
- Market cap：Approximately USD 22 billion

## Notes

Reporting period: Q3 FY2026 (July–September 2026), released after market close on November 10, 2026. Stock-based compensation is derived from the gap between adjusted operating income of 379 and GAAP operating income of 207 (about USD 172 million) and is a rough estimate. Q1/Q2 revenue and Q2 adjusted operating income are derived figures, as noted in the table. Capex is presented on both an accrual basis (RMB 14.5 billion) and a cash basis (RMB 9.441 billion).

## Income statement and unit economics (USD million)

| Project | 2026Q1 | 2026Q2 | 2026Q3 | Q3 YoY |
|---|---|---|---|---|
| Revenue | Approximately 1,820 (back-calculated) | Approximately 2,580 (back-solved) | 3,661 | +168% |
| Adjusted EBITDA | — | — | 2,256 | Profit margin 62% |
| Adjusted operating profit | — | Approximately 129 (back-solved from a 5.0% margin) | 379 | +75% |
| Adjusted operating margin | — | 5.0% | 10.4% | -5.5pct |
| GAAP operating profit | Negative value | Negative value | 207 | Turned positive for the first time |
| Net interest expense | — | — | 846 | Close to 3x |
| Net loss | — | — | -709 | Same period last year -110 |
| Free cash flow | -4,711 | -5,743 | -7,466 | The gap widens |

> Q1/Q2 revenue is back-solved from Q3's +42% quarter-on-quarter growth (36.61/1.42≈25.8; 25.8/1.42≈18.2); Q2 adjusted operating income is back-solved using the 5.0% margin disclosed by management. Q1/Q2 free cash flow comes from the quarterly series cited in the working papers. Source: Q3 2026 earnings release and 10-Q.

## Operating metrics and orders

| Indicator | End of Q2 2026 | End of Q3 2026 | Change |
|---|---|---|---|
| Contracted power capacity | Approximately 3.7GW (estimated) | 4.6GW | +900MW in a single quarter |
| Capacity in operation | Approximately 1.5GW (estimated) | 1.7GW | +200MW in a single quarter |
| In operation / contracted | Approximately 41% | 37% | Decline (signings faster than commissioning) |
| Contract order backlog | USD 104 billion | USD 132.5 billion | +28.5 billion |
| Revenue share of the top two customers | — | 54% | Highly concentrated |
| Customer prepayments (increase this quarter) | — | USD 2.127 billion | Exceeds total operating cash flow |

> Back-calculate Q2 contracted power and operating power from the Q3 "single-quarter additions of 900MW / 200MW"; label these as estimates, not company disclosures.

## Layer one: revenue mix — all growth comes from newly powered-up racks

Of the RMB 3.661 billion revenue, the vast majority is GPU compute rented by the hour. The +42% quarter-on-quarter came not from price increases (which take effect gradually under contracts) but from **new racks coming online**: power in operation rose from about 1.5GW to 1.7GW in the quarter, while utilization of the existing fleet also improved. This also explains why the 25% price hike in July did not accelerate QoQ growth: only newly signed contracts get the new price, while existing contracts wait for renewal.

The customer structure is the part that warrants the most caution: **the top two customers account for 54% of revenue**, and the contract form is a "maximum commitment amount" rather than "guaranteed minimum payment." That means revenue visibility depends on the capex decisions of two companies, not on diversified market demand. The industry generally holds that any single customer above 20% is a warning sign; here it is 54%.

## Layer two: gross profit and cost — 62% is an accounting measure, not cash

The company does not disclose gross margin separately; a rough calculation of "revenue minus direct costs" gives about 70%: direct costs cover only electricity, data-center rent and operations staff, while **GPU purchase costs bypass the cost line and go into depreciation**. This is standard treatment for an asset-heavy industry, but it strips gross margin of any comparative value—in the same business, extending the depreciation period from 4 to 6 years leaves gross margin unchanged while doubling operating profit.

Cost growth is more telling. Revenue rose 168% year on year, yet the adjusted operating margin fell from 15.9% to 10.4%, showing that **expenses (staff, electricity, data-center rent, share-based compensation) grew faster than revenue**. That is normal in an expansion phase, but it also shows economies of scale have yet to emerge—Q3 revenue rose 42% quarter on quarter and margin climbed from 5.0% to 10.4%, the only meaningful operating leverage so far; whether it persists depends on Q4.

## Tier 3: Expenses and profit — interest is the real expense line

From adjusted operating profit of RMB 379 million to a net loss of RMB -709 million, three items sit in between: share-based compensation (about RMB 170 million, back-solved from 379−207), net interest of RMB 846 million, and a small amount of other items. Of these, **net interest of RMB 846 million is 23.1% of revenue and 2.2x adjusted operating profit**. This is the company's real "expense sheet," and it is stripped out entirely in the non-GAAP presentation.

Q4 guidance pushes interest to USD 1.05–1.15 billion, implying full-year interest expense of nearly USD 3.5 billion. **For comparison: full-year 2026 revenue guidance is USD 13.0–13.3 billion, so interest exceeds 26% of revenue**. When a company pays more than a quarter of its revenue to creditors, its income statement structurally does not belong to shareholders.

## Layer four: cash flow and balance sheet — the gap is widening, not narrowing

Operating cash flow was RMB 1.975 billion, of which RMB 2.127 billion came from an increase in customer prepayments; **excluding prepayments, day-to-day operations were net cash outflow**. Capital expenditure cash outlay was RMB 9.441 billion (accrual basis RMB 14.5 billion), free cash flow -RMB 7.466 billion, and the shortfall widened each quarter: Q1 -47.11, Q2 -57.43, Q3 -74.66.

Asset side: 4.6GW of contracted power, 1.7GW in operation, implying very large equipment and construction-in-progress balances; liability side: total debt RMB 46.873 billion (RMB 41.6 billion with recourse), average cost 7.9%, about RMB 13.4 billion maturing over the next two years; equity side: market cap RMB 22 billion. Put the three together, **and equity accounts for only 26% of an enterprise value of about USD 83.5 billion**. That structure determines one thing: any bad news on cash flow is amplified 4x by leverage on its way to the share price.

## Addendum: lease liabilities and hidden fixed costs

Looking only at total debt of RMB 46.87 billion understates fixed obligations, because lease liabilities on long-term data center contracts are disclosed separately and do not sit in the "debt" line. **Include leases and enterprise value rises from RMB 69 billion to RMB 83.5 billion** — the RMB 14.5 billion gap is the distance between "debt" and "all rigid payments."

Why this matters: lease liabilities and debt are identical in nature, both being pre-committed payment obligations that trigger cross-default clauses on breach. Rating agencies and bond investors look at the latter; retail investors typically look at the former. **That is why the bond market demands a 15% yield on the same company while the equity market is still going long on RMB 132.5 billion of orders** — the two crowds are reading different balance sheets.

The third easily overlooked fixed cost is electricity. Of the 4.6GW contracted power, even with only 1.7GW operating, capacity reservation, grid connection fees and gas turbine leases on the remainder are still being billed. **These costs sit not in "capex" but in future operating costs**, and will surface as higher electricity expense as capacity is gradually commissioned.

One more item to watch: prepayments are booked as "deferred revenue" — a liability, not revenue. The USD 2.127 billion increase this quarter means USD 2.127 billion of compute hours must be delivered in future to convert it into revenue. **If delivery slips, that money not only fails to become profit but must be refunded or compensated** — with only 1.7GW of 4.6GW operating, delivery risk is not hypothetical.

## Sources

- CoreWeave Q3 2026 earnings and 10-Q (released after market close on 2026/11/10)
- Global Data Center Hub "CoreWeave's $2.1B in Customer Advances Topped Its Operating Cash Flow" (2026/11/18, line-by-line breakdown of the 10-Q)
- CoreWeave 2026Q3 10-Q (filed November 10, 2026; customer concentration, debt maturities and lease liability details)
- Ainvest《CoreWeave Raised Its Forecast. The Market Was Never Worried About Demand.》（2026/11/09）
- Cailianshe "Huang Jen-hsun 'Falls From Grace': Who Gets Hurt?" (2026/11/17, bonds enter distress territory)
- China Securities Network, "Sudden Negative News: Nvidia Falls Over 14%" (2026/11/20, Nasdaq -5.28%, Philadelphia Semiconductor Index -10.73%)
- stockanalysis.com/stocks/crwv/statistics/ (556.13 million shares outstanding, D/E 16.45, mid-November data)
- Share price vs 52-week range: batchdata B9.json (close of USD 39.51 on 2026/11/20)
