// 侧边栏 & 顶栏组件

// 获取当前时间
function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function renderSidebar(state, t) {
  const el = document.querySelector("#sidebar");
  if (!el) return;

  const sessionSection = state.session
    ? `<div class="sidebar-section">
        <div class="sidebar-label">${t("currentUser")}</div>
        <div class="info-list">
          <div class="info-item">
            <span class="info-label">${state.session.displayName}</span>
            <span class="badge badge-blue">${state.session.role === "admin" ? t("adminConsole") : t("verifiedAccess")}</span>
          </div>
        </div>
       </div>`
    : "";

  const currentTime = getCurrentTime();

  el.innerHTML = `
    <div class="sidebar-scroll">
      ${sessionSection}
      
      <!-- 演示账号提示 -->
      <div class="sidebar-section" style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(34, 197, 94, 0.04)); border-radius: var(--radius); padding: 16px; margin: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
          <div style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></div>
          <div class="sidebar-label" style="margin: 0; font-weight: 600;">演示账号</div>
        </div>
        <div style="font-size: 12px; line-height: 1.4; color: var(--text-secondary);">
          <div style="margin-bottom: 6px;">
            <span style="color: var(--text-tertiary);">登录名称:</span>
            <span style="margin-left: 4px; color: var(--text-primary); font-family: var(--font-mono);">演示</span>
          </div>
          <div>
            <span style="color: var(--text-tertiary);">密码:</span>
            <span style="margin-left: 4px; color: var(--text-primary); font-family: var(--font-mono);">123456</span>
          </div>
        </div>
      </div>
      
      <!-- 平台更新记录 -->
      <div class="sidebar-section" style="background: linear-gradient(135deg, rgba(100, 120, 255, 0.08), rgba(100, 120, 255, 0.04)); border-radius: var(--radius); padding: 16px; margin: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
          <div style="width: 8px; height: 8px; background: #6478ff; border-radius: 50%;"></div>
          <div class="sidebar-label" style="margin: 0; font-weight: 600;">平台更新记录</div>
        </div>
        <div style="font-size: 12px; line-height: 1.4; color: var(--text-secondary);">
          <div style="margin-bottom: 8px;">
            <span style="color: var(--text-tertiary); display: block; margin-bottom: 2px;">上次更新时间</span>
            <span style="font-family: var(--font-mono); color: var(--text-primary);">2026-04-21 23:00</span>
          </div>
          <div>
            <span style="color: var(--text-tertiary); display: block; margin-bottom: 2px;">更新内容</span>
            <span style="color: var(--text-primary);">
              • 修复登录页面切换管理员功能<br>
              • 修复用户管理选择投资者功能<br>
              • 修复产品管理编辑和新增交易记录功能<br>
              • 资产全览添加投资总额列<br>
              • 修复资产全览第一行空白问题<br>
              • 优化密码加密存储机制<br>
              • 增强登录安全措施，添加失败次数限制
            </span>
          </div>
        </div>
      </div>
    </div>`;
}

export function renderTopbar(state, t) {
  const meta = document.querySelector("#topbar-meta");
  if (meta) {
    meta.innerHTML = ``;
  }

  const sessionArea = document.querySelector("#session-area");
  if (sessionArea) {
    sessionArea.innerHTML = state.session
      ? `<span class="pill">${state.session.displayName}</span>
         <button class="btn-ghost btn-sm" data-action="logout">${t("logout")}</button>`
      : `<span class="pill" style="color:var(--text-tertiary)">${t("notLoggedIn")}</span>`;
  }
}
