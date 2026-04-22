// 应用入口 — 初始化状态、渲染、绑定事件

import i18n              from "./国际化.js";
import { createInitialState } from "./状态.js";
import { renderApp }     from "./渲染引擎.js";
import { bindEvents }    from "./事件处理.js";

/* ── 状态 ── */
let state;

/* ── 启动 ── */
async function bootstrap() {
  applyTheme();
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
