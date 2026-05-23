// 资产全览页面

import { fmtCurrency, fmtCurrencyCompact, fmtPct, perfClass } from "./工具函数.js";

export function renderAssetOverview(state, t) {
  const products = state.data.products || [];
  const summary = calculateAssetSummary(products);
  const profitSummary = calculateProfitSummary(state.data);

  const pieData = products.filter(p => p.name !== "现金").map(p => {
    let latestValue = 0;
    if (p.valueHistory && p.valueHistory.length > 0) {
      const sorted = [...p.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
      latestValue = sorted[0].value || 0;
    }
    return {
      name: p.name,
      platform: p.platform,
      value: latestValue
    };
  }).filter(p => p.value > 0);

  const productData = products.filter(p => p.name !== "现金").map(p => {
    if (p.valueHistory && p.valueHistory.length > 0) {
      return {
        id: p.id,
        name: p.name,
        platform: p.platform,
        history: p.valueHistory
      };
    }
    return null;
  }).filter(Boolean);

  const activeTab = state.ui.assetOverviewTab || 'current';

  let html = `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("assetOverview")}</div>
        <div class="section-subtitle">${t("assetOverviewDesc")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <!-- 标签切换 -->
    <div class="page-tabs">
      <button class="page-tab ${activeTab === 'current' ? 'active' : ''}" data-action="switch-asset-tab" data-tab="current">
        <span class="tab-icon">📊</span>
        <span class="tab-label">${t("currentAssets")}</span>
      </button>
      <button class="page-tab ${activeTab === 'history' ? 'active' : ''}" data-action="switch-asset-tab" data-tab="history">
        <span class="tab-icon">💰</span>
        <span class="tab-label">${t("historicalProfit")}</span>
      </button>
    </div>
  `;

  if (activeTab === 'current') {
    html += renderCurrentAssets(state, t, products, summary, pieData, productData);
  } else {
    html += renderHistoryProfitPage(state, t, profitSummary);
  }

  html += `</div>`;
  return html;
}

function renderCurrentAssets(state, t, products, summary, pieData, productData) {
  let chartsHtml = '';
  if (productData.length > 0) {
    let chartCards = '';
    for (const product of productData) {
      const phaseSelect = product.name === "期货" ? `
        <select class="text-input text-input-sm" id="asset-phase-select-${product.id}" style="width:auto;min-width:110px;font-size:0.75rem;">
          <option value="all">${t("allPhases")}</option>
          <option value="phase2" selected>${t("phase2")}</option>
          <option value="phase1">${t("phase1")}</option>
        </select>
      ` : '';
      
      chartCards += `
        <div class="product-chart-container">
          <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
            <h4 style="font-size: 0.9rem; font-weight: 700;">${product.name}</h4>
            <div style="display:flex;gap:8px;align-items:center;">
              <span class="badge badge-orange">${product.platform}</span>
              ${phaseSelect}
            </div>
          </div>
          <canvas id="asset-product-chart-${product.id}" style="max-height:220px"></canvas>
        </div>
      `;
    }
    chartsHtml = `
    <div class="card fade-in-2">
      <div class="card-header"><div><div class="card-title">${t("productVolatility")}</div><div class="card-subtitle">${t("productValueTrend")}</div></div></div>
      <div class="card-body">
        <div class="grid-2 gap-16">
          ${chartCards}
        </div>
      </div>
    </div>
    `;
  }

  let productRows = '';
  const validProducts = products.filter(p => p.name !== "现金" && p.valueHistory && p.valueHistory.length > 0);
  if (validProducts.length > 0) {
    for (const p of validProducts) {
      const productSummary = calculateProductSummary(p);
      productRows += `<tr>
        <td style="font-weight:600">${p.name}</td>
        <td>${p.platform}</td>
        <td class="mono">${typeof productSummary.netAmount === "number" ? fmtCurrency(productSummary.netAmount) : "-"}</td>
        <td class="mono">${typeof productSummary.latestValue === "number" ? fmtCurrency(productSummary.latestValue) : "-"}</td>
        <td>${productSummary.latestValueDate || "-"}</td>
        <td class="mono ${perfClass(productSummary.returnRate)}">${fmtPct(productSummary.returnRate)}</td>
      </tr>`;
    }
  } else {
    productRows = `<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--text-tertiary)">${t("noProductNavData")}</td></tr>`;
  }

  const pieChartHtml = pieData.length > 0 ? `<canvas id="asset-pie-chart" style="max-height:300px"></canvas>` : `<div class="empty-state"><p>${t("noProductData")}</p></div>`;

  return `
    <div class="kpi-grid-4 fade-in-1">
      <div class="kpi-card highlighted">
        <div class="kpi-label">${t("productCount")}</div>
        <div class="kpi-value">${summary.productCount}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("currentInvestmentTotal")}</div>
        <div class="kpi-value">${fmtCurrencyCompact(summary.totalValue)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("cumulativeReturn")}</div>
        <div class="kpi-value ${perfClass(summary.totalReturnRate)}">${fmtCurrencyCompact(Math.abs(summary.totalProfit))}</div>
        <div class="kpi-caption ${perfClass(summary.totalReturnRate)}">${summary.totalProfit >= 0 ? "+" : "-"}${fmtPct(Math.abs(summary.totalReturnRate))}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("investorQuantity")}</div>
        <div class="kpi-value">${state.data.investors?.length || 0}</div>
      </div>
    </div>

    <div class="card fade-in-1">
      <div class="card-header"><div><div class="card-title">${t("fundDistribution")}</div><div class="card-subtitle">${t("portfolioAllocation")}</div></div></div>
      <div class="card-body">
        ${pieChartHtml}
      </div>
    </div>

    ${chartsHtml}

    <div class="card fade-in-3">
      <div class="card-header">
        <div><div class="card-title">${t("productPerformance")}</div><div class="card-subtitle">${t("productPerformanceDesc")}</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>${t("productName")}</th>
              <th>${t("platform")}</th>
              <th>${t("totalInvested")}</th>
              <th>${t("currentAssetValue")}</th>
              <th>${t("valueDate")}</th>
              <th>${t("returnRate")}</th>
            </tr></thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderHistoryProfitPage(state, t, profitSummary) {
  const profitRecords = state.data.profitRecords || [];
  const commissionRecords = state.data.commissionRecords || [];
  const interestRecords = state.data.interestRecords || [];
  const payoutTotal = profitSummary.totalCommission + profitSummary.totalInterest;
  const retainedRate = profitSummary.totalProfit ? profitSummary.surplus / profitSummary.totalProfit : 0;

  let profitRows = '';
  if (profitRecords.length > 0) {
    const sorted = [...profitRecords].sort((a, b) => b.date.localeCompare(a.date));
    for (const r of sorted) {
      const product = state.data.products.find(p => p.id === r.productId);
      profitRows += `<tr>
        <td><span class="record-date">${r.date}</span></td>
        <td><span class="record-name">${product ? product.name : r.productId}</span></td>
        <td class="mono text-green record-amount">+${fmtCurrency(r.amount)}</td>
        <td class="record-note">${r.note || "-"}</td>
      </tr>`;
    }
  }

  let commissionRows = '';
  if (commissionRecords.length > 0) {
    const sorted = [...commissionRecords].sort((a, b) => b.date.localeCompare(a.date));
    for (const r of sorted) {
      commissionRows += `<tr>
        <td><span class="record-date">${r.date}</span></td>
        <td><span class="record-name">${r.managerName || "黄斐斐"}</span></td>
        <td class="mono text-orange record-amount">-${fmtCurrency(r.amount)}</td>
        <td class="record-note">${r.note || "-"}</td>
      </tr>`;
    }
  }

  let interestRows = '';
  if (interestRecords.length > 0) {
    const sorted = [...interestRecords].sort((a, b) => b.date.localeCompare(a.date));
    for (const r of sorted) {
      const investor = state.data.investors.find(i => i.id === r.investorId);
      interestRows += `<tr>
        <td><span class="record-date">${r.date}</span></td>
        <td><span class="record-name">${investor ? investor.name : r.investorId}</span></td>
        <td class="mono text-cyan record-amount">-${fmtCurrency(r.amount)}</td>
        <td class="record-note">${r.note || "-"}</td>
      </tr>`;
    }
  }

  const renderRecordPanel = ({ type, title, subtitle, count, columns, rows }) => `
    <div class="profit-record-panel ${type}">
      <div class="profit-record-header">
        <div>
          <div class="profit-record-title">${title}</div>
          <div class="profit-record-subtitle">${subtitle}</div>
        </div>
        <span class="profit-record-count">${t("recordCount").replace("{n}", count)}</span>
      </div>
      <div class="profit-record-body">
        ${rows ? `
          <div class="history-table-wrap">
            <table class="history-profit-table">
              <thead><tr>${columns.map(column => `<th>${column}</th>`).join("")}</tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        ` : `
          <div class="profit-empty-state">
            <span class="profit-empty-line"></span>
            <span>${t("noRecords")}</span>
          </div>
        `}
      </div>
    </div>
  `;

  return `
    <div class="history-profit-section">
      <div class="profit-overview-panel">
        <div class="profit-overview-main">
          <div class="profit-eyebrow">${t("historicalProfitNet")}</div>
          <div class="profit-net-value ${profitSummary.surplus >= 0 ? 'text-green' : 'text-red'}">
            ${profitSummary.surplus >= 0 ? '+' : ''}${fmtCurrency(profitSummary.surplus)}
          </div>
          <div class="profit-net-caption">
            ${t("extractedProfit")} ${fmtCurrencyCompact(profitSummary.totalProfit)} · ${t("paidOut")} ${fmtCurrencyCompact(payoutTotal)}
          </div>
          <div class="profit-ratio-track" aria-hidden="true">
            <span style="width:${Math.max(0, Math.min(100, retainedRate * 100))}%"></span>
          </div>
          <div class="profit-ratio-meta">
            <span>${t("retentionRate")}</span>
            <strong class="${retainedRate >= 0 ? 'text-green' : 'text-red'}">${fmtPct(retainedRate)}</strong>
          </div>
        </div>

        <div class="profit-flow-grid">
          <div class="profit-flow-item income">
            <div class="profit-flow-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 17L10 12L13 15L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 8H19V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div>
              <div class="profit-flow-label">${t("extractProfit")}</div>
              <div class="profit-flow-value text-green">+${fmtCurrencyCompact(profitSummary.totalProfit)}</div>
              <div class="profit-flow-meta">${t("profitIncomeCount").replace("{n}", profitRecords.length)}</div>
            </div>
          </div>

          <div class="profit-flow-item commission">
            <div class="profit-flow-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3.5 19h17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8.5 9.5L12 5l3.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div>
              <div class="profit-flow-label">${t("commissionPayout")}</div>
              <div class="profit-flow-value text-orange">-${fmtCurrencyCompact(profitSummary.totalCommission)}</div>
              <div class="profit-flow-meta">${t("payoutCount").replace("{n}", commissionRecords.length)}</div>
            </div>
          </div>

          <div class="profit-flow-item interest">
            <div class="profit-flow-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 11h8M8 14h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 7V5h10v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div>
              <div class="profit-flow-label">${t("interestPayout")}</div>
              <div class="profit-flow-value text-cyan">-${fmtCurrencyCompact(profitSummary.totalInterest)}</div>
              <div class="profit-flow-meta">${t("payoutCount").replace("{n}", interestRecords.length)}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="profit-equation-strip">
        <div class="equation-chip income">
          <span>${t("extractProfit")}</span>
          <strong>${fmtCurrencyCompact(profitSummary.totalProfit)}</strong>
        </div>
        <span class="equation-symbol">-</span>
        <div class="equation-chip commission">
          <span>${t("commission")}</span>
          <strong>${fmtCurrencyCompact(profitSummary.totalCommission)}</strong>
        </div>
        <span class="equation-symbol">-</span>
        <div class="equation-chip interest">
          <span>${t("interest")}</span>
          <strong>${fmtCurrencyCompact(profitSummary.totalInterest)}</strong>
        </div>
        <span class="equation-symbol">=</span>
        <div class="equation-chip result ${profitSummary.surplus >= 0 ? 'positive' : 'negative'}">
          <span>${t("actualSurplus")}</span>
          <strong>${profitSummary.surplus >= 0 ? '+' : ''}${fmtCurrencyCompact(profitSummary.surplus)}</strong>
        </div>
      </div>

      <div class="profit-record-grid">
        ${renderRecordPanel({
          type: "income",
          title: t("profitExtractionRecords"),
          subtitle: t("profitExtractionRecordsDesc"),
          count: profitRecords.length,
          columns: [t("date"), t("product"), t("amount"), t("note")],
          rows: profitRows
        })}

        ${renderRecordPanel({
          type: "commission",
          title: t("commissionPayoutRecords"),
          subtitle: t("commissionPayoutRecordsDesc"),
          count: commissionRecords.length,
          columns: [t("date"), t("manager"), t("amount"), t("note")],
          rows: commissionRows
        })}

        ${renderRecordPanel({
          type: "interest",
          title: t("interestPayoutRecords"),
          subtitle: t("interestPayoutRecordsDesc"),
          count: interestRecords.length,
          columns: [t("date"), t("investorId"), t("amount"), t("note")],
          rows: interestRows
        })}
      </div>
    </div>
  `;
}

function calculateAssetSummary(products) {
  let totalValue = 0;
  let totalInvested = 0;

  products.forEach(p => {
    if (p.name === "现金") return;
    const ps = calculateProductSummary(p);
    totalValue += ps.latestValue || 0;
    totalInvested += ps.netAmount || 0;
  });

  const totalProfit = totalValue - totalInvested;
  const totalReturnRate = totalInvested ? (totalValue - totalInvested) / totalInvested : 0;

  return {
    productCount: products.filter(p => p.name !== "现金").length,
    totalValue,
    totalInvested,
    totalProfit,
    totalReturnRate
  };
}

function calculateProfitSummary(data) {
  const totalProfit = (data.profitRecords || []).reduce((sum, r) => sum + (r.amount || 0), 0);
  const totalCommission = (data.commissionRecords || []).reduce((sum, r) => sum + (r.amount || 0), 0);
  const totalInterest = (data.interestRecords || []).reduce((sum, r) => sum + (r.amount || 0), 0);
  const surplus = totalProfit - totalCommission - totalInterest;

  return {
    totalProfit,
    totalCommission,
    totalInterest,
    surplus
  };
}

function calculateProductSummary(product) {
  const totalDeposits = product.transactions?.filter(t => t.type === "deposit").reduce((sum, t) => sum + t.amount, 0) || 0;
  const totalWithdrawals = product.transactions?.filter(t => t.type === "withdrawal").reduce((sum, t) => sum + t.amount, 0) || 0;
  const netAmount = totalDeposits - totalWithdrawals;

  let latestValue = null;
  let latestValueDate = null;
  if (product.valueHistory && product.valueHistory.length > 0) {
    const sorted = [...product.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
    latestValue = sorted[0].value;
    latestValueDate = sorted[0].date;
  }

  const returnRate = netAmount ? (latestValue - netAmount) / netAmount : 0;

  return {
    totalDeposits,
    totalWithdrawals,
    netAmount,
    latestValue,
    latestValueDate,
    returnRate
  };
}

export function afterRenderAssetOverview(state, t) {
  if (state.ui.assetOverviewTab !== 'history') {
    mountAssetPieChart(state);
    mountAssetProductTrendChart(state, "phase2", t);
    bindAssetPhaseSelector(state, t);
  }
}

function mountAssetPieChart(state) {
  const canvas = document.querySelector("#asset-pie-chart");
  if (!canvas || !window.Chart) return;

  const products = state.data.products || [];
  const pieData = products.filter(p => p.name !== "现金").map(p => {
    let latestValue = 0;
    if (p.valueHistory && p.valueHistory.length > 0) {
      const sorted = [...p.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
      latestValue = sorted[0].value || 0;
    }
    return {
      name: p.name,
      value: latestValue
    };
  }).filter(p => p.value > 0);

  if (pieData.length === 0) return;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const textColor = isDark ? "rgba(249,250,251,0.8)" : "rgba(15,23,42,0.8)";
  const backgroundColor = ['#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'];

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
            font: { family: "'DM Sans', sans-serif", size: 12 },
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
              return label + ": " + value.toLocaleString() + " (" + percentage + "%)";
            }
          }
        }
      }
    }
  });
}

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
    default:
      return history;
  }
}

function mountAssetProductTrendChart(state, phase = "phase2", t = key => key) {
  const products = state.data.products || [];
  const productData = products.filter(p => p.name !== "现金").map(p => {
    if (p.valueHistory && p.valueHistory.length > 0) {
      return {
        id: p.id,
        name: p.name,
        platform: p.platform,
        history: getFilteredHistory(p.valueHistory, phase, p.name)
      };
    }
    return null;
  }).filter(p => p && p.history.length > 0);

  if (productData.length === 0) return;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const textColor = isDark ? "rgba(249,250,251,0.65)" : "rgba(15,23,42,0.65)";
  const lineColors = ['#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'];

  productData.forEach((product, index) => {
    const canvas = document.querySelector("#asset-product-chart-" + product.id);
    if (!canvas || !window.Chart) return;

    if (window.assetProductCharts && window.assetProductCharts[product.id]) {
      window.assetProductCharts[product.id].destroy();
    }

    const sortedHistory = [...product.history].sort((a, b) => a.date.localeCompare(b.date));
    const labels = sortedHistory.map(item => item.date.replace("-", "."));
    const values = sortedHistory.map(item => item.value);
    const color = lineColors[index % lineColors.length];

    const chart = new window.Chart(canvas, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: product.name,
          data: values,
          borderColor: color,
          backgroundColor: color + "20",
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
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                const value = context.parsed.y || 0;
                return t("totalValueColumn") + ": " + value.toLocaleString();
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, maxTicksLimit: 6, font: { family: "'DM Mono', monospace", size: 10 } }
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { family: "'DM Mono', monospace", size: 10 }, callback: function(v) { return '¥' + v.toLocaleString(); } }
          }
        }
      }
    });

    if (!window.assetProductCharts) window.assetProductCharts = {};
    window.assetProductCharts[product.id] = chart;
  });
}

function bindAssetPhaseSelector(state, t = key => key) {
  document.querySelectorAll("[id^='asset-phase-select-']").forEach(select => {
    select.addEventListener("change", function() {
      mountAssetProductTrendChart(state, this.value, t);
    });
  });
}
