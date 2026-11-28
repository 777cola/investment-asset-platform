# NVIDIA（NVDA）— Research Report Supplement

- Research date：2026/08/31
- Price：220.78 USD
- Market cap：Approximately USD 5.33 trillion (24.15 billion shares)

## Notes

This report has 12 chapters. Financial data sources: NVIDIA FY2027Q2 earnings release and 10-Q (2026/08/26), FY2027Q2 earnings call (2026/08/26). Earnings forecasts and valuation are derived in this report, with methodology explained in the table notes. FY2026A is a rough estimate back-calculated from publicly reported year-over-year growth rates. Market cap = 220.78 × 2.419 billion shares = USD 5.33 trillion. Target price corresponds to 12 months. Not investment advice.

## Earnings forecast (fiscal year ending end-January, USD billion)

| Project | FY2026A | FY2027E | FY2028E (neutral) | FY2028E (bear case) |
|---|---|---|---|---|
| Operating revenue | Approximately 203 (estimated) | 400.8 | 641.3 | 521.1 |
| Year-on-year growth rate | — | Approximately +97% | +60% | +30% |
| Gross margin | Approximately 73% | 74.3% | 72.5% | 71.5% |
| Operating margin | — | Approximately 64% | Approximately 62% | Approximately 58% |
| Net margin | — | Approximately 61% | 55% | 52% |
| Net profit | Approximately 102 (estimated) | Approximately 246 | 352.7 | 271.0 |
| EPS (USD) | — | Approximately 10.2 | 14.61 | 11.22 |
| Free cash flow | — | Around 140 | Around 280 | Approximately 190 |

> FY2027E revenue = Q1 81.615 + Q2 96.221 + Q3 guidance 108.0 + Q4 estimated 115.0. FY2028E assumes a neutral +60% and a bear case of +30%, in line with the company's "growth of about 70%" direction. Net margin of 55%/52% (investment income effects excluded). FY2026A is a rough estimate back-solved from publicly disclosed year-on-year growth rates, not as originally reported. Free cash flow is estimated by annualizing H1 FY2027's 69.9 billion plus H2 growth.

## Valuation (12-month target price)

| Scenario | FY2028 EPS | Target PE | Target price | Relative to the current price |
|---|---|---|---|---|
| Pessimistic | USD 11.22 | 15x | $168 | -24% |
| Neutral | USD 14.61 | 17x | $248 | +12% |
| Optimistic | USD 16.75 | 23x | $386 | +75% |
| Sensitivity: FY2027 revenue RMB 410.8 billion (Q4 = RMB 125.0 billion) | USD 15.0 | 17x | $255 | +16% |

> Share capital 2.415 billion shares, excluding roughly 1.5% annual share count reduction from buybacks (conservative; including it would raise the target price by about 1.5%). Annualized dividend USD 1.00 (0.45%). Current price USD 220.78 (close of August 31, 2026).

## I. Company Overview

NVIDIA (NVDA, NASDAQ) was founded in 1993 by Jensen Huang, Chris Malachowsky and Curtis Priem as a graphics processor company, launched CUDA in 2006 to pivot to general-purpose accelerated computing, and since 2023 has become the core supplier of AI compute infrastructure. At the August 31, 2026 close of USD 220.78, with 2.419 billion shares outstanding and a market cap of USD 5.33 trillion, it is one of the most valuable companies in the world.

Two business segments: Data Center (FY2027Q2 revenue USD 89.023 billion, 92.5% of total) and Edge Computing (USD 7.200 billion, 7.5%). Data Center splits further into hyperscale cloud (USD 48.710 billion) and ACIE (USD 40.313 billion, including NeoCloud, sovereign AI, enterprise and AI-native companies). Product lines include Rubin GPUs, Vera CPUs, NVLink, Spectrum-6 networking, BlueField-4, Groq LPUs, DGX/HGX systems and the CUDA software stack.

Employees and organization: headquartered in Santa Clara, California, operating a fabless model (TSMC foundry; SK hynix and Samsung supply HBM). The board has no chairman; Jensen Huang is the sole executive director.

