
<template>
  <div class="container">
    <!-- <router-view></router-view> -->
    <header>
        喜茶百货
    </header>
    <div class="main">
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="已经到底啦，去其他页面逛逛吧"
      @load="onLoad"
      >
            <div class="carousel">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="https://go.cdn.heytea.com/storage/ad/2020/09/20/c1262c3c295f419283f8d13e13dffc6d.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://go.cdn.heytea.com/storage/ad/2020/09/18/d1e11c73195f43b792cdf281f68f886a.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://go.cdn.heytea.com/storage/ad/2020/09/16/e87ed3dbf28746ecb34bdbed35f83d4f.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="https://go.cdn.heytea.com/storage/ad/2020/09/20/3ede38bf901d401babdfaf8b9f891efa.jpg" alt=""></van-swipe-item>
            </van-swipe>
          </div>
          <div class="center">
            <div class="left">
              <router-link to="/factory">
               <img src="../../../public/img/pingzhuangchang.png" alt="">
              </router-link>
              
            </div>
            <div class="right">
              <div class="r-top">
                <router-link to="/heytealabor">
                <img src="../../../public/img/shiyanshi.png" alt="">
                </router-link>
                
              </div>
              <div class="r-bottom">
                <router-link to="/soularound">
                <img src="../../../public/img/linggan.png" alt="">
                </router-link>
                
              </div>
            </div>
          </div>

          <div class="new">
            <p>百货上新&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>NEW&nbsp;&nbsp;ARRIVALS</span></p>
            <div class="newgoods">
              <img src="../../../public/img/yuebing.png" alt="">
              <ul>
                <li v-for="goods in newlist" :key="goods.wxItem.id" @click="handleClick(goods)">
                   <img :src="goods.wxItem.thumbnail" alt="">
                  <div class="pay">
                    <h1>{{goods.wxItem.name}}</h1>
                    <p>{{goods.wxItem.subName}}</p>
                    <span>￥{{(goods.wxItem.labelPrice/100).toFixed(2)}}</span>
                    <div>立即购买</div>
                  </div>
                </li>
                
              </ul>
            </div>
            <div class="newgoods">
              <img src="../../../public/img/石川.jpg" alt="">
              <ul>
                <li v-for="goods in newlist2" :key="goods.wxItem.id" @click="handleClick(goods)">
                   <img :src="goods.wxItem.thumbnail" alt="">
                  <div class="pay">
                    <h1>{{goods.wxItem.name}}</h1>
                    <p>{{goods.wxItem.subName}}</p>
                    <span>￥{{(goods.wxItem.labelPrice/100).toFixed(2)}}</span>
                    <div>立即购买</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <p>猜你喜欢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>YOU&nbsp;&nbsp;MAY&nbsp;&nbsp; ASLO &nbsp;&nbsp;LIKE</span>
              </p>
              <ul>
                <li v-for="goods in list" :key="goods.wxItem.id" @click="handleClick(goods)">
                  
                  <img :src="goods.wxItem.thumbnail" alt="">
                  <div class="text">
                    <div>{{goods.wxItem.name}}</div>
                    <div>{{goods.wxItem.itemSalesVolume }}人已购买</div>
                    <div>￥{{(goods.wxItem.labelPrice/100).toFixed(2)}}</div>
                  </div>
                  
                  
                </li>
               
             
              </ul>
            </div>
          </div>
          
       
      </van-list>
     
    </div>
    <shop-bag></shop-bag>
  </div>
</template>

<script>

import Vue from 'vue';

import { Swipe, SwipeItem ,List,Tabbar, TabbarItem } from 'vant';
Vue.use(List)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);

import http from '@u/http'
import ShopBag from "@c/ShopBag"

export default {
    data(){
      return{
        active:0,
        newlist:[],
        newlist2:[],
        list: [],
        loading: false,
        finished: false,
        
      }
    },
    created(){
      this.page=1
      this.limit=10
    },
    mounted(){
    //  this.loadData()
    },
     components:{
          ShopBag
      },
    methods:{
      async loadData() {
      let result = await http.get('/list'+this.page)
      let result2=await http.get('/list'+'new')
      let result3=await http.get('/list'+'new2')
    
    
      this.list=[
        ...this.list,
        ...result
        ]
      this.newlist=[
        ...result2
      ]
      this.newlist2=[
        ...result3
      ]
        this.loading=false
        this.page++
        
        // console.log(result.totalCount);
         if (this.page >= Math.ceil(30 / 10)) {
        this.finished = true
      }
      },

      handleClick(goods){
        this.$router.push({
                    name:'details',
                    params:{info:goods}
                })
      },

      

      onLoad(){
        this.loadData()
      },
    }

}



