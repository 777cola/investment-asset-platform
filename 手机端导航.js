// 手机端导航 — 汉堡菜单 & 底部导航栏交互

export function initMobileNavigation(state, t, renderApp) {
  initHamburgerMenu(state, t)
  initBottomNav(state, t, renderApp)
}

/* ── 汉堡菜单：侧栏抽屉 ── */
function initHamburgerMenu(state, t) {
  const hamburger = document.querySelector("#hamburger-btn")
  const sidebar = document.querySelector("#sidebar")
  const overlay = document.querySelector("#sidebar-overlay")

  if (!hamburger || !sidebar || !overlay) return

  function openSidebar() {
    sidebar.classList.add("open")
    overlay.classList.add("open")
    document.body.style.overflow = "hidden"
  }

  function closeSidebar() {
    sidebar.classList.remove("open")
    overlay.classList.remove("open")
    document.body.style.overflow = ""
  }

  hamburger.addEventListener("click", function(e) {
    e.stopPropagation()
    if (sidebar.classList.contains("open")) {
      closeSidebar()
    } else {
      openSidebar()
    }
  })

  overlay.addEventListener("click", closeSidebar)

  // 按 Escape 键关闭
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && sidebar.classList.contains("open")) {
      closeSidebar()
    }
  })

  // 每次重新渲染后，关闭侧栏（避免重绘时卡住）
  const origRender = renderApp
  // 给外部调用的接口
  window.__closeMobileSidebar = closeSidebar
}

/* ── 底部导航栏 ── */
function initBottomNav(state, t, renderApp) {
  const navBtns = document.querySelectorAll("[data-action^='mobile-nav-']")
  if (!navBtns.length) return

  function handleNavClick(e) {
    const btn = e.currentTarget
    const action = btn.getAttribute("data-action")

    // 关闭侧栏（如果开着）
    if (window.__closeMobileSidebar) {
      window.__closeMobileSidebar()
    }

    // 根据 action 执行导航
    switch (action) {
      case "mobile-nav-overview":
        navigateTo(state, "overview", renderApp)
        break
      case "mobile-nav-products":
        navigateTo(state, "products", renderApp)
        break
      case "mobile-nav-interest":
        navigateTo(state, "interest", renderApp)
        break
      case "mobile-nav-investors":
        navigateTo(state, "investors", renderApp)
        break
      case "mobile-nav-logout":
        // 触发登出 — 使用 data-action="logout" 与现有事件系统一致
        const logoutEvent = new CustomEvent("mobile-logout", { bubbles: true })
        btn.dispatchEvent(logoutEvent)
        // 同时也触发 session-area 内的退出按钮行为
        const logoutBtn = document.querySelector('[data-action="logout"]')
        if (logoutBtn) logoutBtn.click()
        break
    }
  }

  navBtns.forEach(function(btn) {
    btn.addEventListener("click", handleNavClick)
  })
}

/* ── 导航逻辑 ── */
function navigateTo(state, target, renderApp) {
  // 如果用户已登录
  if (state.session) {
    if (state.session.role === "admin") {
      switch (target) {
        case "overview":
          state.ui.adminSubPage = "asset-overview"
          break
        case "products":
          state.ui.adminSubPage = "product-management"
          break
        case "interest":
          state.ui.adminSubPage = "interest-records"
          break
        case "investors":
          state.ui.adminSubPage = "user-management"
          break
      }
    } else {
      // 投资者角色 — 只有资产总览、收益记录等
      switch (target) {
        case "overview":
          // 投资者已经在资产全览页面
          break
        case "products":
          // 投资者查看产品
          break
        case "interest":
          // 投资者查看收益
          break
        case "investors":
          // 投资者只能看自己的
          break
      }
    }
  } else {
    // 未登录 — 底部导航不做导航
    return
  }

  // 更新底部导航的 active 状态
  updateBottomNavActive(target)

  // 重新渲染
  renderApp(state, t)
}

/* ── 更新底部导航按钮高亮 ── */
export function updateBottomNavActive(target) {
  const navBtns = document.querySelectorAll("[data-mobile-nav]")
  navBtns.forEach(function(btn) {
    const nav = btn.getAttribute("data-mobile-nav")
    if (nav === target) {
      btn.classList.add("active")
    } else if (nav !== "logout") {
      btn.classList.remove("active")
    }
  })
}

/* ── 根据当前页面同步底部导航状态 ── */
export function syncBottomNavFromState(state) {
  if (!state.session) return

  let target = ""
  if (state.session.role === "admin") {
    const sub = state.ui.adminSubPage || ""
    if (sub === "asset-overview") target = "overview"
    else if (sub === "product-management" || sub === "product-management-add") target = "products"
    else if (sub === "interest-records" || sub.startsWith("interest-records-")) target = "interest"
    else if (sub === "user-management" || sub === "user-management-add") target = "investors"
  } else {
    // 投资者 — 默认总览
    target = "overview"
  }

  if (target) updateBottomNavActive(target)
}
