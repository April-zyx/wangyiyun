import server from "..";
// 获取歌单详情页的数据
export function getMusicItemList(data){
    return server({
        method:"get",
        url:`/playlist/detail?id=${data}`
    })
}
// 获取歌单歌曲
export function getItemList(data){
    return server({
        method:"get",
        url:`/playlist/track/all?id=${data.id}&limit=20&offset=0`
    })
}
// 获取歌单的歌词
export function getMusicLyric(data){
    return server({
        method:"get",
        url:`/lyric?id=${data}`
    })
}