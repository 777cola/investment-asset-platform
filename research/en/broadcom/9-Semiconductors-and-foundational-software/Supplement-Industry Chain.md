# Broadcom（AVGO）— Industry Chain Supplement

- Research date：2026/10/02
- Price：355.14 USD
- Market cap：About USD 1.69 trillion (rough estimate on 4.77 billion shares)

## Notes

Data sources: Broadcom FY26Q3 earnings release and conference call (2026/09/02); gross margins for peers including TSMC and SK hynix are approximate, based on public disclosure; AI server BOM proportions are rough industry rules of thumb (back-of-envelope). Chain classification is our own, drawing on AI Berkshire's supply-chain research method. The 60%–75% gross margin range for the custom ASIC segment is our estimate; the company does not disclose it.

## Value distribution across the AI compute chain (September 2026)

| Segment | Representative companies | Value / gross margin | Bargaining power |
|---|---|---|---|
| EDA and IP | Synopsys、Cadence、Arm | Gross margin around 80% | Very strong (design entry point, seat-based pricing) |
| Semiconductor equipment | ASML, Applied Materials, Lam Research | Gross margin 45%–50% | Strong (sole EUV supplier) |
| Wafer foundry | TSMC, Samsung, SMIC | TSMC's gross margin is about 58% | Strong (only two players at 3nm) |
| HBM memory | SK hynix, Samsung, Micron | Gross margin around 50%, price increase in 2026 | Very strong (demand exceeds supply) |
| Advanced packaging (CoWoS) | TSMC, ASE | High, capacity bottleneck | Strong (capacity scarcity) |
| Custom ASIC design | Broadcom, Marvell, Alchip, MediaTek | Broadcom 60%–75%, design services 30%–40% | Moderately strong moat: customers cannot be replaced, but there are only a few of them |
| AI networking chips | Broadcom, Marvell, Nvidia | Broadcom around 65% | Strong (No. 1 globally in Ethernet switching) |
| Server assembly / ODM | Foxconn, Quanta, Wistron | Gross margin 5%–8% | Weak (on cost and delivery) |
| Cloud providers / model companies | Microsoft, Google, Meta, OpenAI, Anthropic | — | Very strong (buy side, sets the pace for the entire chain) |

> Gross margins are approximate, on a publicly reported basis, for the latest quarter of 2026. The 60%–75% range for custom ASIC is an estimated range for Broadcom's AI semiconductor segment; the company does not disclose segment gross margin. Bargaining power is a qualitative judgment of this report.

## Cost structure of an AI server (industry rule of thumb)

| Components | Share of BOM | Key suppliers | Characteristics |
|---|---|---|---|
| AI accelerator chips (GPU/ASIC) | 60%—70% | Broadcom, Nvidia | Determines performance, highest gross margin |
| HBM memory | 15%—20% | SK hynix, Samsung, Micron | 2026 will be the tightest year, with the sharpest price increases |
| Networking (switches / optical modules / cables) | 5%—10% | Broadcom, Zhongji Innolight, Eoptolink | The larger the cluster, the higher the share. |
| Assembly and thermal management | 3%—5% | Foxconn, Quanta, Delta | Scale alone yields the lowest gross margin |
| Power and data centers | Not included in the server BOM | Utilities, data center REITs | Determines whether power can be supplied |

> These ratios are industry rules of thumb, vary widely across architectures and are rough estimates only; they illustrate the distribution of value and are not financial forecasts for any company.

## Upstream: three chokepoints, none of which Broadcom can bypass

Wafers and HBM are the largest cost components of custom chips. Only TSMC and Samsung can produce 3nm wafers, only TSMC can deliver CoWoS packaging at scale, and only three memory makers supply HBM — all of it in tight supply in 2026.

Broadcom therefore has almost no bargaining power over its upstream suppliers. Its response is to "lock in capacity": paying advances, signing long-term supply agreements and accepting price increases. On the earnings call, Hock Tan said the USD 115 billion for FY27 was "based on secured supply" — the flip side being that Broadcom has already bought up upstream capacity, at the cost of prepayments and commitments.

