// 数据操作 — localStorage 持久化、导入导出

import { STORAGE_KEY, SESSION_KEY } from "./配置.js";
import { downloadBlob, hashPassword, generateInvestorId } from "./工具函数.js";

/* ── 数据加载 ── */
export async function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (validateData(parsed)) return await normalizeData(parsed);
    }
  } catch (_) { /* 忽略解析错误 */ }

  // 尝试自动加载本地json文件
  try {
    const response = await fetch('cj-capital-2026-04-22.json');
    if (response.ok) {
      const jsonData = await response.json();
      if (validateData(jsonData)) {
        const normalizedData = await normalizeData(jsonData);
        saveData(normalizedData);
        return normalizedData;
      }
    }
  } catch (err) {
    console.log('自动加载json文件失败，使用默认数据:', err);
  }

  const emptyData = {
    platformName: "恺皓资本资产平台",
    snapshotDate: new Date().toISOString().slice(0, 10),
    adminUsers: [],
    investors: [],
    products: []
  };
  const normalizedEmptyData = await normalizeData(emptyData);
  saveData(normalizedEmptyData);
  return normalizedEmptyData;
}

export function saveData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.error("Save failed:", e); }
}

/* ── 会话 ── */
export function loadSession() {
  try { const raw = sessionStorage.getItem(SESSION_KEY); return raw ? JSON.parse(raw) : null; } catch (_) { return null; }
}

export function persistSession(session) {
  try {
    if (session) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(SESSION_KEY);
  } catch (_) {}
}

/* ── 验证 ── */
function validateData(d) {
  if (!d || typeof d !== 'object') return false;
  if (!Array.isArray(d.investors)) return false;
  if (!Array.isArray(d.adminUsers)) return false;
  
  // 验证投资者数据
  for (const investor of d.investors) {
    if (!investor || typeof investor !== 'object') return false;
    if (typeof investor.id !== 'string' || investor.id.trim() === '') return false;
    if (typeof investor.name !== 'string' || investor.name.trim() === '') return false;
    if (typeof investor.password !== 'string') return false;
    if (investor.usernames && !Array.isArray(investor.usernames)) return false;
    if (investor.allocations && !Array.isArray(investor.allocations)) return false;
    if (investor.fundFlow && !Array.isArray(investor.fundFlow)) return false;
    if (investor.notices && !Array.isArray(investor.notices)) return false;
    
    // 验证投资者的分配数据
    if (Array.isArray(investor.allocations)) {
      for (const alloc of investor.allocations) {
        if (!alloc || typeof alloc !== 'object') return false;
        if (typeof alloc.id !== 'string') return false;
        if (typeof alloc.percentage !== 'number' || alloc.percentage < 0 || alloc.percentage > 100) return false;
        if (typeof alloc.amount !== 'number' || alloc.amount < 0) return false;
      }
    }
    
    // 验证投资者的出入金记录
    if (Array.isArray(investor.fundFlow)) {
      for (const flow of investor.fundFlow) {
        if (!flow || typeof flow !== 'object') return false;
        if (typeof flow.id !== 'string') return false;
        if (typeof flow.type !== 'string' || !['deposit', 'withdrawal'].includes(flow.type)) return false;
        if (typeof flow.date !== 'string') return false;
        if (typeof flow.amount !== 'number' || flow.amount <= 0) return false;
      }
    }
  }
  
  // 验证管理员数据
  for (const admin of d.adminUsers) {
    if (!admin || typeof admin !== 'object') return false;
    if (typeof admin.id !== 'string' || admin.id.trim() === '') return false;
    if (typeof admin.username !== 'string' || admin.username.trim() === '') return false;
    if (typeof admin.name !== 'string' || admin.name.trim() === '') return false;
    if (typeof admin.password !== 'string') return false;
  }
  
  // 验证产品数据（如果存在）
  if (d.products && Array.isArray(d.products)) {
    for (const product of d.products) {
      if (!product || typeof product !== 'object') return false;
      if (typeof product.id !== 'string' || product.id.trim() === '') return false;
      if (typeof product.name !== 'string' || product.name.trim() === '') return false;
      if (typeof product.platform !== 'string' || product.platform.trim() === '') return false;
      if (product.transactions && !Array.isArray(product.transactions)) return false;
      if (product.valueHistory && !Array.isArray(product.valueHistory)) return false;
      
      // 验证产品的交易记录
      if (Array.isArray(product.transactions)) {
        for (const tx of product.transactions) {
          if (!tx || typeof tx !== 'object') return false;
          if (typeof tx.type !== 'string' || !['deposit', 'withdrawal'].includes(tx.type)) return false;
          if (typeof tx.amount !== 'number' || tx.amount <= 0) return false;
          if (typeof tx.date !== 'string') return false;
        }
      }
      
      // 验证产品的价值历史
      if (Array.isArray(product.valueHistory)) {
        for (const history of product.valueHistory) {
          if (!history || typeof history !== 'object') return false;
          if (typeof history.date !== 'string') return false;
          if (typeof history.value !== 'number' || history.value < 0) return false;
        }
      }
    }
  }
  
  // 验证利息发放记录（如果存在）
  if (d.interestRecords && Array.isArray(d.interestRecords)) {
    for (const record of d.interestRecords) {
      if (!record || typeof record !== 'object') return false;
      if (typeof record.id !== 'string') return false;
      if (typeof record.investorId !== 'string') return false;
      if (typeof record.date !== 'string') return false;
      if (typeof record.platform !== 'string' || record.platform.trim() === '') return false;
      if (typeof record.amount !== 'number' || record.amount <= 0) return false;
    }
  }
  
  return true;
}

