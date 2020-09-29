<template>
    <div class="goods_icon">
        <div class="goods-info" v-for="goods in data" :key="goods.wxItem.id" @click='clickHandler'>
            <h2><img :src="goods.wxItem.thumbnail" alt=""></h2>
            <h3>{{ goods.wxItem.name }}</h3>
            <p class="shoped"><span>{{ goods.wxItem.itemSalesVolume }}</span>人已购买</p>
            <div class="money"><span>￥{{ goods.wxItem.salePrice | price}}</span><i class="yo-ico">&#xe6b8;</i></div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['data'],

        mounted(){
            
            // console.log(this.data);
        },
        methods:{
            clickHandler(){
                this.$router.push('/details')
            }
        },
        filters:{
            price(value){
                return value.toString().slice(0,-2) + ".00"
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/ellipsis.styl'

.goods_icon
    display flex
    flex-wrap wrap
    padding-top .15rem
    .goods-info
        width 1.6rem
        background-color rgb(255,255,255)
        margin-left .18rem
        margin-bottom .15rem
        // overflow-y scroll
        
        img 
            width 100%
        h3
            font-size .16rem
            font-weight 600
            color rgb(52,52,52)
            line-height .22rem
            padding-left .15rem
            margin-top .2rem
            ellipsis()
        .shoped
            color rgb(181,181,181)
            font-size .12rem
            font-weight 500
            padding-left .15rem
        .money
            color rgb(219,168,113)
            display flex
            font-size .18rem
            font-weight bold
            justify-content space-between
            margin-top .08rem
            padding 0 .15rem
            i
                color rgb(219,168,113)
                font-size .2rem
                margin-top -0.03rem
                font-weight 500
</style>