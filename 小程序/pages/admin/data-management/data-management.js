Page({
  data: {
    investorCount: 0,
    productCount: 0,
    dataVersion: 'v1.0'
  },
  onLoad() {
    this.loadDataStats();
  },
  loadDataStats() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    const data = app.globalData.data;
    
    this.setData({
      investorCount: data.investors.length,
      productCount: data.products.length
    });
  },
  onExportData() {
    const app = getApp();
    const data = app.globalData.data;
    
    const jsonStr = JSON.stringify(data, null, 2);
    const filename = `cj-capital-${new Date().toISOString().slice(0, 10)}.json`;
    
    // 使用剪贴板复制数据
    wx.setClipboardData({
      data: jsonStr,
      success: function() {
        wx.showModal({
          title: '导出成功',
          content: '数据已复制到剪贴板，请粘贴到文本文件中保存为JSON格式',
          showCancel: false,
          confirmText: '确定'
        });
      },
      fail: function() {
        wx.showToast({
          title: '导出失败',
          icon: 'none'
        });
      }
    });
  },
  onImportData() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      extension: ['.json'],
      success: (res) => {
        const tempFilePaths = res.tempFiles;
        if (tempFilePaths.length > 0) {
          const filePath = tempFilePaths[0].path;
          this.readJsonFile(filePath);
        }
      }
    });
  },
  readJsonFile(filePath) {
    const app = getApp();
    
    wx.readFile({
      filePath: filePath,
      encoding: 'utf8',
      success: (res) => {
        try {
          const importedData = JSON.parse(res.data);
          
          // 验证数据结构
          if (!this.validateDataStructure(importedData)) {
            wx.showToast({
              title: '数据结构错误',
              icon: 'none'
            });
            return;
          }
          
          app.globalData.data = importedData;
          app.saveData();
          this.loadDataStats();
          wx.showToast({
            title: '导入成功',
            icon: 'success'
          });
        } catch (e) {
          wx.showToast({
            title: 'JSON格式错误',
            icon: 'none'
          });
        }
      },
      fail: (res) => {
        wx.showToast({
          title: '读取文件失败',
          icon: 'none'
        });
      }
    });
  },
  validateDataStructure(data) {
    // 验证必要的字段
    if (!data.platformName || !data.snapshotDate) {
      return false;
    }
    
    // 验证数组字段
    if (!Array.isArray(data.investors) || !Array.isArray(data.products)) {
      return false;
    }
    
    // 验证投资者数据结构
    for (const investor of data.investors) {
      if (!investor.id || !investor.name) {
        return false;
      }
    }
    
    // 验证产品数据结构
    for (const product of data.products) {
      if (!product.id || !product.name || !product.code) {
        return false;
      }
    }
    
    return true;
  },
  onResetData() {
    const app = getApp();
    
    wx.showModal({
      title: '确认重置',
      content: '确定要重置所有数据吗？此操作不可撤销。',
      success: (res) => {
        if (res.confirm) {
          app.globalData.data = {
            platformName: "恺皓资本资产平台",
            snapshotDate: new Date().toISOString().slice(0, 10),
            adminUsers: [],
            investors: [],
            products: []
          };
          app.saveData();
          this.loadDataStats();
          wx.showToast({
            title: '重置成功',
            icon: 'success'
          });
        }
      }
    });
  },
  onBack() {
    wx.navigateBack();
  }
});