<template>
    <ul class="container" v-show="products.length>0">
        <li>
            <div class="orderTitle">
                <span>喜茶百货</span>
                <span>支付成功></span>
            </div>
            <p class="orderDate">2020-10-01 17:41:40</p>
            <div class="orderImgs">
                <div class="imgCon">
                    <img v-for="orderGoods in products" :src="orderGoods.thumbnail" alt="" :key="orderGoods.id">
                </div>
                <span class="orderTotal">¥ {{total}}</span>
            </div>
            <div class="orderAgain"><span>再来一单</span></div>
        </li>
    </ul>
</template>

<script>
import {mapState,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState("cart",{
            products: 'items'
        }),
        ...mapGetters('cart', ['total']),
    },
}
</script>

<style lang="stylus" scoped>
.container
    height 100%
    background-color #f6f6f6
    overflow-y scroll
    li 
        padding 0.2rem
        margin-bottom 0.12rem
        background-color #fff
        .orderTitle 
            display flex
            justify-content space-between
            span:first-child 
                font-size 0.18rem
                color #343434
                font-weight bold
            span:nth-child(2)
                font-size 0.14rem
                color #5d5d5d
        .orderDate 
            color #9c9c9c
            font-size 0.12rem
        .orderImgs 
            display flex
            justify-content space-between
            align-items center
            height 1rem
            .imgCon 
                flex 1
                img 
                    width 0.68rem
                    height 0.68rem
                    margin-right 0.16rem
            .orderTotal
                width 0.72rem
                text-align center
                font-size 0.16rem
                color #353535
                font-weight bold
        .orderAgain 
            display flex 
            justify-content flex-end
            span 
                width 1.2rem
                height 0.44rem
                line-height 0.44rem
                background-color #ffffff
                border 2px solid #daa875
                border-radius 0.04rem
                color #daa875
                font-size 0.16rem
                text-align center
</style>