Ownership and governance: the company has a single class of stock with no dual-class AB structure, and Jensen Huang's 3.58% stake carries proportional voting power; the board has no chairman, with independent directors taking turns presiding. This structure is rare in Silicon Valley; the benefit is extremely fast decision-making, the drawback is no checks and balances and no public succession plan.

The geographic mix of revenue merits attention: H200 shipments to China under US government licenses this quarter came to less than 1% of Data Center revenue, and Q3 guidance explicitly excludes China data center compute revenue. In other words, the USD 5.33 trillion market cap corresponds to a business centered on the US and its allies; China has gone from a variable to a constant.

## II. Industry analysis

AI compute is the largest capex cycle of 2024–2028. Scale: the five major cloud players will spend about USD 800 billion on capex in 2026 and an estimated USD 1.3 trillion in 2027; cloud industry backlog exceeds USD 2 trillion; NeoCloud installed capacity rises from 3GW at end-2025 to 8GW at end-2026.

Profit distribution along the chain is highly uneven: upstream memory (Micron FY26Q3 gross margin 84.9%) and foundry (TSMC 2026Q2 67.7%) take the meat, midstream Nvidia 75.0%, downstream assembly (Hon Hai 6.1%) takes the broth. The reason is that AI compute's physical bottlenecks concentrate in three places—advanced process and CoWoS, HBM, and power—and Nvidia simultaneously holds capacity allocation rights over the first two.

Cycle position: third year of shortage (Hopper 2024, Blackwell 2025, Vera Rubin 2026), with company guidance pointing to shortages lasting at least through end-FY2028. **Our view is "three years of buildout, two years of digestion"; 2027 is the peak, and growth falling below 20% in 2028 is normal.**

Changes in demand structure matter more than the total. Hyperscale cloud (RMB 48.71 billion, 55% of data centers) is the ballast; ACIE (RMB 40.31 billion, 45%) is the growth engine. ACIE includes sovereign AI (up more than 2x YoY), NeoCloud (installed capacity 3GW→8GW), and enterprise and AI-native companies. **Buyers have gone from 5 to thousands—evidence that demand is broadening, and the reason payment terms are lengthening.**

The industry's financing structure is the most fragile part of this cycle: NeoCloud expands on private credit and project finance, model companies use equity financing to pay compute bills, and Nvidia itself provides guarantees and a financing platform as backstop. All three parties add leverage, pulling demand from the next five years forward into 2026–2027. Railways, power, and telecom all did the same—the difference is that GPUs become obsolete in three years.

## III. Business model

Three-layer structure: selling systems (Vera Rubin = CPU + GPU + NVLink + Spectrum-6 + full rack), selling standards (CUDA), selling quotas (USD 279 billion locking in HBM and advanced packaging). Only the three layers stacked together produce a 75% gross margin—companies that sell chips alone (AMD at 56.0%) cannot achieve this.

Pricing mechanism: priced by "compute value per gigawatt." Hopper at USD 18 billion/GW, Grace Blackwell at USD 25 billion, Vera Rubin at USD 40 billion. **The money that can be earned from the same unit of electricity doubles—this is the economic basis for customers being willing to queue.**

The new layer in 2026: selling capital. Partnerships with Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR to mobilize USD 500 billion of third-party capital; guaranteed minimum payments in exchange for revenue sharing on some compute; credit guarantees for data center projects (capped at USD 108.5 billion). **Sell hardware once, collect rent for twenty years—this is an attempt to convert one-time revenue into perpetual revenue, and it is also a change in the risk profile.**

The customer's economics are worth running through. On the company's own figures, Vera Rubin corresponds to USD 40 billion of commercial value per gigawatt, and the customer payback period is "less than a year, even for a USD 50 billion-scale data center build." If that number holds, customers will be insensitive to price—which is also the confidence behind Nvidia's ability to execute a price increase in FY2028Q1.

