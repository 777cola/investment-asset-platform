// 修复登录问题 - 添加默认管理员和测试账户

const STORAGE_KEY = "cj-capital-v2-data";

function fixLoginIssue() {
  try {
    // 检查现有数据
    const raw = localStorage.getItem(STORAGE_KEY);
    let data;
    
    if (raw) {
      data = JSON.parse(raw);
    } else {
      data = {
        platformName: "恺皓资本资产平台",
        snapshotDate: new Date().toISOString().slice(0, 10),
        adminUsers: [],
        investors: [],
        products: []
      };
    }
    
    // 添加默认管理员账户
    if (!data.adminUsers || data.adminUsers.length === 0) {
      data.adminUsers.push({
        id: "admin1",
        username: "admin",
        password: "admin123",
        name: "管理员"
      });
      console.log("✓ 添加了默认管理员账户: admin / admin123");
    }
    
    // 添加测试投资者账户
    if (!data.investors || data.investors.length === 0) {
      data.investors.push({
        id: "INV001",
        name: "测试用户",
        password: "123456",
        usernames: ["test"],
        joinedAt: new Date().toISOString().slice(0, 10),
        lastReview: new Date().toISOString().slice(0, 10),
        allocations: [],
        notices: []
      });
      console.log("✓ 添加了测试投资者账户: 测试用户 / 123456");
    }
    
    // 添加默认产品
    if (!data.products || data.products.length === 0) {
      data.products.push({
        id: "P001",
        name: "股票",
        platform: "平安证券",
        notes: "默认股票产品",
        createdAt: new Date().toISOString().slice(0, 10),
        transactions: []
      });
      console.log("✓ 添加了默认产品: 股票");
    }
    
    // 保存修复后的数据
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log("✓ 数据修复完成！");
    console.log("\n登录信息：");
    console.log("管理员：admin / admin123");
    console.log("投资者：测试用户 / 123456");
    
    // 刷新页面
    setTimeout(() => {
      location.reload();
    }, 1000);
    
  } catch (error) {
    console.error("修复失败:", error);
  }
}

// 执行修复
fixLoginIssue();
