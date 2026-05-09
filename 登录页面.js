// 登录页面

export function renderLoginPage(state, t) {
  const isInvestor = state.ui.authRole === "investor";

  return `
  <div class="auth-wrap fade-in">
    <div class="auth-hero">
      <div class="auth-hero-title">${t("entryPortal")}<br><span class="highlight-orange">${t("brandName")}</span></div>
      <div class="auth-hero-desc">${t("entryDesc")}</div>

      <div style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 24px;
      ">
        <button 
          class="auth-role-btn" 
          data-action="switch-auth" 
          data-role="investor"
          style="${isInvestor ? `
            background: linear-gradient(135deg, #22c55e, #16a34a);
            box-shadow: 0 6px 20px rgba(34, 197, 94, 0.35);
            border-color: rgba(34, 197, 94, 0.4);
          ` : `
            background: rgba(34, 197, 94, 0.08);
            border-color: rgba(34, 197, 94, 0.2);
          `}"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          <span>${t("investorLogin")}</span>
          ${isInvestor ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>` : ''}
        </button>

        <button 
          class="auth-role-btn" 
          data-action="switch-auth" 
          data-role="admin"
          style="${!isInvestor ? `
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
            border-color: rgba(99, 102, 241, 0.4);
          ` : `
            background: rgba(99, 102, 241, 0.08);
            border-color: rgba(99, 102, 241, 0.2);
          `}"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>${t("adminLogin")}</span>
          ${!isInvestor ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>` : ''}
        </button>
      </div>
    </div>

    <form id="login-form" class="auth-form-panel">
      <div style="
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 16px;
        background: ${isInvestor ? 'rgba(34, 197, 94, 0.08)' : 'rgba(99, 102, 241, 0.08)'};;
        border: 1px solid ${isInvestor ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.2)'};
        border-radius: 10px;
        margin-bottom: 20px;
      ">
        <div style="
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${isInvestor ? '#22c55e' : '#6366f1'};
          animation: pulse 2s infinite;
        "></div>
        <span style="
          font-size: 0.82rem;
          font-weight: 600;
          color: ${isInvestor ? '#22c55e' : '#8b5cf6'};
        ">
          ${isInvestor ? t("investorLogin") : t("adminLogin")}
        </span>
      </div>

      <input type="hidden" name="role" value="${state.ui.authRole}" />

      ${isInvestor ? `
        <div class="form-field">
          <label class="form-label">${t("name")}</label>
          <div style="position: relative;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <input id="login-investor-id" class="text-input" name="investorId" placeholder="${t("name")}" required style="padding-left: 42px;" />
          </div>
        </div>
        <div class="form-field">
          <label class="form-label">${t("password")}</label>
          <div style="position: relative;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <input id="login-investor-pwd" class="text-input" type="password" name="password" placeholder="${t("password")}" required style="padding-left: 42px;" />
          </div>
        </div>` : `
        <div class="form-field">
          <label class="form-label">${t("username")}</label>
          <div style="position: relative;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <input id="login-admin-username" class="text-input" name="username" placeholder="admin" required style="padding-left: 42px;" />
          </div>
        </div>
        <div class="form-field">
          <label class="form-label">${t("password")}</label>
          <div style="position: relative;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <input id="login-admin-pwd" class="text-input" type="password" name="password" placeholder="密码" required style="padding-left: 42px;" />
          </div>
        </div>`}

      <button type="submit" class="btn-lg btn-block" style="${isInvestor ? `
        background: linear-gradient(135deg, #22c55e, #16a34a);
        box-shadow: 0 6px 20px rgba(34, 197, 94, 0.35);
        border: none;
        color: white;
        font-weight: 700;
      ` : `
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
        border: none;
        color: white;
        font-weight: 700;
      `}">
        ${t("login")}
      </button>
    </form>
  </div>`;
}
