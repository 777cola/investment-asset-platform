# Microsoft（MSFT）— Moat Supplement

- Research date：2026/07/31
- Price：464.72 USD
- Market cap：About USD 3.45 trillion

## Notes

Data sources: Microsoft FY2026Q4 earnings release and earnings call (2026/07/29); internal moat scores (switching costs 9, network 7, scale 9, brand 7, cost 6, data 6); GitHub's 225 million developers, Foundry's 100,000 customers and the 88 data centers added in one year are from internal records; the 27% OpenAI stake is on the post-October 2025 restructuring basis. Competitor data reflects public reporting as of mid-2026.

## Moat scorecard, item by item (out of 10)

| Moat | Rating | Based on | Trend |
|---|---|---|---|
| Switching costs | 9/10 | Identity (Entra), permissions, audit and document formats are bound across four layers. For a 50,000-person company, switching means rebuilding the entire IT architecture | Stable, or even strengthening |
| Scale effects | 9/10 | Microsoft cloud revenue reached USD 214 billion annually, with procurement, data-centre utilisation and in-house networking all fully diluted; outside the top three there is no room to survive | Stronger, but offset by capex |
| Licensing and compliance | 8/10 | Government, financial and healthcare compliance certifications for Azure take years to obtain, and sovereign cloud is deployed across more than 60 regions | Stable |
| Network effects | 7/10 | GitHub has 225 million developers and Foundry 100,000 customers, giving the developer ecosystem a virtuous cycle | Getting stronger (Copilot ecosystem) |
| Brand | 7/10 | Enterprise trust is very high; consumer is average, with both Windows Phone and Bing having failed | Stable |
| Cost advantage | 6/10 | Smaller retail-scale dilution than Amazon and later to in-house TPUs than Google, though it pays OpenAI for models | Deterioration (rising share of reasoning) |
| Data moat | 6/10 | Enterprise data belongs to the customer; Microsoft is merely the custodian. That point is often overstated | Stable |

> Scores use the working-paper methodology, with a new "Licences and Compliance" item added to capture Azure's qualification barriers. Trend assessments are subjective.

## Comparison with main competitors (mid-2026)

| The company | Cloud business scale | AI positioning | Advantages | Weaknesses |
|---|---|---|---|---|
| Microsoft | Microsoft cloud annual revenue USD 214 billion | Azure + full-stack applications (Office, GitHub, Dynamics) | Strongest enterprise distribution channel, near-zero customer acquisition cost | Capex returns unproven; reliant on external parties for both models and chips |
| Amazon | AWS ranks first globally by share | Compute power + in-house Trainium | Scale and cost leadership, broadest customer base | Application layer and enterprise software weak |
| Google | Cloud share ranked third | Full-stack in-house development of TPU + Gemini | In-house models and chips, lowest inference cost | Enterprise sales capability weaker than Microsoft's |
| Oracle | Cloud infrastructure challenger | Landing the OpenAI mega-order | Orders are highly elastic; capacity ramps quickly | Delivery and O&M capabilities in doubt; customer concentration |
| OpenAI | Microsoft's largest customer and partner, in which Microsoft holds about 27% | Model layer | Model leadership | Negative FCF; multi-cloud strategy erodes Microsoft's exclusivity |

> Cloud scale and share figures are based on publicly reported data as of mid-2026; some are estimates and have not been reconciled line by line to company financial statements. OpenAI shareholding is stated on the post-October 2025 restructuring basis.

## Industry chain position: the only company controlling both the demand gateway and compute supply

Upstream sit Nvidia's and AMD's GPUs, in-house Maia, the three HBM suppliers, optical module makers, and power and land. Microsoft has no pricing power at this layer and can only absorb price increases—which is why it designs its own chips and signs long-term power contracts. Midstream is Azure's data centres and network, adding 88 data centres a year. Downstream are enterprise customers and developers, reached through Office, GitHub and Dynamics.

Positionally, Microsoft is the only company across the entire AI supply chain that controls both the demand gateway and compute supply. That is both an advantage (self-produced and self-sold, high utilisation, near-zero customer acquisition cost) and a risk (capex is not shared with third parties). Amazon and Google follow the same model, and the three are competing over whose capital is cheaper and whose power arrives sooner.

## Supply chain: single-point dependence is the biggest hidden risk

Microsoft's supply chain rests on three single points of failure: GPUs depend mainly on Nvidia, models mainly on OpenAI, and power on local grids. It controls none of the three.

Microsoft has learned this lesson before—during the 2021–2022 chip shortage, capacity capped Azure's growth for four full quarters. This time it has locked in capacity and power two years ahead, at the cost of front-loading capex.In other words, a substantial part of the 175 billion is a premium for "buying certainty," not an investment in "buying growth."That distinction is easily overlooked when assessing the return on capex.

## The real source of the moat: inertia, not love

Most analyses describe Microsoft's moat as its "ecosystem" — too vague a term. The real mechanism is four concrete layers of lock-in:

- Identity layer: Employee accounts, permissions and single sign-on all sit in Entra; switching means resetting permissions for every user.

- Compliance layer: Audit logs, data residency and industry certifications (financial, healthcare, government) hang off Azure; switching means recertification.

- Document layer: Decades of accumulated docx, xlsx and pptx files; switching office software requires format migration, with high error costs.

- Process layer: Approval flows, expense reimbursement and contracts run on Teams and SharePoint; switching means rebuilding processes from scratch.

What these four layers share: they produce no delight, only friction. And friction retains customers better than delight — the most underappreciated asset Microsoft has built over the past twelve years.

## The most dangerous rival: Google, not Amazon

Amazon's cloud is bigger and cheaper, but it has no entry point into enterprise software: it is winning "new workloads" rather than "existing customers." Google is different — the only competitor that builds all three layers in-house: models (Gemini), chips (TPU) and cloud. In Microsoft's AI stack, the models depend on OpenAI and the chips on Nvidia, so it pays at both ends; Google pays at neither.

If inference cost becomes the core competitive variable — as it most likely will — Microsoft's structural disadvantage will only become more pronounced each year. What Google lacks today is enterprise sales capability, and that is realistically fixable: it is already bundling Workspace + Gemini to win M365 customers.

The second threat is open-source models, which will commoditize the model layer to rock-bottom prices, leaving Azure's premium to come only from compute and compliance rather than from "exclusive models." Together, these two threats are the fundamental reason Microsoft's valuation multiple cannot rise above 30x.

## Sources

- Microsoft FY2026Q4 and full-year results, released after the market close on 2026/07/29: revenue USD 90.01 billion, operating profit USD 40.6 billion, net profit USD 35.8 billion, Azure +43%
- Microsoft FY2026Q4 earnings call (2026/07/29): capex USD 41 billion; FY2027 capex guided to about USD 175 billion; Copilot at 30 million seats; RPO USD 678 billion
- Shanghai Securities News, "Microsoft: Major Changes! Shares Already Surged After Hours!" (2026/07/30); Zhitong Finance earnings call transcript (2026/07/30)
- Citi lifted its target price to USD 600 and Goldman Sachs to USD 640 (July 30–31, 2026); the post-earnings sell-side average target sits at about USD 561
- stockanalysis.com/stocks/msft/financials/ (quarterly income statement and free cash flow, through FY2026Q4); share price and 52-week range as of the 2026/07/31 close
