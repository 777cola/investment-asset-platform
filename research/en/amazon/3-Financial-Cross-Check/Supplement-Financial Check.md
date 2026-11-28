# Amazon（AMZN）— Financial Check Supplement

- Research date：2026/11/06
- Price：259.3 USD
- Market cap：About USD 2.80 trillion

## Notes

Verification method: benchmark against the consolidated income statement and cash flow statement in the company's 2026Q3 financial report (net sales 201,944, operating profit 28,076, net profit 20,685, other income 68,359, interest expense 1,691; all in USD million), comparing item by item with Chinese financial media summaries and English earnings call summaries. Deviation = (A-B)/B, rounded to one decimal place. TTM free cash flow is -42,400 as disclosed by the company; TTM operating cash flow is 168,300; implied TTM capital expenditure is approximately 210,700 (=168,300+42,400, rough calculation). Levered free cash flow of -46,900 is cited from the StoneX rating report dated 2026/10/29. The 34x P/E excluding unrealized gains is an estimate; methodology is in the main text.

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

> Deviation = (A-B)/B. Source A is the company's original consolidated income statement from its financial report (published 2026/10/29; full text republished by Eastmoney). Source B comprises Chinese media and sell-side summaries: Tonghuashun (2026/10/30), the GuruFocus earnings call summary (2026/10/30), the AMZ123 earnings summary (2026/10/30), the StoneX rating report (2026/10/29; republished by Investing) and Eastmoney (2026/10/30).

## Deviation 1: RMB 77.26 billion vs RMB 75.9 billion — the gap sits between "commitment" and "cash"

"Purchases of property and equipment" in the consolidated cash flow statement is USD 77,260 million, while "cash capital expenditure" cited by the CFO on the earnings call is USD 75,900 million — a gap of USD 1.36 billion, or 1.8%. The difference is timing between accruals and cash: equipment delivery, invoice booking and payment do not move in sync, and the financial statements are prepared on an accrual basis while the call speaks on a cash basis.

Approach: use RMB 77.26 billion as the primary figure, directly comparable with RMB 35.1 billion in the year-ago period (+120% YoY), and use the RMB 75.9 billion cash basis wherever free cash flow is involved, since free cash flow is denominated in cash. Neither number alone supports a claim on "how much it beat expectations" — the RMB 57.5 billion consensus is a cash-basis expectation, and any comparison must make that explicit.

## Deviation two: -RMB 42.4 billion vs -RMB 46.9 billion, the gap reflecting leases and interest

Company-reported free cash flow = operating cash flow of RMB 168.3 billion − purchases of property and equipment of RMB 210.7 billion (TTM) = −RMB 42.4 billion. StoneX's "leveraged free cash flow" comes in at −RMB 46.9 billion, deducting a further RMB 4.5 billion—typically finance lease principal and some capitalised interest. The leveraged basis is the more conservative measure and better suited to assessing debt-service capacity; the company basis is used to gauge cash available for distribution to shareholders.

This article uses the company basis of −RMB 42.4 billion, because the question at hand is "where did shareholders' money go," not "are creditors safe." When discussing debt risk, however (long-term debt of RMB 173.1 billion, quarterly interest expense of RMB 1.69 billion), note that the leveraged basis is worse. The RMB 4.5 billion gap between the two bases is almost exactly one quarter of interest expense—that is no coincidence.

## Deviation three: 20.8x vs 19.4x, with a third number hidden behind it — 34x

The 19.4x uses the October 29 close of USD 243.79; the 20.8x uses the November 6 close of USD 259.30. The prices differ but EPS is TTM USD 12.46 in both cases, so the gap is purely a matter of timing and needs no explanation. What does need explaining is the third number: strip out the Anthropic unrealized gain and the P/E is about 34x.

Other income for the first nine months of 2026 was USD 68.359 billion, 46% of pre-tax profit, mainly from appreciation of the Anthropic stake. Grossed down at a 23% effective tax rate, that is about USD 52.6 billion after tax; deduct it from TTM net profit and EPS falls from USD 12.46 to about USD 7.6, lifting the P/E from 20.8x to about 34x. So "20x P/E is not expensive" is a conclusion that includes unrealized gains, and that must be made clear when presenting to clients.

Approach: use 20.8x in the headline (consistent with the working papers and with market convention), but wherever a valuation judgment is made, give 34x alongside it, and add the 2027 forward P/E (about 17x, on neutral-scenario EPS of USD 15) as a third reference line. Put the three numbers together and readers can judge for themselves whether it is expensive.

## One discrepancy is not captured in the table: two versions of the order book

At the company level, AWS backlog stands at USD 578 billion, up triple digits YoY. Chinese media carries a second figure, "RMB 3.85 trillion" — the USD 578 billion converted at the exchange rate (about RMB 4.1 trillion) and circulated as "RMB 3.85 trillion." The same fact, one in USD and one in RMB, leads readers to mistake it for two metrics.

This is the most dangerous kind of discrepancy: not a deviation, but a unit error. The principle is simple — for anything involving cross-border reporting, unify to USD before comparing and label the currency in the text. All backlog, capex and free cash flow figures in this article are in USD.

## Sources

- Amazon.com Q3 2026 earnings report (released after market close on 2026/10/29)
- Amazon Q3 2026 Earnings Call Transcript (compiled by GuruFocus, 2026/10/30)
- East Money: "Amazon Follows Google With After-Hours Plunge as Free Cash Flow Turns Negative at USD 42.4 billion" (2026/10/30)
- 36Kr, "Amazon Adds 60,000 Staff as AWS Cloud Backlog Hits USD 3.85 Trillion" (2026/10/28)
- East Money's Amazon stock page shows 10.81 billion shares outstanding and EPS (TTM) of USD 12.46 (read on 2026/11/13)
- Share price vs 52-week range: batchdata daily data (as of the November 6, 2026 close)
