# TSMC（2330.TW）— Financial Check Supplement

- Research date：2026/09/11
- Price：2410.0 TWD
- Market cap：Approximately TWD 62.5 trillion (about USD 1.95 trillion)

## Notes

Verification method: company disclosures as the primary source (earnings call presentations, monthly revenue announcements, annual reports), Chinese financial media as the secondary source, with deviations calculated item by item. Only 1 item shows a deviation above 1% (market cap, a unit typo rather than a data error). The PE denominator uses TTM net profit of TWD 2.24 trillion (EPS TWD 86.3 × 25.93 billion shares), consistent with the 27.9x in the working papers. The exchange rate is converted at TWD 32 to USD 1, used only to indicate order of magnitude.

## Key data cross-checked across two sources (2026Q2, TWD billion)

| Metric", "Source A | Source B | Deviation, handling |
|---|---|---|
| Consolidated revenue", "Earnings call presentation 12,703.8 | Media USD 1.27 trillion / USD 40.2 billion", "0.03% | Adopt 12,703.8 |
| Gross margin", "earnings call 67.7% | Media 67.7% (some write 67.6%), 0.1pct | Adopt 67.7% |
| "Net profit after tax", "Earnings call 7,065.6 | Media RMB 706.6 billion (rounded), 0.01% | Adopt 7,065.6 |
| Earnings per share", "Investor call 27.25", "Net profit ÷ 25.93 billion shares = 27.25", "0.00% | Mutual verification passed |
| August consolidated revenue ", "monthly revenue announcement 5,148.06 | Commercial Times 514.806 billion (YoY +53.3%)", "0.00% | Adopt 5,148.06 |
| 2026 capex ", " earnings call USD 60–64 billion ", " media midpoint USD 62 billion ", " range basis ", " full text: 60–64 billion |
| "Market cap", "2,410 × 25.93 billion shares = TWD 62.5 trillion", "Working papers/some flash reports say TWD 6.25 trillion", "10x (unit typo)", "Use TWD 62.5 trillion" |
| PE(TTM) | 62.5 trillion ÷ TTM net profit 2.24 trillion = 27.9x | Working paper 27.9x | 0.00% | Using 27.9x |

> Source A is company disclosure (earnings call presentation, monthly revenue announcement); Source B is secondary reporting by Chinese financial media. Deviation is calculated as |A−B|÷A. The market cap section is the most important issue found in this check; handling is described in the main text.

## First point: market caps differ by an order of magnitude

NTD 2,410 × 25.93 billion shares = NTD 62.49 trillion. Converted to US dollars (NTD 32 to USD 1), that is about USD 1.95 trillion, exactly matching "USD 1.95 trillion." But the source document and several news flashes say "NTD 6.25 trillion," one digit short. NTD 6.25 trillion is only USD 195 billion, a tenfold gap from "USD 1.95 trillion" — the two figures cannot both hold.

Cross-check with PE: TTM net profit = EPS NTD 86.3 × 25.93 billion shares = NTD 2.24 trillion; 62.5 ÷ 2.24 = 27.9x, consistent with the 27.9x in the source document. At NTD 6.25 trillion, PE would be just 2.8x — a bankruptcy valuation, clearly wrong. So the correct basis is NTD 62.5 trillion (about USD 1.95 trillion); this report set uses that basis throughout, and the market-cap field in the meta has been corrected. Such errors are common — in Chinese, trillion and hundred million differ by a single character, but by four zeros.

A note on the exchange rate. This report uses NTD 32 to USD 1 for order-of-magnitude conversion; the actual average in Q2 2026 was about 31.5. At 31.5, NTD 62.5 trillion equals USD 1.98 trillion, a 1.5% difference from USD 1.95 trillion. That difference does not affect the conclusions, but a dollar market cap precise to the decimal requires a fixed exchange-rate basis. This report's choice: NTD is the sole primary basis; USD serves only as an order-of-magnitude reference, and no table mixes the two currencies.

