<template>
  <div>
      <TopNavVue/>
      <SwiperTop/>
      <IconList/>
      <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNavVue from '../components/Home/TopNav.vue'
import SwiperTop from '../components/Home/SwiperTop.vue'
import IconList from '../components/Home/IconList.vue'
import MusicList from '../components/Home/MusicList.vue'
export default {
  name: 'HomeView',
  components: {TopNavVue,SwiperTop,IconList,MusicList}
}
</script>
