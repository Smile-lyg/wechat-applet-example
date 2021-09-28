// pages/sectionType/sectionType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sectionList: [],  // 分类数组
    section_name:'',
    section_id:1
  },
  async getSection() {
    let data = await wx.$get('/Section/GetSections')
    this.setData({
      sectionList: data
    })
  },
  sectionClick(e){
    let {id,name} = wx.$key(e)
    // console.log(id,name);
    // 获取当前页面栈，保存着打开的所有页面，数组中第一个元素为首页，最后一个元素为当前显示的页面
    let pages = getCurrentPages()
    // console.log(pages);
    // 获取当前页的前一页 pages[pages.length - 2]
    pages[pages.length - 2].setData({
      section_id: id,
      section_name: name
    })
    // 返回之前页
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSection()
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