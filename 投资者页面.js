// 投资者页面

import { getInvestorSummary, fmtCurrency, fmtCurrencyCompact, fmtSignedPct, perfClass } from "./工具函数.js";
import { renderChartPlaceholder, mountChart } from "./图表.js";

export function renderInvestorPage(state, t) {
  const investor = state.data.investors.find(i => i.id === state.session?.userId);
  if (!investor) return `<div class="empty-state"><p>${t("investorNotFound")}</p></div>`;

  const summary = getInvestorSummary(investor, state.data.products);

  // 获取当前投资者的利息记录
  const investorInterestRecords = (state.data.interestRecords || []).filter(r => r.investorId === investor.id);
  const totalInterest = investorInterestRecords.reduce((sum, r) => sum + (r.amount || 0), 0);

  const allocations = (investor.allocations || []).filter(a => (a.amount || 0) > 0).map(a => {
    let allocationInvested = a.amount || 0;
    let allocationValue = 0;
    let retRate = 0;
    
    // 从产品的valueHistory获取最新价值，根据分配金额计算最新估值
    if (a.productId && state.data.products.length > 0) {
      const product = state.data.products.find(p => p.id === a.productId);
      if (product) {
        // 计算产品的总投入
        const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
        const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
        const productTotal = productDeposits - productWithdrawals;
        
        // 尝试从产品的valueHistory获取最新价值，根据分配金额计算最新估值
        if (product.valueHistory && product.valueHistory.length > 0) {
          const sorted = [...product.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
          const productLatestValue = sorted[0].value || 0;
          if (productTotal > 0) {
            allocationValue = (productLatestValue * allocationInvested) / productTotal;
          }
        }
      }
    }
    
    // 计算收益率
    if (allocationInvested > 0) {
      retRate = (allocationValue - allocationInvested) / allocationInvested;
    }
    
    const weight = summary.totalInvested ? (allocationInvested / summary.totalInvested) * 100 : 0;
    
    return `
    <div class="alloc-item fade-in-3">
      <div class="alloc-top">
        <div>
          <div class="alloc-name">${a.name || getProductName(a.productId, state.data.products)}</div>
          <div class="alloc-focus">${a.focus || getProductPlatform(a.productId, state.data.products)}</div>
          <div class="alloc-code">${a.code}</div>
        </div>
        <span class="${perfClass(retRate)}" style="font-family:var(--font-mono);font-weight:700;font-size:.95rem;white-space:nowrap">${fmtSignedPct(retRate)}</span>
      </div>
      <div class="alloc-bar"><div class="alloc-bar-fill" style="width:${weight.toFixed(1)}%"></div></div>
      <div class="alloc-metrics">
        <div><div class="alloc-metric-label">${t("invested")}</div><div class="alloc-metric-value">${fmtCurrencyCompact(allocationInvested)}</div></div>
        <div><div class="alloc-metric-label">${t("valuation")}</div><div class="alloc-metric-value">${fmtCurrencyCompact(allocationValue)}</div></div>
        <div><div class="alloc-metric-label">${t("percentage")}</div><div class="alloc-metric-value">${weight.toFixed(1)}%</div></div>
        <div><div class="alloc-metric-label">${t("return")}</div><div class="alloc-metric-value ${perfClass(retRate)}">${fmtSignedPct(retRate)}</div></div>
      </div>
    </div>`;
  }).join("") || `<div class="empty-state"><p>${t("noAllocations")}</p></div>`;

  const notices = (investor.notices || []).slice(0, 4).map(n => `
    <div class="notice-item">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:6px">
        <span class="notice-title">${n.title}</span>
        <span class="notice-date">${n.date}</span>
      </div>
      <div class="notice-body">${n.detail}</div>
    </div>`).join("") || `<div class="empty-state"><p>${t("noNotices")}</p></div>`;

  // 准备饼状图数据
  const pieData = (investor.allocations || []).map(a => {
    const allocationInvested = a.amount || 0;
    return {
      name: a.name || getProductName(a.productId, state.data.products),
      value: allocationInvested
    };
  }).filter(item => item.value > 0);

  // 准备产品波动数据
  const productData = (investor.allocations || []).filter(a => (a.amount || 0) > 0).map(a => {
    if (a.productId) {
      const product = state.data.products.find(p => p.id === a.productId);
      if (product && product.valueHistory && product.valueHistory.length > 0) {
        return {
          id: product.id,
          name: product.name,
          platform: product.platform,
          history: product.valueHistory
        };
      }
    }
    return null;
  }).filter(Boolean);

  // 获取最新价值更新日期
  function getLatestUpdateDate() {
    let latestDate = null;
    
    // 检查投资者分配的最新日期
    (investor.allocations || []).forEach(allocation => {
      if (allocation.lastUpdate) {
        if (!latestDate || allocation.lastUpdate > latestDate) {
          latestDate = allocation.lastUpdate;
        }
      }
    });
    
    // 检查产品价值历史的最新日期
    (state.data.products || []).forEach(product => {
      if (product.valueHistory && product.valueHistory.length > 0) {
        const productLatest = [...product.valueHistory].sort((a, b) => b.date.localeCompare(a.date))[0];
        if (productLatest && productLatest.date) {
          if (!latestDate || productLatest.date > latestDate) {
            latestDate = productLatest.date;
          }
        }
      }
    });
    
    return latestDate || investor.lastReview || '未知';
  }
  
  const latestUpdateDate = getLatestUpdateDate();

  return `
  <div class="investor-header">
    <div>
      <div class="investor-name">${investor.name}</div>
      <div class="investor-meta">
        <span class="badge badge-blue">${t("verifiedAccess")}</span>
        <span style="font-size:.78rem;color:var(--text-tertiary)">${t("investorId")} ${investor.id}</span>
      </div>
    </div>
    <div class="toolbar" style="align-items: center;">
        ${state.session?.isAdminView ? `
          <div style="
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px 16px;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 10px;
            margin-right: 16px;
          ">
            <div style="
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #6366f1;
              animation: pulse 2s infinite;
            "></div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #8b5cf6;">${t("adminViewMode")}</span>
            <button class="btn-primary btn-sm" data-action="return-to-admin" style="
              background: linear-gradient(135deg, #6366f1, #8b5cf6);
              box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
              border: none;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              ${t("backToAdmin")}
            </button>
          </div>
        ` : ''}
        <span style="font-size:.78rem;color:var(--text-tertiary)">${t("dataUpdateDate")}${latestUpdateDate}</span>
        <button class="btn-primary btn-sm" data-action="export-pdf" style="margin-left:12px;">
          ${t("exportPDF")}
        </button>
        <button class="btn-ghost btn-sm" data-action="logout">${t("logout")}</button>
      </div>
  </div>

  <div class="content-inner stack">
    <!-- KPI 行 -->
    <div class="kpi-grid-3 fade-in">
      <div class="kpi-card highlighted">
        <div class="kpi-label">${t("totalInvested")}</div>
        <div class="kpi-value">${fmtCurrencyCompact(summary.totalInvested)}</div>
        <div class="kpi-caption">${investor.joinedAt} ${t("joinedAt")}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("latestValuation")}</div>
        <div class="kpi-value">${fmtCurrencyCompact(summary.totalValue)}</div>
        <div class="kpi-caption ${perfClass(summary.profit)}">${summary.profit >= 0 ? "+" : ""}${fmtCurrencyCompact(Math.abs(summary.profit))}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("returnRate")}</div>
        <div class="kpi-value ${perfClass(summary.returnRate)}">${fmtSignedPct(summary.returnRate)}</div>
        <div class="kpi-caption">${t("bestAllocation")} ${summary.bestAllocation?.name ?? "—"}</div>
      </div>
    </div>

    <!-- 利息 KPI -->
    ${totalInterest > 0 ? `
    <div class="kpi-grid-2 fade-in-1">
      <div class="kpi-card">
        <div class="kpi-label">${t("totalInterestPaid")}</div>
        <div class="kpi-value text-green">${fmtCurrencyCompact(totalInterest)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("interestCount")}</div>
        <div class="kpi-value">${investorInterestRecords.length}</div>
      </div>
    </div>` : ''}

    <!-- 投资分布饼状图 -->
    <div class="card fade-in-1">
      <div class="card-header"><div><div class="card-title">${t("fundDistribution")}</div><div class="card-subtitle">${t("portfolioAllocation")}</div></div></div>
      <div class="card-body">
        ${pieData.length > 0 ? `
          <canvas id="allocation-pie-chart" style="max-height:300px"></canvas>
        ` : `<div class="empty-state"><p>${t("noInvestmentData")}</p></div>`}
      </div>
    </div>

    <!-- 利息发放趋势 -->
    ${investorInterestRecords.length > 0 ? `
    <div class="card fade-in-2">
      <div class="card-header"><div><div class="card-title">${t("interestTrend")}</div><div class="card-subtitle">${t("cumulativeInterest")}</div></div></div>
      <div class="card-body">
        <canvas id="interest-trend-chart" style="max-height:280px"></canvas>
      </div>
    </div>` : ''}

    <!-- 产品波动曲线图 -->
    ${productData.length > 0 ? `
    <div class="card fade-in-2">
      <div class="card-header"><div><div class="card-title">${t("productVolatility")}</div><div class="card-subtitle">${t("productValueTrend")}</div></div></div>
      <div class="card-body">
        <div class="grid-2 gap-16">
          ${productData.map((product, index) => `
            <div class="product-chart-container">
              <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
                <h4 style="font-size: 0.9rem; font-weight: 700;">${product.name}</h4>
                <div style="display:flex;gap:8px;align-items:center;">
                  <span class="badge badge-orange">${product.platform}</span>
                  ${product.name === "期货" ? `
                    <select class="text-input text-input-sm" id="phase-select-${product.id}" style="width:auto;min-width:110px;font-size:0.75rem;">
                      <option value="all">${t("allPhases")}</option>
                      <option value="phase2" selected>${t("phase2")}</option>
                      <option value="phase1">${t("phase1")}</option>
                    </select>
                  ` : ''}
                </div>
              </div>
              <canvas id="product-chart-${product.id}" style="max-height:220px"></canvas>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ` : `<div class="card fade-in-2"><div class="card-body"><div class="empty-state"><p>${t("noProductData")}</p></div></div></div>`}

    <!-- 投资表现概览 -->
    <div class="card fade-in-2">
      <div class="card-header"><div><div class="card-title">${t("investmentPerformance")}</div><div class="card-subtitle">${t("productReturnAnalysis")}</div></div></div>
      <div class="card-body stack" style="gap:12px">${allocations}</div>
    </div>

    <!-- 利息发放记录 -->
    ${investorInterestRecords.length > 0 ? `
    <div class="card fade-in-3">
      <div class="card-header"><div><div class="card-title">${t("interestRecords")}</div><div class="card-subtitle">${t("recentInterestDetails")}</div></div></div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>${t("paymentDate")}</th>
              <th>${t("paymentPlatform")}</th>
              <th>${t("interestAmount")}</th>
              <th>${t("remark")}</th>
            </tr></thead>
            <tbody>
              ${investorInterestRecords.sort((a, b) => b.date.localeCompare(a.date)).map(r => `
                <tr>
                  <td class="mono">${r.date}</td>
                  <td>${r.platform}</td>
                  <td class="mono text-green">+${fmtCurrency(r.amount)}</td>
                  <td style="color:var(--text-tertiary);font-size:.82rem">${r.note || "-"}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>` : ''}

    <!-- 投资组合分析 -->
    <div class="card fade-in-3">
      <div class="card-header"><div><div class="card-title">${t("portfolioAnalysis")}</div><div class="card-subtitle">${t("riskReturnAssessment")}</div></div></div>
      <div class="card-body">
        <div class="grid-2 gap-12">
          <div class="info-list">
            <div class="info-item">
              <span class="info-label">${t("investmentProductCount")}</span>
              <span class="info-value">${(investor.allocations || []).filter(a => (a.amount || 0) > 0).length || 0}</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t("averageReturn")}</span>
              <span class="info-value ${perfClass(summary.returnRate)}">${fmtSignedPct(summary.returnRate)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t("bestPerformingProduct")}</span>
              <span class="info-value">${summary.bestAllocation?.name ?? "—"}</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t("lastUpdated")}</span>
              <span class="info-value">${investor.lastReview}</span>
            </div>
          </div>
          <div class="info-list">
            <div class="info-item">
              <span class="info-label">${t("totalInvested")}</span>
              <span class="info-value">${fmtCurrency(summary.totalInvested)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t("totalValue")}</span>
              <span class="info-value">${fmtCurrency(summary.totalValue)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t("totalProfit")}</span>
              <span class="info-value ${perfClass(summary.profit)}">${summary.profit >= 0 ? "+" : ""}${fmtCurrency(Math.abs(summary.profit))}</span>
            </div>
            <div class="info-item">
              <span class="info-label">${t("investmentPeriod")}</span>
              <span class="info-value">${calculateInvestmentDays(investor.joinedAt)} ${t("days")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 沟通纪要 -->
    <div class="card fade-in-3">
      <div class="card-header"><div><div class="card-title">${t("notices")}</div><div class="card-subtitle">${t("recentNotices")}</div></div></div>
      <div class="card-body stack" style="gap:10px">${notices}</div>
    </div>
  </div>`;
}

/** 渲染后挂载 Chart.js 实例 */
export function afterRenderInvestor(state, t = key => key) {
  mountAllocationPieChart(state);
  mountProductTrendChart(state, "phase2", t);
  mountInterestTrendChart(state, t);
  bindPhaseSelector(state, t);
}

// 辅助函数：获取产品名称
function getProductName(productId, products) {
  const product = products.find(p => p.id === productId);
  return product ? product.name : "未知产品";
}

// 辅助函数：获取产品平台
function getProductPlatform(productId, products) {
  const product = products.find(p => p.id === productId);
  return product ? product.platform : "未知平台";
}

// 辅助函数：计算投资天数
function calculateInvestmentDays(joinedAt) {
  if (!joinedAt) return 0;
  const joinedDate = new Date(joinedAt);
  const today = new Date();
  const diffTime = Math.abs(today - joinedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// 挂载资金分布饼状图
function mountAllocationPieChart(state) {
  const investor = state.data.investors.find(i => i.id === state.session?.userId);
  if (!investor) return;

  const canvas = document.querySelector("#allocation-pie-chart");
  if (!canvas || !window.Chart) return;

  // 准备数据
  const pieData = (investor.allocations || []).map(a => {
    const allocationInvested = a.amount || 0;
    return {
      name: a.name || getProductName(a.productId, state.data.products),
      value: allocationInvested
    };
  }).filter(item => item.value > 0);

  if (pieData.length === 0) return;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const textColor = isDark ? "rgba(249,250,251,0.8)" : "rgba(15,23,42,0.8)";
  const backgroundColor = [
    '#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'
  ];

  new window.Chart(canvas, {
    type: "pie",
    data: {
      labels: pieData.map(item => item.name),
      datasets: [{
        data: pieData.map(item => item.value),
        backgroundColor: backgroundColor,
        borderColor: isDark ? "rgba(17,24,39,0.8)" : "rgba(255,255,255,0.8)",
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: { duration: 800 },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: textColor,
            font: {
              family: "'DM Sans', sans-serif",
              size: 12
            },
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ¥${value.toLocaleString()} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// 获取阶段筛选后的历史数据（只对期货产品应用阶段筛选）
function getFilteredHistory(history, phase, productName) {
  const phase2StartDate = "2026-05-05";
  
  if (productName !== "期货") {
    return history;
  }
  
  switch (phase) {
    case "phase1":
      return history.filter(h => h.date < phase2StartDate);
    case "phase2":
      return history.filter(h => h.date >= phase2StartDate);
    case "all":
    default:
      return history;
  }
}

// 挂载产品波动曲线图
function mountProductTrendChart(state, phase = "phase2", t = key => key) {
  const investor = state.data.investors.find(i => i.id === state.session?.userId);
  if (!investor) return;

  const productData = (investor.allocations || []).map(a => {
    if (a.productId) {
      const product = state.data.products.find(p => p.id === a.productId);
      if (product && product.valueHistory && product.valueHistory.length > 0) {
        return {
          id: product.id,
          name: product.name,
          platform: product.platform,
          history: getFilteredHistory(product.valueHistory, phase, product.name)
        };
      }
    }
    return null;
  }).filter(p => p && p.history.length > 0);

  if (productData.length === 0) return;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const textColor = isDark ? "rgba(249,250,251,0.65)" : "rgba(15,23,42,0.65)";
  const lineColors = [
    '#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'
  ];

  productData.forEach((product, index) => {
    const canvas = document.querySelector(`#product-chart-${product.id}`);
    if (!canvas || !window.Chart) return;

    const sortedHistory = [...product.history].sort((a, b) => a.date.localeCompare(b.date));
    const labels = sortedHistory.map(item => item.date.replace("-", "."));
    const values = sortedHistory.map(item => item.value);
    const color = lineColors[index % lineColors.length];

    if (window.productCharts && window.productCharts[product.id]) {
      window.productCharts[product.id].destroy();
    }

    const chart = new window.Chart(canvas, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: product.name,
          data: values,
          borderColor: color,
          backgroundColor: `${color}20`,
          borderWidth: 2,
          pointBackgroundColor: color,
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: { duration: 800 },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const value = context.parsed.y || 0;
                return `${t("totalValueColumn")}: ¥${value.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { 
              color: textColor,
              maxTicksLimit: 6,
              font: { family: "'DM Mono', monospace", size: 10 }
            }
          },
          y: {
            grid: { color: gridColor },
            ticks: { 
              color: textColor,
              font: { family: "'DM Mono', monospace", size: 10 },
              callback: function(value) {
                return '¥' + value.toLocaleString();
              }
            }
          }
        }
      }
    });

    if (!window.productCharts) window.productCharts = {};
    window.productCharts[product.id] = chart;
  });
}

// 添加阶段选择事件监听
export function bindPhaseSelector(state, t = key => key) {
  document.querySelectorAll("[id^='phase-select-']").forEach(select => {
    select.addEventListener("change", function() {
      mountProductTrendChart(state, this.value, t);
    });
  });
}

// 挂载利息发放趋势图
function mountInterestTrendChart(state, t = key => key) {
  const investor = state.data.investors.find(i => i.id === state.session?.userId);
  if (!investor) return;

  // 准备数据
  const investorInterestRecords = (state.data.interestRecords || []).filter(r => r.investorId === investor.id);
  if (investorInterestRecords.length === 0) return;

  const canvas = document.querySelector("#interest-trend-chart");
  if (!canvas || !window.Chart) return;

  // 按日期排序并计算累计利息
  const sortedRecords = [...investorInterestRecords].sort((a, b) => a.date.localeCompare(b.date));
  let cumulativeTotal = 0;
  const cumulativeData = sortedRecords.map(r => {
    cumulativeTotal += r.amount;
    return {
      date: r.date.replace("-", "."),
      amount: r.amount,
      cumulative: cumulativeTotal
    };
  });

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const textColor = isDark ? "rgba(249,250,251,0.65)" : "rgba(15,23,42,0.65)";

  new window.Chart(canvas, {
    type: "line",
    data: {
      labels: cumulativeData.map(d => d.date),
      datasets: [
        {
          label: t("interestAmount"),
          data: cumulativeData.map(d => d.amount),
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 2,
          pointBackgroundColor: '#22c55e',
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: false,
          tension: 0.3,
          yAxisID: 'y1'
        },
        {
          label: t("cumulativeInterest"),
          data: cumulativeData.map(d => d.cumulative),
          borderColor: '#0052ff',
          backgroundColor: 'rgba(0, 82, 255, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#0052ff',
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: { duration: 800 },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: textColor,
            font: { family: "'DM Sans', sans-serif", size: 11 },
            padding: 16
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = context.parsed.y || 0;
              return `${context.dataset.label}: ¥${value.toLocaleString()}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            maxTicksLimit: 8,
            font: { family: "'DM Mono', monospace", size: 11 }
          }
        },
        y: {
          grid: { color: gridColor },
          position: 'left',
          ticks: {
            color: textColor,
            font: { family: "'DM Mono', monospace", size: 11 },
            callback: function(value) {
              return '¥' + value.toLocaleString();
            }
          },
          title: {
            display: true,
            text: t("cumulativeInterest"),
            color: textColor,
            font: { family: "'DM Sans', sans-serif", size: 11 }
          }
        },
        y1: {
          position: 'right',
          grid: { display: false },
          ticks: {
            color: textColor,
            font: { family: "'DM Mono', monospace", size: 11 },
            callback: function(value) {
              return '¥' + value.toLocaleString();
            }
          },
          title: {
            display: true,
            text: t("interestAmount"),
            color: textColor,
            font: { family: "'DM Sans', sans-serif", size: 11 }
          }
        }
      }
    }
  });
}
