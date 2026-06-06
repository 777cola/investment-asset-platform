// 用户管理页面

import { fmtCurrency, fmtCurrencyCompact, fmtPct, fmtSignedPct, perfClass } from "./工具函数.js";

// 计算累计应付利息（管理后台用）
function calcAdminCumulativeInterest(investor) {
  if (!investor || investor.fixedRate == null || !investor.joinedAt) return 0;
  const fundFlow = investor.fundFlow || [];
  const totalDeposits = fundFlow.filter(f => f.type === "deposit").reduce((sum, f) => sum + f.amount, 0);
  const totalWithdrawals = fundFlow.filter(f => f.type === "withdrawal").reduce((sum, f) => sum + f.amount, 0);
  const netInvested = totalDeposits - totalWithdrawals;
  if (netInvested <= 0) return 0;
  const joinDate = new Date(investor.joinedAt);
  const today = new Date();
  const diffDays = Math.max(0, Math.ceil((today - joinDate) / (1000 * 60 * 60 * 24)));
  return netInvested * investor.fixedRate * diffDays / 365;
}

function calculateProductPercentage(productId, investorAmount, data) {
  // 计算产品总投资
  const product = data.products?.find(p => p.id === productId);
  if (!product) return 0;
  
  const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
  const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
  const productTotal = productDeposits - productWithdrawals;
  
  if (productTotal <= 0) return 0;
  
  // 计算投资者在该产品中的占比
  return Math.round((investorAmount / productTotal) * 1000) / 10;
}

export function renderUserManagement(state, t) {
  const sub = state.ui.userSubPage || "list";

  if (sub === "add") {
    return renderAddUser(state, t);
  }

  return renderUserList(state, t);
}

