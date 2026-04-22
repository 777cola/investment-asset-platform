// 事件处理 — 统一监听点击与表单提交，驱动状态更新

import { setFlash }                           from "./提示消息.js";
import { saveData, persistSession, exportJSON, parseImportedJSON, parseImportedExcel } from "./数据操作.js";
import { generateId, generateInvestorId, verifyPassword, hashPassword } from "./工具函数.js";

export function bindEvents(state, t, renderApp) {
  /* ── 主题切换 ── */
  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("cj-theme", nextTheme);
  });

  /* ── 语言切换 ── */
  document.querySelector("#lang-toggle")?.addEventListener("click", () => {
    state.ui.lang = state.ui.lang === "zh" ? "en" : "zh";
    localStorage.setItem("cj-lang", state.ui.lang);
    renderApp(state, t);
  });

  /* ── 全局点击委托 ── */
  document.addEventListener("click", event => {
    const actionElement = event.target.closest("[data-action]");
    if (!actionElement) return;
    const action = actionElement.dataset.action;

    switch (action) {
      /* 登录相关 */
      case "switch-auth":
        state.ui.authRole = actionElement.dataset.role || "investor";
        renderApp(state, t);
        break;



      case "logout":
        state.session = null;
        persistSession(null);
        state.ui.adminSubPage = "menu";
        setFlash(state, t("flashLoggedOut"), "info");
        renderApp(state, t);
        break;

      /* 导航 */
      case "admin-goto":
        state.ui.adminSubPage = actionElement.dataset.page || "menu";
        if (actionElement.dataset.page === "user-management") state.ui.userSubPage = "list";
        if (actionElement.dataset.page === "product-management") state.ui.productSubPage = "list";
        renderApp(state, t);
        break;

      /* 投资者选择（管理后台列表） */
      case "select-investor":
        state.ui.selectedInvestorId = actionElement.dataset.investorId;
        renderApp(state, t);
        break;

      /* 内联添加出入金记录 */
      case "add-fund-flow-inline": {
        const investorId = actionElement.dataset.investorId;
        const investor = state.data.investors.find(investorItem => investorItem.id === investorId);
        if (!investor) return;

        const typeElement = document.getElementById(`ff-type-${investorId}`);
        const dateElement = document.getElementById(`ff-date-${investorId}`);
        const amountElement = document.getElementById(`ff-amt-${investorId}`);
        const noteElement = document.getElementById(`ff-note-${investorId}`);

        const transactionType = typeElement.value;
        const transactionDate = dateElement.value;
        const amountString = amountElement.value;
        const transactionNote = noteElement.value || "";

        const transactionAmount = parseFloat(amountString);
        if (!transactionDate || isNaN(transactionAmount) || transactionAmount <= 0) {
          setFlash(state, "请填写日期和有效金额", "error");
          return;
        }

        if (!investor.fundFlow) investor.fundFlow = [];
        investor.fundFlow.push({
          id: "FF-" + Date.now(),
          type: transactionType,
          date: transactionDate,
          amount: transactionAmount,
          note: transactionNote
        });

        saveData(state.data);
        setFlash(state, "出入金记录已添加", "success");
        renderApp(state, t);
        break;
      }

      /* 删除出入金记录 */
      case "delete-fund-flow": {
        const { fundId, investorId } = actionElement.dataset;
        const investor = state.data.investors.find(investorItem => investorItem.id === investorId);
        if (!investor || !fundId) return;
        if (!confirm("确认删除此出入金记录？")) return;

        if (investor.fundFlow) {
          investor.fundFlow = investor.fundFlow.filter(fundItem => fundItem.id !== fundId);
        }

        saveData(state.data);
        setFlash(state, "出入金记录已删除", "success");
        renderApp(state, t);
        break;
      }

      /* 内联保存分配 */
      case "save-allocation": {
        const investorId = actionElement.dataset.investorId;
        const investor = state.data.investors.find(investorItem => investorItem.id === investorId);
        if (!investor) return;

        const products = state.data.products || [];

        // 计算当前净投入
        const fundFlow = investor.fundFlow || [];
        const totalDeposits = fundFlow.filter(fundItem => fundItem.type === "deposit").reduce((sum, fundItem) => sum + fundItem.amount, 0);
        const totalWithdrawals = fundFlow.filter(fundItem => fundItem.type === "withdrawal").reduce((sum, fundItem) => sum + fundItem.amount, 0);
        const netInvested = totalDeposits - totalWithdrawals;

        if (netInvested <= 0) {
          setFlash(state, "请先添加出入金记录", "error");
          return;
        }

        // 获取内联表单的金额
        const allocationMap = {};
        let totalAllocated = 0;
        document.querySelectorAll(".alloc-input").forEach(inputElement => {
          const productId = inputElement.dataset.productId;
          const allocationAmount = parseFloat(inputElement.value) || 0;
          allocationMap[productId] = allocationAmount;
          totalAllocated += allocationAmount;
        });

        // 计算未分配金额
        const unallocated = Math.max(0, netInvested - totalAllocated);
        const totalPercentage = netInvested > 0 ? Math.round((totalAllocated / netInvested) * 1000) / 10 : 0;

        if (unallocated < 0) {
          setFlash(state, "分配金额超过净投入", "error");
          return;
        }

        // 保存分配
        if (!investor.allocations) investor.allocations = [];

        // 先按金额计算百分比
        const newAllocations = products.map(product => {
          const allocationAmount = allocationMap[product.id] || 0;
          const percentage = netInvested > 0 ? (allocationAmount / netInvested * 100) : 0;
          return {
            id: "ALLOC-" + Date.now() + "-" + product.id,
            productId: product.id,
            percentage: Math.round(percentage * 10) / 10,
            amount: allocationAmount
          };
        });

        // 添加或更新"未定"分配
        if (unallocated > 0) {
          const undecidedPercentage = netInvested > 0 ? (unallocated / netInvested * 100) : 0;
          newAllocations.push({
            id: "ALLOC-UNDECIDED",
            productId: null,
            name: "未定",
            percentage: Math.round(undecidedPercentage * 10) / 10,
            amount: unallocated
          });
        }

        investor.allocations = newAllocations;

        saveData(state.data);
        setFlash(state, `产品分配已更新（总计 ${totalPercentage}%）`, "success");
        renderApp(state, t);
        break;
      }

      /* 删除投资者 */
      case "delete-investor": {
        const investorId = actionElement.dataset.investorId;
        if (!investorId || !confirm(t("confirmDeleteInvestor").replace("{id}", investorId))) return;
        state.data.investors = state.data.investors.filter(investorItem => investorItem.id !== investorId);
        if (state.ui.editingInvestorId === investorId) state.ui.editingInvestorId = null;
        saveData(state.data);
        setFlash(state, t("flashDeleted"), "success");
        state.ui.userSubPage   = "list";
        state.ui.adminSubPage  = "user-management";
        renderApp(state, t);
        break;
      }

      /* 编辑投资者 */
      case "edit-investor": {
        const investorId = actionElement.dataset.investorId;
        if (!investorId) return;
        state.ui.editingInvestorId = investorId;
        state.ui.userSubPage = "add";
        state.ui.adminSubPage = "user-management";
        renderApp(state, t);
        break;
      }

      /* 新增用户名 */
      case "add-username": {
        const usernameInput = document.querySelector("input[name=newUsername]");
        if (!usernameInput) return;
        const newUsername = usernameInput.value.trim();
        if (!newUsername) return;
        const investor = state.data.investors.find(investorItem => investorItem.id === state.ui.editingInvestorId);
        if (!investor) return;
        if (!Array.isArray(investor.usernames)) investor.usernames = [];
        if (!investor.usernames.includes(newUsername) && investor.name !== newUsername) {
          investor.usernames.push(newUsername);
        }
        usernameInput.value = "";
        state.ui.userSubPage = "add";
        renderApp(state, t);
        break;
      }

      /* 删除用户名 */
      case "remove-username": {
        const usernameIndex = parseInt(actionElement.dataset.idx);
        const investor = state.data.investors.find(investorItem => investorItem.id === state.ui.editingInvestorId);
        if (!investor || !Array.isArray(investor.usernames)) return;
        investor.usernames.splice(usernameIndex, 1);
        state.ui.userSubPage = "add";
        renderApp(state, t);
        break;
      }

      /* 编辑产品 */
      case "edit-product": {
        const productId = actionElement.dataset.productId;
        if (!productId) return;
        state.ui.editingProductId = productId;
        state.ui.productSubPage = "add";
        state.ui.adminSubPage = "product-management";
        renderApp(state, t);
        break;
      }

      /* 删除产品 */
      case "delete-product": {
        const productId = actionElement.dataset.productId;
        if (!productId || !confirm(t("confirmDeleteProduct"))) return;
        if (!state.data.products) state.data.products = [];
        state.data.products = state.data.products.filter(productItem => productItem.id !== productId);
        if (state.ui.editingProductId === productId) state.ui.editingProductId = null;
        saveData(state.data);
        setFlash(state, t("flashDeleted"), "success");
        state.ui.productSubPage   = "list";
        state.ui.adminSubPage  = "product-management";
        renderApp(state, t);
        break;
      }

      /* 添加交易记录 */
      case "add-transaction": {
        const editingProductId = state.ui.editingProductId;
        const product = (state.data.products || []).find(productItem => productItem.id === editingProductId);
        if (!product) return;
        if (!product.transactions) product.transactions = [];
        product.transactions.push({
          type: "deposit",
          amount: 0,
          date: new Date().toISOString().slice(0, 10),
          note: ""
        });
        state.ui.productSubPage = "add";
        renderApp(state, t);
        break;
      }

      /* 删除交易记录 */
      case "remove-transaction": {
        const transactionIndex = parseInt(actionElement.dataset.idx);
        const editingProductId = state.ui.editingProductId;
        const product = (state.data.products || []).find(productItem => productItem.id === editingProductId);
        if (!product || !product.transactions) return;
        product.transactions.splice(transactionIndex, 1);
        state.ui.productSubPage = "add";
        renderApp(state, t);
        break;
      }

      /* 查看投资者视角 */
      case "view-investor-perspective": {
        const investorId = actionElement.dataset.investorId;
        const investor = state.data.investors.find(investorItem => investorItem.id === investorId);
        if (!investor) return;
        
        // 保存管理员会话状态
        if (state.session && state.session.role === "admin") {
          state.ui.adminSession = { ...state.session };
        }
        
        // 切换到投资者视角
        state.session = { 
          role: "investor", 
          userId: investor.id, 
          displayName: investor.name,
          isAdminView: true // 标记是管理员查看
        };
        persistSession(state.session);
        renderApp(state, t);
        break;
      }



      /* 返回管理员视角 */
      case "return-to-admin": {
        if (state.ui.adminSession) {
          state.session = state.ui.adminSession;
          state.ui.adminSession = null;
          persistSession(state.session);
          renderApp(state, t);
        }
        break;
      }

      /* 数据管理 */
      case "export-data":
        exportJSON(state.data);
        setFlash(state, t("flashExported"), "success");
        break;

      case "import-data":
        document.querySelector("#import-file")?.click();
        break;

      case "import-excel":
        document.querySelector("#import-excel-file")?.click();
        break;
    }
  });

  /* ── 全局 submit 委托 ── */
  document.addEventListener("submit", async e => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    e.preventDefault();

    switch (form.id) {
      case "login-form":            await handleLogin(form, state, t, renderApp);           break;
      case "investor-form":         /* 新增/编辑全屏表单 */
      case "investor-profile-form": await handleSaveProfile(form, state, t, renderApp);    break;
      case "allocation-form":       handleSaveAllocation(form, state, t, renderApp); break;
      case "value-form":            handleSaveValue(form, state, t, renderApp);       break;
      case "notice-form":           handleSaveNotice(form, state, t, renderApp);    break;
      case "product-form":          handleSaveProduct(form, state, t, renderApp);    break;
      case "interest-form":         handleSaveInterest(form, state, t, renderApp); break;
    }
  });

  /* ── 文件导入 ── */
  document.querySelector("#import-file")?.addEventListener("change", e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async ev => {
      try {
        state.data    = await parseImportedJSON(ev.target.result);
        state.session = null;
        persistSession(null);
        saveData(state.data);
        setFlash(state, t("flashImported"), "success");
        renderApp(state, t);
      } catch (err) {
        setFlash(state, t("errorImportFailed").replace("{msg}", err.message), "error");
        renderApp(state, t);
      }
    };
    reader.readAsText(file, "utf-8");
    e.target.value = "";
  });

  document.querySelector("#import-excel-file")?.addEventListener("change", e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const newInvestors = parseImportedExcel(ev.target.result);
        newInvestors.forEach(ni => {
          const existing = state.data.investors.find(i => i.name === ni.name);
          if (existing) {
            existing.password = ni.password;
            existing.lastReview = new Date().toISOString().slice(0, 10);
          } else {
            ni.id = generateInvestorId(state.data.investors);
            state.data.investors.push(ni);
          }
        });
        saveData(state.data);
        setFlash(state, t("flashImportedCount").replace("{n}", newInvestors.length), "success");
        renderApp(state, t);
      } catch (err) {
        setFlash(state, t("errorExcelImportFailed").replace("{msg}", err.message), "error");
        renderApp(state, t);
      }
    };
    reader.readAsArrayBuffer(file);
    e.target.value = "";
  });
}

