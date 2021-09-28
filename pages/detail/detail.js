// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject: {}, // 问题数据
  },
  // 根据id获取详细信息
  async getSubjectDetail(id, sid, title) {
    let subject = await wx.$get('/Subject/GetSubject', {
      id: id,
      section_id: sid
    })
    subject.Title = title
    this.setData({
      subject
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options 保存的是页面传递的参数对象
    let {
      id,
      sid,
      title
    } = options

    this.getSubjectDetail(id, sid, title)

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