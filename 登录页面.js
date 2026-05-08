// 登录页面

export function renderLoginPage(state, t) {
  const isInvestor = state.ui.authRole === "investor";

  return `
  <div class="auth-wrap fade-in">
    <div class="auth-hero">
      <div class="auth-hero-title">${t("entryPortal")}<br><span class="highlight-orange">${t("brandName")}</span></div>
      <div class="auth-hero-desc">${t("entryDesc")}</div>

      <div class="auth-mode-badge">
        ● ${isInvestor ? t("investorLogin") : t("adminLogin")}
      </div>
      <button class="btn-ghost btn-sm" data-action="switch-auth" data-role="${isInvestor ? "admin" : "investor"}">
        ${isInvestor ? t("switchToAdmin") : t("switchToInvestor")}
      </button>
    </div>

    <form id="login-form" class="auth-form-panel">
      <div style="margin-bottom:4px">
        <div class="section-title" style="font-size:1rem">${isInvestor ? t("investorLogin") : t("adminLogin")}</div>
        <div class="section-subtitle" style="font-size:.8rem;margin-top:4px">
          ${isInvestor ? t("investorLoginHint") : t("adminLoginHint")}
        </div>
      </div>

      <input type="hidden" name="role" value="${state.ui.authRole}" />

      ${isInvestor ? `
        <div class="form-field">
          <label class="form-label">${t("name")}</label>
          <input id="login-investor-id" class="text-input" name="investorId" placeholder="${t("name")}" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("password")}</label>
          <input id="login-investor-pwd" class="text-input" type="password" name="password" placeholder="${t("password")}" required />
        </div>` : `
        <div class="form-field">
          <label class="form-label">${t("username")}</label>
          <input id="login-admin-username" class="text-input" name="username" placeholder="admin" required />
        </div>
        <div class="form-field">
          <label class="form-label">${t("password")}</label>
          <input id="login-admin-pwd" class="text-input" type="password" name="password" placeholder="密码" required />
        </div>`}

      <button type="submit" class="btn-orange btn-lg btn-block">${t("login")}</button>
    </form>
  </div>`;
}
