Page({
  data: {
    investor: {},
    totalValue: 0,
    totalInvested: 0,
    profit: 0,
    returnRate: 0
  },
  onLoad() {
    this.loadInvestorData();
  },
  loadInvestorData() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    const investor = app.globalData.data.investors.find(inv => inv.id === session.id);
    if (!investor) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    // 使用 app.js 中的计算方法
    const assets = app.calculateInvestorAssets(investor);
    
    // 格式化 allocations 中的数值
    const formattedInvestor = {
      ...investor,
      allocations: investor.allocations ? investor.allocations.map(alloc => ({
        ...alloc,
        amountInvestedFormatted: alloc.amountInvested.toLocaleString(),
        latestValueFormatted: alloc.latestValue.toLocaleString(),
        profitFormatted: (alloc.latestValue - alloc.amountInvested).toLocaleString(),
        returnRateFormatted: ((alloc.latestValue / alloc.amountInvested - 1) * 100).toFixed(2)
      })) : []
    };
    
    this.setData({
      investor: formattedInvestor,
      totalValue: assets.totalValue.toLocaleString(),
      totalInvested: assets.totalInvested.toLocaleString(),
      profit: assets.profit.toLocaleString(),
      returnRate: assets.returnRate.toFixed(2)
    });
  },
  onLogout() {
    const app = getApp();
    app.logout();
    wx.redirectTo({ url: '/pages/login/login' });
  }
});