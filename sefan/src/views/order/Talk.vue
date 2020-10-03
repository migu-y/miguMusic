<template>
    <div class="container">
        <nav @click="handleClickBack">
            <van-nav-bar  left-arrow >
            </van-nav-bar>
        </nav>
        <div class="main">
            <h1>想对你说</h1>
            <div class="soulTea">
                <span>INSPIRATION 灵感之茶</span>
                <p>喜茶想要分享给顾客的就是茶的真味。为了给顾客带来纯粹纯正的好茶，团队注重的
产品研发，并在深圳总部设立专业实验室，致力于茶
饮产品构思、配方研究及样品制造。</p>
            </div>
            <div class="soulTea fault">
                <span>都是我们的错</span>
                <p>喜茶想要分享给顾客的就是茶的真味。为了给顾客带来纯粹纯正的好茶，团队注重的
产品研发，坚持独立自主的产品研发模式</p>
            </div>
            <div class="soulTea notice">
                <span>请注意</span>
                <p>喜茶想要分享给顾客的就是茶的真味。为了给顾客带来纯粹纯正的好茶，团队注重的
产品研发，坚持独立自主的产品研发模式</p>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {

methods:{
    handleClickBack(){
        this.$router.back()
    }
}
}
</script>
<style lang="stylus" scoped>
.container
    width 100%
    height 100%
    display flex
    flex-direction column
    nav 
        height 0.44rem
        width 100%
        background red
    .main 
        margin-top 0.04rem
        display flex
        flex-direction column
        align-items center
        padding 0 0.24rem
        h1 
            color #000000
            font-size 0.24rem
            
            width 100%
            line-height 0.6rem
            text-align center
            font-weight bolder
        .soulTea
            flex 1
            padding-bottom 0.1rem 
            span 
                height 0.6rem
                line-height 0.6rem
                text-align center
                width 100%
                font-size 0.18rem
                font-weight bold
                display inline-block
                color #343434
            p 
                line-height 0.36rem
                font-size 0.16rem
                color #353535
                text-indent 0.4rem
        .notice 
            padding-bottom 0
       

</style>
<style lang="css">
.van-nav-bar .van-icon {
    color: #1a1a1a;
}

</style>