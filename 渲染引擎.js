// 渲染引擎 — 顶层路由，协调所有页面与组件渲染

import { renderSidebar, renderTopbar } from "./侧边栏.js";
import { renderFlash }                  from "./提示消息.js";
import { renderLoginPage }              from "./登录页面.js";
import { renderInvestorPage, afterRenderInvestor } from "./投资者页面.js";
import { renderAdminMenu }              from "./管理菜单.js";
import { renderUserManagement, afterRenderUserManagement } from "./用户管理.js";
import { renderDataManagement }         from "./数据管理.js";
import { renderProductManagement, afterRenderProductManagement } from "./产品管理.js";
import { renderValueUpdate, afterRenderValueUpdate } from "./价值更新.js";
import { renderAssetOverview, afterRenderAssetOverview } from "./资产全览.js";
import { renderInterestRecords, afterRenderInterestRecords } from "./利息发放记录.js";

// 存储上一次的状态，用于比较变化
let previousState = null;

// 深度比较两个对象是否相等
function deepEqual(obj1, obj2) {
  // 快速路径：引用相等或基本类型比较
  if (obj1 === obj2) return true;
  if (obj1 == null || obj2 == null) return false;
  if (typeof obj1 !== typeof obj2) return false;
  
  // 基本类型比较
  if (typeof obj1 !== 'object') {
    return obj1 === obj2;
  }
  
  // 数组比较
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }
  
  // 对象比较
  if (Array.isArray(obj1) || Array.isArray(obj2)) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  
  // 比较所有字段
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
}

export function renderApp(state, t) {
  // 渲染公共组件
  renderSidebar(state, t);
  renderTopbar(state, t);
  renderFlash(state);
  updateLangLabel(state);

  const main = document.querySelector("#main-view");
  if (!main) return;

  // 检查会话状态是否变化
  const sessionChanged = !deepEqual(state.session, previousState?.session);
  // 检查authRole是否变化（用于登录页面的切换）
  const authRoleChanged = !deepEqual(state.ui?.authRole, previousState?.ui?.authRole);
  // 检查管理子页面是否变化
  const adminSubPageChanged = state.session?.role === 'admin' && 
    state.ui.adminSubPage !== previousState?.ui.adminSubPage;
  // 检查投资者页面是否需要更新
  const investorPageChanged = state.session?.role === 'investor' && 
    (!deepEqual(state.data.investors, previousState?.data.investors) || 
     !deepEqual(state.data.products, previousState?.data.products));

  // 如果状态完全没有变化且不是首次渲染，则跳过渲染
  if (deepEqual(state, previousState) && previousState !== null) {
    // 但如果authRole变化了，仍然需要重新渲染登录页
    if (!authRoleChanged) return;
  }

  if (!state.session) {
    main.innerHTML = renderLoginPage(state, t);
  } else if (state.session.role === "admin") {
    main.innerHTML = renderAdminView(state, t);
    // 只在页面变化时执行afterRender
    if (state.ui.adminSubPage === "user-management") {
      requestAnimationFrame(() => afterRenderUserManagement(state));
    } else if (state.ui.adminSubPage === "product-management") {
      requestAnimationFrame(() => afterRenderProductManagement(state));
    } else if (state.ui.adminSubPage === "value-update") {
      requestAnimationFrame(() => afterRenderValueUpdate(state, t));
    } else if (state.ui.adminSubPage === "asset-overview") {
      requestAnimationFrame(() => afterRenderAssetOverview(state, t));
    } else if (state.ui.adminSubPage === "interest-records") {
      requestAnimationFrame(() => afterRenderInterestRecords(state, t));
    }
  } else {
    // 投资者视图
    main.innerHTML = renderInvestorView(state, t);
    requestAnimationFrame(() => afterRenderInvestor(state));
  }
  
  // 更新上一次的状态
  previousState = JSON.parse(JSON.stringify(state));
}

function renderInvestorView(state, t) {
  return renderInvestorPage(state, t);
}

function renderAdminView(state, t) {
  const sub = state.ui.adminSubPage || "menu";

  if (sub === "user-management" || sub === "user-management-add") {
    if (sub === "user-management-add") {
      state.ui.userSubPage = "add";
      state.ui.adminSubPage = "user-management";
      state.ui.editingInvestorId = null;
    }
    return renderUserManagement(state, t);
  }
  if (sub === "product-management" || sub === "product-management-add") {
    if (sub === "product-management-add") {
      const today = new Date().toISOString().slice(0, 10);
      const tempProduct = {
        id: "NEW-" + Date.now(),
        name: "", platform: "", notes: "",
        createdAt: today, transactions: []
      };
      if (!state.data.products) state.data.products = [];
      state.data.products.unshift(tempProduct);
      state.ui.editingProductId = tempProduct.id;
      state.ui.productSubPage = "add";
      state.ui.adminSubPage = "product-management";
    }
    return renderProductManagement(state, t);
  }

  if (sub === "value-update") return renderValueUpdate(state, t);
  if (sub === "asset-overview") return renderAssetOverview(state, t);
  if (sub === "interest-records" || sub === "interest-records-add") {
    if (sub === "interest-records-add") {
      state.ui.interestSubPage = "add";
      state.ui.adminSubPage = "interest-records";
    }
    return renderInterestRecords(state, t);
  }
  if (sub === "data-management") return renderDataManagement(state, t);

  return renderAdminMenu(state, t);
}

export function updateLangLabel(state) {
  const el = document.querySelector("#lang-label");
  if (el) el.textContent = state.ui.lang === "zh" ? "EN" : "中";
}
