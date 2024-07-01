export function KeyboardMouse() {
  document.oncontextmenu = stop
  function stop() {
    return false
  }
  document.onselectstart = function () {
    return false
  } //取消字段选择功能
  document.oncopy = function () {
    return false
  }
  // document.onkeydown = function (event) {
  //   if (event.ctrlKey) {
  //     return false
  //   }
  //   if (event.altKey) {
  //     return false
  //   }
  //   if (event.shiftKey) {
  //     return false
  //   }
  // }
}
