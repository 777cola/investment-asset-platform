# Alphabet（GOOGL）— Industry Chain Supplement

- Research date：2026/10/30
- Price：279.84 USD
- Market cap：About USD 3.42 trillion

## Notes

The industry gross margin range is an industry estimate from public sources, not a figure disclosed by any single company. Alphabet's capex structure mix comes from its Q3 2026 earnings call commentary. The AI capex cycle judgment is based on the 2024–2026 capex trends of the four major cloud providers and general assumptions for server/data center depreciation lives (6 years for servers, 15 years for data centers).

## Value distribution across the internet industry chain (October 2026)

| Segment | Representative companies | Value / gross margin | Bargaining power | Alphabet's position |
|---|---|---|---|---|
| Chip design | Nvidia, Broadcom, AMD, Google TPU | Gross margin 55%–75% (NVIDIA highest) | Very strong, demand exceeds supply | In-house TPU: the only major buyer not dependent on Nvidia |
| Wafer foundry | TSMC, Samsung | Gross margin 50%–58% | Strong, monopoly in advanced processes | TPUs are manufactured by TSMC on a foundry basis; Google has no in-house capacity |
| Memory (HBM/DRAM) | SK hynix, Samsung, Micron | Gross margin 40%–60% (higher at cyclical peaks) | Strong; tight supply in 2026 | Buyers; costs squeezed by price increases |
| Power and data centers | Power companies, transformer manufacturers, cooling equipment suppliers | Gross margin 15%–35% | Medium- and long-term contracts lock in prices | Self-build plus long-term PPAs, 35% of capex |
| Cloud infrastructure | AWS, Azure, Google Cloud, OCI | Operating margin 25%–36% | Strong; scale determines unit cost | Google Cloud 36.2%, top tier |
| Model layer | OpenAI, Anthropic, Gemini, open-source models | From loss to marginal profit | Weak, homogeneous competition | Gemini 4 series + 1 billion app users |
| Distribution channel | Chrome, Android, iOS, WeChat | No separate charge | Extremely strong—determines who gets seen | About two-thirds for Chrome and about 70% for Android |
| Advertising and subscription monetization | Google, Meta, Amazon, Netflix | Operating margin 30%–45% | Strong, data and scale | Google services 40.7% |

> Gross margin/profit margin figures are industry-range estimates, not company-disclosed values; Alphabet's segment figures come from its Q3 2026 financial report segment data. The capex breakdown (servers and networking about 65%, data centers about 35%) follows the basis disclosed on the company's earnings call.

## Alphabet's USD 200 billion capex allocation across the supply chain (rough estimate)

| Where it goes | Share | Corresponding segment | Who took the profits |
|---|---|---|---|
| Servers and network equipment | About 65% (about RMB 130 billion) | Chip design, foundry, memory, optical modules | NVIDIA (partial), Broadcom, TSMC, SK hynix, optical module makers |
| Data centers and land | About 35% (about RMB 70 billion) | Power, construction, cooling, transformers | Power companies, engineering contractors, cooling equipment suppliers |
| The portion self-supplied by TPU | Not disclosed | Chip design (internalized) | Self (what you save is what you earn) |

> The proportions come from the company's description of the Q3 capex structure on its earnings call; absolute amounts are rough estimates based on full-year guidance of RMB 200 billion and are not a precise allocation. The company did not disclose the share of TPU self-supply.

## Upstream: this is where the money is made, and Alphabet is the only buyer with bargaining power

The bulk of AI capex flows upstream: chips, memory, networking equipment. Nvidia's gross margin exceeds 70%, TSMC's is 58%, and HBM is a seller's market in 2026. If a cloud provider can only buy from Nvidia, its cost structure is dictated by the upstream. That is why Microsoft, Meta and Amazon all design their own chips — not for performance, but for pricing power.

Alphabet was the earliest to do this along the chain: TPU has been used internally since 2015 and was already being sold externally in 2026. It does not need to fight Nvidia for allocation, nor accept Nvidia's pricing. That is extremely valuable in a year of tight capacity — and 2026 is such a year. The cost is that it bears tape-out risk itself and is constrained by TSMC's capacity.

## Midstream: the model layer is a meat grinder; the cloud layer collects the rent