/* ── 公共函数 ── */

// 处理登录失败次数限制
function checkLoginAttempts(username, role) {
  let loginAttempts = JSON.parse(localStorage.getItem("cj-login-attempts")) || {};
  const now = Date.now();
  const LOCKOUT_TIME = 5 * 60 * 1000; // 5分钟锁定
  const MAX_ATTEMPTS = 5; // 最大失败次数
  
  const attemptsKey = `${role}-${username}`;
  const attempts = loginAttempts[attemptsKey] || { count: 0, lastAttempt: 0 };
  
  if (attempts.count >= MAX_ATTEMPTS && (now - attempts.lastAttempt) < LOCKOUT_TIME) {
    const remainingTime = Math.ceil((LOCKOUT_TIME - (now - attempts.lastAttempt)) / 1000 / 60);
    return { locked: true, remainingTime, attemptsKey, attempts, loginAttempts, now };
  }
  
  return { locked: false, attemptsKey, attempts, loginAttempts, now, MAX_ATTEMPTS };
}

// 记录登录失败
function recordLoginFailure(attemptsKey, attempts, loginAttempts, now, MAX_ATTEMPTS) {
  attempts.count += 1;
  attempts.lastAttempt = now;
  loginAttempts[attemptsKey] = attempts;
  localStorage.setItem("cj-login-attempts", JSON.stringify(loginAttempts));
  
  const remainingAttempts = Math.max(0, MAX_ATTEMPTS - attempts.count);
  if (remainingAttempts > 0) {
    return `登录失败，还有${remainingAttempts}次尝试机会`;
  } else {
    return "登录失败次数过多，账户已被锁定5分钟";
  }
}

