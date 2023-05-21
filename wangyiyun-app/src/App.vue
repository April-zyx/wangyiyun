<template>
<!-- 利用路由显示页面 -->
  <router-view/>
  <Footer v-show="$store.state.isFooterMusic"/>
</template>

<script>
import Footer from '@/components/Item/Footer.vue'
  export default {
    components:{Footer}
  }
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: .5rem;
  height: .5rem;
}
a {
  color: #000;
  text-decoration: none;
}
li {
  list-style: none;
}
</style>
