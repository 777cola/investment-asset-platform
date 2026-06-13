<div align="center">

# 🏛️ 恺皓资本 · 资产管理平台

**KaiHao Capital · Asset Management Platform**

---

### 🔗 [立即访问平台](https://777cola.github.io/investment-asset-platform/)

---

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2ea44f?style=for-the-badge&logo=github&logoColor=white)](https://777cola.github.io/investment-asset-platform/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/777cola/investment-asset-platform?style=for-the-badge&logo=github)](https://github.com/777cola/investment-asset-platform)
[![Gitee Mirror](https://img.shields.io/badge/Gitee-镜像-red?style=for-the-badge&logo=gitee)](https://gitee.com/AutumnPants/kaihao-capital)

<br/>

> 为投资者提供专业、透明、高效的资产管理服务  
> Professional, transparent, and efficient asset management

</div>

---

## ✨ 平台特色

| 功能 | 说明 |
|:---|:---|
| 📊 **资产全览** | 实时查看所有投资者的资产配置与净值变化 |
| 👥 **投资者管理** | 完整的投资者档案，支持利率、资金流水、产品配置等多维度管理 |
| 📈 **CTA 净值追踪** | 基金净值走势图，直观展示历史表现 |
| 💰 **利息发放记录** | 逐笔记录利息发放，支持时间线回顾 |
| 📦 **产品管理** | 灵活的产品体系，支持多币种、多策略 |
| 📄 **PDF 报表导出** | 一键生成专业 PDF 报表，可打印 / 分享 |
| 🌐 **三语支持** | 中文 / English / 日本語 完整国际化 |
| 🔒 **本地存储** | 数据存储于浏览器 localStorage，无需后端，隐私安全 |
| 📱 **响应式设计** | 完美适配桌面端与移动端 |

---

## 🖥️ 技术栈

```
前端：原生 HTML + CSS + JavaScript（零框架依赖）
图表：Chart.js 4.x
报表：jsPDF + AutoTable + html2canvas
数据：XLSX.js（Excel 导入导出）
存储：localStorage + 远程 JSON 数据源
部署：GitHub Pages（自动 CI/CD）
```

---

## 📁 项目结构

```
investment-asset-platform/
├── index.html              # 主入口页面
├── import-data.html        # 数据导入工具页
├── styles.css              # 全局样式（暗色主题）
├── app.js                  # 应用入口
├── 配置.js                 # 常量配置
├── 状态.js                 # 全局状态管理
│
├── 登录页面.js             # 登录界面
├── 侧边栏.js              # 侧边栏导航
├── 投资者页面.js           # 投资者详情页
├── 资产全览.js             # 资产总览面板
├── 用户管理.js             # 用户管理逻辑
├── 产品管理.js             # 产品管理逻辑
├── 数据操作.js             # 数据 CRUD（含 normalizeData）
├── 数据管理.js             # 数据持久化
├── 利息发放记录.js         # 利息发放记录页
├── 价值更新.js             # 净值更新逻辑
├── 事件处理.js             # 全局事件绑定
├── 渲染引擎.js             # DOM 渲染
├── 图表.js                 # Chart.js 封装
├── 工具函数.js             # 通用工具函数
├── 提示消息.js             # Toast 通知
├── 国际化.js               # i18n 三语翻译
├── pdf-export.js           # PDF 导出逻辑
├── 管理菜单.js             # 管理后台菜单
│
├── data/
│   └── latest.json         # 远程基金净值数据
│
└── .github/
    └── workflows/
        └── deploy-pages.yml  # GitHub Pages 自动部署
```

---

## 🚀 快速开始

### 在线访问

直接打开 👉 **[https://777cola.github.io/investment-asset-platform/](https://777cola.github.io/investment-asset-platform/)**

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/777cola/investment-asset-platform.git
cd investment-asset-platform

# 启动本地服务（任选一种）
python3 -m http.server 8080
# 或
npx serve .

# 访问 http://localhost:8080
```

---

## 📸 界面预览

> 暗色金融主题 · DM Sans 字体 · 渐变背景网格

| 资产全览 | 投资者详情 |
|:---:|:---:|
| 总资产、产品分布、净值走势 | 个人资产配置、资金流水、利息记录 |

---

## 🔧 数据说明

- **本地数据**：投资者信息、产品配置等存储在 `localStorage`（key: `cj-capital-v2-data`）
- **远程数据**：基金净值数据来自 `data/latest.json`，包含 CTA 净值序列
- **数据导入**：通过 `import-data.html` 页面可批量导入 Excel 数据
- **版本管理**：每次更新版本号后自动清除旧缓存并刷新

---

## 📄 License

[MIT License](LICENSE) © 2026 AutumnPants

---

<div align="center">

**恺皓资本 · 您值得信赖的资产管理伙伴**

*KaiHao Capital · Your Trusted Asset Management Partner*

</div>
