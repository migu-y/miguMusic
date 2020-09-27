<template>
    <div class="container">
        <div class="main">
            <router-view :swipeList="swipeList"></router-view>
        </div>
        <footer>
            <ul>
                <router-link tag="li" active-class="active" to="/start">
                    <i class="iconfont icon-shouye"></i>
                    <span>首页</span>
                </router-link>
                <router-link tag="li" active-class="active" to="/reservation">
                    <i class="iconfont icon-diandan"></i>
                    <span>点单</span>
                </router-link>
                <router-link tag="li" active-class="active" to="/variety">
                    <i class="iconfont icon-mall"></i>
                    <span>百货</span>
                </router-link>
                <router-link tag="li" active-class="active" to="/order">
                    <i class="iconfont icon-xiadan"></i>
                    <span>订单</span>
                </router-link>
                 <router-link tag="li" active-class="active" to="/profile">
                    <i class="iconfont icon-wode"></i>
                    <span>我的</span>
                </router-link>
            </ul>
        </footer>
    </div>

</template>

<script>

import http from '@u/http'
export default {
    components:{
       
    },
    data(){
        return {
            swipeList:[]
        }
    },
    async mounted(){
        let result = await http.get("data/api/service-portal/vip/openapi/home?location=116.289833%2C40.096749&shopId=333")
        this.swipeList = result.data.bannerVos
        console.log(result)
    }
}
</script>


<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
@import '~@a/iconfont/iconfont.css'
@import '~@a/stylus/ellipsis.styl'
.container
    height 100%
    display flex
    flex-direction column
    .main
        flex 1
    footer
        height .5rem
        ul
            height 100%
            display flex
            border_1px(1px 0 0 0)
            li
                flex 1
                display flex
                flex-direction column
                justify-content center
                align-items center
                color #666
                    span
                        font-size .12rem
                        transform scale(0.9)
                    &.active
                        color #cc4c43
                        svg
                            g
                                fill #cc4c43
</style>

