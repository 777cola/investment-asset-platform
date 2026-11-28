# NVIDIA（NVDA）— Industry Chain Supplement

- Research date：2026/08/31
- Price：220.78 USD
- Market cap：Approximately USD 5.33 trillion (24.15 billion shares)

## Notes

Data sources: NVIDIA FY2027Q2 (2026/08/26), TSMC 2026Q2 (2026/07 earnings call), Micron FY26Q3 (2026/06), SK hynix 2026Q1, Zhongji Innolight 2026H1, Hon Hai 2026Q2, all publicly disclosed before the report date. Cloud capex of RMB 800 billion / RMB 1.3 trillion, NeoCloud 3GW→8GW, backlog of RMB 2 trillion, and AI venture funding of RMB 400 billion with 70% spent on compute are all as stated on NVIDIA's FY2027Q2 earnings call (2026/08/26). Chain gross margins use each company's overall gross margin only, with no segment adjustments.

## Value distribution across the AI compute supply chain (August 2026)

| Segment | Representative companies | Gross margin / value content | Bargaining power |
|---|---|---|---|
| Memory / HBM | SK hynix, Samsung, Micron | Micron 84.9% (FY26Q3), HBM supply falls short of demand | Very strong: seller pricing, smooth pass-through of price increases |
| Advanced process nodes / packaging | TSMC | 67.7% (2026Q2), CoWoS is the hard bottleneck | Strong: TSMC holds the power to allocate capacity |
| Equipment | ASML, Applied Materials | ASML gross margin around 52% | Strong: sole EUV supplier |
| GPU / rack-scale systems | <b>NVIDIA</b> | 75.0% (FY27Q2), value per GW USD 40 billion | Strongest: architecture + software + allocation rights |
| Optical modules / networking | Zhongji Innolight, Eoptolink | 46.6% (2026H1 optical modules) | Customer concentration, rapid capacity expansion, annual price declines |
| Server assembly | Hon Hai, Quanta, Wistron | Hon Hai 6.1% (2026Q2) | Weak: earns processing fees, trades scale for profit |
| Cloud / compute leasing | Microsoft, Amazon, CoreWeave, Nebius | Not uniformly disclosed; NeoCloud relies heavily on debt | Divergence: strong cloud providers, weak NeoCloud |
| Model / Application | OpenAI、Anthropic、xAI | Not disclosed; widespread losses | Weak: relying on financing to pay compute bills |

> Data source: the latest financial reports disclosed before each company's reporting date (2026/08/31) — Micron FY26Q3, TSMC 2026Q2, Zhongji Innolight 2026H1, Hon Hai 2026Q2, Nvidia FY27Q2. Cloud providers and model companies have no uniform gross-margin basis, so only qualitative judgments are given, without figures.

## Upstream: two companies hold the physical bottleneck

The biggest money in this AI cycle is not made by chipmakers but by memory suppliers and foundries.

Memory. Micron's FY26Q3 gross margin was 84.9% and net margin 68%, with quarterly revenue of USD 41.46 billion, up 346% year on year; SK hynix's 2026Q1 operating margin was 71.5%. These margins are outliers for manufacturing, driven by HBM supply falling short of demand: in early 2026 DRAM contract prices rose 60%–70% and NAND more than 100%, and institutions expect the shortage to persist into 2027. Nvidia's Q4 gross margin fell to 71%–72%, eaten away by this layer.

Foundry. TSMC's 2026Q2 gross margin was 67.7%, after-tax net profit TWD 706.56 billion, up 77.4% year on year, with HPC at 66% of revenue. CoWoS advanced packaging is the hard bottleneck, and 2026 capex was raised to USD 60–64 billion. TSMC's pricing power comes from having no second supplier, but it dares not raise prices to memory-like levels—because its customers' alternative is to not build at all.

What the two upstream players share: they do not need to know whether AI applications make money; as long as Nvidia's orders keep coming, they keep earning. This is the lowest-risk position in the entire chain.

## Midstream: Nvidia's position, and why it has started to move downstream

NVIDIA's role in the chain is a threefold overlay: architecture definition (how the next generation computes), system integration (GB300 / Vera Rubin racks), and software standards (CUDA). The result is that it captures the fattest gross-margin layer of the entire chain at 75.0%, and it collects customer cash upfront — 60-day payment terms are the exception, not the norm.

