function remSize(){
    // 获取设备的宽度 
    // document.documentElement ===> html
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth>=750){
        deviceWidth=750
    }
    if(deviceWidth<=320){
        deviceWidth=320
    }
    // rem是基于html的
    // 750px ---> 1rem=100px , 375px ---> 1rem=50px
    document.documentElement.style.fontSize = (deviceWidth/7.5)+'px'
    // 设置body里面字体大小   15px
    document.body.style.fontSize=0.3+"rem"
}
remSize()
// 窗口发生变化时，会调用这个事件
window.onresize = function(){
    // 当前窗口变化就调用
    remSize()
}