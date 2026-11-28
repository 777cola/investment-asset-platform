# AMD（AMD）— Six-Gate Screen Supplement

- Research date：2026/08/07
- Price：483.36 USD
- Market cap：About USD 802 billion

## Notes

Data sources: AMD 2026Q2 earnings (after market close on 2026/08/04, revenue USD 11.536 billion, gross margin 56.0%, GAAP net income USD 2.297 billion, non-GAAP EPS USD 1.66), earnings call (2026/08/04, Q3 guidance USD 13 billion ±0.3 billion, data center to double in 2027, EPS above USD 20), NVIDIA FY2027Q1 earnings (2026/05/20, data center USD 75.2 billion, GAAP gross margin 74.9%), batchdata daily (2026/08/07 close USD 483.36). Market cap = 483.36 × 1.66 billion shares = USD 802.4 billion; TTM net income of USD 6.4 billion is derived (sum of GAAP net income for the last four quarters, with 2025Q3 and 2025Q4 roughly estimated on the basis of publicly reported quarterly figures), TTM EPS about USD 3.87, 483.36/3.87 = 125x. The "above 30%" server CPU share is an approximate figure on the Mercury Research basis and was not checked quarter by quarter.

## Six-gate screen (10-point scale, 60 points total)

| Checkpoint | Determination | Rating | Based on |
|---|---|---|---|
| Gate one: circle of competence | Through | 8/10 | Selling CPUs and GPUs, fabless, with TSMC as foundry—that much is clear in one sentence; what remains unclear is the yield ramp and delivery cadence for MI450. |
| Stage two: a good business | Through | 7/10 | Gross margin 56.0%, data center segment operating margin 31.3%; the deduction is customer concentration, with the top five customers accounting for more than half of revenue |
| Stage three: the moat | Questionable | 5/10 | x86 licensing and chiplets are genuine barriers, but those sit on the CPU side; on the GPU side it comes down to cost-performance, and customers are willing to switch but lack the capability |
| Level four: management | Passed | 9/10 | Lisa Su's twelve years: spinning off manufacturing, acquiring Xilinx and ZT, betting on chiplets, winning OpenAI's 6GW and Anthropic's 2GW |
| Gate 5: Margin of safety | Fails to pass | 2/10 | 125x TTM; even on the most optimistic 2027 EPS of USD 20, it is still 24x, and that EPS rests on "data center doubling" |
| Level six: discipline | Does not pass | 4/10 | Every buy case rests on 2027 deliveries and is story-driven; the stock fell 7.0% after the August 5 earnings, and the market is also waiting for evidence |
| Consensus | Watch | 35/60 | The best challenger, the most expensive option; wait for MI450 revenue to hit the books, or for the price to fall below USD 350 |

> The scoring methodology is defined by this report and matches the six-gate worksheet item by item (8+7+5+9+2+4=35). Sources: AMD 2026Q2 earnings release (after market close on 2026/08/04), earnings call (2026/08/04), closing price USD 483.36 (2026/08/07).

## The first two hurdles: the reported numbers hold up

2026Q2 revenue was USD 11.536 billion, +50.1% YoY and roughly +12% QoQ, a record high. Broken down: Data Center 6.718 billion (+107%), Client 3.062 billion (+23%), Gaming 779 million (-31%), Embedded 977 million (+18%). Of the 3.85 billion increase in revenue YoY, 3.48 billion came from the Data Center segment alone—only one business line now drives this company's valuation.

The income statement improved far more sharply than revenue. Gross profit 6.463 billion, gross margin 56.0%, versus 43.2% a year earlier; operating income 1.990 billion, operating margin 17.3%, versus a loss of 134 million a year earlier; GAAP net income 2.297 billion, diluted EPS USD 1.39; non-GAAP net income 2.76 billion, EPS USD 1.66, above the consensus of 1.62.

The second gate scores 7 rather than 9 because of customer concentration. This business carries high margins, is asset-light and requires no captive fabs, but orders concentrate in a handful of names: three cloud players—Microsoft, Meta and Oracle—plus two model companies, OpenAI and Anthropic. Any shift in the capex cadence of any one of them directly rewrites next year's guidance. The premise of a good business is "winning the next-generation order every year," and that must be re-verified annually.

