// 产品管理模块

import { fmtCurrency, fmtCurrencyCompact, fmtPct, perfClass } from "./工具函数.js";

export function renderProductManagement(state, t) {
  const { productSubPage } = state.ui;
  if (productSubPage === "add") {
    return renderAddProduct(state, t);
  }
  return renderProductList(state, t);
}

function renderProductList(state, t) {
  const products = state.data.products || [];

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("productManagement")}</div>
        <div class="section-subtitle">${t("productManagementDesc")}</div>
      </div>
      <div class="toolbar">
        <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
          ${t("backToMenu")}
        </button>
        <button class="btn-primary" data-action="admin-goto" data-page="product-management-add">
          ${t("add")} ${t("product")}
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-body" style="padding-top:0">
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>${t("productName")}</th>
              <th>${t("platform")}</th>
              <th>当前投资总额</th>
              <th>当前资产价值</th>
              <th>${t("returnRate")}</th>
              <th>${t("actions")}</th>
            </tr></thead>
            <tbody>
              ${products.length ? products.map(p => {
                const totalDeposits = p.transactions?.filter(t => t.type === "deposit").reduce((sum, t) => sum + t.amount, 0) || 0;
                const totalWithdrawals = p.transactions?.filter(t => t.type === "withdrawal").reduce((sum, t) => sum + t.amount, 0) || 0;
                const netAmount = totalDeposits - totalWithdrawals;
                let latestValue = "-";
                let latestValueDate = "-";
                let sorted = null;
                if (p.valueHistory && p.valueHistory.length > 0) {
                  sorted = [...p.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
                  latestValue = fmtCurrency(sorted[0].value);
                  latestValueDate = sorted[0].date;
                }
                const returnRate = sorted && netAmount ? (sorted[0].value - netAmount) / netAmount : 0;
                return `<tr>
                  <td style="font-weight:600">${p.name}</td>
                  <td>${p.platform}</td>
                  <td class="mono">${fmtCurrencyCompact(netAmount)}</td>
                  <td class="mono">${latestValue !== "-" ? latestValue : "-"}</td>
                  <td class="mono ${perfClass(returnRate)}">${fmtPct(returnRate)}</td>
                  <td>
                    <div class="btn-group">
                      <button class="btn-secondary btn-sm" data-action="edit-product" data-product-id="${p.id}">${t("edit")}</button>
                      <button class="btn-ghost btn-sm" data-action="delete-product" data-product-id="${p.id}">${t("delete")}</button>
                    </div>
                  </td>
                </tr>`;
              }).join("") : `<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--text-tertiary)">${t("noData")}</td></tr>`}
            </tbody>
            <tfoot>
              <tr style="background:var(--bg-secondary);font-weight:600">
                <td colspan="2">汇总（不含现金）</td>
                <td class="mono">${fmtCurrencyCompact(products.filter(p => p.name !== "现金").reduce((sum, p) => {
                  const totalDeposits = p.transactions?.filter(t => t.type === "deposit").reduce((s, t) => s + t.amount, 0) || 0;
                  const totalWithdrawals = p.transactions?.filter(t => t.type === "withdrawal").reduce((s, t) => s + t.amount, 0) || 0;
                  return sum + (totalDeposits - totalWithdrawals);
                }, 0))}</td>
                <td class="mono">${fmtCurrencyCompact(products.filter(p => p.name !== "现金").reduce((sum, p) => {
                  if (p.valueHistory && p.valueHistory.length > 0) {
                    const sorted = [...p.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
                    return sum + sorted[0].value;
                  }
                  return sum;
                }, 0))}</td>
                <td colspan="2"></td>
              </tr>
              ${products.some(p => p.name === "现金") ? `
                <tr style="background:var(--bg-secondary);font-weight:600;color:var(--text-tertiary)">
                  <td colspan="2">现金</td>
                  <td class="mono">${fmtCurrencyCompact(products.filter(p => p.name === "现金").reduce((sum, p) => {
                    const totalDeposits = p.transactions?.filter(t => t.type === "deposit").reduce((s, t) => s + t.amount, 0) || 0;
                    const totalWithdrawals = p.transactions?.filter(t => t.type === "withdrawal").reduce((s, t) => s + t.amount, 0) || 0;
                    return sum + (totalDeposits - totalWithdrawals);
                  }, 0))}</td>
                  <td class="mono">${fmtCurrencyCompact(products.filter(p => p.name === "现金").reduce((sum, p) => {
                    if (p.valueHistory && p.valueHistory.length > 0) {
                      const sorted = [...p.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
                      return sum + sorted[0].value;
                    }
                    return sum;
                  }, 0))}</td>
                  <td colspan="2"></td>
                </tr>
              ` : ''}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
  `;
}

function renderAddProduct(state, t) {
  const editingId = state.ui.editingProductId;
  const editing = editingId
    ? (state.data.products || []).find(p => p.id === editingId)
    : null;

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${editing ? t("edit") + " " + t("product") : t("add") + " " + t("product")}</div>
        <div class="section-subtitle">${t("productManagementDesc")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <form id="product-form" class="card">
      <div class="card-body">
        <div class="form-field">
          <label class="form-label">${t("productName")}</label>
          <input class="text-input" name="name" placeholder="${t("productName")}" value="${editing ? editing.name : ""}" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("platform")}</label>
          <input class="text-input" name="platform" placeholder="${t("platform")}" value="${editing ? editing.platform : ""}" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("notes")}</label>
          <textarea class="text-input" name="notes" placeholder="${t("notes")}" rows="3">${editing ? editing.notes : ""}</textarea>
        </div>

        <div class="form-field">
          <label class="form-label">${t("transactions")}</label>
          <div style="border:1px solid var(--border);border-radius:var(--radius);padding:16px">
            ${editing?.transactions?.length ? editing.transactions.map((tr, idx) => `
              <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border);">
                <select style="flex:1" name="transaction-type-${idx}">
                  <option value="deposit" ${tr.type === "deposit" ? "selected" : ""}>${t("deposit")}</option>
                  <option value="withdrawal" ${tr.type === "withdrawal" ? "selected" : ""}>${t("withdrawal")}</option>
                </select>
                <input type="number" step="0.01" style="flex:2" name="transaction-amount-${idx}" value="${tr.amount || 0}" placeholder="${t("amount")}" />
                <input type="date" style="flex:2" name="transaction-date-${idx}" value="${tr.date || ""}" />
                <input type="text" style="flex:3" name="transaction-note-${idx}" value="${tr.note || ""}" placeholder="${t("note")}" />
                <button type="button" class="btn-ghost btn-sm" data-action="remove-transaction" data-idx="${idx}">${t("delete")}</button>
              </div>
            `).join("") : `<div style="text-align:center;color:var(--text-tertiary);padding:20px">${t("noTransactions")}</div>`}

            <div style="margin-top:16px">
              <button type="button" class="btn-secondary" data-action="add-transaction">${t("add")} ${t("transaction")}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn-primary">${t("save")}</button>
      </div>
    </form>
  </div>
  `;
}

export function afterRenderProductManagement(state) {
  // 这里可以添加图表初始化逻辑
}