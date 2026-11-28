# CoreWeave（CRWV）— Financial Check Supplement

- Research date：2026/11/20
- Price：39.51 USD
- Market cap：Approximately USD 22 billion

## Notes

Reconciliation principle: one source per figure; where two sources exist, retain the discrepancy and explain the treatment. The 556.13 million share count is from stockanalysis.com (mid-November 2026); market cap = 39.51 × 556.13 = USD 21.98 billion. Q1/Q2 free cash flow of -USD 4.711 billion / -USD 5.743 billion is from the quarterly series cited in the working papers; the original 10-Qs were not checked quarter by quarter.

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

> Source A: CoreWeave 2026Q3 results and 10-Q (2026/11/10); Source B: Global Data Center Hub 10-Q breakdown (2026/11/18), Cailian Press (2026/11/17), stockanalysis.com/stocks/crwv/statistics/. Deviation = |A−B| / A.

## The key discrepancy: RMB 9.44 billion versus RMB 14.5 billion

"Cash paid for the purchase and construction of fixed assets" in the cash flow statement is USD 9.441 billion, against reported quarterly capex of 14.5 billion — a gap of 5.06 billion. The difference mainly reflects equipment and construction payments already contracted and delivered but not yet paid: GPUs arriving and data centers under construction, with supplier payment terms parking these in payables and lease liabilities, so no cash went out this quarter.

The gap cuts both ways. On the positive side, capacity actually received exceeds what cash spending implies — 9.441 billion of cash bought 14.5 billion of asset investment, showing suppliers are willing to extend payment terms. On the negative side, this 5.06 billion is "owed capex" that becomes cash outflow in coming quarters. The -7.466 billion free cash flow calculated on 9.441 billion is therefore already the most optimistic basis; on a true accrual basis, the shortfall is on the order of -10.5 billion.

## What exactly is net debt: RMB 41.4 billion or RMB 61 billion

Both calculations have been cited and need clarifying. First: total debt of RMB 46.873 billion less cash of about RMB 5.5 billion = about RMB 41.4 billion, i.e. "net interest-bearing debt", which excludes operating leases. Second: including long-term data centre lease liabilities, net debt is about RMB 61 billion and enterprise value about USD 83.5 billion, on an "all fixed payment obligations" basis.

We use RMB 61 billion when discussing equity thickness and EV/EBITDA, since leases are rigid payments and debt-like in nature, and interest of RMB 84.6 billion against interest-bearing debt of RMB 46.873 billion when discussing interest coverage on the statutory reporting basis. Both numbers are correct; mixing them is what causes errors—and this is where the company's financial statements are most easily misread.

## Consistency check against the working papers

All ratings, target prices and core conclusions from the draft are retained: rating "Underweight", with three scenarios of USD 12 / 43 / 97. Cross-validation overturns none of the figures and instead reinforces one judgment — the order book of RMB 132.5 billion ties out completely (104.0 + 28.5), leaving no room for fabrication on the demand side, while the widening cash-flow gap (Q1 -47.1, Q2 -57.4, Q3 -74.7) shows the problem is not on the revenue side.

Only one wording change is needed: the draft's "quarterly capex of 1.45 billion" is easily confused with cash outlay of 944 million when expressed in USD billion, so this report uniformly labels it "accrual basis 14.5 billion / cash basis 9.441 billion". The detail matters: Q4 interest guidance of 1.05–1.15 billion is already close to 1/8 of cash capex, meaning financing costs are catching up with construction costs in magnitude.

## Sources

- CoreWeave Q3 2026 results and 10-Q filed after the close on 2026/11/10
- CoreWeave's $2.1B in Customer Advances Topped Its Operating Cash Flow

Global Data Center Hub, 2026/11/18 — line-by-line breakdown of the 10-Q
- CoreWeave 2026Q3 10-Q (filed November 10, 2026; customer concentration, debt maturities and lease liabilities)
- Ainvest, "CoreWeave Raised Its Forecast. The Market Was Never Worried About Demand." (2026/11/09)
- Cailianshe, "Huang Jen-hsun 'Falls From Grace': Who Gets Hurt?", 2026/11/17 — bonds enter distress territory
- China Securities Network, "Sudden Negative News: Nvidia Falls Over 14%" (2026/11/20; Nasdaq -5.28%, Philadelphia Semiconductor Index -10.73%)
- CoreWeave (CRWV) statistics, per stockanalysis.com/stocks/crwv/statistics/: 556.13 million shares outstanding, debt/equity 16.45, data as of mid-November
- Share price vs 52-week range: batchdata B9.json (close USD 39.51, 2026/11/20)
