# Amazon（AMZN）— Financial Check Supplement

- Research date：2026/11/06
- Price：259.3 USD
- Market cap：About USD 2.80 trillion

## Notes

Verification method: use the consolidated income statement and cash flow statement in the company's 2026Q3 financial report as the benchmark (net sales 201,944, operating profit 28,076, net profit 20,685, other income 68,359, interest expense 1,691, all in USD million), and compare item by item with Chinese financial media summaries and English earnings call summaries. Deviation is calculated as (A-B)/B, rounded to one decimal place. TTM free cash flow is -42,400 as disclosed by the company; TTM operating cash flow is 168,300; implied TTM capital expenditure is approximately 210,700 (=168,300+42,400, rough calculation). Levered free cash flow of -46,900 is cited from the StoneX rating report dated 2026/10/29. The 34x P/E excluding unrealized gains is an estimate; methodology is in the main text.

## Dual-source cross-check (2026Q3, unit: USD million)

| Metric | Source A | Source B | Deviation | Process |
|---|---|---|---|---|
| Net sales | 201,944 (company consolidated income statement) | USD 201.9 billion (Hithink RoyalFlush/East Money) | 0.0% | Adopt 201,944 |
| Operating profit | 28,076 (consolidated income statement) | RMB 28.1 billion (GuruFocus earnings call summary) | 0.1% | Adopt 28,076 |
| Net profit | 20,685 (consolidated income statement) | RMB 20.7 billion (AMZ123 earnings summary) | 0.1% | Adopt 20,685 |
| AWS revenue / growth | 45,984 / +39.3% (income statement + earnings call) | RMB 46 billion / +39% (East Money article) | 0.1% | Growth rate of 39.3% applied |
| Advertising revenue / growth rate | 19,637 / +12% (earnings call) | RMB 19.64 billion / +11% (East Money article body) | 1 percentage point | Adopt +12%; the text indicates 11%–12% |
| Capital expenditure | 77,260 (purchase of property and equipment) | 75,900 (cash capex, earnings call) | 1.8% | Write both figures, with RMB 77.26 billion as the primary |
| TTM free cash flow | -42,400 (company basis) | -46,900 (StoneX levered free cash flow) | 10.6% | Use -42,400, and state the leverage basis |
| P/E ratio | 20.8x（259.30 / EPS 12.46） | 19.4x (StoneX, October 29 close) | 7.2% | Using 20.8x, with a ~34x ex-floating-gain basis attached |
| Market cap | 2.80 trillion (259.30 × 10.81 billion shares) | RMB 2.63 trillion (October 29 close: 243.79) | 6.5% | Using RMB 2.80 trillion (report date) |

> Deviation = (A-B)/B. Source A is the company's original consolidated income statement from its financial report (published 2026/10/29, full text republished by Eastmoney); Source B is Chinese media and sell-side summaries: Tonghuashun (2026/10/30), GuruFocus earnings call summary (2026/10/30), AMZ123 earnings summary (2026/10/30), StoneX rating report (2026/10/29, republished by Investing), Eastmoney (2026/10/30).

## Deviation 1: RMB 77.26 billion vs RMB 75.9 billion — the gap is between "commitment" and "cash"

"Purchases of property and equipment" in the consolidated cash flow statement of the earnings report is USD 77,260 million; "cash capital expenditure" cited by the CFO on the earnings call is USD 75,900 million. The gap is USD 1.36 billion, or 1.8%. The difference comes from timing between accruals and cash: equipment delivery, invoice booking and payment do not move in sync; the financial statements record on an accrual basis, while the call speaks on a cash flow basis.

Approach: use RMB 77.26 billion as the primary figure (directly comparable with RMB 35.1 billion in the year-ago period, growth of +120%), and use the cash basis of RMB 75.9 billion when free cash flow is involved, because free cash flow is denominated in cash. Neither number can be used on its own to say "how much it beat expectations" — the market consensus of RMB 57.5 billion is a cash-basis expectation, and any comparison must make that clear.

## Deviation two: -RMB 42.4 billion vs -RMB 46.9 billion, the gap being leases and interest

Company-reported free cash flow = operating cash flow of RMB 168.3 billion − purchases of property and equipment of RMB 210.7 billion (TTM) = −RMB 42.4 billion. StoneX reports "leveraged free cash flow" of −RMB 46.9 billion, deducting an additional RMB 4.5 billion—typically finance lease principal and some capitalized interest. The leveraged basis is more conservative and better suited to assessing debt-service capacity; the company basis is used to assess cash available for distribution to shareholders.

This article uses the company basis of −RMB 42.4 billion, because the question being answered is "where did shareholders' money go," not "are creditors safe." But when discussing debt risk (long-term debt of RMB 173.1 billion, quarterly interest expense of RMB 1.69 billion), it must be remembered that the leveraged basis is worse. The RMB 4.5 billion gap between the two bases is almost exactly one quarter of interest expense—that is no coincidence.

## Deviation three: 20.8x vs 19.4x, with a third number hidden behind it — 34x

The 19.4x is based on the October 29 close of USD 243.79; the 20.8x is based on the November 6 close of USD 259.30. The prices differ, but EPS is TTM USD 12.46 in both cases. The gap is purely a matter of timing and needs no explanation. What does need explaining is the third number: strip out the Anthropic unrealized gain and the P/E is about 34x.

Other income for the first nine months of 2026 was USD 68.359 billion, 46% of pre-tax profit, mainly from appreciation of the Anthropic stake. Grossed down at a 23% effective tax rate, that is about USD 52.6 billion after tax; deduct it from TTM net profit and EPS falls from USD 12.46 to about USD 7.6, lifting the P/E from 20.8x to about 34x. So "20x P/E is not expensive" is a conclusion that includes unrealized gains, and that must be made clear when presenting to clients.

Approach: use 20.8x in the headline (consistent with the working papers and with market convention), but wherever a valuation judgment is made, give 34x alongside it, and add the 2027 forward P/E (about 17x, on neutral-scenario EPS of USD 15) as a third reference line. Put the three numbers together and readers can judge for themselves whether it is expensive.

## One discrepancy left out of the table: two versions of the order book

On a company basis, AWS backlog is USD 578 billion, up triple digits year over year. Chinese media carries another figure, "RMB 3.85 trillion," which is the USD 578 billion converted into RMB at the exchange rate (about RMB 4.1 trillion) and written as "RMB 3.85 trillion" as it spread. The same fact, one in USD and one in RMB, leads readers to mistake it for two metrics.

This type of discrepancy is the most dangerous kind: not a deviation, but a unit error. The principle is simple: for anything involving cross-border reporting, first unify to USD before comparing, and label the currency in the text. All backlog, capex and free cash flow figures in this article are in USD.

## Sources

- Amazon.com Q3 2026 earnings report (released after market close on 2026/10/29)
- Amazon Q3 2026 Earnings Call Transcript (compiled by GuruFocus, 2026/10/30)
- East Money "Amazon Follows Google With After-Hours Plunge: Free Cash Flow Turns Negative at USD 42.4 billion" (2026/10/30)
- 36Kr, "Amazon Adds 60,000 Staff as AWS Cloud Backlog Hits USD 3.85 Trillion" (2026/10/28)
- East Money Amazon stock page: 10.81 billion shares outstanding, EPS TTM USD 12.46 (read on 2026/11/13)
- Share price vs 52-week range: batchdata daily data (as of the November 6, 2026 close)
