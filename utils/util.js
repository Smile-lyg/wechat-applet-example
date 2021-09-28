// 工具方法库

const $formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}
// 补0
const $formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 自定义获取标签上用户自定义属性方法
const $key = (e) => {
  if(e){
    return e.currentTarget.dataset
  }     
}

// 给 wx 这个全局对象添加成员
wx.$key = $key

module.exports = {
  $formatTime,
  $formatNumber,
  $key
}
