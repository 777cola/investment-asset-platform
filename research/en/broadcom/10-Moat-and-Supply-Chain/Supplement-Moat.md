# Broadcom（AVGO）— Moat Supplement

- Research date：2026/10/02
- Price：355.14 USD
- Market cap：Approximately USD 1.69 trillion (rough estimate based on 4.77 billion shares)

## Notes

The moat score is proprietary to this report and draws on the six dimensions of the AI Berkshire framework (technology, switching costs, scale, ecosystem, brand, licence). Competitor gross margins are approximate public figures: Nvidia around 70%, Marvell around 60%, MediaTek around 45%, Alchip around 30%. Broadcom does not disclose gross margin for its AI semiconductor segment; 75% is the company-wide Non-GAAP figure.

## Moat scorecard by item (out of 10)

| Dimension | Rating | Based on |
|---|---|---|
| Technology IP (SerDes/packaging) | 9/10 | In-house SerDes is the core of high-speed interconnect and determines whether chips can connect at all; advanced packaging (3D, CoWoS) is developed jointly with TSMC |
| Customer switching costs | 9/10 | Custom chips take two years from architecture to mass production; switching suppliers means redoing two years of engineering; seven generations of TPU experience cannot be replicated |
| Scale and cost | 7/10 | Large wafer procurement volume, but no pricing power relative to TSMC; when HBM prices rise, it can only accept them passively |
| Ecosystem and network effects | 6/10 | The Ethernet ecosystem is open: the more customers, the stronger the standard; but unlike Nvidia's CUDA, it does not lock in developers |
| Brand | 5/10 | Well known in cloud vendor technology circles; in enterprise IT circles it relies on the VMware brand |
| Licences and policy | 4/10 | No licensing barrier; CFIUS blocked it once in 2018, so major M&A must clear political hurdles |

> The scoring approach is proprietary to this report and draws on the AI Berkshire moat framework. Technology IP and switching costs are central; brand and licenses are not the sources of this company's moat.

## Competitive landscape (September 2026)

| The company | Route | Scale/positioning | Gross margin (approx.) | Customer structure |
|---|---|---|---|---|
| Broadcom | XPU + Ethernet switching + software | AI semiconductors USD 16.7 billion/quarter | 75% | Six companies, deepest ties |
| NVIDIA | General-purpose GPU + NVLink + CUDA | Absolute leader in AI accelerators | Around 70% | Industry-wide, the broadest ecosystem |
| Marvell | Custom ASIC + optical interconnect | Custom business scale is about one-third that of Broadcom | Around 60% | Amazon and others; mid-sized customers stronger |
| MediaTek | TPU second supplier / custom ASIC | Just entered; TPU V80 is behind schedule | Around 45% | Google's secondary offering, the price challenger |
| Alchip | Design services (mainly NRE) | Project-based, small scale | Around 30% | SME customers, diversion effect |

> Gross margins are approximate figures under public reporting standards or industry estimates; the scale descriptions for Marvell, MediaTek and Alchip are qualitative judgments and have not been checked line by line against the latest fiscal quarter.

## Position in the value chain (1): where design meets connectivity

Broadcom occupies two positions in the chain: custom ASIC design and AI networking chips. These were originally separate businesses, and Broadcom has turned them into a bundle.

The design segment runs on a project model: customers bring requirements, Broadcom handles architecture, tape-out and volume production, and charges NRE plus chip payments. The connectivity segment runs on a standard-product model: the Tomahawk switch chip family sells to anyone building clusters, priced per unit, with clear economies of scale.

The value of the bundle lies in cross-selling and lock-in. A customer that buys XPU will most likely also use Broadcom for networking, because Broadcom tunes the SerDes and switch chip adaptation itself; conversely, once on Broadcom networking, switching suppliers for the next-generation XPU becomes harder. This two-way lock-in is its core advantage over Marvell.

## Industry-chain position (2): no bargaining power over upstream, partial bargaining power over downstream

Broadcom cannot bypass any of the three upstream bottlenecks: TSMC's 3nm and CoWoS, and HBM from the three memory makers. All of these will be tight in 2026. What Broadcom can do is lock in capacity early, accept price increases, and pass costs through into contracts.

Across its six downstream customers, Broadcom's pricing power depends on whether a second supplier exists. Google has MediaTek, so Broadcom's pricing is under pressure; Anthropic has no second supplier, so Broadcom can hold price. Its gross margin is therefore not determined by industry position but by customer mix.

This explains why the 73% gross margin guidance is more worrying than 75%: it reflects not only a rising hardware mix but possibly customers beginning to bring in second suppliers.

## The most dangerous rival: not Marvell, but Nvidia

Marvell is a viable competitor, but its scale and IP depth are a tier behind; near term it can only win mid-sized customers. MediaTek is the price challenger, entering via its role as Google's second supplier; the threat is losing pricing, not losing share.

Nvidia's threat is structural. It has two weapons: first, the CUDA ecosystem, which locks in the vast majority of AI developers; second, NVLink, which locks in the interconnect standard within clusters. If Nvidia prices inference-specific GPUs at only 20% above ASICs, customers' incentive to build custom ASICs halves.

More critically, Nvidia can fight a price war; Broadcom cannot. Nvidia's gross margin is around 70% and its scale is three times Broadcom's AI business, giving it the room to push prices down to near Broadcom's cost line; Broadcom's AI business has only just started, its gross margin is already declining, and it has no room to cut prices.

## Can the moat be bypassed: all three assumptions deserve scrutiny

Assumption one: customers cannot build it themselves. This is the most solid — in-house silicon requires a 2,000-person team, five years, and a high probability of failure in the first generation. But it is weakening: Google's TPU team can now define architectures independently, and Broadcom's role has retreated from "co-design" to "implementation and mass production," with its value capture declining.

Assumption two: switching suppliers takes two years. This is also solid, but "two years" can be compressed. If the customer brings in a second source from the first generation (as Google did with MediaTek), switching costs for the second generation are far lower.A second source is not a spare tire; it is a bargaining chip.

Assumption three: Ethernet will win scale-up interconnect. This is the least certain. Nvidia's NVLink still leads on performance and maturity, and Broadcom's Ethernet solution depends on open standards such as UALink to gain traction.If it loses the standards war, growth in the networking leg will halve.

## Supply-chain risk: three single points

First, TSMC's CoWoS capacity. XPU packaging depends on CoWoS, and capacity is split among Nvidia, AMD and Broadcom, with Broadcom ranking behind Nvidia.

Second, HBM supply. HBM will be in short supply in 2026, and the three memory makers will prioritize Nvidia and cloud providers' in-house projects, leaving Broadcom's customers (such as Anthropic) to queue.

Third, tape-out windows for advanced nodes. Capacity at 3nm and 2nm is limited; a one-quarter delay for a project means a one-quarter delay in revenue.None of these three factors is within Broadcom's control, which is why its gross margin is under pressure from both sides.

## Sources

- Broadcom FY2026 Q3 Earnings Report and Conference Call (2026/09/02)
- Yicai: Broadcom expects AI revenue to double for two consecutive fiscal years, but shares still fell at the close (2026/09/03)
- Sinolink Securities "Maintain Buy Rating on Broadcom" (2026/09/04)
- Understanding the AI Era: "Broadcom's AI Chip Orders Surge, So Why Does the Stock Keep Falling" (2026/09/16)
- Securities Star, "Revenue Surges 86%, AI Revenue Up 221%, So Why Did Broadcom Still Plunge After Hours" (2026/09/02)
- Share price vs. 52-week range: batchdata daily data (as of the October 2, 2026 close)
