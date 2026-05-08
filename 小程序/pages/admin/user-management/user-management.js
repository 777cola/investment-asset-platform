Page({
  data: {
    investors: [],
    showForm: false,
    isEditing: false,
    formData: {
      id: '',
      name: '',
      password: '',
      joinedAt: ''
    }
  },
  onLoad() {
    this.loadInvestors();
  },
  loadInvestors() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    // 为每个投资者预计算总投资金额和最新价值
    const investors = app.globalData.data.investors.map(investor => {
      const totalInvested = investor.allocations ? investor.allocations.reduce((sum, alloc) => sum + (alloc.amountInvested || 0), 0) : 0;
      const totalValue = investor.allocations ? investor.allocations.reduce((sum, alloc) => sum + (alloc.latestValue || 0), 0) : 0;
      return {
        ...investor,
        totalInvested: totalInvested.toLocaleString(),
        totalValue: totalValue.toLocaleString()
      };
    });
    
    this.setData({
      investors: investors
    });
  },

  onAddInvestor() {
    const today = new Date().toISOString().slice(0, 10);
    this.setData({
      showForm: true,
      isEditing: false,
      formData: {
        id: '',
        name: '',
        password: '123456',
        joinedAt: today
      }
    });
  },
  onEditInvestor(e) {
    const id = e.currentTarget.dataset.id;
    const investor = this.data.investors.find(inv => inv.id === id);
    
    this.setData({
      showForm: true,
      isEditing: true,
      formData: {
        id: investor.id,
        name: investor.name,
        password: investor.password,
        joinedAt: investor.joinedAt
      }
    });
  },
  onCancelForm() {
    this.setData({
      showForm: false
    });
  },
  onNameInput(e) {
    this.setData({
      'formData.name': e.detail.value
    });
  },
  onPasswordInput(e) {
    this.setData({
      'formData.password': e.detail.value
    });
  },
  onJoinedAtInput(e) {
    this.setData({
      'formData.joinedAt': e.detail.value
    });
  },
  onSaveInvestor() {
    const { formData, isEditing } = this.data;
    const app = getApp();
    
    // 输入验证
    if (!formData.name || !formData.password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }
    
    if (!formData.joinedAt) {
      wx.showToast({
        title: '请选择加入日期',
        icon: 'none'
      });
      return;
    }
    
    // 检查投资者名称是否重复
    const existingInvestor = app.globalData.data.investors.find(inv => inv.name === formData.name && inv.id !== formData.id);
    if (existingInvestor) {
      wx.showToast({
        title: '投资者名称已存在',
        icon: 'none'
      });
      return;
    }
    
    if (isEditing) {
      // 编辑现有投资者
      const index = app.globalData.data.investors.findIndex(inv => inv.id === formData.id);
      if (index !== -1) {
        app.globalData.data.investors[index] = {
          ...app.globalData.data.investors[index],
          name: formData.name,
          password: formData.password,
          joinedAt: formData.joinedAt
        };
        app.saveData();
        this.loadInvestors();
        this.setData({ showForm: false });
        wx.showToast({
          title: '修改成功',
          icon: 'success'
        });
      } else {
        wx.showToast({
          title: '投资者不存在',
          icon: 'none'
        });
      }
    } else {
      // 添加新投资者
      const newInvestor = {
        id: 'INV-' + Date.now(),
        name: formData.name,
        password: formData.password,
        usernames: [],
        joinedAt: formData.joinedAt,
        lastReview: formData.joinedAt,
        allocations: [],
        fundFlow: [],
        notices: []
      };
      
      app.globalData.data.investors.push(newInvestor);
      app.saveData();
      this.loadInvestors();
      this.setData({ showForm: false });
      wx.showToast({
        title: '添加成功',
        icon: 'success'
      });
    }
  },
  onDeleteInvestor(e) {
    const id = e.currentTarget.dataset.id;
    const app = getApp();
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该投资者吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.data.investors = app.globalData.data.investors.filter(inv => inv.id !== id);
          app.saveData();
          this.loadInvestors();
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