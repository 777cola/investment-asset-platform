Page({
  data: {
    interestRecords: [],
    investors: [],
    showForm: false,
    formData: {
      investorId: '',
      date: '',
      platform: '',
      amount: ''
    },
    totalRecords: 0,
    totalAmount: 0,
    averageAmount: 0
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
    
    const data = app.globalData.data;
    
    // 确保利息记录数组存在
    if (!data.interestRecords) {
      data.interestRecords = [];
    }
    
    // 构建利息记录，包含投资者名称
    const interestRecords = data.interestRecords.map(record => {
      const investor = data.investors.find(inv => inv.id === record.investorId);
      return {
        ...record,
        investorName: investor ? investor.name : '未知投资者'
      };
    });
    
    // 计算统计信息
    const totalRecords = interestRecords.length;
    const totalAmount = interestRecords.reduce((sum, record) => sum + record.amount, 0);
    const averageAmount = totalRecords > 0 ? totalAmount / totalRecords : 0;
    
    // 格式化数值
    const formattedTotalAmount = totalAmount.toLocaleString();
    const formattedAverageAmount = averageAmount.toLocaleString();
    
    this.setData({
      interestRecords: interestRecords,
      investors: data.investors,
      totalRecords: totalRecords,
      totalAmount: formattedTotalAmount,
      averageAmount: formattedAverageAmount
    });
  },
  onAddInterestRecord() {
    const today = new Date().toISOString().slice(0, 10);
    this.setData({
      showForm: true,
      formData: {
        investorId: '',
        date: today,
        platform: '',
        amount: ''
      }
    });
  },
  onCancelForm() {
    this.setData({
      showForm: false
    });
  },
  onInvestorChange(e) {
    const index = e.detail.value;
    if (this.data.investors[index]) {
      this.setData({
        'formData.investorId': this.data.investors[index].id
      });
    }
  },
  onDateInput(e) {
    this.setData({
      'formData.date': e.detail.value
    });
  },
  onPlatformInput(e) {
    this.setData({
      'formData.platform': e.detail.value
    });
  },
  onAmountInput(e) {
    this.setData({
      'formData.amount': parseFloat(e.detail.value) || 0
    });
  },
  getInvestorName(investorId) {
    if (!investorId) return '请选择投资者';
    const investor = this.data.investors.find(inv => inv.id === investorId);
    return investor ? investor.name : '未知投资者';
  },
  onSaveInterestRecord() {
    const { formData } = this.data;
    const app = getApp();
    
    // 输入验证
    if (!formData.investorId) {
      wx.showToast({
        title: '请选择投资者',
        icon: 'none'
      });
      return;
    }
    
    if (!formData.date) {
      wx.showToast({
        title: '请选择日期',
        icon: 'none'
      });
      return;
    }
    
    if (!formData.platform) {
      wx.showToast({
        title: '请输入平台名称',
        icon: 'none'
      });
      return;
    }
    
    if (!formData.amount || formData.amount <= 0) {
      wx.showToast({
        title: '请输入有效的金额',
        icon: 'none'
      });
      return;
    }
    
    // 添加新的利息发放记录
    const newRecord = {
      id: 'INT-' + Date.now(),
      investorId: formData.investorId,
      date: formData.date,
      platform: formData.platform,
      amount: formData.amount
    };
    
    if (!app.globalData.data.interestRecords) {
      app.globalData.data.interestRecords = [];
    }
    
    app.globalData.data.interestRecords.push(newRecord);
    app.saveData();
    this.loadData();
    this.setData({ showForm: false });
    
    wx.showToast({
      title: '添加成功',
      icon: 'success'
    });
  },
  onDeleteRecord(e) {
    const id = e.currentTarget.dataset.id;
    const app = getApp();
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该利息发放记录吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.data.interestRecords = app.globalData.data.interestRecords.filter(record => record.id !== id);
          app.saveData();
          this.loadData();
          wx.showToast({
            title: '删除成功',
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