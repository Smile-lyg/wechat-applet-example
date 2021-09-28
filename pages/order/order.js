// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectList:[],  // 课程数组
    sectionId: 1,   // 课程分类id
    pageIndex: 1,   // 页码
    pageSize: 10    // 数据条数
  },
  // 获取课程详细信息
  async getSubject(){
    // 判断当前页是否是第一页
    if(this.data.pageIndex === 1){
      // 清空课程数组
      this.data.subjectList = []
    }
    let data = await wx.$get('/Subject/GetSubjects',{
      // 随机分类
      type:'all',
      // 分类id
      // section_id:this.data.sectionId,
      // 页码
      pageIndex: this.data.pageIndex,
      // 数据条数
      pageSize: this.data.pageSize
    })
   // 判断是否有数据
   if(data && data.length > 0){
     this.setData({
      // 将获取的新数据和原数据合并
      subjectList: this.data.subjectList.concat(data)
    })
   }else {
     wx.$msg('没有更多了', 'none')
   }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载中');
    this.getSubject()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 只在页面第一次加载时 调用一次
    // 一般用来获取一些不需要每次显示页面都要刷新的数据
    console.log('页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 每次页面显示调用
    console.log('页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面卸载');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户下拉');
    // 下拉刷新数据
    // 页码重置
    this.data.pageIndex = 1
    // 重新获取
    this.getSubject()
    // 关闭下拉动画
    setTimeout(() => {
      wx.stopPullDownRefresh({
        success: (res) => {},
      })
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底');
    // 上拉获取更多
    // 页码加一
    this.data.pageIndex ++
    // 重新获取信息
    this.getSubject()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户点击右上角分享');
  }
})