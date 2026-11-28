# Baidu（9888.HK）— Financial Check Supplement

- Research date：2026/11/23
- Price：63.55 HKD
- Market cap：Approximately HKD 168 billion (approximately USD 21.5 billion)

## Notes

Verification scope: primarily 2026Q3 single-quarter data. Deviation formula |A−B|/B. Source list: Baidu Q3 2026 earnings report (2026/11/16); People's Daily Online, "Baidu: Q3 total revenue RMB 30.8 billion, AI business revenue share above half for three consecutive quarters" (2026/11/16); The Paper, "Robin Li: AI cloud investment payback period is shortening" (2026/11/15); Hong Kong Economic Journal, "Baidu adjusted profit down 36% last quarter; first dividend expected to be announced before year-end" (2026/11/15); stockanalysis.com/quote/hkg/9888/statistics/ (late November); batchdata B9.json (2026/11/23 close HKD 63.55, 52-week high 160.5). All values derived from the above figures via arithmetic are marked "rough calculation/back-solved" in that section.

## Dual-source cross-check (2026Q3; unit: RMB billion unless otherwise noted)

| Indicator | Source A | Source B | Deviation | Process |
|---|---|---|---|---|
| Total revenue | 308.07 (company earnings 11/16) | 308 (People's Daily Online, November 16) | 0.02% | Adopt 308.07 |
| Online marketing revenue | 119 (Company financial reports) | 119 (The Paper, 11/15) | 0 | Adopt 119 |
| AI cloud infrastructure | 82 (Company earnings) | 82 (The Paper, November 15) | 0 | Adopt 82 |
| Net profit attributable to shareholders | 13.95 (company financial report) | 13.9 (People's Daily Online, November 16) | 0.4% | Adopt 13.95 |
| Non-GAAP net profit | 23.95 (company financial report) | 23.9 (back-calculated from HKEJ's "36% less profit") | 0.2% | Adopt 23.95 |
| Market cap | HKD 168 billion (63.55 × 2.64 billion shares) | HKD 164.3 billion (stockanalysis, late November) | 2.1% | Using HKD 168 billion, see below |
| PE(TTM) | 19.7x (1,680 ÷ implied TTM net profit of HKD 8.53 billion) | 19.31x（stockanalysis） | 2.0% | Use 19.7x and label it "distorted by impairment" |
| PB | 0.52x（stockanalysis） | 0.52x (RMB 153.0 billion ÷ implied net assets of RMB 294.2 billion) | 0 | Adopt 0.52x |

> Source A is the company's FY2026 Q3 results (released 16 November 2026) and its earnings commentary; Source B is same-day/next-day media coverage and third-party databases. Deviation = |A−B| / B. RMB and HKD conversions use HKD 1 ≈ RMB 0.911.

## Why Baidu requires cross-validation

Baidu's financial statements are more complex than most China concept stocks, with three structural pitfalls.

The first is iQIYI. iQIYI is a consolidated subsidiary, but from 2025 the company switched to telling its story through the "Baidu general business" metric — RMB 25 billion, up 1% year on year — excluding iQIYI. In the same report, total revenue of RMB 30.807 billion and general business of RMB 25 billion differ by RMB 5.8 billion, which is mainly iQIYI. Which metric is used to calculate growth changes the conclusion entirely: total revenue -1.1%, general business +1%.This report uniformly uses total revenue to calculate growth and general business to examine structure.

The second is non-GAAP. Non-GAAP net profit was RMB 2.395 billion, down 36% year on year, excluding share-based compensation, impairments and changes in the fair value of investments. That figure is RMB 1 billion higher than net profit attributable to the parent of RMB 1.395 billion, with the difference mainly share-based compensation. To judge the trend of the core business, look at non-GAAP; to judge accounting profit, look at GAAP. Both must be presented.

The third is share capital. Baidu's Hong Kong shares (9888) coexist with its US ADRs, with 1 ADS = 8 ordinary shares, and there are two classes of ordinary shares, Class A and Class B (Class B carries 10 votes per share, held by Robin Li). Market cap must be calculated using total share capital of about 2.64 billion shares, not just the free float.

## Two deviations above 1%: market cap and PE

Market cap gap of 2.1% (HKD 168.0 billion vs HKD 164.3 billion). Not a calculation error — two causes overlap: first, the pricing timestamp; stockanalysis uses the close on a day in late November, while this report locks in the November 23 close of HKD 63.55; second, the share count basis, as third-party databases sometimes use ADS-converted equivalent share counts, where rounding creates a 10–20 million share difference. At 63.55 × 26.4 = HKD 167.77 billion, this report rounds to HKD 168.0 billion. This difference has no bearing on the conclusion — whether HKD 164.3 billion or HKD 168.0 billion, both are roughly 60% of the RMB 276.6 billion in cash and investments.

PE gap of 2.0% (19.7x vs 19.31x). The numerator is market cap, which differs by 2.1%; the denominator is TTM net profit, and both use the same financial statements — the difference lies in whether the RMB 16.19 billion long-lived asset impairment is added back. 19.7x corresponds to TTM net profit of about HKD 8.53 billion (roughly RMB 7.77 billion), and 19.31x corresponds to about HKD 8.51 billion. The 19.7x PE figure is meaningless in itself — last year's one-off impairment crushed TTM profit, mechanically inflating the PE, so the report consistently labels it "reported basis, distorted by impairment" and does not use it as a valuation basis; valuation uses SOTP.

## Final adopted basis (unified across all subsequent modules)

- Revenue and segments: 2026Q3 reported figures, RMB; total revenue RMB 30.807 billion, online marketing RMB 11.9 billion, AI business RMB 13.2 billion (cloud 8.2 + applications 2.6 + AI-native marketing 2.4).

- Profit: net profit attributable to shareholders RMB 1.395 billion, non-GAAP net profit RMB 2.395 billion, operating profit RMB 630 million, adjusted operating profit RMB 1.7 billion, all as disclosed by the company.

- Cash: cash and investments RMB 276.6 billion, on the company's basis (including cash, short-term investments and long-term investments), not excluding the iQIYI portion.

- Market cap: HKD 168 billion = HKD 63.55 × 2.64 billion shares, rough calculation; about RMB 153 billion.

- Valuation: SOTP; net cash and investments haircut to RMB 160 billion; core business at 2027 net profit of RMB 9–11 billion × 10–20x.

- Not used: PE 19.7x (distorted), PS (cloud and advertising mixed together, meaningless), EV/EBITDA (net cash too large, EV negative).

## Three items have only a single source and are not used as hard facts

Three data points have a single source only and were not cross-checked; they are listed here for reference. First, cash and investments of RMB 276.6 billion: only the company's consolidated figures are available; third-party databases typically split this into cash, short-term investments and long-term investments, and whether iQIYI is included in the consolidation scope has not been verified line by line. Second, Apollo Go's 30 cities and cumulative 390 million km: company communication figures, not third-party audited; the quarterly mileage of 34 million km comes from the same source. Third, the first dividend "expected to be announced before year-end": cited by Hong Kong Economic Times; the company has not made a formal announcement.

All three are labeled in the body as "company figures/media citation" and are not treated as hard facts. They affect the imagination of the optimistic scenario, not the conclusion of 0.52x PB — that number uses only market cap and net assets, both of which are hard.

## Sources

- Baidu Q3 2026 earnings report (released November 16, 2026)
- The Paper, "Robin Li: AI Cloud Investment Payback Period Is Shortening" (2026/11/15, segment revenue and profit breakdown)
- People's Daily Online, "Baidu: Q3 Total Revenue RMB 30.8 Billion; AI Business Accounts for Over Half of Revenue for Three Consecutive Quarters" (2026/11/16)
- HK Economic Times: "Baidu's Adjusted Profit Falls 36% Last Quarter; First Dividend Expected to Be Announced by Year-End" (2026/11/15)
- JPMorgan research note (2026/11/18, target price cut to HKD 130; AI cloud passes return test, advertising does not)
- stockanalysis.com/quote/hkg/9888/statistics/ (market cap HKD 164.3 billion, PE 19.31, PB 0.52, late November data)
- Share price vs 52-week range: batchdata B9.json (23 November 2026 close HKD 63.55)
