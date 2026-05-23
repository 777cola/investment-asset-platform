// 利息佣金发放页面

import { fmtCurrency, fmtCurrencyCompact } from "./工具函数.js";

const MANAGER_NAME = "黄斐斐";

export function renderInterestRecords(state, t) {
  const sub = state.ui.interestSubPage || "interest-list";
  
  switch (sub) {
    case "interest-add":
      return renderAddInterest(state, t);
    case "commission-add":
      return renderAddCommission(state, t);
    case "commission-list":
      return renderCommissionList(state, t);
    default:
      return renderInterestList(state, t);
  }
}

function renderInterestList(state, t) {
  const records = state.data.interestRecords || [];
  const totalInterest = records.reduce((sum, r) => sum + (r.amount || 0), 0);

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("interestCommissionPayout")}</div>
        <div class="section-subtitle">${t("interestCommissionPayoutDesc")}</div>
      </div>
      <div class="toolbar">
        <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
          ${t("backToMenu")}
        </button>
      </div>
    </div>

    <!-- 标签切换 -->
    <div class="tab-bar">
      <button class="tab-item active" data-action="switch-interest-tab" data-tab="interest-list">
        ${t("interestPayment")}
      </button>
      <button class="tab-item" data-action="switch-interest-tab" data-tab="commission-list">
        ${t("commissionPayment")}
      </button>
    </div>

    <!-- 利息统计 -->
    <div class="kpi-grid-3 fade-in-1">
      <div class="kpi-card highlighted">
        <div class="kpi-label">${t("totalInterestPaid")}</div>
        <div class="kpi-value">${fmtCurrencyCompact(totalInterest)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("paymentRecordCount")}</div>
        <div class="kpi-value">${records.length}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("affectedInvestors")}</div>
        <div class="kpi-value">${new Set(records.map(r => r.investorId)).size}</div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="toolbar" style="justify-content:flex-end">
      <button class="btn-primary" data-action="admin-goto" data-page="interest-records-interest-add">
        ${t("addInterestRecord")}
      </button>
    </div>

    <!-- 发放记录列表 -->
    <div class="card fade-in-2">
      <div class="card-header">
        <div><div class="card-title">${t("interestPaymentDetails")}</div><div class="card-subtitle">${t("sortByPaymentDateDesc")}</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        ${records.length > 0 ? (() => {
          let rows = '';
          const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date));
          for (const r of sorted) {
            const investor = state.data.investors.find(i => i.id === r.investorId);
            rows += `
            <tr>
              <td class="mono">${r.date}</td>
              <td style="font-weight:600">${investor ? investor.name : r.investorId}</td>
              <td>${r.platform}</td>
              <td class="mono text-green">+${fmtCurrency(r.amount)}</td>
              <td style="color:var(--text-secondary);font-size:.82rem">${r.note || "-"}</td>
              <td>
                <div class="btn-group">
                  <button class="btn-ghost btn-sm" data-action="delete-interest" data-record-id="${r.id}" data-type="interest">${t("delete")}</button>
                </div>
              </td>
            </tr>
            `;
          }
          return `
          <div class="table-wrap">
            <table>
              <thead><tr>
                <th>${t("paymentDate")}</th>
                <th>${t("investorId")}</th>
                <th>${t("paymentPlatform")}</th>
                <th>${t("interestAmount")}</th>
                <th>${t("note")}</th>
                <th>${t("actions")}</th>
              </tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          `;
        })() : `<div class="empty-state"><p>${t("noInterestRecords")}</p></div>`}
      </div>
    </div>
  </div>
  `;
}

function renderCommissionList(state, t) {
  const records = state.data.commissionRecords || [];
  const totalCommission = records.reduce((sum, r) => sum + (r.amount || 0), 0);

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("interestCommissionPayout")}</div>
        <div class="section-subtitle">${t("interestCommissionPayoutDesc")}</div>
      </div>
      <div class="toolbar">
        <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
          ${t("backToMenu")}
        </button>
      </div>
    </div>

    <!-- 标签切换 -->
    <div class="tab-bar">
      <button class="tab-item" data-action="switch-interest-tab" data-tab="interest-list">
        ${t("interestPayment")}
      </button>
      <button class="tab-item active" data-action="switch-interest-tab" data-tab="commission-list">
        ${t("commissionPayment")}
      </button>
    </div>

    <!-- 佣金统计 -->
    <div class="kpi-grid-3 fade-in-1">
      <div class="kpi-card highlighted">
        <div class="kpi-label">${t("commissionPayout")}</div>
        <div class="kpi-value">${fmtCurrencyCompact(totalCommission)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("paymentRecordCount")}</div>
        <div class="kpi-value">${records.length}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">${t("manager")}</div>
        <div class="kpi-value">${MANAGER_NAME}</div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="toolbar" style="justify-content:flex-end">
      <button class="btn-primary" data-action="admin-goto" data-page="interest-records-commission-add">
        ${t("addCommissionRecord")}
      </button>
    </div>

    <!-- 发放记录列表 -->
    <div class="card fade-in-2">
      <div class="card-header">
        <div><div class="card-title">${t("commissionPaymentDetails")}</div><div class="card-subtitle">${t("managerWithSort").replace("{name}", MANAGER_NAME)}</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        ${records.length > 0 ? (() => {
          let rows = '';
          const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date));
          for (const r of sorted) {
            rows += `
            <tr>
              <td class="mono">${r.date}</td>
              <td>${r.platform}</td>
              <td class="mono text-green">+${fmtCurrency(r.amount)}</td>
              <td style="color:var(--text-secondary);font-size:.82rem">${r.note || "-"}</td>
              <td>
                <div class="btn-group">
                  <button class="btn-ghost btn-sm" data-action="delete-interest" data-record-id="${r.id}" data-type="commission">${t("delete")}</button>
                </div>
              </td>
            </tr>
            `;
          }
          return `
          <div class="table-wrap">
            <table>
              <thead><tr>
                <th>${t("paymentDate")}</th>
                <th>${t("paymentPlatform")}</th>
                <th>${t("commission")}</th>
                <th>${t("note")}</th>
                <th>${t("actions")}</th>
              </tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          `;
        })() : `<div class="empty-state"><p>${t("noCommissionRecords")}</p></div>`}
      </div>
    </div>
  </div>
  `;
}

