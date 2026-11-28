# NVIDIA（NVDA）— Moat Supplement

- Research date：2026/08/31
- Price：220.78 USD
- Market cap：Approximately USD 5.33 trillion (24.15 billion shares)

## Notes

Moat scores are proprietary to this report; weights are shown in the table notes. Competitor data: AMD 2026Q2 data center USD 6.718 billion (August 2026 earnings), Cambricon 2026H1 revenue RMB 5.996 billion (August 2026 interim report), NVIDIA FY2027Q2 data center USD 89.023 billion. The Groq transaction of approximately USD 20 billion is a publicly disclosed asset and technology licensing transaction, with USD 2.944 billion paid in cash this quarter (see financing activities in the cash flow statement).

## Moat scorecard, item by item (10-point scale)

| Dimension | Rating | Based on | Boundary |
|---|---|---|---|
| Brand | 9/10 | "AI compute" equals Nvidia: customers specify it by name, and OEMs pride themselves on securing an allocation | Brands cannot stop customers from building in-house |
| Cost | 7/10 | Scale brings procurement advantages, but HBM and foundry costs are set upstream; Q4 gross margin fell to 71%–72% | Cost advantage is being eroded by rising memory prices |
| Network effects | 10/10 | CUDA has millions of developers, and models, libraries and tutorials all treat Nvidia as the default platform | Open-source alternatives (Triton, ROCm) are slowly building momentum |
| Switching costs | 10/10 | Switching platforms means rewriting code, retraining teams and redoing performance tuning — a process measured in years | Switching costs in inference scenarios are far lower than in training |
| Licence / capacity | 8/10 | USD 279 billion locks in CoWoS and HBM capacity; export licences instead capped China revenue | Capacity advantages can be bought with money, and money is not an exclusive resource |

> The score is proprietary to this report. Weights: brand 15%, cost 15%, network effects 25%, switching costs 30%, licences and capacity 15%; weighted score 8.9. Sources: FY2027Q2 results and earnings call.

## Competitive landscape (August 2026)

| Players | Route | Current scale | Threat level |
|---|---|---|---|
| NVIDIA | GPU + rack-scale systems + CUDA + LPU | Data centers dominate the market at USD 89 billion in a single quarter | — |
| AMD | GPU + open software stack (ROCm) | 2026Q2 data center USD 6.718 billion, +107% YoY, about 1/13 of Nvidia's | Chasing specs, ecosystem is the weak spot |
| Broadcom / Google TPU | Custom ASIC (XPU) | AI semiconductors grow triple digits YoY, mainly for captive use | High (structural) |
| Amazon Trainium / OpenAI Jalapeño | Hyperscaler in-house development | In-house scale undisclosed; clear unit cost advantage in inference | High (long-term) |
| Huawei Ascend | Domestic substitution | Constrained by process node limitations, it is the only option in the Chinese market | China (regional) |
| Cambricon | Domestic ASICs | 2026H1 revenue RMB 5.996 billion, +108% YoY, PE about 218x | Low (small scale) |

> AMD data is taken from its 2026Q2 financial report; Cambricon from its 2026 interim report; Broadcom and cloud providers' in-house chips lack a unified basis, so only roadmap and order-of-magnitude judgments are given. Nvidia data center USD 89.023 billion / AMD USD 6.718 billion = 13.3x.

## Position in the supply chain: three cards plus one new card

Upstream are TSMC (advanced process + CoWoS), SK hynix and Samsung (HBM), optical modules and power supplies; midstream are GPU design, NVLink and Spectrum-6 networking, rack-scale systems (GB300 / Vera Rubin), and the CUDA software stack; downstream are the four hyperscalers, NeoClouds, model companies, sovereign AI, and industrial and enterprise customers.

Three established cards: **architecture definition** (it sets the form of each generation), **capacity allocation** (USD 279 billion locks up HBM and packaging, leaving others unable to get supply), and **software standards** (CUDA is the default language for AI developers).

One new card is capital: a USD 500 billion financing platform, USD 93.9 billion in customer equity, and USD 108.5 billion in credit guarantees. This card lets it create demand, and also forces it to bear demand failure. **The first three cards are the moat; the fourth card is leverage.**

