// 导入明月浩空播放器
var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("id", "myhk");
script.setAttribute("src", "https://myhkw.cn/api/player/163862811020");
script.setAttribute("key", "163862811020");
script.setAttribute("m", "1");
document.documentElement.appendChild(script);

// 禁用右键菜单
document.oncontextmenu = function (e) {
  return false;
};
