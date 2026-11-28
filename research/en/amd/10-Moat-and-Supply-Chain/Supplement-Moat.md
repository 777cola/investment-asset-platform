# AMD（AMD）— Moat Supplement

- Research date：2026/08/07
- Price：483.36 USD
- Market cap：About USD 802 billion

## Notes

The moat score is a proprietary standard for this report (six items: licensing/cost/technology/software/brand/switching costs), consistent with the five-item scoring in the underlying moat_detail workpaper (x86 9, chiplet 8, process node 7, software 5, brand 5); this table adds a "customer switching cost" item. Competitor data sources: NVIDIA FY2027Q1 results, AMD 2026Q2 results, Broadcom FY26Q3 results (September 2026, after the report date, for competitive-landscape reference only), and public reports.

## Moat scorecard by item (out of 10)

| Dimension | Rating | Based on | Trend |
|---|---|---|---|
| License (x86 authorization) | 9/10 | Only Intel and AMD globally, unchallenged for forty years; AMD also holds the x86-64 extension license | Stable |
| Cost (chiplet) | 8/10 | Compute die uses N3 and IO die uses N6, cutting cost per unit area by 20%–30% versus a monolithic design, with higher yields | Narrowing advantage |
| Technology (process node access) | 7/10 | TSMC's top-tier customer, but N2 and CoWoS priority goes to Apple and Nvidia | Stable |
| Software ecosystem (ROCm) | 5/10 | PyTorch/vLLM backbones run, but operator coverage and tuning tools trail CUDA by two generations | Slowly improving |
| Brand and developer mindshare | 5/10 | Developers have in mind "the cheaper option," not "the better option" | Stable |
| Customer switching costs | 5/10 | Migrating from CUDA to ROCm takes 2–6 person-months of engineering work; large clusters are willing to pay, small customers are not | Stable |

> The score is the report's own, based on public product materials, developer surveys and customer disclosures. Switching-cost estimates come from public migration cases (Microsoft's and Meta's ROCm porting projects) and are not precise measurements.

## Competitive landscape (mid-2026)

| The company | Data center revenue | Gross margin | Niche | The threat to AMD |
|---|---|---|---|---|
| NVIDIA | USD 75.2 billion (FY27Q1, including networking) | 74.9% | Standard setter, CUDA + full rack | Very high: pricing and capacity under dual pressure |
| AMD | USD 6.7 billion (2026Q2) | 56.0% | Second supplier + value for money | — |
| Broadcom | AI semiconductors USD 16.7 billion (FY26Q3) | Approximately 75% | Cloud providers' custom ASIC partners | Mid-to-high end: capture inference growth directly |
| Intel | Server CPU share eroding | Approximately 35% | Traditional CPU leader | Low: CPU side has little room to counterattack |
| Google | TPU for internal use | Not applicable | In-house development replaces procurement | Reduce purchased GPUs |

