// 图表组件 — 基于 Chart.js 4.x 渲染净值折线图

let _chartInstance = null;

/**
 * 在 canvas#nav-chart 上渲染净值折线图。
 * 每次调用前销毁旧实例，避免 Chart.js 报错。
 * @param {Array<{date:string, value:number}>} history
 */
export function mountChart(history) {
  const canvas = document.querySelector("#nav-chart");
  if (!canvas) return;
  if (!window.Chart) { canvas.insertAdjacentHTML("afterend", '<p style="color:var(--text-tertiary);font-size:.82rem;text-align:center">图表库未加载</p>'); return; }

  if (_chartInstance) { _chartInstance.destroy(); _chartInstance = null; }

  const isDark   = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(27,31,36,0.08)";
  const textColor = isDark ? "rgba(240,246,252,0.5)"  : "rgba(27,31,36,0.45)";
  const lineColor = "#0052ff";
  const fillColor = isDark ? "rgba(0,82,255,0.12)"    : "rgba(0,82,255,0.07)";

  const labels = history.map(p => p.date.replace("-", "."));
  const values = history.map(p => p.value);

  _chartInstance = new window.Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [{
        data: values,
        borderColor:     lineColor,
        borderWidth:     2.5,
        pointBackgroundColor: lineColor,
        pointRadius:     3.5,
        pointHoverRadius: 6,
        fill:            true,
        backgroundColor: fillColor,
        tension:         0.35
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
            label: ctx => " " + ctx.parsed.y.toFixed(4)
          }
        }
      },
      scales: {
        x: {
          grid:  { color: gridColor },
          ticks: { color: textColor, maxTicksLimit: 7, font: { family: "'DM Mono', monospace", size: 11 } }
        },
        y: {
          grid:  { color: gridColor },
          ticks: { color: textColor, font: { family: "'DM Mono', monospace", size: 11 }, callback: v => v.toFixed(3) }
        }
      }
    }
  });
}

/** 返回图表占位 HTML（canvas + 空状态判断） */
export function renderChartPlaceholder(history) {
  if (!history || !history.length) {
    return `<div class="empty-state" style="padding:40px 0"><p>暂无净值数据</p></div>`;
  }
  return `<canvas id="nav-chart" style="max-height:220px"></canvas>`;
}
