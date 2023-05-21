<template>
<div id="SwiperTop">
     <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in states.images" :key="image">
            <img :src="image.pic" />
        </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
// import axios from 'axios'
import {getBanner} from '@/request/api/home.js'
import {reactive,onMounted} from 'vue'
    export default {
        name:'SwiperTop',
        setup() {
            const states = reactive({
                images:[
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
            });
            /**
             * !见笔记
            */
        //    异步请求
            onMounted(async()=>{
               /*  axios.get('http://localhost:3000/banner?type=2')
                    .then(function (response) {
                        // 处理成功情况
                        states.images = response.data.banners
                    })
                    .catch(function (error) {
                        // 处理错误情况
                        console.log(error);
                    })
                    .then(function () {
                        // 总是会执行
                }); */
                let response = await getBanner()
                states.images = response.data.banners
            })
        return { states };
    },
    }
</script>

<style lang="less">
#SwiperTop {
    margin-left: .3rem;
    .van-swipe {
        width: 100%;       
        .van-swipe__track {
            .van-swipe-item {
                width: 100%;
                display: inline-block;
                img {
                    width: 95%;
                    height: 3rem;
                    border-radius: 0.2rem;
                }
            }  
        }
        .van-swipe__indicator--active {
            background-color: pink;
        }  
    }
}

</style>