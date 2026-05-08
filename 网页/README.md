# 网页版说明

这是仓库中的网页版本目录，也是 GitHub Pages 当前实际发布的站点目录。

## 本地运行

在当前目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问：

- `http://127.0.0.1:4173`

## 数据文件

网页会优先读取：

- `data/latest.json`

你也可以在这里保留历史备份，例如：

- `cj-capital-2026-05-07-3.json`

## 更新数据的方法

1. 在后台导出最新数据
2. 用导出的文件覆盖 `data/latest.json`
3. 提交并推送到 GitHub
4. 等待 GitHub Pages 自动发布

## 当前功能

- 登录
- 用户管理
- 产品管理
- 价值更新
- 数据导入导出
- PDF 导出
