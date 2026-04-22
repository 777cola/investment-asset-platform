# 恺皓资本资产管理平台

一个可直接部署的金融投资资产展示平台，覆盖以下核心功能：

- 管理员录入投资者资料、投资方向、最新净值和沟通纪要
- 投资者通过编号、密码、手机号后四位进行身份验证
- 登录后查看投资金额、最新估值、投资方向分布、最新净值、历史净值变动
- 导入 / 导出 JSON 数据，便于后续接真实后台
- 通过 GitHub Pages 自动部署到云端

## 当前版本定位

这是一个前端 MVP / 演示版：

- 数据保存在浏览器 localStorage
- 管理员修改后会在当前浏览器持久化
- 不同设备之间不会自动同步
- 适合展示产品结构、业务流程和页面效果

如果你要正式商用，建议下一步接入：

- 认证：Supabase Auth / Firebase Auth / 自建登录系统
- 数据库：Postgres / Supabase / MySQL / 企业内网 API
- 权限：管理员、投顾、投资者、多角色审计日志

## 演示账号

- 用户名：演示
- 密码：123456

## 本地运行

这个项目是纯静态前端，不需要构建。
你可以在项目目录运行：

```bash
python3 -m http.server 4173
```

然后访问：
```
http://localhost:4173
```

## 数据结构

主要数据在浏览器中以 JSON 形式保存，结构大致如下：

```json
{
  "adminUsers": [],
  "investors": [
    {
      "id": "INV-24001",
      "name": "林嘉禾",
      "allocations": [],
      "navHistory": [],
      "notices": []
    }
  ]
}
```

后续如果接后端，可以直接映射为：
- investors
- allocations
- nav_history
- notices
- admin_users

## GitHub Pages 部署

仓库里已经带好了 GitHub Pages 工作流：`.github/workflows/deploy-pages.yml`

部署步骤：
1. 在 GitHub 新建一个仓库
2. 把当前目录推送到该仓库的 main 分支
3. 打开 GitHub 仓库设置中的 Pages
4. 选择 GitHub Actions 作为部署来源
5. 之后每次推送到 main，GitHub 都会自动发布最新页面

## 下一步建议

如果你准备把它做成正式可用的平台，推荐按这个顺序升级：

1. 把登录验证替换成真实身份认证
2. 把录入表单接数据库
3. 给投资者资料和净值数据增加权限控制与日志
4. 增加 Excel 导入、PDF 报表导出和通知消息