<template>
    <div class="around_icon">
        <div class="around_del" v-for="item in data" :key='item.wxItem.id' @click='clickHandler'>
            <img :src="item.wxItem.thumbnail" alt="">
            <div class="info">
                <h2>{{item.wxItem.name}}</h2>
                <p>￥{{ item.wxItem.salePrice | price}}</p>
                <div class="but">立即购买</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['data'],

        methods:{
            clickHandler(){
                this.$router.push('/details')
            }
        },
        filters:{
            price(value){
                return value.toString().slice(0,-2) + ".00"
            }
        },
    }
</script>

<style lang="stylus" scoped>
.around_del
    display flex
    background-color #fff
    margin-left .08rem
    width 100%
    padding 0.1rem 0
    padding-left .1rem
    margin-bottom .1rem
    img 
        width 45%
        height 1.5rem
    .info
        margin-left .20rem
        margin-top .18rem
        h2
            font-size .18rem
            font-weight 500
            color rgb(0,0,0)
            margin-bottom .14rem
        p
            font-size .18rem
            font-weight bold
            margin-bottom .14rem
        .but
            font-size .13rem
            width .8rem
            height .25rem
            text-align center
            border-radius .16rem
            background-color rgb(219,168,113)
            line-height .25rem
            color #fff
            font-weight 500
            

</style>