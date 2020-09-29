<template>
  <div class="container">
    <header>
      <div @click="handleClick"><i class="iconfont incon-back"></i></div>
      喜小茶零糖气泡水
    </header>
    <div class="banner">
      <img src="" alt="" />
    </div>
    <div class="main">
      <ul class="list">
          <li>
              <div class="left-img">
                  <img src="" alt="">
              </div>
              <div class="right-text">
                  <p>【混合装】喜小茶领糖气泡水</p>
                  <p>规格为12瓶一箱哦~</p>
                  <span>￥66.00</span>
                  <div>立即购买</div>
                    <p>
                <i class="iconfont icon-baihuo"></i>
            </p>
             <p>
                <i class="yo-ico">&#xe610;</i>
            </p>
              </div>
          </li>
        <!-- <li v-for="goods in goodsList" :key="goods.id">
          <van-cell is-link @click="showPopup">
            <goods-item :goods="goods"></goods-item>
          </van-cell>
          <van-popup v-model="show">
            <goods-detail :goods="goods"></goods-detail>
          </van-popup>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import http from "@u/http";
import GoodsList from "@c/GoodsList.vue";
import GoodsInfor from "@c/GoodsInfor.vue";

import Vue from "vue";
import { Popup, Cell } from "vant";

Vue.use(Popup);
Vue.use(Cell);
export default {
  data() {
    return {
      goodsList: [],
      show: false,
    };
  },
  async mounted() {
    let result = await http.get("/shoplist");
    console.log(result);
    this.goodsList = result.data;
  },
  components: {
    GoodsList,
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

    header 
        height 0.44rem
        background transparent // 背景色透明
        text-align center// 居中对齐
        line-height 0.44rem // 行高
        font-size 0.16rem // 文字大小
        // font-weight bold         //文字加粗
        color #000
    

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