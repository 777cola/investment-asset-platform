# TSMC（2330.TW）— Industry Chain Supplement

- Research date：2026/09/11
- Price：2410.0 TWD
- Market cap：Approximately TWD 62.5 trillion (about USD 1.95 trillion)

## Notes

Gross margin ranges are based on each company's latest 2026 filings and consensus estimates; CoWoS gross margin is not disclosed separately and is an estimate. The global semiconductor market size of roughly USD 700–800 billion and foundry's share of about 25% follow industry-agency definitions. Supply-chain value figures are qualitative judgments and have not been precisely broken down.

## AI chip supply chain value distribution (2026)

| Segment | Representative companies | Gross margin magnitude | Bargaining power |
|---|---|---|---|
| EDA / IP | Synopsys, Cadence, ARM | Above 80% | Very high (oligopoly, seat-based pricing) |
| Semiconductor equipment | ASML, Applied Materials, Tokyo Electron, KLA | 45%–55% | High (sole EUV supplier, 18-month lead time) |
| Materials | Shin-Etsu, SUMCO, GlobalWafers, Sumitomo | 25%–35% | China (Japanese-concentrated, but substitutable) |
| Wafer foundry (advanced) | TSMC, Samsung Foundry, Intel | TSMC 67.7% / Samsung about 30%–40% | Very high (only one player can mass-produce 2nm) |
| Advanced packaging (CoWoS/SoIC) | TSMC, ASE, Amkor | CoWoS estimated at over 50% | Very high (sole CoWoS-L supplier) |
| Memory (HBM) | SK hynix, Samsung, Micron | Above 50% (2026 supply shortage) | High (three-player oligopoly) |
| Chip design | NVIDIA, AMD, Broadcom, Qualcomm, Apple | NVIDIA above 70% / others 50%–60% | High (NVIDIA) / Medium (others) |
| Cloud providers and terminals | Microsoft, Amazon, Google, Meta, Apple | 30%–65% | Medium (large customer but dependent on compute supply) |

> Gross margin is a range based on public filings and market estimates for 2026, not a precise figure. TSMC does not disclose advanced packaging gross margin separately; the 50% figure is a market estimate.

## TSMC's capacity and customers across two bottlenecks

| Bottleneck | 2026 status | Key customers | Pricing performance |
|---|---|---|---|
| 2nm process | First full year of mass production; Q2 contributed 3% of revenue, with a rapid ramp in 2H | Apple, NVIDIA, AMD, MediaTek | Per-wafer quotes reportedly around USD 30,000, 30%–50% above 3nm |
| CoWoS advanced packaging | Capacity keeps doubling yet demand still outstrips supply | NVIDIA (primary), Broadcom, AMD, in-house cloud ASICs | Customers must book a year ahead and pay a capacity deposit upfront |
| 3nm | Fully loaded, accounting for 30% of revenue | Apple, Nvidia, Qualcomm, MediaTek | Prices flat in 2026, no further increases |
| Mature-node processes (28nm and above) | Ample capacity, price competition | Automotive, industrial control, consumer | Weak bargaining power, undercut by Chinese capacity |

> The 2nm price is a media report and has not been confirmed by the company. On CoWoS capacity, management would say only that it is "continuing to expand capacity", without giving an absolute number.

## I. Upstream: equipment is the only segment that can rival it

ASML is the sole global supplier of EUV lithography machines, priced at just over EUR 200 million each with an 18-month lead time. TSMC ranks among its largest customers but holds no bargaining power here—not because ASML is dominant, but because there is physically no alternative. High-NA EUV begins shipping in 2026 at over EUR 350 million per unit, and TSMC's procurement pace will directly shape ASML's revenue curve.

Materials are a weaker lever: silicon wafers (Shin-Etsu, SUMCO), photoresist (JSR, Tokyo Ohka) and specialty gases come from concentrated Japanese suppliers, but multiple options exist. TSMC's bargaining power here is moderate; these account for about 10%–15% of cost, and part of any price increase can be passed on to customers.

## II. Midstream: the dual stronghold of process and packaging

