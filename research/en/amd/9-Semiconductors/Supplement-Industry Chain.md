# AMD（AMD）— Industry Chain Supplement

- Research date：2026/08/07
- Price：483.36 USD
- Market cap：About USD 802 billion

## Notes

Value distribution is a rough estimate derived from the 2026 mid-year GB300/Helios-class rack bill of materials; it is not an official teardown and is intended only to illustrate magnitude. Gross margin figures are drawn from public disclosures or industry estimates for TSMC 2026Q2, NVIDIA FY2027Q1, AMD 2026Q2 and Hon Hai 2026Q2 (6.12%). The three-year capex figures sum public guidance from the four North American cloud providers (Microsoft, Amazon, Google, Meta), with 2026 on a start-of-year guidance basis.

## Value distribution across the semiconductor supply chain (AI compute segment)

| Segment | Representative companies | Gross margin | Bargaining power | Explanation |
|---|---|---|---|---|
| EDA and IP | Synopsys, Cadence, Arm | 80%+ | Extremely high | Design is mission-critical, priced per seat, and has no substitute for customers |
| Equipment | ASML, Applied Materials, Lam Research, KLA | 45%–50% | High | EUV sole supplier, 18-month lead time |
| Materials and silicon wafers | Shin-Etsu, SUMCO, Shanghai Silicon | 25%–35% | Mid | Highly cyclical; prices track supply and demand |
| Wafer foundry | TSMC, Samsung, Intel Foundry | TSMC 58% | High | N2 and CoWoS are hard bottlenecks |
| HBM | SK hynix, Samsung, Micron | 50%–60% | High | Supply will fall short of demand in 2026, with price increases extending into 2027 |
| Substrates and packaging & testing | Ibiden, Unimicron, ASE, Tongfu | 20%–30% | Mid-to-low | ABF substrate shortage, OSAT competition intense |
| Chip design (Fabless) | NVIDIA, AMD, Broadcom, Marvell | NVIDIA 75%, AMD 56% | Divergence | Standard-setters earn a premium; followers compete on value for money |
| Complete vehicles and ODMs | Hon Hai, Quanta, Wistron, Dell | 5%–8% | Low | Assembly: scale and delivery times |
| Cloud providers and model companies | Microsoft, Meta, Oracle, OpenAI | Operating margin 30%+ (cloud) | High | Buy side, sets the capex pace |

> Gross margins are the midpoints of ranges from public filings or industry estimates for 1H26. Bargaining power is our subjective score, based on substitution difficulty × concentration. Gross margin bases: TSMC 2026Q2, Nvidia FY2027Q1 (GAAP 74.9%), AMD 2026Q2 (56.0%).

## Stuck at the 1.8 million mark, with gross margin at just 56%

Value distribution in AI racks is highly concentrated. A rough build based on the mid-2026 bill of materials: 72 GPUs at about USD 1.8 million (USD 25,000 per card), HBM USD 450,000, network switching USD 240,000, CPU USD 150,000, power and cooling USD 120,000, assembly USD 90,000 and the rest USD 150,000, for a total of about USD 3 million. The GPU slot captures 60% of the value, and AMD sits in that slot.

Positions within that slot, however, differ. Nvidia sells "GPU + NVLink + Spectrum networking + full rack," with software and services carrying a 15%–20% premium per rack; AMD sells "GPU + in-house rack (Helios)," giving software away and relying on OEMs for services.Within the same 60% of value, Nvidia earns 75% gross margin and AMD 56%; the 19-point gap is the price of "systems."

Upstream constraints are tougher still. TSMC prioritises N2 capacity for Apple and Nvidia; CoWoS capacity for 2026 is fully booked, with Nvidia taking 60% and AMD 20%; HBM4 capacity at all three suppliers is likewise booked through 2027. Much of AMD's USD 808 million in capex is prepayment for this capacity.It cannot lock down entire production lines the way Nvidia does; it can only queue.

## Bargaining power: strong at both ends, weak in the middle

