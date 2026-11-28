# CoreWeave（CRWV）— Industry Chain Supplement

- Research date：2026/11/20
- Price：39.51 USD
- Market cap：Approximately USD 22 billion

## Notes

The value distribution ratios are industry-level estimates (GPU and complete systems account for 70%–75% of cabinet cost), not company disclosures. The 4.6GW / 1.7GW figures were disclosed in 2026Q3; the full-year capex guidance of USD 37–39 billion likewise. NVIDIA's FY2027Q3 data comes from its 2026/11/17 earnings report.

## Value distribution across the AI compute supply chain (November 2026)

| Segment | Representative companies | Value / gross margin | Bargaining power |
|---|---|---|---|
| GPU and accelerator cards | NVIDIA, AMD | NVIDIA gross margin above 70%, FY27Q3 revenue RMB 115.8 billion, +103% | Very strong (ecosystem + capacity) |
| HBM and memory | SK hynix, Samsung, Micron | 2026 contract prices surge, HBM supply to stay short through 2027 | Strong (three-player oligopoly) |
| Networking and optical modules | Broadcom, Zhongji Innolight | 800G/1.6T optical module gross margin 30%–40% | Moderately strong (fast technology iteration) |
| Power equipment and liquid cooling | Vertiv, Delta, gas turbine manufacturers | Transformer and grid-connection equipment lead times: 2–3 years | Strong (supply bottleneck) |
| Data center construction and operations (neocloud) | CoreWeave、Nebius、Crusoe、IREN | Adjusted EBITDA 62%, GAAP operating margin 5.7% | Weak (product homogeneity) |
| Hyperscaler self-build | Microsoft, Amazon, Google, Oracle | Cost of capital 4%–5%, captive customers and grid | Strong (buy-side + in-house capability) |
| AI models and applications | OpenAI、Anthropic、Meta、xAI | Paying cash for compute, revenue model still unproven | Medium (multiple suppliers available) |

> Gross margins and value figures are public-report magnitudes, not precise financial-statement numbers; NVIDIA's FY2027Q3 revenue of USD 115.8 billion, up 103% year on year, was disclosed on 2026/11/17.

## Value distribution: where in the chain the money is made

The cost structure of a GB300 rack breaks down roughly as: GPU and full system 70%–75%, networking and optical modules 8%–10%, power and cooling 8%–10%, facility and land 5%–8%. CoreWeave earns the operating spread on the last 20%–30%, yet bears 100% of the capex and debt for it.

That is why its financials look the way they do: revenue of RMB 3.661 billion, adjusted EBITDA of RMB 2.256 billion (62%), GAAP operating income of RMB 207 million (5.7%). The 62% is the cash portion of the "operating spread"; the 5.7% is the true residual after equipment depreciation. Value is captured upstream along the chain; what CoreWeave gets is an operating fee.

## CoreWeave's true position in the chain

It plays three roles at once: one of Nvidia's largest customers (GPU allocation priority is its core asset), an outsourced supplier to hyperscalers (Microsoft and Meta outsource peak demand to it), and a direct supplier to AI labs (the USD 6.5 billion OpenAI contract). In none of these roles does it own the end-customer relationship.

Most awkward is its substitutability in the chain. Upstream can switch buyers (Nvidia's GPUs sell themselves), downstream can switch suppliers (Nebius, Crusoe and IREN offer identical rack specifications), and only it cannot switch upstream or downstream. This is the classic "stuck in the middle" position, with weak bargaining power at both ends.

## Cycle position: from chip shortage to power shortage, middlemen lose out

The bottleneck in 2024–2025 was GPUs: whoever secured the cards made money, which gave neoclouds scarce-resource pricing power. In 2026 the bottleneck shifts to power and grid interconnection: of 4.6GW of contracted power, only 1.7GW is operating, and the remaining 2.9GW is stuck on transformers, gas turbines and grid-connection approvals.

The direct consequence of the bottleneck shifting is that bargaining power shifts. Power resources are allocated by local governments and grid companies, and hyperscalers compete for the same land with larger investment amounts and longer tax commitments. When the scarce resource shifts from "cards" to "power," CoreWeave's first-mover advantage is erased—because its rivals can bid 10x its capacity on power.

## Cash-flow characteristics by segment: who fronts the money

Line up the value chain by "who pays first" and the answer is clear. Upstream gets prepayment or short payment terms: Nvidia collects on delivery of its cards, and the three HBM makers take prepayments and long-term contracts; downstream pays later: AI labs pay by usage, and customers like Meta get 30–60 day terms; the middle front-loads the cash: CoreWeave spends first to buy cards and build data centers, then collects rent monthly, with a 3–5 year payback period.

Cash flow along this chain runs "from the middle into the upstream, and on credit to the downstream." It bears both capex risk and customer credit risk, yet earns only a 5.7% operating margin. For any intermediary to make money in this position, there are only two paths: secure an extremely low cost of capital (Microsoft at 4.85%, versus its 7.9%), or lock in extremely long contracts at fixed prices (its contracts are maximum commitment amounts, not floors). With neither, the position is condemned to thin margins.

## Cycle view: mid-expansion, before the shakeout

Three signals simultaneously point to mid-cycle rather than a bottom: ① leading players are still levering up to expand capacity (CoreWeave's full-year capex guidance of USD 37–39 billion); ② prices are still rising (a 25% price increase in July); ③ customers are tightening outsourcing (Microsoft reviewing USD 8 billion of external compute).

Historically this combination usually means "the last stretch of prosperity at the top" — prices are still rising, but the smartest buyers have already begun to withdraw. A true bottom requires three conditions: capex peaking, prices falling, and weaker players being flushed out. None is present now. Implication for CoreWeave: it must repay USD 13.4 billion of maturing debt during a downturn.

## Sources

- CoreWeave Q3 2026 earnings and 10-Q (released after market close on 2026/11/10)
- Global Data Center Hub "CoreWeave's $2.1B in Customer Advances Topped Its Operating Cash Flow" (2026/11/18, line-by-line breakdown of the 10-Q)
- CoreWeave 2026Q3 10-Q (filed November 10, 2026; customer concentration, debt maturities and lease liability details)
- Ainvest《CoreWeave Raised Its Forecast. The Market Was Never Worried About Demand.》（2026/11/09）
- Cailianshe "Huang Jen-hsun 'Falls From Grace': Who Gets Hurt?" (2026/11/17, bonds enter distress territory)
- China Securities Network, "Sudden Negative News: Nvidia Falls Over 14%" (2026/11/20, Nasdaq -5.28%, Philadelphia Semiconductor Index -10.73%)
- stockanalysis.com/stocks/crwv/statistics/ (556.13 million shares outstanding, D/E 16.45, mid-November data)
- Share price vs 52-week range: batchdata B9.json (close of USD 39.51 on 2026/11/20)
