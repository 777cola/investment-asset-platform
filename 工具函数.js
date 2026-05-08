// 工具函数 — 格式化、计算、通用辅助

/* ── 格式化 ── */

/**
 * 格式化货币为人民币格式
 * @param {number} num - 金额数字
 * @returns {string} 格式化后的货币字符串
 */
export function fmtCurrency(num) {
  if (typeof num !== "number" || isNaN(num)) return "¥0";
  return new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY", maximumFractionDigits: 0 }).format(num);
}

/**
 * 格式化货币为紧凑格式（万元、亿元）
 * @param {number} num - 金额数字
 * @returns {string} 紧凑格式的货币字符串
 */
export function fmtCurrencyCompact(num) {
  if (typeof num !== "number" || isNaN(num)) return "¥0";
  if (num >= 1e8)  return "¥" + (num / 1e8).toFixed(2) + " 亿";
  if (num >= 1e4)  return "¥" + (num / 1e4).toFixed(2) + " 万";
  return fmtCurrency(num);
}

/**
 * 格式化百分比
 * @param {number} num - 小数形式的百分比（如0.05表示5%）
 * @returns {string} 格式化后的百分比字符串
 */
export function fmtPct(num) {
  if (typeof num !== "number" || isNaN(num)) return "0.00%";
  return (num * 100).toFixed(2) + "%";
}

/**
 * 格式化带符号的百分比
 * @param {number} num - 小数形式的百分比（如0.05表示5%）
 * @returns {string} 带符号的百分比字符串
 */
export function fmtSignedPct(num) {
  if (typeof num !== "number" || isNaN(num)) return "+0.00%";
  const sign = num >= 0 ? "+" : "";
  return sign + (num * 100).toFixed(2) + "%";
}



/* ── 投资者摘要 ── */

/**
 * 获取投资者资产摘要信息
 * @param {Object} investor - 投资者对象
 * @param {Array} products - 产品列表
 * @returns {Object} 投资者资产摘要，包含总投入、总价值、利润、回报率和最佳投资分配
 */
