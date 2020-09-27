<template>
    <div class="wrap">
      <header>商品详情</header>
      <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
      </div>
      <div>
         <p>￥66.00</p>
         <p><span>8921</span>人已购买</p>
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
    .banner
          .my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 150px;
                text-align: center;
                background-color: #39a9ed;
            }
</style>