But the other side of the business model is performance obligations. The USD 279 billion of supply and capacity commitments (remaining payables of USD 92 billion in FY2027, USD 87 billion in FY2028, USD 88 billion in FY2029) mean costs are locked in through 2029, while revenue is locked in for only one quarter (Q3 guidance of USD 108 billion). **A three-year cost curve and a one-quarter revenue curve—this is the biggest maturity mismatch in this business in 2026.**

## IV. Financial analysis

Income statement: FY2027Q2 revenue RMB 96.22 billion, gross margin 75.0%, operating margin 66.2%, net profit RMB 59.69 billion (including RMB 7.77 billion of investment income; net margin 55.3% excluding it). H1 revenue RMB 177.84 billion, net profit RMB 118.01 billion.

Cash flow statement: operating cash flow RMB 24.08 billion (40.3% of net profit, versus 58.1% a year earlier), capex RMB 2.68 billion, free cash flow RMB 21.34 billion (35.8%). The gap comes from receivables +RMB 22.35 billion (payment terms 45 to 60 days), inventory +RMB 5.78 billion, prepayments +RMB 5.50 billion, and RMB 7.77 billion of investment income that does not enter cash.

Balance sheet: total assets RMB 320.27 billion, total liabilities RMB 91.29 billion, debt-to-asset ratio 28.5%, net cash RMB 23.22 billion. But equity investments carry a book value of RMB 93.94 billion (29.3% of total assets, versus 16.3% at the start of the year), RMB 24.90 billion of new bonds were issued this quarter, RMB 19.73 billion was spent on buybacks and RMB 6.05 billion on dividends (returned capital exceeded free cash flow for the quarter).

**Conclusion: the income statement is excellent, the cash flow statement is honest, and the balance sheet is deforming. A chip company is growing into a "chip + infrastructure investment" company.**

Read the three statements together and a counterintuitive conclusion emerges: **the income statement is more optimistic than the cash flow statement, and the cash flow statement is more optimistic than the balance sheet.**

Income statement: net margin 62.0%, or 55.3% excluding RMB 7.77 billion of investment income, still top-tier. Cash flow statement: operating cash flow is only 40.3% of net profit and free cash flow 35.8%, versus 50.9% a year ago. Balance sheet: debt-to-asset ratio 28.5% and net cash RMB 23.22 billion look the most stable, but 29.3% of assets are customer equity, long-term borrowings rose RMB 24.9 billion in six months, and RMB 108.5 billion of guarantees sit off balance sheet.

The three statements point in different directions, showing the company is in a structural transition: from "selling hardware for cash" to "selling systems + funding + collecting rent." **The easiest mistake during a transition is to judge a new structure (cash flow + credit exposure) with an old framework (PE + gross margin).**

## V. Management

Jensen Huang (63) holds 870.6 million shares, a 3.58% stake (2026/03/23), with FY2026 compensation of USD 36.34 million (down 27% YoY), a single share class and no AB structure. CFO Colette Kress joined in 2013 and oversees guidance and off-balance-sheet disclosure.

Capital allocation record: the USD 6.9 billion Mellanox acquisition in 2019 (grade A), the decisive abandonment of the USD 40 billion ARM deal in 2020–2022 (grade A), quarterly buybacks of USD 19.7 billion with USD 99 billion remaining authorization (grade A); new moves in 2026 — USD 42.4 billion of equity purchases in H1, USD 24.9 billion of debt issuance, USD 108.5 billion of guarantees (strategy A, disclosure C).

**Three governance gaps: no chairman, no public succession plan, family members in key roles.** This is the single largest risk for a USD 5.33 trillion market cap, and one reason we cap the position at 8%.

The incentive structure deserves a separate note. Jensen Huang's 870.6 million shares are the result of three decades of holding, not option exercises, and the company has no dual-class structure — cleaner than most founder-controlled tech companies on this point. His wealth is highly concentrated in this one stock, aligned with shareholders.