Circle of competence scores 8: what it sells, to whom, and how it makes money can be stated in three sentences. The 2 points deducted are for the limits of judgment—HBM4 supply for MI450, CoWoS packaging capacity, ROCm operator coverage: the variables that decide success or failure all sit where outside investors cannot see.

## Stage three: the moat holds only on the CPU side

AMD has three genuine strengths. First, the x86 license: only Intel and AMD hold one worldwide. This is a license-type barrier that no one has broken in forty years. Second, chiplet: since Zen 2, AMD has split large chips into small dies, using mature process for IO and advanced process for compute, at a cost one tier below Intel's monolithic approach and with higher yields. Third, first-tier customer status at TSMC: in the allocation of N2 and CoWoS capacity, AMD ranks behind Apple and Nvidia but remains in the first tier.

These three strengths work for server CPUs. EPYC's share rose from single digits in 2017 to more than 30% in 2026, and Intel's Xeon can no longer keep up on energy efficiency and core count.But the same logic does not hold when applied to GPUs.Nvidia's moat is CUDA: two decades of accumulated operator libraries, framework adaptation and developer habits. The migration cost is not a matter of money but of people and time. ROCm 7 is improving, and the main paths of PyTorch and vLLM now run, but when customers build inference clusters they still first ask, "How much code does this model need changed to run on ROCm?"

The moat's direct price tag is gross margin: Nvidia posted 74.9% in FY2027Q1 versus AMD's 56.0%, a gap of 19 percentage points. Those 19 points reflect not a manufacturing efficiency gap but a pricing power gap. AMD sells "equivalent compute 20%–30% cheaper"; customers buy it to drive down prices and secure supply, not for the technology.The moat belongs to whoever defines the standard, and AMD is now the chaser.

## Stages five and six: the 125x denominator is the company's own figure

Market cap USD 802.4 billion (USD 483.36 × 1.66 billion shares), TTM net income about USD 6.4 billion, PE 125x; TTM revenue about USD 40 billion, P/S 20x. Both figures sit in the highest tier among large-cap semiconductor companies.

To make the story add up, you have to look forward. On the August 4 earnings call, management gave two targets: double data center revenue by 2027 (about USD 30 billion in 2026, so roughly USD 60 billion at double), and EPS above USD 20 in 2027. At USD 20, the current price is 24x; at this report's base-case assumption of USD 19, it is 25.4x. The problem is not the multiple but where the denominator comes from — this is management's own target, not delivered results, and not third-party consensus. Using the company's most optimistic target to justify the current price is the most dangerous kind of circular reasoning.

Three scenarios laid out: bear case USD 240 (EPS 12, 20x), base case USD 475 (EPS 19, 25x), bull case USD 720 (EPS 24, 30x). Downside -50%, upside +49%, odds roughly 1:1, but the bear case does not require AMD to stumble — only that Nvidia closes its capacity gap and cloud capex growth slows to 10%, which is the industry's normal state.

Gate six scores 4. The buy premise can be written down: MI450 quarterly revenue above USD 3 billion, gross margin holding at 55%, and on-time delivery of the first 1GW to OpenAI. All three can be checked in quarterly reports, but not until October, next January and April. Buying before then is a faith-based vote on delivery pace, not investment discipline. On August 5, results came in above the consensus of X and the stock still fell 7.0% (USD 518.58 to 482.05), showing the market itself is waiting for evidence.

## Sources

- AMD Q2 2026 earnings (August 4, 2026, after close): revenue USD 11.536 billion, data center USD 6.718 billion, gross margin 56%, non-GAAP EPS USD 1.66
- AMD Q2 2026 earnings call (2026/08/04): Q3 guidance of USD 13 billion ±300 million, data center revenue to double in 2027, EPS target above USD 20
- Jiwei: "AMD Q2 Revenue Up 50% YoY; Su Zifeng: Data Center Business Expected to Double by 2027" (2026/08/05); Dongdu AI Shidai (2026/08/05)
- NVIDIA FY2027Q1 results (2026/05/20): revenue USD 81.615 billion, data center USD 75.2 billion, GAAP gross margin 74.9%
- stockanalysis.com/stocks/amd/financials/ (quarterly income statement); share price and 52-week range as of the August 7, 2026 close; market cap estimated on roughly 1.66 billion shares
