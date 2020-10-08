<template>
    <div class="shopBag" >
        <div class="shopWrap" @click="showBag">
            <van-icon class="shopIcon" class-prefix="my-icon" name="extra" :badge="count" v-model="showShopBag">
                <i>&#xe600;</i>
            </van-icon>
        </div>
        <div class="showBag" v-show="show">
            <div class="header">
                <label for="all" @click="checkAll"><input type="checkbox" id="all" v-model="allChecked"> 全选</label>
                <p class="clear" @click="handleClearBag"><i class="iconfont icon-qingkonggouwuche"></i>
                    清空购物袋</p>
            </div>
            <div class="variety">
                <!-- <p class="from"><label for="variety" @click="checkAll"><input type="checkbox" id="variety"> 百货订单</label> <span>直邮到家</span></p> -->
                <ul class="cartList">
                    <van-checkbox-group v-model="result" ref="checkboxGroup">
                        <li v-for="goodsItem in products" :key="goodsItem.id">
                            <div class="left">
                                <!-- <input type="checkbox" v-model="goodsItem.checked">
                                -->
                                <van-checkbox :name="goodsItem.name" @click="singleChecked(goodsItem)"></van-checkbox>
                                <img :src="goodsItem.thumbnail" alt="">
                            </div>
                            <div class="itemDesc">
                                <p class="nameDesc">{{goodsItem.name}}</p>
                                <p class="tasteDesc">{{goodsItem.name}}</p>
                                <p class="stepper">
                                    <span>¥{{(goodsItem.salePrice/100).toFixed(2)}}</span>
                                    <van-stepper v-model="goodsItem.quantity" theme="round" button-size="22" disable-input />
                                </p>
                            </div>
                        </li>
                    </van-checkbox-group>
                </ul>
            </div>
            <div class="checkout">
                <div class="checkout-left">
                    <p class="price">¥ {{total}}</p>
                    <p class="expressPrice">另需运费 ¥ 12 (以结算为准)</p>
                </div>
                <div class="checkout-right" @click="checkout">
                        结算
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Stepper } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Icon);

import {mapState,mapGetters} from "vuex"
export default {
  data(){
      return {
          showShopBag:false,
          show:false,
          result: [],
      }
  },
  computed:{
      ...mapState('cart', {
      products: 'items'
    }),
    // allChecked:  {
    //     set(val) {}
    // },
    ...mapGetters('cart', ['total',"count","allChecked"]),
  },
  methods:{
      showBag(){
          this.show = !this.show
      },
      handleClearBag(){
          this.$store.state.cart.items = []
      },
       singleChecked(goodsItem){
        goodsItem.checked = !goodsItem.checked
    },
      checkAll(event) {
          if(event.target.checked){
            this.$refs.checkboxGroup.toggleAll(true);
            this.$store.state.cart.items.forEach(value=>{
                value.checked = true
            })
          }else{
            this.$refs.checkboxGroup.toggleAll();
            this.$store.state.cart.items.forEach(value=>{
                value.checked = false
            })
          }
    },
    checkout(){
        this.$router.push("/checkout");
    },
  },
  mounted(){
    // console.log(this.$store.state.cart.items)
  }
}
</script>


<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
.shopBag
    position fixed 
    width 100%
    bottom 0.5rem
    .shopWrap
        padding 0 0.2rem
        .shopIcon 
            // position absolute 
            // left 0.2rem
            // top 0
            display block
            width 0.6rem
            height 0.6rem
            line-height 0.6rem
            text-align center
            background-color #fff
            border-radius 0.6rem
            i 
                font-size 0.3rem
    .showBag 
        display flex
        flex-direction column
        background-color #fff
        border-top-left-radius 0.2rem
        border-top-right-radius 0.2rem
        margin-top 0.1rem
        .header 
            height 0.4rem
            line-height 0.4rem
            display flex
            align-items center
            justify-content space-between
            border_1px(0 0 1px 0)
            padding 0 0.2rem
            margin-bottom 0.1rem
            .clear 
                color #ccc
        .variety
            max-height 3rem
            overflow-y scroll
            padding 0 0.2rem
            .from 
                display flex 
                height 0.4rem
                align-items center
                span 
                    margin-left 0.14rem
                    height 0.2rem
                    line-height 0.2rem
                    border_1px(1px)
                    border-color green
                    color green
            .cartList 
                li 
                    display flex
                    padding-bottom 0.1rem
                    .left
                        display flex
                        align-items center
                        img 
                            width 0.8rem
                            height 0.8rem
                            margin-left 0.2rem

                    .itemDesc 
                        display flex
                        flex 1
                        height 1.4rem
                        flex-direction column
                        padding-left 0.1rem
                        border_1px(0 0 1px 0)
                        .nameDesc 
                            font-size 0.14rem
                        .tasteDesc 
                            font-size 0.13rem
                            color #ccc
                            margin 0.1rem 0
                        .stepper 
                            display flex
                            justify-content space-between
        .checkout 
            display flex
            flex 1
            justify-content space-between
            align-items center
            padding-left 0.2rem
            .checkout-left 
                display flex 
                flex-direction column
                .price 
                    font-size 0.16rem
                    font-weight bold 
                .expressPrice 
                     font-size 0.11rem
                     color #666
            .checkout-right 
                width 1rem
                height 0.42rem
                line-height 0.42rem
                text-align center
                font-size 0.18rem
                background-color  #cfaa79
                color #fff
            
</style>
<style lang="css">
.shopIcon  .van-info {
    background-color: #d7aa6f;
    min-width: 0.24rem;
    line-height: 2;
    right: 3rem !important;
}

.van-stepper--round .van-stepper__plus {
    color: #fff;
    background-color: #cfaa79;
}
.van-stepper--round .van-stepper__minus {
    color: #898989;;
    background-color: #fff;
    border: 1px solid #898989;;
}
.van-checkbox{
    width:0.2rem
}
</style>