But the other side of the coin: someone with 97% of net worth riding on the company will have a different risk appetite from diversified shareholders when making decisions such as guaranteeing USD 108.5 billion for customers. **This is not a moral judgment but an incentive-structure judgment — it explains why the company dares to add leverage at a cyclical peak, and why its disclosure is on the conservative side.**

## VI. Growth drivers

Four drivers, ranked by certainty.

**1) Vera Rubin ramp (highest certainty).** In full mass production, contributing 20% of data center revenue in Q3; versus Grace Blackwell Ultra, throughput per megawatt is 30x higher and cost per token 35x lower; the company says it will be the fastest-ramping product in its history.

**2) ACIE expansion (high certainty).** Up 138% year over year, 45% of data center; sovereign AI more than 2x year over year, NeoCloud installed base 3GW to 8GW; the company expects non-hyperscale customers to approach half of data center revenue.

**3) CPU and networking (medium certainty).** Vera CPU in full mass production, Grace revenue above USD 5 billion over the past 12 months, the company expects FY2028 CPU revenue to more than double (implying a TAM of about USD 20 billion); Spectrum-X Ethernet up 260% year over year.

**4) The rent-collection model (low certainty).** A USD 500 billion financing platform, minimum payments in exchange for revenue share; the company says this could add several billion dollars a year over the medium to long term. **This one is an option and does not enter the base case.**

Quantifying the four drivers into FY2028: Vera Rubin contributes more than 40% of data center revenue (extrapolating from 20% in Q3); ACIE rises to about 50%; CPU revenue doubles to more than USD 10 billion; networking (Spectrum-X up 260% year over year) continues to outgrow the company overall.

Of the four drivers, only the first has already happened; the other three are things the company says will happen. That is why the FY2028 70% guidance needs two consecutive quarters of validation—**it is not a number, it is the product of four assumptions.**

## VII. Competitive landscape

Three layers. Layer one, AMD: 2026Q2 data center USD 6.718 billion, +107% YoY, at 1/13 the scale of Nvidia; its role is to pressure pricing, not to replace. Layer two, custom ASIC: Broadcom XPU, Google TPU (seventh generation), Amazon Trainium, OpenAI Jalapeño; the logic is a fraction of the unit cost of inference, and this is the most structural threat. Layer three, regional substitution: Huawei Ascend in China, an impact already fully priced out (China data center compute revenue at zero).

Nvidia's response: absorb Groq (an asset deal of roughly USD 20 billion; Groq 3 LPX already in mass production, with the company claiming token output per second close to 4x competitors), deepen rack-scale systems, and extend CUDA into edge and robotics.

**Share view: no one can replace Nvidia in the training market within three years; the inference market will be carved up in layers by ASICs. The watershed is the day inference exceeds half of the data center market.**

A set of numbers shows how the competition actually stands: Nvidia data center revenue of USD 89.023 billion in a single quarter versus AMD's 6.718 billion, a ratio of 13.3x; AMD +107% YoY, Nvidia +117%, growth rates almost identical. **This shows AMD is capturing incremental market growth, not Nvidia's installed base.**

The real share risk comes from inside customers: Google TPU seventh generation, Amazon Trainium and OpenAI Jalapeño are all inference chips customized for in-house models and never enter the open market, so they do not show up in "share statistics" but will show up in Nvidia's inference revenue growth. **This is the competitive line most easily masked by financial reports.**

## VIII. Risk factors

①**Off-balance-sheet credit risk**: guarantee cap USD 108.5 billion, counterparties and trigger conditions undisclosed; about 1/4 of next year's revenue needs support from the company's own balance sheet. ②**Supply commitment risk**: USD 279 billion in commitments (USD 92 billion remaining for FY2027), which turn into inventory write-downs if demand weakens. ③**Gross margin risk**: Q4 guidance 71%–72%, memory price increases passing through; if FY2028 cannot return to 72%–73%, EPS cuts 4%–6%. ④**Customer concentration**: top three account for 44%, top five account for 70% of receivables. ⑤**Cash conversion**: 40.3%, receivables period 60 days. ⑥**Governance**: no succession plan. ⑦**Policy**: export controls, antitrust (RMB 500 billion platform + RMB 93.9 billion equity + RMB 108.5 billion guarantees). ⑧**Valuation**: the denominator of 15x FY2028 is company guidance.

