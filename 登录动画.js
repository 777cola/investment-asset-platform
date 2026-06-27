// 登录动画 — 金融动物 SVG 眼睛追踪、眨眼、输入反应

export function afterRenderLogin(state, t) {
  const stage = document.querySelector('.login-characters-stage');
  if (!stage) return;

  let mouseX = 0;
  let mouseY = 0;
  let typingTimer = null;
  let peekTimer = null;
  let isPasswordVisible = false;

  // ── 元素引用 ──
  const animals = {
    bull:  document.getElementById('char-bull'),
    bear:  document.getElementById('char-bear'),
    lion:  document.getElementById('char-lion'),
    eagle: document.getElementById('char-eagle'),
  };

  // SVG 瞳孔元素
  const pupils = {
    bullL:  document.querySelector('[data-pupil="bull-l"]'),
    bullR:  document.querySelector('[data-pupil="bull-r"]'),
    bearL:  document.querySelector('[data-pupil="bear-l"]'),
    bearR:  document.querySelector('[data-pupil="bear-r"]'),
    lionL:  document.querySelector('[data-pupil="lion-l"]'),
    lionR:  document.querySelector('[data-pupil="lion-r"]'),
    eagleL: document.querySelector('[data-pupil="eagle-l"]'),
    eagleR: document.querySelector('[data-pupil="eagle-r"]'),
  };

  if (!animals.bull || !animals.bear || !animals.lion || !animals.eagle) return;

  // 记录瞳孔原始位置
  const pupilOrigins = {};
  Object.entries(pupils).forEach(([key, el]) => {
    if (el) {
      pupilOrigins[key] = {
        cx: parseFloat(el.getAttribute('cx')),
        cy: parseFloat(el.getAttribute('cy')),
      };
    }
  });

  // ── 鼠标追踪 ──
  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updatePupils();
  }

  function calcOffset(element, maxDist) {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 3;
    const dx = mouseX - cx;
    const dy = mouseY - cy;
    const dist = Math.min(Math.sqrt(dx ** 2 + dy ** 2), maxDist);
    const angle = Math.atan2(dy, dx);
    return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
  }

  function movePupil(pupilEl, origin, offset) {
    if (!pupilEl || !origin) return;
    pupilEl.setAttribute('cx', origin.cx + offset.x);
    pupilEl.setAttribute('cy', origin.cy + offset.y);
  }

  function updatePupils() {
    // 牛
    if (animals.bull) {
      const off = calcOffset(animals.bull, 4);
      movePupil(pupils.bullL, pupilOrigins.bullL, off);
      movePupil(pupils.bullR, pupilOrigins.bullR, off);
    }
    // 熊
    if (animals.bear) {
      const off = calcOffset(animals.bear, 3);
      movePupil(pupils.bearL, pupilOrigins.bearL, off);
      movePupil(pupils.bearR, pupilOrigins.bearR, off);
    }
    // 狮子
    if (animals.lion) {
      const off = calcOffset(animals.lion, 4);
      movePupil(pupils.lionL, pupilOrigins.lionL, off);
      movePupil(pupils.lionR, pupilOrigins.lionR, off);
    }
    // 鹰
    if (animals.eagle) {
      const off = calcOffset(animals.eagle, 3);
      movePupil(pupils.eagleL, pupilOrigins.eagleL, off);
      movePupil(pupils.eagleR, pupilOrigins.eagleR, off);
    }
  }

  function forceLook(animal, dx, dy) {
    const keys = {
      bull: ['bullL', 'bullR'],
      bear: ['bearL', 'bearR'],
      lion: ['lionL', 'lionR'],
      eagle: ['eagleL', 'eagleR'],
    };
    (keys[animal] || []).forEach(k => {
      const origin = pupilOrigins[k];
      if (origin) movePupil(pupils[k], origin, { x: dx, y: dy });
    });
  }

  window.addEventListener('mousemove', handleMouseMove);

  // ── 眨眼动画 ──
  function scheduleBlink(animalEl, minDelay, maxDelay) {
    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    const timer = setTimeout(() => {
      animalEl.classList.add('blinking');
      setTimeout(() => {
        animalEl.classList.remove('blinking');
        scheduleBlink(animalEl, minDelay, maxDelay);
      }, 150);
    }, delay);
    return timer;
  }

  const blinkTimers = [
    scheduleBlink(animals.bull, 3000, 6000),
    scheduleBlink(animals.bear, 4000, 8000),
    scheduleBlink(animals.lion, 3000, 5000),
    scheduleBlink(animals.eagle, 5000, 9000),
  ];

  // ── 输入反应 ──
  function startTypingReaction() {
    Object.values(animals).forEach(a => a?.classList.add('typing-lean'));
    forceLook('bull', 3, 2);
    forceLook('bear', 3, -2);
    forceLook('lion', 2, 3);
    forceLook('eagle', 3, 0);
  }

  function stopTypingReaction() {
    Object.values(animals).forEach(a => a?.classList.remove('typing-lean'));
  }

  // ── 密码偷看 ──
  function startPeeking() {
    if (!isPasswordVisible) return;
    peekTimer = setTimeout(() => {
      if (!isPasswordVisible) return;
      forceLook('bull', -3, 4);
      forceLook('bear', -3, 3);
      forceLook('lion', -2, 5);
      forceLook('eagle', -3, 2);
      setTimeout(() => { if (isPasswordVisible) startPeeking(); }, 800);
    }, Math.random() * 3000 + 2000);
  }

  // ── 绑定事件 ──
  function bindInputEvents() {
    document.querySelectorAll('.login-input').forEach(input => {
      input.addEventListener('focus', startTypingReaction);
      input.addEventListener('blur', stopTypingReaction);
      input.addEventListener('input', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
          if (document.activeElement === input) startTypingReaction();
        }, 100);
      });
    });
  }

  function bindPasswordToggle() {
    document.querySelectorAll('.login-toggle-pwd').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.target);
        if (!input) return;
        isPasswordVisible = !isPasswordVisible;
        input.type = isPasswordVisible ? 'text' : 'password';
        const o = btn.querySelector('.pwd-eye-open');
        const c = btn.querySelector('.pwd-eye-closed');
        if (o) o.style.display = isPasswordVisible ? 'none' : 'block';
        if (c) c.style.display = isPasswordVisible ? 'block' : 'none';
        clearTimeout(peekTimer);
        if (isPasswordVisible && input.value.length > 0) startPeeking();
      });
    });
  }

  function bindPasswordPeekWatch() {
    document.querySelectorAll('.login-input').forEach(input => {
      input.addEventListener('input', () => {
        clearTimeout(peekTimer);
        if (isPasswordVisible && input.value.length > 0) startPeeking();
      });
    });
  }

  // ── 初始化 ──
  bindInputEvents();
  bindPasswordToggle();
  bindPasswordPeekWatch();
  updatePupils();

  // ── 清理 ──
  const cleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    blinkTimers.forEach(t => clearTimeout(t));
    clearTimeout(typingTimer);
    clearTimeout(peekTimer);
  };
  if (window.__loginAnimCleanup) window.__loginAnimCleanup();
  window.__loginAnimCleanup = cleanup;
}
