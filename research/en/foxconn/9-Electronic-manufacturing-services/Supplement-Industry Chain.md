# Hon Hai Precision（2317.TW）— Industry Chain Supplement

- Research date：2026/10/19
- Price：239.5 TWD
- Market cap：About TWD 3.37 trillion

## Notes

The BOM breakdown is a rough estimate based on the public estimate of roughly USD 3 million for a GB200 NVL72; the share of each segment is the midpoint of a range, not disclosed by vendors. Gross margin ranges use each company's 2026Q2 reported figures: Hon Hai 6.12%, Quanta 5.02%, Wistron 5.66%, Wiwynn 9.3%, Compal 4.6%, Inventec 4.23%. Upstream gross margins (NVIDIA 70%+, HBM 40%–50%, power and thermal 25%–30%) are approximations based on public filings and industry research. The calculation requiring 30% growth in 2027 Q3: TWD 3.03 trillion × 1.3 = TWD 3.94 trillion.

## Value distribution across the electronics manufacturing services supply chain (AI rack basis)

| Segment | Representative companies | Value / gross margin | Bargaining power |
|---|---|---|---|
| Upstream: GPUs and accelerator chips | NVIDIA, AMD, Broadcom (ASIC) | Accounts for about 60% of cabinet BOM; gross margin above 70% | Very strong, the pricing party |
| Upstream: HBM and memory | SK hynix, Samsung, Micron | About 20% of BOM; gross margin 40%–50% | Very strong; 2026 DRAM contract prices +60%–70% |
| Upstream: Advanced packaging and substrates | TSMC CoWoS, Unimicron, Ibiden | Gross margin 30%–50% | Strong; the capacity bottleneck side |
| Upstream: Power supplies and thermal management | Delta Electronics, Lite-On, Auras, AVC | About 10% of BOM; gross margin 25%–30% | Relatively strong; liquid-cooling spec setter |
| Midstream: rack-level assembly and system integration | Hon Hai, Quanta, Wistron, Wiwynn, Celestica | Processing fee about USD 20,000–30,000 per container; gross margin 4%–6% | Weak; tender by cabinet |
| Midstream: In-house production of key components | Hon Hai (connectors/mechanical parts/PCB), Zhen Ding, Taiwan Union Technology | Gross margin 15%–25% | Moderate; terms negotiable |
| Downstream · branded servers | Dell, HP, Supermicro | Gross margin 10%–15% | Moderate, pressured by CSP price cuts |
| Downstream: hyperscalers | Microsoft, Amazon, Google, Meta, Oracle | Capex determines demand across the entire chain | Extremely strong, buyer oligopoly |
| Downstream: Neocloud and sovereign cloud | CoreWeave, Nebius, sovereign wealth funds | High gross margin but negative cash flow, reliant on financing | Moderate; credit yet to be proven |

> Value share is a rough calculation based on public estimates of the roughly USD 3 million BOM for GB200 NVL72; gross margin ranges come from each company's 2026Q2 financial reports and industry research (Digitimes 2026/08/16, TrendForce 2026/08/28). The processing fee of USD 20,000–30,000 per cabinet is a rough sell-side estimate, not company disclosure.

## Value distribution: a slope that thins from thick to thin

Break down USD 3 million: GPU and accelerator cards about USD 1.8 million, HBM and storage about USD 600,000, power, cooling and mechanical parts about USD 300,000, and the remaining USD 300,000 must also cover switches, cables, testing and assembly. Foxconn takes a slice of this last segment, at a processing fee of USD 20,000–30,000 per rack.

The slope of this ramp is set by technical barriers: only one company worldwide can make GPUs, only three can make HBM, five or six can make liquid cooling and power, and seven or eight can assemble complete racks. The fewer the players, the higher the gross margin; the more the players, the more competition comes down to lead times and yield. Foxconn faces an order of magnitude more competitors at this layer than upstream, so it cannot earn upstream margins — this is not a capability problem.