Of the eight risks, the first three are current-period risks and the last five are structural risks. Current-period risks (off-balance-sheet credit, supply commitments, gross margin) will be answered in the next two quarters' earnings reports; structural risks (customer concentration, cash conversion, governance, policy, valuation) need two to three years to verify.

A probability-weighted magnitude: the bear case (FY2028 growth of only 30%, 15x) corresponds to USD 168, down 24%; the tail case (all three happen at once) corresponds to USD 138, down 37%. **Combined probability of roughly 40% — that is the quantified meaning of "don't chase the rally."**

## IX. Earnings forecast

FY2027: revenue USD 400.8 billion (Q1 81.615 + Q2 96.221 + Q3 guidance 108 + Q4 estimated 115), net income about USD 246.1 billion, EPS about USD 10.2. If Q4 reaches 125, revenue is USD 410.8 billion and EPS about USD 10.6.

FY2028: following the company's "about 70% growth" direction, we take a neutral 60% (revenue USD 641.3 billion, net margin 55%, EPS USD 14.61), bear case 30% (USD 521.1 billion, 52%, USD 11.22) and bull case 77% (USD 709.5 billion, 57%, USD 16.75).

Three key assumptions: (1) Vera Rubin ramps on schedule and contributes more than 40% of data center revenue in FY2028; (2) gross margin returns to 72%–73% in FY2028; (3) ACIE share keeps rising to about 50%. **If any one of the three fails, EPS is cut by 8%–15%.**

Three premises behind the forecast need to be stated. First, Q4 revenue is estimated at 115 on +6.5% QoQ (conservative); at the historical seasonal +12% it would be 121, lifting FY2027 revenue by 6. Second, FY2028 net margin is taken at 55% (neutral), already excluding investment gains, because investment gains swing with the market and are unpredictable. Third, share count is held at 2.415 billion shares, excluding the roughly 1.5% per year reduction from buybacks. **All three assumptions are conservative, deliberately so: better a slightly lower target price than a valuation propped up by optimistic assumptions.**

## X. Valuation

Two approaches. On net income: USD 220.78 corresponds to 28x TTM and 15.1x FY2028. On cash flow: FY2027 free cash flow of about USD 140 billion corresponds to 38x, and FY2028, if it doubles to USD 280 billion, corresponds to 19x.

We use cash flow as the primary approach (because net income includes RMB 7.771 billion of investment gains and cash conversion is only 36%), with the net income approach as secondary. This yields a neutral target price of USD 248 (17x FY2028 EPS of 14.61) — 17x corresponds to about 21x FY2028 free cash flow, a reasonable premium to TSMC (about 26x PE).

Sensitivity: if FY2027 revenue reaches RMB 410.8 billion, FY2028 EPS is USD 15.0 and the target price is USD 255; if gross margin reaches only 71%, EPS is cut 5% and the target price falls to USD 236.

Why 17x rather than 20x or 15x? Three references. TSMC trades at about 26x PE in 2026 with 36% growth, a PEG of 0.7; NVIDIA's FY2028 growth is 60% (neutral case), which at 17x implies a PEG of 0.28 and at 20x a PEG of 0.33. **The reason for 17x is not PEG but cash conversion of only 36% — on a free cash flow basis, 17x net income corresponds to about 21x FCF, and that is its true valuation level.**

Conversely, if cash conversion returns to 60%, the same 17x net income corresponds to 12x FCF, and USD 248 would then be a cheap price. This is also why we treat the "cash conversion rate" as a core tracking metric.

## XI. Investment recommendation

**Rating: Hold (do not chase). 12-month target price USD 248, bear case USD 168, bull case USD 386.**