But this year it did something that violates its midstream identity: it moved downstream. A USD 500 billion financing platform (Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR), USD 93.9 billion in customer equity, USD 108.5 billion in credit guarantees, USD 36 billion in cloud-service purchase commitments. It went from "selling equipment to cloud providers" to "helping customers build clouds, then selling equipment to those clouds."

Why? The company's stated reason is that demand is real and what customers lack is balance sheet, not orders. That reasoning holds in a shortage cycle: when supply is limited, whoever can make the customer able to pay sells more goods. The cost is that it has moved downstream credit risk onto itself.

In one sentence: NVIDIA is the toll booth on this chain, and now it has started making loans to the cars driving through.

Another underappreciated battleground is power. The company itself says building an AI factory requires locking in land, power and shell space 2–3 years ahead; with SB Energy it has secured land, power and shell at the Portsmouth, Ohio campus, with a first phase planned at 4.25GW for OpenAI's use, and each generation of AI factory able to deploy roughly 1.5 million GPUs. Power has gone from "infrastructure" to "scarce resource," and NVIDIA has already started buying it directly — this is its second move upstream.

## Downstream: cloud providers profit, model companies burn cash, NeoClouds take on debt

The downstream splits into three layers, each with a completely different financial profile.

Hyperscalers (USD 48.7 billion revenue, 55% of the data center market). Microsoft, Amazon, Google, Meta and Oracle will spend a combined ~USD 800 billion in capex in 2026 and an estimated USD 1.3 trillion in 2027. Their compute can be sold to others (cloud revenue) and used in their own businesses (advertising, search, e-commerce), so returns on investment are the easiest to calculate. This layer is the ballast for the entire chain.

NeoCloud (part of ACIE, and the main increment within the USD 40.3 billion). CoreWeave, Nebius, Nscale, Firmus and YTL will go from 3GW installed at end-2025 to 8GW at end-2026. Their business model is "buy chips, rent them out," with thin balance sheets, expanding on private credit and project finance. This layer is the most fragile link in the entire chain, and the main counterparty Nvidia guarantees.

Model companies (OpenAI, Anthropic, xAI). Revenue is rising, but they are broadly loss-making and pay their compute bills with equity financing. Global AI venture funding exceeded USD 400 billion in the first half of 2026, with about 70% going to compute purchases — a ratio that shows most venture money turns into Nvidia revenue.

## Cycle position: third year of shortage, the most expensive year

The timeline is clear: Hopper ramps in 2024, Blackwell in 2025, Vera Rubin in 2026. Company guidance is that the shortage lasts at least through the end of FY2028, with all four constraints tight: wafers, HBM, power and data-center space.

Three demand-side numbers: capex at the five major cloud providers is about USD 800 billion in 2026 and USD 1.3 trillion in 2027; cloud industry backlog exceeds USD 2 trillion; NeoCloud installed capacity goes from 3GW to 8GW.

My view is "three years of buildout, two years of digestion": 2027 is the construction peak, 2028 enters digestion, and growth falling from 70% to below 20% is normal, not a collapse.The real risk is the financing structure — if more than half of the USD 1.3 trillion in 2027 comes from debt and equity financing, then the 2028 digestion period will see order declines and credit contraction at the same time, with the two amplifying each other.

The best indicator of where we are in the cycle is not Nvidia's orders but the cloud providers' capex/operating cash flow ratio. That ratio is now near 60%; historically, periods when it exceeded 80% (telecom in 2000, cloud computing in 2021) all peaked within two years.

## Sources

- NVIDIA FY2027 Q2 earnings release and business update (published after the US market close on 2026/08/26)
- Jiemian News, "NVIDIA FY2027 Q2: The AI Capex Cycle Has Not Peaked, but It Has Become More Expensive" (2026/08/27)
- AAStocks earnings snapshot: Q2 revenue USD 96.2 billion, adjusted EPS USD 2.22, gross margin 75% (2026/08/26)
- NVIDIA FY2027 Q1 results (2026/05/20): revenue USD 81.62 billion, data center USD 75.2 billion
- Share price vs 52-week range: daily data, as of the August 31, 2026 close (52-week high USD 235.74, low USD 165.17)
- Total shares 24.15 billion and market cap: financecharts.com and market data terminals (late August 2026)