// 清除登录失败记录
function clearLoginAttempts(attemptsKey, loginAttempts) {
  delete loginAttempts[attemptsKey];
  localStorage.setItem("cj-login-attempts", JSON.stringify(loginAttempts));
}

/* ── 处理函数 ── */

async function handleLogin(form, state, t, renderApp) {
  const fd   = new FormData(form);
  const role = String(fd.get("role") ?? "investor");

  if (role === "investor") {
    const nameOrUsername = String(fd.get("investorId") ?? "").trim();
    const pwd  = String(fd.get("password")   ?? "").trim();
    
    // 检查登录尝试
    const { locked, remainingTime, attemptsKey, attempts, loginAttempts, now, MAX_ATTEMPTS } = checkLoginAttempts(nameOrUsername, "investor");
    
    if (locked) {
      setFlash(state, `账户已被锁定，请${remainingTime}分钟后再试`, "error");
      renderApp(state, t);
      return;
    }
    
    const inv = state.data.investors.find(i =>
      i.name === nameOrUsername || (Array.isArray(i.usernames) && i.usernames.includes(nameOrUsername))
    );

    if (!inv || !(await verifyPassword(pwd, inv.password))) {
      // 记录失败次数
      const errorMessage = recordLoginFailure(attemptsKey, attempts, loginAttempts, now, MAX_ATTEMPTS);
      setFlash(state, errorMessage, "error");
      renderApp(state, t);
      return;
    }
    
    // 登录成功，清除失败记录
    clearLoginAttempts(attemptsKey, loginAttempts);
    
    state.session = { role: "investor", userId: inv.id, displayName: inv.name };
    persistSession(state.session);
    setFlash(state, t("flashLoggedIn"), "success");
    renderApp(state, t);
    return;
  }

  // admin
  const username = String(fd.get("username") ?? "").trim();
  const pwd      = String(fd.get("password")  ?? "").trim();
  
  // 检查登录尝试
  const { locked, remainingTime, attemptsKey, attempts, loginAttempts, now, MAX_ATTEMPTS } = checkLoginAttempts(username, "admin");
  
  if (locked) {
    setFlash(state, `账户已被锁定，请${remainingTime}分钟后再试`, "error");
    renderApp(state, t);
    return;
  }
  
  const admin = state.data.adminUsers.find(a => (a.username ?? a.id) === username);

  if (!admin || !(await verifyPassword(pwd, admin.password))) {
    // 记录失败次数
    const errorMessage = recordLoginFailure(attemptsKey, attempts, loginAttempts, now, MAX_ATTEMPTS);
    setFlash(state, errorMessage, "error");
    renderApp(state, t);
    return;
  }
  
  // 登录成功，清除失败记录
  clearLoginAttempts(attemptsKey, loginAttempts);
  
  state.session = { role: "admin", userId: admin.id, displayName: admin.name };
  persistSession(state.session);
  setFlash(state, t("flashLoggedIn"), "success");
  renderApp(state, t);
}

