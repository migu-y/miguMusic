<template>
    <div class="wrap">
       <van-swipe @change="onChange">
        <van-swipe-item v-for='i in goodsItem.images' :key='i.id'>
          <img :src="i.url" alt="">
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{goodsItem.images.length}}
          </div>
        </template>
      </van-swipe>
        <!-- <div class="count">
            <p>{{goodsItem.skuInfoList[0].skuInfoNames[0]['keyName']}}</p>
            <p>{{goodsItem.skuInfoList[0].skuInfoNames[0]['valName']}}</p>
        </div>
        <div class="step">
            <span>购买数量</span>
            <span>
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
            </span>
        </div>
        <p class="confirm" @click="addToCart({...goodsItem.wxItem,value});handleHiddenClick()" >确定</p> -->
        <div class="info">
          <h2>{{goodsItem.name}}</h2>
          <p>产品描述</p>
          <p>{{goodsItem.description}}</p>
        </div>
        <div class="order">
          <div class="step">
            <p>￥{{goodsItem.price}}</p>
            <van-stepper v-model="value" theme="round" button-size="22" disable-input />
          </div>
          <p class="confirm" @click="addTo({...goodsItem,value});handleHiddenClick()" >加入购物袋</p>
        </div>
    </div>
   
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Stepper } from 'vant';
import {mapActions} from "vuex"

Vue.use(Stepper)
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
    props:["goodsItem"],
    data() {
        return {
          value: 1,
          current: 0
        };
    },
    methods:{
        handleHiddenClick(){
            this.$emit('update:closeDialog', false)
         },
        ...mapActions("cart",["addToCart"]),
        onChange(index) {
          this.current = index;
        },//id, thumbnail, name, salePrice, value
        addTo(goodsItem){
          let obj={
            id:goodsItem.id,
            thumbnail:goodsItem.images[0].url,
            name:goodsItem.name,
            salePrice:Number(goodsItem.price)*100,
            value:goodsItem.value
          }
          this.addToCart(obj)
          this.value=1
        }
    },
    mounted(){
        
    },
    
}
</script>


<style scoped lang="stylus">
.wrap      
    width 100%
    height 5rem
    border-radius 0.2rem
    background-color #fff
    display flex
    flex-direction column
    .info
      display flex
      flex-direction column
      padding-left .1rem
      height 2rem
      overflow-y scroll
      border-bottom 1px solid #ccc
      h2
        font-size .2rem
        padding-bottom .1rem
      p
        color #888
        padding-bottom .1rem
    .order
      display flex
      flex-direction column
      .step
        display flex
        padding 0 .2rem 0 .2rem
        justify-content space-between
        padding-top .1rem
        p
          font-size .18rem
          font-weight bold
          color #DBA871
      .confirm
        margin .1rem auto 0
        width 2.9rem
        height 0.4rem
        color #ffffff
        line-height 0.4rem
        text-align center
        background-color #cfaa79
        border-radius 0.06rem

.custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
    }
  img{
    width 100%
    height 2rem

  }
</style>
<style lang="css">
.van-stepper--round .van-stepper__plus {
    color: #fff;
    background-color: #cfaa79;
}
.van-stepper--round .van-stepper__minus {
    color: #898989;;
    background-color: #fff;
    border: 1px solid #898989;;
}

</style>