/* ── 规范化（补全缺失字段）── */
async function normalizeData(d) {
  // 检查密码是否已经哈希（SHA-256哈希长度为64个字符）
  function isHashed(password) {
    return typeof password === 'string' && password.length === 64 && /^[0-9a-fA-F]+$/.test(password);
  }

  // 处理管理员用户密码
  const adminUsers = await Promise.all((Array.isArray(d.adminUsers) ? d.adminUsers : []).map(async admin => ({
    ...admin,
    password: admin.password ? (isHashed(admin.password) ? admin.password : await hashPassword(admin.password)) : ""
  })));

  // 处理投资者密码
  const investors = await Promise.all((Array.isArray(d.investors) ? d.investors : []).map(async inv => ({
    id:          inv.id   ?? "",
    name:        inv.name ?? "",
    password:    inv.password ? (isHashed(inv.password) ? inv.password : await hashPassword(inv.password)) : "",
    usernames:   Array.isArray(inv.usernames) ? inv.usernames : [],
    joinedAt:    inv.joinedAt   ?? "",
    lastReview:  inv.lastReview ?? d.snapshotDate ?? "",
    allocations: Array.isArray(inv.allocations) ? inv.allocations.map(alloc => ({
      id:            alloc.id            ?? "",
      code:          alloc.code          ?? "",
      name:          alloc.name          ?? "",
      focus:         alloc.focus         ?? "",
      productId:     alloc.productId     ?? "",
      percentage:    alloc.percentage    ?? 0,
      amount:        alloc.amount        ?? 0,
      amountInvested: alloc.amountInvested ?? 0,
      latestValue:   alloc.latestValue   ?? 0
    })) : [],
    fundFlow: Array.isArray(inv.fundFlow) ? inv.fundFlow : [],
    notices:     Array.isArray(inv.notices)  ? inv.notices  : [],
  })));

  return {
    platformName: d.platformName ?? "恺皓资本资产平台",
    snapshotDate: d.snapshotDate ?? new Date().toISOString().slice(0, 10),
    adminUsers:   adminUsers,
    investors: investors,
    products: (Array.isArray(d.products) ? d.products : []).map(product => ({
      id:          product.id        ?? "",
      name:        product.name      ?? "",
      code:        product.code      ?? "",
      platform:    product.platform  ?? "",
      notes:       product.notes     ?? "",
      createdAt:   product.createdAt ?? d.snapshotDate ?? "",
      transactions: Array.isArray(product.transactions) ? product.transactions : [],
      valueHistory:  [...(Array.isArray(product.valueHistory) ? product.valueHistory : [])].sort((a, b) => a.date.localeCompare(b.date))
    })),
    interestRecords: Array.isArray(d.interestRecords) ? d.interestRecords : []
  };
}

/* ── 导出 ── */
export function exportJSON(data) {
  const filename = `cj-capital-${new Date().toISOString().slice(0, 10)}.json`;
  downloadBlob(JSON.stringify(data, null, 2), filename);
}

/* ── 导入 JSON ── */
export async function parseImportedJSON(text) {
  try {
    const parsed = JSON.parse(text);
    if (!validateData(parsed)) throw new Error("数据结构无效：缺少必要字段或字段类型错误。");
    return await normalizeData(parsed);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("JSON 格式错误：" + error.message);
    }
    throw error;
  }
}

/* ── 导入 Excel（使用 SheetJS）── */
export function parseImportedExcel(arrayBuffer) {
  if (!window.XLSX) throw new Error("XLSX 库未加载。");
  try {
    const wb = window.XLSX.read(arrayBuffer, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = window.XLSX.utils.sheet_to_json(ws);
    if (!rows.length) throw new Error("工作表中没有数据行。");

    const today = new Date().toISOString().slice(0, 10);
  const newInvestors = [];
  
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const name = String(row["姓名"] ?? row.name ?? "").trim();
    if (!name) throw new Error(`第 ${i + 2} 行缺少姓名。`);
    
    const password = String(row["密码"] ?? row.password ?? "123456").trim();
    if (password.length < 6) throw new Error(`第 ${i + 2} 行密码长度不足 6 位。`);
    
    newInvestors.push({
      id: "", // 暂时留空，后续会在调用处生成
      name,
      password,
      usernames:  [],
      joinedAt:    today,
      lastReview:  today,
      allocations: [],
      fundFlow: [],
      notices: [{ date: today, title: "账户导入", detail: "通过 Excel 导入创建账户。" }]
    });
  }
    
    return newInvestors;
  } catch (error) {
    throw new Error("Excel 解析错误：" + error.message);
  }
}

/* ── 重置 ── */
export function resetToDefault() {
  const emptyData = {
    platformName: "恺皓资本资产平台",
    snapshotDate: new Date().toISOString().slice(0, 10),
    adminUsers: [],
    investors: [],
    products: []
  };
  saveData(emptyData);
  return emptyData;
}
