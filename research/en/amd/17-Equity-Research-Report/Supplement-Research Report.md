# AMD（AMD）— Research Report Supplement

- Research date：2026/08/07
- Price：483.36 USD
- Market cap：About USD 802 billion

## Notes

This report has 12 chapters; data as of 2026/08/07. 2026E revenue is derived from Q1 of about RMB 10.3 billion (public quarterly report basis), Q2 of 11.536 billion, Q3 guidance of 13 billion, and Q4 of about 14 billion; the assumptions for the three 2027E scenarios are set out in Chapter 9. EPS is calculated on 1.66 billion shares and excludes potential dilution from the OpenAI warrant (capped at 160 million shares). The EBIT multiples used in the sum-of-the-parts valuation are the report's own. All derived figures are marked and are not company-disclosed data.

## Financial summary (USD billion)

| Project | 2024A | 2025E | 2026E | 2027E (neutral) |
|---|---|---|---|---|
| Operating revenue | 257.9 | About 360 | Around 490 | Approximately 1,300 |
| Data center revenue | 125.8 | Approximately 190 | Approximately 300 | Approximately 1,000 |
| Gross margin | 49.4% | Approximately 52% | Approximately 55% | 57% |
| Net profit (GAAP) | 16.4 | About 40 | Approximately 100 | Approximately 315 |
| EPS (USD) | Approximately 1.0 | About 2.4 | Approximately 6.2 | 19 |
| P/E (corresponding to USD 483.36) | — | — | 78x | 25x |

> 2024A is per the company's annual report; 2025E, 2026E and 2027E are our estimates (2026E = approximately 103 in Q1 + 115.36 in Q2 + 130 guided for Q3 + approximately 140 in Q4; 2027E is the base case). EPS is calculated on 1.66 billion shares. All estimates are marked "approximately" and are not company guidance.

## Three-scenario valuation

| Scenario | 2027 EPS | Multiple | Target price | Relative to the current price |
|---|---|---|---|---|
| Pessimistic | 12 USD | 20x | USD 240 | -50% |
| Neutral | 19 USD | 25x | USD 475 | -2% |
| Optimistic | 24 USD | 30x | USD 720 | +49% |

> Probability-weighted (35/45/20) target price of USD 442, 8.6% below the current price. Multiples reference the 20–30x range for PHLX Semiconductor Index leaders.

## Chapter 1 Company Overview

Founded in 1969 and headquartered in Santa Clara, California, AMD is the only company globally that holds both x86 licensing and high-performance GPUs. It closed at USD 483.36 on August 7, 2026, with a market cap of USD 802.4 billion (on 1.66 billion shares), making it the sixth-largest semiconductor company on Nasdaq by market cap.

Four segments: Data Center (2026Q2 revenue USD 6.718 billion, 58%), Client (USD 3.062 billion, 27%), Gaming (USD 779 million, 7%), Embedded (USD 977 million, 8%). The company is fabless: TSMC manufactures wafers, while Tongfu Microelectronics and ASE handle packaging and testing.

Ownership is dispersed; the top ten institutional holders own roughly 55% combined, with Vanguard, BlackRock and State Street in the top three. Insiders hold less than 1% combined, and Lisa Su personally holds about 0.24%.

Four main product lines: EPYC server CPUs (Zen 6 architecture, volume production in 2026), Ryzen PC processors, Instinct MI-series accelerators (MI350, MI450), and Versal and Zynq adaptive computing (formerly Xilinx). Client customers include Lenovo, Dell, HP and Asus; data center customers include Microsoft, Meta, Oracle, OpenAI and Anthropic.

The key products in 2026 are MI450 and the Helios rack: 432GB HBM4 per card on the N2 process, with 72 GPUs per rack, 31TB HBM4, liquid cooling and UALink interconnect. This is the first time AMD sells a "system" rather than a "chip", and it is the key to whether gross margin can move from 56% to 60%.

The 52-week range is USD 190.95–580.91, a 204% swing over the year. That volatility shows two things: the market's pricing of the stock is highly unstable, and "entry timing" matters far more to returns than "company selection". For the same company, buying last year versus buying in June produces a 150% difference in return.

