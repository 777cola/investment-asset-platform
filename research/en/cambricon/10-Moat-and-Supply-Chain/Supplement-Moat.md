# Cambricon（688256）— Moat Supplement

- Research date：2026/08/17
- Price：1156.0 CNY
- Market cap：Approximately RMB 727.1 billion

## Notes

The moat score is defined on a 10-point scale in this report, consistent with the 7/10 on the third of the six gates in the working papers and the 6/10 composite in moat_detail. Competitor data: Nvidia, market cap USD 4.86 trillion, P/E 30.7x (as of 2026/07/31); Hygon 8/10, market cap RMB 68.74 billion, dynamic P/E 250x, 2026H1 revenue RMB 9.099 billion, net profit RMB 1.798 billion, gross margin 55.21%; Moore Threads 8/11, market cap RMB 26.88 billion, 2026H1 revenue RMB 1.736 billion (+147.42%), gross profit RMB 989 million, net profit RMB −12 million; Huawei is unlisted. Cambricon: 2026H1 revenue RMB 5.996 billion, net profit RMB 2.311 billion, gross margin 55.25%, R&D RMB 702 million, inventory RMB 8.248 billion, prepayments RMB 2.914 billion.

## Moat scorecard, item by item (out of 10)

| Dimension | Rating | Based on |
|---|---|---|
| Licences and market access | 9/10 | The Entity List keeps competitors out. Since TSMC halted 7nm supply, advanced nodes can only be sourced through SMIC N+2, and few design companies can secure allocation. Domestic training chips now have just two scaled suppliers: Ascend and Cambricon. |
| Switching costs | 5/10 | BANG instruction set and Neuware already support DeepSeek, Qwen, Hunyuan, GLM, Kimi and MiniMax. Customer migration requires rewriting operators and retuning performance, though the depth falls short of CUDA's 15-year accumulation. |
| Brand | 6/10 | Known as the "first AI chip stock" and the first STAR Market company to reach a RMB 1 trillion market cap, it enjoys strong recognition in the capital markets; among engineers, however, CUDA remains the default |
| Cost advantage | 4/10 | Fabless with no captive capacity, it buys wafers and HBM at market prices and, at smaller scale than Huawei, holds no structural cost advantage |
| Network effects | 3/10 | The weakest link in the developer ecosystem: model adaptation vendors are proliferating, yet the toolchain, operator libraries and community remain far smaller than CUDA/CANN |
| Capacity assurance | 4/10 | Constrained by SMIC's advanced-node capacity and HBM allocation, the RMB 2.914 billion of prepayments and RMB 8.248 billion of inventory are the clearest evidence that Cambricon is buying certainty with cash |
| Comprehensive | 6/10 | One hard moat (access) plus one moderate moat (switching costs), with the other three weak; protects revenue, not valuation |

> This report sets the scoring framework, consistent with the moat assessment in the underlying work: 6/10 on the six-gate score of 7/10, composite 6/10. The basis draws on public information and the 2026 interim report.

## Industry-chain position (1): the only "second choice" on the chain

On 15 December 2022, the US BIS added Cambricon to the Entity List. At the time it looked catastrophic: TSMC halted 7nm supply, advanced equipment became unbuyable and overseas customers drained away, with overseas revenue staying below 1% of the total in both 2023 and 2024. Three years on, however, the move has instead cemented the landscape: new entrants likewise cannot access TSMC, incumbents likewise must rely on SMIC, and whoever secures allocation first holds the position.

Hence today's division of labour. Huawei's Ascend prioritises in-house use and builds systems, while Cambricon serves as the "second supplier", selling to cloud vendors and intelligent computing centres unwilling to be locked into a single vendor. This position does not require winning the technology war — only staying present. That is its hardest logic, and the confidence behind its willingness to write "RMB 100 billion over three years" into its assessment targets.

## Industry-chain position (part two): a weak customer on the manufacturing side

Upstream, it gets no special treatment. Wafers have to be queued for (RMB 2.914 billion of prepayments), HBM has to be allocated (the 690 runs on HBM3) and advanced packaging capacity has to be secured (dual-die requires 2.5D). Its scale is a fraction of Huawei's, so it loses the fight for capacity.