This is also the second driver of the gross margin decline. As HBM prices rise, Broadcom must pass the cost through to customers, and how much it can pass through depends on contract terms. Where it cannot, gross margin is squeezed in the middle.

## Midstream: Broadcom's position is "design + connectivity"

The middle of the chain splits into three segments: architecture and design (Broadcom, Marvell, Alchip), manufacturing (TSMC) and connectivity (Broadcom's Tomahawk, Astera Labs' retimers, optical module makers).

Broadcom is the only company occupying both the design and connectivity segments at once. That combination is worth a lot: customers buying XPUs buy the switch chips with them, and once the switch chips are in, switching to another vendor for the next-generation XPU becomes far harder.The two businesses lock each other in — the structural source of its 75% gross margin.

Marvell also does custom ASIC and optical interconnect, but holds no share in switch chips, so its customer relationships are project-based where Broadcom's are platform-based. The gap shows up in gross margin: Broadcom at 75%, Marvell around 60%.

## Downstream: six customers, one buyer's market

Downstream sits six frontier model companies plus every enterprise building AI data centers. On the surface Broadcom is the seller and these customers are the buyers; in reality the capex of these six sets the pace of the entire chain—they are the true price-setters.

The evidence is price. Broadcom quotes widely different prices to different customers for the same custom chip, depending on purchase volume and the competitive landscape. Google has MediaTek as a second source, giving it strong bargaining power; Anthropic has no second source and must accept Broadcom's quote. The claim that "Broadcom has pricing power" therefore needs a qualifier: it has pricing power with customers that lack a second source, and none with customers that have one.

MediaTek winning the TPU V80 project is essentially Google building a second source. The impact on Broadcom is not lost orders—it is lost pricing.

## Two counterintuitive conclusions

First counterintuitive point: the segment with the highest gross margin has the smallest addressable market. EDA carries an 80% gross margin, yet the global market is only around USD 15 billion, split between Synopsys and Cadence. Foundry earns a 58% gross margin on a USD 120 billion market, while custom ASIC earns 60%–75%, with the AI portion at about USD 58 billion this year. Gross margin reads the moat; market size sets the ceiling.

Second counterintuitive point: the segment with the greatest value share has the weakest bargaining power. Chips account for 60%–70% of the cost of an AI server, yet chipmakers must queue at TSMC and queue at memory makers; assembly accounts for only 3%–5%, yet Foxconn must win orders on scale and delivery speed. Value share and bargaining power are not the same thing: the former is set by technology, the latter by scarcity.

Apply both to Broadcom: its gross margin is high, but its addressable market is capped by six customers; its value share is large, but it has no bargaining power over upstream suppliers. Its moat is therefore "deep enough, not wide enough," which is why it cannot command a software company's valuation.

## Cycle position: mid-upcycle, with H2 2027 the critical juncture

Three indicators tell us where we are in the cycle: customer capex guidance, upstream capacity utilisation and financing costs. The first two are still rising; the third has begun to tighten.

The four major North American cloud providers are again raising capex for 2026, TSMC's 3nm and CoWoS lines are running at full capacity and HBM remains in short supply — all evidence that the upcycle continues. But AI data centre financing increasingly relies on debt and structured arrangements (Broadcom's platform among them), and once rates rise, construction pacing will slow first.

The semiconductor industry's rule: order cuts precede capex cuts by two quarters, and capex cuts precede revenue cuts by one quarter. That puts the inflection point in the second half of 2027. Before then, Broadcom's numbers will look good; after that, it depends on whether this round of infrastructure buildout has generated real revenue.

## Sources

- Broadcom FY2026 Q3 Results and Conference Call (2026/09/02)
- Yicai: Broadcom guides AI revenue to double for a second straight fiscal year, yet the stock closed lower (2026/09/03)
- Sinolink Securities reiterates Buy on Broadcom (2026/09/04)
- Understanding the AI Era: "Broadcom's AI Chip Orders Surge, So Why Does the Stock Keep Falling" (2026/09/16)
- Securities Star, "Revenue Surges 86%, AI Revenue Up 221%, So Why Did Broadcom Still Plunge After Hours" (2026/09/02)
- Share price vs. 52-week range: batchdata daily data (as of the October 2, 2026 close)