// 提取表单中的分配数据
function extractAllocations(fd) {
  const allocations = [];
  for (const [key, value] of fd.entries()) {
    if (key.startsWith("allocation-")) {
      const productId = key.replace("allocation-", "");
      const percentage = parseFloat(value) || 0;
      if (percentage > 0) {
        allocations.push({ productId, percentage });
      }
    }
  }
  return allocations;
}

async function handleSaveProfile(form, state, t, renderApp) {
  const fd  = new FormData(form);
  const name = String(fd.get("name") ?? "").trim();
  const password = String(fd.get("password") ?? "").trim();
  const passwordConfirm = String(fd.get("passwordConfirm") ?? "").trim();

  if (!name) { setFlash(state, t("errorNameRequired"), "error"); return; }
  if (password !== passwordConfirm) { setFlash(state, t("errorPasswordMismatch"), "error"); return; }

  let hashedPassword;
  if (password) {
    hashedPassword = await hashPassword(password);
  }
  const today = new Date().toISOString().slice(0, 10);
  const editingId = state.ui.editingInvestorId;
  const existing = editingId
    ? state.data.investors.find(i => i.id === editingId)
    : null;

  const allocations = extractAllocations(fd);

  if (existing) {
    existing.name = name;
    if (password) {
      existing.password = hashedPassword;
    }
    existing.lastReview = today;
    existing.allocations = allocations;
  } else {
    if (!password) {
      setFlash(state, t("errorPasswordRequired"), "error");
      return;
    }
    state.data.investors.unshift({
      id: generateInvestorId(state.data.investors),
      name,
      password: hashedPassword,
      joinedAt: today,
      lastReview: today,
      allocations: allocations,
      notices: [{ date: today, title: t("accountCreated"), detail: t("accountCreatedDetail") }]
    });
  }

  state.ui.editingInvestorId = null;
  state.ui.userSubPage  = "list";
  state.ui.adminSubPage = "user-management";
  saveData(state.data);
  setFlash(state, t("flashSaved"), "success");
  renderApp(state, t);
}