Hence the paradox: the more revenue grows, the worse cash flow looks. In 2026H1 revenue rose 108%, operating cash flow fell 65.83% and inventory swelled by RMB 3.304 billion. The moat protects revenue but not cash, because upstream the moat works in reverse.

## Item-by-item scoring: one strong, one moderate, three weak

Licensing and market access: 9 points — the only category close to a perfect score, and the barrier here is institutional rather than technical: the Entity List, export controls and SMIC allocation together create a "licence market" whose value holds as long as US-China tech competition does not ease. Switching costs: 5 points. Software-stack adaptation is real — Cambricon has completed adaptation for mainstream models including DeepSeek, Qwen, Hunyuan, GLM, Kimi and MiniMax, and migrating customers must rewrite operators and retune performance. But CUDA's advantage lies not in "whether it runs" but in "how well it runs, how complete the documentation is, how easy it is to hire for," and Cambricon trails on all three. Brand: 6 points; cost: 4 points; network effects: 3 points. Brand is strong in capital markets but middling among engineers; on cost, Fabless confers no structural advantage; network effects barely exist — the most fundamental gap versus Nvidia. The endgame moat for a chip company is ecosystem, and ecosystem is its weakest link.

## Competitive comparison: where it competes

Taken together, the five form a clear hierarchy: Nvidia sets the global standard (USD 4.86 trillion market cap, 30.7x P/E, 70%+ gross margin); Huawei Ascend is the domestic stack (unlisted, capacity prioritised for internal use); Hygon is the two-track player with an installed base (RMB 687.4 billion market cap, 2026H1 revenue RMB 9.099 billion, net profit RMB 1.798 billion); Moore Threads is the newly listed, high-valuation loss-maker (RMB 268.8 billion market cap, revenue RMB 1.736 billion, net profit RMB -0.012 billion); and Cambricon is the "second supplier" (RMB 726.3 billion market cap, revenue RMB 5.996 billion, net profit RMB 2.311 billion, 218x P/E).

A counterintuitive conclusion: of the three domestic players (Cambricon, Hygon, Moore Threads), Cambricon alone combines scale, profitability and pure AI leverage.Hygon's net margin is 22.69% and Moore Threads remains loss-making, against 38.54% at Cambricon. That is why it commands a 218x P/E — not because it is the strongest, but because it is the "purest".

## The most dangerous rival: Huawei Ascend, and the RMB 8.2 billion sitting in inventory

Huawei Ascend. Not because its technology is stronger, but because it has capacity, cloud and policy resources, and can sell an "integrated solution" rather than a "single card." Customers buying Ascend are buying certainty (availability, service, endorsement); customers buying Cambricon are buying the reassurance of a second supplier — these two types of demand differ by an order of magnitude. Once Ascend's 950 series opens up capacity, Cambricon's "uniqueness" is immediately discounted.The second rival is not a company but inventory. RMB 8.248 billion of inventory, against RMB 767 million (8.5%) already provisioned; with the Siyuan 690 entering mass production in early 2026, how long the 590 inventory can keep selling determines whether the provisions are sufficient. Every product iteration means paying for inventory out of profit — a financial time bomb more direct than any competitor.

The third is customer in-house development. ByteDance and Alibaba are both building their own chips, and once that development matures, the share going to general-purpose procurement will be squeezed. For Cambricon, "customers getting bigger" is not necessarily a good thing.

## Sources

- Cambricon 2026 Interim Report (disclosed August 7, 2026, SSE)
- Sina Finance/China Securities Network: Cambricon 1H revenue RMB 5.996 billion, net profit RMB 2.311 billion (2026/08/07)
- Guosheng Securities, "Cambricon: 26H1 results accelerate; supply ramp supports order delivery" (2026/08/11)
- 21st Century Business Herald: Cambricon sets RMB 100 billion three-year revenue target in equity incentive assessment (2026/07/28)
- East Money: shares fell 6.33% on the first trading day after the interim report, wiping about RMB 48 billion off market cap (2026/08/10)
- Share price, 52-week range and market cap: batchdata quote snapshot (2026/08/17 close); total share capital 629 million shares
