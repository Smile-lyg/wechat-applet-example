// 工具方法库

// 返回完整日期，年月日时分秒
const $formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map($formatNumber).join('/')} ${[hour, minute, second].map($formatNumber).join(':')}`
}
// 返回年月日
const $formatTimeMini = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[year, month, day].map($formatNumber).join('-')}`
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
  $formatTimeMini,
  $formatNumber,
  $key
}
