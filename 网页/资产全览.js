// 资产全览页面

import { fmtCurrency, fmtCurrencyCompact, fmtPct, perfClass } from "./工具函数.js";

export function renderAssetOverview(state, t) {
  const products = state.data.products || [];
  const summary = calculateAssetSummary(products);

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

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">资产全览</div>
        <div class="section-subtitle">所有产品的综合表现与资产概览</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <!-- 资产概览 KPI -->
    <div class="kpi-grid-4 fade-in-1">
      <div class="kpi-card highlighted">
        <div class="kpi-label">产品数量</div>
        <div class="kpi-value">${summary.productCount}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">当前投资总额</div>
        <div class="kpi-value">${fmtCurrencyCompact(summary.totalValue)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">累计收益</div>
        <div class="kpi-value ${perfClass(summary.totalReturnRate)}">${fmtCurrencyCompact(Math.abs(summary.totalProfit))}</div>
        <div class="kpi-caption ${perfClass(summary.totalReturnRate)}">${summary.totalProfit >= 0 ? "+" : "-"}${fmtPct(Math.abs(summary.totalReturnRate))}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">投资者数量</div>
        <div class="kpi-value">${state.data.investors?.length || 0}</div>
      </div>
    </div>

    <!-- 资金分布饼状图 -->
    <div class="card fade-in-1">
      <div class="card-header"><div><div class="card-title">资金分布</div><div class="card-subtitle">各产品当前价值占比</div></div></div>
      <div class="card-body">
        ${pieData.length > 0 ? `
          <canvas id="asset-pie-chart" style="max-height:300px"></canvas>
        ` : `<div class="empty-state"><p>暂无产品数据</p></div>`}
      </div>
    </div>

    <!-- 产品波动曲线图 -->
    ${productData.length > 0 ? `
    <div class="card fade-in-2">
      <div class="card-header"><div><div class="card-title">产品波动</div><div class="card-subtitle">各产品价值变化趋势</div></div></div>
      <div class="card-body">
        <div class="grid-2 gap-16">
          ${productData.map((product, index) => `
            <div class="product-chart-container">
              <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
                <h4 style="font-size: 0.9rem; font-weight: 700;">${product.name}</h4>
                <span class="badge badge-orange">${product.platform}</span>
              </div>
              <canvas id="asset-product-chart-${product.id}" style="max-height:220px"></canvas>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ` : `<div class="card fade-in-2"><div class="card-body"><div class="empty-state"><p>暂无产品净值数据</p></div></div></div>`}

    <!-- 产品详细列表 -->
    <div class="card fade-in-3">
      <div class="card-header">
        <div><div class="card-title">产品表现</div><div class="card-subtitle">按净值日期倒序排序</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>产品名称</th>
              <th>投资平台</th>
              <th>投资总额</th>
              <th>当前价值</th>
              <th>价值日期</th>
              <th>累计收益率</th>
            </tr></thead>
            <tbody>
              ${products.filter(p => p.name !== "现金" && p.valueHistory && p.valueHistory.length > 0).length ? products.filter(p => p.name !== "现金" && p.valueHistory && p.valueHistory.length > 0).map(p => {
                const productSummary = calculateProductSummary(p);
                return `<tr>
                  <td style="font-weight:600">${p.name}</td>
                  <td>${p.platform}</td>
                  <td class="mono">${typeof productSummary.netAmount === "number" ? fmtCurrency(productSummary.netAmount) : "-"}</td>
                  <td class="mono">${typeof productSummary.latestValue === "number" ? fmtCurrency(productSummary.latestValue) : "-"}</td>
                  <td>${productSummary.latestValueDate || "-"}</td>
                  <td class="mono ${perfClass(productSummary.returnRate)}">${fmtPct(productSummary.returnRate)}</td>
                </tr>`;
              }).join("") : `<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--text-tertiary)">暂无产品净值数据</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  `;
}

function calculateAssetSummary(products) {
  let totalValue = 0;
  let totalInvested = 0;

  products.forEach(p => {
    if (p.name === "现金") return; // 跳过现金产品
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
  mountAssetPieChart(state);
  mountAssetProductTrendChart(state);
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
              return `${label}: ¥${value.toLocaleString()} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function mountAssetProductTrendChart(state) {
  const products = state.data.products || [];
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

  if (productData.length === 0) return;

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const textColor = isDark ? "rgba(249,250,251,0.65)" : "rgba(15,23,42,0.65)";
  const lineColors = ['#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'];

  productData.forEach((product, index) => {
    const canvas = document.querySelector(`#asset-product-chart-${product.id}`);
    if (!canvas || !window.Chart) return;

    const sortedHistory = [...product.history].sort((a, b) => a.date.localeCompare(b.date));
    const labels = sortedHistory.map(item => item.date.replace("-", "."));
    const values = sortedHistory.map(item => item.value);
    const color = lineColors[index % lineColors.length];

    new window.Chart(canvas, {
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
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                const value = context.parsed.y || 0;
                return `价值: ¥${value.toLocaleString()}`;
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
            ticks: { color: textColor, font: { family: "'DM Mono', monospace", size: 10 }, callback: v => '¥' + v.toLocaleString() }
          }
        }
      }
    });
  });
}
