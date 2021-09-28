// app.js
// 引入工具库
import './utils/index'

App({
  // 小程序初始化加载
  onLaunch (options) {
    // Do something initial when launch.
    // 比如发送请求，获取一些全局的配置
    console.log('小程序加载中');
  },
  // 小程序显示
  onShow (options) {
    // Do something when show.
    // 比如说获取一些最新的后台信息
    console.log('小程序显示');
  },
  // 小程序隐藏(被关闭)
  onHide () {
    // Do something when hide.
    // 比如清除小程序的缓存数据
    console.log('小程序隐藏');
  },
  // 小程序发生错误
  onError (msg) {
    // 比如当小程序页面发生错误时，跳转到一个友好的页面
    console.log(msg)
  },
  globalData: {
    userInfo: null
  }
})
