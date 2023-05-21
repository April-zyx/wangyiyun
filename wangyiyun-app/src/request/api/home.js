import server from "..";
// 获取轮播图的数据
export function getBanner(){
    return server({
        method:"get",
        url:"/banner?type=2"
    })
}
// 获取发现好歌单
export function getMusicList(){
    return server({
        method:"get",
        url:"/personalized?limit=15"
    })
}
// 搜索
export function getSearchMusic(data){
    return server({
        method:"get",
        url:`/search?keywords=${data}`
    })
}
// 登录  
/* export function reachLogin(data){
    return server({
        method:"get",
        url:`/login/qr/create?key=${data}`
    })
} */