function handleSaveAllocation(form, state, t, renderApp) {
  const fd         = new FormData(form);
  const investorId = String(fd.get("investorId") ?? "").trim();
  const inv        = state.data.investors.find(i => i.id === investorId);
  if (!inv) { setFlash(state, t("errorInvestorNotFound"), "error"); return; }
  
  const code = String(fd.get("code")  ?? "").trim();
  const name = String(fd.get("name")  ?? "").trim();
  const amountInvested = parseFloat(fd.get("amountInvested") ?? "0");
  const latestValue    = parseFloat(fd.get("latestValue")    ?? "0");
  
  if (!code) { setFlash(state, "请输入产品代码", "error"); return; }
  if (!name) { setFlash(state, "请输入产品名称", "error"); return; }
  if (isNaN(amountInvested) || amountInvested <= 0) { setFlash(state, "请输入有效的投资金额", "error"); return; }
  if (isNaN(latestValue) || latestValue < 0) { setFlash(state, "请输入有效的最新价值", "error"); return; }

  inv.allocations.push({
    id:            generateId("A"),
    code:          code,
    name:          name,
    focus:         String(fd.get("focus") ?? "").trim(),
    amountInvested,
    latestValue
  });
  inv.lastReview = new Date().toISOString().slice(0, 10);
  state.ui.editingInvestorId = investorId;
  saveData(state.data);
  setFlash(state, t("flashSaved"), "success");
  form.reset();
  renderApp(state, t);
}

