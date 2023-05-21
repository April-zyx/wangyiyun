<template>
  <div class="topNav">
    <div class="topLeft">
        <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-dingbuliebiaotubiao-H5"></use>
        </svg>
    </div>
    <ul class="topContent">
        <li @click="$router.push('/userInfo')">我的</li>
        <li style="fontWeight:700">发现</li>
        <li>云村</li>
        <li>视频</li>
    </ul>
    <div class="topRight">
        <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>
.topNav {
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    .topContent {
        width: 60%;
        display: flex;
        justify-content: space-around;
        li {
            display: inline-block;
            font-size: .36rem;
            text-align: center;
        }
    }
}
</style>>
