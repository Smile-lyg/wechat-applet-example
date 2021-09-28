// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '', // 标题
    section_id: '', // 分类id
    section_name:'', // 分类标题
    answer: '', // 答案
    desc: '' // 解析

  },
  // 添加课程的方法
  async addSubject() {
    if (this.data.title.trim().length === 0) {
      return wx.$msg('标题不能为空', 'none')
    }
    if (this.data.section_id === 0) {
      return wx.$msg('请选择分类', 'none')
    }
    if (this.data.answer.trim().length === 0) {
      return wx.$msg('答案不能为空', 'none')
    }

    let res = await wx.$post('/Add/Subject', {
      title: this.data.title,
      section_id: this.data.section_id,
      answer: this.data.answer,
      desc: this.data.desc
    })
    console.log(res);
    if (res.code === 200) {
      wx.$msg('添加成功')
      // 清空视图
      this.clear()
    } else {
      wx.$msg('添加失败', 'error')
    }
  },
  // 清空视图数据
  clear(){
    this.setData({
      title: '',
      section_id: '',
      section_name:'',
      answer: '',
      desc: ''
    })
  },
  // 打开选择分类页面
  openType(){
    wx.navigateTo({
      url: '../sectionType/sectionType',
    })
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
    (new Date().getTime()) -  Math.ceil(Math.random() * (30 * 24 * 60 * 60 * 1000))
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