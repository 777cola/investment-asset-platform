// PDF导出模块 — 所见即所得，使用 html2canvas 截取页面实际渲染内容（含图表和样式）

export async function exportInvestorPDF(state) {
  try {
    const investor = state.data.investors.find(i => i.id === state.session?.userId);
    if (!investor) { console.error("PDF导出失败：未找到当前投资者"); return false; }
    if (!window.jspdf?.jsPDF) { console.error("PDF导出失败：jsPDF库未加载"); return false; }
    if (!window.html2canvas) { console.error("PDF导出失败：html2canvas库未加载"); return false; }

    const headerEl = document.querySelector("#main-view .investor-header");
    const contentEl = document.querySelector("#main-view .content-inner");
    if (!contentEl) { console.error("PDF导出失败：未找到投资者页面内容"); return false; }

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const htmlEl = document.documentElement;
    const originalTheme = htmlEl.getAttribute("data-theme");

    // 切换到浅色主题
    htmlEl.setAttribute("data-theme", "light");
    await new Promise(r => requestAnimationFrame(r));

    // ★ 关键：让所有 Chart.js 图表用新主题颜色重新渲染
    _refreshAllCharts();
    await new Promise(r => setTimeout(r, 600));

    try {
      await _generatePDF(headerEl, contentEl, investor, state);
    } finally {
      htmlEl.setAttribute("data-theme", originalTheme);
      // 恢复后也要刷新图表颜色
      _refreshAllCharts();
    }
    return true;
  } catch (error) {
    console.error("PDF导出失败:", error);
    return false;
  }
}

// ─── 刷新所有 Chart.js 实例（切换主题后调用）───
function _refreshAllCharts() {
  document.querySelectorAll("canvas").forEach(canvas => {
    const chart = window.Chart?.getChart?.(canvas);
    if (chart) {
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
      const textColor = isDark ? "rgba(249,250,251,0.65)" : "rgba(15,23,42,0.65)";
      const bg = isDark ? "rgba(17,24,39,0.98)" : "#ffffff";

      // 更新图表颜色
      if (chart.options.scales?.x) {
        chart.options.scales.x.grid = { ...chart.options.scales.x.grid, color: gridColor };
        chart.options.scales.x.ticks = { ...chart.options.scales.x.ticks, color: textColor };
      }
      if (chart.options.scales?.y) {
        chart.options.scales.y.grid = { ...chart.options.scales.y.grid, color: gridColor };
        chart.options.scales.y.ticks = { ...chart.options.scales.y.ticks, color: textColor };
        if (chart.options.scales.y.title) chart.options.scales.y.title.color = textColor;
      }
      if (chart.options.scales?.y1) {
        chart.options.scales.y1.ticks = { ...chart.options.scales.y1.ticks, color: textColor };
        if (chart.options.scales.y1.title) chart.options.scales.y1.title.color = textColor;
      }
      if (chart.options.plugins?.legend?.labels) {
        chart.options.plugins.legend.labels.color = textColor;
      }

      chart.update("none");
    }
  });
}

// ─── 生成 PDF ───
async function _generatePDF(headerEl, contentEl, investor, state) {
  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 10;
  const contentW = pageW - margin * 2;
  const footerH = 10;
  const disclaimerH = 22;

  const snapshotDate = state.data.snapshotDate || new Date().toISOString().slice(0, 10);
  const platformName = state.data.platformName || "恺皓资本";

  // 预渲染页脚和免责声明（html2canvas 方式，支持中文）
  const footerImgData = await _renderFooterImage(`${platformName} · 投资报告 · ${snapshotDate}`);
  const disclaimerImgData = await _renderDisclaimerImage(
    '本报告仅供个人查看，未经授权不得转发或对外披露。'
  );

  // ─── 收集要渲染的区块 ───
  const sections = [];
  if (headerEl) sections.push({ el: headerEl, label: "header" });
  const children = contentEl.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i].offsetHeight === 0) continue;
    sections.push({ el: children[i], label: "section-" + i });
  }
  if (sections.length === 0) return;

  // ─── html2canvas 截取各区块 ───
  const capturedImages = [];
  for (const section of sections) {
    try {
      const canvas = await html2canvas(section.el, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        onclone: (clonedDoc) => {
          clonedDoc.querySelectorAll('[class*="fade-in"]').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "none";
          });
        }
      });
      capturedImages.push({
        imgData: canvas.toDataURL("image/png"),
        heightMM: (canvas.height / canvas.width) * contentW,
        label: section.label
      });
    } catch (err) {
      console.warn("截取区块失败:", section.label, err);
    }
  }
  if (capturedImages.length === 0) return;

  // ─── 分页拼装 PDF ───
  let currentY = margin;

  for (const img of capturedImages) {
    const availableH = pageH - currentY - margin - footerH;

    // 放不下 → 整体移到下一页（不会切割区块）
    if (img.heightMM > availableH) {
      _addFooterToPage(doc, footerImgData, pageW, pageH, margin, footerH);
      doc.addPage();
      currentY = margin;
    }

    const maxSliceH = pageH - margin * 2 - footerH;

    if (img.heightMM > maxSliceH) {
      // 超高区块分片绘制
      await _drawSlicedImage(doc, img.imgData, img.heightMM, margin, currentY,
        contentW, pageW, pageH, margin, footerH, footerImgData);
      currentY = margin + (img.heightMM % maxSliceH);
    } else {
      doc.setFillColor(255, 255, 255);
      doc.rect(margin, currentY, contentW, img.heightMM, "F");
      doc.addImage(img.imgData, "PNG", margin, currentY, contentW, img.heightMM);
      currentY += img.heightMM;
    }
  }

  // ─── 免责声明 ───
  const remaining = pageH - currentY - margin - footerH;
  if (remaining < disclaimerH + 10) {
    _addFooterToPage(doc, footerImgData, pageW, pageH, margin, footerH);
    doc.addPage();
    currentY = margin;
  }
  currentY += 8;
  doc.setDrawColor(210);
  doc.setLineWidth(0.3);
  doc.line(margin, currentY, pageW - margin, currentY);
  currentY += 5;
  doc.addImage(disclaimerImgData, "PNG", margin, currentY, 140, 10);

  // 最后一页页脚
  _addFooterToPage(doc, footerImgData, pageW, pageH, margin, footerH);

  // ─── 页码 ───
  const totalPages = doc.getNumberOfPages();
  const pageImgCache = {};
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    const key = `${p}/${totalPages}`;
    if (!pageImgCache[key]) {
      pageImgCache[key] = await _renderPageNumberImage(key);
    }
    doc.addImage(pageImgCache[key], "PNG", pageW - margin - 24, pageH - footerH + 2, 24, 6);
  }

  const safeName = String(investor.name || investor.id || "investor")
    .replace(/[^a-zA-Z0-9\u4e00-\u9fff_-]+/g, "");
  doc.save(`恺皓资本-投资报告-${safeName}-${snapshotDate}.pdf`);
}

