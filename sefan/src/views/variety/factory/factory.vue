<template>
  <div class="container">
    <header>
      <div @click="handleClick"><i class="iconfont icon-back"></i></div>
      喜小茶零糖气泡水
    </header>
    <div class="banner">
      <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/e21de8918bda443db9ae60e74a7e2a7d.jpg"/>
    </div>
          <ul>
        <li v-for="goods in goodsList" :key="goods.id">
          <van-cell is-link @click="showpopup">
            <goods-It :goods="goods"></goods-It>
          </van-cell>
          <van-popup v-model="show">
            <goods-infor :goods="goods"></goods-infor>
          </van-popup>
        </li>
      </ul>
    </div>
</template>

<script>
import http from "@u/http";
import GoodsIt from "@c/GoodsIt.vue";
import GoodsInfor from "@c/GoodsInfor.vue";
import axios from 'axios'

import Vue from "vue";
import { Popup, Cell } from "vant";

Vue.use(Popup);
Vue.use(Cell);
export default {
  data() {
    return {
      goodsList: {},
      show: false,
    };
  },
  async mounted() {
    let result = await axios.get("/data/shoplist.json");
    this.goodsList = JSON.parse(result.data.data)
    this.goodsList=this.goodsList[2];
    this.goodsList=this.goodsList.config.data;
    console.log(this.goodsList)
  },
  components: {
    GoodsIt,
    GoodsInfor,
  },
  methods: {
    handleClick() {
      this.$router.push("/variety");
    },
    showpopup() {
      this.show = true;
    },
  },
};
</script>


<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.container 
    height 100%
    display flex
    flex-direction column
    .banner
        width 100%
        height 2.6rem
        img
          width 100%
          height 100%
    header 
        height 0.44rem
        background transparent // 背景色透明
        text-align center// 居中对齐
        line-height 0.44rem // 行高
        font-size 0.16rem // 文字大小
        font-weight bold         //文字加粗
        color #000
        position relative
        div
            position absolute 
            left 0.22rem
            top 0.03rem

   .banner 
      
      height 3rem
      background yellowgreen
      margin-bottom .1rem

   .list 
        flex 1
        background #eee
        overflow-y scroll
        height 60%
        li 
          display flex
          flex-direction row
          height 50%
          padding .2rem .15rem
          margin-bottom .05rem
          background #fff
          .left-img
              width 40%
              background red
              margin-right .15rem
          .right-text
              width 60%
              p:nth-of-type(1) 
                  font-size 0.16rem
                  margin 0.1rem
              
              p:nth-of-type(2) 
                  font-size 0.12rem
                  color #666
                  margin-top: 0.02rem
              

              span 
                  font-size 0.14rem
                  font-weight bold
                  margin-top 0.16rem
                  display block
              

              div 
                  height 0.25rem
                  width 0.7rem
                  background #daa778
                  border-radius 0.06rem
                  color #fff
                  font-size 0.1rem
                  text-align center // 居中对齐
                  line-height 0.25rem
                  margin-top 0.13rem

   
</style>
<style lang="css">
/* 去掉cell和icon不需要的默认样式 */
.van-cell {
  padding: 0;
  overflow: visible;
}
.van-cell .van-icon {
  display: none;
}
</style>