AMD is a mid-tier customer to its upstream suppliers. It accounts for 8%–10% of TSMC's revenue, ranking third behind Apple and Nvidia, and ranks second among SK hynix's HBM customers. That position secures capacity but not pricing: TSMC is raising prices 5%–10% in 2026 and AMD has no choice but to accept.

Downstream, AMD is a backup supplier. Cloud providers' procurement rules require a second source, but how much share to allocate is their call. OpenAI's 6GW agreement looks like a big order but is in fact payment upon delivery progress—if yields fall short, the money does not arrive.

That is what "stuck in the middle" means in practice: upstream price hikes can only be swallowed, downstream price pressure can only be accepted, and the only lever left is its own gross margin.56% is already the ceiling it can defend under pressure from both sides.

## Cycle position: year three, still trending up, but with less room for error

AI capex is now in its third year. The four North American cloud players spent roughly RMB 280 billion combined in 2024, RMB 500 billion in 2025 and RMB 800 billion in 2026 — nearly tripling in three years. Semiconductor history has seen that slope only twice before: telecom equipment in 2000 and work-from-home in 2021. Both peaked in the fourth year.

None of which means growth must decline next year. Cloud cash flow is still expanding, and AI revenue growth (Microsoft Azure AI up more than 60% YoY) can still support capex. But a "double again" assumption requires capex to rise another 50% — a far lower probability than a 10% increase.

Cycle position matters more for valuation than for earnings. On earnings, AMD growing 40% in 2027 is the high-probability outcome; on valuation, 40% growth at 25x is reasonable, at 125x it is borrowing from the future. Buying growth stocks in the third year of a cycle is buying the money from "growth delivered," not the money from "multiple expansion."The tightest link is HBM. The MI450 carries 432GB of HBM4 per card, 1.5x the MI355X, and in 2026 only SK hynix, Samsung and Micron can supply HBM4 globally, with priority going to Nvidia. How much AMD gets determines how many cards it can ship — this is not a demand problem, it is an allocation problem. HBM contract prices rose 60% YoY in Q2 2026, and AMD faces more cost pressure than Nvidia because its purchase volumes are smaller and its bargaining power weaker.

China deserves separate mention. Huawei Ascend and Cambricon have already established substitutes on the inference side, with Cambricon revenue at RMB 5.996 billion in the first half of 2026, double YoY. They are not taking AMD's installed base; they are taking the incremental demand AMD wants — Chinese cloud inference clusters. Whether a downgraded MI450 can be sold into China depends on the export-control review every six months. This segment is about 20% of AMD revenue and the most uncertain 20% of its valuation.

Three leading indicators for the cycle, all in public data: TSMC CoWoS capacity utilization (fully loaded in Q2 2026), HBM contract prices (up six consecutive quarters) and cloud capex guidance (preliminary 2027 guidance still being raised). A turn in any one of the three would mean this cycle has topped. All three still point up, so this report says "still rising," but the margin for error is already thin.

A simple summing of profit along the chain: for a USD 3 million rack, upstream (TSMC, HBM, equipment, EDA) takes about 90 of value and about 36 of gross profit; AMD takes 135 of revenue and 76 of gross profit; the ODM takes 9 of revenue and 6,000 of gross profit. The thickest gross profit sits with the irreplaceable, the thinnest with the replaceable, regardless of where a link sits in the chain.

## Sources

- AMD Q2 2026 earnings (August 4, 2026, after close): revenue USD 11.536 billion; data center USD 6.718 billion; gross margin 56%; non-GAAP EPS USD 1.66
- AMD Q2 2026 earnings call (2026/08/04): Q3 guidance USD 13 billion ±300 million; data centre revenue to double in 2027; EPS target above USD 20
- Jiwei: AMD Q2 revenue up 50% YoY; Su Zifeng expects data centre business to double by 2027 (2026/08/05); Dongdu AI Shidai (2026/08/05)
- NVIDIA FY2027Q1 results (2026/05/20): revenue USD 81.615 billion; data center USD 75.2 billion; GAAP gross margin 74.9%
- stockanalysis.com/stocks/amd/financials/ (quarterly income statement); share price and 52-week range as of the August 7, 2026 close; market cap based on roughly 1.66 billion shares
