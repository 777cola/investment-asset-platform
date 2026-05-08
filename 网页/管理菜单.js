// 管理后台主菜单

import { getPlatformSummary, fmtCurrencyCompact, fmtSignedPct, perfClass } from "./工具函数.js";

export function renderAdminMenu(state, t) {
  const summary = getPlatformSummary(state.data.investors, state.data.products);

  const modules = [
    { icon: "👥", key: "user-management", title: t("userManagement"), desc: t("userManagementDesc") },
    { icon: "📦", key: "product-management", title: t("productManagement"), desc: t("productManagementDesc") },
    { icon: "📊", key: "asset-overview", title: "资产全览", desc: "所有产品的综合表现与资产概览" },
    { icon: "📈", key: "value-update",      title: "价值更新",       desc: "更新产品的最新总价值" },
    { icon: "💵", key: "interest-records", title: "利息发放", desc: "记录投资者利息发放情况" },
    { icon: "💾", key: "data-management", title: t("dataManagement"),  desc: t("dataManagementDesc") },
  ];

  return `
  <div class="content-inner stack fade-in">
    <div class="section-header">
      <div>
        <div class="section-title">${t("adminConsole")}</div>
        <div class="section-subtitle">${t("adminConsoleDesc")}</div>
      </div>
      <button class="btn-ghost btn-sm" data-action="logout">${t("logout")}</button>
    </div>

    <!-- 功能模块 -->
    <div class="grid-3 fade-in-2">
      ${modules.map(m => `
        <div class="card" style="cursor:pointer;text-align:center" data-action="admin-goto" data-page="${m.key}">
          <div class="card-body" style="padding:32px 20px">
            <div style="font-size:2.8rem;margin-bottom:14px">${m.icon}</div>
            <div class="card-title" style="font-size:1rem;margin-bottom:6px">${m.title}</div>
            <div class="card-subtitle">${m.desc}</div>
          </div>
        </div>`).join("")}
    </div>
  </div>`;
}