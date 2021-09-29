// pages/vantPage/vantPage.js
import {
  $formatTimeMini
} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bornDate: '', // 日期
    inDate: '',
    showCalendar: false, // 是否显示日历组件
    minDate: new Date('2020-9-1').getTime(), // 最小日期范围
    maxDate: new Date('2022-9-1').getTime(), // 最大日期
    showPopup: false, // 是否显示弹出层
    currentDate: new Date().getTime(), // 当前时间
    active: 0  // tab选项卡的选中索引
  },
  // 显示日历控件
  onShowCalendar() {
    this.setData({
      showCalendar: true
    })
  },
  // 隐藏日历组件
  onCloseCalendar() {
    this.setData({
      showCalendar: false
    })
  },
  // 确定选择日期
  onCalendarConfirm({
    detail
  }) {
    let date = new Date(detail)
    this.setData({
      bornDate: $formatTimeMini(date)
    })
    this.onCloseCalendar()
  },
  // 显示弹出层
  onShowPopup() {
    this.setData({
      showPopup: true
    })
  },
  // 隐藏弹出层
  onClosePopup() {
    this.setData({
      showPopup: false
    })
  },
  // 时间选择器确认
  onDateConfirm({
    detail
  }) {
    this.setData({
      inDate: $formatTimeMini(new Date(detail)),
      showPopup: false
    })
  },
  // 时间选择器取消
  onDateCancel() {
    this.onClosePopup()
  },
  // 当前激活的标签改变时触发
  onTabChange({detail:{index,title}}){
    this.setData({
      active: index
    })
    console.log(this.data.active, title);
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