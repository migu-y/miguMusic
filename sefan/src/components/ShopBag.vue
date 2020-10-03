<template>
    <div class="shopBag" >
        <div class="shopWrap" @click="showShopBag">
            <van-icon class="shopIcon" class-prefix="my-icon" name="extra" badge="9" v-model="showShopBag">
                <i>&#xe600;</i>
            </van-icon>
        </div>
        <div class="showShopBag">
            <div class="header">
                <label for="all"><input type="checkbox" id="all"> 全选</label>
                <p class="clear">清空购物袋</p>
            </div>
            <ul class="cartList">
                <li></li>
            </ul>
        </div>
    </div>
   
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  data(){
      return {
          showShopBag:false,
          show:false
      }
  },
  methods:{
      showShopBag(){

      }
  }
}
</script>


<style scoped lang="stylus">
@import "~@a/stylus/border.styl"
.shopBag
    position fixed 
    width 100%
    bottom 0
    .shopWrap
        .shopIcon 
            position absolute 
            left 0.2rem
            bottom 0.8rem
            width 0.6rem
            height 0.6rem
            line-height 0.6rem
            text-align center
            background-color #fff
            border-radius 0.6rem
            i 
                font-size 0.3rem
    .showShopBag 
        display flex
        flex-direction column
        padding 0 0.2rem
        background-color #fff
        border-radius 0.5rem
        border_1px(0 0 1px 0)
        .header 
            height 0.4rem
            line-height 0.4rem
            display flex
            align-items center
            justify-content space-between
            .clear 
                color #ccc

            
</style>
<style lang="css">
.van-info {
    background-color: #d7aa6f;
    min-width: 0.24rem;
    line-height: 2;
}
</style>
