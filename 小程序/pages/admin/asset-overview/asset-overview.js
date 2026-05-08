Page({
  data: {
    totalAssetValue: 0,
    totalInvested: 0,
    totalProfit: 0,
    totalReturnRate: 0,
    investorAssets: [],
    productAssets: [],
    platformAssets: []
  },
  onLoad() {
    this.loadAssetData();
  },
  loadAssetData() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    const data = app.globalData.data;
    
    // 计算总资产数据
    let totalAssetValue = 0;
    let totalInvested = 0;
    
    // 计算投资者资产
    const investorAssets = data.investors.map(investor => {
      const invested = investor.allocations.reduce((sum, alloc) => sum + alloc.amountInvested, 0);
      const value = investor.allocations.reduce((sum, alloc) => sum + alloc.latestValue, 0);
      const returnRate = invested > 0 ? ((value - invested) / invested) * 100 : 0;
      
      totalInvested += invested;
      totalAssetValue += value;
      
      return {
        id: investor.id,
        name: investor.name,
        invested: invested.toLocaleString(),
        value: value.toLocaleString(),
        returnRate: returnRate.toFixed(2)
      };
    });
    
    const totalProfit = totalAssetValue - totalInvested;
    const totalReturnRate = totalInvested > 0 ? (totalProfit / totalInvested) * 100 : 0;
    
    // 计算产品资产
    const productAssets = data.products.map(product => {
      let value = 0;
      if (product.valueHistory && product.valueHistory.length > 0) {
        value = product.valueHistory[product.valueHistory.length - 1].value;
      }
      const percentage = totalAssetValue > 0 ? (value / totalAssetValue) * 100 : 0;
      
      return {
        id: product.id,
        name: product.name,
        platform: product.platform,
        value: value.toLocaleString(),
        percentage: percentage.toFixed(2)
      };
    });
    
    // 计算平台资产
    const platformMap = {};
    productAssets.forEach(product => {
      if (!platformMap[product.platform]) {
        platformMap[product.platform] = 0;
      }
      platformMap[product.platform] += product.value;
    });
    
    const platformAssets = Object.entries(platformMap).map(([platform, value]) => {
      const percentage = totalAssetValue > 0 ? (value / totalAssetValue) * 100 : 0;
      return {
        platform: platform,
        value: value.toLocaleString(),
        percentage: percentage.toFixed(2)
      };
    });
    
    // 格式化总值
    const formattedTotalAssetValue = totalAssetValue.toLocaleString();
    const formattedTotalInvested = totalInvested.toLocaleString();
    const formattedTotalProfit = totalProfit.toLocaleString();
    const formattedTotalReturnRate = totalReturnRate.toFixed(2);
    
    this.setData({
      totalAssetValue: formattedTotalAssetValue,
      totalInvested: formattedTotalInvested,
      totalProfit: formattedTotalProfit,
      totalReturnRate: formattedTotalReturnRate,
      investorAssets: investorAssets,
      productAssets: productAssets,
      platformAssets: platformAssets
    });
  },
  onBack() {
    wx.navigateBack();
  }
});