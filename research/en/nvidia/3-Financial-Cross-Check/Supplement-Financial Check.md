# NVIDIA（NVDA）— Financial Check Supplement

- Research date：2026/08/31
- Price：220.78 USD
- Market cap：Approximately USD 5.33 trillion (24.15 billion shares)

## Notes

Reconciliation method: Source A draws on the company's original disclosures (press release + 10-Q); Source B on quick-reads from three Chinese media outlets and a market data terminal. Deviations above 1% require an explanation, above 5% a change of basis. None exceeded 5% this round. TTM net income of USD 191 billion is derived (1H FY2027 USD 118.010 billion + 2H FY2026 approx. USD 73 billion), implying a P/E of 27.9x; the 28x in the working papers is consistent. On a diluted share count of 2.4285 billion, market cap is USD 5.353 trillion, a deviation of 0.4% and within threshold.

## Dual-source comparison (FY2027Q2, USD million)

| Indicator | Source A (financial report / 10-Q) | Source B (media / terminal) | Deviation | Processing |
|---|---|---|---|---|
| Quarterly revenue | 96,221 | USD 96.2 billion (Cailian Press, NetEase quick read) | 0.02% | Adopt 96,221 |
| Data center revenue | 89,023 | USD 89 billion (same as above) | 0.03% | Adopt 89,023 |
| GAAP gross margin | 75.0% | 75% (AAStocks snapshot) | 0 | Adopt 75.0% |
| Non-GAAP EPS | USD 2.22 | USD 2.22 (same as above) | 0 | Adopt 2.22 |
| GAAP net profit | 59,688 | USD 59.7 billion (same as above) | 0.02% | Adopt 59,688 |
| Market cap (8/31) | 5.332 trillion (220.78 × 2.419 billion shares) | 5.3 trillion (terminal) | 0.06% | Use 5.33 trillion, noting basic share capital |
| PE(TTM) | 27.9x (based on TTM net profit of RMB 191.0 billion) | 28x (terminal) | 0.4% | Using approximately 28x |
| FY2027 full-year revenue | RMB 400.8 billion (Q1+Q2+Q3 guidance+Q4 estimated at 1,150) | RMB 410.8 billion (if Q4 = 1,250) | <b>2.5%</b> | Use 4,008 as the base case and run a separate sensitivity analysis |

> Source A is NVIDIA's FY2027Q2 earnings release and 10-Q (filed 2026/08/26); Source B comprises Cailian Press (2026/08/27), NetEase Finance (2026/08/26), an AAStocks snapshot (2026/08/26) and market data terminals. Deviation = |A−B| / A.

## Seven items with zero variance; workpapers are clean

This is the simplest reconciliation of the three: the company filed its quarterly report, the media copied the same press release, both trace to a single source, and the only discrepancy is rounding. The real work is checking the three error-prone spots item by item, which I have done:

- The 75.0% gross margin is both GAAP and non-GAAP. From FY2027Q1 the company's non-GAAP measure no longer excludes stock-based compensation, so the two gross margins are fully identical this time, and the prior-year gap of 75.0% versus 75.7% has disappeared. Many quick takes omitted this, making it easy to misread as "higher on an adjusted basis."

- Of the RMB 59.688 billion net profit, RMB 7.771 billion is investment gain. Other income, net was RMB 7.773 billion, of which equity securities gains were RMB 7.771 billion (H1 cumulative RMB 23.707 billion). Excluding this, net profit is RMB 53.20 billion and net margin 55.3%. The working paper uses the GAAP basis, which is fine, but this layer must be understood when comparing net margins.

- Data center RMB 89.023 billion = hyperscale 48.710 + ACIE 40.313, and the two items add up exactly to the total, indicating the segment breakdown does not mix in edge computing. Edge is listed separately at RMB 7.2 billion.

## The only 2.5% deviation: that Q4 hole

FY2027 full-year revenue is not knowable, since the company guides only through Q3. The model assumes USD 400.8 billion: Q1 81.615 + Q2 96.221 + Q3 guidance 108.0 + Q4 115.0 = 400.836 billion, with Q4 up 6.5% QoQ.

