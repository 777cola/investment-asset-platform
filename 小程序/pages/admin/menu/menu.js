Page({
  data: {
    username: '',
    investorCount: 0,
    productCount: 0,
    interestRecordCount: 0,
    totalAssetValue: 0,
    totalProductValue: 0,
    totalInvested: 0,
    totalProfit: 0,
    totalReturnRate: 0,
    totalInterestAmount: 0,
    lastUpdateDate: '',
    dataVersion: 'v1.0'
  },
  onLoad() {
    this.loadAdminData();
  },
  loadAdminData() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    const data = app.globalData.data;
    
    // 计算投资者相关数据
    const investorCount = data.investors.length;
    let totalAssetValue = 0;
    let totalInvested = 0;
    
    data.investors.forEach(investor => {
      investor.allocations.forEach(alloc => {
        totalAssetValue += alloc.latestValue;
        totalInvested += alloc.amountInvested;
      });
    });
    
    const totalProfit = totalAssetValue - totalInvested;
    const totalReturnRate = totalInvested > 0 ? (totalProfit / totalInvested) * 100 : 0;
    
    // 计算产品相关数据
    const productCount = data.products.length;
    let totalProductValue = 0;
    
    data.products.forEach(product => {
      if (product.valueHistory && product.valueHistory.length > 0) {
        const latestValue = product.valueHistory[product.valueHistory.length - 1].value;
        totalProductValue += latestValue;
      }
    });
    
    // 计算利息发放相关数据
    const interestRecordCount = data.interestRecords ? data.interestRecords.length : 0;
    const totalInterestAmount = data.interestRecords ? data.interestRecords.reduce((sum, record) => sum + record.amount, 0) : 0;
    
    // 计算上次更新日期
    let lastUpdateDate = '从未更新';
    if (data.snapshotDate) {
      lastUpdateDate = data.snapshotDate;
    }
    
    // 格式化数值
    const formattedTotalAssetValue = totalAssetValue.toLocaleString();
    const formattedTotalProductValue = totalProductValue.toLocaleString();
    const formattedTotalInvested = totalInvested.toLocaleString();
    const formattedTotalProfit = totalProfit.toLocaleString();
    const formattedTotalReturnRate = totalReturnRate.toFixed(2);
    const formattedTotalInterestAmount = totalInterestAmount.toLocaleString();
    
    this.setData({
      username: session.username,
      investorCount,
      productCount,
      interestRecordCount,
      totalAssetValue: formattedTotalAssetValue,
      totalProductValue: formattedTotalProductValue,
      totalInvested: formattedTotalInvested,
      totalProfit: formattedTotalProfit,
      totalReturnRate: formattedTotalReturnRate,
      totalInterestAmount: formattedTotalInterestAmount,
      lastUpdateDate
    });
  },
  navigateToUserManagement() {
    wx.navigateTo({ url: '/pages/admin/user-management/user-management' });
  },
  navigateToProductManagement() {
    wx.navigateTo({ url: '/pages/admin/product-management/product-management' });
  },
  navigateToValueUpdate() {
    wx.navigateTo({ url: '/pages/admin/value-update/value-update' });
  },
  navigateToAssetOverview() {
    wx.navigateTo({ url: '/pages/admin/asset-overview/asset-overview' });
  },
  navigateToInterestRecords() {
    wx.navigateTo({ url: '/pages/admin/interest-records/interest-records' });
  },
  navigateToDataManagement() {
    wx.navigateTo({ url: '/pages/admin/data-management/data-management' });
  },
  onLogout() {
    const app = getApp();
    app.logout();
    wx.redirectTo({ url: '/pages/login/login' });
  }
});