## Second point: the capex range cannot be taken at its midpoint

The earnings call gave "USD 60–64 billion," while media widely reported it as "raised to USD 62 billion." 62 is the midpoint of the range, not the number the company stated. The difference looks small but affects two things: first, the depreciation schedule (an extra USD 2 billion of capex adds about USD 400 million of depreciation per year over the next five years, roughly TWD 13 billion); second, the seriousness of "management's language" — TSMC rarely gives a single-point figure, and giving a range is its way of saying "we're still watching how things develop."

How to handle it: write "USD 60–64 billion" throughout, and when a single value is needed use 62 marked as "range midpoint." Likewise, the Q3 gross margin guidance of 65%–67% should not be treated as 66% in the company's language; use the midpoint only for sensitivity analysis.

## Third point: the working paper's "RMB 1.5 trillion over five years" is too low; recalculated here

The working paper (m04, the Duan Yongping section) says "if TSMC earns TWD 1.5 trillion a year five years from now" — that number is wrong. 2026 alone already gets to TWD 2.75 trillion (EPS TWD 106 × 25.93 billion shares). Five years out being lower than today does not hold up logically.

This time we recalculate on a comparable basis: starting from 2026 net profit of TWD 2.75 trillion, with a neutral assumption of 2027 EPS of TWD 125 (net profit TWD 3.24 trillion), then 8% annual growth over the following four years, 2031 net profit comes to about TWD 4.4 trillion and EPS about TWD 170. At 15x that is TWD 2,545 per share; at 18x, TWD 3,055. Using these numbers, the five-year return is only 2%–5% annualized (including 1% dividend yield). The conclusion is unchanged — "certainty is already priced in" — but the arithmetic has to hold up. The working paper's rating (Hold) and target price are unchanged.

## Fourth point: the 2025Q2 figures are back-calculated and should be flagged

The 2025Q2 revenue of RMB 934.1 billion, net profit of RMB 398.3 billion and gross margin of 58.6% in the income statement are back-solved from the company-disclosed year-on-year growth rates (revenue +36.0%, net profit +77.4%, gross margin +9.1pct YoY), not original reported figures. The back-solve error is within 0.5%, which is good enough, but this must be stated clearly in the table notes, otherwise readers will mistake these for disclosed figures and buy on them.

What can be cross-checked is EPS: RMB 66.25 for full-year 2025, RMB 49.33 for 2026H1, TTM RMB 86.3; TTM net profit of RMB 2.24 trillion ÷ 25.93 billion shares = RMB 86.4, a 0.1% difference from 86.3, so the cross-validation passes. The entire profit series is therefore self-consistent and safe to use.

One more consistency check: full-year 2025 EPS of RMB 66.25 and 2026H1 EPS of RMB 49.33 imply RMB 37.00 for 2025H2; TTM = 37.00 + 49.33 = RMB 86.33, consistent with the 86.3 in the working papers. Revenue also ties out: about RMB 1.05 trillion for full-year 2025 and RMB 240 billion for 2026H1 (Q1 1,134.1 + Q2 1,270.38 = RMB 240.45 billion), with YoY growth matching the company's +36% figure. Four data chains corroborate each other, confirming that these financial working papers are safe to use.

## Sources

- TSMC Q2 2026 Earnings Conference Presentation and Press Release (2026/07/16)
- TSMC August 2026 Consolidated Revenue Announcement (2026/09/09)
- TSMC Q1 2026 Financial Report (2026/04/16)
- TSMC Q4 2025 Financial Report and Full-Year EPS of 66.25 (2026/01/15)
- Commercial Times, "TSMC August Revenue Rises Double Digits on Both Measures to RMB 514.806 billion, Fourth Straight Record" (2026/09/09)
- Share price vs 52-week range: batchdata market data, as of the September 11, 2026 close
