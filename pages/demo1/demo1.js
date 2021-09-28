// pages/demo1/demo1.js
// 导入工具方法
// import {
//   $confirm,
//   $key,
//   $msg
// } from "../../utils/util"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品列表
    goodList: [{
        id: '101',
        name: '苹果'
      },
      {
        id: '102',
        name: '华为'
      },
      {
        id: '103',
        name: '小米'
      },
      {
        id: '104',
        name: '三星'
      }
    ],
    // 是否显示
    isShow: false,
    isHidden: true
  },
  async delGood(e) {
    /*
    // 删除确认提示模态框
    wx.showModal({
      title: "提示",
      content: "确认删除吗？",
      success: ({
        confirm
      }) => {
        console.log(confirm);
        // 点击了确定按钮
        if (confirm) {
          // 事件对象event中的target.dataset中存放自定义属性
          // console.log(e.target.dataset);
          let index = e.target.dataset.index;
          console.log(index);
          // 根据索引删除数组元素
          this.data.goodList.splice(index, 1)
          // console.log(this.data.goodList);
          // setData()用于重新渲染页面中的数据
          this.setData({
            // 让页面渲染最新的数组信息
            goodList: this.data.goodList
          })
          // 显示消息提示框
          wx.showToast({
            title: '删除成功',
            icon: "success",
            mask: "true", // 显示透明蒙版，防止点击穿透
            duration: 1000
          })
        }
      }
    })
    */
    // 重写删除方法1
    /*
    $confirm("确定删除吗?").then(() => {
      let index = e.target.dataset.index;
      // 根据索引删除数组元素
      this.data.goodList.splice(index, 1)
      // setData()用于重新渲染页面中的数据
      this.setData({
        // 让页面渲染最新的数组信息
        goodList: this.data.goodList
      })
      // 显示消息提示框
      wx.showToast({
        title: '删除成功',
        icon: "success",
        mask: "true", // 显示透明蒙版，防止点击穿透
        duration: 1000
      })
    })
    */
    // 重写2  报错：ReferenceError: regeneratorRuntime is not defined 即默认不支持async await高级语法，在详情->本地设置->勾上增强编译，高版本可能不会报错，能编译高级语法
    await wx.$confirm("确认删除吗？")
    // 获取自定义属性值
    let {
      index
    } = wx.$key(e)
    // 根据索引删除数组元素
    this.data.goodList.splice(index, 1)
    // setData()用于重新渲染页面中的数据
    this.setData({
      // 让页面渲染最新的数组信息
      goodList: this.data.goodList
    })
    // 显示消息提示框
    wx.$msg("删除成功")
  },

  // 切换显示隐藏
  showToogle() {
    this.setData({
      // 将isShow的值取反并更新到界面
      isShow: !this.data.isShow,
      isHidden: !this.data.isHidden
    })
  }
})

