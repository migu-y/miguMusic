<template>
    <div class="container">
        <div class="swipe">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item in swipeList" :key="item.id"><img :src="item.imageUrl" alt=""></van-swipe-item>
            </van-swipe>
        </div>
        <main>
            <div class="start-top">
                <ul>
                    <li @click="handleOrderClick">
                        <i class="iconfont icon-icon-"></i>
                        <span>门店自取</span>
                        <p>下单免排队</p>
                    </li>
                    <li>
                        <i class="iconfont icon-diandongche"></i>
                        <span>外卖</span>
                        <p>无需接触，欢喜到家</p>
                    </li>
                </ul>
            </div>
            <div class="start-mid">
                <ul>
                    <li @click="handleClick">
                        <i class="iconfont icon-libao1"> 喜茶百货</i>
                        <span>气泡水新升级抢鲜选购</span>
                    </li>
                    <li @click="handleEnterpriseClick">
                        <i class="iconfont icon-cup"> 阿喜团餐</i>
                        <span>气泡水新升级抢鲜选购</span>
                    </li>
                </ul>
            </div>
            <div class="start-bto">
                <ul>
                    <li>
                        <p>
                            <span>我的积分</span>
                            <span>***</span>
                        </p>
                        <p>
                            可兑换喜茶券和丰富灵感周边
                        </p>
                    </li>
                    <li>
                        <p>
                            <i class="iconfont icon-qrcode"></i>
                        </p>
                        <p>会员码</p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
    
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    props: {
    swipeList: {
      type: Array
    }
  },
  methods:{
      handleClick(){
          this.$router.push("/variety")
      },
      handleOrderClick(){
          this.$router.push("/reservation")
      },
      handleEnterpriseClick(){
          this.$router.push("/enterprise")
      }
  }
};
</script>


<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
.container
    width 100%
    .swipe
        .my-swipe 
            .van-swipe-item 
                img 
                    width 100%
                    // height calc(278/375*100%)
                    height 2.78rem
    main
        height 2.8rem
        width 100%
        background-color #f7f7f7
        position relative
        display  flex
        flex-direction column
        .start-top
            position absolute 
            background-color #ffffff
            border-top-left-radius .1rem
            border-top-right-radius .1rem
            height 1.8rem
            width 100%
            top -0.1rem
            padding 0.24rem 0
            ul 
                display flex
                width 100%
                height 100%
                li 
                    display flex
                    flex 1
                    flex-direction column
                    align-items center
                    padding 0.24rem 0  0
                    i 
                        width 0.48rem
                        height 0.44rem
                        line-height 0.44rem
                        font-size 0.5rem
                    span 
                        font-size 0.18rem
                        color #2b2b2b
                        font-weight bolder
                        margin 0.16rem 0 0.1rem
                    p 
                        font-size 0.14rem
                        color #535353

                li:first-child
                    border_1px(0 1px 0 0)

        .start-mid
            width 100%
            height 0.76rem
            background-color #ffffff
            position absolute 
            top 1.9rem
            ul 
                display flex
                justify-content space-between
                li 
                    height 0.74rem
                    display flex
                    flex 1
                    flex-direction column
                    align-items center
                    justify-content center
                    background-color #ebebeb
                    i 
                        font-weight bold
                    span 
                        font-size 0.14rem
                        margin-top .06rem
                        color #959595
                li:first-child
                    margin-right 0.1rem
        .start-bto
            height 0.5rem
            width 100%
            margin-top 0.12rem
            position absolute 
            top 2.65rem
            ul 
                display flex 
                height 100%
                justify-content space-between
                padding 0.06rem 0.03rem
                li
                    display flex
                    flex-direction column
                    p:first-child
                        height 0.2rem
                        line-height 0.2rem
                        font-size 0.14rem
                        color #070707
                        font-weight bold
                        span:first-child 
                            margin-right 0.04rem
                    p:last-child 
                        font-size 0.12rem
                        color #7f7f7f
                        margin-top .09rem
                li:last-child
                    p:first-child
                        text-align center
                        i
                            font-size 0.2rem

            

</style>
