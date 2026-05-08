// 应用入口

App({
  globalData: {
    userInfo: null,
    data: null,
    session: null,
    cache: {
      totalAssets: null,
      investorAssets: {},
      productValues: {}
    },
    ui: {
      lang: 'zh',
      flash: { message: null, type: "info" },
      selectedInvestorId: null,
      navRange: "12M",
      authRole: "investor",
      adminSubPage: "menu",
      userSubPage: "list",
      editingInvestorId: null,
      productSubPage: "list",
      editingProductId: null,
      interestSubPage: "list"
    }
  },
  // 清除缓存
  clearCache: function() {
    this.globalData.cache = {
      totalAssets: null,
      investorAssets: {},
      productValues: {}
    };
  },
  onLaunch: function() {
    // 初始化数据
    this.loadData();
  },
  loadData: function() {
    try {
      const raw = wx.getStorageSync('cj-capital-v2-data');
      if (raw) {
        this.globalData.data = JSON.parse(raw);
      } else {
        // 使用默认数据
        this.globalData.data = {
          platformName: "恺皓资本资产平台",
          snapshotDate: new Date().toISOString().slice(0, 10),
          adminUsers: [],
          investors: [],
          products: []
        };
        this.saveData();
      }
    } catch (e) {
      console.error('加载数据失败:', e);
      this.globalData.data = {
        platformName: "恺皓资本资产平台",
        snapshotDate: new Date().toISOString().slice(0, 10),
        adminUsers: [],
        investors: [],
        products: []
      };
      this.saveData();
    }
  },
  saveData: function() {
    try {
      wx.setStorageSync('cj-capital-v2-data', JSON.stringify(this.globalData.data));
      // 清除缓存，确保下次计算使用最新数据
      this.clearCache();
    } catch (e) {
      console.error('保存数据失败:', e);
    }
  },
  login: function(session) {
    this.globalData.session = session;
  },
  logout: function() {
    this.globalData.session = null;
  },
  // 计算投资者资产数据
  calculateInvestorAssets: function(investor) {
    if (!investor || !investor.allocations) {
      return {
        totalInvested: 0,
        totalValue: 0,
        profit: 0,
        returnRate: 0
      };
    }
    
    // 检查缓存
    if (this.globalData.cache.investorAssets[investor.id]) {
      return this.globalData.cache.investorAssets[investor.id];
    }
    
    const totalInvested = investor.allocations.reduce((sum, alloc) => sum + (alloc.amountInvested || 0), 0);
    const totalValue = investor.allocations.reduce((sum, alloc) => sum + (alloc.latestValue || 0), 0);
    const profit = totalValue - totalInvested;
    const returnRate = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;
    
    const result = {
      totalInvested,
      totalValue,
      profit,
      returnRate
    };
    
    // 缓存结果
    this.globalData.cache.investorAssets[investor.id] = result;
    return result;
  },
  // 计算产品最新价值
  getProductLatestValue: function(product) {
    if (!product || !product.valueHistory || product.valueHistory.length === 0) {
      return 0;
    }
    
    // 检查缓存
    if (this.globalData.cache.productValues[product.id]) {
      return this.globalData.cache.productValues[product.id];
    }
    
    const value = product.valueHistory[product.valueHistory.length - 1].value;
    
    // 缓存结果
    this.globalData.cache.productValues[product.id] = value;
    return value;
  },
  // 计算总资产数据
  calculateTotalAssets: function() {
    // 检查缓存
    if (this.globalData.cache.totalAssets) {
      return this.globalData.cache.totalAssets;
    }
    
    const data = this.globalData.data;
    if (!data) {
      return {
        totalAssetValue: 0,
        totalInvested: 0,
        totalProfit: 0,
        totalReturnRate: 0
      };
    }
    
    let totalAssetValue = 0;
    let totalInvested = 0;
    
    // 计算投资者资产
    data.investors.forEach(investor => {
      const assets = this.calculateInvestorAssets(investor);
      totalInvested += assets.totalInvested;
      totalAssetValue += assets.totalValue;
    });
    
    const totalProfit = totalAssetValue - totalInvested;
    const totalReturnRate = totalInvested > 0 ? (totalProfit / totalInvested) * 100 : 0;
    
    const result = {
      totalAssetValue,
      totalInvested,
      totalProfit,
      totalReturnRate
    };
    
    // 缓存结果
    this.globalData.cache.totalAssets = result;
    return result;
  }
});