## Chapter 2 Industry Analysis

AI accelerators are the fastest-growing category in semiconductors. The global market is worth about USD 300 billion in 2026, up 55% year on year, and should reach USD 420 billion in 2027, up 40%. The driver is capex at the four North American cloud providers: about USD 800 billion combined in 2026, up 60% year on year.

The landscape is highly concentrated: Nvidia about 60%, cloud in-house chips about 22%, AMD about 9%, others 9%. Within the three-layer structure, Nvidia dominates training (share 85%+), three players contest inference (Nvidia 55%, AMD 12%, ASIC 30%), and AMD holds a distinct edge in HPC and sovereign AI (25%).

Cycle position: capex is in its third year, and historically it has rarely risen four years running. Growth will most likely fall back to 10%–20% in 2027 as the industry shifts from shortage to competition.

Supply chain is the hard constraint. Leading-edge nodes all sit at TSMC (N2 in Tainan, N3 in Hsinchu), as does advanced packaging CoWoS, while HBM4 comes from SK hynix, Samsung and Micron. CoWoS capacity for 2026 is fully booked, with AMD taking about 20%. This constraint sets the physical ceiling on doubling: you cannot sell more than you can build.

On demand, the gauge is token consumption. Global inference token consumption grew about 5x year on year in 2026, while training compute grew about 2x: inference is outpacing training, which favors AMD because inference demands less of the ecosystem. This is the only entry point through which a second supplier can scale in.

## Chapter 3 Business model

AMD's business model is "use TSMC's capacity to sell compute cheaper than Nvidia." Revenue comes from three customer types: hyperscalers (about 45%), model companies (about 25%), and OEM and sovereign customers (about 30%).

Cost structure: materials at 44% of revenue (with HBM and GPU dies the largest components), R&D 21%, sales and administrative 9%, operating margin 17.3%. The Data Center segment carries a 31.3% operating margin, making it the company's most profitable piece.

The difference from Nvidia lies in "what is sold": Nvidia sells complete racks (GPU + networking + software + services), while AMD sells GPUs and reference designs, with OEMs assembling the racks. This makes AMD's pricing 20%–30% lower and its gross margin 19 percentage points lower.

Unit economics: the MI450 sells for around USD 30,000 per card, with material cost of RMB 1.6–1.8 million and a gross margin of 40%–45%; a single EPYC chip sells for USD 8,000–15,000 at a 60%–70% gross margin. The company-wide 56% is the weighted result of the two. Revenue recognition runs through delivery, racking and acceptance, a cycle of 3–6 months.

Another lens on the customer mix: AMD's top five customers contribute about half of revenue, versus about one-third for Nvidia. Higher concentration means greater elasticity—AMD rises faster when demand climbs and falls harder when it turns. This, not the trading structure, is the fundamental reason its beta exceeds 1.

## Chapter 4 Financial Analysis

2026Q2 revenue RMB 11.536 billion, +50.1% YoY; gross profit RMB 6.463 billion, gross margin 56.0%; operating income RMB 1.990 billion, margin 17.3%; GAAP net income RMB 2.297 billion, EPS USD 1.39, non-GAAP EPS USD 1.66.

Cash flow: operating cash flow about RMB 3 billion (rough estimate), capex RMB 808 million, free cash flow about RMB 2.2 billion. Clean balance sheet: long-term debt in the RMB 3 billion range, net cash positive, goodwill RMB 24 billion with no impairment.

Returns: TTM net income about RMB 6.4 billion, net assets about RMB 63 billion, ROE 10%. Below top-tier semiconductor companies (NVIDIA 80%, TSMC 35%), because the 2022 Xilinx acquisition was paid in stock, inflating net assets.

Costs and tax: R&D about RMB 2.4 billion (21% of revenue), SG&A about RMB 1.1 billion (9%), 30% combined — high for a fabless company, because it must support CPU, GPU and FPGA lines at once. Effective tax rate this quarter about 12%, below the 15% statutory rate, aided by R&D credits and an overseas structure; likely back to 15% in 2027.