Add two territories now growing: networking (Spectrum-X Ethernet +260% year over year; the company calls itself the world's largest and fastest-growing networking vendor) and CPU (Vera has entered volume production within a single quarter, Grace topped USD 5 billion in revenue over the past 12 months, and the company expects server CPU revenue to more than double by FY2028, corresponding to a market of about USD 20 billion). **The significance of these two territories: it sells not just "the core of compute" but "the connection and scheduling of compute" — the more it sells, the harder it is for customers to replace it wholesale.**

## Why these three moats are hard to breach: a concrete comparison

AMD makes the clearest comparison. AMD's MI series tracks Nvidia closely on paper specs, with 2026Q2 data center revenue of USD 6.718 billion, up 107% year over year — the same growth rate as Nvidia, on one-thirteenth the scale. **Three years of chasing, the same growth rate, no share shift — that is the price of the moat.**

The reason is not hardware; it lies in three places. First, the CUDA ecosystem: customers switching platforms must rewrite code, retrain teams and redo performance tuning, a cycle measured in years. Second, rack-scale systems: Vera Rubin is not a single GPU but a combination of Vera CPU + Rubin GPU + NVLink + Spectrum-6 + the full system, and a competitor must build an entire system to beat it. Third, capacity: the USD 279 billion in commitments let Nvidia secure the most CoWoS and HBM in a shortage cycle; others cannot get the supply, and no matter how good their specs, they cannot deliver.

A concrete example: for a model company to migrate its training cluster from CUDA to another platform, it typically must pause for two months to rewrite operators and tune performance. The cost of two months of model iteration far exceeds the hardware price difference saved. **That is the scale of switching costs — not a one-time expense, but an opportunity cost.**

But note what the moat cannot protect against. **It cannot protect against "customers not buying."** If cloud capex stalls in 2027, or a NeoCloud default triggers a chain of contraction, Nvidia's technical advantage is useless — its capacity commitments become inventory, and its guarantees become bad debt.

## The most dangerous rival: not AMD, but customers' balance sheets

The first layer of danger is custom ASICs. Broadcom's XPU, Google's TPU, Amazon's Trainium, OpenAI's Jalapeño — the logic is not that they are more powerful than GPUs, but that they are cheaper: for inference on a single model, unit cost can be a fraction of the GPU's. Nvidia's response is to bring Groq in-house (an asset deal of roughly USD 20 billion; Groq 3 LPX is already in mass production, and the company says tokens per second output is nearly 4x that of competitors), fighting specialized chips with specialized chips. **That response is smart, but it also concedes one thing: a general-purpose GPU is not the optimal solution for every scenario.**

The second layer of danger is the customers it created itself. The company says that next year, AI lab business requiring support from Nvidia's balance sheet will account for about a quarter of total business; the counterparties behind the USD 108.5 billion guarantee have not been disclosed. **If these customers cannot raise money in 2027, Nvidia's problem will not be "can't sell" but "can't collect."**

The third layer of danger is regulation. A USD 500 billion financing platform + USD 93.9 billion in equity investments + USD 108.5 billion in guarantees — put these three together, and any antitrust authority will ask whether this is vertical-integration-style market lock-in. **This risk is not yet priced in 2026, because there is no precedent for it.**

Of the three layers, the first is a chronic condition (three to five years), the second is an acute condition (it can flare up within a single quarter), and the third is policy risk (unpredictable). **What truly needs daily monitoring is the second layer.**

## Sources

- NVIDIA FY2027 Q2 earnings release and business update (published after the US market close on 2026/08/26)
- Jiemian News, "NVIDIA FY2027 Q2: The AI Capex Cycle Has Not Peaked, but It Has Become More Expensive" (2026/08/27)
- AAStocks earnings snapshot: Q2 revenue USD 96.2 billion, adjusted EPS USD 2.22, gross margin 75% (2026/08/26)
- NVIDIA FY2027 Q1 results (2026/05/20): revenue USD 81.62 billion, data center USD 75.2 billion
- Share price vs 52-week range: daily data, as of the August 31, 2026 close (52-week high USD 235.74, low USD 165.17)
- Total shares 24.15 billion and market cap: financecharts.com and market data terminals (late August 2026)
