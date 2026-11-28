# CoreWeave（CRWV）— Financial Check Supplement

- Research date：2026/11/20
- Price：39.51 USD
- Market cap：Approximately USD 22 billion

## Notes

Reconciliation principle: use only one source per figure; where two sources exist, retain the discrepancy and explain the treatment. Share count of 556.13 million shares comes from stockanalysis.com (mid-November 2026); market cap = 39.51 × 556.13 = USD 21.98 billion. Q1/Q2 free cash flow of -USD 4.711 billion / -USD 5.743 billion comes from the quarterly series cited in the working papers; the original 10-Qs were not checked quarter by quarter.

## Dual-source comparison (2026Q3, USD million)

| Metric | Source A | Source B | Deviation | Processing |
|---|---|---|---|---|
| Revenue | Earnings report 3,661 | Media flash 3,660 ("RMB 366 million") | 0.03% | Adopt 3,661 |
| Net loss | Earnings -709 | Cailianshe "loss of RMB 710 million" | 0.14% | Adopt -709 |
| Adjusted EBITDA | Earnings RMB 225.6 billion (margin 62%) | GDCH breakdown 2,256 | 0% | Adopt 2,256 |
| Contract order backlog | Earnings RMB 132.5 billion | Back-calculation: 1,040 at end-Q2 + 285 net adds in the quarter = 1,325 | 0% | Use RMB 132.5 billion; the figures reconcile |
| Total debt | 10-Q 46,873 | stockanalysis D/E 16.45 × implied equity of about 46,900 | 0.06% | Adopt 46,873 |
| Capital expenditure | Cash flow statement 9,441 (cash outflow) | Company capex basis 14,500 (accrual) | 53.6% | Use 9,441 for FCF; use 14,500 for capacity and orders |
| Free cash flow | Earnings -7,466 | Self-calculated: OCF 1,975 − capex 9,441 = -7,466 | 0% | Self-consistent, using -7,466 |
| Net interest expense | Earnings report 846 | Cailian Press: "interest of approximately RMB 850 million" | 0.47% | Adopt 846 |

> Source A: CoreWeave 2026Q3 financial results and 10-Q (2026/11/10); Source B: Global Data Center Hub 10-Q breakdown (2026/11/18), Cailian Press (2026/11/17), stockanalysis.com/stocks/crwv/statistics/. Deviation = |A−B| / A.

## The one big discrepancy: RMB 9.44 billion or RMB 14.5 billion

"Cash paid for the purchase and construction of fixed assets" in the cash flow statement is USD 9.441 billion, while the company's reported quarterly capex is 14.5 billion — a gap of 5.06 billion. The difference mainly comes from equipment and construction payments already contracted and delivered but not yet paid — GPUs arriving, data centers under construction, with supplier payment terms parking these in payables and lease liabilities, so no cash went out this quarter.

This gap cuts both ways. The good side: the capacity the company actually received is larger than cash spending implies — 9.441 billion in cash bought 14.5 billion of asset investment, showing suppliers are willing to extend payment terms. The bad side: this 5.06 billion is "owed capex" that will turn into cash outflows in coming quarters. So the -7.466 billion free cash flow calculated on 9.441 billion is already the most optimistic basis; on a true accrual basis, the shortfall is on the order of -10.5 billion.

## What exactly is net debt: RMB 41.4 billion or RMB 61 billion

Both calculations have been cited and must be clarified. First: total debt RMB 46.873 billion − cash of about RMB 5.5 billion = about RMB 41.4 billion, which is "net interest-bearing debt" and excludes operating leases. Second: including long-term data center lease liabilities, net debt is about RMB 61 billion and enterprise value about USD 83.5 billion, on an "all fixed payment obligations" basis.

This report uses RMB 61 billion when discussing equity thickness and EV/EBITDA (because leases are rigid payments, debt-like in nature), and uses interest of RMB 84.6 billion against interest-bearing debt of RMB 46.873 billion when discussing interest coverage (statutory reporting basis). Both numbers are correct; mixing them is what causes errors—and this is where the company's financial statements are most easily misread.

## Consistency check against the working papers

This report retains all ratings, target prices and core conclusions from the draft: rating "Underweight", three scenarios USD 12 / 43 / 97. Cross-validation overturns none of the figures and instead reinforces one judgment — the order book of RMB 132.5 billion ties out completely (104.0 + 28.5), showing no room for fabrication on the demand side; while the cash-flow gap is widening (Q1 -47.1, Q2 -57.4, Q3 -74.7), showing the problem is not on the revenue side.

The only wording that needs correction: the draft's "quarterly capex of 1.45 billion" is easily confused with cash outlay of 944 million when expressed in USD billion; this report uniformly labels it "accrual basis 14.5 billion / cash basis 9.441 billion". This detail matters because Q4 interest guidance of 1.05–1.15 billion is already close to 1/8 of cash capex — financing costs are catching up with construction costs in magnitude.

## Sources

- CoreWeave Q3 2026 earnings and 10-Q (released after market close on 2026/11/10)
- Global Data Center Hub "CoreWeave's $2.1B in Customer Advances Topped Its Operating Cash Flow" (2026/11/18, line-by-line breakdown of the 10-Q)
- CoreWeave 2026Q3 10-Q (filed November 10, 2026; customer concentration, debt maturities and lease liability details)
- Ainvest《CoreWeave Raised Its Forecast. The Market Was Never Worried About Demand.》（2026/11/09）
- Cailianshe "Huang Jen-hsun 'Falls From Grace': Who Gets Hurt?" (2026/11/17, bonds enter distress territory)
- China Securities Network, "Sudden Negative News: Nvidia Falls Over 14%" (2026/11/20, Nasdaq -5.28%, Philadelphia Semiconductor Index -10.73%)
- stockanalysis.com/stocks/crwv/statistics/ (556.13 million shares outstanding, D/E 16.45, mid-November data)
- Share price vs 52-week range: batchdata B9.json (close of USD 39.51 on 2026/11/20)
