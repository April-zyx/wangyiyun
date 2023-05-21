<template>
  <div class="IconList">
    <ul class="IconItem">
        <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuijian"></use>
            </svg>
            <span>每日推荐</span>
        </li>
        <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinlechangpian"></use>
            </svg>
            <span>私人FM</span>
        </li>
        <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </li>
        <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang1"></use>
            </svg>
            <span>排行榜</span>
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name:'IconList'
    }
</script>

<style lang="less">
.IconList{
    margin-top: .2rem;
    width: 100%;
    height: 2rem;
    .IconItem{
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon {
                width: 1rem;
                height: 1rem;
            }
        }
    }

}
</style>