// 价值更新页面

import { fmtCurrency, fmtPct, perfClass } from "./工具函数.js";
import { renderChartPlaceholder, mountChart } from "./图表.js";

export function renderValueUpdate(state, t) {
  const products = state.data.products || [];
  const hasValueHistory = products.some(p => p.valueHistory && p.valueHistory.length > 0);

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">价值更新</div>
        <div class="section-subtitle">更新产品的最新总价值</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <div class="grid-2 gap-20" style="align-items:start">
      <div class="card">
        <div class="card-header"><div><div class="card-title">更新价值</div><div class="card-subtitle">录入产品最新净值</div></div></div>
        <div class="card-body">
          <form id="value-form" class="stack">
            <div class="form-field">
              <label class="form-label">选择产品</label>
              <select class="text-input" name="productId" required>
                <option value="">选择产品</option>
                ${products.map(product => `
                  <option value="${product.id}">${product.name} (${product.platform})</option>
                `).join("")}
              </select>
            </div>

            <div class="form-field">
              <label class="form-label">更新日期</label>
              <input class="text-input" type="date" name="date" required />
            </div>

            <div class="form-field">
              <label class="form-label">最新总价值</label>
              <input class="text-input" type="number" step="0.01" name="value" placeholder="0.00" required />
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary">保存价值</button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><div><div class="card-title">产品波动</div><div class="card-subtitle">选择产品的价值变化趋势</div></div></div>
        <div class="card-body" id="value-product-chart-container">
          ${products.length > 0 ? `
            <div style="margin-bottom:16px">
              <select class="text-input" id="value-chart-product-select">
                <option value="">选择产品查看波动</option>
                ${products.map(p => `<option value="${p.id}">${p.name}</option>`).join("")}
              </select>
            </div>
            <div id="value-chart-area">
              ${hasValueHistory ? `<canvas id="value-trend-chart" style="max-height:280px"></canvas>` : `<div class="empty-state"><p>暂无净值数据</p></div>`}
            </div>
          ` : `<div class="empty-state"><p>暂无产品</p></div>`}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div><div class="card-title">价值历史</div><div class="card-subtitle">查看产品的价值更新历史</div></div>
      </div>
      <div class="card-body" style="padding-top:0" id="value-history-container">
        <div class="empty-state">请选择产品查看价值历史</div>
      </div>
    </div>
  </div>
  `;
}

export function afterRenderValueUpdate(state, t) {
  const productSelect = document.querySelector("select[name=productId]");
  if (productSelect) {
    productSelect.addEventListener("change", function() {
      const productId = this.value;
      const valueHistoryContainer = document.querySelector("#value-history-container");
      if (productId) {
        const product = (state.data.products || []).find(p => p.id === productId);
        if (product && product.valueHistory && product.valueHistory.length > 0) {
          const history = product.valueHistory.sort((a, b) => b.date.localeCompare(a.date));
          valueHistoryContainer.innerHTML = `
            <div class="table-wrap">
              <table>
                <thead><tr><th>日期</th><th>总价值</th><th>环比变化</th><th>操作</th></tr></thead>
                <tbody>
                  ${history.map((h, idx) => {
                    const prev = history[idx + 1];
                    const change = prev ? (h.value - prev.value) : 0;
                    return `<tr>
                      <td>${h.date}</td>
                      <td class="mono">${fmtCurrency(h.value)}</td>
                      <td class="mono ${change >= 0 ? "text-green" : "text-red"}">${fmtCurrency(change)}</td>
                      <td>
                        <button class="btn-ghost btn-sm" data-action="edit-value-history" 
                                data-product-id="${product.id}" 
                                data-date="${h.date}" 
                                data-value="${h.value}">
                          编辑
                        </button>
                      </td>
                    </tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>
          `;
        } else {
          valueHistoryContainer.innerHTML = `<div class="empty-state">暂无价值历史</div>`;
        }
      } else {
        valueHistoryContainer.innerHTML = `<div class="empty-state">请选择产品查看价值历史</div>`;
      }
    });
  }

  const chartProductSelect = document.querySelector("#value-chart-product-select");
  if (chartProductSelect) {
    chartProductSelect.addEventListener("change", function() {
      const productId = this.value;
      const chartArea = document.querySelector("#value-chart-area");
      if (!chartArea) return;

      if (!productId) {
        chartArea.innerHTML = `<div class="empty-state"><p>请选择产品查看波动</p></div>`;
        return;
      }

      const product = (state.data.products || []).find(p => p.id === productId);
      if (product && product.valueHistory && product.valueHistory.length > 0) {
        chartArea.innerHTML = `<canvas id="value-trend-chart" style="max-height:280px"></canvas>`;
        setTimeout(() => mountValueTrendChart(product), 50);
      } else {
        chartArea.innerHTML = `<div class="empty-state"><p>该产品暂无净值数据</p></div>`;
      }
    });
  }
}

function mountValueTrendChart(product) {
  const canvas = document.querySelector("#value-trend-chart");
  if (!canvas || !window.Chart) return;

  const sortedHistory = [...product.valueHistory].sort((a, b) => a.date.localeCompare(b.date));
  const labels = sortedHistory.map(item => item.date.replace("-", "."));
  const values = sortedHistory.map(item => item.value);

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const textColor = isDark ? "rgba(249,250,251,0.65)" : "rgba(15,23,42,0.65)";
  const lineColor = "#0052ff";
  const fillColor = isDark ? "rgba(0,82,255,0.12)" : "rgba(0,82,255,0.07)";

  new window.Chart(canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: product.name,
        data: values,
        borderColor: lineColor,
        backgroundColor: fillColor,
        borderWidth: 2.5,
        pointBackgroundColor: lineColor,
        pointRadius: 3.5,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: { duration: 600 },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => " " + ctx.parsed.y.toLocaleString()
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, maxTicksLimit: 7, font: { family: "'DM Mono', monospace", size: 11 } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "'DM Mono', monospace", size: 11 }, callback: v => '¥' + v.toLocaleString() }
        }
      }
    }
  });
}