</script>
<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'


.container
  height 100%
  display flex
  flex-direction column
  header 
    height 0.44rem
    background #ffffff
    text-align center
    line-height 0.44rem
    font-size 0.16rem
    font-weight 600
  .main
    flex 1
    overflow-y scroll
    .carousel
      height 3.75rem
      .my-swipe 
        height 100%
        width 100%
        .van-swipe-item
          height 100%
          width 100%
          img 
            width 100%
            height 100%
    
    .center
      height 1.95rem
      padding  0.2rem 0.16rem
      display flex
      .left
        height 100%
        width 1.45rem
        background #f5f5f5
        margin-right 0.15rem
        img 
          width 100%
          height 100%
      .right
        height 100%
        flex 1
        
        display flex
        flex-direction column
        .r-top
          width 100%
          flex 1
          margin-bottom 0.15rem
          background #f5f5f5
          img 
            width 100%
            height 100%
        .r-bottom
          width 100%
          flex 1
          background #f5f5f5
          img 
            width 100%
            height 100%
    .new 
      background #f6f6f6
      padding 0.15rem 0.16rem
      p
        height 0.5rem
        width 100%
        font-size 0.16rem
        line-height 0.5rem
        font-weight bold
        span 
          font-size 12px
          transform scale(0.7)
          font-weight 500
          color #999
      .newgoods
        margin-top 0.2rem
        width 100%
        border-radius 0.06rem
        background #e8c370
        overflow hidden
        img 
          height 1.5rem
          width 100%
        ul
          margin 0.05rem
          li
            height 1.65rem
            margin-bottom 0.05rem
            background #ffffff
            border-radius 0.04rem
            padding 0.12rem
            display flex
            img 
              width  1.4rem
              height 100%
              margin-right  0.26rem
            .pay
              flex 1
              height 100% 
              padding 0.12rem 0
              display flex
              flex-direction column
              >h1
                font-size 0.15rem
                
                ellipsis()
              p
                font-size 0.12rem
                
                color #999
                font-weight 500
                ellipsis()
              span 
                font-size 0.13rem
                font-weight bold
              div 
                width 0.7rem
                line-height 0.24rem
                height 0.24rem
                background #e8c370
                color #ffffff
                font-size 0.12rem
                text-align center
                border-radius 0.12rem
    .list
      background #f6f6f6
      padding 0.15rem 0
      p
        height 0.5rem
        width 100%
        font-size 0.16rem
        line-height 0.5rem
        font-weight bold
        span 
          font-size 12px
          transform scale(0.7)
          font-weight 500
          color #999
      ul
        display flex
        flex-wrap wrap
        
        li
          background #fefefe
          display flex 
          flex-direction column
          width calc(50% - 5px)
          height 2.56rem
          border-radius 0.03rem
          
          &:nth-child(2n+1)
            margin-right .1rem
            margin-bottom .1rem
          img
            width 100% 
            height 1.66rem
          .text
            flex 1
            padding 0 0.08rem
            div:first-child
              font-size 0.13rem
              color #343434
              font-weight 530
              line-height 0.21rem
              margin-top 0.13rem
              ellipsis()
            div:nth-child(2)
              font-size 0.1rem
              transform scale(0.8)
              color #999
              line-height 0.1rem
            div:last-child
              color #e8c370
              font-weight bold
              font-size 0.13rem
              line-height 0.46rem


            

              

        
        


  // footer 
  //   height 0.5rem
  //   background #f7f7f7
  //   ul
  //     height 100%
  //     display flex
  //     flex-direction column
  //     justift-content center
  //     align-item center
  //     i
  //       font-size 0.42rem
  //       line-height .42rem
  //     span 
  //       font-size size 0.16rem
  //     &.active
  //       color #000
</style>
