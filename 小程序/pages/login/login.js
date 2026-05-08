Page({
  data: {
    username: '',
    password: ''
  },
  onLoad() {
    // 页面加载时的初始化操作
  },
  onUsernameInput(e) {
    this.setData({ username: e.detail.value });
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },
  onLogin() {
    const { username, password } = this.data;
    const app = getApp();
    
    // 输入验证
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      });
      return;
    }
    
    // 演示账号登录
    if (username === '演示' && password === '123456') {
      app.login({
        id: 'admin-1',
        username: '演示',
        role: 'admin'
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/admin/menu/menu' });
      }, 1000);
      return;
    }
    
    // 检查投资者登录
    const investor = app.globalData.data.investors.find(inv => inv.name === username);
    if (investor && investor.password === password) {
      app.login({
        id: investor.id,
        username: investor.name,
        role: 'investor'
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/index/index' });
      }, 1000);
      return;
    }
    
    // 检查管理员登录
    const admin = app.globalData.data.adminUsers.find(adm => adm.username === username);
    if (admin && admin.password === password) {
      app.login({
        id: admin.id,
        username: admin.username,
        role: 'admin'
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/admin/menu/menu' });
      }, 1000);
      return;
    }
    
    // 登录失败
    wx.showToast({
      title: '用户名或密码错误',
      icon: 'none'
    });
  }
});