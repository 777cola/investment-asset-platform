# Micron Technology（MU）— Industry Chain Supplement

- Research date：2026/09/25
- Price：1082.28 USD
- Market cap：Approximately USD 1.22 trillion (based on a rough estimate of 1.13 billion shares)

## Notes

Gross margin ranges along the supply chain come from companies' public filings (2025–2026) and are not like-for-like across periods; HBM unit-price multiples and inventory days reflect industry estimates and media reports. The four-stage cycle is a framework defined in this report for positioning rather than precise forecasting.

## Memory supply chain value distribution (2026)

| Segment | Representative companies | Gross margin / value content | Bargaining power |
|---|---|---|---|
| Upstream equipment | ASML (EUV), Applied Materials, Lam Research, KLA | Gross margin 48%–60%; one EUV tool costs about EUR 200 million | Very strong, seller's market, production capacity queued |
| Upstream materials | Shin-Etsu, SUMCO, Shanghai Silicon Industry (wafers), specialty gases, sputtering targets | Gross margin 20%–35% | Moderate; Japanese materials suppliers hold pricing power over advanced nodes |
| Midstream DRAM manufacturing | Samsung, SK hynix, Micron, CXMT | Current gross margin 85%; mid-cycle 35%–45%; below 10% in a downturn | Strong when supply is short, zero when supply is in surplus |
| Midstream NAND manufacturing | Samsung, SK hynix (Solidigm), Micron, Kioxia, YMTC | Current gross margin 70%–85%; mid-cycle 25%–35% | Weaker than DRAM, more players |
| HBM stacking / advanced packaging | Micron, SK hynix, Samsung (in-house); TSMC (logic-side CoWoS) | HBM unit price is roughly 5–8x that of DDR5 of the same capacity (industry estimate) | Strong; certification cycle of 6–12 months |
| Downstream modules | Kingston, Longsys, ADATA, Ramaxel | Gross margin 10%–20% | Weak; earns processing fees and inventory spreads |
| Downstream AI chips | Nvidia, AMD, Broadcom, Google TPU | NVIDIA gross margin around 70%–75% | Very strong, ecosystem lock-in |
| Downstream end devices | Apple, Samsung phones, Xiaomi, Dell, Supermicro, automakers | Apple's gross margin is 45%, Xiaomi's around 20%, and automakers' 15%–20% | Strong (for module makers) / Moderate (for IDMs) |

> Gross margins are ranges from public filings, not exact figures for the same period; HBM unit-price multiples are industry estimates, used to illustrate the difference in value content. Memory-segment gross margins use the range for 2026 against the downturns of 2019/2023.

## Upstream: Micron has no pricing power, only a place in the queue

Upstream of memory makers are equipment and materials. Only ASML makes EUV lithography tools, and advanced DRAM nodes below 1γ cannot do without them; etch, deposition and metrology are split among Applied Materials, Lam Research and KLA. These companies run gross margins of 48%–60% year in, year out, higher than the mid-cycle gross margins of memory makers (35%–45%)—**which shows that in normal years, equipment vendors make more money than memory makers.**

