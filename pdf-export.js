// PDF导出模块

import { getInvestorSummary, fmtCurrency, fmtCurrencyCompact, fmtSignedPct } from "./工具函数.js";

export function exportInvestorPDF(state) {
  try {
    const investor = state.data.investors.find(i => i.id === state.session?.userId);

    if (!investor) {
      console.error("PDF导出失败：未找到当前投资者");
      return false;
    }

    if (!window.jspdf?.jsPDF) {
      console.error("PDF导出失败：jsPDF库未加载");
      return false;
    }

    const jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

    if (typeof doc.autoTable !== "function") {
      console.error("PDF导出失败：AutoTable 插件未加载");
      return false;
    }

    const margin = 14;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 20;

    const summary = getInvestorSummary(investor, state.data.products || []);
    const interestRecords = (state.data.interestRecords || []).filter(r => r.investorId === investor.id);
    const allocations = (investor.allocations || []).filter(a => (a.amount || 0) > 0);
    const notices = (investor.notices || []).slice(0, 10);
    const fundFlow = investor.fundFlow || [];

    const platformName = state.data.platformName || "KaiHao Capital";
    const snapshotDate = state.data.snapshotDate || new Date().toISOString().slice(0, 10);

    doc.setFontSize(16);
    doc.text(platformName, margin, y);
    doc.setFontSize(10);
    doc.text("Investment Report", pageWidth - margin, y, { align: "right" });
    y += 6;
    doc.setFontSize(9);
    doc.text("Date: " + snapshotDate, pageWidth - margin, y, { align: "right" });
    y += 10;

    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;

    doc.setFontSize(14);
    doc.text("Investor Info", margin, y);
    y += 8;

    doc.setFillColor(245, 245, 250);
    doc.setLineWidth(0.5);
    doc.rect(margin, y, pageWidth - margin * 2, 50, "FD");

    doc.setFontSize(16);
    doc.text(safeText(investor.name || "N/A"), margin + 12, y + 15);

    doc.setFontSize(10);
    doc.text("ID: " + safeText(investor.id || "N/A"), margin + 12, y + 28);
    doc.text("Joined: " + safeText(investor.joinedAt || "N/A"), margin + 12, y + 40);

    y += 60;

    doc.setFontSize(14);
    doc.text("Portfolio Summary", margin, y);
    y += 8;

    const kpiWidth = (pageWidth - margin * 2 - 12) / 2;
    const kpiHeight = 36;

    doc.setFillColor(248);
    doc.setLineWidth(0.5);
    doc.rect(margin, y, kpiWidth, kpiHeight, "FD");
    doc.setFontSize(9);
    doc.text("Total Invested", margin + 8, y + 10);
    doc.setFontSize(13);
    doc.text(fmtCurrencyCompact(summary.totalInvested), margin + 8, y + 26);

    doc.setFillColor(248);
    doc.setLineWidth(0.5);
    doc.rect(margin + kpiWidth + 6, y, kpiWidth, kpiHeight, "FD");
    doc.setFontSize(9);
    doc.text("Latest Value", margin + kpiWidth + 14, y + 10);
    doc.setFontSize(13);
    doc.text(fmtCurrencyCompact(summary.totalValue), margin + kpiWidth + 14, y + 26);

    y += kpiHeight + 8;

    doc.setFillColor(248);
    doc.setLineWidth(0.5);
    doc.rect(margin, y, kpiWidth, kpiHeight, "FD");
    doc.setFontSize(9);
    doc.text("Profit", margin + 8, y + 10);
    doc.setFontSize(13);
    doc.text((summary.profit >= 0 ? "+" : "") + fmtCurrencyCompact(summary.profit), margin + 8, y + 26);

    doc.setFillColor(248);
    doc.setLineWidth(0.5);
    doc.rect(margin + kpiWidth + 6, y, kpiWidth, kpiHeight, "FD");
    doc.setFontSize(9);
    doc.text("Return Rate", margin + kpiWidth + 14, y + 10);
    doc.setFontSize(13);
    doc.text(fmtSignedPct(summary.returnRate), margin + kpiWidth + 14, y + 26);

    y += kpiHeight + 10;

    if (allocations.length > 0) {
      doc.setFontSize(14);
      doc.text("Allocations", margin, y);
      y += 8;

      const allocationRows = allocations.map(allocation => {
        const invested = allocation.amount || 0;
        const product = allocation.productId ? state.data.products.find(p => p.id === allocation.productId) : null;

        let estimatedValue = 0;
        if (product) {
          const deposits = (product.transactions || []).filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + (tx.amount || 0), 0);
          const withdrawals = (product.transactions || []).filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + (tx.amount || 0), 0);
          const productTotal = deposits - withdrawals;
          const latestValue = product.valueHistory?.length
            ? [...product.valueHistory].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))[0]?.value || 0
            : 0;

          if (productTotal > 0) {
            estimatedValue = (latestValue * invested) / productTotal;
          }
        }

        const weight = summary.totalInvested > 0 ? ((invested / summary.totalInvested) * 100).toFixed(1) : "0.0";
        const returnRate = invested > 0 ? (estimatedValue - invested) / invested : 0;

        return [
          safeText(enText(allocation.name || product?.name || allocation.productId || "-")),
          safeText(enText(product?.platform || allocation.focus || "-")),
          fmtCurrency(invested),
          fmtCurrency(Math.round(estimatedValue)),
          weight + "%",
          (returnRate >= 0 ? "+" : "") + (returnRate * 100).toFixed(2) + "%"
        ];
      });

      doc.autoTable({
        startY: y,
        margin: { left: margin, right: margin },
        theme: "grid",
        styles: { fontSize: 9, cellPadding: 3 },
        headStyles: { fillColor: [99, 102, 241], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 40 },
          1: { cellWidth: 26 },
          2: { cellWidth: 28 },
          3: { cellWidth: 28 },
          4: { cellWidth: 18 },
          5: { cellWidth: 20 }
        },
        head: [["Product", "Platform", "Invested", "Value", "Weight", "Return"]],
        body: allocationRows
      });
      y = doc.lastAutoTable ? doc.lastAutoTable.finalY + 6 : y + 10;
    }

    if (interestRecords.length > 0) {
      doc.setFontSize(14);
      doc.text("Interest Records", margin, y);
      y += 8;

      const interestRows = interestRecords
        .slice()
        .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
        .slice(0, 15)
        .map(record => [
          safeText(record.date || "-"),
          safeText(enText(record.platform || "-")),
          "+" + fmtCurrency(record.amount || 0),
          safeText(enText(record.note || "-"))
        ]);

      doc.autoTable({
        startY: y,
        margin: { left: margin, right: margin },
        theme: "grid",
        styles: { fontSize: 9, cellPadding: 3 },
        headStyles: { fillColor: [34, 197, 94], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 32 },
          1: { cellWidth: 36 },
          2: { cellWidth: 30 },
          3: { cellWidth: 60 }
        },
        head: [["Date", "Platform", "Amount", "Note"]],
        body: interestRows
      });
      y = doc.lastAutoTable ? doc.lastAutoTable.finalY + 6 : y + 10;
    }

    if (fundFlow.length > 0) {
      doc.setFontSize(14);
      doc.text("Fund Transactions", margin, y);
      y += 8;

      const fundFlowRows = fundFlow
        .slice()
        .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
        .slice(0, 15)
        .map(record => {
          const type = record.type === "deposit" ? "Deposit" : "Withdrawal";
          const amount = record.type === "deposit" ? "+" + fmtCurrency(record.amount || 0) : "-" + fmtCurrency(record.amount || 0);
          return [
            safeText(record.date || "-"),
            type,
            amount,
            safeText(enText(record.note || "-"))
          ];
        });

      doc.autoTable({
        startY: y,
        margin: { left: margin, right: margin },
        theme: "grid",
        styles: { fontSize: 9, cellPadding: 3 },
        headStyles: { fillColor: [99, 102, 241], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 32 },
          1: { cellWidth: 36 },
          2: { cellWidth: 30 },
          3: { cellWidth: 60 }
        },
        head: [["Date", "Type", "Amount", "Note"]],
        body: fundFlowRows
      });
      y = doc.lastAutoTable ? doc.lastAutoTable.finalY + 6 : y + 10;
    }

    if (notices.length > 0) {
      doc.setFontSize(14);
      doc.text("Communications", margin, y);
      y += 8;

      notices.forEach((notice, index) => {
        if (y > pageHeight - 40) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(10);
        doc.text((index + 1) + ". " + safeText(enText(notice.title || "-")), margin, y);
        doc.setFontSize(9);
        doc.text("Date: " + safeText(notice.date || "-"), margin, y + 6);

        const detailText = safeText(enText(notice.detail || "-"));
        if (detailText.length > 80) {
          doc.text(detailText.substring(0, 80) + "...", margin, y + 14);
        } else {
          doc.text(detailText, margin, y + 14);
        }

        y += 24;
      });
    }

    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setLineWidth(0.3);
      doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
      doc.setFontSize(8);
      doc.text("KaiHao Capital Asset Platform", margin, pageHeight - 8);
      doc.text("Page " + i + " / " + pageCount, pageWidth - margin, pageHeight - 8, { align: "right" });
    }

    const filename = "investment-report-" + safeFilename(investor.id || investor.name || "investor") + "-" + snapshotDate + ".pdf";
    doc.save(filename);
    return true;
  } catch (error) {
    console.error("PDF导出失败:", error);
    return false;
  }
}

function safeText(value) {
  return String(value ?? "-").replace(/\s+/g, " ").trim() || "-";
}

function safeFilename(value) {
  return String(value)
    .trim()
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "investor";
}

function enText(text) {
  const mapping = {
    "恺皓资本": "KaiHao Capital",
    "招商银行": "China Merchants Bank",
    "工商银行": "ICBC",
    "建设银行": "CCB",
    "农业银行": "ABC",
    "中国银行": "BOC",
    "浦发银行": "SPDB",
    "中信银行": "CITIC",
    "民生银行": "CMBC",
    "兴业银行": "CIB",
    "平安银行": "Ping An Bank",
    "华夏银行": "Huaxia Bank",
    "光大银行": "CEB",
    "北京银行": "Bank of Beijing",
    "上海银行": "Bank of Shanghai",
    "宁波银行": "Bank of Ningbo",
    "南京银行": "Bank of Nanjing",
    "入金": "Deposit",
    "出金": "Withdrawal",
    "已验证": "Verified"
  };
  return mapping[text] || text;
}