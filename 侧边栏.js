// 侧边栏组件 - 渲染侧边栏内容

import { fmtCurrencyCompact, getPlatformSummary } from './工具函数.js';

const VERSION_HISTORY = [
  { version: "v1.3", date: "2026-05-05", note: "新增PDF数据导出" },
  { version: "v1.2", date: "2026-04-27", note: "网络平台上线" },
  { version: "v1.1", date: "2026-04-17", note: "投资者页面新增图表" },
  { version: "v1.0", date: "2026-04-13", note: "本地网页搭建" },
];

export function renderSidebar(state, t) {
  const summary = getPlatformSummary(state.data.investors);
  const isAdmin = state.session?.role === "admin";
  const snapshotDate = state.data.snapshotDate || new Date().toISOString().slice(0, 10);
  const formattedDate = snapshotDate.replace(/-/g, "/");

  const demoSection = state.session
    ? `<div class="sidebar-section">
        <div class="sidebar-label">${t("currentStatus")}</div>
        <div class="info-list">
          <div class="info-item">
            <span class="info-label">${state.session.displayName}</span>
            <span class="info-value badge badge-blue">${state.session.role === "admin" ? t("adminConsole") : t("verifiedAccess")}</span>
          </div>
        </div>
       </div>`
    : ``;

  const sidebarEl = document.querySelector("#sidebar");
  if (!sidebarEl) return;

  sidebarEl.innerHTML = `
    <div class="sidebar-scroll">

      <div class="sidebar-section">
        <div class="sidebar-label">版本更新记录</div>
        <div class="info-list">
          ${VERSION_HISTORY.map((item, index) => `
            <div class="info-item" style="
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
              padding: 10px 14px;
              ${index === 0
                ? "border-color: var(--border-blue); background: rgba(0,82,255,0.04);"
                : ""}
            ">
              <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 8px;">
                <span style="
                  font-family: var(--font-mono);
                  font-size: 0.8rem;
                  font-weight: 700;
                  color: var(--blue-500);
                ">${item.version}</span>
                <span style="
                  font-size: 0.72rem;
                  color: var(--text-tertiary);
                  font-family: var(--font-mono);
                ">${item.date}</span>
              </div>
              <span style="
                font-size: 0.78rem;
                color: var(--text-secondary);
                line-height: 1.5;
              ">${item.note}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-label">数据更新记录</div>
        <div class="info-list">
          <div class="info-item" style="
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 14px;
          ">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--up);
                display: inline-block;
                flex-shrink: 0;
                box-shadow: 0 0 0 3px rgba(63,185,80,0.15);
              "></span>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">净值 &amp; 资产数据</span>
            </div>
            <div style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              gap: 12px;
            ">
              <span style="font-size: 0.78rem; color: var(--text-secondary);">上次更新时间</span>
              ${isAdmin ? `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <input 
                    type="date" 
                    id="snapshot-date-input" 
                    value="${snapshotDate}"
                    style="
                      height: 32px;
                      padding: 0 10px;
                      border-radius: 6px;
                      border: 1px solid var(--border);
                      background: var(--input-bg);
                      color: var(--input-text);
                      font-family: var(--font-mono);
                      font-size: 0.78rem;
                    "
                  />
                  <button 
                    id="save-snapshot-date"
                    style="
                      height: 32px;
                      padding: 0 12px;
                      border-radius: 6px;
                      border: none;
                      background: linear-gradient(135deg, var(--blue-500), var(--blue-600));
                      color: white;
                      font-size: 0.74rem;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.2s;
                    "
                    onmouseover="this.style.boxShadow='0 4px 12px rgba(0,82,255,0.3)'"
                    onmouseout="this.style.boxShadow='none'"
                  >保存</button>
                </div>
              ` : `
                <span style="
                  font-family: var(--font-mono);
                  font-size: 0.8rem;
                  font-weight: 600;
                  color: var(--text-primary);
                ">${formattedDate}</span>
              `}
            </div>
          </div>
        </div>
      </div>

      ${demoSection}
    </div>
  `;

  if (isAdmin) {
    setupSnapshotDateHandler(state);
  }
}

function setupSnapshotDateHandler(state) {
  const saveBtn = document.querySelector("#save-snapshot-date");
  const dateInput = document.querySelector("#snapshot-date-input");
  
  if (saveBtn && dateInput) {
    saveBtn.addEventListener("click", () => {
      const newDate = dateInput.value;
      if (newDate) {
        state.data.snapshotDate = newDate;
        import("./数据操作.js").then(({ saveData }) => {
          saveData(state.data);
        });
        const flashEl = document.querySelector("#flash-message");
        if (flashEl) {
          flashEl.textContent = "数据更新时间已保存";
          flashEl.className = "flash flash.success";
          flashEl.classList.remove("hidden");
          setTimeout(() => {
            flashEl.classList.add("hidden");
          }, 3000);
        }
      }
    });
  }
}

export function renderTopbar(state, t) {
  const topbarActionsEl = document.querySelector("#topbar-actions");
  if (topbarActionsEl) {
    topbarActionsEl.innerHTML = state.session
      ? `<span class="pill">${t("currentUser")}：${state.session.displayName}</span>
         <button class="btn-ghost btn-sm" data-action="logout">${t("logout")}</button>`
      : `<span class="pill">${t("notLoggedIn")}</span>`;
  }
}