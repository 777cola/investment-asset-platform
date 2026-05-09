// 提示消息组件

let _flashTimer = null;

export function setFlash(state, message, type = "info") {
  state.ui.flash = { message, type };
  _renderFlash(state);
  if (_flashTimer) clearTimeout(_flashTimer);
  _flashTimer = setTimeout(() => {
    state.ui.flash = { message: null, type: "info" };
    _renderFlash(state);
  }, 4000);
}

export function renderFlash(state) {
  _renderFlash(state);
}

function _renderFlash(state) {
  const el = document.querySelector("#flash-message");
  if (!el) return;
  const { message, type } = state.ui.flash;
  if (!message) { el.className = "flash hidden"; el.textContent = ""; return; }
  el.className = `flash ${type}`;
  el.textContent = message;
}