export function getInvestorSummary(investor, products = []) {
  if (!investor) return { totalInvested: 0, totalValue: 0, profit: 0, returnRate: 0, bestAllocation: null };

  const allocs = Array.isArray(investor.allocations) ? investor.allocations : [];
  
  // 从投资者的出入金记录计算净投入（与管理后台保持一致）
  const fundFlow = investor.fundFlow || [];
  const totalDeposits = fundFlow.filter(f => f.type === "deposit").reduce((sum, f) => sum + f.amount, 0);
  const totalWithdrawals = fundFlow.filter(f => f.type === "withdrawal").reduce((sum, f) => sum + f.amount, 0);
  const totalInvested = totalDeposits - totalWithdrawals;

  // 计算投资者的当前资产价值（基于分配金额和产品最新价值）
  let totalValue = 0;
  allocs.forEach(a => {
    if (a.productId) {
      const product = products.find(p => p.id === a.productId);
      if (product) {
        const latestValue = product.valueHistory?.length > 0
          ? [...product.valueHistory].sort((x, y) => y.date.localeCompare(x.date))[0].value
          : 0;
        const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
        const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
        const productTotal = productDeposits - productWithdrawals;
        if (productTotal > 0) {
          totalValue += (latestValue * (a.amount || 0) / productTotal);
        }
      }
    }
  });

  const profit = totalValue - totalInvested;
  const returnRate = totalInvested ? profit / totalInvested : 0;

  let bestAllocation = null;
  let bestReturnRate = -Infinity;

  allocs.forEach(a => {
    let allocationReturnRate = 0;
    if (a.productId) {
      const product = products.find(p => p.id === a.productId);
      if (product) {
        const productDeposits = product.transactions?.filter(tx => tx.type === "deposit").reduce((sum, tx) => sum + tx.amount, 0) || 0;
        const productWithdrawals = product.transactions?.filter(tx => tx.type === "withdrawal").reduce((sum, tx) => sum + tx.amount, 0) || 0;
        const productTotal = productDeposits - productWithdrawals;
        if (productTotal > 0 && product.valueHistory && product.valueHistory.length > 0) {
          const sorted = [...product.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
          const productLatestValue = sorted[0].value || 0;
          allocationReturnRate = (productLatestValue - productTotal) / productTotal;
        }
      }
    }
    
    if (allocationReturnRate > bestReturnRate) {
      bestReturnRate = allocationReturnRate;
      bestAllocation = a;
    }
  });

  return {
    totalInvested,
    totalValue,
    profit,
    returnRate,
    bestAllocation
  };
}

/* ── 平台总览 ── */

/**
 * 获取平台资产总览信息
 * @param {Array} investors - 投资者列表
 * @param {Array} products - 产品列表
 * @returns {Object} 平台资产总览，包含投资者数量、总投入、总价值和总回报率
 */
export function getPlatformSummary(investors, products = []) {
  // 从产品的transactions计算总入金（管理本金）
  let totalDeposits = 0;
  // 从产品的valueHistory计算总资产总值（最新估值）
  let totalValue = 0;
  
  if (Array.isArray(products) && products.length > 0) {
    products.forEach(p => {
      // 计算产品的总入金
      const deposits = p.transactions?.filter(t => t.type === "deposit").reduce((sum, t) => sum + t.amount, 0) || 0;
      totalDeposits += deposits;
      
      // 计算产品的最新价值
      if (p.valueHistory && p.valueHistory.length > 0) {
        const sorted = [...p.valueHistory].sort((a, b) => b.date.localeCompare(a.date));
        totalValue += sorted[0].value || 0;
      }
    });
  }
  
  return {
    investorCount: Array.isArray(investors) ? investors.length : 0,
    totalInvested: totalDeposits, // 管理本金 = 总入金
    totalValue: totalValue, // 最新估值 = 总资产总值
    totalReturnRate: totalDeposits ? (totalValue - totalDeposits) / totalDeposits : 0
  };
}



/* ── ID 生成 ── */

/**
 * 生成唯一ID
 * @param {string} prefix - ID前缀
 * @returns {string} 生成的唯一ID
 */
export function generateId(prefix = "ID") {
  return prefix + "-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
}

/**
 * 生成投资者ID（避免包含数字4）
 * @param {Array} investors - 现有投资者列表
 * @returns {string} 生成的投资者ID
 */
export function generateInvestorId(investors) {
  let n = 1;
  while (true) {
    const id = String(n).padStart(3, "0");
    if (!id.includes("4")) {
      const exists = investors.some(inv => inv.id === id);
      if (!exists) return id;
    }
    n++;
  }
}

/* ── 文件下载 ── */

/**
 * 下载Blob文件
 * @param {string|ArrayBuffer} content - 文件内容
 * @param {string} filename - 文件名
 * @param {string} type - 文件类型
 */
export function downloadBlob(content, filename, type = "application/json") {
  const blob = new Blob([content], { type });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement("a"), { href: url, download: filename });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ── 颜色辅助（净值图表） ── */

/**
 * 根据数值获取性能样式类名
 * @param {number} val - 数值
 * @returns {string} 样式类名（"up"或"down"）
 */
export function perfClass(val) {
  return val >= 0 ? "up" : "down";
}

/* ── 日期工具 ── */

/**
 * 获取当前日期的ISO格式（YYYY-MM-DD）
 * @returns {string} 当前日期的ISO格式字符串
 */
export function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * 格式化日期为YYYY-MM-DD格式
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

/* ── 数据处理 ── */

/**
 * 计算数组中指定类型的总和
 * @param {Array} array - 数组
 * @param {string} typeField - 类型字段名
 * @param {string} typeValue - 类型值
 * @param {string} amountField - 金额字段名
 * @returns {number} 总和
 */
export function calculateSumByType(array, typeField, typeValue, amountField) {
  if (!Array.isArray(array)) return 0;
  return array.filter(item => item[typeField] === typeValue).reduce((sum, item) => sum + (item[amountField] || 0), 0);
}

/**
 * 计算净投入（总入金 - 总出金）
 * @param {Array} fundFlow - 出入金记录数组
 * @returns {number} 净投入
 */
export function calculateNetInvested(fundFlow) {
  const totalDeposits = calculateSumByType(fundFlow, 'type', 'deposit', 'amount');
  const totalWithdrawals = calculateSumByType(fundFlow, 'type', 'withdrawal', 'amount');
  return totalDeposits - totalWithdrawals;
}

/* ── 密码加密 ── */

/**
 * 使用SHA-256对密码进行哈希处理
 * @param {string} password - 原始密码
 * @returns {Promise<string>} 哈希后的密码
 */
export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * 验证密码是否匹配
 * @param {string} password - 原始密码
 * @param {string} hashedPassword - 哈希后的密码
 * @returns {Promise<boolean>} 是否匹配
 */
export async function verifyPassword(password, hashedPassword) {
  const hash = await hashPassword(password);
  return hash === hashedPassword;
}