The allocation logic along this chain can be stated in one sentence: scarcity sets the price; non-scarce links are priced on a cost-plus basis. GPUs and HBM are capacity bottlenecks, customers queue for supply, and the seller sets the price; complete-rack assembly is a buyer's market, seven or eight manufacturers bid, and the buyer sets the price. In 2026 this gap widens to the extreme — DRAM contract prices rise 60%–70% and NAND more than 100%, upstream price increases turn directly into contract manufacturers' costs, while their quotes to customers are negotiated once a year, and the contract manufacturer absorbs the entire timing gap.

## Hon Hai's position: making the thinnest segment the thickest

Within the same segment, Hon Hai genuinely did best: gross margin 6.12%, higher than Quanta's 5.02%, Wistron's 5.66%, Compal's 4.6% and Inventec's 4.23%. The difference comes from vertical integration — connectors, mechanical parts, PCB, power, thermal, racks, all in-house. The higher the share of self-made components, the more stays in its own pocket. Its strategy is not to move upstream, but to eat every stage of the midstream itself.

This strategy has a ceiling: self-made components carry gross margins of 15%–25%, but account for less than a tenth of rack value, so their weighted contribution to overall gross margin is limited. To truly change its position, customers would have to pay for "capability" rather than per "rack" — no sign of that yet.

Look at scale another way: Hon Hai's revenue in the first three quarters of 2026 was TWD 7 trillion 669.8 billion. At a rough 2.37% net margin, that is about TWD 180 billion of net profit; Nvidia's net profit for a single quarter in the same period exceeds that. This is the quantitative meaning of "position" — Hon Hai earns less than half the upstream's profit on ten times the revenue.

So watching this chain requires a habit: first see where the value sits, then see where the company sits. Value determines the ceiling on margin; a company's effort only determines how close it gets to that ceiling. Hon Hai is already close to its own ceiling — 6.12% is the highest among peers, and the remaining room depends on the upstream giving up margin, not on working harder.

## Cycle position: year four, the most aggressive year

AI infrastructure capex dates from 2023; 2026 is the fourth year. The four major North American cloud providers sharply raised 2026 capex, Foxconn's Q3 revenue rose 47.1% year on year and September alone broke the trillion mark, and TrendForce expects NVL72 rack output value to grow another 214% in 2027 (ASP doubling plus upstream price increases). Order visibility through 2027 is not the issue; the issue is the slope of growth.

A single-quarter base of 3.03 trillion in Q3 2026 means Q3 2027 must grow 30% to reach 3.9 trillion. If cloud capex growth falls from 40% to 10%, Foxconn's revenue growth drops to single digits, and a 6% gross margin leaves no buffer — a cyclical stock is most expensive when everyone has confirmed that "it will keep growing."

One easily overlooked timing point: the 2027 VR200 platform transition. A generation change means re-certification, re-ramping yields and renegotiating processing fees — an opportunity for Foxconn (ASP doubles again, integration complexity rises) and a risk (the contract manufacturer fronts the costs during the yield ramp). Historically, every platform transition has seen contract manufacturers' gross margins fall first and rise later, and the two quarters of decline are exactly when the financials look worst. If gross margin drops to 5.8% in the first half of 2027, don't rush to conclude the business has deteriorated; distinguish a ramp from a structural decline.

## Sources

- Hon Hai Precision Industry Q2 and H1 2026 Financial Results and Earnings Call (2026/08/12)
- Hon Hai Precision Industry September 2026 revenue announcement (2026/10/05), as reported by Economic Daily News and Commercial Times
- Digitimes, "How Much Profit Do AI Server Orders Leave Behind? The Six Electronics Giants' Profit Structures Diverge" (2026/08/16)
- TrendForce August 28, 2026 AI server industry research (cited by BT Finance on September 6, 2026)
- Goldman Sachs Hon Hai stock report (2026/06/02), UBS report (2026/07/20); target price and EPS are sell-side estimates
- Share price vs. 52-week range: Taiwan Stock Exchange daily data (as of the 2026/10/19 close)
