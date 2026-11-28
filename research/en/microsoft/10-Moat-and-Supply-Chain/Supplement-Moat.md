# Microsoft（MSFT）— Moat Supplement

- Research date：2026/07/31
- Price：464.72 USD
- Market cap：About USD 3.45 trillion

## Notes

Data sources: Microsoft FY2026Q4 earnings release and earnings call (2026/07/29); internal moat scores (switching costs 9, network 7, scale 9, brand 7, cost 6, data 6); GitHub's 225 million developers, Foundry's 100,000 customers and 88 data centers added in one year are from internal records; the 27% OpenAI stake reflects the October 2025 restructuring basis. Competitor data reflects public reporting as of mid-2026.

## Moat scorecard, item by item (out of 10)

| Moat | Rating | Based on | Trend |
|---|---|---|---|
| Switching costs | 9/10 | Identity (Entra), permissions, audit and document formats are bound across four layers; for a 50,000-person company, switching means rebuilding the entire IT architecture | Stable, or even strengthening |
| Scale effects | 9/10 | Microsoft cloud annual revenue USD 214 billion, with procurement, data-center utilization and self-built networking all fully diluted; no room to survive outside the top three | Stronger, but offset by capex |
| Licensing and compliance | 8/10 | Azure's government, financial and healthcare compliance certifications take years to obtain; sovereign cloud is deployed across more than 60 regions | Stable |
| Network effects | 7/10 | GitHub 225 million developers, Foundry 100,000 customers, developer ecosystem has a virtuous cycle | Getting stronger (Copilot ecosystem) |
| Brand | 7/10 | Enterprise trust is very high; consumer side is average (Windows Phone and Bing both failed) | Stable |
| Cost advantage | 6/10 | Smaller retail scale dilution than Amazon, later to in-house TPUs than Google; pays OpenAI for models | Deterioration (rising share of reasoning) |
| Data moat | 6/10 | Enterprise data sits with the customer; Microsoft is only the custodian. This point is often overstated | Stable |

> Scores follow the working-paper methodology, with a new "Licences and Compliance" item added to reflect Azure's qualification barriers. Trends are subjective judgments.

## Comparison with main competitors (mid-2026)

| The company | Cloud business scale | AI positioning | Advantages | Weaknesses |
|---|---|---|---|---|
| Microsoft | Microsoft cloud annual revenue USD 214 billion | Azure + full-stack applications (Office, GitHub, Dynamics) | Strongest enterprise distribution channel, near-zero customer acquisition cost | Capex returns unproven; reliant on external parties for both models and chips |
| Amazon | AWS ranks first globally by share | Compute power + in-house Trainium | Scale and cost leadership, broadest customer base | Application layer and enterprise software weak |
| Google | Cloud share ranked third | Full-stack in-house development of TPU + Gemini | In-house models and chips, lowest inference cost | Enterprise sales capability weaker than Microsoft's |
| Oracle | Cloud infrastructure challenger | Landing the OpenAI mega-order | Orders are highly elastic; capacity ramps quickly | Delivery and O&M capabilities in doubt; customer concentration |
| OpenAI | Microsoft's largest customer and partner (Microsoft holds about 27%) | Model layer | Model leadership | Negative free cash flow; multi-cloud strategy erodes Microsoft's exclusivity |

> Cloud business scale and share figures follow publicly reported data (mid-2026); some are estimates and have not been checked line by line against each company's financial statements; OpenAI shareholding is on the post-October 2025 restructuring basis.

## Industry chain position: the only company that controls both the demand gateway and compute supply

Upstream sits Nvidia's GPUs, AMD's GPUs, in-house Maia, the three HBM suppliers, optical module makers, and power and land. Microsoft has no pricing power at this layer and can only accept price increases—which is why it designs its own chips and signs long-term power contracts. The midstream is Azure's data centers and network, adding 88 data centers a year. The downstream is enterprise customers and developers, distributed through Office, GitHub and Dynamics.

Positionally, Microsoft is the only company across the entire AI supply chain that controls both the demand gateway and compute supply. This is both an advantage (self-produced and self-sold, high utilization, near-zero customer acquisition cost) and a risk (capex is not shared with third parties). Amazon and Google follow the same model, and the three are competing over whose capital is cheaper and whose power arrives sooner.

## Supply chain: single-point dependence is the biggest hidden risk

Microsoft's supply chain has three single points: GPUs depend mainly on Nvidia, models mainly on OpenAI, and power on local grids. It controls none of the three.

Microsoft has learned a supply-chain lesson before—during the 2021–2022 chip shortage, Azure's growth was capped by capacity for four full quarters. This time it locked in capacity and power two years ahead, at the cost of front-loading capex.In other words, a substantial part of the 175 billion is a premium for "buying certainty," not an investment in "buying growth."This is easily overlooked when assessing the return on capex.

## The real source of the moat: inertia, not love

Many analyses describe Microsoft's moat as its "ecosystem," a term too vague. The real mechanism is four concrete layers of lock-in:

- Identity layer: Employee accounts, permissions and single sign-on all sit in Entra; switching means resetting permissions for everyone.

- Compliance layer: Audit logs, data residency and industry certifications (financial, healthcare, government) hang off Azure; switching means recertification.

- Document layer: Decades of accumulated docx, xlsx and pptx files; switching office software requires format migration, with high error costs.

- Process layer: Approval flows, expense reimbursement and contracts run on Teams and SharePoint; switching means rebuilding processes from scratch.

What these four layers share: they produce no delight, only friction. And friction retains customers better than delight—the most underappreciated asset Microsoft has built over the past twelve years.

## The most dangerous rival: Google, not Amazon

Amazon's cloud is bigger and cheaper, but it lacks an entry point into enterprise software; it is capturing "new workloads" rather than "existing customers." Google is different: it is the only competitor that builds all three layers in-house — models (Gemini), chips (TPU) and cloud. In Microsoft's AI stack, the models depend on OpenAI and the chips on Nvidia, so it pays on both ends; Google pays on neither.

If inference cost becomes the core competitive variable (which it most likely will), Microsoft's structural disadvantage will become more pronounced each year. What Google lacks right now is only enterprise sales capability, and that is something it can realistically fix — it is already bundling Workspace + Gemini to win M365 customers.

The second threat is open-source models: they will commoditize the model layer to rock-bottom prices, leaving Azure's premium to come only from compute and compliance, no longer from "exclusive models." These two threats combined are the fundamental reason Microsoft's valuation multiple cannot rise above 30x.

## Sources

- Microsoft FY2026Q4 and full-year results (released after market close on 2026/07/29): revenue USD 90.01 billion, operating profit USD 40.6 billion, net profit USD 35.8 billion, Azure +43%
- Microsoft FY2026Q4 earnings call transcript (2026/07/29): capex USD 41 billion, FY2027 capex about USD 175 billion, Copilot 30 million seats, RPO USD 678 billion
- Shanghai Securities News, "Microsoft: Major Changes! Shares Already Surged After Hours!" (2026/07/30); Zhitong Finance earnings call transcript (2026/07/30)
- Citi raised its target price to USD 600 and Goldman Sachs to USD 640 (July 30–31, 2026); post-earnings sell-side average target is about USD 561
- stockanalysis.com/stocks/msft/financials/ (quarterly income statement and free cash flow, through FY2026Q4); share price and 52-week range as of the 2026/07/31 close
