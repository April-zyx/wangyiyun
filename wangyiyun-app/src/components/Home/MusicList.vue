<template>
  <div class="music">
    <div class="musicTop">
        <span class="title">发现好歌单</span>
        <a href="javascript:;" class="more">查看更多</a>
    </div>
    <div class="musicSwiper">
<!--         <van-swipe :loop="false" :width="150" class="musicSwipe" :show-indicators="false">
            <van-swipe-item v-for="item in state.MusicList" :key="item" class="Swiper">
                <img :src="item.picUrl" alt="">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-24gl-playCircle"></use>
                    </svg>
                    {{changeCount(item.playCount)}}
                </span>
                <p>{{item.name}}</p>
            </van-swipe-item>
        </van-swipe> -->
        <van-swipe :loop="false" :width="150" class="musicSwipe" :show-indicators="false">
                    <van-swipe-item v-for="item in musicList" :key="item" class="Swiper">
                        <!-- 路由传参 -->
                        <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                        <img :src="item.picUrl" alt="">
                        <span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-24gl-playCircle"></use>
                            </svg>
                            {{changeCount(item.playCount)}}
                        </span>
                        <p>{{item.name}}</p>
                        </router-link>
                    </van-swipe-item>
                </van-swipe>
    </div>
  </div>
</template>

<script>
import {getMusicList} from '@/request/api/home.js'
import {reactive,onMounted} from 'vue'
    export default {
        name:'MusicList',
        /**
         * ? vue3写的
         */
/*         setup() {
             const state = reactive({ MusicList:[]});
             function changeCount(num){
                if(num>100000000){
                    return (num/100000000).toFixed(1)+"亿"
                }else if(num>=10000){
                    return (num/10000).toFixed(1)+"万"
                }
            }
             onMounted(async()=>{
                let response = await getMusicList()
                console.log("222",response);
                state.MusicList = response.data.result
            });
        return { state,changeCount };
        } */
        /**
         * ? vue2写的
         */
      data(){
            return {
                musicList:[],
            }
        },
        methods: {
            async getGedan(){
                let res = await getMusicList();
                console.log(res);
                this.musicList = res.data.result
            },
            changeCount:function(num){
                if(num>100000000){
                    return (num/100000000).toFixed(1)+"亿"
                }else if(num>=10000){
                    return (num/10000).toFixed(1)+"万"
                }
            }
        },
        mounted() {
            this.getGedan()
        },  
    } 
</script>

<style lang="less">
.music {
    padding: .3rem;
    .musicTop {
        display: flex;
        justify-content: space-between;
        .title{
            font-size: .4rem;
            font-weight: 700;
        }
        .more {
            display: inline-block;
            text-align: center;
            padding-top: 2px;
            width: 20%;
            border: 1px solid #ccc;
            border-radius: 10px ;
            color: #000;
        }
    }
    .musicSwiper {
        width: 100%;
        height: 4rem;
        .musicSwipe {
            height: 100%;
            .Swiper{
                position: relative;
                display: flex;
                justify-content: space-between;
                width: 30%;
                height: 100%;
                padding: .2rem;
                img {
                    height: 80%;
                    border-radius: 10px;
                }
                span {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        top: 12px;
                        right: 15px;
                        font-size: 3px;
                        color: rgba(92, 92, 102);
                    }
                p {
                    position: absolute;
                    top: 158px;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>