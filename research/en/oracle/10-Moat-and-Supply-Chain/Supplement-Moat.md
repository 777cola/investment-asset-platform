# Oracle（ORCL）— Moat Supplement

- Research date：2026/09/14
- Price：144.79 USD
- Market cap：About USD 440 billion

## Notes

Scoring methodology: a 10-point subjective scale, with 6 as the passing threshold. Competitor data reflect publicly reported figures for 2026. Bloom Energy fuel cells are the company's own on-site power solution at its Abilene campus, used to bypass grid interconnection queues (company disclosure).

## Moat scorecard, item by item (10-point scale)

| Dimension | Score | Based on | Trend |
|---|---|---|---|
| Brand | 7/10 | The byword for enterprise databases and the default option on every CIO's procurement list; but among AI compute customers its brand premium is close to zero | Flat |
| Cost | 4/10 | Self-generated fuel-cell power bypasses grid-connection queues and is a cost advantage; but its cost of capital is about 300 basis points higher than Microsoft's, and it has no edge on GPU purchase prices. | Deterioration |
| Network effects | 5/10 | The database ecosystem (developers, ISVs, certifications) has weak network effects; OCI does not—one more customer does not make the platform more useful | Flat |
| Switching costs | 8/10 (database 9 / OCI 3) | Core system migration takes years and carries billion-scale risk; OCI migration only requires redeploying containers, completed in weeks | Divergence |
| Licences and qualifications | 6/10 | Government cloud certifications (FedRAMP High, IL5) and financial and healthcare compliance certifications are the barrier to entry; the TikTok joint venture brings unique data-hosting credentials | Improvement |

> Scores are subjective, with 6 as the passing threshold for "has a moat"; OCI scores 3 as a segment standalone, and the weighted composite is 6. Weighting method: switching-cost sub-score weighted by revenue share (software 29%, OCI 38%, SaaS 22%, other 11%).

## Position in the supply chain: Nvidia at one end, OpenAI at the other

Upstream, it faces Nvidia—the only company globally capable of supplying GB300-class full systems—so it has zero bargaining power and can only accept quoted prices and delivery schedules. It even has to build its own fuel cells (Bloom Energy) to bypass grid connection queues, which shows that it is a passive party even on the most basic input, electricity.

Downstream, it faces OpenAI, xAI and Meta—customers with massive procurement volumes, strong technical capabilities and the ability to build in-house at any time. The best terms Oracle can secure in contracts are "multi-year commitments + prepayments," but contracts generally carry capacity and acceptance clauses.**It is squeezed between two parties that both have pricing power, and earns the engineering fee for "getting racks powered on schedule."**

## The truth about moats: strong in the old world, weak in the new

The database moat was built brick by brick over four decades: customers' accounting, inventory and reporting all run on Oracle, and the DBA skill stack, ISV certifications and audit compliance records all revolve around it. This quarter the database business grew 353% year on year, and both AWS and Azure now connect to Oracle Database—**a competitor's cloud voluntarily connecting to your database is the hardest evidence of a moat; there is no second explanation.**

OCI has no such luck. Compute is a commodity: given the same 1,000 cards, customers look at price per GPU hour, powered-on time and network oversubscription ratio. Oracle's advantages are fast delivery (24-hour acceptance) and self-supplied power—**these are execution advantages that can be caught; they are not structural advantages. What cannot be replicated is customer dependence.** OCI customers feel no dependence on it, only price comparison.

## Competitive comparison: who is taking its two yuan

In databases, the real rival is not AWS's Aurora but "customers re-architecting themselves onto the cloud." SAP's HANA, open-source PostgreSQL and cloud vendors' migration tools are steadily eating away at Oracle's foundation — software licenses and support at -3% this quarter is evidence that this foundation is shrinking.

In compute, the rivals are three cloud vendors with positive free cash flow. They can use in-house chips to push costs down to 60% of Nvidia's solution, subsidize compute with cloud gross margin, and then trade that compute for long-term cloud contracts with AI customers.**Oracle lacks this cross-subsidy capability; it has only higher leverage.**

## The most dangerous competitor: Microsoft

Not CoreWeave. CoreWeave and Oracle are the same kind of company—same leverage, same customers, same absence of a moat. Both will be squeezed by price wars together; they die together, they do not kill each other.

Microsoft is the most dangerous, for three reasons.**First, it is OpenAI's largest shareholder and cloud partner**, Oracle's largest source of orders, and was already a customer inside the Microsoft ecosystem; **second, it has cross-subsidies**—cash flow from Office, Azure and GitHub can subsidize compute indefinitely; **third, it collides head-on with Oracle in enterprise software**, with Fabric, SQL Server and Dynamics each competing for Fusion and database budgets. **A company fighting you in both your new business and your old business—that is what makes it the most dangerous competitor.**

## Pricing the Moat: Which Segment the Market Is Valuing

A useful test: value Oracle as two separate companies. The software business (database + SaaS + support, roughly RMB 17 billion revenue per quarter, 85% gross margin, almost zero capex) at 18x EBIT is worth about USD 300–350 billion. The remaining OCI plus hardware services, with revenue of RMB 9.6 billion per quarter, 30% gross margin and RMB 90 billion of capex a year, at 8x EBITDA is worth about USD 150 billion, but only after deducting USD 100 billion of net debt.

Together that is roughly USD 400–450 billion, about the same as the current USD 440 billion market cap.**The conclusion is clear: the market has already given the software business a decent price and OCI a fair price, leaving no margin of safety.** In other words, USD 144.79 is not "the moat is undervalued" but "both businesses are reasonably priced".

## Sources

- Oracle FY2027Q1 earnings and call (released after market close on 2026/09/10)
- Oracle FY2026 Annual Report and Q4 Results (2026/06/10)
- Business Insider《Oracle maintains its capex forecast and reports cloud growth》（2026/09/09）
- Gelonghui, "RMB 664 billion in record orders, yet cash flow swings to a RMB 5.4 billion loss: what is Oracle betting on?" (September 10, 2026)
- Pocket Classroom, "Oracle FY27Q1 Earnings Analysis" (2026/09/11)
- iFast research report "Oracle Downgraded to BBB-" (2026/07/29)
- Share price vs 52-week range: batchdata market data, as of the September 14, 2026 close
