<template>
    <div class="shopBag" >
        <div class="shopWrap" @click="showBag">
            <van-icon class="shopIcon" class-prefix="my-icon" name="extra" badge="9" v-model="showShopBag">
                <i>&#xe600;</i>
            </van-icon>
        </div>
        <div class="showBag">
            <div class="header">
                <label for="all"><input type="checkbox" id="all"> 全选</label>
                <p class="clear"><i class="iconfont icon-qingkonggouwuche"></i>
                    清空购物袋</p>
            </div>
            <div class="variety">
                <p class="from"><label for="variety"><input type="checkbox" id="variety"> 百货订单</label> <span>直邮到家</span></p>
                <ul class="cartList">
                    <li>
                        <div class="left">
                            <input type="checkbox">
                            <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/061d4cccc4a94c279fdbd18e9df257cc.png" alt="">
                        </div>
                        <div class="itemDesc">
                            <p class="nameDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="tasteDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="stepper">
                                <span>¥66.00</span>
                                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <input type="checkbox">
                            <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/061d4cccc4a94c279fdbd18e9df257cc.png" alt="">
                        </div>
                        <div class="itemDesc">
                            <p class="nameDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="tasteDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="stepper">
                                <span>¥66.00</span>
                                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <input type="checkbox">
                            <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/061d4cccc4a94c279fdbd18e9df257cc.png" alt="">
                        </div>
                        <div class="itemDesc">
                            <p class="nameDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="tasteDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="stepper">
                                <span>¥66.00</span>
                                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <input type="checkbox">
                            <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/061d4cccc4a94c279fdbd18e9df257cc.png" alt="">
                        </div>
                        <div class="itemDesc">
                            <p class="nameDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="tasteDesc">【混合装】喜小茶零糖气泡水 葡萄味4瓶+西柚味4瓶+桃香味4瓶</p>
                            <p class="stepper">
                                <span>¥66.00</span>
                                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="checkout">
                <div class="checkout-left">
                    <p class="price">¥68</p>
                    <p class="expressPrice">另需运费¥68(以结算为准)</p>
                </div>
                <div class="checkout-right">
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

Vue.use(Stepper);
Vue.use(Icon);
export default {
  data(){
      return {
          showShopBag:false,
          show:false,
          value:1
      }
  },
  methods:{
      showBag(){

      }
  }
}
</script>


<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
.shopBag
    position fixed 
    width 100%
    bottom 0
    
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
        padding 0 0.2rem
        .header 
            height 0.4rem
            line-height 0.4rem
            display flex
            align-items center
            justify-content space-between
            border_1px(0 0 1px 0)
            .clear 
                color #ccc
        .variety
            height 3rem
            overflow-y scroll
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
                        input 
                            border-radius 50%
                        img 
                            width 0.8rem
                            height 0.8rem
                            margin-left 0.2rem

                    .itemDesc 
                        display flex
                        flex 1
                        height 1.4rem
                        flex-direction column
                        padding-left 0.2rem
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
            justify-content space-between
            .checkout-left 
                display flex 
                flex-direction column
            .checkout-right 
                width 1rem
                height 100%
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

</style>