function handleSaveValue(form, state, t, renderApp) {
  const fd         = new FormData(form);
  const productId = String(fd.get("productId") ?? "").trim();
  const date       = String(fd.get("date")        ?? "").trim();
  const value      = parseFloat(fd.get("value")   ?? "");

  if (!productId) { setFlash(state, "请选择产品", "error"); return; }
  if (!date) { setFlash(state, "请选择日期", "error"); return; }
  if (isNaN(value) || value < 0) { setFlash(state, "请输入有效的价值", "error"); return; }

  const product = (state.data.products || []).find(p => p.id === productId);
  if (!product) { setFlash(state, t("errorProductNotFound"), "error"); return; }

  if (!product.valueHistory) product.valueHistory = [];
  const existing = product.valueHistory.find(n => n.date === date);
  if (existing) existing.value = value;
  else product.valueHistory.push({ date, value });

  product.valueHistory.sort((a, b) => a.date.localeCompare(b.date));
  saveData(state.data);
  setFlash(state, t("flashSaved"), "success");
  form.reset();
  renderApp(state, t);
}

function handleSaveNotice(form, state, t, renderApp) {
  const fd         = new FormData(form);
  const investorId = String(fd.get("investorId") ?? "").trim();
  const date       = String(fd.get("date")        ?? "").trim();
  const title      = String(fd.get("title")       ?? "").trim();
  const detail     = String(fd.get("detail")      ?? "").trim();

  if (!investorId) { setFlash(state, "请选择投资者", "error"); return; }
  if (!date) { setFlash(state, "请选择日期", "error"); return; }
  if (!title) { setFlash(state, "请输入标题", "error"); return; }
  if (!detail) { setFlash(state, "请输入详情", "error"); return; }

  const inv = state.data.investors.find(i => i.id === investorId);
  if (!inv) { setFlash(state, t("errorInvestorNotFound"), "error"); return; }

  inv.notices.unshift({ date, title, detail });
  inv.lastReview = new Date().toISOString().slice(0, 10);
  state.ui.editingInvestorId = investorId;
  saveData(state.data);
  setFlash(state, t("flashSaved"), "success");
  form.reset();
  renderApp(state, t);
}

