# CoreWeave（CRWV）— Moat Supplement

- Research date：2026/11/20
- Price：39.51 USD
- Market cap：Approximately USD 22 billion

## Notes

The moat score is a subjective rating; see the discussion in m04 and m05. The details come from public reports dated November 2026: Microsoft capex of USD 45.2 billion per quarter, about USD 170 billion for the full year, a review of USD 80 billion in external compute, cancellation of the USD 3.22 billion Nscale order, and mass production of Maia 300 in 2027.

## Moat scorecard, item by item (10-point scale)

| Dimension | Score | Based on |
|---|---|---|
| Brand | 2/10 | Enterprise buyers choose compute on price, delivery and SLA rather than brand, and at AI labs the engineering teams lead the decision. |
| Cost | 3/10 | Cost of capital of 7.9% versus Microsoft's 4.85%; sub-hyperscaler scale and weak bargaining power on power prices |
| Network effects | 1/10 | Compute is a commodity: more users do not improve the product, and there is no developer-ecosystem lock-in |
| Switching costs | 1/10 | Workload migration takes weeks; commitments bind only for the contract term and reset to zero at renewal |
| Licenses and resources | 4/10 | 4.6GW of contracted power and grid-connection quotas are real resources, but a higher bidder can always buy them away |
| Supply chain (chip allocation priority) | 6/10 | Deeply tied to Nvidia, with priority GPU allocation as a core asset — and the source of "circular financing" concerns |

> Scoring basis: measured against the strongest competitor in the same industry; a score of 5 denotes parity. See the moat discussion in m04/m05.

## Competitive landscape (November 2026)

| The company | Model | Capital structure | Customer concentration | Relative advantage |
|---|---|---|---|---|
| CoreWeave | GPU cloud rental | Debt RMB 46.87 billion, D/E 16.5 | The top two account for 54% | Delivery speed, NVIDIA priority supply |
| Nebius | GPU cloud + in-house cloud platform | Lighter leverage, ample cash | More dispersed | Proprietary software stack, European market |
| IREN | Mining farms pivot to AI data centers | Moderate leverage | More dispersed | Captive power and land |
| Crusoe | Captive campuses + energy | Mainly private placements, unlisted | Relatively concentrated | Self-generated associated gas power, low cost |
| Microsoft Azure | Primarily self-built, with leasing as a supplement | AAA rating, cost 4.85% | Itself is the buyer | Cost of capital, customers, in-house chips |

> Competitor financials were not verified company by company; outside CoreWeave and Microsoft, comparisons are qualitative only. Valuation figures are as of mid-November.

## Position in the supply chain (1): squeezed between Nvidia and hyperscalers

Upstream sit Nvidia (GPU), the three HBM makers and power-equipment vendors; downstream sit buyers such as Meta, OpenAI and Microsoft. Both ends are strong and the middle is weakest: Nvidia has pricing power, the hyperscalers have bargaining power and in-house build capability, and CoreWeave can only trade "getting cards faster and getting power faster" for contracts.

Gross margin is essentially the residual left after being squeezed from both ends — and that residual is still shrinking: adjusted operating margin fell from 15.9% a year earlier to 10.4%, showing that upstream price hikes (GPU, power equipment) and downstream price pressure (more customer self-build options) are happening at the same time. Margins at sandwiched companies usually trend one way — down, because they have no way to pass costs through.

## Value-chain position (II): 4.6GW is an asset and a burden

The 4.6GW of contracted power is the largest among global neoclouds and CoreWeave's hardest asset. But only 1.7GW is in operation; the remaining 2.9GW is capacity that is "contracted, prepaid and reserved, but not yet generating revenue", and the associated grid connection fees, capacity reservation fees and equipment prepayments are all consuming cash.

In an upcycle this structure is a moat, locking in scarce grid interconnection points first; in a downcycle it is a burden, paying fixed costs continuously for capacity that goes unused. Whether the cycle turns up or down depends on whether customers keep paying for committed volumes — precisely the part it controls least.

## The real moat is "being able to borrow RMB 46.9 billion"

Of the six scores, only supply chain (6/10) carries real weight, and that advantage traces back to Nvidia's strategic investment. As for how it could borrow USD 46.873 billion and sign 4.6GW of power — that capital came from the capital markets, not from customers.

Which is also where the fragility lies: its "moat" rests on two external conditions — Nvidia's willingness to keep supporting it, and the credit market's willingness to keep lending. It controls neither, and both loosened in November 2026 (Nvidia placed under SEC investigation, bond yield at 15%).

## Microsoft is the most dangerous competitor: it is at once a customer, a supplier and a rival

Microsoft spent USD 45.2 billion on capex this quarter, or roughly USD 170 billion for the full year. It is also reported to be reviewing more than USD 80 billion of external AI compute commitments and to have cancelled a USD 3.22 billion Nscale order. Its in-house Maia 300 is slated for mass production in 2027, with tokens per megawatt about 40% higher than mainstream GPU systems. All three point the same way: bring outsourcing back in-house.

The second threat is Nvidia's capacity release. In 2024–2025 the neocloud rental premium came from the card shortage; once supply catches up, scarcity pricing disappears and rent and utilization fall together, while depreciation and interest stay fixed. The third is peers such as Nebius and Crusoe winning orders with lower leverage—they can be more aggressive on price because they do not pay interest on USD 46.9 billion of debt.

## Peers fell too—why did this one fall the hardest?

The neocloud sector sold off across the board from October to November, with Nebius, IREN and CoreWeave moving in lockstep. CoreWeave fell the most (-71.4% from its high), and the driver is leverage, not the business: on the same revenue downgrade, its equity absorbs 4x the hit, since equity is only 26% of enterprise value.

That gives a useful framework: when the sector falls, the most levered name falls the most; when it rebounds, that same name rises the most. The stock is effectively a compute-sector ETF with 3–4x amplified beta, plus an option on the "credit window." Buying it as a growth stock is using the wrong tool.

## Sources

- CoreWeave Q3 2026 results and 10-Q filed after the close on 2026/11/10
- CoreWeave's $2.1B in Customer Advances Topped Its Operating Cash Flow

Global Data Center Hub, 2026/11/18 — line-by-line breakdown of the 10-Q
- CoreWeave 2026Q3 10-Q (filed November 10, 2026; customer concentration, debt maturities and lease liabilities)
- Ainvest, "CoreWeave Raised Its Forecast. The Market Was Never Worried About Demand." (2026/11/09)
- Cailianshe, "Huang Jen-hsun 'Falls From Grace': Who Gets Hurt?", 2026/11/17 — bonds enter distress territory
- China Securities Network, "Sudden Negative News: Nvidia Falls Over 14%" (2026/11/20; Nasdaq -5.28%, Philadelphia Semiconductor Index -10.73%)
- CoreWeave (CRWV) statistics, per stockanalysis.com/stocks/crwv/statistics/: 556.13 million shares outstanding, debt/equity 16.45, data as of mid-November
- Share price vs 52-week range: batchdata B9.json (close USD 39.51, 2026/11/20)
