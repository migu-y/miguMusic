<template>
    <div class="wrap">
      <header>
          <div @click="handleClick"><i class="iconfont icon-back"></i></div>
          商品详情
          </header>
      <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                 <van-swipe-item v-for="item in swipeList" :key="item.id"><img :src="item.imageUrl" alt=""></van-swipe-item>
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
      <div class="expressInfo"> 
          <div class="brand">
              <span>品牌</span>
              <span>喜茶</span>
          </div>
          <!-- <div>
              <span>发货</span>
              <p>送至 <span>北京市昌平区</span>
              <br>
              <span>预计 1-3天 发货</span>
              </p>
          </div> -->
          <van-address-edit>

          </van-address-edit>
          <div class="brand">
              <span>运费</span>
              <span>满30.00元包邮</span>
          </div>
      </div>
      <div class="detailImg">
          <p class="title">商品详情</p>
          <div>
          <p><img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/0e54cb983884462ca5adfbc91ce3f657z" ></p>
          </div>
      </div>
    
    <footer>
        <div>
            <p>
                <i class="iconfont icon-mall"></i>
                <span>百货</span>
            </p>
            <p>
              <i class="iconfont icon-kefu"></i>
              <span>客服</span>
            </p>
        </div>
        <ul>
            <li @click="handleAddCart">加入购物车</li>
            <li>立即购买</li>
        </ul>
    </footer>
    </div>
</template>

<script>
import http from "@u/http";
import axios from 'axios';

import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {};
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
          background-color #39a9ed
  .infor 
      padding-bottom 0.15rem
      margin-bottom 0.15rem
      // flex 1
      // background-color #f6f6f6
      .shop 
        display flex
        flex-direction row
        marign 0.2rem 0
        div 
          font-size 0.15rem
          color #daa778
          float left
        
        p 
          font-size 0.06rem
          color #eee
          float right

    p:nth-of-type(1) 
      font-size 0.15rem
      color #000

    p:nth-of-type(2) 
      font-size 0.06rem
      color #eee
  .expressInfo
    margin-bottom .1rem
    padding 0 .18rem
    background-color #ffffff
    .brand
      display flex
      height 0.44rem
      line-height 0.44rem
      font-size 0.14rem
      span:first-child
          color #848484
          padding-right 0.4rem
    .detailImg
      .title
        font-size 0.16rem
        color #848484
        height 0.4rem
        width 0.3rem
        line-height 0.4rem
        text-align center    
        background-color #fff
      div
        p
          img
              max-width 100%
              height auto
              display block
    footer 
        width 100%
        height .5rem
        line-height .5rem
        display flex
        position fixed
        bottom 0
        justify-content space-between
        padding 0 0.1rem 0 0.2rem
        background-color #fff
        div 
            display flex
            margin-right .2rem
            p 
                display flex
                flex-direction column
                align-items center
                margin-right 0.2rem
                padding-top 0.08rem
                i   
                    font-size 0.24rem
                    line-height 0.2rem
                span 
                    color #565656
                    line-height 0.2rem
                    font-size 0.13rem
        ul 
            display flex
            align-items center
            color #fff
            li 
                width 1.1rem
                height 0.4rem
                line-height 0.4rem
                text-align center
                border-radius 0.05rem
            li:first-child
                background-color #373536
                margin-right 0.08rem
            li:nth-child(2)
                background-color #ceac6c

</style>
<style lang="css">
.expressInfo .van-address-edit{
    padding: 0;
}
.expressInfo .van-address-edit .van-address-edit__buttons{
       display: none;
}
.van-address-edit__fields .van-cell {
        display:none;
}       
.van-address-edit__fields .van-cell--clickable{
    display:flex
}
</style>

  

</style>