This is TSMC's most profitable segment and the core of this report. The delivery bottleneck for AI chips was CoWoS in 2024 and 2nm capacity in 2025–2026, and both bottlenecks point to the same company. This "dual chokepoint" gives it pricing power over both upstream and downstream: upstream equipment makers need its orders, downstream design companies need its capacity.

Technically, CoWoS stacks the GPU and HBM on the same interposer, connected by through-silicon vias. CoWoS-L uses local silicon bridges, supports larger package sizes and is key to Nvidia's Blackwell and Rubin. TSMC is the only company globally capable of mass-producing CoWoS-L; ASE and Amkor make traditional packaging and are not in the same tier.

## III. Downstream: customers are highly profitable but cannot do without it

NVIDIA's gross margin exceeds 70% in fiscal 2026, making it the most profitable company in the chain. But TSMC caps its output—CoWoS allocation directly determines how much NVIDIA can ship. The relationship resembles that of a brand and its sole foundry: who holds the upper hand depends on where scarcity sits. Today scarcity sits in capacity, so TSMC holds the upper hand.

That shifts over time. Customers are cultivating second sources (Samsung, Intel) and weighing moving mature-node orders elsewhere. This will not shake TSMC's advanced-node position, but it thins the buffer in utilization—once demand turns down, customers flee faster than anyone.

One further downstream shift: cloud providers' in-house chips (Google TPU, Amazon Trainium, Microsoft Maia) are gaining share. They bypass NVIDIA, but not TSMC—which broadens TSMC's customer base and steadies its pricing power.

## IV. Cycle position: third year of the upcycle, peak characteristics emerging

This upcycle began in the second half of 2023, with AI demand exploding in 2024, supply tightening in 2025 and full utilization in 2026. Judging by the historical rhythm of foundry (three years up, two years down), the highest-risk window runs from the second half of 2026 to the first half of 2027.

Two of the three top signals have appeared: capex at a record high (USD 60–64 billion) and gross margin at a record high (67.7%); the third (customers starting to cut orders) has not. The current read: the cycle is still in the top zone, but the slope has flattened. The implication for the share price: little good news left, and the bad news has not arrived yet.

## V. Memory: HBM is a second bottleneck, though not one TSMC manages

HBM (high-bandwidth memory) accounts for a substantial share of the AI chip cost structure. In 2026, HBM supply falls short of demand, and with the market an oligopoly of SK hynix, Samsung and Micron, price increases are running at double-digit percentages. TSMC does not produce HBM, but CoWoS packaging requires HBM to be stacked with the GPU—making TSMC the largest "assembler" of HBM and an indirect beneficiary of tight HBM supply, via higher packaging value per unit.

The division of labour along the chain is clear: memory makers earn cyclical money (high price elasticity), while TSMC earns processing money (stable pricing, charged per wafer). For investors, HBM offers greater elasticity and TSMC greater certainty. The two assets have entirely different risk-return profiles and are not substitutes for each other.

## VI. Regions and customers: North America 70%, China 10%

By customer headquarters: North America accounts for about 70% (Apple, Nvidia, AMD, Qualcomm, Broadcom, cloud providers), China just over 10% (advanced nodes essentially zeroed out under export controls), and the rest of Asia-Pacific plus Europe about 20% combined. This mix makes TSMC highly sensitive to US policy—tariffs, export controls and subsidy conditions each directly affect orders.

Node mix is the other moat: 7nm and below accounts for 77%, of which 5nm is 33% and 3nm 30%. The higher the share of advanced nodes, the harder it is to replace—it is the only foundry globally that can make them, and customers have no second option. This is the quantitative source of its bargaining power in the chain.

## Sources

- TSMC Q2 2026 Earnings Conference: Presentation and Press Release (2026/07/16)
- TSMC August 2026 Consolidated Revenue Announcement (2026/09/09)
- TSMC Q1 2026 Financial Report (2026/04/16)
- TSMC Q4 2025 Results: Full-Year EPS of 66.25 (2026/01/15)
- Commercial Times, "TSMC August Revenue Rises Double Digits on Both Measures to RMB 514.806 billion, Fourth Straight Record" (2026/09/09)
- TSMC (2330.TW) share price vs 52-week range: batchdata market data, as of the September 11, 2026 close
