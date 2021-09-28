// 请求方法
// 导入接口路径前缀
import {BASE_URL} from '../config/const'

export const $request = function (method, url, data={}) {
  return new Promise( (resolve, reject) => {
     // 显示加载提示框
     wx.showLoading({
      title: '加载中',
    })
    // 发起请求获取分类信息
    wx.request({
      // 判断地址是否 / 开头，来确定是否拼接前缀根地址
      url: url.startsWith('/') ? BASE_URL + url : url,
      method,
      data,
      // 请求成功回调
      success: ({data}) => {
        // 返回成功的结果
        resolve(data)
      },
      // 请求失败回调
      fail: err => {
        reject(err)
      },
      // 请求完成回调
      complete: () => {
        // 隐藏加载提示框
        wx.hideLoading()
      }
    })
  })
}

// GET方法
export const $get = function(url, data={}){
  return $request('GET', url, data)
}
// POST方法
export const $post = function(url, data={}){
  return $request('POST', url, data)
}
wx.$request = $request
wx.$get = $get
wx.$post = $post