Rationale: Business quality scores 9 (gross margin 75%, expense ratio 8.7%, moat 8.9), but the price already discounts the unverified guidance of "70% growth in FY2028," while USD 108.5 billion of off-balance-sheet guarantees cannot be assessed. **Upside 12%, downside 24%, odds 1 : 0.5.**

Action: existing positions hold, position size 5% (cap 8%); new money waits for one of two signals — share price below USD 180 (12.3x FY2028), or consecutive validation of the 70% slope in FY2027Q3 (November 17) and Q4 with receivables days held at 65.

Not suitable for: investors unable to withstand a 40% drawdown. **The reasonable volatility band for this stock is ±40%, not ±10%.**

Actions for three types of investors. Long-term holders (five years or more): 5% at the current price, 8% below USD 180, trim to 5% above USD 386. Swing traders: stay out — three-month displacement of -0.9% and 20% amplitude will stop out trend strategies repeatedly. Conservative investors: do not participate; reasonable volatility band is ±40%.

The nearest checkpoint is the FY2027Q3 report on 2026/11/17. Watch three numbers: whether revenue exceeds RMB 108 billion, whether gross margin lands at 74%, and whether receivables days hold at 65. **If all three hold simultaneously, the rating moves up from Hold to the first tier of Buy; if receivables days breach 70, it moves down to Reduce.**

## XII. Appendix: Definitions and Data Sources

Financial data: "NVIDIA Releases Fiscal 2027 Second Quarter Financial Results" (2026/08/26, company press release and 10-Q), including income statement, balance sheet, cash flow statement, Q3 guidance, buybacks and dividends. Earnings call: 2026/08/26, led by CFO Colette Kress (FY2028 growth of about 70%, gross margin trajectory, off-balance-sheet items, one-quarter of revenue requires balance sheet support).

Off-balance-sheet data: supply and capacity commitments of USD 279 billion, credit guarantee ceiling of USD 108.5 billion, cloud service purchase commitments of USD 36 billion, all taken from the 10-Q notes; the "six items totaling about USD 530.5 billion" is a calculation by The Australian Financial Review based on the notes, not a company figure.

Market data: close of USD 220.78 on 2026/08/31 (+1.48%), 52-week range USD 165.17–235.74, -6.35% from the high; total shares 2.419 billion (basic weighted average). Peer data: TSMC 2026Q2, AMD 2026Q2, Micron FY26Q3, Broadcom FY26Q2, Zhongji Innolight 2026H1, Hon Hai 2026Q2, Cambricon 2026H1, all publicly disclosed before the report date.**This report uses no information after 2026/08/31.**

Three definitions require special note. First, market cap uses basic weighted average shares of 2.419 billion (10-Q); using diluted shares of 2.4285 billion gives USD 5.35 trillion, a 0.4% difference. Second, PE(TTM) of 27.9x is derived: TTM net income of about USD 191 billion (H1 FY2027 USD 118.010 billion + FY2026 second half about USD 73 billion). Third, FY2027 revenue of USD 400.8 billion includes an estimated Q4 value of USD 115 billion; the company gave no Q4 guidance, so this is an analyst estimate, not a disclosed figure.

All data in this report are as of 2026/08/31. No financial reports, events or share prices after that date are used; "FY2028" in the text refers to February 2027 to January 2028, which differs from the calendar year, so please note this when citing.

## Sources

- NVIDIA FY2027 Q2 earnings release and business update (published after the US market close on 2026/08/26)
- Jiemian News, "NVIDIA FY2027 Q2: The AI Capex Cycle Has Not Peaked, but It Has Become More Expensive" (2026/08/27)
- AAStocks earnings snapshot: Q2 revenue USD 96.2 billion, adjusted EPS USD 2.22, gross margin 75% (2026/08/26)
- NVIDIA FY2027 Q1 results (2026/05/20): revenue USD 81.62 billion, data center USD 75.2 billion
- Share price vs 52-week range: daily data, as of the August 31, 2026 close (52-week high USD 235.74, low USD 165.17)
- Total shares 24.15 billion and market cap: financecharts.com and market data terminals (late August 2026)
