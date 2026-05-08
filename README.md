# 恺皓资本仓库说明

这个仓库现在包含两部分内容：

- `网页/`：当前正在使用并发布到 GitHub Pages 的网页版本
- `小程序/`：微信小程序版本

## 当前发布方式

GitHub Pages 现在发布的是 `网页/` 目录，不是仓库根目录。

发布工作流文件：

- `.github/workflows/deploy-pages.yml`

只要你把修改推送到 `main`，GitHub Pages 就会自动重新发布 `网页/` 中的内容。

## 目录结构

```text
investment-asset-platform/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── 小程序/
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   └── pages/
├── 网页/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── data/
│   │   └── latest.json
│   ├── import-data.html
│   └── 其他页面脚本
└── README.md
```

## 网页版怎么运行

在仓库根目录执行：

```bash
cd 网页
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问：

- `http://127.0.0.1:4173`

## 网页版数据来源

网页版本现在会优先读取这个文件：

- `网页/data/latest.json`

如果远程文件可访问，页面启动或登录时会优先拉取它；如果拉取失败，才会回退到浏览器本地缓存。

## 你后续怎么更新网站数据

最简单的做法：

1. 在网页后台导出最新数据
2. 得到导出的 `latest.json`
3. 用新文件覆盖 `网页/data/latest.json`
4. 提交并推送到 GitHub
5. 等待 GitHub Pages 自动发布完成

建议同时保留一份带日期的备份，例如：

- `网页/cj-capital-2026-05-09.json`

但网站真正读取的文件，始终应该是：

- `网页/data/latest.json`

## 网页版当前保留的功能

- 投资者登录
- 管理端登录
- 产品与用户管理
- 数据导入与导出
- PDF 报告导出
- GitHub 数据同步读取

## 维护建议

- 日常只需要维护 `网页/` 目录
- 如果你只更新网页站点，不需要改 `小程序/`
- 如果后面不再维护小程序，可以再单独决定是否把 `小程序/` 拆成独立仓库
