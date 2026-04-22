// 利息发放记录页面

import { fmtCurrency, fmtCurrencyCompact } from "./工具函数.js";

export function renderInterestRecords(state, t) {
  const sub = state.ui.interestSubPage || "list";
  if (sub === "add") {
    return renderAddInterest(state, t);
  }
  return renderInterestList(state, t);
}

function renderInterestList(state, t) {
  const records = state.data.interestRecords || [];
  const totalInterest = records.reduce((sum, r) => sum + (r.amount || 0), 0);

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">利息发放</div>
        <div class="section-subtitle">记录每位投资者的利息发放情况</div>
      </div>
      <div class="toolbar">
        <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
          ${t("backToMenu")}
        </button>
        <button class="btn-primary" data-action="admin-goto" data-page="interest-records-add">
          添加记录
        </button>
      </div>
    </div>

    <!-- 利息统计 -->
    <div class="kpi-grid-3 fade-in-1">
      <div class="kpi-card highlighted">
        <div class="kpi-label">累计发放利息</div>
        <div class="kpi-value">${fmtCurrencyCompact(totalInterest)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">发放记录数</div>
        <div class="kpi-value">${records.length}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">涉及投资者</div>
        <div class="kpi-value">${new Set(records.map(r => r.investorId)).size}</div>
      </div>
    </div>

    <!-- 发放记录列表 -->
    <div class="card fade-in-2">
      <div class="card-header">
        <div><div class="card-title">发放明细</div><div class="card-subtitle">按发放日期倒序排列</div></div>
      </div>
      <div class="card-body" style="padding-top:0">
        ${records.length > 0 ? `
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>发放日期</th>
              <th>投资者</th>
              <th>发放平台</th>
              <th>利息金额</th>
              <th>备注</th>
              <th>${t("actions")}</th>
            </tr></thead>
            <tbody>
              ${records.sort((a, b) => b.date.localeCompare(a.date)).map(r => {
                const investor = state.data.investors.find(i => i.id === r.investorId);
                return `<tr>
                  <td class="mono">${r.date}</td>
                  <td style="font-weight:600">${investor ? investor.name : r.investorId}</td>
                  <td>${r.platform}</td>
                  <td class="mono text-green">+${fmtCurrency(r.amount)}</td>
                  <td style="color:var(--text-secondary);font-size:.82rem">${r.note || "-"}</td>
                  <td>
                    <div class="btn-group">
                      <button class="btn-ghost btn-sm" data-action="delete-interest" data-record-id="${r.id}">${t("delete")}</button>
                    </div>
                  </td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
        ` : `<div class="empty-state"><p>暂无发放记录</p></div>`}
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
        <div class="section-title">添加利息发放记录</div>
        <div class="section-subtitle">记录利息发放信息</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="interest-records">
        ${t("backToMenu")}
      </button>
    </div>

    <form id="interest-form" class="card">
      <div class="card-body">
        <div class="form-field">
          <label class="form-label">选择投资者</label>
          <select class="text-input" name="investorId" required>
            <option value="">请选择投资者</option>
            ${investors.map(inv => `
              <option value="${inv.id}">${inv.name} (${inv.id})</option>
            `).join("")}
          </select>
        </div>

        <div class="form-field">
          <label class="form-label">发放日期</label>
          <input class="text-input" type="date" name="date" required />
        </div>

        <div class="form-field">
          <label class="form-label">发放平台</label>
          <input class="text-input" name="platform" placeholder="例如：银行转账、支付宝、微信等" required />
        </div>

        <div class="form-field">
          <label class="form-label">利息金额</label>
          <input class="text-input" type="number" step="0.01" name="amount" placeholder="0.00" required />
        </div>

        <div class="form-field">
          <label class="form-label">备注</label>
          <textarea class="text-input" name="note" placeholder="可选：备注信息" rows="3"></textarea>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn-primary">保存记录</button>
      </div>
    </form>
  </div>
  `;
}

export function afterRenderInterestRecords(state) {
  // 渲染后处理
}