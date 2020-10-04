<template>
<div>
  <van-swipe class="my-swipe" 
    :autoplay="3000" 
    >
    <van-swipe-item v-for="i in images" :key='i.id'>
      <img :src="i.url" alt="">
    </van-swipe-item>
  </van-swipe>
</div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Toast,Lazyload } from 'vant';
// import { mapState } from 'vuex'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Lazyload)
export default {
  data(){
    return{
      images:[
        {
          url:"https://go.cdn.heytea.com/storage/ad/2020/09/20/3ede38bf901d401babdfaf8b9f891efa.jpg",
          id:'01'
        },
        {
          url:"https://go.cdn.heytea.com/storage/ad/2020/09/20/3ede38bf901d401babdfaf8b9f891efa.jpg",
          id:'02'
        }
      ]
    }
  },
  // props:{
    
  // },
  // computed:{
  //   ...mapState(['data']),
  //   bannerVos(){
  //     return this.data.bannerVos
  //   }
  // },
//  mounted(){
//    this.data.bannerVos.forEach(item=>{
//      this.images.push(item.imageUrl)
//    })
//    console.log(this.images);
//  },
//  methods:{
//   onChange(index) {
//       Toast('当前 Swipe 索引：' + index);
//     }
//   }
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