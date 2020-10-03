<template>
    <div class="shopBag" >
        <div class="shopWrap">
            <van-icon class="shopIcon" class-prefix="my-icon" name="extra" badge="9" v-model="showShopBag">
            <i>&#xe600;</i>
        </van-icon>
        </div>
        <div class="showShopBag">
            
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
  }
}
</script>


<style scoped lang="stylus">
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
</style>
<style lang="css">
.van-info {
    background-color: #d7aa6f;
    min-width: 0.24rem;
    line-height: 2;
}
</style>
