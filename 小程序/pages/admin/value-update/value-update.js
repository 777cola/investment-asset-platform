Page({
  data: {
    updateDate: '',
    products: [],
    productValues: {},
    updateHistory: []
  },
  onLoad() {
    this.loadData();
  },
  loadData() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    const today = new Date().toISOString().slice(0, 10);
    const products = app.globalData.data.products;
    const productValues = {};
    const updateHistory = [];
    
    // 初始化产品价值和历史记录
    products.forEach(product => {
      if (product.valueHistory && product.valueHistory.length > 0) {
        const latestValue = product.valueHistory[product.valueHistory.length - 1].value;
        productValues[product.id] = latestValue;
        
        // 添加最近的更新记录
        for (let i = product.valueHistory.length - 1; i >= 0 && i >= product.valueHistory.length - 3; i--) {
          const history = product.valueHistory[i];
          const prevHistory = i > 0 ? product.valueHistory[i - 1] : null;
          const change = prevHistory ? history.value - prevHistory.value : 0;
          
          updateHistory.push({
            productName: product.name,
            date: history.date,
            value: latestValue.toLocaleString(),
            change: change.toLocaleString()
          });
        }
      }
    });
    
    this.setData({
      updateDate: today,
      products: products,
      productValues: productValues,
      updateHistory: updateHistory
    });
  },
  onDateInput(e) {
    this.setData({
      updateDate: e.detail.value
    });
  },
  onValueInput(e) {
    const id = e.currentTarget.dataset.id;
    const value = parseFloat(e.detail.value) || 0;
    
    this.setData({
      [`productValues.${id}`]: value
    });
  },
  onPlatformInput(e) {
    // 平台信息不可编辑，仅作显示
  },
  onUpdateValues() {
    const { updateDate, productValues } = this.data;
    const app = getApp();
    
    // 验证日期格式
    if (!updateDate) {
      wx.showToast({
        title: '请选择更新日期',
        icon: 'none'
      });
      return;
    }
    
    // 验证日期格式是否正确 (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(updateDate)) {
      wx.showToast({
        title: '日期格式错误，请使用YYYY-MM-DD格式',
        icon: 'none'
      });
      return;
    }
    
    // 验证是否有有效的价值更新
    let hasValidUpdate = false;
    for (const productId in productValues) {
      const value = productValues[productId];
      if (value !== undefined && value > 0) {
        hasValidUpdate = true;
        break;
      }
    }
    
    if (!hasValidUpdate) {
      wx.showToast({
        title: '请输入至少一个有效的产品价值',
        icon: 'none'
      });
      return;
    }
    
    // 验证所有输入的价值是否为有效数字
    for (const productId in productValues) {
      const value = productValues[productId];
      if (value !== undefined) {
        if (typeof value !== 'number' || isNaN(value) || value <= 0) {
          wx.showToast({
            title: '产品价值必须为正数',
            icon: 'none'
          });
          return;
        }
      }
    }
    
    // 更新产品价值历史
    app.globalData.data.products.forEach(product => {
      const value = productValues[product.id];
      if (value !== undefined && value > 0) {
        if (!product.valueHistory) {
          product.valueHistory = [];
        }
        
        // 添加新的价值记录
        product.valueHistory.push({
          date: updateDate,
          value: value
        });
        
        // 按日期排序
        product.valueHistory.sort((a, b) => a.date.localeCompare(b.date));
      }
    });
    
    // 更新投资者的最新价值
    app.globalData.data.investors.forEach(investor => {
      investor.allocations.forEach(allocation => {
        const product = app.globalData.data.products.find(p => p.id === allocation.productId);
        if (product && product.valueHistory && product.valueHistory.length > 0) {
          const latestValue = product.valueHistory[product.valueHistory.length - 1].value;
          allocation.latestValue = latestValue;
        }
      });
    });
    
    // 更新快照日期
    app.globalData.data.snapshotDate = updateDate;
    
    app.saveData();
    this.loadData();
    
    wx.showToast({
      title: '价值更新成功',
      icon: 'success'
    });
  },
  onBack() {
    wx.navigateBack();
  }
});