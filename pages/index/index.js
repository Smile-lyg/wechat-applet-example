// index.js
// 获取应用实例
const app = getApp()

Page({
  // 页面数据定义在 data 中
  data: {
    name: '张三',
    age: 18,
    users: [{
        ids: '1',
        name: '周杰伦',
        cars: ['宝马', '保时捷', '奥迪']
      },
      {
        ids: '2',
        name: '林俊杰',
        cars: ['奔驰', '五菱宏光']
      }
    ]
  },
  goToDemo1(){
    // 普通页面的跳转
    wx.navigateTo({
      url: '../demo1/demo1',
    })
  },
  goToMenu(){
    // tabbar 页面的跳转
    wx.switchTab({
      url: '../menu/menu',
    })
  }
})