function handleSaveProduct(form, state, t, renderApp) {
  const fd = new FormData(form);
  const name = String(fd.get("name") ?? "").trim();
  const platform = String(fd.get("platform") ?? "").trim();
  const notes = String(fd.get("notes") ?? "").trim();

  if (!name) { setFlash(state, t("errorNameRequired"), "error"); return; }
  if (!platform) { setFlash(state, "请输入平台", "error"); return; }

  // 收集交易记录并验证
  const transactions = [];
  let idx = 0;
  while (true) {
    const type = fd.get(`transaction-type-${idx}`);
    if (!type) break;
    const amount = parseFloat(fd.get(`transaction-amount-${idx}`) ?? "0");
    const date = String(fd.get(`transaction-date-${idx}`) ?? "").trim();
    const note = String(fd.get(`transaction-note-${idx}`) ?? "").trim();
    
    if (type) {
      if (isNaN(amount) || amount <= 0) {
        setFlash(state, `第${idx + 1}条交易记录金额无效`, "error");
        return;
      }
      if (!date) {
        setFlash(state, `第${idx + 1}条交易记录缺少日期`, "error");
        return;
      }
      transactions.push({
        type,
        amount,
        date,
        note
      });
    }
    idx++;
  }

  const today = new Date().toISOString().slice(0, 10);
  const editingId = state.ui.editingProductId;

  if (!state.data.products) state.data.products = [];
  const existing = editingId
    ? state.data.products.find(p => p.id === editingId)
    : null;

  if (existing) {
    existing.name = name;
    existing.platform = platform;
    existing.notes = notes;
    existing.transactions = transactions;
  } else {
    state.data.products.unshift({
      id: generateId("P"),
      name,
      platform,
      notes,
      createdAt: today,
      transactions
    });
  }

  state.ui.editingProductId = null;
  state.ui.productSubPage  = "list";
  state.ui.adminSubPage = "product-management";
  saveData(state.data);
  setFlash(state, t("flashSaved"), "success");
  renderApp(state, t);
}

function handleSaveInterest(form, state, t, renderApp) {
  const fd = new FormData(form);
  const investorId = String(fd.get("investorId") ?? "").trim();
  const date = String(fd.get("date") ?? "").trim();
  const platform = String(fd.get("platform") ?? "").trim();
  const amount = parseFloat(fd.get("amount") ?? "0");
  const note = String(fd.get("note") ?? "").trim();

  if (!investorId) { setFlash(state, "请选择投资者", "error"); return; }
  if (!date) { setFlash(state, "请选择日期", "error"); return; }
  if (!platform) { setFlash(state, "请输入平台", "error"); return; }
  if (isNaN(amount) || amount <= 0) { setFlash(state, "请输入有效的利息金额", "error"); return; }

  if (!state.data.interestRecords) state.data.interestRecords = [];
  state.data.interestRecords.push({
    id: generateId("INT"),
    investorId,
    date,
    platform,
    amount,
    note
  });

  state.ui.interestSubPage = "list";
  state.ui.adminSubPage = "interest-records";
  saveData(state.data);
  setFlash(state, "利息记录已保存", "success");
  renderApp(state, t);
}
