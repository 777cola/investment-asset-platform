// 价值更新页面

import { fmtCurrency, fmtPct, perfClass } from "./工具函数.js";

export function renderValueUpdate(state, t) {
  const products = state.data.products || [];
  const profitRecords = state.data.profitRecords || [];
  const totalProfit = profitRecords.reduce((sum, r) => sum + (r.amount || 0), 0);

  const activeTab = state.ui.valueUpdateTab || 'value';

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">价值更新</div>
        <div class="section-subtitle">更新产品的最新总价值，提取投资利润</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <!-- 标签切换 -->
    <div style="display:flex;gap:8px;margin-bottom:24px;">
      <button ${activeTab === 'value' ? 'class="btn-primary"' : 'class="btn-secondary"'} 
              data-action="switch-value-tab" data-tab="value">
        更新价值
      </button>
      <button ${activeTab === 'profit' ? 'class="btn-primary"' : 'class="btn-secondary"'} 
              data-action="switch-value-tab" data-tab="profit">
        提取利润
      </button>
    </div>

    ${activeTab === 'value' ? `
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
      <div class="card-header">
        <div><div class="card-title">价值历史</div><div class="card-subtitle">查看产品的价值更新历史</div></div>
      </div>
      <div class="card-body" style="padding-top:0" id="value-history-container">
        <div class="empty-state">请选择产品查看价值历史</div>
      </div>
    </div>
    ` : `
    <!-- 提取利润模块 -->
    <div class="grid-2 gap-20" style="align-items:start">
      <div class="card">
        <div class="card-header"><div><div class="card-title">提取利润</div><div class="card-subtitle">从产品盈利中提取利润</div></div></div>
        <div class="card-body">
          <form id="profit-form" class="stack">
            <div class="form-field">
              <label class="form-label">选择产品</label>
              <select class="text-input" name="productId" required>
                <option value="">选择产品</option>
                ${products.filter(p => p.name !== "现金").map(product => `
                  <option value="${product.id}">${product.name} (${product.platform})</option>
                `).join("")}
              </select>
            </div>

            <div class="form-field">
              <label class="form-label">提取日期</label>
              <input class="text-input" type="date" name="date" required />
            </div>

            <div class="form-field">
              <label class="form-label">提取金额</label>
              <input class="text-input" type="number" step="0.01" name="amount" placeholder="0.00" required />
            </div>

            <div class="form-field">
              <label class="form-label">备注</label>
              <textarea class="text-input" name="note" placeholder="可选：备注信息" rows="3"></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary">提取利润</button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><div><div class="card-title">提取统计</div><div class="card-subtitle">累计提取利润</div></div></div>
        <div class="card-body">
          <div class="kpi-card highlighted" style="margin-bottom:16px">
            <div class="kpi-label">累计提取利润</div>
            <div class="kpi-value">${fmtCurrency(totalProfit)}</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">提取记录数</div>
            <div class="kpi-value">${profitRecords.length}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 提取利润记录 -->
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">提取利润记录</div><div class="card-subtitle">按提取日期倒序排列</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        ${profitRecords.length > 0 ? `
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>提取日期</th>
              <th>产品名称</th>
              <th>提取金额</th>
              <th>备注</th>
              <th>${t("actions")}</th>
            </tr></thead>
            <tbody>
              ${(() => {
                let rows = '';
                const sorted = [...profitRecords].sort((a, b) => b.date.localeCompare(a.date));
                for (const r of sorted) {
                  const product = state.data.products.find(p => p.id === r.productId);
                  rows += `
                  <tr>
                    <td class="mono">${r.date}</td>
                    <td style="font-weight:600">${product ? product.name : r.productId}</td>
                    <td class="mono text-green">+${fmtCurrency(r.amount)}</td>
                    <td style="color:var(--text-secondary);font-size:.82rem">${r.note || "-"}</td>
                    <td>
                      <div class="btn-group">
                        <button class="btn-ghost btn-sm" data-action="delete-profit" data-record-id="${r.id}">${t("delete")}</button>
                      </div>
                    </td>
                  </tr>
                  `;
                }
                return rows;
              })()}
            </tbody>
          </table>
        </div>
        ` : `<div class="empty-state"><p>暂无提取利润记录</p></div>`}
      </div>
    </div>
    `}
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
}