The YoY comparison shows the quality: 2025Q2 revenue RMB 7.685 billion, gross margin 43.2%, operating loss RMB 134 million; 2026Q2 revenue RMB 11.536 billion, gross margin 56.0%, operating income RMB 1.990 billion. In one year, from a loss to a 17.3% operating margin — a pace of improvement rarely seen in semiconductor history.

## Chapter 5 Management

Lisa Su became CEO in October 2014 and added the chairman role in 2022. Over twelve years she did three things: cut the product line, sell off manufacturing, and bet on chiplets; and made five acquisitions: Xilinx (USD 49 billion), Pensando (USD 1.9 billion), Silo AI (USD 665 million) and ZT Systems (USD 4.9 billion).

Capital allocation is characterized by "adding capability, not adding revenue": not one acquisition was made to consolidate the top line; all targeted technology or customers. The dividend is zero, and buybacks are only large enough to offset equity-incentive dilution.

Governance flaws: the chairman and CEO roles are combined; OpenAI warrants cap at 160 million shares (about 9.6% dilution). Succession risk: Lisa Su is 57, the CTO is 66, and there is no public succession pipeline.

Organizationally, AMD is "architecture-led with a flat engineering structure": few reporting layers, fast decisions. This structure saved the company when its process node lagged (the chiplet was the architecture team's idea), but it is slow on software ecosystems — ROCm only elevated its head to SVP in 2024. Compensation is equity-heavy; Lisa Su's fiscal 2025 total pay is on the order of USD 30 million.

Her strategy in three sentences: when resources are short, "do less but do it thoroughly"; technically, "use architecture to route around process"; financially, "use stock to buy capability, not cash to buy scale." These three sentences explain every major decision of the past twelve years and form the framework for judging her next move.

## Chapter 6 Growth Drivers

Three drivers, ranked by certainty: ① share gains from the second-source policy (9% → 15%–25%), high certainty; ② volume ramp of MI450 and Helios (2026H2–2027), medium certainty; ③ gross margin expansion from selling chips to selling systems (56% → 60%), low certainty.

Order support: Oracle's 50,000 MI450 units, OpenAI's 6GW (first 1GW delivered in 2026H2), Anthropic's 2GW, and Microsoft Azure's Helios testing. These orders cover more than 60% of the 2027 revenue target.

Note that the company's two targets are internally inconsistent: data center "doubling" (about USD 30 billion in 2026 → about USD 60 billion in 2027) implies EPS of about USD 14–15, while "EPS above USD 20" requires data center revenue above USD 100 billion (more than triple 2026). The two targets cannot be derived from the same set of assumptions; this report's base case adopts the latter (EPS 19) and therefore remains skeptical of the "doubling" language.The significance of Helios needs to be spelled out. In the past AMD sold "cards" — customers bought their own servers, built their own networking, tuned their own software; Helios is a "72-GPU unit that works out of the box," plug in and run. Clearing this step turns AMD from a component supplier into a solutions supplier, lifting gross margin and customer stickiness by a notch. Fail to clear it, and it remains "the cheap option."

Where is the gap? Data center revenue is about USD 30 billion in 2026 and must reach USD 100 billion in 2027 to support EPS of 19 — more than triple, not double. Either the company defines "doubling" differently from the market (possibly referring to second-half sequential growth), or the USD 20 EPS target embeds a large gross-margin beat.This ambiguity is the question that most needs clarifying on the Q3 earnings call.

## Chapter 7 Competitive Landscape

NVIDIA: 60% share, 74.9% gross margin, CUDA ecosystem — the standard setter. Its squeeze on AMD is twofold: no pricing room and no allocation of capacity.

Cloud in-house chips: 22% share, lowest cost, captive use only. They capture incremental inference demand — exactly the segment AMD can most easily win. Share could reach 30% by 2027.

Broadcom: custom ASIC partner, AI semiconductor revenue USD 16.7 billion (FY26Q3), 75% gross margin. It does not compete on the same battlefield as AMD, but it competes for the same budget. Intel: no longer able to fight back on CPU, losing server share.

Conclusion: AMD's competitive position is "second supplier" — NVIDIA caps pricing above, ASICs take volume below, share ceiling 25%.

Cost comparison: for the same 1,000-card inference cluster, an NVIDIA solution costs about USD 450 million, AMD about USD 340 million, cloud in-house ASIC about USD 260 million (not sold externally). AMD sits in the middle — cheaper than NVIDIA, dearer than in-house. That position is most valuable to customers who do not want to be locked into NVIDIA but also do not want to run their own team.

Broadcom deserves its own paragraph. Its custom ASIC business (Google TPU, Meta MTIA) carries a 75% gross margin, 19 points above AMD, because it sells design services plus sole-source supply — customers have no second vendor. AMD sells standard products, and customers can always shop on price. That is the difference between custom and general-purpose business models, not a difference in technology.

## Chapter 8 Risk factors

Six risks: cloud capex deceleration (35% probability), cloud in-house substitution (40%), Nvidia price cuts (30%), HBM/CoWoS supply shortfall (25%), major customer order cuts (20%), geopolitics (5% but with halving impact).

The most likely is capex deceleration—it does not require AMD to make a mistake, only for the industry to normalize. The most fatal is in-house substitution—it will not make AMD lose money, but will cap its share at 10%–15% permanently and compress the valuation multiple from 25x to 18x.

Risk compensation: the current price of USD 483 is 70% of the optimistic scenario, leaving no buffer for any of the above. This is the core reason for "watch" rather than "buy."

Historical analogy: in the 2018 crypto retreat, AMD's GPU revenue halved in two quarters and the stock fell from USD 34 to USD 16. Mining-card demand then and AI compute demand today are the same in nature—both are "derived demand," driven by external capex. AMD took six quarters to recover that time; if it happens again, the recovery will be longer because the base is larger.

Sensitivity: every 1-point decline in gross margin cuts EPS by 3%; every 3-point decline in share cuts EPS by 8%; every 5x decline in multiple cuts the stock price by 20%. Of the three variables, the multiple is the least controllable and the most impactful on near-term stock price—which is why buying a "good company" at the wrong price usually loses money in the first year.

## Chapter 9 Earnings Forecast

2026E: revenue of about RMB 49 billion (Q1 about 10.3 + Q2 11.536 + Q3 guidance 13 + Q4 about 14), net profit of about RMB 10 billion, EPS of about USD 6.2.

2027E, three scenarios: bear case revenue RMB 70 billion, net profit RMB 20 billion, EPS 12; base case revenue RMB 130 billion, net profit RMB 31.5 billion, EPS 19; bull case revenue RMB 160 billion, net profit RMB 40 billion, EPS 24.

Key assumptions: the base case assumes data center revenue of RMB 100 billion (share of about 25%), gross margin of 57% and a tax rate of 15%.If share reaches only 15% (data center RMB 60 billion), EPS falls to 13–14, implying a share price below USD 300.

Quarterly breakdown: Q3 guidance of RMB 13 billion ±0.3 billion, assuming data center 7.8 billion, client 3.3 billion, gaming 0.7 billion and embedded 1.0 billion; Q4 at +8% QoQ to RMB 14 billion, with data center 8.5 billion. Full-year data center revenue of about RMB 30 billion, +58% versus RMB 19 billion in 2025.

Visibility into 2028 is zero. Nvidia's Rubin Ultra launches in the second half of 2027, and AMD's MI500 has no public details yet. That means the 2027 EPS peak may be the high point for the next three years — pricing the 2026 share price on 2027 EPS carries the inherent risk of valuing a cyclical stock on peak earnings.

## Chapter 10 Valuation

Three methods cross-checked: (1) PE: 2027 neutral EPS of USD 19 × 25x = USD 475; (2) PEG: 125x PE / 50% growth = 2.5, above the reasonable ceiling of 1.5, implying a share price of USD 290; (3) sum-of-the-parts: data center at 20x EBIT, other segments at 15x, totaling about USD 650 billion, implying USD 392.

The median of the three methods is USD 392–475, and the current price of USD 483 sits at the upper end of the range. The probability-weighted expected price is USD 442, 8.6% below the current price.

Valuation conclusion: not cheap, but not absurdly expensive either—what is expensive is "certainty," not "price." The market is pricing in "doubling will definitely materialize," when doubling is only "likely to materialize."

Comparable companies: Nvidia at 28x TTM (15x forward FY2028), TSMC at 28x, Broadcom at 18x FY27, Marvell at 35x. AMD's 125x is the highest in this group and the only one that still requires 24x even under the most optimistic scenario. Cross-sectional conclusion: AMD is not a little expensive—it is an order of magnitude expensive.

Reverse check: at the current price of USD 483 and 1.66 billion shares, the implied market expectation is net profit of USD 40 billion in 2029 (at a 20x exit multiple). That requires revenue above USD 160 billion and a net margin of 25%—more than triple the 2026 level. In other words, the current price has already discounted success three years out.

## Chapter 11 Investment Recommendations

Rating: Watch, do not chase. Target price USD 475 (12 months, base case).

Two buy conditions, either one suffices: ① share price ≤USD 350 (18x 2027 base-case EPS); ② MI450 quarterly revenue ≥USD 3 billion with gross margin ≥55%.

Three sell/avoid conditions: ① gross margin Catalyst timing: Q3 results in October 2026, Q4 results in January 2027, Q1 results in April 2027.

Portfolio view: even if bullish, this is not the moment to build a position. 49% upside requires a beat; 50% downside only requires the industry to normalize — the risk-reward is wrong. Recommended position 0%, wait for USD 350 or MI450 quarterly revenue of USD 3 billion — the first is a price, the second is evidence; neither requires a forecast.

One more cost to count: waiting for USD 350 could take six quarters. Over those six quarters, if AI capex keeps beating, AMD could first rise to 650 and then fall back to 400 — waiting is not costless. This report's approach: wait, but raise the monitoring frequency to once a month; act when evidence appears, do not fixate on the price.

Conversely, if the price reaches 350 first while fundamentals deteriorate (gross margin below 52%), that is not a buy point but an avoid point. Price and fundamentals must be read together; looking at only one will lead to mistakes.

## Chapter 12 Appendix: Data and Definitions

Share price and 52-week range: batchdata daily, close of 2026/08/07 at USD 483.36; 52-week high 580.91, low 190.95. Market cap = 483.36 × 1.66 billion shares = USD 802.4 billion.

Financial data: AMD 2026Q2 results and 8-K (after market close on 2026/08/04), earnings call (same day). Competitor data: NVIDIA FY2027Q1 (2026/05/20), Broadcom FY26Q3 (2026/09, after the report date, for landscape reference only).

List of derived figures: TTM net income USD 6.4 billion, TTM revenue about USD 40 billion, 2025–2027 forecasts, operating cash flow about USD 3 billion, per-card bill of materials cost, market share. All marked "about" or "estimated".

Three caveats on basis: ① valuation uses GAAP (125x), trend uses non-GAAP (EPS 1.66); ② market cap uses 1.66 billion basic shares; diluted shares of 1.67 billion differ by 0.6%; ③ OpenAI warrants cap at 160 million shares (9.6%); EPS will be diluted on exercise, not included in this report.

Data source list: AMD 2026Q2 results, 8-K, earnings call transcript (2026/08/04); NVIDIA FY2027Q1 results (2026/05/20); Broadcom FY26Q3 results (2026/09, for landscape reference only); batchdata daily (2026/05/11–2026/08/07); stockanalysis.com quarterly income statement. All derived figures are marked in the text.

## Sources

- AMD Q2 2026 earnings (August 4, 2026, after close): revenue USD 11.536 billion, data center USD 6.718 billion, gross margin 56%, non-GAAP EPS USD 1.66
- AMD Q2 2026 earnings call (2026/08/04): Q3 guidance of USD 13 billion ±300 million, data center revenue to double in 2027, EPS target above USD 20
- Jiwei: "AMD Q2 Revenue Up 50% YoY; Su Zifeng: Data Center Business Expected to Double by 2027" (2026/08/05); Dongdu AI Shidai (2026/08/05)
- NVIDIA FY2027Q1 results (2026/05/20): revenue USD 81.615 billion, data center USD 75.2 billion, GAAP gross margin 74.9%
- stockanalysis.com/stocks/amd/financials/ (quarterly income statement); share price and 52-week range as of the August 7, 2026 close; market cap estimated on roughly 1.66 billion shares
