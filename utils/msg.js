// 消息方法库

// 自定义模态框确认方法
export const $confirm = (content, title = "提示") => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title,
      content,
      success: ({
        confirm
      }) => {
        // 如果点击了确定按钮
        if (confirm) {
          resolve()
        }
      }
    })
  })
}

// 自定义消息提示框
export const $msg = (title,icon="success", mask="false",duration=1000) => {
  wx.showToast({
    title,
    icon,
    mask,
    duration
  })
}

wx.$confirm = $confirm
wx.$msg = $msg