Micron has no bargaining power over them. FY26 capex is USD 27 billion and FY27 above USD 40 billion, most of it paid to equipment vendors at prices they set and on delivery schedules they set. As the industry expands capacity in 2026, equipment lead times stretch to 12–18 months, which directly means Micron "cannot expand fast even if it wants to"—**a short-term positive (supply cannot come up) and a medium-term negative (everyone's capacity arriving together means 2028 oversupply).**

## Midstream: HBM is the only place where prices can be raised

The midstream splits into two layers. The first is wafer fabrication: turning silicon wafers into DRAM dies. Products at this layer are commodities — DDR5 is DDR5, and customers shop on price. The second is HBM stacking: punching through 12 layers of DRAM chips with TSVs, stacking them, and packaging them alongside the GPU. This layer carries a certification barrier — Nvidia validates for 6–12 months, and once passed, a product generation is locked in.

The value gap is enormous: for the same bit capacity, HBM4 commands a unit price 5–8x that of DDR5 (industry estimate), at the cost of 2–3x wafer consumption. **This is why Micron says it will "strategically keep HBM share near its DRAM share"** — making more HBM cannibalizes supply of ordinary DRAM, and ordinary DRAM is also in shortage, with both sides profitable. The optimal solution is balance, not betting everything on HBM.

Micron's HBM share is 18% (Counterpoint 2026Q2), below SK hynix's 50% and Samsung's 33%. Its advantage lies not in share but in "ramping 12-layer HBM4 twice as fast as the prior generation" — fast yield ramp means more qualified output from the same wafers.

## Downstream: customers make more money than it does, so they can push prices down

Micron's downstream splits into four categories: AI servers (NVIDIA, AMD, the four major cloud providers), phones and PCs (Apple, Samsung, Xiaomi, Lenovo, Dell), automotive (Tier 1 suppliers and automakers), and industrial and embedded. The 2026Q3 revenue mix is CDBU 11.5 billion, CMBU 13.77 billion, MCBU 11.52 billion and AEBU 4.63 billion—**data center and cloud combined at roughly 61%, already the absolute mainstay.**

Downstream customers' gross margins generally run above Micron's mid-cycle level: NVIDIA at 70%–75%, Apple at 45%. That means in a normal year customers have both the ability and the incentive to squeeze memory prices; only in shortage years does bargaining power flip. 2026 is that year—Micron can raise ASP 60% because customers cannot get supply, not because it negotiates well.

**To judge when bargaining power reverses, one indicator suffices: customers' inventory days.** When cloud providers' server DRAM inventory goes from 4 weeks back to 8 weeks, the price pressure begins. Public information now shows Samsung and SK hynix finished-goods inventory at under 10 days, with customer-side inventory also tight, so bargaining power still sits with the seller.

## Cycle position: late-cycle boom, neither peak nor mid-cycle

The memory cycle can be roughly divided into four phases: recovery (prices stop falling, capacity utilization rebounds), boom (prices accelerate upward, gross margin hits a record high), peak (gains narrow, inventory rebounds), and downturn (price growth turns negative, gross margin collapses). Three indicators locate where we are now.

- Gross margin: 84.9%, a historical high, with Q4 guidance of 86%, only +1pct QoQ — a typical feature of the late boom phase (still rising, but no longer able to rise)
- Price gains: +90%–95% YoY in 2026Q1, +10%–15% QoQ in Q4 — gains narrowing quarter by quarter, but still positive growth
- Capacity: Micron's HBM monthly capacity rising from 40–50 thousand wafers to 100 thousand wafers by year-end, FY27 capex above USD 40 billion — expansion has started, but supply will only be released in concentrated form in 2028

Taken together, the three indicators show: **the peak has not arrived (prices still rising, inventory still low), but we are already in the second half of the boom (gross margin can no longer rise, expansion has begun).** Based on historical rhythm, from this point to "QoQ price growth turning negative" there are roughly 2–4 quarters left, and to "the share price peaking" roughly 0–2 quarters — because share prices always lead.

## Sources

- Micron FY2026 Q3 earnings report and conference call (after market close on 2026/06/24)
- Chip Insight, "Micron's Gross Margin Climbs to 85%, USD 100 Billion Long-Term Contracts Locked In Through 2030" (2026/06/25)
- TrendForce "Micron's Fiscal Q3 Revenue Sharply Above Consensus" (2026/06/25)
- Jinshi Data, "After Micron Surged 226%, Wall Street Starts Reworking Its Math" (2026/09/16)
- Counterpoint Research Q2 2026 global HBM market share (2026/09/02)
- Micron announcement: FY2026 fourth-quarter results to be released on 2026/09/30 (2026/08/25)
- Share price vs 52-week range: batchdata daily data (as of the September 25, 2026 close)
