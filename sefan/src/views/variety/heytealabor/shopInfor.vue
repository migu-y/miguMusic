<template>
    <div class="wrap">
      <header>
          <div @click="handleClick"><i class="iconfont icon-back"></i></div>
          商品详情
          </header>
      <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="" alt=""></van-swipe-item>
                <van-swipe-item><img src="" alt=""></van-swipe-item>
                <van-swipe-item><img src="" alt=""></van-swipe-item>
                <van-swipe-item><img src="" alt=""></van-swipe-item>
            </van-swipe>
      </div>
      <div class="infor">
          <div class="shop">        
            <div>￥66.00</div>
            <p><span>8921</span>人已购买</p>
          </div>
        
         <p>【混合装】喜小茶零糖气泡水 葡萄糖6瓶+西柚味6瓶</p>
         <p>规格为12瓶一箱哦~</p>
      </div>
      <main>
          <div>
              <span>品牌</span>
              <span>喜茶</span>
          </div>
          <div>
              <span>发货</span>
              <p>送至 <span>北京市昌平区</span>
              <br>
              <span>预计 1-3天 发货</span>
              </p>
          </div>
          <div>
              <span>运费</span>
              <span>满30.00元包邮</span>
          </div>
      </main>
      <div>
          <span>商品详情</span>
          <img src="" alt="">
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {

}
</script>

<style lang='stylus' scoped>
.warp
    height 100%
    display flex
    flex-direction column
    .banner
        height 65%
        .my-swipe
            .van-swipe-item 
                color #fff
                font-size 20px
                line-height 150px
                text-align center
                background-color #39a9ed
    .infor
        padding-bottom .15rem
        margin-bottom .15rem
        .shop
            display flex
            flex-direction row
            marign .2rem 0
            div
                font-size .15rem
                color  #daa778
                float left 
            p
                font-size .06rem
                color #eee
                float right
        p:nth-of-type(1)
            font-size .15rem
            color #000
        p:nth-of-type(2)
            font-size .06rem
            color #eee
    
      
</style>