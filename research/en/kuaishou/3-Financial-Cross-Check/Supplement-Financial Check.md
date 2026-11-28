# Kuaishou（01024）— Financial Check Supplement

- Research date：2026/10/12
- Price：29.26 HKD
- Market cap：About HKD 126.7 billion

## Notes

Cross-check method: use the earnings announcement as Source A and the CMS report, the National Business Daily reprint and the stockanalysis Hong Kong stock page as Source B, calculate the deviation item by item and judge whether it affects the conclusion. Calculated items: gross profit of RMB 18.34 billion = 355.35 × 51.6%; 2025Q2 gross profit of RMB 19.52 billion = 350.4 × 55.7%; difference between adjusted and reported net profit of RMB 761 million = 39.13 - 31.52; TTM net profit of HKD 12.07 billion = 1,267 ÷ 10.5. The two largest deviations (cash-like assets 3.2% and R&D 0.43%) have been explained item by item; the rest are rounding.

## 2026Q2 key data cross-check across two sources (RMB 100 million)

| Indicator | Source A: earnings announcement | Source B: Brokerages/media | Deviation | Processing |
|---|---|---|---|---|
| Total revenue | 355.35 | 355.3 (CMS commentary) | 0.01% | Adopt 355.35 |
| Online marketing services | 206 | 205.8 | 0.10% | Adopt 206 (rounded in the announcement) |
| Livestreaming | 87 | 86.9 | 0.11% | Adopt 87 |
| Other services (including Kling) | 62 | 62.0 | 0.00% | Adopt 62 |
| Kling AI revenue | 8.5 | 8.5 (per NBD's account) | 0.00% | Adopt 8.5 |
| Gross margin | 51.6% | 51.5% (derived from gross profit/revenue) | 0.1pct | Adopt 51.6% |
| Adjusted net profit | 39.13 | 39.1 | 0.08% | Adopt 39.13 |
| R&D expenses | 46 | 45.8 | 0.43% | Adopt 46 |
| Cash assets | 242.7 | 235 (cash and equivalents only) | 3.2% | Adopt 242.7 |

> Source A: Kuaishou Technology Q2 and interim 2026 results announcement (2026/08/18). Source B: China Merchants Securities "Kuaishou-W 2026Q2 Review" (2026/08/23), Daily Economic News Kling report (2026/08/23), stockanalysis.com/quote/hkg/1024 balance sheet basis. Deviation = |A-B|/A.

## Two definitional gaps that need explaining, not errors

Cash assets: RMB 24.27 billion vs RMB 23.5 billion, a difference of RMB 770 million. The announcement basis is cash and equivalents + time deposits + wealth management products combined; stockanalysis only captures the "cash and cash equivalents" line on the balance sheet, with time deposits and wealth management products sitting in other lines. The 3.2% gap comes entirely from this. Treatment: use RMB 24.27 billion for valuation, because it is genuinely available and can cover interest-bearing debt; but note that it includes restricted portions, and do not assume "net cash fully distributable as dividends."

R&D: RMB 4.6 billion vs RMB 4.58 billion, a difference of 0.43%. Media summaries typically copy the "R&D expenses" line directly; R&D expenses in the announcement include share-based compensation amortization, and some bases make capitalization adjustments. The gap is under RMB 20 million and affects no conclusion. Treatment: use RMB 4.6 billion.

## Three things you must calculate yourself: gross profit, net margin, profit variance

The announcement gives only a gross margin of 51.6%, not gross profit. 355.35 × 51.6% = RMB 18.34 billion — this is a calculated figure, not a disclosed one, and must be flagged as such in the table. Last year: 350.4 × 55.7% = RMB 19.52 billion, down 6.0% YoY — note that revenue rose 1.4% while gross profit fell 6.0%; this scissors gap is the source of the profit decline.

Reported net profit of RMB 3.152 billion versus adjusted net profit of RMB 3.913 billion leaves a gap of RMB 761 million, reflecting share-based compensation expense and amortization of intangible assets (including amortization of Kling-related investment). The two bases must not be mixed in YoY comparisons: 3.152 versus last year's 4.922 is -36.0%, while 3.913 versus last year's 5.614 is -30.3%. Both numbers are correct; mixing them is wrong.

The bottom line is the "adjusted basis", because it strips out fluctuations in share-based compensation valuation around the Kling spin-off and is comparable across periods; but to calculate what shareholders actually receive, one must return to the reported net profit of RMB 3.152 billion.

## The one that does not add up: market cap and share count

HKD 29.26 × 4.33 billion shares = HKD 126.7 billion, consistent with the market cap in the working papers. But the TTM net profit implied by the 10.5x PE is about HKD 12.07 billion (roughly RMB 11.05 billion), higher than the annualized RMB 8.2 billion or so for the first half of 2026 (a rough 6.2 + 2.0 calculation)—indicating that profit in the second half of 2025 was clearly better than in the first half of 2026, and the TTM figure contains a high base that has already disappeared.

That is why the TTM PE is 10.5x and the forward PE is 12.9x. The market is not naive; it uses forward earnings. Any analysis that calls 10.5x "cheap" must first check which period the denominator covers.

## Disclosure risk: what the company no longer discloses

From 2026, Kuaishou will no longer disclose e-commerce GMV quarterly, reporting only merchant count and commission revenue. This means: ① the true growth rate of the e-commerce line cannot be cross-verified by third parties; ② commission revenue is folded into "other services", mixed together with Kling's RMB 850 million on a single table; ③ all GMV assumptions in sell-side models are estimates.

For researchers, the narrowing of disclosure is itself information: what a company chooses not to disclose is usually what is deteriorating.

## One additional sensitivity test I ran

The 51.6% gross margin is the most sensitivity-worthy item in this report. With revenue of RMB 35.5 billion, every 1pct change in gross margin equals RMB 355 million in gross profit, equivalent to 9% of adjusted net profit. In 2026Q2 it fell 4.1pct year on year, giving up RMB 1.46 billion in gross profit and covering nine-tenths of the RMB 1.7 billion decline in net profit.

In other words: the profit decline does not need "AI investment" to explain it; rising revenue-share costs alone are enough. The roughly RMB 1.2 billion of extra R&D spending is the second layer; only the two combined make the -30.3% add up. This decomposition is critical to the call: if the decline comes mainly from revenue sharing, it is structural (you have to keep conceding margin to win creators); if mainly from R&D, it is temporary (it comes back once the investment period ends). The evidence so far points to the former.

## Sources

- Kuaishou Technology Q2 and Interim 2026 Results Announcement (2026/08/18, kuaishou.gcs-web.com)
- China Merchants Securities: Kuaishou-W Q2 2026 review (2026/08/23, segment revenue and margins)
- Daily Economic News: Kling AI revenue up more than 200% (August 23, 2026; R&D and Kling data)
- Kuaishou announcement: Beijing Keling capital increase and share expansion, post-money valuation of about USD 18 billion (2026/07/02)
- stockanalysis.com/quote/hkg/1024/ 4.33 billion shares outstanding, TTM net income basis
- Share price vs 52-week range: batchdata closing data (as of 2026/10/12)
