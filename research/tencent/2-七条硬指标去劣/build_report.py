#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
腾讯 7条硬指标去劣筛选 报告生成脚本
"""

import os

BASE_PATH = "/Users/qjh/Library/Mobile Documents/com~apple~CloudDocs/QI JUNHAO/AI/Hermes/ai-berkshire/公司汇总/腾讯 2026-07-07/02-七条硬指标去劣"

# ============================================================
# 核心判断结果
# ============================================================
indicators = [
    {
        "id": 1,
        "name": "ROE过去5年持续 > 15%",
        "pass": True,
        "summary": "腾讯FY2021~FY2025的ROE分别为~25%、~22%、~16%、~19%、20.51%，连续5年均超过15%。即使2023年受宏观环境影响回落至16%，仍高于及格线。TTM ROE维持20.51%，盈利能力稳健。",
        "data": "FY2021: ~25% | FY2022: ~22% | FY2023: ~16% | FY2024: ~19% | FY2025: 20.51% | TTM: 20.51%",
    },
    {
        "id": 2,
        "name": "毛利率持续 > 40% 且稳定/提升",
        "pass": True,
        "summary": "FY2021~FY2025毛利率分别为43.9%、43.1%、48.1%、52.9%、56.3%，最低值为43.1%（FY2022），远超40%门槛。更重要的是毛利率从FY2022的43.1%持续提升至56.3%，体现高毛利业务（视频号广告、小游戏、企业服务）占比提升，盈利质量持续改善。TTM毛利率56.4%维持高位。",
        "data": "FY2021: 43.9% | FY2022: 43.1% | FY2023: 48.1% | FY2024: 52.9% | FY2025: 56.3% | TTM: 56.4%",
    },
    {
        "id": 3,
        "name": "净利率持续 > 15%",
        "pass": True,
        "summary": "FY2021~FY2025净利率分别为40.1%、33.9%、18.9%、29.4%、29.9%，连续5年均超过15%门槛。FY2023净利率18.9%为期间最低，但仍高于15%标准。TTM净利率30.6%，盈利能力强劲。注：FY2021~FY2022净利率偏高与投资收益确认有关，但即使剔除非经常性损益，核心净利率仍显著高于15%。",
        "data": "FY2021: 40.1% | FY2022: 33.9% | FY2023: 18.9% | FY2024: 29.4% | FY2025: 29.9% | TTM: 30.6%",
    },
    {
        "id": 4,
        "name": "自由现金流持续为正且FCF/收入 > 15%",
        "pass": True,
        "summary": "FY2021~FY2025自由现金流分别为1,459亿、1,234亿、2,010亿、1,956亿、2,156亿人民币，连续5年保持正向且稳定增长。FCF/收入比：FY2021 26.0%、FY2022 22.3%、FY2023 33.0%、FY2024 29.6%、FY2025 28.7%，均远超15%门槛。TTM FCF 2,305亿，FCF/收入为30.0%，现金生成能力卓越。",
        "data": "FCF: FY2021 ¥1,459亿 | FY2022 ¥1,234亿 | FY2023 ¥2,010亿 | FY2024 ¥1,956亿 | FY2025 ¥2,156亿 | TTM ¥2,305亿\nFCF/收入: FY2021 26.0% | FY2022 22.3% | FY2023 33.0% | FY2024 29.6% | FY2025 28.7% | TTM 30.0%",
    },
    {
        "id": 5,
        "name": "资产负债率 < 50% 或净现金头寸",
        "pass": True,
        "summary": "腾讯截至最新财报持有现金US$597亿，总负债US$1,110亿，但净现金头寸为正（US$132亿净现金）。长期债务US$465亿，D/E比率仅0.33，利息覆盖倍数19倍。即使按资产负债率（总负债/总资产）口径，也远低于50%安全线。财务结构极为稳健，信用评级处于中国科技公司顶尖水平。",
        "data": "现金: US$597亿 | 总负债: US$1,110亿 | 长期债务: US$465亿\n净现金: US$132亿 | D/E: 0.33x | 利息覆盖: 19x",
    },
    {
        "id": 6,
        "name": "收入持续增长（过去5年）",
        "pass": True,
        "summary": "FY2021~FY2025收入分别为5,601亿、5,546亿、6,090亿、6,603亿、7,518亿人民币。FY2022收入微降（-1.0%）主要受宏观环境及游戏版号暂停影响，但FY2023起恢复增长，FY2023同比+9.8%、FY2024同比+8.4%、FY2025同比+13.9%。5年间从5,601亿增长至7,518亿，CAGR约6.1%。TTM收入7,682亿，增长态势延续。",
        "data": "FY2021: ¥5,601亿 | FY2022: ¥5,546亿 (-1.0%) | FY2023: ¥6,090亿 (+9.8%)\nFY2024: ¥6,603亿 (+8.4%) | FY2025: ¥7,518亿 (+13.9%) | TTM: ¥7,682亿\n5年CAGR: ~6.1%",
    },
    {
        "id": 7,
        "name": "护城河明显且可持续",
        "pass": True,
        "summary": "腾讯拥有多重不可复制的护城河：①微信DAU约13亿，是中国最大社交平台，网络效应极强；②游戏业务全球收入第一（2025），拥有Riot Games、Supercell、Epic Games及众多顶级IP；③微信支付占移动支付约40%，与支付宝形成双寡头格局；④云服务位列中国前二，受益于企业数字化浪潮；⑤投资组合覆盖中国互联网半壁江山（美团、拼多多、快手、京东等），生态协同效应显著。竞争壁垒极高，护城河可持续。",
        "data": "微信DAU ~13亿 | 全球游戏收入第一 | 微信支付~40%份额\n云服务中国前二 | 投资覆盖中国互联网半壁江山",
    },
]

pass_count = sum(1 for i in indicators if i["pass"])
fail_count = sum(1 for i in indicators if not i["pass"])


# ============================================================
# 1. 主报告: 去劣筛选-腾讯.md
# ============================================================
def build_markdown_report():
    lines = []
    lines.append("# 腾讯控股（00700.HK）— 七条硬指标去劣筛选报告")
    lines.append("")
    lines.append("> **筛选日期**: 2026-07-07 | **数据截止**: TTM 2026 | **分析框架**: 七条硬指标去劣法")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 一、筛选结论")
    lines.append("")
    if fail_count == 0:
        lines.append("✅ **全部7条硬指标通过！腾讯控股（00700.HK）确认为合格投资标的。**")
    else:
        lines.append(f"⚠️ **{pass_count}/7条通过，{fail_count}/7条未通过，需进一步评估。**")
    lines.append("")
    lines.append(f"- 通过指标：**{pass_count}/7**")
    lines.append(f"- 未通过指标：**{fail_count}/7**")
    lines.append("- 结论：**推荐进入后续深度研究（第三步：杜邦分析）**" if fail_count == 0 else "- 结论：需结合定性分析判断是否排除")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 二、七条指标逐项分析")
    lines.append("")

    for idx, ind in enumerate(indicators, 1):
        status = "✅ 通过" if ind["pass"] else "❌ 未通过"
        lines.append(f"### {idx}. {ind['name']}")
        lines.append("")
        lines.append(f"**判断**: {status}")
        lines.append("")
        lines.append(f"**分析**: {ind['summary']}")
        lines.append("")
        lines.append(f"**数据**: {ind['data']}")
        lines.append("")
        lines.append("---" if idx < len(indicators) else "")
        lines.append("")

    lines.append("## 三、综合评估")
    lines.append("")
    lines.append("### 优势总结")
    lines.append("")
    lines.append("1. **盈利质量优秀**：ROE连续5年>15%，毛利率持续提升至56%+，净利率稳定在18%~30%")
    lines.append("2. **现金生成能力极强**：FCF连续5年超1,200亿，FCF/收入稳定在22%~33%")
    lines.append("3. **财务结构稳健**：净现金头寸、低杠杆（D/E 0.33）、高利息覆盖倍数")
    lines.append("4. **收入增长韧性强**：除FY2022微降外保持增长，近3年加速至8%~14%")
    lines.append("5. **护城河深厚**：社交+游戏+支付+云+投资，多重壁垒叠加")
    lines.append("")
    lines.append("### 潜在风险")
    lines.append("")
    lines.append("1. **监管风险**：中国互联网监管政策仍是长期不确定性因素")
    lines.append("2. **投资组合波动**：大量股权投资受市场波动影响，FY2023净利下滑部分源于此")
    lines.append("3. **增长放缓**：收入CAGR约6%，较早期增速显著放缓，成熟期特征明显")
    lines.append("4. **地缘政治风险**：中美科技竞争可能影响部分业务和投资布局")
    lines.append("")
    lines.append("### 下一步建议")
    lines.append("")
    lines.append("✅ **七条硬指标全部通过，建议进入第三步：杜邦分析体系 — 对腾讯进行更深入的财务拆解和盈利质量评估。**")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("*报告生成时间：2026-07-07 | 数据来源：公开财务数据整理*")

    return "\n".join(lines)


# ============================================================
# 2. 补充材料: 补充材料-腾讯七条硬指标.md
# ============================================================
def build_supplement():
    lines = []
    lines.append("# 腾讯控股（00700.HK）— 七条硬指标补充材料")
    lines.append("")
    lines.append("> 本文为七条硬指标去劣筛选的补充信息来源，包含详细财务数据、计算过程和参考基准。")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 一、财务数据总表")
    lines.append("")
    lines.append("| 指标 | FY2021 | FY2022 | FY2023 | FY2024 | FY2025 | TTM |")
    lines.append("|------|--------|--------|--------|--------|--------|------|")
    lines.append("| 收入（亿¥） | 5,601 | 5,546 | 6,090 | 6,603 | 7,518 | 7,682 |")
    lines.append("| 净利（亿¥） | 2,248 | 1,882 | 1,152 | 1,941 | 2,248 | 2,351 |")
    lines.append("| 毛利率 | 43.9% | 43.1% | 48.1% | 52.9% | 56.3% | 56.4% |")
    lines.append("| 净利率 | 40.1% | 33.9% | 18.9% | 29.4% | 29.9% | 30.6% |")
    lines.append("| ROE | ~25% | ~22% | ~16% | ~19% | 20.51% | 20.51% |")
    lines.append("| FCF（亿¥） | 1,459 | 1,234 | 2,010 | 1,956 | 2,156 | 2,305 |")
    lines.append("| FCF/收入 | 26.0% | 22.3% | 33.0% | 29.6% | 28.7% | 30.0% |")
    lines.append("")
    lines.append("## 二、估值数据")
    lines.append("")
    lines.append("| 指标 | 数值 |")
    lines.append("|------|------|")
    lines.append("| PE (TTM) | 15.19x |")
    lines.append("| Forward PE | 12.87x |")
    lines.append("| PB | 2.95x |")
    lines.append("| PS | 4.65x |")
    lines.append("| P/FCF | 15.49x |")
    lines.append("| EV/EBITDA | 11.56x |")
    lines.append("| 股息率 | 1.14% |")
    lines.append("| 市值 | HK$4.22万亿 / US$517.62B |")
    lines.append("")
    lines.append("## 三、资产负债表关键数据")
    lines.append("")
    lines.append("| 指标 | 数值 |")
    lines.append("|------|------|")
    lines.append("| 现金及等价物 | US$597亿 |")
    lines.append("| 总负债 | US$1,110亿 |")
    lines.append("| 长期债务 | US$465亿 |")
    lines.append("| 净现金头寸 | US$132亿（正） |")
    lines.append("| D/E比率 | 0.33 |")
    lines.append("| 利息覆盖倍数 | 19x |")
    lines.append("")
    lines.append("## 四、各指标详细计算与判断依据")
    lines.append("")

    for idx, ind in enumerate(indicators, 1):
        lines.append(f"### 指标{idx}: {ind['name']}")
        lines.append("")
        lines.append(f"- **判断**: {'✅ 通过' if ind['pass'] else '❌ 未通过'}")
        lines.append(f"- **分析**: {ind['summary']}")
        lines.append(f"- **数据明细**: {ind['data']}")
        lines.append("")

    lines.append("## 五、参考基准说明")
    lines.append("")
    lines.append("七条硬指标的设计逻辑：")
    lines.append("")
    lines.append("1. **ROE > 15%**：衡量股东资本回报率，持续>15%说明企业具备竞争优势和资本配置能力")
    lines.append("2. **毛利率 > 40%**：高毛利率意味着定价权、品牌溢价或技术壁垒，且趋势提升说明业务结构优化")
    lines.append("3. **净利率 > 15%**：衡量最终盈利水平，显示经营效率和费用控制能力")
    lines.append("4. **FCF持续正且FCF/收入 > 15%**：自由现金才是真金白银，高FCF比率说明盈利质量高")
    lines.append("5. **资产负债率 < 50% 或净现金**：低杠杆是安全垫，净现金头寸更佳")
    lines.append("6. **收入持续增长**：增长是长期复利的基础，偶发下滑可接受（如FY2022）但趋势需向上")
    lines.append("7. **护城河明显且可持续**：定性指标，评估核心竞争力、竞争壁垒和可持续性")
    lines.append("")
    lines.append("### 硬指标淘汰机制")
    lines.append("")
    lines.append("- **0条通过** → 直接排除（劣质标的）")
    lines.append("- **1-4条通过** → 高度可疑，需严格审视")
    lines.append("- **5-6条通过** → 可进入下一阶段，但需特别关注未通过项")
    lines.append("- **7条全部通过** → 推荐进入深度研究（腾讯本次评估结果为全部通过）")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("*报告生成时间：2026-07-07*")

    return "\n".join(lines)


# ============================================================
# 3. HTML页面: 去劣筛选-腾讯.html
# ============================================================
def build_html():
    indicator_rows = ""
    for idx, ind in enumerate(indicators, 1):
        status_icon = "✅" if ind["pass"] else "❌"
        status_class = "pass" if ind["pass"] else "fail"
        data_html = ind['data'].replace('\n', '<br>')
        indicator_rows += f"""
        <div class="indicator">
            <div class="indicator-header {status_class}">
                <span class="indicator-num">{idx}</span>
                <span class="indicator-name">{ind['name']}</span>
                <span class="indicator-status">{status_icon} {'通过' if ind['pass'] else '未通过'}</span>
            </div>
            <div class="indicator-body">
                <p><strong>分析：</strong>{ind['summary']}</p>
                <p><strong>数据：</strong><br>{data_html}</p>
            </div>
        </div>
        """

    risk_items = """
    <ul>
        <li><strong>监管风险</strong>：中国互联网监管政策仍是长期不确定性因素</li>
        <li><strong>投资组合波动</strong>：大量股权投资受市场波动影响，FY2023净利下滑部分源于此</li>
        <li><strong>增长放缓</strong>：收入CAGR约6%，较早期增速显著放缓，成熟期特征明显</li>
        <li><strong>地缘政治风险</strong>：中美科技竞争可能影响部分业务和投资布局</li>
    </ul>
    """

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>腾讯控股 — 七条硬指标去劣筛选报告</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.8;
        }}
        .container {{ max-width: 960px; margin: 0 auto; padding: 20px; }}
        .header {{
            background: linear-gradient(135deg, #1A4B8C 0%, #2a6cb8 100%);
            color: #fff;
            padding: 40px 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(26,75,140,0.3);
        }}
        .header h1 {{ font-size: 28px; margin-bottom: 8px; }}
        .header .meta {{ font-size: 13px; margin-top: 12px; opacity: 0.75; }}
        .conclusion-box {{
            background: #fff;
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            border-left: 5px solid #1A4B8C;
        }}
        .conclusion-box .all-pass {{
            color: #1a8c4b;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 10px;
        }}
        .stats {{ display: flex; gap: 20px; margin: 15px 0; }}
        .stat-item {{ flex: 1; text-align: center; }}
        .stat-item .num {{ font-size: 32px; font-weight: 700; color: #1A4B8C; }}
        .stat-item .label {{ font-size: 14px; color: #888; }}
        .indicator {{
            background: #fff;
            border-radius: 10px;
            margin-bottom: 20px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }}
        .indicator-header {{
            display: flex;
            align-items: center;
            padding: 16px 20px;
            font-weight: 600;
            border-bottom: 1px solid #eee;
        }}
        .indicator-header.pass {{ background: #f0faf4; }}
        .indicator-header.fail {{ background: #fef0f0; }}
        .indicator-num {{
            width: 32px; height: 32px; border-radius: 50%;
            background: #1A4B8C; color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 14px; font-weight: 700; margin-right: 12px; flex-shrink: 0;
        }}
        .indicator-header.fail .indicator-num {{ background: #e74c3c; }}
        .indicator-name {{ flex: 1; font-size: 16px; }}
        .indicator-status {{ font-size: 14px; }}
        .indicator-body {{ padding: 18px 20px; font-size: 14px; }}
        .indicator-body p {{ margin-bottom: 8px; }}
        .indicator-body p:last-child {{ margin-bottom: 0; }}
        .section-title {{
            font-size: 22px; font-weight: 700; color: #1A4B8C;
            margin: 30px 0 20px; padding-bottom: 8px;
            border-bottom: 3px solid #1A4B8C;
        }}
        .risk-box {{
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }}
        .risk-box ul {{ padding-left: 20px; }}
        .risk-box li {{ margin-bottom: 8px; }}
        .next-step {{
            background: linear-gradient(135deg, #1a8c4b 0%, #28a760 100%);
            color: #fff;
            padding: 20px 25px;
            border-radius: 10px;
            margin: 30px 0;
            box-shadow: 0 4px 15px rgba(26,140,75,0.3);
        }}
        .next-step h3 {{ margin-bottom: 8px; }}
        .next-step p {{ opacity: 0.95; font-size: 14px; }}
        .footer {{
            text-align: center;
            padding: 30px 0;
            font-size: 12px;
            color: #aaa;
        }}
        @media (max-width: 600px) {{
            .header h1 {{ font-size: 22px; }}
            .indicator-header {{ flex-wrap: wrap; }}
            .indicator-status {{ margin-left: auto; }}
            .stats {{ flex-direction: column; gap: 10px; }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>📊 腾讯控股（00700.HK）<br>七条硬指标去劣筛选报告</h1>
            <div class="meta">筛选日期：2026-07-07 | 数据截止：TTM 2026 | 分析框架：七条硬指标去劣法</div>
        </div>

        <!-- 结论 -->
        <div class="conclusion-box">
            <div class="all-pass">✅ 全部7条硬指标通过！腾讯确认为合格投资标的</div>
            <p style="margin-bottom: 12px;">七条硬指标旨在快速排除劣质标的，保留优质候选进入深度研究。腾讯本次评估结果如下：</p>
            <div class="stats">
                <div class="stat-item">
                    <div class="num" style="color:#1a8c4b;">{pass_count}</div>
                    <div class="label">✅ 通过</div>
                </div>
                <div class="stat-item">
                    <div class="num" style="color:#e74c3c;">{fail_count}</div>
                    <div class="label">❌ 未通过</div>
                </div>
                <div class="stat-item">
                    <div class="num" style="color:#1A4B8C;">7</div>
                    <div class="label">📋 总计</div>
                </div>
            </div>
            <p style="font-weight: 600; color: #1a8c4b;">结论：推荐进入后续深度研究（第三步：杜邦分析）</p>
        </div>

        <!-- 逐项分析 -->
        <h2 class="section-title">📋 七条指标逐项分析</h2>
        {indicator_rows}

        <!-- 综合评估 -->
        <h2 class="section-title">📝 综合评估</h2>

        <div class="risk-box">
            <h3 style="color:#1a8c4b; margin-bottom:12px;">✅ 优势总结</h3>
            <ol style="padding-left:20px;">
                <li><strong>盈利质量优秀</strong>：ROE连续5年&gt;15%，毛利率持续提升至56%+，净利率稳定在18%~30%</li>
                <li><strong>现金生成能力极强</strong>：FCF连续5年超1,200亿，FCF/收入稳定在22%~33%</li>
                <li><strong>财务结构稳健</strong>：净现金头寸、低杠杆（D/E 0.33）、高利息覆盖倍数</li>
                <li><strong>收入增长韧性强</strong>：除FY2022微降外保持增长，近3年加速至8%~14%</li>
                <li><strong>护城河深厚</strong>：社交+游戏+支付+云+投资，多重壁垒叠加</li>
            </ol>
        </div>

        <div class="risk-box">
            <h3 style="color:#e74c3c; margin-bottom:12px;">⚠️ 潜在风险</h3>
            {risk_items}
        </div>

        <!-- 下一步 -->
        <div class="next-step">
            <h3>🚀 下一步建议</h3>
            <p>✅ 七条硬指标全部通过，建议进入第三步：<strong>杜邦分析体系</strong> — 对腾讯进行更深入的财务拆解和盈利质量评估。</p>
        </div>

        <div class="footer">
            <p>报告生成时间：2026-07-07 | 数据来源：公开财务数据整理</p>
            <p>Hermes Agent — Nous Research / AI Berkshire</p>
        </div>
    </div>
</body>
</html>"""
    return html


# ============================================================
# Write all files
# ============================================================
def main():
    os.makedirs(BASE_PATH, exist_ok=True)

    # 1. 主报告 Markdown
    md_path = os.path.join(BASE_PATH, "去劣筛选-腾讯.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(build_markdown_report())
    print(f"✅ 已生成: {md_path}")

    # 2. 补充材料 Markdown
    supp_path = os.path.join(BASE_PATH, "补充材料-腾讯七条硬指标.md")
    with open(supp_path, "w", encoding="utf-8") as f:
        f.write(build_supplement())
    print(f"✅ 已生成: {supp_path}")

    # 3. HTML 报告
    html_path = os.path.join(BASE_PATH, "去劣筛选-腾讯.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(build_html())
    print(f"✅ 已生成: {html_path}")

    print("\n🎉 全部报告生成完成！")


if __name__ == "__main__":
    main()
