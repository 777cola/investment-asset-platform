// 状态管理 — 创建初始应用状态

import { loadData, loadSession } from "./数据操作.js";

export async function createInitialState() {
  const lang = localStorage.getItem("cj-lang") || "zh";
  const data = await loadData();
  const session = loadSession();
  return {
    data:    data,
    session: session,
    ui: {
      lang,
      flash:              { message: null, type: "info" },
      // 投资者
      selectedInvestorId: null,
      navRange:           "12M",
      // 登录
      authRole:           "investor",
      // 管理后台子页
      adminSubPage:       "menu",   // "menu" | "user-management" | "nav-update" | "data-management"
      userSubPage:        "list",   // "list" | "add" | "edit"
      editingInvestorId:  null,
      // 产品管理
      productSubPage:     "list",   // "list" | "add"
      editingProductId:   null,
      // 利息发放记录
      interestSubPage:    "list",   // "list" | "add"
    }
  };
}
