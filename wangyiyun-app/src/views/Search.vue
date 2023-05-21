<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="查理普斯" v-model="keyWord" @keydown.enter="keyenter">
  </div>
  <div class="searchHistory">
    <div class="left">
        <span class="keyHistory">历史</span>
        <span v-for="item in keyWordList" :key="item" class="spankey" @click="searchHistory(item)">{{item}}</span>
    </div>
    <div class="right">
         <svg class="icon" aria-hidden="true" @click="delHistory">
            <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
  </div>
      <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">{{ item1.name }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mvid!=0'>
            <use xlink:href="#icon-video"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </div>
      </div>
    </div>
</template>

<script>
import {getSearchMusic} from '@/request/api/home'
    export default {
        data(){
            return {
                keyWordList:[],
                keyWord:'',
                searchList:[]
            }
        },
        methods:{
            keyenter: async function(){
                this.keyWordList.push(this.keyWord)
                /**
                 * !去重   ES6
                 */
                this.keyWordList= [...new Set(this.keyWordList)]
                // 固定长度
                if(this.keyWordList.length>4){
                    this.keyWordList.splice(0,1)
                }
                localStorage.setItem('keyWordList',JSON.stringify(this.keyWordList))
                let res = await getSearchMusic(this.keyWord)
                console.log(res);
                this.searchList = res.data.result.songs
                this.keyWord=''
            },
            delHistory(){
                localStorage.removeItem('keyWordList');
                this.keyWordList=[]
                    },
            /**
             * !注意这里传参  不传item会出错
             */
            searchHistory:async function(item){
                let res = await getSearchMusic(item.keyWord)
                console.log(res);
                this.searchList = res.data.result.songs
            },
            updateIndex:function(item){
                item.al = item.album
                item.al.picUrl = item.album.artist.img1vUrl
                this.$store.commit('pushPlayList',item)
                 this.$store.commit('updatePlayListIndex',this.$store.state.playList.length-1)
            }
        },
         mounted(){
            this.keyWordList = JSON.parse(localStorage.getItem('keyWordList'))?JSON.parse(localStorage.getItem('keyWordList')):[]
        },
    }
</script>

<style lang="less" scoped>
.searchTop {
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    input{
        width: 90%;
        padding: 0.1rem;
        margin-left: .2rem;
        border:none;
        border-bottom: 1px solid #999;
    }
}
.searchHistory {
    width: 100%;
    padding: .2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        .keyHistory{
            font-weight: 700;
            font-size: 18px;
            margin-right: 10px;
        }
    .spankey{
            display: inline-block;
            padding: .1rem .2rem;
            margin: 10px;
            background-color: rgba(185,169,169);
            border-radius: 20px;
        }
    }
    .right {
        margin-top: 5px;
    }
}
  .itemList {
    width: 100%;
    padding: .1rem;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
.itemRight{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    .icon{
        fill: #999;
        }
    .bofang{
        position: absolute;
        left: 0;
    }
    .liebiao{
        position: absolute;
        right: 0;
    }
    }
}
}
</style>