// ───────────────────────────────────────────────────
// 辅助函数
// ───────────────────────────────────────────────────

function _addFooterToPage(doc, footerImgData, pageW, pageH, margin, footerH) {
  doc.setDrawColor(200);
  doc.setLineWidth(0.3);
  doc.line(margin, pageH - footerH, pageW - margin, pageH - footerH);
  doc.addImage(footerImgData, "PNG", margin, pageH - footerH + 2, 120, 6);
}

async function _drawSlicedImage(doc, imgData, totalHMM, margin, startY, contentW, pageW, pageH, m, footerH, footerImgData) {
  const maxSliceH = pageH - m * 2 - footerH;
  let remainingHeight = totalHMM;
  let srcY = 0;
  let currentY = startY;
  const origCanvas = await _loadImageToCanvas(imgData);

  while (remainingHeight > 0) {
    const availableH = pageH - currentY - m - footerH;
    if (availableH < 10) {
      _addFooterToPage(doc, footerImgData, pageW, pageH, m, footerH);
      doc.addPage();
      currentY = m;
      continue;
    }

    const sliceH = Math.min(remainingHeight, availableH, maxSliceH);
    const tempCanvas = document.createElement("canvas");
    const srcW = origCanvas.width;
    const srcH = origCanvas.height;
    const sliceSrcH = Math.round(srcH * (sliceH / totalHMM));
    const sliceSrcY = Math.round(srcH * (srcY / totalHMM));

    tempCanvas.width = srcW;
    tempCanvas.height = sliceSrcH;
    const ctx = tempCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, srcW, sliceSrcH);
    ctx.drawImage(origCanvas, 0, sliceSrcY, srcW, sliceSrcH, 0, 0, srcW, sliceSrcH);

    doc.setFillColor(255, 255, 255);
    doc.rect(m, currentY, contentW, sliceH, "F");
    doc.addImage(tempCanvas.toDataURL("image/png"), "PNG", m, currentY, contentW, sliceH);

    currentY += sliceH;
    remainingHeight -= sliceH;
    srcY += sliceH;

    if (remainingHeight > 0.5) {
      _addFooterToPage(doc, footerImgData, pageW, pageH, m, footerH);
      doc.addPage();
      currentY = m;
    }
  }
}

// ─── 用 html2canvas 渲染中文文本为图片（临时 DOM 元素方式）───

async function _renderFooterImage(text) {
  return _renderTextBlock(text, {
    fontSize: "9px",
    color: "#8c8c8c",
    width: "500px",
    height: "18px"
  });
}

async function _renderDisclaimerImage(text) {
  return _renderTextBlock(text, {
    fontSize: "10px",
    color: "#999999",
    width: "800px",
    height: "20px"
  });
}

async function _renderPageNumberImage(text) {
  return _renderTextBlock(text, {
    fontSize: "9px",
    color: "#8c8c8c",
    width: "120px",
    height: "16px",
    textAlign: "right"
  });
}

async function _renderTextBlock(text, { fontSize, color, width, height, textAlign }) {
  const el = document.createElement("div");
  Object.assign(el.style, {
    position: "fixed", left: "-9999px", top: "0", zIndex: "-1",
    font: `${fontSize} "Microsoft YaHei", "PingFang SC", "Helvetica Neue", sans-serif`,
    color: color, width: width, height: height,
    whiteSpace: "nowrap", lineHeight: height,
    textAlign: textAlign || "left"
  });
  el.textContent = text;
  document.body.appendChild(el);

  try {
    const canvas = await html2canvas(el, {
      scale: 3, backgroundColor: null, logging: false
    });
    return canvas.toDataURL("image/png");
  } finally {
    document.body.removeChild(el);
  }
}

function _loadImageToCanvas(base64Data) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      resolve(canvas);
    };
    img.onerror = reject;
    img.src = base64Data;
  });
}
