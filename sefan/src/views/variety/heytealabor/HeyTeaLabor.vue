<template>
  <div class="container">
    <header>
      <div @click="handleCityClick"><i class="iconfont icon-back"></i></div>
      喜茶实验室
    </header>
    <div class="banner">
      <img src="https://go.cdn.heytea.com/storage/ad/2020/09/20/c1262c3c295f419283f8d13e13dffc6d.jpg" alt="">
    </div>
    <nav>
      <ul class="title">
          <li>茶茶力荐</li>
          <li>喜茶联名</li>
      </ul>
      <div>
          <ul class="filter">
            <van-tabs v-model="active" @click="toggleClass">
              <van-tab title="综合"></van-tab>
              <van-tab title="销量"></van-tab>
              <van-tab title="价格"></van-tab>
            </van-tabs>
          </ul>
          <div class="toggle"><i class="iconfont icon-list"></i></div>
      </div>
    </nav>
    <div class="main">
      <ul class="list">
          <li v-for="goods in goodsList" :key="goods.wxItem.name" @click="handleClickDetail(goods)">
              <goods-item :goods="goods.wxItem"></goods-item>
          </li>
      </ul>
    </div>
    <shop-bag></shop-bag>
  </div>
</template>

<script>
import http from '@u/http'
import GoodsItem from "@c/GoodsItem.vue";
import ShopBag from "@c/ShopBag"

import Vue from 'vue';
import { Popup,Cell,Tab, Tabs } from 'vant';
import _ from 'lodash'

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Cell);
export default {
  data(){
        return {
            goodsList:[],
            show:false,
            active: 0,
        }
    },
    async mounted(){
        let result =await http.get("/list");
        this.goodsList = result
    },
  components: {
    GoodsItem,
    ShopBag
  },
  computed:{

  },
  methods:{
      handleCityClick() {
      this.$router.push('/variety')
    },
    showPopup() {
      this.show = true;
    },
    handleClickDetail(goods){
      this.$router.push({
          name:'laborDetails',
          params:goods
        })
    },
    toggleClass(event){
      if(event == 1 && this.goodsList.length>0){
        this.goodsList = _.orderBy(this.goodsList,["wxItem.itemSalesVolume"])
      }else if(event == 2 && this.goodsList.length>0){
        this.goodsList = _.orderBy(this.goodsList,["wxItem.salePrice"])
      }else if(event == 0 && this.goodsList.length>0){
        this.goodsList = _.orderBy(this.goodsList,["wxItem.salePrice"],["desc"])
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
.container 
    height 100%
    width 100%
    display flex
    flex-direction column
    overflow-y scroll
    header 
        height 0.44rem
        background #ffffff
        text-align center
        line-height 0.44rem
        font-size 0.16rem
        font-weight bold
        color #000
        position relative
        div
            position absolute 
            left 0.22rem
            top 0.03rem
    .banner
        width 100%
        height 2.6rem
        img 
          width 100%
          height 100%
    nav 
        display flex
        flex-direction column
        .title 
          display flex
          height 0.6rem
          line-height 0.6rem
          font-size 0.18rem
          justify-content flex-start
          align-items center
          padding 0 0.2rem
          li:first-child 
            color #d3aa79
            border_1px(0 0 2px 0,#d3aa79)
            margin-right 0.5rem
        div
            display flex
            height 0.4rem
            align-items center
            justify-content space-between
            .filter
                display flex
                font-size 0.16rem
                padding 0 0.2rem
                li 
                  padding-right 0.2rem 
                li:first-child 
                  color #d3aa79
            .toggle
               width 0.4rem
    .main 
        flex 1
        background-color #f6f6f6
        padding-top .2rem
        .list 
            display flex
            flex-wrap wrap
            height 100%
            padding-left 0.2rem
            li 
                margin-bottom .1rem
                border-radius .1rem
                background-color #ffffff
            li:nth-child(2n+1)
                    margin-right .15rem
</style>
<style lang="css">
.van-cell{
  padding: 0;
  overflow: visible;
}
.van-cell .van-icon{
  display:none
}
.van-tab--active {
    color: #d3aa79;
    font-weight: 500;
}
.van-tabs__line{
  background-color: #d3aa79;
}
</style>