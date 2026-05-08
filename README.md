# 恺皓资本资产管理平台

这是当前正在发布到 GitHub Pages 的网页版仓库。

## 当前结构

仓库根目录就是网站目录。

主要文件：

- `index.html`
- `styles.css`
- `app.js`
- `data/latest.json`
- `import-data.html`
- `.github/workflows/deploy-pages.yml`

## 本地运行

在仓库根目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问：

- `http://127.0.0.1:4173`

## 线上地址

- `https://777cola.github.io/investment-asset-platform/`

## 数据来源

网站会优先读取：

- `data/latest.json`

页面启动时会尝试拉取最新数据，登录时也会再同步一次；如果拉取失败，才会回退到浏览器本地缓存。

## 你后续怎么手动更新数据

1. 在后台导出最新数据
2. 导出的文件名现在默认就是 `latest.json`
3. 用新文件覆盖 `data/latest.json`
4. 提交并推送到 GitHub
5. 等待 GitHub Pages 自动发布完成

如果你想保留历史备份，也可以额外留一份带日期的文件，例如：

- `cj-capital-2026-05-07-3.json`

但网站真正读取的始终是：

- `data/latest.json`

## 当前功能

- 登录
- 用户管理
- 产品管理
- 价值更新
- 数据导入导出
- PDF 导出
- 从 GitHub 最新数据文件同步读取

## 分支建议

为了避免以后所有修改都直接进 `main`，建议以后这样用：

1. `main` 只保留可发布版本
2. 日常修改先在 `dev` 或功能分支完成
3. 确认无误后再合并到 `main`

这次整理后，仓库已经适合按这个方式继续维护。
