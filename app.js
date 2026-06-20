// 应用入口 — 初始化状态、渲染、绑定事件

import i18n              from "./国际化.js";
import { APP_VERSION, STORAGE_KEY, SESSION_KEY } from "./配置.js";
import { createInitialState } from "./状态.js";
import { renderApp }     from "./渲染引擎.js";
import { bindEvents }    from "./事件处理.js";

/* ── 状态 ── */
let state;
const APP_VERSION_KEY = "cj-app-version";

/* ── 启动 ── */
async function bootstrap() {
  clearObsoleteCache();
  applyTheme();
  // Read lang from URL if present (coming from landing page)
  var urlParams = new URLSearchParams(window.location.search);
  var urlLang = urlParams.get('lang');
  if (urlLang && ['zh', 'zh-hant', 'en'].indexOf(urlLang) >= 0) {
    localStorage.setItem('cj-lang', urlLang);
  }
  state = await createInitialState();
  renderApp(state, t);
  bindEvents(state, t, renderApp);
}

bootstrap();

/* ── 翻译函数 ── */
function t(key) {
  const lang = state?.ui?.lang || localStorage.getItem("cj-lang") || "zh";
  return i18n[lang]?.[key] ?? i18n["zh"][key] ?? key;
}

/* ── 主题初始化 ── */
function applyTheme() {
  const saved = localStorage.getItem("cj-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
}

function clearObsoleteCache() {
  const savedVersion = localStorage.getItem(APP_VERSION_KEY);
  if (savedVersion === APP_VERSION) return;

  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  localStorage.setItem(APP_VERSION_KEY, APP_VERSION);
}
