# Broadcom（AVGO）— Moat Supplement

- Research date：2026/10/02
- Price：355.14 USD
- Market cap：About USD 1.69 trillion (rough estimate on 4.77 billion shares)

## Notes

The moat score is proprietary to this report and draws on the six dimensions of the AI Berkshire framework: technology, switching costs, scale, ecosystem, brand and licence. Competitor gross margins are approximate public figures — Nvidia around 70%, Marvell around 60%, MediaTek around 45% and Alchip around 30%. Broadcom does not disclose gross margin for its AI semiconductor segment; the 75% figure is company-wide Non-GAAP.

## Moat scorecard by item (out of 10)

| Dimension | Rating | Based on |
|---|---|---|
| Technology IP (SerDes/packaging) | 9/10 | In-house SerDes is the core of high-speed interconnect and determines whether chips can connect at all. Advanced packaging (3D, CoWoS) is developed jointly with TSMC. |
| Customer switching costs | 9/10 | Custom silicon takes two years to move from architecture to mass production, and switching suppliers means redoing two years of engineering; seven generations of TPU experience cannot be replicated |
| Scale and cost | 7/10 | Large wafer procurement volumes, yet no pricing power versus TSMC; when HBM prices rise, it can only accept them passively |
| Ecosystem and network effects | 6/10 | Ethernet is an open ecosystem: the more customers adopt it, the stronger the standard becomes. Unlike Nvidia's CUDA, however, it does not lock in developers |
| Brand | 5/10 | Well known among cloud vendors' engineering teams; in enterprise IT it leans on the VMware brand |
| Licences and policy | 4/10 | No licensing barrier; CFIUS blocked a deal once in 2018, so any major M&A must clear political hurdles |

> Our scoring approach is proprietary to this report and draws on the AI Berkshire moat framework. Technology IP and switching costs are central to the moat; brand and licences are not.

## Competitive landscape (September 2026)

| The company | Route | Scale/positioning | Gross margin (approx.) | Customer structure |
|---|---|---|---|---|
| Broadcom | XPU + Ethernet switching + software | AI semiconductors USD 16.7 billion/quarter | 75% | Six companies, deepest ties |
| NVIDIA | General-purpose GPU + NVLink + CUDA | Absolute leader in AI accelerators | Around 70% | Industry-wide, the broadest ecosystem |
| Marvell | Custom ASIC + optical interconnect | Custom business scale is about one-third that of Broadcom | Around 60% | Amazon and others; mid-sized customers stronger |
| MediaTek | TPU second supplier / custom ASIC | Just entered; TPU V80 is behind schedule | Around 45% | Google's secondary offering, the price challenger |
| Alchip | Design services (mainly NRE) | Project-based, small scale | Around 30% | SME customers, diversion effect |

> Gross margins are approximate, based on public reporting standards or industry estimates. Scale descriptions for Marvell, MediaTek and Alchip are qualitative judgments and have not been checked line by line against the latest fiscal quarter.

## Position in the value chain (1): where design meets connectivity

Broadcom occupies two positions in the chain: custom ASIC design and AI networking chips. These began as separate businesses; Broadcom has since bundled them.

Design runs on a project model: customers bring requirements, Broadcom handles architecture, tape-out and volume production, and charges NRE plus chip payments. Connectivity runs on a standard-product model: the Tomahawk switch chip family sells to anyone building clusters, priced per unit, with clear economies of scale.

The bundle's value lies in cross-selling and lock-in. A customer that buys XPU will most likely also use Broadcom for networking, because Broadcom tunes the SerDes and switch chip adaptation itself; conversely, once on Broadcom networking, switching suppliers for the next-generation XPU becomes harder. This two-way lock-in is its core advantage over Marvell.

## Industry-chain position (2): no bargaining power over upstream, partial bargaining power over downstream

Broadcom cannot bypass any of the three upstream bottlenecks: TSMC's 3nm and CoWoS capacity, and HBM from the three memory makers. All will be tight in 2026. What Broadcom can do is lock in capacity early, accept price increases and pass costs through into contracts.

Across its six downstream customers, Broadcom's pricing power hinges on whether a second supplier exists. Google has MediaTek, so Broadcom's pricing is under pressure; Anthropic has no second source, so Broadcom can hold price. Gross margin is therefore set not by industry position but by customer mix.

That is why 73% gross margin guidance is more worrying than 75%: it reflects not only a rising hardware mix but possibly customers beginning to bring in second suppliers.

## The most dangerous rival: not Marvell, but Nvidia

Marvell is a viable competitor, but its scale and IP depth are a tier behind, and near term it can win only mid-sized customers. MediaTek is the price challenger, entering as Google's second supplier; the threat is pricing pressure, not share loss.

Nvidia's threat is structural, and it has two weapons: the CUDA ecosystem, which locks in the vast majority of AI developers, and NVLink, which locks in the interconnect standard within clusters. If Nvidia prices inference-specific GPUs at only 20% above ASICs, customers' incentive to build custom ASICs halves.

More critically, Nvidia can fight a price war; Broadcom cannot. Nvidia's gross margin is around 70% and its scale is three times Broadcom's AI business, giving it room to push prices down to near Broadcom's cost line. Broadcom's AI business has only just started, its gross margin is already declining, and it has no room to cut prices.

## Can the moat be bypassed? All three assumptions warrant scrutiny

Assumption one: customers cannot build it themselves. This is the most solid — in-house silicon requires a 2,000-person team, five years, and a high probability of failure in the first generation. But it is weakening: Google's TPU team can now define architectures independently, and Broadcom's role has retreated from "co-design" to "implementation and mass production," eroding its value capture.

Assumption two: switching suppliers takes two years. Also solid, but "two years" can be compressed. If the customer brings in a second source from the first generation (as Google did with MediaTek), switching costs for the second generation are far lower.A second source is not a spare tire; it is a bargaining chip.

Assumption three: Ethernet will win scale-up interconnect. This is the least certain. Nvidia's NVLink still leads on performance and maturity, and Broadcom's Ethernet solution depends on open standards such as UALink to gain traction.If it loses the standards war, growth in the networking leg will halve.

## Supply-chain risk: three single points

First, TSMC's CoWoS capacity. XPU packaging depends on CoWoS, and that capacity is split between Nvidia, AMD and Broadcom, with Broadcom ranking behind Nvidia.

Second, HBM supply. HBM will be tight in 2026, and the three memory makers will prioritise Nvidia and cloud providers' in-house projects, leaving Broadcom's customers (such as Anthropic) to queue.

Third, tape-out windows at advanced nodes. Capacity at 3nm and 2nm is limited, so a one-quarter delay on a project means a one-quarter delay in revenue.None of these three factors is within Broadcom's control, which is why its gross margin is under pressure from both sides.

## Sources

- Broadcom FY2026 Q3 Results and Conference Call (2026/09/02)
- Yicai: Broadcom guides AI revenue to double for a second straight fiscal year, yet the stock closed lower (2026/09/03)
- Sinolink Securities reiterates Buy on Broadcom (2026/09/04)
- Understanding the AI Era: "Broadcom's AI Chip Orders Surge, So Why Does the Stock Keep Falling" (2026/09/16)
- Securities Star, "Revenue Surges 86%, AI Revenue Up 221%, So Why Did Broadcom Still Plunge After Hours" (2026/09/02)
- Share price vs. 52-week range: batchdata daily data (as of the October 2, 2026 close)