function renderUserList(state, t) {
  const investors = state.data.investors;
  const selectedInvestorId = state.ui.selectedInvestorId;
  const selectedInvestor = selectedInvestorId
    ? investors.find(i => i.id === selectedInvestorId)
    : null;

  // 计算选中投资者的出入金数据
  let totalDeposits = 0;
  let totalWithdrawals = 0;
  let netInvested = 0;
  let totalValue = 0;
  let fundFlowList = [];
  let allocationList = [];

  if (selectedInvestor) {
    // 计算出入金（负债部分）
    const fundFlow = selectedInvestor.fundFlow || [];
    fundFlowList = [...fundFlow].sort((a, b) => b.date.localeCompare(a.date));
    totalDeposits = fundFlow.filter(f => f.type === "deposit").reduce((sum, f) => sum + f.amount, 0);
    totalWithdrawals = fundFlow.filter(f => f.type === "withdrawal").reduce((sum, f) => sum + f.amount, 0);
    
    // 净投入（负债）= 累计入金 - 累计出金
    const netLiability = totalDeposits - totalWithdrawals;
    
    // 计算产品分配
    const allocations = selectedInvestor.allocations || [];
    allocationList = allocations.map(a => {
      const product = state.data.products?.find(p => p.id === a.productId);
      const productValue = product?.valueHistory?.length > 0
        ? [...product.valueHistory].sort((x, y) => y.date.localeCompare(x.date))[0].value
        : 0;
      const allocatedAmount = a.amount || 0; // 直接使用保存的amount值
      return {
        ...a,
        name: product?.name || a.name || "未定",
        platform: product?.platform || "",
        amount: allocatedAmount,
        productValue
      };
    });

    // 从产品管理数据计算投资总额和资产价值（除去现金）
    const nonCashProducts = (state.data.products || []).filter(p => p.name !== "现金");
    
    // 当前投资总额（资产）= 所有非现金产品的总投入
    const totalInvested = nonCashProducts.reduce((sum, product) => {
      const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
      const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
      return sum + (productDeposits - productWithdrawals);
    }, 0);

    // 当前资产价值（资产）= 所有非现金产品的最新估值
    const totalAssetValue = nonCashProducts.reduce((sum, product) => {
      const latestValue = product.valueHistory?.length > 0
        ? [...product.valueHistory].sort((x, y) => y.date.localeCompare(x.date))[0].value
        : 0;
      return sum + latestValue;
    }, 0);
    
    // 投资者的当前资产价值 = 基于其分配比例计算的资产价值
    let investorAssetValue = 0;
    allocationList.forEach(a => {
      if (a.productId) {
        const product = state.data.products?.find(p => p.id === a.productId);
        if (product) {
          const latestValue = product.valueHistory?.length > 0
            ? [...product.valueHistory].sort((x, y) => y.date.localeCompare(x.date))[0].value
            : 0;
          const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
          const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
          const productTotal = productDeposits - productWithdrawals;
          if (productTotal > 0) {
            investorAssetValue += (latestValue * a.amount / productTotal);
          }
        }
      }
    });
    
    // 赋值给变量
    netInvested = netLiability; // 净投入（负债）
    totalValue = investorAssetValue; // 当前资产价值（基于分配的资产价值）
  }

  const returnRate = netInvested ? (totalValue - netInvested) / netInvested : 0;

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${t("userManagement")}</div>
        <div class="section-subtitle">${t("userManagementDesc")}</div>
      </div>
      <div class="toolbar">
        <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
          ${t("backToMenu")}
        </button>
        <button class="btn-primary" data-action="admin-goto" data-page="user-management-add">
          ${t("addUser")}
        </button>
      </div>
    </div>

    <div class="grid-2 gap-20" style="align-items:start; grid-template-columns: 280px 1fr;">
      <!-- 左侧：投资者列表 -->
      <div class="card fade-in-1">
        <div class="card-header"><div><div class="card-title">${t("investorList")}</div><div class="card-subtitle">${investors.length} ${t("investorCount")}</div></div></div>
        <div class="card-body" style="padding-top:0; padding-bottom:8px;">
          <div class="investor-list">
            ${investors.map(inv => `
              <div class="investor-item ${inv.id === selectedInvestorId ? 'active' : ''}"
                   data-action="select-investor" data-investor-id="${inv.id}"
                   style="cursor:pointer;padding:10px 12px;border-bottom:1px solid var(--border);transition:all .2s;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <div style="font-weight:600;font-size:.9rem;">${inv.name}</div>
                    <div style="font-size:.72rem;color:var(--text-tertiary);font-family:var(--font-mono)">${inv.id}</div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- 右侧：选中投资者详情 -->
      <div class="stack fade-in-2" style="gap:16px">
        ${selectedInvestor ? `
          <!-- 投资者KPI -->
          <div class="kpi-grid-3">
            <div class="kpi-card">
              <div class="kpi-label">${t("currentInvestmentTotal")}</div>
              <div class="kpi-value">${fmtCurrencyCompact(netInvested)}</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">${t("currentAssetValue")}</div>
              <div class="kpi-value">${fmtCurrencyCompact(totalValue)}</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">${t("currentReturnRate")}</div>
              <div class="kpi-value ${perfClass(returnRate)}">${fmtSignedPct(returnRate)}</div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="toolbar" style="justify-content:flex-end">
            <button class="btn-ghost btn-sm" data-action="edit-investor" data-investor-id="${selectedInvestor.id}">
              ${t("edit")}
            </button>
            <button class="btn-ghost btn-sm" data-action="delete-investor" data-investor-id="${selectedInvestor.id}">
              ${t("delete")}
            </button>
            <button class="btn-primary btn-sm" data-action="view-investor-perspective" data-investor-id="${selectedInvestor.id}" style="
              background: linear-gradient(135deg, #6366f1, #8b5cf6);
              box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
              border: none;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              ${t("viewInvestorView")}
            </button>
          </div>

          <!-- 出入金情况 -->
          <div class="card">
            <div class="card-header"><div><div class="card-title">${t("fundFlowStatus")}</div><div class="card-subtitle">${t("fundFlowStatsRecords")}</div></div></div>
            <div class="card-body">
              <div class="grid-3 gap-12" style="margin-bottom:16px">
                <div style="text-align:center;padding:12px;background:rgba(34,197,94,0.08);border-radius:var(--radius)">
                  <div style="font-size:.72rem;color:var(--text-secondary);margin-bottom:4px">${t("totalDeposit")}</div>
                  <div style="font-size:1.1rem;font-weight:800;color:#22c55e;font-family:var(--font-mono)">+${fmtCurrencyCompact(totalDeposits)}</div>
                </div>
                <div style="text-align:center;padding:12px;background:rgba(239,68,68,0.08);border-radius:var(--radius)">
                  <div style="font-size:.72rem;color:var(--text-secondary);margin-bottom:4px">${t("totalWithdrawal")}</div>
                  <div style="font-size:1.1rem;font-weight:800;color:#ef4444;font-family:var(--font-mono)">-${fmtCurrencyCompact(totalWithdrawals)}</div>
                </div>
                <div style="text-align:center;padding:12px;background:var(--bg-secondary);border-radius:var(--radius)">
                  <div style="font-size:.72rem;color:var(--text-secondary);margin-bottom:4px">${t("netAmount")}</div>
                  <div style="font-size:1.1rem;font-weight:800;font-family:var(--font-mono)">${fmtCurrencyCompact(netInvested)}</div>
                </div>
              </div>

              <!-- 内联添加出入金表单 -->
              <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius);margin-bottom:12px;">
                <div style="font-size:.8rem;color:var(--text-tertiary);margin-bottom:8px;font-weight:500;">${t("addFundFlowRecord")}</div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  <select id="ff-type-${selectedInvestor.id}" class="text-input" style="flex:0 0 100px;">
                    <option value="deposit">${t("deposit")}</option>
                    <option value="withdrawal">${t("withdrawal")}</option>
                  </select>
                  <input type="date" id="ff-date-${selectedInvestor.id}" class="text-input" style="flex:0 0 140px;" value="${new Date().toISOString().slice(0,10)}">
                  <input type="number" id="ff-amt-${selectedInvestor.id}" class="text-input" style="flex:1;min-width:100px;" placeholder="${t("amount")}">
                  <input type="text" id="ff-note-${selectedInvestor.id}" class="text-input" style="flex:1;min-width:120px;" placeholder="${t("optionalNoteShort")}">
                  <button class="btn-primary" data-action="add-fund-flow-inline" data-investor-id="${selectedInvestor.id}">${t("add")}</button>
                </div>
              </div>

              <!-- 出入金记录列表 -->
              ${fundFlowList.length > 0 ? `
                <div style="max-height:180px;overflow-y:auto;">
                  <table style="width:100%;font-size:.8rem;">
                    <thead><tr style="color:var(--text-tertiary);">
                      <th style="text-align:left;padding:6px 8px;">${t("date")}</th>
                      <th style="text-align:left;padding:6px 8px;">${t("type")}</th>
                      <th style="text-align:right;padding:6px 8px;">${t("amount")}</th>
                      <th style="text-align:left;padding:6px 8px;">${t("note")}</th>
                      <th style="padding:6px 8px;"></th>
                    </tr></thead>
                    <tbody>
                      ${fundFlowList.map(f => `
                        <tr style="border-top:1px solid var(--border);">
                          <td style="padding:7px;font-family:var(--font-mono);">${f.date}</td>
                          <td style="padding:7px;"><span class="badge ${f.type === 'deposit' ? 'badge-green' : 'badge-red'}" style="font-size:.7rem;padding:2px 8px;">${f.type === 'deposit' ? t("deposit") : t("withdrawal")}</span></td>
                          <td style="padding:7px;text-align:right;font-family:var(--font-mono);color:${f.type === 'deposit' ? '#22c55e' : '#ef4444'}">${f.type === 'deposit' ? '+' : '-'}${fmtCurrency(f.amount)}</td>
                          <td style="padding:7px;color:var(--text-secondary);">${f.note || '-'}</td>
                          <td style="padding:7px;"><button class="btn-ghost btn-sm" data-action="delete-fund-flow" data-fund-id="${f.id}" data-investor-id="${selectedInvestor.id}">${t("delete")}</button></td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              ` : `<div class="empty-state" style="padding:12px;"><p>${t("noFundFlowRecords")}</p></div>`}
            </div>
          </div>

          <!-- 产品分配情况 -->
          <div class="card">
            <div class="card-header"><div><div class="card-title">${t("productAllocation")}</div><div class="card-subtitle">${t("investmentDistributionTotal100")}</div></div></div>
            <div class="card-body">
              ${allocationList.filter(a => a.amount > 0).length > 0 ? `
                <div class="alloc-detail-list">
                  ${allocationList.filter(a => a.amount > 0).map(a => `
                    <div class="alloc-detail-item">
                      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                        <div>
                          <span style="font-weight:600">${a.name}</span>
                          ${a.platform ? `<span style="font-size:.75rem;color:var(--text-tertiary);margin-left:8px">${a.platform}</span>` : ''}
                        </div>
                        <span style="font-weight:700;font-family:var(--font-mono)">${fmtCurrencyCompact(a.amount)}</span>
                      </div>
                      <div class="alloc-mini-bar" style="margin-bottom:4px">
                        <div class="alloc-mini-fill" style="width:${a.percentage}%"></div>
                      </div>
                      <div style="display:flex;justify-content:space-between;font-size:.75rem;color:var(--text-secondary)">
                        <span>${fmtCurrencyCompact(a.productValue || 0)}</span>
                        <div style="display:flex;gap:12px">
                          <span>${t("ownShare")}: ${a.percentage}%</span>
                          ${a.productId ? `
                            <span style="color:var(--text-tertiary)">${t("productShare")}: ${calculateProductPercentage(a.productId, a.amount, state.data)}%</span>
                          ` : ''}
                        </div>
                      </div>
                    </div>
                  `).join("")}
                </div>
              ` : `<div class="empty-state"><p>${t("noProductAllocation")}</p></div>`}

              <!-- 内联调整分配表单 -->
              <div style="margin-top:16px;padding:12px;background:var(--bg-secondary);border-radius:var(--radius);">
                <div style="font-size:.8rem;color:var(--text-tertiary);margin-bottom:8px;font-weight:500;">${t("adjustInvestmentAllocation")}</div>
                <div style="font-size:.75rem;color:var(--text-secondary);margin-bottom:12px;">${t("currentInvestmentTotal")}: <strong>${fmtCurrency(netInvested)}</strong></div>
                <form id="alloc-form-${selectedInvestor.id}" style="display:flex;flex-direction:column;gap:8px;">
                  ${(state.data.products || []).map(product => {
                    const currentAlloc = selectedInvestor.allocations?.find(a => a.productId === product.id);
                    const currentPct = currentAlloc?.percentage || 0;
                    const currentAmt = netInvested > 0 ? (netInvested * currentPct / 100) : 0;
                    
                    // 计算产品总投入
                    const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
                    const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
                    const productTotal = productDeposits - productWithdrawals;
                    
                    // 计算其他投资者已分配的金额
                    let otherAllocated = 0;
                    state.data.investors.forEach(inv => {
                      if (inv.id !== selectedInvestor.id) {
                        const alloc = inv.allocations?.find(a => a.productId === product.id);
                        if (alloc) {
                          const invNetInvested = (inv.fundFlow || []).filter(f => f.type === "deposit").reduce((sum, f) => sum + f.amount, 0)
                                             - (inv.fundFlow || []).filter(f => f.type === "withdrawal").reduce((sum, f) => sum + f.amount, 0);
                          otherAllocated += invNetInvested * (alloc.percentage / 100);
                        }
                      }
                    });
                    
                    // 计算剩余可分配
                    const remaining = Math.max(0, productTotal - otherAllocated);
                    
                    return `
                      <div style="display:flex;flex-direction:column;gap:4px;">
                        <div style="display:flex;align-items:center;gap:10px;">
                          <div style="flex:1;">
                            <div style="font-size:.85rem;font-weight:500;">${product.name}</div>
                            <div style="font-size:.7rem;color:var(--text-tertiary);">${product.platform}</div>
                          </div>
                          <input type="number" step="1" min="0" max="${remaining}" class="alloc-input" data-product-id="${product.id}" style="width:120px;" placeholder="0" value="${Math.round(currentAmt)}">
                          <span style="font-size:.75rem;color:var(--text-tertiary);width:40px;text-align:right;">${currentPct}%</span>
                        </div>
                        <div style="font-size:.7rem;color:var(--text-tertiary);margin-left:10px;">
                          产品总投入: ${fmtCurrencyCompact(productTotal)} | 其他已分配: ${fmtCurrencyCompact(otherAllocated)} | 剩余可分配: ${fmtCurrencyCompact(remaining)}
                        </div>
                      </div>
                    `;
                  }).join("")}
                  <div style="display:flex;gap:8px;align-items:center;justify-content:flex-end;margin-top:4px;">
                    <span id="alloc-summary-${selectedInvestor.id}" style="font-size:.75rem;color:var(--text-tertiary);"></span>
                    <button type="button" class="btn-primary" data-action="save-allocation" data-investor-id="${selectedInvestor.id}">${t("saveAllocation")}</button>
                  </div>
                </form>
              </div>

              <!-- 分配可视化 -->
              ${allocationList.filter(a => a.amount > 0).length > 0 ? `
                <div style="margin-top:16px;padding:12px;background:var(--bg-secondary);border-radius:var(--radius)">
                  <div style="font-size:.75rem;color:var(--text-tertiary);margin-bottom:8px">${t("allocationRatio")}</div>
                  <div style="display:flex;height:24px;border-radius:var(--radius);overflow:hidden">
                    ${allocationList.filter(a => a.amount > 0).map((a, i) => {
                      const colors = ['#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'];
                      return `<div style="width:${a.percentage}%;background:${colors[i % colors.length]};min-width:2px"></div>`;
                    }).join("")}
                  </div>
                  <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:10px">
                    ${allocationList.filter(a => a.amount > 0).map((a, i) => {
                      const colors = ['#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4'];
                      return `<div style="display:flex;align-items:center;gap:6px;font-size:.75rem">
                        <span style="width:10px;height:10px;border-radius:2px;background:${colors[i % colors.length]}"></span>
                        <span>${a.name}</span>
                        <span style="font-weight:600">${a.percentage}%</span>
                      </div>`;
                    }).join("")}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 固定利息设置 -->
          <div class="card">
            <div class="card-header"><div><div class="card-title">${t("fixedInterestSettings") || "固定利息设置"}</div><div class="card-subtitle">${t("fixedInterestSettingsDesc") || "设置投资人固定年利率，按日计息"}</div></div></div>
            <div class="card-body">
              <div style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap;">
                <div style="flex:1;min-width:200px;">
                  <label class="form-label" style="font-size:.78rem;margin-bottom:4px;">${t("fixedAnnualRate") || "固定年利率"}</label>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <input type="number" id="fixed-rate-${selectedInvestor.id}" class="text-input" step="0.01" min="0" max="100" 
                      value="${selectedInvestor.fixedRate != null ? (selectedInvestor.fixedRate * 100).toFixed(2) : ''}" 
                      placeholder="例如 8.00" style="width:120px;">
                    <span style="font-size:.85rem;color:var(--text-secondary);">%</span>
                  </div>
                </div>
                <div style="flex:1;min-width:200px;">
                  <div style="font-size:.78rem;color:var(--text-tertiary);margin-bottom:4px;">${t("cumulativeInterestDue") || "累计应付利息"}</div>
                  <div style="font-size:1.1rem;font-weight:700;color:#22c55e;font-family:var(--font-mono);">
                    ${fmtCurrencyCompact(calcAdminCumulativeInterest(selectedInvestor))}
                  </div>
                </div>
                <button class="btn-primary btn-sm" data-action="save-fixed-rate" data-investor-id="${selectedInvestor.id}">${t("save")}</button>
              </div>
              ${selectedInvestor.fixedRate != null ? `
                <div style="margin-top:10px;font-size:.75rem;color:var(--text-tertiary);">
                  ${t("currentRate") || "当前利率"}: <strong>${(selectedInvestor.fixedRate * 100).toFixed(2)}%</strong>
                  ${selectedInvestor.rateUpdatedAt ? ` · ${t("lastUpdated") || "上次更新"}: ${selectedInvestor.rateUpdatedAt}` : ''}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="card">
            <div class="card-body">
              <div class="btn-group" style="display:flex;gap:8px">
                <button class="btn-secondary" data-action="edit-investor" data-investor-id="${selectedInvestor.id}">${t("edit")} ${t("investorId")}</button>
                <button class="btn-ghost btn-sm" data-action="delete-investor" data-investor-id="${selectedInvestor.id}">${t("delete")}</button>
              </div>
            </div>
          </div>
        ` : `
          <div class="card">
            <div class="card-body">
              <div class="empty-state">
                <p>${t("selectInvestorForDetails")}</p>
              </div>
            </div>
          </div>
        `}
      </div>
    </div>
  </div>
  `;
}

function renderAddUser(state, t) {
  const editing = state.ui.editingInvestorId
    ? state.data.investors.find(i => i.id === state.ui.editingInvestorId)
    : null;
  const usernames = editing?.usernames || [];
  const products = state.data.products || [];

  return `
  <div class="content-inner stack">
    <div class="section-header">
      <div>
        <div class="section-title">${editing ? t("edit") + " " + t("investorId") : t("addUser")}</div>
        <div class="section-subtitle">${t("userManagementDesc")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="admin-goto" data-page="menu">
        ${t("backToMenu")}
      </button>
    </div>

    <form id="investor-profile-form" class="card">
      <div class="card-body">
        <div class="form-field">
          <label class="form-label">${t("name")}</label>
          <input class="text-input" name="name" placeholder="${t("name")}" value="${editing ? editing.name : ""}" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("password")}</label>
          <input class="text-input" type="password" name="password" placeholder="${t("password")}" value="" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("password")}（${t("confirm")}）</label>
          <input class="text-input" type="password" name="passwordConfirm" placeholder="${t("password")}" value="" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("loginUsernames")}</label>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px">
            ${usernames.map((u, idx) => `
              <span class="badge badge-blue" style="display:inline-flex;align-items:center;gap:4px">
                ${u}
                <span style="cursor:pointer;font-weight:700;margin-left:2px" data-action="remove-username" data-idx="${idx}">&times;</span>
              </span>`).join("")}
          </div>
          <div style="display:flex;gap:6px">
            <input class="text-input" name="newUsername" placeholder="${t("loginUsernamesPlaceholder")}" style="flex:1" />
            <button type="button" class="btn-secondary btn-sm" data-action="add-username">${t("add")}</button>
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">${t("productAllocationRatio")}</label>
          <div style="border:1px solid var(--border);border-radius:var(--radius);padding:16px">
            ${products.length ? products.map((product) => {
              const allocation = editing?.allocations?.find(a => a.productId === product.id);
              const percentage = allocation?.percentage || 0;
              return `
                <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border);">
                  <div style="flex:3;font-weight:500">${product.name} (${product.platform})</div>
                  <input type="number" step="0.1" min="0" max="100" style="flex:2" name="allocation-${product.id}" value="${percentage}" placeholder="0.0" />
                  <div style="flex:1;text-align:right">%</div>
                </div>
              `;
            }).join("") : `<div style="text-align:center;color:var(--text-tertiary);padding:20px">${t("noProducts")}</div>`}

            ${products.length ? `<div style="margin-top:16px;color:var(--text-secondary);font-size:14px">${t("allocationTip")}</div>` : ""}
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

export function afterRenderUserManagement(state, t = key => key) {
  // 分配金额输入实时更新
  document.querySelectorAll(".alloc-input").forEach(input => {
    input.addEventListener("input", function() {
      const investorId = state.ui.selectedInvestorId;
      if (!investorId) return;
      const investor = state.data.investors.find(i => i.id === investorId);
      if (!investor) return;
      
      const fundFlow = investor.fundFlow || [];
      const netInvested = fundFlow.filter(f => f.type === "deposit").reduce((sum, f) => sum + f.amount, 0)
                         - fundFlow.filter(f => f.type === "withdrawal").reduce((sum, f) => sum + f.amount, 0);

      // 计算当前分配总和
      let totalAllocated = 0;
      document.querySelectorAll(".alloc-input").forEach(inp => {
        totalAllocated += parseFloat(inp.value) || 0;
      });
      const undecided = Math.max(0, netInvested - totalAllocated);
      const allocPct = netInvested > 0 ? Math.round((totalAllocated / netInvested) * 1000) / 10 : 0;
      const undecidedPct = netInvested > 0 ? Math.round((undecided / netInvested) * 1000) / 10 : 0;

      const summaryEl = document.getElementById(`alloc-summary-${investorId}`);
      if (summaryEl) {
        summaryEl.innerHTML = `${t("allocated")}: ${fmtCurrencyCompact(totalAllocated)} (${allocPct}%), ${t("undefined")}: ${fmtCurrencyCompact(undecided)} (${undecidedPct}%)`;
      }
    });
  });
}
