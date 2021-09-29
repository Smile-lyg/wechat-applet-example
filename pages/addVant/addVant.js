// pages/addVant/addVant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '', // 标题
    section_id: 0, // 分类id
    section_name: '', // 分类标题
    answer: '', // 答案
    desc: '', // 解析
    textareaHeight: {
      maxHeight: '300rpx',
      minHeight: '100rpx'
    },
    loading: false, // 按钮是否显示loading状态
    show: false, // 控制弹出层是否显示
    sectionList: []
  },
  a() {
    console.log(123);
    this.setData({
      loading: true
    })
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 2000)
  },
  // 添加课程的方法
  async addSubject() {
    // 合法性检测
    if (this.data.title.trim().length === 0) {
      return wx.$msg('标题不能为空', 'none')
    }
    if (this.data.section_id === 0) {
      return wx.$msg('请选择分类', 'none')
    }
    if (this.data.answer.trim().length === 0) {
      return wx.$msg('答案不能为空', 'none')
    }
    // 按钮显示loading
    this.setData({
      loading: true
    })
    // 发起请求
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
    // 按钮去掉loading
    this.setData({
      loading: false
    })
  },
  // 清空视图数据
  clear() {
    this.setData({
      title: '',
      section_id: 0,
      section_name: '',
      answer: '',
      desc: ''
    })
  },
  // 显示弹出层
  showPopup() {
    this.setData({
      show: true
    })
  },
  // 关闭弹出层
  onPopupClose() {
    this.setData({
      show: false
    })
  },
  // 获取分类信息
  async getSection() {
    let data = await wx.$get('/Section/GetSections')
    this.setData({
      sectionList: data
    })
  },
  // 选择器确认
  onConfirm(event) {
    // 获取选择的分类id和name
    const {
      value: {
        Id,
        Name
      }
    } = event.detail;
    // console.log(Id,Name);
    // 更新数据
    this.setData({
      section_id: Id,
      section_name: Name
    })
    // 关闭弹出层
    this.onPopupClose()
  },
  // 选择器取消
  onCancel() {
    // 关闭弹出层
    this.onPopupClose()
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