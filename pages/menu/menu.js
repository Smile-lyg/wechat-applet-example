// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0, // 左侧导航高亮索引
    sectionList: [],  // 左侧分类数组
    subjectList:[],    // 课程数组
    sectionId: 1,   // 课程分类id
    pageSize: 10    // 数据条数

  },
  // 分类点击事件
  clickType(e){
    let {index, id} = wx.$key(e)
    this.setData({
      activeIndex: index,
      sectionId: id
    })
    // console.log(id);
    // 重新获取课程
    this.getSubject()
  },
  async getSection() {
    /*
     // 显示加载提示框
     wx.showLoading({
      title: '加载中',
    })
    // 发起请求获取分类信息
    wx.request({
      url: 'https://www.fastmock.site/mock/12a3b588e4cb21b5706eed87c8d3e181/api/Section/GetSections',
      method:'Get',
      success: ({data}) => {
        this.setData({
          sectionList: data
        })
      },
      complete: () => {
        // 隐藏加载提示框
        wx.hideLoading()
      }
    })
    */
   // 封装重写

   let data = await wx.$get('/Section/GetSections')
   this.setData({
     sectionList: data
   })
  },
  // 获取课程详细信息
  async getSubject(){
    let data = await wx.$get('/Subject/GetSubjects',{
      // 分类id
      section_id:this.data.sectionId,
      // 数据条数
      pageSize: this.data.pageSize
    })
   
    this.setData({
      subjectList: data
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取分类信息
    this.getSection()
    // 获取课程信息
    this.getSubject()
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