// pages/vantPage/vantPage.js
import {$formatTimeMini} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bornDate:'',   // 日期
    showCalendar: false ,    // 是否显示日历组件
    minDate:new Date('2021-9-1').getTime(),    // 最小日期范围
    // maxDate:new Date().getTime()    // 最大日期
  },
  // 显示日历控件
  onShowCalendar(){
    this.setData({
      showCalendar:true
    })
  },
  // 隐藏日历组件
  onCloseCalendar(){
    this.setData({
      showCalendar:false
    })
  },
  // 确定选择日期
  onCalendarConfirm({detail}){
    let date = new Date(detail)
    this.setData({
      bornDate: $formatTimeMini(date)
    })
    this.onCloseCalendar()
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})