> NVIDIA figures are for FY2027Q1 (quarter ending April 2026) and include networking; AMD is for 2026Q2; Broadcom is for FY26Q3 (to be reported in September 2026, after the date of this report, and is included only as an industry-structure reference, not as a basis for this report's conclusions), with its AI semiconductor figures including XPU. Intel and Google figures are estimates based on publicly reported figures.

## Position in the supply chain: why a second supplier is a "position", not a "state"

Being a second source is an institutional role in the semiconductor industry, not a temporary state. Cloud providers' procurement manuals state that "critical components require at least two suppliers," a rule locked in after the 2018 memory price surge and the 2021 chip shortage. AMD does not need to win; it only needs to be "present."

The economics of this position are clear: 15%–30% share, pricing 20%–30% below the primary supplier, gross margin 15–20 points lower, but return on capital is not low—because it does not bear the cost of defining the ecosystem (CUDA's twenty-year investment, developer relations, framework adaptation). **The second source is a "low-risk, medium-return" business, not "high-risk, high-return."**

The only path for AMD to change this position is the Helios rack. A full rack is a "systems business"—customers buy delivered compute, not components. If Helios can capture 20% of rack share, AMD shifts from "chip second source" to "systems second source," with gross margin reaching 60%. **This is the one thing most worth tracking in 2027.**

## The most dangerous rival: not Nvidia, but cloud providers' in-house chips

Nvidia's threat is out in the open: capacity, pricing, ecosystem. But AMD was never in the training market, so how much Nvidia wins matters little to it. What actually eats AMD's incremental share is cloud providers' in-house ASICs—Google TPU v7, Amazon Trainium 3, Microsoft Maia 200, Meta MTIA 2.

Why them? Because the barrier to entry on the inference side is lowest: fixed model architectures, a limited operator set, no need for CUDA-style generality. Cloud providers run their own teams to build ASICs at a unit cost 30%–40% below buying AMD, and they don't have to hand over gross margin. **In 2026, cloud in-house chips will hold about 22% of the AI accelerator market, possibly 30% by 2027—most of those 8 points come straight out of AMD's target share.**

Nvidia's price cuts are only the second-biggest danger. If Rubin's capacity fills in the first half of 2027, Nvidia has the incentive to use price to block second sources: at 74.9% gross margin, a 15-point cut still leaves 60%, while AMD has only 56% and cannot follow. **The result of a price war is not AMD losing share, it is AMD losing gross margin.**

Why does software score only 5 rather than 3? Because ROCm 7 already runs the mainstream paths: native PyTorch 2.7 support, an official vLLM backend, and 80% of models on Hugging Face load directly. ROCm could not do that three years ago. **A 5 means "usable," not "good"—customers migrating must change code, but not rewrite it.**

Customer relationships are another hidden barrier. AMD's work with Microsoft began with MI300X in 2023 and extends to joint tuning of Helios in 2026, with engineering teams on site; its 6GW agreement with OpenAI includes joint-design clauses, letting AMD customize optimizations for the other side's models. Such "co-development" relationships are harder to replace than plain supply contracts—**but they bind projects, not companies; when the project ends, the relationship fades.**

The Helios versus Nvidia NVL72 comparison needs to be clear. Helios is 72 MI450 chips, 31TB HBM4, liquid cooling, UALink interconnect; NVL72 is 72 parallel Rubin chips, NVLink 5, Spectrum-X networking. On paper the specs are close; the gap lies in three things: interconnect bandwidth (NVLink is 1.8x UALink), software stack (CUDA versus ROCm), and delivery experience (Nvidia has shipped three generations of racks; this is AMD's first). **The problem with a first-generation product is that a year separates "can deliver" from "can deliver at scale."**

One more often overlooked point: tape-out cadence. AMD runs 4–6 advanced-node tape-outs a year (two CPUs, two GPUs, one FPGA), each N2 tape-out costing over USD 50 million. That intensity of spending is the ticket to stay at the table, not an advantage—but it shuts most small companies out. **Half the moat in the chip industry is the capex threshold, not technology.**

Last is "system capability." Helios requires AMD to do liquid cooling, racks and cluster tuning—three things it only learned in 2025 through the ZT acquisition. Nvidia has built three generations of racks; Dell has built servers for twenty years. **This scores 5 for now because "can do it" is not "does it well"—the delivery quality of the first Helios batch will decide whether that 5 rises to 7 or falls to 3.**

Brand is easily underestimated. In enterprise procurement, AMD's label is "cost-effective," Nvidia's is "safe." A procurement manager choosing AMD has to write a justification for not using the industry standard; choosing Nvidia requires none. **That organizational friction is worth a 5–10 point premium**, and it is why AMD still has to be 20% cheaper at equal performance to win orders.

## Sources

- AMD Q2 2026 earnings (August 4, 2026, after close): revenue USD 11.536 billion, data center USD 6.718 billion, gross margin 56%, non-GAAP EPS USD 1.66
- AMD Q2 2026 earnings call (2026/08/04): Q3 guidance of USD 13 billion ±300 million, data center revenue to double in 2027, EPS target above USD 20
- Jiwei: "AMD Q2 Revenue Up 50% YoY; Su Zifeng: Data Center Business Expected to Double by 2027" (2026/08/05); Dongdu AI Shidai (2026/08/05)
- NVIDIA FY2027Q1 results (2026/05/20): revenue USD 81.615 billion, data center USD 75.2 billion, GAAP gross margin 74.9%
- stockanalysis.com/stocks/amd/financials/ (quarterly income statement); share price and 52-week range as of the August 7, 2026 close; market cap estimated on roughly 1.66 billion shares
