<template>
    <div>
        <ItemMusicTop :playList="state.playList" />
        <!-- subscribedCount 收藏量 -->
        <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playList.subscribedCount"/>
    </div>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList,getItemList} from "@/request/api/item.js";
import ItemMusicTop from "@/components/Item/ItemMusicTop.vue";
import ItemMusicList from "@/components/Item/ItemMusicList.vue";
export default {
  setup() {
    console.log(useRoute());
    const state = reactive({
      playList: {}, //歌单的详情页的数据
      itemList: [], //歌单的歌曲
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      console.log(id);
      //   获取歌单详情页
      let res = await getMusicItemList(id);
      console.log('a',res);
      state.playList = res.data.playlist;
      console.log('222',state.playList);
    //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
    sessionStorage.setItem('itemDetail',JSON.stringify(state))
      //   获取歌单的歌曲
      let result = await getItemList({ id, limit: 10, offset: 0 });
      console.log('333',result);
      state.itemList = result.data.songs

        // 防止页面刷新，数据丢失，将数据保存到sessionStorage中
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>