That +6.5% is conservative on three counts: Q4 is the quarter when gross margin bottoms (71%–72%) and the company typically clears out old architecture; Vera Rubin contributes only 20% of data center revenue in Q3, so Q4 should be the main ramp quarter; and historical median Q4 QoQ growth is above +10%.At Q4 of 125.0 billion (+15.7% QoQ), FY2027 comes to 410.8 billion, and FY2028 at +70% reaches 698.4 billion, 8.9% above the base model.

Treatment: the main text and valuation use 400.8 billion throughout, with a 410.8 billion sensitivity case in m17 Chapter 9 that moves the target price from USD 248 to USD 268.Projections are not presented as company-disclosed figures, and Q4 is not raised to flatter the numbers.

## Two easily misread points in the media roundup

Point one: When "revenue of RMB 96.2 billion, doubled YoY" and "up 18% QoQ" appear together, it is easy to read as acceleration. The opposite is true. Data center revenue over the last four quarters was USD 51.2 billion → 62.3 billion → 75.2 billion → 89.0 billion, with QoQ growth of 21.7%, 20.7% and 18.4%, converging downward throughout; YoY growth of +117% is still so high only because of the low base last year. The absolute amount is growing while the growth rate is slowing — the standard curve for a large platform entering its mature volume-ramp phase, not acceleration.

Point two: "Gross margin 75%" without a time dimension is misleading. The company also gave a path of 74% in Q3, 71%–72% in Q4 and a return to 72%–73% in FY2028. In other words, 75.0% is the peak of this cycle, not the norm. The draft's summary_rows correctly flags gross margin as yellow, but it only says "Q3 guidance 74%"; I added Q4's 71%–72% in m07 — the most easily overlooked line in the entire earnings report, because it determines the starting point for FY2028 EPS.

## I changed one methodology point: "five of six gates passed" for the six gates

The draft's gate_verdict states "five gates passed, one gate failed on margin of safety," yet the six-gate table on the same page reads, item by item: pass, pass, pass, questionable, fail, questionable. Three passes, two questionables, one fail, 42 points in total. "Five gates passed" contradicts the table itself, so I corrected it in m01 to state the position accurately, without changing a single number in the total score or rating.

A second discrepancy: the draft body says the company "provides credit guarantees of up to USD 105 billion for data center projects, plus USD 3.5 billion for some AI cloud customers, for a maximum total exposure of USD 108.5 billion" — the three figures reconcile (105 + 3.5 = 108.5). I carried this forward in m07 and flagged it in m09 as a reminder to readers: the USD 108.5 billion is a guarantee ceiling, not an incurred liability.

A third discrepancy merits separate mention: the "off-balance-sheet commitments of USD 530.5 billion" cited by the media is AFR's sum of six items in the 10-Q notes (supply commitments 279 + land, power and shell 56 + loan guarantees 108.5 + cloud service purchases 36 + data center leases about 20 + equity investments 20, etc.), which is not the same as the company's separately disclosed USD 279 billion. Whichever figure the report cites must be clearly identified as a single item or an aggregate; otherwise readers will conclude that supply commitments alone are USD 530.5 billion.

## Sources

- NVIDIA FY2027 Q2 results and business update (released after the US close on 2026/08/26)
- Jiemian News, "NVIDIA FY2027 Q2: The AI Capex Cycle Has Not Peaked, but It Has Become More Expensive" (2026/08/27)
- AAStocks earnings snapshot (2026/08/26): Q2 revenue USD 96.2 billion, adjusted EPS USD 2.22, gross margin 75%
- NVIDIA FY2027 Q1 results (2026/05/20): revenue USD 81.62 billion; data center USD 75.2 billion
- Share price vs 52-week range: daily data as of the August 31, 2026 close (52-week high USD 235.74, low USD 165.17)
- Total shares 24.15 billion; market cap per financecharts.com and market data terminals (late August 2026)
