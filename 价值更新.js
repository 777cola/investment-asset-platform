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
        <div class="section-title">${t("valueUpdate")}</div>
        <div class="section-subtitle">${t("valueUpdateDesc")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <!-- 标签切换 -->
    <div style="display:flex;gap:8px;margin-bottom:24px;">
      <button ${activeTab === 'value' ? 'class="btn-primary"' : 'class="btn-secondary"'} 
              data-action="switch-value-tab" data-tab="value">
        ${t("updateValue")}
      </button>
      <button ${activeTab === 'profit' ? 'class="btn-primary"' : 'class="btn-secondary"'} 
              data-action="switch-value-tab" data-tab="profit">
        ${t("extractProfit")}
      </button>
    </div>

    ${activeTab === 'value' ? `
    <div class="card">
      <div class="card-header"><div><div class="card-title">${t("updateValue")}</div><div class="card-subtitle">${t("recordLatestNav")}</div></div></div>
      <div class="card-body">
        <form id="value-form" class="stack">
          <div class="form-field">
            <label class="form-label">${t("pleaseSelectProduct")}</label>
            <select class="text-input" name="productId" required>
              <option value="">${t("pleaseSelectProduct")}</option>
              ${products.map(product => `
                <option value="${product.id}">${product.name} (${product.platform})</option>
              `).join("")}
            </select>
          </div>

          <div class="form-field">
            <label class="form-label">${t("updateDate")}</label>
            <input class="text-input" type="date" name="date" required />
          </div>

          <div class="form-field">
            <label class="form-label">${t("latestTotalValue")}</label>
            <input class="text-input" type="number" step="0.01" name="value" placeholder="0.00" required />
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary">${t("saveValue")}</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div><div class="card-title">${t("valueHistory")}</div><div class="card-subtitle">${t("valueHistoryDesc")}</div></div>
      </div>
      <div class="card-body" style="padding-top:0" id="value-history-container">
        <div class="empty-state">${t("selectProductToViewValueHistory")}</div>
      </div>
    </div>
    ` : `
    <!-- 提取利润模块 -->
    <div class="grid-2 gap-20" style="align-items:start">
      <div class="card">
        <div class="card-header"><div><div class="card-title">${t("extractProfit")}</div><div class="card-subtitle">${t("extractProfitDesc")}</div></div></div>
        <div class="card-body">
          <form id="profit-form" class="stack">
            <div class="form-field">
              <label class="form-label">${t("pleaseSelectProduct")}</label>
              <select class="text-input" name="productId" required>
                <option value="">${t("pleaseSelectProduct")}</option>
                ${products.filter(p => p.name !== "现金").map(product => `
                  <option value="${product.id}">${product.name} (${product.platform})</option>
                `).join("")}
              </select>
            </div>

            <div class="form-field">
              <label class="form-label">${t("extractDate")}</label>
              <input class="text-input" type="date" name="date" required />
            </div>

            <div class="form-field">
              <label class="form-label">${t("extractAmount")}</label>
              <input class="text-input" type="number" step="0.01" name="amount" placeholder="0.00" required />
            </div>

            <div class="form-field">
              <label class="form-label">${t("note")}</label>
              <textarea class="text-input" name="note" placeholder="${t("optionalNote")}" rows="3"></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary">${t("extractProfit")}</button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><div><div class="card-title">${t("extractionStats")}</div><div class="card-subtitle">${t("extractedProfit")}</div></div></div>
        <div class="card-body">
          <div class="kpi-card highlighted" style="margin-bottom:16px">
            <div class="kpi-label">${t("extractedProfit")}</div>
            <div class="kpi-value">${fmtCurrency(totalProfit)}</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">${t("extractionCount")}</div>
            <div class="kpi-value">${profitRecords.length}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 提取利润记录 -->
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">${t("profitExtractionRecords")}</div><div class="card-subtitle">${t("productPerformanceDesc")}</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        ${profitRecords.length > 0 ? `
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>${t("extractionDate")}</th>
              <th>${t("productName")}</th>
              <th>${t("extractAmount")}</th>
              <th>${t("note")}</th>
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
        ` : `<div class="empty-state"><p>${t("noProfitRecords")}</p></div>`}
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
                <thead><tr><th>${t("date")}</th><th>${t("totalValueColumn")}</th><th>${t("periodChange")}</th><th>${t("actions")}</th></tr></thead>
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
                          ${t("edit")}
                        </button>
                      </td>
                    </tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>
          `;
        } else {
          valueHistoryContainer.innerHTML = `<div class="empty-state">${t("noValueHistory")}</div>`;
        }
      } else {
        valueHistoryContainer.innerHTML = `<div class="empty-state">${t("selectProductToViewValueHistory")}</div>`;
      }
    });
  }
}
