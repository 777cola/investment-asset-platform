// PDF导出模块

import { getInvestorSummary, fmtCurrency, fmtCurrencyCompact, fmtSignedPct } from "./工具函数.js";

export function exportInvestorPDF(state) {
  try {
    const investor = state.data.investors.find(i => i.id === state.session?.userId);
    
    if (!investor) {
      console.log('投资者不存在');
      return false;
    }

    if (!window.jspdf) {
      console.error('jsPDF库未加载！');
      return false;
    }
    
    const jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF('p', 'mm', 'a4');

    if (typeof doc.autoTable !== "function") {
      console.error('jsPDF AutoTable 插件未加载！');
      return false;
    }
    
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    const margin = 20;
    let y = margin;
    
    doc.setFont('Helvetica', 'Bold');
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text('恺皓资本 · 投资报告', pageWidth / 2, y, { align: 'center' });
    y += 8;
    
    doc.setFont('Helvetica', 'Normal');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('KaiHao Capital · Investment Report', pageWidth / 2, y, { align: 'center' });
    y += 16;
    
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
    
    doc.setFont('Helvetica', 'Bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('投资者信息 / Investor Information', margin, y);
    y += 10;
    
    doc.setFont('Helvetica', 'Normal');
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);
    
    const infoLeftX = margin;
    const infoRightX = margin + 120;
    let infoY = y;
    
    doc.text(`投资者姓名 / Name:`, infoLeftX, infoY);
    doc.setFont('Helvetica', 'Bold');
    doc.text(investor.name, infoLeftX + 60, infoY);
    doc.setFont('Helvetica', 'Normal');
    infoY += 8;
    
    doc.text(`投资者ID / ID:`, infoLeftX, infoY);
    doc.text(investor.id, infoLeftX + 60, infoY);
    infoY += 8;
    
    doc.text(`加入日期 / Joined:`, infoLeftX, infoY);
    doc.text(investor.joinedAt || '-', infoLeftX + 60, infoY);
    infoY += 8;
    
    doc.text(`最近更新 / Updated:`, infoLeftX, infoY);
    doc.text(investor.lastReview || '-', infoLeftX + 60, infoY);
    infoY += 8;
    
    doc.text(`账户状态 / Status:`, infoRightX, y);
    doc.setTextColor(34, 197, 94);
    doc.setFont('Helvetica', 'Bold');
    doc.text('已验证 / Verified', infoRightX + 60, y);
    doc.setFont('Helvetica', 'Normal');
    doc.setTextColor(50, 50, 50);
    
    y = infoY + 12;
    
    const summary = getInvestorSummary(investor, state.data.products);
    const investorInterestRecords = (state.data.interestRecords || []).filter(r => r.investorId === investor.id);
    
    doc.setFont('Helvetica', 'Bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('投资概览 / Investment Summary', margin, y);
    y += 10;
    
    const kpiBoxWidth = (pageWidth - margin * 2 - 20) / 3;
    const kpiColors = ['#0052ff', '#ff7d00', '#22c55e'];
    const kpiLabels = ['总投入 / Total Invested', '最新估值 / Latest Value', '收益率 / Return Rate'];
    const kpiValues = [
      fmtCurrencyCompact(summary.totalInvested),
      fmtCurrencyCompact(summary.totalValue),
      fmtSignedPct(summary.returnRate)
    ];
    const kpiSubValues = [
      `加入于 ${investor.joinedAt}`,
      summary.profit >= 0 ? `盈利 ${fmtCurrencyCompact(summary.profit)}` : `亏损 ${fmtCurrencyCompact(Math.abs(summary.profit))}`,
      `最佳: ${summary.bestAllocation?.name ?? '-'}`,
    ];
    
    for (let i = 0; i < 3; i++) {
      const boxX = margin + i * (kpiBoxWidth + 7);
      
      doc.setFillColor(kpiColors[i]);
      doc.setAlpha(0.1);
      doc.roundedRect(boxX, y, kpiBoxWidth, 45, 4, 4, 'F');
      doc.setAlpha(1);
      
      doc.setLineWidth(0.3);
      doc.setStrokeColor(kpiColors[i]);
      doc.roundedRect(boxX, y, kpiBoxWidth, 45, 4, 4);
      
      doc.setFont('Helvetica', 'Normal');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(kpiLabels[i], boxX + 8, y + 12);
      
      doc.setFont('Helvetica', 'Bold');
      doc.setFontSize(13);
      doc.setTextColor(kpiColors[i]);
      const valueWidth = doc.getStringUnitWidth(kpiValues[i]) * doc.getFontSize() / doc.internal.scaleFactor;
      doc.text(kpiValues[i], boxX + (kpiBoxWidth - valueWidth) / 2, y + 28);
      
      doc.setFont('Helvetica', 'Normal');
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      doc.text(kpiSubValues[i], boxX + 8, y + 38);
    }
    
    y += 58;
    
    if (investorInterestRecords.length > 0) {
      doc.setFont('Helvetica', 'Bold');
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text('利息发放记录 / Interest Records', margin, y);
      y += 10;
      
      const totalInterest = investorInterestRecords.reduce((sum, r) => sum + (r.amount || 0), 0);
      
      doc.setFont('Helvetica', 'Normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`累计发放利息 / Total Interest:`, margin, y);
      doc.setFont('Helvetica', 'Bold');
      doc.setTextColor(34, 197, 94);
      doc.text(fmtCurrency(totalInterest), margin + 75, y);
      doc.setFont('Helvetica', 'Normal');
      doc.setTextColor(100, 100, 100);
      doc.text(`| 发放次数 / Count: ${investorInterestRecords.length}`, margin + 120, y);
      y += 12;
      
      const tableHeaders = ['发放日期 / Date', '发放平台 / Platform', '利息金额 / Amount', '备注 / Note'];
      const tableData = investorInterestRecords.sort((a, b) => b.date.localeCompare(a.date)).map(r => [
        r.date,
        r.platform,
        '+' + fmtCurrency(r.amount),
        r.note || '-'
      ]);
      
      doc.autoTable({
        head: [tableHeaders],
        body: tableData.slice(0, 10),
        startY: y,
        margin: { left: margin, right: margin },
        theme: 'striped',
        headStyles: {
          fillColor: '#1a1a2e',
          textColor: '#ffffff',
          fontStyle: 'bold',
          fontSize: 9,
          cellPadding: 5
        },
        bodyStyles: {
          fontSize: 9,
          cellPadding: 4
        },
        alternateRowStyles: {
          fillColor: '#f5f5f5'
        },
        columnStyles: {
          0: { width: 45 },
          1: { width: 50 },
          2: { width: 50 },
          3: { width: 55 }
        }
      });
      
      y = getLastAutoTableFinalY(doc, y) + 12;
    }
    
    doc.setFont('Helvetica', 'Bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('投资组合 / Portfolio Allocation', margin, y);
    y += 10;
    
    const allocations = (investor.allocations || []).filter(a => (a.amount || 0) > 0);
    
    if (allocations.length > 0) {
      const pieData = allocations.map(a => ({
        name: a.name || getProductName(a.productId, state.data.products),
        value: a.amount || 0
      }));
      
      const total = pieData.reduce((sum, p) => sum + p.value, 0);
      const colors = ['#0052ff', '#ff7d00', '#22c55e', '#ef4444', '#8b5cf6', '#06b6d4', '#f59e0b', '#ec4899'];
      
      const centerX = pageWidth / 2;
      const centerY = y + 50;
      const radius = 40;
      
      let startAngle = -90;
      
      pieData.forEach((item, index) => {
        const sliceAngle = (item.value / total) * 360;
        const endAngle = startAngle + sliceAngle;
        
        doc.setFillColor(colors[index % colors.length]);
        doc.setStrokeColor('#ffffff');
        doc.setLineWidth(1);
        
        doc.beginPath();
        doc.moveTo(centerX, centerY);
        
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        
        doc.arc(centerX, centerY, radius, startRad, endRad);
        doc.closePath();
        doc.fill();
        doc.stroke();
        
        startAngle = endAngle;
      });
      
      y = centerY + radius + 20;
      
      let legendY = centerY - radius + 10;
      let legendX = centerX + radius + 15;
      
      pieData.forEach((item, index) => {
        if (legendY > centerY + radius - 10) {
          legendX = margin;
          legendY = centerY + 20;
        }
        
        doc.setFillColor(colors[index % colors.length]);
        doc.rect(legendX, legendY, 8, 8, 'F');
        
        doc.setFont('Helvetica', 'Normal');
        doc.setFontSize(9);
        doc.setTextColor(50, 50, 50);
        const label = item.name.length > 12 ? item.name.substring(0, 12) + '...' : item.name;
        doc.text(label, legendX + 12, legendY + 6);
        
        const percentage = ((item.value / total) * 100).toFixed(1) + '%';
        const percentWidth = doc.getStringUnitWidth(percentage) * doc.getFontSize() / doc.internal.scaleFactor;
        doc.text(percentage, legendX + 100 - percentWidth, legendY + 6);
        
        legendY += 14;
      });
      
      y = Math.max(y, legendY + 10);
    } else {
      doc.setFont('Helvetica', 'Normal');
      doc.setFontSize(10);
      doc.setTextColor(120, 120, 120);
      doc.text('暂无投资数据 / No investment data', margin, y);
      y += 12;
    }
    
    if (allocations.length > 0) {
      y += 10;
      
      doc.setFont('Helvetica', 'Bold');
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text('投资详情 / Investment Details', margin, y);
      y += 10;
      
      const detailTableHeaders = ['产品名称 / Name', '投入金额 / Invested', '估值 / Value', '占比 / Weight', '收益 / Return'];
      const detailTableData = allocations.map(a => {
        let allocationValue = 0;
        let retRate = 0;
        const allocationInvested = a.amount || 0;
        
        if (a.productId && state.data.products.length > 0) {
          const product = state.data.products.find(p => p.id === a.productId);
          if (product) {
            const productDeposits = product.transactions?.filter(tx => tx.type === 'deposit').reduce((sum, tx) => sum + tx.amount, 0) || 0;
            const productWithdrawals = product.transactions?.filter(tx => tx.type === 'withdrawal').reduce((sum, tx) => sum + tx.amount, 0) || 0;
            const productTotal = productDeposits - productWithdrawals;
            
            if (product.valueHistory && product.valueHistory.length > 0) {
              const sorted = [...product.valueHistory].sort((x, y) => y.date.localeCompare(x.date));
              const productLatestValue = sorted[0].value || 0;
              if (productTotal > 0) {
                allocationValue = (productLatestValue * allocationInvested) / productTotal;
              }
            }
          }
        }
        
        if (allocationInvested > 0) {
          retRate = (allocationValue - allocationInvested) / allocationInvested;
        }
        
        const weight = summary.totalInvested ? (allocationInvested / summary.totalInvested) * 100 : 0;
        
        return [
          a.name || getProductName(a.productId, state.data.products),
          fmtCurrency(allocationInvested),
          fmtCurrency(Math.round(allocationValue)),
          weight.toFixed(1) + '%',
          retRate >= 0 ? '+' + fmtPct(retRate) : fmtPct(retRate)
        ];
      });
      
      doc.autoTable({
        head: [detailTableHeaders],
        body: detailTableData,
        startY: y,
        margin: { left: margin, right: margin },
        theme: 'striped',
        headStyles: {
          fillColor: '#1a1a2e',
          textColor: '#ffffff',
          fontStyle: 'bold',
          fontSize: 9,
          cellPadding: 5
        },
        bodyStyles: {
          fontSize: 9,
          cellPadding: 4
        },
        alternateRowStyles: {
          fillColor: '#f5f5f5'
        },
        columnStyles: {
          0: { width: 55 },
          1: { width: 40 },
          2: { width: 40 },
          3: { width: 35 },
          4: { width: 35 }
        }
      });
      
      y = getLastAutoTableFinalY(doc, y) + 12;
    }
    
    doc.setFont('Helvetica', 'Bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('组合分析 / Portfolio Analysis', margin, y);
    y += 10;
    
    const analysisData = [
      ['投资产品数 / Products', (investor.allocations || []).filter(a => (a.amount || 0) > 0).length],
      ['平均收益率 / Avg Return', fmtSignedPct(summary.returnRate)],
      ['最高收益产品 / Best', summary.bestAllocation?.name ?? '-'],
      ['最近更新 / Updated', investor.lastReview],
      ['总投入 / Total', fmtCurrency(summary.totalInvested)],
      ['总估值 / Value', fmtCurrency(summary.totalValue)],
      ['总收益 / Profit', summary.profit >= 0 ? '+' + fmtCurrency(summary.profit) : fmtCurrency(summary.profit)],
      ['投资期限 / Days', calculateInvestmentDays(investor.joinedAt) + ' 天']
    ];
    
    const analysisCol1 = analysisData.slice(0, 4);
    const analysisCol2 = analysisData.slice(4);
    
    let analysisY = y;
    analysisCol1.forEach((row, i) => {
      doc.setFont('Helvetica', 'Normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(row[0], margin, analysisY);
      
      doc.setFont('Helvetica', 'Bold');
      doc.setTextColor(0, 0, 0);
      doc.text(String(row[1]), margin + 75, analysisY);
      
      analysisY += 12;
    });
    
    analysisY = y;
    analysisCol2.forEach((row, i) => {
      doc.setFont('Helvetica', 'Normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(row[0], margin + 110, analysisY);
      
      doc.setFont('Helvetica', 'Bold');
      doc.setTextColor(0, 0, 0);
      doc.text(String(row[1]), margin + 180, analysisY);
      
      analysisY += 12;
    });
    
    y = analysisY + 12;
    
    if ((investor.notices || []).length > 0) {
      doc.setFont('Helvetica', 'Bold');
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text('沟通纪要 / Notices', margin, y);
      y += 10;
      
      const notices = (investor.notices || []).slice(0, 3);
      
      notices.forEach((notice, index) => {
        doc.setFillColor('#0052ff');
        doc.setAlpha(0.05);
        doc.roundedRect(margin, y, pageWidth - margin * 2, 40, 4, 4, 'F');
        doc.setAlpha(1);
        
        doc.setLineWidth(0.3);
        doc.setStrokeColor('#0052ff');
        doc.roundedRect(margin, y, pageWidth - margin * 2, 40, 4, 4);
        
        doc.setFont('Helvetica', 'Bold');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(notice.title, margin + 8, y + 14);
        
        doc.setFont('Helvetica', 'Normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(notice.date, margin + 8, y + 28);
        
        const detail = notice.detail.length > 60 ? notice.detail.substring(0, 60) + '...' : notice.detail;
        doc.setTextColor(60, 60, 60);
        doc.setFontSize(9);
        doc.text(detail, margin + 60, y + 28);
        
        y += 45;
      });
    }
    
    y = pageHeight - margin - 20;
    
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;
    
    doc.setFont('Helvetica', 'Normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text('© 2024 恺皓资本 KaiHao Capital · 仅供内部使用 / For Internal Use Only', pageWidth / 2, y, { align: 'center' });
    
    const currentDate = new Date().toISOString().slice(0, 10);
    const filename = `投资报告_${investor.name}_${currentDate}.pdf`;
    
    // 直接使用jsPDF的save方法
    doc.save(filename);
    return true;
    
  } catch (error) {
    console.error('PDF导出失败:', error);
    return false;
  }
}

function getLastAutoTableFinalY(doc, fallbackY = 0) {
  return doc.lastAutoTable?.finalY ?? doc.autoTable?.previous?.finalY ?? fallbackY;
}

function getProductName(productId, products) {
  const product = products.find(p => p.id === productId);
  return product ? product.name : '未知产品';
}

function fmtPct(num) {
  if (typeof num !== 'number' || isNaN(num)) return '0.00%';
  return (num * 100).toFixed(2) + '%';
}

function calculateInvestmentDays(joinedAt) {
  if (!joinedAt) return 0;
  const joinedDate = new Date(joinedAt);
  const today = new Date();
  const diffTime = Math.abs(today - joinedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
