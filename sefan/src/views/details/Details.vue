<template>
  <div class="del_con">
    <div class="header">
      <div>
        <van-nav-bar
          title="商品详情"
          left-text=""
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
    </div>

    <div class="main">
        <div class="carousel">
          <van-swipe :autoplay="0" :loop="false" indicator-color="#000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="price">
            <h2>￥{{info.wxItem.salePrice | price}}</h2>
            <p><span>{{info.wxItem.itemSalesVolume}}</span>人已购买</p>
        </div>
        <div class="goodsInfo">
            <h2>{{info.wxItem.name}}</h2>
            <h3>{{info.wxItem.subName}}</h3>
        </div>
        
        <div class="brand">
          <h2>品牌<span>{{info.wxItem.brand ? info.wxItem.brand : '喜茶'}}</span></h2>
          <h3>发货<span>送至昌平区</span></h3>
          <p>运费<span>满30.0原包邮</span></p>
        </div>

        <div class="imgCon">
            <h2>商品详情</h2>
            <div v-html='info.wxItem.describe' class="imgs">
              {{info.wxItem.describe}}
            </div>
        </div>
    </div>  

    <van-popup v-model="show" closeable round>
        <AddGoods :data='info'></AddGoods>
    </van-popup>

    <div class="bottom">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="百货" />
        <van-goods-action-icon icon="chat-o" text="客服" />
        
        <van-goods-action-button
          type="primary"
          text="加入购物袋"
          color='rgb(66,65,65)' 
          @click="showPopup"
        />
        <van-goods-action-button
          type="primary"
          text="立即购买"
          color='rgb(215,168,113)'
        />
      </van-goods-action>
    </div>
    <ShopBag></ShopBag>
  </div>
</template>

<script>
import Vue from "vue";
import AddGoods from './AddGoods';
import ShopBag from "@c/ShopBag"
import { Swipe, SwipeItem, Lazyload } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton ,Popup} from "vant";

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Popup);
export default {
  data() {
    return {
      images: [],
      info:{},
      show: false,
    };
  },
  components:{
    AddGoods,
    ShopBag,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    showPopup(){
      this.show = true;
    }
  },

  created(){
    this.info = this.$route.params.info;
    this.images = this.info.materialUrls;
  },

  mounted(){
    // console.log(this.info)
  },

  filters:{
    price(value){
        return value.toString().slice(0,-2) + ".00"
    }
  }
};
</script>

<style lang="stylus" scoped>
.del_con
    display flex
    flex-direction column
    height 100%
    .main
        flex 1
        overflow-y scroll
        background-color rgb(246,246,246)
        .carousel   
            width: 100%
            img
                width 100%
        .price
            display flex
            justify-content space-between
            padding 0 .16rem
            height .6rem
            line-height .6rem
            background-color #fff
            h2
                color rgb(215,168,113)
                font-size .26rem
            p
                color rgb(153,153,153)
                font-size .13rem
                font-weight 500
        .goodsInfo
            padding 0 .16rem
            padding-top .1rem
            margin-bottom .12rem
            background-color #fff
            h2
                font-size .19rem
                font-weight 500
                color rgb(52,52,52)
            h3
                font-size .13rem
                font-weight 500
                color rgb(153,153,153)
                height .3rem
                line-height .3rem
        .brand
            background-color #fff
            padding 0 .16rem
            margin-bottom .12rem
            h2 , h3 , p
                height .5rem
                line-height .5rem
                color rgb(161,161,161)
                font-weight 500
                span
                    color rgb(52,52,52)
                    margin-left .3rem
                    font-weight 500
                    font-size .15rem

        .imgCon
            h2
                background-color #fff
                height .6rem
                line-height .6rem
                text-align center
                font-size .16rem
                font-weight 500

</style>

<style lang="stylus">
.van-button--primary
    border-radius .1rem
    margin-left .1rem
    width 30%
.van-icon
    font-size .2rem
</style>