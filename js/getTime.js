
window.onload = function () {
    //每1秒刷新时间
    setInterval("NowTime()", 1000);
}

function NowTime() {
    var myDate = new Date();
    var y = myDate.getFullYear();
    var M = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var d = myDate.getDate(); //获取当前日(1-31)
    var w = myDate.getDay(); //获取周天至周六（0-6）
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds(); //获取当前秒数(0-59)

    //检查是否小于10
    M = check(M);
    d = check(d);
    h = check(h);
    m = check(m);
    s = check(s);
    switch (w) {
        case (0):
            w = '日';
            break;
        case (1):
            w = '一';
            break;
        case (2):
            w = '二';
            break;
        case (3):
            w = '三';
            break;
        case (4):
            w = '四';
            break;
        case (5):
            w = '五';
            break;
        case (6):
            w = '六';
            break;
    }

    var week = w;
    var timestr = y + "年" + M + "月" + d + "日 " + "星期" + week + " " + h + ":" + m + ":" + s;
    document.getElementById("nowtime").innerHTML = "当前时间：" + timestr;
}
//时间数字小于10，则在之前加个“0”补位。
function check(i) {
    var num = (i < 10) ? ("0" + i) : i;
    return num;
}
//倒计时
function countDown(time) {
    var nowTime = +new Date(); //返回的是总毫秒数
    var inputTime = +new Date(time); //返回用户输入的总毫秒数
    var times = (inputTime - nowTime) / 1000; //time 是剩余时间的总毫秒数转换成秒数
    var d = parseInt(times / 60 / 60 / 24); //剩余时间转换为 天数
    var h = parseInt(times / 60 / 60 % 24); //剩余时间转换为 小时
    var m = parseInt(times / 60 % 60); //剩余时间转换为 分
    var s = parseInt(times % 60); //剩余时间转换为 秒
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
console.log(countDown('2021-12-14 18:00:00'));

function checkTime(j) {
    j = j < 10 ? ('0' + j) : j;
    return j;
}