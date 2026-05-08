Page({
  data: {
    products: [],
    showForm: false,
    isEditing: false,
    formData: {
      id: '',
      name: '',
      code: '',
      platform: '',
      createdAt: '',
      notes: ''
    }
  },
  onLoad() {
    this.loadProducts();
  },
  loadProducts() {
    const app = getApp();
    const session = app.globalData.session;
    
    if (!session) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    
    // 为每个产品预计算最新价值
    const products = app.globalData.data.products.map(product => {
      const latestValue = product.valueHistory && product.valueHistory.length > 0 
        ? product.valueHistory[product.valueHistory.length - 1].value.toLocaleString() 
        : '0';
      return {
        ...product,
        latestValue: latestValue
      };
    });
    
    this.setData({
      products: products
    });
  },

  onAddProduct() {
    const today = new Date().toISOString().slice(0, 10);
    this.setData({
      showForm: true,
      isEditing: false,
      formData: {
        id: '',
        name: '',
        code: '',
        platform: '',
        createdAt: today,
        notes: ''
      }
    });
  },
  onEditProduct(e) {
    const id = e.currentTarget.dataset.id;
    const product = this.data.products.find(prod => prod.id === id);
    
    this.setData({
      showForm: true,
      isEditing: true,
      formData: {
        id: product.id,
        name: product.name,
        code: product.code,
        platform: product.platform,
        createdAt: product.createdAt,
        notes: product.notes
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
  onCodeInput(e) {
    this.setData({
      'formData.code': e.detail.value
    });
  },
  onPlatformInput(e) {
    this.setData({
      'formData.platform': e.detail.value
    });
  },
  onCreatedAtInput(e) {
    this.setData({
      'formData.createdAt': e.detail.value
    });
  },
  onNotesInput(e) {
    this.setData({
      'formData.notes': e.detail.value
    });
  },
  onSaveProduct() {
    const { formData, isEditing } = this.data;
    const app = getApp();
    
    // 输入验证
    if (!formData.name) {
      wx.showToast({
        title: '请输入产品名称',
        icon: 'none'
      });
      return;
    }
    
    if (!formData.code) {
      wx.showToast({
        title: '请输入产品代码',
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
    
    if (!formData.createdAt) {
      wx.showToast({
        title: '请选择创建日期',
        icon: 'none'
      });
      return;
    }
    
    // 检查产品代码是否重复
    const existingProduct = app.globalData.data.products.find(prod => prod.code === formData.code && prod.id !== formData.id);
    if (existingProduct) {
      wx.showToast({
        title: '产品代码已存在',
        icon: 'none'
      });
      return;
    }
    
    if (isEditing) {
      // 编辑现有产品
      const index = app.globalData.data.products.findIndex(prod => prod.id === formData.id);
      if (index !== -1) {
        app.globalData.data.products[index] = {
          ...app.globalData.data.products[index],
          name: formData.name,
          code: formData.code,
          platform: formData.platform,
          createdAt: formData.createdAt,
          notes: formData.notes
        };
        app.saveData();
        this.loadProducts();
        this.setData({ showForm: false });
        wx.showToast({
          title: '修改成功',
          icon: 'success'
        });
      } else {
        wx.showToast({
          title: '产品不存在',
          icon: 'none'
        });
      }
    } else {
      // 添加新产品
      const newProduct = {
        id: 'PROD-' + Date.now(),
        name: formData.name,
        code: formData.code,
        platform: formData.platform,
        createdAt: formData.createdAt,
        notes: formData.notes,
        transactions: [],
        valueHistory: []
      };
      
      app.globalData.data.products.push(newProduct);
      app.saveData();
      this.loadProducts();
      this.setData({ showForm: false });
      wx.showToast({
        title: '添加成功',
        icon: 'success'
      });
    }
  },
  onDeleteProduct(e) {
    const id = e.currentTarget.dataset.id;
    const app = getApp();
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该产品吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.data.products = app.globalData.data.products.filter(prod => prod.id !== id);
          app.saveData();
          this.loadProducts();
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