The model layer is now the least profitable segment. OpenAI and Anthropic are both burning cash to buy share, and open-source models (the Llama family, the Qwen family, the DeepSeek family) have pushed closed-source model pricing down to near cost.Call volume of 32 billion tokens per minute sounds intimidating, but unit prices are falling fast — generating capacity quadruples while revenue only doubles, and that is exactly the point.

Cloud is different. Cloud sells "deterministic compute"; customers do not care which model you use, only whether it runs, how much it costs and whether it is stable.This is a rent-collection business: once built, marginal cost is low and customer switching costs are high.Google Cloud's 36.2% operating margin is the rent.So Alphabet's strategy is clear: the model layer defends the entry point and captures mindshare, while cloud makes the money.It does not matter that models are unprofitable, as long as they bring cloud demand.

## Downstream: advertisers are the ones who ultimately pay, and the first to run

Money across the entire chain ultimately comes from two pockets: advertisers and enterprise IT budgets. Advertisers pay for attention; enterprises pay for customer experience and efficiency. The change in 2026: ad budgets are migrating from "search keywords" to "AI conversations" — not fast, but the direction is clear. Q3 search +12% (expected +14%) is the first yellow light.

Enterprise IT budgets, meanwhile, are tilting toward AI infrastructure — the root cause of cloud revenue doubling. But the sustainability of this budget depends on whether enterprises can calculate ROI. If enterprises find in 2027 that AI projects have not delivered profit, cloud growth will fall faster than anyone's, because this spending is not locked in by long-term contracts (backlog covers only 13% of quarterly cloud revenue).

## Cycle position: end of the investment phase, eve of the return phase

Capex at the four major North American cloud providers has accelerated since 2024, and 2026 is a "USD 200 billion a year" level. What makes this cycle unusual: investment has grown at a high rate for three consecutive years, but depreciation cost recognition has only just begun. With servers depreciated over six years and data centers over fifteen, 2027 is the year with the highest year-on-year depreciation growth.

Divergence signals have already appeared in the industry: CoreWeave has retreated more than 70% from its high, Oracle's free cash flow will not turn positive until the second half of fiscal 2028, and Meta's Q3 free cash flow was -USD 2.12 billion. The market is starting to distinguish "compute backed by cash flow" from "compute backed by financing." Alphabet belongs to the former, but its cash flow is also thinning—this is the awkwardness of its position in the cycle: it is at the tail end of the investment phase and the eve of the return phase, with no buffer between the two.

## Value distribution is shifting: from the "monetization side" to the "compute side"

In 2020, 80% of the profit in this chain sat at the monetization end (advertising, e-commerce, subscriptions), while the compute end captured only equipment spend.What changed by 2026: the compute end began taking the excess profit — Nvidia gross margins above 70%, HBM in short supply, TSMC advanced nodes at full utilization.

This shift cuts both ways for Alphabet.The downside is rising costs: of the RMB 200 billion in capex, chips and memory account for the bulk, and pricing power sits upstream.The upside is that it now occupies that position itself: selling TPU externally turns it from "the party paying" into "the party collecting," even if the scale is still small.

To judge whether the shift persists, watch one metric: the growth rate of AI compute supply vs demand.Supply is constrained by TSMC capacity and power; demand is constrained by enterprise budgets. If supply catches up in 2027, profit will flow back from the compute end to the monetization end — and Alphabet will be better off then.

## Sources

- Alphabet Q3 2026 earnings and 10-Q (released after the US market close on October 28, 2026)
- Alphabet 2026Q3 earnings call transcript (2026/10/28)
- Zhitong Finance, "Alphabet Q3 Net Profit Falls 25%, Free Cash Flow Negative for Second Straight Quarter" (2026/10/29)
- Sina Finance, "Earnings Miss: Revenue and Profit Fall Short of Expectations, Google Falls as Much as 10% After Hours" (2026/10/28)
- US DOJ search antitrust case: liability finding in August 2024, remedies ruling in December 2025 (no Chrome/Android divestiture required), Google appeal in January 2026, choice-screen obligation effective April 2026
- EU: EUR 2.95 billion antitrust fine over ad tech in September 2025; EUR 890 million DMA fine in July 2026; Court of Justice of the European Union dismissed appeal against EUR 4.1 billion Android fine in July 2026
- Share price, 52-week range and market cap: NASDAQ daily chart (as of the October 30, 2026 close), total share capital 12.22 billion shares (A+B+C)