function renderAddInterest(state, t) {
  const investors = state.data.investors || [];

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("addInterestPaymentRecord")}</div>
        <div class="section-subtitle">${t("recordInterestPaymentInfo")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="interest-records">
        ${t("backToMenu")}
      </button>
    </div>

    <form id="interest-form" class="card">
      <div class="card-body">
        <div class="form-field">
          <label class="form-label">${t("pleaseSelectInvestor")}</label>
          <select class="text-input" name="investorId" required>
            <option value="">${t("pleaseSelectInvestor")}</option>
            ${investors.map(inv => `<option value="${inv.id}">${inv.name} (${inv.id})</option>`).join("")}
          </select>
        </div>

        <div class="form-field">
          <label class="form-label">${t("paymentDate")}</label>
          <input class="text-input" type="date" name="date" required />
        </div>

        <div class="form-field">
          <label class="form-label">${t("paymentPlatform")}</label>
          <input class="text-input" name="platform" placeholder="${t("platformPlaceholder")}" required />
        </div>

        <div class="form-field">
          <label class="form-label">${t("interestAmount")}</label>
          <input class="text-input" type="number" step="0.01" name="amount" placeholder="0.00" required />
        </div>

        <div class="form-field">
          <label class="form-label">${t("note")}</label>
          <textarea class="text-input" name="note" placeholder="${t("optionalNote")}" rows="3"></textarea>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn-primary">${t("saveRecord")}</button>
      </div>
    </form>
  </div>
  `;
}

function renderAddCommission(state, t) {
  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("addCommissionPaymentRecord")}</div>
        <div class="section-subtitle">${t("recordCommissionPaymentInfo")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="interest-records-commission-list">
        ${t("backToMenu")}
      </button>
    </div>

    <form id="commission-form" class="card">
      <div class="card-body">
        <div class="form-field">
          <label class="form-label">${t("manager")}</label>
          <input class="text-input" name="managerName" value="${MANAGER_NAME}" readonly style="background: var(--surface-2);" />
        </div>

        <div class="form-field">
          <label class="form-label">${t("paymentDate")}</label>
          <input class="text-input" type="date" name="date" required />
        </div>

        <div class="form-field">
          <label class="form-label">${t("paymentPlatform")}</label>
          <input class="text-input" name="platform" placeholder="${t("platformPlaceholder")}" required />
        </div>

        <div class="form-field">
          <label class="form-label">${t("commission")}</label>
          <input class="text-input" type="number" step="0.01" name="amount" placeholder="0.00" required />
        </div>

        <div class="form-field">
          <label class="form-label">${t("note")}</label>
          <textarea class="text-input" name="note" placeholder="${t("optionalNote")}" rows="3"></textarea>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn-primary">${t("saveRecord")}</button>
      </div>
    </form>
  </div>
  `;
}

export function afterRenderInterestRecords(state) {
  // 渲染后处理
}
