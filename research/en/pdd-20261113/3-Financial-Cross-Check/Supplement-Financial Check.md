# Pinduoduo（PDD）— Financial Check Supplement

- Research date：2026/11/13
- Price：78.97 USD
- Market cap：About USD 112.4 billion

## Notes

Deviation calculation: net profit (285−271.8)/271.8=4.86%; cash (4,564−4,169)/4,169=9.48%; market cap (1,150−1,124)/1,124=2.31%; EPS (9.25−9.63)/9.63=−4.11%. Gross margin recomputed as 643.4/1,123.6=57.26%. TTM GAAP net profit RMB 93.49 billion=994 (FY2025)−455.9 (2025H1)+396.8 (2026H1); divided by 1.423 billion ADS gives RMB 65.7/ADS, converted at 7.1 to USD 9.25. The RMB 416.9 billion figure comes from the net cash basis in a July 2026 broker report and was not reconciled line by line against the original statements. Share count: 1.423 billion ADS (East Money stock page, read November 2026); stockanalysis shows 1.42 billion shares, a difference within 0.2%.

## Dual-source reconciliation of key data (any deviation >1% must be explained)

| Metric | Source A | Source B | Deviation | Processing |
|---|---|---|---|---|
| 2026Q2 total revenue | RMB 112.36 billion (company financial report) | RMB 112.36 billion (Economic Observer, August 25) | 0.0% | Use it directly |
| 2026Q2 net profit attributable to parent | RMB 27.18 billion (GAAP, company filings) | Approximately RMB 28.5 billion (some broker summaries) | −4.9% | Basis confusion: 285 is Non-GAAP (284.9); both figures are listed |
| 2026Q2 gross margin | 57.3% (company disclosure) | 57.26% (recalculated as 643.4 ÷ 1,123.6) | 0.1% | Adoption rate 57.3%, recalculated value confirms |
| Cash and short-term investments | RMB 456.4 billion (2026/6/30) | RMB 416.9 billion (a brokerage's July 2026 research report) | +9.5% | Timing and scope differences: the latter is a reading around end-2025, using 4,564 with the timing noted |
| Market cap | USD 112.4 billion (78.97 × 1.423 billion ADS) | About USD 115 billion (some quote pages) | −2.3% | ADS count and FX basis differ; USD 112.4 billion is used |
| TTM earnings per share | USD 9.25 (back-calculated from reported net profit) | USD 9.63 (backed out from 8.2x PE) | −4.1% | Using the reported figure of USD 9.25, write PE as "about 8.2x" rather than a precise value |
| Temu's Europe GMV share | About 33% (estimated by an international investment bank) | Above 40% (third-party and seller surveys) | Approximately 20% | Without giving an exact figure, the text says "around 40%" |
| 2027 net profit assumption | RMB 90 billion (my neutral scenario) | RMB 99.5 billion (Soochow Securities, August 29, 2026) | Different years | Present by year; do not mix |

> Source A is always company filings or values derived directly from filings; Source B is broker research, financial media or quote pages. Deviation = (B−A)/A.

## Why do this

Half of Pinduoduo's numbers have been reprocessed by the media: GAAP and non-GAAP are mixed, point-in-time figures and period-end figures are mixed, and ADS counts and ordinary share counts are mixed. Stack these three conflations together and the same company can be assigned two P/E ratios, 8x and 12x. **Pin down the accounting basis first, then argue about whether it is cheap.**

## Four items deviate by more than 1%; explain each one

**Net profit differs by 4.9%:** RMB 27.18 billion is GAAP net profit attributable to shareholders; RMB 28.49 billion is Non-GAAP (excluding equity incentives). Broker summaries often state "net profit of RMB 28.5 billion" outright, leading readers to assume GAAP. Throughout this report, all year-on-year figures use GAAP, all "earning power" figures use Non-GAAP, and both are labeled.

**Cash differs by 9.5%:** RMB 456.4 billion is cash and short-term investments at end-June 2026; RMB 416.9 billion is the reading near end-2025 (another research note's basis also excludes long-term deposits). Cash rose RMB 34.1 billion in one quarter — that growth rate matters more than the absolute number.

**EPS differs by 4.1%:** Backing out EPS from a 8.2x PE gives USD 9.63; dividing reported net profit by ADS gives USD 9.25. The gap comes from different TTM window conventions (whether 2025Q2 is included). This report uses USD 9.25 and states PE only as "about 8.2x".

**Temu Europe share differs by 20 percentage points:** Investment banks estimate 33%; third-party research says above 40%. This number determines the damage from EU tariffs, but no one can obtain the true figure. **The approach is to give no precise value**: the main text says "around four tenths", and the sensitivity analysis uses 33% and 45% as the two endpoints.

## The finally adopted basis

Revenue, profit, expenses: company's 2026Q2 results, with GAAP and Non-GAAP presented separately. Cash: RMB 456.4 billion as of 6/30/2026. Market cap: USD 78.97 × 1.423 billion ADSs = USD 112.4 billion, equivalent to RMB 798.0 billion at 7.1. The exchange rate is listed separately and not included in profit calculations. The three-scenario valuation is calculated in RMB and converted to USD at 7.1 to avoid double conversion from the USD basis.

## Reverse check: are the historical figures back-solved from growth rates reliable?

Some historical data in this report is back-solved from year-on-year growth rates (2025Q2 revenue of RMB 104.04 billion, advertising of RMB 55.6 billion, transaction services of RMB 48.4 billion). Whether back-solving is usable can be tested against a known answer: full-year 2025 revenue of RMB 431.8 billion, +10% year on year, back-solves to RMB 392.5 billion for 2024; the company's 2024 annual report discloses RMB 393.8 billion, a 0.33% difference.

**The 0.33% error shows back-solving is usable, but also that rounding eats the decimals.** Wherever figures are back-solved, this report flags them in the table notes and does not treat them as disclosed values. Any figure entering the valuation model uses disclosed values or research consensus.

## The part that has not been verified

Pinduoduo does not disclose segment data for Temu; GMV, unit economics and fulfillment costs all rely on external estimates, with errors that may reach 30%. Duoduo Maicai is likewise not disclosed separately. **These two businesses receive only a qualitative weighting in valuation and do not enter the model.** This is an honest note: the only things you can know with precision are the main site and the consolidated statements. On the Temu piece, the market is guessing just as you are.

## There are three numbers I chose not to write.

Temu's GMV, Temu's segment gross profit, and Duoduo Maicai's loss. The company discloses none of these three figures; every version in circulation is an outside estimate, with errors of up to 30%. **Putting a falsely precise number in a report is more dangerous than writing "unknown"**—because downstream analysis will cite it as fact.

## Sources

- Pinduoduo Q2 2026 earnings report (released before US market open on 2026/8/24)
- Economic Observer: "Pinduoduo Q2 2026 Revenue RMB 112.36 billion, Up 8% YoY" (August 25, 2026)
- Gelonghui China Concept Research Institute, "PDD Holdings 2Q26 Update Report" (2026/8/25)
- Shenwan Hongyuan, "PDD 26Q2 profit above expectations" (2026/8/25); Soochow Securities, "Earnings forecast cut to RMB 99.50 billion" (2026/8/29)
- AMZ123 "US Customs announces: all de minimis parcels under USD 2,500 tightened" (October 8, 2026; CBP proposed rule, comment period through December 7, 2026)
- Yahoo Finance, "Europe Wants €6 Billion From Cheap Parcels" (November 7, 2026; notes the share price at the time of USD 83, 7.2x forward P/E, and Q3 results expected in late November)
- East Money Pinduoduo stock page: 1.423 billion ADSs (reading as of 2026/11/24)
- Share price vs 52-week range: batchdata daily data (as of the November 13, 2026 close)
