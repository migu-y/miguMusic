<template>
<div>
  <van-swipe class="my-swipe" 
    :autoplay="3000" 
    >
    <van-swipe-item v-for="i in bannerVos" :key='i.id'>
      <img :src="i.imageUrl" alt="">
    </van-swipe-item>
  </van-swipe>
</div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Toast,Lazyload } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Lazyload)

export default {
  props:['data'],
  computed:{
    bannerVos(){
      return this.data.bannerVos
    }
  },
}
</script>
<style lang='stylus' scoped>
  .my-swipe .van-swipe-item {
    width 100%
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    img{
      width 100%
    }
  }
  // .van-swipe__track{
  //   display -webkit-box
  //   height 100%
  // }
</style>